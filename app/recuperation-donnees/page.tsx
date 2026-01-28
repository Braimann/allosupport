import type { Metadata } from "next";

const whatsappBase = "https://wa.me/212770303940";

export const metadata: Metadata = {
  title: "Récupération de Données au Maroc - Disque Dur, SSD, Clé USB | AlloSupport.ma",
  description:
    "Récupération de données perdues au Maroc : disque dur, SSD, clé USB, PC qui ne démarre plus. Diagnostic à distance, conseils et accompagnement. Première analyse dès 150 DH.",
  alternates: {
    canonical: "https://allosupport.ma/recuperation-donnees",
  },
  openGraph: {
    title: "Récupération de Données au Maroc - Disque Dur, SSD, Clé USB",
    description:
      "Vos fichiers ont disparu ? PC qui ne démarre plus ? AlloSupport.ma vous guide pour récupérer vos données au Maroc, à distance ou via laboratoire partenaire.",
    url: "https://allosupport.ma/recuperation-donnees",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Récupération de données au Maroc",
  serviceType: "Récupération données disque dur, SSD, clé USB",
  url: "https://allosupport.ma/recuperation-donnees",
  provider: {
    "@type": "LocalBusiness",
    name: "AlloSupport.ma",
    telephone: "+212 770 30 39 40",
  },
  areaServed: {
    "@type": "Country",
    name: "Morocco",
  },
  description:
    "Service d'accompagnement à la récupération de données au Maroc : diagnostic à distance, conseils, sauvegardes et orientation vers laboratoire spécialisé si nécessaire.",
};

export default function RecuperationDonneesPage() {
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
                Récupération de données Maroc
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Récupération de Données au Maroc - Disque Dur, SSD, Clé USB
              </h1>
              <p className="text-lg text-slate-200 mb-6">
                Documents importants, comptabilité, photos de famille...{" "}
                <strong className="text-emerald-300">
                  ne touchez à rien avant d&apos;avoir parlé à un expert
                </strong>
                . Un mauvais geste peut rendre la récupération impossible.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Urgent : j'ai perdu des données (PC / disque / clé USB) au Maroc. Pouvez-vous m'aider ?"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
                >
                  Parler à un expert données
                </a>
                <p className="text-sm text-slate-300">
                  Première analyse dès{" "}
                  <span className="font-semibold text-emerald-300">150 DH</span>
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
                Dans quels cas nous contacter ?
              </h2>
              <p className="text-slate-700 mb-4">
                Nous intervenons en priorité sur la{" "}
                <strong>sécurisation et la sauvegarde de ce qu&apos;il est encore possible
                de récupérer</strong>, avant tout envoi éventuel en laboratoire spécialisé.
              </p>
              <ul className="space-y-2 text-slate-700 list-disc list-inside">
                <li>PC qui ne démarre plus (Windows bloqué)</li>
                <li>Dossier supprimé par erreur</li>
                <li>Clé USB ou disque externe qui demande un formatage</li>
                <li>Disque qui fait des bruits anormaux (à manipuler avec grande prudence)</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Rôle d&apos;AlloSupport.ma dans la récupération
              </h2>
              <p className="text-slate-700 mb-4">
                Nous vous aidons à{" "}
                <strong>faire les bons gestes et éviter les erreurs irréversibles</strong> :
                réinstallation sauvage, formatage, multiples tentatives ratées, etc.
              </p>
              <p className="text-slate-700 mb-4">
                À distance, nous pouvons :
              </p>
              <ul className="space-y-2 text-slate-700 list-disc list-inside mb-4">
                <li>Tenter des récupérations logicielles quand le disque est encore lisible</li>
                <li>Mettre en place une sauvegarde sécurisée des données récupérées</li>
                <li>
                  Vous orienter, si nécessaire, vers un{" "}
                  <strong>laboratoire partenaire spécialisé en récupération physique</strong>
                </li>
              </ul>
              <a
                href={`${whatsappBase}?text=${encodeURIComponent(
                  "Bonjour, je veux savoir ce qui est possible pour ma récupération de données."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold"
              >
                Expliquer ma situation →
              </a>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10">
              Tarifs récupération de données (accompagnement)
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Diagnostic & conseils</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  150 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Analyse de la situation, évaluation des risques et recommandations
                  immédiates.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux le pack diagnostic & conseils récupération de données (150 DH)."
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
                  Le plus choisi
                </p>
                <h3 className="text-lg font-semibold mb-2">
                  Tentative de récupération logicielle
                </h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  250 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Pour les cas où le disque est encore accessible et détecté par le
                  système.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux une tentative de récupération logicielle (250 DH)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm font-semibold bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
                >
                  Tenter une récupération
                </a>
              </div>
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">
                  Accompagnement vers laboratoire
                </h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  499 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Préparation du dossier, conseils, suivi avec un laboratoire partenaire
                  spécialisé (frais labo non inclus).
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je pense avoir besoin d'un laboratoire spécialisé. Pouvez-vous m'accompagner ?"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm font-semibold bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition"
                >
                  Discuter de mon cas
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              FAQ – Récupération de données au Maroc
            </h2>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Dois‑je continuer à utiliser le disque ou la clé USB ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Non. Plus vous l&apos;utilisez, plus vous risquez d&apos;
                  <strong>écraser définitivement les données</strong>. Coupez l&apos;utilisation
                  et contactez‑nous au plus vite.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Est‑ce que vous garantissez la récupération des données ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Personne ne peut garantir à 100% une récupération. Nous promettons{" "}
                  <strong>transparence et prudence</strong> : nous vous expliquons clairement
                  les chances de réussite avant chaque action.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Travaillez‑vous uniquement à distance ?
                </h3>
                <p className="text-slate-700 text-sm">
                  La plupart des démarches (diagnostic, conseils, tentative logicielle)
                  se font <strong>à distance</strong>. En cas de besoin de laboratoire
                  physique, nous vous orientons vers un partenaire adapté.
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
                  <a href="/maintenance-informatique" className="hover:underline">
                    Maintenance informatique Maroc
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

import type { Metadata } from "next";

const whatsappBase = "https://wa.me/212770303940";

export const metadata: Metadata = {
  title: "Récupération Données PC & Disque Dur - Maroc | AlloSupport.ma",
  description:
    "Récupération de données supprimées ou perdues sur PC, disque dur et clé USB au Maroc. Diagnostic initial à distance.",
  alternates: {
    canonical: "https://allosupport.ma/recuperation-donnees",
  },
  openGraph: {
    title: "Récupération de Données au Maroc",
    description:
      "Perte de fichiers importants ? Nous analysons la situation à distance et vous orientons vers la meilleure solution de récupération de données.",
    url: "https://allosupport.ma/recuperation-donnees",
    type: "website",
  },
};

export default function RecuperationDonneesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-amber-900 via-slate-900 to-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-amber-300 mb-3">
              Récupération de données
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Récupération Données PC & Disque Dur - Maroc
            </h1>
            <p className="text-lg text-slate-100 mb-6">
              Suppression accidentelle, formatage, disque qui ne s&apos;ouvre plus ? Nous
              réalisons un premier diagnostic à distance avant toute intervention plus
              poussée en laboratoire.
            </p>
            <a
              href={`${whatsappBase}?text=${encodeURIComponent(
                "Bonjour, j'ai perdu des fichiers importants et j'ai besoin d'une récupération de données."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
            >
              Décrire mon problème
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

