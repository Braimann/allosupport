// Google Business Profile - AlloSupport Maroc (Service à domicile)
export const GOOGLE_BUSINESS = {
  // Liens Google
  REVIEW_URL: "https://g.page/r/CTT4BBV6QaxrEBM/review",
  SHARE_URL: "https://share.google/rkOGL7DHagzqPiZIC",
  MAPS_URL: "https://www.google.com/maps?q=AlloSupport+Maroc",
  PLACE_ID: "CTT4BBV6QaxrEBM",

  // Métriques RÉELLES (à mettre à jour manuellement)
  // TODO: Vérifier sur business.google.com et mettre vrais chiffres
  RATING: "0.0", // Mettre vraie note (ex: '4.8') ou '0.0' si aucun avis
  REVIEW_COUNT: "0", // Mettre vrai nombre (ex: '5') ou '0' si aucun avis
  HAS_REVIEWS: false, // true dès le premier avis

  // Service
  SERVICE_TYPE: "at_home",
  SERVICE_AREA: [
    "Casablanca",
    "Rabat",
    "Fès",
    "Marrakech",
    "Agadir",
  ],

  // Contact — une seule source de vérité pour tout le site
  /** Mobile (principal) — affiché partout, WhatsApp, CTA */
  PHONE: "+212775237038",
  PHONE_FORMATTED: "07 75 23 70 38",
  WHATSAPP_PHONE: "212775237038",
  WHATSAPP: "https://wa.me/212775237038",
  /** Lien WhatsApp avec message par défaut (CTA) — à utiliser pour les liens génériques */
  WHATSAPP_CTA: "https://wa.me/212775237038?text=Bonjour%20AlloSupport%2C%20j%27ai%20besoin%20d%27aide",
  /** Fixe — 05 20 97 06 75 (Header, Footer, schema) */
  PHONE_FIXE: "+212520970675",
  PHONE_FIXE_FORMATTED: "05 20 97 06 75",
} as const;

export type GoogleBusinessData = typeof GOOGLE_BUSINESS;
