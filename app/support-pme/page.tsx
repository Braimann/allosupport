import type { Metadata } from "next";

const whatsappBase = "https://wa.me/212775237038";

export const metadata: Metadata = {
  title: "Support Informatique PME & TPE au Maroc | AlloSupport.ma",
  description:
    "Support informatique pour PME et TPE au Maroc : gestion de parc, sécurité, serveurs, sauvegardes et assistance à distance. Forfait à partir de 499 DH / mois.",
  alternates: {
    canonical: "https://allosupport.ma/support-pme",
  },
  openGraph: {
    title: "Support Informatique PME & TPE au Maroc",
    description:
      "Externalisez votre support informatique : gestion de parc, sécurité et serveurs pour PME au Maroc. Forfaits mensuels flexibles.",
    url: "https://allosupport.ma/support-pme",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Service", "ProfessionalService"],
  name: "Support informatique PME & TPE",
  serviceType: "Support informatique PME",
  url: "https://allosupport.ma/support-pme",
  areaServed: {
    "@type": "Country",
    name: "Morocco",
  },
};

export default function SupportPmePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-widest text-indigo-300 mb-3">
                Support informatique PME
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Support Informatique PME & TPE au Maroc
              </h1>
              <p className="text-lg text-slate-100 mb-6">
                Gestion de parc, sécurité, serveurs et assistance utilisateur pour PME,
                cabinets et TPE au Maroc. Un{" "}
                <strong className="text-indigo-200">service d&apos;infogérance à distance</strong>{" "}
                pensé pour les petites structures.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux un support informatique pour ma PME au Maroc."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
                >
                  Parler à un expert PME
                </a>
                <p className="text-sm text-slate-300">
                  Forfaits à partir de{" "}
                  <span className="font-semibold text-emerald-300">499 DH / mois</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

