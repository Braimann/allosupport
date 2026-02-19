import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plan du Site - Tous nos liens | AlloSupport.ma",
  description:
    "Plan du site AlloSupport.ma : dépannage informatique, réparation PC, support PME, villes (Casablanca, Rabat, Fès, Marrakech, Agadir). Tous les liens du site.",
  alternates: {
    canonical: "https://allosupport.ma/plan-du-site",
  },
  robots: "index, follow",
};

const categories = [
  {
    title: "Pages principales",
    links: [
      { href: "/", label: "Accueil" },
      { href: "/contact", label: "Contact" },
      { href: "/a-propos", label: "À propos" },
      { href: "/faq", label: "FAQ" },
      { href: "/devis", label: "Devis gratuit" },
      { href: "/services", label: "Tous nos services" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Services (dépannage & support)",
    links: [
      { href: "/depannage-informatique", label: "Dépannage informatique" },
      { href: "/virus-ordinateur-maroc", label: "Suppression virus ordinateur Maroc" },
      { href: "/pc-lent-solution", label: "PC lent solution" },
      { href: "/installation-windows", label: "Installation Windows" },
      { href: "/recuperation-donnees", label: "Récupération de données" },
      { href: "/support-pme", label: "Support informatique PME" },
      { href: "/formatage-pc", label: "Formatage PC prix Maroc" },
      { href: "/formatage-pc-casablanca", label: "Formatage PC Casablanca 350 DH" },
      { href: "/reparation-ordinateur", label: "Réparation ordinateur Maroc" },
      { href: "/antivirus-maroc", label: "Antivirus Maroc" },
      { href: "/maintenance-informatique", label: "Maintenance informatique" },
    ],
  },
  {
    title: "Zones d'intervention (villes)",
    links: [
      { href: "/casablanca", label: "Dépannage PC Casablanca" },
      { href: "/rabat", label: "Dépannage informatique Rabat" },
      { href: "/fes", label: "Réparation PC Fès" },
      { href: "/marrakech", label: "Support informatique Marrakech" },
      { href: "/agadir", label: "Dépannage PC Agadir" },
      // { href: "/tanger", label: "Dépannage informatique Tanger" }, // Page inexistante (404) - réactiver quand /tanger sera créée
    ],
  },
  {
    title: "Solutions par métier (verticals)",
    links: [
      { href: "/solutions", label: "Solutions par métier (accueil)" },
      { href: "/solutions/cabinets-medicaux", label: "Cabinets médicaux" },
      { href: "/solutions/cabinets-avocats", label: "Cabinets d'avocats" },
      { href: "/solutions/experts-comptables", label: "Experts-comptables" },
      { href: "/solutions/architectes", label: "Architectes" },
    ],
  },
  {
    title: "Outils en ligne",
    links: [
      { href: "/tools", label: "Tous les outils" },
      { href: "/tools/html-editor", label: "Éditeur HTML" },
      { href: "/tools/password-generator", label: "Générateur de mots de passe" },
      { href: "/tools/speed-test", label: "Test de débit" },
      { href: "/tools/unit-converter", label: "Convertisseur d'unités" },
      { href: "/tools/qr-generator", label: "Générateur QR Code" },
      { href: "/tools/invoice-generator", label: "Générateur de factures" },
    ],
  },
  {
    title: "Espace client & compte",
    links: [
      { href: "/login", label: "Connexion" },
      { href: "/signup", label: "Inscription" },
      { href: "/dashboard", label: "Tableau de bord" },
    ],
  },
  {
    title: "Légal & confidentialité",
    links: [
      { href: "/mentions-legales", label: "Mentions légales" },
      { href: "/politique-confidentialite", label: "Politique de confidentialité" },
      { href: "/cgv", label: "Conditions générales de vente (CGV)" },
      { href: "/cgu", label: "Conditions générales d'utilisation (CGU)" },
      { href: "/non-responsabilite", label: "Clause de non-responsabilité" },
      { href: "/operateurs-telecom", label: "Opérateurs télécom" },
    ],
  },
];

export default function PlanDuSitePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Plan du site - AlloSupport.ma
          </h1>
          <p className="text-slate-200 text-lg">
            Retrouvez tous les liens du site : dépannage informatique, réparation PC,
            support PME et zones d&apos;intervention au Maroc.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-10">
            {categories.map((category) => (
              <div key={category.title}>
                <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                  {category.title}
                </h2>
                <ul className="space-y-2">
                  {category.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-emerald-600 hover:text-emerald-700 hover:underline font-medium"
                      >
                        {link.label}
                      </Link>
                      <span className="text-slate-400 text-sm ml-2">{link.href}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-12 text-slate-500 text-sm">
            Les pages blog et services peuvent contenir des articles et fiches
            supplémentaires accessibles depuis la page Blog et la page Services.
          </p>
        </div>
      </section>
    </main>
  );
}
