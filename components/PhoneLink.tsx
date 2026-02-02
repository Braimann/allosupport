export const PHONE_NUMBER = "0775237038";
export const PHONE_FORMATTED = "07 75 23 70 38";
export const PHONE_INTERNATIONAL = "+212775237038";
export const PHONE_SCHEMA = "+212 7 75 23 70 38";
/** Numéro sans + pour generateWhatsAppURL(phoneNumber, message) */
export const WHATSAPP_PHONE = "212775237038";
export const WHATSAPP_URL = "https://wa.me/212775237038";

export function PhoneLink({ className }: { className?: string }) {
  return (
    <a
      href={`tel:${PHONE_INTERNATIONAL}`}
      className={className}
      itemProp="telephone"
    >
      {PHONE_FORMATTED}
    </a>
  );
}
