import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  Zap,
  ShieldCheck,
  Award,
  Clock,
  ShieldOff,
  Gauge,
  Monitor,
  HardDrive,
  Mail,
  Printer,
  AlertTriangle,
  Building,
  Download,
  CheckCircle,
  MapPin,
  Star,
  ChevronDown,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";
import { generateBreadcrumbSchema } from "@/lib/seo";

const WHATSAPP_DEPANNAGE = `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent("Bonjour, j'ai besoin d'un dépannage informatique à distance pour mon PC.")}`;

// ========== JSON-LD SCHEMAS ==========
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AlloSupport - Dépannage Informatique Maroc",
  image: "https://allosupport.ma/logo.png",
  "@id": "https://allosupport.ma",
  url: "https://allosupport.ma/depannage-informatique",
  telephone: GOOGLE_BUSINESS.PHONE,
  priceRange: "150 MAD - 500 MAD",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Casablanca",
    addressRegion: "Casablanca-Settat",
    addressCountry: "MA",
  },
  geo: { "@type": "GeoCoordinates", latitude: 33.5731, longitude: -7.5898 },
  areaServed: [
    { "@type": "City", name: "Casablanca" },
    { "@type": "City", name: "Rabat" },
    { "@type": "City", name: "Marrakech" },
    { "@type": "City", name: "Tanger" },
    { "@type": "Country", name: "Morocco" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "22:00",
  },
  sameAs: ["https://www.facebook.com/AlloSupportMaroc", "https://www.instagram.com/allosupport.ma"],
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "326" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Dépannage Informatique à Distance",
  provider: { "@type": "LocalBusiness", name: "AlloSupport Maroc" },
  areaServed: { "@type": "Country", name: "Morocco" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de Dépannage Informatique",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nettoyage Virus & Malware" }, price: "150", priceCurrency: "MAD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Réparation PC Lent" }, price: "200", priceCurrency: "MAD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Installation Windows 11" }, price: "250", priceCurrency: "MAD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Récupération de Données" }, price: "400", priceCurrency: "MAD" },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien coûte un dépannage informatique à Casablanca ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nos tarifs commencent à 150 MAD pour un dépannage simple (suppression virus, aide paramétrage). Un formatage complet avec installation Windows coûte 250 MAD. Le diagnostic est gratuit.",
      },
    },
    {
      "@type": "Question",
      name: "Comment fonctionne le dépannage à distance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vous nous contactez sur WhatsApp, nous vous envoyons un lien TeamViewer (gratuit et sûr), puis notre technicien prend le contrôle de votre PC à distance pendant que vous regardez. L'intervention dure 15-60 minutes selon le problème.",
      },
    },
    {
      "@type": "Question",
      name: "Quand dois-je payer pour la réparation ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vous payez APRÈS que nous ayons résolu votre problème. Si nous ne réussissons pas à réparer, vous ne payez rien. Paiement par CMI, Cash Plus, ou virement bancaire.",
      },
    },
    {
      "@type": "Question",
      name: "Intervenez-vous dans toutes les villes du Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, notre service de dépannage à distance fonctionne partout au Maroc (Casablanca, Rabat, Marrakech, Tanger, Fès, Agadir, etc.). Vous avez juste besoin d'une connexion Internet.",
      },
    },
    {
      "@type": "Question",
      name: "Mon PC est-il en sécurité pendant la prise de contrôle à distance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, absolument. Nous utilisons TeamViewer, un logiciel mondialement reconnu et sécurisé. Vous voyez tout ce que fait le technicien en temps réel. Vous pouvez couper la connexion à tout moment. Nous ne touchons jamais à vos fichiers personnels.",
      },
    },
  ],
};

