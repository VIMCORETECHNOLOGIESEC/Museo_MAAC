import { MuseumMark } from '@/shared/ui';

export function MuseumHeader() {
  return (
    <header className="fixed top-0 left-0 z-40 flex w-full justify-center px-6 pt-6 sm:px-10 sm:pt-8">
      <div
        className="flex border border-[var(--color-intro-ink)]"
        aria-label="MAAC Museo"
      >
        <div className="flex size-12 items-center justify-center bg-[var(--color-intro-ink)] p-2 text-[var(--color-intro-background)]">
          <MuseumMark variant={0} />
        </div>
        <span className="flex bg-white items-center px-3 text-lg font-bold tracking-tight sm:text-xl">
          MAAC MUSEO
        </span>
      </div>
    </header>
  );
}
