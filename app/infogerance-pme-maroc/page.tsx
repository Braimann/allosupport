import type { Metadata } from "next";
import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/seo";

const whatsappBase = "https://wa.me/212775237038";

export const metadata: Metadata = {
  title: "Infogérance PME Maroc : Gestion IT Complète à Distance | AlloSupport",
  description:
    "Externalisez votre informatique au Maroc. Maintenance, sécurité, sauvegardes et support illimité pour PME. Forfaits mensuels, réponse en 15 min. Devis gratuit.",
  alternates: {
    canonical: "https://allosupport.ma/infogerance-pme-maroc",
  },
  openGraph: {
    title: "Infogérance PME Maroc : Gestion IT Complète à Distance | AlloSupport",
    description:
      "Externalisez votre informatique au Maroc. Maintenance, sécurité, sauvegardes et support illimité pour PME. Forfaits mensuels, réponse en 15 min. Devis gratuit.",
    url: "https://allosupport.ma/infogerance-pme-maroc",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Service", "ProfessionalService"],
  name: "Infogérance PME Maroc - AlloSupport.ma",
  serviceType: "Infogérance PME Maroc",
  url: "https://allosupport.ma/infogerance-pme-maroc",
  provider: {
    "@type": "LocalBusiness",
    name: "AlloSupport.ma",
    telephone: "+212775237038",
  },
  description:
    "Service d'infogérance pour PME au Maroc. Externalisation complète de l'informatique : maintenance, cybersécurité, serveurs, sauvegardes, support utilisateurs.",
  areaServed: {
    "@type": "Country",
    name: "Morocco",
  },
  offers: {
    "@type": "Offer",
    price: "999",
    priceCurrency: "MAD",
    description: "Forfait infogérance PME mensuel",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "https://allosupport.ma" },
  { name: "Infogérance PME Maroc", url: "https://allosupport.ma/infogerance-pme-maroc" },
]);

