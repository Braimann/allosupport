# ⚡ Commandes Rapides de Déploiement - AlloSupport.ma

## 📋 Commandes Essentielles (Copier-Coller)

### 1. Installation Initiale (Première fois)

```bash
# Mettre à jour le système
sudo apt update && sudo apt upgrade -y

# Installer Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Installer PM2
sudo npm install -g pm2

# Installer Nginx
sudo apt install -y nginx

# Installer Git
sudo apt install -y git

# Créer utilisateur
sudo adduser allosupport
sudo usermod -aG sudo allosupport
su - allosupport

# Cloner le projet
cd /home/allosupport
git clone https://github.com/Braimann/allosupport.git
cd allosupport

# Installer dépendances
npm install

# Créer .env.local
nano .env.local
# (Coller votre configuration Firebase)

# Build
npm run build

# Démarrer avec PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup
# (Exécuter la commande générée avec sudo)

# Configurer Nginx
sudo nano /etc/nginx/sites-available/allosupport.ma
# (Copier la config depuis DEPLOYMENT_GUIDE.md)

sudo ln -s /etc/nginx/sites-available/allosupport.ma /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Installer SSL
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d allosupport.ma -d www.allosupport.ma
```

---

### 2. Mise à Jour (Après modifications)

```bash
cd /home/allosupport/allosupport
git pull
npm install
npm run build
pm2 restart allosupport
```

**OU utiliser le script automatique :**
```bash
chmod +x deploy.sh
./deploy.sh
```

---

### 3. Commandes de Maintenance

```bash
# Voir les logs
pm2 logs allosupport

# Redémarrer
pm2 restart allosupport

# Status
pm2 status

# Monitoring
pm2 monit

# Redémarrer Nginx
sudo systemctl restart nginx

# Vérifier Nginx
sudo nginx -t
```

---

### 4. Dépannage

```bash
# Vérifier que l'app tourne
pm2 status
curl http://localhost:3000

# Voir les erreurs
pm2 logs allosupport --err

# Rebuild si nécessaire
npm run build
pm2 restart allosupport

# Vérifier Nginx
sudo tail -f /var/log/nginx/error.log
```

---

## 🔗 Fichiers de Configuration

- **PM2** : `ecosystem.config.js`
- **Nginx** : `/etc/nginx/sites-available/allosupport.ma`
- **Environment** : `.env.local` (ne pas commiter !)
- **Script déploiement** : `deploy.sh`

---

## 📝 Notes Importantes

1. **Ne jamais commiter `.env.local`** - Il contient vos secrets Firebase
2. **PM2 redémarre automatiquement** après un reboot grâce à `pm2 startup`
3. **SSL se renouvelle automatiquement** via Certbot cron
4. **Port 3000** doit être accessible uniquement depuis localhost (Nginx proxy)

---

**✅ Guide complet dans `DEPLOYMENT_GUIDE.md`**