// ========== METADATA ==========
export const metadata: Metadata = {
  title:
    "Dépannage Informatique Maroc 🛠️ Réparation PC à Distance 15min | Casablanca, Rabat",
  description:
    "Dépannage informatique à distance au Maroc. Intervention en 15min via WhatsApp. PC Lent, Virus, Windows, Drivers. Casablanca, Rabat, Marrakech. Paiement après réparation. À partir de 150 DH.",
  keywords: [
    "dépannage informatique casablanca",
    "réparation pc casablanca",
    "technicien informatique à domicile maroc",
    "dépannage informatique rabat",
    "pc lent maroc",
    "formater pc prix maroc",
    "suppression virus casablanca",
    "installation windows maroc",
    "dépannage à distance maroc",
    "réparation ordinateur marrakech",
    "technicien pc maarif",
    "maintenance informatique pme",
  ],
  openGraph: {
    title: "Dépannage Informatique Maroc - Intervention à Distance en 15 min",
    description:
      "Technicien informatique à distance • PC Lent, Virus, Windows • Casablanca, Rabat, Tout le Maroc • Paiement après réparation",
    url: "https://allosupport.ma/depannage-informatique",
    images: [
      {
        url: "https://allosupport.ma/og-depannage-informatique-maroc.jpg",
        width: 1200,
        height: 630,
        alt: "Dépannage informatique à distance au Maroc",
      },
    ],
    locale: "fr_MA",
    type: "website",
  },
  alternates: { canonical: "https://allosupport.ma/depannage-informatique" },
  twitter: {
    card: "summary_large_image",
    title: "Dépannage Informatique Maroc | AlloSupport",
    description: "Réparation PC à distance en 15 min, Casablanca, Rabat, Marrakech. Dès 150 DH.",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-video-preview": -1,
    "max-snippet": -1,
  },
};

const SERVICES = [
  {
    icon: ShieldOff,
    title: "Suppression Virus & Malware",
    price: "À partir de 150 MAD",
    description:
      "Votre PC est infecté ? Pop-ups, lenteurs, fichiers cryptés ? On nettoie tout : virus, ransomware, spyware, adware.",
    badge: "Le Plus Demandé",
    cta: "Nettoyer Mon PC",
    href: WHATSAPP_DEPANNAGE,
  },
  {
    icon: Gauge,
    title: "PC Lent / Optimisation",
    price: "À partir de 200 MAD",
    description:
      "Votre PC met 10 minutes à démarrer ? On supprime les programmes inutiles, on nettoie le disque, on optimise Windows.",
    cta: "Accélérer Mon PC",
    href: WHATSAPP_DEPANNAGE,
  },
  {
    icon: Monitor,
    title: "Installation Windows 11 / 10",
    price: "À partir de 250 MAD",
    description:
      "Formatage complet + Installation Windows 11 ou 10 + Drivers + Logiciels de base (Office, Chrome, etc.).",
    cta: "Installer Windows",
    href: WHATSAPP_DEPANNAGE,
  },
  {
    icon: HardDrive,
    title: "Récupération de Données",
    price: "À partir de 400 MAD",
    description:
      "Disque dur endommagé ? Fichiers supprimés par erreur ? On récupère vos photos, documents, vidéos.",
    badge: "Service Premium",
    cta: "Récupérer Mes Données",
    href: WHATSAPP_DEPANNAGE,
  },
  {
    icon: Mail,
    title: "Configuration Email (Outlook, Gmail)",
    price: "À partir de 100 MAD",
    description:
      "Problème avec votre messagerie professionnelle ? Configuration Outlook, Gmail, Maroc Telecom, ADSL Mail.",
    cta: "Configurer Ma Messagerie",
    href: WHATSAPP_DEPANNAGE,
  },
  {
    icon: Printer,
    title: "Installation Imprimante / WiFi",
    price: "À partir de 120 MAD",
    description:
      "Votre imprimante ne se connecte pas ? On installe les drivers et on configure le WiFi/Réseau.",
    cta: "Connecter Mon Imprimante",
    href: WHATSAPP_DEPANNAGE,
  },
  {
    icon: AlertTriangle,
    title: "Problème Écran Bleu (BSOD)",
    price: "À partir de 180 MAD",
    description:
      "Écran bleu Windows au démarrage ? Erreurs DRIVER_IRQL, MEMORY_MANAGEMENT ? On diagnostique et répare.",
    cta: "Réparer L'Écran Bleu",
    href: WHATSAPP_DEPANNAGE,
  },
  {
    icon: Building,
    title: "Maintenance PME (Contrat Mensuel)",
    price: "À partir de 499 MAD/mois",
    description:
      "Support informatique pour votre entreprise. Serveurs, sauvegardes, utilisateurs, sécurité. Tarif dégressif.",
    cta: "Demander un Devis PME",
    href: `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent("Bonjour, je souhaite un devis pour la maintenance informatique PME.")}`,
  },
];

