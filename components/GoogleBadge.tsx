"use client";

import { Star, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";

interface GoogleBadgeProps {
  variant?: "inline" | "floating" | "card";
  showCTA?: boolean;
  /** N'affiche que l'invitation à laisser un avis, sans note ni nombre d'avis (évite les mensonges) */
  inviteOnly?: boolean;
  className?: string;
}

export default function GoogleBadge({
  variant = "inline",
  showCTA = false,
  inviteOnly = false,
  className = "",
}: GoogleBadgeProps) {
  const hasReviews =
    !inviteOnly &&
    GOOGLE_BUSINESS.HAS_REVIEWS &&
    parseInt(GOOGLE_BUSINESS.REVIEW_COUNT, 10) > 0;
  const rating = parseFloat(GOOGLE_BUSINESS.RATING);

  // FLOATING VARIANT
  if (variant === "floating") {
    if (!hasReviews) {
      return (
        <a
          href={GOOGLE_BUSINESS.REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="fixed bottom-24 right-6 z-40 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 p-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105"
        >
          <div className="text-center">
            <div className="text-3xl mb-2">⭐</div>
            <div className="text-sm font-bold">Premier Avis?</div>
          </div>
        </a>
      );
    }

    return (
      <Link
        href="/avis"
        className="fixed bottom-24 right-6 z-40 bg-white p-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105 border-2 border-yellow-200"
      >
        <div className="flex items-center gap-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.round(rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
          <div>
            <div className="font-bold text-lg">{GOOGLE_BUSINESS.RATING}/5</div>
            <div className="text-xs text-gray-600">
              {GOOGLE_BUSINESS.REVIEW_COUNT} avis
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // CARD VARIANT
  if (variant === "card") {
    if (!hasReviews) {
      return (
        <div
          className={`bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl text-center border-2 border-yellow-300 ${className}`}
        >
          <div className="text-6xl mb-4">⭐</div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900">
            Aidez-Nous à Grandir!
          </h3>
          <p className="text-gray-700 mb-6">
            Nouvelle entreprise passionnée. Votre premier avis nous aiderait
            énormément!
          </p>
          {showCTA && (
            <a
              href={GOOGLE_BUSINESS.REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition"
            >
              Laisser le Premier Avis
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      );
    }

    return (
      <div
        className={`bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border-2 border-yellow-200 text-center ${className}`}
      >
        <div className="flex justify-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-6 h-6 ${
                i < Math.round(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-1">
          {GOOGLE_BUSINESS.RATING}/5
        </div>
        <p className="text-sm text-gray-600 mb-4">
          {GOOGLE_BUSINESS.REVIEW_COUNT} avis Google vérifiés
        </p>
        {showCTA && (
          <a
            href={GOOGLE_BUSINESS.REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition"
          >
            Laisser un Avis
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    );
  }

  // INLINE VARIANT (default)
  if (!hasReviews) {
    return (
      <a
        href={GOOGLE_BUSINESS.REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={`inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 font-bold ${className}`}
      >
        ⭐ Soyez le Premier à Laisser un Avis!
      </a>
    );
  }

  return (
    <Link
      href="/avis"
      className={`inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all border-2 border-gray-100 hover:border-yellow-200 ${className}`}
    >
      <Image
        src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
        alt="Google"
        width={74}
        height={24}
        className="h-5 w-auto"
      />
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.round(rating)
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
      <div className="flex flex-col items-start">
        <div className="font-bold text-gray-900 text-sm">
          {GOOGLE_BUSINESS.RATING}/5
        </div>
        <div className="text-xs text-gray-500">
          {GOOGLE_BUSINESS.REVIEW_COUNT} avis
        </div>
      </div>
      <ExternalLink className="w-4 h-4 text-gray-400" />
    </Link>
  );
}
