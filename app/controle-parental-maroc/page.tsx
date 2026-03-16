import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  MessageCircle,
  Phone,
  Mail,
  CheckCircle,
  Clock,
  Smartphone,
  Wifi,
  Lock,
  Users,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";
import { generateBreadcrumbSchema } from "@/lib/seo";

const CANONICAL = "https://allosupport.ma/controle-parental-maroc";
const WHATSAPP_CP = `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent("Bonjour, je souhaite configurer le contrôle parental pour protéger mes enfants (PC, téléphone, box).")}`;
const SOURCE_KASPERSKY =
  "https://www.cyberconfiance.ma/wp-content/uploads/2023/07/Etude-Kaspersky-Les-enfants-le-cyberharcelement-au-Maroc-1.pdf";
const SOURCE_OPINION =
  "https://lopinion.ma/fr/societe/web-zone/usage-numerique--91-des-parents-marocains-se-sont-disputes-avec-leur-enfant_a32336";

// ========== JSON-LD SCHEMAS ==========
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Configuration Contrôle Parental Maroc",
  description:
    "Configuration du contrôle parental à distance au Maroc : PC, Android, iPhone, box internet. Google Family Link, Kaspersky Safe Kids, filtrage réseau. Protection enfant en ligne.",
  provider: {
    "@type": "Organization",
    name: "AlloSupport.ma",
    url: "https://allosupport.ma",
  },
  areaServed: { "@type": "Country", name: "Morocco" },
  priceRange: "250-599 MAD",
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "MAD",
      minPrice: 250,
      maxPrice: 599,
    },
  },
  url: CANONICAL,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quel est le meilleur contrôle parental gratuit au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Family Link est la meilleure solution gratuite pour Android. Pour PC Windows, Windows Family Safety est intégré et gratuit. Pour une protection multi-appareils (PC + Android + iPhone), Kaspersky Safe Kids à 191 DH/an est la solution la plus complète disponible au Maroc.",
      },
    },
    {
      "@type": "Question",
      name: "Comment bloquer YouTube sur le téléphone de mon enfant ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trois méthodes : via Google Family Link (bloquer l'app dans les applications gérées), via Kaspersky Safe Kids (catégorie vidéo bloquée), ou via le réseau domestique (blocage du domaine youtube.com). AlloSupport configure les 3 méthodes à distance en moins de 30 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Est-ce qu'AlloSupport intervient à distance pour le contrôle parental ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, sur tout le Maroc. Via TeamViewer pour PC et guidage WhatsApp pour téléphones. Durée : 20 min (box seule) à 60 min (tous appareils). Tarifs : 250 DH à 450 DH. Paiement après résultat.",
      },
    },
    {
      "@type": "Question",
      name: "Le contrôle parental fonctionne-t-il sur iPhone ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Family Link ne fonctionne pas sur iPhone. Pour iOS, AlloSupport configure : 1) Temps d'écran natif Apple (gratuit), 2) Kaspersky Safe Kids multiplateforme (191 DH/an). Les deux sont configurables à distance via guidage WhatsApp.",
      },
    },
    {
      "@type": "Question",
      name: "Mon enfant peut-il contourner le contrôle parental ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un contrôle parental sur un seul appareil peut être contourné via données mobiles 4G. Notre Offre Protection Complète (450 DH) combine box + logiciel + paramètres iOS/Android, couvrant tous les points d'accès internet de l'enfant.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûte la configuration du contrôle parental au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AlloSupport.ma propose 3 offres : Config box seule (250 DH), Protection complète tous appareils (450 DH), Pack Famille Annuel (599 DH/an). Paiement uniquement après résultat satisfaisant.",
      },
    },
  ],
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "https://allosupport.ma" },
  { name: "Sécurité", url: "https://allosupport.ma/services/cybersecurite" },
  { name: "Contrôle Parental Maroc", url: CANONICAL },
]);

