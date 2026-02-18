import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import StickyWhatsApp from "@/components/conversion/StickyWhatsApp";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import MicrosoftClarity from "@/components/analytics/MicrosoftClarity";
import ScrollTracker from "@/components/analytics/ScrollTracker";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://allosupport.ma"),
  alternates: {
    canonical: "https://allosupport.ma",
  },
  title: "Dépannage Informatique Maroc | Réparation PC 250 DH | AlloSupport",
  description:
    "Dépannage informatique à distance au Maroc dès 250 DH. PC lent, virus, formatage, maintenance PME. Technicien en 15 min via WhatsApp. Paiement après résultat.",
  authors: [{ name: "AlloSupport.ma" }],
  creator: "AlloSupport.ma",
  publisher: "AlloSupport.ma",
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://allosupport.ma",
    siteName: "AlloSupport.ma",
    title: "Dépannage Informatique Maroc | Réparation PC 250 DH | AlloSupport",
    description:
      "Dépannage informatique à distance au Maroc dès 250 DH. Technicien en 15 min. Paiement après résultat.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dépannage Informatique Maroc | Réparation PC 250 DH",
    description: "Réparation PC à distance au Maroc dès 250 DH. Technicien en 15 min. Paiement après résultat.",
  },
};

// Schema @graph All-in-One : LocalBusiness + WebSite + FAQPage (SEO local Maroc)
// LocalBusiness utilisé (ComputerRepairService non reconnu par tous les validateurs ; publisher WebSite exige Organization/LocalBusiness)
const hasReviews =
  GOOGLE_BUSINESS.HAS_REVIEWS &&
  parseInt(GOOGLE_BUSINESS.REVIEW_COUNT, 10) > 0;

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. LocalBusiness (réparation informatique) — type reconnu pour publisher WebSite
    {
      "@type": "LocalBusiness",
      "@id": "https://allosupport.ma/#organization",
      name: "AlloSupport.ma",
      description:
        "Dépannage informatique à distance au Maroc. Intervention rapide à Casablanca, Rabat, Marrakech, Tanger. PC lent, virus, installation Windows. Paiement après réparation.",
      url: "https://allosupport.ma",
      logo: "https://allosupport.ma/logo.png",
      image: "https://allosupport.ma/og-image.jpg",
      telephone: GOOGLE_BUSINESS.PHONE,
      priceRange: "150 MAD - 500 MAD",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Service à domicile",
        addressLocality: "Casablanca",
        addressRegion: "Casablanca-Settat",
        postalCode: "20000",
        addressCountry: "MA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.5731,
        longitude: -7.5898,
      },
      areaServed: [
        { "@type": "Country", name: "Morocco" },
        { "@type": "City", name: "Casablanca" },
        { "@type": "City", name: "Rabat" },
        { "@type": "City", name: "Marrakech" },
        { "@type": "City", name: "Fès" },
        { "@type": "City", name: "Agadir" },
        { "@type": "City", name: "Tanger" },
      ],
      openingHoursSpecification: {
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
        opens: "08:00",
        closes: "23:00",
      },
      sameAs: [
        "https://www.facebook.com/AlloSupportMaroc",
        "https://www.instagram.com/allosupport.ma",
        GOOGLE_BUSINESS.SHARE_URL,
        "https://g.page/r/CTT4BBV6QaxrEBM/review",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: GOOGLE_BUSINESS.PHONE,
        contactType: "customer service",
        availableLanguage: ["fr", "ar"],
        areaServed: "MA",
      },
      ...(hasReviews
        ? {
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: GOOGLE_BUSINESS.RATING,
              reviewCount: GOOGLE_BUSINESS.REVIEW_COUNT,
              bestRating: "5",
              worstRating: "1",
            },
          }
        : {}),
    },
    // 2. WebSite + SearchAction (Sitelinks Search Box)
    {
      "@type": "WebSite",
      "@id": "https://allosupport.ma/#website",
      name: "AlloSupport.ma",
      url: "https://allosupport.ma",
      description:
        "Dépannage informatique à distance au Maroc. Intervention en 15 min via WhatsApp. Satisfait ou Remboursé.",
      publisher: { "@id": "https://allosupport.ma/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://allosupport.ma/blog?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
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
    <html lang="fr" className={poppins.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://supporttechnique-84e72.firebaseapp.com" />
        <link rel="preconnect" href="https://firestore.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph),
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased bg-gray-50`} suppressHydrationWarning>
        {children}
        <StickyWhatsApp />
        <WhatsAppFloat />
        <ScrollTracker />
        {/* Analytics chargés après le contenu principal (lazyOnload) pour ne pas bloquer LCP/FCP */}
        <GoogleAnalytics />
        <MicrosoftClarity />
        {/* FIREBASE AUTH DÉSACTIVÉ - Performance optimization - Réactivation: décommenter ci-dessous et réimporter lazy, Suspense, AuthProviderLazy, ErrorBoundary
        <ErrorBoundary fallback={<>{children}<StickyWhatsApp /><WhatsAppFloat /><ScrollTracker /></>}>
          <Suspense fallback={<>{children}<StickyWhatsApp /><WhatsAppFloat /><ScrollTracker /></>}>
            <AuthProviderLazy>
              {children}
              <StickyWhatsApp />
              <WhatsAppFloat />
              <ScrollTracker />
            </AuthProviderLazy>
          </Suspense>
        </ErrorBoundary>
        */}
      </body>
    </html>
  );
}
