import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  Phone,
  HardDrive,
  Trash2,
  Usb,
  Volume2,
  RefreshCw,
  Cpu,
  Search,
  MonitorSmartphone,
  Building2,
  ChevronDown,
  Clock,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";
import { generateBreadcrumbSchema } from "@/lib/seo";

/* ─────────────────────────── CONSTANTS ─────────────────────────── */

const WHATSAPP_DIAGNOSTIC = `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent(
  "Bonjour, mon disque dur a un problème, je veux un diagnostic"
)}`;
const WHATSAPP_RECUP = `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent(
  "Bonjour, je veux tenter une récupération logicielle de mes données (250 DH)."
)}`;
const WHATSAPP_LABO = `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent(
  "Bonjour, mon disque dur semble avoir une panne physique. Pouvez-vous m'accompagner vers un labo ?"
)}`;

/* ─────────────────────────── METADATA ─────────────────────────── */

export const metadata: Metadata = {
  title: "Récupération Données Maroc — Disque Dur, SSD, Clé USB | 150 DH",
  description:
    "Récupération données Maroc : disque dur panne, SSD, clé USB. Diagnostic 150 DH, réponse WhatsApp 15 min, paiement après résultat. 7j/7.",
  alternates: {
    canonical: "https://allosupport.ma/recuperation-donnees",
  },
  keywords: [
    "récupération données disque dur Maroc",
    "récupération données SSD Maroc",
    "récupérer fichiers supprimés clé USB Maroc",
    "prix récupération données Maroc",
    "récupération données Casablanca",
    "données perdues Maroc",
    "récupérer fichiers après formatage Maroc",
  ],
  openGraph: {
    title: "Récupération Données Maroc — Disque Dur, SSD, Clé USB dès 150 DH",
    description:
      "Vos fichiers ont disparu ? Disque dur en panne ? Diagnostic à distance 150 DH, réponse WhatsApp en 15 min, paiement après résultat.",
    url: "https://allosupport.ma/recuperation-donnees",
    type: "website",
    locale: "fr_MA",
    images: [
      {
        url: "https://allosupport.ma/images/recuperation-donnees-maroc.png",
        width: 1200,
        height: 630,
        alt: "Récupération données Maroc : disque dur en panne, SSD, clés USB, assistance à distance WhatsApp, diagnostic AlloSupport.ma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Récupération Données Maroc | AlloSupport.ma",
    description:
      "Diagnostic 150 DH, récupération logicielle 250 DH, accompagnement labo 499 DH. WhatsApp 15 min, 7j/7.",
    images: ["https://allosupport.ma/images/recuperation-donnees-maroc.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-video-preview": -1,
    "max-snippet": -1,
  },
};

/* ─────────────────────────── JSON-LD SCHEMAS ─────────────────────────── */

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AlloSupport.ma",
  description: "Récupération données disque dur SSD clé USB Maroc",
  url: "https://allosupport.ma",
  telephone: "+212775237038",
  email: "contact@allosupport.ma",
  priceRange: "150-499 DH",
  areaServed: {
    "@type": "Country",
    name: "Maroc",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Casablanca",
    addressCountry: "MA",
  },
  openingHours: "Mo-Su 08:00-22:00",
  serviceType: "Récupération de données",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien coûte une récupération de données au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chez AlloSupport.ma, le diagnostic coûte 150 DH. Si le disque est encore lisible, la récupération logicielle à distance revient à 250 DH. En cas de panne physique nécessitant un laboratoire, l'accompagnement est à 499 DH (frais labo non inclus). Vous ne payez qu'après résultat.",
      },
    },
    {
      "@type": "Question",
      name: "Puis-je récupérer mes données si mon disque dur fait du bruit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un disque dur qui fait des cliquetis ou des bruits anormaux indique une panne mécanique. Éteignez votre PC immédiatement et ne tentez rien vous-même. Contactez-nous sur WhatsApp : nous évaluons la situation et vous orientons vers un laboratoire partenaire spécialisé si nécessaire.",
      },
    },
    {
      "@type": "Question",
      name: "Récupération de données après formatage, c'est possible au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, dans la majorité des cas un formatage rapide n'efface pas réellement les données. Tant que le disque n'a pas été rempli de nouvelles données, la récupération est souvent possible. Ne touchez à rien et contactez-nous rapidement pour maximiser les chances.",
      },
    },
    {
      "@type": "Question",
      name: "Travaillez-vous uniquement à distance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le diagnostic et la récupération logicielle se font à distance via TeamViewer. Si votre disque a une panne physique (cliquetis, non détecté), nous vous accompagnons vers un laboratoire partenaire spécialisé au Maroc. Notre service couvre tout le territoire : Casablanca, Rabat, Marrakech, Fès, Agadir et toutes les villes.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps prend une récupération de données à distance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le diagnostic prend 15 à 30 minutes. Une récupération logicielle à distance dure en moyenne 1 à 3 heures selon la taille du disque et la quantité de données à récupérer. On vous donne une estimation précise dès le diagnostic.",
      },
    },
  ],
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "https://allosupport.ma" },
  {
    name: "Récupération Données Maroc",
    url: "https://allosupport.ma/recuperation-donnees",
  },
]);