// ========== METADATA ==========
export const metadata: Metadata = {
  title:
    "Contrôle Parental au Maroc : Installation à Distance dès 150 DH",
  description:
    "Protégez vos enfants sur internet au Maroc. Installation et configuration contrôle parental à distance sur PC, tablette et téléphone. Intervention en 15 min. AlloSupport.ma",
  keywords: [
    "contrôle parental Maroc",
    "bloquer internet enfant Maroc",
    "Google Family Link Maroc configuration",
    "Kaspersky Safe Kids Maroc prix",
    "bloquer YouTube téléphone enfant",
    "bloquer TikTok enfant Maroc",
    "limiter temps écran enfant Maroc",
    "protection enfant internet Maroc",
    "logiciel contrôle parental Maroc",
    "technicien contrôle parental Casablanca Rabat",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title:
      "Contrôle Parental au Maroc : Installation à Distance dès 150 DH",
    description:
      "Protégez vos enfants sur internet au Maroc. Installation et configuration contrôle parental à distance sur PC, tablette et téléphone. Intervention en 15 min. AlloSupport.ma",
    url: CANONICAL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contrôle Parental Maroc 2026 | AlloSupport.ma",
    description: "Protégez vos enfants en ligne. Config à distance dès 250 DH.",
  },
};

export default function ControleParentalMarocPage() {
  return (
    <>
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

      <main className="min-h-screen bg-gray-50">
        {/* SECTION 1 — HERO */}
        <section className="bg-gradient-to-br from-indigo-800 via-indigo-900 to-slate-900 text-white pt-24 pb-16 md:pt-28 md:pb-20">
          <div className="max-w-4xl mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-white/80 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Accueil
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/services/cybersecurite" className="hover:text-white transition-colors">
                Sécurité
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Contrôle parental Maroc</span>
            </nav>
            <p className="text-base md:text-lg text-white mb-4 leading-relaxed">
              9 enfants marocains sur 10 utilisent un smartphone quotidiennement — sans aucune protection.{" "}
              <a
                href={SOURCE_KASPERSKY}
                rel="nofollow noopener noreferrer"
                target="_blank"
                className="text-amber-300 underline hover:text-amber-200 font-medium"
              >
                Étude Kaspersky / Cyberconfiance.ma 2023
              </a>
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-sm">
              Contrôle parental au Maroc — Protégez vos enfants en ligne dès ce soir
            </h1>
            <p className="text-base md:text-lg text-white leading-relaxed mb-8 max-w-3xl">
              AlloSupport.ma configure votre contrôle parental à distance en 20 minutes. Que vous vouliez 9arb lfon dial waldi (limiter le téléphone de votre enfant) ou bloquer l&apos;internet lil wld le soir, notre technicien met tout en place. Paiement uniquement si vous êtes satisfait.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP_CP}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
              >
                <MessageCircle className="w-5 h-5" />
                Configurer maintenant → WhatsApp
              </a>
              <a
                href="#tarifs"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/30 transition"
              >
                Voir les tarifs
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2 — CHIFFRES CHOC #stats */}
        <section id="stats" className="py-12 md:py-16 bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="sr-only">Chiffres clés protection enfant en ligne au Maroc</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                <p className="text-2xl md:text-3xl font-bold text-indigo-700 mb-2">9 / 10</p>
                <p className="text-gray-700 text-sm font-medium">enfants connectés quotidiennement</p>
                <p className="text-xs text-gray-500 mt-2">
                  Source :{" "}
                  <a href={SOURCE_KASPERSKY} rel="nofollow noopener noreferrer" target="_blank" className="text-indigo-600 hover:underline">
                    Kaspersky / Cyberconfiance.ma
                  </a>
                </p>
              </div>
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
                <p className="text-2xl md:text-3xl font-bold text-amber-700 mb-2">88%</p>
                <p className="text-gray-700 text-sm font-medium">des parents n&apos;ont jamais utilisé un logiciel de contrôle parental</p>
                <p className="text-xs text-gray-500 mt-2">
                  Source :{" "}
                  <a href={SOURCE_KASPERSKY} rel="nofollow noopener noreferrer" target="_blank" className="text-amber-600 hover:underline">
                    Kaspersky / Cyberconfiance.ma
                  </a>
                </p>
              </div>
              <div className="bg-rose-50 rounded-xl p-6 border border-rose-100">
                <p className="text-2xl md:text-3xl font-bold text-rose-700 mb-2">91%</p>
                <p className="text-gray-700 text-sm font-medium">des parents ont déjà eu un conflit avec leur enfant à cause du numérique</p>
                <p className="text-xs text-gray-500 mt-2">
                  Source :{" "}
                  <a href={SOURCE_OPINION} rel="nofollow noopener noreferrer" target="_blank" className="text-rose-600 hover:underline">
                    L&apos;Opinion.ma — Kaspersky 2022
                  </a>
                </p>
              </div>
              <div className="bg-slate-100 rounded-xl p-6 border border-slate-200">
                <p className="text-2xl md:text-3xl font-bold text-slate-700 mb-2">78%</p>
                <p className="text-gray-700 text-sm font-medium">des parents ne savent pas comment protéger leurs enfants en ligne</p>
                <p className="text-xs text-gray-500 mt-2">
                  Source :{" "}
                  <a href={SOURCE_KASPERSKY} rel="nofollow noopener noreferrer" target="_blank" className="text-slate-600 hover:underline">
                    Kaspersky / Cyberconfiance.ma
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — TARIFS #tarifs */}
        <section id="tarifs" className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Nos offres contrôle parental à distance
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Offre 1 */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-sm hover:border-indigo-200 transition">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Config box & réseau</h3>
                <p className="text-3xl font-bold text-indigo-600 mb-1">250 DH</p>
                <p className="text-sm text-gray-500 mb-4">20 min à distance</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Activation contrôle parental sur votre box internet
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Blocage des horaires de connexion par appareil
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Filtrage des sites adultes et jeux en ligne
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Blocage d&apos;un appareil spécifique (téléphone enfant)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Guide écrit fourni après intervention
                  </li>
                </ul>
                <a
                  href={WHATSAPP_CP}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 w-full justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  Réserver → WhatsApp
                </a>
              </div>

              {/* Offre 2 — LA PLUS CHOISIE */}
              <div className="bg-white rounded-2xl border-2 border-indigo-500 p-6 shadow-lg relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  🏆 LA PLUS CHOISIE
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Protection complète</h3>
                <p className="text-3xl font-bold text-indigo-600 mb-1">450 DH</p>
                <p className="text-sm text-gray-500 mb-4">45–60 min à distance</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Config box complète (horaires + filtrage URL)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Installation + config Google Family Link (Android) ou Kaspersky Safe Kids (PC/Mac/iOS)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Blocage YouTube, TikTok, réseaux sociaux
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Rapport d&apos;activité enfant activé
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Vérification finale sur tous appareils
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Support WhatsApp 7 jours post-intervention
                  </li>
                </ul>
                <a
                  href={WHATSAPP_CP}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 w-full justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  Réserver → WhatsApp
                </a>
              </div>

              {/* Offre 3 */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-sm hover:border-indigo-200 transition">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Pack Famille sécurisée</h3>
                <p className="text-3xl font-bold text-indigo-600 mb-1">599 DH<span className="text-base font-normal text-gray-500">/an</span></p>
                <p className="text-sm text-gray-500 mb-4">Annuel</p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Configuration initiale tous appareils (PC + 2 smartphones)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    2 mises à jour de configuration dans l&apos;année
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Ajout appareil supplémentaire inclus
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Support WhatsApp prioritaire 7j/7
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Rapport de suivi trimestriel
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    Adapté familles 2 à 4 enfants
                  </li>
                </ul>
                <a
                  href={`${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent("Bonjour, je souhaite un devis pour le Pack Famille Sécurisée contrôle parental.")}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 w-full justify-center bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 rounded-xl transition"
                >
                  Demander un devis
                </a>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600 max-w-2xl mx-auto">
              ✅ Paiement uniquement après résultat satisfaisant. ✅ Intervention à distance sur tout le Maroc. ✅ Technicien certifié, session TeamViewer sécurisée. Besoin aussi d&apos;une{" "}
              <Link href="/antivirus-maroc" className="text-indigo-600 hover:underline font-medium">
                protection antivirus pour le PC de votre enfant
              </Link>
              ? Nous la configurons à distance.
            </p>
          </div>
        </section>

        {/* SECTION 4 — OUTILS #outils */}
        <section id="outils" className="py-12 md:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Les solutions que nous configurons pour vous
            </h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-indigo-600 text-white">
                    <th className="text-left p-4 font-bold">Outil</th>
                    <th className="text-left p-4 font-bold">Appareils</th>
                    <th className="text-left p-4 font-bold">Coût licence</th>
                    <th className="text-left p-4 font-bold">Idéal pour</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium">Google Family Link</td>
                    <td className="p-4">Android</td>
                    <td className="p-4">Gratuit</td>
                    <td className="p-4">Enfants &lt;13 ans Android</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium">Kaspersky Safe Kids</td>
                    <td className="p-4">PC + Android + iOS</td>
                    <td className="p-4">191 DH/an</td>
                    <td className="p-4">Multi-appareils complet</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="p-4 font-medium">Windows Family Safety</td>
                    <td className="p-4">PC Windows</td>
                    <td className="p-4">Gratuit</td>
                    <td className="p-4">PC bureau enfant</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Config box (réseau)</td>
                    <td className="p-4">Tous appareils</td>
                    <td className="p-4">Gratuit</td>
                    <td className="p-4">Blocage réseau entier</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Kaspersky Safe Kids 191 DH/an :{" "}
              <a href="https://www.kaspersky.ma/safe-kids" rel="nofollow noopener noreferrer" target="_blank" className="text-indigo-600 hover:underline">
                kaspersky.ma — Tarif officiel
              </a>
            </p>
            <p className="text-sm text-gray-600 mb-4">
              Google Family Link gratuit :{" "}
              <a href="https://families.google/intl/fr/familylink/" rel="nofollow noopener noreferrer" target="_blank" className="text-indigo-600 hover:underline">
                families.google — Site officiel
              </a>
            </p>
            <p className="text-sm text-gray-600">
              Pour activer le contrôle parental directement sur votre box, consultez notre{" "}
              <Link href="/blog/192-168-1-1-admin-login-maroc-routeur-2026" className="text-indigo-600 hover:underline font-medium">
                guide configuration box et réseau domestique
              </Link>
              .
            </p>
          </div>
        </section>

        {/* SECTION 5 — COMMENT ÇA MARCHE #process */}
        <section id="process" className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
              Comment se déroule l&apos;intervention
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Contact (2 min)</h3>
                  <p className="text-sm text-gray-600">Envoyez-nous un message WhatsApp. Décrivez les appareils à protéger (marque, système, nombre d&apos;enfants).</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Diagnostic gratuit (5 min)</h3>
                  <p className="text-sm text-gray-600">Notre technicien évalue votre configuration et vous propose la solution adaptée à 0 DH.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Configuration à distance (20–45 min)</h3>
                  <p className="text-sm text-gray-600">Via TeamViewer sur PC ou guidage WhatsApp pour téléphones. Vous voyez tout en temps réel.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center shrink-0">4</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Vérification & paiement (5 min)</h3>
                  <p className="text-sm text-gray-600">Vous testez vous-même que tout fonctionne. Paiement uniquement si vous êtes 100% satisfait.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — CE QU'ON BLOQUE #blocage */}
        <section id="blocage" className="py-12 md:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Ce que nous pouvons bloquer ou limiter
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-indigo-600" />
                  Contenus bloqués
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Sites pour adultes et contenu explicite</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Jeux en ligne non appropriés</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Sites de rencontres</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Contenus violents et choquants</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Téléchargements non autorisés</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-indigo-600" />
                  Applications limitées
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> YouTube (temps limité ou bloquer complètement)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> TikTok (bloquer ou filtrer)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Instagram / Snapchat / Facebook</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Jeux mobiles (par plage horaire)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" /> Tout l&apos;internet après 21h (exemple)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 — FAQ #faq */}
        <section id="faq" className="py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              <details className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                <summary className="font-bold cursor-pointer text-gray-900">Quel est le meilleur contrôle parental gratuit au Maroc ?</summary>
                <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                  Google Family Link est la meilleure solution gratuite pour Android. Pour PC Windows, Windows Family Safety est intégré et gratuit. Pour une protection multi-appareils (PC + Android + iPhone), Kaspersky Safe Kids à 191 DH/an est la solution la plus complète disponible au Maroc. Pour protéger aussi le PC des virus, voir notre{" "}
                  <Link href="/antivirus-maroc" className="text-indigo-600 hover:underline font-medium">
                    page antivirus Maroc
                  </Link>
                  .
                </p>
              </details>
              <details className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                <summary className="font-bold cursor-pointer text-gray-900">Comment bloquer YouTube sur le téléphone de mon enfant ?</summary>
                <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                  Trois méthodes : via Google Family Link (bloquer l&apos;app dans les applications gérées), via Kaspersky Safe Kids (catégorie vidéo bloquée), ou via le réseau domestique (blocage du domaine youtube.com). AlloSupport configure les 3 méthodes à distance en moins de 30 minutes.
                </p>
              </details>
              <details className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                <summary className="font-bold cursor-pointer text-gray-900">Est-ce qu&apos;AlloSupport intervient à distance pour le contrôle parental ?</summary>
                <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                  Oui, sur tout le Maroc. Via TeamViewer pour PC et guidage WhatsApp pour téléphones. Durée : 20 min (box seule) à 60 min (tous appareils). Tarifs : 250 DH à 450 DH. Paiement après résultat.
                </p>
              </details>
              <details className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                <summary className="font-bold cursor-pointer text-gray-900">Le contrôle parental fonctionne-t-il sur iPhone ?</summary>
                <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                  Google Family Link ne fonctionne pas sur iPhone. Pour iOS, AlloSupport configure : 1) Temps d&apos;écran natif Apple (gratuit), 2) Kaspersky Safe Kids multiplateforme (191 DH/an). Les deux sont configurables à distance via guidage WhatsApp.
                </p>
              </details>
              <details className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                <summary className="font-bold cursor-pointer text-gray-900">Mon enfant peut-il contourner le contrôle parental ?</summary>
                <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                  Un contrôle parental sur un seul appareil peut être contourné via données mobiles 4G. Notre Offre Protection Complète (450 DH) combine box + logiciel + paramètres iOS/Android, couvrant tous les points d&apos;accès internet de l&apos;enfant.
                </p>
              </details>
              <details className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                <summary className="font-bold cursor-pointer text-gray-900">Combien coûte la configuration du contrôle parental au Maroc ?</summary>
                <p className="text-gray-700 text-sm mt-3 leading-relaxed">
                  AlloSupport.ma propose 3 offres : Config box seule (250 DH), Protection complète tous appareils (450 DH), Pack Famille Annuel (599 DH/an). Paiement uniquement après résultat satisfaisant.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* SECTION 8 — MAILLAGE INTERNE #liens */}
        <section id="liens" className="py-12 md:py-16 bg-gray-100 border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">En complément</h2>
            <p className="text-gray-600 text-sm mb-6">Articles et services utiles pour protéger votre famille et votre équipement.</p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              <li>
                <Link href="/antivirus-maroc" className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium">
                  Protection antivirus complète pour PC
                </Link>
              </li>
              <li>
                <Link href="/virus-ordinateur-maroc" className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium">
                  Supprimer les virus du PC de votre enfant
                </Link>
              </li>
              <li>
                <Link href="/blog/192-168-1-1-admin-login-maroc-routeur-2026" className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium">
                  Guide configuration box et réseau domestique
                </Link>
              </li>
              <li>
                <Link href="/blog/meilleur-antivirus-gratuit-maroc-2026-comparatif" className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium">
                  Meilleurs antivirus gratuits Maroc 2026
                </Link>
              </li>
              <li>
                <Link href="/depannage-informatique" className="text-indigo-600 hover:text-indigo-700 hover:underline font-medium">
                  Dépannage informatique à distance Maroc
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* SECTION 9 — CTA FINAL #contact */}
        <section id="contact" className="py-12 md:py-16 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Protégez vos enfants maintenant
            </h2>
            <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
              Technicien disponible maintenant. Configuration à distance en 20 minutes. Satisfait ou remboursé — paiement après résultat.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={WHATSAPP_CP}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href={`tel:${GOOGLE_BUSINESS.PHONE}`}
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-xl border border-white/40 transition"
              >
                <Phone className="w-5 h-5" />
                Téléphone
              </a>
              <a
                href="mailto:contact@allosupport.ma"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-xl border border-white/40 transition"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
