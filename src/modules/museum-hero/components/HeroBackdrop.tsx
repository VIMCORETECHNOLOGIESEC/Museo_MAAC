import { cn } from "@/lib/utils";

export type HeroBackdropProps = {
  className?: string;
};

export function HeroBackdrop({ className }: HeroBackdropProps) {
  return (
    <>
      <div
        data-hero-backdrop
        aria-hidden="true"
        className={cn(
          "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,var(--color-primary)_0%,transparent_60%),radial-gradient(ellipse_at_top,var(--color-surface)_0%,transparent_70%)] opacity-20",
          className,
        )}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-black/30"
      />
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-y-0 left-0 -z-10 w-full md:w-3/4",
          "bg-[radial-gradient(ellipse_at_30%_60%,rgba(74,45,38,0.55)_0%,transparent_65%),radial-gradient(ellipse_at_10%_30%,rgba(74,45,38,0.4)_0%,transparent_60%),radial-gradient(ellipse_at_60%_80%,rgba(74,45,38,0.3)_0%,transparent_55%)]",
          "blur-2xl",
        )}
      />
    </>
  );
}
