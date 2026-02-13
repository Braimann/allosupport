// app/services/cybersecurite/content.ts

export const serviceContent = {
  metadata: {
    title: "Audit Cybersécurité PME Maroc | Protection Ransomware | AlloSupport",
    description: "Protégez votre PME contre le piratage et les ransomwares. 70% des PME ne survivent pas à une perte totale de données. Audit Flash Gratuit 15 min. Casablanca, Rabat.",
    keywords: [
      "cybersécurité pme maroc",
      "protection ransomware",
      "audit sécurité informatique",
      "sécurité entreprise maroc",
    ],
    ogImage: "/images/services/cybersecurite-og.jpg",
  },
  hero: {
    badge: "Sécurité - Audit Flash Gratuit",
    title: "Protégez Votre PME Contre le Piratage et les Ransomwares",
    subtitle: "70% des PME ne survivent pas à une perte totale de données",
    mainText: "Ne soyez pas la prochaine victime. Nous sécurisons votre forteresse numérique : audit de vulnérabilité, protection ransomware, sauvegarde immuable, formation anti-phishing. Audit Flash Gratuit 15 min pour tout nouveau client.",
    image: { url: "/images/services/cybersecurite-hero.svg", alt: "Cybersécurité PME Maroc" },
  },
  idealFor: {
    title: "Ce service est fait pour vous si",
    problems: [
      "Vous stockez des données clients ou financières sensibles",
      "Vous n'avez pas de sauvegarde automatique hors site",
      "Vos employés ouvrent des pièces jointes et liens sans formation",
      "Vous ne savez pas si vos mots de passe et accès sont sécurisés",
    ],
  },
  pricing: [
    {
      name: "Audit Flash Gratuit",
      price: "Gratuit",
      duration: "15 min",
      description: "Pour tout nouveau client PME",
      features: [
        "Échange téléphonique ou WhatsApp",
        "Identification des risques majeurs",
        "Recommandations prioritaires",
        "Devis sur mesure si besoin",
      ],
      popular: true,
    },
  ],
  solution: {
    title: "Nos services sécurité",
    intro: "Audit de vulnérabilité, protection ransomware, formation employés.",
    steps: [
      { number: 1, title: "Audit de vulnérabilité", description: "On tente de pénétrer votre réseau pour trouver les failles avant les pirates.", duration: "Sur devis", icon: "1" },
      { number: 2, title: "Protection Ransomware", description: "Solutions de sauvegarde immuable (cloud) et bonnes pratiques.", duration: "Sur devis", icon: "2" },
      { number: 3, title: "Formation employés", description: "Apprendre à ne pas cliquer sur les emails pièges (phishing).", duration: "Sur devis", icon: "3" },
    ],
  },
  guarantees: [
    "Audit Flash Gratuit 15 min pour tout nouveau client",
    "Recommandations concrètes et prioritaires",
    "Devis transparent sans engagement",
  ],
  faq: [
    { q: "C'est quoi un audit de vulnérabilité ?", a: "On simule une attaque pour identifier les faiblesses de votre réseau, mots de passe, et configurations. Vous recevez un rapport avec les risques et les actions correctives prioritaires." },
    { q: "Vous protégez contre les ransomwares ?", a: "Oui : sauvegarde immuable (cloud), segmentation réseau, et bonnes pratiques. En cas d'attaque, vous pouvez restaurer vos données sans payer la rançon." },
    { q: "La formation anti-phishing, c'est utile ?", a: "Oui. La majorité des attaques commencent par un email piège. Former vos employés à reconnaître les tentatives de phishing réduit fortement le risque." },
  ],
  relatedServices: [
    { slug: "infogerance-pme", title: "Infogérance PME", excerpt: "Support illimité et maintenance à partir de 1500 DH/mois", category: "Entreprise" },
    { slug: "suppression-virus", title: "Suppression Virus", excerpt: "Nettoyage virus et malware pour particuliers et PME", category: "Sécurité" },
    { slug: "recuperation-donnees", title: "Récupération Données", excerpt: "Récupération de fichiers après incident", category: "Recovery" },
  ],
} as const;

export type ServiceContent = typeof serviceContent;
