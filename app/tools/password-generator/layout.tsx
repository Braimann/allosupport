import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur de Mots de Passe Sécurisé Gratuit | AlloSupport.ma",
  description:
    "Générateur de mots de passe sécurisé gratuit. Créez des mots de passe forts avec majuscules, minuscules, chiffres et symboles. Outil de sécurité en ligne au Maroc.",
  keywords: [
    "générateur mot de passe",
    "générateur mot de passe sécurisé",
    "créer mot de passe fort",
    "générateur password",
    "mot de passe aléatoire",
    "générateur mot de passe gratuit",
    "sécurité informatique",
    "cybersécurité maroc",
  ],
  openGraph: {
    title: "Générateur de Mots de Passe Sécurisé Gratuit",
    description: "Créez des mots de passe forts et sécurisés en quelques clics.",
    type: "website",
    url: "https://allosupport.ma/tools/password-generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Générateur de Mots de Passe Sécurisé",
    description: "Créez des mots de passe forts et sécurisés.",
  },
  alternates: {
    canonical: "https://allosupport.ma/tools/password-generator",
  },
};

export default function PasswordGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Générateur de Mots de Passe",
    applicationCategory: "SecurityApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "MAD",
    },
    description:
      "Générateur de mots de passe sécurisé gratuit pour créer des mots de passe forts avec options personnalisables.",
    url: "https://allosupport.ma/tools/password-generator",
    provider: {
      "@type": "Organization",
      name: "AlloSupport.ma",
      url: "https://allosupport.ma",
    },
    featureList: [
      "Génération de mots de passe sécurisés",
      "Options personnalisables",
      "Indicateur de force",
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
