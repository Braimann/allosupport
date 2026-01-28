"use client";

import { useEffect } from "react";
import { trackScroll50Percent } from "@/lib/analytics";

/**
 * Composant pour tracker le scroll à 50% de la page
 * Optimisé avec passive event listener pour performance
 */
export default function ScrollTracker() {
  useEffect(() => {
    let scrollTracked = false;

    const handleScroll = () => {
      if (scrollTracked) return;

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (window.scrollY / scrollHeight) * 100;

      if (scrollPercent >= 50) {
        scrollTracked = true;
        trackScroll50Percent();
      }
    };

    // Utiliser passive pour meilleures performances
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null; // Composant invisible
}
