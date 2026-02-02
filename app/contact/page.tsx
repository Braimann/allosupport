import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, MessageSquare } from "lucide-react";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";
import GoogleBadge from "@/components/GoogleBadge";

export const metadata: Metadata = {
  title: "Contact - Dépannage à Domicile | AlloSupport Maroc",
  description: `Service à domicile dans ${GOOGLE_BUSINESS.SERVICE_AREA.join(", ")}. Appel ou WhatsApp: ${GOOGLE_BUSINESS.PHONE_FORMATTED}`,
  keywords: [
    "contact AlloSupport",
    "dépannage à domicile Maroc",
    "support informatique Casablanca",
    "WhatsApp AlloSupport",
  ],
  openGraph: {
    title: "Contact - Dépannage à Domicile | AlloSupport Maroc",
    description: "Service à domicile - Nous venons chez vous.",
    type: "website",
    url: "https://allosupport.ma/contact",
  },
  alternates: {
    canonical: "https://allosupport.ma/contact",
  },
};

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "ProfessionalService",
      name: "AlloSupport Maroc",
      url: "https://allosupport.ma",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: GOOGLE_BUSINESS.PHONE,
        contactType: "customer service",
        areaServed: "MA",
        availableLanguage: ["fr", "ar"],
      },
      areaServed: GOOGLE_BUSINESS.SERVICE_AREA.map((city) => ({
        "@type": "City",
        name: city,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="min-h-screen py-16 pt-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Contactez-Nous
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Service de dépannage à domicile - Nous venons chez vous !
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Coordonnées */}
            <div className="space-y-8">
              {/* Zones Intervention */}
              <div className="bg-blue-50 p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Zones d&apos;Intervention
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Nous intervenons à domicile dans toutes ces villes :
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {GOOGLE_BUSINESS.SERVICE_AREA.map((city) => (
                    <div
                      key={city}
                      className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="font-semibold text-gray-900">{city}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  💡 Service mobile - pas de déplacement nécessaire de votre
                  part
                </p>
              </div>

              {/* Téléphone */}
              <a
                href={`tel:${GOOGLE_BUSINESS.PHONE}`}
                className="flex items-center gap-4 bg-green-50 hover:bg-green-100 p-6 rounded-2xl transition group"
              >
                <div className="bg-green-600 p-4 rounded-xl group-hover:scale-110 transition">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Appelez-nous</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {GOOGLE_BUSINESS.PHONE_FORMATTED}
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    Cliquez pour appeler
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={GOOGLE_BUSINESS.WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#E7F8ED] hover:bg-[#D1F4DD] p-6 rounded-2xl transition group"
              >
                <div className="bg-[#25D366] p-4 rounded-xl group-hover:scale-110 transition">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">
                    WhatsApp Business
                  </div>
                  <div className="text-xl font-bold text-gray-900">
                    Message instantané
                  </div>
                  <div className="text-sm text-[#25D366] font-medium">
                    Réponse rapide garantie
                  </div>
                </div>
              </a>

              {/* Horaires */}
              <div className="bg-yellow-50 p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-yellow-600 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Horaires</h2>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Lundi - Samedi</span>
                    <span className="font-semibold">8h00 - 20h00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="font-semibold">10h00 - 18h00</span>
                  </li>
                  <li className="flex justify-between border-t border-yellow-200 pt-3 mt-3">
                    <span>Urgences</span>
                    <span className="font-semibold text-green-600">24/7 ⚡</span>
                  </li>
                </ul>
              </div>

              {/* Badge Google : invitation à laisser un avis (sans afficher de note/avis) */}
              <GoogleBadge variant="card" showCTA={true} inviteOnly />
            </div>

            {/* Formulaire Contact */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Demander un Devis Gratuit
              </h2>

              <form className="space-y-4" action="#" method="post">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Ville *
                  </label>
                  <select
                    required
                    name="city"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Sélectionnez votre ville</option>
                    {GOOGLE_BUSINESS.SERVICE_AREA.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Problème *
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Décrivez votre problème informatique..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition"
                >
                  Envoyer la Demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
