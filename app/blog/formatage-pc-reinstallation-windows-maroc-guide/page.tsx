import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";

const canonicalUrl = "https://allosupport.ma/blog/formatage-pc-reinstallation-windows-maroc-guide";

const WHATSAPP_FORMATAGE = `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent(
  "Bonjour AlloSupport, je souhaite un formatage PC avec réinstallation Windows. Quel tarif et délai ?"
)}`;

export const metadata: Metadata = {
  title: "Formatage PC & Réinstallation Windows au Maroc : Guide 2026",
  description:
    "Quand formater son PC ? Comment réinstaller Windows sans perdre ses données ? Prix, étapes et conseils d'expert pour particuliers et PME au Maroc.",
  authors: [{ name: "AlloSupport.ma" }],
  alternates: { canonical: canonicalUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Formatage PC & Réinstallation Windows au Maroc : Guide 2026",
    description:
      "Quand formater son PC ? Comment réinstaller Windows sans perdre ses données ? Prix, étapes et conseils d'expert pour particuliers et PME au Maroc.",
    url: canonicalUrl,
    type: "article",
    locale: "fr_MA",
    siteName: "AlloSupport.ma",
    images: [
      {
        url: "https://allosupport.ma/images/og/formatage-pc-maroc.jpg",
        width: 1200,
        height: 630,
        alt: "Formatage PC et réinstallation Windows au Maroc — AlloSupport",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Formatage PC & Réinstallation Windows au Maroc : Guide Complet 2026",
  author: { "@type": "Organization", name: "AlloSupport.ma" },
  publisher: { "@type": "Organization", name: "AlloSupport.ma" },
  datePublished: "2026-03-01",
  dateModified: "2026-03-09",
  mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "https://allosupport.ma" },
  { name: "Blog", url: "https://allosupport.ma/blog" },
  { name: "Formatage PC & Réinstallation Windows Maroc", url: canonicalUrl },
]);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien coûte un formatage PC au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un formatage PC avec réinstallation Windows coûte en moyenne 350 DH chez AlloSupport, intervention à distance incluse.",
      },
    },
    {
      "@type": "Question",
      name: "Perd-on ses données lors d'un formatage PC ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, un formatage efface toutes les données du disque. Il est indispensable de sauvegarder vos fichiers avant toute intervention.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence entre formatage et réinitialisation Windows ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La réinitialisation conserve ou supprime les fichiers selon votre choix et est moins radicale. Le formatage complet repart d'une installation vierge — recommandé si le PC est très infecté ou très lent.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on formater un PC à distance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, AlloSupport réalise des formatages et réinstallations Windows à distance via logiciel de prise en main, sans déplacement, partout au Maroc.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il formater son PC si Windows est lent ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pas forcément. Un diagnostic préalable s'impose. Si le ralentissement vient de virus ou du registre, une optimisation suffit. Le formatage est recommandé quand le système est trop dégradé.",
      },
    },
  ],
};

const faqData = [
  {
    q: "Combien coûte un formatage PC au Maroc ?",
    a: "Un formatage PC avec réinstallation Windows coûte en moyenne 350 DH chez AlloSupport, intervention à distance incluse.",
  },
  {
    q: "Perd-on ses données lors d'un formatage PC ?",
    a: "Oui, un formatage efface toutes les données du disque. Il est indispensable de sauvegarder vos fichiers avant toute intervention.",
  },
  {
    q: "Quelle est la différence entre formatage et réinitialisation Windows ?",
    a: "La réinitialisation conserve ou supprime les fichiers selon votre choix et est moins radicale. Le formatage complet repart d'une installation vierge — recommandé si le PC est très infecté ou très lent.",
  },
  {
    q: "Peut-on formater un PC à distance ?",
    a: "Oui, AlloSupport réalise des formatages et réinstallations Windows à distance via logiciel de prise en main, sans déplacement, partout au Maroc.",
  },
  {
    q: "Faut-il formater son PC si Windows est lent ?",
    a: "Pas forcément. Un diagnostic préalable s'impose. Si le ralentissement vient de virus ou du registre, une optimisation suffit. Le formatage est recommandé quand le système est trop dégradé.",
  },
];

