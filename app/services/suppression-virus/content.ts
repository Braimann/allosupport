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

  // Bloc SEO : 5 signes virus + solutions DIY + Avito + CTA (indexation "suppression virus maroc")
  extraSeoSection: [
    {
      h2: "5 Signes Virus PC Maroc 2026",
      paragraphs: [
        "Reconnaître les symptômes d’un PC infecté permet d’agir avant que les dégâts (vol de données, ransomware) ne s’aggravent. Cinq signes fréquents doivent vous alerter et justifient un nettoyage ou un diagnostic pro.",
        "1. Pubs intempestives : fenêtres publicitaires qui s’ouvrent partout, même sans naviguer, ou barres d’outils qui apparaissent dans le navigateur. Souvent lié à des adwares ou à des extensions malveillantes. Enlever les pubs sur le PC passe par la suppression de ces programmes et le nettoyage des navigateurs.",
        "2. Page d’accueil ou moteur de recherche changés : votre navigateur ouvre un site inconnu au démarrage ou les recherches redirigent vers des pages douteuses. Un malware a modifié les paramètres ; une suppression virus Maroc (nettoyage navigateurs + scan) rétablit la situation.",
        "3. Antivirus désactivé et impossible à réactiver : les virus désactivent souvent Windows Defender ou votre antivirus pour proliférer. Si vous ne parvenez plus à lancer un scan, le PC est probablement infecté.",
        "4. PC ultra lent : le processeur ou le disque sont saturés par des processus malveillants en arrière-plan. Un PC qui rame du jour au lendemain, sans raison évidente, peut indiquer un malware ou un miner.",
        "5. Fichiers disparus ou chiffrés : dossiers inaccessibles, extensions bizarres sur les fichiers (ransomware), ou messages demandant une rançon. Dans ce cas, coupez internet, ne payez pas la rançon et faites appel à un pro pour tenter une récupération.",
      ],
    },
    {
      h2: "3 Solutions Gratuites à Essayer",
      paragraphs: [
        "Avant de payer pour un nettoyage pro, trois actions gratuites peuvent suffire pour une infection légère.",
        "1. Windows Defender : lancez une analyse complète (Paramètres > Confidentialité et sécurité > Sécurité Windows > Protection contre les virus). Mettez à jour les définitions puis relancez le PC. Pour un nettoyage malware Casablanca ou ailleurs, c’est la première étape.",
        "2. Malwarebytes gratuit : téléchargez Malwarebytes depuis le site officiel, installez-le et lancez un scan. L’outil détecte beaucoup d’adwares et de malwares que Windows Defender peut manquer. Idéal pour enlever les pubs sur le PC et les redirections.",
        "3. Mode sans échec + scan : redémarrez en mode sans échec (paramètres de démarrage Windows), puis relancez Windows Defender ou Malwarebytes. Les virus qui se chargent au démarrage sont parfois désactivés en mode sans échec, ce qui permet de les supprimer.",
        "Si après ces étapes les pubs reviennent, l’antivirus reste désactivé ou le PC reste lent, l’infection est plus profonde. Ne la laissez pas traîner : un virus bancaire au Maroc en 2026 peut vider un compte en quelques heures. Les cas de 10 000 à 15 000 DH volés via des malwares ne sont pas rares. Ne prenez pas le risque.",
      ],
    },
    {
      h2: "Pourquoi Pas Avito Gratuit ? (Risques)",
      paragraphs: [
        "Les annonces « suppression virus gratuit » ou « nettoyage PC 50 DH » sur Avito (ou le dépannage par un proche non formé) présentent des risques réels : intervention sans garantie, logiciels installés à l’aveugle, ou pire — récupération de vos mots de passe et accès bancaires. Un « nettoyage » fait avec des outils crackés ou par quelqu’un qui accède à tout votre PC peut tourner au vol de données ou au chantage.",
        "Pour la suppression virus Maroc, privilégiez un acteur identifié, avec avis vérifiables et garantie écrite. Le coût d’une intervention pro (à partir de 290 DH) est dérisoire comparé aux milliers de DH que peut coûter un vol bancaire ou une rançon ransomware. Ne prenez pas le risque Avito gratuit.",
      ],
    },
    {
      h2: "AlloSupport : Nettoyage Pro 290 DH",
      paragraphs: [
        "DIY échoue ? Le virus persiste ? AlloSupport nettoie votre PC à distance pour 290 DH : scan complet, suppression des virus, malwares, adwares et pubs, nettoyage des navigateurs et sécurisation. Intervention sans formatage, vos fichiers sont préservés. 100 % garanti ou remboursé : si le problème revient sous 30 jours, nous reprenons la main sans frais.",
        "Réponse sous 15 minutes par WhatsApp, intervention le jour même possible. Nettoyage malware Casablanca, Rabat et partout au Maroc, à distance. Ne laissez pas un PC infecté traîner : plus vous attendez, plus les risques (vol bancaire, ransomware) augmentent.",
      ],
    },
  ],
  extraSeoCta: {
    body: "DIY échoué ? Virus qui persiste ? AlloSupport nettoie votre PC 290 DH — 100 % garanti ou remboursé. Réponse en 15 min.",
    buttonLabel: "Nettoyage virus 290 DH — WhatsApp",
  },

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
