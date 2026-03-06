import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";

const canonicalUrl =
  "https://allosupport.ma/blog/recuperation-donnees-cle-usb-carte-sd-ssd-maroc";

const WHATSAPP_PERTE = `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent(
  "Bonjour AlloSupport, j'ai perdu des données sur une clé USB/SSD. Que dois-je faire ?"
)}`;
const WHATSAPP_DIAGNOSTIC = `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent(
  "Bonjour AlloSupport, mon support est reconnu par le PC. Pouvez-vous intervenir à distance pour récupérer mes données ?"
)}`;
const WHATSAPP_LABO = `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent(
  "Bonjour AlloSupport, mon support n'est plus reconnu par aucun PC. J'ai besoin d'une intervention laboratoire."
)}`;
const WHATSAPP_DEVIS = `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent(
  "Bonjour AlloSupport, je souhaite un devis pour récupération de données sur support amovible."
)}`;

export const metadata: Metadata = {
  title:
    "Récupération de Données Clé USB, Carte SD et SSD au Maroc — Guide 2026 | AlloSupport.ma",
  description:
    "Vous avez perdu des fichiers sur une clé USB, une carte SD ou un SSD ? Récupérez vos données au Maroc : intervention à distance ou laboratoire. Diagnostic gratuit sur WhatsApp.",
  keywords: [
    "récupération données clé USB maroc",
    "récupérer fichiers carte SD maroc",
    "SSD données perdues maroc",
    "récupération carte mémoire maroc 2026",
    "clé USB formatée récupération maroc",
  ],
  authors: [{ name: "AlloSupport.ma" }],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Récupération de Données Clé USB, Carte SD et SSD au Maroc — Guide 2026",
    description:
      "Fichiers perdus sur clé USB ou SSD ? AlloSupport.ma intervient à distance ou en laboratoire. Paiement uniquement si vos données sont récupérées.",
    url: canonicalUrl,
    type: "article",
    locale: "fr_MA",
    siteName: "AlloSupport.ma",
    images: [
      {
        url: "https://allosupport.ma/images/blog/datarecovery-cle-usb-carte-sd-ssd-maroc.png",
        width: 1200,
        height: 675,
        alt: "Guide récupération de données AlloSupport.ma au Maroc : clés USB, cartes SD et SSD — récupération réussie à distance et laboratoire.",
      },
    ],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Récupération de Données sur Clé USB, Carte SD et SSD au Maroc : Guide Complet 2026",
  author: { "@type": "Organization", name: "AlloSupport.ma" },
  publisher: {
    "@type": "Organization",
    name: "AlloSupport.ma",
    url: "https://allosupport.ma",
  },
  datePublished: "2026-03-07",
  dateModified: "2026-03-07",
  url: canonicalUrl,
  description:
    "Guide complet pour récupérer des données perdues sur clé USB, carte SD et SSD au Maroc. Solutions à distance et laboratoire.",
  mainEntityOfPage: canonicalUrl,
  inLanguage: "fr-MA",
  image: "https://allosupport.ma/images/blog/datarecovery-cle-usb-carte-sd-ssd-maroc.png",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "J'ai formaté ma clé USB par erreur, mes données sont-elles récupérables ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dans la plupart des cas oui, surtout si vous n'avez rien réécrit dessus. Un formatage rapide (quick format) réinitialise seulement la table d'allocation sans effacer les fichiers. Contactez-nous immédiatement pour maximiser les chances.",
      },
    },
    {
      "@type": "Question",
      name: "Ma carte SD affiche \"carte SD endommagée\", que faire ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ne confirmez pas le formatage proposé par Android ou Windows. Ce message indique souvent une corruption du système de fichiers, récupérable à distance. Connectez-la à un PC et appelez-nous.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps dure une intervention à distance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entre 1h et 4h selon la taille du support. Dans la majorité des cas, vous récupérez vos fichiers le jour même.",
      },
    },
    {
      "@type": "Question",
      name: "Une clé USB cassée physiquement peut-elle être récupérée ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si la puce NAND est intacte malgré la casse, oui. Cela nécessite une intervention laboratoire (dessoudage et lecture directe). Contactez-nous avec des photos du support pour évaluation.",
      },
    },
  ],
};

