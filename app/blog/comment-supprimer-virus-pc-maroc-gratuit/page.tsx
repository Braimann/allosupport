import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, AlertTriangle, CheckCircle, MessageCircle, Download, Clock, Zap, Monitor, Lock, RefreshCw, Key, Settings, FileText, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Comment Supprimer Virus PC Maroc Gratuit 2026 - 3 Méthodes | AlloSupport",
  description: "Guide complet 2026 pour supprimer virus, malware gratuitement au Maroc. 3 méthodes testées (Windows Defender, Malwarebytes). Intervention pro 250 DH si échec.",
  keywords: "supprimer virus pc maroc, nettoyage virus gratuit casablanca, malware removal maroc, pc infecté rabat, enlever pubs intempestives",
  alternates: { canonical: "https://allosupport.ma/blog/comment-supprimer-virus-pc-maroc-gratuit" },
  openGraph: {
    title: "Supprimer Virus PC Maroc Gratuit - Guide 2026",
    description: "Guide complet 2026 pour supprimer virus, malware gratuitement au Maroc. 3 méthodes testées (Windows Defender, Malwarebytes). Intervention pro 250 DH si échec.",
    images: [{ url: "/images/blog/supprimer-virus-maroc-og.jpg", width: 1200, height: 630 }],
    type: "article",
    locale: "fr_MA"
  }
};

