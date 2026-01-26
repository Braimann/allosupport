import type { Metadata } from "next";
import "./globals.css";
import StickyWhatsApp from "@/components/conversion/StickyWhatsApp";
import { generateLocalBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "AlloSupport.ma | Dépannage Informatique à Distance au Maroc - Intervention 15 min",
  description:
    "Dépannage Informatique à Distance au Maroc. Particuliers & PME. Intervention en 15 min via WhatsApp. Satisfait ou Remboursé. PC lent, virus, panne ? Réparé en 15 minutes ou remboursé.",
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

// Generate LocalBusiness Schema using centralized SEO engine
const localBusinessSchema = generateLocalBusinessSchema({
  telephone: "+212-6-XX-XX-XX-XX",
  email: "contact@allosupport.ma",
  address: {
    addressLocality: "Casablanca",
    addressRegion: "Casablanca-Settat",
  },
});

// Update areaServed to include specific cities
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...localBusinessSchema,
      areaServed: [
        "Casablanca",
        "Rabat",
        "Marrakech",
        "Tanger",
        "Agadir",
        "Maroc",
      ],
      priceRange: "$$", // 250-450 MAD
    },
    {
      "@type": "Service",
      serviceType: "Dépannage Informatique à Distance",
      provider: {
        "@type": "LocalBusiness",
        name: "AlloSupport.ma",
      },
      areaServed: {
        "@type": "Country",
        name: "Morocco",
      },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://wa.me/2126XXXXXXXX",
        serviceType: "WhatsApp",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-gray-50">
        {children}
        <StickyWhatsApp />
      </body>
    </html>
  );
}
