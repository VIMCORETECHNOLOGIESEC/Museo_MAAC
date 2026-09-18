import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type SectionSpacing = "sm" | "md" | "lg" | "xl" | "none";
export type SectionAs = "section" | "div" | "article" | "aside";

const spacingClasses: Record<SectionSpacing, string> = {
  none: "",
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-24 md:py-32",
  xl: "py-32 md:py-48",
};

type SectionOwnProps<T extends ElementType> = {
  as?: T;
  spacing?: SectionSpacing;
  id?: string;
  children?: ReactNode;
  className?: string;
};

export type SectionProps<T extends ElementType> = SectionOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof SectionOwnProps<T>>;

export function Section<T extends ElementType = "section">({
  as,
  spacing = "md",
  id,
  className,
  children,
  ...props
}: SectionProps<T>) {
  const Element = (as ?? "section") as ElementType;
  return (
    <Element
      {...props}
      id={id}
      className={cn("relative", spacingClasses[spacing], className)}
    >
      {children}
    </Element>
  );
}