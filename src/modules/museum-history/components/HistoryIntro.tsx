import { cn } from '@/lib/utils';
import { historyData } from '../types';

export type HistoryIntroProps = {
  className?: string;
};

export function HistoryIntro({ className }: HistoryIntroProps) {
  const { eyebrow, title, titleAccent, lead } = historyData;

  const [before, after] = titleAccent
    ? title.split(titleAccent)
    : [title, undefined];

  return (
    <div
      className={cn(
        'relative mx-auto z-50 flex w-full max-w-[1400px] flex-col items-center justify-center px-6 py-[18vh] text-center text-black',
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/10"
      />

      <div
        data-history-header-item
        className="relative flex items-center gap-4"
      >
        <span aria-hidden className="h-px w-8 bg-black/40 md:w-12" />
        <span className="font-mono text-[1.24rem] font-semibold uppercase tracking-[0.34em] text-black/70">
          {eyebrow}
        </span>
        <span aria-hidden className="h-px w-8 bg-black/40 md:w-12" />
      </div>

      <h2
        data-history-header-item
        className="relative mt-8 max-w-[14ch] font-sans text-[clamp(3rem,9vw,11rem)] font-black leading-[0.82] tracking-[-0.08em] text-black"
      >
        {before}
        {after !== undefined && titleAccent ? (
          <span className="relative -mx-1 inline-block bg-black px-2 italic text-white">
            {titleAccent}
          </span>
        ) : null}
        {after}
      </h2>
    </div>
  );
}
