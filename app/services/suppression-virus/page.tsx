import type { Metadata } from "next";
import ServiceDedicatedLayout from "@/components/services/ServiceDedicatedLayout";
import { serviceContent } from "./content";

const SITE_URL = "https://allosupport.ma";
const BRAND = "AlloSupport.ma";
const WHATSAPP_NUMBER = "212775237038";

export const metadata: Metadata = {
  title: serviceContent.metadata.title,
  description: serviceContent.metadata.description,
  keywords: serviceContent.metadata.keywords.slice(0, 5),
  alternates: {
    canonical: `${SITE_URL}/services/suppression-virus`,
  },
  openGraph: {
    title: serviceContent.metadata.title,
    description: serviceContent.metadata.description,
    url: `${SITE_URL}/services/suppression-virus`,
    siteName: BRAND,
    type: "website",
    locale: "fr_MA",
    images: [
      {
        url: `${SITE_URL}${serviceContent.metadata.ogImage}`,
        width: 1200,
        height: 630,
        alt: serviceContent.hero.image.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: serviceContent.metadata.title,
    description: serviceContent.metadata.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function SuppressionVirusPage() {
  const whatsappText = encodeURIComponent(
    `Bonjour AlloSupport, j'ai besoin du service "Suppression Virus" (Maroc). Mon problème : [décrire ici]`
  );
  const whatsappUrlMessage = `Bonjour AlloSupport, j'ai besoin du service \"Suppression Virus\". ${decodeURIComponent(whatsappText)}`;

  return (
    <ServiceDedicatedLayout
      content={serviceContent as unknown as Parameters<typeof ServiceDedicatedLayout>[0]["content"]}
      slug="suppression-virus"
      whatsappMessage={whatsappUrlMessage}
      serviceNameForSchema={serviceContent.hero.title}
    />
  );
}
