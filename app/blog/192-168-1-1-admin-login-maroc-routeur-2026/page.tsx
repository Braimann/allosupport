import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Router,
  Wifi,
  Lock,
  Shield,
  Settings,
  Monitor,
  Smartphone,
  CheckCircle,
  AlertTriangle,
  MessageCircle,
  Phone,
  Zap,
  Users,
  Ban,
  RotateCw,
  Clock,
  TrendingUp,
  ExternalLink,
  Edit,
  Signal,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "192.168.1.1 Admin Maroc : Login Maroc Telecom, Inwi, Orange | Tous Mots de Passe 2026",
  description:
    "Accès 192.168.1.1 au Maroc : login et mot de passe par défaut TOUS routeurs Maroc Telecom (Technicolor, ZTE), Inwi, Orange. Changer WiFi, contrôle parental. Guide complet 2026.",
  keywords: [
    "192.168.1.1",
    "192.168.1.1 admin",
    "192.168.1.1 maroc telecom",
    "mot de passe admin routeur maroc telecom",
    "login routeur maroc",
    "192.168.1.1 admin admin",
    "interface admin box maroc",
    "controle parental routeur maroc",
    "changer mot de passe wifi maroc",
    "technicolor maroc telecom mot de passe",
    "zte zxhn f680 password",
    "configuration routeur maroc",
    "ip box maroc telecom",
    "admin orange maroc",
    "192.168.1.1 inwi",
  ],
  openGraph: {
    title: "192.168.1.1 Admin Maroc : Login Tous Routeurs MT, Inwi, Orange",
    description:
      "Guide complet accès 192.168.1.1 au Maroc. Login/password par défaut 20+ modèles routeurs. Changer WiFi, contrôle parental, troubleshooting.",
    url: "https://allosupport.ma/blog/192-168-1-1-admin-login-maroc-routeur-2026",
    type: "article",
    publishedTime: "2026-02-10T09:00:00Z",
    authors: ["AlloSupport.ma"],
    locale: "fr_MA",
    images: [
      { url: "https://allosupport.ma/blog/192.168.1.1.webp", width: 1200, height: 630, alt: "192.168.1.1 Admin Login Routeur Maroc" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "192.168.1.1 Admin Maroc : Tous Mots de Passe Routeurs",
    description: "Login/password Maroc Telecom, Inwi, Orange. Guide complet 2026.",
    images: ["https://allosupport.ma/blog/192.168.1.1.webp"],
  },
  alternates: { canonical: "https://allosupport.ma/blog/192-168-1-1-admin-login-maroc-routeur-2026" },
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
      headline: "192.168.1.1 Admin Maroc : Login Routeur Maroc Telecom, Inwi, Orange 2026",
      description:
        "Guide complet accès interface admin routeur 192.168.1.1 au Maroc. Login et mot de passe par défaut tous modèles Maroc Telecom, Inwi, Orange.",
      author: { "@type": "Organization", name: "AlloSupport.ma", url: "https://allosupport.ma" },
      publisher: {
        "@type": "Organization",
        name: "AlloSupport.ma",
        logo: { "@type": "ImageObject", url: "https://allosupport.ma/logo.png" },
      },
      datePublished: "2026-02-10",
      dateModified: "2026-02-10",
      mainEntityOfPage: "https://allosupport.ma/blog/192-168-1-1-admin-login-maroc-routeur-2026",
      articleSection: "Configuration Réseau",
      keywords: "192.168.1.1, admin routeur maroc, maroc telecom login",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quel est le login par défaut 192.168.1.1 Maroc Telecom ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Username : admin, Password : admin pour routeurs récents (2020+). Anciens modèles Sagem : Username Menara, Password Menara. Si modifié, vérifiez étiquette dos routeur ou reset box 10 secondes bouton arrière.",
          },
        },
        {
          "@type": "Question",
          name: "Comment accéder 192.168.1.1 depuis mobile ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Connectez mobile au Wi-Fi routeur, ouvrez navigateur Safari/Chrome, tapez 192.168.1.1 barre d'adresse (pas Google), appuyez Entrée, entrez admin/admin, interface s'affiche version mobile responsive.",
          },
        },
        {
          "@type": "Question",
          name: "192.168.1.1 ne marche pas que faire ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vérifiez connexion Wi-Fi active, désactivez données mobiles, essayez 192.168.0.1, videz cache navigateur, testez mode privé, redémarrez box et PC. Si persiste, reset box 10 secondes.",
          },
        },
        {
          "@type": "Question",
          name: "Comment changer mot de passe WiFi via 192.168.1.1 ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Accédez à 192.168.1.1 → Sans fil (ou Wireless) → Sécurité ou Paramètres Wi-Fi → Mot de passe WPA2. Saisissez un nouveau mot de passe (12+ caractères recommandé), sauvegardez. Les appareils devront se reconnecter avec le nouveau mot de passe.",
          },
        },
        {
          "@type": "Question",
          name: "Comment activer contrôle parental via 192.168.1.1 ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "192.168.1.1 → Sécurité ou Contrôle d'accès → Contrôle parental → Activer. Ajoutez l'appareil (adresse MAC), définissez les horaires autorisés et éventuellement une liste de sites bloqués.",
          },
        },
        {
          "@type": "Question",
          name: "Différence entre 192.168.1.1 et 192.168.0.1 ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Les deux sont des adresses IP privées de passerelle. 192.168.1.1 est la plus courante pour les box Maroc Telecom et Inwi. 192.168.0.1 est utilisée par certains routeurs (dont certains Orange). Si l'une ne répond pas, testez l'autre.",
          },
        },
        {
          "@type": "Question",
          name: "Comment reset routeur si mot de passe oublié ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bouton Reset à l'arrière du routeur : maintenez enfoncé 10 secondes avec un stylo ou trombone. La box redémarre et repasse aux paramètres d'usine. Les identifiants redeviennent admin/admin (ou Menara/Menara sur anciens Sagem). Vous devrez reconfigurer le Wi-Fi.",
          },
        },
        {
          "@type": "Question",
          name: "Peut-on accéder 192.168.1.1 sans WiFi ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, avec un câble Ethernet RJ45 entre le PC et un port LAN de la box. Utile si le Wi-Fi est coupé ou si vous préférez une connexion filaire pour accéder à l'interface.",
          },
        },
      ],
    },
    {
      "@type": "HowTo",
      name: "Comment Accéder à 192.168.1.1 au Maroc",
      description: "Guide étape par étape pour accéder interface admin routeur 192.168.1.1 au Maroc",
      step: [
        { "@type": "HowToStep", name: "Connecter au réseau", text: "Connectez votre ordinateur ou smartphone au réseau WiFi du routeur, ou branchez câble Ethernet." },
        { "@type": "HowToStep", name: "Ouvrir navigateur", text: "Ouvrez Chrome, Firefox, Safari ou Edge. N'utilisez PAS la barre de recherche Google." },
        { "@type": "HowToStep", name: "Taper adresse IP", text: "Dans la barre d'adresse, tapez exactement : http://192.168.1.1 puis appuyez Entrée." },
        { "@type": "HowToStep", name: "Entrer login", text: "Username : admin, Password : admin (ou Menara/Menara pour anciens modèles)." },
        { "@type": "HowToStep", name: "Accéder interface", text: "Vous êtes dans l'interface admin. Configurez WiFi, contrôle parental, etc." },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://allosupport.ma" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://allosupport.ma/blog" },
        { "@type": "ListItem", position: 3, name: "192.168.1.1 Admin Maroc", item: "https://allosupport.ma/blog/192-168-1-1-admin-login-maroc-routeur-2026" },
      ],
    },
  ],
};

