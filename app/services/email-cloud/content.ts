// app/services/email-cloud/content.ts

export const serviceContent = {
  metadata: {
    title: "Installation Office 365 & Google Workspace Maroc | Email Pro | AlloSupport",
    description: "Passez Pro : emails en @votre-entreprise.ma. Migration Google Workspace ou Microsoft 365. Configuration Teams/Meet. 500 DH HT installation + licences. Casablanca, Rabat.",
    keywords: ["email professionnel maroc", "office 365 maroc", "google workspace maroc", "migration email"],
    ogImage: "/images/services/email-cloud-og.jpg",
  },
  hero: {
    badge: "Cloud - Email Pro",
    title: "Passez Pro : Vos Emails en @votre-entreprise.ma",
    subtitle: "Utiliser @gmail.com ou @menara.ma nuit à votre image",
    mainText: "Passez à une solution professionnelle synchronisée sur PC et mobile. Création de domaine, migration des emails vers Google Workspace ou Microsoft 365, configuration Teams/Meet, stockage cloud (Drive/OneDrive). 500 DH HT installation + coût des licences (~60 DH/mois/user).",
    image: { url: "/images/services/email-cloud-hero.svg", alt: "Email professionnel Maroc" },
  },
  idealFor: {
    title: "Ce service est fait pour vous si",
    problems: [
      "Vous utilisez encore @gmail.com ou @menara.ma pour le travail",
      "Vous voulez des emails @votre-domaine.ma",
      "Vous avez besoin de Teams ou Meet pour les réunions",
      "Vous voulez un stockage cloud partagé (Drive/OneDrive)",
    ],
  },
  pricing: [
    {
      name: "Service d'Installation",
      price: 500,
      duration: "Une fois",
      description: "Frais d'installation unique",
      features: [
        "Création nom de domaine (ex: contact@cabinet-expert.ma)",
        "Migration des anciens emails vers Google Workspace ou Microsoft 365",
        "Configuration Teams/Meet",
        "Stockage Cloud (Drive/OneDrive) pour partager les fichiers",
      ],
      popular: true,
    },
    {
      name: "Licences Mensuelles",
      price: "~60 DH/mois/user",
      duration: "Abonnement",
      description: "Coût des licences Google Workspace ou Microsoft 365",
      popular: false,
    },
  ],
  guarantees: [
    "Installation et migration par des experts",
    "Formation rapide à l'utilisation",
    "Support après mise en place",
  ],
  faq: [
    { q: "Google Workspace ou Microsoft 365 ?", a: "Google Workspace : idéal pour la collaboration en temps réel (Docs, Sheets). Microsoft 365 : indispensable si vous utilisez Excel avancé, Access, ou Outlook desktop. Nous vous aidons à choisir selon vos besoins." },
    { q: "Le prix de 500 DH inclut quoi ?", a: "Les frais d'installation unique : création/migration du domaine, configuration des boîtes mail, Teams/Meet, et base de stockage cloud. Les licences (Google ou Microsoft) sont en plus, environ 60 DH/mois par utilisateur." },
    { q: "Vous migrez nos anciens emails ?", a: "Oui. Nous migrons vos anciens emails (Gmail, Menara, etc.) vers la nouvelle solution pour ne rien perdre." },
  ],
  relatedServices: [
    { slug: "infogerance-pme", title: "Infogérance PME", excerpt: "Support illimité et maintenance", category: "Entreprise" },
    { slug: "cybersecurite", title: "Cybersécurité PME", excerpt: "Audit et protection ransomware", category: "Sécurité" },
    { slug: "installation-config", title: "Installation & Config", excerpt: "Imprimante, Office, Windows", category: "Installation" },
  ],
} as const;

export type ServiceContent = typeof serviceContent;
