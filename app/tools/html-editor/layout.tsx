import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Éditeur HTML en Ligne Gratuit | AlloSupport.ma",
  description:
    "Éditeur HTML, CSS et JavaScript en ligne gratuit. Testez votre code en temps réel, téléchargez vos fichiers HTML. Outil gratuit pour développeurs web au Maroc.",
  keywords: [
    "éditeur html en ligne",
    "éditeur html gratuit",
    "éditeur css javascript",
    "test code html",
    "éditeur code en ligne",
    "html editor online",
    "code editor gratuit",
    "éditeur web",
    "éditeur html maroc",
    "outil développeur web",
  ],
  openGraph: {
    title: "Éditeur HTML en Ligne Gratuit | AlloSupport.ma",
    description:
      "Éditeur HTML, CSS et JavaScript en ligne gratuit. Testez votre code en temps réel.",
    type: "website",
    url: "https://allosupport.ma/tools/html-editor",
  },
  twitter: {
    card: "summary_large_image",
    title: "Éditeur HTML en Ligne Gratuit",
    description: "Testez votre code HTML, CSS et JavaScript en temps réel.",
  },
  alternates: {
    canonical: "https://allosupport.ma/tools/html-editor",
  },
};

export default function HTMLEditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Add structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Éditeur HTML en Ligne",
    applicationCategory: "WebApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "MAD",
    },
    description:
      "Éditeur HTML, CSS et JavaScript en ligne gratuit pour tester et développer du code web en temps réel.",
    url: "https://allosupport.ma/tools/html-editor",
    provider: {
      "@type": "Organization",
      name: "AlloSupport.ma",
      url: "https://allosupport.ma",
    },
    featureList: [
      "Éditeur HTML/CSS/JavaScript",
      "Aperçu en temps réel",
      "Téléchargement de fichiers",
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