export default function Page19216811AdminMaroc() {
  const WHATSAPP_URL = "https://wa.me/212775237038";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 pb-20 lg:pb-0">
        {/* HERO - pt-28 = espace sous le header sticky (h-20) */}
        <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white py-16 pt-28 md:pt-32 px-4">
          <div className="container mx-auto max-w-4xl">
            <nav className="flex items-center gap-2 text-sm text-blue-200 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white">192.168.1.1 Admin Maroc</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">18,000+ recherches/mois • Guide #1 Maroc</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              192.168.1.1 Admin Maroc : Login Routeur MT, Inwi, Orange 2026
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-6">
              Guide Complet : Tous Mots de Passe Par Défaut + Configuration WiFi, Contrôle Parental
            </p>
            <div className="flex flex-wrap items-center gap-6 text-blue-200">
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 15 min lecture</span>
              <span>10 février 2026</span>
            </div>
          </div>
        </section>

        {/* Image à la une */}
        <section className="bg-slate-100 py-4 px-4 -mt-2">
          <div className="container mx-auto max-w-4xl">
            <div className="relative h-56 sm:h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/blog/192.168.1.1.webp"
                alt="192.168.1.1 Admin Login Routeur Maroc Telecom Inwi Orange"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 896px"
                priority
              />
            </div>
          </div>
        </section>

        {/* TABLE OF CONTENTS */}
        <section className="bg-white border-b border-slate-200 py-6 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Router className="w-5 h-5 text-blue-600" />
                Table des matières
              </h2>
              <ul className="grid md:grid-cols-2 gap-2 text-sm">
                <li><a href="#quest-ce-que" className="text-blue-600 hover:underline">1. Qu&apos;est-ce que 192.168.1.1 ?</a></li>
                <li><a href="#tableaux-logins" className="text-blue-600 hover:underline">2. Tableau Logins par FAI</a></li>
                <li><a href="#comment-acceder" className="text-blue-600 hover:underline">3. Comment Accéder (5 Étapes)</a></li>
                <li><a href="#10-actions" className="text-blue-600 hover:underline">4. 10 Actions depuis Interface</a></li>
                <li><a href="#problemes" className="text-blue-600 hover:underline">5. Problèmes Courants</a></li>
                <li><a href="#controle-parental" className="text-blue-600 hover:underline">6. Contrôle Parental</a></li>
                <li><a href="#securite" className="text-blue-600 hover:underline">7. Sécurité</a></li>
                <li><a href="#faq" className="text-blue-600 hover:underline">8. FAQ</a></li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 1 - INTRODUCTION */}
        <section id="quest-ce-que" className="py-12 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Qu&apos;est-ce que 192.168.1.1 ?</h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              <strong>192.168.1.1</strong> est une adresse IP privée de classe C (plage 192.168.0.0 – 192.168.255.255) utilisée comme <strong>passerelle par défaut</strong> (gateway) par la majorité des box et routeurs au Maroc. Elle permet d&apos;accéder à l&apos;interface d&apos;administration de votre équipement depuis un navigateur : une fois connecté, vous pouvez modifier le nom et le mot de passe du Wi-Fi, activer ou désactiver le contrôle parental, consulter la liste des appareils connectés, changer le canal Wi-Fi, redémarrer la box ou restaurer les paramètres d&apos;usine.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              Au Maroc, <strong>plus de 95 % des box</strong> distribuées par Maroc Telecom, Inwi et Orange utilisent 192.168.1.1 comme adresse d&apos;accès admin. Seuls certains modèles (par exemple la Flybox B310 ou B535 d&apos;Orange) utilisent <strong>192.168.8.1</strong>. Connaître cette IP et les identifiants par défaut (souvent <code className="bg-slate-100 px-2 py-1 rounded text-sm font-mono">admin</code> / <code className="bg-slate-100 px-2 py-1 rounded text-sm font-mono">admin</code>) est indispensable pour personnaliser votre réseau, sécuriser votre Wi-Fi ou configurer le contrôle parental sans faire appel à un technicien.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              Ce guide 2026 recense les <strong>logins et mots de passe par défaut</strong> pour plus de 20 modèles de routeurs (Technicolor, ZTE, Huawei, Sagem, etc.) utilisés par les trois opérateurs, puis détaille les étapes pour accéder à l&apos;interface, les actions courantes (changer le Wi-Fi, canal, contrôle parental) et les solutions aux problèmes fréquents (page qui ne s&apos;affiche pas, mot de passe refusé).
            </p>
          </div>
        </section>

        {/* SECTION 2 - TABLEAUX LOGINS */}
        <section id="tableaux-logins" className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Tableau Logins par FAI</h2>

            {/* Maroc Telecom */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white text-sm">MT</span>
                Maroc Telecom
              </h3>
              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-red-600 text-white">
                      <th className="text-left p-3 font-bold">Modèle</th>
                      <th className="text-left p-3 font-bold">IP</th>
                      <th className="text-left p-3 font-bold">Username</th>
                      <th className="text-left p-3 font-bold">Password</th>
                      <th className="text-left p-3 font-bold">Période</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b border-slate-100 hover:bg-slate-50"><td className="p-3">Technicolor TD5130 V2</td><td className="p-3"><a href="http://192.168.1.1" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline font-mono">192.168.1.1</a></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3">2020-2024</td></tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50"><td className="p-3">Technicolor TG788vn</td><td className="p-3"><a href="http://192.168.1.1" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline font-mono">192.168.1.1</a></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3">2019-2022</td></tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50 bg-amber-50"><td className="p-3">Sagem F@ST 3304 V2</td><td className="p-3"><a href="http://192.168.1.1" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline font-mono">192.168.1.1</a></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">Menara</code></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">Menara</code></td><td className="p-3">2016-2019</td></tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50"><td className="p-3">ZTE ZXHN H108L</td><td className="p-3"><a href="http://192.168.1.1" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline font-mono">192.168.1.1</a></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3">2017-2021</td></tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50"><td className="p-3">ZTE ZXHN F680</td><td className="p-3"><a href="http://192.168.1.1" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline font-mono">192.168.1.1</a></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3">2020-2026</td></tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50"><td className="p-3">Huawei HG8245H</td><td className="p-3"><a href="http://192.168.1.1" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline font-mono">192.168.1.1</a></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3">2021-2026</td></tr>
                    <tr className="hover:bg-slate-50"><td className="p-3">Huawei HG8347R</td><td className="p-3"><a href="http://192.168.1.1" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline font-mono">192.168.1.1</a></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3">2022-2026</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Inwi */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white text-sm">INWI</span>
                Inwi
              </h3>
              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-orange-500 text-white">
                      <th className="text-left p-3 font-bold">Modèle</th>
                      <th className="text-left p-3 font-bold">IP</th>
                      <th className="text-left p-3 font-bold">Username</th>
                      <th className="text-left p-3 font-bold">Password</th>
                      <th className="text-left p-3 font-bold">Période</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b border-slate-100 hover:bg-slate-50"><td className="p-3">Huawei HG8245H</td><td className="p-3"><a href="http://192.168.1.1" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline font-mono">192.168.1.1</a></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3">2019-2026</td></tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50"><td className="p-3">ZTE ZXHN H108N</td><td className="p-3"><a href="http://192.168.1.1" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline font-mono">192.168.1.1</a></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3">2018-2022</td></tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50"><td className="p-3">ZTE ZXHN F670L</td><td className="p-3"><a href="http://192.168.1.1" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline font-mono">192.168.1.1</a></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3">2020-2026</td></tr>
                    <tr className="hover:bg-slate-50"><td className="p-3">TP-Link Archer C6</td><td className="p-3"><a href="http://192.168.1.1" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline font-mono">192.168.1.1</a></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3">2021-2026</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Orange */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center text-white text-sm">Orange</span>
                Orange Maroc
              </h3>
              <div className="overflow-x-auto rounded-lg border border-slate-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-orange-400 text-white">
                      <th className="text-left p-3 font-bold">Modèle</th>
                      <th className="text-left p-3 font-bold">IP</th>
                      <th className="text-left p-3 font-bold">Username</th>
                      <th className="text-left p-3 font-bold">Password</th>
                      <th className="text-left p-3 font-bold">Période</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-b border-slate-100 hover:bg-slate-50"><td className="p-3">Flybox B612</td><td className="p-3"><a href="http://192.168.1.1" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline font-mono">192.168.1.1</a></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">[étiquette]</code></td><td className="p-3">2020-2026</td></tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50"><td className="p-3">Flybox B525</td><td className="p-3"><a href="http://192.168.1.1" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline font-mono">192.168.1.1</a></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3">2018-2022</td></tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50"><td className="p-3">Flybox B310</td><td className="p-3"><a href="http://192.168.8.1" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline font-mono">192.168.8.1</a></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3">2019-2023</td></tr>
                    <tr className="hover:bg-slate-50"><td className="p-3">Huawei B535</td><td className="p-3"><a href="http://192.168.8.1" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline font-mono">192.168.8.1</a></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3"><code className="bg-slate-100 px-2 py-1 rounded">admin</code></td><td className="p-3">2021-2026</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA #1 */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
              <p className="font-bold text-lg mb-3">Mot de passe ne marche pas ? Configuration routeur à distance 15 min</p>
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent("Bonjour AlloSupport, je n'arrive pas à me connecter à 192.168.1.1 - Configuration routeur à distance")}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-full transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Configuration Express
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 3 - COMMENT ACCÉDER */}
        <section id="comment-acceder" className="py-12 px-4 bg-slate-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Comment Accéder à 192.168.1.1 (5 Étapes)</h2>
            <div className="space-y-6">
              {[
                { num: 1, icon: Wifi, title: "Connecter au réseau", text: "Connectez votre ordinateur ou smartphone au Wi-Fi de la box (ou branchez un câble Ethernet entre le PC et un port LAN du routeur). Sans cette connexion, 192.168.1.1 ne sera pas joignable." },
                { num: 2, icon: Monitor, title: "Ouvrir le navigateur", text: "Ouvrez Chrome, Firefox, Safari ou Edge. Important : n'utilisez pas la barre de recherche Google pour taper l'adresse. Il faut utiliser la barre d'adresse (URL) en haut de la fenêtre." },
                { num: 3, icon: Router, title: "Taper 192.168.1.1", text: "Dans la barre d'adresse, tapez exactement : http://192.168.1.1 ou 192.168.1.1 puis appuyez sur Entrée. La page de connexion de votre box devrait s'afficher (champ utilisateur et mot de passe)." },
                { num: 4, icon: Lock, title: "Entrer login et mot de passe", text: "Saisissez le nom d'utilisateur et le mot de passe par défaut. Pour la plupart des modèles récents : admin / admin. Pour les anciens Sagem Maroc Telecom : Menara / Menara. Consultez le tableau ci-dessus si besoin." },
                { num: 5, icon: Settings, title: "Accéder à l'interface admin", text: "Une fois connecté, vous accédez au tableau de bord de la box. Vous pouvez modifier le Wi-Fi, le canal, le contrôle parental, voir les appareils connectés ou redémarrer l'équipement." },
              ].map((step) => (
                <div key={step.num} className="bg-white rounded-xl p-6 border border-slate-200 flex gap-4">
                  <div className="w-14 h-14 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <step.icon className="w-5 h-5 text-indigo-600" />
                      {step.title}
                    </h3>
                    <p className="text-slate-700">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 - 10 ACTIONS */}
        <section id="10-actions" className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">10 Actions depuis l&apos;Interface 192.168.1.1</h2>
            <ul className="space-y-4">
              {[
                { icon: Wifi, title: "Changer le mot de passe Wi-Fi", desc: "Sans fil → Sécurité ou Paramètres Wi-Fi → Mot de passe WPA2. Choisissez un mot de passe fort (12+ caractères)." },
                { icon: Edit, title: "Changer le nom du réseau (SSID)", desc: "Sans fil → Paramètres de base → Nom du réseau (SSID). Évitez les noms qui identifient votre adresse." },
                { icon: Zap, title: "Activer la bande 5 GHz", desc: "Sans fil → Bande 5 GHz → Activer. Donnez un nom distinct (ex. MonWiFi_5G) pour la différencier du 2.4 GHz." },
                { icon: Signal, title: "Changer le canal Wi-Fi", desc: "Sans fil → Paramètres avancés → Canal. Choisissez 1, 6 ou 11 en 2.4 GHz pour limiter les interférences avec les voisins." },
                { icon: Shield, title: "Activer le contrôle parental", desc: "Sécurité ou Parental Control → Activer → Ajouter des règles par appareil (MAC) ou par plage horaire." },
                { icon: Users, title: "Voir les appareils connectés", desc: "État du réseau → Clients DHCP ou Liste des appareils. Vous voyez tous les devices connectés au Wi-Fi." },
                { icon: Ban, title: "Bloquer un appareil", desc: "Sécurité ou Pare-feu → Liste de contrôle d'accès (ACL) → Bloquer l'adresse MAC de l'appareil indésirable." },
                { icon: Lock, title: "Changer le mot de passe admin", desc: "Système ou Maintenance → Modifier mot de passe administrateur. Utilisez un mot de passe fort et unique." },
                { icon: RotateCw, title: "Redémarrer la box", desc: "Système → Redémarrage. Utile après un changement de canal ou en cas de freeze. La box redémarre en 1 à 2 minutes." },
                { icon: AlertTriangle, title: "Reset usine (factory reset)", desc: "Système → Restaurer paramètres par défaut. Attention : efface toute la config (Wi-Fi, contrôle parental). À utiliser si mot de passe oublié ou box instable." },
              ].map((action, i) => (
                <li key={i} className="flex gap-3 p-4 rounded-lg bg-slate-50 border border-slate-100">
                  <action.icon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">{action.title}</strong>
                    <p className="text-slate-600 text-sm mt-1">{action.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 5 - PROBLÈMES COURANTS */}
        <section id="problemes" className="py-12 px-4 bg-slate-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Problèmes Courants et Solutions</h2>

            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 border border-red-200 border-l-4 border-l-red-500">
                <h3 className="text-xl font-bold text-slate-900 mb-3">❌ « 192.168.1.1 ne marche pas »</h3>
                <p className="text-slate-700 mb-4">Solutions à essayer dans l&apos;ordre :</p>
                <ul className="list-decimal pl-6 space-y-2 text-slate-700">
                  <li>Vérifier que vous êtes bien connecté au Wi-Fi de la box (ou en câble).</li>
                  <li>Désactiver les données mobiles sur le téléphone pour forcer l&apos;usage du Wi-Fi.</li>
                  <li>Essayer <code className="bg-slate-100 px-2 py-1 rounded text-sm">192.168.0.1</code> (certains routeurs utilisent cette IP).</li>
                  <li>Vider le cache du navigateur ou ouvrir une fenêtre de navigation privée.</li>
                  <li>Redémarrer la box et le PC, puis réessayer après 2 minutes.</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-amber-200 border-l-4 border-l-amber-500">
                <h3 className="text-xl font-bold text-slate-900 mb-3">❌ « Mot de passe admin ne marche pas »</h3>
                <ul className="list-decimal pl-6 space-y-2 text-slate-700">
                  <li>Essayer <code className="bg-slate-100 px-2 py-1 rounded">admin</code> / <code className="bg-slate-100 px-2 py-1 rounded">admin</code>.</li>
                  <li>Pour anciens Sagem : <code className="bg-slate-100 px-2 py-1 rounded">Menara</code> / <code className="bg-slate-100 px-2 py-1 rounded">Menara</code>.</li>
                  <li>Vérifier l&apos;étiquette sous ou au dos du routeur (mot de passe personnalisé par l&apos;opérateur).</li>
                  <li>Si rien ne fonctionne : reset usine (bouton Reset 10 secondes) puis réessayer avec les identifiants par défaut.</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200 border-l-4 border-l-slate-500">
                <h3 className="text-xl font-bold text-slate-900 mb-3">❌ « La page ne charge pas »</h3>
                <ul className="list-decimal pl-6 space-y-2 text-slate-700">
                  <li>Sur PC : ouvrir CMD et taper <code className="bg-slate-100 px-2 py-1 rounded">ping 192.168.1.1</code>. Si aucune réponse, le PC n&apos;est pas sur le même réseau.</li>
                  <li>Vérifier la passerelle par défaut : <code className="bg-slate-100 px-2 py-1 rounded">ipconfig</code> (Windows) ou <code className="bg-slate-100 px-2 py-1 rounded">ifconfig</code> (Mac/Linux). La gateway doit être 192.168.1.1 ou 192.168.0.1.</li>
                  <li>Redémarrer la box et le PC, attendre 2 à 3 minutes puis réessayer.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 - CONTRÔLE PARENTAL */}
        <section id="controle-parental" className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Contrôle Parental via 192.168.1.1</h2>
            <p className="text-slate-700 text-lg mb-6">
              Le contrôle parental permet de limiter les horaires de connexion et les sites accessibles pour certains appareils (ordinateur ou téléphone des enfants). La configuration se fait depuis l&apos;interface admin de la box.
            </p>
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-3">Maroc Telecom</h3>
                <ol className="list-decimal pl-6 space-y-2 text-slate-700">
                  <li>Accédez à <strong>192.168.1.1</strong> → identifiants admin.</li>
                  <li>Menu <strong>Sécurité</strong> ou <strong>Contrôle d&apos;accès</strong> → <strong>Contrôle parental</strong> → Activer.</li>
                  <li>Ajoutez l&apos;adresse MAC de l&apos;appareil enfant (visible dans la liste des clients connectés).</li>
                  <li>Définissez les plages horaires autorisées (ex. 17h-20h en semaine).</li>
                  <li>Optionnel : ajoutez une liste de sites à bloquer (URL ou mots-clés).</li>
                </ol>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-3">Inwi / Orange</h3>
                <p className="text-slate-700">
                  Les étapes sont similaires : après connexion à 192.168.1.1 (ou 192.168.8.1 pour certains Orange), cherchez le menu <strong>Sécurité</strong>, <strong>Parental Control</strong> ou <strong>Filtrage</strong>. Activez la règle, associez-la à l&apos;appareil (MAC ou nom), puis définissez horaires et éventuellement liste de sites bloqués. Les intitulés varient selon le modèle de box ; en cas de doute, consultez la notice en ligne de votre opérateur.
                </p>
              </div>
            </div>

            {/* CTA #2 */}
            <div className="mt-8 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-6 text-white">
              <p className="font-bold text-lg mb-3">Setup contrôle parental trop complexe ? Un expert configure pour vous</p>
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent("Bonjour AlloSupport, j'ai besoin d'aide pour configurer le contrôle parental sur ma box")}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-full transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Aide Contrôle Parental
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 7 - SÉCURITÉ */}
        <section id="securite" className="py-12 px-4 bg-slate-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Sécurité : Pourquoi et Comment Changer les Mots de Passe</h2>
            <p className="text-slate-700 text-lg mb-4">
              Laisser les identifiants par défaut (<code className="bg-slate-100 px-2 py-1 rounded">admin</code>/<code className="bg-slate-100 px-2 py-1 rounded">admin</code>) expose votre réseau : un voisin ou un utilisateur malveillant peut se connecter à votre Wi-Fi, consommer votre bande passante, accéder à vos appareils ou modifier les paramètres (dont le contrôle parental). Changer le mot de passe de l&apos;interface admin et celui du Wi-Fi limite fortement ces risques.
            </p>
            <p className="text-slate-700 text-lg mb-4">
              <strong>Comment choisir un mot de passe sécurisé :</strong> au moins 12 caractères, avec des majuscules, des minuscules, des chiffres et des symboles. Évitez les mots du dictionnaire ou les dates de naissance. Exemple (à ne pas utiliser tel quel) : <code className="bg-slate-100 px-2 py-1 rounded text-sm">M@r0c#Tel3c0m!2026</code>. Utilisez un gestionnaire de mots de passe pour les stocker et changez-les si vous suspectez un accès non autorisé.
            </p>
          </div>
        </section>

        {/* CTA #3 - Avant FAQ */}
        <section className="py-8 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-3">Configuration routeur ou box trop complexe ?</h3>
              <p className="text-emerald-100 mb-6">Nos experts configurent votre 192.168.1.1 à distance en 15 minutes : Wi-Fi, contrôle parental, sécurité. Partout au Maroc.</p>
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent("Bonjour AlloSupport, j'ai besoin d'une configuration routeur/box à distance")}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 font-bold px-8 py-4 rounded-full hover:bg-emerald-50 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Demander une configuration à distance
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 8 - FAQ */}
        <section id="faq" className="py-12 px-4 bg-slate-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">FAQ – 192.168.1.1 Admin Maroc</h2>
            <div className="space-y-4">
              {[
                { q: "Quel est le login par défaut 192.168.1.1 Maroc Telecom ?", a: "Username : admin, Password : admin pour les routeurs récents (2020+). Anciens modèles Sagem : Menara / Menara. Si modifié, vérifiez l'étiquette au dos du routeur ou effectuez un reset (bouton 10 secondes)." },
                { q: "Comment accéder 192.168.1.1 depuis mobile ?", a: "Connectez le mobile au Wi-Fi du routeur, ouvrez Safari ou Chrome, tapez 192.168.1.1 dans la barre d'adresse (pas dans Google), Entrée, puis entrez admin/admin. L'interface s'affiche en version mobile." },
                { q: "192.168.1.1 ne marche pas que faire ?", a: "Vérifiez que vous êtes connecté au Wi-Fi de la box, désactivez les données mobiles, essayez 192.168.0.1, videz le cache du navigateur ou testez en navigation privée, redémarrez la box et le PC. Si ça persiste, reset box 10 secondes." },
                { q: "Comment changer mot de passe WiFi via 192.168.1.1 ?", a: "Accédez à 192.168.1.1 → Sans fil (ou Wireless) → Sécurité ou Paramètres Wi-Fi → Mot de passe WPA2. Saisissez un nouveau mot de passe (12+ caractères recommandé), sauvegardez. Les appareils devront se reconnecter avec le nouveau mot de passe." },
                { q: "Comment activer contrôle parental via 192.168.1.1 ?", a: "192.168.1.1 → Sécurité ou Contrôle d'accès → Contrôle parental → Activer. Ajoutez l'appareil (adresse MAC), définissez les horaires autorisés et éventuellement une liste de sites bloqués." },
                { q: "Différence entre 192.168.1.1 et 192.168.0.1 ?", a: "Les deux sont des adresses IP privées de passerelle. 192.168.1.1 est la plus courante pour les box Maroc Telecom et Inwi. 192.168.0.1 est utilisée par certains routeurs (dont certains Orange). Si l'une ne répond pas, testez l'autre." },
                { q: "Comment reset routeur si mot de passe oublié ?", a: "Bouton Reset à l'arrière du routeur : maintenez enfoncé 10 secondes avec un stylo ou trombone. La box redémarre et repasse aux paramètres d'usine. Les identifiants redeviennent admin/admin (ou Menara/Menara sur anciens Sagem). Vous devrez reconfigurer le Wi-Fi." },
                { q: "Peut-on accéder 192.168.1.1 sans WiFi ?", a: "Oui, avec un câble Ethernet RJ45 entre le PC et un port LAN de la box. Utile si le Wi-Fi est coupé ou si vous préférez une connexion filaire pour accéder à l'interface." },
              ].map((faq, i) => (
                <details key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden group">
                  <summary className="p-4 cursor-pointer font-bold text-slate-900 list-none flex items-center gap-2 [&::-webkit-details-marker]:hidden">
                    <span className="text-blue-600">Q{i + 1}.</span> {faq.q}
                  </summary>
                  <div className="px-4 pb-4 pt-0 text-slate-700 border-t border-slate-100">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ARTICLES CONNEXES */}
        <section className="py-12 px-4 bg-white border-t border-slate-200">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Articles connexes</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/blog/wifi-lent-maroc-2026" className="p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all">
                <span className="font-bold text-slate-900 block mb-1">Wi-Fi lent Maroc 2026</span>
                <span className="text-slate-600 text-sm">Solutions et réglages box</span>
              </Link>
              <Link href="/blog/7-pannes-pc-courantes-2026-maroc" className="p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all">
                <span className="font-bold text-slate-900 block mb-1">7 pannes PC courantes Maroc</span>
                <span className="text-slate-600 text-sm">Solutions et dépannage</span>
              </Link>
              <Link href="/blog/pc-lent-10-solutions-rapides-maroc" className="p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all">
                <span className="font-bold text-slate-900 block mb-1">PC lent : 10 solutions rapides</span>
                <span className="text-slate-600 text-sm">Guide 2026</span>
              </Link>
            </div>
            <p className="mt-4 text-slate-600">
              <Link href="/depannage-informatique" className="text-blue-600 hover:underline">Dépannage informatique</Link>
              {" · "}
              <Link href="/blog" className="text-blue-600 hover:underline">Voir tous les articles</Link>
            </p>
          </div>
        </section>

        {/* CTA #4 - Sticky bar mobile */}
        <div className="fixed bottom-0 left-0 right-0 z-[9999] lg:hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-4 shadow-lg">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold">Configuration routeur trop complexe ? Expert 15 min • 150 DH</p>
            <a
              href={`${WHATSAPP_URL}?text=${encodeURIComponent("Configuration routeur 192.168.1.1 à distance")}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="flex-shrink-0 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-4 py-2 rounded-full text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Aide
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
