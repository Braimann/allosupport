/**
 * Blog posts - source unique locale (sans Firebase).
 * Même URLs : /blog, /blog/[slug]
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categoryColor: string;
  imageUrl: string;
  imageAlt: string;
  metaDescription: string;
  keywords: string[];
  author: string;
  readTime: string;
  publishedAt: string;
  updatedAt: string;
}

function p(text: string): string {
  return "<p class=\"my-3 text-gray-700 leading-relaxed\">" + text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") + "</p>";
}
function toHtml(paragraphs: string[]): string {
  return paragraphs.map((t) => p(t)).join("\n");
}

const BLOG_POSTS: BlogPost[] = [
  // 1. Ordinateur lent
  {
    slug: "ordinateur-lent-astuces-booster-pc",
    title: "Ordinateur lent ? 5 astuces pour booster votre PC sans le formater",
    excerpt: "Découvrez comment nettoyer votre ordinateur et quand il est temps de remplacer votre disque dur par un SSD. Conseils de nos experts à Casablanca.",
    metaDescription: "Votre PC est lent ? Découvrez 5 astuces efficaces pour booster votre ordinateur sans formatage. Conseils d'experts en dépannage informatique à Casablanca.",
    category: "Dépannage",
    categoryColor: "bg-blue-500",
    imageUrl: "",
    imageAlt: "Technicien réparant un PC portable à Casablanca",
    keywords: ["ordinateur lent", "booster PC", "dépannage informatique Casablanca", "SSD Maroc", "optimisation Windows"],
    author: "Équipe AlloSupport",
    readTime: "5 min de lecture",
    publishedAt: "2026-01-15",
    updatedAt: "2026-01-15",
    content: toHtml([
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
      "Le remplacement de votre disque dur classique par un SSD est la meilleure amélioration possible. Temps de démarrage divisé par 5 garanti ! À partir de 500 MAD installation comprise chez AlloSupport.",
      "**Quand faut-il faire appel à un professionnel ?**",
      "Si malgré ces astuces votre ordinateur reste lent, il peut y avoir un problème matériel plus profond. Nos techniciens à Casablanca peuvent effectuer un diagnostic complet et vous proposer la meilleure solution.",
      "**Besoin d'aide ?** Nos techniciens interviennent à domicile partout à Casablanca pour diagnostiquer et optimiser votre ordinateur. <a href=\"/depannage-informatique\" class=\"text-blue-600 font-bold hover:underline\">Accélérer mon PC maintenant</a> en 15 min, <a href=\"/devis\" class=\"text-primary-600 hover:text-primary-700 underline\">devis gratuit</a> ou notre <a href=\"/services\" class=\"text-primary-600 hover:text-primary-700 underline\">catalogue de services</a> et l'article <a href=\"/blog/vision-maroc-2030-transformation-digitale-pme\" class=\"text-primary-600 hover:text-primary-700 underline\">Vision Maroc 2030</a> pour la digitalisation PME.",
    ]),
  },
  // 2. Google Workspace vs Office 365
  {
    slug: "google-workspace-vs-office-365-pme-maroc",
    title: "Google Workspace vs Office 365 : Quel choix pour une PME marocaine ?",
    excerpt: "Comparatif complet des prix en Dirhams, des fonctionnalités Cloud et de la sécurité pour votre entreprise.",
    metaDescription: "Comparatif Google Workspace vs Microsoft 365 pour PME au Maroc. Prix en Dirhams, fonctionnalités et recommandations d'experts.",
    category: "Productivité",
    categoryColor: "bg-green-500",
    imageUrl: "",
    imageAlt: "Comparaison Google Workspace et Microsoft 365 pour PME Maroc",
    keywords: ["Google Workspace Maroc", "Office 365 PME", "Microsoft 365 prix Maroc", "Cloud entreprise Maroc", "productivité PME"],
    author: "Équipe AlloSupport",
    readTime: "8 min de lecture",
    publishedAt: "2026-01-10",
    updatedAt: "2026-01-10",
    content: toHtml([
      "Le choix entre Google Workspace et Microsoft 365 est crucial pour la productivité de votre PME. Voici notre comparatif détaillé adapté au marché marocain.",
      "**Prix en Dirhams (par utilisateur/mois)**",
      "• Google Workspace Business Starter : ~65 MAD/mois (30 Go stockage) • Microsoft 365 Business Basic : ~55 MAD/mois (1 To stockage) • Google Workspace Business Standard : ~130 MAD/mois (2 To stockage) • Microsoft 365 Business Standard : ~125 MAD/mois (1 To + Apps desktop)",
      "**Stockage Cloud**",
      "Microsoft offre 1 To par utilisateur dès le plan de base, ce qui est un avantage considérable. Google commence à 30 Go mais propose 2 To sur les plans supérieurs.",
      "**Collaboration en temps réel**",
      "Google Docs excelle pour la collaboration simultanée avec une interface intuitive. Microsoft a rattrapé son retard avec la version web d'Office, mais Google reste leader sur ce point.",
      "**Applications de bureau**",
      "Si vous avez besoin d'Excel avancé (macros, tableaux croisés dynamiques complexes) ou Access, Microsoft 365 est incontournable. Google Sheets est suffisant pour 80% des usages.",
      "**Sécurité et conformité**",
      "Les deux solutions offrent un excellent niveau de sécurité. Microsoft propose des options de conformité plus avancées pour les secteurs réglementés (finance, santé).",
      "**Notre recommandation pour les PME marocaines**",
      "→ Équipe qui travaille principalement en ligne et collabore beaucoup : **Google Workspace** → Besoin d'applications de bureau puissantes (Excel avancé, Access) : **Microsoft 365** → Budget serré avec besoin de stockage : **Microsoft 365 Business Basic**",
      "**Besoin d'accompagnement ?** AlloSupport vous aide à choisir, migrer et former vos équipes. Pour une <a href=\"/support-pme\" class=\"text-blue-600 font-bold hover:underline\">gestion de parc informatique PME</a>, <a href=\"/contact\" class=\"text-primary-600 hover:text-primary-700 underline\">contactez-nous</a> pour un audit gratuit ! Voir aussi notre <a href=\"/blog/vision-maroc-2030-transformation-digitale-pme\" class=\"text-primary-600 hover:text-primary-700 underline\">guide Vision Maroc 2030</a> et <a href=\"/devis\" class=\"text-primary-600 hover:text-primary-700 underline\">demander un devis</a>.",
    ]),
  },
  // 3. Ransomware
  {
    slug: "ransomware-maroc-proteger-donnees-entreprise",
    title: "Ransomware au Maroc : Comment protéger les données de votre entreprise ?",
    excerpt: "Les attaques augmentent. Apprenez à sécuriser votre réseau et l'importance des sauvegardes externalisées.",
    metaDescription: "Guide complet anti-ransomware pour entreprises marocaines. Protégez vos données avec nos 5 mesures essentielles. Sécurité informatique Maroc.",
    category: "Cybersécurité",
    categoryColor: "bg-red-500",
    imageUrl: "",
    imageAlt: "Protection cybersécurité entreprise marocaine contre ransomware",
    keywords: ["ransomware Maroc", "cybersécurité entreprise", "sécurité informatique Maroc", "sauvegarde données", "protection virus"],
    author: "Équipe AlloSupport",
    readTime: "6 min de lecture",
    publishedAt: "2026-01-05",
    updatedAt: "2026-01-05",
    content: toHtml([
      "Les attaques par ransomware ont augmenté de 150% au Maroc en 2025. Votre entreprise est-elle protégée ? Voici notre guide complet de cybersécurité.",
      "**Qu'est-ce qu'un ransomware ?**",
      "Un ransomware est un logiciel malveillant qui chiffre vos données et exige une rançon (souvent en Bitcoin) pour les débloquer. Les montants demandés aux entreprises marocaines varient de 10 000 à 500 000 MAD.",
      "**Les 5 mesures essentielles de protection**",
      "**1. Sauvegarde externalisée (règle 3-2-1)** : Gardez 3 copies de vos données, sur 2 supports différents, dont 1 hors site (Cloud).",
      "**2. Formation des employés** : 90% des attaques commencent par un email de phishing. Formez vos équipes à reconnaître les emails suspects.",
      "**3. Mises à jour automatiques** : Windows, antivirus, applications... Tout doit être à jour.",
      "**4. Antivirus professionnel** : Investissez dans Kaspersky, Bitdefender ou ESET. Budget : à partir de 300 MAD/poste/an.",
      "**5. Segmentation réseau** : Isolez les données sensibles sur des réseaux séparés.",
      "**Que faire en cas d'attaque ?** Déconnectez immédiatement les machines infectées, ne payez JAMAIS la rançon, contactez un expert en cybersécurité, signalez aux autorités (DGSN Cybercriminalité).",
      "**Audit de sécurité gratuit** : AlloSupport propose des audits de sécurité pour les PME marocaines. Découvrez notre <a href=\"/antivirus-maroc\" class=\"text-blue-600 font-bold hover:underline\">protection antivirus professionnelle</a>. <a href=\"/contact\" class=\"text-primary-600 hover:text-primary-700 underline\">Contactez-nous</a>. Lisez notre <a href=\"/blog/vision-maroc-2030-transformation-digitale-pme\" class=\"text-primary-600 hover:text-primary-700 underline\">Vision Maroc 2030</a> et <a href=\"/services\" class=\"text-primary-600 hover:text-primary-700 underline\">nos services</a>.",
    ]),
  },
  // 4. Vision Maroc 2030
  {
    slug: "vision-maroc-2030-transformation-digitale-pme",
    title: "Vision Maroc 2030 : Comment la Transformation Digitale Révolutionne les PME Marocaines",
    excerpt: "Découvrez comment la Vision Maroc 2030 transforme le paysage digital des PME. Enjeux, opportunités et solutions informatiques pour réussir votre transition numérique.",
    metaDescription: "Guide complet sur la Vision Maroc 2030 et son impact sur la digitalisation des PME. Opportunités, défis informatiques et solutions pour réussir en 2026.",
    category: "Infogérance",
    categoryColor: "bg-orange-500",
    imageUrl: "/blog/2030.webp",
    imageAlt: "Vision Maroc 2030 et transformation digitale des PME au Maroc - Digitalisation, PME, Casablanca, Rabat, Fès, Marrakech, Agadir",
    keywords: ["vision maroc 2030", "transformation digitale maroc", "digitalisation pme maroc", "maroc digital 2030", "infrastructure informatique maroc"],
    author: "Équipe AlloSupport",
    readTime: "8 min de lecture",
    publishedAt: "2026-02-02",
    updatedAt: "2026-02-02",
    content: [
      '<p class="my-3 text-gray-700 leading-relaxed">En 2026, le Maroc franchit une étape décisive dans sa transformation digitale. La <strong>Vision Maroc 2030</strong>, ambitieux projet gouvernemental, place la digitalisation au cœur de la stratégie de développement du Royaume. Pour les PME marocaines, cette transformation n\'est plus une option mais une <strong>nécessité</strong>.</p>',
      '<p class="my-3 text-gray-700 leading-relaxed">Dans ce guide complet, nous explorons l\'impact réel de la Vision Maroc 2030 sur les PME, les défis techniques à relever et les solutions pratiques pour réussir votre digitalisation.</p>',
      '<h2 class="text-2xl font-bold mt-8 mb-3 text-gray-900">Qu\'est-ce que la Vision Maroc 2030 ?</h2>',
      '<h3 class="text-xl font-bold mt-6 mb-2 text-gray-900">Les objectifs stratégiques</h3>',
      '<p class="my-3 text-gray-700 leading-relaxed">La Vision Maroc 2030 s\'articule autour de <strong>trois piliers majeurs</strong> :</p>',
      '<ul class="list-disc pl-6 my-3 space-y-1"><li><strong>Économie diversifiée et compétitive</strong> : Le Maroc vise à devenir un hub technologique régional. Multiplier par 3 la contribution du digital au PIB d\'ici 2030.</li><li><strong>Inclusion numérique</strong> : Internet haut débit à 100 % des foyers, 500 000 jeunes formés aux métiers du digital.</li><li><strong>Administration digitale</strong> : Dématérialisation complète des services publics.</li></ul>',
      '<h3 class="text-xl font-bold mt-6 mb-2 text-gray-900">Chiffres clés 2026</h3>',
      '<ul class="list-disc pl-6 my-3 space-y-1"><li>Taux de pénétration internet : 88 % (vs 65 % en 2020)</li><li>42 % des PME ont entamé leur transformation digitale</li><li>15 milliards DH alloués au secteur IT (2021-2026)</li><li>+85 000 emplois dans le numérique depuis 2020</li><li>E-commerce : +220 % de croissance</li></ul>',
      '<h2 class="text-2xl font-bold mt-8 mb-3 text-gray-900">Impact concret sur les PME marocaines</h2>',
      '<h3 class="text-xl font-bold mt-6 mb-2 text-gray-900">Opportunités majeures</h3>',
      '<p class="my-3 text-gray-700 leading-relaxed"><strong>Accès à de nouveaux marchés</strong> : Une PME à Fès peut vendre à Casablanca, Agadir ou à l\'international sans magasin physique. E-commerce, marketplaces, export digital.</p>',
      '<p class="my-3 text-gray-700 leading-relaxed"><strong>Optimisation opérationnelle</strong> : ERP cloud, CRM, visioconférence (-40 % déplacements), signature électronique. Une PME de Casablanca a réduit ses coûts administratifs de 35 % en 2 ans.</p>',
      '<p class="my-3 text-gray-700 leading-relaxed"><strong>Travail hybride</strong> : 67 % des PME autorisent le télétravail partiel. Prérequis : PC pro, fibre 100 Mbps, VPN, outils collaboration (Teams, Zoom, Slack).</p>',
      '<h3 class="text-xl font-bold mt-6 mb-2 text-gray-900">Défis informatiques</h3>',
      '<p class="my-3 text-gray-700 leading-relaxed"><strong>Infrastructure obsolète</strong> : 58 % des PME utilisent du matériel de plus de 5 ans. Solution : audit IT + plan de renouvellement sur 2-3 ans. <a href="/contact" class="text-primary-600 hover:text-primary-700 underline">AlloSupport propose des audits gratuits</a>.</p>',
      '<p class="my-3 text-gray-700 leading-relaxed"><strong>Budget limité</strong> : Matériel 80 000-150 000 DH, logiciels 20 000-40 000 DH/an. Solutions : leasing, subventions Maroc PME (30 %), cloud en mensualités.</p>',
      '<p class="my-3 text-gray-700 leading-relaxed"><strong>Cybersécurité</strong> : +180 % de ransomwares au Maroc en 2025. Coût moyen d\'une attaque PME : 250 000 DH. Phishing, ransomware, vol de données. Formation et support externe essentiels.</p>',
      '<h2 class="text-2xl font-bold mt-8 mb-3 text-gray-900">Besoins informatiques PME 2030</h2>',
      '<p class="my-3 text-gray-700 leading-relaxed">Configuration minimale 2026 : processeur i5/Ryzen 5, 16 Go RAM, 512 Go SSD, écran Full HD 24". Budget par poste : 6 000-10 000 DH. Laptops mobilité : 8 000-15 000 DH. Réseau : fibre 100 Mbps, WiFi pro, firewall, onduleur.</p>',
      '<p class="my-3 text-gray-700 leading-relaxed">Logiciels : Microsoft 365 (80 DH/user/mois) ou Google Workspace (60 DH), Sage/Zoho pour la compta, CRM (HubSpot, Monday.com), antivirus entreprise, VPN, sauvegarde cloud.</p>',
      '<h2 class="text-2xl font-bold mt-8 mb-3 text-gray-900">Comment AlloSupport accompagne la Vision 2030</h2>',
      '<p class="my-3 text-gray-700 leading-relaxed"><strong>Audit infrastructure gratuit</strong> (3 h), <strong>Packs clés en main</strong> : Starter PME 15 000 DH (5 PC, Windows 11, M365, antivirus, formation 2 h), Croissance 45 000 DH (10 postes, cloud, réseau, CRM), Transformation complète 120 000+ DH. Support continu 2 500 DH/mois, formations sur-mesure 1 500 DH/jour.</p>',
      '<h2 class="text-2xl font-bold mt-8 mb-3 text-gray-900">Conclusion</h2>',
      '<p class="my-3 text-gray-700 leading-relaxed">La Vision Maroc 2030 n\'est pas un slogan : c\'est une <strong>transformation profonde</strong> de l\'économie. Pour les PME : se digitaliser ou disparaître. AlloSupport accompagne chaque PME avec des solutions adaptées à tous les budgets, du <a href="/devis" class="text-primary-600 hover:text-primary-700 underline">diagnostic gratuit</a> aux installations complètes.</p>',
      '<p class="my-3 text-gray-700 leading-relaxed"><strong>Prêt à préparer votre PME pour 2030 ?</strong> <a href="/devis" class="text-primary-600 hover:text-primary-700 underline">Demander un audit gratuit</a> • Téléphone : <a href="tel:+212775237038" class="text-primary-600 hover:text-primary-700 underline">07 75 23 70 38</a> • <a href="https://wa.me/212775237038" class="text-primary-600 hover:text-primary-700 underline">WhatsApp</a> • Casablanca, Rabat, Fès, Marrakech, Agadir.</p>',
      '<p class="my-3 text-gray-700 leading-relaxed">Articles reliés : <a href="/blog/ordinateur-lent-astuces-booster-pc" class="text-primary-600 hover:text-primary-700 underline">PC lent</a>, <a href="/blog" class="text-primary-600 hover:text-primary-700 underline">Blog</a>, <a href="/services" class="text-primary-600 hover:text-primary-700 underline">Services</a>, <a href="/support-pme" class="text-primary-600 hover:text-primary-700 underline">Support PME</a>, <a href="/devis" class="text-primary-600 hover:text-primary-700 underline">Devis</a>, <a href="/contact" class="text-primary-600 hover:text-primary-700 underline">Contact</a>.</p>',
    ].join("\n"),
  },
  // 5. Mon PC est lent - 10 solutions (Spécial Maroc)
  {
    slug: "mon-pc-est-lent-10-solutions-simples-pour-laccelerer-special-maroc",
    title: "Mon PC est Lent : 10 Solutions Simples pour l'Accélérer (Spécial Maroc)",
    excerpt: "Votre ordinateur rame au Maroc ? Coupures, chaleur, poussière : 10 solutions pratiques pour accélérer votre PC sans le formater. Conseils adaptés au climat et aux usages locaux.",
    metaDescription: "PC lent au Maroc ? 10 solutions simples pour accélérer votre ordinateur. Nettoyage, SSD, RAM, antivirus. Conseils experts AlloSupport Casablanca, Rabat, Fès.",
    category: "Dépannage",
    categoryColor: "bg-blue-500",
    imageUrl: "",
    imageAlt: "PC lent Maroc - 10 solutions pour accélérer son ordinateur",
    keywords: ["pc lent maroc", "ordinateur lent", "accelerer pc", "pc lent solutions", "dépannage pc maroc"],
    author: "Équipe AlloSupport",
    readTime: "7 min de lecture",
    publishedAt: "2026-01-20",
    updatedAt: "2026-01-20",
    content: toHtml([
      "Votre PC rame, surtout en été avec la chaleur marocaine ? Voici 10 solutions simples pour l'accélérer sans formatage, adaptées aux conditions du Maroc (coupures, poussière, connexions parfois instables).",
      "**1. Nettoyer les fichiers temporaires et le disque** : Libérez de l'espace avec l'outil de nettoyage Windows ou CCleaner. **2. Désactiver les programmes au démarrage** : Gestionnaire des tâches → Démarrage. **3. Vérifier les mises à jour Windows** : Les mises à jour corrigent des failles et améliorent les perfs. **4. Scanner les virus et malwares** : Un PC infecté ralentit. Utilisez un antivirus à jour. **5. Augmenter la RAM** : 8 Go minimum, 16 Go recommandé pour le multitâche. **6. Passer au SSD** : La meilleure upgrade possible ; démarrage et logiciels bien plus rapides. **7. Nettoyer la poussière** : En climat marocain la poussière encrasse les ventilateurs. Voir notre <a href=\"/blog/nettoyer-pc-poussiere-maroc-tuto\" class=\"text-primary-600 hover:text-primary-700 underline\">tuto nettoyage PC</a>. **8. Utiliser une multiprise avec parafoudre** : Protégez contre les micro-coupures. **9. Fermer les onglets et apps inutiles** : Chrome et autres consomment beaucoup de RAM. **10. Faire appel à un pro** : <a href=\"/devis\" class=\"text-primary-600 hover:text-primary-700 underline\">Devis gratuit</a> AlloSupport – <a href=\"/services\" class=\"text-primary-600 hover:text-primary-700 underline\">services</a> à Casablanca, Rabat, Fès, Marrakech, Agadir.",
    ]),
  },
  // 6. PC lent 10 solutions rapides Maroc 2026
  {
    slug: "pc-lent-10-solutions-rapides-maroc",
    title: "PC Lent au Maroc ? 10 Solutions Rapides pour Accélérer Votre Ordinateur (2026)",
    excerpt: "Guide 2026 : 10 solutions rapides pour un PC lent au Maroc. SSD, RAM, nettoyage, antivirus. Intervention à distance en 15 minutes.",
    metaDescription: "PC lent en 2026 au Maroc ? 10 solutions rapides pour accélérer votre ordinateur. SSD, RAM, nettoyage. AlloSupport intervient à distance.",
    category: "Dépannage",
    categoryColor: "bg-blue-500",
    imageUrl: "",
    imageAlt: "Solutions rapides PC lent Maroc 2026",
    keywords: ["pc lent", "solutions pc lent", "accelerer ordinateur maroc", "pc lent 2026"],
    author: "Équipe AlloSupport",
    readTime: "5 min de lecture",
    publishedAt: "2026-01-22",
    updatedAt: "2026-01-22",
    content: toHtml([
      "En 2026, un PC lent n'est plus une fatalité. Voici 10 solutions rapides applicables au Maroc : mise à jour Windows, nettoyage disque, désactivation du démarrage, antivirus, mise à niveau RAM/SSD, nettoyage physique (poussière), optimisation des logiciels de démarrage.",
      "AlloSupport intervient à distance en 15 minutes pour diagnostiquer et appliquer ces solutions. <a href=\"/blog/ordinateur-lent-astuces-booster-pc\" class=\"text-primary-600 hover:text-primary-700 underline\">Voir aussi notre article 5 astuces</a>, <a href=\"/blog/maintenance-preventive-pc-entreprise-maroc\" class=\"text-primary-600 hover:text-primary-700 underline\">maintenance préventive</a>, <a href=\"/devis\" class=\"text-primary-600 hover:text-primary-700 underline\">devis gratuit</a>, <a href=\"/contact\" class=\"text-primary-600 hover:text-primary-700 underline\">contact</a>.",
    ]),
  },
  // 7. Guide achat ordinateur professionnel Maroc 2026
  {
    slug: "guide-achat-ordinateur-professionnel-maroc-2026",
    title: "Guide Complet 2026 : Choisir le Bon Ordinateur Professionnel au Maroc",
    excerpt: "Quel PC ou laptop professionnel acheter au Maroc en 2026 ? Critères, marques, prix en DH, où acheter. Guide AlloSupport.",
    metaDescription: "Guide achat ordinateur professionnel au Maroc 2026. Critères, prix DH, laptop business. Conseils AlloSupport pour PME et travailleurs.",
    category: "Dépannage",
    categoryColor: "bg-blue-500",
    imageUrl: "",
    imageAlt: "Guide achat ordinateur professionnel Maroc 2026",
    keywords: ["achat pc maroc", "ordinateur professionnel", "laptop business maroc", "pc entreprise 2026"],
    author: "Équipe AlloSupport",
    readTime: "8 min de lecture",
    publishedAt: "2026-01-25",
    updatedAt: "2026-01-25",
    content: toHtml([
      "Choisir un ordinateur professionnel au Maroc en 2026 : processeur (i5/Ryzen 5 minimum), 16 Go RAM, SSD 512 Go, écran Full HD, garantie locale. Budget indicatif : 6 000 à 15 000 DH selon usage.",
      "Où acheter : distributeurs agréés, e-commerce (attention aux garanties). Pour le télétravail, privilégiez autonomie et webcam. Pour la bureautique lourde, privilégiez RAM et SSD. <a href=\"/blog/teletravail-maroc-equipement-informatique\" class=\"text-primary-600 hover:text-primary-700 underline\">Équipement télétravail</a>, <a href=\"/blog/vision-maroc-2030-transformation-digitale-pme\" class=\"text-primary-600 hover:text-primary-700 underline\">Vision 2030</a>, <a href=\"/services\" class=\"text-primary-600 hover:text-primary-700 underline\">nos services</a>, <a href=\"/devis\" class=\"text-primary-600 hover:text-primary-700 underline\">devis</a>.",
    ]),
  },
  // 8. Cybersécurité PME Maroc guide 2026
  {
    slug: "cybersecurite-pme-maroc-guide-2026",
    title: "Cybersécurité pour PME au Maroc : Guide Complet 2026",
    excerpt: "Sécurisez votre entreprise : guide cybersécurité PME Maroc 2026. Ransomware, phishing, mots de passe, sauvegardes, formation.",
    metaDescription: "Guide cybersécurité PME Maroc 2026. Protection ransomware, phishing, sauvegardes. Sécurité informatique entreprise.",
    category: "Cybersécurité",
    categoryColor: "bg-red-500",
    imageUrl: "",
    imageAlt: "Cybersécurité PME Maroc guide 2026",
    keywords: ["cybersécurité maroc", "sécurité informatique pme", "protection données", "ransomware pme"],
    author: "Équipe AlloSupport",
    readTime: "9 min de lecture",
    publishedAt: "2026-01-28",
    updatedAt: "2026-01-28",
    content: toHtml([
      "La cybersécurité pour les PME au Maroc en 2026 : enjeux (ransomware, phishing, vol de données), bonnes pratiques (mots de passe forts, 2FA, sauvegardes 3-2-1, antivirus pro, mises à jour, formation des employés).",
      "Budget raisonnable : antivirus, sauvegarde cloud, formation. Pour un <a href=\"/support-pme\" class=\"text-blue-600 font-bold hover:underline\">Audit de sécurité IT gratuit</a>, contactez-nous. En cas d'incident : isoler les postes, ne pas payer la rançon, contacter un expert. <a href=\"/blog/ransomware-maroc-proteger-donnees-entreprise\" class=\"text-primary-600 hover:text-primary-700 underline\">Ransomware Maroc</a>, <a href=\"/blog/vision-maroc-2030-transformation-digitale-pme\" class=\"text-primary-600 hover:text-primary-700 underline\">Vision 2030</a>, <a href=\"/contact\" class=\"text-primary-600 hover:text-primary-700 underline\">contact</a>, <a href=\"/devis\" class=\"text-primary-600 hover:text-primary-700 underline\">devis</a>.",
    ]),
  },
  // 9. Récupération données disque dur Maroc
  {
    slug: "recuperation-donnees-disque-dur-maroc",
    title: "Récupération Données Maroc : Tout Savoir sur la Restauration de Fichiers Perdus",
    excerpt: "Disque dur endommagé, fichiers supprimés ? Guide récupération de données au Maroc. Logiciels, professionnels, prix, bonnes pratiques.",
    metaDescription: "Récupération données Maroc. Disque dur endommagé, fichiers perdus. Restauration logicielle et professionnelle. Conseils AlloSupport.",
    category: "Dépannage",
    categoryColor: "bg-blue-500",
    imageUrl: "",
    imageAlt: "Récupération données disque dur Maroc",
    keywords: ["récupération données", "disque dur endommagé", "restauration fichiers maroc", "données perdues"],
    author: "Équipe AlloSupport",
    readTime: "6 min de lecture",
    publishedAt: "2026-02-01",
    updatedAt: "2026-02-01",
    content: toHtml([
      "Récupérer des données perdues au Maroc : suppression accidentelle (logiciels de récupération, ne plus écrire sur le disque), disque dur qui claque (arrêt immédiat, labo spécialisé), sauvegardes préventives (règle 3-2-1).",
      "AlloSupport propose une tentative de récupération logicielle à distance. Pour un <a href=\"/depannage-informatique\" class=\"text-blue-600 font-bold hover:underline\">diagnostic panne disque dur</a>, contactez-nous. Si le disque est physiquement endommagé, orientation vers un partenaire labo. <a href=\"/services\" class=\"text-primary-600 hover:text-primary-700 underline\">Service récupération données</a>, <a href=\"/blog/cybersecurite-pme-maroc-guide-2026\" class=\"text-primary-600 hover:text-primary-700 underline\">cybersécurité</a>, <a href=\"/devis\" class=\"text-primary-600 hover:text-primary-700 underline\">devis</a>, <a href=\"/contact\" class=\"text-primary-600 hover:text-primary-700 underline\">contact</a>.",
    ]),
  },
  // 10. Windows 11 vs 10 Maroc 2026
  {
    slug: "windows-11-vs-10-maroc-2026",
    title: "Windows 11 vs Windows 10 au Maroc : Quel Système Choisir en 2026 ?",
    excerpt: "Windows 11 ou Windows 10 en 2026 au Maroc ? Comparatif compatibilité, performances, sécurité. Faut-il migrer ?",
    metaDescription: "Windows 11 vs Windows 10 Maroc 2026. Quel OS choisir, migration, compatibilité. Conseils AlloSupport.",
    category: "Dépannage",
    categoryColor: "bg-blue-500",
    imageUrl: "",
    imageAlt: "Windows 11 vs Windows 10 Maroc 2026",
    keywords: ["windows 11 maroc", "windows 10 vs 11", "mise à jour windows", "windows 2026"],
    author: "Équipe AlloSupport",
    readTime: "6 min de lecture",
    publishedAt: "2026-02-05",
    updatedAt: "2026-02-05",
    content: toHtml([
      "En 2026, Windows 10 approche de la fin du support. Windows 11 offre plus de sécurité et des performances optimisées sur matériel récent ; en revanche, certains PC plus anciens ne sont pas éligibles.",
      "Recommandation : si votre PC est compatible et récent, passer à Windows 11. Sinon, rester sur Windows 10 en attendant de renouveler le matériel. Vérifier la compatibilité sur le site Microsoft. <a href=\"/blog/guide-achat-ordinateur-professionnel-maroc-2026\" class=\"text-primary-600 hover:text-primary-700 underline\">Guide achat PC</a>, <a href=\"/blog/ordinateur-lent-astuces-booster-pc\" class=\"text-primary-600 hover:text-primary-700 underline\">PC lent</a>, <a href=\"/devis\" class=\"text-primary-600 hover:text-primary-700 underline\">devis</a>, <a href=\"/contact\" class=\"text-primary-600 hover:text-primary-700 underline\">contact</a>.",
    ]),
  },
  // 11. Maintenance préventive PC entreprise Maroc
  {
    slug: "maintenance-preventive-pc-entreprise-maroc",
    title: "Maintenance Informatique Préventive : Économisez des Milliers de Dirhams",
    excerpt: "Pourquoi et comment mettre en place une maintenance préventive pour les PC de votre entreprise au Maroc. Coûts, planification, prestataires.",
    metaDescription: "Maintenance préventive informatique entreprise Maroc. Économiser, éviter pannes. Planification, coûts, AlloSupport.",
    category: "Infogérance",
    categoryColor: "bg-orange-500",
    imageUrl: "",
    imageAlt: "Maintenance préventive PC entreprise Maroc",
    keywords: ["maintenance informatique", "maintenance préventive", "pme maroc", "infogérance"],
    author: "Équipe AlloSupport",
    readTime: "7 min de lecture",
    publishedAt: "2026-02-08",
    updatedAt: "2026-02-08",
    content: toHtml([
      "La maintenance préventive des PC en entreprise au Maroc permet d'éviter pannes, pertes de données et temps morts. Actions : mises à jour, antivirus, sauvegardes, nettoyage logiciel et physique, monitoring.",
      "Coût préventif bien inférieur au coût d'une panne (downtime, réparation urgente). AlloSupport propose des forfaits maintenance pour PME. <a href=\"/blog/vision-maroc-2030-transformation-digitale-pme\" class=\"text-primary-600 hover:text-primary-700 underline\">Vision 2030</a>, <a href=\"/blog/cybersecurite-pme-maroc-guide-2026\" class=\"text-primary-600 hover:text-primary-700 underline\">cybersécurité</a>, <a href=\"/support-pme\" class=\"text-primary-600 hover:text-primary-700 underline\">Support PME</a>, <a href=\"/devis\" class=\"text-primary-600 hover:text-primary-700 underline\">devis</a>, <a href=\"/contact\" class=\"text-primary-600 hover:text-primary-700 underline\">contact</a>.",
    ]),
  },
  // 12. Nettoyer PC poussière Maroc tuto
  {
    slug: "nettoyer-pc-poussiere-maroc-tuto",
    title: "Tuto : Nettoyer son PC de la Poussière (Climat Maroc)",
    excerpt: "Comment nettoyer la poussière dans son PC au Maroc. Étapes, précautions, matériel. Réduire surchauffe et pannes.",
    metaDescription: "Nettoyer PC poussière Maroc. Tuto entretien ordinateur, climat sec et poussiéreux. AlloSupport conseils.",
    category: "Dépannage",
    categoryColor: "bg-blue-500",
    imageUrl: "",
    imageAlt: "Nettoyer PC poussière Maroc tutoriel",
    keywords: ["nettoyer pc", "poussière ordinateur", "entretien pc maroc", "surchauffe pc"],
    author: "Équipe AlloSupport",
    readTime: "5 min de lecture",
    publishedAt: "2026-02-10",
    updatedAt: "2026-02-10",
    content: toHtml([
      "Au Maroc, la poussière encrasse vite les ventilateurs et radiateurs, ce qui provoque surchauffe et ralentissements. Tuto : éteindre et débrancher, ouvrir le boîtier, souffler l'air (bombe ou compresseur à faible pression), ne pas toucher aux composants avec les doigts, rebrancher proprement.",
      "Fréquence : tous les 6 à 12 mois selon l'environnement. Si vous n'osez pas : faites intervenir un pro pour une <a href=\"/depannage-informatique\" class=\"text-blue-600 font-bold hover:underline\">maintenance PC à distance</a>. <a href=\"/blog/mon-pc-est-lent-10-solutions-simples-pour-laccelerer-special-maroc\" class=\"text-primary-600 hover:text-primary-700 underline\">PC lent 10 solutions</a>, <a href=\"/blog/pannes-pc-frequentes-maroc-solutions\" class=\"text-primary-600 hover:text-primary-700 underline\">pannes fréquentes</a>, <a href=\"/devis\" class=\"text-primary-600 hover:text-primary-700 underline\">devis</a>, <a href=\"/contact\" class=\"text-primary-600 hover:text-primary-700 underline\">contact</a>.",
    ]),
  },
  // 13. Pannes PC fréquentes Maroc
  {
    slug: "pannes-pc-frequentes-maroc-solutions",
    title: "Top 5 Pannes PC les Plus Fréquentes au Maroc et Leurs Solutions",
    excerpt: "Les 5 pannes PC les plus courantes au Maroc : surchauffe, virus, disque dur, RAM, alimentation. Causes et solutions.",
    metaDescription: "Pannes PC fréquentes Maroc. Surchauffe, virus, disque dur, RAM. Solutions et dépannage AlloSupport.",
    category: "Dépannage",
    categoryColor: "bg-blue-500",
    imageUrl: "",
    imageAlt: "Pannes PC fréquentes Maroc solutions",
    keywords: ["pannes pc maroc", "problèmes ordinateur", "réparation pc", "dépannage pc"],
    author: "Équipe AlloSupport",
    readTime: "6 min de lecture",
    publishedAt: "2026-02-12",
    updatedAt: "2026-02-12",
    content: toHtml([
      "**1. Surchauffe** : Poussière, ventilation bloquée. Nettoyer, vérifier les ventilateurs. **2. Virus et malwares** : Antivirus, scan, pas de clics suspects ; pour <a href=\"/antivirus-maroc\" class=\"text-blue-600 font-bold hover:underline\">sécuriser votre ordinateur</a> ou une suppression de virus à distance, AlloSupport intervient en 15 min. **3. Disque dur défaillant** : Bruits bizarres, lenteur. Sauvegarder et remplacer par un SSD. **4. RAM insuffisante ou défectueuse** : PC qui freeze. Ajouter ou remplacer la RAM. **5. Alimentation ou coupures** : Parafoudre, onduleur, sauvegardes.",
      "AlloSupport diagnostique et répare à distance ou sur site. <a href=\"/blog/recuperation-donnees-disque-dur-maroc\" class=\"text-primary-600 hover:text-primary-700 underline\">Récupération données</a>, <a href=\"/blog/nettoyer-pc-poussiere-maroc-tuto\" class=\"text-primary-600 hover:text-primary-700 underline\">nettoyage PC</a>, <a href=\"/services\" class=\"text-primary-600 hover:text-primary-700 underline\">services</a>, <a href=\"/devis\" class=\"text-primary-600 hover:text-primary-700 underline\">devis</a>, <a href=\"/contact\" class=\"text-primary-600 hover:text-primary-700 underline\">contact</a>.",
    ]),
  },
  // 14. 7 pannes PC courantes Maroc 2026 (article dédié /blog/7-pannes-pc-courantes-2026-maroc)
  {
    slug: "7-pannes-pc-courantes-2026-maroc",
    title: "Les 7 pannes PC courantes au Maroc en 2026 (et comment les réparer)",
    excerpt: "PC lent, surchauffe, écran bleu, virus, WiFi, PC qui ne démarre plus, périphériques. Solutions et dépannage informatique Casablanca.",
    metaDescription: "7 pannes PC courantes Maroc : PC lent, écran bleu, virus. Solutions + dépannage informatique casablanca par AlloSupport.",
    category: "Dépannage",
    categoryColor: "bg-blue-500",
    imageUrl: "/blog/6pro.webp",
    imageAlt: "7 pannes PC courantes Maroc 2026 – solutions et dépannage Casablanca",
    keywords: ["pannes pc courantes maroc", "ordinateur lent 2026", "réparer pc maroc", "dépannage informatique casablanca", "écran bleu windows 11"],
    author: "AlloSupport Maroc",
    readTime: "8 min de lecture",
    publishedAt: "2026-02-06",
    updatedAt: "2026-02-06",
    content: toHtml([
      "Guide complet des 7 pannes PC les plus courantes au Maroc en 2026 : PC lent chronique, surchauffe, écran bleu Windows 11, virus et malwares, problèmes WiFi Maroc Telecom, PC qui ne démarre plus, périphériques défaillants. Solutions DIY et intervention dépannage informatique Casablanca à distance par AlloSupport.",
      "L'article complet est disponible sur cette page avec sommaire, FAQ et liens utiles. <a href=\"/contact\" class=\"text-primary-600 hover:underline\">Contact</a> · <a href=\"/devis\" class=\"text-primary-600 hover:underline\">Devis gratuit</a>.",
    ]),
  },
  // 15. WiFi lent Maroc 2026 (article dédié /blog/wifi-lent-maroc-2026)
  {
    slug: "wifi-lent-maroc-2026",
    title: "Wi-Fi Lent au Maroc 2026 : 10 Raisons + 10 Solutions Rapides",
    excerpt: "Guide complet : réglages box Maroc Telecom, Inwi, Orange, canaux Wi-Fi, 5 GHz, répéteurs. Casablanca, Rabat, Marrakech.",
    metaDescription: "Wi-Fi lent à Casablanca, Rabat ou Marrakech ? 10 solutions rapides 2026, réglages box FAI, prix répéteurs. AlloSupport.",
    category: "Dépannage",
    categoryColor: "bg-blue-500",
    imageUrl: "/blog/allo_support_wifi.webp",
    imageAlt: "Wi-Fi lent au Maroc 2026 – 10 solutions et réglages box",
    keywords: ["wifi lent maroc", "wifi lent casablanca", "booster wifi maroc", "répéteur wifi maroc 2026", "maroc telecom wifi lent", "inwi orange wifi"],
    author: "AlloSupport Maroc",
    readTime: "12 min de lecture",
    publishedAt: "2026-02-07",
    updatedAt: "2026-02-07",
    content: toHtml([
      "Guide WiFi lent au Maroc 2026 : causes (box Maroc Telecom/Orange/Inwi, pilote WiFi PC, position routeur, trop d'appareils) et solutions. Dépannage à distance AlloSupport pour diagnostic et optimisation.",
      "L'article complet est sur cette page. <a href=\"/contact\" class=\"text-primary-600 hover:underline\">Contact</a> · <a href=\"/blog/7-pannes-pc-courantes-2026-maroc\" class=\"text-primary-600 hover:underline\">7 pannes PC</a>.",
    ]),
  },
  // 16. 192.168.1.1 Admin Maroc (article dédié /blog/192-168-1-1-admin-login-maroc-routeur-2026)
  {
    slug: "192-168-1-1-admin-login-maroc-routeur-2026",
    title: "192.168.1.1 Admin Maroc : Login Routeur MT, Inwi, Orange 2026",
    excerpt: "Accès 192.168.1.1 au Maroc : login et mot de passe par défaut tous routeurs Maroc Telecom, Inwi, Orange. Changer WiFi, contrôle parental. Guide complet 2026.",
    metaDescription: "192.168.1.1 Maroc : login/password par défaut Maroc Telecom, Inwi, Orange. Configuration WiFi, contrôle parental. Guide AlloSupport 2026.",
    category: "Dépannage",
    categoryColor: "bg-blue-500",
    imageUrl: "/blog/192.168.1.1.webp",
    imageAlt: "192.168.1.1 Admin Login Routeur Maroc Telecom Inwi Orange",
    keywords: ["192.168.1.1", "192.168.1.1 admin", "192.168.1.1 maroc telecom", "mot de passe admin routeur maroc", "login routeur maroc", "controle parental routeur maroc", "changer mot de passe wifi maroc"],
    author: "AlloSupport Maroc",
    readTime: "15 min de lecture",
    publishedAt: "2026-02-10",
    updatedAt: "2026-02-10",
    content: toHtml([
      "Guide complet 192.168.1.1 au Maroc : accès interface admin routeur Maroc Telecom (Technicolor, ZTE, Huawei), Inwi, Orange. Tous mots de passe par défaut (admin/admin, Menara/Menara), configuration WiFi, contrôle parental, dépannage.",
      "L'article complet est sur cette page avec tableaux logins, étapes, FAQ. <a href=\"/contact\" class=\"text-primary-600 hover:underline\">Contact</a> · <a href=\"/blog/wifi-lent-maroc-2026\" class=\"text-primary-600 hover:underline\">WiFi lent Maroc</a> · <a href=\"/devis\" class=\"text-primary-600 hover:underline\">Devis gratuit</a>.",
    ]),
  },
  // 17. Comparatif Maroc Telecom Inwi Orange 2026 (article dédié)
  {
    slug: "comparatif-maroc-telecom-inwi-orange-2026",
    title: "Comparatif Complet Maroc Telecom vs Inwi vs Orange 2026 : Quel Opérateur Choisir ?",
    excerpt: "Prix, vitesse, couverture, fiabilité : analyse 2026 basée sur 2,500 tests réels. Verdict par profil (famille, gamer, pro, budget). Économisez 600+ DH/an.",
    metaDescription: "Comparatif MT vs Inwi vs Orange 2026 : prix fibre, vitesse réelle, couverture, fiabilité. 2,500 tests. Verdict par profil. Guide AlloSupport.",
    category: "Dépannage",
    categoryColor: "bg-blue-500",
    imageUrl: "/blog/comparatif.webp",
    imageAlt: "Comparatif Maroc Telecom Inwi Orange 2026",
    keywords: ["comparatif maroc telecom inwi orange", "meilleur opérateur internet maroc 2026", "prix fibre optique maroc", "inwi vs orange vs maroc telecom", "quel fai choisir maroc"],
    author: "AlloSupport Maroc",
    readTime: "15 min de lecture",
    publishedAt: "2026-02-10",
    updatedAt: "2026-02-10",
    content: toHtml([
      "Comparatif complet 2026 : Maroc Telecom, Inwi, Orange. Prix fibre (20 Mbps à 1 Gbps), frais cachés, test vitesse réelle par ville, couverture, uptime, service client. Verdict par profil : famille, gamer, télétravail, petit budget, zone rurale.",
      "L'article complet est sur cette page. <a href=\"/blog/192-168-1-1-admin-login-maroc-routeur-2026\" class=\"text-primary-600 hover:underline\">Config box 192.168.1.1</a> · <a href=\"/blog/wifi-lent-maroc-2026\" class=\"text-primary-600 hover:underline\">WiFi lent</a> · <a href=\"/contact\" class=\"text-primary-600 hover:underline\">Contact</a> · <a href=\"/devis\" class=\"text-primary-600 hover:underline\">Devis</a>.",
    ]),
  },
  // 18. Télétravail Maroc équipement
  {
    slug: "teletravail-maroc-equipement-informatique",
    title: "Télétravail au Maroc : Équipement Informatique Essentiel 2026",
    excerpt: "Quel équipement informatique pour télétravailler au Maroc en 2026 ? PC, connexion, VPN, bureau à domicile. Guide pratique.",
    metaDescription: "Équipement télétravail Maroc 2026. PC, connexion, VPN, bureau à domicile. Guide AlloSupport.",
    category: "Productivité",
    categoryColor: "bg-green-500",
    imageUrl: "",
    imageAlt: "Équipement télétravail Maroc 2026",
    keywords: ["télétravail maroc", "equipement teletravail", "bureau à domicile", "remote work maroc"],
    author: "Équipe AlloSupport",
    readTime: "7 min de lecture",
    publishedAt: "2026-02-15",
    updatedAt: "2026-02-15",
    content: toHtml([
      "Télétravail au Maroc en 2026 : PC portable ou fixe (i5/Ryzen 5, 16 Go RAM, SSD), connexion internet stable (fibre si possible), VPN si l'entreprise l'exige, webcam et micro corrects, bureau et chaise ergonomiques, bonne lumière.",
      "Conseils : sauvegardes, cybersécurité (mots de passe, pas de WiFi public sensible). Découvrez nos <a href=\"/support-pme\" class=\"text-blue-600 font-bold hover:underline\">solutions télétravail entreprise</a>. <a href=\"/blog/vision-maroc-2030-transformation-digitale-pme\" class=\"text-primary-600 hover:text-primary-700 underline\">Vision 2030</a>, <a href=\"/blog/guide-achat-ordinateur-professionnel-maroc-2026\" class=\"text-primary-600 hover:text-primary-700 underline\">guide achat PC</a>, <a href=\"/blog/google-workspace-vs-office-365-pme-maroc\" class=\"text-primary-600 hover:text-primary-700 underline\">Google vs Office 365</a>, <a href=\"/devis\" class=\"text-primary-600 hover:text-primary-700 underline\">devis</a>, <a href=\"/contact\" class=\"text-primary-600 hover:text-primary-700 underline\">contact</a>.",
    ]),
  },
  // 19. Meilleur Antivirus Gratuit Maroc 2026
  {
    slug: "meilleur-antivirus-gratuit-maroc-2026-comparatif",
    title: "Meilleur Antivirus Gratuit Maroc 2026 - Comparatif Top 7 Testé",
    excerpt: "Comparatif des 7 meilleurs antivirus gratuits au Maroc 2026 : Bitdefender, Avast, Kaspersky. Tests détection, performances, installation.",
    metaDescription: "Comparatif complet des 7 meilleurs antivirus gratuits au Maroc en 2026 : Bitdefender, Kaspersky, Avast. Guide PME & particuliers.",
    category: "Sécurité",
    categoryColor: "bg-indigo-500",
    imageUrl: "/blog/waf.webp",
    imageAlt: "Comparatif meilleurs antivirus gratuits Maroc 2026 - Web Application Firewall et protection",
    keywords: ["meilleur antivirus gratuit maroc", "antivirus gratuit 2026", "comparatif antivirus gratuit", "antivirus gratuit windows 11 maroc"],
    author: "Équipe AlloSupport",
    readTime: "12 min de lecture",
    publishedAt: "2026-02-09",
    updatedAt: "2026-02-09",
    content: toHtml([
      "En 2026, choisir le meilleur antivirus gratuit au Maroc est crucial face à la montée des cybermenaces. Découvrez notre comparatif des 7 meilleures solutions : Bitdefender, Kaspersky, Avast, et plus encore.",
      "Nous analysons le taux de détection, l'impact sur les performances et les fonctionnalités spécifiques pour le Maroc. L'article complet contient des tableaux comparatifs, des guides d'installation et une FAQ détaillée.",
      "L'article complet est disponible sur cette page. <a href=\"/blog/meilleur-antivirus-gratuit-maroc-2026-comparatif\" class=\"text-primary-600 hover:underline\">Lire le comparatif complet</a>."
    ]),
  },
];

export function getPublishedPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  return BLOG_POSTS.find((p) => p.slug === slug) ?? null;
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

export function getAllPostsForSitemap(): { slug: string; updatedAt: Date }[] {
  return BLOG_POSTS.map((p) => ({
    slug: p.slug,
    updatedAt: new Date(p.updatedAt),
  }));
}
