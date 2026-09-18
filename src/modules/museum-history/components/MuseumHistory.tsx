'use client';

import { useRef } from 'react';

import { useHistoryReveal } from '../hooks/useHistoryReveal';
import { HistoryIntro } from './HistoryIntro';

export function MuseumHistory() {
  const rootRef = useRef<HTMLElement | null>(null);
  useHistoryReveal(rootRef);

  return (
    <section
      ref={rootRef}
      data-history-section
      className="relative h-[190dvh] w-full bg-white text-black"
    >
      <HistoryIntro />

      <div className="pointer-events-none absolute inset-x-0 top-[60%] z-0 mx-auto h-px max-w-[1800px] bg-black/15" />

      <figure className="relative mx-auto -mt-40 max-w-[1800px] px-0 pb-10">
        <img
          src="/MAAC__PENCIL.png"
          alt="Ilustración arquitectónica del Museo Antropológico y de Arte Contemporáneo de Guayaquil"
          className="mx-auto block w-full select-none"
          draggable={false}
        />
        <figcaption className="mx-auto mt-3 flex max-w-[1200px] items-center justify-between font-mono text-[1.2rem] tracking-[0.34em] text-black/55">
          <span>FIG_00 / MAAC</span>
          <span className="hidden md:inline">
            MALECÓN SIMÓN BOLÍVAR · GUAYAQUIL · EC
          </span>
          <span>30.07.2004</span>
        </figcaption>
      </figure>
    </section>
  );
}
