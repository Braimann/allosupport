import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";

const PAGE_URL = "https://allosupport.ma/formatage-pc-casablanca";
const PHONE_DISPLAY = GOOGLE_BUSINESS.PHONE_FORMATTED;
const PHONE_TEL = GOOGLE_BUSINESS.PHONE.replace("+", "");
const WHATSAPP_NUMBER = GOOGLE_BUSINESS.WHATSAPP_PHONE;

export const metadata: Metadata = {
  title: "Formatage PC Casablanca 350 DH | Officiel | AlloSupport",
  description:
    "Formatage PC Casablanca 350 DH : Windows officiel + Office + Antivirus 6 mois. À distance, sans déplacer votre PC. 7 avis 5★. ☎️ 0775237038",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Formatage PC Casablanca 350 DH tout compris",
    description:
      "Formatage PC Casablanca avec Windows officiel, Office, antivirus 6 mois et sauvegarde. Service à distance, paiement après satisfaction.",
    url: PAGE_URL,
    type: "website",
  },
};

/** BLOC 3 : Schémas JSON-LD unifiés (Service + FAQPage 3 Q/R + BreadcrumbList) pour Rich Snippets */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Formatage PC Casablanca 350 DH tout compris",
      serviceType: "Formatage PC Casablanca",
      url: PAGE_URL,
      provider: {
        "@type": "LocalBusiness",
        name: "AlloSupport.ma",
        telephone: GOOGLE_BUSINESS.PHONE,
        areaServed: { "@type": "City", name: "Casablanca" },
      },
      areaServed: [
        { "@type": "City", name: "Casablanca" },
        { "@type": "AdministrativeArea", name: "Maarif" },
        { "@type": "AdministrativeArea", name: "Sidi Maarouf" },
        { "@type": "AdministrativeArea", name: "Ain Diab" },
      ],
      offers: {
        "@type": "Offer",
        price: 350,
        priceCurrency: "MAD",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Quel est le prix d'un formatage PC Casablanca ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le formatage PC Casablanca tout compris est à 350 DH : Windows officiel, Office, antivirus 6 mois, sauvegarde des données et garantie 30 jours. Prix fixe, pas de surprise.",
          },
        },
        {
          "@type": "Question",
          name: "Combien de temps dure un formatage PC Casablanca ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pour un formatage PC Casablanca complet avec Windows officiel, comptez entre 45 et 90 minutes selon la vitesse de votre connexion et l'état de votre ordinateur.",
          },
        },
        {
          "@type": "Question",
          name: "Est-ce que je perds mes fichiers pendant le formatage PC Casablanca ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Avant tout formatage PC Casablanca, nous sauvegardons vos documents importants vers un support externe ou vers le cloud (Google Drive) quand c'est possible, afin de réduire au maximum le risque de perte.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://allosupport.ma" },
        { "@type": "ListItem", position: 2, name: "Dépannage", item: "https://allosupport.ma/depannage-informatique" },
        { "@type": "ListItem", position: 3, name: "Formatage PC Casablanca", item: PAGE_URL },
      ],
    },
  ],
};

const whatsappText =
  "Bonjour, je veux un formatage PC Casablanca 350 DH avec Windows officiel, Office et antivirus.";

