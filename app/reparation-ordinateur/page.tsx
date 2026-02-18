import type { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/seo";

const whatsappBase = "https://wa.me/212775237038";

export const metadata: Metadata = {
  title: "Réparation Ordinateur Maroc | PC Portable & Fixe 250 DH | AlloSupport",
  description:
    "Réparation ordinateur Maroc à distance. PC portable, fixe, Windows, virus, lenteur. Technicien en 15 min, paiement après résultat. Dès 250 DH.",
  alternates: {
    canonical: "https://allosupport.ma/reparation-ordinateur",
  },
  openGraph: {
    title: "Réparation Ordinateur Maroc - À Distance",
    description:
      "Réparez votre PC sans vous déplacer. Réparation ordinateur à distance au Maroc, diagnostic gratuit et tarifs transparents.",
    url: "https://allosupport.ma/reparation-ordinateur",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Service", "ProfessionalService"],
  name: "Réparation ordinateur Maroc - AlloSupport.ma",
  serviceType: "Réparation ordinateur Maroc",
  url: "https://allosupport.ma/reparation-ordinateur",
  provider: {
    "@type": "LocalBusiness",
    name: "AlloSupport.ma",
    telephone: "+212775237038",
    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },
  },
  description:
    "Service de réparation ordinateur au Maroc. PC portable et fixe, problèmes Windows, virus, lenteur. Intervention à distance en 15 minutes.",
  areaServed: {
    "@type": "Country",
    name: "Morocco",
  },
  offers: {
    "@type": "Offer",
    price: "250",
    priceCurrency: "MAD",
    description: "Réparation ordinateur complète à distance",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "https://allosupport.ma" },
  { name: "Réparation Ordinateur Maroc", url: "https://allosupport.ma/reparation-ordinateur" },
]);

export default function ReparationOrdinateurPage() {
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
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-widest text-emerald-300 mb-3">
                Réparation ordinateur Maroc
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Réparation Ordinateur Maroc – PC Portable & Fixe à Distance
              </h1>
              <p className="text-lg text-slate-100 mb-6">
                Un seul point de contact pour tous vos problèmes PC :{" "}
                <strong className="text-emerald-300">écran bleu, lenteur, plantage,
                virus, mises à jour bloquées</strong>. Intervention en 15 min, paiement après résultat.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, j'ai besoin d'une réparation pour mon ordinateur."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
                >
                  Lancer une réparation
                </a>
                <p className="text-sm text-slate-300">
                  Dès <span className="font-semibold text-emerald-300">250 DH</span> • Satisfait ou Remboursé
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services de réparation */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Réparation Ordinateur Maroc – Tous Types de Pannes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">PC Portable</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    PC portable lent ou qui chauffe
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    Écran noir ou bleu sur portable
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    Virus et malware sur laptop
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    Windows qui ne démarre plus
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">PC Fixe / Bureau</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    Ordinateur de bureau lent
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    Problèmes réseau et Wi-Fi
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    Imprimante qui ne répond plus
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    Mises à jour Windows bloquées
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Darija */}
        <section className="py-10 bg-emerald-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-xl font-semibold text-slate-800 mb-2">
              L&apos;ordinateur dyalek khsro ? Kayn l7al !
            </p>
            <p className="text-slate-700">
              PC t9il, chi9, virus, écran bleu ? On se connecte en 15 min et on répare à distance. Bla ma tji l&apos;atelier, bla ma tkhelli l&apos;PC 3 jours.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10">
              Tarifs Réparation Ordinateur Maroc
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-slate-200 rounded-2xl p-6 bg-white">
                <h3 className="text-lg font-semibold mb-2">Diagnostic rapide</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  150 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Identification du problème et premières recommandations.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux un diagnostic rapide pour mon ordinateur (150 DH)."
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
                  Le plus demandé
                </p>
                <h3 className="text-lg font-semibold mb-2">Réparation complète</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  250 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Réparation de la majorité des pannes logicielles PC portable ou fixe.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux une réparation complète pour mon ordinateur (250 DH)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-center text-sm font-semibold bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
                >
                  Réparer mon PC maintenant
                </a>
              </div>
              <div className="border border-slate-200 rounded-2xl p-6 bg-white">
                <h3 className="text-lg font-semibold mb-2">Pack PME</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  499 <span className="text-base font-medium">DH / mois</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Support continu pour entreprises et bureaux.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux des informations sur le pack PME (499 DH / mois)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-center text-sm font-semibold bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition"
                >
                  Demander un devis
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Liens internes */}
        <section className="py-12 border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Services liés</h3>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>
                  <a href="/depannage-informatique" className="hover:underline">
                    Dépannage informatique à distance
                  </a>
                </li>
                <li>
                  <a href="/formatage-pc" className="hover:underline">
                    Formatage PC prix Maroc
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
                  <a href="/maintenance-informatique" className="hover:underline">
                    Maintenance informatique Maroc
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Villes principales</h3>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>
                  <a href="/casablanca" className="hover:underline">
                    Réparation PC Casablanca
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

