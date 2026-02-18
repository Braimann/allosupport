import type { Metadata } from "next";
import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/seo";

const whatsappBase = "https://wa.me/212775237038";

export const metadata: Metadata = {
  title: "Support Informatique PME Maroc | Infogérance 499 DH/mois | AlloSupport",
  description:
    "Support informatique PME Maroc : infogérance, cybersécurité PME, gestion parc, serveurs. Forfait dès 499 DH/mois. Assistance à distance.",
  alternates: {
    canonical: "https://allosupport.ma/support-pme",
  },
  openGraph: {
    title: "Support Informatique PME Maroc | Infogérance à Distance",
    description:
      "Externalisez votre support informatique : gestion de parc, cybersécurité et serveurs pour PME au Maroc. Forfaits mensuels flexibles.",
    url: "https://allosupport.ma/support-pme",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Service", "ProfessionalService"],
  name: "Support informatique PME Maroc - AlloSupport.ma",
  serviceType: "Infogérance PME Maroc",
  url: "https://allosupport.ma/support-pme",
  provider: {
    "@type": "LocalBusiness",
    name: "AlloSupport.ma",
    telephone: "+212775237038",
  },
  description: "Support informatique PME et infogérance au Maroc. Cybersécurité PME, gestion de parc, serveurs et sauvegardes.",
  areaServed: {
    "@type": "Country",
    name: "Morocco",
  },
  offers: {
    "@type": "Offer",
    price: "499",
    priceCurrency: "MAD",
    description: "Forfait support informatique PME mensuel",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "https://allosupport.ma" },
  { name: "Support Informatique PME", url: "https://allosupport.ma/support-pme" },
]);

export default function SupportPmePage() {
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
        <section className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-widest text-indigo-300 mb-3">
                Support informatique PME Maroc
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Support Informatique PME Maroc – Infogérance à Distance
              </h1>
              <p className="text-lg text-slate-100 mb-6">
                Gestion de parc, <strong className="text-indigo-200">cybersécurité PME</strong>, serveurs et assistance utilisateur pour PME,
                cabinets et TPE au Maroc. Un{" "}
                <strong className="text-indigo-200">service d&apos;infogérance PME Maroc</strong>{" "}
                pensé pour les petites structures.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux un support informatique pour ma PME au Maroc."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
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

        {/* Services */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Infogérance PME Maroc – Nos Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Cybersécurité PME Maroc</h3>
                <p className="text-slate-700 text-sm">
                  Protection antivirus, firewall, sauvegardes automatiques et formation des employés contre le phishing.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Gestion de Parc Informatique</h3>
                <p className="text-slate-700 text-sm">
                  Inventaire, maintenance préventive, mises à jour Windows et logiciels pour tous vos postes.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Support Utilisateurs</h3>
                <p className="text-slate-700 text-sm">
                  Assistance à distance en 15 min pour vos employés. Problèmes email, imprimante, logiciels métier.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Serveurs & Sauvegardes</h3>
                <p className="text-slate-700 text-sm">
                  Configuration serveur, sauvegardes cloud automatiques, récupération de données en cas de sinistre.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Réseau & Wi-Fi</h3>
                <p className="text-slate-700 text-sm">
                  Configuration réseau, Wi-Fi professionnel, VPN pour télétravail sécurisé.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Conseil & Audit</h3>
                <p className="text-slate-700 text-sm">
                  Audit de sécurité, recommandations matériel et logiciel, plan de continuité d&apos;activité.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10">
              Forfaits Support Informatique PME Maroc
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-slate-200 rounded-2xl p-6 bg-white">
                <h3 className="text-lg font-semibold mb-2">Pack Starter</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  499 <span className="text-base font-medium">DH / mois</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Jusqu&apos;à 5 postes. Support à distance illimité.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux le Pack Starter support PME (499 DH/mois)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-center text-sm font-semibold bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition"
                >
                  Demander ce pack
                </a>
              </div>
              <div className="border-2 border-indigo-500 rounded-2xl p-6 bg-indigo-50 shadow-md scale-105">
                <p className="inline-block text-xs font-semibold bg-indigo-500 text-white px-2 py-1 rounded-full mb-3">
                  Le plus demandé
                </p>
                <h3 className="text-lg font-semibold mb-2">Pack Business</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  999 <span className="text-base font-medium">DH / mois</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Jusqu&apos;à 15 postes. Cybersécurité + sauvegardes incluses.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux le Pack Business support PME (999 DH/mois)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-center text-sm font-semibold bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
                >
                  Demander ce pack
                </a>
              </div>
              <div className="border border-slate-200 rounded-2xl p-6 bg-white">
                <h3 className="text-lg font-semibold mb-2">Pack Enterprise</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  Sur devis
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  +15 postes. Infogérance complète, SLA garanti.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux un devis pour le Pack Enterprise support PME."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-center text-sm font-semibold bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition"
                >
                  Demander un devis
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Liens internes */}
        <section className="py-12 border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Solutions par secteur</h3>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>
                  <Link href="/infogerance-pme-maroc" className="hover:underline">
                    Infogérance PME Maroc
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/cabinets-medicaux" className="hover:underline">
                    Support informatique cabinets médicaux Maroc
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/cabinets-avocats" className="hover:underline">
                    Support informatique cabinets avocats Maroc
                  </Link>
                </li>
                <li>
                  <Link href="/solutions/experts-comptables" className="hover:underline">
                    Support informatique experts-comptables Maroc
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Services liés</h3>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>
                  <Link href="/maintenance-informatique" className="hover:underline">
                    Maintenance informatique Maroc
                  </Link>
                </li>
                <li>
                  <Link href="/virus-ordinateur-maroc" className="hover:underline">
                    Suppression virus PC Maroc
                  </Link>
                </li>
                <li>
                  <Link href="/depannage-informatique" className="hover:underline">
                    Dépannage informatique Maroc
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

