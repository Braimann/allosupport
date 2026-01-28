import type { Metadata } from "next";

const whatsappBase = "https://wa.me/212770303940";

export const metadata: Metadata = {
  title:
    "Dépannage Informatique Rabat - Intervention à Distance en 15 min | AlloSupport.ma",
  description:
    "Dépannage informatique et réparation PC à Rabat (Agdal, Hay Riad, Souissi, Hassan). PC lent, virus, formatage, Windows. Intervention 100% à distance en 15 minutes, dès 250 DH.",
  alternates: {
    canonical: "https://allosupport.ma/rabat",
  },
  openGraph: {
    title: "Dépannage Informatique Rabat - Intervention à Distance en 15 min",
    description:
      "Réparation PC et dépannage informatique à Rabat. Intervention immédiate à distance via WhatsApp, sans déplacement. Tarifs transparents dès 250 DH.",
    url: "https://allosupport.ma/rabat",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Dépannage informatique Rabat - AlloSupport.ma",
  description:
    "Service de dépannage informatique à distance pour particuliers et PME à Rabat (Agdal, Hay Riad, Souissi, Hassan, Centre‑ville). Intervention en 15 minutes via WhatsApp.",
  url: "https://allosupport.ma/rabat",
  telephone: "+212 770 30 39 40",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rabat",
    addressRegion: "Rabat-Salé-Kénitra",
    addressCountry: "MA",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Rabat",
    },
  ],
  priceRange: "150 DH - 499 DH",
  serviceType: "Dépannage informatique Rabat",
};

export default function RabatPage() {
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
                Dépannage informatique Rabat
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Dépannage Informatique Rabat - Intervention à Distance en 15 min
              </h1>
              <p className="text-lg text-slate-200 mb-6">
                Que vous soyez à <strong>Agdal</strong>, <strong>Hay Riad</strong>,{" "}
                <strong>Souissi</strong> ou au centre‑ville, nos techniciens réparent
                votre PC <strong className="text-emerald-300">100% à distance</strong> en{" "}
                moins de 15 minutes, sans déplacement.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, j'ai besoin d'un dépannage informatique à Rabat (Agdal / Hay Riad / Souissi...)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
                >
                  Intervention immédiate via WhatsApp
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
                Problèmes informatiques fréquents à Rabat
              </h2>
              <p className="text-slate-700 mb-4">
                À Rabat, entre télétravail, études et administrations, un PC en panne
                peut vite vous bloquer. Nous intervenons pour{" "}
                <strong>PC lent, messages d&apos;erreur, virus, imprimante qui ne répond plus</strong>{" "}
                et la plupart des pannes logicielles.
              </p>
              <ul className="space-y-2 text-slate-700 list-disc list-inside">
                <li>PC qui freeze pendant les réunions en visio</li>
                <li>Word, Excel ou logiciels métier qui se bloquent</li>
                <li>Connexion internet instable ou Wi‑Fi qui saute</li>
                <li>Mises à jour Windows qui tournent en boucle</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Dépannage 100% à distance, partout à Rabat
              </h2>
              <p className="text-slate-700 mb-4">
                Plus besoin d&apos;attendre un technicien sur place : nous nous connectons
                à votre PC via un{" "}
                <strong>outil sécurisé (TeamViewer / AnyDesk) avec votre accord</strong> et
                vous voyez tout ce qui est fait sur votre écran.
              </p>
              <p className="text-slate-700 mb-4">
                À la fin de l&apos;intervention, nous vous expliquons ce qui a été
                corrigé et vous donnons des{" "}
                <strong>conseils pour éviter que le problème ne revienne</strong>.
              </p>
              <a
                href={`${whatsappBase}?text=${encodeURIComponent(
                  "Bonjour, je suis à Rabat et je veux savoir comment se passe une intervention à distance."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold"
              >
                Parler à un technicien Rabat →
              </a>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10">
              Tarifs dépannage informatique à Rabat
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Diagnostic & aide rapide</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  150 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Pour un problème simple ou une question technique urgente.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je suis à Rabat et je veux le pack diagnostic & aide rapide (150 DH)."
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
                  Le plus demandé à Rabat
                </p>
                <h3 className="text-lg font-semibold mb-2">
                  Dépannage complet à distance
                </h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  250 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Réparation de la majorité des pannes logicielles : lenteur, erreurs,
                  virus, Wi‑Fi...
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je suis à Rabat et je veux le pack dépannage complet à distance (250 DH)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm font-semibold bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
                >
                  Dépanner mon PC maintenant
                </a>
              </div>
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Pack Maintenance PME Rabat</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  499 <span className="text-base font-medium">DH / mois</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Support informatique continu pour PME, cabinets et TPE de Rabat.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux des informations sur le pack Maintenance PME Rabat (499 DH / mois)."
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
              FAQ – Dépannage informatique Rabat
            </h2>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Intervenez‑vous uniquement à distance ou aussi sur site à Rabat ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Notre service principal est le{" "}
                  <strong>dépannage informatique à distance</strong>, ce qui nous permet
                  d&apos;intervenir rapidement partout à Rabat. Pour certaines pannes
                  matérielles, nous pouvons vous orienter vers un partenaire local.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Comment se passe le paiement depuis Rabat ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Après l&apos;intervention, vous recevez les informations de paiement
                  (virement, application bancaire, etc.).{" "}
                  <strong>Vous payez uniquement si le problème est résolu</strong> (hors
                  cas de panne matérielle).
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Pouvez‑vous aussi gérer plusieurs postes pour une petite entreprise ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Oui, nous proposons des{" "}
                  <strong>forfaits de maintenance informatique pour PME et TPE</strong>{" "}
                  basées à Rabat (agences, cabinets, bureaux...).
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
                  <a href="/support-pme" className="hover:underline">
                    Support informatique PME
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
                  <a href="/fes" className="hover:underline">
                    Réparation PC Fès
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

