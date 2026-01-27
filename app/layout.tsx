import type { Metadata } from "next";
import "./globals.css";
import StickyWhatsApp from "@/components/conversion/StickyWhatsApp";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SchemaLocalBusiness from "@/components/SchemaLocalBusiness";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "AlloSupport.ma | Dépannage Informatique à Distance Maroc (15 min)",
  description:
    "Leader du dépannage informatique à distance au Maroc. PC lent, Virus, Maintenance PME. Intervention en 15 min via WhatsApp. Satisfait ou Remboursé.",
  keywords: [
    "dépannage informatique Maroc",
    "support informatique à distance",
    "réparation PC WhatsApp",
    "dépannage PC urgent Maroc",
    "technicien informatique distance",
    "PC lent réparation",
    "virus ordinateur Maroc",
    "panne PC assistance",
    "maintenance informatique PME",
    "support IT télétravail",
    "dépannage informatique distance",
    "réparation PC Maroc",
    "support IT Casablanca",
    "maintenance PME Maroc",
  ],
  authors: [{ name: "AlloSupport.ma" }],
  creator: "AlloSupport.ma",
  publisher: "AlloSupport.ma",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://allosupport.ma",
    siteName: "AlloSupport.ma",
    title: "AlloSupport.ma | Dépannage Informatique à Distance - Intervention 15 min",
    description:
      "Dépannage Informatique à Distance au Maroc. Intervention en 15 min via WhatsApp. Satisfait ou Remboursé.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AlloSupport.ma | Dépannage IT à Distance",
    description: "Intervention en 15 min. Satisfait ou Remboursé.",
  },
};

// Generate LocalBusiness + ProfessionalService Schema
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      name: "AlloSupport.ma",
      description: "Leader du dépannage informatique à distance au Maroc. Intervention en 15 min via WhatsApp.",
      url: "https://allosupport.ma",
      telephone: "+212 770 30 39 40",
      email: "contact@allosupport.ma",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Casablanca",
        addressRegion: "Casablanca-Settat",
        addressCountry: "MA",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "Morocco",
        },
        {
          "@type": "City",
          name: "Casablanca",
        },
        {
          "@type": "City",
          name: "Rabat",
        },
      ],
      priceRange: "150 DH - 500 DH",
      openingHours: "Mo-Su 00:00-23:59",
      serviceType: "Dépannage Informatique à Distance",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <SchemaLocalBusiness />
      </head>
      <body className="antialiased bg-gray-50">
        <AuthProvider>
          {children}
          <StickyWhatsApp />
          <WhatsAppFloat />
        </AuthProvider>
      </body>
    </html>
  );
}
