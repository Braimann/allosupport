// app/services/reseau-wifi/content.ts

export const serviceContent = {
  metadata: {
    title: "Installation Réseau Wifi Entreprise Maroc | AlloSupport",
    description: "Wifi rapide et stable dans vos bureaux. Bornes Wifi, Wifi Invité, VPN. Sur devis. Casablanca, Rabat.",
    keywords: ["installation wifi entreprise", "réseau wifi maroc", "câblage réseau", "wifi professionnel"],
    ogImage: "/images/services/reseau-wifi-og.jpg",
  },
  hero: {
    badge: "Réseau - Sur Devis",
    title: "Un Wifi Rapide et Stable, Partout dans Vos Bureaux",
    subtitle: "Fini le Wifi qui ne capte pas en réunion",
    mainText: "Solutions professionnelles (Ubiquiti, Cisco). Bornes Wifi, Wifi Invité, VPN télétravail, câblage RJ45. Bureaux, cafés, riads, hôtels.",
    image: { url: "/images/services/reseau-wifi-hero.svg", alt: "Réseau Wifi entreprise Maroc" },
  },
  idealFor: {
    title: "Ce service est fait pour vous si",
    problems: [
      "Le Wifi ne capte pas dans certaines salles",
      "La connexion rame quand tout le monde est connecté",
      "Vous voulez un Wifi invité pour vos clients",
      "Vous avez besoin d'un VPN pour le télétravail",
    ],
  },
  pricing: [
    {
      name: "Installation Réseau",
      price: "Sur Devis",
      duration: "Variable",
      description: "Installation personnalisée selon vos besoins",
      features: [
        "Bornes Wifi au plafond (roaming transparent)",
        "Wifi Invité sécurisé",
        "Configuration VPN télétravail",
        "Câblage RJ45 et baie de brassage",
      ],
      popular: true,
    },
  ],
  guarantees: [
    "Devis gratuit et sans engagement",
    "Solutions professionnelles (Ubiquiti / Cisco)",
    "Intervention sur site Casablanca, Rabat, etc.",
  ],
  faq: [
    { q: "Pour quels types de locaux ?", a: "Bureaux, cafés, restaurants, riads, hôtels, cabinets." },
    { q: "Vous faites le câblage aussi ?", a: "Oui. Câblage RJ45, baie de brassage, installation des bornes. Devis après visite ou échange sur plan." },
    { q: "Combien ça coûte ?", a: "Sur devis selon la surface, le nombre de points d'accès et les options. Devis gratuit après échange." },
  ],
  relatedServices: [
    { slug: "infogerance-pme", title: "Infogérance PME", excerpt: "Support illimité à partir de 1500 DH/mois", category: "Entreprise" },
    { slug: "cybersecurite", title: "Cybersécurité PME", excerpt: "Audit, protection ransomware", category: "Sécurité" },
    { slug: "email-cloud", title: "Email et Cloud Pro", excerpt: "Office 365, Google Workspace", category: "Cloud" },
  ],
} as const;

export type ServiceContent = typeof serviceContent;
