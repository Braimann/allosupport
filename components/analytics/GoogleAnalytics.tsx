"use client";

import Script from "next/script";

const GA4_ID = "G-26K5EC69SQ";

export default function GoogleAnalytics() {
  return (
    <>
      {/* GA4 lazyOnload: ne bloque pas LCP/TBT; chargé après que la page soit idle */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4_ID}', {
            page_path: window.location.pathname,
            send_page_view: true,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>
    </>
  );
}
