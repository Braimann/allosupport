import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  User,
  Calendar,
  Clock,
  MessageCircle,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ChevronDown,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";

const WHATSAPP_WINDOWS11 =
  `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent("Bonjour AlloSupport, je veux installer Windows 11 à distance. Contexte: Installation Windows 11 Maroc 2026.")}`;

const BASE = "https://allosupport.ma/blog/installation-windows-11-maroc-2026-prix";

// ========== JSON-LD SCHEMAS ==========
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Installation Windows 11 Maroc 2026 : Guide Complet + Prix Licence",
  description:
    "Guide technique complet pour installer Windows 11 au Maroc : clé USB, BIOS, VMD, licence officielle, prix en MAD",
  image: "https://allosupport.ma/blog/win10.webp",
  author: { "@type": "Organization", name: "AlloSupport Maroc" },
  publisher: {
    "@type": "Organization",
    name: "AlloSupport Maroc",
    logo: { "@type": "ImageObject", url: "https://allosupport.ma/logo.png" },
  },
  datePublished: "2026-02-12",
  dateModified: "2026-02-12",
  mainEntityOfPage: BASE,
  keywords: "installation windows 11 maroc, licence windows 11 prix, vmd probleme",
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Comment Installer Windows 11 au Maroc en 2026",
  description:
    "Guide étape par étape pour installer Windows 11 sur un PC au Maroc (FreeDOS, Windows 10, PC vierge)",
  image: "https://allosupport.ma/blog/win10.webp",
  totalTime: "PT2H",
  estimatedCost: { "@type": "MonetaryAmount", currency: "MAD", value: "0" },
  tool: [
    { "@type": "HowToTool", name: "Clé USB 8GB minimum" },
    { "@type": "HowToTool", name: "Rufus (logiciel gratuit)" },
    { "@type": "HowToTool", name: "Fichier ISO Windows 11" },
  ],
  supply: [{ "@type": "HowToSupply", name: "Licence Windows 11 (optionnelle au début)" }],
  step: [
    {
      "@type": "HowToStep",
      name: "Télécharger Windows 11 ISO Officiel",
      text: "Rendez-vous sur le site Microsoft et téléchargez l'outil de création de média Windows 11 ou le fichier ISO direct",
      url: `${BASE}#step1`,
    },
    {
      "@type": "HowToStep",
      name: "Créer une Clé USB Bootable avec Rufus",
      text: "Téléchargez Rufus, branchez votre clé USB 8GB+, sélectionnez le fichier ISO Windows 11, cliquez sur Démarrer",
      url: `${BASE}#step2`,
    },
    {
      "@type": "HowToStep",
      name: "Accéder au BIOS et Désactiver VMD (HP/Lenovo/Dell)",
      text: "Redémarrez le PC, appuyez sur F10 ou F2, allez dans Storage Configuration, changez VMD/RST en AHCI pour détecter le disque",
      url: `${BASE}#step3-vmd`,
    },
    {
      "@type": "HowToStep",
      name: "Booter sur la Clé USB",
      text: "Branchez la clé USB, redémarrez, appuyez sur F9 ou F12, sélectionnez USB Boot, validez",
      url: `${BASE}#step4`,
    },
    {
      "@type": "HowToStep",
      name: "Installer Windows 11",
      text: "Suivez l'assistant d'installation : langue, partition disque, compte Microsoft, configuration initiale. Durée 20-40 minutes",
      url: `${BASE}#step5`,
    },
    {
      "@type": "HowToStep",
      name: "Installer les Drivers (WiFi, Audio, Touchpad)",
      text: "Allez sur le site HP/Lenovo/Dell Support, entrez votre numéro de série, téléchargez et installez tous les drivers manquants",
      url: `${BASE}#step6`,
    },
    {
      "@type": "HowToStep",
      name: "Activer Windows 11 avec Licence Officielle",
      text: "Allez dans Paramètres > Activation, cliquez sur Modifier la clé de produit, entrez votre licence Windows 11 achetée",
      url: `${BASE}#step7`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Combien coûte une licence Windows 11 officielle au Maroc en 2026 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Une licence Windows 11 Home officielle coûte 1200-1500 MAD sur le Microsoft Store. Windows 11 Pro coûte 1800-2200 MAD. Attention aux licences à 50 MAD sur Internet : souvent illégales ou à durée limitée.",
      },
    },
    {
      "@type": "Question",
      name: "Pourquoi mon disque dur n'est pas détecté pendant l'installation de Windows 11 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "C'est le problème VMD/Intel RST. Les PC HP, Lenovo et Dell récents utilisent Intel VMD par défaut. Solution : accédez au BIOS (F10 ou F2), allez dans Storage Options, changez VMD/RAID en AHCI. Le disque sera détecté.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps prend l'installation de Windows 11 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Préparation de la clé USB : 15-30 min. Installation Windows 11 : 20-40 min. Installation des drivers : 20-30 min. Total : 1h30-2h si vous le faites vous-même. Notre service à distance : 1 heure chrono.",
      },
    },
    {
      "@type": "Question",
      name: "Est-ce que je perds mes fichiers en installant Windows 11 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, si vous faites une installation propre (formatage). Solution : sauvegardez vos fichiers sur clé USB ou disque externe AVANT l'installation. Nous proposons aussi une récupération de données si besoin.",
      },
    },
    {
      "@type": "Question",
      name: "Mon PC est compatible avec Windows 11 ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Windows 11 nécessite : processeur 8ème génération Intel ou AMD Ryzen 2000+, 4GB RAM (8GB recommandé), 64GB stockage, TPM 2.0, UEFI. Téléchargez PC Health Check Microsoft pour vérifier.",
      },
    },
    {
      "@type": "Question",
      name: "Où acheter une licence Windows 11 pas chère au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Options légales : Microsoft Store officiel (1200-1500 MAD), revendeurs agréés (Marjane, Electroplanet). Évitez les licences à 50-100 MAD sur Facebook/Avito : souvent crackées, bloquées après quelques mois.",
      },
    },
    {
      "@type": "Question",
      name: "AlloSupport peut-il installer Windows 11 sur mon PC à distance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui ! Notre forfait 250 MAD inclut : installation Windows 11, activation, drivers complets, logiciels de base (Chrome, VLC, etc.), antivirus 6 mois. Intervention en 1 heure via TeamViewer. Casablanca, Rabat, tout le Maroc.",
      },
    },
  ],
};

