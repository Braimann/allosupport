import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Printer,
  Wifi,
  CircleOff,
  FileStack,
  Download,
  Building2,
  RefreshCw,
  Scan,
  MessageCircle,
  Check,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";

const CANONICAL = "https://allosupport.ma/installation-imprimante-maroc";
const WHATSAPP_IMPRIMANTE = `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent(
  "Bonjour AlloSupport, je souhaite installer ou configurer mon imprimante (WiFi, réseau ou USB)."
)}`;

export const metadata: Metadata = {
  title: "Installation Imprimante Maroc à Distance | AlloSupport",
  description:
    "Installation et configuration imprimante WiFi, réseau ou USB au Maroc. Technicien à distance, toutes marques, résultat garanti. Dès 150 DH.",
  alternates: { canonical: CANONICAL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Installation Imprimante Maroc à Distance | AlloSupport",
    description:
      "Installation et configuration imprimante WiFi, réseau ou USB au Maroc. Technicien à distance, toutes marques, résultat garanti. Dès 150 DH.",
    url: CANONICAL,
    type: "website",
    images: [
      {
        url: "https://allosupport.ma/images/og/installation-imprimante-maroc.jpg",
        width: 1200,
        height: 630,
        alt: "Bannière AlloSupport : installation imprimante à distance au Maroc — imprimante connectée WiFi/USB, écran d'installation Windows, marques HP Canon Epson Brother, 150 DH, résultat garanti, contact WhatsApp.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Installation Imprimante Maroc à Distance | AlloSupport",
    description: "Installation et configuration imprimante WiFi, réseau ou USB au Maroc. Dès 150 DH, toutes marques, résultat garanti.",
    images: ["https://allosupport.ma/images/og/installation-imprimante-maroc.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Installation imprimante Maroc - AlloSupport",
  serviceType: "Installation et configuration imprimante",
  description:
    "Installation, configuration et dépannage imprimante WiFi, réseau et USB à distance au Maroc. Toutes marques : HP, Canon, Epson, Brother. Intervention en moins de 30 minutes.",
  provider: {
    "@type": "Organization",
    name: "AlloSupport.ma",
    telephone: "+212775237038",
  },
  areaServed: { "@type": "Country", name: "MA" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tarifs installation imprimante Maroc",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Basique",
        price: "150",
        priceCurrency: "MAD",
        description: "Installation imprimante USB ou WiFi simple, 1 PC configuré, test d'impression inclus",
      },
      {
        "@type": "Offer",
        name: "Avancé",
        price: "250",
        priceCurrency: "MAD",
        description: "Configuration WiFi et pilotes complets, jusqu'à 3 PC, scan multifonction, résolution spooler",
      },
      {
        "@type": "Offer",
        name: "PME",
        priceCurrency: "MAD",
        description: "Sur devis — partage réseau imprimante tout le bureau, IP fixe, illimité postes",
      },
    ],
  },
  url: CANONICAL,
  image: "https://allosupport.ma/images/installation-imprimante-maroc-hero.png",
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "https://allosupport.ma" },
  { name: "Installation Imprimante Maroc", url: CANONICAL },
]);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien coûte l'installation d'une imprimante au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'installation d'une imprimante à distance avec AlloSupport commence à 150 DH. La configuration réseau ou WiFi avancée pour une PME est disponible sur devis.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on installer une imprimante à distance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. AlloSupport intervient à distance via logiciel de prise en main pour installer les pilotes, configurer la connexion WiFi ou réseau et tester l'impression, partout au Maroc.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles marques d'imprimantes prenez-vous en charge ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous intervenons sur toutes les marques : HP, Canon, Epson, Brother, Samsung, Lexmark, Xerox, Ricoh — USB, WiFi ou réseau.",
      },
    },
    {
      "@type": "Question",
      name: "Mon imprimante est reconnue mais n'imprime pas, que faire ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ce problème vient souvent du spooler d'impression Windows ou d'un conflit de pilotes. Nos techniciens le résolvent en moins de 30 minutes à distance.",
      },
    },
    {
      "@type": "Question",
      name: "Comment partager une imprimante entre plusieurs PC au bureau ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous configurons le partage réseau de votre imprimante sur tous les postes de votre bureau à distance, avec attribution d'une IP fixe pour éviter les déconnexions.",
      },
    },
  ],
};

