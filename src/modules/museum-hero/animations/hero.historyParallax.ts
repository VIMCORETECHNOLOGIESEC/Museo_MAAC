"use client";

import { ScrollTrigger, getGsap } from "@/shared/gsap";

export function createHeroHistoryParallax(
  hero: HTMLElement,
): ScrollTrigger | null {
  const gsap = getGsap();
  const history = document.querySelector<HTMLElement>("[data-history-section]");

  if (!history) return null;

  hero.style.zIndex = "10";
  history.style.zIndex = "20";

  const tl = gsap.timeline({
    defaults: { ease: "power1.inOut" },
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "+=100%",
      pin: hero,
      scrub: 0.6,
    },
  });

  tl.fromTo(
    history,
    { y: () => window.innerHeight },
    { y: () => -window.innerHeight },
  );

  tl.fromTo(
    hero,
    { filter: "blur(0px) saturate(1) brightness(1)" },
    {
      filter: "blur(16px) saturate(0) brightness(1.4)",
    },
    0,
  );

  return tl.scrollTrigger ?? null;
}
