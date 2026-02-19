import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertTriangle, FileText, HardDrive, Wifi, BookOpen, FileSpreadsheet, MessageCircle, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Clause de non-responsabilité | AlloSupport.ma",
  description: "Clause de non-responsabilité - Limites de garantie, pannes FAI, perte de données, dommages indirects, force majeure.",
  robots: "index, follow",
  alternates: { canonical: "https://allosupport.ma/non-responsabilite" },
};

export default function NonResponsabilitePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-2xl mb-6 shadow-lg">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Clause de non-responsabilité
            </h1>
            <p className="text-lg text-gray-600" suppressHydrationWarning>
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            <p className="text-gray-700 leading-relaxed">
              La présente page précise les limites de responsabilité d'AlloSupport.ma dans le cadre de ses prestations et de l'utilisation de son site. Elle complète les Mentions légales, les CGV et les CGU.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <HardDrive className="w-6 h-6 text-amber-500" />
                1. Résultats non garantis sur matériel endommagé
              </h2>
              <p className="text-gray-700 leading-relaxed">
                AlloSupport.ma ne garantit pas de résultat sur un équipement <strong>physiquement endommagé</strong> (chute, choc, inondation, surtension, usure avancée). Les prestations de récupération de données, dépannage ou formatage sont réalisées au mieux des possibilités techniques ; l'absence de résultat ou un résultat partiel n'engage pas la responsabilité d'AlloSupport.ma lorsque l'état du support le justifie.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Wifi className="w-6 h-6 text-amber-500" />
                2. Pannes FAI / opérateur : hors périmètre
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Les pannes relevant de l'infrastructure de l'opérateur (FAI, Maroc Telecom, Inwi, Orange Maroc, backbone, nœud réseau) sont <strong>hors périmètre</strong> d'AlloSupport.ma. AlloSupport.ma n'est pas responsable des délais de rétablissement ni des défaillances des réseaux tiers. Voir la page dédiée <Link href="/operateurs-telecom" className="text-emerald-600 hover:text-emerald-700 font-semibold">Opérateurs télécom</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-amber-500" />
                3. Perte de données si le client n'a pas sauvegardé
              </h2>
              <p className="text-gray-700 leading-relaxed">
                En cas de formatage, réinstallation ou intervention pouvant affecter les données, la <strong>sauvegarde préalable incombe au client</strong>. AlloSupport.ma informe le client des risques ; si le client valide l'intervention sans avoir sauvegardé ses données, AlloSupport.ma ne peut être tenu responsable de la perte de données.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-500" />
                4. Dommages indirects
              </h2>
              <p className="text-gray-700 leading-relaxed">
                AlloSupport.ma n'est pas responsable des <strong>dommages indirects</strong>, notamment le manque à gagner, la perte d'exploitation, la perte de chiffre d'affaires, les préjudices commerciaux ou immatériels, sauf faute lourde dûment constatée et dans les limites du droit marocain.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-amber-500" />
                5. Contenu du blog
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Le contenu du blog (articles comparatifs, guides, prix indicatifs) est <strong>informatif et non contractuel</strong>. Il ne constitue pas un engagement d'AlloSupport.ma et peut être modifié sans préavis. Aucune décision ne doit être prise sur la seule base de ces contenus.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FileSpreadsheet className="w-6 h-6 text-amber-500" />
                6. Devis générés par l'outil
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Les devis générés via l'outil en ligne sont <strong>non opposables à AlloSupport.ma</strong> tant qu'ils n'ont pas été signés ou émis officiellement par un technicien AlloSupport.ma. L'outil est fourni "en l'état" ; la responsabilité d'AlloSupport.ma ne s'étend pas à l'usage fiscal ou comptable que le client en fait.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-amber-500" />
                7. Chatbot : non contractuel
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Les réponses du chatbot intégré au site sont <strong>indicatives et non contractuelles</strong>. AlloSupport.ma décline toute responsabilité pour une décision prise sur la seule base d'une réponse du chatbot.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <Zap className="w-6 h-6 text-amber-500" />
                8. Force majeure
              </h2>
              <p className="text-gray-700 leading-relaxed">
                AlloSupport.ma n'est pas responsable des retards, indisponibilités ou impossibilités d'exécution résultant de cas de <strong>force majeure</strong>, notamment : panne réseau nationale, coupure électrique prolongée, restrictions gouvernementales, catastrophe naturelle, conflit, pandémie, ou tout événement indépendant de la volonté d'AlloSupport.ma.
              </p>
            </section>

            <section className="bg-amber-50 rounded-xl p-6 border border-amber-200">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Contact</h2>
              <p className="text-gray-700">contact@allosupport.ma — 07 75 23 70 38</p>
            </section>

            <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4 justify-center">
              <Link href="/mentions-legales" className="text-emerald-600 hover:text-emerald-700 font-semibold">Mentions légales</Link>
              <span className="text-gray-400">•</span>
              <Link href="/cgv" className="text-emerald-600 hover:text-emerald-700 font-semibold">CGV</Link>
              <span className="text-gray-400">•</span>
              <Link href="/cgu" className="text-emerald-600 hover:text-emerald-700 font-semibold">CGU</Link>
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
