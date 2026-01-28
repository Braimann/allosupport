/**
 * Analytics utilities pour GA4 et GTM
 * Optimisé pour PageSpeed (0 impact sur les performances)
 */

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/**
 * Track un événement WhatsApp click
 */
export function trackWhatsAppClick(context?: string, message?: string) {
  if (typeof window === "undefined" || !window.dataLayer) return;

  window.dataLayer.push({
    event: "whatsapp_click",
    event_category: "engagement",
    event_label: context || "general",
    value: 1,
    page_path: window.location.pathname,
    whatsapp_message: message || "default",
    timestamp: new Date().toISOString(),
  });

  // GA4 direct event
  if (window.gtag) {
    window.gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: context || "general",
      value: 1,
      page_path: window.location.pathname,
    });
  }
}

/**
 * Track scroll 50% (appelé depuis le composant GTM)
 */
export function trackScroll50Percent() {
  if (typeof window === "undefined" || !window.dataLayer) return;

  window.dataLayer.push({
    event: "scroll_50_percent",
    event_category: "engagement",
    page_path: window.location.pathname,
    timestamp: new Date().toISOString(),
  });

  if (window.gtag) {
    window.gtag("event", "scroll_50_percent", {
      event_category: "engagement",
      page_path: window.location.pathname,
    });
  }
}

/**
 * Track page view personnalisé
 */
export function trackPageView(path: string, title?: string) {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("config", "G-26K5EC69SQ", {
    page_path: path,
    page_title: title || document.title,
  });
}

/**
 * Track conversion (ex: devis soumis, contact)
 */
export function trackConversion(
  conversionType: "devis" | "contact" | "signup",
  value?: number
) {
  if (typeof window === "undefined" || !window.dataLayer) return;

  window.dataLayer.push({
    event: "conversion",
    event_category: "conversion",
    event_label: conversionType,
    value: value || 0,
    page_path: window.location.pathname,
    timestamp: new Date().toISOString(),
  });

  if (window.gtag) {
    window.gtag("event", "conversion", {
      event_category: "conversion",
      event_label: conversionType,
      value: value || 0,
    });
  }
}
