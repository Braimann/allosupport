"use client";

import Script from "next/script";
import { useEffect } from "react";

const GTM_ID = "GTM-XXXXXXX"; // À remplacer par votre ID GTM

export default function GoogleTagManager() {
  useEffect(() => {
    // Événement scroll 50%
    let scrollTracked = false;
    const handleScroll = () => {
      if (!scrollTracked && window.scrollY >= window.innerHeight * 0.5) {
        scrollTracked = true;
        if (typeof window !== "undefined" && window.dataLayer) {
          window.dataLayer.push({
            event: "scroll_50_percent",
            page_path: window.location.pathname,
            timestamp: new Date().toISOString(),
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* GTM Container */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      
      {/* GTM Noscript */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
}

// Hook pour tracker les clics WhatsApp
export function useWhatsAppTracking() {
  const trackWhatsAppClick = (context?: string, message?: string) => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "whatsapp_click",
        event_category: "engagement",
        event_label: context || "general",
        value: 1,
        page_path: window.location.pathname,
        whatsapp_message: message || "default",
        timestamp: new Date().toISOString(),
      });
    }
  };

  return { trackWhatsAppClick };
}
