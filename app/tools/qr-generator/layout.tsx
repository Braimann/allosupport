import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur de QR Code Gratuit | AlloSupport.ma",
  description:
    "Générateur de QR Code gratuit en ligne. Créez des QR codes pour URL, texte, Wi-Fi, téléphone, email. Téléchargez et partagez vos QR codes instantanément.",
  keywords: [
    "générateur qr code",
    "créer qr code",
    "qr code gratuit",
    "générateur qr code wifi",
    "qr code url",
    "qr code téléphone",
    "outil qr code",
  ],
  openGraph: {
    title: "Générateur de QR Code Gratuit",
    description: "Créez des QR codes pour URL, texte, Wi-Fi, téléphone, email.",
    type: "website",
    url: "https://allosupport.ma/tools/qr-generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Générateur de QR Code Gratuit",
    description: "Créez des QR codes instantanément.",
  },
  alternates: {
    canonical: "https://allosupport.ma/tools/qr-generator",
  },
};

export default function QRGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Générateur de QR Code",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "MAD",
    },
    description:
      "Générateur de QR Code gratuit pour créer des codes QR pour URL, texte, Wi-Fi, téléphone et email.",
    url: "https://allosupport.ma/tools/qr-generator",
    provider: {
      "@type": "Organization",
      name: "AlloSupport.ma",
      url: "https://allosupport.ma",
    },
    featureList: [
      "Génération QR Code URL",
      "Génération QR Code Wi-Fi",
      "Génération QR Code téléphone",
      "Génération QR Code email",
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
