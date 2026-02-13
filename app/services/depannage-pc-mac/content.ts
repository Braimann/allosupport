// app/services/depannage-pc-mac/content.ts

export const serviceContent = {
  // ✅ SEO METADATA (Optimisé ranking)
  metadata: {
    title: "Dépannage PC & Mac Lent Maroc | Réparation à Distance 15 min",
    description: "PC ou Mac très lent ? Écran bleu, freeze, plantages ? Intervention à distance 15-45 min Casablanca, Rabat. Tarif 150 DH. Paiement après réparation. Satisfait ou remboursé.",
    keywords: [
      "dépannage PC à distance Maroc",
      "réparation ordinateur lent Casablanca",
      "PC lent Rabat",
      "Mac lent réparation Maroc",
      "écran bleu Windows Maroc",
      "ordinateur qui rame Casablanca",
      "technicien informatique à distance",
      "dépannage Mac Maroc",
      "PC qui freeze Casablanca",
      "ordinateur lent au démarrage Maroc",
    ],
    ogImage: "/images/services/depannage-pc-mac-og.jpg",
  },

  // ✅ HERO SECTION (Conversion-optimized)
  hero: {
    badge: "Dépannage PC & Mac -  Intervention 15 min",
    title: "PC ou Mac Lent ? On le Répare à Distance",
    subtitle: "Sans vous déplacer, sans laisser votre ordinateur",
    mainText: "Votre ordinateur rame ? Écrans bleus à répétition ? Logiciels qui plantent ? Nos techniciens interviennent à distance en 15 minutes chrono pour diagnostiquer et réparer PC Windows et Mac depuis Casablanca, Rabat ou partout au Maroc.",
    image: {
      url: "/images/services/depannage-pc-mac-hero.svg",
      alt: "Technicien réparant PC lent à distance Maroc",
    },
  },

  // ✅ SECTION "IDÉAL SI" (User intent matching)
  idealFor: {
    title: "Votre problème ressemble à ça ?",
    problems: [
      "💻 PC ou Mac extrêmement lent au démarrage (5-10 minutes)",
      "🔵 Écran bleu (BSOD Windows) qui revient sans arrêt",
      "❄️ Ordinateur qui freeze / se bloque régulièrement",
      "❌ Logiciels qui ne s'ouvrent plus ou plantent au lancement",
      "🔇 Pas de son ou webcam qui ne marche plus (Zoom/Teams)",
      "🐌 Navigation internet très lente malgré bonne connexion",
      "⚠️ Messages d'erreur Windows incompréhensibles",
      "🍎 Mac qui tourne en rond (roue arc-en-ciel)",
    ],
  },

  // ✅ TARIFS (Prix transparents)
  pricing: [
    {
      name: "Coup de Pouce",
      price: 150,
      duration: "< 30 min",
      description: "Intervention rapide problèmes simples",
      features: [
        "Diagnostic gratuit (10 min)",
        "Nettoyage système rapide",
        "Désactivation programmes au démarrage",
        "Configuration basique (son, webcam)",
        "Conseils optimisation",
      ],
      ideal: "PC lent depuis quelques jours, logiciel qui bug",
      popular: false,
    },
    {
      name: "Problème Complexe",
      price: 250,
      duration: "30-60 min",
      description: "Diagnostic approfondi + réparation complète",
      features: [
        "Tout du Coup de Pouce",
        "Analyse écran bleu (dump files)",
        "Réparation fichiers système Windows",
        "Nettoyage registre + disque",
        "Optimisation avancée RAM/CPU",
        "Mise à jour drivers critiques",
        "Garantie 7 jours",
      ],
      ideal: "Écran bleu fréquent, freeze grave, PC très lent",
      popular: true,
    },
    {
      name: "Forfait PME",
      price: 799,
      priceUnit: "/mois",
      duration: "Support illimité",
      description: "Maintenance continue pour entreprises",
      features: [
        "Interventions illimitées à distance",
        "Support prioritaire (réponse < 5 min)",
        "Monitoring proactif (alertes pannes)",
        "Rapport mensuel état parc informatique",
        "Conseiller dédié",
      ],
      ideal: "PME 5-20 PC, besoin support réactif",
      popular: false,
    },
  ],

  // ✅ NOTRE SOLUTION (Process clair)
  solution: {
    title: "Comment On Répare Votre PC/Mac à Distance",
    intro: "Pas besoin de débrancher votre ordinateur ni de traverser Casablanca. On intervient chez vous via connexion sécurisée.",
    steps: [
      {
        number: 1,
        title: "Diagnostic Gratuit (10 min)",
        description: "Contactez-nous sur WhatsApp. Notre technicien vous pose 3-4 questions pour comprendre le problème. On vous donne un premier diagnostic et un devis clair avant de commencer.",
        duration: "5-10 min",
        icon: "🔍",
      },
      {
        number: 2,
        title: "Connexion Sécurisée (AnyDesk/TeamViewer)",
        description: "On vous envoie un lien de téléchargement AnyDesk (gratuit, sûr, 30 secondes d'installation). Vous nous donnez le code d'accès temporaire. Vous voyez TOUT ce qu'on fait à l'écran en temps réel.",
        duration: "2-3 min",
        icon: "🔒",
      },
      {
        number: 3,
        title: "Réparation en Direct",
        description: "Notre technicien analyse les logs système, identifie la cause (programme lourd, driver défaillant, fichiers corrompus) et applique les corrections. Vous suivez l'intervention en direct et posez vos questions.",
        duration: "15-45 min",
        icon: "🛠️",
      },
      {
        number: 4,
        title: "Test & Validation",
        description: "On redémarre votre PC/Mac ensemble, on vérifie que tout fonctionne (vitesse, logiciels, son). Vous payez SEULEMENT si vous êtes satisfait. Conseils prévention inclus.",
        duration: "5 min",
        icon: "✅",
      },
    ],
  },

  // ✅ GARANTIES (Trust building)
  guarantees: [
    "✅ Paiement APRÈS réparation : vous ne payez que si le problème est résolu",
    "✅ Satisfait ou remboursé : si on ne répare pas, c'est gratuit",
    "✅ Sans déplacement : intervention depuis votre canapé à Casablanca, Rabat ou ailleurs",
    "✅ Vos données protégées : on ne touche jamais à vos fichiers personnels",
    "✅ Garantie 7 jours : si le problème revient, on le refixe gratuitement",
  ],

  // ✅ POURQUOI NOUS (USP)
  whyUs: {
    title: "Pourquoi AlloSupport plutôt que Derb Ghallef ?",
    reasons: [
      {
        title: "⚡ Intervention 15 min vs 2-3 jours",
        before: "Derb Ghallef : Déposer PC → Attendre 2-3 jours → Reprendre (+ transport 2h)",
        after: "AlloSupport : Appel WhatsApp → Connexion → Réparation 30 min → PC opérationnel",
      },
      {
        title: "🔒 Sécurité de vos données",
        before: "Risque : PC laissé chez un inconnu, accès total à vos fichiers",
        after: "Contrôle total : vous voyez tout en temps réel, on ne touche pas aux fichiers",
      },
      {
        title: "💰 Prix transparent",
        before: "\"Ça va coûter 200... ah non finalement 500 DH\" (surprises)",
        after: "Devis clair AVANT intervention. 150 ou 250 DH, pas de frais cachés",
      },
    ],
  },

  // ✅ FAQ (SEO-rich, répond aux vraies questions Google)
  faq: [
    {
      q: "Mon PC est très lent depuis quelques jours, c'est réparable à distance ?",
      a: "Oui, 90% des lenteurs PC/Mac sont réparables à distance : programmes qui se lancent au démarrage, disque saturé, trop de fichiers temporaires, ou drivers obsolètes. On diagnostique gratuitement en 10 minutes sur WhatsApp.",
    },
    {
      q: "Combien de temps dure la réparation d'un PC lent ?",
      a: "Entre 15 et 45 minutes selon la gravité. Problème simple (nettoyage système) = 15-20 min. Problème complexe (écran bleu récurrent, analyse logs) = 30-60 min. On vous donne une estimation après le diagnostic.",
    },
    {
      q: "Je suis à Casablanca, vous intervenez vraiment à distance ?",
      a: "Oui, partout au Maroc (Casablanca, Rabat, Marrakech, Fès, Tanger, Agadir). Vous avez juste besoin d'une connexion internet (WiFi ou 4G). Pas besoin de déplacer votre PC à Derb Ghallef.",
    },
    {
      q: "Comment ça marche la prise de contrôle à distance ? C'est sûr ?",
      a: "On utilise AnyDesk ou TeamViewer (logiciels sécurisés utilisés par des millions d'entreprises). Vous téléchargez en 30 secondes, vous nous donnez un code temporaire, et vous voyez TOUT ce qu'on fait à l'écran. Vous pouvez couper la connexion à tout moment.",
    },
    {
      q: "Vous réparez aussi les Mac (MacBook Air, Pro, iMac) ?",
      a: "Oui ! Nos techniciens maîtrisent macOS. Problèmes courants Mac : roue arc-en-ciel infinie, applications qui ne répondent plus, Mac lent après mise à jour macOS, ventilateur bruyant. Tarif identique PC.",
    },
    {
      q: "Mon écran devient bleu (Windows) avec un code d'erreur, c'est grave ?",
      a: "L'écran bleu (BSOD) peut venir d'un driver défaillant, RAM défectueuse, ou fichier système corrompu. On analyse les dump files à distance pour identifier la cause exacte. 80% des écrans bleus sont réparables sans changer de matériel.",
    },
    {
      q: "Quand dois-je payer ? Et si vous ne réparez pas ?",
      a: "Vous payez APRÈS la réparation, uniquement si votre PC/Mac fonctionne correctement. Si on ne résout pas le problème, c'est gratuit (diagnostic offert). Paiement par carte bancaire CMI, Cash Plus, ou virement.",
    },
    {
      q: "Vous touchez à mes fichiers personnels (photos, documents) ?",
      a: "Non, jamais. On intervient uniquement sur les paramètres système, logiciels et configurations. Vos fichiers personnels (photos, documents, vidéos) ne sont jamais ouverts ni copiés. Confidentialité garantie.",
    },
    {
      q: "Mon PC a 7-8 ans, ça vaut le coup de le réparer ?",
      a: "Si votre PC a 7+ ans et qu'il est très lent même après nettoyage, on vous le dira honnêtement lors du diagnostic gratuit. Parfois un upgrade RAM (150-300 DH) ou SSD (400-600 DH) lui redonne 3-4 ans de vie. On vous conseille la meilleure option.",
    },
  ],

  // ✅ PROBLÈMES SPÉCIFIQUES TRAITÉS (SEO long-tail)
  commonIssues: {
    title: "Problèmes Courants qu'on Répare à Distance",
    list: [
      {
        problem: "PC Windows très lent au démarrage",
        cause: "Trop de programmes au démarrage, disque saturé, fichiers fragmentés",
        solution: "Désactivation programmes inutiles, nettoyage disque, défragmentation",
        duration: "20-30 min",
      },
      {
        problem: "Écran bleu (BSOD) Windows 10/11",
        cause: "Driver incompatible, RAM défectueuse, mise à jour Windows buggée",
        solution: "Analyse dump files, rollback driver, test RAM, désinstallation update problématique",
        duration: "30-45 min",
      },
      {
        problem: "Mac avec roue arc-en-ciel infinie",
        cause: "Disque saturé (< 10 Go libres), application qui bug, permissions fichiers",
        solution: "Libération espace disque, réparation permissions, réinitialisation SMC/NVRAM",
        duration: "25-40 min",
      },
      {
        problem: "Logiciels qui plantent (Excel, Chrome, Zoom)",
        cause: "Version obsolète, conflit avec autre logiciel, fichiers temporaires corrompus",
        solution: "Mise à jour logiciel, nettoyage cache, réinstallation propre si nécessaire",
        duration: "15-25 min",
      },
      {
        problem: "Pas de son ou webcam qui ne marche pas",
        cause: "Driver audio/vidéo désactivé ou obsolète, paramètres Windows/Mac incorrects",
        solution: "Réinstallation drivers, configuration audio/vidéo, test Zoom/Teams",
        duration: "15-20 min",
      },
    ],
  },

  // ✅ SERVICES LIÉS (Silo SEO intelligent)
  relatedServices: [
    {
      slug: "suppression-virus",
      title: "Suppression Virus & Malware",
      excerpt: "Pubs intempestives, PC bloqué ? Nettoyage complet à distance 250 DH",
      category: "Sécurité",
    },
    {
      slug: "installation-config",
      title: "Installation Logiciels & Imprimantes",
      excerpt: "On installe Windows, Office, imprimantes pour vous sans bouger",
      category: "Installation",
    },
    {
      slug: "recuperation-donnees",
      title: "Récupération de Données",
      excerpt: "Fichiers supprimés, disque formaté ? On récupère vos données",
      category: "Recovery",
    },
  ],
} as const;

export type ServiceContent = typeof serviceContent;