export default function BlogRecuperationDonneesCleUsbCarteSdSsdMaroc() {
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
        <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 pt-40">
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
                Récupération de Données
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Récupération de Données sur Clé USB, Carte SD et SSD au Maroc : Guide Complet 2026
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <time dateTime="2026-03-07">7 mars 2026</time>
              <span>6 min de lecture</span>
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
                      <Link href="/" className="hover:text-emerald-600">Accueil</Link>
                    </li>
                    <li aria-hidden className="text-gray-400">&gt;</li>
                    <li>
                      <Link href="/blog" className="hover:text-emerald-600">Blog</Link>
                    </li>
                    <li aria-hidden className="text-gray-400">&gt;</li>
                    <li className="text-gray-900">Récupération données clé USB carte SD SSD Maroc</li>
                  </ol>
                </nav>
                <Image
                  src="/images/blog/datarecovery-cle-usb-carte-sd-ssd-maroc.png"
                  alt="Image d'en-tête pour le guide de récupération de données AlloSupport.ma au Maroc. Un technicien, avec des outils, examine des clés USB, cartes SD et un SSD, tandis qu'un écran affiche une récupération réussie de 1.2 TB de données."
                  width={1200}
                  height={675}
                  priority
                  className="w-full h-auto rounded-xl shadow-md mb-8"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                />
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-xl font-bold text-gray-900 mt-0 mb-4">Introduction</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Votre clé USB n&apos;est plus reconnue ? Vos photos ont disparu de votre carte SD
                    après un formatage accidentel ? Votre SSD ne démarre plus ? Ces situations sont
                    stressantes, mais dans la majorité des cas vos données sont récupérables — à
                    condition d&apos;agir correctement et rapidement.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Chez AlloSupport.ma, nous intervenons chaque jour pour récupérer des données
                    perdues sur tous types de supports amovibles au Maroc : clés USB, cartes SD,
                    cartes mémoire, SSD internes et externes. Ce guide vous explique tout ce qu&apos;il
                    faut savoir avant d&apos;agir.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                    Pourquoi les données disparaissent d&apos;une clé USB ou carte SD ?
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Les causes de perte de données sur supports amovibles sont multiples :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    <li>
                      <strong>Formatage accidentel</strong> : le plus fréquent — les fichiers
                      semblent effacés mais la structure reste souvent intacte.
                    </li>
                    <li>
                      <strong>Suppression directe de fichiers</strong> : les supports amovibles ne
                      passent pas par la corbeille.
                    </li>
                    <li>
                      <strong>Corruption du système de fichiers</strong> (FAT32, exFAT, NTFS) suite
                      à un retrait brutal du support sans éjection.
                    </li>
                    <li>
                      <strong>Panne électronique du contrôleur USB</strong> ou de la puce NAND
                      interne.
                    </li>
                    <li>
                      <strong>Secteurs défectueux</strong> ou dégradation physique progressive.
                    </li>
                  </ul>
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6">
                    <p className="text-gray-800 font-medium flex items-start gap-2">
                      <span aria-hidden>⚠️</span>
                      <span>
                        <strong>Règle d&apos;or :</strong> Dès que vous constatez une perte de
                        données, n&apos;écrivez plus rien sur le support concerné. Chaque écriture
                        supplémentaire écrase définitivement des données récupérables.
                      </span>
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                    Clé USB, Carte SD ou SSD : le type de support change tout
                  </h2>
                  <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Clé USB</h3>
                  <p className="text-gray-700 mb-4">
                    Utilise une puce NAND Flash. La perte est souvent logique (formatage,
                    suppression). La récupération logicielle à distance est possible dans ~70 % des
                    cas si le contrôleur est intact.
                  </p>
                  <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">Carte SD / MicroSD</h3>
                  <p className="text-gray-700 mb-4">
                    Même technologie NAND. Très sensible à la corruption par retrait brutal. PhotoRec
                    et Recuva permettent souvent une récupération complète à distance si la carte est
                    encore reconnue par le système.
                  </p>
                  <h3 className="text-xl font-bold mt-6 mb-2 text-gray-900">SSD</h3>
                  <p className="text-gray-700 mb-4">
                    Plus complexe : la commande TRIM et le garbage collector effacent automatiquement
                    les blocs libres, ce qui réduit considérablement la fenêtre de récupération. Une
                    intervention rapide est <strong>CRITIQUE</strong> pour un SSD. En cas de panne
                    physique, seul le laboratoire peut intervenir via chip-off NAND. Pour les disques
                    durs mécaniques, consultez notre guide complet sur la{" "}
                    <Link
                      href="/blog/disque-dur-panne-que-faire-maroc"
                      className="text-emerald-600 font-medium hover:underline"
                    >
                      récupération de données disque dur Maroc
                    </Link>
                    .
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                    Ce que vous devez faire immédiatement
                  </h2>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
                    <li>Arrêtez d&apos;utiliser le support immédiatement.</li>
                    <li>N&apos;installez aucun logiciel de récupération sur ce même support.</li>
                    <li>
                      Connectez le support à un PC fonctionnel sans ouvrir aucun fichier.
                    </li>
                    <li>
                      Vérifiez si Windows/macOS reconnaît le support (lettre de lecteur visible dans
                      l&apos;explorateur ?).
                    </li>
                    <li>
                      Contactez AlloSupport.ma avant toute tentative — un mauvais geste peut rendre
                      les données définitivement irrécupérables.
                    </li>
                  </ol>
                  <div className="my-6">
                    <a
                      href={WHATSAPP_PERTE}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-4 rounded-xl shadow-lg transition"
                    >
                      <MessageCircle className="w-6 h-6" aria-hidden />
                      Parler à un technicien maintenant
                    </a>
                  </div>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                    Récupération à distance : ce qu&apos;AlloSupport.ma peut faire
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Si votre support est reconnu par le PC (lettre de lecteur visible), notre
                    technicien intervient à distance via TeamViewer pour :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    <li>
                      Créer une image bit-à-bit du support avec ddrescue ou FTK Imager (pour
                      préserver l&apos;état exact du support avant toute manipulation).
                    </li>
                    <li>Analyser et reconstruire la table des partitions avec TestDisk.</li>
                    <li>Extraire les fichiers bruts par signature avec PhotoRec.</li>
                    <li>
                      Récupérer les suppressions simples sur FAT32/NTFS avec Recuva.
                    </li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    Tarif : à partir de 200 Dhs — payable <strong>uniquement</strong> si les données
                    sont récupérées. Aucun frais en cas d&apos;échec. Découvrez en détail notre{" "}
                    <Link
                      href="/recuperation-donnees"
                      className="text-emerald-600 font-medium hover:underline"
                    >
                      service de récupération de données à distance au Maroc
                    </Link>{" "}
                    et nos garanties.
                  </p>
                  <div className="my-6">
                    <a
                      href={WHATSAPP_DIAGNOSTIC}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-4 rounded-xl shadow-lg transition"
                    >
                      <MessageCircle className="w-6 h-6" aria-hidden />
                      Démarrer un diagnostic gratuit
                    </a>
                  </div>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                    Quand le laboratoire est-il indispensable ?
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Ces situations nécessitent une intervention physique en laboratoire :
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                    <li>Clé USB ou carte SD non reconnue par aucun PC (contrôleur mort).</li>
                    <li>SSD en panne électronique (court-circuit, composant brûlé).</li>
                    <li>Support physiquement endommagé (tordu, mouillé, choc violent).</li>
                    <li>
                      Contrôleur USB mort → nécessite dessoudage et lecture directe de la puce NAND
                      (technique chip-off).
                    </li>
                    <li>Corruption avancée de la mémoire NAND.</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    Notre{" "}
                    <Link
                      href="/recuperation-donnees"
                      className="text-emerald-600 font-medium hover:underline"
                    >
                      laboratoire de récupération de données au Maroc
                    </Link>{" "}
                    traite les cas les plus complexes avec un taux de succès élevé.
                  </p>
                  <div className="my-6">
                    <a
                      href={WHATSAPP_LABO}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center gap-3 bg-slate-700 hover:bg-slate-800 text-white font-bold px-6 py-4 rounded-xl shadow-lg transition"
                    >
                      Envoyer mon support au laboratoire
                    </a>
                  </div>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                    Prix récupération clé USB, carte SD et SSD au Maroc en 2026
                  </h2>
                  <div className="overflow-x-auto my-6 rounded-xl border border-slate-200">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="bg-slate-100 border-b border-slate-200">
                          <th className="py-4 px-4 font-bold text-slate-900">
                            Type d&apos;intervention
                          </th>
                          <th className="py-4 px-4 font-bold text-slate-900">
                            Boutiques Derb Ghallef
                          </th>
                          <th className="py-4 px-4 font-bold text-slate-900">AlloSupport.ma</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b border-slate-100">
                          <td className="py-3 px-4">Récupération logicielle clé USB</td>
                          <td className="py-3 px-4">150–300 Dhs (sans garantie)</td>
                          <td className="py-3 px-4">Dès 200 Dhs (post-résultat)</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                          <td className="py-3 px-4">Récupération carte SD / mémoire</td>
                          <td className="py-3 px-4">100–250 Dhs</td>
                          <td className="py-3 px-4">Dès 200 Dhs (post-résultat)</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                          <td className="py-3 px-4">Récupération SSD logicielle</td>
                          <td className="py-3 px-4">300–500 Dhs</td>
                          <td className="py-3 px-4">Dès 300 Dhs (post-résultat)</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">Intervention laboratoire (chip-off NAND)</td>
                          <td className="py-3 px-4">Rarement disponible</td>
                          <td className="py-3 px-4">Sur devis — laboratoire spécialisé</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-700 font-medium">
                    Notre engagement : vous ne payez rien si vos données ne sont pas récupérées.
                    Zéro risque financier.
                  </p>

                  <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-900">
                    Questions fréquentes
                  </h2>
                  <dl className="space-y-4">
                    <div>
                      <dt className="font-bold text-gray-900">
                        J&apos;ai formaté ma clé USB par erreur, mes données sont-elles
                        récupérables ?
                      </dt>
                      <dd className="mt-1 text-gray-700">
                        Dans la plupart des cas oui, surtout si vous n&apos;avez rien réécrit dessus.
                        Un formatage rapide (quick format) réinitialise seulement la table
                        d&apos;allocation sans effacer les fichiers. Contactez-nous immédiatement
                        pour maximiser les chances.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-900">
                        Ma carte SD affiche &quot;carte SD endommagée&quot;, que faire ?
                      </dt>
                      <dd className="mt-1 text-gray-700">
                        Ne confirmez pas le formatage proposé par Android ou Windows. Ce message
                        indique souvent une corruption du système de fichiers, récupérable à
                        distance. Connectez-la à un PC et appelez-nous.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-900">
                        Combien de temps dure une intervention à distance ?
                      </dt>
                      <dd className="mt-1 text-gray-700">
                        Entre 1h et 4h selon la taille du support. Dans la majorité des cas, vous
                        récupérez vos fichiers le jour même.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-900">
                        Une clé USB cassée physiquement peut-elle être récupérée ?
                      </dt>
                      <dd className="mt-1 text-gray-700">
                        Si la puce NAND est intacte malgré la casse, oui. Cela nécessite une
                        intervention laboratoire (dessoudage et lecture directe). Contactez-nous
                        avec des photos du support pour évaluation.
                      </dd>
                    </div>
                  </dl>

                  <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                    Vous avez perdu des données ? On intervient aujourd&apos;hui
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Nos techniciens sont disponibles 7j/7. Diagnostic gratuit en moins de 10
                    minutes. Intervention à distance dans l&apos;heure, laboratoire pour les cas
                    physiques. Paiement uniquement après récupération réussie.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <a
                      href={WHATSAPP_PERTE}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-4 rounded-xl shadow-lg transition"
                    >
                      <MessageCircle className="w-6 h-6" aria-hidden />
                      Diagnostic gratuit sur WhatsApp
                    </a>
                    <a
                      href={WHATSAPP_DEVIS}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center justify-center gap-3 border-2 border-slate-700 text-slate-700 hover:bg-slate-50 font-bold px-6 py-4 rounded-xl transition"
                    >
                      Décrire mon problème sur WhatsApp
                    </a>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Récupération données par ville :</p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/casablanca"
                      className="text-emerald-600 font-medium hover:underline text-sm"
                    >
                      récupération données Casablanca
                    </Link>
                    <Link
                      href="/marrakech"
                      className="text-emerald-600 font-medium hover:underline text-sm"
                    >
                      récupération données Marrakech
                    </Link>
                    <Link
                      href="/rabat"
                      className="text-emerald-600 font-medium hover:underline text-sm"
                    >
                      récupération données Rabat
                    </Link>
                    <Link
                      href="/fes"
                      className="text-emerald-600 font-medium hover:underline text-sm"
                    >
                      récupération données Fès
                    </Link>
                  </div>

                  <p className="text-center mt-10 text-gray-600 text-sm">
                    <Link href="/blog" className="text-emerald-600 font-medium hover:underline">
                      ← Retour au blog
                    </Link>
                  </p>
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
