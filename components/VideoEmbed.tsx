"use client";

import { useState } from "react";

const VIDEO_ID = "2RPhvTiQkiI";
const BASE_URL = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}`;
const PARAMS_MUTED = "?rel=0&modestbranding=1&controls=1&autoplay=1&mute=1&loop=1&playlist=" + VIDEO_ID;
const PARAMS_UNMUTED = "?rel=0&modestbranding=1&controls=1&autoplay=1&mute=0&loop=1&playlist=" + VIDEO_ID;

export default function VideoEmbed() {
  const [muted, setMuted] = useState(true);

  return (
    <div className="relative flex-shrink-0">
      <div className="relative w-[220px] h-[390px] md:w-[250px] md:h-[444px] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-emerald-500/30">
        <iframe
          src={BASE_URL + (muted ? PARAMS_MUTED : PARAMS_UNMUTED)}
          title="Dépannage informatique à distance Maroc – AlloSupport.ma"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
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
