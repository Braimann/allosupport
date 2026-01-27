"use client";

import { MessageCircle } from "lucide-react";
import { useState, useEffect, lazy, Suspense } from "react";
import { generateWhatsAppURL } from "@/lib/seo";

interface StickyWhatsAppProps {
  phoneNumber?: string;
  defaultMessage?: string;
  context?: string;
  position?: "bottom-right" | "bottom-left";
}

// Lazy load to improve LCP
const StickyWhatsAppContent = lazy(() => Promise.resolve({ default: WhatsAppButtonContent }));

function WhatsAppButtonContent({
  phoneNumber = "212770303940",
  defaultMessage = "Bonjour AlloSupport, j'ai une urgence informatique. Pouvez-vous m'aider ?",
  context,
  position = "bottom-right",
}: StickyWhatsAppProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Show button after page load (better UX and LCP)
    const timer = setTimeout(() => setIsVisible(true), 1000);
    
    // Detect mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const whatsappUrl = generateWhatsAppURL(phoneNumber, defaultMessage, context);
  const positionClass = position === "bottom-left" ? "left-6" : "right-6";

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Button - Desktop & Mobile */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed ${positionClass} bottom-6 z-50 group`}
        aria-label="Contacter AlloSupport via WhatsApp"
      >
        <div className="relative">
          {/* Pulse Animation Background */}
          <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-0 bg-primary-500 rounded-full animate-pulse opacity-50"></div>

          {/* Main Button */}
          <div className="relative w-16 h-16 bg-primary-500 hover:bg-primary-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group-hover:shadow-primary-500/50">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>

          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center border-2 border-white">
            <span className="text-white text-xs font-bold">!</span>
          </div>
        </div>

        {/* Tooltip on Hover (Desktop only) */}
        {!isMobile && (
          <div className="absolute right-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-secondary-900 text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap">
              <p className="font-semibold text-sm">Besoin d'aide ?</p>
              <p className="text-xs text-gray-300">Cliquez pour WhatsApp</p>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-secondary-900 rotate-45"></div>
            </div>
          </div>
        )}
      </a>

      {/* Mobile: Additional CTA Bar */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-primary-500 text-white p-3 z-40 shadow-lg">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 font-semibold"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Urgence ? Contactez-nous sur WhatsApp</span>
          </a>
        </div>
      )}
    </>
  );
}

export default function StickyWhatsApp(props: StickyWhatsAppProps) {
  return (
    <Suspense fallback={null}>
      <StickyWhatsAppContent {...props} />
    </Suspense>
  );
}
