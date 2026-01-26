# 🚀 Guide de Déploiement - AlloSupport.ma (Linux + Nginx + PM2)

Guide complet pour déployer AlloSupport.ma sur un serveur Linux avec Nginx et PM2.

## 📋 Prérequis

- Serveur Linux (Ubuntu 20.04+ recommandé)
- Accès root ou sudo
- Domaine `allosupport.ma` pointant vers l'IP du serveur
- Ports ouverts : 80, 443, 22

---

## 1️⃣ Installation des Prérequis

### Mettre à jour le système
```bash
sudo apt update && sudo apt upgrade -y
```

### Installer Node.js 18+ (via NodeSource)
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
node --version  # Vérifier (doit être v18+)
npm --version
```

### Installer PM2 globalement
```bash
sudo npm install -g pm2
pm2 --version
```

### Installer Nginx
```bash
sudo apt install -y nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Installer Git
```bash
sudo apt install -y git
```

---

## 2️⃣ Cloner et Configurer le Projet

### Créer un utilisateur pour l'application (recommandé)
```bash
sudo adduser allosupport
sudo usermod -aG sudo allosupport
su - allosupport
```

### Cloner le repository
```bash
cd /home/allosupport
git clone https://github.com/Braimann/allosupport.git
cd allosupport
```

### Installer les dépendances
```bash
npm install
```

### Créer le fichier .env.local
```bash
nano .env.local
```

Collez votre configuration Firebase :
```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBODz6Jyyd1G4ZlPlo5CBQKtYAJNwF-LVs
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=supporttechnique-84e72.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=supporttechnique-84e72
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=supporttechnique-84e72.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=60760511085
NEXT_PUBLIC_FIREBASE_APP_ID=1:60760511085:web:8ccd92704ef4c6eb03a564
NEXT_PUBLIC_ADMIN_EMAIL=brahim.boumai97@gmail.com
```

Sauvegarder : `Ctrl+O`, `Enter`, `Ctrl+X`

---

## 3️⃣ Build de Production

### Build l'application
```bash
npm run build
```

