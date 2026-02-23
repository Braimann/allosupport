import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  MapPin,
  CheckCircle,
  ShieldAlert,
  Star,
  ChevronDown,
  Clock,
  Monitor,
  HardDrive,
  Wifi,
  Printer,
  Gauge,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";

const canonicalUrl = "https://allosupport.ma/depannage-informatique-a-domicile";
const whatsappMessage = encodeURIComponent(
  "Bonjour, j'ai besoin d'un dépannage informatique à domicile. Mon problème : [décrire]"
);
const WHATSAPP_CTA = `${GOOGLE_BUSINESS.WHATSAPP}?text=${whatsappMessage}`;

export const metadata: Metadata = {
  title: "Dépannage Informatique à Domicile Maroc — Intervention 2h | AlloSupport",
  description:
    "Dépannage informatique à domicile au Maroc : PC lent, virus, formatage. Intervention en 2h à Casablanca, Rabat, Salé. 250 DH, paiement après résultat.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Dépannage Informatique à Domicile Maroc — Intervention 2h | AlloSupport",
    description:
      "Dépannage informatique à domicile au Maroc : PC lent, virus, formatage. Intervention en 2h à Casablanca, Rabat, Salé. 250 DH, paiement après résultat.",
    url: canonicalUrl,
    type: "website",
    locale: "fr_MA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dépannage Informatique à Domicile Maroc | AlloSupport",
    description: "Intervention 2h à Casablanca, Rabat, Salé. 250 DH, paiement après résultat.",
  },
  keywords: [
    "dépannage informatique à domicile",
    "dépannage pc domicile maroc",
    "technicien informatique casablanca",
    "réparation pc rabat",
    "dépannage informatique salé",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://allosupport.ma/depannage-informatique-a-domicile",
  name: "AlloSupport.ma",
  description: "Dépannage informatique à domicile au Maroc. Casablanca, Rabat, Salé. Intervention 2h, 250 DH, paiement après résultat.",
  url: canonicalUrl,
  telephone: GOOGLE_BUSINESS.PHONE,
  priceRange: "250-500 DH",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Casablanca",
    addressRegion: "Casablanca-Settat",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.5731,
    longitude: -7.5898,
  },
  hasMap: "https://maps.google.com/?q=AlloSupport+Casablanca",
  areaServed: [
    { "@type": "City", name: "Casablanca" },
    { "@type": "City", name: "Rabat" },
    { "@type": "City", name: "Salé" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "22:00",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Dépannage Informatique à Domicile",
  name: "Dépannage Informatique à Domicile Maroc",
  provider: { "@type": "Organization", name: "AlloSupport.ma" },
  areaServed: [
    { "@type": "City", name: "Casablanca" },
    { "@type": "City", name: "Rabat" },
    { "@type": "City", name: "Salé" },
  ],
  description: "Intervention à domicile : PC lent, virus, formatage, récupération données, Windows, réseau, imprimante. 250 DH, paiement après résultat.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien coûte un dépannage à domicile ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un dépannage standard (PC lent, virus, paramétrage) coûte 250 DH. Formatage avec Windows officiel : 350 DH. Vous ne payez qu'après que le problème soit résolu. Diagnostic gratuit par WhatsApp.",
      },
    },
    {
      "@type": "Question",
      name: "Vous intervenez dans quelle ville ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous intervenons à Casablanca (Maarif, Agdal, Hay Riad, Ain Diab), Rabat (Agdal, Hassan, Hay Riad), Salé et Témara. Intervention possible sous 2h selon disponibilité.",
      },
    },
    {
      "@type": "Question",
      name: "Je paie quand ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vous payez uniquement après que le problème soit résolu. Si nous ne réparons pas, vous ne payez rien. Paiement par CMI, Cash Plus, CIH Mobile ou virement.",
      },
    },
    {
      "@type": "Question",
      name: "Vous travaillez le weekend ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Nous sommes joignables 7j/7 de 8h à 22h sur WhatsApp. Les interventions à domicile le weekend sont possibles selon planning ; répondez sous 15 min.",
      },
    },
  ],
};

