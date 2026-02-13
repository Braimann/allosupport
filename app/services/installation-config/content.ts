// app/services/installation-config/content.ts

export const serviceContent = {
  metadata: {
    title: "Installation Imprimante, Office & Windows Maroc | AlloSupport",
    description: "On installe tout pour vous, sans bouger de chez vous. Imprimante HP/Canon, Office, Windows. Prix 150 DH par logiciel/périphérique. Casablanca, Rabat.",
    keywords: [
      "installation imprimante maroc",
      "config office maroc",
      "aide informatique distance",
      "installation windows maroc",
      "configuration imprimante wifi",
    ],
    ogImage: "/images/services/installation-config-og.jpg",
  },
  hero: {
    badge: "Installation & Configuration - Intervention 15 min",
    title: "On Installe Tout Pour Vous, Sans Bouger de Chez Vous",
    subtitle: "Imprimante, Office, Windows, logiciels",
    mainText: "Vous venez d'acheter une imprimante HP/Canon ou une licence Office, mais ça ne marche pas ? Laissez un pro faire l'installation proprement. Intervention à distance partout au Maroc.",
    image: { url: "/images/services/installation-config-hero.svg", alt: "Installation logiciels et imprimantes Maroc" },
  },
  idealFor: {
    title: "Ce service est fait pour vous si",
    problems: [
      "Nouvelle imprimante à connecter (WiFi ou USB)",
      "Microsoft Office à installer ou activer",
      "Mise à jour Windows 10 vers 11",
      "Configuration boîte email (Outlook, Gmail)",
      "Logiciel qui ne s'installe pas ou erreur d'activation",
    ],
  },
  pricing: [
    {
      name: "Installation Unique",
      price: 150,
      duration: "15-30 min",
      description: "Par logiciel ou périphérique",
      features: [
        "Configuration Imprimante & Scanner (Wifi/USB)",
        "Installation Microsoft Office (Word, Excel, PowerPoint)",
        "Mise à jour Windows 10 vers 11",
        "Configuration Boîte Email (Outlook, Gmail)",
      ],
      popular: true,
    },
  ],
  solution: {
    title: "Comment on procède",
    intro: "Vous nous contactez sur WhatsApp, on vous guide pour installer AnyDesk, puis on prend la main pour tout configurer.",
    steps: [
      { number: 1, title: "Contact WhatsApp", description: "Décrivez ce que vous voulez installer (imprimante, Office, etc.).", duration: "2 min", icon: "1" },
      { number: 2, title: "Connexion à distance", description: "On se connecte à votre PC en toute sécurité.", duration: "2 min", icon: "2" },
      { number: 3, title: "Installation et réglages", description: "Installation des pilotes, logiciels et configuration complète.", duration: "15-30 min", icon: "3" },
    ],
  },
  guarantees: [
    "Prix fixe 150 DH par installation",
    "À distance : pas de déplacement",
    "Satisfait ou remboursé",
  ],
  faq: [
    { q: "Vous installez les imprimantes à distance ?", a: "Oui. Si l'imprimante est connectée au même réseau que votre PC (WiFi ou câble), on peut installer les pilotes et la configurer à distance." },
    { q: "Combien coûte l'installation de Microsoft Office ?", a: "Notre intervention pour installer et configurer Office est 150 DH. Le coût de la licence Office est à part (achat Microsoft ou abonnement 365)." },
    { q: "Vous configurez aussi les emails professionnels ?", a: "Oui : Outlook, Gmail, ou boîtes @votre-domaine.ma. Pour une migration complète vers Google Workspace ou Office 365, voir notre service Email et Cloud." },
  ],
  relatedServices: [
    { slug: "depannage-pc-mac", title: "Dépannage PC et Mac", excerpt: "PC lent, écran bleu ? Réparation à distance 150-250 DH", category: "Dépannage" },
    { slug: "suppression-virus", title: "Suppression Virus", excerpt: "Nettoyage virus et malware à distance", category: "Sécurité" },
    { slug: "recuperation-donnees", title: "Récupération Données", excerpt: "Fichiers perdus ? On récupère vos données", category: "Recovery" },
  ],
} as const;

export type ServiceContent = typeof serviceContent;
