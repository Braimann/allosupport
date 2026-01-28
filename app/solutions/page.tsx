import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions par Métier - Support IT B2B | AlloSupport.ma",
  description:
    "Support informatique pour cabinets médicaux, avocats, experts-comptables et architectes au Maroc. Audit gratuit, devis sur mesure.",
  alternates: { canonical: "https://allosupport.ma/solutions" },
  openGraph: {
    title: "Solutions par Métier - Support IT B2B",
    description: "Support IT pour professionnels au Maroc : médecins, avocats, experts-comptables, architectes.",
    url: "https://allosupport.ma/solutions",
    type: "website",
  },
};

const verticals = [
  { href: "/solutions/cabinets-medicaux", title: "Cabinets médicaux", desc: "Conformité CNDP, secret médical, protection ransomware." },
  { href: "/solutions/cabinets-avocats", title: "Cabinets d'avocats", desc: "Confidentialité client-avocat, sécurisation emails, accès fichiers sécurisé." },
  { href: "/solutions/experts-comptables", title: "Experts-comptables", desc: "Sécurité données financières, Sage Ciel EBP, période fiscale." },
  { href: "/solutions/architectes", title: "Architectes", desc: "Workstations 3D, AutoCAD Revit Archicad, stockage fichiers lourds." },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Solutions par métier</h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Support informatique adapté à votre profession : conformité, confidentialité et continuité.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {verticals.map((v) => (
              <Link
                key={v.href}
                href={v.href}
                className="block bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-emerald-200 transition"
              >
                <h2 className="text-xl font-bold text-slate-900 mb-2">{v.title}</h2>
                <p className="text-slate-600 text-sm">{v.desc}</p>
                <span className="inline-block mt-3 text-emerald-600 font-medium text-sm">En savoir plus →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
