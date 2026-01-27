"use client";

import { MessageCircle } from "lucide-react";
import { generateWhatsAppURL } from "@/lib/seo";

interface WhatsAppFloatProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppFloat({
  phoneNumber = "2126XXXXXXXX",
  message = "Bonjour AlloSupport, j'ai besoin d'aide pour mon problème informatique.",
}: WhatsAppFloatProps) {
  const whatsappUrl = generateWhatsAppURL(phoneNumber, message);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] group"
      aria-label="Contacter AlloSupport via WhatsApp"
    >
      <div className="relative">
        {/* Pulse Animation Background */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-pulse opacity-50"></div>

        {/* Main Button */}
        <div className="relative w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group-hover:shadow-[#25D366]/50">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>

        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
          <span className="text-white text-xs font-bold">!</span>
        </div>
      </div>

      {/* Tooltip on Hover */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl">
          <p className="font-semibold text-sm">Besoin d'aide ?</p>
          <p className="text-xs text-gray-300">Cliquez pour WhatsApp</p>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      </div>
    </a>
  );
}
