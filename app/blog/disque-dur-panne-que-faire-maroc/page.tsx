import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const canonicalUrl = "https://allosupport.ma/blog/disque-dur-panne-que-faire-maroc";
const ogImageUrl = "https://allosupport.ma/og-blog-disque-dur.png";
const ogImageAlt = "disque dur panne maroc que faire";

export const metadata: Metadata = {
  title: "Disque Dur en Panne au Maroc — Que Faire ? Guide Urgence 2026",
  description:
    "Disque dur tombe en panne au Maroc ? Ne rien toucher. Guide urgence : cliquetis, PC bloqué, données à récupérer. AlloSupport répond en 15 min.",
  keywords: [
    "disque dur tombe en panne maroc",
    "disque dur fait du bruit maroc",
    "cliquetis disque dur maroc",
    "PC ne démarre plus maroc",
    "données perdues maroc",
    "récupération données disque dur en panne maroc",
    "data recovery maroc",
  ],
  authors: [{ name: "AlloSupport.ma" }],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Disque Dur en Panne au Maroc — Que Faire ? Guide Urgence 2026",
    description:
      "Disque dur tombe en panne au Maroc ? Ne rien toucher. Guide urgence : cliquetis, PC bloqué, données à récupérer. AlloSupport répond en 15 min.",
    type: "article",
    publishedTime: "2026-02-22T10:00:00+00:00",
    url: canonicalUrl,
    siteName: "AlloSupport.ma",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disque Dur en Panne au Maroc — Que Faire ? Guide Urgence 2026",
    description:
      "Guide urgence : cliquetis, PC bloqué, données à récupérer. AlloSupport répond en 15 min.",
    images: [ogImageUrl],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Disque Dur en Panne au Maroc — Que Faire ? Guide Urgence 2026",
  description:
    "Disque dur tombe en panne au Maroc ? Guide urgence : cliquetis, PC bloqué, données à récupérer. AlloSupport répond en 15 min.",
  image: ogImageUrl,
  author: { "@type": "Organization", name: "AlloSupport.ma", url: "https://allosupport.ma" },
  publisher: {
    "@type": "Organization",
    name: "AlloSupport.ma",
    logo: { "@type": "ImageObject", url: "https://allosupport.ma/logo.png" },
  },
  datePublished: "2026-02-22T10:00:00+00:00",
  dateModified: "2026-02-22T10:00:00+00:00",
  mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Mon disque dur fait un bruit de cliquetis au Maroc, que faire ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Arrêtez le PC immédiatement. Un cliquetis indique une panne mécanique : chaque minute d'utilisation aggrave les dégâts. Ne redémarrez pas, n'ouvrez pas le boîtier. Contactez un technicien spécialisé en récupération de données (ex. AlloSupport) pour un diagnostic avant toute autre action.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on récupérer des données d'un disque dur en panne à distance au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, si la panne est logicielle (secteurs défectueux, corruption, PC lent mais démarre). AlloSupport propose une récupération à distance en 1 à 3 h via TeamViewer pour 250 DH. En cas de panne physique (cliquetis, disque non reconnu), un labo en salle blanche est nécessaire.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûte la récupération de données d'un disque dur en panne au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chez AlloSupport : diagnostic complet 150 DH (15 min), récupération logicielle à distance 250 DH (1-3 h), accompagnement labo partenaire 499 DH (24-72 h). Stellar.ma facture environ 1 400 DH pour le diagnostic seul. Derb Ghallef n'offre pas de garantie et risque de détruire le disque.",
      },
    },
  ],
};

