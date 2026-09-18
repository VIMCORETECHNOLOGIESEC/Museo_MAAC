'use client';

import { footerData, type FooterData } from '../types';

type MuseumFooterProps = {
  data?: FooterData;
  className?: string;
};

export function MuseumFooter({
  data = footerData,
  className,
}: MuseumFooterProps) {
  return (
    <footer
      className={`relative w-full h-dvh overflow-hidden bg-black text-white ${className ?? ''}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 mx-auto flex max-w-[1800px] items-baseline justify-between px-6 pt-6 font-mono text-[0.6rem] tracking-[0.34em] text-white/65 sm:px-12 lg:px-[clamp(3rem,6.2vw,7rem)]">
        <span>SECTOR_06 // FOOTER</span>
        <span className="hidden md:inline">02°11′08″S · 79°52′34″O</span>
        <span>v.04</span>
      </div>

      <div className="mx-auto w-full max-w-[1800px] px-6 pt-24 sm:px-12 md:pt-32 lg:px-[clamp(3rem,6.2vw,7rem)]">
        <div className="border-t border-white/30 pt-16">
          <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
            <h2 className="font-sans text-[clamp(3.4rem,12vw,15rem)] font-black leading-[0.82] tracking-[-0.08em] text-white">
              MAAC<span className="text-white/45">.</span>
            </h2>

            <nav aria-label="Footer">
              <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[0.66rem] uppercase tracking-[0.34em]">
                {data.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 border-t border-white/30 pt-6 md:grid-cols-3">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.34em] text-white/55">
                DIRECCIÓN
              </span>
              <span className="font-sans text-body leading-7 text-white/85">
                Av. Malecón Simón Bolívar y Calle Loja
                <br />
                Guayaquil, Ecuador
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.34em] text-white/55">
                CONTACTO
              </span>
              <span className="font-sans text-body leading-7 text-white/85">
                (04) 230 9400
                <br />
                maac@cultura.gob.ec
              </span>
            </div>

            <div className="flex flex-col gap-1 md:items-end">
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.34em] text-white/55">
                HORARIO
              </span>
              <span className="font-sans text-body leading-7 text-white/85 md:text-right">
                Lun–Vie 08h30 — 16h30
                <br />
                Sáb–Dom 09h00 — 17h00
                <br />
                Entrada Gratuita
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 w-full max-w-[1800px] border-t border-white/30 px-6 py-6 sm:px-12 lg:px-[clamp(3rem,6.2vw,7rem)]">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.34em] text-white/65">
            {data.copyright}
          </span>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.34em] text-white/45">
            {data.legal}
          </span>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1800px] px-6 pb-6 sm:px-12 lg:px-[clamp(3rem,6.2vw,7rem)]">
        <div className="flex items-center justify-between font-mono text-[0.6rem] tracking-[0.34em] text-white/45">
          <span>END_OF_PAGE</span>
          <span className="hidden md:inline">
            MAAC // GYE // MINISTERIO DE CULTURA Y PATRIMONIO
          </span>
          <span>↑</span>
        </div>
      </div>
    </footer>
  );
}
