import { Display } from "@/shared/ui";
import { cn } from "@/lib/utils";

export type HeroTitleProps = {
  title: string;
  className?: string;
};

export function HeroTitle({ title, className }: HeroTitleProps) {
  const words = title.split(/\s+/).filter(Boolean);
  return (
    <Display className={cn("flex flex-wrap justify-start gap-x-3 gap-y-1", className)}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span data-hero-word className="inline-block">
            {word}
          </span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </Display>
  );
}