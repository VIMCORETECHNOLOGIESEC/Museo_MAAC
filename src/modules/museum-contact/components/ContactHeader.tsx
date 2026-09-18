import { cn } from "@/lib/utils";

type ContactHeaderProps = {
  eyebrow: string;
  title: string;
  lead: string;
  className?: string;
};

export function ContactHeader({
  eyebrow,
  title,
  lead,
  className,
}: ContactHeaderProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div
        data-history-header-item
        className="flex items-center gap-4"
      >
        <span aria-hidden className="h-px w-10 bg-black" />
        <span className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-black/70">
          {eyebrow}
        </span>
      </div>

      <h2
        data-history-header-item
        className="mt-6 max-w-[12ch] font-sans text-[clamp(3rem,7.6vw,9rem)] font-black leading-[0.84] tracking-[-0.07em] text-black"
      >
        {title}.
      </h2>

      <p
        data-history-header-item
        className="mt-8 max-w-md font-mono text-[0.66rem] font-medium uppercase tracking-[0.34em] text-black/65"
      >
        {lead}
      </p>
    </div>
  );
}
