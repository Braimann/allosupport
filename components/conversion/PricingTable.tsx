"use client";

import { Check, MessageCircle, Zap } from "lucide-react";
import { generateWhatsAppURL } from "@/lib/seo";
import { WHATSAPP_PHONE } from "@/components/PhoneLink";

interface PricingItem {
  name: string;
  price: string;
  description: string;
  features?: string[];
  cta?: string;
  popular?: boolean;
}

interface PricingTableProps {
  services: PricingItem[];
  highlighted?: number;
  phoneNumber?: string;
}

export default function PricingTable({
  services,
  highlighted,
  phoneNumber = WHATSAPP_PHONE,
}: PricingTableProps) {
  const handleWhatsAppClick = (serviceName: string) => {
    const message = `Bonjour AlloSupport, je suis intéressé par: ${serviceName}. Pouvez-vous m'en dire plus ?`;
    const url = generateWhatsAppURL(phoneNumber, message, serviceName);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start my-12">
      {services.map((service, index) => {
        const isHighlighted = highlighted === index || service.popular;
        
        return (
          <div
            key={index}
            className={`relative bg-white rounded-2xl shadow-sm overflow-hidden border-2 transition-all duration-300 hover:shadow-md ${
              isHighlighted
                ? "border-emerald-500 scale-105 z-10"
                : "border-gray-200"
            }`}
          >
            {/* Popular Badge */}
            {isHighlighted && (
              <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold z-10">
                <Zap className="w-4 h-4 inline mr-1" />
                Populaire
              </div>
            )}

            <div className="p-6">
              {/* Service Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-3xl font-bold text-emerald-600">
                  {service.price}
                </span>
                <span className="text-gray-500 ml-2">MAD</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed min-h-[60px]">
                {service.description}
              </p>

              {/* Features List */}
              {service.features && service.features.length > 0 && (
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* CTA Button */}
              <button
                onClick={() => handleWhatsAppClick(service.name)}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  isHighlighted
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                }`}
              >
                <MessageCircle className="w-5 h-5" />
                {service.cta || "Contacter sur WhatsApp"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
