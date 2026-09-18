import { type ComponentPropsWithoutRef, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type TextOwnProps = {
  as?: ElementType;
  className?: string;
  children?: ReactNode;
};

export type TextProps<T extends ElementType = "p"> = TextOwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof TextOwnProps>;

function Text<T extends ElementType>({
  as,
  className,
  children,
  baseClassName,
  ...props
}: TextProps<T> & { baseClassName: string }) {
  const Element = (as ?? "p") as ElementType;
  return (
    <Element {...props} className={cn(baseClassName, className)}>
      {children}
    </Element>
  );
}

export const Display = ({ as, ...props }: TextProps<"h1">) => (
  <Text
    as={as ?? "h1"}
    {...props}
    baseClassName="text-display font-serif leading-tight tracking-tight"
  />
);

export const H1 = ({ as, ...props }: TextProps<"h1">) => (
  <Text
    as={as ?? "h1"}
    {...props}
    baseClassName="text-h1 font-serif leading-tight tracking-tight"
  />
);

export const H2 = ({ as, ...props }: TextProps<"h2">) => (
  <Text
    as={as ?? "h2"}
    {...props}
    baseClassName="text-h2 font-serif leading-snug tracking-tight"
  />
);

export const H3 = ({ as, ...props }: TextProps<"h3">) => (
  <Text
    as={as ?? "h3"}
    {...props}
    baseClassName="text-h3 font-sans leading-snug"
  />
);

export const H4 = ({ as, ...props }: TextProps<"h4">) => (
  <Text
    as={as ?? "h4"}
    {...props}
    baseClassName="text-h4 font-sans leading-snug"
  />
);

export const BodyLarge = ({ as, ...props }: TextProps<"p">) => (
  <Text
    as={as ?? "p"}
    {...props}
    baseClassName="text-body-lg font-sans leading-relaxed"
  />
);

export const Body = ({ as, ...props }: TextProps<"p">) => (
  <Text
    as={as ?? "p"}
    {...props}
    baseClassName="text-body font-sans leading-normal"
  />
);

export const Small = ({ as, ...props }: TextProps<"p">) => (
  <Text
    as={as ?? "p"}
    {...props}
    baseClassName="text-small font-sans leading-normal text-muted-foreground"
  />
);

export const Lead = ({ as, ...props }: TextProps<"p">) => (
  <Text
    as={as ?? "p"}
    {...props}
    baseClassName="text-body-lg font-sans leading-relaxed text-muted-foreground"
  />
);

export const Eyebrow = ({ as, ...props }: TextProps<"span">) => (
  <Text
    as={as ?? "span"}
    {...props}
    baseClassName="text-small font-sans uppercase tracking-wide text-muted-foreground"
  />
);