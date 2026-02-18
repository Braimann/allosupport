import type { Metadata } from "next";
import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/seo";

const whatsappBase = "https://wa.me/212775237038";

export const metadata: Metadata = {
  title:
    "Dépannage Informatique Marrakech | Réparation PC 250 DH | AlloSupport",
  description:
    "Dépannage informatique Marrakech à distance. Hôtels, riads, expatriés (Guéliz, Hivernage, Palmeraie). Intervention 15 min, dès 250 DH.",
  alternates: {
    canonical: "https://allosupport.ma/marrakech",
  },
  openGraph: {
    title: "Support Informatique Marrakech - Dépannage PC à Distance",
    description:
      "Dépannage informatique pour particuliers, riads, hôtels et entreprises à Marrakech. Intervention rapide à distance via WhatsApp.",
    url: "https://allosupport.ma/marrakech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Support Informatique Marrakech | AlloSupport",
    description: "Dépannage PC Marrakech à distance en 15 min, Guéliz, Hivernage, dès 250 DH.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Support informatique Marrakech - AlloSupport.ma",
  description:
    "Support informatique à distance à Marrakech pour tourisme, hôtels, riads et expatriés (Guéliz, Hivernage, Palmeraie, Massira, Sidi Youssef Ben Ali).",
  url: "https://allosupport.ma/marrakech",
  telephone: "+212 7 75 23 70 38",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Service à domicile tous quartiers",
    addressLocality: "Marrakech",
    addressRegion: "Marrakech-Safi",
    postalCode: "40000",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.6295,
    longitude: -7.9811,
  },
  areaServed: [
    { "@type": "City", name: "Marrakech" },
    { "@type": "AdministrativeArea", name: "Guéliz" },
    { "@type": "AdministrativeArea", name: "Hivernage" },
    { "@type": "AdministrativeArea", name: "Palmeraie" },
    { "@type": "AdministrativeArea", name: "Massira" },
    { "@type": "AdministrativeArea", name: "Sidi Youssef Ben Ali" },
  ],
  priceRange: "150 DH - 499 DH",
  serviceType: "Dépannage informatique Marrakech",
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "https://allosupport.ma" },
  { name: "Dépannage Informatique Marrakech", url: "https://allosupport.ma/marrakech" },
]);

