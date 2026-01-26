# 🔧 Configuration .env.local sur le Serveur Linux

## ❌ Erreur Actuelle

```
Firebase: Error (auth/invalid-api-key).
Build error occurred
Error: Failed to collect page data for /sitemap.xml
```

**Cause :** Le fichier `.env.local` n'existe pas ou n'est pas correctement configuré sur le serveur.

---

## ✅ Solution : Créer `.env.local` sur le Serveur

### Étape 1 : Se connecter au serveur

```bash
ssh brahim@supportallo
cd ~/support/allosupport
```

### Étape 2 : Créer le fichier `.env.local`

```bash
nano .env.local
```

### Étape 3 : Coller la configuration Firebase

**Copiez-collez exactement ce contenu :**

```env
# Firebase Configuration - supporttechnique-84e72
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBODz6Jyyd1G4ZlPlo5CBQKtYAJNwF-LVs
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=supporttechnique-84e72.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=supporttechnique-84e72
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=supporttechnique-84e72.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=60760511085
NEXT_PUBLIC_FIREBASE_APP_ID=1:60760511085:web:8ccd92704ef4c6eb03a564

# Admin Email
NEXT_PUBLIC_ADMIN_EMAIL=brahim.boumai97@gmail.com
```

**Sauvegarder :**
- `Ctrl+O` puis `Enter`
- `Ctrl+X` pour quitter

### Étape 4 : Vérifier que le fichier existe

```bash
ls -la .env.local
cat .env.local
```

Vous devriez voir le contenu du fichier.

### Étape 5 : Rebuild l'application

```bash
npm run build
```

Le build devrait maintenant réussir ! ✅

---

## 🔍 Vérification

### Vérifier les variables d'environnement

```bash
# Vérifier que les variables sont chargées (pendant le build)
npm run build 2>&1 | grep -i firebase
```

### Tester l'application

```bash
# Démarrer en mode production
npm start

# Ou avec PM2
pm2 restart allosupport
```

---

## 🚨 Si l'erreur persiste

### 1. Vérifier le chemin du fichier

Le fichier `.env.local` doit être à la **racine du projet** :

```bash
pwd
# Doit afficher : /home/brahim/support/allosupport

ls -la | grep env
# Doit afficher : .env.local
```

### 2. Vérifier les permissions

```bash
chmod 600 .env.local
ls -la .env.local
# Doit afficher : -rw------- (lecture/écriture pour le propriétaire uniquement)
```

### 3. Vérifier le format du fichier

Le fichier doit être en format Unix (pas Windows) :

```bash
file .env.local
# Ne doit pas contenir "CRLF" ou "Windows"
```

Si nécessaire, convertir :

```bash
dos2unix .env.local
```

### 4. Vérifier qu'il n'y a pas d'espaces

```bash
cat -A .env.local
# Vérifier qu'il n'y a pas d'espaces en fin de ligne
```

### 5. Rebuild complet

```bash
# Nettoyer le cache
rm -rf .next
rm -rf node_modules/.cache

# Rebuild
npm run build
```

---

## 📝 Commandes Rapides (Copier-Coller)

```bash
# 1. Aller dans le dossier du projet
cd ~/support/allosupport

# 2. Créer .env.local
cat > .env.local << 'EOF'
# Firebase Configuration - supporttechnique-84e72
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBODz6Jyyd1G4ZlPlo5CBQKtYAJNwF-LVs
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=supporttechnique-84e72.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=supporttechnique-84e72
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=supporttechnique-84e72.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=60760511085
NEXT_PUBLIC_FIREBASE_APP_ID=1:60760511085:web:8ccd92704ef4c6eb03a564

# Admin Email
NEXT_PUBLIC_ADMIN_EMAIL=brahim.boumai97@gmail.com
EOF

# 3. Vérifier
cat .env.local

# 4. Rebuild
npm run build
```

---

## ✅ Checklist

- [ ] Fichier `.env.local` créé à la racine du projet
- [ ] Toutes les variables Firebase sont présentes
- [ ] Pas d'espaces en fin de ligne
- [ ] Format Unix (pas Windows)
- [ ] Permissions correctes (`chmod 600`)
- [ ] Build réussi (`npm run build`)
- [ ] Application démarre correctement

---

## 🎯 Après Configuration

Une fois `.env.local` configuré :

1. **Rebuild :**
   ```bash
   npm run build
   ```

2. **Redémarrer PM2 :**
   ```bash
   pm2 restart allosupport
   ```

3. **Vérifier les logs :**
   ```bash
   pm2 logs allosupport --lines 50
   ```

4. **Tester le site :**
   - Ouvrir `https://allosupport.ma` dans le navigateur
   - Vérifier que le sitemap fonctionne : `https://allosupport.ma/sitemap.xml`

---

**🎉 Une fois terminé, votre application devrait fonctionner correctement avec Firebase !**
