// Metadata et canonical définis dans page.tsx (generateMetadata)

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
