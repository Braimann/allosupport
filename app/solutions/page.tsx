import type { Metadata } from "next";
import Link from "next/link";
import { Stethoscope, Scale, Calculator, Ruler } from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/seo";

const CANONICAL = "https://allosupport.ma/solutions";
const whatsappBase = "https://wa.me/212775237038";

export const metadata: Metadata = {
  title: "Solutions Informatiques pour Professionnels au Maroc | AlloSupport",
  description:
    "Support IT sur mesure pour cabinets médicaux, avocats, experts-comptables et architectes au Maroc. Dépannage à distance dès 150 DH.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Solutions Informatiques pour Professionnels au Maroc | AlloSupport",
    description:
      "Support IT sur mesure pour cabinets médicaux, avocats, experts-comptables et architectes au Maroc. Dépannage à distance dès 150 DH.",
    url: CANONICAL,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Solutions informatiques pour professionnels - AlloSupport.ma",
  serviceType: "IT Support",
  description:
    "Support informatique sur mesure pour cabinets médicaux, avocats, experts-comptables et architectes au Maroc. Dépannage à distance, conformité, continuité.",
  provider: { "@type": "Organization", name: "AlloSupport.ma", telephone: "+212 7 75 23 70 38" },
  areaServed: { "@type": "Country", name: "MA" },
  url: CANONICAL,
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "https://allosupport.ma" },
  { name: "Solutions", url: CANONICAL },
]);

const sectors = [
  {
    slug: "cabinets-medicaux",
    title: "Cabinets médicaux",
    cta: "Solution IT cabinets médicaux",
    icon: Stethoscope,
    problems: [
      "Logiciel Dossier Patient et continuité de service",
      "Conformité CNDP (Loi 09-08) et données patients",
      "Protection anti-ransomware et sauvegardes",
    ],
  },
  {
    slug: "cabinets-avocats",
    title: "Cabinets d'avocats",
    cta: "Solution IT cabinets d'avocats",
    icon: Scale,
    problems: [
      "Confidentialité des échanges et emails sécurisés",
      "Sauvegardes et traçabilité des dossiers",
      "Continuité en cas de panne ou incident",
    ],
  },
  {
    slug: "experts-comptables",
    title: "Experts-comptables",
    cta: "Solution IT experts-comptables",
    icon: Calculator,
    problems: [
      "Maintenance Sage, EBP, Ciel et période fiscale",
      "Sécurité des données financières et serveurs",
      "Plan de continuité et reprise après sinistre",
    ],
  },
  {
    slug: "architectes",
    title: "Architectes",
    cta: "Solution IT architectes Maroc",
    icon: Ruler,
    problems: [
      "Performance workstations 3D (AutoCAD, Revit, Archicad)",
      "Stockage et partage de fichiers lourds",
      "Calibrage écrans et environnement CAO/DAO",
    ],
  },
];

const whyUs = [
  {
    title: "Réactivité 15 minutes",
    text: "Intervention à distance en moins de 15 minutes. Vos équipes ne restent jamais bloquées.",
  },
  {
    title: "Expertise métier",
    text: "Nous connaissons les logiciels et contraintes de chaque secteur : CNDP, Sage EBP, CAO, confidentialité.",
  },
  {
    title: "Tarifs transparents",
    text: "Dépannage dès 150 DH, forfaits mensuels pour les professionnels. Devis gratuit sur mesure.",
  },
];

