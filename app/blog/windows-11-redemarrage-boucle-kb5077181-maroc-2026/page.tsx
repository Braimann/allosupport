import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const canonicalUrl = "https://allosupport.ma/blog/windows-11-redemarrage-boucle-kb5077181-maroc-2026";

const ogImageUrl = "https://allosupport.ma/blog/kb5077181-windows11-maroc.png";
const ogImageAlt =
  "Écran Windows 11 avec message REDÉMARRE EN BOUCLE et KB5077181. À droite, support à distance AlloSupport. Solution Maroc - allosupport.ma";

export const metadata: Metadata = {
  title:
    "Windows 11 Redémarre en Boucle après Mise à Jour Février 2026 (KB5077181) — Solution Maroc",
  description:
    "PC Windows 11 redémarre en boucle après KB5077181 (février 2026) ? 3 solutions rapides testées + dépannage à distance au Maroc 250 DH. Réparation en 15 min.",
  keywords: [
    "windows 11 redémarre en boucle",
    "KB5077181",
    "mise à jour windows 11 février 2026",
    "boucle redémarrage windows 11 maroc",
    "dépannage windows 11 à distance",
    "allosupport maroc",
  ],
  authors: [{ name: "AlloSupport — Dépannage Informatique Maroc" }],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Windows 11 Boucle de Redémarrage KB5077181 — Solution Maroc 2026",
    description:
      "La mise à jour KB5077181 casse des milliers de PC Windows 11. Voici les solutions + intervention technicien Maroc 250 DH.",
    type: "article",
    publishedTime: "2026-02-21T15:00:00+00:00",
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
    title: "Windows 11 Boucle Redémarrage KB5077181 — Solution Maroc 2026",
    description:
      "Solutions testées + dépannage à distance 250 DH. AlloSupport.ma",
    images: [ogImageUrl],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Windows 11 redémarre en boucle après mise à jour, que faire ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Désinstallez KB5077181 via Paramètres → Windows Update → Historique → Désinstaller les mises à jour. Si le PC boucle avant d'accéder aux paramètres, forcez 3 arrêts successifs pour accéder à la récupération automatique, puis démarrez en mode sans échec.",
      },
    },
    {
      "@type": "Question",
      name: "KB5077181 est-elle dangereuse pour mon PC ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La mise à jour KB5077181 (Patch Tuesday février 2026) provoque des boucles de redémarrage sur certaines configurations Windows 11 23H2 et 24H2, notamment avec les drivers Realtek WiFi. Il est recommandé de la désinstaller jusqu'au correctif de Microsoft.",
      },
    },
    {
      "@type": "Question",
      name: "Comment réparer Windows 11 qui ne démarre plus au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Forcez 3 arrêts successifs pour déclencher la récupération automatique, puis choisissez Options avancées → Mode sans échec. Désinstallez ensuite la mise à jour KB5077181. Si le problème persiste, AlloSupport propose un dépannage à distance en 15 min pour 250 DH.",
      },
    },
    {
      "@type": "Question",
      name: "Mon PC affiche un écran noir après la mise à jour, est-ce KB5077181 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, c'est probablement causé par la mise à jour KB5077181 de février 2026. Solution : désinstaller la mise à jour ou appeler AlloSupport au 07 75 23 70 38.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Windows 11 Redémarre en Boucle après Mise à Jour Février 2026 (KB5077181) — Solution Maroc",
  description:
    "PC Windows 11 redémarre en boucle après KB5077181 ? 3 solutions rapides + dépannage à distance au Maroc 250 DH.",
  image: ogImageUrl,
  author: {
    "@type": "Organization",
    name: "AlloSupport — Dépannage Informatique Maroc",
    url: "https://allosupport.ma",
  },
  publisher: {
    "@type": "Organization",
    name: "AlloSupport.ma",
    logo: { "@type": "ImageObject", url: "https://allosupport.ma/logo.png" },
  },
  datePublished: "2026-02-21T15:00:00+00:00",
  dateModified: "2026-02-21T15:00:00+00:00",
  mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: "https://allosupport.ma" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://allosupport.ma/blog" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Windows 11 Boucle Redémarrage KB5077181",
      item: "https://allosupport.ma/blog/windows-11-redemarrage-boucle-kb5077181-maroc-2026",
    },
  ],
};

