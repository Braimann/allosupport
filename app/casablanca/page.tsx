import type { Metadata } from "next";

const whatsappBase = "https://wa.me/212770303940";

export const metadata: Metadata = {
  title: "Dépannage PC Casablanca - Intervention à Distance en 15 min | AlloSupport.ma",
  description:
    "Réparation et dépannage PC à Casablanca (Derb Ghallef, Maarif, Sidi Maarouf). PC lent, virus, formatage, Windows. Intervention 100% à distance en 15 minutes, dès 250 DH. Satisfait ou Remboursé.",
  alternates: {
    canonical: "https://allosupport.ma/casablanca",
  },
  openGraph: {
    title: "Dépannage PC Casablanca - Intervention à Distance en 15 min",
    description:
      "Dépannage informatique et réparation PC à Casablanca. Intervention immédiate à distance via WhatsApp, sans déplacement. Tarifs transparents dès 250 DH.",
    url: "https://allosupport.ma/casablanca",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Dépannage PC Casablanca - AlloSupport.ma",
  description:
    "Service de dépannage informatique à distance pour particuliers et PME à Casablanca (Derb Ghallef, Maarif, Sidi Maarouf, Sidi Maârouf et toute la ville). Intervention en 15 minutes via WhatsApp.",
  url: "https://allosupport.ma/casablanca",
  telephone: "+212 770 30 39 40",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Casablanca",
    addressRegion: "Casablanca-Settat",
    addressCountry: "MA",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Casablanca",
    },
    {
      "@type": "AdministrativeArea",
      name: "Derb Ghallef",
    },
    {
      "@type": "AdministrativeArea",
      name: "Maarif",
    },
    {
      "@type": "AdministrativeArea",
      name: "Sidi Maarouf",
    },
  ],
  priceRange: "150 DH - 499 DH",
  serviceType: "Dépannage PC Casablanca",
  offers: [
    {
      "@type": "Offer",
      name: "Diagnostic & aide rapide",
      priceCurrency: "MAD",
      price: "150",
      description: "Diagnostic et résolution de petits problèmes à distance.",
    },
    {
      "@type": "Offer",
      name: "Dépannage complet PC Casablanca",
      priceCurrency: "MAD",
      price: "250",
      description: "Dépannage complet pour PC lent, erreurs Windows, virus.",
    },
    {
      "@type": "Offer",
      name: "Pack Maintenance PME Casablanca",
      priceCurrency: "MAD",
      price: "499",
      description: "Support informatique mensuel pour PME et TPE à Casablanca.",
    },
  ],
};

export default function CasablancaPage() {
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
                Dépannage PC Casablanca
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Dépannage PC Casablanca - Intervention à Distance en 15 min
              </h1>
              <p className="text-lg text-slate-200 mb-6">
                Votre PC est en panne, très lent ou rempli de virus à Casablanca ? Que
                vous soyez à <strong>Derb Ghallef</strong>, <strong>Maarif</strong> ou{" "}
                <strong>Sidi Maarouf</strong>, nos techniciens interviennent{" "}
                <strong className="text-emerald-300">100% à distance en moins de 15 minutes</strong>,
                sans que vous ayez à vous déplacer.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, j'ai besoin d'un dépannage PC à Casablanca (Derb Ghallef / Maarif / Sidi Maarouf...)."
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
                Problèmes PC fréquents à Casablanca
              </h2>
              <p className="text-slate-700 mb-4">
                À Casablanca, entre les installations répétées de logiciels, les clés USB
                échangées au marché de <strong>Derb Ghallef</strong> et les connexions
                Wi‑Fi partagées, les PC sont souvent exposés aux{" "}
                <strong>virus, lenteurs, erreurs Windows et pannes logicielles</strong>.
              </p>
              <ul className="space-y-2 text-slate-700 list-disc list-inside">
                <li>PC très lent au démarrage ou pendant le travail</li>
                <li>Pop‑ups, publicités et pages internet qui s&apos;ouvrent seules</li>
                <li>Erreurs Windows, écran bleu, mises à jour qui bloquent</li>
                <li>Imprimante ou Wi‑Fi qui ne fonctionnent plus correctement</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Pourquoi choisir un dépannage à distance ?
              </h2>
              <p className="text-slate-700 mb-4">
                Plus besoin de traverser tout <strong>Casablanca</strong> pour déposer
                votre PC chez un réparateur. Avec AlloSupport.ma, un technicien se
                connecte à votre ordinateur{" "}
                <strong>à distance via un outil sécurisé (AnyDesk / TeamViewer)</strong>,
                pendant que vous voyez tout ce qui se passe sur votre écran.
              </p>
              <p className="text-slate-700 mb-4">
                Vous gagnez du temps, vous évitez de laisser votre PC plusieurs jours en
                atelier, et vous bénéficiez d&apos;une{" "}
                <strong>garantie satisfait ou remboursé</strong> sur nos interventions
                logicielles.
              </p>
              <a
                href={`${whatsappBase}?text=${encodeURIComponent(
                  "Bonjour, je suis à Casablanca et je veux comprendre comment fonctionne le dépannage PC à distance."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold"
              >
                Parler à un technicien Casablanca →
              </a>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10">
              Tarifs dépannage PC à Casablanca
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Diagnostic & aide rapide</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  150 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Idéal pour un problème simple (message d&apos;erreur, paramétrage, conseil).
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je suis à Casablanca et je veux le pack diagnostic & aide rapide (150 DH)."
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
                  Le plus demandé à Casablanca
                </p>
                <h3 className="text-lg font-semibold mb-2">Dépannage complet PC</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  250 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Pour PC lent, bugs Windows, virus, problème internet ou imprimante.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je suis à Casablanca et je veux le pack dépannage complet PC (250 DH)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm font-semibold bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
                >
                  Dépanner mon PC maintenant
                </a>
              </div>
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Pack Maintenance PME</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  499 <span className="text-base font-medium">DH / mois</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Support informatique pour PME et TPE à Casablanca (serveurs, sauvegardes,
                  utilisateurs).
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux plus d'informations sur le pack Maintenance PME à Casablanca (499 DH / mois)."
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
              FAQ – Dépannage PC Casablanca
            </h2>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Intervenez‑vous uniquement à distance ou aussi à domicile à Casablanca ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Notre spécialité est le <strong>dépannage informatique à distance</strong>
                  . Cela nous permet d&apos;intervenir rapidement partout à Casablanca (Derb
                  Ghallef, Maarif, Sidi Maarouf, centre‑ville, etc.). Pour certaines pannes
                  matérielles, nous pouvons vous orienter vers un partenaire de confiance.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Est‑ce sécurisé de laisser quelqu&apos;un se connecter à mon PC ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Oui. Vous voyez tout ce que nous faisons et vous pouvez{" "}
                  <strong>couper la connexion à tout moment</strong>. Nous utilisons des
                  outils sécurisés et nous ne touchons jamais à vos documents personnels
                  sans votre accord.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Que se passe‑t‑il si votre intervention ne résout pas mon problème ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Si le problème est purement logiciel et que nous ne parvenons pas à le
                  corriger, nous appliquons notre{" "}
                  <strong>garantie satisfait ou remboursé</strong>. Si nous détectons une
                  panne matérielle (disque dur, alimentation...), nous vous expliquons la
                  situation en détail.
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

