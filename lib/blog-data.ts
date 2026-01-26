import { Monitor, Cloud, ShieldAlert, LucideIcon } from "lucide-react";

export interface BlogPost {
  id: number;
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  fullContent: string[];
  icon: LucideIcon;
  date: string;
  dateISO: string;
  readTime: string;
  imageAlt: string;
  metaDescription: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "ordinateur-lent-astuces-booster-pc",
    category: "Dépannage",
    categoryColor: "bg-blue-500",
    title: "Ordinateur lent ? 5 astuces pour booster votre PC sans le formater",
    excerpt:
      "Découvrez comment nettoyer votre ordinateur et quand il est temps de remplacer votre disque dur par un SSD. Conseils de nos experts à Casablanca.",
    metaDescription:
      "Votre PC est lent ? Découvrez 5 astuces efficaces pour booster votre ordinateur sans formatage. Conseils d'experts en dépannage informatique à Casablanca.",
    keywords: [
      "ordinateur lent",
      "booster PC",
      "dépannage informatique Casablanca",
      "SSD Maroc",
      "optimisation Windows",
    ],
    fullContent: [
      "Votre ordinateur est devenu lent au fil du temps ? Pas de panique ! Avant de penser au formatage, voici 5 astuces efficaces testées par nos techniciens à Casablanca.",
      "**1. Nettoyez les fichiers temporaires**",
      "Utilisez l'outil de nettoyage de disque intégré à Windows ou CCleaner pour supprimer les fichiers inutiles qui encombrent votre système. Cette opération simple peut libérer plusieurs gigaoctets d'espace.",
      "**2. Désactivez les programmes au démarrage**",
      "Ouvrez le Gestionnaire des tâches (Ctrl+Shift+Échap) et désactivez les applications qui se lancent automatiquement au démarrage. Moins de programmes au démarrage = un PC plus rapide.",
      "**3. Vérifiez la présence de virus**",
      "Un antivirus à jour est essentiel. Nos experts recommandent une analyse complète au moins une fois par semaine. Les malwares sont souvent la cause cachée des ralentissements.",
      "**4. Augmentez la mémoire RAM**",
      "Si votre PC a moins de 8 Go de RAM, une mise à niveau peut considérablement améliorer les performances. Comptez entre 300 et 600 MAD pour 8 Go de RAM DDR4.",
      "**5. Passez au SSD**",
      "Le remplacement de votre disque dur classique par un SSD est la meilleure amélioration possible. Temps de démarrage divisé par 5 garanti ! À partir de 500 MAD installation comprise chez MarocTech Solutions.",
      "**Quand faut-il faire appel à un professionnel ?**",
      "Si malgré ces astuces votre ordinateur reste lent, il peut y avoir un problème matériel plus profond. Nos techniciens à Casablanca peuvent effectuer un diagnostic complet et vous proposer la meilleure solution.",
      "**Besoin d'aide ?** Nos techniciens interviennent à domicile partout à Casablanca pour diagnostiquer et optimiser votre ordinateur. Devis gratuit !",
    ],
    icon: Monitor,
    date: "15 Janvier 2026",
    dateISO: "2026-01-15",
    readTime: "5 min de lecture",
    imageAlt: "Technicien réparant un PC portable à Casablanca",
  },
  {
    id: 2,
    slug: "google-workspace-vs-office-365-pme-maroc",
    category: "Productivité",
    categoryColor: "bg-green-500",
    title: "Google Workspace vs Office 365 : Quel choix pour une PME marocaine ?",
    excerpt:
      "Comparatif complet des prix en Dirhams, des fonctionnalités Cloud et de la sécurité pour votre entreprise.",
    metaDescription:
      "Comparatif Google Workspace vs Microsoft 365 pour PME au Maroc. Prix en Dirhams, fonctionnalités et recommandations d'experts.",
    keywords: [
      "Google Workspace Maroc",
      "Office 365 PME",
      "Microsoft 365 prix Maroc",
      "Cloud entreprise Maroc",
      "productivité PME",
    ],
    fullContent: [
      "Le choix entre Google Workspace et Microsoft 365 est crucial pour la productivité de votre PME. Voici notre comparatif détaillé adapté au marché marocain.",
      "**Prix en Dirhams (par utilisateur/mois)**",
      "• Google Workspace Business Starter : ~65 MAD/mois (30 Go stockage)",
      "• Microsoft 365 Business Basic : ~55 MAD/mois (1 To stockage)",
      "• Google Workspace Business Standard : ~130 MAD/mois (2 To stockage)",
      "• Microsoft 365 Business Standard : ~125 MAD/mois (1 To + Apps desktop)",
      "**Stockage Cloud**",
      "Microsoft offre 1 To par utilisateur dès le plan de base, ce qui est un avantage considérable. Google commence à 30 Go mais propose 2 To sur les plans supérieurs.",
      "**Collaboration en temps réel**",
      "Google Docs excelle pour la collaboration simultanée avec une interface intuitive. Microsoft a rattrapé son retard avec la version web d'Office, mais Google reste leader sur ce point.",
      "**Applications de bureau**",
      "Si vous avez besoin d'Excel avancé (macros, tableaux croisés dynamiques complexes) ou Access, Microsoft 365 est incontournable. Google Sheets est suffisant pour 80% des usages.",
      "**Sécurité et conformité**",
      "Les deux solutions offrent un excellent niveau de sécurité. Microsoft propose des options de conformité plus avancées pour les secteurs réglementés (finance, santé).",
      "**Notre recommandation pour les PME marocaines**",
      "→ Équipe qui travaille principalement en ligne et collabore beaucoup : **Google Workspace**",
      "→ Besoin d'applications de bureau puissantes (Excel avancé, Access) : **Microsoft 365**",
      "→ Budget serré avec besoin de stockage : **Microsoft 365 Business Basic**",
      "**Besoin d'accompagnement ?**",
      "MarocTech Solutions est partenaire certifié Google et Microsoft. Nous vous aidons à choisir, migrer et former vos équipes. Contactez-nous pour un audit gratuit de vos besoins !",
    ],
    icon: Cloud,
    date: "10 Janvier 2026",
    dateISO: "2026-01-10",
    readTime: "8 min de lecture",
    imageAlt: "Comparaison Google Workspace et Microsoft 365 pour PME Maroc",
  },
  {
    id: 3,
    slug: "ransomware-maroc-proteger-donnees-entreprise",
    category: "Cybersécurité",
    categoryColor: "bg-red-500",
    title: "Ransomware au Maroc : Comment protéger les données de votre entreprise ?",
    excerpt:
      "Les attaques augmentent. Apprenez à sécuriser votre réseau et l'importance des sauvegardes externalisées.",
    metaDescription:
      "Guide complet anti-ransomware pour entreprises marocaines. Protégez vos données avec nos 5 mesures essentielles. Sécurité informatique Maroc.",
    keywords: [
      "ransomware Maroc",
      "cybersécurité entreprise",
      "sécurité informatique Maroc",
      "sauvegarde données",
      "protection virus",
    ],
    fullContent: [
      "Les attaques par ransomware ont augmenté de 150% au Maroc en 2025. Votre entreprise est-elle protégée ? Voici notre guide complet de cybersécurité.",
      "**Qu'est-ce qu'un ransomware ?**",
      "Un ransomware est un logiciel malveillant qui chiffre vos données et exige une rançon (souvent en Bitcoin) pour les débloquer. Les montants demandés aux entreprises marocaines varient de 10 000 à 500 000 MAD.",
      "**Les 5 mesures essentielles de protection**",
      "**1. Sauvegarde externalisée (règle 3-2-1)**",
      "Gardez 3 copies de vos données, sur 2 supports différents, dont 1 hors site (Cloud). MarocTech Solutions propose des solutions de backup Cloud à partir de 500 MAD/mois pour les PME.",
      "**2. Formation des employés**",
      "90% des attaques commencent par un email de phishing. Formez vos équipes à reconnaître les emails suspects, les pièces jointes dangereuses et les liens frauduleux.",
      "**3. Mises à jour automatiques**",
      "Windows, antivirus, applications... Tout doit être à jour. Les failles non corrigées sont la porte d'entrée préférée des hackers. Activez les mises à jour automatiques.",
      "**4. Antivirus professionnel**",
      "Oubliez les solutions gratuites pour votre entreprise. Investissez dans Kaspersky, Bitdefender ou ESET. Budget : à partir de 300 MAD/poste/an.",
      "**5. Segmentation réseau**",
      "Isolez les données sensibles sur des réseaux séparés. Si un poste est infecté, le ransomware ne doit pas pouvoir atteindre vos serveurs et données critiques.",
      "**Que faire en cas d'attaque ?**",
      "1. Déconnectez immédiatement les machines infectées du réseau",
      "2. Ne payez JAMAIS la rançon (aucune garantie de récupération, vous financez les criminels)",
      "3. Contactez immédiatement un expert en cybersécurité",
      "4. Signalez l'attaque aux autorités (DGSN Cybercriminalité)",
      "**Audit de sécurité gratuit**",
      "MarocTech Solutions propose des audits de sécurité gratuits pour les PME marocaines. Nous analysons vos vulnérabilités et vous proposons un plan de protection adapté à votre budget.",
    ],
    icon: ShieldAlert,
    date: "5 Janvier 2026",
    dateISO: "2026-01-05",
    readTime: "6 min de lecture",
    imageAlt: "Protection cybersécurité entreprise marocaine contre ransomware",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
