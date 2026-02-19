import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Building2, User, Mail, MapPin, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions Légales | AlloSupport.ma",
  description:
    "Mentions légales d'AlloSupport.ma - Éditeur, hébergeur, directeur de publication, propriété intellectuelle, clause non-affiliation opérateurs.",
  robots: "index, follow",
  alternates: { canonical: "https://allosupport.ma/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl mb-6 shadow-lg">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Mentions Légales
            </h1>
            <p className="text-lg text-gray-600" suppressHydrationWarning>
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Building2 className="w-6 h-6 text-emerald-500" />
                1. Identité de l'éditeur
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                <p className="text-gray-700"><strong>Nom commercial :</strong> AlloSupport.ma</p>
                <p className="text-gray-700"><strong>Statut :</strong> [À remplir : Auto-entrepreneur / SARL]</p>
                <p className="text-gray-700"><strong>ICE :</strong> [À remplir]</p>
                <p className="text-gray-700"><strong>Responsable / Dirigeant :</strong> [Nom du dirigeant]</p>
                <p className="text-gray-700"><strong>Adresse :</strong> Casablanca, Maroc</p>
                <p className="text-gray-700"><strong>Contact :</strong> contact@allosupport.ma — 07 75 23 70 38</p>
                <p className="text-gray-700"><strong>Site :</strong> <a href="https://allosupport.ma" className="text-emerald-600 hover:text-emerald-700">https://allosupport.ma</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <User className="w-6 h-6 text-emerald-500" />
                2. Directeur de la publication
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le directeur de la publication du site AlloSupport.ma est le représentant légal de l'entreprise. Pour toute question relative au contenu du site : <a href="mailto:contact@allosupport.ma" className="text-emerald-600 hover:text-emerald-700">contact@allosupport.ma</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Globe className="w-6 h-6 text-emerald-500" />
                3. Hébergeur
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2">Le site <strong>allosupport.ma</strong> est hébergé par :</p>
                <p className="text-gray-700 font-semibold">Vercel Inc.</p>
                <p className="text-gray-700">340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</p>
                <p className="text-gray-700 mt-2">Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer nofollow" className="text-emerald-600 hover:text-emerald-700">https://vercel.com</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-emerald-500" />
                4. Propriété intellectuelle
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                L'ensemble du contenu de ce site (textes, images, logo, code source, articles de blog, comparatifs, outils) est la propriété exclusive d'AlloSupport.ma ou de ses ayants droit et est protégé par les dispositions du droit marocain et international relatives à la propriété intellectuelle.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Toute reproduction, représentation, modification, diffusion ou exploitation, en tout ou partie, sans autorisation écrite préalable d'AlloSupport.ma, est interdite et constitutive de contrefaçon.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-emerald-500" />
                5. Clause de non-affiliation aux opérateurs télécom
              </h2>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <p className="text-gray-800 leading-relaxed font-semibold">
                  <strong>AlloSupport.ma est un prestataire technique INDÉPENDANT.</strong> Il n'est en aucun cas affilié, mandaté, accrédité, sous-traitant ou partenaire de Maroc Telecom (IAM), Inwi, Orange Maroc, ou de tout autre opérateur télécom ou FAI. Les noms d'opérateurs cités sur ce site sont utilisés à titre informatif et comparatif uniquement. AlloSupport.ma n'agit jamais au nom d'un opérateur, ne peut pas modifier un abonnement, accéder aux systèmes internes d'un opérateur, ni représenter un opérateur.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-emerald-500" />
                6. Contenu du blog
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Les articles publiés sur le blog AlloSupport.ma (comparatifs, guides, actualités) ont une vocation <strong>informatrice uniquement</strong>. Ils ne constituent pas un engagement contractuel. Les prix, offres et données mentionnés peuvent évoluer sans préavis. AlloSupport.ma ne garantit pas l'exactitude en temps réel de ces informations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-emerald-500" />
                7. Limitation de responsabilité
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AlloSupport.ma s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, AlloSupport.ma ne peut garantir l'exactitude, la complétude ou l'actualité des informations mises à disposition. L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
              </p>
              <p className="text-gray-700 leading-relaxed">
                AlloSupport.ma ne pourra être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site, de l'impossibilité de l'utiliser, ou de l'utilisation des services décrits (dépannage à distance, récupération de données, infogérance, etc.), dans les limites prévues par les Conditions Générales de Vente et la clause de non-responsabilité.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-emerald-500" />
                8. Liens hypertextes
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le site peut contenir des liens vers des sites tiers. AlloSupport.ma n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu. La création de liens vers la page d'accueil d'AlloSupport.ma est autorisée sans demande préalable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-emerald-500" />
                9. Droit applicable et juridiction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes mentions légales sont régies par le droit marocain. En cas de litige, les tribunaux de Casablanca seront seuls compétents.
              </p>
            </section>

            <section className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6 text-emerald-600" />
                10. Contact
              </h2>
              <p className="text-gray-700 mb-2"><strong>Email :</strong> <a href="mailto:contact@allosupport.ma" className="text-emerald-600 hover:text-emerald-700">contact@allosupport.ma</a></p>
              <p className="text-gray-700"><strong>Téléphone :</strong> 07 75 23 70 38</p>
            </section>

            <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4 justify-center">
              <Link href="/politique-confidentialite" className="text-emerald-600 hover:text-emerald-700 font-semibold">← Politique de Confidentialité</Link>
              <span className="text-gray-400">•</span>
              <Link href="/cgu" className="text-emerald-600 hover:text-emerald-700 font-semibold">CGU →</Link>
              <span className="text-gray-400">•</span>
              <Link href="/cgv" className="text-emerald-600 hover:text-emerald-700 font-semibold">CGV</Link>
              <span className="text-gray-400">•</span>
              <Link href="/non-responsabilite" className="text-emerald-600 hover:text-emerald-700 font-semibold">Clause de non-responsabilité</Link>
              <span className="text-gray-400">•</span>
              <Link href="/operateurs-telecom" className="text-emerald-600 hover:text-emerald-700 font-semibold">Opérateurs télécom</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
