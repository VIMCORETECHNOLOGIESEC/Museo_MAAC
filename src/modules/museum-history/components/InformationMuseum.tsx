'use client';

import { useRef } from 'react';

import { useHistoryReveal } from '../hooks/useHistoryReveal';
import { useInformationParallax } from '../hooks/useInformationParallax';

export function InformationMuseum() {
  const rootRef = useRef<HTMLElement | null>(null);
  useHistoryReveal(rootRef);
  useInformationParallax(rootRef);

  return (
    <main
      ref={rootRef}
      aria-label="Conoce el MAAC"
      data-information-museum
      className="relative z-30 h-dvh overflow-hidden bg-white text-black"
    >
      <div className="flex h-dvh w-max" data-information-track>
        {/* SECTOR 01 — DESCUBRE */}
        <section className="relative isolate grid h-dvh w-[100dvw] shrink-0 overflow-hidden bg-white text-black lg:grid-cols-[minmax(0,58%)_minmax(0,42%)]">
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute inset-y-0 left-[58%] hidden w-px bg-black/15 lg:block" />
            <div className="absolute inset-x-0 top-[34%] hidden h-px bg-black/10 lg:block" />
            <div className="absolute inset-x-0 top-[66%] hidden h-px bg-black/10 lg:block" />
          </div>

          <div className="relative z-10 flex flex-col justify-between px-6 py-12 sm:px-12 lg:px-[clamp(3rem,6.2vw,7rem)] lg:py-16">
            <div className="flex items-baseline justify-between font-mono text-[0.62rem] tracking-[0.34em] text-black/55">
              <span data-history-header-item>SECTOR_01</span>
              <span data-history-header-item>02°11′08″S · 79°52′34″O</span>
            </div>

            <div className="max-w-[14ch]">
              <h2
                className="font-sans text-[clamp(4.5rem,12vw,16rem)] font-black leading-[0.82] tracking-[-0.09em]"
                data-history-entry
                data-history-entry-align="left"
              >
                <span className="block">DESCUBRE</span>
              </h2>
              <p
                className="mt-3 max-w-md font-mono text-[0.66rem] font-medium uppercase tracking-[0.34em] text-black/65"
                data-history-entry
                data-history-entry-align="left"
              >
                LAS CAPAS DE GUAYAQUIL — UN MUSEO ENTRE EL RÍO Y LA CIUDAD.
              </p>
            </div>

            <div className="max-w-md border-t border-black pt-5">
              <p
                className="font-mono text-[0.62rem] font-medium uppercase tracking-[0.34em] text-black"
                data-history-entry
                data-history-entry-align="left"
              >
                // MUSEO ANTROPOLÓGICO Y DE ARTE CONTEMPORÁNEO
              </p>
              <p
                className="mt-3 font-sans text-base leading-7 text-black/70 sm:text-lg"
                data-history-entry
                data-history-entry-align="left"
              >
                El MAAC custodia las memorias arqueológicas del Ecuador y las
                conversaciones del arte contemporáneo latinoamericano, sobre la
                ribera del río Guayas.
              </p>
              <a
                href="#coleccion"
                className="mt-7 inline-flex items-center gap-3 bg-black px-7 py-4 font-mono text-xs font-semibold tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                data-history-entry
                data-history-entry-align="left"
              >
                <span className="block h-2 w-2 bg-white transition-colors group-hover:bg-black" />
                CONOCE LA COLECCIÓN
              </a>
            </div>
          </div>

          <div className="relative z-10 hidden lg:block">
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="border border-black/8" />
              ))}
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative aspect-square w-3/5 max-w-[420px] border border-black">
                <div className="absolute inset-x-0 top-1/2 h-px bg-black" />
                <div className="absolute inset-y-0 left-1/2 w-px bg-black" />
                <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 border border-black bg-white" />
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 font-mono text-[0.6rem] tracking-[0.34em] text-black">
                  N
                </span>
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 font-mono text-[0.6rem] tracking-[0.34em] text-black/55">
                  S
                </span>
                <span className="absolute top-1/2 -right-6 -translate-y-1/2 font-mono text-[0.6rem] tracking-[0.34em] text-black/55">
                  E
                </span>
                <span className="absolute top-1/2 -left-6 -translate-y-1/2 font-mono text-[0.6rem] tracking-[0.34em] text-black/55">
                  W
                </span>
              </div>
            </div>

            <div className="absolute top-6 left-6 font-mono text-[0.6rem] uppercase tracking-[0.34em] text-black/55">
              FIG_01 / LOC
            </div>
            <div className="absolute bottom-6 right-6 max-w-44 border-t border-black/70 pt-2 text-right font-mono text-[0.6rem] uppercase tracking-[0.22em] text-black/80">
              MALECÓN SIMÓN BOLÍVAR
              <br />
              GUAYAQUIL · EC
            </div>
            <div className="absolute bottom-6 left-6 font-mono text-[0.6rem] uppercase tracking-[0.34em] text-black/45">
              ⊕ ORIGIN
            </div>
          </div>
        </section>

        {/* SECTOR 02 — COLECCIÓN */}
        <section
          id="coleccion"
          className="grid h-dvh w-[100dvw] shrink-0 bg-black text-white lg:grid-cols-[minmax(0,40%)_minmax(0,60%)]"
        >
          <div className="relative flex flex-col justify-between border-b border-white/15 px-6 py-12 sm:px-12 lg:border-b-0 lg:border-r lg:px-[clamp(3rem,6.2vw,7rem)] lg:py-16">
            <span
              className="font-mono text-[0.62rem] tracking-[0.34em] text-white/55"
              data-history-header-item
            >
              SECTOR_02
            </span>
            <h2
              className="max-w-[10ch] font-sans text-[clamp(3rem,7vw,9rem)] font-black leading-[0.86] tracking-[-0.06em]"
              data-history-entry
              data-history-entry-align="left"
            >
              10,000
              <br />
              <span className="font-mono text-[0.18em] font-medium tracking-[0.34em] text-white/75">
                AÑOS
              </span>
              <br />
              DEL ANTIGUO ECUADOR.
            </h2>
            <span className="flex items-center gap-3 font-mono text-[0.62rem] tracking-[0.34em] text-white/55">
              <span className="block h-px w-10 bg-white/45" />
              /COLECCIÓN
            </span>
          </div>

          <div className="flex flex-col justify-between px-6 py-12 sm:px-12 lg:px-[clamp(3rem,6.2vw,7rem)] lg:py-16">
            <div
              data-history-entry
              data-history-entry-align="right"
              className="border-l border-white/45 pl-5"
            >
              <p className="font-mono text-[0.62rem] font-semibold tracking-[0.34em] text-white">
                // PATRIMONIO VIVO
              </p>
              <p className="mt-6 max-w-2xl font-sans text-base leading-7 text-white/75 sm:text-lg">
                Desde culturas precolombinas hasta prácticas artísticas
                modernas, el MAAC conserva más de 50.000 piezas arqueológicas
                ecuatorianas y más de 3.400 obras de arte moderno y
                contemporáneo.
              </p>
            </div>

            <div className="mt-14 grid max-w-xl grid-cols-2 gap-10 border-t border-white/20 pt-6">
              <div
                data-history-entry
                data-history-entry-align="right"
                className="border-l border-white/30 pl-4"
              >
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.34em] text-white/55">
                  DAT_01 / ARQ
                </p>
                <p className="mt-3 font-sans text-[clamp(3.4rem,5.6vw,6.8rem)] font-black leading-[0.85] tracking-[-0.06em] text-white">
                  50K<span className="text-white/55">+</span>
                </p>
                <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-white/65">
                  PIEZAS ARQUEOLÓGICAS
                  <br />
                  COSTA · 8.000 A.C.–1.400 D.C.
                </p>
              </div>
              <div
                data-history-entry
                data-history-entry-align="right"
                className="border-l border-white/30 pl-4"
              >
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.34em] text-white/55">
                  DAT_02 / MOD
                </p>
                <p className="mt-3 font-sans text-[clamp(3.4rem,5.6vw,6.8rem)] font-black leading-[0.85] tracking-[-0.06em] text-white">
                  3.4K<span className="text-white/55">+</span>
                </p>
                <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-white/65">
                  OBRAS DE ARTE MODERNO
                  <br />Y CONTEMPORÁNEO
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTOR 03 — ESPACIO */}
        <section className="relative grid h-dvh w-[100dvw] shrink-0 overflow-hidden bg-white px-6 py-12 text-black sm:px-12 lg:grid-cols-12 lg:px-[clamp(3rem,6.2vw,7rem)] lg:py-16">
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[34%] lg:block">
            <div className="absolute inset-0 border-l border-black" />
            <div className="absolute inset-y-0 left-0 w-px bg-black/20" />
            <div className="absolute inset-y-0 left-1/3 w-px bg-black/10" />
            <div className="absolute inset-y-0 left-2/3 w-px bg-black/10" />
          </div>

          <div className="relative z-10 flex flex-col justify-between lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="block h-px w-12 bg-black" />
              <p
                className="font-mono text-[0.62rem] font-semibold tracking-[0.34em] text-black"
                data-history-header-item
              >
                SECTOR_03 // ESPACIO
              </p>
            </div>

            <div>
              <h2
                className="font-sans text-[clamp(3.4rem,9vw,12rem)] font-black leading-[0.82] tracking-[-0.08em]"
                data-history-entry
                data-history-entry-align="left"
              >
                UNA BALSA
                <br />
                DE CANA
                <br />
                GUADÚA.
              </h2>
              <p
                className="mt-6 max-w-md font-mono text-[0.66rem] font-medium uppercase tracking-[0.34em] text-black/70"
                data-history-entry
                data-history-entry-align="left"
              >
                EDIFICIO DE 10.000 M² — FORMA DE EMBARCACIÓN
                MANTEÑA-HUANCAVILCA.
              </p>
            </div>
          </div>

          <div
            className="relative z-10 mt-12 lg:col-span-5 lg:col-start-8 lg:mt-0 lg:flex lg:items-end"
            data-history-entry
            data-history-entry-align="right"
          >
            <div className="max-w-md border-t border-black pt-6">
              <p className="font-sans text-base leading-7 text-black/80 sm:text-lg">
                Inaugurado el 30 de julio de 2004 junto al río Guayas, el museo
                integra exhibición, archivo, auditorio, cine y biblioteca — un
                complejo cultural bajo el nombre de Centro Cultural Libertador
                Simón Bolívar.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-black/20 pt-5 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-black/65">
                <span>30.07.2004</span>
                <span>10.000 m²</span>
                <span>+60 MONUMENTOS</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTOR 04 — PROGRAMA */}
        <section className="relative grid h-dvh w-[100dvw] shrink-0 overflow-hidden bg-black px-6 py-12 text-white sm:px-12 lg:grid-cols-12 lg:px-[clamp(3rem,6.2vw,7rem)] lg:py-16">
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[7%] border-r border-white/20 lg:block" />
          <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-px bg-white/10 lg:block" />

          <div className="relative z-10 flex flex-col justify-between lg:col-span-7">
            <div className="flex items-center gap-4">
              <span className="block h-px w-12 bg-white" />
              <p
                className="font-mono text-[0.62rem] font-semibold tracking-[0.34em] text-white"
                data-history-header-item
              >
                SECTOR_04 // PROGRAMA
              </p>
            </div>

            <div>
              <h2
                className="max-w-[16ch] font-sans text-[clamp(2.6rem,5.4vw,6.4rem)] font-black leading-[0.88] tracking-[-0.06em]"
                data-history-entry
                data-history-entry-align="left"
              >
                EL PATRIMONIO
                <br />
                NO SE HEREDA,
                <br />
                <span className="inline-block border-l-[5px] border-white pl-4">
                  SE REESCRIBE.
                </span>
              </h2>
              <p
                className="mt-6 max-w-md font-mono text-[0.66rem] font-medium uppercase tracking-[0.34em] text-white/70"
                data-history-entry
                data-history-entry-align="left"
              >
                EXHIBICIONES · RESIDENCIAS · CONVERSACIONES ABIERTAS AL PÚBLICO.
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-white/30 pt-5">
              <span className="flex items-center gap-3 font-mono text-[0.6rem] tracking-[0.34em] text-white/70">
                <span className="block h-px w-8 bg-white/40" />
                /END_OF_SECTOR
              </span>
              <a
                href="#"
                className="group inline-flex items-center gap-3 border border-white bg-black px-6 py-3 font-mono text-xs font-semibold tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                data-history-entry
                data-history-entry-align="left"
              >
                <span className="block h-2 w-2 bg-white transition-colors group-hover:bg-black" />
                VOLVER AL INICIO
              </a>
            </div>
          </div>

          <div
            className="relative z-10 mt-12 lg:col-span-4 lg:col-start-9 lg:mt-0"
            data-history-entry
            data-history-entry-align="right"
          >
            <div className="flex h-full flex-col border border-white bg-black p-6 text-white">
              <div className="flex items-center justify-between border-b border-white/35 pb-4">
                <span className="font-mono text-[0.6rem] tracking-[0.34em]">
                  PRG_2026
                </span>
                <span className="flex items-center gap-2 font-mono text-[0.6rem] tracking-[0.34em]">
                  <span className="block h-1.5 w-1.5 bg-white" />
                  v.04
                </span>
              </div>

              <ul className="mt-6 space-y-4 font-mono text-xs leading-6">
                <li className="flex items-baseline justify-between gap-4 border-b border-white/20 pb-3">
                  <span className="text-white/55">01 — EXPO</span>
                  <span className="text-right">Ríos que cuentan</span>
                </li>
                <li className="flex items-baseline justify-between gap-4 border-b border-white/20 pb-3">
                  <span className="text-white/55">02 — CINE</span>
                  <span className="text-right">Archivo vivo</span>
                </li>
                <li className="flex items-baseline justify-between gap-4 border-b border-white/20 pb-3">
                  <span className="text-white/55">03 — CHARLA</span>
                  <span className="text-right">Memoria y ciudad</span>
                </li>
                <li className="flex items-baseline justify-between gap-4">
                  <span className="text-white/55">04 — RESIDENCIA</span>
                  <span className="text-right">Convocatoria abierta</span>
                </li>
              </ul>

              <div className="mt-auto flex items-center justify-between border-t border-white/35 pt-4 font-mono text-[0.6rem] tracking-[0.34em] text-white/65">
                <span>MAAC // GYE</span>
                <span>SCROLL →</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
