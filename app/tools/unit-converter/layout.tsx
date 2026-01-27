import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Convertisseur d'Unités Informatiques Gratuit | AlloSupport.ma",
  description:
    "Convertisseur d'unités informatiques gratuit : Bytes, KB, MB, GB, TB, PB. Convertissez facilement entre les unités de stockage informatique. Outil gratuit au Maroc.",
  keywords: [
    "convertisseur bytes",
    "convertisseur ko mo go",
    "convertisseur unités informatiques",
    "convertir bytes en ko",
    "convertir go en mo",
    "convertisseur stockage",
    "convertisseur données",
    "outil conversion maroc",
  ],
  openGraph: {
    title: "Convertisseur d'Unités Informatiques Gratuit",
    description: "Convertissez facilement entre Bytes, KB, MB, GB, TB et PB.",
    type: "website",
    url: "https://allosupport.ma/tools/unit-converter",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convertisseur d'Unités Informatiques",
    description: "Convertissez entre Bytes, KB, MB, GB, TB et PB.",
  },
  alternates: {
    canonical: "https://allosupport.ma/tools/unit-converter",
  },
};

export default function UnitConverterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Convertisseur d'Unités Informatiques",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "MAD",
    },
    description:
      "Convertisseur d'unités informatiques gratuit pour convertir entre Bytes, KB, MB, GB, TB et PB.",
    url: "https://allosupport.ma/tools/unit-converter",
    provider: {
      "@type": "Organization",
      name: "AlloSupport.ma",
      url: "https://allosupport.ma",
    },
    featureList: [
      "Conversion Bytes/KB/MB/GB/TB/PB",
      "Système binaire (base 2)",
      "Interface simple",
      "100% gratuit",
    ],
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
