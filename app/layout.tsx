import type { Metadata } from "next";
import "./globals.css";
import StickyWhatsApp from "@/components/conversion/StickyWhatsApp";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";
// FIREBASE AUTH DÉSACTIVÉ - Performance optimization (LCP/FCP)
// import { lazy, Suspense } from "react";
// const AuthProviderLazy = lazy(() => import("@/context/AuthProviderLazy"));
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import MicrosoftClarity from "@/components/analytics/MicrosoftClarity";
import ScrollTracker from "@/components/analytics/ScrollTracker";

export const metadata: Metadata = {
  metadataBase: new URL("https://allosupport.ma"),
  alternates: {
    canonical: "https://allosupport.ma",
  },
  title: "AlloSupport.ma | Dépannage Informatique à Distance Maroc (15 min)",
  description:
    "Leader du dépannage informatique à distance au Maroc. PC lent, Virus, Maintenance PME. Siège Casablanca. Intervention en 15 min via WhatsApp. Satisfait ou Remboursé.",
  keywords: [
    "dépannage informatique Maroc",
    "dépannage informatique casablanca",
    "réparation pc casablanca maroc",
    "allosupport casablanca",
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
      name: "AlloSupport Maroc",
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
    // 2. WebSite
    {
      "@type": "WebSite",
      "@id": "https://allosupport.ma/#website",
      name: "AlloSupport Maroc",
      url: "https://allosupport.ma",
      description:
        "Dépannage informatique à distance au Maroc. Intervention en 15 min via WhatsApp. Satisfait ou Remboursé.",
      publisher: { "@id": "https://allosupport.ma/#organization" },
    },
    // 3. FAQPage (rich results FAQ sur la home)
    {
      "@type": "FAQPage",
      "@id": "https://allosupport.ma/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Intervenez-vous partout au Maroc ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui, notre dépannage à distance fonctionne partout au Maroc via TeamViewer. Vous avez uniquement besoin d'une connexion Internet. Nous intervenons à Casablanca, Rabat, Marrakech, Tanger, Fès, Agadir et dans toutes les villes.",
          },
        },
        {
          "@type": "Question",
          name: "Quel est le prix d'un dépannage informatique ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "À partir de 150 Dhs pour un dépannage simple (suppression virus, optimisation PC). Un formatage avec installation Windows coûte 250 Dhs. Le diagnostic est gratuit. Paiement après réparation.",
          },
        },
        {
          "@type": "Question",
          name: "C'est quoi le dépannage à distance ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "On prend la main sur votre PC à distance via un logiciel sécurisé (TeamViewer). Vous voyez tout ce que fait le technicien en direct. Aucun déplacement : vous restez chez vous, l'intervention dure 15 à 60 minutes.",
          },
        },
        {
          "@type": "Question",
          name: "Y a-t-il une garantie ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Satisfait ou Remboursé. Vous payez uniquement après que le problème soit résolu. Si nous ne parvenons pas à réparer, vous ne payez rien. Garantie 7 à 30 jours selon le service.",
          },
        },
      ],
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
        {/* Critical CSS inline pour LCP < 2.5s. Ne pas ajouter <link onLoad="..."> : onLoad doit être une fonction React, pas une string. */}
        <style dangerouslySetInnerHTML={{
          __html: `
            *{box-sizing:border-box;margin:0;padding:0}
            html{scroll-behavior:smooth}
            body{font-family:'Poppins',system-ui,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#f9fafb}
            header{position:fixed;top:0;left:0;right:0;z-index:50;background:rgba(255,255,255,0.95);backdrop-filter:blur(10px);border-bottom:1px solid rgba(0,0,0,0.1)}
            nav{max-width:1280px;margin:0 auto;padding:0 1rem;display:flex;align-items:center;justify-content:space-between;height:4rem}
            .hero-section{position:relative;min-height:100vh;display:flex;align-items:center;padding-top:7rem;padding-bottom:5rem;background:linear-gradient(135deg,#1e293b 0%,#0f172a 50%,#1e293b 100%);overflow:hidden}
            .hero-content{max-width:1280px;margin:0 auto;padding:0 1rem;width:100%}
            .hero-title{font-size:clamp(2rem,5vw,3.5rem);font-weight:800;line-height:1.2;color:#fff;margin-bottom:1.5rem}
            .hero-subtitle{font-size:clamp(1rem,2vw,1.25rem);color:rgba(255,255,255,0.9);margin-bottom:2rem;line-height:1.6}
            .cta-button{display:inline-flex;align-items:center;gap:0.5rem;background:#22c55e;color:#fff;font-weight:700;padding:1rem 2rem;border-radius:0.75rem;text-decoration:none;transition:all 0.3s;box-shadow:0 10px 25px rgba(34,197,94,0.3)}
            .cta-button:hover{background:#16a34a;transform:translateY(-2px);box-shadow:0 15px 35px rgba(34,197,94,0.4)}
          `
        }} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        
        {/* Preconnect critiques - réduction LCP/FCP (max 4 preconnect) */}
        <link rel="preconnect" href="https://supporttechnique-84e72.firebaseapp.com" />
        <link rel="preconnect" href="https://firestore.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        
        {/* Preload fonts critiques pour LCP */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaGraph),
          }}
        />
      </head>
      <body className="antialiased bg-gray-50">
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
