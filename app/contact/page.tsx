import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, MessageSquare, MapPin, Clock } from "lucide-react";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contactez AlloSupport | Dépannage Informatique Rapide au Maroc",
  description:
    "Besoin d'un dépannage informatique ? Contactez AlloSupport. Intervention sous 3h à Casablanca, Rabat et partout au Maroc. Devis gratuit immédiat.",
  alternates: {
    canonical: "https://allosupport.ma/contact",
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "LocalBusiness",
      "@id": "https://allosupport.ma",
      name: "AlloSupport Maroc",
      description:
        "Service de dépannage informatique à domicile et à distance au Maroc",
      url: "https://allosupport.ma",
      telephone: GOOGLE_BUSINESS.PHONE,
      email: "contact@allosupport.ma",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Service à domicile",
        addressLocality: "Casablanca",
        addressRegion: "Casablanca-Settat",
        postalCode: "20000",
        addressCountry: "MA",
      },
      areaServed: GOOGLE_BUSINESS.SERVICE_AREA.map((city) => ({
        "@type": "City",
        name: city,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://allosupport.ma",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: "https://allosupport.ma/contact",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quels sont vos délais d'intervention ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous intervenons sous 3 heures maximum pour les demandes urgentes.",
        },
      },
      {
        "@type": "Question",
        name: "Intervenez-vous à domicile ou à distance ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nous proposons les deux options : dépannage à distance et intervention à domicile.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main className="min-h-screen py-16 pt-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Contactez AlloSupport
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Dépannage informatique rapide au Maroc. Service à domicile et à
              distance. <strong>Intervention sous 3h</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href={`tel:${GOOGLE_BUSINESS.PHONE}`}
                className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Appeler maintenant</span>
              </a>
              <a
                href={GOOGLE_BUSINESS.WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h2 className="text-xl font-bold mb-4 text-gray-900">
                  Nos Coordonnées
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-semibold text-sm text-gray-500 uppercase">
                        Téléphone
                      </p>
                      <a
                        href={`tel:${GOOGLE_BUSINESS.PHONE}`}
                        className="text-lg font-bold text-blue-600 hover:underline"
                      >
                        {GOOGLE_BUSINESS.PHONE_FORMATTED}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold text-sm text-gray-500 uppercase">
                        WhatsApp
                      </p>
                      <a
                        href={GOOGLE_BUSINESS.WHATSAPP}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold text-green-600 hover:underline"
                      >
                        {GOOGLE_BUSINESS.PHONE_FORMATTED}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-orange-600 mt-1" />
                    <div>
                      <p className="font-semibold text-sm text-gray-500 uppercase">
                        Disponibilité
                      </p>
                      <p className="font-bold">7j/7 - 8h à 22h</p>
                      <p className="text-sm text-gray-500">
                        Intervention urgente sous 3h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-600 mt-1" />
                    <div>
                      <p className="font-semibold text-sm text-gray-500 uppercase">
                        Zone de service
                      </p>
                      <p className="font-bold">Tout le Maroc</p>
                      <p className="text-sm text-gray-500">
                        Casablanca, Rabat, Fès, Marrakech, Agadir, etc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box Info */}
              <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-lg">
                <h3 className="text-xl font-bold mb-3">Besoin d'aide ?</h3>
                <p className="mb-4 opacity-90">
                  Nos techniciens sont disponibles pour un diagnostic rapide par
                  téléphone ou à distance.
                </p>
                <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                  <p className="text-sm">
                    🚀 <strong>95%</strong> des pannes logicielles sont résolues
                    à distance en moins d'une heure.
                  </p>
                </div>
              </div>
            </div>

            {/* Form Container */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