const INTERVENTIONS = [
  { icon: Gauge, label: "PC lent", desc: "Nettoyage, optimisation, programmes au démarrage" },
  { icon: ShieldAlert, label: "Virus & malware", desc: "Suppression virus, pop-ups, ralentissements" },
  { icon: Monitor, label: "Écran bleu", desc: "Diagnostic et réparation BSOD Windows" },
  { icon: HardDrive, label: "Formatage & Windows", desc: "Réinstallation propre, sauvegarde données" },
  { icon: HardDrive, label: "Récupération données", desc: "Fichiers perdus, disque endommagé" },
  { icon: Monitor, label: "Installation Windows", desc: "Windows 10/11 officiel, drivers" },
  { icon: Wifi, label: "Réseau & Wi-Fi", desc: "Connexion internet, box, partage fichiers" },
  { icon: Printer, label: "Imprimante", desc: "Installation, connexion Wi-Fi, dépannage" },
];

const TEMOIGNAGES = [
  { prenom: "Karim", ville: "Maarif, Casablanca", probleme: "PC infecté par des pop-ups, impossible de travailler.", note: 5, texte: "Le technicien est venu en 2h, a tout nettoyé. Je n'ai payé qu'après. Top." },
  { prenom: "Samira", ville: "Agdal, Rabat", probleme: "Ordinateur lent au démarrage, Word qui plante.", note: 5, texte: "Intervention rapide, explications claires. Mon PC est reparti comme neuf." },
  { prenom: "Youssef", ville: "Salé", probleme: "Formatage + installation Windows après virus.", note: 5, texte: "Prix fixe 350 DH, pas de mauvaise surprise. Je recommande." },
];

const FAQ_ITEMS = [
  { q: "Combien coûte un dépannage à domicile ?", a: "Un dépannage standard (PC lent, virus, paramétrage) coûte 250 DH. Formatage avec Windows officiel : 350 DH. Vous ne payez qu'après que le problème soit résolu. Diagnostic gratuit par WhatsApp." },
  { q: "Vous intervenez dans quelle ville ?", a: "Nous intervenons à Casablanca (Maarif, Agdal, Hay Riad, Ain Diab), Rabat (Agdal, Hassan, Hay Riad), Salé et Témara. Intervention possible sous 2h selon disponibilité." },
  { q: "Je paie quand ?", a: "Vous payez uniquement après que le problème soit résolu. Si nous ne réparons pas, vous ne payez rien. Paiement par CMI, Cash Plus, CIH Mobile ou virement." },
  { q: "Vous travaillez le weekend ?", a: "Oui. Nous sommes joignables 7j/7 de 8h à 22h sur WhatsApp. Les interventions à domicile le weekend sont possibles selon planning ; nous répondons sous 15 min." },
];

