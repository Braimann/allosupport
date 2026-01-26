"use client";

import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export default function WhatsAppButton({
  phoneNumber = "2126XXXXXXXX", // REMPLACER par votre numéro WhatsApp
  defaultMessage = "Bonjour AlloSupport, j'ai une urgence informatique. Pouvez-vous m'aider ?",
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after page load (better UX)
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Contacter AlloSupport via WhatsApp"
      >
        <div className="relative">
          {/* Pulse Animation Background */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-50"></div>

          {/* Main Button */}
          <div className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group-hover:shadow-green-500/50">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>

          {/* Notification Badge */}
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
            <span className="text-white text-xs font-bold">!</span>
          </div>
        </div>

        {/* Tooltip on Hover (Desktop) */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-slate-900 text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap">
            <p className="font-semibold text-sm">Besoin d'aide ?</p>
            <p className="text-xs text-gray-300">Cliquez pour WhatsApp</p>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-slate-900 rotate-45"></div>
          </div>
        </div>
      </a>

      {/* Mobile: Additional CTA Bar (optional, for better mobile conversion) */}
      <div className="fixed bottom-0 left-0 right-0 bg-green-500 text-white p-3 z-40 md:hidden shadow-lg">
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
    </>
  );
}