export default function SolutionsHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="bg-white border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <ol className="flex items-center gap-2 text-sm text-slate-600">
              <li>
                <Link href="/" className="text-emerald-600 hover:underline">Accueil</Link>
              </li>
              <li aria-hidden className="text-slate-400">›</li>
              <li className="text-slate-900 font-medium">Solutions</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <p className="text-sm uppercase tracking-widest text-emerald-300 mb-3">Solutions par métier</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">
              Votre partenaire informatique selon votre métier
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl">
              Support IT sur mesure pour les professionnels au Maroc : cabinets médicaux, avocats, experts-comptables, architectes. Conformité, continuité et dépannage à distance dès 150 DH.
            </p>
            <p className="mt-4 text-slate-300 max-w-2xl">
              Besoin d&apos;une <Link href="/infogerance-pme-maroc" className="text-emerald-400 hover:underline font-medium">infogérance PME Maroc</Link> complète, d&apos;une <Link href="/maintenance-informatique" className="text-emerald-400 hover:underline font-medium">maintenance informatique</Link> préventive ou d&apos;un <Link href="/support-pme" className="text-emerald-400 hover:underline font-medium">support informatique PME</Link> ? Nous adaptons notre offre à votre secteur.
            </p>
          </div>
        </section>

        {/* 4 cartes sectorielles */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center">
              Choisissez votre secteur
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sectors.map(({ slug, title, cta, icon: Icon, problems }) => (
                <div
                  key={slug}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">{title}</h3>
                  <ul className="space-y-2 text-slate-600 text-sm mb-6 flex-1">
                    {problems.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/solutions/${slug}`}
                    className="inline-flex items-center justify-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 border border-emerald-600 hover:border-emerald-700 rounded-lg py-2.5 transition"
                  >
                    {cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contenu : besoins spécifiques professionnels */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Pourquoi les professionnels libéraux au Maroc ont des besoins IT spécifiques
            </h2>
            <div className="max-w-3xl mx-auto text-slate-700 leading-relaxed space-y-4">
              <p>
                Médecins, avocats, experts-comptables et architectes ne peuvent pas se contenter d&apos;un simple dépannage PC grand public. La <strong>conformité CNDP</strong> (Loi 09-08) impose aux cabinets médicaux et aux professions qui traitent des données personnelles des règles strictes de sécurisation et de confidentialité. La <strong>continuité de service</strong> est critique : une panne en pleine période fiscale ou pendant un rendu client peut coûter très cher. Enfin, les <strong>logiciels métiers</strong> — Dossier Patient, Sage, EBP, AutoCAD, Revit — exigent une maintenance et un support technique qui connaissent ces environnements.
              </p>
              <p>
                AlloSupport accompagne ces secteurs avec des solutions sur mesure : sauvegardes automatisées, protection anti-ransomware, support dédié et intervention à distance en moins de 15 minutes, partout au Maroc.
              </p>
            </div>
          </div>
        </section>

        {/* Nos guides pour les professionnels */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
              Nos guides pour les professionnels
            </h2>
            <ul className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <li>
                <Link
                  href="/blog/cybersecurite-pme-maroc-guide-2026"
                  className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-md transition text-slate-900 font-medium"
                >
                  Guide cybersécurité PME Maroc 2026
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/ransomware-maroc-proteger-donnees-entreprise"
                  className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-md transition text-slate-900 font-medium"
                >
                  Ransomware Maroc : protéger vos données
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/maintenance-preventive-pc-entreprise-maroc"
                  className="block bg-white border border-slate-200 rounded-xl p-4 hover:border-emerald-300 hover:shadow-md transition text-slate-900 font-medium"
                >
                  Maintenance préventive PC entreprise Maroc
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* Pourquoi AlloSupport pour les professionnels */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center">
              Pourquoi AlloSupport pour les professionnels ?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {whyUs.map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-slate-700 max-w-2xl mx-auto">
              En complément de nos solutions par métier, la <Link href="/antivirus-maroc" className="text-emerald-600 hover:underline font-medium">protection antivirus professionnelle</Link>, la <Link href="/recuperation-donnees" className="text-emerald-600 hover:underline font-medium">récupération de données</Link> et notre <Link href="/services/cybersecurite" className="text-emerald-600 hover:underline font-medium">offre cybersécurité</Link> renforcent la protection des données de vos clients.
            </p>
          </div>
        </section>

        {/* Zones d'intervention */}
        <section className="py-12 bg-white border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-slate-700">
              Nous intervenons à distance partout au Maroc :{" "}
              <Link href="/casablanca" className="text-emerald-600 hover:underline font-medium">Casablanca</Link>
              {" · "}
              <Link href="/rabat" className="text-emerald-600 hover:underline font-medium">Rabat</Link>
              {" · "}
              <Link href="/marrakech" className="text-emerald-600 hover:underline font-medium">Marrakech</Link>
              {" · "}
              <Link href="/fes" className="text-emerald-600 hover:underline font-medium">Fès</Link>
              {" · "}
              <Link href="/agadir" className="text-emerald-600 hover:underline font-medium">Agadir</Link>.
            </p>
          </div>
        </section>

        {/* CTA final WhatsApp */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Un projet, une urgence, un audit gratuit ?</h2>
            <p className="text-slate-300 mb-6">
              Décrivez votre besoin. Un technicien vous répond sous 15 minutes.
            </p>
            <a
              href={`${whatsappBase}?text=${encodeURIComponent("Bonjour, je suis un professionnel et je souhaite un devis / audit pour mon activité au Maroc.")}`}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition"
            >
              Contacter par WhatsApp
            </a>
            <p className="mt-4 text-slate-400 text-sm">
              Ou <Link href="/devis" className="text-emerald-400 hover:underline">demandez un devis en ligne</Link>
              {" · "}
              <Link href="/contact" className="text-emerald-400 hover:underline">contactez-nous</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
