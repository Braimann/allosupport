# ✅ Checklist de Tests - AlloSupport.ma

## 🚀 Application démarrée sur : http://localhost:3002

---

## 📋 CHECKLIST COMPLÈTE

### 🔐 1. CONFIGURATION FIREBASE

#### 1.1 Vérifier le fichier .env.local
- [ ] Le fichier `.env.local` existe dans le projet
- [ ] Toutes les variables Firebase sont remplies
- [ ] `NEXT_PUBLIC_ADMIN_EMAIL` contient votre email

**Comment tester :**
```bash
# Dans le terminal, vérifiez que le fichier existe :
Get-Content .env.local
```

---

### 🌐 2. PAGES PUBLIQUES (Sans connexion)

#### 2.1 Page d'accueil
- [ ] URL : `http://localhost:3002/`
- [ ] La page se charge sans erreur
- [ ] Le Header s'affiche avec le logo AlloSupport
- [ ] Le Hero section s'affiche
- [ ] Le bouton WhatsApp flottant est visible (en bas à droite)
- [ ] Le bouton WhatsApp a une animation pulse
- [ ] Le Footer s'affiche

**Tests visuels :**
- [ ] Les couleurs sont correctes (vert WhatsApp, bleu, rouge)
- [ ] Le design est responsive (testez sur mobile)
- [ ] Les images se chargent correctement

---

#### 2.2 Page Blog (Liste)
- [ ] URL : `http://localhost:3002/blog`
- [ ] La page se charge sans erreur
- [ ] Le Header s'affiche
- [ ] Le titre "Conseils d'Experts & Actualités Tech" s'affiche
- [ ] Si des articles existent, ils s'affichent
- [ ] Si aucun article, le message "Aucun article pour le moment" s'affiche
- [ ] Le bouton WhatsApp est visible

---

#### 2.3 Page Services (Liste)
- [ ] URL : `http://localhost:3002/services`
- [ ] La page se charge sans erreur
- [ ] Le Header s'affiche
- [ ] Le titre "Nos Services de Dépannage IT" s'affiche
- [ ] Si des services existent, ils s'affichent
- [ ] Le bouton WhatsApp est visible

---

### 🔐 3. AUTHENTIFICATION ADMIN

#### 3.1 Page de connexion
- [ ] URL : `npm
- [ ] La page se charge sans erreur
- [ ] Le formulaire de connexion s'affiche
- [ ] Les champs Email et Mot de passe sont présents
- [ ] Le bouton "Se connecter" est visible

#### 3.2 Test de connexion
- [ ] Entrez votre email admin (celui dans `.env.local`)
- [ ] Entrez votre mot de passe (celui créé dans Firebase Auth)
- [ ] Cliquez sur "Se connecter"

**Résultat attendu :**
- ✅ **Si succès :** Redirection vers `/admin` (dashboard)
- ❌ **Si erreur :** Message d'erreur affiché

**Si erreur "Email ou mot de passe incorrect" :**
- Vérifiez que l'email dans `.env.local` correspond à celui dans Firebase Auth
- Vérifiez que vous avez créé l'utilisateur dans Firebase Auth

**Si erreur "Vous n'avez pas les droits d'administration" :**
- Vérifiez que `NEXT_PUBLIC_ADMIN_EMAIL` dans `.env.local` correspond exactement à votre email Firebase

---

### 📝 4. DASHBOARD ADMIN

#### 4.1 Accès au dashboard
- [ ] URL : `http://localhost:3002/admin`
- [ ] Si non connecté : Redirection vers `/admin/login`
- [ ] Si connecté : Le dashboard s'affiche

#### 4.2 Contenu du dashboard
- [ ] Le Header admin s'affiche avec le logo
- [ ] Les statistiques s'affichent (Total, Publiés, Brouillons)
- [ ] Le bouton "Nouvel article" est visible
- [ ] La liste des articles s'affiche (même si vide)
- [ ] Le bouton "Déconnexion" fonctionne

---

### ✍️ 5. CRÉATION D'ARTICLE (Test complet)

#### 5.1 Accès au formulaire
- [ ] URL : `http://localhost:3002/admin/posts/new`
- [ ] Si non connecté : Redirection vers `/admin/login`
- [ ] Si connecté : Le formulaire s'affiche

#### 5.2 Remplir le formulaire
- [ ] **Titre :** "Test Article AlloSupport"
- [ ] Le slug se génère automatiquement : `test-article-allosupport`
- [ ] **Catégorie :** Sélectionnez "Dépannage"
- [ ] **Extrait :** "Ceci est un article de test pour vérifier que tout fonctionne."
- [ ] **Contenu :** 
  ```html
  <p>Ceci est un test de contenu HTML.</p>
  <h2>Section Test</h2>
  <p>Le contenu doit s'afficher correctement.</p>
  ```
