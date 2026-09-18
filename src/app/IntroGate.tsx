"use client";

import { useEffect, useState, type ReactNode } from "react";
import { MuseumIntro } from "@/modules/museum-intro";

const INTRO_DURATION_MS = 3500;
const INTRO_FADE_MS = 600;

type IntroPhase = "visible" | "fading" | "hidden";

export function IntroGate({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<IntroPhase>("visible");

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setPhase("fading"), INTRO_DURATION_MS);
    return () => window.clearTimeout(fadeTimer);
  }, []);

  useEffect(() => {
    if (phase !== "fading") return;
    const hideTimer = window.setTimeout(() => setPhase("hidden"), INTRO_FADE_MS);
    return () => window.clearTimeout(hideTimer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "visible") return;
    const scrollY = window.scrollY;
    const { overflow, position, top, width } = document.body.style;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.position = position;
      document.body.style.top = top;
      document.body.style.width = width;
      window.scrollTo(0, scrollY);
    };
  }, [phase]);

  if (phase === "hidden") return <>{children}</>;

  return (
    <>
      {children}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 transition-opacity duration-[600ms] ease-out"
        style={{ opacity: phase === "fading" ? 0 : 1 }}
        aria-hidden={phase === "fading"}
      >
        <MuseumIntro />
      </div>
    </>
  );
}
