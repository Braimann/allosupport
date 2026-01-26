# 🔥 Guide Étape par Étape - Configuration Firebase pour AlloSupport.ma

## 📋 Vue d'ensemble

Ce guide vous accompagne pas à pas pour configurer Firebase (Firestore, Storage, Auth) pour votre site AlloSupport.ma.

**Temps estimé:** 15-20 minutes

---

## ÉTAPE 1: Créer un compte Firebase

### 1.1 Accéder à Firebase Console
1. Allez sur **https://console.firebase.google.com**
2. Connectez-vous avec votre compte Google
3. Si vous n'avez pas de compte, créez-en un gratuitement

### 1.2 Créer un nouveau projet
1. Cliquez sur **"Ajouter un projet"** (ou "Add project")
2. **Nom du projet:** `allosupport-ma` (ou `allosupport`)
3. Cliquez sur **"Continuer"**
4. **Google Analytics:** Désactivez-le pour l'instant (vous pouvez l'activer plus tard)
5. Cliquez sur **"Créer le projet"**
6. Attendez 30 secondes que le projet soit créé
7. Cliquez sur **"Continuer"**

✅ **Résultat:** Votre projet Firebase est créé !

---

## ÉTAPE 2: Ajouter une application Web

### 2.1 Créer l'app Web
1. Dans votre projet Firebase, cliquez sur l'icône **Web** (`</>`)
2. **Nom de l'application:** `AlloSupport Web`
3. **Cochez** "Configurer également Firebase Hosting" (optionnel, on n'en a pas besoin pour l'instant)
4. Cliquez sur **"Enregistrer l'application"**

### 2.2 Copier la configuration
Vous verrez un code JavaScript avec `firebaseConfig`. **Copiez ces valeurs** (vous en aurez besoin) :

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "allosupport-ma.firebaseapp.com",
  projectId: "allosupport-ma",
  storageBucket: "allosupport-ma.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};
```

✅ **Important:** Gardez cette fenêtre ouverte, vous aurez besoin de ces valeurs !

---

## ÉTAPE 3: Créer le fichier .env.local

### 3.1 Créer le fichier
1. Dans votre projet (`C:\Users\lenovo\Downloads\tech`), créez un fichier nommé **`.env.local`**
2. **Attention:** Le fichier doit commencer par un point (`.env.local`)

### 3.2 Ajouter la configuration
Ouvrez `.env.local` et collez ceci (remplacez par VOS valeurs de l'étape 2.2) :

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=allosupport-ma.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=allosupport-ma
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=allosupport-ma.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef123456

# Admin Email (votre email pour accéder à /admin)
NEXT_PUBLIC_ADMIN_EMAIL=votre-email@gmail.com
```

