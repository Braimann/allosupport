# 🔥 Configuration Firebase pour MarocTech Solutions

## Étape 1: Créer un projet Firebase

1. Allez sur [Firebase Console](https://console.firebase.google.com)
2. Cliquez sur **"Ajouter un projet"**
3. Nommez-le `maroctech-solutions` (ou autre)
4. Désactivez Google Analytics si vous n'en avez pas besoin
5. Cliquez sur **"Créer le projet"**

## Étape 2: Configurer l'application Web

1. Dans votre projet, cliquez sur l'icône **Web** (</>)
2. Nommez l'application `maroctech-web`
3. Copiez les valeurs de `firebaseConfig`

## Étape 3: Créer le fichier .env.local

Créez un fichier `.env.local` à la racine du projet avec vos valeurs :

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSy...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=votre-projet.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=votre-projet-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=votre-projet.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef

NEXT_PUBLIC_ADMIN_EMAIL=votre-email@example.com
```

## Étape 4: Activer Firestore Database

1. Dans Firebase Console, allez dans **"Build" > "Firestore Database"**
2. Cliquez sur **"Créer une base de données"**
3. Choisissez **"Démarrer en mode test"** (pour commencer)
4. Sélectionnez un emplacement (ex: `eur3` pour Europe)

### Règles Firestore (pour la production)

Allez dans Firestore > **Règles** et collez :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Blog posts: lecture publique, écriture authentifiée
    match /blog_posts/{postId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Étape 5: Activer Firebase Storage

1. Allez dans **"Build" > "Storage"**
2. Cliquez sur **"Commencer"**
3. Choisissez **"Démarrer en mode test"**

### Règles Storage (pour la production)

Allez dans Storage > **Règles** et collez :

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /blog/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Étape 6: Activer l'authentification

1. Allez dans **"Build" > "Authentication"**
2. Cliquez sur **"Commencer"**
3. Dans **"Sign-in method"**, activez **"Adresse e-mail/Mot de passe"**
4. Allez dans l'onglet **"Users"** et cliquez sur **"Ajouter un utilisateur"**
5. Créez votre compte admin avec l'email défini dans `NEXT_PUBLIC_ADMIN_EMAIL`

## Étape 7: Redémarrer le serveur

```bash
npm run dev
```

## Utilisation

### Accéder à l'admin
- URL: `http://localhost:3002/admin/login`
- Connectez-vous avec l'email admin créé

### Gérer les articles
- **Dashboard**: `/admin` - Liste des articles
- **Créer**: `/admin/posts/new` - Nouvel article
- **Modifier**: `/admin/posts/[id]` - Éditer un article

### Structure Firestore

Collection: `blog_posts`
```json
{
  "slug": "mon-article",
  "title": "Titre de l'article",
  "excerpt": "Résumé court",
  "content": "<p>Contenu HTML...</p>",
  "category": "Dépannage",
  "categoryColor": "bg-blue-500",
  "imageUrl": "https://...",
  "imageAlt": "Description image",
  "metaDescription": "Pour SEO",
  "keywords": ["mot1", "mot2"],
  "author": "MarocTech Solutions",
  "readTime": "5 min de lecture",
  "published": true,
  "createdAt": Timestamp,
  "updatedAt": Timestamp
}
```

## ISR (Incremental Static Regeneration)

Les pages du blog sont régénérées automatiquement toutes les **60 secondes**.
Vous n'avez pas besoin de rebuild le site après avoir ajouté un article !

## Dépannage

### "Permission denied"
- Vérifiez les règles Firestore et Storage
- Assurez-vous d'être connecté avec le bon email admin

### "Firebase app not initialized"
- Vérifiez que `.env.local` contient toutes les variables
- Redémarrez le serveur (`npm run dev`)

### Les articles ne s'affichent pas
- Vérifiez que `published: true` dans Firestore
- Attendez 60 secondes pour l'ISR
