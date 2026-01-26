# 📋 PROMPT DE SYNTHÈSE - Projet MarocTech Solutions

Copiez-collez ce prompt complet dans Gemini pour une analyse approfondie du projet.

---

## PROMPT POUR GEMINI

```
Je souhaite que tu analyses en profondeur ce projet Next.js 14 avec intégration Firebase. 
Voici toutes les informations nécessaires :

# CONTEXTE DU PROJET

**Nom:** MarocTech Solutions
**Type:** Landing page + Blog dynamique pour une agence IT & SEO au Maroc
**Cible:** Marché francophone marocain (PME/TPE)
**Objectif:** Site vitrine avec blog éditable via Firebase (sans rebuild)

# STACK TECHNIQUE

## Frontend
- **Framework:** Next.js 14 (App Router)
- **Langage:** TypeScript
- **Styling:** Tailwind CSS 3.4.17
- **Icons:** Lucide React
- **Font:** Poppins (Google Fonts)

## Backend & Database
- **Firebase Firestore:** Base de données NoSQL pour les articles de blog
- **Firebase Storage:** Stockage des images d'articles
- **Firebase Authentication:** Authentification admin (email/password)

## SEO & Performance
- **ISR (Incremental Static Regeneration):** Revalidation toutes les 60 secondes
- **JSON-LD Schema.org:** LocalBusiness + BlogPosting
- **Sitemap dynamique:** Généré depuis Firestore
- **Robots.txt:** Configuré pour le référencement

# ARCHITECTURE DU PROJET

## Structure des dossiers

```
tech/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Layout racine avec metadata SEO
│   ├── page.tsx                 # Page d'accueil (landing)
│   ├── globals.css              # Styles Tailwind + custom
│   ├── sitemap.ts               # Sitemap dynamique
│   ├── robots.ts                # Robots.txt
│   ├── blog/
│   │   ├── page.tsx             # Liste des articles (ISR 60s)
│   │   └── [slug]/
│   │       └── page.tsx         # Article individuel (ISR 60s)
│   └── admin/
│       ├── login/
│       │   └── page.tsx         # Connexion admin
│       ├── page.tsx              # Dashboard admin (liste articles)
│       └── posts/
│           ├── new/
│           │   └── page.tsx     # Créer un article
│           └── [id]/
│               └── page.tsx     # Modifier un article
├── components/                   # Composants React réutilisables
│   ├── Header.tsx               # Navigation fixe avec auth state
│   ├── Hero.tsx                 # Section hero avec CTAs
│   ├── Services.tsx             # 6 cartes de services
│   ├── Trust.tsx                # Section réassurance
│   ├── Locations.tsx            # Zones d'intervention (Casablanca, Rabat)
│   ├── Blog.tsx                 # Section blog (homepage, 3 derniers)
│   ├── Contact.tsx              # Formulaire de devis
│   └── Footer.tsx               # Footer avec liens
├── lib/
│   └── firebase/
│       ├── config.ts            # Initialisation Firebase
│       ├── blog-service.ts     # CRUD articles (Firestore)
│       └── auth-service.ts     # Authentification admin
└── FIREBASE_SETUP.md            # Guide de configuration
```

# FONCTIONNALITÉS PRINCIPALES

## 1. Landing Page (Page d'accueil)

### Sections:
- **Header:** Navigation fixe avec barre de contact, logo, menu mobile
- **Hero:** Titre H1 SEO, 2 CTAs (urgence + devis), stats de confiance
- **Services:** 6 cartes avec icônes (Dépannage, Infogérance, SEO, etc.)
- **Trust:** 6 badges de réassurance (TVA, confidentialité, audit gratuit)
- **Locations:** Zones couvertes (Maârif, Sidi Maâruf, CFC, Agdal, etc.)
- **Blog:** 3 derniers articles publiés (prévisualisation)
- **Contact:** Formulaire de devis + coordonnées
- **Footer:** Liens, réseaux sociaux, CTA urgence

### SEO:
- Keywords ciblés: "Infogérance Maroc", "Support informatique Casablanca", "Réparation PC portable"
- Meta description optimisée
- JSON-LD LocalBusiness avec adresse Casablanca
- URLs propres avec slugs français

## 2. Blog Dynamique (Firebase)

### Pages publiques:
- `/blog` - Liste de tous les articles publiés (ISR 60s)
- `/blog/[slug]` - Article individuel avec contenu HTML (ISR 60s)

### Structure d'un article (Firestore):
```typescript
{
  id: string (auto-généré)
  slug: string (URL-friendly, ex: "ordinateur-lent-astuces")
  title: string
  excerpt: string (résumé court)
  content: string (HTML)
  category: "Dépannage" | "Productivité" | "Cybersécurité" | etc.
  categoryColor: "bg-blue-500" | "bg-green-500" | etc.
  imageUrl: string (Firebase Storage URL)
  imageAlt: string
  metaDescription: string (SEO)
  keywords: string[] (mots-clés SEO)
  author: string
  readTime: string (calculé automatiquement)
  published: boolean
  createdAt: Timestamp
  updatedAt: Timestamp
}
```

### Catégories disponibles:
- Dépannage (bleu)
- Productivité (vert)
- Cybersécurité (rouge)
- Cloud (violet)
- Infogérance (orange)
- SEO (teal)

## 3. Interface Admin (Authentifiée)

### Authentification:
- Firebase Auth avec email/password
- Vérification admin via `NEXT_PUBLIC_ADMIN_EMAIL`
- Protection des routes `/admin/*`

### Dashboard (`/admin`):
- Liste de tous les articles (publiés + brouillons)
- Stats: total, publiés, brouillons
- Actions: Voir, Modifier, Supprimer, Publier/Dépublier
- Tableau responsive avec images miniatures

### Création/Édition (`/admin/posts/new` et `/admin/posts/[id]`):
- Formulaire complet avec:
  - Titre (génère slug automatiquement)
  - Upload image (Firebase Storage) avec preview
  - Catégorie (dropdown)
  - Extrait
  - Contenu HTML (textarea avec support HTML)
  - Meta description (compteur 160 caractères)
  - Mots-clés (input avec tags visuels)
  - Auteur
  - Bouton Publier/Brouillon
- Calcul automatique du temps de lecture
- Validation des champs requis

# INTÉGRATION FIREBASE

## Configuration (.env.local)
```env
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
NEXT_PUBLIC_ADMIN_EMAIL=admin@maroctech-solutions.ma
```

## Services Firebase

### Firestore:
- Collection: `blog_posts`
- Règles: Lecture publique, écriture authentifiée
- Index: `slug` (unique), `published`, `createdAt` (desc)

### Storage:
- Dossier: `blog/`
- Règles: Lecture publique, écriture authentifiée
- Format images: JPG, PNG, WebP

### Authentication:
- Méthode: Email/Password
- Admin unique défini par variable d'environnement

# FONCTIONNALITÉS TECHNIQUES

## ISR (Incremental Static Regeneration)
- Pages blog régénérées toutes les 60 secondes
- Pas besoin de rebuild après ajout d'article
- Performance optimale (statique + cache)

## SEO Avancé
- Metadata dynamique par article
- JSON-LD BlogPosting avec toutes les infos
- Sitemap.xml généré depuis Firestore
- Open Graph + Twitter Cards
- URLs propres avec slugs français

## Responsive Design
- Mobile-first avec Tailwind breakpoints
- Navigation mobile avec menu hamburger
- Images adaptatives
- Tableaux admin scrollables sur mobile

## Accessibilité
- Semantic HTML (article, section, nav)
- ARIA labels sur boutons
- Alt text sur images
- Contraste WCAG AA

# POINTS D'ATTENTION / QUESTIONS

1. **Performance:** Comment optimiser davantage le chargement des images Firebase Storage ?
2. **Sécurité:** Les règles Firestore/Storage sont-elles suffisantes pour la production ?
3. **Scalabilité:** Que faire si on a 1000+ articles ? Pagination nécessaire ?
4. **Backup:** Comment sauvegarder automatiquement les articles Firestore ?
5. **Analytics:** Intégration Google Analytics 4 recommandée ?
6. **CDN:** Utiliser Firebase Hosting ou Vercel pour le déploiement ?
7. **Images:** Optimisation automatique (WebP, lazy loading) ?
8. **Cache:** Stratégie de cache pour les images Storage ?
9. **Erreurs:** Gestion d'erreurs Firebase (offline, quota dépassé) ?
10. **Migration:** Comment migrer les 3 articles statiques existants vers Firestore ?

# FICHIERS CLÉS À ANALYSER

1. `lib/firebase/blog-service.ts` - Logique CRUD articles
2. `app/blog/[slug]/page.tsx` - Rendu article avec ISR
3. `app/admin/posts/new/page.tsx` - Formulaire création
4. `components/Blog.tsx` - Affichage homepage
5. `app/sitemap.ts` - Génération sitemap dynamique

# CONTEXTE BUSINESS

- **Marché:** Maroc (francophone)
- **Devise:** MAD (Dirhams)
- **Zones:** Casablanca (Maârif, Sidi Maâruf, CFC), Rabat (Agdal)
- **Services:** Support IT, Infogérance PME, SEO, Création site web
- **Tone:** Professionnel, rassurant, "vouvoiement"

# QUESTIONS SPÉCIFIQUES POUR GEMINI

1. Architecture: Y a-t-il des améliorations à apporter à la structure actuelle ?
2. Performance: Comment optimiser le temps de chargement des pages blog ?
3. Sécurité: Audit des règles Firestore/Storage et suggestions d'amélioration
4. SEO: Analyse de la stratégie SEO actuelle et recommandations
5. UX Admin: Améliorations possibles de l'interface d'administration
6. Scalabilité: Plan pour gérer 100+ articles sans dégradation
7. Monitoring: Outils recommandés pour suivre les performances
8. Backup: Stratégie de sauvegarde automatique des données
9. Migration: Processus pour migrer les articles statiques vers Firestore
10. Best Practices: Conformité aux standards Next.js 14 et Firebase

Merci d'analyser ce projet en profondeur et de fournir des recommandations concrètes et actionnables.
```

---

## 📝 UTILISATION

1. **Copiez tout le contenu** entre les balises de code (le prompt)
2. **Collez dans Gemini** (gemini.google.com)
3. **Ajoutez des questions spécifiques** si besoin
4. **Demandez une analyse** ou des recommandations précises

## 🎯 QUESTIONS SUPPLÉMENTAIRES POSSIBLES

Vous pouvez aussi demander à Gemini :
- "Génère un plan de migration des articles statiques vers Firestore"
- "Propose une architecture pour gérer 1000+ articles"
- "Audite la sécurité Firebase de ce projet"
- "Optimise les performances de chargement des images"
- "Crée un système de backup automatique"
