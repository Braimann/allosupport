import type { Metadata } from "next";

const whatsappBase = "https://wa.me/212775237038";

export const metadata: Metadata = {
  title: "Antivirus Maroc - Protection & Sécurité PC | AlloSupport.ma",
  description:
    "Choix, installation et configuration d'antivirus au Maroc. Protection PC et PME contre virus, malware et ransomware. Conseils et accompagnement.",
  alternates: {
    canonical: "https://allosupport.ma/antivirus-maroc",
  },
  openGraph: {
    title: "Antivirus Maroc - Conseils & Installation",
    description:
      "Nous vous aidons à choisir et configurer l'antivirus adapté à vos besoins au Maroc : particuliers, bureaux, PME.",
    url: "https://allosupport.ma/antivirus-maroc",
    type: "website",
  },
};

export default function AntivirusMarocPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-emerald-300 mb-3">
              Antivirus Maroc
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Antivirus & Sécurité PC au Maroc
            </h1>
            <p className="text-lg text-slate-100 mb-6">
              Nous vous aidons à choisir, installer et configurer l&apos;antivirus adapté
              à votre utilisation : particulier, freelance ou PME.
            </p>
            <a
              href={`${whatsappBase}?text=${encodeURIComponent(
                "Bonjour, je cherche une solution antivirus adaptée pour mon PC / ma PME."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
            >
              Parler à un expert sécurité
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

