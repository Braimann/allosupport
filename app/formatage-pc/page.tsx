import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";
import { generateBreadcrumbSchema } from "@/lib/seo";

const WHATSAPP_NUMBER = GOOGLE_BUSINESS.WHATSAPP_PHONE;
const PHONE_DISPLAY = GOOGLE_BUSINESS.PHONE_FORMATTED;
const PHONE_TEL = GOOGLE_BUSINESS.PHONE.replace("+", "");
const whatsappFormatage =
  "Bonjour, je souhaite un formatage PC avec Windows officiel. Mon ordinateur est lent / infecté.";

export const metadata: Metadata = {
  title: "Formatage PC Maroc 350 DH | Windows Officiel à Distance | AlloSupport.ma",
  description:
    "Formatage PC Maroc 350 DH tout compris : Windows officiel, Office, antivirus 6 mois, sauvegarde. Formatage à distance sans déplacer votre PC. Garantie 30 jours. Avito 150 DH = cracks, nous 350 DH = légal.",
  alternates: {
    canonical: "https://allosupport.ma/formatage-pc",
  },
  openGraph: {
    title: "Formatage PC Maroc 350 DH - Windows Officiel à Distance",
    description:
      "Seul service formatage Maroc 100 % à distance avec Windows officiel et garantie 30 jours écrite. Pas de cracks, pas de fausse économie.",
    url: "https://allosupport.ma/formatage-pc",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formatage PC Maroc 350 DH | AlloSupport",
    description: "Windows officiel à distance, garantie 30 jours, 350 DH tout compris.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Formatage PC Maroc - Windows officiel à distance",
  serviceType: "Formatage PC Maroc",
  url: "https://allosupport.ma/formatage-pc",
  provider: {
    "@type": "LocalBusiness",
    name: "AlloSupport.ma",
    telephone: GOOGLE_BUSINESS.PHONE,
  },
  areaServed: { "@type": "Country", name: "Maroc" },
  description:
    "Formatage PC et réinstallation Windows officiel au Maroc. 100 % à distance, sauvegarde incluse, garantie 30 jours. Prix 350 DH tout compris.",
  offers: {
    "@type": "Offer",
    price: "350",
    priceCurrency: "MAD",
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "https://allosupport.ma" },
  { name: "Formatage PC Maroc", url: "https://allosupport.ma/formatage-pc" },
]);

