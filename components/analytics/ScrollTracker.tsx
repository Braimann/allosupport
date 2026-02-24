"use client";

import { useEffect } from "react";
import { trackScroll50Percent } from "@/lib/analytics";

/**
 * Tracker le scroll à 50% de la page.
 * Lecture des propriétés géométriques (scrollHeight, scrollY) dans requestAnimationFrame
 * pour éviter les reflows forcés (layout thrashing) après invalidation du DOM.
 */
export default function ScrollTracker() {
  useEffect(() => {
    let scrollTracked = false;
    let rafId: number | null = null;

    const handleScroll = () => {
      if (scrollTracked) return;
      if (rafId != null) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (scrollTracked) return;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollHeight <= 0 ? 0 : (window.scrollY / scrollHeight) * 100;
        if (scrollPercent >= 50) {
          scrollTracked = true;
          trackScroll50Percent();
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}
