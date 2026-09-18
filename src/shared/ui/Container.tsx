import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";
export type ContainerElement =
  | "div"
  | "section"
  | "article"
  | "header"
  | "footer"
  | "main"
  | "aside";

const sizeClasses: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[88rem]",
  full: "max-w-none",
};

type ContainerOwnProps<T extends ElementType> = {
  as?: T;
  size?: ContainerSize;
  children?: ReactNode;
  className?: string;
};

export type ContainerProps<T extends ElementType> = ContainerOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ContainerOwnProps<T>>;

export function Container<T extends ElementType = "div">({
  as,
  size = "lg",
  className,
  children,
  ...props
}: ContainerProps<T>) {
  const Element = (as ?? "div") as ElementType;
  return (
    <Element
      {...props}
      className={cn("w-full mx-auto px-6 md:px-8 lg:px-12", sizeClasses[size], className)}
    >
      {children}
    </Element>
  );
}