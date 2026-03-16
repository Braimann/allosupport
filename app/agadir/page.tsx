import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";
import { generateBreadcrumbSchema } from "@/lib/seo";

const whatsappBase = GOOGLE_BUSINESS.WHATSAPP;
const WHATSAPP_CTA_AGADIR = "Bonjour, j'ai besoin d'un dépannage informatique à Agadir. Mon problème : [décrire]";

export const metadata: Metadata = {
  title: "Dépannage Informatique Agadir — Intervention PC à Domicile | AlloSupport",
  description:
    "Dépannage informatique à Agadir : réparation PC, virus, formatage. Technicien à domicile, 250 DH, paiement après résultat. AlloSupport Maroc.",
  alternates: {
    canonical: "https://allosupport.ma/agadir",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Dépannage Informatique Agadir — Intervention PC à Domicile | AlloSupport",
    description:
      "Dépannage informatique à Agadir : réparation PC, virus, formatage. Technicien à domicile, 250 DH, paiement après résultat. AlloSupport Maroc.",
    url: "https://allosupport.ma/agadir",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dépannage Informatique Agadir | AlloSupport",
    description: "Dépannage informatique Agadir : réparation PC, virus, formatage. 250 DH, paiement après résultat.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://allosupport.ma/agadir",
  name: "AlloSupport.ma — Dépannage Informatique Agadir",
  telephone: GOOGLE_BUSINESS.PHONE,
  priceRange: "250-500 DH",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Agadir",
    addressRegion: "Souss-Massa",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.4278,
    longitude: -9.5981,
  },
  areaServed: ["Centre-ville", "Hay Mohammadi", "Tikiouine", "Anza", "Agadir"],
  url: "https://allosupport.ma/agadir",
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "https://allosupport.ma" },
  { name: "Dépannage Informatique Agadir", url: "https://allosupport.ma/agadir" },
]);

const QUARTIERS_AGADIR = [
  "Centre-ville",
  "Hay Mohammadi",
  "Tikiouine",
  "Anza",
  "Founty",
  "Talborjt",
  "Dakhla",
];

