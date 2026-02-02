"use client";

import { MessageCircle, Clock, Shield, CheckCircle } from "lucide-react";
import { generateWhatsAppURL } from "@/lib/seo";
import { WHATSAPP_PHONE } from "@/components/PhoneLink";

interface InContentCTAProps {
  serviceName?: string;
  price?: string;
  phoneNumber?: string;
  context?: string;
}

export default function InContentCTA({
  serviceName = "Dépannage Informatique",
  price = "250 DH",
  phoneNumber = WHATSAPP_PHONE,
  context,
}: InContentCTAProps) {
  const whatsappUrl = generateWhatsAppURL(
    phoneNumber,
    `Bonjour AlloSupport, je suis intéressé par ${serviceName}. Pouvez-vous m'aider ?`,
    context
  );

  return (
    <div className="my-8 p-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl text-white shadow-xl">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">
            Besoin d&apos;aide maintenant ?
          </h3>
          <p className="text-primary-100">
            Intervention en 15 minutes. Satisfait ou remboursé.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary-200" />
            <span className="text-sm">Intervention 15 min</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary-200" />
            <span className="text-sm">Satisfait ou Remboursé</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary-200" />
            <span className="text-sm">Expert certifié</span>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-primary-100 text-sm mb-1">À partir de</p>
            <p className="text-3xl font-bold">{price}</p>
          </div>
          
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-white text-primary-600 font-bold py-3 px-8 rounded-lg hover:bg-primary-50 transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Contacter sur WhatsApp
          </a>
        </div>

        {/* Trust Signal */}
        <p className="text-center text-primary-100 text-xs mt-4">
          🔒 Paiement sécurisé • Intervention enregistrée • Confidentialité garantie
        </p>
      </div>
    </div>
  );
}
