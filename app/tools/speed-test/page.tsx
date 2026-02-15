import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Zap, Wifi, Activity, AlertCircle, WifiOff } from "lucide-react";

const SITE_URL = "https://allosupport.ma";
const CANONICAL = `${SITE_URL}/tools/speed-test`;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Test Vitesse Internet Maroc 2026 - 4G, ADSL, Fibre | AlloSupport",
    description:
      "Test débit gratuit Maroc Telecom, Inwi, Orange. Mesurez download, upload, ping. Outil 100% marocain.",
    alternates: { canonical: CANONICAL },
    keywords: [
      "test vitesse internet maroc",
      "speed test maroc telecom",
      "débit 4g maroc",
      "test connexion inwi",
      "test débit orange maroc",
      "speed test fibre maroc",
    ],
    openGraph: {
      title: "Test Vitesse Internet Maroc 2026 - 4G, ADSL, Fibre | AlloSupport",
      description:
        "Test débit gratuit Maroc Telecom, Inwi, Orange. Mesurez download, upload, ping. Outil 100% marocain.",
      url: CANONICAL,
      type: "website",
      images: [{ url: "/og-speed-test.jpg", width: 1200, height: 630, alt: "Test Vitesse Internet Maroc" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Test Vitesse Internet Maroc 2026 | AlloSupport",
      description: "Test débit gratuit Maroc Telecom, Inwi, Orange. Download, upload, ping.",
    },
  };
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quelle est la vitesse internet moyenne au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ADSL = 8-20 Mbps, 4G = 25-50 Mbps en ville, Fibre = 100-200 Mbps. Maroc Telecom couvre 95% du territoire en ADSL, 80% en 4G. La fibre est disponible à Casablanca, Rabat, Marrakech, Tanger, Agadir en centres-villes.",
      },
    },
    {
      "@type": "Question",
      name: "Comment améliorer ma connexion WiFi Maroc Telecom ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "1) Placez le routeur au centre de la maison, à 1,5 m de hauteur. 2) Changez le canal WiFi pour un canal moins encombré (app WiFi Analyzer). 3) Utilisez le WiFi 5 GHz si votre routeur est récent (moins d'interférences). 4) Câble Ethernet pour le PC fixe. 5) Redémarrez la box une fois par semaine.",
      },
    },
    {
      "@type": "Question",
      name: "Mon test affiche 50 Mbps mais Netflix lag, pourquoi ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le speed test mesure la vitesse instantanée en pic. Le streaming demande une vitesse soutenue sur 10+ minutes. Causes du lag malgré un bon test : 1) D'autres appareils consomment la bande (mises à jour Windows, iCloud). 2) Serveur Netflix Maroc saturé en heures pleines (20h-23h). 3) PC lent (CPU, RAM insuffisants). AlloSupport diagnostique votre PC à distance à 200 DH.",
      },
    },
    {
      "@type": "Question",
      name: "Différence Download vs Upload ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Download = réception des données (Netflix, YouTube, téléchargements). Upload = envoi (Zoom vidéo, upload photos Instagram, sauvegarde cloud). Au Maroc : en ADSL l'upload est environ 10× plus lent que le download (asymétrique, normal). En fibre, upload et download sont rapides et symétriques.",
      },
    },
    {
      "@type": "Question",
      name: "Fibre optique disponible dans mon quartier ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vérifiez l'éligibilité sur le site Maroc Telecom → Tester éligibilité fibre (entrer l'adresse). Ou sur les sites Inwi et Orange. Zones fibre 2026 : Casablanca (Maarif, Ain Diab, Sidi Maarouf), Rabat (Agdal, Hassan, Hay Riad), Marrakech (Guéliz, Hivernage).",
      },
    },
    {
      "@type": "Question",
      name: "Mon ping varie de 20 ms à 200 ms, est-ce normal ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Un ping stable < 30 ms est excellent. Des variations 20-200 ms indiquent une instabilité de ligne (interférences WiFi, câble défectueux, saturation réseau en heures pleines). Faites un test en Ethernet câblé pour confirmer. Si c'est instable même en Ethernet, le problème vient du FAI : contactez le support technique de votre opérateur.",
      },
    },
  ],
};