export default function InfogerancePmeMarocPage() {
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
        <section className="bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-900 text-white py-24">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-widest text-indigo-300 mb-3">
                Infogérance PME Maroc
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Infogérance PME Maroc – Externalisez Votre Informatique
              </h1>
              <p className="text-lg text-slate-100 mb-6">
                Confiez la gestion complète de votre parc informatique à des experts.{" "}
                <strong className="text-indigo-200">Maintenance préventive, cybersécurité PME, serveurs, sauvegardes</strong>{" "}
                et support utilisateurs 24/7. Concentrez-vous sur votre métier, nous gérons votre IT.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je souhaite un devis pour l'infogérance de mon entreprise au Maroc."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
                >
                  Demander un Devis Infogérance
                </a>
                <p className="text-sm text-slate-300">
                  Forfaits à partir de{" "}
                  <span className="font-semibold text-emerald-300">999 DH / mois</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
              Pourquoi Choisir l&apos;Infogérance PME Maroc ?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-slate-200 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Coûts Maîtrisés</h3>
                <p className="text-slate-700 text-sm">
                  Un forfait mensuel fixe au lieu d&apos;un DSI à temps plein. Économisez jusqu&apos;à 70% sur vos coûts IT.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Sécurité Renforcée</h3>
                <p className="text-slate-700 text-sm">
                  Cybersécurité PME Maroc : antivirus, firewall, sauvegardes automatiques, protection ransomware.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Réactivité 24/7</h3>
                <p className="text-slate-700 text-sm">
                  Support technique disponible en permanence. Intervention en moins de 15 minutes sur incident critique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services inclus */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Services Inclus dans l&apos;Infogérance PME Maroc
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Maintenance Préventive</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>✓ Mises à jour Windows et logiciels</li>
                  <li>✓ Nettoyage et optimisation des postes</li>
                  <li>✓ Monitoring proactif des serveurs</li>
                  <li>✓ Rapports mensuels de santé IT</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Cybersécurité PME</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>✓ Antivirus professionnel (Kaspersky/Bitdefender)</li>
                  <li>✓ Firewall et protection réseau</li>
                  <li>✓ Formation anti-phishing employés</li>
                  <li>✓ Audit de sécurité trimestriel</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Sauvegardes & Reprise</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>✓ Sauvegardes automatiques quotidiennes</li>
                  <li>✓ Stockage cloud sécurisé Maroc</li>
                  <li>✓ Plan de reprise après sinistre (PRA)</li>
                  <li>✓ Tests de restauration réguliers</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Support Utilisateurs</h3>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li>✓ Helpdesk dédié (téléphone, WhatsApp, email)</li>
                  <li>✓ Intervention à distance en 15 min</li>
                  <li>✓ Gestion des comptes et accès</li>
                  <li>✓ Formation utilisateurs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10">
              Forfaits Infogérance PME Maroc
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Pack Startup</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  999 <span className="text-base font-medium">DH / mois</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Jusqu&apos;à 10 postes. Idéal pour TPE et startups.
                </p>
                <ul className="text-sm text-slate-700 space-y-1 mb-4">
                  <li>✓ Maintenance préventive</li>
                  <li>✓ Support à distance illimité</li>
                  <li>✓ Antivirus inclus</li>
                  <li>✓ Sauvegardes cloud</li>
                </ul>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux le Pack Startup infogérance (999 DH/mois)."
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
                  2499 <span className="text-base font-medium">DH / mois</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Jusqu&apos;à 30 postes. Pour PME en croissance.
                </p>
                <ul className="text-sm text-slate-700 space-y-1 mb-4">
                  <li>✓ Tout Pack Startup +</li>
                  <li>✓ Serveur dédié monitoring</li>
                  <li>✓ Audit sécurité trimestriel</li>
                  <li>✓ Support prioritaire 24/7</li>
                </ul>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux le Pack Business infogérance (2499 DH/mois)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="block text-center text-sm font-semibold bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
                >
                  Demander ce pack
                </a>
              </div>
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Pack Enterprise</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  Sur devis
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  +30 postes. Infogérance sur mesure.
                </p>
                <ul className="text-sm text-slate-700 space-y-1 mb-4">
                  <li>✓ Tout Pack Business +</li>
                  <li>✓ DSI externalisé dédié</li>
                  <li>✓ SLA garanti contractuel</li>
                  <li>✓ Intervention sur site possible</li>
                </ul>
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, je veux un devis Pack Enterprise infogérance."
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

        {/* Solutions par secteur */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
              Solutions par secteur
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/solutions/cabinets-medicaux"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-indigo-300 hover:shadow-md transition text-center"
              >
                <h3 className="font-semibold text-slate-900 mb-2">Support IT cabinets médicaux Maroc</h3>
                <p className="text-sm text-slate-600">Conformité CNDP, données patients, infogérance santé</p>
              </Link>
              <Link
                href="/solutions/cabinets-avocats"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-indigo-300 hover:shadow-md transition text-center"
              >
                <h3 className="font-semibold text-slate-900 mb-2">Infogérance cabinets d&apos;avocats Maroc</h3>
                <p className="text-sm text-slate-600">Confidentialité, sécurité emails, sauvegardes</p>
              </Link>
              <Link
                href="/solutions/experts-comptables"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-indigo-300 hover:shadow-md transition text-center"
              >
                <h3 className="font-semibold text-slate-900 mb-2">Maintenance Sage EBP experts-comptables</h3>
                <p className="text-sm text-slate-600">Sage, EBP, période fiscale, support dédié</p>
              </Link>
              <Link
                href="/solutions/architectes"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-indigo-300 hover:shadow-md transition text-center"
              >
                <h3 className="font-semibold text-slate-900 mb-2">Support informatique architectes Maroc</h3>
                <p className="text-sm text-slate-600">CAO, sauvegardes, télétravail sécurisé</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Secteurs */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
              Infogérance PME Maroc par Secteur
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/solutions/cabinets-medicaux"
                className="bg-white border border-slate-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-slate-900">Cabinets Médicaux</h3>
                <p className="text-sm text-slate-600">Conformité CNDP, données patients</p>
              </Link>
              <Link
                href="/solutions/cabinets-avocats"
                className="bg-white border border-slate-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-slate-900">Cabinets Avocats</h3>
                <p className="text-sm text-slate-600">Confidentialité, sécurité emails</p>
              </Link>
              <Link
                href="/solutions/experts-comptables"
                className="bg-white border border-slate-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-slate-900">Experts-Comptables</h3>
                <p className="text-sm text-slate-600">Sage, EBP, période fiscale</p>
              </Link>
              <Link
                href="/support-pme"
                className="bg-white border border-slate-200 rounded-xl p-4 hover:border-indigo-300 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-slate-900">PME Générales</h3>
                <p className="text-sm text-slate-600">Support informatique PME Maroc</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              FAQ – Infogérance PME Maroc
            </h2>
            <div className="space-y-4">
              <div className="border border-slate-200 rounded-xl p-4">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Qu&apos;est-ce que l&apos;infogérance PME ?
                </h3>
                <p className="text-slate-700 text-sm">
                  L&apos;infogérance consiste à confier la gestion de votre parc informatique à un prestataire externe. Cela inclut la maintenance, la sécurité, les sauvegardes et le support utilisateurs. Vous bénéficiez d&apos;une équipe IT complète sans les coûts d&apos;un recrutement interne.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Combien coûte l&apos;infogérance au Maroc ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Les forfaits d&apos;infogérance PME Maroc démarrent à 999 DH/mois pour les petites structures (jusqu&apos;à 10 postes). Le tarif dépend du nombre de postes, des services inclus et du niveau de SLA souhaité.
                </p>
              </div>
              <div className="border border-slate-200 rounded-xl p-4">
                <h3 className="font-semibold text-slate-900 mb-2">
                  Intervenez-vous sur site ou uniquement à distance ?
                </h3>
                <p className="text-slate-700 text-sm">
                  Notre spécialité est l&apos;intervention à distance (plus rapide et moins coûteuse). Pour les entreprises avec Pack Enterprise, des interventions sur site peuvent être prévues contractuellement à Casablanca, Rabat et autres grandes villes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Liens internes */}
        <section className="py-12 border-t border-slate-200 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Services liés</h3>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>
                  <Link href="/support-pme" className="hover:underline">
                    Support informatique PME Maroc
                  </Link>
                </li>
                <li>
                  <Link href="/maintenance-informatique" className="hover:underline">
                    Maintenance informatique Maroc
                  </Link>
                </li>
                <li>
                  <Link href="/virus-ordinateur-maroc" className="hover:underline">
                    Suppression virus ordinateur Maroc
                  </Link>
                </li>
                <li>
                  <Link href="/depannage-informatique" className="hover:underline">
                    Dépannage informatique Maroc
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Villes principales</h3>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>
                  <Link href="/casablanca" className="hover:underline">
                    Dépannage informatique Casablanca
                  </Link>
                </li>
                <li>
                  <Link href="/rabat" className="hover:underline">
                    Dépannage informatique Rabat
                  </Link>
                </li>
                <li>
                  <Link href="/marrakech" className="hover:underline">
                    Dépannage informatique Marrakech
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
