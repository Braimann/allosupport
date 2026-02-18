import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { FileText, DollarSign, CreditCard, RotateCcw, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente | AlloSupport.ma",
  description: "Conditions Générales de Vente du service AlloSupport.ma - Dépannage informatique à distance au Maroc",
};

export default function CGVPage() {
  return (
    <main>
      <Header />
      <div className="pt-40 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
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

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 md:p-12 space-y-8">
            {/* Article 1 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">1. Objet</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Les présentes Conditions Générales de Vente (ci-après "CGV") régissent la vente de services de dépannage informatique à distance proposés par <strong>AlloSupport.ma</strong>.
                </p>
                <p>
                  Toute commande implique l'acceptation sans réserve des présentes CGV.
                </p>
              </div>
            </section>

            {/* Article 2 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">2. Tarifs</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Les prix de nos services sont indiqués en <strong>Dirhams Marocains (MAD)</strong> et sont valables pour le territoire marocain.
                </p>
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Nos tarifs (TTC) :</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Ticket Urgence (Intervention &lt; 30 min)</span>
                      <strong className="text-emerald-600">150 DH</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Ticket Standard (Problème complexe)</span>
                      <strong className="text-emerald-600">250 DH</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Pack Nettoyage Complet (Virus + Optimisation)</span>
                      <strong className="text-emerald-600">290 DH</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Pack Récupération Données</span>
                      <strong className="text-emerald-600">350 DH</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Infogérance PME (à partir de)</span>
                      <strong className="text-emerald-600">1 500 DH/mois</strong>
                    </li>
                  </ul>
                </div>
                <p>
                  AlloSupport.ma se réserve le droit de modifier ses tarifs à tout moment. Les tarifs applicables sont ceux en vigueur au moment de la commande.
                </p>
              </div>
            </section>

            {/* Article 3 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">3. Modalités de paiement</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Le paiement s'effectue <strong>après résolution du problème</strong> selon le principe "Satisfait ou Remboursé".
                </p>
                <p>Modes de paiement acceptés :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Virement bancaire</li>
                  <li>Paiement mobile (Orange Money, Inwi Money, etc.)</li>
                  <li>Espèces (sur rendez-vous uniquement)</li>
                </ul>
                <p className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded">
                  <strong>Garantie :</strong> Si le problème n'est pas résolu, vous ne payez rien. Le paiement n'est exigé qu'en cas de résolution réussie.
                </p>
              </div>
            </section>

            {/* Article 4 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">4. Délais d'intervention</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Les délais d'intervention varient selon la priorité et le SLA choisi :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Urgent (15 min)</strong> : Intervention dans les 15 minutes suivant la création du ticket</li>
                  <li><strong>Standard (1h)</strong> : Intervention dans l'heure</li>
                  <li><strong>Normal (4h)</strong> : Intervention sous 4 heures</li>
                  <li><strong>Déféré (24h)</strong> : Intervention sous 24 heures</li>
                </ul>
                <p>
                  Les délais sont indicatifs et peuvent varier en fonction de la complexité du problème et de la disponibilité des techniciens.
                </p>
              </div>
            </section>

            {/* Article 5 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <RotateCcw className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">5. Garantie "Satisfait ou Remboursé"</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  AlloSupport.ma garantit la résolution de votre problème. Si après intervention le problème persiste ou n'est pas résolu, <strong>vous êtes intégralement remboursé</strong>.
                </p>
                <p>Conditions de remboursement :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Le problème doit être signalé dans les <strong>48 heures</strong> suivant l'intervention</li>
                  <li>Le problème doit être le même que celui initialement déclaré</li>
                  <li>Le remboursement s'effectue sous <strong>7 jours ouvrés</strong> par le même moyen de paiement</li>
                </ul>
                <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <strong>Exception :</strong> Les pannes matérielles (disque dur défectueux, carte mère grillée, etc.) ne sont pas couvertes par cette garantie car elles nécessitent une intervention physique en laboratoire.
                </p>
              </div>
            </section>

            {/* Article 6 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">6. Droit de rétractation</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Conformément à la législation marocaine, vous disposez d'un <strong>droit de rétractation de 7 jours</strong> à compter de la commande, sauf si l'intervention a déjà été effectuée avec votre accord.
                </p>
                <p>
                  Pour exercer votre droit de rétractation, contactez-nous via le portail client ou à l'adresse : <strong>contact@allosupport.ma</strong>
                </p>
              </div>
            </section>

            {/* Article 7 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">7. Facturation</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Une facture électronique vous est envoyée par email après paiement. Les factures sont conformes à la réglementation marocaine et incluent la TVA si applicable.
                </p>
              </div>
            </section>

            {/* Article 8 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">8. Litiges et réclamations</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  En cas de litige, nous vous encourageons à nous contacter en priorité via le portail client ou par email à <strong>contact@allosupport.ma</strong>. Nous nous engageons à répondre sous <strong>48 heures</strong>.
                </p>
                <p>
                  Conformément à la législation marocaine, vous pouvez également saisir le service de médiation de la consommation ou les tribunaux compétents.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Questions sur nos tarifs ?</h3>
              <p className="text-gray-700 mb-4">
                Contactez-nous pour obtenir un devis personnalisé :
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>📧 Email : <strong>contact@allosupport.ma</strong></li>
                <li>💬 WhatsApp : <strong>+212 6 XX XX XX XX</strong></li>
                <li>🌐 Site web : <strong>www.allosupport.ma</strong></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
