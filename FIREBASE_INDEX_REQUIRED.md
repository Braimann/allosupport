# 🔧 Index Firestore Requis pour les Blogs

## ⚠️ Problème

Si vos articles de blog ne s'affichent pas, c'est probablement parce qu'il manque un **index composite** dans Firestore.

## ✅ Solution : Créer l'index

### Méthode 1 : Via le lien d'erreur (Recommandé)

1. Allez sur votre site : `http://localhost:3002/blog`
2. Ouvrez la console du navigateur (F12)
3. Si vous voyez une erreur avec un lien comme :
   ```
   https://console.firebase.google.com/project/.../firestore/indexes?create_composite=...
   ```
4. **Cliquez sur ce lien** - Il créera automatiquement l'index nécessaire

### Méthode 2 : Manuellement dans Firebase Console

1. Allez sur : **https://console.firebase.google.com**
2. Sélectionnez votre projet : **supporttechnique-84e72**
3. Allez dans : **Firestore Database** > **Index**
4. Cliquez sur : **"Créer un index"**
5. Remplissez :
   - **Collection ID :** `blog_posts`
   - **Champs à indexer :**
     - `published` : **Ascendant**
     - `createdAt` : **Descendant**
   - **Requête :** `published == true ORDER BY createdAt DESC`
6. Cliquez sur **"Créer"**
7. Attendez 2-5 minutes que l'index soit créé

## 🔍 Vérifier que l'article est publié

1. Allez dans **Firestore Database** > **Data**
2. Ouvrez la collection `blog_posts`
3. Vérifiez votre article :
   - Le champ `published` doit être **`true`** (pas `false`)
   - Le champ `createdAt` doit exister (timestamp)

## 🧪 Test après création de l'index

1. Attendez 2-5 minutes
2. Rafraîchissez la page `/blog` (Ctrl+F5)
3. Votre article devrait apparaître

---

**Note :** Le code a été amélioré pour fonctionner même sans index (tri manuel), mais l'index est recommandé pour de meilleures performances.
