import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, ExternalLink } from "lucide-react";
import { GOOGLE_BUSINESS } from "@/lib/constants/google-business";

const hasReviews =
  GOOGLE_BUSINESS.HAS_REVIEWS &&
  parseInt(GOOGLE_BUSINESS.REVIEW_COUNT, 10) > 0;

export const metadata: Metadata = {
  title: hasReviews
    ? `Avis Clients ⭐ ${GOOGLE_BUSINESS.RATING}/5 | AlloSupport Maroc`
    : "Avis Clients Google | AlloSupport Maroc",
  description: hasReviews
    ? `Découvrez les ${GOOGLE_BUSINESS.REVIEW_COUNT} avis Google de nos clients. Note ${GOOGLE_BUSINESS.RATING}/5.`
    : "Nouvelle entreprise de dépannage informatique. Laissez le premier avis et aidez-nous à grandir!",
  alternates: {
    canonical: "https://allosupport.ma/avis",
  },
};

export default function AvisPage() {
  const rating = parseFloat(GOOGLE_BUSINESS.RATING);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 pt-24">
        <div className="max-w-7xl mx-auto px-4">
          {!hasReviews ? (
            // Version SANS avis
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-8xl mb-8">⭐</div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Aidez-Nous à Démarrer Notre Aventure!
              </h1>

              <p className="text-xl text-gray-600 mb-8">
                AlloSupport est une nouvelle entreprise passionnée par la
                qualité de service. Votre premier avis Google nous aiderait
                énormément à nous faire connaître au Maroc.
              </p>

              <a
                href={GOOGLE_BUSINESS.REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl text-lg font-bold transition shadow-xl hover:shadow-2xl hover:scale-105 transform mb-12"
              >
                Laisser le Premier Avis Google
                <ExternalLink className="w-6 h-6" />
              </a>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    Objectif 2026
                  </h3>
                  <p className="text-gray-600 text-sm">
                    100 clients satisfaits
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-4xl mb-3">✅</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    Garantie 30 jours
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Toutes réparations
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    Service rapide
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Intervention 24-48h
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Version AVEC avis
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-12 h-12 ${
                        i < Math.round(rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                  {GOOGLE_BUSINESS.REVIEW_COUNT} Clients Nous Font Confiance
                </h1>

                <p className="text-2xl text-gray-600 mb-8">
                  Note moyenne:{" "}
                  <span className="font-bold text-3xl text-yellow-500">
                    {GOOGLE_BUSINESS.RATING}/5
                  </span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={GOOGLE_BUSINESS.REVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition"
                  >
                    Laisser un Avis
                    <ExternalLink className="w-5 h-5" />
                  </a>

                  <a
                    href={GOOGLE_BUSINESS.SHARE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-900 px-8 py-4 rounded-xl font-bold transition"
                  >
                    Voir Notre Profil Google
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Google Maps / Profil */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
                  Avis Vérifiés Google
                </h2>
                <div className="rounded-xl overflow-hidden bg-gray-100 aspect-video flex items-center justify-center">
                  <a
                    href={GOOGLE_BUSINESS.MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Voir AlloSupport sur Google Maps →
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
