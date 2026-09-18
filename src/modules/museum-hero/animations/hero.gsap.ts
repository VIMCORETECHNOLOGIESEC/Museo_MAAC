"use client";

import { getGsap } from "@/shared/gsap";

export function buildHeroIntro(root: HTMLElement): gsap.core.Timeline {
  const gsap = getGsap();
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.from(root.querySelectorAll("[data-hero-word]"), {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.06,
  });

  tl.from(
    "[data-hero-eyebrow]",
    { y: 20, opacity: 0, duration: 0.6 },
    "-=0.4",
  );
  tl.from(
    "[data-hero-lead]",
    { y: 20, opacity: 0, duration: 0.6 },
    "-=0.4",
  );
  tl.from(
    "[data-hero-cta]",
    { y: 20, opacity: 0, duration: 0.6 },
    "-=0.4",
  );

  tl.to(
    "[data-hero-scroll-hint]",
    {
      y: 8,
      duration: 1.2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    },
    "-=0.2",
  );

  return tl;
}