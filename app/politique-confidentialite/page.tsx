import { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | AlloSupport.ma",
  description:
    "Politique de confidentialité d'AlloSupport.ma - Protection des données personnelles, cookies, et droits des utilisateurs conformément à la législation marocaine.",
  robots: "index, follow",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl mb-6 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-lg text-gray-600">
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-emerald-500" />
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AlloSupport.ma ("nous", "notre", "nos") s'engage à protéger la confidentialité et la sécurité de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles lorsque vous utilisez notre site web et nos services de dépannage informatique à distance.
              </p>
              <p className="text-gray-700 leading-relaxed">
                En utilisant nos services, vous acceptez les pratiques décrites dans cette politique. Si vous n'acceptez pas cette politique, veuillez ne pas utiliser nos services.
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-emerald-500" />
                2. Données Collectées
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous collectons les types de données personnelles suivants :
              </p>
              <div className="space-y-4">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">2.1. Données d'identification</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Nom et prénom</li>
                    <li>Adresse e-mail</li>
                    <li>Numéro de téléphone</li>
                    <li>Adresse postale (si nécessaire pour la facturation)</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">2.2. Données techniques</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Adresse IP</li>
                    <li>Type de navigateur et version</li>
                    <li>Système d'exploitation</li>
                    <li>Pages visitées et durée de visite</li>
                    <li>Informations sur votre équipement informatique (lors d'une intervention)</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">2.3. Données de communication</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Messages échangés via WhatsApp</li>
                    <li>Historique des tickets de support</li>
                    <li>Conversations avec notre chatbot</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">2.4. Données de paiement</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Informations de facturation (gérées par nos prestataires de paiement sécurisés)</li>
                    <li>Historique des transactions</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Usage */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-emerald-500" />
                3. Utilisation des Données
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous utilisons vos données personnelles pour les finalités suivantes :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Fourniture de services :</strong> Traiter vos demandes de dépannage, créer et gérer vos tickets de support</li>
                <li><strong>Communication :</strong> Vous contacter concernant vos demandes, vous envoyer des confirmations et mises à jour</li>
                <li><strong>Amélioration des services :</strong> Analyser l'utilisation de notre site pour améliorer l'expérience utilisateur</li>
                <li><strong>Marketing :</strong> Vous envoyer des informations sur nos services (uniquement avec votre consentement)</li>
                <li><strong>Conformité légale :</strong> Respecter nos obligations légales et réglementaires</li>
                <li><strong>Sécurité :</strong> Détecter et prévenir la fraude, les abus et autres activités illégales</li>
              </ul>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-emerald-500" />
                4. Partage des Données
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations uniquement dans les cas suivants :
              </p>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">4.1. Prestataires de services</h3>
                  <p className="text-gray-700 text-sm">
                    Nous pouvons partager vos données avec des prestataires tiers qui nous aident à fournir nos services (hébergement, paiement, analyse). Ces prestataires sont contractuellement tenus de protéger vos données.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">4.2. Obligations légales</h3>
                  <p className="text-gray-700 text-sm">
                    Nous pouvons divulguer vos données si la loi l'exige ou en réponse à une demande légale valide.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">4.3. Protection de nos droits</h3>
                  <p className="text-gray-700 text-sm">
                    Nous pouvons partager des informations pour protéger nos droits, notre propriété ou la sécurité de nos utilisateurs.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-emerald-500" />
                5. Sécurité des Données
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Chiffrement SSL/TLS pour toutes les communications</li>
                <li>Authentification sécurisée via Firebase Authentication</li>
                <li>Stockage sécurisé des données dans Firebase (conformité aux standards internationaux)</li>
                <li>Accès restreint aux données personnelles (seul le personnel autorisé)</li>
                <li>Sauvegardes régulières et sécurisées</li>
                <li>Surveillance continue des systèmes pour détecter les intrusions</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Malgré nos efforts, aucune méthode de transmission sur Internet ou de stockage électronique n'est 100% sécurisée. Nous ne pouvons garantir une sécurité absolue.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-emerald-500" />
                6. Cookies et Technologies Similaires
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Notre site utilise des cookies et technologies similaires pour améliorer votre expérience :
              </p>
              <div className="space-y-3">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">6.1. Cookies essentiels</h3>
                  <p className="text-gray-700 text-sm">
                    Nécessaires au fonctionnement du site (authentification, sécurité). Ces cookies ne peuvent pas être désactivés.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">6.2. Cookies analytiques</h3>
                  <p className="text-gray-700 text-sm">
                    Nous utilisons des outils d'analyse (Google Analytics) pour comprendre comment les visiteurs utilisent notre site. Vous pouvez désactiver ces cookies dans les paramètres de votre navigateur.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">6.3. Cookies de préférences</h3>
                  <p className="text-gray-700 text-sm">
                    Mémorisent vos préférences (langue, région) pour améliorer votre expérience.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur. Notez que la désactivation de certains cookies peut affecter le fonctionnement du site.
              </p>
            </section>

            {/* User Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-emerald-500" />
                7. Vos Droits
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conformément à la loi 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel au Maroc, vous disposez des droits suivants :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Droit d'accès</h3>
                  <p className="text-gray-700 text-sm">
                    Vous pouvez demander une copie de vos données personnelles que nous détenons.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Droit de rectification</h3>
                  <p className="text-gray-700 text-sm">
                    Vous pouvez corriger ou mettre à jour vos données personnelles.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Droit à l'effacement</h3>
                  <p className="text-gray-700 text-sm">
                    Vous pouvez demander la suppression de vos données personnelles (sous réserve des obligations légales).
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Droit d'opposition</h3>
                  <p className="text-gray-700 text-sm">
                    Vous pouvez vous opposer au traitement de vos données pour des raisons légitimes.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Droit à la portabilité</h3>
                  <p className="text-gray-700 text-sm">
                    Vous pouvez demander le transfert de vos données vers un autre service.
                  </p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Droit de retrait du consentement</h3>
                  <p className="text-gray-700 text-sm">
                    Vous pouvez retirer votre consentement à tout moment pour les traitements basés sur le consentement.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                Pour exercer vos droits, contactez-nous à <a href="mailto:contact@allosupport.ma" className="text-emerald-600 hover:text-emerald-700 font-semibold">contact@allosupport.ma</a>. Nous répondrons à votre demande dans un délai raisonnable (généralement sous 30 jours).
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-emerald-500" />
                8. Conservation des Données
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous conservons vos données personnelles uniquement aussi longtemps que nécessaire pour les finalités pour lesquelles elles ont été collectées :
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Données de compte :</strong> Tant que votre compte est actif, puis 3 ans après la dernière activité</li>
                <li><strong>Données de facturation :</strong> 10 ans (obligation légale marocaine)</li>
                <li><strong>Données de communication :</strong> 2 ans après la fin de la relation contractuelle</li>
                <li><strong>Données analytiques :</strong> 26 mois maximum (conformément aux standards Google Analytics)</li>
                <li><strong>Cookies :</strong> Selon leur type (de quelques minutes à 2 ans maximum)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Après ces périodes, vos données seront supprimées ou anonymisées de manière sécurisée.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-emerald-500" />
                9. Services Tiers
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Notre site peut contenir des liens vers des sites web tiers ou utiliser des services tiers. Nous ne sommes pas responsables des pratiques de confidentialité de ces tiers. Nous vous encourageons à lire les politiques de confidentialité de chaque site que vous visitez.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Services tiers utilisés :</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4 text-sm">
                  <li><strong>Firebase (Google) :</strong> Hébergement, authentification, base de données</li>
                  <li><strong>Vercel :</strong> Hébergement et déploiement</li>
                  <li><strong>OpenAI :</strong> Service de chatbot (données anonymisées)</li>
                  <li><strong>Google Analytics :</strong> Analyse du trafic (si activé)</li>
                </ul>
              </div>
            </section>

            {/* Children */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-emerald-500" />
                10. Protection des Mineurs
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nos services ne sont pas destinés aux personnes de moins de 18 ans. Nous ne collectons pas sciemment de données personnelles auprès de mineurs. Si nous apprenons qu'un mineur nous a fourni des données personnelles, nous les supprimerons immédiatement. Si vous êtes parent ou tuteur et que vous savez que votre enfant nous a fourni des données personnelles, veuillez nous contacter.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-emerald-500" />
                11. Modifications de cette Politique
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout changement significatif en publiant la nouvelle politique sur cette page et en mettant à jour la date de "Dernière mise à jour". Nous vous encourageons à consulter régulièrement cette page pour rester informé de la façon dont nous protégeons vos données.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6 text-emerald-600" />
                12. Contact
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, contactez-nous :
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:contact@allosupport.ma" className="text-emerald-600 hover:text-emerald-700">
                      contact@allosupport.ma
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Téléphone</p>
                    <a href="tel:+212770303940" className="text-emerald-600 hover:text-emerald-700">
                      +212 6 XX XX XX XX
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Adresse</p>
                    <p className="text-gray-700">Casablanca, Maroc</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Back Links */}
            <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4 justify-center">
              <Link
                href="/cgu"
                className="text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                ← Conditions Générales d'Utilisation
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                href="/cgv"
                className="text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                Conditions Générales de Vente →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
