import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outils Gratuits en Ligne | AlloSupport.ma",
  description:
    "Outils gratuits en ligne pour développeurs et utilisateurs : Éditeur HTML/CSS/JS, Générateur de mots de passe sécurisé, Test de vitesse internet, Convertisseur d'unités informatiques. Tous nos outils sont 100% gratuits.",
  keywords: [
    "outils gratuits en ligne",
    "outils développeur web",
    "éditeur html gratuit",
    "générateur mot de passe",
    "test vitesse internet",
    "convertisseur unités",
    "outils informatiques gratuits",
    "outils web maroc",
  ],
  openGraph: {
    title: "Outils Gratuits en Ligne | AlloSupport.ma",
    description:
      "Outils gratuits pour développeurs et utilisateurs : Éditeur HTML, Générateur de mots de passe, Test de vitesse, Convertisseur d'unités.",
    type: "website",
    url: "https://allosupport.ma/tools",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outils Gratuits en Ligne",
    description: "Outils gratuits pour développeurs et utilisateurs.",
  },
  alternates: {
    canonical: "https://allosupport.ma/tools",
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Outils Gratuits en Ligne",
    description: "Collection d'outils gratuits pour développeurs et utilisateurs",
    itemListElement: [
      {
        "@type": "SoftwareApplication",
        position: 1,
        name: "Éditeur HTML",
        url: "https://allosupport.ma/tools/html-editor",
      },
      {
        "@type": "SoftwareApplication",
        position: 2,
        name: "Générateur de Mots de Passe",
        url: "https://allosupport.ma/tools/password-generator",
      },
      {
        "@type": "SoftwareApplication",
        position: 3,
        name: "Test de Vitesse Internet",
        url: "https://allosupport.ma/tools/speed-test",
      },
      {
        "@type": "SoftwareApplication",
        position: 4,
        name: "Convertisseur d'Unités",
        url: "https://allosupport.ma/tools/unit-converter",
      },
      {
        "@type": "SoftwareApplication",
        position: 5,
        name: "Générateur QR Code",
        url: "https://allosupport.ma/tools/qr-generator",
      },
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
