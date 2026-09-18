import { Button } from '@/shared/ui';
import { cn } from '@/lib/utils';
import type { HeroCta } from '../types';

export type HeroCTAProps = {
  primary: HeroCta;
  secondary?: HeroCta;
  className?: string;
};

export function HeroCTA({ primary, secondary, className }: HeroCTAProps) {
  return (
    <div
      data-hero-cta
      className={cn('flex flex-wrap justify-start gap-3', className)}
    >
      <Button variant="primary" size="lg" className="cursor-pointer">
        {primary.label}
      </Button>
      {secondary ? (
        <Button variant="ghost" size="lg" className="cursor-pointer">
          {secondary.label}
        </Button>
      ) : null}
    </div>
  );
}
