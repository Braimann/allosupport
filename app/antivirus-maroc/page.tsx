import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  ShieldCheck,
  Lock,
  Zap,
  Flame,
  CheckCircle,
  XCircle,
  MessageCircle,
  Phone,
  Download,
  Star,
  ChevronDown,
  AlertTriangle,
  Users,
  Clock,
  CreditCard,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";

const WHATSAPP_ANTIVIRUS = `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent("Bonjour, je souhaite commander un antivirus (Kaspersky ou Bitdefender) avec installation à distance.")}`;

// ========== JSON-LD SCHEMAS ==========
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AlloSupport - Support Informatique Maroc",
  image: "https://allosupport.ma/logo.png",
  "@id": "https://allosupport.ma",
  url: "https://allosupport.ma",
  telephone: GOOGLE_BUSINESS.PHONE,
  priceRange: "MAD",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Quartier Maarif",
    addressLocality: "Casablanca",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.5731,
    longitude: -7.5898,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "21:00",
  },
  sameAs: ["https://www.facebook.com/AlloSupportMaroc", "https://www.instagram.com/allosupport.ma"],
};

const productSchemaKaspersky = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "Kaspersky Standard - Licence Officielle Maroc",
  image: "https://allosupport.ma/kaspersky-box.jpg",
  description:
    "Licence antivirus Kaspersky officielle pour 1 PC, 1 an. Installation à distance incluse. Protection complète contre virus, ransomware, phishing.",
  brand: { "@type": "Brand", name: "Kaspersky" },
  offers: {
    "@type": "Offer",
    url: "https://allosupport.ma/antivirus-maroc",
    priceCurrency: "MAD",
    price: "350",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "AlloSupport" },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "247",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quelle est la différence entre Kaspersky et Bitdefender ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kaspersky offre une interface plus simple et convient aux débutants, tandis que Bitdefender propose des fonctionnalités avancées pour les utilisateurs techniques. Les deux offrent une protection excellente au Maroc.",
      },
    },
    {
      "@type": "Question",
      name: "Comment se passe l'installation à distance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Après votre commande, nous vous contactons sur WhatsApp. Vous téléchargez un petit logiciel (TeamViewer), et notre technicien installe et configure votre antivirus en 15 minutes maximum.",
      },
    },
  ],
};

