import { Small } from "@/shared/ui";
import { cn } from "@/lib/utils";

export type HeroScrollHintProps = {
  className?: string;
};

export function HeroScrollHint({ className }: HeroScrollHintProps) {
  return (
    <div
      data-hero-scroll-hint
      aria-hidden="true"
      className={cn(
        "absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground",
        className,
      )}
    >
      <Small className="text-[10px] uppercase tracking-[0.3em]">Scroll</Small>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 6L8 11L13 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}