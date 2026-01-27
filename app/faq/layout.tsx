import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Questions Fréquentes | AlloSupport.ma",
  description:
    "Trouvez les réponses à vos questions sur le dépannage informatique à distance, nos tarifs, nos services et nos garanties. FAQ complète AlloSupport.ma.",
  keywords: [
    "FAQ dépannage informatique",
    "questions fréquentes",
    "aide informatique",
    "support IT FAQ",
    "dépannage distance questions",
    "tarifs support informatique",
  ],
  openGraph: {
    title: "FAQ - Questions Fréquentes | AlloSupport.ma",
    description: "Trouvez les réponses à toutes vos questions sur nos services.",
    type: "website",
    url: "https://allosupport.ma/faq",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Questions Fréquentes",
    description: "Réponses à vos questions sur le dépannage informatique.",
  },
  alternates: {
    canonical: "https://allosupport.ma/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
