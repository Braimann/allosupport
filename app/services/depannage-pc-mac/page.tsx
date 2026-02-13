import type { Metadata } from "next";
import ServiceDedicatedLayout from "@/components/services/ServiceDedicatedLayout";
import { serviceContent } from "./content";

const SITE_URL = "https://allosupport.ma";
const BRAND = "AlloSupport.ma";

export const metadata: Metadata = {
  title: serviceContent.metadata.title,
  description: serviceContent.metadata.description,
  keywords: serviceContent.metadata.keywords.slice(0, 5),
  alternates: { canonical: `${SITE_URL}/services/depannage-pc-mac` },
  openGraph: {
    title: serviceContent.metadata.title,
    description: serviceContent.metadata.description,
    url: `${SITE_URL}/services/depannage-pc-mac`,
    siteName: BRAND,
    type: "website",
    locale: "fr_MA",
    images: [
      { url: `${SITE_URL}${serviceContent.metadata.ogImage}`, width: 1200, height: 630, alt: serviceContent.hero.image.alt },
    ],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
};

export default function DepannagePcMacPage() {
  return (
    <ServiceDedicatedLayout
      content={serviceContent as unknown as Parameters<typeof ServiceDedicatedLayout>[0]["content"]}
      slug="depannage-pc-mac"
      whatsappMessage={"Bonjour AlloSupport, mon PC/Mac est lent ou bug. J'ai besoin d'un dépannage à distance. Mon problème : [décrire ici]"}
      serviceNameForSchema="Dépannage PC & Mac à distance Maroc"
    />
  );
}