export default function DepannageInformatiqueADomicilePage() {
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

      <Header />

      <main className="overflow-hidden">
        {/* 1. HERO */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 text-white py-16 pt-32 md:py-20 md:pt-40">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Dépannage Informatique à Domicile au Maroc
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-6">
              Intervention sous 2h à Casablanca, Rabat, Salé · 250 DH · Paiement après résultat · Garantie 30 jours
            </p>
            <a
              href={WHATSAPP_CTA}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition text-lg"
              aria-label="Contacter AlloSupport sur WhatsApp"
            >
              <MessageCircle className="w-6 h-6" aria-hidden />
              Dépannage à domicile — WhatsApp
            </a>
            <p className="mt-4 text-sm text-blue-200 flex items-center gap-2">
              <Clock className="w-4 h-4" aria-hidden />
              Réponse en 15 min · 7j/7
            </p>
          </div>
        </section>

        {/* 2. Comment ça marche */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center">
              Comment ça marche
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Tu appelles ou écris sur WhatsApp</h3>
                <p className="text-slate-600 text-sm">Décris ton problème. On te répond en 15 min et on fixe un créneau (à distance ou déplacement).</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">On diagnostique</h3>
                <p className="text-slate-600 text-sm">À distance par TeamViewer ou à domicile : on identifie la cause et on te dit le prix avant d&apos;agir.</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Tu paies uniquement si c&apos;est résolu</h3>
                <p className="text-slate-600 text-sm">Pas de résultat = pas de paiement. CMI, Cash Plus, virement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Nos interventions */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
              Nos interventions
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {INTERVENTIONS.map((item) => (
                <li key={item.label} className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{item.label}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Zones d'intervention */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
              Zones d&apos;intervention
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" aria-hidden />
                  Casablanca
                </h3>
                <p className="text-sm text-slate-600">Maarif, Agdal, Hay Riad, Ain Diab, centre-ville</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" aria-hidden />
                  Rabat
                </h3>
                <p className="text-sm text-slate-600">Agdal, Hassan, Hay Riad, Souissi</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" aria-hidden />
                  Salé · Témara
                </h3>
                <p className="text-sm text-slate-600">Salé centre, Témara, quartiers couverts</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Pourquoi pas Derb Ghallef ? */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
              Pourquoi pas Derb Ghallef ?
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-red-700 mb-2">Pas de garantie</h3>
                <p className="text-slate-600 text-sm mb-3">À Derb Ghallef, si la réparation lâche après 2 jours, tu reviens payer encore. Aucun suivi.</p>
                <p className="text-slate-800 text-sm flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" aria-hidden />
                  Chez nous : garantie 30 jours écrite. Si le problème revient, on repasse sans frais.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-red-700 mb-2">Prix flou</h3>
                <p className="text-slate-600 text-sm mb-3">« Ça dépend », « on verra après » — facture qui gonfle une fois le PC ouvert.</p>
                <p className="text-slate-800 text-sm flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" aria-hidden />
                  Nous : 250 DH dépannage standard, 350 DH formatage. Prix dit avant toute intervention.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-red-700 mb-2">Risque perte de données</h3>
                <p className="text-slate-600 text-sm mb-3">Ouverture disque sans précaution, formatage sauvage — tes photos et dossiers peuvent partir.</p>
                <p className="text-slate-800 text-sm flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" aria-hidden />
                  Nous : sauvegarde avant formatage, pas de manipulation hasardeuse. Récupération données possible si besoin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Avis */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
              Ce que disent nos clients
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {TEMOIGNAGES.map((t) => (
                <div key={t.prenom} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-center gap-1 mb-2" aria-label={`Note : ${t.note} sur 5`}>
                    {Array.from({ length: t.note }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" aria-hidden />
                    ))}
                  </div>
                  <p className="text-slate-800 font-medium">{t.prenom} — {t.ville}</p>
                  <p className="text-sm text-slate-600 mt-1">{t.probleme}</p>
                  <p className="text-slate-700 text-sm mt-3 italic">&quot;{t.texte}&quot;</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              {FAQ_ITEMS.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-xl border border-slate-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-2 py-4 px-5 cursor-pointer list-none font-bold text-slate-900 hover:bg-slate-50 transition">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 shrink-0 transition group-open:rotate-180" aria-hidden />
                  </summary>
                  <div className="px-5 pb-4 pt-0 text-slate-700 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Nos autres services
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link
                href="/"
                className="block bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-400 transition"
              >
                <h3 className="font-bold text-blue-700">← Retour à l&apos;accueil AlloSupport.ma</h3>
                <p className="text-sm text-slate-600 mt-1">Dépannage informatique Maroc, 250 DH</p>
              </Link>
              <Link
                href="/formatage-pc"
                className="block bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-400 transition"
              >
                <h3 className="font-bold text-blue-700">Formatage PC Maroc</h3>
                <p className="text-sm text-slate-600 mt-1">Réinstallation Windows officielle, 350 DH</p>
              </Link>
              <Link
                href="/virus-ordinateur-maroc"
                className="block bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-400 transition"
              >
                <h3 className="font-bold text-blue-700">Suppression de virus</h3>
                <p className="text-sm text-slate-600 mt-1">Nettoyage complet, antivirus, protection</p>
              </Link>
              <Link
                href="/recuperation-donnees"
                className="block bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-400 transition"
              >
                <h3 className="font-bold text-blue-700">Récupération de données</h3>
                <p className="text-sm text-slate-600 mt-1">Fichiers perdus, disque endommagé</p>
              </Link>
            </div>
          </div>
        </section>

        {/* 8. CTA Final */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Besoin d&apos;un dépannage à domicile ?
            </h2>
            <p className="text-lg text-blue-100 mb-6">
              Réponse en 15 min sur WhatsApp. Intervention à Casablanca, Rabat, Salé. 250 DH, paiement après résultat.
            </p>
            <a
              href={WHATSAPP_CTA}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition text-lg"
            >
              <MessageCircle className="w-6 h-6" aria-hidden />
              Envoyer sur WhatsApp
            </a>
            <p className="mt-4 text-blue-200 font-medium">
              {GOOGLE_BUSINESS.PHONE_FORMATTED}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
