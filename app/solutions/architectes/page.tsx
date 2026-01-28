import type { Metadata } from "next";
import Link from "next/link";

const whatsappBase = "https://wa.me/212770303940";

export const metadata: Metadata = {
  title: "Support IT Architectes - Workstations 3D, AutoCAD, Revit, Archicad | AlloSupport.ma",
  description:
    "Support informatique pour architectes et bureaux d'études au Maroc. Performance workstations, rendu 3D, stockage fichiers lourds, calibrage écrans. Devis sur mesure.",
  alternates: { canonical: "https://allosupport.ma/solutions/architectes" },
  openGraph: {
    title: "Support IT Architectes - Rendu 3D & Fichiers Lourds",
    description: "Ne perdez plus de temps sur les rendus. Optimisation de parc pour la création 3D. Audit gratuit.",
    url: "https://allosupport.ma/solutions/architectes",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Support informatique pour architectes - AlloSupport.ma",
  serviceType: "IT Support for Architects",
  description: "Support IT pour architectes et bureaux d'études au Maroc : performance workstations (AutoCAD, Revit, Archicad), stockage fichiers lourds, NAS/Cloud, calibrage écrans.",
  provider: { "@type": "Organization", name: "AlloSupport.ma", telephone: "+212 770 30 39 40" },
  areaServed: { "@type": "Country", name: "Morocco" },
  url: "https://allosupport.ma/solutions/architectes",
};

const painPoints = [
  {
    title: "Rendu 3D trop lent",
    description: "Les projets AutoCAD, Revit ou Archicad exigent des postes puissants. Un PC sous-dimensionné ou mal configuré fait perdre des heures à chaque rendu.",
  },
  {
    title: "Fichiers lourds & partage",
    description: "Échanger des maquettes et plans entre collaborateurs ou avec les clients sans perdre des versions ou saturer les emails.",
  },
  {
    title: "Écrans & calibrage",
    description: "Des écrans mal calibrés faussent les couleurs et les rendus. Pour les présentations clients, la cohérence est essentielle.",
  },
];

const services = [
  "Optimisation des workstations pour la 3D (AutoCAD, Revit, Archicad) : paramétrage, pilotes, nettoyage et conseils matériel.",
  "Stockage et partage de fichiers lourds : NAS, cloud professionnel ou synchro sécurisée pour éviter la perte de versions.",
  "Maintenance préventive et dépannage : lenteurs, plantages, mises à jour des logiciels de CAO/DAO.",
  "Conseil calibrage écrans et matériel pour des rendus et présentations cohérents.",
];

const faq = [
  {
    q: "Pouvez-vous optimiser nos postes pour Revit / Archicad ?",
    a: "Oui. Nous intervenons sur la configuration Windows, les pilotes graphiques, l'utilisation de la RAM et du disque pour améliorer les performances de rendu. Nous ne modifions pas vos projets ; nous optimisons l'environnement technique.",
  },
  {
    q: "Proposez-vous une solution de stockage pour fichiers lourds ?",
    a: "Oui. Nous pouvons vous accompagner pour mettre en place un NAS ou une solution cloud adaptée au partage de maquettes et plans (sauvegarde, versioning, accès sécurisé) pour éviter les pertes et les envois par email.",
  },
  {
    q: "Intervenez-vous sur le calibrage des écrans ?",
    a: "Oui. Nous pouvons vous guider pour le calibrage des écrans (logiciels dédiés, profils couleur) afin que les rendus et présentations soient cohérents entre postes et avec ce que voient les clients.",
  },
];

export default function ArchitectesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-gray-50">
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <p className="text-sm uppercase tracking-widest text-emerald-300 mb-3">Solutions par métier</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">
              Support IT pour Architectes
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl">
              Ne perdez plus de temps sur les rendus. Optimisation de parc pour la création 3D.
            </p>
            <div className="mt-8">
              <a
                href={`${whatsappBase}?text=${encodeURIComponent("Bonjour, je suis architecte / bureau d'études et je souhaite un audit gratuit pour optimiser nos postes 3D et le stockage de nos fichiers.")}`}
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center">Pourquoi optimiser votre parc ?</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Nos services pour les bureaux d&apos;études</h2>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Performance & fiabilité</h2>
            <p className="text-slate-700 max-w-2xl mx-auto">
              Nous nous concentrons sur la <strong>performance de vos postes</strong> et la <strong>disponibilité de vos fichiers</strong>. Sauvegardes, stockage et bonnes pratiques pour que vous puissiez livrer vos projets sans perdre de temps ni de données.
            </p>
          </div>
        </section>

        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Vous êtes architecte ou bureau d&apos;études ?</h2>
            <p className="text-slate-300 mb-6">Parlons de vos workstations 3D et du partage de vos fichiers lourds.</p>
            <a
              href={`${whatsappBase}?text=${encodeURIComponent("Bonjour, je souhaite un devis sur mesure pour le support IT de mon cabinet d'architecture.")}`}
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
            <h2 className="text-2xl font-bold text-slate-900 mb-8">FAQ – Architectes</h2>
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
              <li><Link href="/solutions/experts-comptables" className="text-emerald-600 hover:underline">Experts-comptables</Link></li>
              <li><Link href="/support-pme" className="text-emerald-600 hover:underline">Support PME</Link></li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
