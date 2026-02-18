import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { FileText, Shield, Users, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation | AlloSupport.ma",
  description: "Conditions Générales d'Utilisation du service AlloSupport.ma - Dépannage informatique à distance au Maroc",
};

export default function CGUPage() {
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
              Conditions Générales d'Utilisation
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
                <Shield className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">1. Objet et champ d'application</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Les présentes Conditions Générales d'Utilisation (ci-après "CGU") régissent l'utilisation du site web <strong>AlloSupport.ma</strong> et des services de dépannage informatique à distance proposés par AlloSupport.ma.
                </p>
                <p>
                  En accédant au site et en utilisant nos services, vous acceptez sans réserve les présentes CGU. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.
                </p>
              </div>
            </section>

            {/* Article 2 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">2. Définitions</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>"Service"</strong> : Dépannage informatique à distance proposé par AlloSupport.ma</li>
                  <li><strong>"Utilisateur"</strong> : Toute personne accédant au site ou utilisant les services</li>
                  <li><strong>"Client"</strong> : Utilisateur ayant créé un compte et commandé un service</li>
                  <li><strong>"Technicien"</strong> : Expert informatique intervenant pour résoudre le problème</li>
                  <li><strong>"Ticket"</strong> : Demande de support créée via le portail client</li>
                </ul>
              </div>
            </section>

            {/* Article 3 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">3. Accès au service</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  L'accès au site <strong>AlloSupport.ma</strong> est libre et gratuit. L'utilisation des services de dépannage est payante selon les tarifs en vigueur.
                </p>
                <p>
                  Pour créer un compte et utiliser le portail client, vous devez :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Être âgé d'au moins 18 ans ou avoir l'autorisation d'un représentant légal</li>
                  <li>Fournir des informations exactes et à jour</li>
                  <li>Respecter les lois et réglementations marocaines</li>
                  <li>Ne pas utiliser le service à des fins illégales ou frauduleuses</li>
                </ul>
              </div>
            </section>

            {/* Article 4 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">4. Utilisation du portail client</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Le portail client permet de créer et gérer vos tickets de support. Vous vous engagez à :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Décrire précisément votre problème</li>
                  <li>Respecter les techniciens et leur travail</li>
                  <li>Ne pas utiliser un langage offensant ou inapproprié</li>
                  <li>Ne pas créer de tickets frauduleux ou abusifs</li>
                  <li>Maintenir la confidentialité de vos identifiants de connexion</li>
                </ul>
                <p className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <strong>Important :</strong> Toute utilisation abusive du portail peut entraîner la suspension ou la suppression de votre compte sans remboursement.
                </p>
              </div>
            </section>

            {/* Article 5 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">5. Protection des données personnelles</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  AlloSupport.ma s'engage à protéger vos données personnelles conformément à la loi 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel au Maroc.
                </p>
                <p>
                  Les données collectées sont utilisées uniquement pour :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>La gestion de votre compte et de vos tickets</li>
                  <li>L'amélioration de nos services</li>
                  <li>La communication relative à votre demande</li>
                </ul>
                <p>
                  Vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous via le portail client ou à l'adresse : <strong>contact@allosupport.ma</strong>
                </p>
              </div>
            </section>

            {/* Article 6 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">6. Responsabilité</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  AlloSupport.ma s'efforce de fournir un service de qualité. Cependant, nous ne pouvons garantir :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>La résolution de tous les problèmes informatiques (certaines pannes matérielles nécessitent une intervention physique)</li>
                  <li>La récupération de toutes les données perdues (dépend de l'état du disque dur)</li>
                  <li>L'absence totale d'interruptions du service</li>
                </ul>
                <p>
                  Vous êtes responsable de la sauvegarde de vos données avant toute intervention. AlloSupport.ma ne pourra être tenu responsable de la perte de données non sauvegardées.
                </p>
              </div>
            </section>

            {/* Article 7 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">7. Propriété intellectuelle</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Le site <strong>AlloSupport.ma</strong>, son contenu, son design et ses fonctionnalités sont la propriété exclusive d'AlloSupport.ma. Toute reproduction, même partielle, est interdite sans autorisation préalable.
                </p>
              </div>
            </section>

            {/* Article 8 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">8. Modification des CGU</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  AlloSupport.ma se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entrent en vigueur dès leur publication sur le site. Il est recommandé de consulter régulièrement cette page.
                </p>
              </div>
            </section>

            {/* Article 9 */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">9. Droit applicable et juridiction</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Les présentes CGU sont régies par le droit marocain. En cas de litige, les tribunaux marocains seront seuls compétents.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Questions ?</h3>
              <p className="text-gray-700">
                Pour toute question concernant ces CGU, contactez-nous :
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
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
