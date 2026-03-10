import type { Metadata } from "next";
import Link from "next/link";
import {
  Wifi,
  WifiOff,
  Router,
  Signal,
  Settings,
  TrendingUp,
  MapPin,
  Clock,
  CheckCircle,
  AlertTriangle,
  Smartphone,
  Monitor,
  MessageCircle,
  Phone,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerCTA from "@/components/BannerCTA";

export const metadata: Metadata = {
  title: "WiFi Lent au Maroc en 2026 : 10 Causes et Solutions en 5 Minutes",
  description:
    "Internet lent malgré un bon abonnement ? Débit qui chute, coupures fréquentes au Maroc : 10 causes réelles et solutions testées pour Maroc Telecom, Inwi et Orange.",
  keywords: [
    "wifi lent maroc",
    "wifi lent casablanca",
    "wifi lent rabat",
    "wifi lent marrakech",
    "booster wifi maroc",
    "répéteur wifi maroc 2026",
    "maroc telecom wifi lent",
    "inwi wifi lent",
    "orange wifi lent",
    "connexion internet lente maroc",
    "améliorer wifi maroc",
    "wifi 5ghz maroc",
    "canal wifi optimal maroc",
    "box wifi maroc 2026",
  ],
  openGraph: {
    title: "WiFi Lent au Maroc en 2026 : 10 Causes et Solutions en 5 Minutes",
    description:
      "Internet lent malgré un bon abonnement ? Débit qui chute, coupures fréquentes au Maroc : 10 causes réelles et solutions testées pour Maroc Telecom, Inwi et Orange.",
    url: "https://allosupport.ma/blog/wifi-lent-maroc-2026",
    type: "article",
    publishedTime: "2026-02-07T21:00:00Z",
    authors: ["AlloSupport.ma"],
    locale: "fr_MA",
    images: [{ url: "https://allosupport.ma/blog/allo_support_wifi.webp", width: 1200, height: 630, alt: "Wi-Fi lent au Maroc - Solutions 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wi-Fi Lent au Maroc ? 10 Solutions Qui Marchent",
    description: "Guide 2026 : Réglages box, canaux optimaux, répéteurs. Casablanca, Rabat, Marrakech.",
  },
  alternates: { canonical: "https://allosupport.ma/blog/wifi-lent-maroc-2026" },
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
      headline: "Wi-Fi Lent au Maroc 2026 : 10 Solutions + Réglages Box FAI",
      description:
        "Guide complet pour résoudre les problèmes de Wi-Fi lent au Maroc : causes, solutions, réglages box par FAI, prix répéteurs 2026",
      author: { "@type": "Organization", name: "AlloSupport.ma", url: "https://allosupport.ma" },
      publisher: {
        "@type": "Organization",
        name: "AlloSupport.ma",
        logo: { "@type": "ImageObject", url: "https://allosupport.ma/logo.png" },
      },
      datePublished: "2026-02-07",
      dateModified: "2026-02-07",
      mainEntityOfPage: "https://allosupport.ma/blog/wifi-lent-maroc-2026",
      articleSection: "Dépannage Informatique",
      keywords: "wifi lent maroc, booster wifi, répéteur wifi maroc, maroc telecom, inwi, orange",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Pourquoi mon Wi-Fi est lent au Maroc ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Causes principales : canal Wi-Fi saturé par les voisins, box mal placée ou trop loin, utilisation de la bande 2.4 GHz seulement, murs épais bloquant signal, box ancienne (Wi-Fi 4), trop d'appareils connectés simultanément. Solutions immédiates : changer vers canal 1, 6 ou 11, activer bande 5 GHz, installer répéteur Wi-Fi ou CPL. Débit normal au Maroc : 50+ Mbps en fibre, 20+ Mbps en 4G.",
          },
        },
        {
          "@type": "Question",
          name: "Comment booster mon Wi-Fi gratuitement au Maroc ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Solutions gratuites : 1) Redémarrer la box (30 secondes), 2) Changer le canal Wi-Fi vers 1, 6 ou 11 via interface box, 3) Activer la bande 5 GHz, 4) Rapprocher la box de votre zone de travail, 5) Déconnecter appareils inutilisés, 6) Mettre à jour le firmware de la box. Ces actions prennent 10 minutes total et améliorent la vitesse de 30-50% sans frais.",
          },
        },
        {
          "@type": "Question",
          name: "Quel répéteur Wi-Fi acheter au Maroc en 2026 ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Meilleurs répéteurs Wi-Fi Maroc 2026 : TP-Link RE305 (180-220 DH, portée 15m), Xiaomi Mi Wi-Fi Extender Pro (220-280 DH, Wi-Fi 6), Tenda A9 (150-180 DH, économique), Mercusys MW300RE (120-150 DH, entrée de gamme). Disponibles chez Marjane, Electroplanet, Jumia.ma. Installation 5 minutes, gain signal +50-80%.",
          },
        },
        {
          "@type": "Question",
          name: "Comment changer le canal Wi-Fi de ma box au Maroc ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Maroc Telecom : 192.168.1.1 → admin/admin → Sans fil → Canal manuel → Sélectionner 1, 6 ou 11. Inwi : 192.168.1.1 → admin/admin → Paramètres Wi-Fi → Canal. Orange Flybox : 192.168.8.1 → admin/admin → Réseau sans fil → Canal automatique OFF → Choisir canal. Temps : 3-5 minutes. Redémarrer box après modification.",
          },
        },
        {
          "@type": "Question",
          name: "Quelle est la différence entre 2.4 GHz et 5 GHz au Maroc ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "2.4 GHz : portée longue (30+ mètres), traverse murs, vitesse limitée 50 Mbps, saturé par voisins. 5 GHz : portée courte (10-15 mètres), ne traverse pas murs épais, vitesse élevée 300+ Mbps, moins d'interférences. Au Maroc, utilisez 5 GHz pour salon/bureau et 2.4 GHz pour chambres éloignées. Tous les smartphones 2020+ supportent 5 GHz.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://allosupport.ma" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://allosupport.ma/blog" },
        { "@type": "ListItem", position: 3, name: "Wi-Fi Lent Maroc 2026", item: "https://allosupport.ma/blog/wifi-lent-maroc-2026" },
      ],
    },
    {
      "@type": "HowTo",
      name: "Comment Booster le Wi-Fi au Maroc",
      description: "Guide étape par étape pour améliorer la vitesse Wi-Fi au Maroc en 2026",
      step: [
        { "@type": "HowToStep", name: "Tester le débit actuel", text: "Ouvrez Speedtest.net et mesurez votre vitesse actuelle. Notez le ping, download et upload.", url: "https://allosupport.ma/blog/wifi-lent-maroc-2026#test-debit" },
        { "@type": "HowToStep", name: "Redémarrer la box", text: "Débranchez la box 30 secondes puis rebranchez. Attendez 2-3 minutes le redémarrage complet.", url: "https://allosupport.ma/blog/wifi-lent-maroc-2026#redemarrer-box" },
        { "@type": "HowToStep", name: "Changer le canal Wi-Fi", text: "Accédez à 192.168.1.1, login admin/admin, sélectionnez canal 1, 6 ou 11 en mode manuel.", url: "https://allosupport.ma/blog/wifi-lent-maroc-2026#changer-canal" },
        { "@type": "HowToStep", name: "Activer 5 GHz", text: "Dans paramètres box, activez la bande 5 GHz. Connectez vos appareils récents sur cette bande.", url: "https://allosupport.ma/blog/wifi-lent-maroc-2026#activer-5ghz" },
      ],
    },
  ],
};

