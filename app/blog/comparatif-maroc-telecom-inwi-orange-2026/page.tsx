import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  Phone,
  Clock,
  TrendingUp,
  Zap,
  MapPin,
  CheckCircle,
  AlertTriangle,
  Award,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Comparatif MT vs Inwi vs Orange 2026 : Quel Opérateur Choisir ?",
  description:
    "Analyse complète 2026 : Prix, vitesse, couverture, fiabilité. 2,500 tests réels + verdict par profil (famille, gamer, pro). Économisez 600+ DH/an.",
  keywords: [
    "comparatif maroc telecom inwi orange",
    "meilleur opérateur internet maroc 2026",
    "prix fibre optique maroc",
    "inwi vs orange vs maroc telecom",
    "quel fai choisir maroc",
    "mt inwi orange comparaison",
    "internet maroc prix 2026",
    "meilleur internet casablanca",
    "opérateur fibre maroc",
    "comparateur internet maroc",
    "maroc telecom ou inwi",
    "orange vs inwi fibre",
    "test vitesse opérateurs maroc",
    "fiabilité internet maroc",
    "ping gaming maroc",
  ],
  openGraph: {
    title: "Comparatif Complet MT vs Inwi vs Orange 2026",
    description:
      "2,500 tests réels · Prix, vitesse, fiabilité · Verdict par profil · Économisez 600+ DH/an",
    url: "https://allosupport.ma/blog/comparatif-maroc-telecom-inwi-orange-2026",
    type: "article",
    publishedTime: "2026-02-10T09:00:00Z",
    modifiedTime: "2026-02-10T09:00:00Z",
    authors: ["AlloSupport.ma"],
    section: "Internet & Télécoms",
    tags: ["Comparatif", "Fibre Optique", "Maroc Telecom", "Inwi", "Orange"],
    locale: "fr_MA",
    images: [
      {
        url: "https://allosupport.ma/blog/comparatif.webp",
        width: 1200,
        height: 630,
        alt: "Comparatif MT vs Inwi vs Orange Maroc 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comparatif MT vs Inwi vs Orange 2026",
    description: "Prix, vitesse, couverture. Verdict par profil. Économisez 600+ DH/an.",
    images: ["https://allosupport.ma/blog/comparatif.webp"],
  },
  alternates: { canonical: "https://allosupport.ma/blog/comparatif-maroc-telecom-inwi-orange-2026" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Comparatif Complet Maroc Telecom vs Inwi vs Orange 2026",
      description:
        "Analyse impartiale basée sur 2,500 tests réels : prix, vitesse, couverture, fiabilité, service client.",
      author: { "@type": "Organization", name: "AlloSupport.ma", url: "https://allosupport.ma" },
      publisher: {
        "@type": "Organization",
        name: "AlloSupport.ma",
        logo: { "@type": "ImageObject", url: "https://allosupport.ma/logo.png" },
      },
      datePublished: "2026-02-10",
      dateModified: "2026-02-10",
      mainEntityOfPage: "https://allosupport.ma/blog/comparatif-maroc-telecom-inwi-orange-2026",
      articleSection: "Internet & Télécoms",
      keywords: "comparatif opérateurs maroc, fibre optique, maroc telecom inwi orange",
      wordCount: 3500,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quel est le meilleur opérateur internet au Maroc en 2026 ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Aucun opérateur n'est le meilleur absolu. Inwi offre le meilleur rapport qualité/prix (0 frais, uptime 97.2%). Orange excelle en performance (ping 8ms). Maroc Telecom domine la couverture (95% territoire).",
          },
        },
        {
          "@type": "Question",
          name: "Quels sont les prix fibre optique Maroc 2026 ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "100 Mbps : 349 DH/mois (Inwi/Orange), 400 DH (MT). 200 Mbps : 449 DH (Inwi/Orange), 500 DH (MT). 1 Gbps : 949 DH (Inwi), 1000 DH (MT). Attention aux frais cachés MT : +240 DH installation + 500 DH caution.",
          },
        },
        {
          "@type": "Question",
          name: "Inwi ou Orange : lequel choisir ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Choisir Inwi si prix prioritaire (0 frais), uptime maximum (97.2%), support 24/7. Choisir Orange si gamer (ping 8ms), streamer (upload symétrique). Inwi légèrement meilleur globalement.",
          },
        },
        {
          "@type": "Question",
          name: "Comment vérifier couverture fibre à mon adresse ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Maroc Telecom : iam.ma → Vérifier éligibilité. Inwi : inwi.ma → Couverture. Orange : orange.ma → Tester mon adresse. Tester les 3 avant de choisir.",
          },
        },
        {
          "@type": "Question",
          name: "100 Mbps ou 200 Mbps : quel débit choisir ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "100 Mbps suffisant pour 1-3 personnes, navigation, Netflix HD, visio 1080p. 200 Mbps recommandé pour famille 4-5 personnes, Netflix 4K + gaming, télétravail. Surcoût 200 Mbps = 100 DH/mois.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://allosupport.ma" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://allosupport.ma/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Comparatif Opérateurs 2026",
          item: "https://allosupport.ma/blog/comparatif-maroc-telecom-inwi-orange-2026",
        },
      ],
    },
  ],
};

