"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { getGsap } from "./register";

export function createScrollTrigger(
  options: ScrollTrigger.StaticVars,
): ScrollTrigger {
  return new ScrollTrigger(options);
}

export const defaultScrollConfig = {
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play none none reverse",
} as const;

export function batchReveal(
  items: Element[] | NodeList,
  options?: ScrollTrigger.BatchVars,
): ScrollTrigger[] {
  return ScrollTrigger.batch(items as gsap.DOMTarget, {
    start: defaultScrollConfig.start,
    ...options,
    onEnter: (batch) =>
      getGsap().from(batch as gsap.TweenTarget, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
      }),
  });
}

export function refreshScrollTrigger(): void {
  ScrollTrigger.refresh();
}