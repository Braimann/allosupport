import type { Metadata } from "next";

const whatsappBase = "https://wa.me/212775237038";

export const metadata: Metadata = {
  title: "PC Lent Solution - Accélération & Optimisation Windows | AlloSupport.ma",
  description:
    "PC très lent au Maroc ? Optimisation Windows, nettoyage, suppression programmes lourds et démarrage accéléré. Intervention à distance en 15 min, dès 250 DH.",
  alternates: {
    canonical: "https://allosupport.ma/pc-lent-solution",
  },
  openGraph: {
    title: "PC Lent Solution - Accélération PC au Maroc",
    description:
      "Votre PC est trop lent ? AlloSupport.ma optimise et accélère votre ordinateur à distance, sans perte de données. Pack complet dès 250 DH.",
    url: "https://allosupport.ma/pc-lent-solution",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "PC lent solution - optimisation Windows",
  serviceType: "Optimisation PC lent",
  url: "https://allosupport.ma/pc-lent-solution",
  provider: {
    "@type": "LocalBusiness",
    name: "AlloSupport.ma",
    telephone: "+212 7 75 23 70 38",
  },
  description:
    "Service d'optimisation pour PC lent au Maroc : nettoyage, désinstallation, optimisation démarrage et réglages Windows.",
};

export default function PcLentSolutionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-widest text-emerald-300 mb-3">
                PC lent solution
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                PC Lent Solution - Accélération & Optimisation Windows
              </h1>
              <p className="text-lg text-slate-100 mb-6">
                Votre PC met des minutes à démarrer, se bloque et vous fait perdre du temps ?
                Nous le <strong className="text-emerald-300">rendons rapide comme au
                premier jour</strong>, à distance, sans formater.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, mon PC est très lent. Je veux une optimisation complète à distance."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
                >
                  Rendre mon PC plus rapide
                </a>
                <p className="text-sm text-slate-300">
                  Pack optimisation dès{" "}
                  <span className="font-semibold text-emerald-300">250 DH</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Pourquoi votre PC devient lent ?
              </h2>
              <p className="text-slate-700 mb-4">
                Avec le temps, Windows accumule des programmes au démarrage, fichiers
                temporaires, mises à jour incomplètes et parfois des logiciels invisibles.
                Résultat : <strong>PC très lent, blocages, ventilateur qui tourne à fond</strong>.
              </p>
              <ul className="space-y-2 text-slate-700 list-disc list-inside">
                <li>PC qui démarre en plusieurs minutes</li>
                <li>Applications qui réagissent très lentement</li>
                <li>Disque dur ou SSD souvent à 100%</li>
                <li>Messages &quot;ne répond pas&quot; fréquents</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Ce que nous faisons pendant l&apos;optimisation
              </h2>
              <p className="text-slate-700 mb-4">
                À distance, nous réalisons un{" "}
                <strong>nettoyage complet et une optimisation profonde</strong> :
                désinstallation des programmes inutiles, désactivation des tâches lourdes,
                nettoyage disque et réglages avancés de Windows.
              </p>
              <p className="text-slate-700 mb-4">
                L&apos;objectif : que votre PC démarre plus vite et réagisse rapidement,
                sans changer de matériel.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing simplifié (3 packs) */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10">
              Packs optimisation PC
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Nettoyage simple</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  150 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Nettoyage de base et suppression fichiers temporaires.
                </p>
              </div>
              <div className="border-2 border-emerald-500 rounded-2xl p-6 bg-emerald-50 shadow-md scale-105">
                <p className="inline-block text-xs font-semibold bg-emerald-500 text-white px-2 py-1 rounded-full mb-3">
                  PC lent solution
                </p>
                <h3 className="text-lg font-semibold mb-2">
                  Optimisation complète (recommandé)
                </h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  250 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Nettoyage, optimisation démarrage et réglages Windows.
                </p>
              </div>
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Pack performance Pro</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  499 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Pour les PC de travail intensif (graphisme, comptabilité, etc.).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ courte */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              FAQ - PC lent solution
            </h2>
            <div className="border border-slate-200 rounded-xl p-4 bg-white">
              <h3 className="font-semibold text-slate-900 mb-1">
                Est‑ce que je vais perdre mes fichiers ?
              </h3>
              <p className="text-slate-700 text-sm">
                Non. Nous ne supprimons jamais vos documents, photos ou dossiers
                personnels pendant l&apos;optimisation.
              </p>
            </div>
            <div className="border border-slate-200 rounded-xl p-4 bg-white">
              <h3 className="font-semibold text-slate-900 mb-1">
                Combien de temps dure l&apos;intervention ?
              </h3>
              <p className="text-slate-700 text-sm">
                En moyenne entre 45 et 90 minutes selon l&apos;état de votre PC et la
                quantité de programmes installés.
              </p>
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
                  <a href="/virus-ordinateur-maroc" className="hover:underline">
                    Suppression virus & malware
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Villes principales</h3>
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
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