/* ─────────────────────────── CAS DATA ─────────────────────────── */

const CAS_TRAITES = [
  {
    icon: HardDrive,
    title: "PC qui ne démarre plus",
    desc: "Windows bloqué, écran bleu, boot en boucle — vos données perdues Maroc sont souvent récupérables tant que le disque n'est pas physiquement endommagé.",
  },
  {
    icon: Trash2,
    title: "Fichier supprimé par erreur",
    desc: "Dossier ou document effacé de la corbeille ? Tant qu'aucune nouvelle donnée n'a été écrite, on peut récupérer fichiers supprimés clé USB Maroc, disque dur ou SSD.",
  },
  {
    icon: Usb,
    title: "Clé USB ou disque externe qui demande un formatage",
    desc: "Windows vous dit « Vous devez formater le disque » ? Surtout ne cliquez pas Oui. Contactez-nous d'abord — dans la plupart des cas on récupère tout.",
  },
  {
    icon: Volume2,
    title: "Disque dur qui fait des bruits (cliquetis)",
    desc: "Quand le disque dur tombe en panne Maroc avec des bruits mécaniques, éteignez tout immédiatement. On évalue et on oriente vers un labo partenaire.",
  },
  {
    icon: RefreshCw,
    title: "Récupérer fichiers après formatage Maroc",
    desc: "Un formatage rapide ne détruit pas les données. Il est souvent possible de récupérer fichiers après formatage Maroc si le disque n'a pas été réécrit.",
  },
  {
    icon: Cpu,
    title: "SSD non reconnu / BSOD",
    desc: "Récupération données SSD Maroc : SSD qui disparaît du BIOS, erreurs BSOD liées au stockage. Diagnostic à distance pour évaluer les options.",
  },
];

/* ─────────────────────────── FAQ DATA ─────────────────────────── */

const FAQ_ITEMS = [
  {
    q: "Combien coûte une récupération de données au Maroc ?",
    a: "Chez AlloSupport.ma, le diagnostic coûte 150 DH. Si le disque est encore lisible, la récupération logicielle à distance revient à 250 DH. En cas de panne physique nécessitant un laboratoire, l'accompagnement est à 499 DH (frais labo non inclus). Vous ne payez qu'après résultat.",
  },
  {
    q: "Puis-je récupérer mes données si mon disque dur fait du bruit ?",
    a: "Un disque dur qui fait des cliquetis indique une panne mécanique. Éteignez votre PC immédiatement et ne tentez rien. Contactez-nous sur WhatsApp : nous évaluons la situation et vous orientons vers un laboratoire partenaire spécialisé si nécessaire.",
  },
  {
    q: "Récupération de données après formatage, c'est possible au Maroc ?",
    a: "Oui, dans la majorité des cas un formatage rapide n'efface pas réellement les données. Tant que le disque n'a pas été rempli de nouvelles données, la récupération est souvent possible. Ne touchez à rien et contactez-nous rapidement.",
  },
  {
    q: "Travaillez-vous uniquement à distance ?",
    a: "Le diagnostic et la récupération logicielle se font à distance via TeamViewer. Pour les pannes physiques (cliquetis, disque non détecté), nous vous accompagnons vers un laboratoire partenaire spécialisé au Maroc. Casablanca, Rabat, Marrakech, Fès, Agadir et tout le Maroc.",
  },
  {
    q: "Combien de temps prend une récupération de données à distance ?",
    a: "Le diagnostic prend 15 à 30 minutes. Une récupération logicielle dure en moyenne 1 à 3 heures selon la taille du disque. On vous donne une estimation précise dès le diagnostic.",
  },
];

