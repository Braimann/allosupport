import type { Metadata } from "next";
import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/seo";

const whatsappBase = "https://wa.me/212775237038";

export const metadata: Metadata = {
  title: "Support Informatique Cabinets Avocats Maroc | Confidentialité | AlloSupport",
  description:
    "Support informatique cabinet avocat Maroc. Confidentialité dossiers, sécurisation emails, anti-phishing. Avocats, notaires. Audit gratuit.",
  alternates: { canonical: "https://allosupport.ma/solutions/cabinets-avocats" },
  openGraph: {
    title: "Support IT Cabinets d'Avocats - Confidentialité & Sécurité",
    description: "La confidentialité de vos clients est votre priorité. La sécuriser est la nôtre. Audit gratuit.",
    url: "https://allosupport.ma/solutions/cabinets-avocats",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Support informatique pour cabinets d'avocats - AlloSupport.ma",
  serviceType: "IT Support for Law Firms",
  description: "Support IT pour avocats, notaires et conseils juridiques au Maroc : confidentialité des dossiers, sécurisation emails, protection phishing, accès fichiers sécurisé (cloud).",
  provider: { "@type": "Organization", name: "AlloSupport.ma", telephone: "+212 7 75 23 70 38" },
  areaServed: { "@type": "Country", name: "Morocco" },
  url: "https://allosupport.ma/solutions/cabinets-avocats",
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "https://allosupport.ma" },
  { name: "Solutions IT", url: "https://allosupport.ma/solutions" },
  { name: "Cabinets d'Avocats", url: "https://allosupport.ma/solutions/cabinets-avocats" },
]);

const painPoints = [
  {
    title: "Confidentialité client-avocat",
    description: "Les dossiers et échanges avec vos clients doivent rester strictement confidentiels. Une fuite ou un piratage met en cause la déontologie et la confiance.",
  },
  {
    title: "Emails & phishing",
    description: "Les avocats sont des cibles privilégiées (usurpation, pièces jointes malveillantes). Un seul clic peut compromettre le cabinet.",
  },
  {
    title: "Accès aux fichiers au tribunal",
    description: "Besoin d'accéder à des dossiers en déplacement ou au tribunal de manière sécurisée, sans clé USB ni email non chiffré.",
  },
];

const services = [
  "Sécurisation des emails et formation anti-phishing (reconnaissance des arnaques, bonnes pratiques).",
  "Protection des postes et des dossiers : chiffrement, sauvegardes sécurisées, accès limité.",
  "Accès à distance sécurisé aux dossiers (cloud professionnel ou VPN) pour travail au tribunal ou en déplacement.",
  "Maintenance préventive et réaction en cas d'incident (rançonware, vol de données).",
];

const faq = [
  {
    q: "Comment garantissez-vous la confidentialité des dossiers ?",
    a: "Nous n'accédons qu'aux aspects techniques (système, logiciels, réseau) et ne lisons pas le contenu des dossiers. Nous pouvons signer des engagements de confidentialité et adapter nos interventions (accès limité, logs).",
  },
  {
    q: "Proposez-vous un audit de sécurité pour le cabinet ?",
    a: "Oui. Nous proposons un audit gratuit (postes, emails, sauvegardes, accès) et des recommandations pour renforcer la confidentialité et la résilience du cabinet.",
  },
  {
    q: "Pouvez-vous nous aider à accéder à nos dossiers au tribunal ?",
    a: "Oui. Nous pouvons mettre en place un accès sécurisé à vos dossiers (cloud chiffré, VPN, synchronisation) pour que vous puissiez y accéder depuis n'importe où sans compromettre la sécurité.",
  },
];

export default function CabinetsAvocatsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen bg-gray-50">
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <p className="text-sm uppercase tracking-widest text-emerald-300 mb-3">Solutions par métier</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">
              Support Informatique Cabinets Avocats Maroc
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl">
              La confidentialité de vos clients est votre priorité. La sécuriser est la nôtre.
            </p>
            <div className="mt-8">
              <a
                href={`${whatsappBase}?text=${encodeURIComponent("Bonjour, je suis avocat/notaire et je souhaite un audit gratuit pour la sécurité informatique de mon cabinet.")}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition"
              >
                Demander un Audit Gratuit
              </a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center">Pourquoi sécuriser votre cabinet ?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {painPoints.map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Nos services pour les cabinets juridiques</h2>
            <ul className="space-y-4 max-w-3xl mx-auto">
              {services.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm flex-shrink-0 mt-0.5">✓</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Confidentialité & conformité</h2>
            <p className="text-slate-700 max-w-2xl mx-auto">
              Nous ne traitons que les aspects techniques et ne lisons jamais le contenu de vos dossiers. Nous pouvons signer des <strong>engagements de confidentialité</strong> et adapter nos processus (accès limité, traçabilité) pour respecter la déontologie du barreau.
            </p>
          </div>
        </section>

        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Vous êtes avocat, notaire ou conseil juridique ?</h2>
            <p className="text-slate-300 mb-6">Parlons de la sécurité de vos dossiers et de vos emails.</p>
            <a
              href={`${whatsappBase}?text=${encodeURIComponent("Bonjour, je souhaite un devis sur mesure pour le support IT de mon cabinet d'avocats.")}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition"
            >
              Devis Sur Mesure
            </a>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">FAQ – Cabinets d&apos;avocats</h2>
            <div className="space-y-4">
              {faq.map((item, i) => (
                <div key={i} className="border border-slate-200 rounded-xl p-4">
                  <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                  <p className="text-slate-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 border-t border-slate-200 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="font-semibold text-slate-900 mb-4">Autres solutions par métier</h3>
            <ul className="flex flex-wrap gap-3 text-sm">
              <li><Link href="/infogerance-pme-maroc" className="text-emerald-600 hover:underline">Infogérance PME Maroc</Link></li>
              <li><Link href="/solutions/cabinets-medicaux" className="text-emerald-600 hover:underline">Cabinets médicaux</Link></li>
              <li><Link href="/solutions/experts-comptables" className="text-emerald-600 hover:underline">Experts-comptables</Link></li>
              <li><Link href="/solutions/architectes" className="text-emerald-600 hover:underline">Architectes</Link></li>
              <li><Link href="/support-pme" className="text-emerald-600 hover:underline">Support informatique PME Maroc</Link></li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