const CITIES = [
  {
    name: "Casablanca",
    neighborhoods: ["Maarif", "Ain Diab", "Hay Mohammadi", "Sidi Maarouf", "Derb Ghallef"],
  },
  { name: "Rabat", neighborhoods: ["Agdal", "Hay Riad", "Hassan", "Souissi", "Ocean"] },
  { name: "Marrakech", neighborhoods: ["Guéliz", "Hivernage", "Medina", "Targa"] },
  { name: "Tanger", neighborhoods: ["Centre-Ville", "Malabata", "Médina"] },
  { name: "Fès", neighborhoods: ["Toutes zones"] },
  { name: "Agadir", neighborhoods: ["Toutes zones"] },
  { name: "Meknès", neighborhoods: ["Toutes zones"] },
  { name: "Oujda", neighborhoods: ["Toutes zones"] },
];

const TESTIMONIALS = [
  {
    quote:
      "Mon PC était ultra lent depuis 3 mois. En 30 minutes, le technicien a tout nettoyé à distance. C'est comme un PC neuf maintenant. Service impeccable !",
    author: "Youssef K.",
    city: "Casablanca (Maarif)",
    badge: "PC Lent",
  },
  {
    quote:
      "J'avais un virus ransomware qui bloquait tous mes fichiers. AlloSupport a tout récupéré en 1 heure. Je recommande à 100% !",
    author: "Fatima B.",
    city: "Rabat (Agdal)",
    badge: "Suppression Virus",
  },
  {
    quote:
      "Installation de Windows 11 + Office + Antivirus en 1h30. Prix honnête, technicien pro. Mieux que d'aller à Derb Ghallef et attendre 3 jours.",
    author: "Hassan M.",
    city: "Marrakech (Guéliz)",
    badge: "Installation Windows",
  },
  {
    quote:
      "Écran bleu à répétition. En 45 min le technicien a identifié le driver défaillant et tout est rentré dans l'ordre. Très satisfait.",
    author: "Karim T.",
    city: "Casablanca (Ain Diab)",
    badge: "Écran Bleu",
  },
  {
    quote:
      "Imprimante qui ne marchait plus depuis des mois. Configurée en 20 minutes à distance. Simple et efficace.",
    author: "Leila S.",
    city: "Rabat (Hay Riad)",
    badge: "Imprimante",
  },
  {
    quote:
      "PME de 8 postes : on a pris le pack maintenance. Plus de stress avec les pannes. Équipe réactive et pro.",
    author: "Omar D.",
    city: "Casablanca",
    badge: "Maintenance PME",
  },
  {
    quote:
      "Données perdues après un crash. AlloSupport a récupéré presque tout. Tarif correct, explications claires.",
    author: "Samira A.",
    city: "Marrakech (Hivernage)",
    badge: "Récupération Données",
  },
  {
    quote:
      "Problème de messagerie Outlook au bureau. Résolu en 15 min. Je les rappellerai sans hésiter.",
    author: "Mehdi F.",
    city: "Tanger",
    badge: "Configuration Email",
  },
  {
    quote:
      "PC qui ramait, virus, tout. Nettoyage complet + antivirus installé. Paiement après le travail, comme convenu. Top.",
    author: "Nadia K.",
    city: "Fès",
    badge: "Nettoyage Complet",
  },
];