// ========== METADATA ==========
export const metadata: Metadata = {
  title:
    "Antivirus Maroc 🛡️ Kaspersky & Bitdefender | Licence Officielle | Installation 15min",
  description:
    "Achetez votre antivirus au Maroc (Kaspersky, Bitdefender) avec installation à distance en 15min. Licence officielle, paiement après installation. Prix en Dirhams. Support WhatsApp 24/7.",
  keywords: [
    "antivirus maroc",
    "kaspersky maroc",
    "bitdefender maroc",
    "acheter antivirus casablanca",
    "licence antivirus rabat",
    "antivirus prix maroc",
    "installation antivirus distance",
    "antivirus pour pme maroc",
  ],
  openGraph: {
    title: "Antivirus Officiel Maroc | Kaspersky & Bitdefender",
    description:
      "Installation en 15min • Prix en MAD • Support Darija/Français • 5000+ PC protégés",
    url: "https://allosupport.ma/antivirus-maroc",
    images: [
      {
        url: "https://allosupport.ma/og-antivirus-maroc.jpg",
        width: 1200,
        height: 630,
        alt: "Antivirus Kaspersky et Bitdefender pour le Maroc",
      },
    ],
    locale: "fr_MA",
    type: "website",
  },
  alternates: { canonical: "https://allosupport.ma/antivirus-maroc" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function AntivirusMarocPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchemaKaspersky) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main className="overflow-hidden">
        {/* =========================== SECTION 1: Hero =========================== */}
        <section
          className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-24 pb-16"
          id="hero"
        >
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20" />
          <div className="container mx-auto px-4 lg:px-8 py-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-orange-200">
                  <Flame className="w-4 h-4 text-orange-500" aria-hidden />
                  <span className="text-sm font-semibold text-orange-600">
                    5000+ PC Protégés au Maroc
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-slate-900">
                  Acheter Antivirus au Maroc - Licence Officielle{" "}
                  <span className="block mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Kaspersky & Bitdefender
                  </span>{" "}
                  | Installation en 15 Minutes
                </h1>
                <p className="text-lg sm:text-xl text-slate-600">
                  Protection Officielle • Installation 15min • Support Darija/Français • Prix en MAD
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 text-sm font-medium text-slate-700">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" aria-hidden />
                    4.8/5 (247 avis)
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 text-sm font-medium text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-600" aria-hidden />
                    Licence Officielle
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 text-sm font-medium text-slate-700">
                    <Zap className="w-4 h-4 text-cyan-600" aria-hidden />
                    Installation Immédiate
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={WHATSAPP_ANTIVIRUS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                    data-event="cta_click"
                    aria-label="Commander sur WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" aria-hidden />
                    Commander sur WhatsApp
                  </a>
                  <a
                    href="#pricing"
                    className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 font-bold px-8 py-4 rounded-xl transition-all"
                    data-event="cta_click"
                    aria-label="Voir les prix en MAD"
                  >
                    Voir les Prix en MAD
                    <ChevronDown className="w-5 h-5" aria-hidden />
                  </a>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl shadow-2xl flex items-center justify-center border border-blue-100">
                  <ShieldCheck className="w-32 h-32 text-blue-500/80" aria-hidden />
                  <div className="absolute inset-0 rounded-3xl border-2 border-white/20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================== SECTION 2: Trust Bar =========================== */}
        <section className="py-12 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <Shield className="w-10 h-10 text-blue-600 mb-3" aria-hidden />
                <div className="text-2xl font-bold text-slate-900">5000+</div>
                <div className="text-sm text-slate-600">PC Protégés</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <Clock className="w-10 h-10 text-cyan-600 mb-3" aria-hidden />
                <div className="text-2xl font-bold text-slate-900">15 min</div>
                <div className="text-sm text-slate-600">Installation</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <MessageCircle className="w-10 h-10 text-green-600 mb-3" aria-hidden />
                <div className="text-2xl font-bold text-slate-900">24/7</div>
                <div className="text-sm text-slate-600">Support</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <CheckCircle className="w-10 h-10 text-indigo-600 mb-3" aria-hidden />
                <div className="text-2xl font-bold text-slate-900">Licence</div>
                <div className="text-sm text-slate-600">Officielle</div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================== SECTION: Pourquoi Antivirus Payant =========================== */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
              Pourquoi Choisir un Antivirus Payant au Maroc ?
            </h2>
            <p className="text-slate-600 mb-4">
              Les antivirus gratuits offrent une protection limitée et exposent vos données (banque, documents) aux ransomwares et au phishing. Une licence officielle Kaspersky ou Bitdefender vous protège à 100 %, avec mises à jour permanentes et support en français et en Darija.
            </p>
            <p className="text-slate-600">
              Que vous soyez à Casablanca, Rabat, Marrakech ou ailleurs au Maroc, l&apos;installation à distance en 15 minutes vous évite tout déplacement. Prix en Dirhams, paiement sécurisé CMI ou après installation.
            </p>
          </div>
        </section>

        {/* =========================== SECTION 3: Pain Points =========================== */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-10 text-center">
              Votre PC Est-il Vraiment Protégé ?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl border-2 border-red-200 bg-red-50/50">
                <div className="text-2xl mb-2" aria-hidden>🦠</div>
                <h3 className="font-bold text-slate-900 mb-2">Ransomware Peut Bloquer Vos Fichiers</h3>
                <p className="text-slate-600 text-sm">
                  Un seul clic sur un email suspect peut crypter tous vos documents. Le pirate demande
                  une rançon de 5000 MAD ou plus. Ne prenez pas ce risque.
                </p>
              </div>
              <div className="p-6 rounded-xl border-2 border-red-200 bg-red-50/50">
                <div className="text-2xl mb-2" aria-hidden>🎣</div>
                <h3 className="font-bold text-slate-900 mb-2">Phishing Vole Vos Mots de Passe Bancaires</h3>
                <p className="text-slate-600 text-sm">
                  Les faux sites (banques, CMI) récupèrent vos identifiants. Un antivirus payant
                  bloque ces pièges.
                </p>
              </div>
              <div className="p-6 rounded-xl border-2 border-red-200 bg-red-50/50">
                <div className="text-2xl mb-2" aria-hidden>👾</div>
                <h3 className="font-bold text-slate-900 mb-2">Malware Ralentit Votre PC</h3>
                <p className="text-slate-600 text-sm">
                  Virus et logiciels malveillants consomment vos ressources. Votre PC rame sans
                  raison ? Souvent un malware.
                </p>
              </div>
              <div className="p-6 rounded-xl border-2 border-red-200 bg-red-50/50">
                <div className="text-2xl mb-2" aria-hidden>📧</div>
                <h3 className="font-bold text-slate-900 mb-2">Spam Infecte Votre Boîte Mail</h3>
                <p className="text-slate-600 text-sm">
                  Les pièces jointes infectées arrivent par email. Sans protection, un clic suffit
                  pour tout perdre.
                </p>
              </div>
            </div>
            <p className="text-center mt-8 text-slate-700 font-medium">
              Ne prenez pas de risques. Protégez-vous maintenant avec une{" "}
              <strong className="text-slate-900">licence officielle</strong>.
            </p>
          </div>
        </section>

        {/* =========================== SECTION 4: Pricing =========================== */}
        <section id="pricing" className="py-16 lg:py-20 bg-slate-50 scroll-mt-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 text-center">
              Prix des Licences Antivirus au Maroc (en Dirhams)
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Licence officielle, installation à distance incluse. Que vous soyez à Casablanca,
              Rabat, Marrakech ou ailleurs au Maroc.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Kaspersky Standard */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6 border-b border-slate-100">
                  <h3 className="font-bold text-lg text-slate-900">Kaspersky Standard</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-blue-600">350</span>
                    <span className="text-slate-600 ml-1">MAD</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">1 PC • 1 an</p>
                </div>
                <ul className="p-6 space-y-3 text-sm text-slate-700">
                  {[
                    "Protection 1 PC",
                    "Antivirus + Antispam",
                    "Firewall intelligent",
                    "Mises à jour automatiques",
                    "Installation à distance incluse",
                    "Licence valide 1 an",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="p-6 pt-0">
                  <a
                    href={WHATSAPP_ANTIVIRUS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition"
                    data-event="cta_click"
                  >
                    Commander sur WhatsApp
                  </a>
                </div>
              </div>

              {/* Kaspersky Plus - Populaire */}
              <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-500 overflow-hidden hover:shadow-xl transition-shadow relative">
                <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  POPULAIRE
                </div>
                <div className="p-6 border-b border-slate-100">
                  <h3 className="font-bold text-lg text-slate-900">Kaspersky Plus</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-blue-600">450</span>
                    <span className="text-slate-600 ml-1">MAD</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">3 PC • 1 an</p>
                </div>
                <ul className="p-6 space-y-3 text-sm text-slate-700">
                  {[
                    "Protection pour 3 PC",
                    "Antivirus + Antispam",
                    "Firewall intelligent",
                    "Protection bancaire",
                    "Mises à jour automatiques",
                    "Support technique 24/7",
                    "Installation à distance incluse",
                    "Licence valide 1 an",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="p-6 pt-0">
                  <a
                    href={WHATSAPP_ANTIVIRUS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-xl transition"
                    data-event="cta_click"
                  >
                    Commander sur WhatsApp
                  </a>
                </div>
              </div>

              {/* Kaspersky Premium */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6 border-b border-slate-100">
                  <h3 className="font-bold text-lg text-slate-900">Kaspersky Premium</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-blue-600">650</span>
                    <span className="text-slate-600 ml-1">MAD</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">5 PC • 1 an + VPN</p>
                </div>
                <ul className="p-6 space-y-3 text-sm text-slate-700">
                  {[
                    "Protection pour 5 PC",
                    "Tout Kaspersky Plus",
                    "VPN inclus",
                    "Password Manager",
                    "Contrôle parental",
                    "Support prioritaire",
                    "Installation à distance incluse",
                    "Licence valide 1 an",
                  ].map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="p-6 pt-0">
                  <a
                    href={WHATSAPP_ANTIVIRUS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition"
                    data-event="cta_click"
                  >
                    Commander sur WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <p className="text-center mt-8 text-slate-600 text-sm">
              Bitdefender aussi disponible : Antivirus Plus 380 MAD • Internet Security 480 MAD •
              Total Security 680 MAD (meilleur rapport qualité/prix).{" "}
              <a href={WHATSAPP_ANTIVIRUS} className="text-blue-600 font-medium hover:underline">
                Demander un devis Bitdefender
              </a>
            </p>
          </div>
        </section>

        {/* =========================== SECTION 5: Comparison Table =========================== */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-10 text-center">
              Antivirus Gratuit vs Antivirus Payant : La Vérité
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200">
                    <th className="py-4 px-4 font-bold text-slate-900">Fonctionnalité</th>
                    <th className="py-4 px-4 font-bold text-slate-900">Gratuit</th>
                    <th className="py-4 px-4 font-bold text-slate-900">Payant (Kaspersky/Bitdefender)</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {[
                    ["Protection virus de base", true, true],
                    ["Firewall avancé", false, true],
                    ["Protection bancaire (anti-phishing)", false, true],
                    ["VPN inclus", false, "Oui (Premium)"],
                    ["Support technique 24/7", false, true],
                    ["Mises à jour automatiques", "Limitées", "Illimitées"],
                    ["Protection multi-appareils", false, "Jusqu'à 5 PC"],
                    ["Sans publicité", false, true],
                  ].map(([feature, free, paid], i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-slate-50" : "bg-white"}
                    >
                      <td className="py-3 px-4 font-medium">{feature}</td>
                      <td className="py-3 px-4">
                        {free === true ? (
                          <CheckCircle className="w-5 h-5 text-green-600 inline" aria-hidden />
                        ) : free === false ? (
                          <XCircle className="w-5 h-5 text-red-500 inline" aria-hidden />
                        ) : (
                          String(free)
                        )}
                      </td>
                      <td className="py-3 px-4">
                        {paid === true ? (
                          <CheckCircle className="w-5 h-5 text-green-600 inline" aria-hidden />
                        ) : (
                          String(paid)
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* =========================== SECTION 6: Kaspersky vs Bitdefender =========================== */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-10 text-center">
              Kaspersky vs Bitdefender : Lequel Choisir pour le Maroc ?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Kaspersky</h3>
                <ul className="space-y-3 text-slate-700">
                  {[
                    "Interface plus simple (idéal débutants)",
                    "Meilleure performance sur PC anciens",
                    "Prix légèrement plus bas",
                    "Populaire au Maroc",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" aria-hidden />
                      {t}
                    </li>
                  ))}
                  <li className="flex items-start gap-2 text-amber-700">
                    <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden />
                    Fonctionnalités avancées limitées
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-md border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Bitdefender</h3>
                <ul className="space-y-3 text-slate-700">
                  {[
                    "Protection N°1 mondiale (tests AV-Test)",
                    "Fonctionnalités avancées (VPN illimité)",
                    "Impact minimal sur les performances",
                    "Meilleur pour PME",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" aria-hidden />
                      {t}
                    </li>
                  ))}
                  <li className="flex items-start gap-2 text-amber-700">
                    <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden />
                    Prix légèrement plus élevé
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center mt-8 text-slate-700 font-medium">
              Les deux sont excellents. Choisissez <strong>Kaspersky</strong> si vous débutez,{" "}
              <strong>Bitdefender</strong> si vous voulez le meilleur.
            </p>
          </div>
        </section>

        {/* =========================== SECTION 7: Installation Process =========================== */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-10 text-center">
              Installation à Distance en 15 Minutes - Voici Comment
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  icon: MessageCircle,
                  title: "Commandez sur WhatsApp ou par téléphone",
                  color: "text-green-600",
                },
                {
                  step: 2,
                  icon: CreditCard,
                  title: "Paiement sécurisé (CMI Maroc) ou après installation",
                  color: "text-blue-600",
                },
                {
                  step: 3,
                  icon: Download,
                  title: "Téléchargez TeamViewer (1 clic, gratuit)",
                  color: "text-cyan-600",
                },
                {
                  step: 4,
                  icon: CheckCircle,
                  title: "Notre technicien installe tout en 15 min",
                  color: "text-indigo-600",
                },
              ].map(({ step, icon: Icon, title, color }) => (
                <div key={step} className="text-center">
                  <div
                    className={`w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3 ${color}`}
                  >
                    <Icon className="w-6 h-6" aria-hidden />
                  </div>
                  <div className="text-sm font-bold text-slate-900 mb-1">Étape {step}</div>
                  <p className="text-sm text-slate-600">{title}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-8 text-slate-600 text-sm">
              ✅ Paiement après installation possible (Casablanca/Rabat uniquement)
            </p>
          </div>
        </section>

        {/* =========================== SECTION 8: Cracked Warning =========================== */}
        <section className="py-16 lg:py-20 bg-red-50 border-y border-red-200">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center">
              Dangers des Antivirus Crackés (Version Piratée)
            </h2>
            <div className="bg-white rounded-2xl border-2 border-red-300 p-8 shadow-lg">
              <ul className="space-y-4 text-slate-700">
                {[
                  "Les antivirus crackés contiennent souvent des virus cachés.",
                  "Pas de mises à jour = vous restez vulnérable.",
                  "Risque de vol de données bancaires.",
                  "Support impossible en cas de problème.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" aria-hidden />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-center font-bold text-slate-900">
                Ne risquez pas vos données pour 300 MAD. Achetez une licence officielle.
              </p>
              <div className="mt-6 text-center">
                <a
                  href={WHATSAPP_ANTIVIRUS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl"
                  data-event="cta_click"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden />
                  Commander une licence officielle
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =========================== SECTION 9: Testimonials =========================== */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-10 text-center">
              Ce Que Disent Nos Clients à Casablanca, Rabat, Marrakech
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  stars: 5,
                  quote:
                    "Installation en 10 minutes chrono ! Le technicien était très pro et a tout expliqué en Darija. Mon PC Dell est maintenant ultra protégé.",
                  author: "Youssef M.",
                  city: "Casablanca (Maarif)",
                },
                {
                  stars: 5,
                  quote:
                    "J'ai pris Kaspersky Plus pour mes 3 PC. Paiement après installation, aucun souci. Je recommande à 100%.",
                  author: "Fatima Z.",
                  city: "Rabat (Agdal)",
                },
                {
                  stars: 5,
                  quote:
                    "Enfin un antivirus qui ne ralentit pas mon PC. Bitdefender installé en 15 min, support au top.",
                  author: "Omar K.",
                  city: "Marrakech (Guéliz)",
                },
                {
                  stars: 5,
                  quote:
                    "PME de 5 postes : nous avons équipé toute l'équipe. Tarif pro, installation rapide. Parfait.",
                  author: "Leila B.",
                  city: "Casablanca",
                },
                {
                  stars: 5,
                  quote:
                    "Licence officielle, pas de crack. Le technicien a tout configuré et m'a montré les bases. Merci AlloSupport !",
                  author: "Mehdi T.",
                  city: "Fès",
                },
                {
                  stars: 5,
                  quote:
                    "Problème de virus résolu + nouvel antivirus installé le même jour. Service impeccable.",
                  author: "Samira A.",
                  city: "Rabat",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-md border border-slate-200"
                >
                  <div className="flex gap-1 mb-3" aria-label={`${t.stars} étoiles`}>
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-5 h-5 text-amber-500 fill-amber-500"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-sm font-medium text-slate-900">
                    — {t.author}, {t.city}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================== SECTION 10: FAQ =========================== */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-10 text-center">
              Questions Fréquentes sur les Antivirus au Maroc
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Quelle est la différence entre Kaspersky et Bitdefender ?",
                  a: "Kaspersky offre une interface plus simple et convient aux débutants, tandis que Bitdefender propose des fonctionnalités avancées (VPN, gestionnaire de mots de passe). Les deux offrent une protection excellente au Maroc.",
                },
                {
                  q: "Comment se passe l'installation à distance ?",
                  a: "Après votre commande, nous vous contactons sur WhatsApp. Vous téléchargez TeamViewer (gratuit, 1 clic), et notre technicien installe et configure votre antivirus en 15 minutes maximum.",
                },
                {
                  q: "Puis-je payer après l'installation ?",
                  a: "Oui ! À Casablanca et Rabat, nous proposons le paiement après installation. Pour les autres villes (Marrakech, Tanger, Fès), le paiement se fait par CMI (carte bancaire marocaine) avant l'installation. C'est 100% sécurisé.",
                },
                {
                  q: "Est-ce que l'antivirus ralentit mon PC ?",
                  a: "Kaspersky et Bitdefender sont optimisés pour avoir un impact minimal. Sur les PC récents (moins de 5 ans), vous ne sentirez aucune différence. Sur les PC plus anciens, Kaspersky est souvent un peu plus léger.",
                },
                {
                  q: "Combien coûte le renouvellement après 1 an ?",
                  a: "Le renouvellement est au même prix que la licence initiale (350-650 MAD selon la formule). Nous vous rappelons avant l'expiration pour vous proposer le renouvellement.",
                },
                {
                  q: "Puis-je installer sur plusieurs PC avec une seule licence ?",
                  a: "Cela dépend de la formule : Kaspersky Standard = 1 PC, Kaspersky Plus = 3 PC, Kaspersky Premium = 5 PC. Même chose pour Bitdefender. Choisissez la formule selon le nombre de postes à protéger.",
                },
                {
                  q: "Que faire si j'ai déjà un antivirus gratuit (Avast) ?",
                  a: "Nous désinstallons proprement l'ancien antivirus avant d'installer Kaspersky ou Bitdefender. Évitez les conflits : un seul antivirus par PC.",
                },
                {
                  q: "Livrez-vous dans toutes les villes du Maroc ?",
                  a: "Oui. L'installation se fait à distance partout au Maroc (Casablanca, Rabat, Marrakech, Tanger, Fès, Agadir, etc.). Vous n'avez besoin que d'une connexion internet et de télécharger TeamViewer.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-slate-200 bg-slate-50 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-2 py-4 px-6 cursor-pointer list-none font-bold text-slate-900 hover:bg-slate-100 transition">
                    <span>{faq.q}</span>
                    <ChevronDown className="w-5 h-5 shrink-0 transition group-open:rotate-180" aria-hidden />
                  </summary>
                  <div className="px-6 pb-4 pt-0 text-slate-600">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* =========================== SECTION 11: Final CTA =========================== */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl lg:text-4xl font-bold mb-4">
              Protégez Votre PC Aujourd&apos;hui - Installation en 15 Minutes
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Ne laissez pas les virus détruire vos données. Commandez maintenant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href={WHATSAPP_ANTIVIRUS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-700 hover:bg-green-50 font-bold px-8 py-4 rounded-xl shadow-lg transition"
                data-event="cta_click"
                aria-label="Commander sur WhatsApp"
              >
                <MessageCircle className="w-6 h-6" aria-hidden />
                Commander sur WhatsApp
              </a>
              <a
                href={`tel:${GOOGLE_BUSINESS.PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-xl border-2 border-white transition"
                data-event="cta_click"
                aria-label="Appeler AlloSupport"
              >
                <Phone className="w-6 h-6" aria-hidden />
                Appeler : {GOOGLE_BUSINESS.PHONE_FORMATTED}
              </a>
            </div>
            <p className="text-sm text-blue-100">
              ⚡ Places limitées aujourd&apos;hui : 12 installations déjà réservées
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
