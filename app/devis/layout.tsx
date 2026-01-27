import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devis Gratuit - Calculateur de Prix | AlloSupport.ma",
  description:
    "Calculez le prix de votre intervention informatique en ligne. Devis gratuit et sans engagement pour dépannage PC, suppression virus, récupération données au Maroc.",
  keywords: [
    "devis dépannage informatique",
    "calculer prix support IT",
    "devis gratuit",
    "tarif dépannage PC",
    "prix intervention informatique",
    "devis informatique Maroc",
  ],
  openGraph: {
    title: "Devis Gratuit - Calculateur de Prix | AlloSupport.ma",
    description: "Calculez le prix de votre intervention informatique en ligne.",
    type: "website",
    url: "https://allosupport.ma/devis",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devis Gratuit - Calculateur de Prix",
    description: "Obtenez un devis gratuit pour votre intervention informatique.",
  },
  alternates: {
    canonical: "https://allosupport.ma/devis",
  },
};

export default function DevisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Calculateur de Devis Informatique",
    description:
      "Calculez gratuitement le prix de votre intervention informatique. Devis instantané et sans engagement.",
    provider: {
      "@type": "LocalBusiness",
      name: "AlloSupport.ma",
      url: "https://allosupport.ma",
    },
    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "MAD",
      description: "Devis gratuit",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  );
}
