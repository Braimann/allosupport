import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  User,
  Calendar,
  Clock,
  MessageCircle,
  Phone,
  CheckCircle,
  AlertTriangle,
  ChevronDown,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";

const WHATSAPP_FREEDOS = `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent("Bonjour, je veux installer Windows 11 sur mon PC FreeDOS. Je souhaite le Pack Démarrage.")}`;

// ========== JSON-LD SCHEMAS ==========
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "PC Portable Sans Windows (FreeDOS) Maroc : Pourquoi + Comment l'Installer ?",
  description:
    "Guide complet pour comprendre FreeDOS et installer Windows 11 sur votre PC portable acheté au Maroc",
  image: "https://allosupport.ma/blog/freedos.webp",
  author: { "@type": "Organization", name: "AlloSupport Maroc", url: "https://allosupport.ma" },
  publisher: {
    "@type": "Organization",
    name: "AlloSupport Maroc",
    logo: { "@type": "ImageObject", url: "https://allosupport.ma/logo.png" },
  },
  datePublished: "2026-02-11",
  dateModified: "2026-02-11",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://allosupport.ma/blog/pc-portable-sans-windows-freedos-maroc",
  },
  keywords: "freedos maroc, pc sans windows, installation windows 11",
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Comment Installer Windows 11 sur un PC FreeDOS au Maroc",
  description:
    "Guide étape par étape pour installer Windows 11 sur un ordinateur portable FreeDOS acheté au Maroc",
  image: "https://allosupport.ma/blog/freedos.webp",
  totalTime: "PT2H",
  estimatedCost: { "@type": "MonetaryAmount", currency: "MAD", value: "0" },
  tool: [
    { "@type": "HowToTool", name: "Clé USB 8GB minimum" },
    { "@type": "HowToTool", name: "Licence Windows 11" },
    { "@type": "HowToTool", name: "Connexion Internet" },
  ],
  supply: [{ "@type": "HowToSupply", name: "Fichier ISO Windows 11" }],
  step: [
    {
      "@type": "HowToStep",
      name: "Télécharger Windows 11",
      text: "Allez sur le site officiel Microsoft et téléchargez l'outil de création de média Windows 11",
      url: "https://allosupport.ma/blog/pc-portable-sans-windows-freedos-maroc#step1",
    },
    {
      "@type": "HowToStep",
      name: "Créer une clé USB bootable",
      text: "Utilisez Rufus ou l'outil Microsoft pour créer une clé USB d'installation",
      url: "https://allosupport.ma/blog/pc-portable-sans-windows-freedos-maroc#step2",
    },
    {
      "@type": "HowToStep",
      name: "Désactiver VMD dans le BIOS",
      text: "Sur les PC HP/Dell récents, accédez au BIOS et changez VMD en AHCI pour détecter le disque dur",
      url: "https://allosupport.ma/blog/pc-portable-sans-windows-freedos-maroc#step3",
    },
    {
      "@type": "HowToStep",
      name: "Installer Windows 11",
      text: "Bootez sur la clé USB et suivez l'assistant d'installation Windows",
      url: "https://allosupport.ma/blog/pc-portable-sans-windows-freedos-maroc#step4",
    },
    {
      "@type": "HowToStep",
      name: "Installer les drivers",
      text: "Téléchargez les drivers WiFi, Audio, Touchpad depuis le site du fabricant (HP, Lenovo, Dell)",
      url: "https://allosupport.ma/blog/pc-portable-sans-windows-freedos-maroc#step5",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "C'est quoi FreeDOS sur un PC portable ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FreeDOS est un système d'exploitation gratuit, très basique, qui remplace Windows. Les fabricants l'installent pour vendre des PC moins chers (sans payer la licence Windows). Vous voyez un écran noir au démarrage car FreeDOS n'a pas d'interface graphique.",
      },
    },
    {
      "@type": "Question",
      name: "Est-ce que mon PC est défectueux s'il affiche FreeDOS ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non ! Votre PC fonctionne parfaitement. L'écran FreeDOS est normal : c'est simplement un ordinateur vendu 'Sans Système'. Vous devez installer Windows vous-même ou faire appel à un professionnel.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûte l'installation de Windows 11 au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'installation professionnelle de Windows 11 + Drivers + Logiciels de base coûte entre 150 et 300 MAD au Maroc. AlloSupport propose un Pack Démarrage à 200 MAD avec installation à distance en 1 heure.",
      },
    },
    {
      "@type": "Question",
      name: "Est-ce que la garantie saute si je change FreeDOS par Windows ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non, changer le système d'exploitation ne fait pas sauter la garantie matérielle au Maroc. Vous avez le droit d'installer Windows sur un PC FreeDOS. La garantie couvre le hardware (écran, clavier, batterie), pas le logiciel.",
      },
    },
    {
      "@type": "Question",
      name: "Où acheter une licence Windows 11 pas chère au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vous pouvez acheter une licence Windows 11 officielle sur le Microsoft Store (1200-1500 MAD) ou via des revendeurs agréés. Attention aux licences à 50 MAD sur Internet : souvent illégales ou temporaires.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi mon disque dur n'est pas détecté pendant l'installation Windows ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "C'est le problème VMD/RST. Les PC HP et Dell récents utilisent Intel VMD par défaut. Vous devez accéder au BIOS (F10 ou F2 au démarrage) et changer RAID/VMD en AHCI pour que Windows détecte le SSD.",
      },
    },
  ],
};

