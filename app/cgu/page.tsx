import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { FileText, Shield, MessageCircle, BookOpen, FileSpreadsheet, AlertTriangle, ExternalLink, Wifi } from "lucide-react";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation | AlloSupport.ma",
  description: "CGU AlloSupport.ma - Accès au site, chatbot IA, blog, outil devis/factures, responsabilité utilisateur.",
  alternates: { canonical: "https://allosupport.ma/cgu" },
};

export default function CGUPage() {
  return (
    <main>
      <Header />
      <div className="pt-40 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl mb-4 shadow-lg">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Conditions Générales d'Utilisation
            </h1>
            <p className="text-lg text-gray-600" suppressHydrationWarning>
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">§1. Accès au site</h2>
              </div>
              <p className="text-gray-700">
                L'accès au site AlloSupport.ma est <strong>gratuit</strong> et ne nécessite <strong>aucune inscription obligatoire</strong> pour la consultation des pages publiques. L'utilisation de certains services (dépannage, devis, infogérance) peut impliquer la fourniture de coordonnées et l'acceptation des CGV.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">§2. Clause chatbot IA</h2>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-2">
                <p className="text-gray-700">Le chatbot intégré au site est un <strong>outil d'assistance automatisée</strong>. Ses réponses sont <strong>indicatives et non contractuelles</strong>. AlloSupport.ma décline toute responsabilité pour une décision prise sur la seule base d'une réponse du chatbot. Les conversations peuvent être analysées de façon <strong>anonymisée</strong> pour améliorer le service.</p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">§3. Clause blog / contenu éditorial</h2>
              </div>
              <p className="text-gray-700 mb-2">
                Les articles comparatifs (opérateurs, prix matériel, etc.) sont basés sur des <strong>données publiques à la date de publication</strong>. AlloSupport.ma ne garantit pas l'exactitude en temps réel. La mention de marques tierces (Maroc Telecom, Inwi, Orange, Microsoft, Kaspersky, etc.) est faite à titre <strong>informatif</strong>, sans partenariat ni affiliation.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileSpreadsheet className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">§4. Clause outil devis / facture</h2>
              </div>
              <p className="text-gray-700">
                Le générateur de devis et factures est fourni à titre <strong>gratuit et "en l'état"</strong>. AlloSupport.ma n'est pas responsable de l'usage fiscal ou comptable que le client en fait. Les documents générés n'engagent AlloSupport.ma que <strong>s'ils sont émis directement par ses techniciens</strong> (signature, envoi officiel).
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">§5. Responsabilité de l'utilisateur</h2>
              </div>
              <p className="text-gray-700 mb-2">Il est interdit d'utiliser le site pour :</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Usurper l'identité d'AlloSupport.ma ou d'un opérateur</li>
                <li>Diffuser des contenus illicites via les formulaires ou messages</li>
                <li>Tenter d'accéder aux systèmes d'information du site ou de tiers</li>
              </ul>
              <p className="text-gray-700 mt-2">Toute violation peut entraîner des poursuites et la suspension de l'accès.</p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <ExternalLink className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">§6. Liens hypertextes vers des sites tiers</h2>
              </div>
              <p className="text-gray-700">
                Les liens présents sur le site vers des ressources externes sont fournis pour commodité. AlloSupport.ma n'exerce aucun contrôle sur ces sites et décline toute <strong>responsabilité</strong> quant à leur contenu, disponibilité ou pratiques.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Wifi className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">§7. Disponibilité du site</h2>
              </div>
              <p className="text-gray-700">
                AlloSupport.ma ne garantit <strong>aucune continuité</strong> d'accès au site. Des opérations de maintenance ou des indisponibilités techniques peuvent survenir <strong>sans préavis</strong>. L'utilisateur ne peut prétendre à aucune indemnisation du fait d'une indisponibilité temporaire.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">Droit applicable et juridiction</h2>
              </div>
              <p className="text-gray-700">
                Les présentes CGU sont régies par le droit marocain. En cas de litige, les tribunaux de Casablanca sont seuls compétents.
              </p>
            </section>

            <section className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contact</h3>
              <p className="text-gray-700">contact@allosupport.ma — 07 75 23 70 38</p>
            </section>

            <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4 justify-center">
              <Link href="/mentions-legales" className="text-emerald-600 hover:text-emerald-700 font-semibold">Mentions légales</Link>
              <span className="text-gray-400">•</span>
              <Link href="/cgv" className="text-emerald-600 hover:text-emerald-700 font-semibold">CGV</Link>
              <span className="text-gray-400">•</span>
              <Link href="/politique-confidentialite" className="text-emerald-600 hover:text-emerald-700 font-semibold">Politique de confidentialité</Link>
              <span className="text-gray-400">•</span>
              <Link href="/non-responsabilite" className="text-emerald-600 hover:text-emerald-700 font-semibold">Clause de non-responsabilité</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
