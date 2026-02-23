import type { Metadata } from "next";
import Link from "next/link";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";
import { generateBreadcrumbSchema } from "@/lib/seo";

const whatsappBase = GOOGLE_BUSINESS.WHATSAPP;
const WHATSAPP_CTA_RABAT = "Bonjour, j'ai besoin d'un dépannage informatique à Rabat. Mon problème : [décrire]";

export const metadata: Metadata = {
  title: "Dépannage Informatique Rabat — Technicien à Domicile 2h | AlloSupport",
  description:
    "Dépannage informatique à Rabat : PC lent, virus, formatage à domicile. Agdal, Hassan, Hay Riad. 250 DH, paiement après résultat. AlloSupport.",
  alternates: {
    canonical: "https://allosupport.ma/rabat",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Dépannage Informatique Rabat — Technicien à Domicile 2h | AlloSupport",
    description:
      "Dépannage informatique à Rabat : PC lent, virus, formatage à domicile. Agdal, Hassan, Hay Riad. 250 DH, paiement après résultat. AlloSupport.",
    url: "https://allosupport.ma/rabat",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dépannage Informatique Rabat | AlloSupport",
    description: "Dépannage informatique Rabat : PC lent, virus, formatage. 250 DH, paiement après résultat.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://allosupport.ma/rabat",
  name: "AlloSupport.ma — Dépannage Informatique Rabat",
  telephone: GOOGLE_BUSINESS.PHONE,
  priceRange: "250-500 DH",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rabat",
    addressRegion: "Rabat-Salé-Kénitra",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.0209,
    longitude: -6.8416,
  },
  areaServed: ["Agdal", "Hassan", "Hay Riad", "Souissi", "Rabat"],
  url: "https://allosupport.ma/rabat",
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "https://allosupport.ma" },
  { name: "Dépannage Informatique Rabat", url: "https://allosupport.ma/rabat" },
]);

const QUARTIERS_RABAT = [
  "Agdal",
  "Hassan",
  "Hay Riad",
  "Souissi",
  "Océan",
  "Centre-ville",
  "Aviation",
  "Yacoub El Mansour",
];

