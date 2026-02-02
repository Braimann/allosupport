import type { Metadata } from "next";

const whatsappBase = "https://wa.me/212775237038";

export const metadata: Metadata = {
  title: "Réparation Ordinateur Maroc - À Distance | AlloSupport.ma",
  description:
    "Réparation ordinateur portable et PC fixe au Maroc. Problèmes Windows, lenteur, virus, réseau. Intervention à distance en 15 min via WhatsApp.",
  alternates: {
    canonical: "https://allosupport.ma/reparation-ordinateur",
  },
  openGraph: {
    title: "Réparation Ordinateur au Maroc - À Distance",
    description:
      "Réparez votre PC sans vous déplacer. Réparation ordinateur à distance au Maroc, diagnostic gratuit et tarifs transparents.",
    url: "https://allosupport.ma/reparation-ordinateur",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Réparation ordinateur Maroc",
  serviceType: "Réparation PC et ordinateur portable",
  url: "https://allosupport.ma/reparation-ordinateur",
};

export default function ReparationOrdinateurPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-widest text-emerald-300 mb-3">
                Réparation ordinateur Maroc
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Réparation Ordinateur au Maroc - À Distance
              </h1>
              <p className="text-lg text-slate-100 mb-6">
                Un seul point de contact pour tous vos problèmes PC :{" "}
                <strong className="text-emerald-300">écran bleu, lenteur, plantage,
                virus, mises à jour bloquées</strong>, etc.
              </p>
              <a
                href={`${whatsappBase}?text=${encodeURIComponent(
                  "Bonjour, j'ai besoin d'une réparation pour mon ordinateur."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
              >
                Lancer une réparation
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