// ========== METADATA ==========
export const metadata: Metadata = {
  title:
    "Installation Windows 11 Maroc 2026 : Guide Complet + Prix Licence (Casablanca/Rabat)",
  description:
    "Guide installation Windows 11 au Maroc : clé USB bootable, résoudre VMD, licence officielle 1200 DH, installation à distance Casablanca/Rabat/Marrakech. Technicien certifié.",
  keywords: [
    "installation windows 11 maroc",
    "installer windows 11 au maroc",
    "licence windows 11 maroc",
    "probleme vmd windows 11",
    "installation windows 11 pc freedos",
    "windows 11 casablanca",
    "installation windows 11 rabat",
    "licence windows 11 prix maroc",
    "installer windows 11 clé usb",
    "installation windows 11 à distance",
  ],
  authors: [{ name: "AlloSupport Maroc - Équipe Technique" }],
  openGraph: {
    title: "Installation Windows 11 Maroc 2026 : Guide + Prix Licence",
    description:
      "Guide complet : clé USB bootable, résoudre VMD, licence officielle. Installation à distance 250 MAD.",
    url: "https://allosupport.ma/blog/installation-windows-11-maroc-2026-prix",
    images: [
      {
        url: "https://allosupport.ma/blog/win10.webp",
        width: 1200,
        height: 630,
        alt: "Installation Windows 11 au Maroc 2026 : guide complet clé USB, VMD, licence officielle - Casablanca, Rabat, Marrakech",
      },
    ],
    locale: "fr_MA",
    type: "article",
    publishedTime: "2026-02-12T00:00:00Z",
  },
  alternates: {
    canonical: "https://allosupport.ma/blog/installation-windows-11-maroc-2026-prix",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
};

const FAQ_ITEMS = [
  {
    q: "Combien coûte une licence Windows 11 officielle au Maroc en 2026 ?",
    a: "Une licence Windows 11 Home officielle coûte 1200-1500 MAD sur le Microsoft Store. Windows 11 Pro coûte 1800-2200 MAD. Attention aux licences à 50 MAD sur Internet : souvent illégales ou à durée limitée.",
  },
  {
    q: "Pourquoi mon disque dur n'est pas détecté pendant l'installation de Windows 11 ?",
    a: "C'est le problème VMD/Intel RST. Les PC HP, Lenovo et Dell récents utilisent Intel VMD par défaut. Accédez au BIOS (F10 ou F2), allez dans Storage Options, changez VMD/RAID en AHCI. Le disque sera détecté.",
  },
  {
    q: "Combien de temps prend l'installation de Windows 11 ?",
    a: "Préparation clé USB : 15-30 min. Installation Windows : 20-40 min. Drivers : 20-30 min. Total : 1h30-2h en DIY. Notre service à distance : 1 heure chrono.",
  },
  {
    q: "Est-ce que je perds mes fichiers en installant Windows 11 ?",
    a: "Oui, en installation propre (formatage). Sauvegardez sur clé USB ou disque externe avant. Nous proposons aussi une récupération de données si besoin.",
  },
  {
    q: "Mon PC est compatible avec Windows 11 ?",
    a: "Windows 11 nécessite : processeur 8ème gen Intel ou Ryzen 2000+, 4 Go RAM (8 Go recommandé), 64 Go stockage, TPM 2.0, UEFI. Utilisez PC Health Check Microsoft.",
  },
  {
    q: "Où acheter une licence Windows 11 pas chère au Maroc ?",
    a: "Légal : Microsoft Store (1200-1500 MAD), revendeurs agréés (Marjane, Electroplanet). Évitez les licences à 50-100 MAD sur Facebook/Avito : souvent crackées.",
  },
  {
    q: "AlloSupport peut-il installer Windows 11 sur mon PC à distance ?",
    a: "Oui. Forfait 250 MAD : installation Windows 11, activation, drivers, logiciels de base, antivirus 6 mois. Intervention en 1 h via TeamViewer. Casablanca, Rabat, tout le Maroc.",
  },
];

export default function BlogInstallationWindows11Maroc2026Prix() {
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
              <Link href="/" className="hover:text-slate-700">Accueil</Link>
              <span aria-hidden> / </span>
              <Link href="/blog" className="hover:text-slate-700">Blog</Link>
              <span aria-hidden> / </span>
              <span className="text-slate-900">Installation Windows 11 Maroc 2026</span>
            </nav>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 bg-slate-200">
              <Image
                src="/blog/win10.webp"
                alt="Installation Windows 11 au Maroc 2026 : guide complet clé USB bootable, résolution VMD disque non détecté, prix licence - Casablanca, Rabat, Marrakech"
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

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 mb-6">
              Installation Windows 11 Maroc 2026 : Guide Complet + Prix Licence (Casablanca,
              Rabat, Marrakech)
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Vous avez acheté un PC HP, Lenovo ou Dell sans système chez Jumia, Marjane ou
              Electroplanet ? Ce guide vous explique comment installer Windows 11 vous-même (ou
              via notre service à distance).
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 pb-8 border-b border-slate-200">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" aria-hidden />
                AlloSupport Maroc - Équipe Technique
              </span>
              <time dateTime="2026-02-12" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" aria-hidden />
                12 Février 2026
              </time>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" aria-hidden />
                15 min de lecture
              </span>
            </div>
          </div>
        </section>

        {/* ========== ARTICLE BODY ========== */}
        <article className="pb-20">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed">
              {/* Intro + link FreeDOS */}
              <section className="mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-12 mb-6">
                  Vous Avez Acheté un PC Sans Windows au Maroc ? Voici Comment Installer
                  Windows 11
                </h2>
                <p className="mb-4">
                  L&apos;<strong>installation Windows 11 au Maroc</strong> est une demande
                  fréquente : PC FreeDOS acheté chez Jumia ou Marjane, mise à jour depuis
                  Windows 10, ou PC vierge. Vous venez d&apos;acheter un PC portable
                  &quot;Sans Système&quot; ou FreeDOS ? Consultez d&apos;abord notre{" "}
                  <Link
                    href="/blog/pc-portable-sans-windows-freedos-maroc"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    guide spécifique pour PC FreeDOS au Maroc
                  </Link>{" "}
                  qui explique pourquoi votre ordinateur neuf n&apos;a pas Windows et comment
                  y remédier.
                </p>
                <p className="mb-4">
                  Dans ce guide nous couvrons : prérequis compatibilité, téléchargement ISO
                  officiel, création de clé USB bootable avec Rufus, résolution du problème
                  <strong> VMD (disque non détecté)</strong>, installation pas à pas,
                  drivers HP/Lenovo/Dell, activation et <strong>prix licence Windows 11 au
                  Maroc en 2026</strong>. Vous préférez qu&apos;un professionnel s&apos;en
                  occupe ? Notre service de{" "}
                  <Link
                    href="/depannage-informatique"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    dépannage informatique à distance
                  </Link>{" "}
                  inclut l&apos;installation complète de Windows 11 en 1 heure chrono.
                </p>
              </section>

              {/* Prérequis */}
              <section id="prerequis" className="scroll-mt-28 mb-16">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-16 mb-6">
                  Prérequis : Votre PC Est-il Compatible avec Windows 11 ?
                </h2>
                <p className="mb-4">
                  Windows 11 exige : processeur 8ème génération Intel (ou équivalent AMD Ryzen
                  2000+), 4 Go RAM (8 Go recommandé), 64 Go de stockage, TPM 2.0, mode UEFI. Les
                  PC achetés en 2022-2026 (HP Victus, Lenovo IdeaPad, Dell Inspiron) sont
                  presque tous compatibles. Téléchargez l&apos;outil &quot;PC Health
                  Check&quot; sur le site Microsoft pour vérifier en un clic.
                </p>
              </section>

              {/* VMD Alert */}
              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-xl">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" aria-hidden />
                  <div>
                    <h3 className="text-xl font-bold text-red-900 mb-2">
                      Problème Fréquent : &quot;Aucun Disque Dur Détecté&quot; (VMD/Intel RST)
                    </h3>
                    <p className="text-red-800 leading-relaxed mb-4">
                      Si vous avez un PC HP Victus, Lenovo IdeaPad ou Dell Inspiron acheté en
                      2024-2026, vous verrez probablement cette erreur pendant
                      l&apos;installation. <strong>Ne paniquez pas !</strong>
                    </p>
                    <p className="text-red-800 font-semibold">
                      Solution rapide : Accédez au BIOS (F10 au démarrage), allez dans
                      &quot;Storage Configuration&quot;, changez &quot;VMD Controller&quot; ou
                      &quot;Intel RST&quot; en mode &quot;AHCI&quot;. Sauvegardez et redémarrez.
                    </p>
                    <a
                      href="#step3-vmd"
                      className="inline-block mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition"
                    >
                      Voir la solution détaillée →
                    </a>
                  </div>
                </div>
              </div>

              {/* Step 1 */}
              <section id="step1" className="scroll-mt-28 mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    1
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                    Étape 1 : Télécharger Windows 11 ISO Officiel (Gratuit)
                  </h2>
                </div>
                <p className="mb-4">
                  Rendez-vous sur le site officiel Microsoft (microsoft.com/software-download/windows11).
                  Téléchargez soit &quot;l&apos;outil de création de supports&quot; (pour créer
                  directement la clé USB), soit le fichier ISO. Le téléchargement fait environ
                  5 Go ; prévoyez une connexion stable. C&apos;est gratuit : vous n&apos;avez pas
                  besoin de clé de produit pour télécharger.
                </p>
              </section>

              {/* Step 2 */}
              <section id="step2" className="scroll-mt-28 mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    2
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                    Étape 2 : Créer une Clé USB Bootable avec Rufus
                  </h2>
                </div>
                <div className="flex items-center gap-2 text-slate-600 mb-6">
                  <Clock className="w-5 h-5" aria-hidden />
                  <span>Durée estimée : 15-20 minutes</span>
                </div>
                <p className="mb-4">
                  Rufus (rufus.ie) est gratuit et fiable. Branchez une clé USB d&apos;au moins 8
                  Go (elle sera formatée). Lancez Rufus, sélectionnez votre clé, cliquez sur
                  &quot;SÉLECTION&quot; et choisissez l&apos;ISO Windows 11. Laissez GPT et UEFI,
                  puis &quot;DÉMARRER&quot;. Attendez 10-15 minutes.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r-lg">
                  <p className="flex items-start gap-3 text-blue-900">
                    <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" aria-hidden />
                    <span>
                      <strong>Astuce Maroc :</strong> Clé USB 8 Go : 30-50 MAD chez Marjane,
                      Electroplanet ou Derb Ghallef.
                    </span>
                  </p>
                </div>
              </section>

              {/* Step 3 VMD */}
              <section id="step3-vmd" className="scroll-mt-28 mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    3
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                    Étape 3 : Le Piège VMD (Pourquoi Votre Disque Dur N&apos;Est Pas Détecté)
                  </h2>
                </div>
                <p className="mb-4">
                  Les PC HP, Lenovo et Dell récents utilisent Intel VMD (Volume Management
                  Device). Windows 11 ne détecte pas le disque tant que VMD est activé.
                  Redémarrez, appuyez sur <strong>F10</strong> (HP) ou <strong>F2</strong> (Dell,
                  Lenovo). Dans le BIOS, cherchez &quot;Storage&quot; ou &quot;SATA
                  Operation&quot; et passez de &quot;VMD&quot; ou &quot;RAID&quot; à
                  &quot;AHCI&quot;. Sauvegardez (F10) et quittez. Relancez l&apos;installation :
                  le disque apparaîtra.
                </p>
              </section>

              {/* Step 4 */}
              <section id="step4" className="scroll-mt-28 mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    4
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                    Étape 4 : Démarrer sur la Clé USB (F9/F12 Boot Menu)
                  </h2>
                </div>
                <p className="mb-4">
                  Clé USB branchée, redémarrez le PC. Dès l&apos;allumage, appuyez sur{" "}
                  <strong>F9</strong> (HP), <strong>F12</strong> (Lenovo, Dell) pour ouvrir le
                  menu de démarrage. Sélectionnez &quot;USB&quot; ou &quot;UEFI: USB&quot; et
                  validez. L&apos;assistant d&apos;installation Windows s&apos;affiche.
                </p>
              </section>

              {/* Step 5 */}
              <section id="step5" className="scroll-mt-28 mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    5
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                    Étape 5 : Installer Windows 11 Étape par Étape
                  </h2>
                </div>
                <p className="mb-4">
                  Choisissez la langue (Français), &quot;Installer maintenant&quot;. Si vous
                  n&apos;avez pas encore de clé, cliquez sur &quot;Je n&apos;ai pas de clé de
                  produit&quot; (vous pourrez activer plus tard). Acceptez les conditions,
                  puis &quot;Personnalisé : installer uniquement Windows&quot;. Sélectionnez
                  le disque (il doit apparaître si VMD a été désactivé), Suivant.
                  L&apos;installation dure 20-40 minutes ; le PC redémarre plusieurs fois.
                </p>
              </section>

              {/* Step 6 */}
              <section id="step6" className="scroll-mt-28 mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    6
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                    Étape 6 : Installer Les Drivers (WiFi, Audio, Touchpad) - HP/Lenovo/Dell
                  </h2>
                </div>
                <p className="mb-4">
                  Après Windows, le WiFi ou le son peuvent ne pas marcher. Connectez le PC en
                  Ethernet si possible, puis allez sur le site du fabricant : support.hp.com,
                  support.lenovo.com ou dell.com/support. Entrez le numéro de série ou le
                  modèle (ex. HP Victus 15, Lenovo IdeaPad 3). Téléchargez les drivers
                  (WiFi, Audio, Touchpad, Chipset) et installez-les. Redémarrez. Important :
                  après l&apos;installation de Windows 11, installez un{" "}
                  <Link href="/antivirus-maroc" className="text-blue-600 hover:underline font-semibold">
                    antivirus professionnel au Maroc
                  </Link>{" "}
                  pour protéger vos données. Besoin d&apos;un antivirus gratuit ? Lisez notre{" "}
                  <Link
                    href="/blog/meilleur-antivirus-gratuit-maroc-2026-comparatif"
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    comparatif des 7 meilleurs antivirus gratuits pour le Maroc
                  </Link>
                  .
                </p>
              </section>

              {/* Step 7 */}
              <section id="step7" className="scroll-mt-28 mb-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    7
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                    Étape 7 : Activer Windows 11 (Licence Officielle vs KMS/Crack)
                  </h2>
                </div>
                <p className="mb-4">
                  Paramètres → Activation → &quot;Modifier la clé de produit&quot;. Entrez une
                  licence officielle achetée (Microsoft Store, revendeurs agréés). Nous
                  déconseillons les clés à 50-100 MAD (souvent KMS ou crack) : blocage après
                  quelques mois et pas de mises à jour de sécurité. Vous avez formaté par erreur
                  et perdu des fichiers ? Notre service de{" "}
                  <Link href="/recuperation-donnees" className="text-blue-600 hover:underline font-semibold">
                    récupération de données au Maroc
                  </Link>{" "}
                  peut vous aider.
                </p>
              </section>

              {/* Prix licence */}
              <section className="mb-16">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-16 mb-6">
                  Prix d&apos;une Licence Windows 11 au Maroc (2026)
                </h2>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <ShieldCheck className="w-10 h-10 text-green-600" aria-hidden />
                      <h3 className="text-2xl font-bold text-green-900">Licence Officielle</h3>
                    </div>
                    <p className="text-4xl font-bold text-green-700 mb-2">1200-1500 MAD</p>
                    <p className="text-green-600 mb-6">Windows 11 Home</p>
                    <ul className="space-y-3 mb-6">
                      {["Licence à vie", "Mises à jour Microsoft garanties", "Support Microsoft", "Aucun risque de blocage"].map(
                        (t) => (
                          <li key={t} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" aria-hidden />
                            {t}
                          </li>
                        )
                      )}
                    </ul>
                    <p className="text-sm text-green-700">Où acheter : Microsoft Store, Marjane, Electroplanet</p>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <AlertTriangle className="w-10 h-10 text-red-600" aria-hidden />
                      <h3 className="text-2xl font-bold text-red-900">Licence Crackée/KMS</h3>
                    </div>
                    <p className="text-4xl font-bold text-red-700 mb-2">50-100 MAD</p>
                    <p className="text-red-600 mb-6">Souvent sur Facebook/Avito</p>
                    <ul className="space-y-3 mb-6">
                      {["Illégal au Maroc", "Bloquée après 180 jours (KMS)", "Pas de mises à jour de sécurité", "Risque de virus/malware"].map(
                        (t) => (
                          <li key={t} className="flex items-start gap-2">
                            <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" aria-hidden />
                            {t}
                          </li>
                        )
                      )}
                    </ul>
                    <p className="text-sm text-red-700 font-semibold">
                      Notre conseil : Évitez les licences trop bon marché
                    </p>
                  </div>
                </div>
              </section>

              {/* Tableau comparatif DIY vs Technicien vs AlloSupport */}
              <section className="mb-16">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-16 mb-6">
                  DIY vs Technicien vs AlloSupport : Tableau Comparatif
                </h2>
                <div className="overflow-x-auto rounded-xl border border-slate-200 my-8">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="py-3 px-4 font-bold text-slate-900">Critère</th>
                        <th className="py-3 px-4 font-bold text-slate-900">Le faire soi-même</th>
                        <th className="py-3 px-4 font-bold text-slate-900">Technicien quartier</th>
                        <th className="py-3 px-4 font-bold text-slate-900">AlloSupport à distance</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700">
                      <tr className="border-t border-slate-200"><td className="py-2 px-4 font-medium">Prix</td><td className="py-2 px-4">0 MAD</td><td className="py-2 px-4">100-200 MAD</td><td className="py-2 px-4 font-bold text-blue-600">250 MAD</td></tr>
                      <tr className="border-t border-slate-200"><td className="py-2 px-4 font-medium">Durée</td><td className="py-2 px-4">2-4 h</td><td className="py-2 px-4">1-3 jours</td><td className="py-2 px-4">1 h chrono</td></tr>
                      <tr className="border-t border-slate-200"><td className="py-2 px-4 font-medium">Licence</td><td className="py-2 px-4">À acheter</td><td className="py-2 px-4">Souvent crack</td><td className="py-2 px-4"><CheckCircle className="w-5 h-5 text-green-600 inline" aria-hidden /> Officielle</td></tr>
                      <tr className="border-t border-slate-200"><td className="py-2 px-4 font-medium">Drivers</td><td className="py-2 px-4">Manuels</td><td className="py-2 px-4">Variable</td><td className="py-2 px-4"><CheckCircle className="w-5 h-5 text-green-600 inline" aria-hidden /> Inclus</td></tr>
                      <tr className="border-t border-slate-200"><td className="py-2 px-4 font-medium">Garantie</td><td className="py-2 px-4">—</td><td className="py-2 px-4">—</td><td className="py-2 px-4"><CheckCircle className="w-5 h-5 text-green-600 inline" aria-hidden /> 30 jours</td></tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* CTA Service */}
              <section className="mb-16">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-16 mb-6">
                  Notre Service : Installation Windows 11 à Distance (250 MAD)
                </h2>
                <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 rounded-3xl p-8 md:p-12 my-8 text-center text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Trop Compliqué ? On S&apos;en Occupe Pour Vous
                  </h3>
                  <p className="text-lg mb-6 max-w-2xl mx-auto opacity-95">
                    Nos techniciens installent Windows 11 sur votre PC en 1 heure via TeamViewer.
                    Vous restez chez vous à Casablanca, Rabat, Marrakech ou partout au Maroc.
                  </p>
                  <div className="flex flex-wrap justify-center gap-6 mb-6">
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-6 h-6" aria-hidden /> Installation officielle
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-6 h-6" aria-hidden /> Tous les drivers
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-6 h-6" aria-hidden /> Antivirus 6 mois inclus
                    </span>
                  </div>
                  <p className="text-4xl font-bold mb-6">250 MAD</p>
                  <a
                    href={WHATSAPP_WINDOWS11}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl text-xl font-bold shadow-xl hover:scale-105 transition"
                    aria-label="Commander installation Windows 11 sur WhatsApp"
                  >
                    <MessageCircle className="w-6 h-6" aria-hidden />
                    Commander Sur WhatsApp
                  </a>
                  <p className="mt-4 text-sm opacity-90">
                    Paiement après service · Garantie 30 jours · Intervention en 1 h
                  </p>
                </div>
              </section>

              {/* FAQ */}
              <section id="faq" className="scroll-mt-28 mb-16">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mt-16 mb-6">
                  Questions Fréquentes (FAQ)
                </h2>
                <div className="space-y-4">
                  {FAQ_ITEMS.map((faq, i) => (
                    <details
                      key={i}
                      className="group bg-white rounded-xl border border-slate-200 overflow-hidden"
                    >
                      <summary className="flex items-center justify-between gap-2 py-4 px-6 cursor-pointer list-none font-bold text-slate-900 hover:bg-slate-50 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        {faq.q}
                        <ChevronDown className="w-5 h-5 shrink-0 transition group-open:rotate-180" aria-hidden />
                      </summary>
                      <div className="px-6 pb-4 pt-0 text-slate-700">
                        <p className="m-0">{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Articles liés */}
              <section className="mt-16 pt-8 border-t border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Articles liés</h2>
                <ul className="space-y-2 text-slate-700">
                  <li>
                    <Link href="/blog/pc-portable-sans-windows-freedos-maroc" className="text-blue-600 hover:underline">
                      PC Portable Sans Windows (FreeDOS) Maroc : guide complet
                    </Link>
                  </li>
                  <li>
                    <Link href="/depannage-informatique" className="text-blue-600 hover:underline">
                      Dépannage informatique à distance au Maroc
                    </Link>
                  </li>
                  <li>
                    <Link href="/antivirus-maroc" className="text-blue-600 hover:underline">
                      Antivirus Maroc : Kaspersky & Bitdefender
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </article>

        {/* Sticky WhatsApp */}
        <a
          href={WHATSAPP_WINDOWS11}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-5 py-4 rounded-full shadow-2xl hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 min-w-[56px] min-h-[56px]"
          aria-label="Installation Windows 11 Pro 250 MAD via WhatsApp"
        >
          <MessageCircle className="w-6 h-6 shrink-0" aria-hidden />
          <span className="font-bold hidden md:inline">Installation Pro 250 MAD</span>
        </a>
      </main>

      <Footer />
    </>
  );
}
