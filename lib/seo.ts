/**
 * SEO Engine - AlloSupport.ma
 * Centralized SEO functions following the 4-Tier Keyword Strategy
 */

const SITE_NAME = "AlloSupport.ma";
const BASE_URL = "https://allosupport.ma";

/**
 * Generate SEO-optimized title tag
 * Format: [Page Title] - [Benefit/Urgency] | AlloSupport.ma
 */
export function generateTitle(
  pageTitle: string,
  benefit?: string
): string {
  const parts = [pageTitle];
  
  if (benefit) {
    parts.push(benefit);
  }
  
  parts.push(SITE_NAME);
  
  const title = parts.join(" - ");
  
  // Ensure title is under 60 characters (Google best practice)
  if (title.length > 60) {
    return `${pageTitle} | ${SITE_NAME}`;
  }
  
  return title;
}

/**
 * Generate meta description (limited to 160 chars)
 */
export function generateDescription(
  content: string,
  maxLength: number = 160
): string {
  // Remove HTML tags
  const textOnly = content.replace(/<[^>]*>/g, "").trim();
  
  // Truncate to maxLength
  if (textOnly.length <= maxLength) {
    return textOnly;
  }
  
  // Truncate at word boundary
  const truncated = textOnly.substring(0, maxLength - 3);
  const lastSpace = truncated.lastIndexOf(" ");
  
  if (lastSpace > 0) {
    return truncated.substring(0, lastSpace) + "...";
  }
  
  return truncated + "...";
}

/**
 * Generate canonical URL (self-referencing)
 */
export function generateCanonical(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${BASE_URL}/${cleanPath}`;
}

/**
 * Generate LocalBusiness Schema.org JSON-LD
 */
export function generateLocalBusinessSchema(overrides?: {
  name?: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
  };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: overrides?.name || "AlloSupport.ma",
    description:
      "Dépannage Informatique à Distance au Maroc. Intervention rapide en 15 minutes via WhatsApp. Services pour particuliers et PME. Satisfait ou Remboursé.",
    url: BASE_URL,
    telephone: overrides?.telephone || "+212-6-XX-XX-XX-XX",
    email: overrides?.email || "contact@allosupport.ma",
    address: {
      "@type": "PostalAddress",
      addressLocality: overrides?.address?.addressLocality || "Casablanca",
      addressRegion: overrides?.address?.addressRegion || "Casablanca-Settat",
      addressCountry: "MA",
      ...(overrides?.address?.streetAddress && {
        streetAddress: overrides.address.streetAddress,
      }),
      ...(overrides?.address?.postalCode && {
        postalCode: overrides.address.postalCode,
      }),
    },
    areaServed: [
      "Casablanca",
      "Rabat",
      "Marrakech",
      "Tanger",
      "Agadir",
      "Maroc",
    ],
    serviceType: [
      "Dépannage informatique à distance",
      "Réparation PC",
      "Nettoyage virus",
      "Optimisation Windows",
      "Support télétravail",
      "Maintenance PME",
    ],
    priceRange: "$$", // 250-450 MAD
    openingHours: "Mo-Su 08:00-22:00",
    paymentAccepted: "Carte bancaire, Virement, Mobile Money",
    currenciesAccepted: "MAD",
    slogan: "Si on ne répare pas, vous ne payez pas.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  };
}

/**
 * Generate Service Schema.org JSON-LD for Pillar Pages
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  price?: string;
  providerName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: service.providerName || "AlloSupport.ma",
      url: BASE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Morocco",
    },
    ...(service.price && {
      offers: {
        "@type": "Offer",
        price: service.price,
        priceCurrency: "MAD",
      },
    }),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://wa.me/2126XXXXXXXX",
      serviceType: "WhatsApp",
    },
  };
}

/**
 * Validate SEO metadata against checklist
 */
export function validateSEO(metadata: {
  title?: string;
  description?: string;
  hasH1?: boolean;
  hasImage?: boolean;
  imageAlt?: string;
  canonical?: string;
  hasSchema?: boolean;
  internalLinks?: number;
}): {
  valid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Title validation
  if (!metadata.title) {
    errors.push("Title tag is missing");
  } else if (metadata.title.length > 60) {
    warnings.push(`Title tag is ${metadata.title.length} chars (recommended: < 60)`);
  }

  // Description validation
  if (!metadata.description) {
    errors.push("Meta description is missing");
  } else if (metadata.description.length < 150) {
    warnings.push(`Meta description is ${metadata.description.length} chars (recommended: 150-160)`);
  } else if (metadata.description.length > 160) {
    errors.push(`Meta description is ${metadata.description.length} chars (max: 160)`);
  }

  // H1 validation
  if (metadata.hasH1 === false) {
    errors.push("H1 tag is missing");
  }

  // Image validation
  if (metadata.hasImage && !metadata.imageAlt) {
    warnings.push("Image is missing alt text");
  }

  // Canonical validation
  if (!metadata.canonical) {
    warnings.push("Canonical tag is missing");
  }

  // Schema validation
  if (metadata.hasSchema === false) {
    warnings.push("Schema.org markup is missing");
  }

  // Internal links validation
  if (metadata.internalLinks !== undefined && metadata.internalLinks < 2) {
    warnings.push(`Only ${metadata.internalLinks} internal link(s) found (recommended: ≥ 2)`);
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Extract keywords from content for internal linking
 */
export function extractKeywords(content: string): string[] {
  // Common IT support keywords in French
  const keywordPatterns = [
    /dépannage\s+(?:informatique|pc|ordinateur)/gi,
    /réparation\s+(?:pc|ordinateur|portable)/gi,
    /supprimer\s+virus/gi,
    /pc\s+lent/gi,
    /nettoyage\s+(?:virus|malware)/gi,
    /optimisation\s+(?:windows|pc)/gi,
    /support\s+(?:informatique|it|technique)/gi,
    /maintenance\s+(?:informatique|pc)/gi,
    /télétravail/gi,
    /sécurité\s+informatique/gi,
  ];

  const foundKeywords: string[] = [];

  keywordPatterns.forEach((pattern) => {
    const matches = content.match(pattern);
    if (matches) {
      matches.forEach((match) => {
        const normalized = match.toLowerCase().trim();
        if (!foundKeywords.includes(normalized)) {
          foundKeywords.push(normalized);
        }
      });
    }
  });

  return foundKeywords;
}

/**
 * Generate WhatsApp URL with pre-filled message
 */
export function generateWhatsAppURL(
  phoneNumber: string,
  message?: string,
  context?: string
): string {
  const defaultMessage =
    "Bonjour AlloSupport, j'ai une urgence informatique. Pouvez-vous m'aider ?";
  
  let finalMessage = message || defaultMessage;
  
  if (context) {
    finalMessage = `${finalMessage} (Contexte: ${context})`;
  }
  
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
}
