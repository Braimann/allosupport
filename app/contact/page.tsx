import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { MapPin, Mail, MessageCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contactez AlloSupport.ma | Support Informatique au Maroc",
  description:
    "Contactez AlloSupport.ma pour votre dépannage informatique au Maroc. Intervention en 15 minutes, devis gratuit, support 24/7. Casablanca, Rabat, Marrakech.",
  keywords: [
    "contact AlloSupport",
    "support informatique Maroc",
    "dépannage PC Casablanca",
    "assistance informatique",
    "devis gratuit informatique",
    "contact IT Maroc",
  ],
  openGraph: {
    title: "Contactez AlloSupport.ma | Support IT au Maroc",
    description: "Intervention en 15 minutes. Devis gratuit. Support 24/7.",
    type: "website",
    url: "https://allosupport.ma/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contactez AlloSupport.ma",
    description: "Support informatique au Maroc - Intervention rapide",
  },
  alternates: {
    canonical: "https://allosupport.ma/contact",
  },
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "contact@allosupport.ma",
    link: "mailto:contact@allosupport.ma",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "Disponible 24/7",
    link: "https://wa.me/2126XXXXXXXX?text=Bonjour AlloSupport, j'ai besoin d'aide",
  },
  {
    icon: MapPin,
    title: "Adresse",
    content: "Casablanca, Maroc",
    link: null,
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "24h/7j - Intervention rapide",
    link: null,
  },
];

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Organization",
      name: "AlloSupport.ma",
      url: "https://allosupport.ma",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+212-6-XX-XX-XX-XX",
        contactType: "Support technique",
        areaServed: "MA",
        availableLanguage: ["French", "Arabic", "English"],
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Casablanca",
        addressRegion: "Casablanca-Settat",
        addressCountry: "MA",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl mb-6 shadow-lg">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contactez AlloSupport.ma
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Besoin d'aide ? Notre équipe est disponible 24h/7j pour répondre à vos questions et intervenir rapidement.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, idx) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith("http") ? "_blank" : undefined}
                      rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-700">{info.content}</p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact Form Section */}
          <Contact />

          {/* Additional Info */}
          <div className="mt-16 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Intervention en 15 minutes maximum
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Que vous soyez à Casablanca, Rabat, Marrakech ou ailleurs au Maroc, notre équipe intervient rapidement pour résoudre vos problèmes informatiques.
            </p>
            <a
              href="https://wa.me/2126XXXXXXXX?text=Bonjour AlloSupport, j'ai besoin d'aide"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-full transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Contacter via WhatsApp
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
