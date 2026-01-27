import { generateLocalBusinessSchema } from "@/lib/seo";

interface SchemaLocalBusinessProps {
  phoneNumber?: string;
  email?: string;
}

export default function SchemaLocalBusiness({
  phoneNumber = "+212-6-XX-XX-XX-XX",
  email = "contact@allosupport.ma",
}: SchemaLocalBusinessProps) {
  const baseSchema = generateLocalBusinessSchema({
    telephone: phoneNumber,
    email: email,
    address: {
      addressLocality: "Casablanca",
      addressRegion: "Casablanca-Settat",
    },
  });

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...baseSchema,
        "@type": ["LocalBusiness", "ProfessionalService"],
        areaServed: [
          {
            "@type": "Country",
            name: "Morocco",
          },
          {
            "@type": "City",
            name: "Casablanca",
          },
          {
            "@type": "City",
            name: "Rabat",
          },
        ],
        priceRange: "150 DH - 500 DH",
        openingHours: "Mo-Su 00:00-23:59",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
