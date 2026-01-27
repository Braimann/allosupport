# 📝 Guide d'import des articles de blog

## Pourquoi les articles ne s'affichent pas ?

Les articles que vous avez créés dans le fichier `ARTICLES_BLOG_ALLOSUPPORT.md` sont juste du texte markdown. Pour qu'ils apparaissent sur votre site, ils doivent être importés dans **Firebase Firestore**.

## Solution : Importer les articles via l'admin panel

J'ai créé une page d'import automatique dans votre admin panel pour faciliter cette tâche.

### Étapes pour importer les articles

1. **Connectez-vous à l'admin panel**
   - Allez sur : `http://localhost:3000/admin/login`
   - Connectez-vous avec vos identifiants admin

2. **Accédez à la page d'import**
   - Dans le dashboard admin, cliquez sur le bouton **"Importer articles"** (bouton vert)
   - Ou allez directement sur : `http://localhost:3000/admin/import`

3. **Chargez le fichier markdown**
   - Cliquez sur **"Choisir un fichier"**
   - Sélectionnez le fichier `ARTICLES_BLOG_ALLOSUPPORT.md` depuis votre dossier du projet
   - Le système va automatiquement détecter les 10 articles

4. **Vérifiez les articles détectés**
   - Vous verrez la liste des articles qui seront importés
   - Vérifiez que tous les articles sont bien détectés

5. **Lancez l'import**
   - Cliquez sur **"Importer X article(s)"**
   - Attendez que l'import se termine (quelques secondes par article)

6. **Vérifiez les résultats**
   - Vous verrez pour chaque article si l'import a réussi ou échoué
   - Les articles importés avec succès seront automatiquement **publiés** et visibles sur le site

7. **Ajoutez les images (optionnel)**
   - Après l'import, allez dans le dashboard admin
   - Éditez chaque article pour ajouter les images via l'interface d'upload

## Vérification

Après l'import, vérifiez que les articles apparaissent :

1. **Sur le site** : `http://localhost:3000/blog`
2. **Dans l'admin** : `http://localhost:3000/admin`

## Si l'import échoue

### Erreur "Firebase not initialized"
- Vérifiez que votre fichier `.env.local` contient bien toutes les variables Firebase
- Redémarrez le serveur de développement (`npm run dev`)

### Erreur "Permission denied"
- Vérifiez que vous êtes bien connecté en tant qu'admin
- Vérifiez que votre email correspond à celui configuré dans `.env.local` (NEXT_PUBLIC_ADMIN_EMAIL)

### Articles non détectés
- Vérifiez que le fichier markdown est bien formaté
- Chaque article doit commencer par `## Article X :`
- Chaque article doit être séparé par `---`

## Alternative : Création manuelle

Si l'import automatique ne fonctionne pas, vous pouvez créer les articles manuellement :

1. Allez sur `/admin/posts/new`
2. Copiez-collez le contenu de chaque article depuis le fichier markdown
3. Remplissez tous les champs (titre, contenu, catégorie, etc.)
4. Publiez l'article

## Structure attendue d'un article

Pour que l'import fonctionne, chaque article doit avoir cette structure :

```markdown
## Article X : Titre de l'article

**Title SEO :** Titre SEO
**Meta Description :** Description SEO
**Images suggérées :**
- Image 1 (alt: "texte alt")

---

# Titre de l'article

Contenu de l'article...
```

## Support

Si vous rencontrez des problèmes, vérifiez :
- La console du navigateur (F12) pour les erreurs JavaScript
- Les logs du serveur Next.js pour les erreurs serveur
- Que Firebase est bien configuré et accessible
