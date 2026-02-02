import type { Metadata } from "next";

const whatsappBase = "https://wa.me/212775237038";

export const metadata: Metadata = {
  title: "Formatage PC Prix Maroc - Réinstallation Windows | AlloSupport.ma",
  description:
    "Formatage PC et réinstallation Windows au Maroc. Sauvegarde de vos données, réinstallation propre, drivers et logiciels essentiels. Dès 250 DH.",
  alternates: {
    canonical: "https://allosupport.ma/formatage-pc",
  },
  openGraph: {
    title: "Formatage PC & Réinstallation Windows au Maroc",
    description:
      "PC totalement bloqué ou infecté ? Formatage complet + réinstallation propre de Windows et des pilotes. Prix transparent dès 250 DH.",
    url: "https://allosupport.ma/formatage-pc",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Formatage PC & réinstallation Windows",
  serviceType: "Formatage PC Maroc",
  url: "https://allosupport.ma/formatage-pc",
  provider: {
    "@type": "LocalBusiness",
    name: "AlloSupport.ma",
    telephone: "+212 7 75 23 70 38",
  },
  description:
    "Service de formatage PC et réinstallation Windows au Maroc. Sauvegarde des données, réinstallation, pilotes et premières mises à jour.",
};

export default function FormatagePcPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-sky-900 via-slate-900 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-widest text-sky-300 mb-3">
                Formatage PC Maroc
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Formatage PC & Réinstallation Windows - Prix Maroc
              </h1>
              <p className="text-lg text-slate-100 mb-6">
                Quand un simple nettoyage ne suffit plus, le formatage complet permet de{" "}
                <strong className="text-sky-200">repartir sur un Windows propre et rapide</strong>,
                tout en sauvegardant vos données importantes.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux un formatage complet et une réinstallation propre de Windows."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
                >
                  Demander un devis formatage
                </a>
                <p className="text-sm text-slate-300">
                  Prix dès <span className="font-semibold text-emerald-300">250 DH</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