/* ─────────────────────────── PAGE COMPONENT ─────────────────────────── */

export default function RecuperationDonneesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Header />

      <main className="overflow-hidden">
        {/* ========== SECTION 1 : HERO ========== */}
        <section className="relative bg-gradient-to-br from-blue-950 via-slate-900 to-slate-900 text-white py-20 pt-32 md:py-24 md:pt-40">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-widest text-sky-300 mb-3">
                Récupération de données Maroc · 7j/7
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                Récupération de Données au Maroc — Disque Dur, SSD, Clé USB dès
                150&nbsp;DH
              </h1>
              <p className="text-lg text-slate-200 mb-2 leading-relaxed">
                Vos fichiers ont disparu ? Votre disque dur ma kaydirch ?{" "}
                <strong className="text-sky-300">
                  Ne touchez à rien — chaque manipulation réduit vos chances de
                  récupération.
                </strong>
              </p>
              <p className="text-sm text-slate-400 mb-6">
                Un technicien vous répond en 15 min sur WhatsApp pour évaluer
                gratuitement la situation et vous donner un diagnostic honnête.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                <a
                  href={WHATSAPP_DIAGNOSTIC}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg transition text-base"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden />
                  Diagnostic Gratuit sur WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-sky-400/60 text-sky-100 hover:bg-sky-500/10 px-6 py-3 rounded-xl font-semibold transition text-base"
                >
                  Décrire mon problème
                </Link>
              </div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold bg-sky-500/20 text-sky-200 px-3 py-1.5 rounded-full">
                <Clock className="w-4 h-4" aria-hidden />
                Réponse en 15 min — 7j/7
              </p>
            </div>
          </div>
        </section>

        {/* ========== VISUEL RÉCUPÉRATION DONNÉES ========== */}
        <section className="relative bg-slate-900 overflow-hidden">
          <div className="relative w-full aspect-[16/9] max-h-[480px]">
            <Image
              src="/images/recuperation-donnees-maroc.png"
              alt="Récupération données Maroc : disque dur en panne, SSD, clés USB, assistance à distance WhatsApp, diagnostic AlloSupport.ma — services informatiques Maroc"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority
            />
          </div>
        </section>

        {/* ========== SECTION 2 : COMPARATIF PRIX ========== */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Prix récupération données Maroc : pourquoi payer 10× plus ?
            </h2>
            <p className="text-slate-700 mb-8 leading-relaxed">
              Avant de confier votre disque à un inconnu ou d&apos;envoyer
              votre matériel en Europe, comparez les prix récupération données
              Maroc. Stellar.ma facture un{" "}
              <strong>diagnostic à 1 400 DH (€134)</strong>, affiche un numéro
              français et ne propose pas de WhatsApp. Les labos de Derb Ghallef
              annoncent &quot;gratuit&quot; puis ajoutent des frais cachés. Chez
              AlloSupport, le diagnostic est à <strong>150 DH</strong>, la
              réponse arrive en 15 min sur WhatsApp et vous ne payez
              qu&apos;après résultat.
            </p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200">
                    <th className="py-4 px-4 font-bold text-slate-900" />
                    <th className="py-4 px-4 font-bold text-emerald-700">
                      AlloSupport.ma
                    </th>
                    <th className="py-4 px-4 font-bold text-slate-900">
                      Stellar.ma
                    </th>
                    <th className="py-4 px-4 font-bold text-slate-900">
                      Labo Derb Ghallef
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  {[
                    [
                      "Diagnostic",
                      "150 DH",
                      "1 400 DH (€134)",
                      '"Gratuit" puis surprise',
                    ],
                    [
                      "Délai réponse",
                      "15 min WhatsApp",
                      "12-24h + envoi postal",
                      "Inconnu",
                    ],
                    [
                      "Garantie",
                      "Post-résultat",
                      "Non communiqué",
                      "Aucune",
                    ],
                    [
                      "Paiement",
                      "Après résultat",
                      "Avant intervention",
                      "Avant",
                    ],
                  ].map(([label, allo, stellar, ghallef], i) => (
                    <tr
                      key={label}
                      className={
                        i % 2 === 0
                          ? "bg-white border-t border-slate-100"
                          : "bg-slate-50 border-t border-slate-100"
                      }
                    >
                      <td className="py-3 px-4 font-medium text-slate-900">
                        {label}
                      </td>
                      <td className="py-3 px-4 font-semibold text-emerald-700">
                        {allo}
                      </td>
                      <td className="py-3 px-4">{stellar}</td>
                      <td className="py-3 px-4">{ghallef}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              Data recovery Maroc — comparez avant de décider. Vous méritez un
              prix honnête et un interlocuteur réactif.
            </p>
          </div>
        </section>

        {/* ========== SECTION 3 : CAS TRAITÉS ========== */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">
              Récupération données disque dur SSD Maroc — tous les cas
            </h2>
            <p className="text-slate-700 text-center max-w-2xl mx-auto mb-10">
              Que vos fichiers perdus Maroc soient sur un disque dur
              mécanique, un SSD ou une clé USB, nous intervenons à distance
              pour évaluer et tenter la récupération.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAS_TRAITES.map((cas) => (
                <div
                  key={cas.title}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <cas.icon
                      className="w-6 h-6 text-blue-600"
                      aria-hidden
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {cas.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {cas.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== SECTION 4 : COMMENT ÇA MARCHE ========== */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 text-center">
              3 étapes pour récupérer vos données à distance
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  icon: Search,
                  title: "WhatsApp → diagnostic 15 min",
                  desc: "Décrivez votre problème sur WhatsApp. Un technicien vous répond en 15 min, évalue les chances de récupération et vous donne un conseil immédiat. Diagnostic 150 DH — gratuit si récupération logicielle commandée.",
                },
                {
                  step: 2,
                  icon: MonitorSmartphone,
                  title: "Tentative logicielle à distance",
                  desc: "Si le disque est encore détecté, nous prenons la main via TeamViewer et tentons une récupération logicielle. Fichiers supprimés récupérer Maroc, partition corrompue, formatage accidentel — 250 DH si réussie. Sinon, vous ne payez pas.",
                },
                {
                  step: 3,
                  icon: Building2,
                  title: "Orientation labo si panne physique",
                  desc: "Disque dur qui claque, SSD grillé ? On prépare votre dossier et on vous accompagne vers un laboratoire partenaire spécialisé : 499 DH (frais labo non inclus). Accompagnement inclus jusqu'à la récupération.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-sky-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <item.icon
                    className="w-10 h-10 text-blue-600 mx-auto mb-3"
                    aria-hidden
                  />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center mt-10 text-slate-600 text-sm">
              🔒 TeamViewer est utilisé par 600 millions d&apos;utilisateurs.
              Vous voyez tout en direct — vos données personnelles ne sont
              jamais touchées.
            </p>
          </div>
        </section>

        {/* ========== SECTION 5 : TARIFS ========== */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">
              Tarifs récupération données Maroc — transparents et fixes
            </h2>
            <p className="text-slate-700 text-center max-w-2xl mx-auto mb-10">
              Pas de frais cachés, pas de surprise. Vous connaissez le prix
              avant l&apos;intervention et ne payez qu&apos;après résultat.
              Récupération données Casablanca, Rabat, Marrakech et tout le
              Maroc.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Diagnostic */}
              <div className="border border-slate-200 rounded-2xl p-6 bg-white">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Diagnostic
                </h3>
                <p className="text-4xl font-bold text-slate-900 mb-1">
                  150 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-6">
                  Analyse de la situation, évaluation des risques et conseil
                  immédiat. Vous savez exactement quoi faire avant d&apos;agir.
                </p>
                <a
                  href={WHATSAPP_DIAGNOSTIC}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block w-full text-center py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-100 transition"
                >
                  Demander un diagnostic
                </a>
              </div>

              {/* Récupération logicielle */}
              <div className="border-2 border-emerald-500 rounded-2xl p-6 bg-emerald-50 shadow-md scale-105 relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Le plus choisi
                </span>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Récupération logicielle
                </h3>
                <p className="text-4xl font-bold text-slate-900 mb-1">
                  250 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-6">
                  Disque encore lisible, tentative de récupération à distance
                  via TeamViewer. Paiement uniquement si données récupérées.
                </p>
                <a
                  href={WHATSAPP_RECUP}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block w-full text-center py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition"
                >
                  Récupérer mes données
                </a>
              </div>

              {/* Accompagnement labo */}
              <div className="border border-slate-200 rounded-2xl p-6 bg-white">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  Accompagnement labo
                </h3>
                <p className="text-4xl font-bold text-slate-900 mb-1">
                  499 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-6">
                  Préparation du dossier + suivi avec un laboratoire
                  partenaire spécialisé. Frais labo non inclus.
                </p>
                <a
                  href={WHATSAPP_LABO}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block w-full text-center py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-100 transition"
                >
                  Discuter de mon cas
                </a>
              </div>
            </div>
            <p className="text-center mt-8 text-slate-600 text-sm">
              💡 Paiement accepté : CMI (carte bancaire marocaine), Cash Plus,
              CIH Mobile, virement bancaire
            </p>
          </div>
        </section>

        {/* ========== SECTION 6 : LIENS INTERNES SEO ========== */}
        <section className="py-12 bg-white border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Services liés
            </h2>
            <ul className="flex flex-wrap gap-3">
              {[
                { href: "/formatage-pc", label: "Formatage PC Maroc" },
                {
                  href: "/depannage-informatique",
                  label: "Dépannage informatique à distance Maroc",
                },
                {
                  href: "/reparation-ordinateur",
                  label: "Réparation ordinateur Maroc",
                },
                {
                  href: "/blog/recuperation-donnees-disque-dur-maroc",
                  label: "Guide récupération données disque dur Maroc",
                },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-4 py-2 rounded-lg transition-colors"
                  >
                    {label}
                    <span aria-hidden>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ========== PAGES SPÉCIALISÉES (SILO) ========== */}
        <section className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Pages spécialisées récupération données
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  href: "/recuperation-donnees-casablanca",
                  title: "Récupération données Casablanca",
                  desc: "Maarif, Agdal, Ain Diab, Derb Ghallef — diagnostic 150 DH",
                },
                {
                  href: "/recuperation-donnees-rabat",
                  title: "Récupération données Rabat",
                  desc: "Agdal, Hassan, Hay Riad, Souissi — diagnostic 150 DH",
                },
                {
                  href: "/recuperation-donnees-disque-dur-ssd",
                  title: "Disque dur & SSD",
                  desc: "HDD cliquetis, SSD non reconnu, NVMe — toutes pannes",
                },
                {
                  href: "/recuperation-donnees-cle-usb",
                  title: "Clé USB & carte SD",
                  desc: "Clé demande formatage, fichiers supprimés, carte corrompue",
                },
              ].map(({ href, title, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="block bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md hover:border-emerald-300 transition-all group"
                >
                  <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-1 text-sm">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========== SECTION 7 : FAQ ========== */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center">
              Questions fréquentes — récupération données Maroc
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
                    <p className="m-0 leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ========== CTA FINAL ========== */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-sky-600 to-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Des données perdues ? Chaque minute compte.
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Ne laissez pas un formatage sauvage ou des tentatives ratées
              détruire définitivement vos fichiers. Contactez-nous maintenant —
              diagnostic en 15 min.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href={WHATSAPP_DIAGNOSTIC}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-5 rounded-2xl shadow-lg transition text-lg min-h-[56px]"
                aria-label="Parler à un technicien récupération données sur WhatsApp"
              >
                <MessageCircle className="w-7 h-7" aria-hidden />
                Parler à un Expert Données
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
            <p className="text-sm text-blue-200">
              Paiement : CMI • Cash Plus • CIH Mobile • Virement
            </p>
          </div>
        </section>

        {/* ========== NOS SERVICES PAR VILLE ET TYPE DE SUPPORT ========== */}
        <section
          className="py-12 bg-white border-t border-slate-200"
          aria-label="Nos services par ville et type de support"
        >
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Nos services par ville et type de support
            </h2>
            <ul className="flex flex-wrap gap-3">
              <li>
                <Link
                  href="/recuperation-donnees-casablanca"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-4 py-2 rounded-lg transition-colors"
                >
                  Récupération données Casablanca
                  <span aria-hidden>→</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/recuperation-donnees-rabat"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-4 py-2 rounded-lg transition-colors"
                >
                  Récupération données Rabat
                  <span aria-hidden>→</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/recuperation-donnees-disque-dur-ssd"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-4 py-2 rounded-lg transition-colors"
                >
                  Récupération données disque dur SSD Maroc
                  <span aria-hidden>→</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/recuperation-donnees-cle-usb"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-4 py-2 rounded-lg transition-colors"
                >
                  Récupérer données clé USB Maroc
                  <span aria-hidden>→</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/disque-dur-panne-que-faire-maroc"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-4 py-2 rounded-lg transition-colors"
                >
                  Disque dur en panne que faire Maroc
                  <span aria-hidden>→</span>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