export default function BlogDisqueDurPanneQueFaireMaroc() {
  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-teal-500 to-teal-700 text-white py-16 pt-40">
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
                Récupération données
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Disque Dur en Panne au Maroc — Que Faire ? Guide Urgence 2026
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <time dateTime="2026-02-22T10:00:00+00:00">22 février 2026</time>
              <span>6 min lecture</span>
              <span>Par AlloSupport.ma</span>
            </div>
          </div>
        </section>

        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 md:p-8">
                <nav className="text-sm text-gray-600 mb-6" aria-label="Fil d'Ariane">
                  <ol className="flex flex-wrap items-center gap-2">
                    <li>
                      <Link href="/" className="hover:text-teal-600">Accueil</Link>
                    </li>
                    <li aria-hidden className="text-gray-400">&gt;</li>
                    <li>
                      <Link href="/blog" className="hover:text-teal-600">Blog</Link>
                    </li>
                    <li aria-hidden className="text-gray-400">&gt;</li>
                    <li className="text-gray-900">Disque dur panne Maroc</li>
                  </ol>
                </nav>

                <div className="prose prose-lg max-w-none">
                  {/* Intro — 150 mots max */}
                  <p className="text-xl leading-relaxed mb-4">
                    Vous allumez votre PC ce matin au Maroc, et rien. Ou pire : un bruit de cliquetis, un écran bleu, des fichiers qui ont disparu. Quand votre <strong>disque dur tombe en panne</strong>, la panique est normale — surtout si vous avez des données importantes. La bonne nouvelle : dans la majorité des cas, les données sont récupérables, à condition de ne pas commettre les erreurs classiques. Continuer à utiliser le PC, ouvrir le disque vous-même ou formater « pour remettre à zéro » peut rendre la perte définitive. Ce guide vous dit exactement quoi faire (et quoi ne pas faire) dans les premières minutes, comment distinguer une panne logicielle d&apos;une panne physique, et quels tarifs raisonnables attendre pour une <Link href="/recuperation-donnees" className="text-teal-600 font-medium hover:underline">récupération données disque dur Maroc</Link>. En cas de panne physique, nous vous orientons vers notre{" "}
                  <Link
                    href="/recuperation-donnees/laboratoire-partenaire"
                    className="text-teal-600 font-medium hover:underline"
                  >
                    laboratoire partenaire certifié Recoveo
                  </Link>.
                  </p>

                  {/* H2 #1 */}
                  <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                    Les 5 signes que votre disque dur est en train de mourir
                  </h2>
                  <ol className="list-decimal list-inside space-y-4 text-gray-700 mb-6">
                    <li>
                      <strong>Bruits de cliquetis ou de grattement</strong> — Urgence absolue. C&apos;est souvent la tête de lecture qui touche les plateaux. Arrêtez le PC immédiatement. Chaque minute d&apos;utilisation aggrave les dégâts. Au Maroc, si votre <strong>disque dur fait du bruit</strong> (cliquetis, grincement), ne redémarrez pas.
                    </li>
                    <li>
                      <strong>PC qui met 10 minutes à démarrer</strong> — Windows peine à charger, le disque travaille en continu. Signe possible de <strong>secteurs défectueux disque dur</strong> ou d&apos;un disque en fin de vie.
                    </li>
                    <li>
                      <strong>Fichiers qui disparaissent ou se corrompent</strong> — Dossiers vides, documents illisibles, messages « fichier endommagé ». Typique des <strong>données perdues maroc</strong> évitables si on agit à temps.
                    </li>
                    <li>
                      <strong>Écrans bleus fréquents (BSOD) sous Windows</strong> — Erreurs type UNMOUNTABLE_BOOT_VOLUME ou DRIVER_IRQL_NOT_LESS_OR_EQUAL peuvent pointer vers le disque.
                    </li>
                    <li>
                      <strong>Disque dur non reconnu au démarrage</strong> — Le BIOS ne voit pas le disque, ou le <strong>PC ne démarre plus maroc</strong> avec message « No bootable device ». Peut être logiciel (câble, pilote) ou physique (composant mort).
                    </li>
                  </ol>

                  {/* H2 #2 */}
                  <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                    Les 3 erreurs à ne JAMAIS faire quand votre disque dur tombe en panne au Maroc
                  </h2>
                  <ul className="space-y-4 text-gray-700 mb-6">
                    <li>
                      <strong>Erreur 1 — Continuer à utiliser le PC.</strong> Chaque écriture sur le disque peut écraser les données que vous voulez récupérer. Éteignez et n&apos;installez aucun logiciel de récupération vous-même.
                    </li>
                    <li>
                      <strong>Erreur 2 — Aller à Derb Ghallef (ou ouvrir le boîtier).</strong> Un disque dur s&apos;ouvre uniquement en salle blanche. L&apos;air ambiant dépose des particules qui détruisent les plateaux. Résultat : destruction définitive des données. Pas de garantie, pas de labo — à éviter.
                    </li>
                    <li>
                      <strong>Erreur 3 — Formater pour « remettre à zéro ».</strong> Formater efface tout et rend la récupération bien plus difficile, voire impossible. Ne formatez jamais un disque dont vous voulez récupérer les données.
                    </li>
                  </ul>
                  <p className="mb-6 text-gray-700">
                    En évitant ces trois erreurs, vous maximisez les chances d&apos;une <strong>data recovery maroc</strong> dans de bonnes conditions — que ce soit à distance ou en labo.
                  </p>

                  {/* H2 #3 */}
                  <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                    Panne logicielle vs panne physique — comment distinguer ?
                  </h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border border-gray-200 rounded-lg text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="text-left py-3 px-4 font-semibold text-gray-900 border-b border-gray-200">Symptôme</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900 border-b border-gray-200">Type de panne</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900 border-b border-gray-200">Solution</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4">Bruit de cliquetis (<strong>cliquetis disque dur maroc</strong>)</td>
                          <td className="py-3 px-4">Physique</td>
                          <td className="py-3 px-4">Labo spécialisé</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4">PC lent, secteurs défectueux</td>
                          <td className="py-3 px-4">Logicielle</td>
                          <td className="py-3 px-4">Récupération à distance</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4">Disque non reconnu</td>
                          <td className="py-3 px-4">Les deux</td>
                          <td className="py-3 px-4">Diagnostic d&apos;abord</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4">BSOD répétés</td>
                          <td className="py-3 px-4">Logicielle</td>
                          <td className="py-3 px-4">Récupération à distance</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">Disque chaud, odeur</td>
                          <td className="py-3 px-4">Physique</td>
                          <td className="py-3 px-4">Arrêt immédiat, labo</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mb-4 text-gray-700">
                    En résumé : <strong>panne logicielle</strong> (fichiers corrompus, Windows qui rame, secteurs défectueux) = souvent récupérable à distance en 1 h depuis le Maroc via un <Link href="/depannage-informatique" className="text-teal-600 font-medium hover:underline">dépannage informatique à distance Maroc</Link>. <strong>Panne physique</strong> (disque dur clique maroc, bruit mécanique, disque chaud) = passage par un labo en salle blanche, pas de récupération à distance.
                  </p>

                  {/* H2 #4 + CTA WhatsApp */}
                  <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                    Que faire dans les 10 premières minutes ?
                  </h2>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                    <li><strong>Éteindre le PC immédiatement</strong> — Ne pas redémarrer, ne pas « réessayer pour voir ».</li>
                    <li><strong>Ne pas ouvrir le boîtier</strong> — Vous risquez d&apos;endommager le disque ou d&apos;invalider toute garantie.</li>
                    <li><strong>Contacter un technicien avant toute autre action</strong> — Un diagnostic rapide détermine si la panne est logicielle ou physique.</li>
                    <li><strong>Ne pas installer de logiciel de récupération vous-même</strong> — L&apos;installation et les scans peuvent écraser les données. Laissez un pro faire.</li>
                  </ol>

                  <div className="my-8 rounded-2xl bg-green-600 p-6 text-white text-center">
                    <p className="text-xl font-bold mb-2">Mon disque dur est en panne — Diagnostic WhatsApp gratuit</p>
                    <p className="mb-4">Réponse AlloSupport en 15 min. Ne touchez à rien.</p>
                    <a
                      href="https://wa.me/212775237038?text=Bonjour%2C%20mon%20disque%20dur%20est%20en%20panne%2C%20j%27ai%20besoin%20d%27un%20diagnostic%20urgent"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-block bg-white text-green-600 font-semibold px-6 py-3 rounded-full hover:bg-green-50 transition"
                    >
                      Envoyer sur WhatsApp
                    </a>
                  </div>

                  {/* H2 #5 */}
                  <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                    Prix récupération données disque dur en panne au Maroc
                  </h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border border-gray-200 rounded-lg text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="text-left py-3 px-4 font-semibold text-gray-900 border-b border-gray-200">Type de récupération</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900 border-b border-gray-200">Prix AlloSupport</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900 border-b border-gray-200">Délai</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4">Diagnostic complet</td>
                          <td className="py-3 px-4">150 DH</td>
                          <td className="py-3 px-4">15 min</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4">Récupération logicielle à distance</td>
                          <td className="py-3 px-4">250 DH</td>
                          <td className="py-3 px-4">1-3 h</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">Accompagnement labo partenaire</td>
                          <td className="py-3 px-4">499 DH</td>
                          <td className="py-3 px-4">24-72 h</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mb-6 text-gray-700">
                    À titre de comparaison : <strong>Stellar.ma</strong> facture environ 134 € (1 400 DH) pour le diagnostic seul. À Derb Ghallef, pas de garantie ni de salle blanche — le risque de destruction du disque est réel. Pour une <strong>récupération données disque dur en panne maroc</strong> sérieuse et à prix contenu, le diagnostic puis l&apos;orientation (à distance ou labo) restent la meilleure option. Pour les supports amovibles comme les clés USB ou les SSD, consultez notre guide complet sur la{" "}
                  <Link href="/blog/recuperation-donnees-cle-usb-carte-sd-ssd-maroc" className="text-teal-600 font-medium hover:underline">
                    récupération de données clé USB, carte SD et SSD au Maroc
                  </Link>.
                  </p>

                  {/* H2 #6 */}
                  <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                    Récupération données disque dur en panne — ce qu&apos;AlloSupport fait exactement
                  </h2>
                  <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-6">
                    <li>
                      <strong>Diagnostic WhatsApp 15 min</strong> — Vous décrivez les symptômes (bruit, message d&apos;erreur, PC bloqué). On évalue gratuitement les chances de récupération et on vous dit si c&apos;est faisable à distance ou en labo.
                    </li>
                    <li>
                      <strong>Si logicielle</strong> — Connexion TeamViewer, tentative de <strong>récupérer données disque dur en panne</strong> à distance. En général 1 à 3 h pour extraire les fichiers essentiels.
                    </li>
                    <li>
                      <strong>Si physique</strong> — Orientation vers un labo partenaire + accompagnement du dossier (499 DH) pour que vos données soient traitées en salle blanche sans passer par des revendeurs non sécurisés. Pour les habitants de la région, notre page <Link href="/recuperation-donnees-casablanca" className="text-teal-600 font-medium hover:underline">récupération données Casablanca</Link> détaille les options sur place.
                    </li>
                  </ol>

                  {/* FAQ visible (3 questions) */}
                  <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900" id="faq">
                    Questions fréquentes
                  </h2>
                  <dl className="space-y-4 mb-6">
                    <div>
                      <dt className="font-semibold text-gray-900">Mon disque dur fait un bruit de cliquetis au Maroc, que faire ?</dt>
                      <dd className="mt-1 text-gray-700">
                        Arrêtez le PC immédiatement. Un cliquetis indique une panne mécanique : chaque minute d&apos;utilisation aggrave les dégâts. Ne redémarrez pas, n&apos;ouvrez pas le boîtier. Contactez un technicien spécialisé (ex. AlloSupport) pour un diagnostic avant toute autre action.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900">Peut-on récupérer des données d&apos;un disque dur en panne à distance au Maroc ?</dt>
                      <dd className="mt-1 text-gray-700">
                        Oui, si la panne est logicielle (secteurs défectueux, corruption, PC lent mais qui démarre). AlloSupport propose une récupération à distance en 1 à 3 h via TeamViewer pour 250 DH. En cas de panne physique, un labo en salle blanche est nécessaire.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900">Combien coûte la récupération de données d&apos;un disque dur en panne au Maroc ?</dt>
                      <dd className="mt-1 text-gray-700">
                        Chez AlloSupport : diagnostic 150 DH (15 min), récupération logicielle à distance 250 DH (1-3 h), accompagnement labo 499 DH (24-72 h). Stellar.ma facture environ 1 400 DH pour le diagnostic seul. Derb Ghallef n&apos;offre pas de garantie et risque de détruire le disque.
                      </dd>
                    </div>
                  </dl>

                  {/* Conclusion + CTA fin */}
                  <p className="text-lg text-gray-700 mb-6">
                    Un <strong>disque dur qui tombe en panne au Maroc</strong> n&apos;est pas une fatalité. Tant que vous n&apos;écrivez pas sur le disque, n&apos;ouvrez pas le boîtier et ne formatez pas, les chances de récupérer vos données restent réelles. Que votre disque « ma kaydirch » (ne répond plus) ou qu&apos;il fasse du bruit, la première étape est toujours la même : arrêter la machine et contacter un technicien. AlloSupport répond en 15 min sur WhatsApp pour un diagnostic et vous oriente soit vers une récupération à distance, soit vers un labo partenaire. Ne tardez pas — chaque tentative de redémarrage peut coûter des fichiers.
                  </p>

                  <div className="my-8 rounded-2xl bg-teal-600 p-6 text-white text-center">
                    <p className="text-xl font-bold mb-2">Récupérer mes données maintenant</p>
                    <a
                      href="https://wa.me/212775237038?text=Bonjour%2C%20mon%20disque%20dur%20est%20en%20panne%2C%20j%27ai%20besoin%20d%27un%20diagnostic%20urgent"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="inline-block bg-white text-teal-600 font-semibold px-6 py-3 rounded-full hover:bg-teal-50 transition"
                    >
                      WhatsApp : 07 75 23 70 38
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