// ========== METADATA ==========
export const metadata: Metadata = {
  title:
    "PC Portable Sans Windows (FreeDOS) Maroc : Pourquoi + Comment l'Installer ? Guide 2026",
  description:
    "Vous avez acheté un PC portable Sans Système au Maroc (Jumia, Marjane) ? Découvrez pourquoi il affiche FreeDOS et comment installer Windows 11 + Drivers. Guide complet 2026.",
  keywords: [
    "pc portable sans windows maroc",
    "freedos maroc",
    "pc sans systeme maroc",
    "installation windows 11 maroc",
    "driver hp maroc",
    "ordinateur sans systeme jumia",
    "pc portable marjane sans windows",
    "installer windows freedos",
    "pc lenovo sans windows",
  ],
  authors: [{ name: "AlloSupport Maroc" }],
  openGraph: {
    title: "PC Portable Sans Windows (FreeDOS) au Maroc : Le Guide Complet",
    description:
      "Pourquoi votre PC neuf n'a pas Windows ? On explique FreeDOS et comment installer Windows 11 correctement.",
    url: "https://allosupport.ma/blog/pc-portable-sans-windows-freedos-maroc",
    images: [
      {
        url: "https://allosupport.ma/blog/freedos.webp",
        width: 1200,
        height: 630,
        alt: "Écran FreeDOS vs Windows 11 sur PC portable Maroc",
      },
    ],
    locale: "fr_MA",
    type: "article",
    publishedTime: "2026-02-11T00:00:00Z",
    modifiedTime: "2026-02-11T00:00:00Z",
  },
  alternates: {
    canonical: "https://allosupport.ma/blog/pc-portable-sans-windows-freedos-maroc",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-video-preview": -1,
    "max-snippet": -1,
  },
};

