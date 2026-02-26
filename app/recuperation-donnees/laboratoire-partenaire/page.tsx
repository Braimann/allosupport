import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";

const WHATSAPP_DIAGNOSTIC = `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent(
  "Bonjour, mon disque dur semble en panne physique. Je souhaite un diagnostic (150 DH) et éventuellement un accompagnement laboratoire."
)}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AlloSupport.ma",
  description:
    "Partenaire Alliance officiel Recoveo — récupération de données certifiée ISO 9001 au Maroc",
  url: "https://allosupport.ma/recuperation-donnees/laboratoire-partenaire",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Casablanca",
    addressCountry: "MA",
  },
  award: "Partenaire Alliance Recoveo — Laboratoire certifié ISO 9001",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Récupération de données",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Accompagnement Laboratoire Recoveo",
        price: "499",
        priceCurrency: "MAD",
      },
    ],
  },
};

export const metadata: Metadata = {
  title:
    "Partenaire Alliance Recoveo Maroc — Récupération Données Certifiée ISO 9001 | AlloSupport.ma",
  description:
    "AlloSupport.ma est Partenaire Alliance officiel Recoveo, laboratoire certifié ISO 9001, salle blanche ISO 5 classe 100, filiale Casablanca. Paiement en dirhams MAD.",
  alternates: {
    canonical: "https://allosupport.ma/recuperation-donnees/laboratoire-partenaire",
  },
  openGraph: {
    title: "Partenaire Alliance Recoveo — AlloSupport.ma Maroc",
    description: "Récupération données salle blanche certifiée ISO 5 au Maroc.",
    images: ["https://allosupport.ma/partenaires/recoveo-partenaire-alliance-maroc.webp"],
    url: "https://allosupport.ma/recuperation-donnees/laboratoire-partenaire",
  },
};

export default function LaboratoirePartenairePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* SECTION 1 — Hero avec badge (sans lien wrapper) */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Récupération de données en salle blanche au Maroc — Partenaire Alliance Recoveo
            </h1>
            <div className="flex justify-center my-8">
              <Image
                src="/partenaires/recoveo-partenaire-alliance-maroc.webp"
                alt="Badge officiel Partenaire Alliance Recoveo — AlloSupport.ma laboratoire certifié Maroc"
                width={200}
                height={200}
                priority
                className="rounded-xl shadow-md"
              />
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
              Qui est Recoveo ?
            </h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed mb-8">
              <strong>Recoveo</strong> est le laboratoire n°1 français de récupération de données,
              certifié ISO 9001, avec une salle blanche ISO 5 classe 100 et plus de 20 ans
              d&apos;expérience. <strong>Recoveo</strong> dispose d&apos;une filiale à Casablanca
              et traite les dossiers marocains avec paiement en dirhams.
            </p>
          </div>
        </section>

        {/* SECTION 2 — Quand appeler le labo ? */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Quand avez-vous besoin d&apos;un laboratoire certifié ?
            </h2>
            <ul className="list-disc list-inside space-y-3 text-slate-700">
              <li>Disque dur qui claque ou émet des bruits anormaux</li>
              <li>SSD non détecté par le BIOS</li>
              <li>Support tombé, choc physique ou dégât d&apos;eau</li>
              <li>Panne électronique de la carte contrôleur</li>
              <li>Récupération NAS, RAID ou serveur</li>
            </ul>
          </div>
        </section>

        {/* SECTION 3 — Le processus avec AlloSupport.ma */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Le processus avec AlloSupport.ma
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-slate-700">
              <li>Contact WhatsApp — Diagnostic : 150 DH</li>
              <li>Panne physique confirmée → préparation dossier Recoveo</li>
              <li>Expédition vers le laboratoire (transporteur Casablanca)</li>
              <li>Traitement salle blanche ISO 5 par les experts Recoveo</li>
              <li>Retour données chiffrées + règlement en dirhams</li>
            </ol>
          </div>
        </section>

        {/* SECTION 4 — Laboratoire certifié vs labo informel */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 overflow-x-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Laboratoire certifié vs labo informel
            </h2>
            <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200">
                    <th className="py-4 px-4 font-bold text-slate-900">Critère</th>
                    <th className="py-4 px-4 font-bold text-slate-900">
                      Recoveo via AlloSupport
                    </th>
                    <th className="py-4 px-4 font-bold text-slate-900">Labo informel</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium">Salle blanche</td>
                    <td className="py-3 px-4">ISO 5 classe 100</td>
                    <td className="py-3 px-4">Aucune</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium">Certification</td>
                    <td className="py-3 px-4">ISO 9001</td>
                    <td className="py-3 px-4">Non certifié</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium">Données chiffrées</td>
                    <td className="py-3 px-4">Oui</td>
                    <td className="py-3 px-4">Non</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium">Traçabilité</td>
                    <td className="py-3 px-4">Dossier numéroté</td>
                    <td className="py-3 px-4">Aucune</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Paiement en dirhams</td>
                    <td className="py-3 px-4">Oui</td>
                    <td className="py-3 px-4">Oui</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 5 — CTA final */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Votre disque est en panne physique ?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_DIAGNOSTIC}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition"
              >
                Diagnostic WhatsApp — 150 DH
              </a>
              <a
                href={`tel:${GOOGLE_BUSINESS.PHONE}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-700 text-slate-700 hover:bg-slate-50 font-bold px-8 py-4 rounded-xl transition"
              >
                Appeler : {GOOGLE_BUSINESS.PHONE_FORMATTED}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
