"use client";

import Image from "next/image";
import { useState } from "react";

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
}

export default function YouTubeFacade({ videoId, title }: YouTubeFacadeProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="w-full aspect-video rounded-xl"
        loading="lazy"
      />
    );
  }

  return (
    <div
      className="relative w-full aspect-video cursor-pointer rounded-xl overflow-hidden"
      onClick={() => setLoaded(true)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setLoaded(true);
        }
      }}
      aria-label={`Lire la vidéo : ${title}`}
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        fill
        className="object-cover"
        priority={false}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        <svg
          className="w-16 h-16 text-white drop-shadow-lg"
          viewBox="0 0 68 48"
          fill="currentColor"
          aria-hidden
        >
          <path d="M66.52 7.74C65.7 4.65 63.27 2.21 60.2 1.4 54.9 0 34 0 34 0S13.1 0 7.8 1.4C4.73 2.21 2.3 4.65 1.48 7.74 0 13.05 0 24 0 24s0 10.95 1.48 16.26c.82 3.09 3.25 5.53 6.32 6.34C13.1 48 34 48 34 48s20.9 0 26.2-1.4c3.07-.81 5.5-3.25 6.32-6.34C68 34.95 68 24 68 24s0-10.95-1.48-16.26z" />
          <path d="M45 24L27 14v20" fill="white" />
        </svg>
      </div>
    </div>
  );
}