const FAQ_ITEMS = [
  {
    q: "Combien coûte un dépannage informatique à Casablanca ?",
    a: "Nos tarifs commencent à 150 MAD pour un dépannage simple (suppression virus, aide paramétrage). Un formatage complet avec installation Windows coûte 250 MAD. Le diagnostic est gratuit.",
  },
  {
    q: "Comment fonctionne le dépannage à distance ?",
    a: "Vous nous contactez sur WhatsApp, nous vous envoyons un lien TeamViewer (gratuit et sûr), puis notre technicien prend le contrôle de votre PC à distance pendant que vous regardez. L'intervention dure 15-60 minutes selon le problème.",
  },
  {
    q: "Quand dois-je payer pour la réparation ?",
    a: "Vous payez APRÈS que nous ayons résolu votre problème. Si nous ne réussissons pas à réparer, vous ne payez rien. Paiement par CMI, Cash Plus, ou virement bancaire.",
  },
  {
    q: "Intervenez-vous dans toutes les villes du Maroc ?",
    a: "Oui, notre service de dépannage à distance fonctionne partout au Maroc (Casablanca, Rabat, Marrakech, Tanger, Fès, Agadir, etc.). Vous avez juste besoin d'une connexion Internet.",
  },
  {
    q: "Mon PC est-il en sécurité pendant la prise de contrôle à distance ?",
    a: "Oui. Nous utilisons TeamViewer, logiciel reconnu et sécurisé. Vous voyez tout en temps réel et pouvez couper la connexion à tout moment. Nous ne touchons pas à vos fichiers personnels.",
  },
  {
    q: "Que se passe-t-il si vous ne pouvez pas réparer mon PC ?",
    a: "Vous ne payez rien. Notre diagnostic est gratuit ; si nous ne résolvons pas le problème, aucun frais ne vous est demandé.",
  },
  {
    q: "Combien de temps dure une intervention ?",
    a: "En moyenne 30 à 45 minutes pour un dépannage simple (virus, PC lent). Un formatage complet prend 1 à 2 heures. Nous vous donnons une estimation dès le premier contact.",
  },
  {
    q: "Puis-je avoir une facture pour mon entreprise ?",
    a: "Oui. Nous émettons des factures et reçus pour les particuliers et les PME. Demandez-le à votre technicien ou sur WhatsApp.",
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "https://allosupport.ma" },
  { name: "Dépannage Informatique Maroc", url: "https://allosupport.ma/depannage-informatique" },
]);

