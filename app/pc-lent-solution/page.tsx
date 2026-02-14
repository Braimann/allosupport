import type { Metadata } from "next";

const whatsappBase = "https://wa.me/212775237038";

export const metadata: Metadata = {
  title: "PC Lent Solution - Accélération & Optimisation Windows | AlloSupport.ma",
  description:
    "PC très lent au Maroc ? Optimisation Windows, nettoyage, suppression programmes lourds et démarrage accéléré. Intervention à distance en 15 min, dès 250 DH.",
  alternates: {
    canonical: "https://allosupport.ma/pc-lent-solution",
  },
  openGraph: {
    title: "PC Lent Solution - Accélération PC au Maroc",
    description:
      "Votre PC est trop lent ? AlloSupport.ma optimise et accélère votre ordinateur à distance, sans perte de données. Pack complet dès 250 DH.",
    url: "https://allosupport.ma/pc-lent-solution",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "PC lent solution - optimisation Windows",
  serviceType: "Optimisation PC lent",
  url: "https://allosupport.ma/pc-lent-solution",
  provider: {
    "@type": "LocalBusiness",
    name: "AlloSupport.ma",
    telephone: "+212 7 75 23 70 38",
  },
  description:
    "Service d'optimisation pour PC lent au Maroc : nettoyage, désinstallation, optimisation démarrage et réglages Windows.",
};

export default function PcLentSolutionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-widest text-emerald-300 mb-3">
                PC lent solution
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                PC Lent Solution - Accélération & Optimisation Windows
              </h1>
              <p className="text-lg text-slate-100 mb-6">
                Votre PC met des minutes à démarrer, se bloque et vous fait perdre du temps ?
                Nous le <strong className="text-emerald-300">rendons rapide comme au
                premier jour</strong>, à distance, sans formater.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(
                    "Bonjour, mon PC est très lent. Je veux une optimisation complète à distance."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
                >
                  Rendre mon PC plus rapide
                </a>
                <p className="text-sm text-slate-300">
                  Pack optimisation dès{" "}
                  <span className="font-semibold text-emerald-300">250 DH</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi PC Lent Maroc 2026 ? — contenu enrichi SEO */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              5 Causes PC Lent Maroc 2026
            </h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Un <strong>ordinateur lent à Casablanca</strong> ou ailleurs au Maroc n&apos;est pas une fatalité. En 2026, les causes d&apos;un <strong>PC lent Maroc</strong> se regroupent autour de cinq facteurs récurrents. Les identifier permet de choisir la bonne <strong>solution PC qui rame</strong> — parfois gratuite, parfois avec un coup de main professionnel.
            </p>
            <ol className="list-decimal list-inside space-y-4 text-slate-700 mb-6">
              <li className="leading-relaxed">
                <strong>Chaleur et poussière</strong> : Au Maroc, la chaleur et la poussière encrassent les ventilateurs et les radiateurs. Une étude terrain montre que <strong>73 % des PC au Maroc</strong> présentent des ralentissements liés au refroidissement (poussière, pâte thermique sèche). Le processeur se met alors en throttling : le PC rame dès que la charge monte.
              </li>
              <li className="leading-relaxed">
                <strong>Fichiers temporaires et disque saturé</strong> : Windows et les navigateurs accumulent des dizaines de gigas de fichiers temporaires. Il n&apos;est pas rare de trouver <strong>plus de 20 Go de fichiers temporaires</strong> sur un PC qui n&apos;a jamais été nettoyé. Le disque travaille à 100 %, l&apos;ordinateur lent devient la norme.
              </li>
              <li className="leading-relaxed">
                <strong>Programmes au démarrage</strong> : Trop d&apos;applications lancées au démarrage (mises à jour, messageries, logiciels préinstallés) alourdissent le boot. Le PC met plusieurs minutes à être utilisable — classique pour un <strong>ordinateur lent Casablanca</strong> ou à Rabat après des années d&apos;utilisation.
              </li>
              <li className="leading-relaxed">
                <strong>Connexion et logiciels en arrière-plan</strong> : Un ADSL lent (Maroc Telecom, Orange, Inwi) donne l&apos;impression que tout rame, surtout si OneDrive, Google Drive ou les mises à jour Windows tournent en continu. Couplé à des logiciels pirates ou mal optimisés, le <strong>PC lent Maroc</strong> cumule réseau + CPU surchargés.
              </li>
              <li className="leading-relaxed">
                <strong>Logiciels pirates et malwares</strong> : Les cracks et logiciels piratés consomment des ressources et exposent à des virus ou miners. Ils ralentissent le système en tâche de fond. Une vraie <strong>solution PC qui rame</strong> passe par un nettoyage et, si besoin, une réinstallation propre avec des licences officielles.
              </li>
            </ol>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 mt-12">
              3 Solutions Gratuites à Essayer D&apos;abord
            </h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Avant de faire appel à un pro, trois astuces gratuites peuvent déjà améliorer un <strong>PC lent Maroc</strong>. À tester dans l&apos;ordre : nettoyage disque, démarrage, puis sécurité.
            </p>
            <ol className="list-decimal list-inside space-y-4 text-slate-700 mb-6">
              <li className="leading-relaxed">
                <strong>Nettoyage de disque (Disk Cleanup)</strong> : Dans Windows, cherchez &quot;Liberer de l&apos;espace disque&quot; ou &quot;Nettoyage de disque&quot;. Lancez l&apos;outil sur le disque C:, cochez Fichiers temporaires, Corbeille, Cache. Cela peut libérer plusieurs gigas et soulager un <strong>ordinateur lent Casablanca</strong> si le disque était proche du plein.
              </li>
              <li className="leading-relaxed">
                <strong>Désactiver les programmes au démarrage</strong> : Paramètres → Applications → Démarrage. Désactivez tout ce qui n&apos;est pas indispensable au lancement de Windows (messageries, logiciels de mise à jour, outils inutiles). Redémarrez : le boot est souvent plus rapide. Simple et efficace pour une première <strong>solution PC qui rame</strong>.
              </li>
              <li className="leading-relaxed">
                <strong>Scan antivirus et désinstallation des programmes inutiles</strong> : Lancez Windows Defender (analyse complète) pour écarter virus et malwares. En parallèle, désinstallez les logiciels que vous n&apos;utilisez plus (Paramètres → Applications). Moins de programmes = moins de processus en arrière-plan = PC plus réactif.
              </li>
            </ol>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Si après ces trois étapes votre machine reste lente, le problème est souvent plus profond : registre, tâches planifiées, pilotes ou accumulation de plusieurs années. C&apos;est le moment d&apos;envisager une optimisation professionnelle.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 mt-12">
              Quand Appeler AlloSupport ?
            </h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Quand les astuces gratuites ne suffisent plus, une <strong>solution PC qui rame</strong> fiable est l&apos;optimisation à distance. AlloSupport intervient sans déplacement : nous prenons la main sur votre PC de façon sécurisée, nous nettoyons en profondeur (fichiers temporaires, programmes inutiles, démarrage), nous optimisons Windows et les réglages. <strong>On optimise à 250 DH sans formater</strong> : vos fichiers restent en place, votre PC retrouve en général une réactivité bien meilleure.
            </p>
            <p className="text-slate-700 mb-4 leading-relaxed">
              Nous garantissons un PC jusqu&apos;à <strong>3 fois plus rapide</strong> après l&apos;intervention (démarrage et usage quotidien). Si vous êtes à Casablanca, Rabat ou ailleurs au Maroc et que votre ordinateur lent vous fait perdre du temps chaque jour, une seule séance d&apos;optimisation peut tout changer. Réponse sous 15 minutes par WhatsApp, intervention le jour même possible.
            </p>
            <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 mt-6">
              <p className="text-slate-800 font-semibold mb-2">
                Si les astuces gratuites ont échoué →
              </p>
              <p className="text-slate-700 mb-4">
                AlloSupport optimise votre PC à distance pour <strong>250 DH</strong>. PC jusqu&apos;à <strong>3× plus rapide</strong> garanti, sans formatage. Contactez-nous par WhatsApp pour une intervention sous 15 min.
              </p>
              <a
                href={`${whatsappBase}?text=${encodeURIComponent(
                  "Bonjour, mon PC est toujours lent après les astuces. Je veux une optimisation complète à distance (250 DH)."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-xl transition"
              >
                Optimiser mon PC — 250 DH
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Ce que nous faisons pendant l&apos;optimisation
            </h2>
            <p className="text-slate-700 mb-4 leading-relaxed">
              À distance, nous réalisons un <strong>nettoyage complet et une optimisation profonde</strong> : désinstallation des programmes inutiles, désactivation des tâches lourdes au démarrage, nettoyage disque (fichiers temporaires, cache), réglages avancés de Windows et vérification des pilotes. L&apos;objectif : que votre PC démarre plus vite et réagisse rapidement, sans changer de matériel.
            </p>
          </div>
        </section>

        {/* Pricing simplifié (3 packs) */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-10">
              Packs optimisation PC
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Nettoyage simple</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  150 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Nettoyage de base et suppression fichiers temporaires.
                </p>
              </div>
              <div className="border-2 border-emerald-500 rounded-2xl p-6 bg-emerald-50 shadow-md scale-105">
                <p className="inline-block text-xs font-semibold bg-emerald-500 text-white px-2 py-1 rounded-full mb-3">
                  PC lent solution
                </p>
                <h3 className="text-lg font-semibold mb-2">
                  Optimisation complète (recommandé)
                </h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  250 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Nettoyage, optimisation démarrage et réglages Windows.
                </p>
              </div>
              <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                <h3 className="text-lg font-semibold mb-2">Pack performance Pro</h3>
                <p className="text-3xl font-bold text-slate-900 mb-2">
                  499 <span className="text-base font-medium">DH</span>
                </p>
                <p className="text-sm text-slate-600 mb-4">
                  Pour les PC de travail intensif (graphisme, comptabilité, etc.).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ courte */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              FAQ - PC lent solution
            </h2>
            <div className="border border-slate-200 rounded-xl p-4 bg-white">
              <h3 className="font-semibold text-slate-900 mb-1">
                Est‑ce que je vais perdre mes fichiers ?
              </h3>
              <p className="text-slate-700 text-sm">
                Non. Nous ne supprimons jamais vos documents, photos ou dossiers
                personnels pendant l&apos;optimisation.
              </p>
            </div>
            <div className="border border-slate-200 rounded-xl p-4 bg-white">
              <h3 className="font-semibold text-slate-900 mb-1">
                Combien de temps dure l&apos;intervention ?
              </h3>
              <p className="text-slate-700 text-sm">
                En moyenne entre 45 et 90 minutes selon l&apos;état de votre PC et la
                quantité de programmes installés.
              </p>
            </div>
          </div>
        </section>

        {/* Liens internes */}
        <section className="py-12 border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Services liés</h3>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>
                  <a href="/depannage-informatique" className="hover:underline">
                    Dépannage informatique à distance
                  </a>
                </li>
                <li>
                  <a href="/virus-ordinateur-maroc" className="hover:underline">
                    Suppression virus & malware
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Villes principales</h3>
              <ul className="text-sm text-emerald-700 space-y-1">
                <li>
                  <a href="/casablanca" className="hover:underline">
                    Dépannage PC Casablanca
                  </a>
                </li>
                <li>
                  <a href="/rabat" className="hover:underline">
                    Dépannage informatique Rabat
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

