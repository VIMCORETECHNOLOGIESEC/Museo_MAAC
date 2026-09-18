import { type ReactNode } from "react";

export function ContactReveal({ children }: { children: ReactNode }) {
  return (
    <section
      data-contact-reveal-root
      className="relative z-40 w-full"
      style={{ marginTop: "-100dvh" }}
    >
      {children}
    </section>
  );
}
