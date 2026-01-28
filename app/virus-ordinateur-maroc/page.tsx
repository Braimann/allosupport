import type { Metadata } from "next";

const whatsappBase = "https://wa.me/212770303940";

export const metadata: Metadata = {
  title: "Suppression Virus & Malware à Distance - Maroc | AlloSupport.ma",
  description:
    "Suppression virus ordinateur au Maroc sans formatage. Nettoyage complet, suppression malware, PC lent, ransomware. Intervention à distance en 15 min via WhatsApp. Dès 250 DH.",
  alternates: {
    canonical: "https://allosupport.ma/virus-ordinateur-maroc",
  },
  openGraph: {
    title: "Suppression Virus & Malware à Distance - Maroc",
    description:
      "Nettoyage complet sans formatage, suppression virus, malware et pubs sur votre PC au Maroc. Intervention 100% à distance, dès 250 DH.",
    url: "https://allosupport.ma/virus-ordinateur-maroc",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Service", "ProfessionalService"],
  name: "Suppression virus & malware à distance - AlloSupport.ma",
  serviceType: "Suppression virus ordinateur Maroc",
  url: "https://allosupport.ma/virus-ordinateur-maroc",
  provider: {
    "@type": "LocalBusiness",
    name: "AlloSupport.ma",
    telephone: "+212 770 30 39 40",
    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },
  },
  description:
    "Service spécialisé de suppression de virus et malware sur PC au Maroc. Nettoyage complet sans formatage, désinfection, optimisation et conseils sécurité.",
  areaServed: {
    "@type": "Country",
    name: "Morocco",
  },
  offers: {
    "@type": "Offer",
    price: "250",
    priceCurrency: "MAD",
    description: "Nettoyage complet sans formatage + optimisation PC",
  },
};

export default function VirusOrdinateurMarocPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-rose-900 via-slate-900 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-widest text-rose-300 mb-3">
                Virus & Malware PC - Maroc
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Suppression Virus & Malware à Distance - Maroc
              </h1>
              <p className="text-lg text-slate-100 mb-6">
                Publicités partout, pages bizarres, PC ultra lent ? Nous réalisons un{" "}
                <strong className="text-rose-200">
                  nettoyage complet sans formatage
                </strong>{" "}
                : suppression de <strong>virus, malware, spyware, ransomware et adware</strong>{" "}
                directement à distance, partout au Maroc.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, mon PC est infecté par un virus / malware. Je suis au Maroc, pouvez-vous le nettoyer à distance sans formatage ?"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
                >
                  Nettoyage virus via WhatsApp
                </a>
                <p className="text-sm text-slate-300">
                  Pack virus dès{" "}
                  <span className="font-semibold text-emerald-300">250 DH</span> •
                  Nettoyage garanti sans formatage
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
                Comment savoir si votre PC est infecté ?
              </h2>
              <p className="text-slate-700 mb-4">
                Au Maroc, beaucoup de logiciels sont téléchargés depuis des sites non
                officiels ou partagés via clés USB. Résultat :{" "}
                <strong>virus, ransomware, trojan, pubs intrusives</strong> et parfois{" "}
                <strong>vol de données bancaires</strong>.
              </p>
              <ul className="space-y-2 text-slate-700 list-disc list-inside">
                <li>PC très lent, ventilateur qui tourne fort en permanence</li>
                <li>Publicités qui apparaissent partout, même sans navigateur ouvert</li>
                <li>Antivirus désactivé ou messages d&apos;alerte répétés</li>
                <li>Redirection vers des sites bizarres quand vous cliquez sur Google</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Nettoyage complet sans formatage
              </h2>
              <p className="text-slate-700 mb-4">
                Contrairement à certains réparateurs qui proposent uniquement un
                formatage, notre priorité est de{" "}
                <strong>
                  nettoyer votre PC sans effacer vos fichiers (documents, photos,
                  comptabilité)
                </strong>
                .
              </p>
              <p className="text-slate-700 mb-4">
                Nos techniciens se connectent{" "}
                <strong>à distance via un outil sécurisé</strong> et effectuent :
              </p>
              <ul className="space-y-2 text-slate-700 list-disc list-inside mb-4">
                <li>Analyse complète des processus et programmes au démarrage</li>
                <li>Suppression manuelle des virus, malware et extensions malveillantes</li>
                <li>Vérification des navigateurs, DNS, proxys et paramètres réseau</li>
                <li>Installation ou mise à jour d&apos;un antivirus fiable</li>
              </ul>
              <a
                href={`${whatsappBase}?text=${encodeURIComponent(
                  "Bonjour, je veux un nettoyage complet sans formatage pour mon PC infecté."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold"
              >
                Demander un diagnostic virus gratuit →
              </a>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10">
              Tarifs suppression virus & malware
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Scan & contrôle sécurité</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  150 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Analyse de base + recommandations sécurité, idéal pour un doute sur une
                  infection.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux le pack scan & contrôle sécurité (150 DH)."
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
                  Nettoyage complet sans formatage
                </h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  250 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Suppression avancée des virus, malware et pubs + optimisation du PC.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux le pack nettoyage complet virus sans formatage (250 DH)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm font-semibold bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
                >
                  Nettoyer mon PC maintenant
                </a>
              </div>
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">
                  Pack sécurité PME & bureaux
                </h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  499 <span className="text-base font-medium">DH / mois</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Idéal pour PME / cabinets : prévention, surveillance et nettoyage
                  régulier des postes.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux des informations sur le pack sécurité PME (499 DH / mois)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm font-semibold bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition"
                >
                  Parler à un expert sécurité
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              FAQ – Suppression virus ordinateur au Maroc
            </h2>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Est‑ce que tout peut être supprimé sans formatage ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Dans la grande majorité des cas, oui. Nous privilégions toujours un{" "}
                  <strong>nettoyage complet sans formatage</strong>. Si le système est trop
                  endommagé, nous vous expliquons les options possibles avant toute décision.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Dois‑je arrêter d&apos;utiliser mon PC en attendant ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Si vous voyez des signes de virus (publicités, alertes, lenteurs
                  extrêmes), il est conseillé de{" "}
                  <strong>limiter les opérations sensibles</strong> (banque en ligne,
                  accès email professionnel) jusqu&apos;au nettoyage complet.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Intervenez‑vous aussi pour les entreprises au Maroc ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Oui, nous accompagnons <strong>PME, cabinets, freelances et TPE</strong>{" "}
                  partout au Maroc avec des solutions de{" "}
                  <strong>sécurité, sauvegarde et maintenance</strong> adaptées.
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
                  <a href="/formatage-pc" className="hover:underline">
                    Formatage PC prix Maroc
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
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

