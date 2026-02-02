import type { Metadata } from "next";

const whatsappBase = "https://wa.me/212775237038";

export const metadata: Metadata = {
  title: "Dépannage Informatique à Distance au Maroc | AlloSupport.ma",
  description:
    "Dépannage informatique à distance pour particuliers et PME au Maroc. PC en panne, écran bleu, erreurs Windows, connexion internet. Intervention en 15 min via WhatsApp, dès 150 DH.",
  alternates: {
    canonical: "https://allosupport.ma/depannage-informatique",
  },
  openGraph: {
    title: "Dépannage Informatique à Distance au Maroc",
    description:
      "Réparation et dépannage informatique à distance partout au Maroc. Intervention rapide via WhatsApp, tarifs transparents dès 150 DH.",
    url: "https://allosupport.ma/depannage-informatique",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dépannage informatique à distance - AlloSupport.ma",
  serviceType: "Dépannage informatique",
  url: "https://allosupport.ma/depannage-informatique",
  provider: {
    "@type": "LocalBusiness",
    name: "AlloSupport.ma",
    telephone: "+212 7 75 23 70 38",
    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },
  },
  description:
    "Service de dépannage informatique à distance pour PC et ordinateurs portables au Maroc. Diagnostic, réparation, configuration et assistance.",
  offers: {
    "@type": "Offer",
    priceCurrency: "MAD",
    price: "150",
    description: "Intervention de base en dépannage informatique à distance.",
  },
};

export default function DepannageInformatiquePage() {
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
                Dépannage informatique à distance
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Dépannage Informatique à Distance au Maroc
              </h1>
              <p className="text-lg text-slate-200 mb-6">
                PC en panne, écran bleu, erreurs Windows ou problème de connexion internet ?
                Nos techniciens interviennent à distance en{" "}
                <strong className="text-emerald-300">moins de 15 minutes</strong>, partout
                au Maroc, sans que vous ayez à vous déplacer.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, j'ai besoin d'un dépannage informatique à distance pour mon PC."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
                >
                  Diagnostic gratuit via WhatsApp
                </a>
                <p className="text-sm text-slate-300">
                  Tarifs dès <span className="font-semibold text-emerald-300">150 DH</span> •
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
                Quand faire appel à un dépannage informatique ?
              </h2>
              <p className="text-slate-700 mb-4">
                Le dépannage informatique à distance est idéal pour résoudre la majorité des
                problèmes logiciels sans déplacement :{" "}
                <strong>PC très lent, messages d&apos;erreur, problèmes de mises à jour,
                imprimante qui ne répond plus</strong>, etc.
              </p>
              <ul className="space-y-2 text-slate-700 list-disc list-inside">
                <li>Ordinateur qui ne démarre pas correctement</li>
                <li>Applications qui se bloquent ou se ferment seules</li>
                <li>Connexion internet instable ou Wi‑Fi qui décroche</li>
                <li>Messages d&apos;erreur fréquents sur Windows</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Comment se passe une intervention à distance ?
              </h2>
              <p className="text-slate-700 mb-4">
                Vous contactez AlloSupport.ma sur WhatsApp, nous réalisons un{" "}
                <strong>diagnostic gratuit</strong>, puis un technicien se connecte à votre
                PC via un outil sécurisé (TeamViewer / AnyDesk).
              </p>
              <p className="text-slate-700 mb-4">
                Vous voyez tout ce qui se passe sur votre écran. À la fin, nous vous
                expliquons ce qui a été fait et comment éviter le problème à l&apos;avenir.
              </p>
              <a
                href={`${whatsappBase}?text=${encodeURIComponent(
                  "Bonjour, je souhaite connaître le déroulement d'un dépannage informatique à distance."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold"
              >
                Parler à un technicien →
              </a>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10">
              Tarifs dépannage informatique
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Diagnostic & aide rapide</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  150 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Idéal pour un problème simple ou une question technique.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux le pack diagnostic & aide rapide (150 DH)."
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
                <h3 className="text-lg font-semibold mb-2">Dépannage complet à distance</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  250 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Résolution de la plupart des pannes logicielles courantes.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux le pack dépannage complet à distance (250 DH)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm font-semibold bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
                >
                  Dépanner mon PC
                </a>
              </div>
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Pack Maintenance PME</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  499 <span className="text-base font-medium">DH / mois</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Pour les petites entreprises qui veulent un support continu.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux en savoir plus sur le pack Maintenance PME (499 DH/mois)."
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
              FAQ - Dépannage informatique
            </h2>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Est‑ce que tout peut être réparé à distance ?
                </h3>
                <p className="text-slate-700 text-sm">
                  La majorité des problèmes logiciels oui. Si nous détectons une panne
                  matérielle (disque dur HS, alimentation, etc.), nous vous l&apos;expliquons
                  et vous ne payez pas pour rien.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Faut‑il être bon en informatique pour suivre l&apos;intervention ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Non. Nous vous guidons étape par étape (installation de l&apos;outil
                  distant, autorisation de connexion) puis vous pouvez simplement regarder
                  l&apos;écran pendant que nous travaillons.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Quels sont les moyens de paiement acceptés ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Nous acceptons les virements bancaires, paiements par application mobile
                  et certains portefeuilles électroniques selon votre banque.
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

