"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const ClientPortal = dynamic(() => import("@/components/ClientPortal"), { ssr: false });
const Blog = dynamic(() => import("@/components/Blog"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

const LoadingPlaceholder = () => (
  <div className="min-h-[400px] bg-gray-50 animate-pulse" />
);

export default function HomeLazySections() {
  return (
    <>
      <Suspense fallback={<LoadingPlaceholder />}>
        <ClientPortal />
      </Suspense>
      <Suspense fallback={<LoadingPlaceholder />}>
        <Blog />
      </Suspense>
      <Suspense fallback={<LoadingPlaceholder />}>
        <Contact />
      </Suspense>
    </>
  );
}