- [ ] **Meta Description :** "Article de test AlloSupport"
- [ ] **Mots-clés :** "test, allosupport, dépannage"

#### 5.3 Upload d'image (optionnel)
- [ ] Cliquez sur "Cliquez pour télécharger une image"
- [ ] Sélectionnez une image (JPG, PNG)
- [ ] L'image s'upload vers Firebase Storage
- [ ] La preview de l'image s'affiche
- [ ] L'URL de l'image est remplie automatiquement

**Si erreur upload :**
- Vérifiez que Storage est activé dans Firebase
- Vérifiez les règles Storage (doivent permettre write si auth)

#### 5.4 Publier l'article
- [ ] Cliquez sur le bouton **"Publier"** (pas "Brouillon")
- [ ] Attendez la redirection vers `/admin`

**Résultat attendu :**
- ✅ Redirection vers `/admin`
- ✅ L'article apparaît dans la liste avec statut "Publié"
- ✅ L'article a un ID unique

---

### 📖 6. AFFICHAGE DE L'ARTICLE

#### 6.1 Voir l'article sur le blog
- [ ] Allez sur : `http://localhost:3002/blog`
- [ ] Votre article "Test Article AlloSupport" apparaît dans la liste
- [ ] L'image s'affiche (si uploadée)
- [ ] La catégorie "Dépannage" s'affiche
- [ ] La date s'affiche
- [ ] Le bouton "Lire l'article" est cliquable

#### 6.2 Page article individuelle
- [ ] Cliquez sur "Lire l'article"
- [ ] URL : `http://localhost:3002/blog/test-article-allosupport`
- [ ] Le Header s'affiche
- [ ] Le titre de l'article s'affiche en H1
- [ ] Le contenu HTML s'affiche correctement
- [ ] Les mots-clés s'affichent en tags
- [ ] Le bouton de partage (Facebook, LinkedIn, Twitter) s'affiche
- [ ] Le bouton WhatsApp est visible
- [ ] Le Footer s'affiche

**Si l'article ne s'affiche pas :**
- Vérifiez que `published: true` dans Firestore
- Attendez 60 secondes (ISR revalidation)
- Rafraîchissez la page (Ctrl+F5)

---

### 🛠️ 7. MODIFICATION D'ARTICLE

#### 7.1 Accès à l'édition
- [ ] Dans `/admin`, cliquez sur l'icône **"Modifier"** (crayon) d'un article
- [ ] URL : `http://localhost:3002/admin/posts/[id]`
- [ ] Le formulaire se remplit avec les données existantes

#### 7.2 Modifier et sauvegarder
- [ ] Modifiez le titre
- [ ] Cliquez sur **"Publier"**
- [ ] Vérifiez que les modifications sont sauvegardées

---

### 🗑️ 8. SUPPRESSION D'ARTICLE

#### 8.1 Supprimer un article
- [ ] Dans `/admin`, cliquez sur l'icône **"Supprimer"** (poubelle)
- [ ] Confirmez la suppression
- [ ] L'article disparaît de la liste

**Vérification :**
- [ ] Allez sur `/blog` : L'article ne doit plus apparaître

---

### 🔗 9. SERVICES (Pillar Pages)

#### 9.1 Créer un service de test
**Note :** L'admin pour services n'est pas encore créé, mais vous pouvez tester via Firestore directement :

1. Allez dans Firebase Console > Firestore Database
2. Cliquez sur "Commencer la collection"
3. **ID de collection :** `services`
4. **Document ID :** Auto-généré
5. **Champs :**
   - `slug` (string) : `depannage-pc-distance`
   - `title` (string) : `Dépannage PC à Distance`
   - `metaDescription` (string) : `Dépannage informatique à distance au Maroc`
   - `heroTitle` (string) : `Dépannage PC à Distance - Intervention 15 min`
   - `heroSubtitle` (string) : `Si on ne répare pas, vous ne payez pas`
   - `pricing` (array) : 
     ```json
     [
       {
         "name": "Ticket Urgence",
         "price": "250 DH",
         "description": "Virus, lenteur, installation"
       }
     ]
     ```
   - `content` (string) : `<p>Contenu du service...</p>`
   - `keywords` (array) : `["dépannage", "pc", "distance"]`
   - `relatedBlogPosts` (array) : `[]`
   - `published` (boolean) : `true`
   - `createdAt` (timestamp) : Maintenant
   - `updatedAt` (timestamp) : Maintenant

