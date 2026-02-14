import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test de Vitesse Internet Gratuit | AlloSupport.ma",
  description:
    "Testez la vitesse de votre connexion internet gratuitement. Mesurez le débit download, upload et la latence (ping). Test de vitesse internet au Maroc.",
  keywords: [
    "test vitesse internet maroc",
    "speed test maroc telecom",
    "débit 4g maroc",
    "test débit internet",
    "test connexion internet",
    "test internet maroc",
  ],
  openGraph: {
    title: "Test de Vitesse Internet Gratuit",
    description: "Testez la vitesse de votre connexion internet (download, upload, ping).",
    type: "website",
    url: "https://allosupport.ma/tools/speed-test",
  },
  twitter: {
    card: "summary_large_image",
    title: "Test de Vitesse Internet Gratuit",
    description: "Testez votre connexion internet.",
  },
  alternates: {
    canonical: "https://allosupport.ma/tools/speed-test",
  },
};

export default function SpeedTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Test de Vitesse Internet",
    applicationCategory: "NetworkApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "MAD",
    },
    description:
      "Test de vitesse internet gratuit pour mesurer le débit download, upload et la latence de votre connexion.",
    url: "https://allosupport.ma/tools/speed-test",
    provider: {
      "@type": "Organization",
      name: "AlloSupport.ma",
      url: "https://allosupport.ma",
    },
    featureList: [
      "Test de vitesse download",
      "Test de vitesse upload",
      "Mesure de latence (ping)",
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
