import { ServicePage } from "./firebase/services-service";

// Static service pages data - Fallback if Firebase doesn't have them yet
export const staticServices: ServicePage[] = [
  // ========== PARTICULIERS ==========
  {
    slug: "depannage-pc-mac",
    title: "Dépannage Informatique à Distance Maroc | PC & Mac Lent ? Réparé en 15 min.",
    metaDescription: "Votre ordinateur rame ? On le répare à distance. Plus besoin de débrancher votre PC. Intervention en 15 min. Satisfait ou Remboursé.",
    heroTitle: "Votre ordinateur rame ? On le répare à distance.",
    heroSubtitle: "Plus besoin de débrancher votre PC et de traverser la ville. Nos techniciens prennent la main via internet sécurisé pour régler lenteurs, écrans bleus et bugs de démarrage.",
    pricing: [
      {
        name: "Coup de Pouce (< 30 min)",
        price: "150 Dhs",
        description: "Intervention rapide pour problèmes simples",
      },
      {
        name: "Problème Complexe",
        price: "250 Dhs",
        description: "Pour les cas plus difficiles nécessitant plus de temps",
      },
    ],
    content: `
      <h2>Problèmes traités</h2>
      <ul>
        <li>Ordinateur très lent au démarrage</li>
        <li>Écran bleu ou noir (Windows/Mac)</li>
        <li>Logiciels qui plantent ou ne s'ouvrent pas</li>
        <li>Problèmes de son ou de webcam (Zoom/Teams)</li>
      </ul>
      <p><strong>Garantie :</strong> Si on ne répare pas, vous ne payez rien.</p>
    `,
    keywords: ["dépannage pc maroc", "réparation ordinateur distance", "pc lent solution", "écran bleu réparation"],
    relatedBlogPosts: [],
    published: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: "suppression-virus",
    title: "Nettoyage Virus & Malware Maroc | Supprimer Publicités Intempestives PC",
    metaDescription: "Virus, Pubs, PC Bloqué ? Nettoyage total et sécurisé. Scan complet, suppression malwares. Prix forfaitaire 290 Dhs.",
    heroTitle: "Virus, Pubs, PC Bloqué ? Nettoyage total et sécurisé.",
    heroSubtitle: "Des fenêtres publicitaires s'ouvrent toutes seules ? Votre navigateur a changé ? Vous avez peut-être un virus. Ne risquez pas vos données bancaires.",
    pricing: [
      {
        name: "Karcher Numérique",
        price: "290 Dhs",
        description: "Nettoyage complet + Vérification Sécurité",
        features: [
          "Scan complet du disque dur",
          "Suppression des Malwares, Spywares et Adwares",
          "Réinitialisation de Chrome/Edge/Firefox",
          "Installation d'un bloqueur de pub efficace",
        ],
      },
    ],
    content: `
      <h2>Notre Solution "Karcher Numérique"</h2>
      <ul>
        <li>Scan complet du disque dur</li>
        <li>Suppression des Malwares, Spywares et Adwares</li>
        <li>Réinitialisation de Chrome/Edge/Firefox</li>
        <li>Bonus : Installation d'un bloqueur de pub efficace</li>
      </ul>
    `,
    keywords: ["suppression virus maroc", "nettoyage malware", "supprimer pubs pc", "antivirus maroc"],
    relatedBlogPosts: [],
    published: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: "installation-config",
    title: "Installation Imprimante, Office & Windows Maroc | Aide Informatique à Domicile",
    metaDescription: "On installe tout pour vous, sans bouger de chez vous. Configuration imprimante, Office, Windows. Prix unique 150 Dhs par logiciel/périphérique.",
    heroTitle: "On installe tout pour vous, sans bouger de chez vous.",
    heroSubtitle: "Vous venez d'acheter une imprimante HP/Canon ou une licence Office, mais ça ne marche pas ? Laissez un pro faire l'installation proprement.",
    pricing: [
      {
        name: "Installation Unique",
        price: "150 Dhs",
        description: "Par logiciel ou périphérique",
      },
    ],
    content: `
      <h2>Services Inclus</h2>
      <ul>
        <li>Configuration Imprimante & Scanner (Wifi/USB)</li>
        <li>Installation Microsoft Office (Word, Excel, PowerPoint)</li>
        <li>Mise à jour Windows 10 vers 11</li>
        <li>Configuration Boite Email (Outlook, Gmail)</li>
      </ul>
    `,
    keywords: ["installation imprimante maroc", "config office maroc", "aide informatique distance", "installation windows"],
    relatedBlogPosts: [],
    published: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: "recuperation-donnees",
    title: "Récupération Données Perdues Maroc | Photos & Fichiers Effacés",
    metaDescription: "Fichiers effacés ? Photos perdues ? Pas de panique. Récupération à distance. Tarif 350 Dhs (paiement uniquement si récupération réussie).",
    heroTitle: "Fichiers effacés ? Photos perdues ? Pas de panique.",
    heroSubtitle: "Vous avez vidé la corbeille par erreur ou formaté une clé USB ? Arrêtez tout ! Si vous n'écrivez rien dessus, nous pouvons souvent récupérer vos fichiers à distance.",
    pricing: [
      {
        name: "Récupération Données",
        price: "350 Dhs",
        description: "Paiement uniquement si les données sont récupérées",
      },
    ],
    content: `
      <h2>Ce qu'on peut sauver</h2>
      <ul>
        <li>Photos de vacances, mariages, souvenirs</li>
        <li>Documents Word/Excel non enregistrés</li>
        <li>Fichiers sur clé USB ou Disque Dur externe (s'il est détecté)</li>
      </ul>
      <p><strong>Note Importante :</strong> Si le disque fait un bruit mécanique ("Clac clac"), c'est une panne physique. Nous vous redirigerons vers un laboratoire partenaire à Casablanca.</p>
    `,
    keywords: ["récupération données maroc", "photos perdues", "fichiers effacés", "récupération clé usb"],
    relatedBlogPosts: [],
    published: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // ========== ENTREPRISES ==========
  {
    slug: "infogerance-pme",
    title: "Infogérance PME Maroc | Contrat Maintenance Informatique Casablanca & Rabat",
    metaDescription: "Votre Service Informatique Externalisé (DSI) à partir de 1500 Dhs/mois. Support illimité, maintenance préventive, antivirus pro. Idéal PME.",
    heroTitle: "Votre Service Informatique Externalisé (DSI) à partir de 1500 Dhs/mois.",
    heroSubtitle: "Concentrez-vous sur votre business, on gère l'informatique. Plus de pannes, plus de lenteurs, plus d'excuses pour ne pas travailler. Idéal pour cabinets comptables, architectes, et TPE.",
    pricing: [
      {
        name: "Pack Start (jusqu'à 5 postes)",
        price: "1 500 Dhs HT / mois",
        description: "Support illimité, maintenance préventive, antivirus pro",
      },
      {
        name: "Pack Growth (6 à 15 postes)",
        price: "2 800 Dhs HT / mois",
        description: "Support illimité, maintenance préventive, antivirus pro",
      },
    ],
    content: `
      <h2>Le Pack "Sérénité PME" Comprend</h2>
      <ul>
        <li><strong>Support Illimité :</strong> Vos employés nous contactent directement sur WhatsApp Pro</li>
        <li><strong>Maintenance Préventive :</strong> On nettoie les PC tous les mois à distance</li>
        <li><strong>Antivirus Pro :</strong> Licence incluse pour tous les postes</li>
        <li><strong>Intervention Prioritaire :</strong> Prise en main en < 15 minutes</li>
      </ul>
    `,
    keywords: ["infogérance pme maroc", "contrat maintenance informatique", "dsi externalisé", "support it pme"],
    relatedBlogPosts: [],
    published: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: "cybersecurite",
    title: "Audit Cybersécurité PME Maroc | Protection Ransomware & Données",
    metaDescription: "Protégez votre PME contre le piratage et les Ransomwares. 70% des PME ne survivent pas à une perte totale de données. Audit Flash Gratuit 15 min.",
    heroTitle: "Protégez votre PME contre le piratage et les Ransomwares.",
    heroSubtitle: "70% des PME marocaines ne survivent pas à une perte totale de données. Ne soyez pas la prochaine victime. Nous sécurisons votre \"Forteresse Numérique\".",
    pricing: [
      {
        name: "Audit Flash Gratuit",
        price: "Gratuit",
        description: "15 minutes pour tout nouveau client",
      },
    ],
    content: `
      <h2>Nos Services Sécurité</h2>
      <ul>
        <li><strong>Audit de Vulnérabilité :</strong> On tente de pénétrer votre réseau pour trouver les failles</li>
        <li><strong>Protection Ransomware :</strong> Solutions de sauvegarde immuable (Cloud)</li>
        <li><strong>Formation Employés :</strong> Apprendre à ne pas cliquer sur les emails pièges (Phishing)</li>
      </ul>
      <p><strong>Offre Spéciale :</strong> Audit Flash Gratuit (15 min) pour tout nouveau client.</p>
    `,
    keywords: ["cybersécurité pme maroc", "protection ransomware", "audit sécurité", "sécurité informatique entreprise"],
    relatedBlogPosts: [],
    published: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: "reseau-wifi",
    title: "Installation Réseau Wifi Entreprise Maroc | Câblage & Configuration",
    metaDescription: "Un Wifi rapide et stable, partout dans vos bureaux. Installation bornes Wifi, Wifi Invité, VPN télétravail. Sur devis. Bureaux, Cafés, Riads, Hôtels.",
    heroTitle: "Un Wifi rapide et stable, partout dans vos bureaux.",
    heroSubtitle: "Fini le Wifi qui ne capte pas dans la salle de réunion ou la connexion qui rame quand tout le monde est là. Nous installons des solutions professionnelles (Ubiquiti / Cisco).",
    pricing: [
      {
        name: "Installation Réseau",
        price: "Sur Devis",
        description: "Installation personnalisée selon vos besoins",
      },
    ],
    content: `
      <h2>Intervention (Sur Devis)</h2>
      <ul>
        <li>Installation de bornes Wifi au plafond (Roaming transparent)</li>
        <li>Création d'un "Wifi Invité" sécurisé (pour vos clients)</li>
        <li>Configuration VPN pour le télétravail sécurisé</li>
        <li>Câblage réseau RJ45 et baie de brassage</li>
      </ul>
      <p><strong>Pour qui ?</strong> Bureaux, Cafés/Restaurants, Riads, Hôtels.</p>
    `,
    keywords: ["installation wifi entreprise", "réseau wifi maroc", "câblage réseau", "wifi professionnel"],
    relatedBlogPosts: [],
    published: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: "email-cloud",
    title: "Installation Office 365 & Google Workspace Maroc | Email Professionnel",
    metaDescription: "Passez Pro : Vos emails en @votre-entreprise.ma. Migration vers Google Workspace ou Microsoft 365. Configuration Teams/Meet. 500 Dhs HT installation + licences.",
    heroTitle: "Passez Pro : Vos emails en @votre-entreprise.ma.",
    heroSubtitle: "Utiliser @gmail.com ou @menara.ma nuit à votre image de marque. Passez à une solution professionnelle synchronisée sur PC et Mobile.",
    pricing: [
      {
        name: "Service d'Installation",
        price: "500 Dhs HT",
        description: "Frais d'installation unique",
      },
      {
        name: "Licences Mensuelles",
        price: "~60 Dhs/mois/user",
        description: "Coût des licences Google Workspace ou Microsoft 365",
      },
    ],
    content: `
      <h2>Ce que nous faisons</h2>
      <ul>
        <li>Création de votre nom de domaine (ex: contact@cabinet-expert.ma)</li>
        <li>Migration de vos anciens emails vers Google Workspace ou Microsoft 365</li>
        <li>Configuration de Teams/Meet pour vos réunions</li>
        <li>Stockage Cloud (Drive/OneDrive) pour partager vos fichiers</li>
      </ul>
      <p><strong>Tarif Service :</strong> 500 Dhs HT (Frais d'installation unique) + Coût des licences (~60 Dhs/mois/user).</p>
    `,
    keywords: ["email professionnel maroc", "office 365 maroc", "google workspace maroc", "migration email"],
    relatedBlogPosts: [],
    published: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Helper function to get service by slug from static data
export function getStaticServiceBySlug(slug: string): ServicePage | null {
  return staticServices.find((s) => s.slug === slug) || null;
}

// Helper function to get all static services
export function getAllStaticServices(): ServicePage[] {
  return staticServices;
}
