'use client';

import { useRef, useState } from 'react';

import { useHistoryReveal } from '../hooks/useHistoryReveal';
import { useInformationParallax } from '../hooks/useInformationParallax';

export function InformationMuseum() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [activeFigure, setActiveFigure] = useState<number | null>(null);
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
        <section className="relative isolate grid h-dvh w-[110dvw] shrink-0 overflow-hidden bg-white text-black lg:grid-cols-[minmax(0,58%)_minmax(0,42%)]">
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

            <div className="w-full">
              <h2
                className="max-w-[14ch] font-sans text-[clamp(4.5rem,12vw,16rem)] font-black leading-[0.82] tracking-[-0.09em]"
                data-history-entry
                data-history-entry-align="left"
              >
                <span className="block">DESCUBRE</span>
              </h2>
              <p className="mt-6 w-full max-w-none font-sans text-base leading-7 text-[#4a2d26] sm:text-lg">
                Desde culturas precolombinas hasta prácticas artísticas
                modernas, el MAAC conserva más de 50.000 piezas arqueológicas
                ecuatorianas y más de 3.400 obras de arte moderno y
                contemporáneo.
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

          <div className="relative z-10 hidden items-center justify-center lg:flex">
            <img
              src="/figuras/macacoo.png"
              alt="Figura arqueológica de la colección del MAAC"
              className="h-[82%] w-auto max-w-[82%] object-contain"
            />

            <span className="absolute top-6 left-1/2 -translate-x-1/2 font-mono text-[0.6rem] tracking-[0.34em] text-black">
              N
            </span>
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[0.6rem] tracking-[0.34em] text-black/55">
              S
            </span>
            <span className="absolute top-1/2 right-6 -translate-y-1/2 font-mono text-[0.6rem] tracking-[0.34em] text-black/55">
              E
            </span>
            <span className="absolute top-1/2 left-6 -translate-y-1/2 font-mono text-[0.6rem] tracking-[0.34em] text-black/55">
              W
            </span>

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
          className="relative flex h-dvh w-[102vw] shrink-0 flex-col overflow-hidden -ml-10 bg-[#4a2d26] text-[#f7ead9]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-6 top-6 z-20 font-serif text-3xl leading-none text-[#f7ead9]/45 sm:left-12 sm:top-10 sm:text-4xl lg:left-16"
          >
            <span className="block">𓂀 𓆣</span>
            <span className="mt-2 block text-xs tracking-[0.45em]">𓏏 𓎛 𓂋</span>
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-6 top-6 z-20 text-right font-serif text-3xl leading-none text-[#f7ead9]/45 sm:right-12 sm:top-10 sm:text-4xl lg:right-16"
          >
            <span className="block">𓅓 𓆑</span>
            <span className="mt-2 block text-xs tracking-[0.45em]">𓊪 𓏏 𓊃</span>
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center px-6 pt-8 sm:px-12 lg:pt-12">
            <div className="text-center">
              <span
                className="font-mono text-[0.62rem] tracking-[0.34em] text-[#f7ead9]/55"
                data-history-header-item
              >
                HISTORIA - CULTURA
              </span>
              <h2
                className="mt-5 w-[min(94vw,1200px)] max-w-none font-sans text-[clamp(3.8rem,10.5vw,11rem)] font-black leading-[0.8] tracking-[-0.1em] text-[#f7ead9]"
                data-history-entry
                data-history-entry-align="left"
              >
                <span className="block whitespace-nowrap">
                  10,000
                  <span className="ml-3 align-middle font-mono text-[0.16em] font-medium tracking-[0.34em] text-[#f7ead9]/70">
                    AÑOS
                  </span>
                </span>
                <span className="flex w-full items-center justify-center gap-[clamp(2rem,3.8vw,3.8rem)] whitespace-nowrap">
                  <span>DEL AN</span>
                  <span>TIGUO</span>
                </span>
                <span className="flex w-full items-center justify-center gap-[clamp(2.1rem,4.2vw,4.2rem)] whitespace-nowrap">
                  <span>ECUA</span>
                  <span className="ml-40">DOR.</span>
                </span>
              </h2>
            </div>
          </div>

          <img
            src="/figuras/figura_1.png"
            alt="Pieza arqueológica de la colección del MAAC"
            className="pointer-events-none absolute bottom-[-20%] left-1/2 z-30 h-[75%] w-auto -translate-x-1/2 object-contain opacity-95 sm:h-[85%] lg:h-[100%]"
          />

          <div className="relative z-20 mt-auto grid grid-cols-1 gap-8 px-6 pb-8 sm:px-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,28rem)_minmax(0,1fr)] lg:items-end lg:gap-12 lg:px-[clamp(3rem,6.2vw,7rem)] lg:pb-12">
            <div
              data-history-entry
              data-history-entry-align="left"
              className="max-w-sm border-l border-[#f7ead9]/45 pl-5 lg:mb-3"
            >
              <p className="font-mono text-[0.62rem] font-semibold tracking-[0.34em] text-[#f7ead9]">
                PATRIMONIO NACIONAL
              </p>
              <p className="mt-4 max-w-[34ch] font-sans text-sm leading-6 text-[#f7ead9]/75 sm:text-base sm:leading-7">
                El MAAC conserva la memoria material del Ecuador: culturas
                precolombinas, prácticas artísticas modernas y relatos que
                siguen vivos en el presente.
              </p>
            </div>

            <div className="relative z-20 grid grid-cols-2 gap-5 border-t border-[#f7ead9]/25 pt-4 lg:col-start-3 lg:mb-3 lg:gap-8">
              <div
                data-history-entry
                data-history-entry-align="right"
                className="border-l border-[#f7ead9]/30 pl-4"
              >
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.34em] text-[#f7ead9]/55">
                  DAT_01 / ARQ
                </p>
                <p className="mt-3 font-sans text-[clamp(2.8rem,4.8vw,5.5rem)] font-black leading-[0.85] tracking-[-0.06em] text-[#f7ead9]">
                  50K<span className="text-[#f7ead9]/55">+</span>
                </p>
                <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-[#f7ead9]/65">
                  PIEZAS ARQUEOLÓGICAS
                  <br />
                  COSTA · 8.000 A.C.–1.400 D.C.
                </p>
              </div>
              <div
                data-history-entry
                data-history-entry-align="right"
                className="border-l border-[#f7ead9]/30 pl-4"
              >
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.34em] text-[#f7ead9]/55">
                  DAT_02 / MOD
                </p>
                <p className="mt-3 font-sans text-[clamp(2.8rem,4.8vw,5.5rem)] font-black leading-[0.85] tracking-[-0.06em] text-[#f7ead9]">
                  3.4K<span className="text-[#f7ead9]/55">+</span>
                </p>
                <p className="mt-3 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-[#f7ead9]/65">
                  OBRAS DE ARTE MODERNO
                  <br />Y CONTEMPORÁNEO
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTOR 03 — ESPACIO */}
        <section className="relative grid h-dvh w-[105dvw] shrink-0 overflow-hidden bg-white px-20 py-12 text-black sm:px-12 lg:grid-cols-12 lg:pl-[clamp(3rem,6.2vw,7rem)] lg:pr-0 lg:py-16">
          <img
            src="/figuras/figura_3.png"
            alt="Figura arqueológica con tocado de la colección del MAAC"
            className="pointer-events-none absolute bottom-[-50%] z-0 hidden h-[150%] w-auto object-contain opacity-90 lg:block"
          />
          <div className="absolute left-[40%] top-[10%]">
            <div className="relative z-10 flex flex-col items-end justify-between text-right lg:col-span-7 lg:col-start-6 lg:w-full lg:justify-self-end">
              <div className="flex items-center justify-end gap-4">
                <span className="block h-px w-12 bg-black" />
                <p
                  className="font-mono text-[0.62rem] font-semibold tracking-[0.34em] text-black"
                  data-history-header-item
                >
                  HISTORIAS QUE NO VUELVEN
                </p>
              </div>

              <div>
                <h2
                  className="font-sans text-[clamp(3.4rem,9vw,12rem)] font-black leading-[0.82] tracking-[-0.08em] text-right"
                  data-history-entry
                  data-history-entry-align="right"
                >
                  CEREMONIA
                  <br />
                  VIVENCIA
                  <br />
                  HISTORIA
                </h2>
              </div>
            </div>

            <div
              className="relative z-10 mt-12 text-right lg:col-span-6 lg:col-start-7 lg:mt-0 lg:flex lg:w-full lg:items-end lg:justify-self-end"
              data-history-entry
              data-history-entry-align="right"
            >
              <div className="ml-auto w-full max-w-md border-t border-black pt-6 text-right">
                <p className="font-sans text-base leading-7 text-black/80 sm:text-lg">
                  Inaugurado el 30 de julio de 2004 junto al río Guayas, el
                  museo integra exhibición, archivo, auditorio, cine y
                  biblioteca — un complejo cultural bajo el nombre de Centro
                  Cultural Libertador Simón Bolívar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTOR 04 — GALERÍA */}
        <section className="relative flex h-dvh w-[120dvw] shrink-0 flex-col overflow-hidden bg-[#4a2d26] px-6 py-10 text-[#f7ead9] sm:px-12 lg:px-[clamp(3rem,6.2vw,7rem)] lg:py-12">
          <div className="pointer-events-none absolute inset-x-0 top-[29%] h-px bg-[#f7ead9]/20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-[10%] h-px bg-[#f7ead9]/20" />
          <div className="pointer-events-none absolute left-[24%] top-[9%] z-20 h-36 w-96 rounded-full bg-[#f7ead9]/28 blur-[52px]" />
          <div className="pointer-events-none absolute left-1/2 top-[15%] z-20 h-28 w-[34rem] -translate-x-1/2 rounded-full bg-[#f7ead9]/24 blur-[48px]" />
          <div className="pointer-events-none absolute right-[20%] top-[8%] z-20 h-36 w-80 rounded-full bg-[#f7ead9]/24 blur-[56px]" />

          <div className="relative z-30 text-center">
            <p
              className="font-mono text-[0.62rem] font-semibold tracking-[0.34em] text-[#f7ead9]/65"
              data-history-header-item
            >
              SECTOR_04 // GALERÍA VIVA
            </p>
            <h2
              className="mt-4 font-sans text-[clamp(4.6rem,9vw,11.5rem)] font-black leading-[0.8] tracking-[-0.09em]"
              data-history-entry
              data-history-entry-align="left"
            >
              EL PATRIMONIO SE ACTIVA.
            </h2>
          </div>

          <div className="absolute inset-x-0 -bottom-[20%] z-10 flex h-[68%] items-center justify-center">
            <button
              type="button"
              aria-label="Iluminar figura 1"
              aria-pressed={activeFigure === 1}
              onClick={() => setActiveFigure(1)}
              className="relative -mx-12 flex min-h-0 items-end justify-center border-0 bg-transparent p-0 lg:-mx-20"
            >
              {activeFigure === 1 && (
                <>
                  <span className="pointer-events-none absolute inset-x-[-45%] bottom-[8%] z-0 h-[68%] rounded-full bg-[#f7ead9]/32 blur-[70px]" />
                  <span className="pointer-events-none absolute bottom-[18%] z-0 font-sans text-[clamp(3rem,7vw,8rem)] font-black leading-none tracking-[-0.09em] text-[#f7ead9]/35">
                    FIGURA 01
                  </span>
                </>
              )}
              <img
                src="/figuras/figura_1.png"
                alt="Pieza arqueológica de la colección del MAAC"
                className={`relative z-10 h-[150%] max-w-full object-contain transition-[filter] duration-500 motion-reduce:transition-none ${activeFigure === 1 ? 'brightness-100 saturate-100 drop-shadow-[0_0_38px_rgba(247,234,217,0.5)]' : 'brightness-[0.42] saturate-[0.55] drop-shadow-[0_18px_25px_rgba(0,0,0,0.35)]'}`}
              />
            </button>
            <button
              type="button"
              aria-label="Iluminar figura 2"
              aria-pressed={activeFigure === 2}
              onClick={() => setActiveFigure(2)}
              className="relative -mx-12 flex min-h-0 items-end justify-center border-0 bg-transparent p-0 lg:-mx-20"
            >
              {activeFigure === 2 && (
                <>
                  <span className="pointer-events-none absolute inset-x-[-45%] bottom-[8%] z-0 h-[68%] rounded-full bg-[#f7ead9]/32 blur-[70px]" />
                  <span className="pointer-events-none absolute bottom-[18%] z-0 font-sans text-[clamp(3rem,7vw,8rem)] font-black leading-none tracking-[-0.09em] text-[#f7ead9]/35">
                    FIGURA 02
                  </span>
                </>
              )}
              <img
                src="/figuras/figura_2.png"
                alt="Figura ceremonial de la colección del MAAC"
                className={`relative z-10 h-[130%] max-w-full object-contain transition-[filter] duration-500 motion-reduce:transition-none ${activeFigure === 2 ? 'brightness-100 saturate-100 drop-shadow-[0_0_38px_rgba(247,234,217,0.5)]' : 'brightness-[0.42] saturate-[0.55] drop-shadow-[0_18px_25px_rgba(0,0,0,0.35)]'}`}
              />
            </button>
            <button
              type="button"
              aria-label="Iluminar figura 3"
              aria-pressed={activeFigure === 3}
              onClick={() => setActiveFigure(3)}
              className="relative -mx-12 flex min-h-0 items-end justify-center border-0 bg-transparent p-0 lg:-mx-20"
            >
              {activeFigure === 3 && (
                <>
                  <span className="pointer-events-none absolute inset-x-[-45%] bottom-[8%] z-0 h-[68%] rounded-full bg-[#f7ead9]/32 blur-[70px]" />
                  <span className="pointer-events-none absolute bottom-[18%] z-0 font-sans text-[clamp(3rem,7vw,8rem)] font-black leading-none tracking-[-0.09em] text-[#f7ead9]/35">
                    FIGURA 03
                  </span>
                </>
              )}
              <img
                src="/figuras/figura_3.png"
                alt="Figura arqueológica con tocado de la colección del MAAC"
                className={`relative z-10 h-[150%] max-w-full object-contain transition-[filter] duration-500 motion-reduce:transition-none ${activeFigure === 3 ? 'brightness-100 saturate-100 drop-shadow-[0_0_38px_rgba(247,234,217,0.5)]' : 'brightness-[0.42] saturate-[0.55] drop-shadow-[0_18px_25px_rgba(0,0,0,0.35)]'}`}
              />
            </button>
            <button
              type="button"
              aria-label="Iluminar figura 4"
              aria-pressed={activeFigure === 4}
              onClick={() => setActiveFigure(4)}
              className="relative -ml-24 -mr-12 flex min-h-0 items-end justify-center border-0 bg-transparent p-0 lg:-ml-40 lg:-mr-20"
            >
              {activeFigure === 4 && (
                <>
                  <span className="pointer-events-none absolute inset-x-[-45%] bottom-[8%] z-0 h-[68%] rounded-full bg-[#f7ead9]/32 blur-[70px]" />
                  <span className="pointer-events-none absolute bottom-[18%] z-0 font-sans text-[clamp(3rem,7vw,8rem)] font-black leading-none tracking-[-0.09em] text-[#f7ead9]/35">
                    FIGURA 04
                  </span>
                </>
              )}
              <img
                src="/figuras/figura_4.png"
                alt="Escultura arqueológica de la colección del MAAC"
                className={`relative z-10 h-[150%] max-w-full object-contain transition-[filter] duration-500 motion-reduce:transition-none ${activeFigure === 4 ? 'brightness-100 saturate-100 drop-shadow-[0_0_38px_rgba(247,234,217,0.5)]' : 'brightness-[0.42] saturate-[0.55] drop-shadow-[0_18px_25px_rgba(0,0,0,0.35)]'}`}
              />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
