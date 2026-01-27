import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur de Devis et Factures Gratuit | AlloSupport.ma",
  description:
    "Générateur gratuit de devis et factures en PDF. Créez des documents professionnels avec calcul automatique des totaux, TVA, et téléchargement instantané.",
  keywords: [
    "générateur devis",
    "générateur facture",
    "créer devis pdf",
    "créer facture pdf",
    "devis gratuit",
    "facture gratuite",
    "outil facturation",
  ],
  openGraph: {
    title: "Générateur de Devis et Factures Gratuit",
    description: "Créez des devis et factures professionnels en PDF gratuitement.",
    type: "website",
    url: "https://allosupport.ma/tools/invoice-generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Générateur de Devis et Factures Gratuit",
    description: "Créez des devis et factures en PDF.",
  },
  alternates: {
    canonical: "https://allosupport.ma/tools/invoice-generator",
  },
};

export default function InvoiceGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Générateur de Devis et Factures",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "MAD",
    },
    description:
      "Générateur gratuit de devis et factures en PDF. Créez des documents professionnels avec calcul automatique.",
    url: "https://allosupport.ma/tools/invoice-generator",
    provider: {
      "@type": "Organization",
      name: "AlloSupport.ma",
      url: "https://allosupport.ma",
    },
    featureList: [
      "Génération de devis PDF",
      "Génération de factures PDF",
      "Calcul automatique des totaux",
      "Gestion de la TVA",
      "Informations client et entreprise",
      "Téléchargement gratuit",
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