export default function VirusRemovalGuide() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Comment Supprimer Virus PC Maroc Gratuit 2026",
        "author": { "@type": "Organization", "name": "AlloSupport Maroc" },
        "datePublished": "2026-02-14",
        "dateModified": "2026-02-14",
        "wordCount": 2400,
        "inLanguage": "fr-MA",
        "image": "https://allosupport.ma/images/blog/supprimer-virus-maroc-og.jpg",
        "publisher": {
          "@type": "Organization",
          "name": "AlloSupport.ma",
          "logo": { "@type": "ImageObject", "url": "https://allosupport.ma/logo.png" }
        }
      },
      {
        "@type": "HowTo",
        "name": "Supprimer virus PC gratuitement",
        "step": [
          { "@type": "HowToStep", "name": "Windows Defender", "text": "Ouvrir Sécurité Windows > Analyse complète" },
          { "@type": "HowToStep", "name": "Malwarebytes", "text": "Télécharger > Installer > Scan complet" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Combien coûte suppression virus Casablanca ?", "acceptedAnswer": { "@type": "Answer", "text": "Si vous le faites vous-même avec ce guide, c'est gratuit. Si vous passez par un professionnel comme AlloSupport, le tarif est de 250 DH pour un nettoyage complet avec garantie de résultat. En magasin physique à Derb Ghallef, cela varie entre 100 et 300 DH mais sans garantie de sécurité des données." }},
          { "@type": "Question", "name": "Suppression sans formatage possible ?", "acceptedAnswer": { "@type": "Answer", "text": "Non, dans 95% des cas, le nettoyage se fait sans formatage. Vos photos, documents et logiciels restent intacts. Seuls les fichiers infectés (virus) sont supprimés. Si un virus a endommagé vos fichiers (Ransomware), c'est plus complexe et nécessite une intervention spécialisée." }},
          { "@type": "Question", "name": "Windows Defender suffit-il pour protéger mon PC ?", "acceptedAnswer": { "@type": "Answer", "text": "Pour un usage basique, oui, il est devenu très performant. Cependant, il peut laisser passer certains 'Adwares' (pubs) ou Ransomwares sophistiqués. Nous recommandons de le compléter avec un scan mensuel gratuit de Malwarebytes." }},
          { "@type": "Question", "name": "Mon PC est toujours lent après le nettoyage, que faire ?", "acceptedAnswer": { "@type": "Answer", "text": "Si les virus sont partis mais que la lenteur persiste, le problème peut être matériel (disque dur fatigué, manque de RAM) ou logiciel (trop de programmes au démarrage). Consultez notre guide d'optimisation ou notre service de dépannage à distance." }},
          { "@type": "Question", "name": "Les virus 'raccourcis' sur clé USB, c'est quoi ?", "acceptedAnswer": { "@type": "Answer", "text": "C'est un classique au Maroc. Le virus cache vos vrais fichiers et les remplace par des raccourcis. Si vous cliquez dessus, vous activez le virus sur votre PC. Vos fichiers sont toujours là, juste cachés ! Un outil comme UsbFix peut les restaurer." }},
          { "@type": "Question", "name": "Avast gratuit est-il meilleur que Windows Defender ?", "acceptedAnswer": { "@type": "Answer", "text": "En 2026, non. Windows Defender est mieux intégré, plus léger et sans publicités incessantes. Avast gratuit a tendance à ralentir le PC pour vous vendre la version payante. Gardez Defender." }},
          { "@type": "Question", "name": "Comment savoir si j'ai un logiciel espion (Spyware) ?", "acceptedAnswer": { "@type": "Answer", "text": "Les signes : batterie qui se vide vite, ventilateur qui tourne à fond sans raison, curseur souris qui bouge, webcam qui s'allume. Un scan Malwarebytes détecte généralement ces espions." }},
          { "@type": "Question", "name": "Le formatage est-il la seule solution ?", "acceptedAnswer": { "@type": "Answer", "text": "Absolument pas. Le formatage est la solution de 'facilité' radicale (on rase tout). Un bon technicien nettoie le système chirurgicalement pour préserver vos données et vos logiciels installés." }},
          { "@type": "Question", "name": "Intervenez-vous à Rabat ou Marrakech ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, notre service est 100% à distance. Nous prenons la main sur votre PC via internet (AnyDesk) de manière sécurisée, que vous soyez à Casablanca, Rabat, Tanger, Marrakech ou n'importe où au Maroc." }},
          { "@type": "Question", "name": "Garantissez-vous le nettoyage ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui. Pour notre service payant (250 DH), nous offrons une garantie 'Satisfait ou Remboursé'. Si le virus revient sous 30 jours, nous le nettoyons à nouveau gratuitement." }}
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      
      {/* WhatsApp Sticky Mobile */}
      <a
        href="https://wa.me/212775237038?text=Bonjour%20AlloSupport%2C%20j%27ai%20besoin%20d%27aide"
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 lg:hidden flex items-center justify-center w-14 h-14 bg-emerald-500 rounded-full shadow-lg text-white animate-bounce"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
      
      <main className="min-h-screen bg-gray-50 pt-32 sm:pt-40 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-slate-600 flex items-center gap-2">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Accueil</Link>
            <span className="text-slate-400">/</span>
            <Link href="/blog" className="hover:text-emerald-600 transition-colors">Blog</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-medium">Supprimer Virus PC Maroc</span>
          </nav>

          {/* Hero Section */}
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Comment Supprimer Virus PC Maroc Gratuit 2026
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              PC infecté ? Découvrez 3 méthodes gratuites testées (Windows Defender, Malwarebytes) pour nettoyer votre ordinateur en 45 min, sans formatage. Guide spécial Maroc 2026.
            </p>
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-8 bg-slate-200">
              <Image 
                src="/images/blog/supprimer-virus-maroc-hero.svg" 
                fill
                alt="Guide suppression virus Maroc 2026" 
                className="object-cover"
                priority 
              />
            </div>
          </header>

          {/* Intro */}
          <section className="prose prose-lg max-w-none text-slate-700 mb-12">
            <p>
              Votre PC ralentit soudainement ? Des publicités apparaissent partout sur votre écran ? Votre navigateur a changé de page d'accueil tout seul ? 
              Malheureusement, vous êtes probablement infecté. Au Maroc, avec l'utilisation fréquente de clés USB dans les cybercafés et les logiciels crackés, 
              c'est un problème très courant.
            </p>
            <p>
              La bonne nouvelle ? Dans <strong>95% des cas</strong>, un nettoyage complet est possible gratuitement et <strong>sans formatage</strong>. 
              Ce guide vous présente 3 méthodes testées et approuvées sur des centaines de PC marocains pour vous débarrasser définitivement des virus.
            </p>

            {/* CTA Early */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8 not-prose shadow-sm">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-amber-900 mb-2">Le virus résiste ou vous avez peur de perdre vos données ?</h3>
                  <p className="text-amber-800 mb-3">
                    Notre équipe d'experts intervient à distance en 15 minutes. Nettoyage garanti satisfait ou remboursé.
                  </p>
                  <Link 
                    href="/services/suppression-virus" 
                    className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-800 transition-colors"
                  >
                    Voir le service pro (250 DH) <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Table of Contents */}
          <section className="bg-white rounded-xl border border-slate-200 p-6 mb-12 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-emerald-600">📋</span> Dans ce guide
            </h2>
            <ul className="space-y-2 text-slate-700">
              <li>
                <a href="#signes" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                  <span className="font-mono text-emerald-500 font-bold">01.</span> 7 Signes que votre PC est infecté
                </a>
              </li>
              <li>
                <a href="#pourquoi-maroc" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                  <span className="font-mono text-emerald-500 font-bold">02.</span> Pourquoi c'est si fréquent au Maroc ?
                </a>
              </li>
              <li>
                <a href="#methode-1" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                  <span className="font-mono text-emerald-500 font-bold">03.</span> Méthode 1 : Windows Defender (Gratuit)
                </a>
              </li>
              <li>
                <a href="#methode-2" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                  <span className="font-mono text-emerald-500 font-bold">04.</span> Méthode 2 : Malwarebytes (Recommandée)
                </a>
              </li>
              <li>
                <a href="#methode-3" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                  <span className="font-mono text-emerald-500 font-bold">05.</span> Méthode 3 : Mode Sans Échec
                </a>
              </li>
              <li>
                <a href="#prevention" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                  <span className="font-mono text-emerald-500 font-bold">06.</span> Comment ne plus jamais être infecté
                </a>
              </li>
              <li>
                <a href="#apres-nettoyage" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                  <span className="font-mono text-emerald-500 font-bold">07.</span> Étapes après le nettoyage
                </a>
              </li>
              <li>
                <a href="#faq" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                  <span className="font-mono text-emerald-500 font-bold">08.</span> Questions fréquentes (FAQ)
                </a>
              </li>
            </ul>
          </section>

          {/* 7 Signes */}
          <section id="signes" className="mb-14 scroll-mt-28">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 text-xl">1</span>
              7 Signes que votre PC est infecté
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700">
              <p>
                Parfois le virus est silencieux, mais souvent il laisse des traces évidentes. Si vous rencontrez 2 ou 3 de ces symptômes, l'infection est quasi-certaine :
              </p>
              <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0 my-6">
                <li className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex gap-3">
                  <Monitor className="h-6 w-6 text-red-500 shrink-0" />
                  <span><strong>Popups incessants :</strong> Des publicités s'ouvrent même quand vous ne naviguez pas.</span>
                </li>
                <li className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex gap-3">
                  <Clock className="h-6 w-6 text-red-500 shrink-0" />
                  <span><strong>Lenteur extrême :</strong> Le PC met 10 minutes à démarrer ou à ouvrir Word.</span>
                </li>
                <li className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex gap-3">
                  <Shield className="h-6 w-6 text-red-500 shrink-0" />
                  <span><strong>Antivirus désactivé :</strong> Impossible de relancer Windows Defender ou votre antivirus.</span>
                </li>
                <li className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex gap-3">
                  <Zap className="h-6 w-6 text-red-500 shrink-0" />
                  <span><strong>Programmes inconnus :</strong> Des logiciels que vous n'avez jamais installés apparaissent.</span>
                </li>
              </ul>
              <p>
                <strong>Contexte Maroc :</strong> Attention aux fichiers sur les clés USB venant de Derb Ghallef ou des cybercafés, c'est le vecteur #1 d'infection par les virus "raccourcis" et les ransomwares.
              </p>
            </div>
          </section>

          {/* Pourquoi au Maroc */}
          <section id="pourquoi-maroc" className="mb-14 scroll-mt-28 bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 text-lg">2</span>
              Pourquoi c'est si fréquent au Maroc ?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                <div className="text-4xl mb-3">💾</div>
                <h3 className="font-bold text-slate-900 mb-2">Clés USB Cybercafés</h3>
                <p className="text-sm text-slate-600">L'impression de documents dans les cybercafés contamine des milliers de clés USB chaque jour via les virus "raccourcis".</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                <div className="text-4xl mb-3">🏴‍☠️</div>
                <h3 className="font-bold text-slate-900 mb-2">Logiciels Crackés</h3>
                <p className="text-sm text-slate-600">Le téléchargement de cracks pour Office ou Photoshop est la porte d'entrée royale pour les chevaux de Troie.</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                <div className="text-4xl mb-3">💻</div>
                <h3 className="font-bold text-slate-900 mb-2">PC FreeDOS</h3>
                <p className="text-sm text-slate-600">Beaucoup de PC vendus (Jumia/Marjane) sont sans Windows. L'installation non officielle par le vendeur inclut parfois des malwares.</p>
              </div>
            </div>
          </section>

          {/* Méthode 1 */}
          <section id="methode-1" className="mb-14 scroll-mt-28">
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 sm:p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 text-xl">3</span>
                Méthode 1 : Windows Defender
              </h2>
              
              <div className="flex flex-wrap gap-4 mb-6 text-sm font-medium">
                <span className="bg-white px-3 py-1 rounded-full border border-emerald-200 text-emerald-800">Difficulté: Facile</span>
                <span className="bg-white px-3 py-1 rounded-full border border-emerald-200 text-emerald-800">Durée: 15-30 min</span>
                <span className="bg-white px-3 py-1 rounded-full border border-emerald-200 text-emerald-800">Efficacité: 75%</span>
              </div>

              <ol className="space-y-4 list-decimal list-inside text-slate-800 mb-8 font-medium">
                <li className="pl-2">Ouvrez le menu Démarrer et tapez <strong>"Sécurité Windows"</strong>.</li>
                <li className="pl-2">Cliquez sur <strong>"Protection contre les virus et menaces"</strong>.</li>
                <li className="pl-2">Cliquez sur <strong>"Options d'analyse"</strong> puis choisissez <strong>"Analyse complète"</strong>.</li>
                <li className="pl-2">Cliquez sur "Analyser maintenant" et patientez (20 à 45 minutes).</li>
                <li className="pl-2">Si des menaces sont trouvées, cliquez sur <strong>"Supprimer"</strong> ou "Mettre en quarantaine".</li>
              </ol>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-green-100 p-4 rounded-lg text-green-900 flex gap-2">
                  <CheckCircle className="h-5 w-5 shrink-0" />
                  <div><strong>Avantages :</strong> Gratuit, déjà installé, en français, ne ralentit pas le PC après usage.</div>
                </div>
                <div className="bg-amber-100 p-4 rounded-lg text-amber-900 flex gap-2">
                  <AlertTriangle className="h-5 w-5 shrink-0" />
                  <div><strong>Limites :</strong> Rate souvent les adwares (pubs) et peut être désactivé par des virus avancés.</div>
                </div>
              </div>
            </div>
          </section>

          {/* Méthode 2 */}
          <section id="methode-2" className="mb-14 scroll-mt-28">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 text-xl">4</span>
              Méthode 2 : Malwarebytes (Recommandée)
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700">
              <p>
                C'est l'outil de référence que nous utilisons souvent en complément. La version gratuite est très puissante pour le nettoyage ponctuel.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 my-6 text-sm text-red-800">
                <strong>⚠️ ATTENTION IMPORTANTE :</strong> N'essayez JAMAIS de télécharger une version "crackée" de Malwarebytes sur des sites de téléchargement marocains ou torrents. Ces versions contiennent souvent des virus encore pires ! Utilisez uniquement le site officiel.
              </div>

              <h3 className="text-xl font-bold text-slate-900 mt-6 mb-4">Les étapes pas à pas :</h3>
              <ol className="list-decimal pl-5 space-y-3">
                <li>Allez sur le site officiel <strong>fr.malwarebytes.com</strong> et téléchargez la version gratuite.</li>
                <li>Installez le logiciel (décochez "Browser Guard" si vous ne le voulez pas).</li>
                <li>Lancez le logiciel et cliquez sur le gros bouton bleu <strong>"Analyser"</strong>.</li>
                <li>L'analyse prendra entre 15 et 60 minutes selon la vitesse de votre disque dur.</li>
                <li>Une fois terminé, cliquez sur <strong>"Mettre en quarantaine"</strong> pour tout supprimer.</li>
                <li><strong>Redémarrez impérativement</strong> votre ordinateur pour finaliser le nettoyage.</li>
              </ol>
              
              <p className="mt-4">
                <em>Conseil pro :</em> Pour être sûr à 100%, relancez un deuxième scan après le redémarrage. S'il revient vide, c'est gagné !
              </p>
            </div>
          </section>

          {/* Méthode 3 */}
          <section id="methode-3" className="mb-14 scroll-mt-28">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 text-xl">5</span>
              Méthode 3 : Le Mode Sans Échec
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700">
              <p>
                Si les méthodes précédentes échouent ou si le virus empêche l'installation de Malwarebytes, vous devez passer en "Mode Sans Échec". C'est un mode spécial de Windows où seuls les programmes essentiels démarrent, empêchant le virus de se lancer.
              </p>
              <h3 className="text-xl font-bold text-slate-900 mt-6 mb-4">Comment faire :</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Maintenez la touche <strong>MAJ (Shift)</strong> enfoncée et cliquez sur <strong>Redémarrer</strong> dans le menu Démarrer.</li>
                <li>L'écran bleu "Choisir une option" apparaît. Allez dans <strong>Dépannage</strong> {" > "} <strong>Options avancées</strong> {" > "} <strong>Paramètres</strong> {" > "} <strong>Redémarrer</strong>.</li>
                <li>Au redémarrage, appuyez sur la touche <strong>4</strong> ou <strong>F4</strong> pour lancer le Mode Sans Échec.</li>
                <li>Une fois sur le bureau (qui sera noir/bizarre, c'est normal), relancez les analyses antivirus (Méthode 1 ou 2).</li>
              </ul>
            </div>
          </section>

          {/* Après Nettoyage */}
          <section id="apres-nettoyage" className="mb-14 scroll-mt-28">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 text-xl">6</span>
              Étapes cruciales après le nettoyage
            </h2>
            <p className="text-slate-700 mb-6 text-lg">
              Une fois le virus supprimé, ne criez pas victoire trop vite. Vous devez sécuriser votre PC pour éviter une réinfection immédiate.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <RefreshCw className="h-8 w-8 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">1. Réinitialiser les navigateurs</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Les virus modifient souvent votre page d'accueil ou installent des extensions espionnes. Remettez Chrome/Edge à zéro.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <Key className="h-8 w-8 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">2. Changer vos mots de passe</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Si vous aviez un "Keylogger", vos mots de passe (Facebook, Gmail, Banque) ont pu être volés. Changez-les depuis un autre appareil (téléphone).
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <Settings className="h-8 w-8 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">3. Vérifier le démarrage</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Ouvrez le Gestionnaire des tâches (Ctrl+Maj+Echap) {" > "} Démarrage. Désactivez tout ce qui semble suspect ou inutile.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <Shield className="h-8 w-8 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">4. Installer un bon antivirus</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Windows Defender est bien, mais pas infaillible. Consultez notre comparatif pour choisir la meilleure protection gratuite.
                </p>
                <Link href="/blog/meilleur-antivirus-gratuit-maroc-2026-comparatif" className="text-emerald-600 font-bold text-sm hover:underline flex items-center gap-1">
                  Voir le comparatif <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="text-blue-900 text-sm">
                <strong>Pour les entreprises :</strong> Si vous gérez une PME, la sécurité est plus complexe. 
                <Link href="/blog/cybersecurite-pme-maroc-guide-2026" className="text-blue-700 font-bold hover:underline ml-1">
                  Lisez notre guide complet sur la cybersécurité PME au Maroc (2026).
                </Link>
              </p>
            </div>
          </section>

          {/* Prévention */}
          <section id="prevention" className="mb-14 scroll-mt-28 bg-emerald-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              🛡️ Comment ne plus jamais être infecté ?
            </h2>
            <p className="text-emerald-800 mb-6">
              Nettoyer c'est bien, prévenir c'est mieux. Voici les 3 règles d'or pour un PC sain au Maroc :
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="font-bold text-slate-900 mb-2">1. Clés USB</div>
                <p className="text-sm text-slate-600">Ne branchez jamais votre clé USB dans un cybercafé ou une imprimerie sans la scanner immédiatement après.</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="font-bold text-slate-900 mb-2">2. Mises à jour</div>
                <p className="text-sm text-slate-600">Ne désactivez jamais Windows Update. Les mises à jour corrigent les failles de sécurité.</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="font-bold text-slate-900 mb-2">3. AdBlock</div>
                <p className="text-sm text-slate-600">Installez "uBlock Origin" sur votre navigateur pour bloquer les fausses pubs de téléchargement.</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-14 scroll-mt-28">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Questions Fréquentes (FAQ)</h2>
            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none bg-white hover:bg-slate-50 transition-colors">
                  <span className="font-bold text-slate-900">Combien coûte la suppression de virus à Casablanca ?</span>
                  <ChevronDown className="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                  Si vous le faites vous-même avec ce guide, c'est <strong>gratuit</strong>. Si vous passez par un professionnel comme AlloSupport, le tarif est de <strong>250 DH</strong> pour un nettoyage complet avec garantie de résultat. En magasin physique à Derb Ghallef, cela varie entre 100 et 300 DH mais sans garantie de sécurité des données.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none bg-white hover:bg-slate-50 transition-colors">
                  <span className="font-bold text-slate-900">Est-ce que je vais perdre mes données ?</span>
                  <ChevronDown className="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                  Non, dans 95% des cas, le nettoyage se fait <strong>sans formatage</strong>. Vos photos, documents et logiciels restent intacts. Seuls les fichiers infectés (virus) sont supprimés. Si un virus a endommagé vos fichiers (Ransomware), c'est plus complexe et nécessite une intervention spécialisée.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none bg-white hover:bg-slate-50 transition-colors">
                  <span className="font-bold text-slate-900">Windows Defender suffit-il pour protéger mon PC ?</span>
                  <ChevronDown className="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                  Pour un usage basique, oui, il est devenu très performant. Cependant, il peut laisser passer certains "Adwares" (pubs) ou Ransomwares sophistiqués. Nous recommandons de le compléter avec un scan mensuel gratuit de Malwarebytes.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none bg-white hover:bg-slate-50 transition-colors">
                  <span className="font-bold text-slate-900">Mon PC est toujours lent après le nettoyage, que faire ?</span>
                  <ChevronDown className="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                  Si les virus sont partis mais que la lenteur persiste, le problème peut être matériel (disque dur fatigué, manque de RAM) ou logiciel (trop de programmes au démarrage). Consultez notre guide d'optimisation ou notre service de dépannage à distance.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none bg-white hover:bg-slate-50 transition-colors">
                  <span className="font-bold text-slate-900">Les virus "raccourcis" sur clé USB, c'est quoi ?</span>
                  <ChevronDown className="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                  C'est un classique au Maroc. Le virus cache vos vrais fichiers et les remplace par des raccourcis. Si vous cliquez dessus, vous activez le virus sur votre PC. Vos fichiers sont toujours là, juste cachés ! Un outil comme UsbFix peut les restaurer.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none bg-white hover:bg-slate-50 transition-colors">
                  <span className="font-bold text-slate-900">Avast gratuit est-il meilleur que Windows Defender ?</span>
                  <ChevronDown className="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                  En 2026, non. Windows Defender est mieux intégré, plus léger et sans publicités incessantes. Avast gratuit a tendance à ralentir le PC pour vous vendre la version payante. Gardez Defender.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none bg-white hover:bg-slate-50 transition-colors">
                  <span className="font-bold text-slate-900">Comment savoir si j'ai un logiciel espion (Spyware) ?</span>
                  <ChevronDown className="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                  Les signes : batterie qui se vide vite, ventilateur qui tourne à fond sans raison, curseur souris qui bouge, webcam qui s'allume. Un scan Malwarebytes détecte généralement ces espions.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none bg-white hover:bg-slate-50 transition-colors">
                  <span className="font-bold text-slate-900">Le formatage est-il la seule solution ?</span>
                  <ChevronDown className="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                  Absolument pas. Le formatage est la solution de "facilité" radicale (on rase tout). Un bon technicien nettoie le système chirurgicalement pour préserver vos données et vos logiciels installés.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none bg-white hover:bg-slate-50 transition-colors">
                  <span className="font-bold text-slate-900">Intervenez-vous à Rabat ou Marrakech ?</span>
                  <ChevronDown className="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                  Oui, notre service est 100% à distance. Nous prenons la main sur votre PC via internet (AnyDesk) de manière sécurisée, que vous soyez à Casablanca, Rabat, Tanger, Marrakech ou n'importe où au Maroc.
                </div>
              </details>

              <details className="group bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none bg-white hover:bg-slate-50 transition-colors">
                  <span className="font-bold text-slate-900">Garantissez-vous le nettoyage ?</span>
                  <ChevronDown className="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                  Oui. Pour notre service payant (250 DH), nous offrons une garantie "Satisfait ou Remboursé". Si le virus revient sous 30 jours, nous le nettoyons à nouveau gratuitement.
                </div>
              </details>
            </div>
          </section>

          {/* Articles Connexes */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Articles recommandés pour vous</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/meilleur-antivirus-gratuit-maroc-2026-comparatif" className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-slate-100 relative">
                  {/* Placeholder image */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    <Shield className="h-12 w-12" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">Comparatif Antivirus Gratuit 2026</h3>
                  <p className="text-sm text-slate-600 mb-4">Lequel choisir pour protéger votre PC au Maroc sans payer ?</p>
                  <span className="text-emerald-600 text-sm font-bold flex items-center gap-1">Lire l'article <ChevronRight className="h-4 w-4" /></span>
                </div>
              </Link>

              <Link href="/blog/cybersecurite-pme-maroc-guide-2026" className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-slate-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    <Lock className="h-12 w-12" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">Guide Cybersécurité PME 2026</h3>
                  <p className="text-sm text-slate-600 mb-4">Protégez votre entreprise contre les ransomwares et le piratage.</p>
                  <span className="text-emerald-600 text-sm font-bold flex items-center gap-1">Lire l'article <ChevronRight className="h-4 w-4" /></span>
                </div>
              </Link>

              <Link href="/blog/pc-lent-10-solutions-rapides-maroc" className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 bg-slate-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    <Monitor className="h-12 w-12" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">PC Lent ? Solutions</h3>
                  <p className="text-sm text-slate-600 mb-4">Si ce n'est pas un virus, pourquoi votre PC rame-t-il ?</p>
                  <span className="text-emerald-600 text-sm font-bold flex items-center gap-1">Découvrir <ChevronRight className="h-4 w-4" /></span>
                </div>
              </Link>
            </div>
          </section>

          {/* Conclusion & CTA */}
          <footer className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Vous n'y arrivez toujours pas ?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Certains virus sont très tenaces et nécessitent une intervention manuelle experte. Ne risquez pas de perdre vos photos ou documents importants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services/suppression-virus"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                <Shield className="h-5 w-5" />
                Commander le nettoyage pro (250 DH)
              </Link>
              <Link 
                href="https://wa.me/212775237038?text=Bonjour%20AlloSupport%2C%20j%27ai%20besoin%20d%27aide"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-colors border border-white/30"
              >
                <MessageCircle className="h-5 w-5" />
                Question gratuite sur WhatsApp
              </Link>
            </div>
          </footer>

        </article>
      </main>
      <Footer />
    </>
  );
}
