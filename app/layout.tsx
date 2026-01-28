import type { Metadata } from "next";
import "./globals.css";
import StickyWhatsApp from "@/components/conversion/StickyWhatsApp";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SchemaLocalBusiness from "@/components/SchemaLocalBusiness";
import { AuthProvider } from "@/context/AuthContext";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import ScrollTracker from "@/components/analytics/ScrollTracker";

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
        {/* Critical CSS inline pour LCP < 2.5s */}
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
        
        {/* Preconnect critiques (DNS lookup) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
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
        
        <SchemaLocalBusiness />
      </head>
      <body className="antialiased bg-gray-50">
        <GoogleAnalytics />
        <AuthProvider>
          {children}
          <StickyWhatsApp />
          <WhatsAppFloat />
          <ScrollTracker />
        </AuthProvider>
      </body>
    </html>
  );
}
