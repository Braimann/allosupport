import type { Metadata } from "next";

const whatsappBase = "https://wa.me/212770303940";

export const metadata: Metadata = {
  title: "Installation Windows 10/11 au Maroc | AlloSupport.ma",
  description:
    "Installation et configuration de Windows 10/11 au Maroc. Activation, pilotes, mises à jour et logiciels essentiels. Assistance à distance.",
  alternates: {
    canonical: "https://allosupport.ma/installation-windows",
  },
  openGraph: {
    title: "Installation Windows 10/11 au Maroc",
    description:
      "Installation propre de Windows 10/11, activation et configuration complète. Assistance à distance, tarifs transparents.",
    url: "https://allosupport.ma/installation-windows",
    type: "website",
  },
};

export default function InstallationWindowsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-blue-300 mb-3">
              Installation Windows Maroc
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Installation & Configuration Windows 10/11
            </h1>
            <p className="text-lg text-slate-100 mb-6">
              Installation propre de Windows, pilotes, mises à jour et logiciels essentiels.
              Idéal après un changement de disque ou un formatage.
            </p>
            <a
              href={`${whatsappBase}?text=${encodeURIComponent(
                "Bonjour, je veux installer ou réinstaller Windows sur mon PC."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
            >
              Demander l&apos;installation Windows
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

