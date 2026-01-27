# 🔧 Configuration Firestore pour le Système de Tickets

## 📋 Vue d'ensemble

Le système de tickets nécessite des règles Firestore pour sécuriser l'accès aux données. Les utilisateurs ne doivent pouvoir voir que leurs propres tickets, tandis que les admins peuvent voir tous les tickets.

## 🔐 Règles Firestore

### Étape 1 : Accéder aux règles Firestore

1. Allez sur [Firebase Console](https://console.firebase.google.com/)
2. Sélectionnez votre projet (`supporttechnique-84e72`)
3. Allez dans **"Build"** > **"Firestore Database"**
4. Cliquez sur l'onglet **"Règles"**

### Étape 2 : Ajouter les règles pour les tickets

Ajoutez ces règles à votre fichier de règles Firestore existant :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Règles existantes pour blog_posts et services...
    
    // Collection "tickets"
    match /tickets/{ticketId} {
      // Lecture : utilisateur authentifié peut lire ses propres tickets OU admin peut lire tous
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
    
    // Collection "users" (profils utilisateurs)
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

1. Cliquez sur **"Publier"** en haut à droite
2. Attendez la confirmation que les règles sont publiées

## ✅ Vérification

### Test utilisateur normal :
1. Créez un compte utilisateur sur `/signup`
2. Connectez-vous sur `/login`
3. Créez un ticket sur `/dashboard/tickets/new`
4. Vérifiez que vous pouvez voir uniquement vos propres tickets

### Test admin :
1. Connectez-vous avec l'email admin (`brahim.boumai97@gmail.com`)
2. Allez sur `/admin/tickets`
3. Vérifiez que vous pouvez voir TOUS les tickets de tous les utilisateurs

## 🚨 Important

- **Email admin** : Remplacez `"brahim.boumai97@gmail.com"` par votre email admin dans les règles si nécessaire
- **Sécurité** : Les règles empêchent les utilisateurs de modifier les tickets d'autres utilisateurs
- **Indexes** : Si vous avez beaucoup de tickets, vous pourriez avoir besoin d'indexes Firestore pour les requêtes `orderBy`

## 📊 Structure des données

### Collection `tickets` :
```typescript
{
  userId: string;              // ID de l'utilisateur
  status: "open" | "in_progress" | "resolved";
  priority: "normal" | "urgent";
  subject: string;
  category: "virus" | "panne" | "installation" | "b2b";
  description: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  messages: Array<{
    text: string;
    sender: "user" | "admin";
    date: Timestamp;
  }>;
}
```

### Collection `users` :
```typescript
{
  name: string;
  email: string;
  createdAt: Timestamp;
  updatedAt?: Timestamp;
}
```

## 🔍 Dépannage

### Erreur "Missing or insufficient permissions"
- Vérifiez que les règles Firestore sont bien publiées
- Vérifiez que l'utilisateur est bien authentifié
- Vérifiez que l'email admin dans les règles correspond à votre email

### Les tickets ne s'affichent pas
- Vérifiez la console du navigateur pour les erreurs
- Vérifiez que `userId` correspond bien à `request.auth.uid`
- Vérifiez que les règles permettent la lecture

### L'admin ne voit pas tous les tickets
- Vérifiez que l'email dans les règles correspond exactement à l'email de connexion admin
- Vérifiez que vous êtes bien connecté avec le compte admin
