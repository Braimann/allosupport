// app/services/suppression-virus/content.ts

export const serviceContent = {
  // SEO Metadata
  metadata: {
    title: "Suppression Virus & Malware Maroc | AlloSupport",
    description: "Nettoyage virus, malware, ransomware à distance Maroc. Intervention 15 min Casablanca, Rabat. Pack virus 250 DH. Garanti sans formatage.",
    keywords: [
      "suppression virus Maroc",
      "nettoyage malware Casablanca",
      "PC infecté Rabat",
      "enlever pubs intempestives",
      "ransomware Maroc",
      "désinfection PC à distance",
    ],
    ogImage: "/images/services/virus-removal-og.jpg",
  },

  // Hero Section
  hero: {
    badge: "Sécurité -  Intervention 15 min",
    title: "Suppression Virus & Malware",
    subtitle: "Nettoyage complet à distance sans formatage",
    mainText: "PC lent, pubs intempestives, antivirus désactivé ? Notre équipe intervient en 15 minutes pour nettoyer virus, malware, ransomware et sécuriser votre système.",
    image: {
      url: "/images/services/suppression-virus-hero.svg",
      alt: "Technicien supprimant virus ordinateur Maroc",
    },
  },

  // Section "Idéal si"
  idealFor: {
    title: "Ce service est fait pour vous si",
    problems: [
      "Publicités intempestives qui s'affichent partout",
      "PC devenu très lent du jour au lendemain",
      "Antivirus désactivé et impossible à relancer",
      "Navigateur redirige vers des sites inconnus",
      "Messages d'erreur suspects ou menaces de blocage",
      "Fichiers chiffrés (ransomware)",
    ],
  },

  // Tarifs
  pricing: [
    {
      name: "Pack Essential",
      price: 199,
      promo: 20, // Réduction en %
      description: "Nettoyage virus basique",
      features: [
        "Scan antivirus complet",
        "Suppression malware/adware",
        "Nettoyage navigateurs",
        "Vérification système",
      ],
      duration: "30-45 min",
      popular: false,
    },
    {
      name: "Pack Complet",
      price: 250,
      description: "Nettoyage + Sécurisation",
      features: [
        "Tout du Pack Essential",
        "Installation antivirus premium",
        "Configuration pare-feu",
        "Mise à jour système",
        "Conseils prévention personnalisés",
        "Garantie 30 jours",
      ],
      duration: "45-60 min",
      popular: true,
    },
    {
      name: "Pack Entreprise",
      price: 499,
      priceUnit: "/mois",
      description: "Protection continue PME",
      features: [
        "Monitoring antivirus 24/7",
        "Backup automatique",
        "Support prioritaire",
        "Intervention illimitée",
        "Audit sécurité trimestriel",
      ],
      duration: "Service mensuel",
      popular: false,
    },
  ],

  // Notre solution (steps)
  solution: {
    title: "Notre Solution Anti-Virus",
    intro: "Intervention à distance en 3 étapes, sans formatage de votre PC.",
    steps: [
      {
        number: 1,
        title: "Diagnostic Complet",
        description: "Scan antivirus approfondi pour identifier tous les virus, malware, adware, spyware et ransomware présents sur votre système.",
        duration: "10-15 min",
      },
      {
        number: 2,
        title: "Nettoyage & Suppression",
        description: "Suppression de toutes les menaces détectées, nettoyage des navigateurs (Chrome, Firefox, Edge), suppression des extensions malveillantes et restauration des paramètres.",
        duration: "20-30 min",
      },
      {
        number: 3,
        title: "Sécurisation & Prévention",
        description: "Installation/activation d'un antivirus fiable, mise à jour Windows, configuration pare-feu, et conseils personnalisés pour éviter les réinfections.",
        duration: "15 min",
      },
    ],
  },

  // Garanties
  guarantees: [
    "✅ Sans formatage : on préserve vos données",
    "✅ Intervention à distance : pas besoin de déplacer votre PC",
    "✅ Garantie 30 jours : si le virus revient, on le nettoie gratuitement",
    "✅ Prix transparent : aucun frais caché",
  ],

  // FAQ
  faq: [
    {
      q: "Combien de temps dure l'intervention ?",
      a: "Entre 30 et 60 minutes selon la gravité de l'infection. La majorité des virus sont supprimés en moins de 45 minutes.",
    },
    {
      q: "Mes fichiers seront-ils supprimés ?",
      a: "Non, nous nettoyons les virus sans toucher à vos documents, photos ou fichiers personnels. Le formatage n'est utilisé qu'en dernier recours et uniquement avec votre accord.",
    },
    {
      q: "Comment se passe l'intervention à distance ?",
      a: "Via TeamViewer ou AnyDesk. Vous voyez tout ce que nous faisons à l'écran. Vous gardez le contrôle total et pouvez interrompre à tout moment.",
    },
    {
      q: "Le virus peut-il revenir après le nettoyage ?",
      a: "Si vous suivez nos conseils de prévention, le risque est très faible. Nous offrons une garantie 30 jours : si le même virus revient, nous le nettoyons gratuitement.",
    },
  ],

  // Services liés (manuellement choisis)
  relatedServices: [
    {
      slug: "depannage-pc-mac",
      title: "Dépannage PC & Mac",
      excerpt: "Réparation à distance : PC lent, écran bleu, bugs",
      category: "Dépannage",
    },
    {
      slug: "recuperation-donnees",
      title: "Récupération Données",
      excerpt: "Récupération de fichiers perdus ou supprimés",
      category: "Dépannage",
    },
    {
      slug: "installation-config",
      title: "Installation & Configuration",
      excerpt: "Imprimante, Office, Windows, logiciels",
      category: "Installation",
    },
  ],
} as const;

export type ServiceContent = typeof serviceContent;
