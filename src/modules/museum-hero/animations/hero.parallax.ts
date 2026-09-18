"use client";

import {
  ScrollTrigger,
  createScrollTrigger,
  getGsap,
} from "@/shared/gsap";

export function createHeroParallax(root: HTMLElement): ScrollTrigger {
  const gsap = getGsap();
  const backdrop = root.querySelector<HTMLElement>("[data-hero-backdrop]");

  if (!backdrop) {
    return createScrollTrigger({
      trigger: root,
      start: "top top",
      end: "bottom top",
      scrub: true,
    });
  }

  const tween = gsap.fromTo(
    backdrop,
    { y: 0 },
    {
      y: 80,
      ease: "none",
      scrollTrigger: {
        trigger: root,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    },
  );

  if (tween.scrollTrigger) {
    return tween.scrollTrigger;
  }

  return createScrollTrigger({
    trigger: root,
    start: "top top",
    end: "bottom top",
    scrub: true,
  });
}