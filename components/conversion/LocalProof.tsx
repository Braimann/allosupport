"use client";

import { MapPin, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

interface LocalProofProps {
  cities?: string[];
  defaultCity?: string;
}

const DEFAULT_CITIES = [
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Tanger",
  "Agadir",
  "Fès",
  "Meknès",
  "Oujda",
];

export default function LocalProof({
  cities = DEFAULT_CITIES,
  defaultCity = "Maroc",
}: LocalProofProps) {
  const [detectedCity, setDetectedCity] = useState<string | null>(null);

  useEffect(() => {
    // Simple GeoIP detection (can be enhanced with a real GeoIP service)
    // For now, we'll use a simple approach with browser timezone or default
    const detectCity = () => {
      // Try to detect from timezone (very basic)
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      
      // Simple mapping (can be improved)
      if (timezone.includes("Casablanca") || timezone.includes("Africa/Casablanca")) {
        setDetectedCity("Casablanca");
      } else if (timezone.includes("Rabat")) {
        setDetectedCity("Rabat");
      } else {
        // Fallback: show all cities or default
        setDetectedCity(null);
      }
    };

    detectCity();
  }, []);

  const displayCity = detectedCity || defaultCity;
  const isSingleCity = detectedCity !== null;

  return (
    <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 my-8">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0">
          <MapPin className="w-6 h-6 text-white" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary-500" />
            Intervention disponible
          </h3>
          
          {isSingleCity ? (
            <p className="text-gray-700">
              Nous intervenons à <strong className="text-primary-600">{displayCity}</strong> et dans toutes les grandes villes du Maroc.
            </p>
          ) : (
            <div>
              <p className="text-gray-700 mb-3">
                Intervention disponible dans les villes suivantes :
              </p>
              <div className="flex flex-wrap gap-2">
                {cities.map((city, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-primary-200"
                  >
                    <MapPin className="w-3 h-3 text-primary-500" />
                    {city}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-sm mt-3">
                Et partout au Maroc via support à distance
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
