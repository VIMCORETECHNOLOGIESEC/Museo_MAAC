import { type ElementType } from "react";
import { Eyebrow } from "@/shared/ui";

export type HeroEyebrowProps = {
  eyebrow: string;
  as?: ElementType;
  className?: string;
};

export function HeroEyebrow({ eyebrow, as, className }: HeroEyebrowProps) {
  return (
    <Eyebrow as={as} className={className} data-hero-eyebrow>
      {eyebrow}
    </Eyebrow>
  );
}