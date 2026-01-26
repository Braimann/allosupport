# 🔒 Règles Firebase - Mode Production

## ⚠️ IMPORTANT : Mode Production

Vous avez créé Firestore en **mode production**, ce qui signifie que les règles par défaut **bloquent tout**. Vous devez configurer les règles manuellement.

---

## 📋 RÈGLES FIRESTORE (Production)

### Copiez-collez ce code dans Firebase Console > Firestore Database > Règles :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Blog posts (Cluster Posts): lecture publique, écriture authentifiée
    match /blog_posts/{postId} {
      // Tout le monde peut lire les articles publiés
      allow read: if true;
      
      // Seuls les utilisateurs authentifiés peuvent créer/modifier/supprimer
      allow create: if request.auth != null;
      allow update: if request.auth != null;
      allow delete: if request.auth != null;
    }
    
    // Services (Pillar Pages): lecture publique, écriture authentifiée
    match /services/{serviceId} {
      // Tout le monde peut lire les services publiés
      allow read: if true;
      
      // Seuls les utilisateurs authentifiés peuvent créer/modifier/supprimer
      allow create: if request.auth != null;
      allow update: if request.auth != null;
      allow delete: if request.auth != null;
    }
  }
}
```

### Instructions :
1. Allez dans **Firebase Console** > Votre projet
2. **Firestore Database** > Onglet **"Règles"**
3. **Supprimez** tout le code existant
4. **Collez** le code ci-dessus
5. Cliquez sur **"Publier"**
6. Attendez quelques secondes

✅ **Résultat:** Les règles sont appliquées !

---

## 📦 RÈGLES STORAGE (Production)

### Copiez-collez ce code dans Firebase Console > Storage > Règles :

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Blog images: lecture publique, écriture authentifiée
    match /blog/{allPaths=**} {
      // Tout le monde peut lire les images
      allow read: if true;
      
      // Seuls les utilisateurs authentifiés peuvent uploader/supprimer
      allow write: if request.auth != null;
    }
    
    // Service images: lecture publique, écriture authentifiée
    match /services/{allPaths=**} {
      // Tout le monde peut lire les images
      allow read: if true;
      
      // Seuls les utilisateurs authentifiés peuvent uploader/supprimer
      allow write: if request.auth != null;
    }
  }
}
```

### Instructions :
1. Allez dans **Firebase Console** > Votre projet
2. **Storage** > Onglet **"Règles"**
3. **Supprimez** tout le code existant
4. **Collez** le code ci-dessus
5. Cliquez sur **"Publier"**

✅ **Résultat:** Les règles Storage sont appliquées !

---

## 🔐 SÉCURITÉ EN MODE PRODUCTION

### Ce que ces règles permettent :

✅ **Lecture publique :**
- Tout le monde peut lire les articles blog (`blog_posts`)
- Tout le monde peut lire les services (`services`)
- Tout le monde peut voir les images

✅ **Écriture authentifiée :**
- Seuls les admins connectés peuvent créer/modifier/supprimer
- Protection contre les modifications non autorisées

### Ce qui est bloqué :

❌ **Sans authentification :**
- Impossible de créer/modifier/supprimer des articles
- Impossible d'uploader des images
- Impossible d'accéder aux données sensibles

---

## ✅ VÉRIFICATION

### Test 1: Lecture (doit fonctionner)
1. Allez sur votre site : `http://localhost:3002/blog`
2. Les articles doivent s'afficher (même si la collection est vide)

### Test 2: Écriture (doit être bloquée sans auth)
1. Essayez de créer un article via `/admin/posts/new`
2. **Sans être connecté :** Vous serez redirigé vers `/admin/login`
3. **Après connexion :** Vous pouvez créer/modifier

### Test 3: Storage (doit fonctionner)
1. Connectez-vous à `/admin/login`
2. Créez un article et uploadez une image
3. L'image doit s'uploader correctement

---

## 🚨 SI VOUS AVEZ DES ERREURS "Permission denied"

### Erreur lors de la lecture des articles :
**Cause:** Les règles Firestore ne sont pas publiées ou incorrectes
**Solution:**
1. Vérifiez que vous avez bien collé les règles
2. Cliquez sur "Publier"
3. Attendez 10-15 secondes
4. Rafraîchissez la page

### Erreur lors de l'écriture (création article) :
**Cause:** Vous n'êtes pas connecté en tant qu'admin
**Solution:**
1. Allez sur `/admin/login`
2. Connectez-vous avec votre email admin
3. Réessayez de créer un article

### Erreur lors de l'upload d'image :
**Cause:** Les règles Storage ne sont pas publiées ou vous n'êtes pas connecté
**Solution:**
1. Vérifiez les règles Storage
2. Assurez-vous d'être connecté à `/admin/login`
3. Réessayez l'upload

---

## 📝 PROCHAINES ÉTAPES

Une fois les règles configurées :

1. ✅ **Testez la lecture** : Vérifiez que `/blog` fonctionne
2. ✅ **Testez l'admin** : Connectez-vous à `/admin/login`
3. ✅ **Créez un test** : Créez un article de test
4. ✅ **Vérifiez Storage** : Uploadez une image de test

---

**Status:** ✅ Règles production prêtes à copier-coller !

Copiez les règles ci-dessus dans Firebase Console et vous serez prêt ! 🚀
