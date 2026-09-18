import { MuseumMark } from '@/shared/ui';
import Link from 'next/link';

export function MuseumHeader() {
  return (
    <header className="relative z-[60] w-full bg-[#f5e9d8] px-4 text-[#4a2d26] sm:px-7">
      <nav
        className="mx-auto grid max-w-[1800px] grid-cols-[1fr_auto_1fr] items-center border-b border-[#4a2d26] py-[0.9rem] text-[1.2rem] tracking-[0.12em] uppercase"
        aria-label="Navegación principal"
      >
        <Link
          href="/"
          className="w-fit font-serif text-base font-bold tracking-[0.02em] transition-opacity hover:opacity-55 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4"
          aria-label="MAAC, ir al inicio"
        >
          MAAC
        </Link>
        <div className="flex border border-current" aria-label="MAAC Museo">
          <div className="flex size-12 items-center justify-center bg-[var(--color-intro-ink)] p-2 text-[var(--color-intro-background)]">
            <MuseumMark variant={0} />
          </div>
          <span className="flex items-center px-3 text-lg font-bold tracking-tight sm:text-xl">
            MAAC MUSEO
          </span>
        </div>
        <Link
          href="/colections"
          className="justify-self-end transition-opacity hover:opacity-55 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4"
        >
          Colección
        </Link>
      </nav>
    </header>
  );
}
