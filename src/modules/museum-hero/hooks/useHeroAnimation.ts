"use client";

import { useEffect, useLayoutEffect, type RefObject } from "react";
import { buildHeroIntro } from "../animations/hero.gsap";
import { createHeroParallax } from "../animations/hero.parallax";
import { createHeroHistoryParallax } from "../animations/hero.historyParallax";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useHeroAnimation(
  rootRef: RefObject<HTMLElement | null>,
): void {
  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const timeline = buildHeroIntro(root);
    const backdropTrigger = createHeroParallax(root);
    const historyTrigger = createHeroHistoryParallax(root);

    return () => {
      timeline.kill();
      backdropTrigger.kill();
      historyTrigger?.kill();
    };
  }, [rootRef]);
}