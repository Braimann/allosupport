// app/services/recuperation-donnees/content.ts

export const serviceContent = {
  metadata: {
    title: "Récupération Données Perdues Maroc | Photos & Fichiers Effacés | AlloSupport",
    description: "Fichiers effacés ? Photos perdues ? Récupération à distance. Tarif 350 DH, paiement uniquement si récupération réussie. Casablanca, Rabat, Maroc.",
    keywords: [
      "récupération données maroc",
      "photos perdues",
      "fichiers effacés",
      "récupération clé usb",
      "disque formaté récupération",
    ],
    ogImage: "/images/services/recuperation-donnees-og.jpg",
  },
  hero: {
    badge: "Récupération - Paiement si succès",
    title: "Fichiers Effacés ? Photos Perdues ? Pas de Panique.",
    subtitle: "Récupération à distance quand c'est possible",
    mainText: "Vous avez vidé la corbeille par erreur ou formaté une clé USB ? Arrêtez tout ! Si vous n'écrivez rien dessus, nous pouvons souvent récupérer vos fichiers à distance. Paiement uniquement si les données sont récupérées.",
    image: { url: "/images/services/recuperation-donnees-hero.svg", alt: "Récupération de données Maroc" },
  },
  idealFor: {
    title: "On peut vous aider si",
    problems: [
      "Fichiers supprimés par erreur (corbeille vidée)",
      "Photos ou documents sur clé USB / disque externe devenus inaccessibles",
      "Partition ou disque formaté par erreur",
      "Documents Word/Excel non enregistrés après crash",
    ],
  },
  pricing: [
    {
      name: "Récupération Données",
      price: 350,
      duration: "Variable (1h-3h)",
      description: "Paiement uniquement si les données sont récupérées",
      features: [
        "Diagnostic gratuit (évaluation faisabilité)",
        "Tentative de récupération logicielle à distance",
        "Paiement uniquement en cas de succès",
        "Conseils si panne physique (orientation labo)",
      ],
      popular: true,
    },
  ],
  solution: {
    title: "Comment ça marche",
    intro: "Ne plus utiliser le disque ou la clé concernée augmente les chances de récupération. On intervient à distance pour tenter une récupération logicielle.",
    steps: [
      { number: 1, title: "Arrêter d'écrire sur le support", description: "Ne plus enregistrer, copier ou formater le disque/clé concerné.", duration: "Immédiat", icon: "⛔" },
      { number: 2, title: "Diagnostic à distance", description: "On évalue si une récupération logicielle est possible (disque détecté, pas de bruit anormal).", duration: "15 min", icon: "🔍" },
      { number: 3, title: "Tentative de récupération", description: "Utilisation d'outils professionnels pour restaurer les fichiers. Vous payez seulement si on récupère vos données.", duration: "1h-3h", icon: "🛠️" },
    ],
  },
  guarantees: [
    "✅ Paiement uniquement si récupération réussie",
    "✅ Diagnostic et conseil gratuits",
    "✅ Si panne physique : orientation vers labo partenaire Casablanca",
  ],
  faq: [
    { q: "Mon disque fait un bruit bizarre (clac clac), vous pouvez récupérer ?", a: "Un bruit mécanique indique souvent une panne physique. Dans ce cas on ne peut pas intervenir à distance. Nous vous redirigerons vers un laboratoire partenaire à Casablanca spécialisé en récupération sur disques endommagés." },
    { q: "J'ai formaté ma clé USB par erreur, c'est récupérable ?", a: "Souvent oui, si vous n'avez pas réécrit dessus après le formatage. On tente la récupération à distance. Contactez-nous rapidement." },
    { q: "Quand dois-je payer ?", a: "Vous payez uniquement si nous parvenons à récupérer vos fichiers et que vous les récupérez. Si la récupération échoue (ou impossible), pas de frais." },
  ],
  relatedServices: [
    { slug: "depannage-pc-mac", title: "Dépannage PC & Mac", excerpt: "PC lent, plantages ? Réparation à distance", category: "Dépannage" },
    { slug: "suppression-virus", title: "Suppression Virus", excerpt: "Nettoyage virus et malware", category: "Sécurité" },
    { slug: "installation-config", title: "Installation & Config", excerpt: "Imprimante, Office, Windows", category: "Installation" },
  ],
} as const;

export type ServiceContent = typeof serviceContent;