export default function SpeedTestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* ═══ SECTION 1 : HERO ═══ */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white pt-24 pb-16 md:pt-28 md:pb-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-blue-200" />
              <Wifi className="w-5 h-5 text-blue-200" />
              <Activity className="w-5 h-5 text-blue-200 animate-pulse" />
            </div>
            <p className="text-sm uppercase tracking-widest text-blue-200 mb-3">
              Outil gratuit · 100 % marocain
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Test de Débit Internet Maroc (Fibre, ADSL, 4G)
            </h1>
            <p className="text-lg text-blue-100 mb-4 max-w-2xl">
              Testez votre connexion Maroc Telecom, Orange ou Inwi en 30 secondes. Gratuit, sans inscription.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur rounded-full px-4 py-2 text-sm font-medium">
              <span className="text-green-300">✓</span> Utilisé par 12,000+ Marocains
            </div>
          </div>
        </section>

        {/* ═══ SECTION 2 : SPEED TEST WIDGET ═══ */}
        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
              <p className="font-semibold text-amber-900 mb-2">📌 Pour un résultat précis :</p>
              <ul className="text-sm text-amber-800 space-y-1 list-disc list-inside">
                <li>Fermez Netflix, YouTube et les téléchargements</li>
                <li>Déconnectez les autres appareils du WiFi</li>
                <li>Cliquez sur le bouton bleu &quot;START&quot; dans l&apos;outil ci-dessous</li>
                <li>Attendez 30 secondes pour un test complet</li>
              </ul>
            </div>

            {/* Conteneur avec hauteur réservée = iframe × 1.35 pour le scale */}
            <div className="relative bg-white rounded-2xl shadow-2xl border-4 border-blue-100 flex justify-center items-start min-h-[735px] md:min-h-[815px] overflow-visible">
              <div
                className="w-full origin-top"
                style={{
                  transform: "scale(1.35)",
                  transformOrigin: "top center",
                }}
              >
                <iframe
                  src="https://openspeedtest.com/Get-widget.php"
                  className="w-full h-[545px] md:h-[604px] rounded-lg"
                  style={{ border: "none" }}
                  title="Test Vitesse Internet Maroc"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 3 : ANALYSE RÉSULTATS + CONVERSION ═══ */}
        <section className="py-12 md:py-16 bg-white border-t border-gray-200">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Comment Interpréter Vos Résultats ?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* CARD A : Internet OK, PC Lent — CONVERSION */}
              <div className="rounded-2xl border-2 border-red-100 bg-red-50/50 p-6 hover:shadow-lg hover:border-red-200 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <span className="font-semibold text-red-800">Conversion</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Débit &gt;20 Mbps mais PC toujours lent ?
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Bonne nouvelle : ce n&apos;est pas votre connexion. Votre internet est rapide. Le problème vient de votre ordinateur (virus, disque saturé ou Windows obsolète). AlloSupport peut booster votre PC en 45 minutes.
                </p>
                <p className="text-xs text-gray-600 mb-4">
                  89% de nos clients au Maroc ont un internet correct mais un PC ralenti par des virus ou des fichiers inutiles (20+ Go).
                </p>
                <Link
                  href="/depannage-informatique?utm_source=speed-test&utm_campaign=slow-pc"
                  className="inline-flex items-center gap-2 w-full justify-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg transition animate-pulse hover:animate-none"
                >
                  <Zap className="w-5 h-5" />
                  Booster Mon PC Maintenant - 250 DH
                </Link>
              </div>

              {/* CARD B : Internet Faible */}
              <div className="rounded-2xl border-2 border-amber-100 bg-amber-50/50 p-6 hover:shadow-lg hover:border-amber-200 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <WifiOff className="w-6 h-6 text-amber-600" />
                  <span className="font-semibold text-amber-800">Connexion faible</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Débit &lt;10 Mbps ? 5 solutions rapides
                </h3>
                <ul className="text-sm text-gray-700 space-y-2 mb-4 list-disc list-inside">
                  <li>Rapprochez-vous du routeur WiFi (murs = perte 40% signal)</li>
                  <li>Utilisez un câble Ethernet RJ45 direct au modem</li>
                  <li>Redémarrez la box (débrancher 30 s)</li>
                  <li>Changez le canal WiFi (192.168.1.1 → Canal 1, 6 ou 11)</li>
                  <li>Contactez Maroc Telecom si &lt;50% de la vitesse souscrite</li>
                </ul>
                <Link
                  href="/depannage-informatique?utm_source=speed-test&utm_campaign=diagnostic"
                  className="inline-flex items-center justify-center w-full border-2 border-amber-400 text-amber-800 font-semibold py-2.5 px-4 rounded-xl hover:bg-amber-100 transition text-sm"
                >
                  Diagnostic Connexion à Distance - 200 DH
                </Link>
              </div>

              {/* CARD C : Ping Élevé */}
              <div className="rounded-2xl border-2 border-blue-100 bg-blue-50/50 p-6 hover:shadow-lg hover:border-blue-200 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <Activity className="w-6 h-6 text-blue-600" />
                  <span className="font-semibold text-blue-800">Latence</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Latence &gt;50 ms ? Impact Gaming &amp; Visio
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  Ping élevé = lag en jeux en ligne (FIFA, Call of Duty), coupures Zoom/Teams. Causes : WiFi instable, distance au serveur, congestion en heures pleines.
                </p>
                <p className="text-xs text-gray-600">
                  Solutions : Ethernet câblé, 4G en secours, VPN optimisé gaming.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 4 : TABLEAU VITESSES MAROC ═══ */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Vitesses Internet Normales au Maroc 2026
            </h2>
            {/* Desktop: table — Mobile: stack vertical (cards) */}
            <div className="hidden md:block overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-lg">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="p-4 font-semibold text-gray-900">Technologie</th>
                    <th className="p-4 font-semibold text-gray-900">Vitesse Théorique</th>
                    <th className="p-4 font-semibold text-gray-900">Vitesse Réelle Attendue</th>
                    <th className="p-4 font-semibold text-gray-900">Opérateur</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr><td className="p-4">ADSL 8 Mbps</td><td className="p-4">8 Mbps</td><td className="p-4">6-7 Mbps</td><td className="p-4">Maroc Telecom</td></tr>
                  <tr><td className="p-4">ADSL 20 Mbps</td><td className="p-4">20 Mbps</td><td className="p-4">16-18 Mbps</td><td className="p-4">Maroc Telecom</td></tr>
                  <tr><td className="p-4">VDSL 50 Mbps</td><td className="p-4">50 Mbps</td><td className="p-4">40-45 Mbps</td><td className="p-4">Maroc Telecom</td></tr>
                  <tr><td className="p-4">4G Maroc Telecom</td><td className="p-4">150 Mbps</td><td className="p-4">30-60 Mbps (villes)</td><td className="p-4">Maroc Telecom</td></tr>
                  <tr><td className="p-4">4G Inwi</td><td className="p-4">150 Mbps</td><td className="p-4">25-50 Mbps</td><td className="p-4">Inwi</td></tr>
                  <tr><td className="p-4">4G Orange</td><td className="p-4">150 Mbps</td><td className="p-4">20-45 Mbps</td><td className="p-4">Orange</td></tr>
                  <tr><td className="p-4">Fibre 100 Mbps</td><td className="p-4">100 Mbps</td><td className="p-4">95-99 Mbps</td><td className="p-4">MT, Inwi, Orange</td></tr>
                  <tr><td className="p-4">Fibre 200 Mbps</td><td className="p-4">200 Mbps</td><td className="p-4">190-198 Mbps</td><td className="p-4">MT, Inwi, Orange</td></tr>
                </tbody>
              </table>
            </div>
            <div className="md:hidden space-y-3">
              {[
                { tech: "ADSL 8 Mbps", theo: "8 Mbps", real: "6-7 Mbps", op: "Maroc Telecom" },
                { tech: "ADSL 20 Mbps", theo: "20 Mbps", real: "16-18 Mbps", op: "Maroc Telecom" },
                { tech: "VDSL 50 Mbps", theo: "50 Mbps", real: "40-45 Mbps", op: "Maroc Telecom" },
                { tech: "4G Maroc Telecom", theo: "150 Mbps", real: "30-60 Mbps (villes)", op: "Maroc Telecom" },
                { tech: "4G Inwi", theo: "150 Mbps", real: "25-50 Mbps", op: "Inwi" },
                { tech: "4G Orange", theo: "150 Mbps", real: "20-45 Mbps", op: "Orange" },
                { tech: "Fibre 100 Mbps", theo: "100 Mbps", real: "95-99 Mbps", op: "MT, Inwi, Orange" },
                { tech: "Fibre 200 Mbps", theo: "200 Mbps", real: "190-198 Mbps", op: "MT, Inwi, Orange" },
              ].map((row) => (
                <div key={row.tech} className="rounded-xl border border-gray-200 bg-white p-4 shadow">
                  <p className="font-semibold text-gray-900">{row.tech}</p>
                  <p className="text-sm text-gray-600 mt-1">Théorique : {row.theo} · Réel : {row.real}</p>
                  <p className="text-sm text-gray-500">{row.op}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Perte de 10-20% de la vitesse = normal (overhead réseau). Si &lt;50% = problème de ligne.
            </p>
          </div>
        </section>

        {/* ═══ SECTION 5 : FAQ SEO ═══ */}
        <section className="py-12 md:py-16 bg-white border-t border-gray-200">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Questions Fréquentes Speed Test Maroc
            </h2>
            <div className="space-y-2">
              <details className="group rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none py-4 px-5 font-semibold text-gray-900 hover:bg-gray-100 transition">
                  Quelle est la vitesse internet moyenne au Maroc ?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 pb-4 text-gray-700 text-sm leading-relaxed">
                  ADSL = 8-20 Mbps, 4G = 25-50 Mbps en ville, Fibre = 100-200 Mbps. Maroc Telecom couvre 95% du territoire en ADSL, 80% en 4G. La fibre est disponible à Casablanca, Rabat, Marrakech, Tanger, Agadir en centres-villes.
                </div>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none py-4 px-5 font-semibold text-gray-900 hover:bg-gray-100 transition">
                  Comment améliorer ma connexion WiFi Maroc Telecom ?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 pb-4 text-gray-700 text-sm leading-relaxed">
                  1) Placez le routeur au centre de la maison, à 1,5 m de hauteur. 2) Changez le canal WiFi pour un canal moins encombré (app WiFi Analyzer). 3) Utilisez le WiFi 5 GHz si votre routeur est récent. 4) Câble Ethernet pour le PC fixe. 5) Redémarrez la box une fois par semaine.
                </div>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none py-4 px-5 font-semibold text-gray-900 hover:bg-gray-100 transition">
                  Mon test affiche 50 Mbps mais Netflix lag, pourquoi ?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 pb-4 text-gray-700 text-sm leading-relaxed">
                  Le speed test mesure la vitesse instantanée en pic. Le streaming demande une vitesse soutenue. Causes du lag : autres appareils qui consomment la bande, serveur Netflix saturé en heures pleines (20h-23h), ou PC lent (CPU/RAM). AlloSupport diagnostique votre PC à distance à 200 DH.
                </div>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none py-4 px-5 font-semibold text-gray-900 hover:bg-gray-100 transition">
                  Différence Download vs Upload ?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 pb-4 text-gray-700 text-sm leading-relaxed">
                  Download = réception (Netflix, YouTube, téléchargements). Upload = envoi (Zoom, Instagram, cloud). Au Maroc en ADSL l&apos;upload est environ 10× plus lent que le download. En fibre, upload et download sont symétriques.
                </div>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none py-4 px-5 font-semibold text-gray-900 hover:bg-gray-100 transition">
                  Fibre optique disponible dans mon quartier ?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 pb-4 text-gray-700 text-sm leading-relaxed">
                  Vérifiez sur le site Maroc Telecom (Tester éligibilité fibre), Inwi ou Orange. Zones fibre 2026 : Casablanca (Maarif, Ain Diab, Sidi Maarouf), Rabat (Agdal, Hassan, Hay Riad), Marrakech (Guéliz, Hivernage).
                </div>
              </details>
              <details className="group rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none py-4 px-5 font-semibold text-gray-900 hover:bg-gray-100 transition">
                  Mon ping varie de 20 ms à 200 ms, est-ce normal ?
                  <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 pb-4 text-gray-700 text-sm leading-relaxed">
                  Non. Un ping stable &lt; 30 ms est excellent. Des variations 20-200 ms = instabilité (WiFi, câble, saturation). Testez en Ethernet câblé. Si instable en Ethernet, contactez le support de votre opérateur.
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