const problemCards = [
  { icon: Printer, title: "Imprimante non détectée par Windows" },
  { icon: Wifi, title: "Connexion WiFi impossible ou instable" },
  { icon: CircleOff, title: 'Imprimante "hors ligne" bloquée' },
  { icon: FileStack, title: "File d'attente impression bloquée (Spooler)" },
  { icon: Download, title: "Pilotes corrompus ou manquants" },
  { icon: Building2, title: "Partage réseau bureau plusieurs PC" },
  { icon: RefreshCw, title: "Réinstallation après formatage PC" },
  { icon: Scan, title: "Configuration scanner multifonction" },
];

const faqData = [
  {
    q: "Combien coûte l'installation d'une imprimante au Maroc ?",
    a: "L'installation d'une imprimante à distance avec AlloSupport commence à 150 DH. La configuration réseau ou WiFi avancée pour une PME est disponible sur devis.",
  },
  {
    q: "Peut-on installer une imprimante à distance ?",
    a: "Oui. AlloSupport intervient à distance via logiciel de prise en main pour installer les pilotes, configurer la connexion WiFi ou réseau et tester l'impression, partout au Maroc.",
  },
  {
    q: "Quelles marques d'imprimantes prenez-vous en charge ?",
    a: "Nous intervenons sur toutes les marques : HP, Canon, Epson, Brother, Samsung, Lexmark, Xerox, Ricoh — USB, WiFi ou réseau.",
  },
  {
    q: "Mon imprimante est reconnue mais n'imprime pas, que faire ?",
    a: "Ce problème vient souvent du spooler d'impression Windows ou d'un conflit de pilotes. Nos techniciens le résolvent en moins de 30 minutes à distance.",
  },
  {
    q: "Comment partager une imprimante entre plusieurs PC au bureau ?",
    a: "Nous configurons le partage réseau de votre imprimante sur tous les postes de votre bureau à distance, avec attribution d'une IP fixe pour éviter les déconnexions.",
  },
];

export default function InstallationImprimanteMarocPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <main className="min-h-screen bg-gray-50">
        <nav aria-label="Fil d'Ariane" className="border-b border-gray-200 bg-white/80 pt-16 sm:pt-20">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-emerald-600 transition-colors">Accueil</Link></li>
              <li aria-hidden className="text-gray-400">›</li>
              <li className="text-gray-800 font-medium" aria-current="page">Installation Imprimante Maroc</li>
            </ol>
          </div>
        </nav>

        <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-900 text-white py-16 pt-24 md:py-20 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row lg:items-center lg:gap-12">
            <div className="flex-1">
              <p className="text-sm uppercase tracking-widest text-indigo-300 mb-3">
                Intervention en 30 min · Toutes marques · Partout au Maroc
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Installation Imprimante Maroc à Distance — Dès 150 DH
              </h1>
              <p className="text-lg text-slate-100 mb-6 max-w-3xl">
                Votre imprimante refuse de s&apos;installer ? Connexion WiFi impossible ? Imprimante hors ligne ? Nos techniciens la configurent à distance en moins de 30 minutes, toutes marques, partout au Maroc.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={WHATSAPP_IMPRIMANTE}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden />
                  Installer mon imprimante maintenant
                </a>
                <Link
                  href="/devis"
                  className="inline-flex items-center gap-2 border border-indigo-400/70 text-indigo-100 hover:bg-indigo-500/10 px-6 py-3 rounded-xl font-semibold transition"
                >
                  Demander un devis gratuit
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 mt-6 text-sm text-slate-300">
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" aria-hidden /> Résultat garanti</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" aria-hidden /> Paiement après intervention</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" aria-hidden /> Toutes marques</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" aria-hidden /> Sans déplacement</span>
              </div>
            </div>
            <div className="flex-1 mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <Image
                src="/images/installation-imprimante-maroc-hero.png"
                alt="Bannière promotionnelle AlloSupport : installation imprimante à distance au Maroc — imprimante multifonction connectée WiFi, USB et réseau, assistant d'installation Windows, marques HP Canon Epson Brother, dès 150 DH, résultat garanti, contact WhatsApp +212 7 75 23 70 38"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full max-w-lg h-auto object-contain"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center">
              Les problèmes d&apos;imprimante que nous résolvons
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {problemCards.map(({ icon: Icon, title }) => (
                <div key={title} className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" aria-hidden />
                  </div>
                  <h3 className="font-semibold text-slate-900 text-sm">{title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Toutes les marques d&apos;imprimantes prises en charge
            </h2>
            <ul className="flex flex-wrap justify-center gap-2 mb-6" aria-label="Marques d'imprimantes">
              {["HP", "Canon", "Epson", "Brother", "Samsung", "Lexmark", "Xerox", "Ricoh"].map((marque) => (
                <li key={marque}>
                  <span className="inline-block bg-white border border-slate-200 text-slate-700 font-medium px-4 py-2 rounded-full shadow-sm">
                    {marque}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Que vous ayez besoin d&apos;une <strong>installation imprimante HP Maroc</strong>, de <strong>configurer une Canon en WiFi Maroc</strong>, des <strong>pilotes Epson sous Windows 11 Maroc</strong> ou d&apos;un <strong>Brother en réseau bureau Maroc</strong>, nous intervenons sur tous les modèles — imprimante USB, WiFi, Bluetooth ou réseau, des imprimantes personnelles à l&apos;<strong>imprimante multifonction Maroc</strong>.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10">
              Tarifs installation imprimante Maroc
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Basique</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">150 <span className="text-base font-medium">DH</span></p>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li>Installation imprimante USB ou WiFi simple</li>
                  <li>1 PC configuré</li>
                  <li>Test d&apos;impression inclus</li>
                  <li>Délai : 20-30 min</li>
                </ul>
                <a href={WHATSAPP_IMPRIMANTE} target="_blank" rel="nofollow noopener noreferrer" className="block text-center text-sm font-semibold bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition">
                  Démarrer via WhatsApp
                </a>
              </div>
              <div className="border-2 border-indigo-500 rounded-2xl p-6 bg-indigo-50 shadow-md md:scale-105">
                <p className="inline-block text-xs font-semibold bg-indigo-500 text-white px-2 py-1 rounded-full mb-3">Le plus demandé</p>
                <h3 className="text-lg font-semibold mb-2">Avancé</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">250 <span className="text-base font-medium">DH</span></p>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li>Configuration WiFi + pilotes complets</li>
                  <li>Jusqu&apos;à 3 PC configurés</li>
                  <li>Scan multifonction inclus</li>
                  <li>Résolution panne spooler incluse</li>
                  <li>Délai : 30-45 min</li>
                </ul>
                <a href={WHATSAPP_IMPRIMANTE} target="_blank" rel="nofollow noopener noreferrer" className="block text-center text-sm font-semibold bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition">
                  Démarrer via WhatsApp
                </a>
              </div>
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">PME</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">Sur devis</p>
                <ul className="text-sm text-slate-600 space-y-1 mb-4">
                  <li>Partage réseau imprimante tout le bureau</li>
                  <li>IP fixe + configuration serveur impression</li>
                  <li>Illimité postes</li>
                  <li>Support prioritaire</li>
                </ul>
                <Link href="/devis" className="block text-center text-sm font-semibold bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition">
                  Demander un devis PME
                </Link>
              </div>
            </div>
            <p className="mt-6 text-center text-slate-700">
              Besoin d&apos;un <Link href="/support-pme" className="text-emerald-600 hover:underline font-medium">forfait support PME complet</Link> incluant l&apos;infogérance de votre parc informatique ?
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center">
              Comment fonctionne l&apos;installation à distance ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <span className="inline-flex w-10 h-10 rounded-full bg-indigo-500 text-white font-bold items-center justify-center mb-3">1</span>
                <h3 className="font-semibold text-slate-900 mb-2">Contactez-nous via WhatsApp</h3>
                <p className="text-slate-600 text-sm">Décrivez votre imprimante et le problème. Nous répondons en moins de 15 minutes.</p>
              </div>
              <div className="text-center">
                <span className="inline-flex w-10 h-10 rounded-full bg-indigo-500 text-white font-bold items-center justify-center mb-3">2</span>
                <h3 className="font-semibold text-slate-900 mb-2">Accès à distance sécurisé</h3>
                <p className="text-slate-600 text-sm">Notre technicien se connecte à votre PC via un logiciel sécurisé (TeamViewer ou AnyDesk).</p>
              </div>
              <div className="text-center">
                <span className="inline-flex w-10 h-10 rounded-full bg-indigo-500 text-white font-bold items-center justify-center mb-3">3</span>
                <h3 className="font-semibold text-slate-900 mb-2">Installation & test</h3>
                <p className="text-slate-600 text-sm">Pilotes, configuration WiFi ou réseau, test d&apos;impression complet. Résultat garanti.</p>
              </div>
            </div>
            <p className="mt-8 text-center text-slate-700 max-w-2xl mx-auto">
              Nous intervenons à distance pour les particuliers et entreprises à{" "}
              <Link href="/casablanca" className="text-emerald-600 hover:underline">Casablanca</Link>,{" "}
              <Link href="/rabat" className="text-emerald-600 hover:underline">Rabat</Link>,{" "}
              <Link href="/marrakech" className="text-emerald-600 hover:underline">Marrakech</Link>,{" "}
              <Link href="/fes" className="text-emerald-600 hover:underline">Fès</Link>,{" "}
              <Link href="/agadir" className="text-emerald-600 hover:underline">Agadir</Link> et partout au Maroc.
            </p>
            <p className="mt-4 text-center text-slate-700 max-w-2xl mx-auto">
              Nous prenons en charge toutes les configurations : <strong>imprimante multifonction Maroc</strong>, connexion via box Maroc Telecom, Inwi ou Orange, <strong>installation pilotes Windows 10 et Windows 11</strong>. Pour tout autre souci PC, notre <Link href="/depannage-informatique" className="text-emerald-600 hover:underline font-medium">dépannage informatique à distance</Link> est disponible.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
              Installation imprimante réseau pour les PME au Maroc
            </h2>
            <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed space-y-4">
              <p>
                En entreprise, le partage d&apos;une imprimante entre plusieurs postes évite les doublons et simplifie la gestion. Nous configurons l&apos;imprimante en réseau avec une <strong>IP fixe</strong> pour éviter les déconnexions, et nous l&apos;ajoutons sur tous les postes de votre bureau. Pour un parc plus important, notre <Link href="/infogerance-pme-maroc" className="text-emerald-600 hover:underline">infogérance PME Maroc</Link> et notre <Link href="/maintenance-informatique" className="text-emerald-600 hover:underline">maintenance informatique</Link> incluent la surveillance et l&apos;entretien de vos imprimantes. Besoin d&apos;un <Link href="/services/infogerance-pme" className="text-emerald-600 hover:underline">support informatique PME</Link> global ? Nous couvrons l&apos;installation, le dépannage et la continuité de vos équipements. Nous intervenons pour l&apos;<Link href="/casablanca" className="text-emerald-600 hover:underline">installation imprimante Casablanca</Link> et <Link href="/rabat" className="text-emerald-600 hover:underline">Rabat</Link> comme partout au Maroc. Consultez notre <Link href="/blog/installer-imprimante-wifi-maroc-guide" className="text-emerald-600 hover:underline">guide installation imprimante WiFi Maroc</Link> pour les étapes détaillées.
              </p>
              <p>
                La sécurité des imprimantes réseau en entreprise est essentielle : accès restreint, mise à jour des pilotes et surveillance des files d&apos;impression limitent les risques. Pour une approche globale, notre <Link href="/services/cybersecurite" className="text-emerald-600 hover:underline">sécurité informatique PME</Link> couvre l&apos;ensemble de votre infrastructure, imprimantes comprises.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
              Services informatiques associés
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/installation-windows" className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-md transition text-slate-900 font-medium text-center">
                Installation Windows Maroc
              </Link>
              <Link href="/depannage-informatique" className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-md transition text-slate-900 font-medium text-center">
                Dépannage informatique à distance
              </Link>
              <Link href="/formatage-pc" className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-md transition text-slate-900 font-medium text-center">
                Formatage PC Maroc
              </Link>
              <Link href="/maintenance-informatique" className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-md transition text-slate-900 font-medium text-center">
                Contrat maintenance informatique Maroc
              </Link>
            </div>
            <p className="mt-6 text-center">
              <Link href="/blog/installer-imprimante-wifi-maroc-guide" className="text-emerald-600 hover:underline font-medium">
                Guide : installer une imprimante WiFi au Maroc
              </Link>
            </p>
          </div>
        </section>

        <section className="py-16 bg-white" aria-labelledby="faq-imprimante-heading">
          <div className="max-w-4xl mx-auto px-4">
            <h2 id="faq-imprimante-heading" className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
              Questions fréquentes — Installation imprimante Maroc
            </h2>
            <dl className="space-y-4">
              {faqData.map((item, i) => (
                <div key={i} className="border border-slate-200 rounded-xl p-4">
                  <dt className="font-bold text-slate-900 mb-2">{item.q}</dt>
                  <dd className="text-slate-700 text-sm leading-relaxed">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Votre imprimante installée en 30 minutes chrono
            </h2>
            <p className="text-slate-300 mb-6">
              Sans déplacement, résultat garanti, toutes marques, dès 150 DH.
            </p>
            <a
              href={WHATSAPP_IMPRIMANTE}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition"
            >
              <MessageCircle className="w-5 h-5" aria-hidden />
              Contacter un technicien maintenant
            </a>
            <p className="mt-4 text-slate-400 text-sm">
              <Link href="/contact" className="text-emerald-400 hover:underline">Nous contacter par formulaire</Link>
              {" · "}
              Demander un devis gratuit
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
