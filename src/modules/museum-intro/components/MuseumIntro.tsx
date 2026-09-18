"use client";

import { useEffect, useState } from "react";
import { MuseumMark } from "@/shared/ui";

const museumMarks = [0, 1, 2, 3, 4];

export function MuseumIntro() {
  const [activeMark, setActiveMark] = useState(0);

  useEffect(() => {
    const iconTimer = window.setInterval(() => {
      setActiveMark((current) => (current + 1) % museumMarks.length);
    }, 1000);
    return () => window.clearInterval(iconTimer);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 flex h-dvh w-full flex-col items-center bg-[var(--color-intro-background)] px-6 py-6 text-[var(--color-intro-ink)] sm:px-10 sm:py-8">
      <div className="flex border border-current" aria-label="MAAC Museo">
        <div className="flex size-12 items-center justify-center bg-[var(--color-intro-ink)] p-2 text-[var(--color-intro-background)]">
          <MuseumMark variant={0} />
        </div>
        <span className="flex items-center px-3 text-lg font-bold tracking-tight sm:text-xl">MAAC MUSEO</span>
      </div>

      <p
        className="flex flex-1 items-center text-center text-[clamp(4rem,13vw,9rem)] font-light leading-none tracking-[-0.08em]"
        aria-live="polite"
        aria-label="Cargando el museo"
      >
        Load
        <span key={activeMark} className="maac-intro-icon mx-[0.06em] inline-block size-[0.85em]">
          <MuseumMark variant={museumMarks[activeMark]} />
        </span>
        ing
      </p>
    </div>
  );
}