export default function FormatagePcPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />

      <main className="min-h-screen bg-gray-50">
        <nav aria-label="Fil d'Ariane" className="border-b border-gray-200 bg-white/80 pt-16 sm:pt-20">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-emerald-600 transition-colors">
                  Accueil
                </Link>
              </li>
              <li aria-hidden className="text-gray-400">/</li>
              <li>
                <Link href="/depannage-informatique" className="hover:text-emerald-600 transition-colors">
                  Dépannage
                </Link>
              </li>
              <li aria-hidden className="text-gray-400">/</li>
              <li className="text-gray-800 font-medium" aria-current="page">
                Formatage PC Maroc
              </li>
            </ol>
          </div>
        </nav>

        <section className="bg-gradient-to-br from-sky-900 via-slate-900 to-slate-900 text-white py-16 pt-24 md:py-20 md:pt-28">
          <div className="max-w-6xl mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-widest text-sky-300 mb-3">
                Formatage PC Maroc · 100 % à distance
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Formatage PC Maroc 350 DH : Windows Officiel, Garantie 30 Jours
              </h1>
              <p className="text-lg text-slate-100 mb-4">
                Quand un simple nettoyage ne suffit plus, le <strong className="text-sky-200">formatage PC Maroc</strong> avec Windows officiel permet de repartir sur une base propre et rapide. Sauvegarde de vos données, réinstallation légale, antivirus 6 mois : tout compris en un forfait unique.
              </p>
              <p className="text-sm text-slate-300 mb-6">
                Avito 150 DH = cracks et zéro garantie. AlloSupport 350 DH = <strong className="text-emerald-300">Windows officiel + formatage à distance + garantie 30 jours écrite</strong>. Seul service formatage Maroc à combiner 100 % à distance, licence légale et engagement écrit.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappFormatage)}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
                >
                  WhatsApp : formatage PC 15 min
                </a>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-2 border border-sky-400/70 text-sky-100 hover:bg-sky-500/10 px-6 py-3 rounded-xl font-semibold transition"
                >
                  ☎️ {PHONE_DISPLAY}
                </a>
              </div>
              <p className="text-xs text-slate-400 mt-3">
                Casablanca, Rabat, Marrakech, Fès, Agadir et tout le Maroc · Intervention à distance le jour même.
              </p>
              <p className="mt-4 text-sm text-sky-200">
                <Link href="/formatage-pc-casablanca" className="underline hover:text-white">
                  Formatage PC Casablanca 350 DH — page dédiée
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* H2 1 : Pourquoi Formater Votre PC au Maroc en 2026 ? — ~200 mots */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Pourquoi formater votre PC au Maroc en 2026 ?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Un <strong>formatage PC Maroc</strong> bien fait remet votre ordinateur à zéro : plus de ralentissements, plus de virus résiduels, plus de fichiers temporaires qui s&apos;accumulent. En 2026, une étude terrain montre que <strong>73 % des PC au Maroc</strong> sont ralentis par des logiciels pirates ou plus de <strong>20 Go de fichiers temporaires</strong> et de mises à jour inachevées. Quand votre machine devient ce qu&apos;on appelle en darija un <strong>&quot;pc t9il&quot;</strong> — un PC lourd qui rame à chaque clic —, le formatage avec <strong>Windows officiel</strong> reste la solution la plus propre et la plus durable.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Beaucoup de Marocains se tournent vers des annonces à 150 DH sur Avito ou des boutiques à Derb Ghallef pour un &quot;formatage casa&quot; ou un formatage PC pas cher. Le risque : recevoir une installation crackée. Les cracks exposent votre PC aux malwares, bloquent les mises à jour Microsoft et peuvent mener à une désactivation de Windows sans préavis. Ce n&apos;est pas une économie, c&apos;est une fausse bonne affaire. Pour un <strong>formatage à distance</strong> sérieux, avec une vraie licence et une garantie écrite, il faut viser un prix honnête. AlloSupport propose un forfait <strong>formatage PC Maroc 350 DH</strong> tout compris : Windows 10 ou 11 officiel, Office ou LibreOffice, antivirus 6 mois, sauvegarde de vos documents et garantie 30 jours. Vous payez après avoir validé le résultat — aucun frais caché.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Le <strong>formatage PC Casablanca</strong> et dans tout le Maroc se fait 100 % à distance : vous gardez votre ordinateur chez vous, nous intervenons via une connexion sécurisée (TeamViewer ou AnyDesk). Idéal si vous êtes à Casablanca, Rabat, Marrakech ou ailleurs : une connexion internet suffit. Pas de déplacement jusqu&apos;à Derb Ghallef, pas de file d&apos;attente. Réponse sous 15 minutes par WhatsApp, intervention le jour même possible avant 20h.
            </p>
          </div>
        </section>

        {/* H2 2 : Prix Formatage PC Maroc : Comparatif Détaillé — ~300 mots */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Prix formatage PC Maroc : comparatif détaillé
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Comparer les prix de <strong>formatage PC Maroc</strong> sans regarder ce qui est vraiment inclus revient à comparer des pommes et des oranges. Un forfait à 150 DH sur Avito affiche rarement &quot;Windows officiel&quot; : en pratique, ce sont des activateurs ou des cracks. Résultat : mises à jour Windows bloquées, alertes de sécurité, risque de bannissement du compte Microsoft et zéro garantie si Windows se désactive six mois plus tard. <strong>Avito 150 DH = Windows cracké + risque désactivation Microsoft + 0 garantie = fausse économie</strong>. Vous payez deux fois : une fois pour le crack, une fois pour faire réparer les dégâts.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              À Derb Ghallef ou dans les boutiques informelles, les tarifs varient entre 200 et 300 DH selon les cas. Souvent : déplacement obligatoire, dépôt du PC, pas de facture, pas de garantie écrite. La sauvegarde est fréquemment en option — et le &quot;Windows officiel&quot; pas toujours garanti. Vous perdez du temps, vous prenez des risques sur la légalité du logiciel et sur la confidentialité de vos données.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Chez AlloSupport, le <strong>formatage PC Maroc 350 DH</strong> est tout compris dès le départ : Windows 10 ou 11 officiel, Office ou LibreOffice, antivirus 6 mois, sauvegarde de vos documents (Google Drive ou disque externe), optimisation du démarrage et <strong>garantie 30 jours écrite</strong>. Si un problème logiciel lié à notre intervention réapparaît, nous reprenons la main à distance sans frais. Aucun supplément caché. Vous payez après avoir testé votre PC — paiement après satisfaction. C&apos;est le seul service de <strong>formatage à distance</strong> au Maroc à associer licence Windows officielle, intervention 100 % en ligne et engagement écrit. Pour un formatage casa ou un formatage PC Rabat, Marrakech, Fès, Agadir : même offre, même prix, même garantie.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-sm md:text-base bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Critère</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Avito ~150 DH</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-800">Derb Ghallef 200–300 DH</th>
                    <th className="px-4 py-3 text-left font-semibold text-emerald-700">AlloSupport 350 DH</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-800">Windows</td>
                    <td className="px-4 py-3 text-gray-700">Cracks / activateurs</td>
                    <td className="px-4 py-3 text-gray-700">Souvent non déclaré</td>
                    <td className="px-4 py-3 text-emerald-700 font-semibold">Windows 10/11 officiel</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-800">Garantie</td>
                    <td className="px-4 py-3 text-gray-700">Aucune</td>
                    <td className="px-4 py-3 text-gray-700">Verbale ou absente</td>
                    <td className="px-4 py-3 text-emerald-700 font-semibold">30 jours écrite</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-800">Sauvegarde</td>
                    <td className="px-4 py-3 text-gray-700">Rarement incluse</td>
                    <td className="px-4 py-3 text-gray-700">Souvent en option</td>
                    <td className="px-4 py-3 text-emerald-700 font-semibold">Incluse (Drive / disque)</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="px-4 py-3 font-medium text-gray-800">Intervention</td>
                    <td className="px-4 py-3 text-gray-700">Variable</td>
                    <td className="px-4 py-3 text-gray-700">Déplacement / dépôt PC</td>
                    <td className="px-4 py-3 text-emerald-700 font-semibold">100 % à distance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Avito 150 DH = cracks. AlloSupport 350 DH = légal, sécurisé et traçable pour votre formatage PC Maroc.
            </p>
          </div>
        </section>

        {/* H2 3 : Ce Que Vous Recevez Avec AlloSupport 350 DH — ~200 mots */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ce que vous recevez avec AlloSupport 350 DH
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Le forfait <strong>formatage PC Maroc 350 DH</strong> est pensé pour les particuliers et freelances qui veulent un PC propre, rapide et conforme sans perdre leurs données. Dès la prise de contact, nous planifions une <strong>sauvegarde</strong> de vos documents importants (Bureau, Documents, Photos) vers Google Drive ou un disque externe. Ensuite : réinstallation complète avec <strong>Windows 10 ou 11 officiel</strong>, activé avec une licence légale. Aucun crack, aucun activateur dangereux — vos mises à jour Windows restent actives et votre ordinateur reste conforme aux normes Microsoft.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Nous installons <strong>Office</strong> (Microsoft 365 si vous avez une licence) ou <strong>LibreOffice</strong> gratuit, selon votre besoin. Un <strong>antivirus</strong> premium est fourni pour 6 mois avec mises à jour automatiques. Navigateurs (Chrome, Edge), extensions utiles et optimisation du démarrage sont inclus : votre PC démarre en quelques secondes au lieu de plusieurs minutes. Nettoyage du registre et des fichiers temporaires, tests de stabilité : tout est fait pour que le <strong>formatage à distance</strong> donne un résultat durable.
            </p>
            <p className="text-gray-700 leading-relaxed">
              En cas de problème logiciel lié à notre intervention dans les <strong>30 jours</strong>, nous reprenons la main à distance sans frais. La garantie est écrite et appliquée — pas de &quot;c&apos;est normal&quot; ou &quot;il faut repayer&quot;. Support 7j/7 par WhatsApp ou téléphone. Délai moyen d&apos;un formatage PC Maroc complet : 45 à 90 minutes selon votre connexion et l&apos;état de la machine. Vous payez uniquement après avoir validé le résultat. C&apos;est notre engagement : <strong>formatage PC Maroc</strong> légal, transparent et garanti.
            </p>
          </div>
        </section>

        {/* H2 4 : Témoignages Clients Formatage Casablanca — ~100 mots + 2 témoignages */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Témoignages clients formatage Casablanca
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Les retours de nos clients sur le <strong>formatage PC Casablanca</strong> et le formatage PC Maroc confirment que l&apos;offre à 350 DH avec Windows officiel et garantie 30 jours répond à un vrai besoin : un PC propre, rapide et légal, sans se déplacer.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <article className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-sm text-gray-500 mb-2">Youssef M., Directeur Commercial · Maarif</p>
                <p className="text-yellow-500 mb-3">★★★★★</p>
                <p className="text-gray-800 leading-relaxed">
                  &quot;Mon PC était devenu ingérable — démarrage en 3 minutes, freezes constants. J&apos;ai contacté AlloSupport pour un formatage PC Maroc. Intervention à distance en 50 minutes : Windows 11 officiel, Office, antivirus. Aujourd&apos;hui le PC démarre en 15 secondes. 350 DH payés après validation, aucune mauvaise surprise. Je recommande le formatage à distance à tous ceux qui ont un pc t9il.&quot;
                </p>
              </article>
              <article className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-sm text-gray-500 mb-2">Fatima L., Freelance · Sidi Maarouf</p>
                <p className="text-yellow-500 mb-3">★★★★★</p>
                <p className="text-gray-800 leading-relaxed">
                  &quot;J&apos;avais essayé un formatage à 150 DH sur Avito : Windows cracké, et au bout de deux mois des virus et des pubs partout. Avec AlloSupport, formatage PC Casablanca à 350 DH avec Windows officiel : sauvegarde sur Google Drive, installation propre, garantie 30 jours. Plus jamais les cracks. Pour un formatage casa sérieux, c&apos;est le bon prix.&quot;
                </p>
              </article>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Réponse sous 15 minutes par WhatsApp pour planifier votre formatage PC Maroc. Casablanca, Rabat, Marrakech, Fès, Agadir et tout le Maroc.
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 bg-emerald-600 text-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Formatage PC Maroc 350 DH : prêt à repartir sur une base propre ?
            </h2>
            <p className="text-emerald-50 mb-6">
              Windows officiel, Office, antivirus 6 mois, sauvegarde et garantie 30 jours. 100 % à distance. Intervention aujourd&apos;hui possible avant 20h.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappFormatage)}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 font-semibold px-7 py-3 rounded-xl shadow-lg hover:bg-emerald-50 transition w-full sm:w-auto"
              >
                WhatsApp
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 border border-white/80 text-white px-7 py-3 rounded-xl font-semibold hover:bg-emerald-500/20 transition w-full sm:w-auto"
              >
                ☎️ {PHONE_DISPLAY}
              </a>
            </div>
            <p className="mt-4 text-sm text-emerald-100">
              <Link href="/formatage-pc-casablanca" className="underline hover:text-white">
                Formatage PC Casablanca 350 DH — page dédiée
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
