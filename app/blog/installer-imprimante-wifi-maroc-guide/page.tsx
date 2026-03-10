import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateBreadcrumbSchema } from "@/lib/seo";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";

const CANONICAL = "https://allosupport.ma/blog/installer-imprimante-wifi-maroc-guide";
const WHATSAPP_IMPRIMANTE = `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent(
  "Bonjour AlloSupport, j'ai besoin d'aide pour installer mon imprimante WiFi. Guide bloqué."
)}`;

export const metadata: Metadata = {
  title: "Installer une Imprimante WiFi au Maroc : Guide Complet 2026",
  description:
    "Comment installer et configurer une imprimante WiFi au Maroc ? Pilotes, connexion réseau, dépannage HP Canon Epson Brother. Guide étape par étape + tarifs technicien.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Installer une Imprimante WiFi au Maroc : Guide Complet 2026",
    description:
      "Comment installer et configurer une imprimante WiFi au Maroc ? Pilotes, connexion réseau, dépannage HP Canon Epson Brother. Guide étape par étape + tarifs technicien.",
    url: CANONICAL,
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comment Installer une Imprimante WiFi au Maroc : Guide Étape par Étape (HP, Canon, Epson, Brother)",
  author: { "@type": "Organization", name: "AlloSupport.ma" },
  publisher: { "@type": "Organization", name: "AlloSupport.ma" },
  datePublished: "2026-03-10",
  dateModified: "2026-03-10",
  mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "https://allosupport.ma" },
  { name: "Blog", url: "https://allosupport.ma/blog" },
  { name: "Installer Imprimante WiFi Maroc", url: CANONICAL },
]);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Pourquoi mon imprimante WiFi n'est pas détectée par Windows ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Souvent l'imprimante et le PC sont sur des réseaux WiFi différents (2,4 GHz vs 5 GHz ou invité), ou les pilotes sont incompatibles. Vérifiez que les deux sont sur le même réseau et réinstallez les pilotes officiels (HP, Canon, Epson, Brother).",
      },
    },
    {
      "@type": "Question",
      name: "Comment connecter une imprimante en WiFi au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Téléchargez les pilotes sur le site du fabricant, connectez l'imprimante au WiFi via le panneau (WPS ou saisie du mot de passe), puis ajoutez l'imprimante dans Windows (Paramètres → Imprimantes). Une IP fixe sur le routeur évite les déconnexions.",
      },
    },
    {
      "@type": "Question",
      name: "L'imprimante WiFi est détectée mais n'imprime pas, que faire ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Redémarrez le service Spooler d'impression Windows (services.msc), supprimez l'imprimante et réinstallez les pilotes proprement, ou attribuez une IP fixe à l'imprimante pour éviter les conflits réseau.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûte l'installation d'une imprimante WiFi par un technicien au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AlloSupport propose l'installation imprimante à distance dès 150 DH (USB ou WiFi simple). Configuration avancée (plusieurs PC, spooler, scanner) à partir de 250 DH. Devis gratuit pour les PME.",
      },
    },
  ],
};

const faqData = [
  {
    q: "Pourquoi mon imprimante WiFi n'est pas détectée par Windows ?",
    a: "Souvent l'imprimante et le PC sont sur des réseaux WiFi différents (2,4 GHz vs 5 GHz ou invité), ou les pilotes sont incompatibles. Vérifiez que les deux sont sur le même réseau et réinstallez les pilotes officiels (HP, Canon, Epson, Brother).",
  },
  {
    q: "Comment connecter une imprimante en WiFi au Maroc ?",
    a: "Téléchargez les pilotes sur le site du fabricant, connectez l'imprimante au WiFi via le panneau (WPS ou saisie du mot de passe), puis ajoutez l'imprimante dans Windows (Paramètres → Imprimantes). Une IP fixe sur le routeur évite les déconnexions.",
  },
  {
    q: "L'imprimante WiFi est détectée mais n'imprime pas, que faire ?",
    a: "Redémarrez le service Spooler d'impression Windows (services.msc), supprimez l'imprimante et réinstallez les pilotes proprement, ou attribuez une IP fixe à l'imprimante pour éviter les conflits réseau.",
  },
  {
    q: "Combien coûte l'installation d'une imprimante WiFi par un technicien au Maroc ?",
    a: "AlloSupport propose l'installation imprimante à distance dès 150 DH (USB ou WiFi simple). Configuration avancée (plusieurs PC, spooler, scanner) à partir de 250 DH. Devis gratuit pour les PME.",
  },
];

export default function BlogInstallerImprimanteWifiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />

      <main className="min-h-screen bg-gray-50">
        <nav aria-label="Fil d'Ariane" className="bg-white border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <ol className="flex items-center gap-2 text-sm text-slate-600">
              <li><Link href="/" className="text-emerald-600 hover:underline">Accueil</Link></li>
              <li aria-hidden className="text-slate-400">›</li>
              <li><Link href="/blog" className="text-emerald-600 hover:underline">Blog</Link></li>
              <li aria-hidden className="text-slate-400">›</li>
              <li className="text-slate-900 font-medium">Installer Imprimante WiFi Maroc</li>
            </ol>
          </div>
        </nav>

        <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white py-16 pt-24">
          <div className="max-w-4xl mx-auto px-4">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" aria-hidden />
              Retour au blog
            </Link>
            <div className="mb-4">
              <span className="bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full">
                Guide 2026 · 6 min de lecture
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Comment Installer une Imprimante WiFi au Maroc : Guide Étape par Étape (HP, Canon, Epson, Brother)
            </h1>
            <p className="text-xl text-slate-200 mb-4">
              Vous venez d&apos;acheter une imprimante WiFi au Maroc et vous ne savez pas par où commencer ? Pilotes manquants, imprimante hors ligne, connexion qui échoue : ce guide vous explique pourquoi l&apos;installation échoue souvent, les étapes précises sous Windows 10 et 11, et quand faire appel à un technicien à distance — avec les tarifs en DH.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <time dateTime="2026-03-10">10 mars 2026</time>
              <span>·</span>
              <span>Équipe AlloSupport.ma</span>
            </div>
          </div>
        </section>

        <article className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 md:p-8 prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mt-0 mb-4 text-gray-900">
                  Pourquoi l&apos;installation d&apos;une imprimante WiFi échoue souvent ?
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Au Maroc, comme ailleurs, trois causes reviennent sans cesse quand l&apos;imprimante WiFi ne s&apos;installe pas ou reste « hors ligne ».
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-900">
                  1. Pilotes incompatibles ou mal installés
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les <strong>pilotes</strong> (drivers) fournis sur le CD ou une vieille version du site ne correspondent pas toujours à Windows 10 ou 11. Une mise à jour Windows peut aussi casser des pilotes existants. La solution : télécharger les <strong>pilotes officiels</strong> sur le site du fabricant — <a href="https://support.hp.com" target="_blank" rel="nofollow noopener noreferrer" className="text-emerald-600 hover:underline">pilotes HP officiels</a>, <a href="https://www.canon.fr/support" target="_blank" rel="nofollow noopener noreferrer" className="text-emerald-600 hover:underline">pilotes Canon</a>, Epson ou Brother — en choisissant exactement votre modèle et votre version de Windows.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-900">
                  2. Imprimante et PC sur des réseaux WiFi différents
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Si votre box (Maroc Telecom, Inwi, Orange) diffuse un réseau 2,4 GHz et un réseau 5 GHz, ou un réseau invité, l&apos;imprimante et le PC doivent être sur le <strong>même réseau</strong>. Une imprimante connectée en 2,4 GHz ne sera pas vue par un PC connecté en 5 GHz. Vérifiez dans les paramètres WiFi de l&apos;imprimante et du PC qu&apos;ils partagent le même SSID.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-900">
                  3. Pare-feu Windows bloquant la connexion
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le pare-feu Windows peut bloquer la découverte d&apos;imprimantes sur le réseau. Dans « Paramètres → Réseau et Internet → Options avancées », assurez-vous que « Réseau privé » est bien sélectionné pour votre connexion et que la découverte du réseau est activée. Un antivirus tiers peut aussi filtrer les requêtes d&apos;impression — testez en le désactivant temporairement.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                  Étape par étape : installer une imprimante WiFi sous Windows 10/11
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Suivez ces étapes dans l&apos;ordre pour une <strong>installation imprimante Windows 10 11 Maroc</strong> propre.
                </p>
                <ol className="list-decimal list-inside space-y-3 text-gray-700 mb-4">
                  <li>
                    <strong>Télécharger les pilotes officiels</strong> : sur le site du fabricant (HP Support, Canon, Epson, Brother), entrez la référence de votre imprimante, choisissez Windows 10 ou 11 et téléchargez le pack pilotes complet. Lancez l&apos;installateur avant d&apos;ajouter l&apos;imprimante dans Windows si le logiciel le demande.
                  </li>
                  <li>
                    <strong>Connecter l&apos;imprimante au réseau WiFi</strong> : via le panneau de l&apos;imprimante, menu Réseau/WiFi, choisissez WPS (appuyez sur le bouton WPS de la box) ou saisie manuelle du mot de passe WiFi. Attendez que l&apos;imprimante obtienne une IP (vérifiable en imprimant une page de configuration réseau).
                  </li>
                  <li>
                    <strong>Ajouter l&apos;imprimante dans Windows</strong> : Paramètres → Bluetooth et appareils → Imprimantes et numériseurs → Ajouter un appareil. Windows doit détecter l&apos;imprimante WiFi. Sinon, « Ajouter manuellement » et suivez l&apos;assistant (recherche par IP ou par nom).
                  </li>
                  <li>
                    <strong>Définir comme imprimante par défaut</strong> : clic droit sur l&apos;imprimante → Gérer → Définir comme imprimante par défaut.
                  </li>
                  <li>
                    <strong>Imprimer une page de test</strong> : Gérer → Imprimer une page de test. Si rien ne sort, passez à la section « Imprimante détectée mais n&apos;imprime pas » ci-dessous.
                  </li>
                </ol>
                <p className="text-gray-700 leading-relaxed bg-slate-50 rounded-xl p-4 border border-slate-200">
                  Cette procédure bloque ? Notre technicien fait tout à distance →{" "}
                  <Link href="/installation-imprimante-maroc" className="text-emerald-600 font-medium hover:underline">
                    Installation imprimante à distance (150 DH)
                  </Link>
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                  Imprimante WiFi détectée mais n&apos;imprime pas : solutions
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  L&apos;<strong>imprimante reconnue mais n&apos;imprime pas</strong> est souvent due au <strong>service Spooler</strong> Windows ou à des pilotes corrompus. Voici trois solutions.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-900">
                  1. Redémarrer le service Spooler d&apos;impression Windows
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ouvrez <code className="bg-slate-100 px-1 rounded">services.msc</code>, repérez « Spooler d&apos;impression », clic droit → Redémarrer. Si la <strong>file d&apos;attente d&apos;impression</strong> était bloquée, les travaux en attente repartent souvent. En cas d&apos;erreur imprimante spooler Windows récurrente, une réinstallation propre des pilotes s&apos;impose.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-900">
                  2. Supprimer et réinstaller les pilotes proprement
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Paramètres → Imprimantes → votre imprimante → Supprimer. Redémarrez le PC, puis réinstallez depuis le pack téléchargé (HP, Canon, Epson, Brother) en mode « installation personnalisée » pour éviter les logiciels optionnels. Réinstallez aussi après un <strong>formatage PC</strong> : <Link href="/formatage-pc" className="text-emerald-600 hover:underline">réinstaller imprimante après formatage PC</Link> suit la même logique.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-900">
                  3. Attribuer une IP fixe à l&apos;imprimante sur le routeur
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Si l&apos;imprimante change d&apos;IP à chaque redémarrage de la box, Windows peut la perdre. Dans l&apos;interface de votre box (souvent 192.168.1.1), réservez une <strong>IP fixe</strong> pour l&apos;adresse MAC de l&apos;imprimante. Ainsi, l&apos;<strong>imprimante ne détecte pas le wifi</strong> de façon erratique : elle garde la même IP et reste joignable.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                  Partager une imprimante WiFi entre plusieurs PC au bureau
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pour les <strong>PME au Maroc</strong>, une <strong>imprimante partagée réseau bureau plusieurs PC</strong> évite les doublons. Configurez l&apos;imprimante en WiFi avec une IP fixe (voir ci-dessus), puis sur chaque poste ajoutez l&apos;imprimante via « Ajouter une imprimante réseau » en saisissant son IP. Pour un parc plus important, un <strong>serveur d&apos;impression</strong> ou une configuration centralisée est préférable. Notre <Link href="/support-pme" className="text-emerald-600 hover:underline">support PME Maroc</Link> prend en charge l&apos;<strong>installation imprimante bureau Maroc</strong> et le partage sur tout le réseau local.
                </p>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                  Faire appel à un technicien : quand et combien ça coûte ?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Si après 30 minutes d&apos;essais vous n&apos;avancez pas, faire appel à un <strong>technicien imprimante à distance Maroc</strong> est rentable. AlloSupport intervient sans déplacement : le technicien prend la main sur votre PC, installe les pilotes, configure la connexion WiFi ou réseau et valide un test d&apos;impression. <strong>Installation imprimante prix Maroc</strong> : dès 150 DH (USB ou WiFi simple, 1 PC), 250 DH (WiFi avancé, jusqu&apos;à 3 PC, résolution spooler). PME et partage multi-postes sur <Link href="/devis" className="text-emerald-600 hover:underline">devis gratuit</Link>. Service détaillé : <Link href="/installation-imprimante-maroc" className="text-emerald-600 hover:underline">installation imprimante à distance Maroc</Link>.
                </p>
                <div className="overflow-x-auto my-6 rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200">
                        <th className="py-3 px-4 font-bold text-slate-900">Prestation</th>
                        <th className="py-3 px-4 font-bold text-slate-900">Prix</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b border-slate-100"><td className="py-3 px-4">Installation USB / WiFi simple (1 PC)</td><td className="py-3 px-4">150 DH</td></tr>
                      <tr className="border-b border-slate-100"><td className="py-3 px-4">Configuration WiFi avancée (jusqu&apos;à 3 PC)</td><td className="py-3 px-4">250 DH</td></tr>
                      <tr><td className="py-3 px-4">PME partage réseau (sur devis)</td><td className="py-3 px-4">Sur devis</td></tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                  Articles connexes
                </h2>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li><Link href="/blog/installation-windows-11-maroc-2026-prix" className="text-emerald-600 hover:underline">Installation Windows 11 Maroc</Link></li>
                  <li><Link href="/blog/maintenance-preventive-pc-entreprise-maroc" className="text-emerald-600 hover:underline">Maintenance PC entreprise Maroc</Link></li>
                  <li><Link href="/formatage-pc" className="text-emerald-600 hover:underline">Formatage PC Maroc 350 DH</Link></li>
                </ul>

                <h2 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
                  Questions fréquentes — Imprimante WiFi Maroc
                </h2>
                <dl className="space-y-4">
                  {faqData.map((item, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl p-4">
                      <dt className="font-bold text-slate-900 mb-2">{item.q}</dt>
                      <dd className="text-slate-700 text-sm leading-relaxed">{item.a}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </article>

        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Votre imprimante installée en 30 minutes chrono
            </h2>
            <p className="text-slate-300 mb-6">
              Sans déplacement, résultat garanti, toutes marques (HP, Canon, Epson, Brother), dès 150 DH.
            </p>
            <a
              href={WHATSAPP_IMPRIMANTE}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition"
            >
              <MessageCircle className="w-5 h-5" aria-hidden />
              Contacter un technicien maintenant
            </a>
            <p className="mt-4 text-slate-400 text-sm">
              <Link href="/installation-imprimante-maroc" className="text-emerald-400 hover:underline">Installation imprimante Maroc</Link>
              {" · "}
              <Link href="/devis" className="text-emerald-400 hover:underline">Devis gratuit</Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
