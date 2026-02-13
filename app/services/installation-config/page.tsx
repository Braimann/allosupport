import type { Metadata } from "next";
import ServiceDedicatedLayout from "@/components/services/ServiceDedicatedLayout";
import { serviceContent } from "./content";

const SITE_URL = "https://allosupport.ma";
const BRAND = "AlloSupport.ma";

export const metadata: Metadata = {
  title: serviceContent.metadata.title,
  description: serviceContent.metadata.description,
  keywords: serviceContent.metadata.keywords,
  alternates: { canonical: `${SITE_URL}/services/installation-config` },
  openGraph: {
    title: serviceContent.metadata.title,
    description: serviceContent.metadata.description,
    url: `${SITE_URL}/services/installation-config`,
    siteName: BRAND,
    type: "website",
    locale: "fr_MA",
    images: [{ url: `${SITE_URL}${serviceContent.metadata.ogImage}`, width: 1200, height: 630, alt: serviceContent.hero.image.alt }],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export default function InstallationConfigPage() {
  return (
    <ServiceDedicatedLayout
      content={serviceContent as unknown as Parameters<typeof ServiceDedicatedLayout>[0]["content"]}
      slug="installation-config"
      whatsappMessage="Bonjour AlloSupport, j'ai besoin d'aide pour installer un logiciel ou une imprimante. Détail : [décrire]"
      serviceNameForSchema="Installation logiciels et imprimantes Maroc"
    />
  );
}