### 3.3 Remplacer les valeurs
- Remplacez `AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXX` par votre vraie `apiKey`
- Remplacez `allosupport-ma` par votre `projectId` (si différent)
- Remplacez `123456789012` par votre vrai `messagingSenderId`
- Remplacez `abcdef123456` par votre vrai `appId`
- Remplacez `votre-email@gmail.com` par votre email (celui que vous utiliserez pour l'admin)

✅ **Sauvegardez le fichier** (Ctrl+S)

---

## ÉTAPE 4: Activer Firestore Database

### 4.1 Créer la base de données
1. Dans Firebase Console, allez dans **"Build"** (ou "Créer") > **"Firestore Database"**
2. Cliquez sur **"Créer une base de données"**
3. **Mode de démarrage:** Choisissez **"Démarrer en mode test"** (pour commencer)
4. Cliquez sur **"Suivant"**

### 4.2 Choisir l'emplacement
1. **Sélectionnez un emplacement:** Choisissez **"europe-west"** (Belgium) ou **"europe-west3"** (Frankfurt)
   - ⚠️ **Important:** Une fois choisi, vous ne pourrez plus changer !
2. Cliquez sur **"Activer"**
3. Attendez 1-2 minutes que la base soit créée

✅ **Résultat:** Firestore est activé !

### 4.3 Configurer les règles de sécurité
1. Allez dans l'onglet **"Règles"** (en haut)
2. **Remplacez** le code par ceci :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Blog posts: lecture publique, écriture authentifiée
    match /blog_posts/{postId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Services (Pillar Pages): lecture publique, écriture authentifiée
    match /services/{serviceId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

3. Cliquez sur **"Publier"**

✅ **Résultat:** Les règles sont configurées !

---

## ÉTAPE 5: Activer Firebase Storage

### 5.1 Créer le Storage
1. Dans Firebase Console, allez dans **"Build"** > **"Storage"**
2. Cliquez sur **"Commencer"**
3. **Mode de démarrage:** Choisissez **"Démarrer en mode test"**
4. Cliquez sur **"Suivant"**
5. **Emplacement:** Utilisez le même que Firestore (déjà sélectionné)
6. Cliquez sur **"Terminé"**

✅ **Résultat:** Storage est activé !

### 5.2 Configurer les règles Storage
1. Allez dans l'onglet **"Règles"**
2. **Remplacez** le code par ceci :

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Blog images: lecture publique, écriture authentifiée
    match /blog/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Service images: lecture publique, écriture authentifiée
    match /services/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

3. Cliquez sur **"Publier"**

✅ **Résultat:** Les règles Storage sont configurées !

---

## ÉTAPE 6: Activer l'Authentification

### 6.1 Activer Email/Password
1. Dans Firebase Console, allez dans **"Build"** > **"Authentication"**
2. Cliquez sur **"Commencer"**
3. Allez dans l'onglet **"Sign-in method"** (ou "Méthodes de connexion")
4. Cliquez sur **"Adresse e-mail/Mot de passe"** (Email/Password)
5. **Activez** le premier bouton (Email/Password)
6. **Désactivez** "Email link (passwordless sign-in)" (on n'en a pas besoin)
7. Cliquez sur **"Enregistrer"**

✅ **Résultat:** L'authentification email/password est activée !

### 6.2 Créer votre compte admin
1. Allez dans l'onglet **"Users"** (Utilisateurs)
2. Cliquez sur **"Ajouter un utilisateur"** (Add user)
3. **Email:** Entrez l'email que vous avez mis dans `.env.local` (`NEXT_PUBLIC_ADMIN_EMAIL`)
4. **Mot de passe:** Créez un mot de passe fort (minimum 8 caractères)
   - Exemple: `AlloSupport2024!`
5. **Désactivez** "Envoyer un email de réinitialisation du mot de passe" (optionnel)
6. Cliquez sur **"Ajouter un utilisateur"**

✅ **Résultat:** Votre compte admin est créé !

**⚠️ Important:** Notez votre email et mot de passe, vous en aurez besoin pour vous connecter à `/admin/login`

---

## ÉTAPE 7: Vérifier la configuration

### 7.1 Vérifier le fichier .env.local
Ouvrez `.env.local` et vérifiez que toutes les valeurs sont correctes :

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy... (votre vraie clé)
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=allosupport-ma.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=allosupport-ma
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=allosupport-ma.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abcdef
NEXT_PUBLIC_ADMIN_EMAIL=votre-email@gmail.com
```

### 7.2 Redémarrer le serveur
1. **Arrêtez** le serveur Next.js (Ctrl+C dans le terminal)
2. **Redémarrez** avec :
   ```bash
   npm run dev
   ```

✅ **Résultat:** Le serveur redémarre avec la nouvelle configuration !

---

## ÉTAPE 8: Tester la connexion

### 8.1 Tester l'admin
1. Allez sur **http://localhost:3002/admin/login**
2. **Email:** L'email que vous avez créé à l'étape 6.2
3. **Mot de passe:** Le mot de passe que vous avez créé
4. Cliquez sur **"Se connecter"**

✅ **Si ça fonctionne:** Vous devriez voir le dashboard admin !

❌ **Si erreur:** Vérifiez :
- Que `.env.local` contient les bonnes valeurs
- Que vous avez redémarré le serveur
- Que l'email dans `.env.local` correspond à celui créé dans Firebase Auth

### 8.2 Tester Firestore
1. Dans Firebase Console, allez dans **Firestore Database**
2. Cliquez sur **"Commencer la collection"**
3. **ID de collection:** `blog_posts`
4. **Champ:** `test` (type: string, valeur: "test")
5. Cliquez sur **"Enregistrer"**

✅ **Si ça fonctionne:** Vous devriez voir une collection `blog_posts` avec 1 document !

### 8.3 Tester Storage
1. Dans Firebase Console, allez dans **Storage**
2. Cliquez sur **"Téléverser un fichier"**
3. Choisissez une petite image
4. **Chemin:** `blog/test-image.jpg`
5. Cliquez sur **"Téléverser"**

✅ **Si ça fonctionne:** Vous devriez voir l'image dans Storage !

---

## ✅ CHECKLIST FINALE

Avant de continuer, vérifiez que tout est OK :

- [ ] Projet Firebase créé
- [ ] Application Web ajoutée
- [ ] Fichier `.env.local` créé avec toutes les valeurs
- [ ] Firestore activé avec règles configurées
- [ ] Storage activé avec règles configurées
- [ ] Authentication Email/Password activée
- [ ] Compte admin créé dans Firebase Auth
- [ ] Serveur Next.js redémarré
- [ ] Connexion admin fonctionne (`/admin/login`)
- [ ] Firestore accessible (test collection créée)
- [ ] Storage accessible (test image uploadée)

---

## 🚨 DÉPANNAGE

### Erreur: "Firebase app not initialized"
**Solution:**
- Vérifiez que `.env.local` existe et contient toutes les variables
- Redémarrez le serveur (`npm run dev`)
- Vérifiez qu'il n'y a pas d'espaces dans les valeurs de `.env.local`

### Erreur: "Permission denied" dans Firestore
**Solution:**
- Vérifiez les règles Firestore (étape 4.3)
- Assurez-vous d'être connecté avec le bon email admin

### Erreur: "User not found" lors de la connexion
**Solution:**
- Vérifiez que l'email dans `.env.local` correspond à celui dans Firebase Auth
- Vérifiez que vous avez créé l'utilisateur dans Firebase Auth (étape 6.2)

### Erreur: "Storage permission denied"
**Solution:**
- Vérifiez les règles Storage (étape 5.2)
- Assurez-vous d'être connecté avec le bon email admin

---

## 📝 PROCHAINES ÉTAPES

Une fois Firebase configuré :

1. **Créer votre premier article blog** via `/admin/posts/new`
2. **Créer votre premier service** via `/admin/services` (à créer)
3. **Tester le blog** sur `/blog`
4. **Tester les services** sur `/services`

---

## 💡 ASTUCES

- **Sauvegardez** votre fichier `.env.local` dans un endroit sûr (mais ne le partagez JAMAIS publiquement)
- **Utilisez** un mot de passe fort pour votre compte admin
- **Testez** régulièrement que tout fonctionne après chaque modification

---

**Status:** ✅ Guide complet prêt à suivre étape par étape !

Si vous avez des questions à une étape précise, dites-moi où vous en êtes et je vous aiderai ! 🚀
