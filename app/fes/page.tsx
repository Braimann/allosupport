import type { Metadata } from "next";

const whatsappBase = "https://wa.me/212775237038";

export const metadata: Metadata = {
  title: "Dépannage PC Fès - Réparation à Distance en 15 min | AlloSupport.ma",
  description:
    "Dépannage PC à Fès pour artisans, riads et étudiants (Ville Nouvelle, Batha, Narjiss). Réparation à distance en 15 min, dès 250 DH. Université Sidi Mohamed Ben Abdellah.",
  alternates: {
    canonical: "https://allosupport.ma/fes",
  },
  openGraph: {
    title: "Dépannage PC Fès - Réparation à Distance en 15 min",
    description:
      "Dépannage informatique et réparation PC à Fès sans déplacement. Intervention rapide via WhatsApp, tarifs transparents dès 250 DH.",
    url: "https://allosupport.ma/fes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dépannage PC Fès | AlloSupport",
    description: "Technicien informatique Fès, intervention à distance en 15 min, dès 250 DH.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Dépannage PC Fès - AlloSupport.ma",
  description:
    "Dépannage informatique à distance à Fès pour artisans en Médina, riads et étudiants (Ville Nouvelle, Batha, Route d'Imouzzer, Narjiss). Intervention en 15 min.",
  url: "https://allosupport.ma/fes",
  telephone: "+212 7 75 23 70 38",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Service à domicile tous quartiers",
    addressLocality: "Fès",
    addressRegion: "Fès-Meknès",
    postalCode: "30000",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.0181,
    longitude: -5.0078,
  },
  areaServed: [
    { "@type": "City", name: "Fès" },
    { "@type": "AdministrativeArea", name: "Ville Nouvelle" },
    { "@type": "AdministrativeArea", name: "Batha" },
    { "@type": "AdministrativeArea", name: "Route d'Imouzzer" },
    { "@type": "AdministrativeArea", name: "Narjiss" },
  ],
  priceRange: "150 DH - 499 DH",
  serviceType: "Dépannage PC Fès",
};

export default function FesPage() {
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
                Dépannage PC Fès
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Dépannage PC Fès - Réparation à Distance en 15 min
              </h1>
              <p className="text-lg text-slate-200 mb-6">
                À Fès, que vous soyez un artisan en Médina ou un étudiant à Narjiss, une
                panne informatique ne doit pas bloquer votre travail. Nos techniciens{" "}
                <strong className="text-emerald-300">interviennent à distance en 15 min</strong>,
                de Ville Nouvelle à Batha, sans déplacement.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je suis à Fès et j'ai besoin d'un dépannage pour mon PC."
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
                Artisans, riads et étudiants à Fès : une panne PC ne doit pas tout arrêter
              </h2>
              <p className="text-slate-700 mb-4">
                Que vous soyez à <strong>Ville Nouvelle</strong>, <strong>Batha</strong>,{" "}
                <strong>Route d&apos;Imouzzer</strong> ou <strong>Narjiss</strong> (campus
                Université Sidi Mohamed Ben Abdellah), un PC en panne bloque commandes,
                réservations ou mémoires. Nous intervenons pour{" "}
                <strong>lenteur, virus, erreurs Windows et logiciels de caisse</strong> sans
                vous faire perdre une journée.
              </p>
              <ul className="space-y-2 text-slate-700 list-disc list-inside">
                <li>PC lent ou qui bloque en pleine facturation / réservation</li>
                <li>Wi‑Fi instable dans le riad ou l&apos;atelier</li>
                <li>Logiciels qui plantent (compta, caisse, bureautique)</li>
                <li>Virus ou pop-ups après échange de clés USB</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Intervention à distance : Médina, Ville Nouvelle, Narjiss
              </h2>
              <p className="text-slate-700 mb-4">
                Un technicien AlloSupport.ma prend la main sur votre PC via{" "}
                <strong>TeamViewer ou AnyDesk</strong> pendant que vous gardez l&apos;œil
                sur l&apos;écran. Idéal pour les <strong>artisans</strong> qui ne peuvent pas
                quitter l&apos;atelier, les <strong>riads</strong> en pleine saison et les{" "}
                <strong>étudiants</strong> en période d&apos;examens.
              </p>
              <p className="text-slate-700 mb-4">
                Aucun déplacement : nous intervenons partout à Fès, de la Médina à la
                Route d&apos;Imouzzer, sans que vous laissiez votre poste.
              </p>
              <a
                href={`${whatsappBase}?text=${encodeURIComponent(
                  "Bonjour, je veux savoir comment fonctionne le dépannage PC à distance à Fès."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold"
              >
                Poser une question à un technicien →
              </a>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10">
              Tarifs dépannage PC à Fès
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Pack Fès Diagnostic</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  150 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Identification du problème + premières actions. Idéal artisan, riad ou étudiant.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je suis à Fès et je veux le Pack Fès Diagnostic (150 DH)."
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
                  Le plus demandé à Fès
                </p>
                <h3 className="text-lg font-semibold mb-2">Pack Fès Complet</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  250 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Résolution des pannes courantes : lenteur, virus, caisse, Wi‑Fi, imprimante.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je suis à Fès et je veux le Pack Fès Complet (250 DH)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm font-semibold bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
                >
                  Dépanner mon PC maintenant
                </a>
              </div>
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Pack Fès PME</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  499 <span className="text-base font-medium">DH / mois</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Pour riads, ateliers et petites entreprises de Fès : support continu et priorité.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux des infos sur le Pack Fès PME (499 DH / mois)."
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
              FAQ – Dépannage PC Fès
            </h2>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Est‑ce que je dois laisser mon PC plusieurs jours ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Non, <strong>tout se fait à distance</strong>. Vous gardez votre PC
                  chez vous ou à l&apos;atelier et voyez l&apos;intervention en direct sur votre écran.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Intervenez‑vous pour les systèmes de caisse des Riads ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Oui. Nous pouvons dépanner à distance les logiciels de caisse, réservation
                  et facturation utilisés dans les riads et hôtels de Fès, dès lors que le
                  PC est accessible (TeamViewer, AnyDesk). Pour des installations sur site,
                  nous étudions la demande au cas par cas.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Que se passe‑t‑il si le problème vient du matériel ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Si nous détectons une panne matérielle (disque dur, RAM, alimentation...),
                  nous vous l&apos;expliquons clairement et{" "}
                  <strong>vous n&apos;êtes pas facturé pour une réparation logicielle</strong>.
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
                  <a href="/marrakech" className="hover:underline">
                    Support informatique Marrakech
                  </a>
                </li>
                <li>
                  <a href="/agadir" className="hover:underline">
                    Dépannage PC Agadir
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

