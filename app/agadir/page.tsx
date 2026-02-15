import type { Metadata } from "next";

const whatsappBase = "https://wa.me/212775237038";

export const metadata: Metadata = {
  title: "Dépannage PC Agadir - Réparation à Distance | AlloSupport.ma",
  description:
    "Dépannage informatique Agadir pour PME, freelances et particuliers du Souss-Massa (Talborjt, Cité Suisse, Hay Dakhla). Intervention à distance en 15 min, dès 250 DH.",
  alternates: {
    canonical: "https://allosupport.ma/agadir",
  },
  openGraph: {
    title: "Dépannage PC Agadir - Réparation à Distance",
    description:
      "Réparation PC à Agadir sans déplacement. Intervention rapide à distance via WhatsApp, tarifs transparents dès 250 DH.",
    url: "https://allosupport.ma/agadir",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dépannage PC Agadir | AlloSupport",
    description: "Technicien informatique Agadir, intervention à distance 15 min, dès 250 DH.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Dépannage PC Agadir - AlloSupport.ma",
  description:
    "Dépannage informatique à distance à Agadir pour PME, agriculture, pêche, freelances et particuliers (Talborjt, Cité Suisse, Hay Dakhla, Sonaba).",
  url: "https://allosupport.ma/agadir",
  telephone: "+212 7 75 23 70 38",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Service à domicile tous quartiers",
    addressLocality: "Agadir",
    addressRegion: "Souss-Massa",
    postalCode: "80000",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.4278,
    longitude: -9.5981,
  },
  areaServed: [
    { "@type": "City", name: "Agadir" },
    { "@type": "AdministrativeArea", name: "Talborjt" },
    { "@type": "AdministrativeArea", name: "Cité Suisse" },
    { "@type": "AdministrativeArea", name: "Hay Dakhla" },
    { "@type": "AdministrativeArea", name: "Sonaba" },
  ],
  priceRange: "150 DH - 499 DH",
  serviceType: "Dépannage PC Agadir",
};

export default function AgadirPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je suis à Agadir et j'ai besoin d'un dépannage pour mon PC."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
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
                href={`${whatsappBase}?text=${encodeURIComponent(
                  "Bonjour, je suis à Agadir et je veux comprendre comment fonctionne votre dépannage à distance."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
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
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je suis à Agadir et je veux le Pack Agadir Complet (250 DH)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  rel="noopener noreferrer"
                  className="block text-center text-sm font-semibold bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition"
                >
                  Demander un devis PME
                </a>
              </div>
            </div>
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
                  <a href="/depannage-informatique" className="hover:underline">
                    Dépannage informatique à distance
                  </a>
                </li>
                <li>
                  <a href="/pc-lent-solution" className="hover:underline">
                    PC lent solution
                  </a>
                </li>
                <li>
                  <a href="/virus-ordinateur-maroc" className="hover:underline">
                    Suppression virus ordinateur Maroc
                  </a>
                </li>
                <li>
                  <a href="/formatage-pc" className="hover:underline">
                    Formatage PC prix Maroc
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Autres villes prises en charge
              </h3>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>
                  <a href="/casablanca" className="hover:underline">
                    Dépannage PC Casablanca
                  </a>
                </li>
                <li>
                  <a href="/rabat" className="hover:underline">
                    Dépannage informatique Rabat
                  </a>
                </li>
                <li>
                  <a href="/fes" className="hover:underline">
                    Réparation PC Fès
                  </a>
                </li>
                <li>
                  <a href="/marrakech" className="hover:underline">
                    Support informatique Marrakech
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

