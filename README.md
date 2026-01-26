# 🚀 AlloSupport.ma - Dépannage IT à Distance au Maroc

Plateforme de dépannage informatique à distance pour particuliers et PME au Maroc. Intervention en 15 minutes via WhatsApp. Satisfait ou Remboursé.

## ✨ Fonctionnalités

- 🎨 **Design Futuriste** : Animations fluides avec Framer Motion, glassmorphism, gradients animés
- 📱 **Mobile-First** : Optimisé pour 90% de trafic mobile
- 🔒 **Admin Panel** : Gestion de contenu (blog, services) via Firebase
- 📊 **SEO Optimisé** : Architecture Pillar & Cluster, Schema.org, sitemap dynamique
- 💬 **WhatsApp First** : CTAs WhatsApp contextuels sur toutes les pages
- ⚡ **Performance** : ISR (60s), LCP optimisé, lazy loading

## 🛠️ Technologies

- **Framework** : Next.js 14 (App Router)
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Database** : Firebase (Firestore + Storage + Auth)
- **Icons** : Lucide React
- **SEO** : Schema.org JSON-LD, sitemap dynamique

## 📋 Prérequis

- Node.js 18+ 
- npm ou yarn
- Compte Firebase (Firestore, Storage, Authentication)

## 🚀 Installation

1. **Cloner le repository**
```bash
git clone https://github.com/Braimann/allosupport.git
cd allosupport
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer les variables d'environnement**

Copiez `env.example.txt` en `.env.local` :
```bash
cp env.example.txt .env.local
```

Puis éditez `.env.local` avec vos vraies valeurs Firebase :
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_ADMIN_EMAIL=your_admin_email@example.com
```

4. **Lancer le serveur de développement**
```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du Projet

```
allosupport/
├── app/                    # Pages Next.js (App Router)
│   ├── admin/              # Panel d'administration
│   ├── blog/               # Pages blog (Cluster Posts)
│   ├── services/           # Pages services (Pillar Pages)
│   └── page.tsx            # Page d'accueil
├── components/             # Composants React
│   ├── conversion/         # Composants CRO (CTAs, Pricing, etc.)
│   └── ...                 # Autres composants
├── lib/                    # Utilitaires
│   ├── firebase/           # Services Firebase
│   ├── seo.ts              # Moteur SEO centralisé
│   └── services-data.ts    # Données statiques des services
└── public/                 # Assets statiques
```

## 🔐 Configuration Firebase

### 1. Firestore Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Blog posts: public read, authenticated write
    match /blog_posts/{postId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Services: public read, authenticated write
    match /services/{serviceId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### 2. Storage Rules

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /blog/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    match /services/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### 3. Créer l'index Firestore

Pour les requêtes de blog avec `orderBy`, créez un index composite :
- Collection: `blog_posts`
- Fields: `published` (Ascending) + `createdAt` (Descending)

## 👤 Accès Admin

1. Créez un utilisateur dans Firebase Authentication
2. Utilisez l'email configuré dans `NEXT_PUBLIC_ADMIN_EMAIL`
3. Accédez à `/admin/login` pour vous connecter

## 📄 Pages de Services

8 pages de services sont disponibles :

### Particuliers
- `/services/depannage-pc-mac`
- `/services/suppression-virus`
- `/services/installation-config`
- `/services/recuperation-donnees`

### Entreprises
- `/services/infogerance-pme`
- `/services/cybersecurite`
- `/services/reseau-wifi`
- `/services/email-cloud`

## 🎨 Design System

### Couleurs
- **Primary (Emerald)** : `#10b981` - Actions, CTAs
- **Secondary (Slate)** : `#0f172a` - Trust, B2B
- **Accent (Red)** : `#ef4444` - Urgence

### Typography
- **Font** : Poppins (Google Fonts)

## 📦 Scripts Disponibles

```bash
npm run dev      # Développement (localhost:3000)
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Linter ESLint
```

## 🔒 Sécurité

- ✅ `.env.local` est exclu du Git (ne jamais commiter)
- ✅ Firebase Rules protègent les écritures (admin uniquement)
- ✅ Authentification requise pour l'admin panel

## 📚 Documentation

- `FIREBASE_SETUP.md` - Guide de configuration Firebase
- `SEO_ARCHITECTURE_IMPLEMENTATION.md` - Architecture SEO
- `SERVICES_PAGES_CREATED.md` - Documentation des pages services
- `TEST_CHECKLIST.md` - Checklist de tests

## 🤝 Contribution

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Commitez vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 License

Ce projet est privé et propriétaire d'AlloSupport.ma

## 📞 Support

Pour toute question, contactez : contact@allosupport.ma

---

**Développé avec ❤️ pour AlloSupport.ma**
