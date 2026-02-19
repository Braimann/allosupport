import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, BookOpen, Wrench, Wifi, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Indépendance opérateurs télécom | AlloSupport.ma",
  description: "AlloSupport.ma est un prestataire technique indépendant. Non affilié à Maroc Telecom, Inwi ou Orange. Contenu comparatif et service audit/conseil.",
  robots: "index, follow",
  alternates: { canonical: "https://allosupport.ma/operateurs-telecom" },
};

export default function OperateursTelecomPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl mb-6 shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Clause opérateurs télécom
            </h1>
            <p className="text-lg text-gray-600" suppressHydrationWarning>
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            {/* §1 Déclaration d'indépendance - EN GRAS en haut */}
            <section className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-amber-600" />
                §1. Déclaration d'indépendance absolue
              </h2>
              <div className="text-gray-800 leading-relaxed space-y-3 font-medium">
                <p><strong>AlloSupport.ma est un prestataire technique PRIVÉ et TOTALEMENT INDÉPENDANT de tout opérateur télécom.</strong></p>
                <p><strong>AlloSupport.ma :</strong></p>
                <ul className="list-none space-y-1 ml-2">
                  <li>✗ N'est <strong>PAS</strong> un agent commercial de Maroc Telecom, Inwi ou Orange</li>
                  <li>✗ N'est <strong>PAS</strong> un revendeur agréé ni sous-traitant de ces opérateurs</li>
                  <li>✗ N'est <strong>PAS</strong> mandaté pour vendre, modifier ou résilier un abonnement télécom en votre nom</li>
                  <li>✗ Ne perçoit <strong>AUCUNE</strong> commission ou rémunération d'un opérateur télécom</li>
                  <li>✗ N'a <strong>AUCUN</strong> accès aux systèmes internes, bases clients ou infrastructures des opérateurs</li>
                  <li>✗ N'agit <strong>JAMAIS</strong> au nom d'un opérateur, ni ne se substitue à leurs services officiels</li>
                </ul>
                <p><strong>AlloSupport.ma :</strong></p>
                <ul className="list-none space-y-1 ml-2">
                  <li>✓ Intervient <strong>UNIQUEMENT</strong> sur le matériel informatique du client (PC, routeur, réseau local)</li>
                  <li>✓ Oriente le client par ses propres analyses techniques</li>
                  <li>✓ Ne peut pas résoudre une panne d'infrastructure FAI (panne nationale, câble opérateur, coupure backbone)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-emerald-500" />
                §2. Clause contenu comparatif (articles de blog)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Les articles comparatifs publiés sur AlloSupport.ma (ex. comparatif Maroc Telecom vs Inwi vs Orange) sont rédigés à titre <strong>INFORMATIF</strong> sur la base de données publiquement disponibles (sources officielles, tests indépendants, retours clients).
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Les données de performance (vitesse, uptime, ping) sont issues de tests indépendants et ne constituent pas une garantie contractuelle.</li>
                <li>Les prix affichés sont ceux relevés à la date de publication. AlloSupport.ma ne garantit pas leur exactitude en temps réel.</li>
                <li>Les noms commerciaux "Maroc Telecom", "IAM", "Inwi", "Orange" sont des marques déposées appartenant à leurs propriétaires. Leur mention est effectuée dans le strict cadre du droit à l'information comparative.</li>
                <li>Aucun classement ou recommandation publié ne constitue un partenariat, un endossement ou une affiliation avec les opérateurs cités.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Wrench className="w-6 h-6 text-emerald-500" />
                §3. Clause "Service audit / conseil opérateur"
              </h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                AlloSupport.ma propose un service d'orientation gratuit pour aider les clients à choisir leur opérateur internet.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Ce service est un <strong>AVIS TECHNIQUE</strong> basé sur les données disponibles au moment de la consultation.</li>
                <li>AlloSupport.ma n'est pas un courtier en télécommunications et n'est soumis à aucune obligation de conseil réglementée au sens de la loi télécoms marocaine.</li>
                <li>La recommandation finale d'un opérateur relève de la <strong>seule décision du client</strong>.</li>
                <li>AlloSupport.ma décline toute responsabilité en cas d'insatisfaction liée au choix d'un opérateur, à une modification tarifaire postérieure ou à une panne du réseau de l'opérateur choisi.</li>
                <li>Les échanges WhatsApp dans le cadre de ce service sont informatifs et non contractuels.</li>
              </ul>
            </section>

            <section className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Wifi className="w-6 h-6 text-amber-600" />
                §4. Clause pannes réseau opérateur (protection critique)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lorsqu'AlloSupport.ma intervient pour un problème de connexion internet :
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Si la panne est identifiée comme provenant de l'<strong>infrastructure de l'opérateur</strong> (panne nationale, câble FAI, nœud réseau externe), l'intervention d'AlloSupport.ma se limite au <strong>diagnostic côté client</strong> (routeur, réseau local, paramètres PC).</li>
                <li>AlloSupport.ma <strong>ne peut pas résoudre</strong> une panne opérateur et ne peut pas être tenu responsable de la durée de rétablissement du service FAI.</li>
                <li>Dans ce cas, le paiement post-résultat est limité au <strong>diagnostic réalisé (forfait diagnostic 150 DH max)</strong>, indépendamment du rétablissement par l'opérateur.</li>
                <li>Le client est informé de cette limite avant toute intervention sur problème réseau.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Scale className="w-6 h-6 text-emerald-500" />
                §5. Responsabilité limitée sur données comparatives
              </h2>
              <p className="text-gray-700 leading-relaxed mb-2">
                AlloSupport.ma collecte des données de test réseau (vitesse, latence, uptime) de manière indépendante.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-1">
                <li>Ces données ne peuvent pas être utilisées par un opérateur comme preuve de préjudice.</li>
                <li>Elles constituent une opinion technique protégée par la liberté d'expression commerciale.</li>
                <li>AlloSupport.ma se réserve le droit de corriger ou mettre à jour ses articles sans obligation de notification préalable aux opérateurs cités.</li>
                <li>En cas de mise en demeure d'un opérateur concernant un article, AlloSupport.ma s'engage à <strong>examiner la demande sous 15 jours ouvrés</strong>.</li>
              </ul>
            </section>

            <section className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Contact</h2>
              <p className="text-gray-700">contact@allosupport.ma — 07 75 23 70 38</p>
            </section>

            <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4 justify-center">
              <Link href="/mentions-legales" className="text-emerald-600 hover:text-emerald-700 font-semibold">Mentions légales</Link>
              <span className="text-gray-400">•</span>
              <Link href="/cgv" className="text-emerald-600 hover:text-emerald-700 font-semibold">CGV</Link>
              <span className="text-gray-400">•</span>
              <Link href="/non-responsabilite" className="text-emerald-600 hover:text-emerald-700 font-semibold">Clause de non-responsabilité</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
