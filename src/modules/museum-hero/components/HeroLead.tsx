import { Lead } from "@/shared/ui";

export type HeroLeadProps = {
  lead: string;
  className?: string;
};

export function HeroLead({ lead, className }: HeroLeadProps) {
  return (
    <Lead className={className} data-hero-lead>
      {lead}
    </Lead>
  );
}