export default function RabatPage() {
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
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-widest text-emerald-300 mb-3">
                Dépannage informatique Rabat
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Dépannage Informatique Rabat - Intervention à Distance en 15 min
              </h1>
              <p className="text-lg text-slate-200 mb-6">
                Que vous soyez à <strong>Agdal</strong>, <strong>Hay Riad</strong>,{" "}
                <strong>Souissi</strong> ou au centre‑ville, nos techniciens réparent
                votre PC <strong className="text-emerald-300">100% à distance</strong> en{" "}
                moins de 15 minutes, sans déplacement.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(WHATSAPP_CTA_RABAT)}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
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

        {/* Nos quartiers d'intervention */}
        <section className="py-10 bg-slate-50 border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Nos quartiers d&apos;intervention
            </h2>
            <div className="flex flex-wrap gap-2">
              {QUARTIERS_RABAT.map((q) => (
                <span
                  key={q}
                  className="bg-slate-100 rounded-full px-3 py-1 text-sm text-slate-700"
                >
                  {q}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Problème / Solution */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Problèmes informatiques fréquents à Rabat
              </h2>
              <p className="text-slate-700 mb-4">
                À Rabat, entre télétravail, études et administrations, un PC en panne
                peut vite vous bloquer. Nous intervenons pour{" "}
                <strong>PC lent, messages d&apos;erreur, virus, imprimante qui ne répond plus</strong>{" "}
                et la plupart des pannes logicielles.
              </p>
              <ul className="space-y-2 text-slate-700 list-disc list-inside">
                <li>PC qui freeze pendant les réunions en visio</li>
                <li>Word, Excel ou logiciels métier qui se bloquent</li>
                <li>Connexion internet instable ou Wi‑Fi qui saute</li>
                <li>Mises à jour Windows qui tournent en boucle</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Dépannage 100% à distance, partout à Rabat
              </h2>
              <p className="text-slate-700 mb-4">
                Plus besoin d&apos;attendre un technicien sur place : nous nous connectons
                à votre PC via un{" "}
                <strong>outil sécurisé (TeamViewer / AnyDesk) avec votre accord</strong> et
                vous voyez tout ce qui est fait sur votre écran.
              </p>
              <p className="text-slate-700 mb-4">
                À la fin de l&apos;intervention, nous vous expliquons ce qui a été
                corrigé et vous donnons des{" "}
                <strong>conseils pour éviter que le problème ne revienne</strong>.
              </p>
              <a
                href={`${whatsappBase}?text=${encodeURIComponent(WHATSAPP_CTA_RABAT)}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold"
              >
                Parler à un technicien Rabat →
              </a>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10">
              Tarifs dépannage informatique à Rabat
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Diagnostic & aide rapide</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  150 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Pour un problème simple ou une question technique urgente.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je suis à Rabat et je veux le pack diagnostic & aide rapide (150 DH)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-center text-sm font-semibold bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition"
                >
                  Réserver ce pack
                </a>
              </div>
              <div className="border-2 border-emerald-500 rounded-2xl p-6 bg-emerald-50 shadow-md scale-105">
                <p className="inline-block text-xs font-semibold bg-emerald-500 text-white px-2 py-1 rounded-full mb-3">
                  Le plus demandé à Rabat
                </p>
                <h3 className="text-lg font-semibold mb-2">
                  Dépannage complet à distance
                </h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  250 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Réparation de la majorité des pannes logicielles : lenteur, erreurs,
                  virus, Wi‑Fi...
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(WHATSAPP_CTA_RABAT)}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-center text-sm font-semibold bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
                >
                  Dépanner mon PC maintenant
                </a>
              </div>
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Pack Maintenance PME Rabat</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  499 <span className="text-base font-medium">DH / mois</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Support informatique continu pour PME, cabinets et TPE de Rabat.
                </p>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux des informations sur le pack Maintenance PME Rabat (499 DH / mois)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-center text-sm font-semibold bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition"
                >
                  Demander un devis PME
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Darija */}
        <section className="py-10 bg-emerald-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-xl font-semibold text-slate-800 mb-2">
              PC dyalek khsro f Rabat ? Kayn l7al !
            </p>
            <p className="text-slate-700">
              PC t9il, chi9, virus ? On se connecte en 15 min et on répare à distance. Bla ma tji l&apos;atelier, bla ma tkhelli l&apos;PC.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              FAQ – Dépannage informatique Rabat
            </h2>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Intervenez‑vous uniquement à distance ou aussi sur site à Rabat ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Notre service principal est le{" "}
                  <strong>dépannage informatique à distance</strong>, ce qui nous permet
                  d&apos;intervenir rapidement partout à Rabat. Pour certaines pannes
                  matérielles, nous pouvons vous orienter vers un partenaire local.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Comment se passe le paiement depuis Rabat ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Après l&apos;intervention, vous recevez les informations de paiement
                  (virement, application bancaire, etc.).{" "}
                  <strong>Vous payez uniquement si le problème est résolu</strong> (hors
                  cas de panne matérielle).
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4 bg-white">
                <h3 className="font-semibold text-slate-900 mb-1">
                  Pouvez‑vous aussi gérer plusieurs postes pour une petite entreprise ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Oui, nous proposons des{" "}
                  <strong>forfaits de maintenance informatique pour PME et TPE</strong>{" "}
                  basées à Rabat (agences, cabinets, bureaux...).
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
                  <Link href="/depannage-informatique" className="hover:underline">
                    Dépannage informatique Maroc
                  </Link>
                </li>
                <li>
                  <Link href="/pc-lent-solution" className="hover:underline">
                    PC lent solution rapide
                  </Link>
                </li>
                <li>
                  <Link href="/virus-ordinateur-maroc" className="hover:underline">
                    Suppression virus PC Maroc
                  </Link>
                </li>
                <li>
                  <Link href="/support-pme" className="hover:underline">
                    Support informatique PME Maroc
                  </Link>
                </li>
                <li>
                  <Link href="/infogerance-pme-maroc" className="hover:underline">
                    Infogérance PME Maroc
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Nos autres villes
              </h3>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>
                  <Link href="/casablanca" className="hover:underline">
                    Dépannage informatique Casablanca
                  </Link>
                </li>
                <li>
                  <Link href="/fes" className="hover:underline">
                    Réparation PC Fès
                  </Link>
                </li>
                <li>
                  <Link href="/marrakech" className="hover:underline">
                    Dépannage informatique Marrakech
                  </Link>
                </li>
                <li>
                  <Link href="/agadir" className="hover:underline">
                    Dépannage PC Agadir
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Maillage interne géo */}
          <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-600 mb-2">Navigation :</p>
            <ul className="flex flex-wrap gap-4 text-sm">
              <li>
                <Link href="/" className="text-blue-700 hover:underline font-medium">
                  ← Retour à l&apos;accueil
                </Link>
              </li>
              <li>
                <Link href="/depannage-informatique-a-domicile" className="text-blue-700 hover:underline font-medium">
                  Dépannage à domicile Rabat
                </Link>
              </li>
              <li>
                <Link href="/formatage-pc" className="text-blue-700 hover:underline font-medium">
                  Formatage PC Rabat
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
