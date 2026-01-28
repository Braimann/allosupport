import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Trust from "@/components/Trust";

// Lazy load composants non-critiques (below the fold)
const ClientPortal = lazy(() => import("@/components/ClientPortal"));
const Locations = lazy(() => import("@/components/Locations"));
const Blog = lazy(() => import("@/components/Blog"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

// Loading placeholder minimal
const LoadingPlaceholder = () => (
  <div className="min-h-[400px] bg-gray-50 animate-pulse" />
);

export default function Home() {
  return (
    <main>
      {/* Above the fold - chargé immédiatement */}
      <Header />
      <Hero />
      <Pricing />
      <Services />
      <Trust />
      
      {/* Below the fold - lazy loaded */}
      <Suspense fallback={<LoadingPlaceholder />}>
        <ClientPortal />
      </Suspense>
      <Suspense fallback={<LoadingPlaceholder />}>
        <Locations />
      </Suspense>
      <Suspense fallback={<LoadingPlaceholder />}>
        <Blog />
      </Suspense>
      <Suspense fallback={<LoadingPlaceholder />}>
        <Contact />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </main>
  );
}
