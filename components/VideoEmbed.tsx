"use client";

import { useState } from "react";
import Image from "next/image";

const VIDEO_ID = "2RPhvTiQkiI";
const THUMBNAIL = `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
const BASE_URL = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}`;
const PARAMS_MUTED = "?rel=0&modestbranding=1&controls=1&autoplay=1&mute=1&loop=1&playlist=" + VIDEO_ID;
const PARAMS_UNMUTED = "?rel=0&modestbranding=1&controls=1&autoplay=1&mute=0&loop=1&playlist=" + VIDEO_ID;

/** Facade: affiche une miniature + bouton play, charge l’iframe YouTube uniquement au clic (gain LCP/TBT mobile). */
export default function VideoEmbed() {
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
  };

  if (playing) {
    return (
      <div className="relative flex-shrink-0">
        <div className="relative w-[220px] h-[390px] md:w-[250px] md:h-[444px] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-emerald-500/30">
          <iframe
            src={BASE_URL + (muted ? PARAMS_MUTED : PARAMS_UNMUTED)}
            title="Dépannage informatique à distance Maroc – AlloSupport.ma"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        </div>
        <button
          onClick={() => setMuted(false)}
          className={`absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-xs font-semibold whitespace-nowrap transition-all ${
            muted
              ? "bg-white/95 backdrop-blur-sm text-slate-800 hover:bg-emerald-500 hover:text-white cursor-pointer"
              : "bg-emerald-500 text-white"
          }`}
        >
          {muted ? (
            <>
              <span className="inline-block w-4 h-4 bg-emerald-500 rounded-full animate-pulse" />
              🔊 Cliquez pour activer le son
            </>
          ) : (
            <>
              <span className="inline-block w-4 h-4 bg-white rounded-full" />
              ✓ Son activé
            </>
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="relative flex-shrink-0">
      <button
        type="button"
        onClick={handlePlay}
        className="relative w-[220px] h-[390px] md:w-[250px] md:h-[444px] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-emerald-500/30 block focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
        aria-label="Lire la vidéo : Dépannage informatique à distance Maroc"
      >
        <Image
          src={THUMBNAIL}
          alt=""
          fill
          sizes="(max-width: 768px) 220px, 250px"
          className="object-cover"
          unoptimized
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition hover:bg-black/40">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg" aria-hidden>
            <svg className="ml-1 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </span>
      </button>
      <p className="text-center text-slate-400 text-xs mt-2">Cliquez pour lancer la vidéo</p>
    </div>
  );
}