export default function BlogPCPortableSansWindowsFreeDOSMaroc() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main className="min-h-screen bg-slate-50">
        {/* ========== HERO ========== */}
        <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <nav className="text-sm text-slate-500 mb-6" aria-label="Fil d'Ariane">
              <Link href="/" className="hover:text-slate-700">
                Accueil
              </Link>
              <span aria-hidden> / </span>
              <Link href="/blog" className="hover:text-slate-700">
                Blog
              </Link>
              <span aria-hidden> / </span>
              <span className="text-slate-900">PC Portable Sans Windows FreeDOS Maroc</span>
            </nav>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 bg-slate-200">
              <Image
                src="/blog/freedos.webp"
                alt="Écran FreeDOS vs Windows 11 sur PC portable au Maroc : guide installation sans système (Jumia, Marjane)"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              Guides
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-slate-900 mb-6">
              PC Portable Sans Windows au Maroc : Pourquoi Votre Ordinateur Neuf Affiche
              &quot;FreeDOS&quot; ? [Guide Complet 2026]
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Vous avez acheté un PC chez Jumia, Marjane ou Electroplanet et vous voyez un écran
              noir ? C&apos;est normal. Voici pourquoi et comment y remédier.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 pb-8 border-b border-slate-200">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" aria-hidden />
                Équipe AlloSupport
              </span>
              <time dateTime="2026-02-11" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" aria-hidden />
                11 Février 2026
              </time>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" aria-hidden />
                12 min de lecture
              </span>
            </div>
          </div>
        </section>

        {/* ========== ARTICLE BODY ========== */}
        <article className="pb-20">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_240px] gap-12">
              <div className="min-w-0">
                {/* Table of Contents - visible on desktop in flow for accessibility */}
                <nav
                  className="mb-12 p-6 bg-slate-50 rounded-xl border border-slate-200 lg:hidden"
                  aria-label="Sommaire"
                >
                  <h2 className="text-lg font-bold text-slate-900 mb-4">Sommaire</h2>
                  <ol className="space-y-2 text-sm">
                    {[
                      { id: "intro", label: "Vous venez d'acheter un PC sans Windows ?" },
                      { id: "cest-quoi-freedos", label: "C'est quoi FreeDOS ?" },
                      { id: "pourquoi-vendeurs", label: "Pourquoi les vendeurs proposent du Sans Système ?" },
                      { id: "economie", label: "Combien vous économisez vraiment ?" },
                      { id: "marques", label: "Marques et modèles au Maroc (HP, Lenovo, Dell)" },
                      { id: "guide-install", label: "Comment installer Windows 11 (guide complet)" },
                      { id: "vmd", label: "Piège : disque non détecté (VMD/AHCI)" },
                      { id: "licence", label: "Où acheter une licence Windows 11 ?" },
                      { id: "diy-vs-pro", label: "DIY vs Professionnel : tableau comparatif" },
                      { id: "pack-demarrage", label: "Notre solution : Pack Démarrage (150-250 MAD)" },
                      { id: "faq", label: "Questions fréquentes (FAQ)" },
                    ].map((item, i) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-blue-600 hover:underline"
                        >
                          {i + 1}. {item.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>

                <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
                  {/* SECTION: Introduction */}
                  <section id="intro" className="scroll-mt-28 mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-12 mb-6">
                      Vous Venez d&apos;Acheter un PC Portable au Maroc et Il N&apos;a Pas Windows ?
                    </h2>
                    <p className="mb-4">
                      <strong>La situation :</strong> Vous êtes excité. Vous venez de déballer votre
                      nouveau PC portable HP Victus (ou Lenovo IdeaPad, ou Dell Inspiron) acheté chez{" "}
                      <strong>Jumia à 5000 MAD</strong>, <strong>Marjane à 4800 MAD</strong>, ou même
                      à <strong>Derb Ghallef à Casablanca</strong>. Vous l&apos;allumez pour la
                      première fois et…
                    </p>
                    <p className="mb-4">
                      <strong>Au lieu du logo Windows et de l&apos;assistant de configuration, vous
                      voyez :</strong>
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li>Un écran noir</li>
                      <li>Du texte blanc bizarre : &quot;Welcome to FreeDOS 1.3&quot;</li>
                      <li>Un curseur clignotant qui attend des commandes</li>
                      <li>Aucune interface graphique</li>
                    </ul>
                    <p className="mb-4">
                      Votre première réaction : <strong>&quot;Mon PC est cassé !&quot;</strong> ou{" "}
                      <strong>&quot;On m&apos;a arnaqué !&quot;</strong>
                    </p>
                    <p className="mb-4">
                      Respirez. <strong>Votre PC n&apos;est PAS défectueux.</strong> Et vous n&apos;avez
                      pas été arnaqué (enfin, pas si vous avez lu la description qui disait
                      &quot;Sans Système&quot; ou &quot;FreeDOS&quot;).
                    </p>
                    <p className="mb-4">
                      Ce que vous voyez, c&apos;est simplement un ordinateur vendu{" "}
                      <strong>sans Windows préinstallé</strong>. C&apos;est une pratique 100 %
                      légale et courante au Maroc pour vendre des PC moins chers.
                    </p>
                    <p className="mb-4">Dans ce guide, nous allons :</p>
                    <ul className="list-none space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden />
                        Expliquer ce qu&apos;est FreeDOS
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden />
                        Pourquoi les vendeurs proposent ça
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden />
                        Combien vous économisez réellement
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden />
                        Comment installer Windows 11 vous-même (ou nous laisser faire)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden />
                        Les pièges à éviter (problème VMD, drivers manquants)
                      </li>
                    </ul>
                    <p className="mb-0">
                      <strong>Temps de lecture : 12 minutes.</strong> À la fin, vous saurez
                      exactement quoi faire.
                    </p>
                  </section>

                  {/* SECTION: C'est quoi FreeDOS */}
                  <section id="cest-quoi-freedos" className="scroll-mt-28 mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-16 mb-6">
                      C&apos;est Quoi FreeDOS ? (Et Pourquoi C&apos;est Sur Votre PC)
                    </h2>
                    <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-4">
                      Définition simple
                    </h3>
                    <p className="mb-4">
                      FreeDOS est un <strong>système d&apos;exploitation gratuit</strong> créé en 1994
                      comme alternative open-source à MS-DOS (l&apos;ancêtre de Windows).
                    </p>
                    <p className="mb-4">
                      <strong>En termes simples :</strong> C&apos;est comme Windows, mais sans
                      interface graphique (pas de bureau, pas de souris). Il fonctionne uniquement en
                      lignes de commande. Il est <strong>100 % gratuit</strong> (contrairement à
                      Windows qui coûte environ 1200 MAD).
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-600 pl-6 py-4 rounded-r-lg my-6">
                      <p className="m-0 font-medium text-slate-800">
                        Bon à savoir : FreeDOS peut faire tourner des vieux jeux DOS (années 90) et
                        quelques logiciels très basiques. Mais impossible d&apos;utiliser Chrome,
                        Word ou regarder Netflix avec FreeDOS. C&apos;est pour ça que 99 % des
                        utilisateurs installent Windows.
                      </p>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-4">
                      Pourquoi les fabricants mettent FreeDOS ?
                    </h3>
                    <p className="mb-4">
                      Simple : <strong>pour économiser sur la licence Windows.</strong> Quand HP,
                      Lenovo ou Dell fabriquent un PC, ils ont deux options :
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                      <li>
                        <strong>Option 1 :</strong> Préinstaller Windows 11 → ils paient Microsoft
                        environ 1000–1500 MAD par PC → le prix de vente augmente.
                      </li>
                      <li>
                        <strong>Option 2 :</strong> Installer FreeDOS (gratuit) → 0 MAD de licence
                        → ils vendent le PC 1000–1500 MAD moins cher → l&apos;acheteur installe
                        Windows lui-même.
                      </li>
                    </ul>
                    <p className="mb-0">
                      Au Maroc, beaucoup de gens choisissent l&apos;Option 2 pour économiser. Le
                      problème ? Ils ne savent pas comment installer Windows après.
                    </p>
                  </section>

                  {/* SECTION: Pourquoi les vendeurs */}
                  <section id="pourquoi-vendeurs" className="scroll-mt-28 mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-16 mb-6">
                      Pourquoi Les Vendeurs Marocains Proposent des PC &quot;Sans Système&quot; ?
                    </h2>
                    <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-4">
                      1. Compétition sur les prix
                    </h3>
                    <p className="mb-4">
                      Sur Jumia ou chez Electroplanet, vous voyez souvent deux versions du même PC.
                      Exemple <strong>HP Victus 15</strong> (i5, 8 Go RAM, 512 Go SSD) : Avec Windows
                      11 = 6200 MAD. Sans Windows (FreeDOS) = 4900 MAD.{" "}
                      <strong>Différence : 1300 MAD d&apos;économie</strong> (sur le papier).
                    </p>
                    <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-4">
                      2. Certains clients ont déjà une licence Windows
                    </h3>
                    <p className="mb-4">
                      Si vous avez déjà une clé de licence Windows (récupérée d&apos;un ancien PC),
                      vous n&apos;avez pas besoin de payer une nouvelle licence.
                    </p>
                    <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-4">
                      3. Le marché des techniciens locaux
                    </h3>
                    <p className="mb-4">
                      À Derb Ghallef (Casablanca), Hay Mohammadi (Rabat) ou dans les souks
                      électroniques, des techniciens installent Windows pour 100–200 MAD. Certains
                      acheteurs préfèrent économiser 1300 MAD sur le PC et payer 200 MAD à un
                      technicien local.
                    </p>
                    <div className="bg-amber-50 border-l-4 border-amber-600 pl-6 py-4 rounded-r-lg my-6">
                      <p className="m-0 font-medium text-slate-800">
                        Attention : Beaucoup de techniciens installent des versions{" "}
                        <strong>piratées</strong> de Windows (crackées). Vous n&apos;aurez pas les
                        mises à jour de sécurité et risquez des virus. On y revient plus bas.
                      </p>
                    </div>
                  </section>

                  {/* SECTION: Combien économisez-vous */}
                  <section id="economie" className="scroll-mt-28 mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-16 mb-6">
                      Combien Économisez-Vous Vraiment Avec Un PC FreeDOS ?
                    </h2>
                    <p className="mb-4">
                      Sur le papier : PC FreeDOS 4900 MAD, PC avec Windows 6200 MAD → économie
                      apparente 1300 MAD. Mais en réalité vous devez ajouter :
                    </p>
                    <div className="overflow-x-auto my-6 rounded-xl border border-slate-200">
                      <table className="w-full text-left text-sm">
                        <thead>
                          <tr className="bg-slate-100">
                            <th className="py-3 px-4 font-bold text-slate-900">Poste de dépense</th>
                            <th className="py-3 px-4 font-bold text-slate-900">Prix</th>
                          </tr>
                        </thead>
                        <tbody className="text-slate-700">
                          <tr className="border-t border-slate-200">
                            <td className="py-2 px-4">PC FreeDOS</td>
                            <td className="py-2 px-4">4900 MAD</td>
                          </tr>
                          <tr className="border-t border-slate-200">
                            <td className="py-2 px-4">+ Licence Windows 11 (officielle)</td>
                            <td className="py-2 px-4">+ 1200 MAD</td>
                          </tr>
                          <tr className="border-t border-slate-200">
                            <td className="py-2 px-4">+ Installation par technicien</td>
                            <td className="py-2 px-4">+ 150–300 MAD</td>
                          </tr>
                          <tr className="border-t border-slate-200">
                            <td className="py-2 px-4">+ Antivirus</td>
                            <td className="py-2 px-4">+ 300–500 MAD</td>
                          </tr>
                          <tr className="border-t border-slate-200 bg-slate-50 font-bold">
                            <td className="py-3 px-4">TOTAL RÉEL</td>
                            <td className="py-3 px-4">6550–7100 MAD</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="mb-4">
                      Résultat : Vous payez potentiellement <strong>plus cher</strong> (350–900 MAD
                      de plus) qu&apos;en achetant directement un PC avec Windows préinstallé.
                    </p>
                    <p className="mb-4">
                      <strong>Quand est-ce vraiment rentable ?</strong> Acheter un PC FreeDOS est
                      intéressant si : vous avez déjà une licence Windows, vous savez installer Windows
                      vous-même, vous avez un ami technicien qui le fait gratuitement, ou vous
                      voulez installer Linux. Sinon, prenez directement la version avec Windows.
                    </p>
                  </section>

                  {/* SECTION: Marques et modèles */}
                  <section id="marques" className="scroll-mt-28 mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-16 mb-6">
                      Les Marques et Modèles Concernés au Maroc (HP, Lenovo, Dell)
                    </h2>
                    <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-4">HP</h3>
                    <p className="mb-4">
                      Modèles FreeDOS populaires : HP Victus 15 (Gaming), HP Pavilion 15, HP 250 G9.
                      Où les acheter : Jumia Maroc, Electroplanet, Marjane (rayon High-Tech).
                    </p>
                    <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Lenovo</h3>
                    <p className="mb-4">
                      Lenovo IdeaPad 3, ThinkBook 15, V15. Beaucoup de PC professionnels (ThinkPad)
                      sont vendus FreeDOS pour les entreprises qui ont des licences Windows en volume.
                    </p>
                    <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-4">Dell</h3>
                    <p className="mb-4">
                      Dell Inspiron 15, Vostro 3510, Latitude. Les PC Dell FreeDOS ont souvent le
                      problème VMD (on en parle plus bas).
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-600 pl-6 py-4 rounded-r-lg my-6">
                      <p className="m-0 font-medium text-slate-800">
                        Astuce : Sur Jumia, cherchez &quot;Sans Système&quot; ou &quot;FreeDOS&quot;
                        dans les filtres. Vous pouvez économiser 1000–1500 MAD, mais n&apos;oubliez
                        pas les coûts cachés (licence + installation).
                      </p>
                    </div>
                  </section>

                  {/* SECTION: Comment installer Windows 11 (HowTo) */}
                  <section id="guide-install" className="scroll-mt-28 mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-16 mb-6">
                      Comment Installer Windows 11 Sur Un PC FreeDOS : Le Guide Complet
                    </h2>
                    <p className="mb-4">
                      Vous êtes décidé à installer Windows vous-même ? Temps estimé : 2–3 heures.
                      Niveau technique : Intermédiaire.
                    </p>
                    <div className="bg-amber-50 border-l-4 border-amber-600 pl-6 py-4 rounded-r-lg my-6">
                      <p className="m-0 font-medium text-slate-800">
                        Avant de commencer : Connexion Internet stable, clé USB vide (8 Go minimum).
                        Si vous n&apos;êtes pas à l&apos;aise avec le BIOS, notre{" "}
                        <Link href="/depannage-informatique" className="text-blue-600 hover:underline">
                          service d&apos;installation à distance
                        </Link>{" "}
                        est là pour vous.
                      </p>
                    </div>

                    <h3 id="step1" className="text-xl font-semibold text-slate-800 mt-12 mb-4 scroll-mt-28">
                      Étape 1 : Télécharger Windows 11 (ISO officiel)
                    </h3>
                    <p className="mb-4">
                      Allez sur le site officiel Microsoft (microsoft.com/software-download/windows11).
                      Téléchargez &quot;l&apos;outil de création de supports&quot;. Exécutez l&apos;outil,
                      choisissez &quot;Créer un support d&apos;installation pour un autre PC&quot;,
                      sélectionnez &quot;Clé USB&quot;. Alternative : téléchargez l&apos;ISO et
                      utilisez <strong>Rufus</strong> (Windows) ou <strong>Etcher</strong> (Mac/Linux)
                      pour créer la clé bootable.
                    </p>

                    <h3 id="step2" className="text-xl font-semibold text-slate-800 mt-12 mb-4 scroll-mt-28">
                      Étape 2 : Créer une clé USB bootable
                    </h3>
                    <p className="mb-4">
                      Si vous avez l&apos;ISO : téléchargez Rufus (rufus.ie), insérez la clé USB (elle
                      sera formatée), lancez Rufus, sélectionnez l&apos;ISO, schéma GPT, destination
                      UEFI, puis Démarrer. Attendez 5–10 minutes.
                    </p>

                    <h3 id="step3" className="text-xl font-semibold text-slate-800 mt-12 mb-4 scroll-mt-28">
                      Étape 3 : Démarrer sur la clé USB
                    </h3>
                    <p className="mb-4">
                      Insérez la clé, éteignez le PC, rallumez et appuyez immédiatement sur :{" "}
                      <strong>HP : F9</strong> (ou Esc puis F9), <strong>Lenovo : F12</strong>,{" "}
                      <strong>Dell : F12</strong>. Dans le Boot Menu, sélectionnez votre clé USB
                      (ex. &quot;USB HDD&quot;) et Entrée. Si la clé n&apos;apparaît pas, désactivez
                      Secure Boot dans le BIOS (F10 HP, F2 Dell/Lenovo).
                    </p>

                    <h3 id="step4" className="text-xl font-semibold text-slate-800 mt-12 mb-4 scroll-mt-28">
                      Étape 4 : Installer Windows 11
                    </h3>
                    <p className="mb-4">
                      Langue : Français. &quot;Installer maintenant&quot;. Clé de produit : entrez-la
                      ou &quot;Je n&apos;ai pas de clé&quot; (activation plus tard). Acceptez les
                      conditions. Choisissez &quot;Personnalisé : Installer uniquement Windows&quot;.
                      Sélectionnez le disque (si aucun disque n&apos;apparaît, voir la section VMD
                      ci-dessous). Suivant → l&apos;installation démarre (15–30 min). Le PC
                      redémarre plusieurs fois (normal).
                    </p>

                    <h3 id="step5" className="text-xl font-semibold text-slate-800 mt-12 mb-4 scroll-mt-28">
                      Étape 5 : Configuration initiale puis drivers
                    </h3>
                    <p className="mb-4">
                      Après l&apos;installation : Région Maroc, clavier Français. Nom du PC, compte
                      Microsoft ou local. Ensuite, <strong>les drivers</strong> : souvent le WiFi, le
                      son et le touchpad ne marchent pas. Connectez en Ethernet si possible, puis
                      Paramètres → Windows Update (Windows télécharge les drivers en 30–60 min).
                      Ou téléchargez manuellement : HP (support.hp.com), Lenovo (support.lenovo.com
                      → Lenovo System Update), Dell (dell.com/support → SupportAssist). Redémarrez
                      après installation. Votre PC est alors 100 % fonctionnel.
                    </p>
                  </section>

                  {/* SECTION: VMD Trap */}
                  <section id="vmd" className="scroll-mt-28 mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-16 mb-6">
                      Le Piège N°1 : Le Disque Dur N&apos;est Pas Détecté (Problème VMD/AHCI)
                    </h2>
                    <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 my-6">
                      <p className="font-bold text-slate-900 mb-2">
                        Le problème le plus fréquent : à l&apos;étape 4, aucun disque n&apos;apparaît.
                        L&apos;écran affiche &quot;Aucun lecteur n&apos;a été trouvé&quot;. Votre PC
                        n&apos;est pas cassé : c&apos;est le <strong>problème VMD</strong> (Volume
                        Management Device).
                      </p>
                    </div>
                    <p className="mb-4">
                      Les PC HP et Dell récents (2021+) utilisent Intel VMD / RST. Windows 11
                      standard ne reconnaît pas VMD. Il faut désactiver VMD dans le BIOS (passer en
                      AHCI).
                    </p>
                    <p className="mb-4">
                      <strong>HP :</strong> Redémarrez → F10 → Advanced → System Options → SATA
                      Operation (ou VMD Controller) → changez &quot;RAID&quot;/&quot;VMD&quot; en
                      &quot;AHCI&quot; → F10 pour sauvegarder.
                    </p>
                    <p className="mb-4">
                      <strong>Dell :</strong> F2 → System Configuration → SATA Operation → &quot;RAID
                      On&quot; vers &quot;AHCI&quot; → Apply, Exit.
                    </p>
                    <p className="mb-4">
                      <strong>Lenovo :</strong> F2 ou Fn+F2 → Configuration → SATA Controller Mode →
                      AHCI → F10.
                    </p>
                    <p className="mb-0">
                      Relancez l&apos;installation depuis la clé USB : le disque apparaît. C&apos;est
                      la solution qui marche dans la grande majorité des cas.
                    </p>
                  </section>

                  {/* SECTION: Où acheter licence */}
                  <section id="licence" className="scroll-mt-28 mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-16 mb-6">
                      Où Acheter Une Licence Windows 11 Pas Chère Au Maroc ?
                    </h2>
                    <p className="mb-4">
                      <strong>Option 1 – Microsoft Store (officiel) :</strong> 1200–1500 MAD.
                      Licence légale, mises à jour à vie. Option 2 – Revendeurs en ligne : méfiez-vous
                      des clés à 50–100 MAD (souvent OEM ou volume, illégales ou désactivables).
                    </p>
                    <p className="mb-4">
                      <strong>Option 3 – Windows sans licence :</strong> Vous pouvez utiliser
                      Windows 11 non activé (légal). Limitations : filigrane &quot;Activer
                      Windows&quot;, pas de personnalisation du fond d&apos;écran ; le reste
                      fonctionne (Chrome, mises à jour de sécurité). Si vous commandez notre Pack
                      Démarrage, on vous aide pour la licence.
                    </p>
                  </section>

                  {/* SECTION: DIY vs Pro */}
                  <section id="diy-vs-pro" className="scroll-mt-28 mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-16 mb-6">
                      Installation DIY vs Service Professionnel : Tableau Comparatif
                    </h2>
                    <div className="overflow-x-auto my-6 rounded-xl border border-slate-200">
                      <table className="w-full text-left text-sm">
                        <thead>
                          <tr className="bg-slate-100">
                            <th className="py-3 px-4 font-bold text-slate-900">Critère</th>
                            <th className="py-3 px-4 font-bold text-slate-900">DIY (soi-même)</th>
                            <th className="py-3 px-4 font-bold text-slate-900">Service Pro (AlloSupport)</th>
                          </tr>
                        </thead>
                        <tbody className="text-slate-700">
                          <tr className="border-t border-slate-200"><td className="py-2 px-4">Temps</td><td className="py-2 px-4">2–4 h</td><td className="py-2 px-4">1 h</td></tr>
                          <tr className="border-t border-slate-200"><td className="py-2 px-4">Niveau technique</td><td className="py-2 px-4">Intermédiaire</td><td className="py-2 px-4">Aucun</td></tr>
                          <tr className="border-t border-slate-200"><td className="py-2 px-4">Risque d&apos;erreur</td><td className="py-2 px-4">Moyen</td><td className="py-2 px-4">Quasi nul</td></tr>
                          <tr className="border-t border-slate-200"><td className="py-2 px-4">Drivers</td><td className="py-2 px-4">Manuels</td><td className="py-2 px-4">Installés auto</td></tr>
                          <tr className="border-t border-slate-200"><td className="py-2 px-4">Support après</td><td className="py-2 px-4">Aucun</td><td className="py-2 px-4">WhatsApp 7j/7</td></tr>
                          <tr className="border-t border-slate-200 bg-slate-50"><td className="py-2 px-4 font-bold">Prix total estimé</td><td className="py-2 px-4">~1200 MAD + votre temps</td><td className="py-2 px-4 font-bold">200 MAD (Pack complet)</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="mb-4">
                      DIY si vous êtes à l&apos;aise avec le BIOS et avez du temps. Service pro si
                      vous voulez utiliser votre PC tout de suite, sans stress.{" "}
                      <a href="#pack-demarrage" className="text-blue-600 hover:underline font-medium">
                        Voir notre Pack Démarrage
                      </a>
                      .
                    </p>
                  </section>

                  {/* SECTION: Pack Démarrage (CTA) */}
                  <section id="pack-demarrage" className="scroll-mt-28 mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-16 mb-6">
                      Notre Solution : Pack Démarrage AlloSupport (150–250 MAD)
                    </h2>
                    <p className="mb-6">
                      Installation complète à distance en 1 heure : Windows 11 Pro, tous les
                      drivers, antivirus (Kaspersky ou Bitdefender), pack logiciels (Chrome, VLC,
                      etc.), optimisation et support 30 jours.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6 my-8">
                      <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                        <div className="font-bold text-slate-900 mb-2">Pack Standard – 150 MAD</div>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>Windows 11 Home + activation</li>
                          <li>Drivers essentiels, logiciels de base</li>
                          <li>Support 15 jours</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-500 relative">
                        <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                          POPULAIRE
                        </span>
                        <div className="font-bold text-slate-900 mb-2">Pack Premium – 250 MAD</div>
                        <ul className="text-sm text-slate-600 space-y-1">
                          <li>Windows 11 Pro + activation</li>
                          <li>Tous les drivers + Antivirus 6 mois</li>
                          <li>Pack logiciels complet, support 30 jours</li>
                        </ul>
                      </div>
                    </div>
                    <p className="mb-4 text-sm text-slate-600">
                      Comment ça marche : commandez sur WhatsApp → rendez-vous dans l&apos;heure →
                      vous téléchargez TeamViewer → on installe en direct (45–60 min) → paiement
                      après validation (CIH Mobile, Cash Plus, virement). Disponible à Casablanca,
                      Rabat, Marrakech, Tanger, Fès, Agadir et partout au Maroc (à distance).
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 my-8">
                      <a
                        href={WHATSAPP_FREEDOS}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-4 rounded-xl transition"
                        aria-label="Commander sur WhatsApp"
                      >
                        <MessageCircle className="w-5 h-5" aria-hidden />
                        Commander sur WhatsApp
                      </a>
                      <a
                        href={`tel:${GOOGLE_BUSINESS.PHONE}`}
                        className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-4 rounded-xl transition"
                        aria-label="Appeler AlloSupport"
                      >
                        <Phone className="w-5 h-5" aria-hidden />
                        Appeler : {GOOGLE_BUSINESS.PHONE_FORMATTED}
                      </a>
                    </div>
                    <p className="text-sm text-slate-600 mb-0">
                      ✅ 5000+ PC installés au Maroc • Note 4.9/5 • Installation garantie ou
                      remboursé • Service 7j/7
                    </p>
                  </section>

                  {/* Internal links (silo) */}
                  <p className="my-8 text-slate-600">
                    N&apos;oubliez pas qu&apos;un PC sans antivirus est une cible facile. Découvrez{" "}
                    <Link href="/antivirus-maroc" className="text-blue-600 hover:underline font-medium">
                      nos recommandations d&apos;antivirus pour le Maroc
                    </Link>
                    . Vous êtes une PME avec plusieurs PC FreeDOS ? Consultez nos{" "}
                    <Link href="/support-pme" className="text-blue-600 hover:underline font-medium">
                      forfaits pour entreprises
                    </Link>
                    . Plus d&apos;articles sur notre{" "}
                    <Link href="/blog" className="text-blue-600 hover:underline font-medium">
                      blog support informatique
                    </Link>
                    .
                  </p>

                  {/* SECTION: FAQ */}
                  <section id="faq" className="scroll-mt-28 mb-16">
                    <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-16 mb-6">
                      Questions Fréquentes (FAQ)
                    </h2>
                    <div className="space-y-4">
                      {[
                        {
                          q: "C'est quoi FreeDOS sur un PC portable ?",
                          a: "FreeDOS est un système d'exploitation gratuit, très basique, qui remplace Windows. Les fabricants l'installent pour vendre des PC moins chers (sans payer la licence Windows). Vous voyez un écran noir au démarrage car FreeDOS n'a pas d'interface graphique.",
                        },
                        {
                          q: "Est-ce que mon PC est défectueux s'il affiche FreeDOS ?",
                          a: "Non ! Votre PC fonctionne parfaitement. L'écran FreeDOS est normal : c'est simplement un ordinateur vendu « Sans Système ». Vous devez installer Windows vous-même ou faire appel à un professionnel.",
                        },
                        {
                          q: "Combien coûte l'installation de Windows 11 au Maroc ?",
                          a: "L'installation professionnelle (Windows 11 + Drivers + logiciels de base) coûte entre 150 et 300 MAD. AlloSupport propose un Pack Démarrage à partir de 150 MAD avec installation à distance en 1 heure.",
                        },
                        {
                          q: "Est-ce que la garantie saute si je change FreeDOS par Windows ?",
                          a: "Non. Changer le système d'exploitation ne fait pas sauter la garantie matérielle au Maroc. La garantie couvre le hardware (écran, clavier, batterie), pas le logiciel.",
                        },
                        {
                          q: "Où acheter une licence Windows 11 pas chère au Maroc ?",
                          a: "Licence officielle sur le Microsoft Store (1200–1500 MAD) ou revendeurs agréés. Attention aux licences à 50 MAD sur Internet : souvent illégales ou temporaires. Notre Pack Démarrage peut inclure la licence.",
                        },
                        {
                          q: "Pourquoi mon disque dur n'est pas détecté pendant l'installation Windows ?",
                          a: "C'est le problème VMD/RST. Les PC HP et Dell récents utilisent Intel VMD. Accédez au BIOS (F10 ou F2 au démarrage) et changez RAID/VMD en AHCI pour que Windows détecte le SSD. Voir la section détaillée ci-dessus.",
                        },
                        {
                          q: "Puis-je installer Linux au lieu de Windows sur un PC FreeDOS ?",
                          a: "Oui. FreeDOS est un bon point de départ pour installer Linux (Ubuntu, Linux Mint). L'installation est souvent plus simple car Linux inclut beaucoup de drivers automatiquement.",
                        },
                        {
                          q: "Combien de temps prend l'installation à distance d'AlloSupport ?",
                          a: "L'installation complète (Windows + Drivers + Antivirus + Logiciels) prend 45 minutes à 1 heure. On fait tout en direct pendant que vous regardez. Vous pouvez utiliser votre PC immédiatement après.",
                        },
                      ].map((faq, i) => (
                        <details
                          key={i}
                          className="group rounded-xl border border-slate-200 bg-slate-50 overflow-hidden"
                        >
                          <summary className="flex items-center justify-between gap-2 py-4 px-6 cursor-pointer list-none font-bold text-slate-900 hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            {faq.q}
                            <ChevronDown
                              className="w-5 h-5 shrink-0 transition group-open:rotate-180"
                              aria-hidden
                            />
                          </summary>
                          <div className="px-6 pb-4 pt-0 text-slate-600">
                            <p className="m-0">{faq.a}</p>
                          </div>
                        </details>
                      ))}
                    </div>
                  </section>

                  {/* Related articles */}
                  <section className="mt-16 pt-8 border-t border-slate-200">
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Articles liés</h2>
                    <ul className="space-y-2 text-slate-700">
                      <li>
                        <Link href="/antivirus-maroc" className="text-blue-600 hover:underline">
                          Antivirus Maroc : Kaspersky & Bitdefender (licence officielle)
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/7-pannes-pc-courantes-2026-maroc" className="text-blue-600 hover:underline">
                          PC lent ? 7 pannes courantes et solutions (Maroc 2026)
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/meilleur-antivirus-gratuit-maroc-2026-comparatif" className="text-blue-600 hover:underline">
                          Meilleur antivirus gratuit Maroc 2026 – Comparatif
                        </Link>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>

              {/* Sticky TOC - desktop only */}
              <aside
                className="hidden lg:block relative"
                aria-label="Sommaire de l'article"
              >
                <div className="sticky top-28 p-6 bg-slate-50 rounded-xl border border-slate-200">
                  <h2 className="text-sm font-bold text-slate-900 mb-4">Sommaire</h2>
                  <ol className="space-y-2 text-sm text-slate-600">
                    {[
                      { id: "intro", label: "PC sans Windows ?" },
                      { id: "cest-quoi-freedos", label: "C'est quoi FreeDOS ?" },
                      { id: "pourquoi-vendeurs", label: "Pourquoi Sans Système ?" },
                      { id: "economie", label: "Combien économiser ?" },
                      { id: "marques", label: "Marques (HP, Lenovo, Dell)" },
                      { id: "guide-install", label: "Installer Windows 11" },
                      { id: "vmd", label: "Disque non détecté (VMD)" },
                      { id: "licence", label: "Licence Windows" },
                      { id: "diy-vs-pro", label: "DIY vs Pro" },
                      { id: "pack-demarrage", label: "Pack Démarrage" },
                      { id: "faq", label: "FAQ" },
                    ].map((item) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className="text-blue-600 hover:underline">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              </aside>
            </div>
          </div>
        </article>

        {/* Sticky floating CTA - desktop */}
        <div className="fixed bottom-6 right-6 z-50 hidden lg:flex" aria-hidden>
          <a
            href={WHATSAPP_FREEDOS}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Installer Windows maintenant sur WhatsApp"
          >
            <MessageCircle className="w-6 h-6 shrink-0" aria-hidden />
            <span className="font-semibold">Installer Windows Maintenant</span>
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
