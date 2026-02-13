import type { Metadata } from "next";
import ServiceDedicatedLayout from "@/components/services/ServiceDedicatedLayout";
import { serviceContent } from "./content";

const SITE_URL = "https://allosupport.ma";
const BRAND = "AlloSupport.ma";

export const metadata: Metadata = {
  title: serviceContent.metadata.title,
  description: serviceContent.metadata.description,
  keywords: serviceContent.metadata.keywords.slice(0, 5),
  alternates: { canonical: `${SITE_URL}/services/recuperation-donnees` },
  openGraph: {
    title: serviceContent.metadata.title,
    description: serviceContent.metadata.description,
    url: `${SITE_URL}/services/recuperation-donnees`,
    siteName: BRAND,
    type: "website",
    locale: "fr_MA",
    images: [{ url: `${SITE_URL}${serviceContent.metadata.ogImage}`, width: 1200, height: 630, alt: serviceContent.hero.image.alt }],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export default function RecuperationDonneesPage() {
  return (
    <ServiceDedicatedLayout
      content={serviceContent as unknown as Parameters<typeof ServiceDedicatedLayout>[0]["content"]}
      slug="recuperation-donnees"
      whatsappMessage="Bonjour AlloSupport, j'ai perdu des fichiers / photos. J'ai besoin du service récupération de données. Contexte : [décrire]"
      serviceNameForSchema="Récupération de données Maroc"
    />
  );
}