export default function WiFiLentMaroc2026() {
  const WHATSAPP_URL = "https://wa.me/212775237038";
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        {/* HERO */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-16 pt-40 px-4">
          <div className="container mx-auto max-w-4xl">
            <nav className="flex items-center gap-2 text-sm text-blue-200 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white">Wi-Fi Lent Maroc 2026</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">+40% recherches en 5 jours • Trending #1</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Wi-Fi Lent au Maroc 2026 : 10 Raisons + 10 Solutions Rapides
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Guide Complet par FAI : Maroc Telecom, Inwi, Orange • Casablanca, Rabat, Marrakech
            </p>
            <div className="flex flex-wrap items-center gap-6 text-blue-200">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">12 min de lecture</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Maroc</span>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4" />
                <span className="text-sm">Mis à jour : 7 février 2026</span>
              </div>
            </div>
          </div>
        </section>

        {/* Image à la une */}
        <section className="bg-white py-6 px-4">
          <div className="container mx-auto max-w-4xl">
            <img
              src="/blog/allo_support_wifi.webp"
              alt="Wi-Fi lent au Maroc 2026 : causes, solutions, réglages box et répéteurs - AlloSupport"
              className="w-full rounded-2xl shadow-xl border border-slate-200"
              width={1200}
              height={630}
            />
          </div>
        </section>

        {/* TABLE DES MATIÈRES */}
        <section className="bg-white border-b border-slate-200 py-6 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Signal className="w-5 h-5 text-blue-600" />
                Table des Matières
              </h2>
              <ul className="grid md:grid-cols-2 gap-3 text-sm">
                <li><a href="#introduction" className="text-blue-600 hover:text-blue-800 hover:underline">→ Introduction</a></li>
                <li><a href="#10-raisons" className="text-blue-600 hover:text-blue-800 hover:underline">→ 10 Raisons Wi-Fi Lent</a></li>
                <li><a href="#test-debit" className="text-blue-600 hover:text-blue-800 hover:underline">→ Tester Votre Débit</a></li>
                <li><a href="#solutions" className="text-blue-600 hover:text-blue-800 hover:underline">→ 10 Solutions Rapides</a></li>
                <li><a href="#reglages-box" className="text-blue-600 hover:text-blue-800 hover:underline">→ Réglages Box par FAI</a></li>
                <li><a href="#cas-villes" className="text-blue-600 hover:text-blue-800 hover:underline">→ Solutions par Ville</a></li>
                <li><a href="#repeteurs" className="text-blue-600 hover:text-blue-800 hover:underline">→ Meilleurs Répéteurs 2026</a></li>
                <li><a href="#faq" className="text-blue-600 hover:text-blue-800 hover:underline">→ FAQ</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section id="introduction" className="py-12 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-8">
              <p className="text-red-900 font-medium text-lg mb-0">
                <strong>⚠️ Votre Wi-Fi est lent au Maroc ?</strong> Vous n&apos;êtes pas seul. <strong>67% des foyers marocains</strong> souffrent de connexion instable en 2026. Netflix qui buffere, Zoom qui coupe, pages qui mettent 10 secondes à charger...
              </p>
            </div>
            <p className="text-lg leading-relaxed text-slate-700">
              Vous payez <strong>200 à 400 DH par mois</strong> pour une connexion Maroc Telecom, Inwi ou Orange, mais votre Wi-Fi rame ? Le problème n&apos;est <strong>PAS toujours votre abonnement</strong>. Dans 85% des cas, c&apos;est un <strong>problème de configuration</strong> que vous pouvez résoudre gratuitement en 10 minutes.
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              Ce guide 2026 vous révèle les <strong>10 raisons techniques</strong> précises du Wi-Fi lent au Maroc et les <strong>10 solutions classées par efficacité</strong>. Que vous soyez à Casablanca (Maarif, Anfa), Rabat (Agdal, Hay Riad), Marrakech (Médina, Guéliz) ou Fès, vous aurez des solutions adaptées à votre ville et votre FAI.
            </p>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 my-8">
              <h3 className="text-emerald-900 font-bold text-xl mb-3 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                Ce Que Vous Allez Apprendre
              </h3>
              <ul className="space-y-2 text-emerald-800">
                <li>✅ Les 10 causes du Wi-Fi lent spécifiques au Maroc</li>
                <li>✅ Comment tester votre débit réel (Speedtest, Fast.com)</li>
                <li>✅ Réglages optimaux box Maroc Telecom, Inwi, Orange (login, canal, 5 GHz)</li>
                <li>✅ Prix et modèles de répéteurs Wi-Fi au Maroc 2026 (150-400 DH)</li>
                <li>✅ Solutions par ville (Casablanca, Rabat, Marrakech, Fès)</li>
                <li>✅ Quand faire appel à un <Link href="/depannage-informatique" className="text-emerald-700 hover:underline font-medium">expert dépannage à distance</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* 10 RAISONS - Début (suite dans prochain bloc) */}
        <section id="10-raisons" className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <WifiOff className="w-8 h-8 text-red-500" />
              10 Raisons Pourquoi Votre Wi-Fi Est Lent au Maroc en 2026
            </h2>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">1. Canal Wi-Fi Saturé (Voisins)</h3>
                <p className="text-slate-700 text-lg mb-4">
                  À <strong>Casablanca et Rabat</strong>, les immeubles concentrent 20 à 30 box Wi-Fi sur le <strong>même canal</strong> (généralement canal 6 par défaut). Résultat : saturation = vitesse divisée par 3.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-900 font-medium mb-2">📱 <strong>Test Rapide</strong> :</p>
                  <p className="text-blue-800">Téléchargez &quot;WiFi Analyzer&quot; (Android) ou &quot;NetSpot&quot; (Windows/Mac) pour voir les canaux saturés.</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg mt-3">
                  <p className="text-emerald-900 font-medium mb-2">✅ <strong>Solution</strong> :</p>
                  <p className="text-emerald-800">Changez vers le canal le moins utilisé (1, 6 ou 11). Voir section &quot;Réglages Box&quot; ci-dessous.</p>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">2. Vous Utilisez Seulement la Bande 2.4 GHz</h3>
                <p className="text-slate-700 text-lg mb-4">Les box modernes (2020+) supportent <strong>2 bandes Wi-Fi</strong> :</p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-slate-100 p-4 rounded-lg">
                    <p className="font-bold text-slate-900 mb-2">📡 2.4 GHz (Ancien)</p>
                    <ul className="text-slate-700 text-sm space-y-1">
                      <li>• Portée : 30+ mètres</li>
                      <li>• Vitesse max : <strong>50 Mbps</strong></li>
                      <li>• Traverse les murs ✅</li>
                      <li>• Saturé par voisins ❌</li>
                    </ul>
                  </div>
                  <div className="bg-emerald-100 p-4 rounded-lg">
                    <p className="font-bold text-emerald-900 mb-2">📡 5 GHz (Moderne)</p>
                    <ul className="text-emerald-800 text-sm space-y-1">
                      <li>• Portée : 10-15 mètres</li>
                      <li>• Vitesse max : <strong>300+ Mbps</strong></li>
                      <li>• Murs épais = signal faible ⚠️</li>
                      <li>• Peu d&apos;interférences ✅</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p className="text-emerald-900 font-medium mb-2">✅ <strong>Solution</strong> :</p>
                  <p className="text-emerald-800">Activez 5 GHz dans les paramètres de votre box. Utilisez-le pour salon/bureau (proche box) et 2.4 GHz pour chambres éloignées.</p>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">3. Box Mal Placée ou Trop Loin</h3>
                <p className="text-slate-700 text-lg mb-4">
                  Au Maroc, les <strong>murs en béton armé</strong> bloquent 40 à 60% du signal Wi-Fi. Si votre box est dans le couloir d&apos;entrée et vous travaillez dans la chambre au fond, signal divisé par 4.
                </p>
                <div className="bg-red-50 p-4 rounded-lg mb-3">
                  <p className="text-red-900 font-medium mb-2">❌ <strong>Erreurs Courantes Maroc</strong> :</p>
                  <ul className="text-red-800 space-y-1">
                    <li>• Box dans armoire électrique (signal bloqué)</li>
                    <li>• Box au sol derrière canapé</li>
                    <li>• Box loin de la zone de travail principale</li>
                    <li>• Box dans cuisine (interférences micro-ondes)</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p className="text-emerald-900 font-medium mb-2">✅ <strong>Solution</strong> :</p>
                  <p className="text-emerald-800"><strong>Surélevez la box</strong> (1-2 mètres hauteur), placez-la <strong>au centre du logement</strong>, éloignez-la des murs métalliques et appareils électriques. Si impossible, installez un <strong>répéteur Wi-Fi</strong> (150-300 DH).</p>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">4. Box Ancienne (Wi-Fi 4 vs Wi-Fi 6)</h3>
                <p className="text-slate-700 text-lg mb-4">
                  Les box distribuées par Maroc Telecom, Inwi et Orange <strong>avant 2022</strong> utilisent la norme Wi-Fi 4 (802.11n) = vitesse max <strong>150 Mbps théorique</strong>, mais <strong>30-50 Mbps réel</strong>.
                </p>
                <div className="bg-slate-100 p-4 rounded-lg mb-3 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-300">
                        <th className="text-left py-2 text-slate-900">Norme</th>
                        <th className="text-left py-2 text-slate-900">Année</th>
                        <th className="text-left py-2 text-slate-900">Vitesse Max</th>
                        <th className="text-left py-2 text-slate-900">Au Maroc</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700">
                      <tr className="border-b border-slate-200"><td className="py-2">Wi-Fi 4 (n)</td><td>2009-2020</td><td>150 Mbps</td><td><span className="text-red-600 font-medium">Ancien ❌</span></td></tr>
                      <tr className="border-b border-slate-200"><td className="py-2">Wi-Fi 5 (ac)</td><td>2014-2022</td><td>866 Mbps</td><td><span className="text-orange-600 font-medium">Moyen ⚠️</span></td></tr>
                      <tr><td className="py-2 font-bold">Wi-Fi 6 (ax)</td><td>2020-2026</td><td className="font-bold">1200+ Mbps</td><td><span className="text-emerald-600 font-medium">Moderne ✅</span></td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p className="text-emerald-900 font-medium mb-2">✅ <strong>Solution</strong> :</p>
                  <p className="text-emerald-800">Contactez votre FAI (Maroc Telecom : 080, Inwi : 121, Orange : 1010) et demandez <strong>upgrade gratuit vers box Wi-Fi 6</strong> (disponible 2026 pour abonnés fibre).</p>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">5. Trop d&apos;Appareils Connectés</h3>
                <p className="text-slate-700 text-lg mb-4">
                  <strong>Famille marocaine type 2026</strong> : 4-5 smartphones + 2 PC/laptops + 2 tablettes + smart TV + consoles = <strong>12-15 devices</strong>. Si box Wi-Fi 4, elle supporte max <strong>15-20 devices</strong> = saturation.
                </p>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p className="text-emerald-900 font-medium mb-2">✅ <strong>Solution</strong> :</p>
                  <p className="text-emerald-800">Déconnectez devices inutilisés. Upgrade vers box Wi-Fi 6 (supporte 50+ devices). Ou installez <strong>routeur secondaire</strong> (300-600 DH).</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">6. Interférences Électriques</h3>
                  <p className="text-slate-700"><strong>Micro-ondes, babyphone, Bluetooth</strong> émettent sur 2.4 GHz = parasites Wi-Fi. Éloignez box de 2+ mètres ou passez en 5 GHz.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">7. Firmware Box Obsolète</h3>
                  <p className="text-slate-700">Box non mises à jour = failles + bugs. Vérifiez dans interface box → Mise à jour système.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">8. Throttling FAI</h3>
                  <p className="text-slate-700">Certains FAI ralentissent Netflix, YouTube aux heures de pointe. Test : Speedtest.net vs Fast.com = throttling si écart.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">9. Murs Épais (Riads, Médina)</h3>
                  <p className="text-slate-700">À <strong>Marrakech et Fès</strong>, riads = murs 40-60 cm. Solution : <strong>CPL</strong> ou système Mesh.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">10. Abonnement Insuffisant</h3>
                  <p className="text-slate-700">10 Mbps pour 5 personnes = lenteur. Minimum 2026 : <strong>50 Mbps famille</strong>, 100+ Mbps télétravail.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA #1 : Après 10 Raisons - Configuration AP / Répéteurs / Analyse */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-2xl text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-yellow-300" />
                  </div>
                  <h3 className="text-2xl font-bold">Problème Trop Complexe ?</h3>
                </div>
                <p className="text-blue-100 text-lg mb-6">
                  Vous avez identifié le problème mais vous ne savez pas comment le résoudre ? <strong className="text-white">Nos experts interviennent à distance en 15 minutes</strong> pour diagnostiquer et réparer votre Wi-Fi partout au Maroc.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Router className="w-5 h-5 text-emerald-300" />
                      Configuration AP Pro
                    </h4>
                    <p className="text-blue-100 text-sm">Installation Access Points entreprise, mesh, réglages optimaux</p>
                    <p className="text-emerald-300 font-bold mt-2 text-sm">À partir de 500 DH</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Signal className="w-5 h-5 text-emerald-300" />
                      Installation Répéteurs
                    </h4>
                    <p className="text-blue-100 text-sm">Achat + installation + config répéteurs, CPL, mesh système</p>
                    <p className="text-emerald-300 font-bold mt-2 text-sm">À partir de 350 DH</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <Settings className="w-5 h-5 text-emerald-300" />
                      Analyse Technique
                    </h4>
                    <p className="text-blue-100 text-sm">Audit complet réseau, heatmap Wi-Fi, rapport optimisation</p>
                    <p className="text-emerald-300 font-bold mt-2 text-sm">À partir de 250 DH</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent("Bonjour AlloSupport, j'ai besoin d'aide pour mon Wi-Fi :\n\n✅ Ville : [Casablanca/Rabat/Marrakech]\n✅ Problème : [Wi-Fi lent/Coupures/Zones mortes]\n✅ Type logement : [Appartement/Villa/Riad]\n✅ Service souhaité : [Configuration AP/Installation Répéteur/Analyse Technique]")}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl hover:scale-105 transform"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Devis Gratuit WhatsApp</span>
                  </a>
                  <a
                    href="tel:+212775237038"
                    className="flex items-center gap-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full border-2 border-white/40 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Appel Direct : 07 75 23 70 38</span>
                  </a>
                </div>
                <p className="text-blue-200 text-sm mt-4 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-300" />
                  <span>Intervention sous 15 min • Satisfait ou remboursé • Partout au Maroc</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TEST DÉBIT */}
        <section id="test-debit" className="py-12 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Testez Votre Débit Wi-Fi Actuel (2 Min)</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"><Signal className="w-6 h-6 text-blue-600" /></div>
                <h3 className="font-bold text-lg mb-2">Speedtest.net</h3>
                <p className="text-slate-600 text-sm mb-4">Test général débit (ping, download, upload)</p>
                <a href="https://speedtest.net" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm">Tester maintenant →</a>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4"><Monitor className="w-6 h-6 text-red-600" /></div>
                <h3 className="font-bold text-lg mb-2">Fast.com</h3>
                <p className="text-slate-600 text-sm mb-4">Test débit Netflix (détecte throttling FAI)</p>
                <a href="https://fast.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 font-medium text-sm">Tester Netflix →</a>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4"><Wifi className="w-6 h-6 text-emerald-600" /></div>
                <h3 className="font-bold text-lg mb-2">WiFi Analyzer</h3>
                <p className="text-slate-600 text-sm mb-4">Analyse canaux saturés (Android)</p>
                <p className="text-emerald-600 font-medium text-sm">Play Store gratuit</p>
              </div>
            </div>
            <div className="mt-8 bg-blue-900 text-white p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-4">📊 Débit Normal au Maroc 2026 :</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>Fibre FTTH</strong> : 50-100 Mbps minimum (Casablanca, Rabat)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>4G Box</strong> : 20-50 Mbps (zones non fibrées)</span></li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span><strong>ADSL</strong> : 4-16 Mbps (zones rurales)</span></li>
              </ul>
              <p className="mt-4 text-blue-200"><strong>Si vous avez moins de 20 Mbps en fibre</strong> = problème configuration ou FAI.</p>
            </div>
          </div>
        </section>

        {/* 10 SOLUTIONS + TABLEAU */}
        <section id="solutions" className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">10 Solutions Pour Booster Votre Wi-Fi au Maroc</h2>
            <p className="text-slate-600 mb-8 text-lg">Classées par <strong>efficacité</strong> et <strong>facilité</strong></p>
            <div className="overflow-x-auto mb-12">
              <table className="w-full bg-white border border-slate-200 rounded-lg overflow-hidden text-sm">
                <thead className="bg-slate-900 text-white">
                  <tr>
                    <th className="text-left p-3 font-bold">#</th>
                    <th className="text-left p-3 font-bold">Solution</th>
                    <th className="text-left p-3 font-bold">Coût</th>
                    <th className="text-left p-3 font-bold">Temps</th>
                    <th className="text-left p-3 font-bold">Gain</th>
                    <th className="text-left p-3 font-bold">Difficulté</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100 hover:bg-slate-50"><td className="p-3 font-bold text-blue-600">1</td><td className="p-3 font-medium">Redémarrer box</td><td className="p-3 text-emerald-600 font-medium">Gratuit</td><td className="p-3">30 sec</td><td className="p-3 font-medium">+10-20%</td><td className="p-3">😊 Facile</td></tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50"><td className="p-3 font-bold text-blue-600">2</td><td className="p-3 font-medium">Changer canal Wi-Fi</td><td className="p-3 text-emerald-600 font-medium">Gratuit</td><td className="p-3">5 min</td><td className="p-3 font-bold text-emerald-600">+30-50%</td><td className="p-3">🤔 Moyen</td></tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50 bg-emerald-50"><td className="p-3 font-bold text-blue-600">3</td><td className="p-3 font-bold">Activer 5 GHz</td><td className="p-3 text-emerald-600 font-bold">Gratuit</td><td className="p-3">3 min</td><td className="p-3 font-bold text-emerald-600">+100-200%</td><td className="p-3">🤔 Moyen</td></tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50"><td className="p-3 font-bold text-blue-600">4</td><td className="p-3 font-medium">Câble Ethernet</td><td className="p-3">50-100 DH</td><td className="p-3">2 min</td><td className="p-3 font-bold text-emerald-600">+300%</td><td className="p-3">😊 Facile</td></tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50"><td className="p-3 font-bold text-blue-600">5</td><td className="p-3 font-medium">Répéteur Wi-Fi</td><td className="p-3">150-300 DH</td><td className="p-3">10 min</td><td className="p-3 font-medium">+50-80%</td><td className="p-3">😊 Facile</td></tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50"><td className="p-3 font-bold text-blue-600">6</td><td className="p-3 font-medium">CPL (Powerline)</td><td className="p-3">250-400 DH</td><td className="p-3">15 min</td><td className="p-3 font-bold text-emerald-600">+100%</td><td className="p-3">😊 Facile</td></tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50"><td className="p-3 font-bold text-blue-600">7</td><td className="p-3 font-medium">Nouveau routeur</td><td className="p-3">400-800 DH</td><td className="p-3">30 min</td><td className="p-3 font-medium">+150%</td><td className="p-3">🤔 Moyen</td></tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50"><td className="p-3 font-bold text-blue-600">8</td><td className="p-3 font-medium">Upgrade abonnement</td><td className="p-3">+50-100 DH/mois</td><td className="p-3">Immédiat</td><td className="p-3 font-bold text-emerald-600">+200%</td><td className="p-3">😊 Facile</td></tr>
                  <tr className="border-b border-slate-100 hover:bg-slate-50"><td className="p-3 font-bold text-blue-600">9</td><td className="p-3 font-medium">VPN (anti-throttling)</td><td className="p-3">80-150 DH/mois</td><td className="p-3">5 min</td><td className="p-3">Variable</td><td className="p-3">😊 Facile</td></tr>
                  <tr className="hover:bg-slate-50"><td className="p-3 font-bold text-blue-600">10</td><td className="p-3 font-medium">Système Mesh Wi-Fi</td><td className="p-3 text-orange-600">1,500-3,000 DH</td><td className="p-3">1 heure</td><td className="p-3 font-bold text-emerald-600">+200-300%</td><td className="p-3">😅 Avancé</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">🎯 Recommandation AlloSupport 2026 :</h3>
              <p className="text-lg mb-4"><strong>Commencez par les 3 premières solutions</strong> (gratuites, 10 min total) :</p>
              <ol className="space-y-2 pl-5">
                <li>1. Redémarrer box → +10-20% vitesse</li>
                <li>2. Changer canal Wi-Fi → +30-50% vitesse</li>
                <li>3. Activer 5 GHz → +100-200% vitesse</li>
              </ol>
              <p className="mt-4 text-emerald-100"><strong>Résultat :</strong> Dans 70% des cas, ces 3 actions suffisent !</p>
            </div>
            <div className="mt-6">
              <BannerCTA
                titre="Wifi lent même après ces solutions ?"
                sousTitre="On prend la main à distance et on règle ça en 30 min. 250 DH, paiement après résultat."
                messageWhatsApp="Bonjour, mon wifi est toujours lent après avoir essayé plusieurs solutions. Opérateur : [nom]. Box : [modèle]."
              />
            </div>
          </div>
        </section>

        {/* RÉGLAGES BOX PAR FAI */}
        <section id="reglages-box" className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <Router className="w-8 h-8 text-blue-600" />
              Réglages Box Étape par Étape (Par FAI)
            </h2>
            <div className="mb-12 bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border border-red-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center"><span className="text-white font-bold text-xl">IAM</span></div>
                <div>
                  <h3 className="text-2xl font-bold text-red-900">Maroc Telecom (IAM)</h3>
                  <p className="text-red-700">Box Fibre / 4G Plus</p>
                </div>
              </div>
              <div className="space-y-4 text-slate-800">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-lg mb-2">🔐 Étape 1 : Accéder à l&apos;interface box</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Ouvrez votre navigateur</li>
                    <li>Tapez : <code className="bg-slate-100 px-2 py-1 rounded font-mono text-sm">192.168.1.1</code></li>
                    <li>Login : <strong>admin</strong> / Mot de passe : <strong>admin</strong></li>
                  </ol>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-lg mb-2">📡 Étape 2 : Changer le canal Wi-Fi</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Menu → <strong>Sans fil</strong> → Paramètres avancés</li>
                    <li>Canal : <strong>Manuel</strong> → Sélectionnez <strong>1, 6 ou 11</strong></li>
                    <li>Appliquer → Box redémarre (2 min)</li>
                  </ol>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-lg mb-2">⚡ Étape 3 : Activer 5 GHz</p>
                  <ol className="list-decimal pl-5 space-y-1">
                    <li>Sans fil → <strong>Bande 5 GHz</strong> → Activer</li>
                    <li>Nom réseau 5 GHz : ex. MonWiFi_5G</li>
                    <li>Sauvegardez → Redémarrez box</li>
                  </ol>
                </div>
                <p className="text-slate-700 text-sm mt-3">Si cette solution ne règle pas ton problème →{" "}
                  <Link href="/depannage-informatique-a-domicile" className="text-blue-700 underline font-medium">
                    diagnostic réseau à distance 250 DH
                  </Link>.</p>
              </div>
            </div>
            <div className="mb-12 bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-orange-600 rounded-xl flex items-center justify-center"><span className="text-white font-bold text-xl">INWI</span></div>
                <div><h3 className="text-2xl font-bold text-orange-900">Inwi</h3><p className="text-orange-700">Box 4G / Fibre</p></div>
              </div>
              <p>URL : <code className="bg-slate-100 px-2 py-1 rounded font-mono">192.168.1.1</code> • Login : <strong>admin/admin</strong> • Paramètres Wi-Fi → Canal manuel (1, 6, 11) → Bande 5 GHz : Activer</p>
            </div>
            <div className="mb-12 bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-xl border border-orange-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center"><span className="text-white font-bold text-xl">🍊</span></div>
                <div><h3 className="text-2xl font-bold text-orange-900">Orange Maroc</h3><p className="text-orange-700">Flybox 4G / Fibre</p></div>
              </div>
              <p>URL : <code className="bg-slate-100 px-2 py-1 rounded font-mono">192.168.8.1</code> • Login : <strong>admin/admin</strong> • Réseau sans fil → Canal 1/6/11 → Bande 5 GHz : Activer</p>
            </div>
          </div>
        </section>

        {/* CTA #2 : Après Réglages Box - Configuration à distance */}
        <section className="py-8 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <Settings className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    Trop Technique ? On Configure Pour Vous ! 🛠️
                  </h3>
                  <p className="text-slate-700 text-lg mb-4">
                    Les réglages box vous semblent compliqués ? <strong>Nos techniciens se connectent à distance</strong> et optimisent votre Wi-Fi en 15 minutes pendant que vous regardez.
                  </p>
                  <div className="bg-white rounded-lg p-4 mb-4 border border-orange-200">
                    <p className="font-bold text-slate-900 mb-2">✅ Ce Qu&apos;On Fait Pour Vous :</p>
                    <ul className="space-y-1 text-slate-700 text-sm">
                      <li>• Connexion sécurisée à votre box (TeamViewer/AnyDesk)</li>
                      <li>• Analyse canaux Wi-Fi saturés + changement canal optimal</li>
                      <li>• Activation 5 GHz + création réseau séparé</li>
                      <li>• Configuration largeur canal, puissance signal, sécurité WPA3</li>
                      <li>• Test débit avant/après + rapport PDF</li>
                    </ul>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start gap-3">
                    <a
                      href={`${WHATSAPP_URL}?text=${encodeURIComponent("Bonjour AlloSupport, je veux que vous configuriez ma box Wi-Fi :\n\n✅ Opérateur : [Maroc Telecom/Inwi/Orange]\n✅ Ville : [Votre ville]\n✅ Problème : [Wi-Fi lent/Coupures]\n\nJe suis disponible maintenant pour intervention à distance")}`}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-all shadow-lg"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <div>
                        <div className="text-sm">Configuration Box à Distance</div>
                        <div className="text-xs opacity-90">150 DH • Intervention 15 min</div>
                      </div>
                    </a>
                    <Link
                      href="/services/reseau-wifi"
                      className="flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold px-6 py-3 rounded-lg border-2 border-orange-300 hover:bg-orange-50 transition-all"
                    >
                      <span>Solutions Pro PME</span>
                      <span className="text-sm">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS PAR VILLE */}
        <section id="cas-villes" className="py-12 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Solutions Wi-Fi par Ville Marocaine</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center"><MapPin className="w-6 h-6 text-blue-600" /></div><div><h3 className="text-xl font-bold text-slate-900">Casablanca</h3><p className="text-slate-500 text-sm">Maarif, Anfa, Hay Hassani</p></div></div>
                <p><strong className="text-red-600">❌ Problème :</strong> 50+ box en immeuble = saturation canal 6.</p>
                <p><strong className="text-emerald-600">✅ Solution :</strong> Canal 11, 5 GHz, répéteur si T4/T5.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center"><MapPin className="w-6 h-6 text-emerald-600" /></div><div><h3 className="text-xl font-bold text-slate-900">Rabat</h3><p className="text-slate-500 text-sm">Agdal, Hay Riad</p></div></div>
                <p><strong className="text-red-600">❌ Problème :</strong> Box anciennes, FAI débordés 9h-18h.</p>
                <p><strong className="text-emerald-600">✅ Solution :</strong> Upgrade box Wi-Fi 6, VPN si throttling, câble Ethernet.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center"><MapPin className="w-6 h-6 text-orange-600" /></div><div><h3 className="text-xl font-bold text-slate-900">Marrakech</h3><p className="text-slate-500 text-sm">Médina, Guéliz</p></div></div>
                <p><strong className="text-red-600">❌ Problème :</strong> Riads = murs 40-60 cm, Wi-Fi ne traverse pas.</p>
                <p><strong className="text-emerald-600">✅ Solution :</strong> CPL obligatoire (250-400 DH), Mesh si riad &gt;150m².</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
                <div className="flex items-center gap-3 mb-4"><div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center"><MapPin className="w-6 h-6 text-purple-600" /></div><div><h3 className="text-xl font-bold text-slate-900">Fès</h3><p className="text-slate-500 text-sm">Médina, Ville Nouvelle</p></div></div>
                <p><strong className="text-red-600">❌ Problème :</strong> Fibre limitée, 4G Box instable.</p>
                <p><strong className="text-emerald-600">✅ Solution :</strong> Vérifier couverture fibre, antenne 4G externe, répéteur + CPL.</p>
              </div>
            </div>
            <p className="text-slate-700 text-sm mt-4">Si cette solution ne règle pas ton problème →{" "}
              <Link href="/depannage-informatique-a-domicile" className="text-blue-700 underline font-medium">
                diagnostic réseau à distance 250 DH
              </Link>.</p>
          </div>
        </section>

        {/* MEILLEURS RÉPÉTEURS 2026 */}
        <section id="repeteurs" className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Meilleurs Répéteurs Wi-Fi au Maroc 2026</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl border-2 border-emerald-500 relative">
                <div className="absolute -top-3 -right-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">BEST SELLER</div>
                <h3 className="font-bold text-lg mb-2">TP-Link RE305</h3>
                <p className="text-3xl font-bold text-emerald-600 mb-3">180-220 DH</p>
                <ul className="space-y-2 text-slate-700 text-sm mb-4">
                  <li>✅ Dual band 2.4 + 5 GHz</li>
                  <li>✅ Portée : +15 mètres</li>
                  <li>✅ Vitesse : 300 Mbps</li>
                  <li>✅ Installation 5 min</li>
                </ul>
                <p className="text-xs text-slate-600">Marjane, Electroplanet, Jumia</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="font-bold text-lg mb-2">Xiaomi Mi Extender Pro</h3>
                <p className="text-3xl font-bold text-slate-900 mb-3">220-280 DH</p>
                <ul className="space-y-2 text-slate-700 text-sm mb-4"><li>✅ Wi-Fi 6 (ax)</li><li>✅ Portée : +18 m</li><li>✅ 1200 Mbps</li></ul>
                <p className="text-xs text-slate-600">Jumia, Boutiques Xiaomi</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="font-bold text-lg mb-2">Tenda A9</h3>
                <p className="text-3xl font-bold text-slate-900 mb-3">150-180 DH</p>
                <ul className="space-y-2 text-slate-700 text-sm mb-4"><li>✅ Économique</li><li>✅ Portée : +12 m</li><li>⚠️ 2.4 GHz seulement</li></ul>
                <p className="text-xs text-slate-600">Marjane, Aswak Assalam</p>
              </div>
            </div>
            <div className="bg-blue-900 text-white p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">💡 Conseil AlloSupport 2026 :</h3>
              <p>T2-T3 : <strong>TP-Link RE305</strong> (180 DH). Villas/riads : <strong>CPL</strong> (300-400 DH) ou <strong>Mesh</strong> (1,500+ DH). PME : <Link href="/services/reseau-wifi" className="text-emerald-400 hover:text-emerald-300 underline">Contactez-nous</Link></p>
            </div>
            <p className="text-slate-700 text-sm mt-4">Si cette solution ne règle pas ton problème →{" "}
              <Link href="/depannage-informatique-a-domicile" className="text-blue-700 underline font-medium">
                diagnostic réseau à distance 250 DH
              </Link>.</p>
          </div>
        </section>

        {/* CTA #3 : Après Répéteurs - Pack Installation Répéteur */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 shadow-2xl text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                      <Wifi className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold">Pack Installation Répéteur Complet</h3>
                  </div>
                  <p className="text-emerald-100 text-lg mb-6">
                    <strong className="text-white">Vous ne voulez pas vous embêter ?</strong> On achète, livre et installe le répéteur Wi-Fi adapté à votre logement avec configuration optimale garantie.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold">Conseil Matériel Personnalisé</p>
                        <p className="text-emerald-100 text-sm">On vous recommande LE répéteur adapté à votre superficie et budget</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold">Achat + Livraison Inclus</p>
                        <p className="text-emerald-100 text-sm">On achète le matériel et on livre chez vous (Casablanca 24h, autres villes 48-72h)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold">Installation + Configuration</p>
                        <p className="text-emerald-100 text-sm">Technicien se connecte à distance, installe et configure tout (15-30 min)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold">Test Débit + Garantie 30 Jours</p>
                        <p className="text-emerald-100 text-sm">On teste le gain de vitesse et garantit le résultat</p>
                      </div>
                    </div>
                  </div>
                  <a
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent("Bonjour AlloSupport, je veux le Pack Installation Répéteur :\n\n✅ Type logement : [Appartement T2/T3 / Villa / Riad]\n✅ Ville : [Casablanca/Rabat/Marrakech/Autre]\n✅ Superficie : [70m² / 120m² / 200m²+]\n✅ Budget : [200-400 DH / 400-800 DH / 800-1500 DH]\n\nMerci de me conseiller !")}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center gap-3 bg-white hover:bg-emerald-50 text-emerald-600 font-bold px-8 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <div className="text-left">
                      <div>Devis Pack Répéteur</div>
                      <div className="text-xs opacity-80">À partir de 350 DH tout compris</div>
                    </div>
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <p className="text-emerald-100 font-bold mb-4 text-center">💰 Tarifs Indicatifs :</p>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span>Répéteur Basic (T2/T3)</span>
                      <span className="font-bold text-white">350-450 DH</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Répéteur Dual Band (T4/T5)</span>
                      <span className="font-bold text-white">500-650 DH</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>CPL Powerline (Villas)</span>
                      <span className="font-bold text-white">600-800 DH</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Système Mesh 2 Points</span>
                      <span className="font-bold text-white">1,800-2,500 DH</span>
                    </div>
                  </div>
                  <p className="text-emerald-200 text-xs mt-4 text-center">
                    Prix incluent : matériel + livraison + installation + config + garantie
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Questions Fréquentes (FAQ)</h2>
            <div className="space-y-6">
              {[
                { q: "Pourquoi mon Wi-Fi est lent au Maroc ?", a: "Causes principales : canal Wi-Fi saturé par les voisins (Casablanca/Rabat immeubles), box mal placée ou trop loin, utilisation de la bande 2.4 GHz seulement, murs épais, box ancienne (Wi-Fi 4), trop d'appareils (15+). Solutions : changer vers canal 1, 6 ou 11, activer 5 GHz, répéteur ou CPL. Débit normal : 50+ Mbps fibre, 20+ Mbps 4G." },
                { q: "Comment booster mon Wi-Fi gratuitement au Maroc ?", a: "1) Redémarrer la box (30 s), 2) Changer canal Wi-Fi (192.168.1.1, admin/admin) vers 1, 6 ou 11, 3) Activer 5 GHz, 4) Rapprocher la box, 5) Déconnecter appareils inutilisés, 6) Mettre à jour firmware box. Gain : +30-50% en 10 min." },
                { q: "Quel répéteur Wi-Fi acheter au Maroc en 2026 ?", a: "TP-Link RE305 (180-220 DH), Xiaomi Mi Extender Pro (220-280 DH, Wi-Fi 6), Tenda A9 (150-180 DH), Mercusys MW300RE (120-150 DH). Marjane, Electroplanet, Jumia.ma. Gain signal +50-80%." },
                { q: "Comment changer le canal Wi-Fi de ma box au Maroc ?", a: "Maroc Telecom : 192.168.1.1 → admin/admin → Sans fil → Canal manuel → 1, 6 ou 11. Inwi : 192.168.1.1 → Paramètres Wi-Fi → Canal. Orange : 192.168.8.1 → Réseau sans fil → Canal OFF → 1/6/11. Redémarrer box après." },
                { q: "Quelle est la différence entre 2.4 GHz et 5 GHz ?", a: "2.4 GHz : portée longue (30+ m), traverse murs, 50 Mbps max, saturé. 5 GHz : portée courte (10-15 m), 300+ Mbps, moins d'interférences. Au Maroc : 5 GHz pour salon/bureau, 2.4 GHz pour chambres. Smartphones 2020+ supportent 5 GHz." },
              ].map((faq, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-start gap-2"><span className="text-blue-600 flex-shrink-0">Q{idx + 1}.</span>{faq.q}</h3>
                  <p className="text-slate-700 leading-relaxed pl-8">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL - WhatsApp corrigé */}
        <section className="py-16 px-4 bg-gradient-to-br from-emerald-500 to-emerald-600">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Wi-Fi Toujours Lent Après Ces Solutions ?</h2>
            <p className="text-xl text-emerald-100 mb-8">Nos experts diagnostiquent votre problème Wi-Fi <strong>à distance en 15 minutes</strong> partout au Maroc</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent("Bonjour AlloSupport, mon Wi-Fi est très lent")}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex items-center gap-3 bg-white hover:bg-slate-100 text-emerald-600 font-bold px-8 py-4 rounded-full transition-all shadow-2xl"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Diagnostic Gratuit WhatsApp</span>
              </a>
              <Link href="/services/reseau-wifi" className="flex items-center gap-2 text-white font-semibold px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-emerald-600 transition-all">Solutions Professionnelles PME</Link>
            </div>
            <p className="mt-6 text-emerald-100 text-sm">✅ Intervention 15 min • 💰 150-300 DH • 🇲🇦 Partout au Maroc</p>
          </div>
        </section>

        {/* ARTICLES CONNEXES */}
        <section className="py-12 px-4 bg-slate-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Articles Connexes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/pc-lent-10-solutions-rapides-maroc" className="bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all group">
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-600 mb-2">PC Lent : 10 Solutions Rapides</h3>
                <p className="text-slate-600 text-sm">Diagnostic + fixes gratuits Maroc 2026</p>
              </Link>
              <Link href="/services/reseau-wifi" className="bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all group">
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-600 mb-2">Solutions Réseau PME</h3>
                <p className="text-slate-600 text-sm">Wi-Fi pro, VPN, serveurs Maroc</p>
              </Link>
              <Link href="/services/depannage-pc-mac" className="bg-white p-6 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all group">
                <h3 className="font-bold text-lg text-slate-900 group-hover:text-emerald-600 mb-2">Dépannage à Distance 15 Min</h3>
                <p className="text-slate-600 text-sm">PC, Mac, Wi-Fi - Partout Maroc</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA #4 : Sticky bar (Mobile + Desktop) */}
        <div className="fixed bottom-0 left-0 right-0 z-[9999] lg:bottom-6 lg:left-1/2 lg:-translate-x-1/2 lg:max-w-5xl lg:mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 lg:rounded-2xl shadow-2xl border-t-4 border-emerald-400 lg:border-emerald-400">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-white">
                  <div className="hidden sm:flex w-12 h-12 bg-white/20 rounded-lg items-center justify-center flex-shrink-0">
                    <Wifi className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Wi-Fi Toujours Lent ?</p>
                    <p className="text-blue-100 text-sm">Intervention à distance 15 min • 150-300 DH</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent("Bonjour AlloSupport, mon Wi-Fi est lent :\n\n✅ Ville :\n✅ Opérateur :\n✅ Débit actuel :\n\nJ'ai besoin d'aide !")}`}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg transition-all shadow-lg whitespace-nowrap"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Diagnostic Gratuit</span>
                  </a>
                  <a
                    href="#reglages-box"
                    className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-lg border border-white/40 transition-all whitespace-nowrap"
                  >
                    <Settings className="w-5 h-5" />
                    <span className="hidden sm:inline">Voir Réglages Box</span>
                    <span className="sm:hidden">Réglages</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <BannerCTA
              titre="Toujours pas résolu ?"
              messageWhatsApp="Bonjour, mon wifi reste lent malgré tout. J'ai besoin d'un technicien."
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
