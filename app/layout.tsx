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

// Schema @graph : LocalBusiness + ProfessionalService + WebSite (SEO local Maroc)
const WIKIDATA_ID = "Q138640787";
const SCHEMA_REVIEW_COUNT = "14"; // À vérifier sur Google Business Profile

const schemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://allosupport.ma/#organization",
      name: "AlloSupport.ma",
      alternateName: [
        "AlloSupport",
        "Allo Support Maroc",
        "AlloSupport Dépannage Informatique",
      ],
      slogan:
        "Votre technicien informatique à distance au Maroc — Paiement après résultat",
      description:
        "AlloSupport.ma est le service de dépannage informatique à distance de référence au Maroc. Intervention en moins de 15 minutes via WhatsApp pour les particuliers et PME à Casablanca, Rabat, Marrakech, Fès, Agadir et partout au Maroc. Services : formatage PC, réinstallation Windows, suppression virus, récupération de données, installation antivirus Kaspersky et Bitdefender, support informatique PME, infogérance, installation imprimante. Tarifs transparents dès 150 DH. Paiement uniquement après résolution du problème.",
      url: "https://allosupport.ma",
      logo: {
        "@type": "ImageObject",
        url: "https://allosupport.ma/logo.png",
        width: 200,
        height: 60,
      },
      image: {
        "@type": "ImageObject",
        url: "https://allosupport.ma/og-image.jpg",
        width: 1200,
        height: 630,
      },
      telephone: GOOGLE_BUSINESS.PHONE,
      priceRange: "150 MAD - 999 MAD",
      currenciesAccepted: "MAD",
      paymentAccepted: "Cash, Virement bancaire, WhatsApp Pay",
      founder: {
        "@type": "Person",
        name: "Boumaidoum Ibrahim",
        jobTitle: "Fondateur & Ingénieur en informatique",
        knowsAbout: [
          "Dépannage informatique",
          "Sécurité informatique",
          "Récupération de données",
          "Support PME Maroc",
        ],
      },
      foundingDate: "2026",
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: 10,
      },
      knowsAbout: [
        "Dépannage informatique à distance",
        "Formatage PC et réinstallation Windows",
        "Suppression de virus et malwares",
        "Récupération de données disque dur SSD",
        "Installation et configuration antivirus",
        "Support informatique PME Maroc",
        "Infogérance PME Maroc",
        "Installation imprimante WiFi réseau",
        "Cybersécurité PME",
        "Conformité CNDP Maroc Loi 09-08",
        "Maintenance informatique préventive",
        "Installation Windows 10 Windows 11",
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "Partenaire Kaspersky Maroc",
          credentialCategory: "certification",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Partenaire Bitdefender Maroc",
          credentialCategory: "certification",
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Laboratoire Partenaire RECOVEO",
          credentialCategory: "certification",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services informatiques AlloSupport.ma",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Dépannage informatique à distance",
              url: "https://allosupport.ma/depannage-informatique",
            },
            price: "150",
            priceCurrency: "MAD",
            description: "Dépannage PC à distance en moins de 15 minutes",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Formatage PC et réinstallation Windows",
              url: "https://allosupport.ma/formatage-pc",
            },
            price: "350",
            priceCurrency: "MAD",
            description: "Formatage complet avec Windows officiel inclus",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Suppression virus et antivirus",
              url: "https://allosupport.ma/antivirus-maroc",
            },
            price: "150",
            priceCurrency: "MAD",
            description: "Nettoyage virus malware et installation antivirus",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Récupération de données Maroc",
              url: "https://allosupport.ma/recuperation-donnees",
            },
            price: "300",
            priceCurrency: "MAD",
            description: "Récupération données disque dur SSD clé USB",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Installation imprimante Maroc",
              url: "https://allosupport.ma/installation-imprimante-maroc",
            },
            price: "150",
            priceCurrency: "MAD",
            description: "Installation configuration imprimante WiFi USB réseau",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Support informatique PME Maroc",
              url: "https://allosupport.ma/support-pme",
            },
            description: "Support IT mensuel pour PME au Maroc",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Infogérance PME Maroc",
              url: "https://allosupport.ma/infogerance-pme-maroc",
            },
            description: "Infogérance complète parc informatique PME Maroc",
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: SCHEMA_REVIEW_COUNT,
        bestRating: "5",
        worstRating: "1",
      },
      address: {
        "@type": "PostalAddress",
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
        { "@type": "City", name: "Meknès" },
        { "@type": "City", name: "Oujda" },
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
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: GOOGLE_BUSINESS.PHONE_FIXE,
          contactType: "customer service",
          areaServed: "MA",
          availableLanguage: ["French", "Arabic"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            opens: "08:00",
            closes: "23:00",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
          },
        },
        {
          "@type": "ContactPoint",
          telephone: GOOGLE_BUSINESS.PHONE,
          contactType: "technical support",
          contactOption: "TollFree",
          areaServed: "MA",
          availableLanguage: ["French", "Arabic"],
        },
      ],
      sameAs: [
        "https://www.facebook.com/AlloSupportMaroc",
        "https://www.instagram.com/allosupport.ma",
        "https://www.linkedin.com/company/allosupport-ma",
        GOOGLE_BUSINESS.SHARE_URL,
        "https://g.page/r/CTT4BBV6QaxrEBM/review",
        `https://www.wikidata.org/wiki/${WIKIDATA_ID}`,
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://allosupport.ma/#website",
      name: "AlloSupport.ma",
      url: "https://allosupport.ma",
      description:
        "Dépannage informatique à distance au Maroc. Intervention en 15 min via WhatsApp. Paiement après résultat.",
      inLanguage: "fr-MA",
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
        {/* 1. Critical CSS above-the-fold (hero) — évite FOUC avant .css */}
        <style
          dangerouslySetInnerHTML={{
            __html: `/* Tailwind hero: text-4xl, md:text-5xl, lg:text-6xl, font-bold, leading-tight, bg-gradient-to-r, flex, items-center, justify-center */
.text-4xl{font-size:2.25rem;line-height:2.5rem}
@media(min-width:768px){.md\\:text-5xl{font-size:3rem;line-height:1}}
@media(min-width:1024px){.lg\\:text-6xl{font-size:3.75rem;line-height:1}}
.font-bold{font-weight:700}
.leading-tight{line-height:1.25}
.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}
.flex{display:flex}
.items-center{align-items:center}
.justify-center{justify-content:center}`,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* 2. dns-prefetch uniquement (pas preconnect) : GTM et Clarity chargés après LCP, pas above-the-fold */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        {/* 3. Pas de preconnect Firebase/ytimg/firestore — non utilisés above-the-fold ; next/font sert les polices en même origine (pas de gstatic). Si polices CDN externes : preconnect + crossOrigin="anonymous" sur fonts.gstatic.com */}
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
      </body>
    </html>
  );
}