export default function MarrakechPage() {
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
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-widest text-emerald-300 mb-3">
                Support informatique Marrakech
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Dépannage Informatique Marrakech – Réparation PC à Distance
              </h1>
              <p className="text-lg text-slate-200 mb-6">
                L&apos;activité touristique à Marrakech ne s&apos;arrête jamais. Nos techniciens
                assurent la maintenance de votre PC, que vous soyez à{" "}
                <strong className="text-emerald-300">Guéliz ou dans un Riad de la Médina</strong>,
                sans déplacement.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je suis à Marrakech et j'ai besoin d'un support informatique pour mon PC / mon activité."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
                >
                  Contacter un technicien Marrakech
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
                Tourisme, hôtels, riads et expatriés à Marrakech
              </h2>
              <p className="text-slate-700 mb-4">
                Que vous soyez à <strong>Guéliz</strong>, <strong>Hivernage</strong>,{" "}
                <strong>Palmeraie</strong>, <strong>Massira</strong> ou{" "}
                <strong>Sidi Youssef Ben Ali</strong>, un PC en panne peut bloquer
                réservations, facturation ou télétravail. Nous intervenons pour les{" "}
                <strong>riads, hôtels, agences et expatriés</strong> sans service IT interne.
              </p>
              <ul className="space-y-2 text-slate-700 list-disc list-inside">
                <li>PC lent ou instable en pleine saison</li>
                <li>Wi‑Fi ou connexion internet qui saute</li>
                <li>Logiciels de réservation ou caisse qui plantent</li>
                <li>Virus ou perte de données après clé USB / email</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Maintenance à distance : Guéliz, Hivernage, Médina
              </h2>
              <p className="text-slate-700 mb-4">
                Un technicien AlloSupport.ma prend la main sur votre PC via{" "}
                <strong>TeamViewer ou AnyDesk</strong> pendant que vous gardez l&apos;œil
                sur l&apos;écran. Idéal pour les <strong>riads et hôtels</strong> qui ne
                peuvent pas attendre un déplacement, et pour les{" "}
                <strong>expatriés</strong> en télétravail.
              </p>
              <p className="text-slate-700 mb-4">
                Nous intervenons en soirée et le week‑end sur demande, pour ne pas
                bloquer votre activité touristique.
              </p>
              <a
                href={`${whatsappBase}?text=${encodeURIComponent(
                  "Bonjour, pouvez-vous m'expliquer vos services de support informatique pour Marrakech ?"
                )}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold"
              >
                Découvrir les formules PME →
              </a>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10">
              Tarifs support informatique Marrakech
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Pack Marrakech Ponctuel</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  250 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Une panne ou une question urgente sur un poste (riad, hôtel, bureau).
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je suis à Marrakech et je veux le Pack Marrakech Ponctuel (250 DH)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-center text-sm font-semibold bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition"
                >
                  Planifier une intervention
                </a>
              </div>
              <div className="border-2 border-emerald-500 rounded-2xl p-6 bg-emerald-50 shadow-md scale-105">
                <p className="inline-block text-xs font-semibold bg-emerald-500 text-white px-2 py-1 rounded-full mb-3">
                  Pour riads & hôtels
                </p>
                <h3 className="text-lg font-semibold mb-2">Pack Marrakech Mensuel</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  499 <span className="text-base font-medium">DH / mois</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Priorité de prise en charge + nombre d&apos;interventions mensuelles
                  incluses.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je suis à Marrakech et je veux le Pack Marrakech Mensuel (499 DH / mois)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-center text-sm font-semibold bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
                >
                  Discuter de mon besoin
                </a>
              </div>
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Pack Marrakech Sur Mesure</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  Sur devis
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Pour riads, hôtels, plateaux téléphoniques ou équipes plus larges.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je suis à Marrakech et je veux un devis sur mesure pour le support informatique de mon entreprise."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-center text-sm font-semibold bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition"
                >
                  Demander un devis entreprise
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Darija */}
        <section className="py-10 bg-emerald-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-xl font-semibold text-slate-800 mb-2">
              PC dyalek khsro f Marrakech ? Kayn l7al !
            </p>
            <p className="text-slate-700">
              PC t9il, chi9, virus f l&apos;riad wla l&apos;hotel ? On se connecte en 15 min et on répare à distance. Bla ma tkhelli l&apos;PC.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              FAQ – Dépannage informatique Marrakech
            </h2>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Est‑ce que vous vous déplacez à Marrakech ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Nous intervenons principalement <strong>à distance</strong>, ce qui
                  permet une prise en charge très rapide. Pour des besoins spécifiques sur
                  site, nous pouvons étudier la demande au cas par cas.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Peut‑on inclure plusieurs postes dans le pack mensuel ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Oui, le pack peut couvrir <strong>plusieurs PC</strong>. Le tarif est
                  alors ajusté en fonction du nombre de postes et du niveau de support
                  souhaité.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Proposez‑vous une assistance le week‑end pour les hôtels ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Oui. Nous proposons des{" "}
                  <strong>interventions en soirée et le week‑end</strong> sur demande,
                  particulièrement pour les riads et hôtels de Marrakech qui ne peuvent pas
                  attendre le lundi. Le tarif peut être ajusté selon le créneau ; contactez‑nous
                  pour un devis.
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
                Services complémentaires AlloSupport.ma
              </h3>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>
                  <Link href="/depannage-informatique" className="hover:underline">
                    Dépannage informatique Maroc
                  </Link>
                </li>
                <li>
                  <Link href="/support-pme" className="hover:underline">
                    Support informatique PME Maroc
                  </Link>
                </li>
                <li>
                  <Link href="/maintenance-informatique" className="hover:underline">
                    Maintenance informatique Maroc
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
                  <Link href="/agadir" className="hover:underline">
                    Dépannage PC Agadir
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