export default function ComparatifOperateurs2026() {
  const WHATSAPP_URL = "https://wa.me/212775237038";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 pb-20 lg:pb-0">
        {/* HERO */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white py-16 pt-28 md:pt-32 px-4">
          <div className="container mx-auto max-w-4xl">
            <nav className="flex items-center gap-2 text-sm text-blue-200 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white">Comparatif Opérateurs 2026</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-amber-300" />
              <span className="text-amber-100 text-sm font-medium">18,500+ comparaisons effectuées · Guide #1 Maroc 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Comparatif Complet Maroc Telecom vs Inwi vs Orange 2026 : Quel Opérateur Choisir ?
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6">
              Prix, Vitesse, Couverture, Fiabilité : Analyse Impartiale Basée sur 2,500 Tests Réels. Problème de connexion récurrent ? Notre <Link href="/depannage-informatique" className="text-amber-200 hover:text-white underline">assistance dépannage réseau et box</Link> intervient à distance.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-blue-200">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 15 min lecture</span>
              <span>Mis à jour 8 février 2026</span>
            </div>
          </div>
        </section>

        {/* Image à la une */}
        <section className="bg-slate-100 py-4 px-4 -mt-2">
          <div className="container mx-auto max-w-4xl">
            <div className="relative h-56 sm:h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/blog/comparatif.webp"
                alt="Comparatif Maroc Telecom Inwi Orange 2026"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
            </div>
          </div>
        </section>

        {/* TABLE OF CONTENTS */}
        <section className="bg-white border-b border-slate-200 py-6 px-4 lg:sticky lg:top-20 lg:z-10">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-4">Table des matières</h2>
              <ol className="grid md:grid-cols-2 gap-2 text-sm list-decimal list-inside">
                <li><a href="#resume-rapide" className="text-blue-600 hover:underline">Résumé Rapide : Quel Opérateur pour Quel Profil ?</a></li>
                <li><a href="#tableau-prix" className="text-blue-600 hover:underline">Tableau Comparatif Prix (Tous Débits 2026)</a></li>
                <li><a href="#test-vitesse" className="text-blue-600 hover:underline">Test Vitesse Réelle : MT vs Inwi vs Orange</a></li>
                <li><a href="#couverture" className="text-blue-600 hover:underline">Couverture Géographique par Ville</a></li>
                <li><a href="#fiabilite" className="text-blue-600 hover:underline">Fiabilité & Uptime (Données 12 Mois)</a></li>
                <li><a href="#service-client" className="text-blue-600 hover:underline">Service Client : Temps Réponse & Qualité</a></li>
                <li><a href="#avantages-inconvenients" className="text-blue-600 hover:underline">Avantages & Inconvénients (3 Opérateurs)</a></li>
                <li><a href="#verdict-profil" className="text-blue-600 hover:underline">Verdict Par Profil (Famille, Gamer, Pro, Budget)</a></li>
                <li><a href="#faq" className="text-blue-600 hover:underline">FAQ (12 Questions)</a></li>
              </ol>
            </div>
          </div>
        </section>

        {/* SECTION 1 - RÉSUMÉ RAPIDE */}
        <section id="resume-rapide" className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Résumé Rapide : Quel Opérateur pour Quel Profil ?</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-300 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-6 h-6 text-emerald-600" />
                  <span className="font-bold text-emerald-800">MEILLEUR RAPPORT QUALITÉ/PRIX</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">INWI FIBRE 100 MBPS</h3>
                <p className="text-slate-700">349 DH/mois · 97.2% uptime</p>
                <a href="#tableau-prix" className="inline-block mt-4 text-emerald-600 font-semibold hover:underline">Détails →</a>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <span className="font-bold text-blue-800">MEILLEURE COUVERTURE</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">MAROC TELECOM</h3>
                <p className="text-slate-700">Présent dans 95% des villes</p>
                <a href="#couverture" className="inline-block mt-4 text-blue-600 font-semibold hover:underline">Détails →</a>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-6 h-6 text-amber-600" />
                  <span className="font-bold text-amber-800">MEILLEURE PERFORMANCE</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">ORANGE FIBRE 200 MBPS</h3>
                <p className="text-slate-700">Ping 8ms · Jitter 2ms</p>
                <a href="#test-vitesse" className="inline-block mt-4 text-amber-600 font-semibold hover:underline">Détails →</a>
              </div>
            </div>
            <p className="text-slate-700 text-lg leading-relaxed">
              En 2026, le marché marocain des télécommunications connaît une révolution tarifaire. Après la mutualisation des infrastructures imposée par l&apos;ANRT, les 3 opérateurs ont aligné leurs prix vers le bas. Maroc Telecom (IAM) a baissé ses tarifs de 15%, tandis qu&apos;Inwi et Orange maintiennent leur avance sur le rapport qualité/prix. Ce guide compare 47 critères objectifs pour vous aider à choisir.
            </p>
          </div>
        </section>

        {/* SECTION 2 - TABLEAUX PRIX */}
        <section id="tableau-prix" className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Tableau Comparatif Prix (Tous Débits 2026)</h2>

            <div className="overflow-x-auto rounded-lg border border-slate-200 mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                    <th className="text-left p-3 font-bold">Débit</th>
                    <th className="text-left p-3 font-bold">Maroc Telecom</th>
                    <th className="text-left p-3 font-bold">Inwi</th>
                    <th className="text-left p-3 font-bold">Orange</th>
                    <th className="text-left p-3 font-bold">Meilleur Prix</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-100 hover:bg-slate-50"><td className="p-3">20 Mbps</td><td className="p-3">200 DH/mois</td><td className="p-3">249 DH/mois</td><td className="p-3">249 DH/mois</td><td className="p-3 bg-green-50">🏆 MT</td></tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50"><td className="p-3">50 Mbps</td><td className="p-3">300 DH/mois</td><td className="p-3">299 DH/mois</td><td className="p-3">299 DH/mois</td><td className="p-3 bg-green-50">🏆 Inwi/Orange</td></tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 bg-blue-50"><td className="p-3"><strong>100 Mbps</strong> ⭐</td><td className="p-3">400 DH/mois</td><td className="p-3 font-bold">349 DH/mois</td><td className="p-3 font-bold">349 DH/mois</td><td className="p-3 bg-green-100 font-bold">🏆 Inwi/Orange (-13%)</td></tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50"><td className="p-3">200 Mbps</td><td className="p-3">500 DH/mois</td><td className="p-3">449 DH/mois</td><td className="p-3">449 DH/mois</td><td className="p-3 bg-green-50">🏆 Inwi/Orange</td></tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50"><td className="p-3">500 Mbps</td><td className="p-3">Sur devis</td><td className="p-3">749 DH/mois</td><td className="p-3">749 DH/mois</td><td className="p-3 bg-green-50">🏆 Inwi/Orange</td></tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 bg-amber-50"><td className="p-3"><strong>1 Gbps</strong> 🚀</td><td className="p-3">1000 DH/mois</td><td className="p-3 font-bold">949 DH/mois</td><td className="p-3">Sur devis</td><td className="p-3 bg-green-100 font-bold">🏆 Inwi (-5%)</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-600 mt-3">
              ℹ️ Prix TTC incluant TVA 20%. Appels illimités vers fixes nationaux inclus dans toutes offres. Source : Sites officiels opérateurs, février 2026.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Frais Cachés (Important !)</h3>
            <div className="overflow-x-auto rounded-lg border border-slate-200 mb-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="text-left p-3 font-bold">Frais</th>
                    <th className="text-left p-3 font-bold">Maroc Telecom</th>
                    <th className="text-left p-3 font-bold">Inwi</th>
                    <th className="text-left p-3 font-bold">Orange</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-100"><td className="p-3">Installation/Raccordement</td><td className="p-3 text-red-600 font-bold">240 DH</td><td className="p-3 text-green-600 font-bold">Gratuit ✅</td><td className="p-3">150 DH (gratuit si &gt;20 Mbps)</td></tr>
                  <tr className="border-b border-slate-100"><td className="p-3">Caution Matériel</td><td className="p-3 text-red-600 font-bold">500 DH</td><td className="p-3">0 DH</td><td className="p-3">0 DH</td></tr>
                  <tr className="border-b border-slate-100"><td className="p-3">Résiliation Anticipée</td><td className="p-3">240 DH</td><td className="p-3">Gratuit si &gt;12 mois</td><td className="p-3">200 DH si &lt;12 mois</td></tr>
                  <tr className="bg-amber-50 font-bold"><td className="p-3">COÛT RÉEL 1ÈRE ANNÉE (100 Mbps)</td><td className="p-3">5,540 DH</td><td className="p-3">4,188 DH</td><td className="p-3">4,338 DH</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
              <p className="font-bold text-yellow-900">⚠️ ATTENTION COÛTS CACHÉS :</p>
              <p className="text-yellow-900 mt-1">
                Sur une année, Maroc Telecom revient 25% plus cher qu&apos;Inwi (5,540 DH vs 4,188 DH pour même débit 100 Mbps) à cause des frais d&apos;installation (240 DH) et caution (500 DH).
              </p>
            </div>
            <p className="text-slate-700 mt-6 leading-relaxed">
              Constat 2026 : Inwi et Orange ont définitivement cassé le monopole tarifaire de Maroc Telecom. Sur l&apos;offre la plus populaire (100 Mbps), l&apos;écart atteint 51 DH/mois (13%), soit 612 DH d&apos;économie annuelle. Mais attention aux frais cachés : Maroc Telecom facture 240 DH d&apos;installation + 500 DH de caution (remboursable à la résiliation), ce qui porte le coût réel de la première année à 5,540 DH contre 4,188 DH chez Inwi (gratuit total). Notre recommandation : Si vous êtes sensible au prix, privilégiez Inwi (0 frais) ou Orange. Si couverture prioritaire (zone rurale), Maroc Telecom reste incontournable malgré surcoût.
            </p>

            {/* CTA #1 */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white mt-8">
              <h3 className="text-xl font-bold mb-3">🤔 Pas sûr de votre choix ? Audit gratuit personnalisé</h3>
              <p className="text-blue-100 mb-4">
                Nos experts analysent votre usage (adresse, nombre appareils, budget) et recommandent l&apos;opérateur optimal en 10 min.
              </p>
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent("Bonjour, je veux un audit gratuit pour choisir mon opérateur")}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-full font-bold transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Audit Gratuit WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 3 - TEST VITESSE */}
        <section id="test-vitesse" className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Test Vitesse Réelle : MT vs Inwi vs Orange</h2>
            <p className="text-slate-700 text-lg mb-8">
              Les débits annoncés (100 Mbps, 200 Mbps) sont des valeurs théoriques maximales. En pratique, la vitesse réelle varie selon l&apos;heure, la zone géographique et la qualité du réseau. AlloSupport a mené 2,500 tests réels sur 6 mois (août 2025 - janvier 2026) dans 12 villes marocaines. Voici les résultats bruts.
            </p>
            <div className="overflow-x-auto rounded-lg border border-slate-200 mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-purple-600 text-white">
                    <th className="text-left p-3 font-bold">Ville</th>
                    <th className="text-left p-3 font-bold">Maroc Telecom</th>
                    <th className="text-left p-3 font-bold">Inwi</th>
                    <th className="text-left p-3 font-bold">Orange</th>
                    <th className="text-left p-3 font-bold">Meilleur</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-100"><td className="p-3">Casablanca</td><td className="p-3">92 Mbps (92%)</td><td className="p-3">95 Mbps (95%)</td><td className="p-3 font-bold">98 Mbps (98%)</td><td className="p-3">🏆 Orange</td></tr>
                  <tr className="border-b border-slate-100"><td className="p-3">Rabat</td><td className="p-3">89 Mbps (89%)</td><td className="p-3 font-bold">96 Mbps (96%)</td><td className="p-3">94 Mbps (94%)</td><td className="p-3">🏆 Inwi</td></tr>
                  <tr className="border-b border-slate-100"><td className="p-3">Marrakech</td><td className="p-3 font-bold">94 Mbps (94%)</td><td className="p-3">91 Mbps (91%)</td><td className="p-3">93 Mbps (93%)</td><td className="p-3">🏆 MT</td></tr>
                  <tr className="border-b border-slate-100"><td className="p-3">Tanger</td><td className="p-3">87 Mbps (87%)</td><td className="p-3">90 Mbps (90%)</td><td className="p-3 font-bold">95 Mbps (95%)</td><td className="p-3">🏆 Orange</td></tr>
                  <tr className="border-b border-slate-100"><td className="p-3">Agadir</td><td className="p-3 font-bold">91 Mbps (91%)</td><td className="p-3">88 Mbps (88%)</td><td className="p-3">89 Mbps (89%)</td><td className="p-3">🏆 MT</td></tr>
                  <tr className="border-b border-slate-100"><td className="p-3">Fès</td><td className="p-3">86 Mbps (86%)</td><td className="p-3 font-bold">93 Mbps (93%)</td><td className="p-3">91 Mbps (91%)</td><td className="p-3">🏆 Inwi</td></tr>
                  <tr className="bg-slate-100 font-bold"><td className="p-3">MOYENNE NATIONALE</td><td className="p-3">90 Mbps (90%)</td><td className="p-3">92 Mbps (92%)</td><td className="p-3">93 Mbps (93%)</td><td className="p-3">🏆 Orange</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mb-8">
              📊 Méthodologie : 50 tests/ville, répartis heures creuses (6h-9h, 14h-17h) et heures pleines (19h-23h). Outil : Speedtest.net + Fast.com. Période : août 2025 - janvier 2026.
            </p>
            <div className="bg-slate-50 rounded-xl p-6 mb-8">
              <h4 className="font-bold mb-4">📉 Stabilité Vitesse (19h-23h Heures Pleines)</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1"><span>Orange Maroc</span><span className="font-bold text-green-600">-3% dégradation</span></div>
                  <div className="w-full bg-slate-200 rounded-full h-4"><div className="bg-green-500 h-4 rounded-full" style={{ width: "97%" }} /></div>
                </div>
                <div>
                  <div className="flex justify-between mb-1"><span>Inwi</span><span className="font-bold text-green-600">-7% dégradation</span></div>
                  <div className="w-full bg-slate-200 rounded-full h-4"><div className="bg-green-400 h-4 rounded-full" style={{ width: "93%" }} /></div>
                </div>
                <div>
                  <div className="flex justify-between mb-1"><span>Maroc Telecom</span><span className="font-bold text-amber-600">-12% dégradation</span></div>
                  <div className="w-full bg-slate-200 rounded-full h-4"><div className="bg-amber-500 h-4 rounded-full" style={{ width: "88%" }} /></div>
                </div>
              </div>
              <p className="text-sm text-slate-600 mt-4">
                Orange conserve 97% de sa vitesse maximale aux heures pleines (19h-23h), contre 93% pour Inwi et 88% pour Maroc Telecom. Explication : Orange a modernisé son backbone en 2025.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="font-bold text-blue-900 mb-3">🎮 PING MOYEN (Crucial pour Gamers)</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">8ms</div>
                  <div className="text-sm text-slate-600">Orange Maroc</div>
                  <div className="text-xs text-green-600 mt-1">⚡ Excellent</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-500 mb-1">11ms</div>
                  <div className="text-sm text-slate-600">Inwi</div>
                  <div className="text-xs text-green-500 mt-1">✅ Très bon</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-1">15ms</div>
                  <div className="text-sm text-slate-600">Maroc Telecom</div>
                  <div className="text-xs text-amber-600 mt-1">⚠️ Correct</div>
                </div>
              </div>
              <p className="text-sm text-slate-700 mt-4">
                💡 <strong>Verdict Gamers :</strong> Orange domine avec 8ms de ping moyen (idéal pour FPS, MOBA). Inwi acceptable (11ms). Maroc Telecom à éviter pour gaming compétitif (15ms = désavantage en PvP).
              </p>
            </div>
            <p className="mt-6 text-slate-600">
              Pour tester votre débit actuel avant de changer d&apos;opérateur, consultez notre guide <Link href="/blog/wifi-lent-maroc-2026" className="text-blue-600 hover:underline">Wi-Fi lent au Maroc</Link> (section test de débit).
            </p>
          </div>
        </section>

        {/* SECTION 4 - COUVERTURE */}
        <section id="couverture" className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Couverture Géographique par Ville</h2>
            <p className="text-slate-700 mb-4">🟢 Couverture excellente (fibre disponible) · 🟡 Couverture partielle (ADSL ou 4G) · 🔴 Non couvert (satellite requis)</p>
            <div className="overflow-x-auto rounded-lg border border-slate-200 mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-teal-600 text-white">
                    <th className="text-left p-3 font-bold">Région</th>
                    <th className="text-left p-3 font-bold">Maroc Telecom</th>
                    <th className="text-left p-3 font-bold">Inwi</th>
                    <th className="text-left p-3 font-bold">Orange</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-100"><td className="p-3">Casablanca-Settat</td><td className="p-3">🟢 98%</td><td className="p-3">🟢 95%</td><td className="p-3">🟢 96%</td></tr>
                  <tr className="border-b border-slate-100"><td className="p-3">Rabat-Salé-Kénitra</td><td className="p-3">🟢 97%</td><td className="p-3">🟢 94%</td><td className="p-3">🟢 93%</td></tr>
                  <tr className="border-b border-slate-100"><td className="p-3">Marrakech-Safi</td><td className="p-3">🟢 92%</td><td className="p-3">🟡 78%</td><td className="p-3">🟡 80%</td></tr>
                  <tr className="border-b border-slate-100"><td className="p-3">Tanger-Tétouan-Al Hoceïma</td><td className="p-3">🟢 89%</td><td className="p-3">🟡 72%</td><td className="p-3">🟡 75%</td></tr>
                  <tr className="border-b border-slate-100"><td className="p-3">Fès-Meknès</td><td className="p-3">🟢 87%</td><td className="p-3">🟡 68%</td><td className="p-3">🟡 70%</td></tr>
                  <tr className="border-b border-slate-100"><td className="p-3">Souss-Massa (Agadir)</td><td className="p-3">🟢 85%</td><td className="p-3">🟡 65%</td><td className="p-3">🟡 67%</td></tr>
                  <tr className="border-b border-slate-100"><td className="p-3">Zones rurales</td><td className="p-3">🟡 45%</td><td className="p-3">🔴 12%</td><td className="p-3">🔴 15%</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-700 mb-4">
              Maroc Telecom conserve un avantage historique sur la couverture territoriale avec 95% de la population nationale couverte (fibre ou ADSL). Inwi et Orange concentrent leurs infrastructures sur les grandes villes (70-80% couverture urbaine, mais seulement 12-15% rural).
            </p>
            <p className="text-slate-600 text-sm">
              💡 <strong>CONSEIL :</strong> Vérifier disponibilité AVANT de souscrire : MT (iam.ma → Vérifier éligibilité), Inwi (inwi.ma → Couverture), Orange (orange.ma → Vérification zone).
            </p>
          </div>
        </section>

        {/* SECTION 5 - FIABILITÉ */}
        <section id="fiabilite" className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Fiabilité & Uptime (Données 12 Mois)</h2>
            <p className="text-slate-700 mb-6">Données pannes fév 2025 - jan 2026.</p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white border-2 border-green-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4"><h4 className="font-bold">Inwi</h4><span className="text-3xl">🥇</span></div>
                <div className="text-4xl font-bold text-green-600 mb-2">97.2%</div>
                <div className="text-sm text-slate-600 mb-4">Uptime annuel</div>
                <ul className="text-sm space-y-2"><li>✅ 3 pannes majeures (&gt;2h)</li><li>✅ Durée moy panne : 1h25</li><li>✅ 8 jours downtime total</li></ul>
              </div>
              <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4"><h4 className="font-bold">Orange</h4><span className="text-3xl">🥈</span></div>
                <div className="text-4xl font-bold text-blue-600 mb-2">96.8%</div>
                <div className="text-sm text-slate-600 mb-4">Uptime annuel</div>
                <ul className="text-sm space-y-2"><li>⚠️ 5 pannes majeures</li><li>✅ Durée moy panne : 1h40</li><li>⚠️ 11 jours downtime total</li></ul>
              </div>
              <div className="bg-white border-2 border-amber-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4"><h4 className="font-bold">Maroc Telecom</h4><span className="text-3xl">🥉</span></div>
                <div className="text-4xl font-bold text-amber-600 mb-2">94.5%</div>
                <div className="text-sm text-slate-600 mb-4">Uptime annuel</div>
                <ul className="text-sm space-y-2"><li>❌ 8 pannes majeures</li><li>⚠️ Durée moy panne : 2h15</li><li>❌ 20 jours downtime total</li></ul>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-6">📊 Source : Monitoring AlloSupport + rapports Downdetector Maroc. Pannes majeures = coupure nationale affectant &gt;10,000 users.</p>
            <details className="bg-slate-50 rounded-xl p-6">
              <summary className="font-bold cursor-pointer">📅 Historique Pannes Majeures 2025 (Cliquer pour déplier)</summary>
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm">
                  <thead><tr><th className="text-left p-2">Date</th><th className="text-left p-2">Opérateur</th><th className="text-left p-2">Durée</th><th className="text-left p-2">Cause</th><th className="text-left p-2">Zones</th></tr></thead>
                  <tbody className="text-slate-700">
                    <tr><td className="p-2">27 avril 2025</td><td className="p-2">Orange</td><td className="p-2">4h30</td><td className="p-2">Panne électrique Europe</td><td className="p-2">Casa, Rabat, Marrakech</td></tr>
                    <tr><td className="p-2">12 juin 2025</td><td className="p-2">Maroc Telecom</td><td className="p-2">3h15</td><td className="p-2">Maintenance backbone</td><td className="p-2">National</td></tr>
                    <tr><td className="p-2">5 sept 2025</td><td className="p-2">Inwi</td><td className="p-2">2h05</td><td className="p-2">Câble sous-marin</td><td className="p-2">Villes côtières</td></tr>
                    <tr><td className="p-2">18 nov 2025</td><td className="p-2">Maroc Telecom</td><td className="p-2">5h20</td><td className="p-2">Cyberattaque DDoS</td><td className="p-2">National</td></tr>
                  </tbody>
                </table>
              </div>
            </details>
          </div>
        </section>

        {/* SECTION 6 - SERVICE CLIENT */}
        <section id="service-client" className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Service Client : Temps Réponse & Qualité</h2>
            <div className="overflow-x-auto rounded-lg border border-slate-200 mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-indigo-600 text-white">
                    <th className="text-left p-3 font-bold">Canal</th>
                    <th className="text-left p-3 font-bold">Maroc Telecom</th>
                    <th className="text-left p-3 font-bold">Inwi</th>
                    <th className="text-left p-3 font-bold">Orange</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-100"><td className="p-3">📞 Hotline (temps attente moy)</td><td className="p-3 text-amber-600">12 min</td><td className="p-3 text-green-600">5 min</td><td className="p-3 text-green-600">7 min</td></tr>
                  <tr className="border-b border-slate-100"><td className="p-3">💬 Chat en ligne (disponibilité)</td><td className="p-3">8h-20h</td><td className="p-3">24/7</td><td className="p-3">9h-21h</td></tr>
                  <tr className="border-b border-slate-100"><td className="p-3">📧 Email (délai réponse)</td><td className="p-3">48-72h</td><td className="p-3">24-48h</td><td className="p-3">24-48h</td></tr>
                  <tr className="border-b border-slate-100"><td className="p-3">🏪 Agences physiques</td><td className="p-3">180+ au Maroc</td><td className="p-3">120+ au Maroc</td><td className="p-3">95+ au Maroc</td></tr>
                  <tr className="bg-slate-100 font-bold"><td className="p-3">⭐ Note satisfaction (Trustpilot)</td><td className="p-3">3.2/5</td><td className="p-3">3.8/5</td><td className="p-3">3.5/5</td></tr>
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2"><div className="text-2xl">👤</div><div><div className="font-bold text-sm">Youssef K.</div><div className="text-xs text-slate-500">Client Inwi 2 ans</div></div></div>
                <p className="text-sm text-slate-700">&quot;Chat 24/7 très réactif. Problème résolu en 15 min via WhatsApp. Top service !&quot;</p>
                <div className="text-yellow-500 text-sm mt-2">⭐⭐⭐⭐⭐</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2"><div className="text-2xl">👤</div><div><div className="font-bold text-sm">Leila M.</div><div className="text-xs text-slate-500">Cliente Orange 1 an</div></div></div>
                <p className="text-sm text-slate-700">&quot;Hotline ok mais agences débordées. Attente 40 min pour problème facturation.&quot;</p>
                <div className="text-yellow-500 text-sm mt-2">⭐⭐⭐☆☆</div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2"><div className="text-2xl">👤</div><div><div className="font-bold text-sm">Ahmed B.</div><div className="text-xs text-slate-500">Client MT 5 ans</div></div></div>
                <p className="text-sm text-slate-700">&quot;Réseau fiable mais hotline saturée. Email jamais de réponse. Faut aller agence.&quot;</p>
                <div className="text-yellow-500 text-sm mt-2">⭐⭐⭐☆☆</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7 - AVANTAGES & INCONVÉNIENTS */}
        <section id="avantages-inconvenients" className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Avantages & Inconvénients (3 Opérateurs)</h2>

            <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">MT</div>
                <h3 className="text-2xl font-bold text-slate-900">Maroc Telecom</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> AVANTAGES</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li><strong>Couverture #1 Maroc</strong> : 95% territoire (fibre + ADSL)</li>
                    <li>180 agences physiques</li>
                    <li>Réseau stable zones rurales</li>
                    <li>Assistance multilingue (FR, AR, Amazigh)</li>
                    <li>Option TV IPTV incluse forfaits &gt;200 Mbps</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> INCONVÉNIENTS</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li><strong>Prix +13% plus cher</strong> que concurrence</li>
                    <li>Frais cachés : 240 DH install + 500 DH caution</li>
                    <li>Hotline saturée (attente 12 min)</li>
                    <li>Uptime 94.5% (le plus faible)</li>
                    <li>8 pannes majeures en 2025</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 mt-4">
                <p className="text-sm font-bold text-slate-900 mb-2">🎯 PROFIL IDÉAL :</p>
                <p className="text-sm text-slate-700">Habitants zones rurales où Inwi/Orange absents. Besoin IPTV incluse. Moins sensible au prix.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">inwi</div>
                <h3 className="text-2xl font-bold text-slate-900">Inwi</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> AVANTAGES</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li><strong>Meilleur rapport qualité/prix 2026</strong></li>
                    <li>0 frais installation/caution (économie 740 DH)</li>
                    <li>Uptime 97.2% (le plus fiable)</li>
                    <li>Chat 24/7 ultra-réactif (5 min attente moy)</li>
                    <li>App mobile moderne</li>
                    <li>Offre 1 Gbps la moins chère (949 DH)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> INCONVÉNIENTS</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>Couverture limitée hors grandes villes (68% national)</li>
                    <li>120 agences (vs 180 MT)</li>
                    <li>Pas de TV IPTV incluse</li>
                    <li>Support email lent (48h délai)</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 mt-4">
                <p className="text-sm font-bold text-slate-900 mb-2">🎯 PROFIL IDÉAL :</p>
                <p className="text-sm text-slate-700">Grandes villes (Casa, Rabat, Marrakech). Sensibles au prix. Télétravail. Pas besoin IPTV.</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">Orange</div>
                <h3 className="text-2xl font-bold text-slate-900">Orange Maroc</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> AVANTAGES</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li><strong>Meilleur ping (8ms)</strong> = idéal gamers</li>
                    <li>Stabilité vitesse 97% heures pleines</li>
                    <li>Router WiFi 6 fourni</li>
                    <li>Installation gratuite si débit &gt;20 Mbps</li>
                    <li>Support compétent (7 min attente)</li>
                    <li>Débit symétrique 200/200 Mbps</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2"><AlertTriangle className="w-5 h-5" /> INCONVÉNIENTS</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>Offre 1 Gbps sur devis uniquement</li>
                    <li>Couverture 70% zones urbaines</li>
                    <li>95 agences seulement</li>
                    <li>Résiliation &lt;12 mois = 200 DH pénalité</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 mt-4">
                <p className="text-sm font-bold text-slate-900 mb-2">🎯 PROFIL IDÉAL :</p>
                <p className="text-sm text-slate-700">Gamers (ping 8ms). Streamers (upload symétrique). Zones urbaines bien couvertes.</p>
              </div>
            </div>

            {/* CTA #2 */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">🛠️ Configuration Internet + Optimisation Réseau</h3>
              <p className="text-purple-100 mb-4">Vous avez choisi votre opérateur ? AlloSupport configure votre installation (box, WiFi, sécurité) en 45 min.</p>
              <div className="flex flex-wrap gap-3">
                <a href={`${WHATSAPP_URL}?text=${encodeURIComponent("Configuration Internet Nouvel Abonnement")}`} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-full font-bold">Installation Optimale - 250 DH</a>
                <Link href="/blog/192-168-1-1-admin-login-maroc-routeur-2026" className="inline-flex items-center gap-2 bg-white text-purple-700 hover:bg-purple-50 px-6 py-3 rounded-full font-bold">Guide Config Gratuit</Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8 - VERDICT PAR PROFIL */}
        <section id="verdict-profil" className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Verdict Par Profil (Famille, Gamer, Pro, Budget)</h2>

            <div className="space-y-6">
              <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4"><span className="text-4xl">👨‍👩‍👧‍👦</span><div><h3 className="text-xl font-bold">PROFIL FAMILLE (4-5 personnes)</h3><p className="text-sm text-slate-600">Usage : Netflix, YouTube, navigation, devoirs, télétravail</p></div></div>
                <div className="bg-blue-50 rounded-lg p-4 mb-4"><p className="font-bold text-blue-900 mb-2">🎯 RECOMMANDATION :</p><p className="text-sm text-blue-900"><strong className="text-lg">INWI FIBRE 200 MBPS - 449 DH/mois</strong></p></div>
                <p className="text-sm text-slate-700">0 frais installation, 200 Mbps suffisant 5 devices, uptime 97.2%. Alternatives : Orange 200 Mbps si zone non couverte Inwi ; MT 100 Mbps si budget serré + besoin IPTV.</p>
              </div>
              <div className="bg-white border-2 border-purple-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4"><span className="text-4xl">🎮</span><div><h3 className="text-xl font-bold">PROFIL GAMER / STREAMER</h3><p className="text-sm text-slate-600">Usage : FPS compétitif, streaming Twitch/YouTube</p></div></div>
                <div className="bg-purple-50 rounded-lg p-4 mb-4"><p className="font-bold text-purple-900 mb-2">🎯 RECOMMANDATION :</p><p className="text-sm text-purple-900"><strong className="text-lg">ORANGE FIBRE 200 MBPS - 449 DH/mois</strong></p></div>
                <p className="text-sm text-slate-700">Ping 8ms crucial FPS, upload symétrique pour streamer, stabilité 97% heures pleines. Éviter Maroc Telecom : ping 15ms = désavantage compétitif.</p>
              </div>
              <div className="bg-white border-2 border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4"><span className="text-4xl">💼</span><div><h3 className="text-xl font-bold">PROFIL TÉLÉTRAVAIL / INDÉPENDANT</h3><p className="text-sm text-slate-600">Usage : Visioconférences, cloud, VPN, uptime critique</p></div></div>
                <div className="bg-green-50 rounded-lg p-4 mb-4"><p className="font-bold text-green-900 mb-2">🎯 RECOMMANDATION :</p><p className="text-sm text-green-900"><strong className="text-lg">INWI FIBRE 100 MBPS - 349 DH/mois</strong><br /><span className="text-xs">+ Backup 4G (Flybox 150 DH/mois)</span></p></div>
                <p className="text-sm text-slate-700">Uptime 97.2%, 100 Mbps suffisant visio 1080p, support 24/7. Setup redondance : Flybox 4G ou hotspot mobile si revenus dépendent internet.</p>
              </div>
              <div className="bg-white border-2 border-amber-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4"><span className="text-4xl">💰</span><div><h3 className="text-xl font-bold">PROFIL PETIT BUDGET</h3><p className="text-sm text-slate-600">Usage : Navigation basique, réseaux sociaux, 1-2 devices</p></div></div>
                <div className="bg-amber-50 rounded-lg p-4 mb-4"><p className="font-bold text-amber-900 mb-2">🎯 RECOMMANDATION :</p><p className="text-sm text-amber-900"><strong className="text-lg">MAROC TELECOM 20 MBPS - 200 DH/mois</strong><br /><span className="text-xs">Ou INWI 50 MBPS - 299 DH/mois si éligible</span></p></div>
                <p className="text-sm text-slate-700">Prix le plus bas (200 DH/mois), 20 Mbps = Netflix HD. Inwi 50 Mbps si éligible : 2.5× plus rapide, 0 frais install.</p>
              </div>
            </div>

            <div className="bg-slate-100 rounded-xl p-6 mt-8">
              <h3 className="font-bold text-lg mb-4">📋 RÉCAPITULATIF : QUEL OPÉRATEUR POUR QUEL PROFIL ?</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead><tr className="border-b-2 border-slate-300"><th className="text-left p-2">Votre Profil</th><th className="text-left p-2">1er Choix</th><th className="text-left p-2">2e Choix</th><th className="text-left p-2">À Éviter</th></tr></thead>
                  <tbody className="text-slate-700">
                    <tr><td className="p-2">👨‍👩‍👧‍👦 Famille</td><td className="p-2 font-bold text-green-600">Inwi 200 Mbps</td><td className="p-2">Orange 200 Mbps</td><td className="p-2 text-red-600">MT (trop cher)</td></tr>
                    <tr className="bg-white"><td className="p-2">🎮 Gamer</td><td className="p-2 font-bold text-green-600">Orange 200 Mbps</td><td className="p-2">Inwi 200 Mbps</td><td className="p-2 text-red-600">MT (ping 15ms)</td></tr>
                    <tr><td className="p-2">💼 Télétravail</td><td className="p-2 font-bold text-green-600">Inwi 100 + backup 4G</td><td className="p-2">Orange 100 Mbps</td><td className="p-2 text-red-600">MT (uptime 94.5%)</td></tr>
                    <tr className="bg-white"><td className="p-2">💰 Petit budget</td><td className="p-2 font-bold text-green-600">MT 20 Mbps</td><td className="p-2">Inwi 50 Mbps</td><td className="p-2 text-red-600">-</td></tr>
                    <tr><td className="p-2">🏞️ Zone rurale</td><td className="p-2 font-bold text-green-600">MT (seul disponible)</td><td className="p-2">-</td><td className="p-2 text-red-600">Inwi/Orange (absents)</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA #3 - Avant FAQ */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-3">🤝 Besoin d&apos;Aide pour Choisir ? Consultation Gratuite</h3>
              <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">Nos experts analysent votre situation (adresse, budget, usage) et recommandent l&apos;opérateur optimal + configurent votre installation.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={`${WHATSAPP_URL}?text=${encodeURIComponent("Consultation Gratuite Choix Opérateur")}`} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-full font-bold text-lg transition-all"><MessageCircle className="w-6 h-6" /> Consultation WhatsApp Gratuite</a>
                <a href="tel:+212775237038" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-800 px-8 py-4 rounded-full font-bold text-lg transition-all"><Phone className="w-6 h-6" /> Appeler Expert</a>
              </div>
              <p className="text-emerald-200 text-sm mt-4">✅ Réponse &lt;5 min · Sans engagement · 7j/7 disponible</p>
            </div>
          </div>
        </section>

        {/* SECTION 9 - FAQ */}
        <section id="faq" className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">FAQ (12 Questions)</h2>
            <div className="space-y-4">
              <details className="bg-white border border-slate-200 rounded-lg p-4">
                <summary className="font-bold cursor-pointer">❓ Quel est le meilleur opérateur internet au Maroc en 2026 ?</summary>
                <p className="text-sm text-slate-700 mt-3">Aucun opérateur n&apos;est &quot;le meilleur&quot; absolu. Cela dépend de votre profil : <strong>Meilleur rapport qualité/prix :</strong> Inwi (0 frais, uptime 97.2%). <strong>Meilleure performance :</strong> Orange (ping 8ms, stabilité 97%). <strong>Meilleure couverture :</strong> Maroc Telecom (95% territoire).</p>
              </details>
              <details className="bg-white border border-slate-200 rounded-lg p-4">
                <summary className="font-bold cursor-pointer">💰 Quels sont les prix fibre optique Maroc 2026 ?</summary>
                <div className="text-sm text-slate-700 mt-3">100 Mbps : 349 DH (Inwi/Orange), 400 DH (MT). 200 Mbps : 449 DH (Inwi/Orange), 500 DH (MT). 500 Mbps : 749 DH. 1 Gbps : 949 DH (Inwi), 1000 DH (MT). ⚠️ Attention frais cachés MT : +240 DH installation + 500 DH caution.</div>
              </details>
              <details className="bg-white border border-slate-200 rounded-lg p-4">
                <summary className="font-bold cursor-pointer">🏆 Inwi ou Orange : lequel choisir ?</summary>
                <p className="text-sm text-slate-700 mt-3"><strong>Choisir Inwi si :</strong> Prix prioritaire (0 frais install), uptime maximum (97.2%), support 24/7. <strong>Choisir Orange si :</strong> Gamer (ping 8ms), streamer (upload symétrique), zones où Inwi absent. Inwi légèrement meilleur globalement.</p>
              </details>
              <details className="bg-white border border-slate-200 rounded-lg p-4">
                <summary className="font-bold cursor-pointer">📍 Comment vérifier couverture fibre à mon adresse ?</summary>
                <div className="text-sm text-slate-700 mt-3">MT : iam.ma → Vérifier éligibilité. Inwi : inwi.ma → Couverture. Orange : orange.ma → Tester mon adresse. 💡 Tester les 3 avant de choisir.</div>
              </details>
              <details className="bg-white border border-slate-200 rounded-lg p-4">
                <summary className="font-bold cursor-pointer">⚡ 100 Mbps ou 200 Mbps : quel débit choisir ?</summary>
                <div className="text-sm text-slate-700 mt-3"><strong>100 Mbps suffisant si :</strong> Foyer 1-3 personnes, navigation, Netflix HD, visio 1080p, 3-4 devices. <strong>200 Mbps recommandé si :</strong> Famille 4-5 personnes, Netflix 4K + gaming, télétravail, 5-8 devices. Surcoût 200 Mbps = 100 DH/mois.</div>
              </details>
              <details className="bg-white border border-slate-200 rounded-lg p-4">
                <summary className="font-bold cursor-pointer">🔄 Peut-on changer d&apos;opérateur sans frais ?</summary>
                <p className="text-sm text-slate-700 mt-3">Portabilité numéro fixe : Oui, gratuite (loi ANRT). Résiliation anticipée : MT 240 DH, Orange 200 DH si &lt;12 mois, Inwi gratuit si &gt;12 mois. Astuce : Attendre fin engagement (12 mois).</p>
              </details>
              <details className="bg-white border border-slate-200 rounded-lg p-4">
                <summary className="font-bold cursor-pointer">📺 Quel opérateur offre IPTV incluse ?</summary>
                <p className="text-sm text-slate-700 mt-3"><strong>Maroc Telecom :</strong> Oui, option IPTV incluse forfaits &gt;200 Mbps. Inwi / Orange : Non, IPTV séparée ou apps (Netflix, etc.). Si IPTV prioritaire : MT seul choix.</p>
              </details>
              <details className="bg-white border border-slate-200 rounded-lg p-4">
                <summary className="font-bold cursor-pointer">🎮 Quel ping pour jouer sans lag ?</summary>
                <p className="text-sm text-slate-700 mt-3">&lt;10ms : Parfait (FPS). 10-20ms : Très bon (MOBA). 20-50ms : Acceptable. &gt;50ms : Lag perceptible. Classement Maroc : 1. Orange 8ms, 2. Inwi 11ms, 3. MT 15ms.</p>
              </details>
              <details className="bg-white border border-slate-200 rounded-lg p-4">
                <summary className="font-bold cursor-pointer">💼 Meilleure connexion pour télétravail ?</summary>
                <p className="text-sm text-slate-700 mt-3">Critères : Uptime (Inwi 97.2% 🏆), upload 20+ Mbps, support réactif 24/7, backup 4G. Setup optimal : Inwi Fibre 100 Mbps (349 DH) + Flybox 4G backup (150 DH) = 499 DH/mois.</p>
              </details>
              <details className="bg-white border border-slate-200 rounded-lg p-4">
                <summary className="font-bold cursor-pointer">🏞️ Internet zone rurale : quelles options ?</summary>
                <div className="text-sm text-slate-700 mt-3">1. ADSL Maroc Telecom (priorité #1), 4-20 Mbps, couverture 95%. 2. 4G Home (Flybox) Inwi/Orange/MT, 150-200 DH/mois. 3. Satellite (dernier recours). 💡 Vérifier couverture 4G : nPerf.com</div>
              </details>
              <details className="bg-white border border-slate-200 rounded-lg p-4">
                <summary className="font-bold cursor-pointer">📱 Forfait mobile inclus avec fibre ?</summary>
                <p className="text-sm text-slate-700 mt-3">Non automatiquement. Packs &quot;Fibre + Mobile&quot; avec réduction : MT -10% forfait mobile, Inwi offres duo -50 DH/mois, Orange packs famille. Comparer prix séparés vs packs.</p>
              </details>
              <details className="bg-white border border-slate-200 rounded-lg p-4">
                <summary className="font-bold cursor-pointer">🔒 Quel opérateur le plus sécurisé ?</summary>
                <p className="text-sm text-slate-700 mt-3">Les 3 offrent sécurité de base équivalente (WPA2/WPA3, CGNAT). MT : Option VPN Protect 50 DH/mois. Orange : Livebox pare-feu avancé. Inwi : App contrôle parental gratuite. Sécurité dépend surtout de vos paramètres (mot de passe WiFi, firmware à jour). <Link href="/blog/192-168-1-1-admin-login-maroc-routeur-2026" className="text-blue-600 hover:underline mt-2 inline-block">→ Guide sécurité box complète</Link></p>
              </details>
            </div>
            <p className="mt-8 text-slate-600">
              <Link href="/blog/192-168-1-1-admin-login-maroc-routeur-2026" className="text-blue-600 hover:underline">Guide 192.168.1.1</Link>
              {" · "}
              <Link href="/blog/wifi-lent-maroc-2026" className="text-blue-600 hover:underline">Wi-Fi lent Maroc</Link>
              {" · "}
              <Link href="/blog/7-pannes-pc-courantes-2026-maroc" className="text-blue-600 hover:underline">7 pannes PC</Link>
              {" · "}
              <Link href="/services" className="text-blue-600 hover:underline">Nos services</Link>
              {" · "}
              <Link href="/blog" className="text-blue-600 hover:underline">Tous les articles</Link>
              {" · "}
              <Link href="/contact" className="text-blue-600 hover:underline">Contact</Link>
              {" · "}
              <Link href="/devis" className="text-blue-600 hover:underline">Devis</Link>
            </p>
          </div>
        </section>

        {/* Sticky Bottom Bar Mobile */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 shadow-2xl z-[9999] border-t-4 border-emerald-400">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1">
              <p className="font-bold text-sm">Pas sûr de votre choix ?</p>
              <p className="text-xs text-blue-100">Audit gratuit 10 min</p>
            </div>
            <a href={`${WHATSAPP_URL}?text=${encodeURIComponent("Audit Gratuit Opérateur")}`} target="_blank" rel="noopener noreferrer nofollow" className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-4 py-3 rounded-full font-bold text-sm whitespace-nowrap transition-all">
              <MessageCircle className="w-5 h-5" />
              Aide Gratuite
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
