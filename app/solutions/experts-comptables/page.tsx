import type { Metadata } from "next";
import Link from "next/link";

const whatsappBase = "https://wa.me/212770303940";

export const metadata: Metadata = {
  title: "Support IT Experts-Comptables - Sécurité Données & Période Fiscale | AlloSupport.ma",
  description:
    "Support informatique pour fiduciaires et experts-comptables au Maroc. Sécurité des données financières, maintenance serveurs, Sage Ciel EBP. Devis sur mesure.",
  alternates: { canonical: "https://allosupport.ma/solutions/experts-comptables" },
  openGraph: {
    title: "Support IT Experts-Comptables - Continuité & Sécurité",
    description: "En période fiscale, une panne informatique est interdite. Nous garantissons votre continuité. Audit gratuit.",
    url: "https://allosupport.ma/solutions/experts-comptables",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Support informatique pour experts-comptables - AlloSupport.ma",
  serviceType: "IT Support for Accounting Firms",
  description: "Support IT pour fiduciaires et experts-comptables au Maroc : sécurité des données financières, maintenance serveurs, logiciels Sage Ciel EBP, sauvegardes automatisées.",
  provider: { "@type": "Organization", name: "AlloSupport.ma", telephone: "+212 770 30 39 40" },
  areaServed: { "@type": "Country", name: "Morocco" },
  url: "https://allosupport.ma/solutions/experts-comptables",
};

const painPoints = [
  {
    title: "Données financières critiques",
    description: "Une perte ou une fuite de données comptables met en cause la continuité du cabinet et la confiance des clients. La sécurité est non négociable.",
  },
  {
    title: "Période fiscale : zéro panne",
    description: "En pleine clôture ou déclarations, un serveur ou un logiciel qui tombe en panne bloque tout le cabinet. La disponibilité est prioritaire.",
  },
  {
    title: "Sage, Ciel, EBP : support technique",
    description: "Problèmes d'installation, de mise à jour ou de performance sur les logiciels de compta : il faut une équipe qui connaît l'environnement.",
  },
];

const services = [
  "Sécurisation des données financières : sauvegardes automatisées, chiffrement, accès limité (zéro perte de données).",
  "Maintenance serveurs et postes pendant la période fiscale : priorité et réactivité pour éviter toute interruption.",
  "Support logiciels Sage, Ciel, EBP : installation, mises à jour, dépannage et optimisation des performances.",
  "Plan de continuité et reprise après sinistre pour que le cabinet puisse travailler même en cas d'incident.",
];

const faq = [
  {
    q: "Intervenez-vous en urgence pendant la période fiscale ?",
    a: "Oui. Nous priorisons les cabinets en période de clôture ou de déclarations et nous nous engageons sur des délais de prise en charge courts pour les pannes critiques (serveur, logiciel de compta).",
  },
  {
    q: "Proposez-vous des sauvegardes automatisées ?",
    a: "Oui. Nous mettons en place des sauvegardes régulières (quotidiennes ou plus) de vos données comptables et serveurs, avec test de restauration pour garantir que vous pouvez récupérer vos données en cas de sinistre.",
  },
  {
    q: "Supportez-vous Sage, Ciel et EBP ?",
    a: "Oui. Nous intervenons sur l'installation, les mises à jour, les erreurs et les lenteurs liées à ces logiciels. Nous ne modifions pas la compta elle-même ; nous assurons la partie technique et infrastructure.",
  },
];

export default function ExpertsComptablesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-gray-50">
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <p className="text-sm uppercase tracking-widest text-emerald-300 mb-3">Solutions par métier</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">
              Support IT pour Experts-Comptables
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl">
              En période fiscale, une panne informatique est interdite. Nous garantissons votre continuité.
            </p>
            <div className="mt-8">
              <a
                href={`${whatsappBase}?text=${encodeURIComponent("Bonjour, je suis expert-comptable/fiduciaire et je souhaite un audit gratuit pour la continuité et la sécurité de mon cabinet.")}`}
                target="_blank"
                rel="noopener noreferrer"
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Nos services pour les fiduciaires</h2>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Confidentialité & données financières</h2>
            <p className="text-slate-700 max-w-2xl mx-auto">
              Les données que vous nous confiez (accès techniques, sauvegardes) sont traitées avec la plus grande confidentialité. Nous ne consultons pas le contenu comptable ; nous assurons la disponibilité, la sécurité et la sauvegarde de vos systèmes.
            </p>
          </div>
        </section>

        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Vous êtes expert-comptable ou fiduciaire ?</h2>
            <p className="text-slate-300 mb-6">Parlons de votre continuité et de la sécurité de vos données.</p>
            <a
              href={`${whatsappBase}?text=${encodeURIComponent("Bonjour, je souhaite un devis sur mesure pour le support IT de mon cabinet d'expertise comptable.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition"
            >
              Devis Sur Mesure
            </a>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">FAQ – Experts-comptables</h2>
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
              <li><Link href="/solutions/cabinets-medicaux" className="text-emerald-600 hover:underline">Cabinets médicaux</Link></li>
              <li><Link href="/solutions/cabinets-avocats" className="text-emerald-600 hover:underline">Cabinets d&apos;avocats</Link></li>
              <li><Link href="/solutions/architectes" className="text-emerald-600 hover:underline">Architectes</Link></li>
              <li><Link href="/support-pme" className="text-emerald-600 hover:underline">Support PME</Link></li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
