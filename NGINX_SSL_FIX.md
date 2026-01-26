# 🔧 Solution : Erreur Certificat SSL Nginx

## Problème
```
cannot load certificate "/etc/letsencrypt/live/allosupport.ma/fullchain.pem": 
BIO_new_file() failed (SSL: error:80000002:system library::No such file or directory)
```

**Cause :** Le certificat SSL n'existe pas encore, mais Nginx essaie de le charger.

---

## ✅ Solution en 3 étapes

### Étape 1 : Configuration Nginx temporaire (HTTP seulement)

Modifiez la configuration Nginx pour retirer temporairement les références SSL :

```bash
sudo nano /etc/nginx/sites-available/allosupport.ma
```

**Remplacez le contenu par :**

```nginx
# Configuration HTTP temporaire (avant SSL)
server {
    listen 80;
    listen [::]:80;
    server_name allosupport.ma www.allosupport.ma;

    # Let's Encrypt challenge (nécessaire pour Certbot)
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Gzip Compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;

    # Proxy vers Next.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Cache statique
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 60m;
        add_header Cache-Control "public, immutable";
    }

    # Favicon et robots.txt
    location ~* \.(ico|jpg|jpeg|png|gif|svg|webp|woff|woff2|ttf|eot)$ {
        proxy_pass http://localhost:3000;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

**Tester et redémarrer :**
```bash
sudo nginx -t
sudo systemctl restart nginx
```

---

### Étape 2 : Vérifier que le domaine pointe vers le serveur

**Important :** Le domaine `allosupport.ma` doit pointer vers l'IP de votre serveur avant de générer le certificat SSL.

Vérifier :
```bash
# Depuis votre machine locale
nslookup allosupport.ma
# ou
dig allosupport.ma

# L'IP retournée doit être celle de votre serveur
```

**Si le domaine ne pointe pas encore vers le serveur :**
- Configurez les DNS de votre domaine pour pointer vers l'IP du serveur
- Attendez la propagation DNS (5-30 minutes)

---

### Étape 3 : Générer le certificat SSL avec Certbot

**Installer Certbot (si pas déjà fait) :**
```bash
sudo apt update
sudo apt install -y certbot python3-certbot-nginx
```

**Générer le certificat SSL :**
```bash
sudo certbot --nginx -d allosupport.ma -d www.allosupport.ma
```

**Suivre les instructions :**
1. **Email** : Entrez votre email (ex: brahim.boumai97@gmail.com)
2. **Accepter les termes** : Tapez `A` puis `Y`
3. **Partager l'email** : `Y` ou `N` (recommandé `N`)
4. **Redirection HTTP → HTTPS** : Tapez `2` (Recommandé : rediriger tout le trafic HTTP vers HTTPS)

**Certbot va automatiquement :**
- Générer les certificats SSL
- Modifier la configuration Nginx pour ajouter HTTPS
- Configurer la redirection HTTP → HTTPS

---

### Étape 4 : Vérifier que tout fonctionne

**Tester la configuration Nginx :**
```bash
sudo nginx -t
```

**Redémarrer Nginx :**
```bash
sudo systemctl restart nginx
```

**Vérifier le statut :**
```bash
sudo systemctl status nginx
```

**Tester depuis le navigateur :**
- Ouvrir : `https://allosupport.ma`
- Vérifier que le cadenas SSL est présent
- Vérifier que la redirection HTTP → HTTPS fonctionne

---

## 🔍 Dépannage

### Erreur : "Failed to obtain certificate"

**Causes possibles :**
1. **DNS non configuré** : Le domaine ne pointe pas vers le serveur
   ```bash
   # Vérifier
   dig allosupport.ma
   ```

2. **Port 80 bloqué** : Le pare-feu bloque le port 80
   ```bash
   # Ouvrir le port 80
   sudo ufw allow 80/tcp
   sudo ufw allow 443/tcp
   ```

3. **Nginx ne répond pas** : Vérifier que Nginx tourne
   ```bash
   sudo systemctl status nginx
   curl http://localhost
   ```

### Erreur : "Domain does not point to this server"

**Solution :**
- Vérifier les DNS de votre domaine
- Attendre la propagation DNS (peut prendre jusqu'à 48h, généralement 5-30 min)

### Vérifier les certificats existants

```bash
# Lister les certificats
sudo certbot certificates

# Voir les détails d'un certificat
sudo certbot certificates -d allosupport.ma
```

### Renouveler manuellement (si nécessaire)

```bash
sudo certbot renew
```

---

## 📝 Configuration finale après Certbot

Après avoir exécuté `certbot --nginx`, votre fichier `/etc/nginx/sites-available/allosupport.ma` devrait ressembler à :

```nginx
# Redirection HTTP vers HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name allosupport.ma www.allosupport.ma;
    
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }
    
    location / {
        return 301 https://$server_name$request_uri;
    }
}

# Configuration HTTPS
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name allosupport.ma www.allosupport.ma;

    ssl_certificate /etc/letsencrypt/live/allosupport.ma/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/allosupport.ma/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    # ... reste de la configuration ...
}
```

**Certbot a automatiquement ajouté les lignes SSL !**

---

## ✅ Checklist finale

- [ ] Configuration Nginx en HTTP seulement fonctionne (`sudo nginx -t` OK)
- [ ] Le domaine pointe vers le serveur (`dig allosupport.ma`)
- [ ] Certbot installé (`certbot --version`)
- [ ] Certificat SSL généré (`sudo certbot certificates`)
- [ ] HTTPS fonctionne (`https://allosupport.ma` avec cadenas)
- [ ] Redirection HTTP → HTTPS fonctionne

---

**🎉 Une fois terminé, votre site sera accessible en HTTPS avec un certificat SSL valide !**
