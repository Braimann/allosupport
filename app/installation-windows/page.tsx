import type { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/lib/seo";

const whatsappBase = "https://wa.me/212775237038";

export const metadata: Metadata = {
  title: "Installation Windows Maroc | Windows 10/11 350 DH | AlloSupport",
  description:
    "Installation Windows Maroc à distance. Windows 10/11 officiel, activation, pilotes, logiciels. Intervention en 15 min. Dès 350 DH.",
  alternates: {
    canonical: "https://allosupport.ma/installation-windows",
  },
  openGraph: {
    title: "Installation Windows Maroc | Windows 10/11 à Distance",
    description:
      "Installation propre de Windows 10/11, activation et configuration complète. Assistance à distance, tarifs transparents.",
    url: "https://allosupport.ma/installation-windows",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Service", "ProfessionalService"],
  name: "Installation Windows Maroc - AlloSupport.ma",
  serviceType: "Installation Windows Maroc",
  url: "https://allosupport.ma/installation-windows",
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
    "Service d'installation Windows 10/11 au Maroc. Licence officielle, pilotes, mises à jour et logiciels essentiels. Intervention à distance.",
  areaServed: {
    "@type": "Country",
    name: "Morocco",
  },
  offers: {
    "@type": "Offer",
    price: "350",
    priceCurrency: "MAD",
    description: "Installation Windows complète avec activation",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "https://allosupport.ma" },
  { name: "Installation Windows Maroc", url: "https://allosupport.ma/installation-windows" },
]);

export default function InstallationWindowsPage() {
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
        <section className="bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-widest text-blue-300 mb-3">
                Installation Windows Maroc
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Installation Windows Maroc – Windows 10/11 Officiel
              </h1>
              <p className="text-lg text-slate-100 mb-6">
                Installation propre de Windows, pilotes, mises à jour et logiciels essentiels.
                Idéal après un changement de disque ou un formatage. Intervention à distance en 15 min.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux installer ou réinstaller Windows sur mon PC."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
                >
                  Demander l&apos;installation Windows
                </a>
                <p className="text-sm text-slate-300">
                  Dès <span className="font-semibold text-blue-300">350 DH</span> • Licence officielle
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Installation Windows Maroc – Ce qui est inclus
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Windows 10/11</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">✓</span>
                    Installation Windows 10 ou 11 propre
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">✓</span>
                    Activation licence officielle
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">✓</span>
                    Pilotes carte graphique, son, réseau
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">✓</span>
                    Mises à jour Windows complètes
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Logiciels essentiels</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">✓</span>
                    Navigateur (Chrome, Firefox)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">✓</span>
                    Antivirus Windows Defender configuré
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">✓</span>
                    Lecteur PDF, décompresseur
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">✓</span>
                    Configuration compte Microsoft
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Darija */}
        <section className="py-10 bg-blue-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-xl font-semibold text-slate-800 mb-2">
              Bghiti t7et Windows jdid ? Kayn l7al !
            </p>
            <p className="text-slate-700">
              Installation Windows 10 wla 11, licence officielle, pilotes kamlin. On se connecte à distance en 15 min, bla ma tji l&apos;atelier.
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10">
              Tarifs Installation Windows Maroc
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-slate-200 rounded-2xl p-6 bg-white">
                <h3 className="text-lg font-semibold mb-2">Réinstallation simple</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  250 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Réinstallation Windows sur PC déjà activé.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux une réinstallation Windows simple (250 DH)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-center text-sm font-semibold bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition"
                >
                  Réserver ce pack
                </a>
              </div>
              <div className="border-2 border-blue-500 rounded-2xl p-6 bg-blue-50 shadow-md scale-105">
                <p className="inline-block text-xs font-semibold bg-blue-500 text-white px-2 py-1 rounded-full mb-3">
                  Le plus demandé
                </p>
                <h3 className="text-lg font-semibold mb-2">Installation complète</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  350 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Windows + activation + pilotes + logiciels essentiels.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux une installation Windows complète (350 DH)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-center text-sm font-semibold bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Installer Windows maintenant
                </a>
              </div>
              <div className="border border-slate-200 rounded-2xl p-6 bg-white">
                <h3 className="text-lg font-semibold mb-2">Pack Pro + Office</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  599 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Windows + Office 365 + configuration complète.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux le pack Windows + Office (599 DH)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-center text-sm font-semibold bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition"
                >
                  Demander ce pack
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
                  <a href="/formatage-pc" className="hover:underline">
                    Formatage PC prix Maroc
                  </a>
                </li>
                <li>
                  <a href="/depannage-informatique" className="hover:underline">
                    Dépannage informatique à distance
                  </a>
                </li>
                <li>
                  <a href="/reparation-ordinateur" className="hover:underline">
                    Réparation ordinateur Maroc
                  </a>
                </li>
                <li>
                  <a href="/pc-lent-solution" className="hover:underline">
                    PC lent solution
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
                  <a href="/formatage-pc-casablanca" className="hover:underline">
                    Formatage PC Casablanca
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