export default function BlogFormatagePCPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <ol className="flex items-center gap-2 text-sm text-slate-600">
              <li>
                <Link href="/" className="text-emerald-600 hover:underline">
                  Accueil
                </Link>
              </li>
              <li aria-hidden className="text-slate-400">›</li>
              <li>
                <Link href="/blog" className="text-emerald-600 hover:underline">
                  Blog
                </Link>
              </li>
              <li aria-hidden className="text-slate-400">›</li>
              <li className="text-slate-900 font-medium">Formatage PC Maroc</li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 pt-24">
          <div className="max-w-4xl mx-auto px-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour au blog
            </Link>
            <div className="mb-4">
              <span className="bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full">
                Guide 2026 · 8 min de lecture
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Formatage PC & Réinstallation Windows au Maroc : Guide Complet 2026
            </h1>
            <p className="text-xl text-slate-200 mb-4">
              Vous vous demandez quand et comment formater votre PC au Maroc, ou combien coûte une réinstallation Windows ? Ce guide vous explique la différence entre formatage et réinitialisation, les étapes pour réinstaller Windows sans perdre vos données, et les tarifs pratiqués en 2026 pour particuliers et PME.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <time dateTime="2026-03-01">1er mars 2026</time>
              <span>·</span>
              <span>Équipe AlloSupport.ma</span>
            </div>
          </div>
        </section>

        <article className="py-12" aria-label="Guide formatage PC Maroc 2026">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 md:p-8 prose prose-lg max-w-none">
                {/* Section 1 */}
                <h2 className="text-2xl font-bold mt-0 mb-4 text-gray-900">
                  Formatage PC ou réinitialisation Windows : quelle différence ?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Au Maroc, comme ailleurs, les deux termes sont souvent confondus. La <strong>réinitialisation Windows</strong> (Paramètres → Système → Récupération) permet de remettre Windows à zéro en conservant ou en supprimant vos fichiers selon l’option choisie. C’est une opération intégrée au système, sans clé USB. Le <strong>formatage complet</strong> consiste à effacer entièrement la <strong>partition</strong> du disque (ou du SSD) et à réinstaller Windows depuis une clé USB bootable ou un outil de déploiement. Vous repartez d’une <strong>installation vierge</strong>, sans résidus de logiciels ou de virus. Pour un PC fortement infecté ou un ralentissement extrême, le formatage est plus propre ; pour un simple « coup de neuf » sans risque, la réinitialisation peut suffire.
                </p>

                {/* Section 2 */}
                <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">
                  5 signes que votre PC a besoin d&apos;un formatage
                </h2>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-900">
                  1. PC infecté par virus ou ransomware malgré l&apos;antivirus
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Quand les <strong>virus</strong> ou <strong>malwares</strong> résistent aux scans et aux nettoyages, le système est souvent trop compromis. Un formatage élimine tout. Avant cela, sauvegardez vos données sur un disque externe ou le cloud. En cas de <strong>formatage PC perte de données</strong> non sauvegardées, une <Link href="/recuperation-donnees" className="text-emerald-600 hover:underline">récupération de données Maroc</Link> peut parfois récupérer des fichiers — mais rien ne remplace une sauvegarde préalable.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-900">
                  2. Ralentissement extrême même après nettoyage
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Si votre PC reste très lent après suppression des programmes inutiles, nettoyage du disque et désactivation des logiciels au démarrage, le <strong>registre Windows</strong> ou les résidus de mises à jour peuvent en être la cause. <strong>PC lent faut-il formater</strong> ? Pas systématiquement : essayez d’abord une <Link href="/pc-lent-solution" className="text-emerald-600 hover:underline">PC lent solution rapide</Link> ou un diagnostic. Le formatage devient pertinent quand l’optimisation ne suffit plus.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-900">
                  3. Erreurs système répétées (écran bleu, BSOD)
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les écrans bleus répétés (BSOD) peuvent venir de <strong>pilotes</strong> (<strong>drivers</strong>) défaillants ou d’une installation Windows corrompue. Après avoir vérifié la RAM et les mises à jour <strong>Windows Update</strong>, une réinstallation propre supprime les conflits logiciels et repart sur de bonnes bases.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-900">
                  4. Windows corrompu ou irrécupérable
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Fichiers système manquants, impossibilité de démarrer correctement, réparation automatique en boucle : dans ces cas, <strong>reinstaller Windows 11 proprement</strong> (ou Windows 10) via une clé USB est la solution la plus fiable. Pensez à noter votre <strong>clé de produit</strong> ou à lier votre licence à un compte Microsoft pour l’<strong>activation Windows</strong> après réinstallation.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-900">
                  5. Changement de propriétaire ou revente de PC
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pour revendre ou donner votre ordinateur au Maroc, un formatage complet efface toutes vos données personnelles et vos comptes. C’est une bonne pratique avant toute cession.
                </p>

                {/* Section 3 */}
                <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                  Les étapes d&apos;un formatage PC réussi (sans perdre vos données)
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Reinstaller Windows sans perdre ses données</strong> impose de tout sauvegarder avant d’effacer le disque. Voici un processus en 5 étapes.
                </p>
                <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-4">
                  <li>
                    <strong>Sauvegarde complète des données</strong> : copiez vos documents, photos, vidéos et favoris sur un disque externe ou un cloud (OneDrive, Google Drive). Vérifiez que rien d’important ne reste sur le PC.
                  </li>
                  <li>
                    <strong>Récupérer la clé de produit Windows</strong> : si vous avez une licence payante (OEM ou boîte), notez la clé ou assurez-vous que Windows est lié à votre compte Microsoft pour une réactivation automatique après réinstallation.
                  </li>
                  <li>
                    <strong>Créer une clé USB bootable Windows 10/11</strong> : téléchargez l’outil de création de support sur le site officiel Microsoft (<a href="https://support.microsoft.com/fr-fr/windows" target="_blank" rel="nofollow noopener noreferrer" className="text-emerald-600 hover:underline">support.microsoft.com</a>), puis gravez l’ISO sur une clé d’au moins 8 Go. Démarrez le PC sur la clé (réglage <strong>BIOS UEFI</strong> si besoin).
                  </li>
                  <li>
                    <strong>Lancer le formatage et l’installation propre</strong> : lors de l’assistant d’installation, choisissez « Installation personnalisée », supprimez les partitions existantes, créez une nouvelle partition et installez. Le disque est formaté et Windows réinstallé de zéro.
                  </li>
                  <li>
                    <strong>Réinstaller drivers, logiciels et antivirus</strong> : une fois Windows installé, installez les <strong>pilotes</strong> (carte graphique, chipset, Wi‑Fi) depuis le site du fabricant ou Windows Update. Réinstallez vos logiciels et un <strong>antivirus post-formatage</strong> (ex. Kaspersky, Bitdefender). Pour une <Link href="/installation-windows" className="text-emerald-600 hover:underline">installation Windows Maroc</Link> accompagnée, nos techniciens gèrent ces étapes à distance.
                  </li>
                </ol>
                <p className="text-gray-700 leading-relaxed bg-slate-50 rounded-xl p-4 border border-slate-200">
                  Vous préférez déléguer ? Notre service de{" "}
                  <Link href="/formatage-pc" className="text-emerald-600 font-medium hover:underline">
                    formatage PC à distance (350 DH)
                  </Link>{" "}
                  prend en charge toutes ces étapes.
                </p>

                {/* Section 4 */}
                <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                  Combien coûte un formatage PC au Maroc en 2026 ?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le <strong>formatage PC prix Maroc</strong> varie selon le prestataire et les options. Voici des fourchettes indicatives pour un <strong>technicien informatique formatage à distance</strong>.
                </p>
                <div className="overflow-x-auto my-6 rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <caption className="sr-only">
                      Tarifs formatage PC et réinstallation Windows au Maroc 2026
                    </caption>
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200">
                        <th className="py-4 px-4 font-bold text-slate-900">Type d&apos;intervention</th>
                        <th className="py-4 px-4 font-bold text-slate-900">Prix indicatif</th>
                        <th className="py-4 px-4 font-bold text-slate-900">Délai</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4">Formatage simple</td>
                        <td className="py-3 px-4">250 DH</td>
                        <td className="py-3 px-4">2-3 h</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4">Formatage + Windows officiel</td>
                        <td className="py-3 px-4">350 DH</td>
                        <td className="py-3 px-4">3-4 h</td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-3 px-4">Formatage + Windows + Office</td>
                        <td className="py-3 px-4">599 DH</td>
                        <td className="py-3 px-4">4-5 h</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4">Forfait PME (par poste)</td>
                        <td className="py-3 px-4">Sur devis</td>
                        <td className="py-3 px-4">Variable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-700 mb-4">
                  Le <strong>formatage PC 350 DH</strong> chez AlloSupport inclut une réinstallation Windows propre, les pilotes essentiels et une sauvegarde de vos données si possible.{" "}
                  <Link href="/formatage-pc" className="text-emerald-600 font-medium hover:underline">
                    Voir tous nos tarifs formatage PC
                  </Link>{" "}
                  ·{" "}
                  <Link href="/devis" className="text-emerald-600 font-medium hover:underline">
                    Demander un devis gratuit
                  </Link>
                </p>

                {/* Section 5 */}
                <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                  Formatage PC à distance : comment ça marche ?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  AlloSupport réalise des <strong>formatage PC avec sauvegarde données Maroc</strong> et des réinstallations Windows à distance. Vous n’avez pas besoin de <strong>formatage PC sans clé USB bootable</strong> : nous utilisons un logiciel de prise en main sécurisé (TeamViewer ou AnyDesk). Le déroulement : vous nous contactez par WhatsApp, nous effectuons un court diagnostic, puis nous guidons ou réalisons l’intervention à distance. Nous intervenons partout au Maroc : <Link href="/formatage-pc-casablanca" className="text-emerald-600 hover:underline">formatage PC Casablanca</Link>, <Link href="/casablanca" className="text-emerald-600 hover:underline">Casablanca</Link>, <Link href="/rabat" className="text-emerald-600 hover:underline">Rabat</Link>, <Link href="/marrakech" className="text-emerald-600 hover:underline">Marrakech</Link>, <Link href="/fes" className="text-emerald-600 hover:underline">Fès</Link>, <Link href="/agadir" className="text-emerald-600 hover:underline">Agadir</Link> et toutes les autres villes.
                </p>
                <div className="my-6">
                  <a
                    href={WHATSAPP_FORMATAGE}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition"
                  >
                    <MessageCircle className="w-5 h-5" aria-hidden />
                    Contacter pour un formatage PC à distance
                  </a>
                </div>

                {/* Section 6 */}
                <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                  Formatage PC pour les entreprises et PME au Maroc
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les PME ont souvent besoin d’un <strong>formatage PC PME plusieurs postes Maroc</strong> : renouvellement de parc, départ d’un employé, mise à niveau avant déploiement de nouveaux logiciels. Un forfait par poste ou une intervention groupée permet de maîtriser les coûts et les délais. Pour une gestion plus globale de votre informatique, notre <Link href="/support-pme" className="text-emerald-600 hover:underline">support informatique PME</Link> et notre <Link href="/infogerance-pme-maroc" className="text-emerald-600 hover:underline">infogérance PME Maroc</Link> couvrent la maintenance, les sauvegardes et le dépannage au quotidien, formatage inclus lorsque nécessaire.
                </p>

                {/* Section 7 - FAQ visible */}
                <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">
                  Questions fréquentes sur le formatage PC au Maroc
                </h2>
                <dl className="space-y-4">
                  {faqData.map((item, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl p-4">
                      <dt className="font-bold text-gray-900 mb-2">{item.q}</dt>
                      <dd className="text-gray-700 text-sm leading-relaxed">{item.a}</dd>
                    </div>
                  ))}
                </dl>

                {/* Articles connexes */}
                <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                  Articles qui pourraient vous intéresser
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <Link href="/blog/installation-windows-11-maroc-2026-prix" className="text-emerald-600 hover:underline">
                      Installation Windows 11 au Maroc : prix et guide 2026
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/pc-lent-10-solutions-rapides-maroc" className="text-emerald-600 hover:underline">
                      PC lent : 10 solutions rapides au Maroc
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/comment-supprimer-virus-pc-maroc-gratuit" className="text-emerald-600 hover:underline">
                      Comment supprimer un virus PC au Maroc gratuitement
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        {/* CTA final */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Besoin d&apos;un formatage PC professionnel au Maroc ?
            </h2>
            <p className="text-slate-300 mb-6">
              Intervention à distance en 2 h, Windows officiel, données sauvegardées. Dès 350 DH.
            </p>
            <a
              href={WHATSAPP_FORMATAGE}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition"
            >
              <MessageCircle className="w-5 h-5" aria-hidden />
              Contacter par WhatsApp
            </a>
            <p className="mt-4 text-slate-400 text-sm">
              <Link href="/formatage-pc" className="text-emerald-400 hover:underline">
                Voir la page formatage PC
              </Link>
              {" · "}
              <Link href="/contact" className="text-emerald-400 hover:underline">
                Nous contacter
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
