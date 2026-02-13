// app/services/infogerance-pme/content.ts

export const serviceContent = {
  metadata: {
    title: "Infogérance PME Maroc | Contrat Maintenance Informatique | AlloSupport",
    description: "Service Informatique Externalisé (DSI) à partir de 1500 DH/mois. Support illimité, maintenance préventive, antivirus pro. Casablanca, Rabat.",
    keywords: ["infogérance pme maroc", "contrat maintenance informatique", "dsi externalisé", "support it pme"],
    ogImage: "/images/services/infogerance-pme-og.jpg",
  },
  hero: {
    badge: "Entreprises - DSI Externalisé",
    title: "Votre Service Informatique Externalisé à partir de 1500 DH/mois",
    subtitle: "Concentrez-vous sur votre business, on gère l'informatique",
    mainText: "Plus de pannes, plus de lenteurs. Idéal pour cabinets comptables, architectes et TPE. Support illimité, maintenance préventive, antivirus pro.",
    image: { url: "/images/services/infogerance-pme-hero.svg", alt: "Infogérance PME Maroc" },
  },
  idealFor: {
    title: "Ce pack est fait pour vous si",
    problems: [
      "Vous avez 5 à 15 postes et pas de technicien interne",
      "Les pannes informatiques font perdre du temps",
      "Vous voulez un interlocuteur unique pour l'IT",
      "Vous souhaitez un budget prévisible (abonnement mensuel)",
    ],
  },
  pricing: [
    {
      name: "Pack Start (jusqu'à 5 postes)",
      price: "1 500 DH HT / mois",
      description: "Support illimité, maintenance préventive, antivirus pro",
      features: [
        "Support illimité par WhatsApp Pro",
        "Maintenance préventive mensuelle à distance",
        "Antivirus pro inclus",
        "Intervention prioritaire (prise en main < 15 min)",
      ],
      popular: true,
    },
    {
      name: "Pack Growth (6 à 15 postes)",
      price: "2 800 DH HT / mois",
      description: "Support illimité, maintenance préventive, antivirus pro",
      features: ["Tout du Pack Start", "Rapport mensuel état du parc", "Conseiller dédié"],
      popular: false,
    },
  ],
  guarantees: [
    "Support illimité : vos employés nous contactent directement",
    "Maintenance préventive : nettoyage des PC tous les mois à distance",
    "Antivirus pro : licence incluse pour tous les postes",
    "Intervention prioritaire : prise en main en moins de 15 minutes",
  ],
  faq: [
    { q: "C'est quoi l'infogérance pour une PME ?", a: "C'est externaliser la gestion de votre parc informatique : un même interlocuteur pour les pannes, mises à jour, antivirus et conseils. Abonnement mensuel." },
    { q: "Combien de postes sont inclus ?", a: "Pack Start : jusqu'à 5 postes. Pack Growth : 6 à 15 postes. Au-delà, devis sur mesure." },
    { q: "Vous intervenez sur site ou à distance ?", a: "Majorité des interventions à distance. Pour matériel ou câblage, intervention sur site possible (Casablanca, Rabat)." },
  ],
  relatedServices: [
    { slug: "cybersecurite", title: "Cybersécurité PME", excerpt: "Audit, protection ransomware, formation", category: "Sécurité" },
    { slug: "reseau-wifi", title: "Réseau et Wifi Entreprise", excerpt: "Bornes Wifi, VPN, câblage", category: "Réseau" },
    { slug: "email-cloud", title: "Email et Cloud Pro", excerpt: "Office 365, Google Workspace", category: "Cloud" },
  ],
} as const;

export type ServiceContent = typeof serviceContent;