export default function BlogWindows11RedemarrageBoucleKB5077181() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
                Windows 11
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Windows 11 Redémarre en Boucle après Mise à Jour Février 2026 (KB5077181) — Solution Rapide au Maroc
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <time dateTime="2026-02-21T15:00:00+00:00">21 février 2026</time>
              <span>8 min lecture</span>
              <span>Par AlloSupport — Dépannage Informatique Maroc</span>
            </div>
          </div>
        </section>

        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64 md:h-96 bg-gray-200 overflow-hidden">
                <Image
                  src="/blog/kb5077181-windows11-maroc.png"
                  alt={ogImageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority
                />
              </div>

              <div className="p-6 md:p-8">
                <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
                  <ol className="flex flex-wrap items-center gap-2">
                    <li>
                      <Link href="/" className="hover:text-teal-600">Accueil</Link>
                    </li>
                    <li aria-hidden className="text-gray-400">&gt;</li>
                    <li>
                      <Link href="/blog" className="hover:text-teal-600">Blog</Link>
                    </li>
                    <li aria-hidden className="text-gray-400">&gt;</li>
                    <li className="text-gray-900">Windows 11 Boucle Redémarrage KB5077181</li>
                  </ol>
                </nav>

                <div className="prose prose-lg max-w-none">
                  {/* Section 1 — Introduction */}
                  <p className="text-xl leading-relaxed mb-4">
                    Si votre PC Windows 11 redémarre en boucle depuis le 11 février 2026, vous n&apos;êtes pas seul.
                    La mise à jour <strong>KB5077181</strong>, déployée ce jour-là (Patch Tuesday), provoque sur
                    des milliers de machines une boucle de redémarrage infinie, une erreur <strong>0x800f0983</strong>
                    à l&apos;installation, ou encore un WiFi et un Bluetooth coupés ainsi qu&apos;un écran noir
                    après connexion. Ces symptômes touchent principalement les PC sous Windows 11 23H2 et 24H2,
                    notamment avec certains pilotes Realtek et une configuration UEFI Secure Boot.
                  </p>
                  <p className="mb-6">
                    Dans ce guide, nous décrivons ce qu&apos;est KB5077181, comment vérifier si votre PC est
                    concerné, et trois solutions rapides (désinstallation du correctif, démarrage en mode sans
                    échec, blocage de la réinstallation). Si rien n&apos;y fait, <strong>AlloSupport</strong> propose
                    un <strong>dépannage à distance en 15 minutes</strong> partout au Maroc pour vous sortir de la
                    boucle — tarif indicatif 250 DH. Pour les autres soucis PC, consultez notre article sur les{" "}
                    <Link href="/blog/7-pannes-pc-courantes-2026-maroc" className="text-teal-600 font-medium hover:underline">
                      pannes PC courantes Windows 11 au Maroc
                    </Link>
                    .
                  </p>

                  {/* Section 2 — C'est quoi KB5077181 ? */}
                  <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                    C&apos;est quoi KB5077181 ?
                  </h2>
                  <p className="mb-4">
                    KB5077181 est le correctif du <strong>Patch Tuesday de février 2026</strong>. Il est censé
                    corriger l&apos;écran bleu <strong>UNMOUNTABLE_BOOT_VOLUME</strong> et des crashs GPU Intel/AMD
                    sous Windows 11 24H2. Elle est déployée automatiquement sur Windows 11 versions <strong>23H2</strong> et{" "}
                    <strong>24H2</strong>.
                  </p>
                  <p className="mb-6">
                    Le problème : une régression introduit des boucles de démarrage sur certaines configurations,
                    en particulier avec <strong>BIOS UEFI Secure Boot</strong> et les <strong>drivers Realtek WiFi</strong>.
                    Dans ces cas, le PC redémarre en boucle sans atteindre le bureau. Consultez la{" "}
                    <a
                      href="https://support.microsoft.com/en-us/topic/february-10-2026-kb5077181-os-builds-26200-7840-and-26100-7840-f0fa9e54-a22a-4a06-96b6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:underline"
                    >
                      note officielle Microsoft KB5077181
                    </a>{" "}
                    pour le détail des builds concernés.
                  </p>

                  {/* Section 3 — Symptômes */}
                  <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                    Symptômes : Votre PC est-il touché ?
                  </h2>
                  <div className="overflow-x-auto my-6">
                    <table className="w-full border border-gray-200 rounded-lg">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="text-left py-3 px-4 font-semibold text-gray-900 border-b border-gray-200">
                            Symptôme
                          </th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900 border-b border-gray-200">
                            Cause probable
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4">PC redémarre 10-15 fois en boucle</td>
                          <td className="py-3 px-4">Conflit KB5077181 + driver Realtek</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4">Erreur code 0x800f0983 à l&apos;installation</td>
                          <td className="py-3 px-4">Composant Windows Update corrompu</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4">WiFi / Bluetooth ne fonctionne plus</td>
                          <td className="py-3 px-4">Driver Realtek écrasé par le patch</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-3 px-4">Écran noir après login</td>
                          <td className="py-3 px-4">Conflit explorer.exe post-update</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4">PC bloqué sur &quot;Préparation de Windows&quot;</td>
                          <td className="py-3 px-4">Rollback automatique échoue</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Section 4 — 3 Solutions */}
                  <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                    3 solutions rapides (du plus simple au plus efficace)
                  </h2>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">
                    Solution 1 — Désinstaller KB5077181
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
                    <li><strong>Paramètres</strong> → Windows Update → Historique des mises à jour</li>
                    <li>Cliquer &quot;Désinstaller les mises à jour&quot;</li>
                    <li>Chercher <strong>KB5077181</strong> → Désinstaller</li>
                    <li>Redémarrer</li>
                  </ol>
                  <p className="mb-6">
                    Résultat attendu : le PC revient à l&apos;état avant le 11 février.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">
                    Solution 2 — Démarrer en mode sans échec si le PC est en boucle
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
                    <li>Forcer l&apos;arrêt 3 fois (bouton power) → Windows ouvre &quot;Récupération automatique&quot;</li>
                    <li>Options avancées → Dépannage → Options avancées → Paramètres de démarrage</li>
                    <li>Appuyer <strong>F4</strong> (Mode sans échec) ou <strong>F5</strong> (Sans échec + Réseau)</li>
                    <li>Une fois en mode sans échec : suivre la Solution 1 pour désinstaller KB5077181</li>
                  </ol>
                  <p className="mb-6">
                    Si vous avez un écran noir complet, essayez <strong>Shift + Redémarrer</strong> depuis l&apos;écran
                    de connexion (s&apos;il s&apos;affiche quelques secondes).
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-900">
                    Solution 3 — Bloquer la réinstallation automatique
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
                    <li>Télécharger <strong>wushowhide.diagcab</strong> (outil Microsoft officiel)</li>
                    <li>Lancer → &quot;Masquer les mises à jour&quot;</li>
                    <li>Cocher KB5077181 → Valider</li>
                    <li>La mise à jour ne se réinstallera plus automatiquement</li>
                    <li>
                      Surveiller le patch correctif de Microsoft (attendu mars 2026) : retourner dans{" "}
                      <strong>wushowhide.diagcab</strong> → &quot;Afficher les mises à jour masquées&quot; pour
                      la réactiver une fois le correctif disponible
                    </li>
                  </ol>
                  <p className="mb-4 text-gray-700">
                    Si aucune de ces trois solutions ne fonctionne, votre installation Windows est probablement
                    corrompue au niveau des fichiers système. Dans ce cas, deux options : une réparation via
                    la commande <code className="bg-gray-100 px-1 rounded text-sm">sfc /scannow</code> en
                    invite de commande administrateur, ou un{" "}
                    <Link href="/formatage-pc" className="text-teal-600 font-medium hover:underline">
                      formatage PC complet au Maroc (350 DH)
                    </Link>{" "}
                    avec réinstallation propre de Windows 11 — ce qui garantit un système sain sans résidu
                    de la KB5077181.
                  </p>
                  <p className="mb-6 text-gray-700">
                    Notre{" "}
                    <Link href="/depannage-informatique" className="text-teal-600 font-medium hover:underline">
                      dépannage informatique Casablanca 250 DH
                    </Link>{" "}
                    à distance peut diagnostiquer en 15 minutes laquelle de ces options s&apos;applique à
                    votre configuration.
                  </p>

                  {/* Section 5 — CTA milieu */}
                  <div className="my-8 rounded-2xl bg-blue-600 p-6 text-white text-center">
                    <p className="text-xl font-bold mb-2">Votre PC est toujours bloqué ?</p>
                    <p className="mb-4">Technicien AlloSupport en 15 min à distance — 250 DH</p>
                    <a
                      href="https://wa.me/212775237038"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition"
                    >
                      WhatsApp : 07 75 23 70 38
                    </a>
                  </div>

                  {/* Section 8 — FAQ visible */}
                  <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900" id="faq">
                    Questions fréquentes
                  </h2>
                  <dl className="space-y-4">
                    <div>
                      <dt className="font-semibold text-gray-900">Windows 11 redémarre en boucle après mise à jour, que faire ?</dt>
                      <dd className="mt-1 text-gray-700">
                        Désinstallez KB5077181 via Paramètres → Windows Update → Historique → Désinstaller les mises à jour.
                        Si le PC boucle avant d&apos;accéder aux paramètres, forcez 3 arrêts successifs pour accéder à la
                        récupération automatique, puis démarrez en mode sans échec.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900">KB5077181 est-elle dangereuse pour mon PC ?</dt>
                      <dd className="mt-1 text-gray-700">
                        La mise à jour KB5077181 (Patch Tuesday février 2026) provoque des boucles de redémarrage sur
                        certaines configurations Windows 11 23H2 et 24H2, notamment avec les drivers Realtek WiFi.
                        Il est recommandé de la désinstaller jusqu&apos;au correctif de Microsoft.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900">Comment réparer Windows 11 qui ne démarre plus au Maroc ?</dt>
                      <dd className="mt-1 text-gray-700">
                        Forcez 3 arrêts successifs pour déclencher la récupération automatique, puis choisissez Options
                        avancées → Mode sans échec. Désinstallez ensuite la mise à jour KB5077181. Si le problème
                        persiste, AlloSupport propose un dépannage à distance en 15 min pour 250 DH.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-gray-900">Mon PC affiche un écran noir après la mise à jour, est-ce KB5077181 ?</dt>
                      <dd className="mt-1 text-gray-700">
                        Oui, c&apos;est probablement causé par la mise à jour KB5077181 de février 2026. Solution :
                        désinstaller la mise à jour ou appeler AlloSupport au 07 75 23 70 38.
                      </dd>
                    </div>
                  </dl>
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
