import type { Metadata } from "next";

const whatsappBase = "https://wa.me/212775237038";

export const metadata: Metadata = {
  title: "Maintenance Informatique au Maroc - Préventive & Corrective | AlloSupport.ma",
  description:
    "Maintenance informatique pour particuliers exigeants et PME au Maroc : mises à jour, sécurité, sauvegardes, optimisation. Packs mensuels dès 499 DH.",
  alternates: {
    canonical: "https://allosupport.ma/maintenance-informatique",
  },
  openGraph: {
    title: "Maintenance Informatique au Maroc - Préventive & Corrective",
    description:
      "Anticipez les pannes informatiques au Maroc : maintenance régulière, optimisation et sécurité pour PC et PME.",
    url: "https://allosupport.ma/maintenance-informatique",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Service", "ProfessionalService"],
  name: "Maintenance informatique au Maroc",
  serviceType: "Maintenance informatique préventive et corrective",
  url: "https://allosupport.ma/maintenance-informatique",
  areaServed: {
    "@type": "Country",
    name: "Morocco",
  },
  description:
    "Service de maintenance informatique au Maroc : mises à jour, sécurité, optimisation, sauvegardes et suivi régulier pour PC et PME.",
};

export default function MaintenanceInformatiquePage() {
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
                Maintenance informatique Maroc
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Maintenance Informatique au Maroc - PC & PME
              </h1>
              <p className="text-lg text-slate-200 mb-6">
                Plutôt que d&apos;attendre la panne,{" "}
                <strong className="text-emerald-300">
                  mettez en place une maintenance informatique régulière
                </strong>{" "}
                : mises à jour, sécurité, sauvegardes et optimisation.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux mettre en place une maintenance informatique régulière pour mon PC / mon entreprise au Maroc."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
                >
                  Discuter d&apos;un contrat de maintenance
                </a>
                <p className="text-sm text-slate-300">
                  Packs dès{" "}
                  <span className="font-semibold text-emerald-300">499 DH / mois</span>
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
                Pourquoi la maintenance est indispensable ?
              </h2>
              <p className="text-slate-700 mb-4">
                La plupart des pannes ne tombent pas du ciel :{" "}
                <strong>
                  mises à jour non faites, antivirus expiré, disque plein, sauvegardes
                  inexistantes
                </strong>
                . Une maintenance régulière réduit fortement ces risques.
              </p>
              <ul className="space-y-2 text-slate-700 list-disc list-inside">
                <li>Réduction des pannes et des interruptions d&apos;activité</li>
                <li>Protection contre les virus, ransomwares et pertes de données</li>
                <li>Prolongation de la durée de vie des PC</li>
                <li>Meilleure performance au quotidien</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Ce que nous faisons pendant la maintenance
              </h2>
              <p className="text-slate-700 mb-4">
                À distance, nous planifions des{" "}
                <strong>sessions régulières de contrôle et d&apos;entretien</strong> :
              </p>
              <ul className="space-y-2 text-slate-700 list-disc list-inside mb-4">
                <li>Mises à jour Windows et logiciels critiques</li>
                <li>Vérification de l&apos;antivirus et du pare‑feu</li>
                <li>Contrôle de l&apos;espace disque et de l&apos;état du matériel</li>
                <li>Mise en place / vérification des sauvegardes</li>
              </ul>
              <a
                href={`${whatsappBase}?text=${encodeURIComponent(
                  "Bonjour, je veux connaître la fréquence et le détail de vos prestations de maintenance informatique."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold"
              >
                Obtenir un plan de maintenance →
              </a>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10">
              Packs maintenance informatique
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Pack Essentiel (1 PC)</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  150 <span className="text-base font-medium">DH / mois</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Idéal pour un particulier ou freelance : vérification et optimisation
                  mensuelle.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux le pack maintenance Essentiel (150 DH / mois)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm font-semibold bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition"
                >
                  Choisir ce pack
                </a>
              </div>
              <div className="border-2 border-emerald-500 rounded-2xl p-6 bg-emerald-50 shadow-md scale-105">
                <p className="inline-block text-xs font-semibold bg-emerald-500 text-white px-2 py-1 rounded-full mb-3">
                  PME & petites équipes
                </p>
                <h3 className="text-lg font-semibold mb-2">Pack PME (jusqu&apos;à 5 PC)</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  499 <span className="text-base font-medium">DH / mois</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Maintenance régulière, assistance à distance prioritaire et suivi des
                  sauvegardes.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux en savoir plus sur le pack maintenance PME (499 DH / mois)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm font-semibold bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
                >
                  Discuter de ce pack
                </a>
              </div>
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Pack Entreprise Sur Mesure</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">Sur devis</p>
                <p className="text-sm text-slate-600 mb-4">
                  Pour parcs plus importants, serveurs, multi‑sites ou besoins spécifiques.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux un devis sur mesure pour la maintenance informatique de mon entreprise."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm font-semibold bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition"
                >
                  Demander un devis entreprise
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              FAQ – Maintenance informatique au Maroc
            </h2>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Quel est l&apos;intérêt par rapport à un simple dépannage ponctuel ?
                </h3>
                <p className="text-slate-700 text-sm">
                  La maintenance vise à <strong>éviter les pannes</strong> et non seulement
                  à les réparer. Vous limitez les interruptions, les pertes de données et
                  les mauvaises surprises.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Comment se déroule une session de maintenance typique ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Un technicien se connecte à distance, effectue les{" "}
                  <strong>contrôles planifiés</strong>, met à jour les systèmes, vérifie la
                  sécurité et vous fait un retour synthétique.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Est‑ce adapté pour une petite structure avec peu de budget ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Oui, les packs sont conçus pour être{" "}
                  <strong>accessibles aux TPE, freelances et petites PME</strong>. Quelques
                  dizaines de dirhams par mois peuvent éviter une perte de données coûteuse.
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
                  <a href="/support-pme" className="hover:underline">
                    Support informatique PME
                  </a>
                </li>
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
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Villes les plus demandées
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