export default function FormatagePcCasablancaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* BLOC 1 : Fil d'Ariane */}
        <nav
          aria-label="Fil d'Ariane"
          className="border-b border-gray-200 bg-white/80 pt-16 sm:pt-20"
        >
          <div className="max-w-6xl mx-auto px-4 py-3">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
              <li>
                <Link
                  href="/"
                  className="hover:text-emerald-600 transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li aria-hidden className="text-gray-400">/</li>
              <li>
                <Link
                  href="/depannage-informatique"
                  className="hover:text-emerald-600 transition-colors"
                >
                  Dépannage
                </Link>
              </li>
              <li aria-hidden className="text-gray-400">/</li>
              <li className="text-gray-800 font-medium" aria-current="page">
                Formatage PC Casablanca
              </li>
            </ol>
          </div>
        </nav>

        <section className="bg-gradient-to-br from-gray-900 via-slate-900 to-emerald-900 text-white py-16 pt-24 md:py-20 md:pt-28">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-emerald-300 bg-emerald-900/40 px-3 py-1 rounded-full mb-3">
                ⭐ 7 Avis Google 5★ · Formatage PC Casablanca
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
                Formatage PC Casablanca 2026 : 350 DH Tout Compris
              </h1>
              <p className="text-lg text-emerald-50 mb-4">
                Windows officiel, Office, antivirus 6 mois et sauvegarde de vos données, le tout sans déplacer votre ordinateur. Réponse en moins de 15 minutes, formatage PC Casablanca à distance, paiement après satisfaction.
              </p>
              <p className="text-sm text-emerald-200 mb-6">
                Avito 150 DH = cracks et risque de perte de fichiers. Ici, formatage PC Casablanca légal, transparent et sécurisé.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    whatsappText
                  )}`}
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-emerald-500/40 transition w-full sm:w-auto"
                >
                  <span>WhatsApp : Formatage 15 Min</span>
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center justify-center gap-2 border border-emerald-400/70 text-emerald-100 hover:bg-emerald-500/10 px-6 py-3 rounded-xl font-semibold transition w-full sm:w-auto"
                >
                  <span>☎️ Appeler {PHONE_DISPLAY}</span>
                </a>
              </div>
              <p className="text-xs text-emerald-200 mt-3">
                Intervention aujourd&apos;hui avant 20h sur Casablanca et à distance dans tout le Maroc.
              </p>
            </div>
            <div className="relative h-64 md:h-80 lg:h-96">
              <div className="absolute inset-0 rounded-3xl bg-emerald-500/10 border border-emerald-400/30 backdrop-blur-sm" />
              <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl" />
              <div className="relative h-full flex items-center justify-center">
                <Image
                  src="/images/services/formatage-pc-hero.webp"
                  alt="Technicien formatage PC Casablanca avec Windows 10/11 officiel"
                  fill
                  className="object-cover rounded-3xl shadow-2xl shadow-emerald-900/50"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Infographie : comparatif et étapes */}
        <section className="py-8 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <figure className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <Image
                src="/images/formatage-pc-casablanca-infographie.png"
                alt="Formatage PC Casablanca à distance : comparatif Avito, Derb Ghallef et AlloSupport. Connexion sécurisée TeamViewer/AnyDesk, 4 étapes et 350 DH tout compris."
                width={1200}
                height={800}
                className="w-full h-auto"
                priority={false}
              />
            </figure>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Prix Réel Avito vs Derb Ghallef vs AlloSupport
            </h2>
            <p className="text-gray-600 mb-6">
              Avant de choisir votre formatage PC Casablanca, comparez ce que vous payez vraiment : prix annoncé, logiciels utilisés, garantie et sécurité de vos données.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-sm md:text-base">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-3 py-3 text-left font-semibold text-gray-800">Critère</th>
                    <th className="px-3 py-3 text-left font-semibold text-gray-800">Avito</th>
                    <th className="px-3 py-3 text-left font-semibold text-gray-800">Derb Ghallef</th>
                    <th className="px-3 py-3 text-left font-semibold text-emerald-700">
                      AlloSupport Casablanca
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-3 py-3 font-medium text-gray-800">Prix annoncé</td>
                    <td className="px-3 py-3 text-gray-700">100-150 DH</td>
                    <td className="px-3 py-3 text-gray-700">150-300 DH</td>
                    <td className="px-3 py-3 text-emerald-700 font-semibold">350 DH TTC</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-3 py-3 font-medium text-gray-800">Prix réel</td>
                    <td className="px-3 py-3 text-gray-700">+ options ajoutées</td>
                    <td className="px-3 py-3 text-gray-700">Variable selon boutique</td>
                    <td className="px-3 py-3 text-emerald-700 font-semibold">350 DH clair dès le départ</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-3 py-3 font-medium text-gray-800">Logiciels</td>
                    <td className="px-3 py-3 text-gray-700">Windows + Office cracks</td>
                    <td className="px-3 py-3 text-gray-700">Souvent non déclarés</td>
                    <td className="px-3 py-3 text-emerald-700 font-semibold">
                      Windows 10/11 + Office officiels ou LibreOffice
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-3 py-3 font-medium text-gray-800">Garantie</td>
                    <td className="px-3 py-3 text-gray-700">Quasi inexistante</td>
                    <td className="px-3 py-3 text-gray-700">Variable</td>
                    <td className="px-3 py-3 text-emerald-700 font-semibold">Garantie 30 jours écrit</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-3 py-3 font-medium text-gray-800">Délai</td>
                    <td className="px-3 py-3 text-gray-700">Selon disponibilité</td>
                    <td className="px-3 py-3 text-gray-700">File d&apos;attente boutique</td>
                    <td className="px-3 py-3 text-emerald-700 font-semibold">
                      Réponse 15 min, formatage 45-90 min
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-3 py-3 font-medium text-gray-800">Déplacement</td>
                    <td className="px-3 py-3 text-gray-700">Vous devez vous déplacer</td>
                    <td className="px-3 py-3 text-gray-700">Obligatoire à Derb Ghallef</td>
                    <td className="px-3 py-3 text-emerald-700 font-semibold">
                      Formatage PC Casablanca 100 % à distance
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-3 py-3 font-medium text-gray-800">Sauvegarde</td>
                    <td className="px-3 py-3 text-gray-700">Rarement incluse</td>
                    <td className="px-3 py-3 text-gray-700">Souvent en option</td>
                    <td className="px-3 py-3 text-emerald-700 font-semibold">
                      Sauvegarde Google Drive ou disque externe
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-3 py-3 font-medium text-gray-800">Avis clients</td>
                    <td className="px-3 py-3 text-gray-700">Difficiles à vérifier</td>
                    <td className="px-3 py-3 text-gray-700">Pas toujours publiés</td>
                    <td className="px-3 py-3 text-emerald-700 font-semibold">
                      7 avis Google 5★ sur le formatage PC Casablanca
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-700">
              Avito 150 DH = cracks. Nous 350 DH = légal, sécurisé et traçable pour votre formatage PC Casablanca.
            </p>
          </div>
        </section>

        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ce Que Vous Recevez (Formatage PC Casablanca)
            </h2>
            <p className="text-gray-600 mb-6">
              Le forfait formatage PC Casablanca à 350 DH est pensé pour les cadres, professeurs et freelances qui veulent un PC propre, rapide et sécurisé sans perdre leurs données.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <ul className="space-y-3 text-gray-800">
                <li>✅ Windows 10 ou Windows 11 officiel installé et activé</li>
                <li>✅ Office 365 ou LibreOffice selon votre besoin</li>
                <li>✅ Antivirus premium 6 mois avec mises à jour automatiques</li>
                <li>✅ Navigateurs optimisés (Chrome, Edge, extensions utiles)</li>
                <li>✅ Sauvegarde de vos documents vers Google Drive ou disque externe</li>
              </ul>
              <ul className="space-y-3 text-gray-800">
                <li>✅ Nettoyage du registre et des fichiers temporaires</li>
                <li>✅ Optimisation du démarrage pour un PC jusqu&apos;à 3 fois plus rapide</li>
                <li>✅ Tests de stabilité pendant 24 heures après formatage</li>
                <li>✅ Garantie 30 jours sur le formatage PC Casablanca</li>
                <li>✅ Support 7/7 par WhatsApp ou téléphone</li>
              </ul>
            </div>
            <p className="text-emerald-700 font-semibold">
              Délai moyen : 45 à 90 minutes pour un formatage PC Casablanca complet, selon la vitesse de votre connexion et l&apos;ancienneté de votre ordinateur.
            </p>
          </div>
        </section>

        {/* Contenu SEO additionnel — 4 sections H2 */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Pourquoi formater son PC à Casablanca ?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Quand le PC rame, que les virus s&apos;accumulent ou que Windows affiche des erreurs à répétition, le formatage PC Casablanca reste la solution la plus propre. Beaucoup de Casablancais cherchent un &quot;formatage casa&quot; rapide sans se déplacer jusqu&apos;à Derb Ghallef : avec AlloSupport, tout se fait à distance. Si votre ordinateur est devenu lent — ce qu&apos;on appelle souvent le &quot;pc t9il&quot; — un formatage PC Maroc avec Windows officiel redonne une seconde vie à la machine sans risquer vos données si la sauvegarde est bien faite.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Le piège, c&apos;est de tomber sur une annonce à 150 DH sur Avito ou une boutique à Derb Ghallef qui installe des cracks. Les cracks exposent votre PC à des malwares et à des mises à jour Windows bloquées. Pour un formatage PC Casablanca sérieux, avec Windows officiel et une vraie garantie, il faut compter un prix honnête : Avito 150 DH = cracks, nous 350 DH = légal. La différence, c&apos;est la tranquillité et la durabilité de votre installation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Un formatage PC Maroc à distance vous évite le déplacement, les files d&apos;attente et le dépôt de votre ordinateur chez un inconnu. Vous gardez le contrôle : connexion sécurisée, intervention en direct, paiement après validation. Idéal pour les cadres à Maarif, Sidi Maarouf ou Ain Diab qui n&apos;ont pas le temps d&apos;aller à Derb Ghallef.
            </p>
          </div>
        </section>

        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Prix comparatif détaillé : Avito, Derb Ghallef, AlloSupport
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Le prix affiché ne fait pas tout. Un formatage PC Casablanca à 150 DH sur Avito inclut rarement une licence Windows légale : en général, ce sont des activateurs ou des cracks. Résultat : mises à jour bloquées, alertes de sécurité et risque de bannissement Windows. À Derb Ghallef, les tarifs varient entre 150 et 300 DH selon les boutiques, avec déplacement obligatoire et souvent pas de garantie écrite. Le &quot;prix réel&quot; grimpe si on ajoute la sauvegarde, l&apos;antivirus ou la garantie.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Notre offre formatage PC Maroc à 350 DH est tout compris : Windows 10 ou 11 officiel, Office ou LibreOffice, antivirus 6 mois, sauvegarde de vos documents (Google Drive ou disque externe) et garantie 30 jours. Aucun supplément caché. Vous payez après avoir testé votre PC — paiement après satisfaction. Pour un formatage PC Casablanca légal et traçable, 350 DH est le bon ordre de prix : en dessous, vous prenez le risque des cracks. Avito 150 DH = cracks, nous 350 DH = légal, c&apos;est la réalité du marché à Casablanca et au Maroc.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Comparer Avito, Derb Ghallef et AlloSupport sur la seule ligne &quot;formatage&quot; ne suffit pas. Il faut regarder la licence Windows, la sauvegarde, la garantie et le mode d&apos;intervention. Nous privilégions le formatage PC Casablanca à distance : pas de déplacement, pas d&apos;attente en boutique, intervention le jour même possible avant 20h.
            </p>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Garanties AlloSupport sur le formatage PC Casablanca
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Avec AlloSupport, chaque formatage PC Casablanca est couvert par une garantie 30 jours. Si un problème logiciel lié à notre intervention réapparaît (plantage, erreur Windows, pilote défaillant), nous reprenons la main à distance sans frais. Pas de &quot;c&apos;est normal&quot; ou &quot;il faut repayer&quot; : la garantie est écrite et appliquée. C&apos;est la différence avec la plupart des annonces Avito ou des boutiques Derb Ghallef où la garantie est souvent verbale ou inexistante.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Nous utilisons exclusivement des licences Windows officielles pour le formatage PC Maroc. Aucun crack, aucun activateur douteux. Vos mises à jour Windows restent actives et votre ordinateur reste conforme. L&apos;antivirus fourni (6 mois) protège votre PC après le formatage. La sauvegarde de vos documents est incluse dans le forfait 350 DH : nous identifions vos dossiers importants avant le formatage et proposons Google Drive ou un support externe pour éviter toute perte.
            </p>
            <p className="text-gray-700 leading-relaxed">
              En résumé : formatage PC Casablanca à 350 DH avec Windows officiel, sauvegarde, antivirus 6 mois et garantie 30 jours. Support par WhatsApp ou téléphone 7j/7. Pour un formatage casa professionnel sans risque, AlloSupport s&apos;engage sur le résultat.
            </p>
          </div>
        </section>

        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Témoignages Casablanca : formatage PC à Maarif et Sidi Maarouf
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Les retours de nos clients à Casablanca confirment que le formatage PC Casablanca à distance fonctionne aussi bien pour les particuliers que pour les freelances. Voici deux témoignages clients après un formatage casa avec Windows officiel et garantie 30 jours.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <article className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-sm text-gray-500 mb-2">Amine · Maarif</p>
                <p className="text-yellow-500 mb-3">★★★★★</p>
                <p className="text-gray-800 leading-relaxed">
                  &quot;Mon PC était lent depuis des mois, je voulais un formatage PC Casablanca sans me déplacer. AlloSupport a tout fait à distance depuis mon bureau au Twin Center. Windows 11 officiel, Office installé, 350 DH payés après que tout ait été validé. Plus de cracks, plus de galère. Je recommande le formatage casa à ceux qui hésitent.&quot;
                </p>
              </article>
              <article className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-sm text-gray-500 mb-2">Khadija · Sidi Maarouf</p>
                <p className="text-yellow-500 mb-3">★★★★★</p>
                <p className="text-gray-800 leading-relaxed">
                  &quot;J&apos;avais peur de perdre mes fichiers. Ils ont tout sauvegardé sur Google Drive avant le formatage PC Maroc. Résultat : PC rapide, Windows officiel, et mes documents intacts. Formatage Casa à 350 DH, c&apos;est clair et sans mauvaise surprise. Je ne retournerai plus sur Avito pour ça.&quot;
                </p>
              </article>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              7 avis Google 5★ sur le formatage PC Casablanca et nos dépannages à distance. Réponse sous 15 minutes par WhatsApp pour planifier votre intervention.
            </p>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              4 Étapes Formatage à Distance
            </h2>
            <p className="text-gray-600 mb-8">
              Le formatage PC Casablanca se fait 100 % à distance, via connexion sécurisée, sans que vous ayez à déplacer votre ordinateur à Derb Ghallef.
            </p>
            <ol className="grid md:grid-cols-4 gap-6">
              <li className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex flex-col">
                <span className="text-sm font-semibold text-emerald-600 mb-2">Étape 1</span>
                <h3 className="font-bold text-gray-900 mb-2">Contact WhatsApp (2 min)</h3>
                <p className="text-gray-700 text-sm">
                  Vous envoyez un message WhatsApp &quot;formatage PC Casablanca&quot; avec le modèle de votre ordinateur.
                </p>
              </li>
              <li className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex flex-col">
                <span className="text-sm font-semibold text-emerald-600 mb-2">Étape 2</span>
                <h3 className="font-bold text-gray-900 mb-2">Connexion sécurisée</h3>
                <p className="text-gray-700 text-sm">
                  Nous vous aidons à installer TeamViewer ou AnyDesk pour prendre la main à distance sur votre PC.
                </p>
              </li>
              <li className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex flex-col">
                <span className="text-sm font-semibold text-emerald-600 mb-2">Étape 3</span>
                <h3 className="font-bold text-gray-900 mb-2">Formatage et réinstallation</h3>
                <p className="text-gray-700 text-sm">
                  Formatage PC Casablanca complet avec Windows, pilotes, Office, antivirus et optimisation des performances.
                </p>
              </li>
              <li className="bg-gray-50 border border-gray-200 rounded-2xl p-4 flex flex-col">
                <span className="text-sm font-semibold text-emerald-600 mb-2">Étape 4</span>
                <h3 className="font-bold text-gray-900 mb-2">Paiement après satisfaction</h3>
                <p className="text-gray-700 text-sm">
                  Vous testez votre ordinateur réinstallé. Vous payez uniquement une fois le formatage validé.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Clients Casablanca (Formatage PC)
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <article className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Youssef M. · Maarif</p>
                <p className="text-yellow-500 mb-2">★★★★★</p>
                <p className="text-gray-800 text-sm">
                  &quot;Formatage PC Casablanca fait en 45 minutes depuis mon bureau au Twin Center. Windows 11 officiel, Office installé, PC beaucoup plus rapide. 350 DH payé après.&quot;
                </p>
              </article>
              <article className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Fatima L. · Sidi Maarouf</p>
                <p className="text-yellow-500 mb-2">★★★★★</p>
                <p className="text-gray-800 text-sm">
                  &quot;J&apos;avais tenté un formatage Avito à 150 DH avec cracks. Résultat : virus et perte de temps. Avec AlloSupport, formatage PC Casablanca légal à 350 DH, tout est clair et sécurisé.&quot;
                </p>
              </article>
              <article className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Karim B. · Ain Diab</p>
                <p className="text-yellow-500 mb-2">★★★★★</p>
                <p className="text-gray-800 text-sm">
                  &quot;Mon ordinateur était devenu inutilisable. Après le formatage PC Casablanca, le démarrage est 3 fois plus rapide. Support réactif même après l&apos;intervention.&quot;
                </p>
              </article>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              7 avis Google 5★ au total sur nos dépannages à distance et formatage PC Casablanca pour particuliers et freelances.
            </p>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Quartiers Couverts en 15 Min
            </h2>
            <p className="text-gray-600 mb-6">
              Que vous soyez à Maarif, Sidi Maarouf ou Ain Diab, le formatage PC Casablanca se fait à distance. Vous gagnez le temps de trajet jusqu&apos;à Derb Ghallef et évitez les files d&apos;attente.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-2 text-gray-800">
                <li>• Maarif, Twin Center et boulevard Anfa</li>
                <li>• Sidi Maarouf, Technopark et Casanearshore</li>
                <li>• Ain Diab et corniche</li>
              </ul>
              <ul className="space-y-2 text-gray-800">
                <li>• Centre-ville et boulevard Mohammed V</li>
                <li>• Hay Hassani et route d&apos;El Jadida</li>
                <li>• Bouskoura et environs</li>
              </ul>
            </div>
            <p className="mt-4 text-sm text-gray-700">
              À distance = pas de limite : si vous êtes connecté à internet, nous pouvons lancer un formatage PC Casablanca depuis n&apos;importe quel quartier ou ville du Maroc.
            </p>
          </div>
        </section>

        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Questions Fréquentes
            </h2>
            <div className="space-y-4">
              <details className="bg-white border border-gray-200 rounded-xl p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  Combien de temps dure un formatage PC Casablanca ?
                </summary>
                <p className="mt-2 text-gray-700 text-sm">
                  En moyenne, un formatage PC Casablanca complet dure entre 45 et 90 minutes. Cela inclut la réinstallation de Windows, des pilotes, d&apos;Office, de l&apos;antivirus et l&apos;optimisation du démarrage.
                </p>
              </details>
              <details className="bg-white border border-gray-200 rounded-xl p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  Est-ce que je perds mes fichiers pendant le formatage ?
                </summary>
                <p className="mt-2 text-gray-700 text-sm">
                  Avant de lancer le formatage PC Casablanca, nous identifions vos dossiers importants (Bureau, Documents, Photos) et proposons une sauvegarde vers Google Drive ou un disque externe. Le risque zéro n&apos;existe pas, mais il est fortement réduit.
                </p>
              </details>
              <details className="bg-white border border-gray-200 rounded-xl p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  Pourquoi vous êtes à 350 DH alors que certains sont à 150 DH sur Avito ?
                </summary>
                <p className="mt-2 text-gray-700 text-sm">
                  Les annonces &quot;formatage PC Casablanca 150 DH&quot; sur Avito utilisent très souvent des logiciels cracks, sans garantie ni facture. À 350 DH, vous bénéficiez d&apos;un formatage légal, d&apos;un suivi, d&apos;un antivirus et d&apos;une garantie 30 jours.
                </p>
              </details>
              <details className="bg-white border border-gray-200 rounded-xl p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  Windows est-il vraiment officiel ?
                </summary>
                <p className="mt-2 text-gray-700 text-sm">
                  Oui, le formatage PC Casablanca inclut une licence Windows 10 ou 11 officielle. Nous n&apos;utilisons pas de cracks ni d&apos;activateurs dangereux pour votre sécurité et vos données.
                </p>
              </details>
              <details className="bg-white border border-gray-200 rounded-xl p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  Pouvez-vous vous déplacer à domicile à Casablanca ?
                </summary>
                <p className="mt-2 text-gray-700 text-sm">
                  La plupart des formatages PC Casablanca se font à distance. Pour certains cas particuliers, nous pouvons proposer un déplacement à domicile sur Casablanca sur devis (Maarif, Sidi Maarouf, Ain Diab, Technopark).
                </p>
              </details>
              <details className="bg-white border border-gray-200 rounded-xl p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  Quelle est la garantie sur l&apos;intervention ?
                </summary>
                <p className="mt-2 text-gray-700 text-sm">
                  Vous disposez d&apos;une garantie 30 jours sur le formatage PC Casablanca. Si un problème logiciel lié à notre intervention réapparaît, nous reprenons la main gratuitement pour le corriger.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Autres Services Casablanca
            </h2>
            <p className="text-gray-600 mb-6">
              En plus du formatage PC Casablanca, AlloSupport vous accompagne sur les pannes les plus fréquentes pour les particuliers et freelances.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-sm md:text-base">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-3 py-3 text-left font-semibold text-gray-800">Service</th>
                    <th className="px-3 py-3 text-left font-semibold text-gray-800">Ville</th>
                    <th className="px-3 py-3 text-left font-semibold text-gray-800">À partir de</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-3 py-3 text-gray-800">PC lent</td>
                    <td className="px-3 py-3 text-gray-800">Casablanca</td>
                    <td className="px-3 py-3 text-gray-800">250 DH</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-3 py-3 text-gray-800">Suppression virus et malware</td>
                    <td className="px-3 py-3 text-gray-800">Casablanca</td>
                    <td className="px-3 py-3 text-gray-800">290 DH</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-3 py-3 text-gray-800">Récupération de données</td>
                    <td className="px-3 py-3 text-gray-800">Casablanca</td>
                    <td className="px-3 py-3 text-gray-800">450 DH</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 bg-emerald-600 text-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Prêt pour Formatage PC Casablanca ?
            </h2>
            <p className="text-emerald-50 mb-6">
              Formatage PC Casablanca 350 DH tout compris : Windows officiel, Office, antivirus 6 mois, sauvegarde et garantie 30 jours. Intervention aujourd&apos;hui avant 20h.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  whatsappText
                )}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 font-semibold px-7 py-3 rounded-xl shadow-lg hover:bg-emerald-50 transition w-full sm:w-auto"
              >
                <span>WhatsApp</span>
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 border border-white/80 text-white px-7 py-3 rounded-xl font-semibold hover:bg-emerald-500/20 transition w-full sm:w-auto"
              >
                <span>☎️ {GOOGLE_BUSINESS.PHONE}</span>
              </a>
            </div>
            <p className="text-xs text-emerald-100">
              Paiement après satisfaction · Formatage PC Casablanca 100 % à distance · 7 avis Google 5★
            </p>
          </div>
        </section>

        {/* BLOC 2 : Maillage interne stratégique (Cross-Selling / Siloing) */}
        <section className="py-14 bg-gray-100 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
              Vous hésitez ? Découvrez nos alternatives
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Pas forcément besoin de formater : PC lent, virus ou besoin d&apos;un accompagnement pro, on vous oriente.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Link
                href="/pc-lent-solution"
                className="group flex flex-col rounded-2xl border-2 border-emerald-200 bg-emerald-50/80 p-6 shadow-sm hover:border-emerald-400 hover:shadow-md transition-all"
              >
                <span className="text-xs font-bold uppercase tracking-wide text-emerald-700 mb-2">Optimisation</span>
                <span className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                  Solutions PC lent
                </span>
                <span className="text-sm text-gray-600 mt-1">
                  Ralentissements, freezes : on optimise sans formater.
                </span>
              </Link>
              <Link
                href="/virus-ordinateur-maroc"
                className="group flex flex-col rounded-2xl border-2 border-red-200 bg-red-50/80 p-6 shadow-sm hover:border-red-400 hover:shadow-md transition-all"
              >
                <span className="text-xs font-bold uppercase tracking-wide text-red-700 mb-2">Sécurité</span>
                <span className="text-lg font-bold text-gray-900 group-hover:text-red-700 transition-colors">
                  Nettoyage Virus
                </span>
                <span className="text-sm text-gray-600 mt-1">
                  Alternative moins radicale : suppression virus et malware.
                </span>
              </Link>
              <Link
                href="/support-pme"
                className="group flex flex-col rounded-2xl border-2 border-blue-200 bg-blue-50/80 p-6 shadow-sm hover:border-blue-400 hover:shadow-md transition-all"
              >
                <span className="text-xs font-bold uppercase tracking-wide text-blue-700 mb-2">Entreprises</span>
                <span className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  Offres Infogérance PME
                </span>
                <span className="text-sm text-gray-600 mt-1">
                  Maintenance pro, sauvegardes et support dédié pour entreprises.
                </span>
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
              <span className="text-gray-500 font-medium">Nos autres zones :</span>
              <Link href="/casablanca" className="text-emerald-600 font-semibold hover:underline">
                Dépannage Casablanca
              </Link>
              <Link href="/rabat" className="text-emerald-600 font-semibold hover:underline">
                Dépannage Rabat
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/blog/7-pannes-pc-courantes-2026-maroc" className="text-gray-700 hover:text-emerald-600 font-medium">
                Blog : 7 pannes PC courantes 2026 Maroc
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

