# ⚠️ URGENT : Configurer les Règles Firestore pour les Tickets

## 🔴 Erreur actuelle
```
FirebaseError: Missing or insufficient permissions
```

Cette erreur signifie que les règles Firestore pour les collections `tickets` et `users` ne sont pas configurées.

---

## ✅ SOLUTION RAPIDE (5 minutes)

### Étape 1 : Ouvrir Firebase Console

1. Allez sur : **https://console.firebase.google.com/**
2. Sélectionnez votre projet : **supporttechnique-84e72**
3. Dans le menu de gauche, cliquez sur : **"Firestore Database"**
4. Cliquez sur l'onglet **"Règles"** (en haut)

### Étape 2 : Copier les règles complètes

**IMPORTANT :** Remplacez TOUT le contenu actuel par ce code complet :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Blog posts (règles existantes)
    match /blog_posts/{postId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Services (règles existantes)
    match /services/{serviceId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Collection "tickets" - NOUVELLES RÈGLES
    match /tickets/{ticketId} {
      // Lecture : utilisateur peut lire ses propres tickets OU admin peut lire tous
      allow read: if request.auth != null && (
        resource.data.userId == request.auth.uid || 
        request.auth.token.email == "brahim.boumai97@gmail.com"
      );
      
      // Création : utilisateur authentifié peut créer un ticket (avec son userId)
      allow create: if request.auth != null && 
        request.resource.data.userId == request.auth.uid;
      
      // Mise à jour : utilisateur peut mettre à jour ses tickets OU admin peut mettre à jour tous
      allow update: if request.auth != null && (
        resource.data.userId == request.auth.uid || 
        request.auth.token.email == "brahim.boumai97@gmail.com"
      );
      
      // Suppression : seul l'admin peut supprimer
      allow delete: if request.auth != null && 
        request.auth.token.email == "brahim.boumai97@gmail.com";
    }
    
    // Collection "users" (profils utilisateurs) - NOUVELLES RÈGLES
    match /users/{userId} {
      // Lecture : utilisateur peut lire son propre profil OU admin peut lire tous
      allow read: if request.auth != null && (
        userId == request.auth.uid || 
        request.auth.token.email == "brahim.boumai97@gmail.com"
      );
      
      // Création : utilisateur peut créer son propre profil
      allow create: if request.auth != null && 
        userId == request.auth.uid;
      
      // Mise à jour : utilisateur peut mettre à jour son propre profil OU admin
      allow update: if request.auth != null && (
        userId == request.auth.uid || 
        request.auth.token.email == "brahim.boumai97@gmail.com"
      );
      
      // Suppression : seul l'admin peut supprimer
      allow delete: if request.auth != null && 
        request.auth.token.email == "brahim.boumai97@gmail.com";
    }
  }
}
```

### Étape 3 : Publier les règles

1. **Collez** le code ci-dessus dans l'éditeur de règles
2. Cliquez sur le bouton **"Publier"** (en haut à droite)
3. Attendez 5-10 secondes
4. Vérifiez qu'il n'y a **pas d'erreurs** (texte en rouge)

### Étape 4 : Tester

1. Rechargez votre application (`http://localhost:3000`)
2. Connectez-vous avec un compte utilisateur
3. Essayez de créer un ticket
4. L'erreur devrait disparaître !

---

## 🔍 Vérification

### Si l'erreur persiste :

1. **Vérifiez que vous êtes bien connecté** :
   - Allez sur `/login`
   - Connectez-vous avec un compte
   - Vérifiez que vous êtes redirigé vers `/dashboard`

2. **Vérifiez les règles dans Firebase Console** :
   - Les règles doivent être **publiées** (pas seulement sauvegardées)
   - Il ne doit pas y avoir d'erreurs de syntaxe

3. **Vérifiez l'email admin** :
   - Dans les règles, l'email admin est : `"brahim.boumai97@gmail.com"`
   - Si votre email admin est différent, remplacez-le dans les règles

---

## 📝 Notes importantes

- Les règles permettent aux utilisateurs de :
  - ✅ Créer leurs propres tickets
  - ✅ Lire uniquement leurs propres tickets
  - ✅ Mettre à jour leurs propres tickets

- Les règles permettent à l'admin de :
  - ✅ Lire TOUS les tickets
  - ✅ Mettre à jour TOUS les tickets
  - ✅ Supprimer n'importe quel ticket

- Les règles empêchent :
  - ❌ Un utilisateur de voir les tickets d'autres utilisateurs
  - ❌ Un utilisateur de modifier les tickets d'autres utilisateurs
  - ❌ Un utilisateur non authentifié de créer des tickets

---

## ✅ Après configuration

Une fois les règles configurées, vous devriez pouvoir :
- ✅ Créer un compte utilisateur
- ✅ Créer des tickets
- ✅ Voir vos tickets dans le dashboard
- ✅ Répondre aux messages dans les tickets

**L'erreur "Missing or insufficient permissions" devrait disparaître !**
