import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";

interface BannerCTAProps {
  titre: string;
  sousTitre?: string;
  messageWhatsApp: string;
}

const defaultSousTitre = "Intervention à distance 30 min · 250 DH · Paiement après résultat";

export default function BannerCTA({ titre, sousTitre = defaultSousTitre, messageWhatsApp }: BannerCTAProps) {
  const whatsappUrl = `${GOOGLE_BUSINESS.WHATSAPP}?text=${encodeURIComponent(messageWhatsApp)}`;
  return (
    <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
      <h3 className="font-bold text-red-700">{titre}</h3>
      <p className="text-sm text-slate-600 mt-1">{sousTitre}</p>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="inline-flex items-center gap-2 mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-xl transition"
      >
        <MessageCircle className="w-5 h-5" aria-hidden />
        WhatsApp
      </a>
      <p className="mt-3 text-sm">
        <Link href="/" className="text-blue-700 hover:underline font-medium">
          Voir nos services →
        </Link>
      </p>
    </div>
  );
}
