"use client";

import { useEffect, useLayoutEffect, type RefObject } from "react";

import { createInformationParallax } from "../animations/information.parallax";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useInformationParallax(
  rootRef: RefObject<HTMLElement | null>,
): void {
  useIsomorphicLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const triggers = createInformationParallax(root);

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, [rootRef]);
}