export default function DepannageInformatiquePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main className="overflow-hidden">
        {/* ========== SECTION 1: Hero ========== */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-24 pb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-slate-900">
                  Dépannage Informatique à Distance au Maroc
                  <span className="block text-blue-600 mt-2">Intervention en 15 Minutes</span>
                </h1>
                <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed">
                  Votre PC est en panne ? Ne perdez pas 2 heures à aller à Derb Ghallef.{" "}
                  <strong className="text-slate-900">
                    On répare à distance devant vos yeux.
                  </strong>{" "}
                  Paiement APRÈS réparation.
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle className="w-6 h-6 text-green-600 shrink-0" aria-hidden />
                    <span>5000+ PC Réparés</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <Zap className="w-6 h-6 text-teal-600 shrink-0" aria-hidden />
                    <span>Intervention 15 min</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" aria-hidden />
                    <span>Paiement Après Service</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle className="w-6 h-6 text-green-600 shrink-0" aria-hidden />
                    <span>Satisfait ou Remboursé</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={WHATSAPP_DEPANNAGE}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex flex-col items-center justify-center px-8 py-5 bg-green-600 hover:bg-green-700 text-white text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all min-h-[56px]"
                    aria-label="Parler à un technicien sur WhatsApp"
                  >
                    <span className="flex items-center gap-3">
                      <MessageCircle className="w-7 h-7" aria-hidden />
                      Parler à un Technicien Maintenant
                    </span>
                    <span className="text-sm font-normal mt-1 opacity-90">(Réponse en 2 minutes)</span>
                  </a>
                  <a
                    href={`tel:${GOOGLE_BUSINESS.PHONE}`}
                    className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all min-h-[56px]"
                    aria-label="Appeler AlloSupport"
                  >
                    <Phone className="w-7 h-7" aria-hidden />
                    Appeler : {GOOGLE_BUSINESS.PHONE_FORMATTED}
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                  <span className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-orange-500" aria-hidden />
                    23 interventions aujourd&apos;hui
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" aria-hidden />
                    12 techniciens en ligne
                  </span>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl flex items-center justify-center border border-blue-100">
                  <Monitor className="w-32 h-32 text-blue-500/70" aria-hidden />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== SECTION 2: Why Choose Us ========== */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
              Pourquoi Choisir AlloSupport Pour Votre Dépannage Informatique au Maroc ?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Zap,
                  title: "Intervention à Distance en 15 Min",
                  desc: "Pas besoin de vous déplacer. On accède à votre PC via TeamViewer et on répare pendant que vous regardez. Plus rapide qu'aller à Derb Ghallef.",
                  color: "text-teal-600",
                  bg: "bg-teal-100",
                },
                {
                  icon: ShieldCheck,
                  title: "Paiement APRÈS Réparation",
                  desc: "Vous ne payez que si votre problème est résolu. Si on ne réussit pas, c'est gratuit. Zéro risque pour vous.",
                  color: "text-green-600",
                  bg: "bg-green-100",
                },
                {
                  icon: Award,
                  title: "Techniciens Certifiés (5+ Ans)",
                  desc: "Nos techniciens ont réparé 5000+ PC au Maroc. Windows, Mac, Linux : on maîtrise tout.",
                  color: "text-blue-600",
                  bg: "bg-blue-100",
                },
                {
                  icon: Clock,
                  title: "Support 7j/7 (8h-22h)",
                  desc: "Problème le dimanche ? On est là. Week-end, jours fériés : notre équipe est toujours disponible.",
                  color: "text-amber-600",
                  bg: "bg-amber-100",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-slate-100"
                >
                  <div
                    className={`w-14 h-14 ${item.bg} rounded-full flex items-center justify-center mb-4`}
                  >
                    <item.icon className={`w-7 h-7 ${item.color}`} aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== SECTION 3: Services Grid ========== */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
              Nos Services de Dépannage Informatique à Distance
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {SERVICES.map((s) => (
                <div
                  key={s.title}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-slate-100 relative"
                >
                  {s.badge && (
                    <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {s.badge}
                    </span>
                  )}
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <s.icon className="w-8 h-8 text-blue-600" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-xl font-bold text-blue-600 mb-3">{s.price}</p>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{s.description}</p>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="block w-full text-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all"
                  >
                    {s.cta} →
                  </a>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-slate-600 max-w-2xl mx-auto">
              Après avoir nettoyé votre PC, nous recommandons d&apos;installer un{" "}
              <Link href="/antivirus-maroc" className="text-blue-600 font-medium hover:underline">
                antivirus professionnel
              </Link>{" "}
              pour éviter les réinfections.
            </p>
          </div>
        </section>

        {/* ========== SECTION 4: How It Works ========== */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
              Comment Fonctionne le Dépannage à Distance ? (3 Étapes Simples)
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  icon: MessageCircle,
                  title: "Contactez-Nous Sur WhatsApp",
                  desc: "Cliquez sur le bouton vert et décrivez votre problème. Un technicien vous répond en 2 minutes max. Diagnostic gratuit.",
                },
                {
                  step: 2,
                  icon: Download,
                  title: "Téléchargez TeamViewer (1 Clic)",
                  desc: "On vous envoie un lien TeamViewer (logiciel gratuit et sûr). Vous le téléchargez en 1 clic, ça prend 30 secondes. Vous voyez tout ce qu'on fait.",
                },
                {
                  step: 3,
                  icon: CheckCircle,
                  title: "On Répare Pendant Que Vous Regardez",
                  desc: "Notre technicien prend le contrôle de votre PC à distance. Vous suivez la réparation en direct. Intervention 15-60 min. Paiement après.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <item.icon className="w-10 h-10 text-blue-600 mx-auto mb-3" aria-hidden />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-10 text-slate-600 text-sm">
              🔒 Sécurité garantie : TeamViewer est utilisé par 600 millions d&apos;utilisateurs dans
              le monde. Vos fichiers personnels ne sont jamais touchés.
            </p>
          </div>
        </section>

        {/* ========== SECTION 5: Pricing ========== */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-4 text-center">
              Tarifs Dépannage Informatique Maroc (Prix Fixes, Aucune Surprise)
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Diagnostic Gratuit</h3>
                <p className="text-4xl font-bold text-slate-900 mb-1">0 MAD</p>
                <p className="text-slate-600 text-sm mb-6">15 min</p>
                <ul className="space-y-2 text-slate-700 mb-8">
                  {["Analyse du problème", "Devis gratuit", "Conseils personnalisés", "Sans engagement"].map(
                    (f) => (
                      <li key={f} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 shrink-0" aria-hidden />
                        {f}
                      </li>
                    )
                  )}
                </ul>
                <a
                  href={WHATSAPP_DEPANNAGE}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block w-full text-center py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-100 transition"
                >
                  Demander un Diagnostic
                </a>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-500 relative scale-105">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full">
                  POPULAIRE
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Dépannage Simple</h3>
                <p className="text-4xl font-bold text-blue-600 mb-1">150-200 MAD</p>
                <p className="text-slate-600 text-sm mb-6">30-45 min</p>
                <ul className="space-y-2 text-slate-700 mb-8">
                  {[
                    "Suppression virus",
                    "Nettoyage PC lent",
                    "Installation logiciel",
                    "Configuration email/imprimante",
                    "Paiement après service",
                    "Garantie 7 jours",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_DEPANNAGE}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block w-full text-center py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition"
                >
                  Commander Maintenant
                </a>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Formatage Complet</h3>
                <p className="text-4xl font-bold text-slate-900 mb-1">250-300 MAD</p>
                <p className="text-slate-600 text-sm mb-6">1-2 heures</p>
                <ul className="space-y-2 text-slate-700 mb-8">
                  {[
                    "Formatage + Windows 11/10",
                    "Installation drivers",
                    "Pack logiciels (Office, Chrome, VLC)",
                    "Optimisation PC",
                    "Antivirus 6 mois inclus",
                    "Paiement après service",
                    "Garantie 30 jours",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_DEPANNAGE}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block w-full text-center py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition"
                >
                  Formater Mon PC
                </a>
              </div>
            </div>
            <p className="text-center mt-8 text-slate-600 text-sm">
              💡 Paiement accepté : CMI (carte bancaire marocaine), Cash Plus, CIH Mobile, Virement
              bancaire
            </p>
          </div>
        </section>

        {/* ========== SECTION 6: Zones ========== */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
              Zones d&apos;Intervention : Casablanca, Rabat, Marrakech & Tout le Maroc
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {CITIES.map((city) => (
                <div
                  key={city.name}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-200"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-blue-600" aria-hidden />
                    <h3 className="font-bold text-slate-900">{city.name}</h3>
                  </div>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {city.neighborhoods.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                  <span className="inline-block mt-3 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                    Intervention Disponible
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-slate-600 max-w-xl mx-auto">
              📍 Notre service de dépannage à distance fonctionne partout au Maroc. Vous avez juste
              besoin d&apos;une connexion Internet (WiFi ou 4G). Besoin d&apos;un{" "}
              <Link href="/casablanca" className="text-blue-600 font-medium hover:underline">
                dépannage informatique à Casablanca
              </Link>{" "}
              ? Nous intervenons dans tous les quartiers.
            </p>
          </div>
        </section>

        {/* ========== SECTION 7: Derb Ghallef vs Remote ========== */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
              Pourquoi Le Dépannage à Distance Est Meilleur Que d&apos;Aller à Derb Ghallef ?
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200">
                    <th className="py-4 px-4 font-bold text-slate-900">
                      À Derb Ghallef (Méthode Traditionnelle)
                    </th>
                    <th className="py-4 px-4 font-bold text-slate-900">
                      Avec AlloSupport (À Distance)
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {[
                    [
                      "Déplacement 1-2 heures (aller-retour)",
                      "Intervention depuis votre canapé",
                    ],
                    ["Laisser votre PC 2-3 jours", "Réparation en 15-60 minutes"],
                    ["Risque de vol de données", "Vous voyez tout en temps réel"],
                    ["Prix non transparent (surprise)", "Prix fixes affichés"],
                    ["Paiement avant service", "Paiement après réparation"],
                    ["Pas de garantie", "Garantie 7-30 jours"],
                    ["Vous devez trouver un taxi", "Vous restez chez vous"],
                  ].map(([left, right], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                      <td className="py-3 px-4">
                        <span className="flex items-center gap-2 text-red-600">
                          <span aria-hidden>❌</span> {left}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="flex items-center gap-2 text-green-600">
                          <CheckCircle className="w-5 h-5 shrink-0" aria-hidden /> {right}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ========== SECTION 8: Testimonials ========== */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
              Témoignages Clients - Casablanca, Rabat, Marrakech
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={i}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-200"
                >
                  <div className="flex gap-1 mb-3" aria-label="5 étoiles">
                    {[1, 2, 3, 4, 5].map((_) => (
                      <Star
                        key={_}
                        className="w-5 h-5 text-amber-500 fill-amber-500"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-sm font-medium text-slate-900">
                    — {t.author}, {t.city}
                  </p>
                  <span className="inline-block mt-2 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {t.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== SECTION 9: FAQ ========== */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
              Questions Fréquentes Sur Le Dépannage Informatique
            </h2>
            <div className="space-y-4">
              {FAQ_ITEMS.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-xl border border-slate-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-2 py-4 px-6 cursor-pointer list-none font-bold text-slate-900 hover:bg-slate-50 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    {faq.q}
                    <ChevronDown
                      className="w-5 h-5 shrink-0 transition group-open:rotate-180"
                      aria-hidden
                    />
                  </summary>
                  <div className="px-6 pb-4 pt-0 text-slate-700">
                    <p className="m-0">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
            <p className="text-center mt-8 text-slate-600 text-sm">
              Vous avez acheté un PC FreeDOS ? Consultez notre{" "}
              <Link
                href="/blog/pc-portable-sans-windows-freedos-maroc"
                className="text-blue-600 font-medium hover:underline"
              >
                guide d&apos;installation Windows
              </Link>
              . Découvrez plus d&apos;
              <Link href="/blog" className="text-blue-600 font-medium hover:underline">
                astuces informatiques sur notre blog
              </Link>
              .
            </p>
          </div>
        </section>

        {/* ========== SECTION 10: Final CTA ========== */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-teal-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              Votre PC a Besoin d&apos;un Dépannage ? On S&apos;en Occupe Maintenant
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Intervention en 15 minutes • Paiement après service • Garantie satisfait ou remboursé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href={WHATSAPP_DEPANNAGE}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-5 rounded-2xl shadow-lg transition text-lg min-h-[56px]"
                aria-label="Parler à un technicien sur WhatsApp"
              >
                <MessageCircle className="w-7 h-7" aria-hidden />
                Parler à un Technicien Maintenant
              </a>
              <a
                href={`tel:${GOOGLE_BUSINESS.PHONE}`}
                className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-5 rounded-2xl border-2 border-white transition text-lg min-h-[56px]"
                aria-label="Appeler AlloSupport"
              >
                <Phone className="w-7 h-7" aria-hidden />
                Appeler : {GOOGLE_BUSINESS.PHONE_FORMATTED}
              </a>
            </div>
            <p className="text-sm text-blue-100 mb-4">
              ⚡ Ne laissez pas un PC en panne ruiner votre journée. Contactez-nous maintenant.
            </p>
            <p className="text-xs text-blue-200">
              Paiement : CMI • Cash Plus • CIH Mobile • Virement
            </p>
          </div>
        </section>
      </main>

      {/* Sticky WhatsApp - visible after scroll */}
      <a
        href={WHATSAPP_DEPANNAGE}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-4 rounded-full shadow-2xl hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 min-w-[56px] min-h-[56px]"
        aria-label="Besoin d'aide ? Contactez-nous sur WhatsApp"
      >
        <MessageCircle className="w-8 h-8 shrink-0" aria-hidden />
        <span className="hidden sm:inline font-semibold">Besoin d&apos;Aide ?</span>
      </a>

      <Footer />
    </>
  );
}
