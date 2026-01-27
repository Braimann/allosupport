# 🔧 Corriger l'erreur Firebase en local (Windows)

## ❌ Erreur actuelle
```
Erreur de configuration Firebase. Vérifiez que .env.local contient toutes les variables NEXT_PUBLIC_FIREBASE_* et que l'application a été reconstruite (npm run build).
```

## ✅ Solution rapide

### Étape 1 : Arrêter le serveur
Dans le terminal où `npm run dev` tourne, appuyez sur `Ctrl + C`

### Étape 2 : Vérifier le fichier .env.local

Ouvrez PowerShell dans le dossier du projet et exécutez :

```powershell
# Vérifier que le fichier existe
Test-Path .env.local

# Afficher le contenu (premières lignes)
Get-Content .env.local | Select-Object -First 5
```

**Le fichier doit contenir :**
```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBODz6Jyyd1G4ZlPlo5CBQKtYAJNwF-LVs
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=supporttechnique-84e72.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=supporttechnique-84e72
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=supporttechnique-84e72.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=60760511085
NEXT_PUBLIC_FIREBASE_APP_ID=1:60760511085:web:8ccd92704ef4c6eb03a564
NEXT_PUBLIC_ADMIN_EMAIL=brahim.boumai97@gmail.com
```

### Étape 3 : Nettoyer le cache

```powershell
# Supprimer le dossier .next
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue

# Supprimer le cache node_modules
Remove-Item -Recurse -Force node_modules\.cache -ErrorAction SilentlyContinue
```

### Étape 4 : Redémarrer le serveur

```powershell
npm run dev
```

## 🔍 Vérifications supplémentaires

### Vérifier le format du fichier .env.local

Le fichier doit :
- ✅ Être à la racine du projet (même niveau que `package.json`)
- ✅ Avoir l'encodage UTF-8 (pas Windows-1252)
- ✅ Ne pas avoir d'espaces avant/après le `=`
- ✅ Ne pas avoir de guillemets autour des valeurs

### Vérifier que les variables sont chargées

Créez un fichier de test temporaire `test-env.js` :

```javascript
// test-env.js
console.log('API_KEY:', process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? 'OK' : 'MANQUANT');
console.log('AUTH_DOMAIN:', process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ? 'OK' : 'MANQUANT');
```

Puis exécutez :
```powershell
node -r dotenv/config test-env.js dotenv_config_path=.env.local
```

**Note :** Cette commande nécessite `dotenv`. Si elle ne fonctionne pas, ce n'est pas grave - Next.js charge automatiquement `.env.local`.

## 🚨 Si l'erreur persiste

### Solution 1 : Recréer .env.local

```powershell
# Supprimer l'ancien fichier
Remove-Item .env.local -ErrorAction SilentlyContinue

# Créer un nouveau fichier
@"
# Firebase Configuration - supporttechnique-84e72
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyBODz6Jyyd1G4ZlPlo5CBQKtYAJNwF-LVs
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=supporttechnique-84e72.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=supporttechnique-84e72
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=supporttechnique-84e72.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=60760511085
NEXT_PUBLIC_FIREBASE_APP_ID=1:60760511085:web:8ccd92704ef4c6eb03a564

# Admin Email
NEXT_PUBLIC_ADMIN_EMAIL=brahim.boumai97@gmail.com
"@ | Out-File -FilePath .env.local -Encoding utf8
```

### Solution 2 : Vérifier l'encodage

Le fichier `.env.local` doit être en UTF-8. Pour le vérifier :

```powershell
# Vérifier l'encodage
Get-Content .env.local -Encoding Byte | Select-Object -First 3
```

Si nécessaire, recréez le fichier avec l'encodage UTF-8 (voir Solution 1).

### Solution 3 : Réinstaller les dépendances

```powershell
# Supprimer node_modules et package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json -ErrorAction SilentlyContinue

# Réinstaller
npm install

# Relancer
npm run dev
```

## ✅ Vérification finale

Après avoir redémarré le serveur :

1. Ouvrez http://localhost:3000/admin/login
2. Ouvrez la console du navigateur (F12)
3. Vous ne devriez **plus** voir :
   - `Firebase configuration error`
   - `Firebase auth is not initialized`

4. La page de login doit s'afficher normalement

## 📋 Checklist

- [ ] `.env.local` existe à la racine du projet
- [ ] `.env.local` contient toutes les variables `NEXT_PUBLIC_FIREBASE_*`
- [ ] Pas d'espaces avant/après le `=`
- [ ] Pas de guillemets autour des valeurs
- [ ] Encodage UTF-8
- [ ] Cache `.next` supprimé
- [ ] Serveur redémarré (`Ctrl + C` puis `npm run dev`)
