import type { Metadata } from "next";
import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/seo";

const whatsappBase = "https://wa.me/212775237038";

export const metadata: Metadata = {
  title: "Support Informatique Cabinets Médicaux Maroc | Conformité CNDP | AlloSupport",
  description:
    "Support informatique cabinet médical Maroc. Conformité CNDP, protection données patients, anti-ransomware. Médecins, dentistes, cliniques. Audit gratuit.",
  alternates: { canonical: "https://allosupport.ma/solutions/cabinets-medicaux" },
  openGraph: {
    title: "Support IT Cabinets Médicaux - Conformité CNDP & Données Patients",
    description: "Sécurisez vos dossiers patients. Conformité CNDP, anti-ransomware, logiciels médicaux. Audit gratuit.",
    url: "https://allosupport.ma/solutions/cabinets-medicaux",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Support informatique pour cabinets médicaux - AlloSupport.ma",
  serviceType: "IT Support for Medical Practices",
  description: "Support IT pour médecins, dentistes et cliniques au Maroc : conformité CNDP, protection des données patients, anti-ransomware, logiciels médicaux (Damancom, MédiClick).",
  provider: { "@type": "Organization", name: "AlloSupport.ma", telephone: "+212 7 75 23 70 38" },
  areaServed: { "@type": "Country", name: "Morocco" },
  url: "https://allosupport.ma/solutions/cabinets-medicaux",
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "https://allosupport.ma" },
  { name: "Solutions IT", url: "https://allosupport.ma/solutions" },
  { name: "Cabinets Médicaux", url: "https://allosupport.ma/solutions/cabinets-medicaux" },
]);

const painPoints = [
  {
    title: "Conformité CNDP (Loi 09-08)",
    description: "La CNDP exige la protection des données personnelles de santé. Un cabinet non conforme s'expose à des contrôles et sanctions.",
  },
  {
    title: "Ransomware & perte de dossiers",
    description: "Une attaque peut bloquer l'accès aux dossiers patients et mettre l'activité à l'arrêt. La continuité est critique.",
  },
  {
    title: "Logiciels médicaux qui plantent",
    description: "Damancom, MédiClick ou autres logiciels de gestion : une panne en pleine journée bloque rendez-vous et facturation.",
  },
];

const services = [
  "Conformité CNDP : sécurisation des données patients et bonnes pratiques (sauvegardes, chiffrement, accès).",
  "Protection anti-ransomware et mise à jour des systèmes (Windows, antivirus, pare-feu).",
  "Support logiciels médicaux (Damancom, MédiClick, etc.) et maintenance préventive.",
  "Sauvegardes automatisées et plan de reprise après sinistre pour ne jamais perdre un dossier.",
];

const faq = [
  {
    q: "Comment vous assurez-vous du respect du secret médical ?",
    a: "Nous intervenons à distance sous votre contrôle, sans accès non autorisé aux dossiers. Nous ne traitons que les aspects techniques (système, logiciels, sauvegardes) et pouvons signer des engagements de confidentialité.",
  },
  {
    q: "Proposez-vous un audit de conformité CNDP ?",
    a: "Oui. Nous proposons un audit gratuit de votre environnement informatique (stockage des données, sauvegardes, accès) et des recommandations pour vous rapprocher des exigences de la Loi 09-08.",
  },
  {
    q: "Intervenez-vous en urgence en cas de ransomware ?",
    a: "Oui. En cas d'infection, nous priorisons le diagnostic et les premières actions (isolement, sauvegarde si possible) pour limiter les dégâts. Un plan de sauvegarde régulier réduit fortement le risque.",
  },
];

export default function CabinetsMedicauxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/hero-medical-placeholder.jpg')] bg-cover bg-center opacity-20" style={{ backgroundImage: "none" }} />
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <p className="text-sm uppercase tracking-widest text-emerald-300 mb-3">Solutions par métier</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">
              Support Informatique Cabinets Médicaux Maroc
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl">
              Votre cabinet ne peut pas s&apos;arrêter. Nous sécurisons vos dossiers patients et vous accompagnons vers la conformité CNDP.
            </p>
            <div className="mt-8">
              <a
                href={`${whatsappBase}?text=${encodeURIComponent("Bonjour, je suis un professionnel de santé et je souhaite un audit gratuit pour mon cabinet (conformité CNDP / sécurité).")}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition"
              >
                Demander un Audit Gratuit
              </a>
            </div>
          </div>
        </section>

        {/* Pain Points */}
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

        {/* Our Services */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Nos services pour les professionnels de santé</h2>
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

        {/* Trust / Security */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Confidentialité & conformité</h2>
            <p className="text-slate-700 max-w-2xl mx-auto">
              Nous traitons les données de nos clients avec la plus grande confidentialité. Pour les cabinets médicaux, nous nous alignons sur les exigences de la <strong>Loi 09-08 (CNDP)</strong> et du secret médical : accès limité, pas de lecture des dossiers patients, engagements contractuels possibles.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Vous êtes médecin, dentiste ou clinique ?</h2>
            <p className="text-slate-300 mb-6">Parlons de la sécurité de vos dossiers patients et de votre conformité.</p>
            <a
              href={`${whatsappBase}?text=${encodeURIComponent("Bonjour, je souhaite un devis sur mesure pour le support IT de mon cabinet médical.")}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition"
            >
              Devis Sur Mesure
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">FAQ – Cabinets médicaux</h2>
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

        {/* Internal links */}
        <section className="py-12 border-t border-slate-200 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="font-semibold text-slate-900 mb-4">Autres solutions par métier</h3>
            <ul className="flex flex-wrap gap-3 text-sm">
              <li><Link href="/infogerance-pme-maroc" className="text-emerald-600 hover:underline">Infogérance PME Maroc</Link></li>
              <li><Link href="/solutions/cabinets-avocats" className="text-emerald-600 hover:underline">Cabinets d&apos;avocats</Link></li>
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