export default function AgadirPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-widest text-emerald-300 mb-3">
                Dépannage PC Agadir
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Dépannage PC Agadir - Réparation à Distance
              </h1>
              <p className="text-lg text-slate-200 mb-6">
                Dépannage informatique rapide pour les professionnels et particuliers du
                Souss-Massa. De <strong className="text-emerald-300">Talborjt à Hay Dakhla</strong>,
                nous prenons le contrôle à distance en 15 min, sans déplacement.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(WHATSAPP_CTA_AGADIR)}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
                >
                  Diagnostic gratuit via WhatsApp
                </a>
                <p className="text-sm text-slate-300">
                  Tarifs dès{" "}
                  <span className="font-semibold text-emerald-300">250 DH</span> •
                  Satisfait ou Remboursé
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nos quartiers d'intervention */}
        <section className="py-10 bg-slate-50 border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Nos quartiers d&apos;intervention
            </h2>
            <div className="flex flex-wrap gap-2">
              {QUARTIERS_AGADIR.map((q) => (
                <span
                  key={q}
                  className="bg-slate-100 rounded-full px-3 py-1 text-sm text-slate-700"
                >
                  {q}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Problème / Solution */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                PME, freelances et particuliers du Souss-Massa
              </h2>
              <p className="text-slate-700 mb-4">
                Que vous soyez à <strong>Talborjt</strong>, <strong>Cité Suisse</strong>,{" "}
                <strong>Hay Dakhla</strong> ou <strong>Sonaba</strong>, un PC en panne
                bloque bureaux, télétravail ou surf. Nous intervenons pour les{" "}
                <strong>PME, freelances, agriculteurs et particuliers</strong> du Souss-Massa
                sans déplacement.
              </p>
              <ul className="space-y-2 text-slate-700 list-disc list-inside">
                <li>PC lent ou qui bloque en pleine journée de travail</li>
                <li>Wi‑Fi ou connexion internet instable au bureau</li>
                <li>Imprimante ou logiciel de compta qui plantent</li>
                <li>Virus ou pop-ups après clé USB / email</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Contrôle à distance : Talborjt, Hay Dakhla, Sonaba
              </h2>
              <p className="text-slate-700 mb-4">
                Un technicien AlloSupport.ma prend la main sur votre PC via{" "}
                <strong>TeamViewer ou AnyDesk</strong> pendant que vous gardez l&apos;œil
                sur l&apos;écran. Idéal pour les <strong>bureaux PME</strong>, les{" "}
                <strong>freelances</strong> en télétravail et les particuliers qui ne
                veulent pas déplacer leur PC.
              </p>
              <p className="text-slate-700 mb-4">
                Nous intervenons partout à Agadir et dans le Souss-Massa, sans déplacement.
              </p>
              <a
                href={`${whatsappBase}?text=${encodeURIComponent(WHATSAPP_CTA_AGADIR)}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold"
              >
                Poser une question →
              </a>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10">
              Tarifs dépannage PC à Agadir
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Pack Agadir Diagnostic</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  150 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Premier avis technique ou petite panne (bureau, freelance, particulier).
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je suis à Agadir et je veux le Pack Agadir Diagnostic (150 DH)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-center text-sm font-semibold bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition"
                >
                  Réserver ce pack
                </a>
              </div>
              <div className="border-2 border-emerald-500 rounded-2xl p-6 bg-emerald-50 shadow-md scale-105">
                <p className="inline-block text-xs font-semibold bg-emerald-500 text-white px-2 py-1 rounded-full mb-3">
                  Le plus demandé à Agadir
                </p>
                <h3 className="text-lg font-semibold mb-2">Pack Agadir Complet</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  250 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Résolution des pannes courantes : lenteur, virus, Wi‑Fi, imprimante, compta.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(WHATSAPP_CTA_AGADIR)}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-center text-sm font-semibold bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
                >
                  Dépanner mon PC maintenant
                </a>
              </div>
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Pack Agadir PME</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  499 <span className="text-base font-medium">DH / mois</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Pour PME, bureaux et freelances d&apos;Agadir : support continu et priorité.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux des infos sur le Pack Agadir PME (499 DH / mois)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-center text-sm font-semibold bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition"
                >
                  Demander un devis PME
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Darija */}
        <section className="py-10 bg-emerald-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-xl font-semibold text-slate-800 mb-2">
              PC dyalek khsro f Agadir ? Kayn l7al !
            </p>
            <p className="text-slate-700">
              PC t9il, chi9, virus ? On se connecte en 15 min et on répare à distance. Bla ma tji l&apos;atelier.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              FAQ – Dépannage PC Agadir
            </h2>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Aidez‑vous à configurer les imprimantes pour les bureaux ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Oui. Nous pouvons vous aider à distance à <strong>configurer, dépanner ou
                  partager des imprimantes</strong> sur le réseau de votre bureau (Agadir,
                  Souss-Massa). Cela inclut pilotes, partage Windows et impression réseau.
                  Si l&apos;imprimante n&apos;est pas accessible à distance, nous vous guidons
                  étape par étape.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Est‑ce que vous intervenez aussi pour les bureaux et PME ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Oui, nous accompagnons <strong>bureaux, PME, freelances et agriculteurs</strong>{" "}
                  du Souss-Massa avec des interventions ponctuelles ou des forfaits de
                  maintenance (Pack Agadir PME).
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Que se passe‑t‑il si le problème revient après quelques jours ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Si le problème est lié à la même cause logicielle, nous{" "}
                  <strong>réintervenons pour vérifier</strong> et vous proposer, si besoin,
                  des solutions plus durables (maintenance, changement matériel, etc.).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Liens internes */}
        <section className="py-12 border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Autres services AlloSupport.ma
              </h3>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>
                  <Link href="/depannage-informatique" className="hover:underline">
                    Dépannage informatique Maroc
                  </Link>
                </li>
                <li>
                  <Link href="/pc-lent-solution" className="hover:underline">
                    PC lent solution rapide
                  </Link>
                </li>
                <li>
                  <Link href="/virus-ordinateur-maroc" className="hover:underline">
                    Suppression virus PC Maroc
                  </Link>
                </li>
                <li>
                  <Link href="/formatage-pc" className="hover:underline">
                    Formatage PC Maroc 350 DH
                  </Link>
                </li>
                <li>
                  <Link href="/infogerance-pme-maroc" className="hover:underline">
                    Infogérance PME Maroc
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Nos autres villes
              </h3>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>
                  <Link href="/casablanca" className="hover:underline">
                    Dépannage informatique Casablanca
                  </Link>
                </li>
                <li>
                  <Link href="/rabat" className="hover:underline">
                    Dépannage informatique Rabat
                  </Link>
                </li>
                <li>
                  <Link href="/fes" className="hover:underline">
                    Réparation PC Fès
                  </Link>
                </li>
                <li>
                  <Link href="/marrakech" className="hover:underline">
                    Dépannage informatique Marrakech
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Maillage interne géo */}
          <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Navigation :</p>
            <ul className="flex flex-wrap gap-4 text-sm">
              <li>
                <Link href="/" className="text-blue-700 hover:underline font-medium">
                  ← Retour à l&apos;accueil
                </Link>
              </li>
              <li>
                <Link href="/depannage-informatique-a-domicile" className="text-blue-700 hover:underline font-medium">
                  Dépannage à domicile Agadir
                </Link>
              </li>
              <li>
                <Link href="/formatage-pc" className="text-blue-700 hover:underline font-medium">
                  Formatage PC Agadir
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