Vérifier que le build est réussi (pas d'erreurs).

---

## 4️⃣ Configuration PM2

### Créer le fichier de configuration PM2
```bash
nano ecosystem.config.js
```

Contenu :
```javascript
module.exports = {
  apps: [{
    name: 'allosupport',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    cwd: '/home/allosupport/allosupport',
    instances: 2, // Nombre d'instances (2 pour production)
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/home/allosupport/allosupport/logs/pm2-error.log',
    out_file: '/home/allosupport/allosupport/logs/pm2-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    autorestart: true,
    max_memory_restart: '1G',
    watch: false
  }]
};
```

### Créer le dossier logs
```bash
mkdir -p logs
```

### Démarrer avec PM2
```bash
pm2 start ecosystem.config.js
```

### Sauvegarder la configuration PM2
```bash
pm2 save
pm2 startup
# Copier la commande générée et l'exécuter (avec sudo)
```

### Vérifier le statut
```bash
pm2 status
pm2 logs allosupport
```

---

## 5️⃣ Configuration Nginx

### Créer la configuration Nginx
```bash
sudo nano /etc/nginx/sites-available/allosupport.ma
```

Contenu :
```nginx
# Redirection HTTP vers HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name allosupport.ma www.allosupport.ma;
    
    # Let's Encrypt challenge
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }
    
    # Redirection vers HTTPS
    location / {
        return 301 https://$server_name$request_uri;
    }
}

# Configuration HTTPS
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name allosupport.ma www.allosupport.ma;

    # SSL Configuration (sera configuré avec Certbot)
    ssl_certificate /etc/letsencrypt/live/allosupport.ma/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/allosupport.ma/privkey.pem;
    
    # SSL Security
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

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

### Activer le site
```bash
sudo ln -s /etc/nginx/sites-available/allosupport.ma /etc/nginx/sites-enabled/
sudo nginx -t  # Tester la configuration
```

### Redémarrer Nginx (sans SSL pour l'instant)
```bash
sudo systemctl restart nginx
```

---

## 6️⃣ Installation SSL avec Let's Encrypt

### Installer Certbot
```bash
sudo apt install -y certbot python3-certbot-nginx
```

### Obtenir le certificat SSL
```bash
sudo certbot --nginx -d allosupport.ma -d www.allosupport.ma
```

Suivre les instructions :
- Email : votre email
- Accepter les termes
- Redirection HTTP → HTTPS : Oui

### Renouvellement automatique
```bash
sudo certbot renew --dry-run  # Test
```

Le renouvellement est automatique via cron.

---

## 7️⃣ Vérification et Tests

### Vérifier PM2
```bash
pm2 status
pm2 logs allosupport --lines 50
```

### Vérifier Nginx
```bash
sudo systemctl status nginx
sudo nginx -t
```

### Tester l'application
```bash
curl http://localhost:3000
```

### Vérifier depuis l'extérieur
Ouvrir dans un navigateur : `https://allosupport.ma`

---

## 8️⃣ Commandes de Maintenance

### Redémarrer l'application
```bash
pm2 restart allosupport
```

### Redémarrer Nginx
```bash
sudo systemctl restart nginx
```

### Voir les logs en temps réel
```bash
pm2 logs allosupport
```

### Voir les logs Nginx
```bash
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### Mettre à jour le code
```bash
cd /home/allosupport/allosupport
git pull
npm install
npm run build
pm2 restart allosupport
```

### Vérifier l'utilisation des ressources
```bash
pm2 monit
```

---

## 9️⃣ Optimisations

### Augmenter les limites Node.js
```bash
sudo nano /etc/security/limits.conf
```

Ajouter :
```
allosupport soft nofile 65536
allosupport hard nofile 65536
```

### Optimiser Nginx
```bash
sudo nano /etc/nginx/nginx.conf
```

Dans `http {`, ajouter :
```nginx
worker_processes auto;
worker_connections 1024;

# Cache
proxy_cache_path /var/cache/nginx levels=1:2 keys_zone=nextjs_cache:10m max_size=1g inactive=60m use_temp_path=off;
```

---

## 🔟 Monitoring et Backup

### Monitoring PM2
```bash
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
```

### Backup de la base de données Firebase
Les données Firebase sont dans le cloud, mais vous pouvez exporter :
- Via Firebase Console → Firestore → Export
- Ou via script automatisé (à créer si nécessaire)

---

## 🆘 Dépannage

### L'application ne démarre pas
```bash
pm2 logs allosupport --err
cd /home/allosupport/allosupport
npm run build  # Rebuild
pm2 restart allosupport
```

### Erreur 502 Bad Gateway
```bash
# Vérifier que PM2 tourne
pm2 status

# Vérifier que le port 3000 écoute
sudo netstat -tlnp | grep 3000

# Vérifier les logs Nginx
sudo tail -f /var/log/nginx/error.log
```

### Erreur de permissions
```bash
sudo chown -R allosupport:allosupport /home/allosupport/allosupport
```

### Redémarrer tout
```bash
pm2 restart allosupport
sudo systemctl restart nginx
```

---

## 📝 Checklist de Déploiement

- [ ] Node.js 18+ installé
- [ ] PM2 installé et configuré
- [ ] Nginx installé et configuré
- [ ] `.env.local` créé avec les bonnes valeurs
- [ ] Build de production réussi
- [ ] PM2 démarre l'application
- [ ] Nginx proxy vers localhost:3000
- [ ] SSL configuré avec Let's Encrypt
- [ ] Site accessible sur https://allosupport.ma
- [ ] PM2 startup configuré (redémarrage auto)
- [ ] Logs configurés et accessibles

---

## 🎯 Commandes Rapides (Résumé)

```bash
# Démarrage
cd /home/allosupport/allosupport
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# Mise à jour
git pull
npm install
npm run build
pm2 restart allosupport

# Logs
pm2 logs allosupport
sudo tail -f /var/log/nginx/error.log

# Status
pm2 status
sudo systemctl status nginx
```

---

**✅ Votre application est maintenant déployée sur https://allosupport.ma !**
