import type { Metadata } from "next";
import Link from "next/link";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";
import { generateBreadcrumbSchema } from "@/lib/seo";

const whatsappBase = GOOGLE_BUSINESS.WHATSAPP;
const WHATSAPP_CTA_CASA = "Bonjour, j'ai besoin d'un dépannage informatique à Casablanca. Mon problème : [décrire]";

export const metadata: Metadata = {
  title: "Dépannage Informatique Casablanca — Intervention 2h | AlloSupport",
  description:
    "Dépannage informatique à Casablanca : PC lent, virus, formatage. Technicien à domicile en 2h. Maarif, Agdal, Hay Riad. 250 DH, paiement après résultat.",
  alternates: {
    canonical: "https://allosupport.ma/casablanca",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Dépannage Informatique Casablanca — Intervention 2h | AlloSupport",
    description:
      "Dépannage informatique à Casablanca : PC lent, virus, formatage. Technicien à domicile en 2h. Maarif, Agdal, Hay Riad. 250 DH, paiement après résultat.",
    url: "https://allosupport.ma/casablanca",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dépannage Informatique Casablanca | AlloSupport",
    description: "Dépannage informatique Casablanca : PC lent, virus, formatage. 250 DH, paiement après résultat.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://allosupport.ma/casablanca",
  name: "AlloSupport.ma — Dépannage Informatique Casablanca",
  telephone: GOOGLE_BUSINESS.PHONE,
  priceRange: "250-500 DH",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Casablanca",
    addressRegion: "Casablanca-Settat",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.5731,
    longitude: -7.5898,
  },
  areaServed: ["Maarif", "Agdal", "Hay Riad", "Ain Diab", "Casablanca"],
  url: "https://allosupport.ma/casablanca",
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "https://allosupport.ma" },
  { name: "Dépannage Informatique Casablanca", url: "https://allosupport.ma/casablanca" },
]);

const QUARTIERS_CASA = [
  "Maarif",
  "Agdal",
  "Hay Riad",
  "Ain Diab",
  "Bourgogne",
  "Gauthier",
  "Anfa",
  "Sidi Bernoussi",
  "Derb Sultan",
];

export default function CasablancaPage() {
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
                Dépannage PC Casablanca
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Dépannage Informatique à Domicile Casablanca
              </h1>
              <p className="text-lg text-slate-200 mb-6">
                Service mobile - Nous intervenons chez vous partout à Casablanca (Derb Ghallef, Maarif, Sidi Maarouf). Intervention rapide à domicile.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(WHATSAPP_CTA_CASA)}`}
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

        {/* Réparation PC Portable Casablanca */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Réparation PC Portable Casablanca – Sans Déplacement
            </h2>
            <p className="text-slate-700 mb-6">
              Votre PC portable est lent, se bloque ou affiche un écran noir ? Pas besoin de vous déplacer.
              Un <strong>technicien informatique Casablanca</strong> se connecte à distance en <strong>15 minutes</strong> pour diagnostiquer et réparer
              votre ordinateur portable. Réparation PC portable Casablanca à partir de <strong>250 DH</strong>,
              paiement uniquement après résultat.
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-slate-700 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                Réinstallation Windows sur PC portable
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                Suppression virus et malwares sur portable
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                PC portable lent – optimisation et nettoyage
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">✓</span>
                Récupération données sur PC portable
              </li>
            </ul>
            <p className="text-slate-800 font-medium italic">
              PC portable t9il wla chi9 ? On se connecte en 15 min.
            </p>
          </div>
        </section>

        {/* Nos quartiers d'intervention */}
        <section className="py-10 bg-slate-50 border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Nos quartiers d&apos;intervention
            </h2>
            <div className="flex flex-wrap gap-2">
              {QUARTIERS_CASA.map((q) => (
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

        {/* Service à Domicile */}
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4 text-slate-900">
                🏠 Service à Votre Domicile
              </h2>
              <ul className="space-y-2 text-slate-700">
                <li>✅ Pas besoin de vous déplacer</li>
                <li>✅ Intervention dans votre quartier</li>
                <li>✅ Matériel professionnel sur place</li>
                <li>✅ Réparation immédiate</li>
              </ul>
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
                href={`${whatsappBase}?text=${encodeURIComponent(WHATSAPP_CTA_CASA)}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
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
                  rel="noopener noreferrer nofollow"
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
                  href={`${whatsappBase}?text=${encodeURIComponent(WHATSAPP_CTA_CASA)}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
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
                  rel="noopener noreferrer nofollow"
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
                  <Link href="/formatage-pc" className="hover:underline">
                    Formatage PC Maroc 350 DH
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
                  <Link href="/rabat" className="hover:underline">
                    Dépannage informatique Rabat
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
                  Dépannage à domicile Casablanca
                </Link>
              </li>
              <li>
                <Link href="/formatage-pc" className="text-blue-700 hover:underline font-medium">
                  Formatage PC Casablanca
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Liens SEO internes */}
        <section className="py-10 bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="font-semibold text-slate-900 mb-4">
              Services liés à la réparation PC portable Casablanca
            </h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="/formatage-pc"
                className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg font-medium hover:bg-emerald-200 transition"
              >
                Formatage PC et réinstallation Windows Maroc
              </a>
              <a
                href="/virus-ordinateur-maroc"
                className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg font-medium hover:bg-emerald-200 transition"
              >
                Suppression virus ordinateur Maroc
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