6. Cliquez sur "Enregistrer"

#### 9.2 Voir le service
- [ ] Allez sur : `http://localhost:3002/services/depannage-pc-distance`
- [ ] La page se charge
- [ ] Le Hero s'affiche avec le titre
- [ ] La PricingTable s'affiche avec "250 DH"
- [ ] Le LocalProof s'affiche ("Disponible à Casablanca...")
- [ ] Le contenu s'affiche
- [ ] Le bouton WhatsApp est visible

---

### 📱 10. RESPONSIVE & MOBILE

#### 10.1 Test mobile
- [ ] Ouvrez les DevTools (F12)
- [ ] Activez le mode mobile (Ctrl+Shift+M)
- [ ] Testez sur iPhone/Android
- [ ] Vérifiez que :
  - [ ] Le menu hamburger fonctionne
  - [ ] Le bouton WhatsApp est visible
  - [ ] La barre WhatsApp en bas s'affiche (mobile)
  - [ ] Les textes sont lisibles
  - [ ] Les images s'adaptent

---

### ⚡ 11. PERFORMANCE

#### 11.1 Core Web Vitals
- [ ] Ouvrez Chrome DevTools (F12)
- [ ] Onglet "Lighthouse"
- [ ] Lancez un audit
- [ ] Vérifiez :
  - [ ] LCP (Largest Contentful Paint) < 2.5s
  - [ ] FID (First Input Delay) < 100ms
  - [ ] CLS (Cumulative Layout Shift) < 0.1

#### 11.2 Chargement des pages
- [ ] Page d'accueil se charge rapidement
- [ ] Les images se chargent progressivement (lazy loading)
- [ ] Le bouton WhatsApp ne bloque pas le chargement

---

### 🔍 12. SEO

#### 12.1 Vérifier les meta tags
- [ ] Ouvrez le code source (Ctrl+U) sur une page
- [ ] Vérifiez la présence de :
  - [ ] `<title>` avec mot-clé
  - [ ] `<meta name="description">` (150-160 chars)
  - [ ] `<link rel="canonical">`
  - [ ] Schema.org JSON-LD

#### 12.2 Vérifier le sitemap
- [ ] URL : `http://localhost:3002/sitemap.xml`
- [ ] Le sitemap s'affiche avec les URLs
- [ ] Les pages `/blog/*` sont présentes
- [ ] Les pages `/services/*` sont présentes (si créées)

---

### 🧪 13. TESTS FONCTIONNELS

#### 13.1 Navigation
- [ ] Les liens du Header fonctionnent
- [ ] Les liens du Footer fonctionnent
- [ ] Le bouton "Retour" dans les articles fonctionne
- [ ] Les liens internes (blog → services) fonctionnent

#### 13.2 WhatsApp Button
- [ ] Le bouton flottant est cliquable
- [ ] Il ouvre WhatsApp avec le message pré-rempli
- [ ] Le numéro de téléphone est correct (vérifiez dans `StickyWhatsApp.tsx`)

**⚠️ Action requise :** 
Ouvrez `components/conversion/StickyWhatsApp.tsx` et remplacez :
```typescript
phoneNumber = "2126XXXXXXXX"
```
par votre vrai numéro WhatsApp (format: `212612345678`)

---

### 🐛 14. TESTS D'ERREURS

#### 14.1 Page 404
- [ ] Allez sur : `http://localhost:3002/article-inexistant`
- [ ] La page 404 s'affiche correctement

#### 14.2 Article non publié
- [ ] Créez un article avec `published: false`
- [ ] Il ne doit PAS apparaître sur `/blog`
- [ ] Il DOIT apparaître dans `/admin` avec statut "Brouillon"

---

## ✅ RÉSULTAT FINAL

### Si tous les tests passent :
✅ **Firebase est correctement configuré !**
✅ **L'application fonctionne !**
✅ **Vous pouvez commencer à créer du contenu !**

### Si certains tests échouent :
📝 Notez quels tests échouent et je vous aiderai à les corriger.

---

## 🚀 PROCHAINES ÉTAPES

Une fois tous les tests validés :

1. **Créer du contenu réel** (remplacer les tests)
2. **Configurer le numéro WhatsApp** dans `StickyWhatsApp.tsx`
3. **Créer les premières Pillar Pages** Tier 1 selon la stratégie SEO
4. **Optimiser les images** (compression, WebP)
5. **Soumettre le sitemap** à Google Search Console

---

**Status:** ✅ Checklist prête à tester !

Commencez par tester la section 3 (Authentification) puis 5 (Création d'article). 🚀
