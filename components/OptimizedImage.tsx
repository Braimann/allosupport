"use client";

import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  fallback?: string;
}

/**
 * Composant Image optimisé avec WebP fallback
 * Compatible Cloudflare APO et Rocket Loader
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  fallback,
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  // Générer les sources WebP et fallback
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  const hasWebP = src.match(/\.(jpg|jpeg|png)$/i);

  return (
    <picture className={className}>
      {/* WebP source si disponible */}
      {hasWebP && (
        <source
          srcSet={webpSrc}
          type="image/webp"
          onError={() => setImgSrc(fallback || src)}
        />
      )}
      
      {/* Image principale avec Next.js Image */}
      <Image
        src={imgSrc}
        alt={alt}
        width={width || 1200}
        height={height || 800}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className={`${className} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          if (fallback && imgSrc !== fallback) {
            setImgSrc(fallback);
          }
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
    </picture>
  );
}
