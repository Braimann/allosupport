import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";
import { FileText, DollarSign, CreditCard, Shield, Database, HardDrive, Building2, RotateCcw } from "lucide-react";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | AlloSupport.ma",
  description: "CGV AlloSupport.ma - Dépannage à distance, sur site, formatage, récupération de données, infogérance PME, paiement post-résultat.",
  alternates: { canonical: "https://allosupport.ma/cgv" },
};

export default function CGVPage() {
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
              Conditions Générales de Vente
            </h1>
            <p className="text-lg text-gray-600" suppressHydrationWarning>
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">§1. Définition du service</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  AlloSupport.ma propose une <strong>assistance technique informatique tierce</strong>, non rattachée à aucun constructeur, éditeur logiciel ou opérateur télécom. Les prestations couvrent notamment : dépannage à distance (TeamViewer), dépannage sur site, formatage PC / installation Windows, suppression de virus et malware, récupération de données, infogérance PME, audit et conseil. Toute commande implique l'acceptation sans réserve des présentes CGV.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">§2. Clause TeamViewer (accès à distance)</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="font-semibold text-gray-800 mb-2"><strong>Clause critique :</strong></p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>L'accès à distance est accordé <strong>volontairement et temporairement</strong> par le client.</li>
                    <li>Le client peut <strong>couper la session à tout moment</strong>.</li>
                    <li>AlloSupport.ma <strong>ne stocke, ne copie et ne transmet aucun fichier personnel</strong> sans accord explicite du client.</li>
                    <li>La responsabilité d'AlloSupport.ma est limitée aux <strong>actions réalisées pendant la session active et visible</strong>.</li>
                    <li>En cas de réclamation post-session non fondée sur une preuve, la responsabilité d'AlloSupport.ma est <strong>expressément écartée</strong>.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">§3. Clause récupération de données</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>AlloSupport.ma <strong>ne garantit pas un taux de récupération de 100 %</strong> sur tout support endommagé.</li>
                    <li>Le client est <strong>informé des risques</strong> avant toute intervention.</li>
                    <li>La responsabilité est limitée à la <strong>restitution des données effectivement récupérables</strong>.</li>
                    <li><strong>Aucune responsabilité</strong> n'est engagée en cas de perte irrémédiable liée à l'état préexistant du support.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <HardDrive className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">§4. Clause formatage</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Le client est <strong>seul responsable de la sauvegarde de ses données</strong> avant toute intervention de formatage. AlloSupport.ma informe systématiquement le client des conséquences d'un formatage ; toutefois, AlloSupport.ma ne peut être tenu responsable d'une perte de données si le client a validé le démarrage de l'intervention.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">§5. Clause paiement post-résultat</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  La notion de <strong>"résultat atteint"</strong> est définie conjointement avant l'intervention (sur WhatsApp ou par écrit). En cas de litige sur le résultat, le client dispose de <strong>48 heures après la session</strong> pour contester. Passé ce délai, le service est réputé accepté. Modes de paiement : CMI, Cash Plus, CIH Mobile, virement bancaire.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">§6. Clause infogérance PME</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Les contrats d'infogérance mensuels sont <strong>résiliables avec préavis de 30 jours</strong>. AlloSupport.ma agit comme <strong>prestataire externe</strong>, non comme salarié ou dirigeant de la PME cliente. Toute décision stratégique reste sous la <strong>responsabilité exclusive du client</strong>.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <RotateCcw className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">§7. Garantie</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Garantie <strong>7 jours</strong> pour le dépannage simple ; garantie <strong>30 jours</strong> pour le formatage / installation Windows, sous réserve des exclusions prévues aux présentes CGV et à la clause de non-responsabilité.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">§8. Tarifs</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Les tarifs affichés sur le site sont <strong>indicatifs</strong> et susceptibles d'évolution sans préavis. Les tarifs applicables sont ceux communiqués au moment de la commande ou du devis accepté.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">§9. Droit applicable et juridiction</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  <strong>Droit applicable :</strong> droit marocain (Code des Obligations et Contrats, Loi 09-08 lorsqu'il y a lieu, droit de la consommation). <strong>Juridiction compétente :</strong> Tribunaux de Casablanca.
                </p>
              </div>
            </section>

            <section className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contact</h3>
              <p className="text-gray-700">Email : <strong>contact@allosupport.ma</strong> — Téléphone : <strong>07 75 23 70 38</strong></p>
            </section>

            <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4 justify-center">
              <Link href="/mentions-legales" className="text-emerald-600 hover:text-emerald-700 font-semibold">Mentions légales</Link>
              <span className="text-gray-400">•</span>
              <Link href="/cgu" className="text-emerald-600 hover:text-emerald-700 font-semibold">CGU</Link>
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
