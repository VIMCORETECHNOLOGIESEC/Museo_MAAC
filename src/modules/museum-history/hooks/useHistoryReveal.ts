"use client";

import { useEffect, useRef, type RefObject } from "react";

import { createHistoryReveal } from "../animations/history.gsap";

export function useHistoryReveal(
  rootRef: RefObject<HTMLElement | null>,
): void {
  const triggersRef = useRef<ReturnType<typeof createHistoryReveal>>([]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const triggers = createHistoryReveal(root);
    triggersRef.current = triggers;

    return () => {
      triggersRef.current.forEach((trigger) => trigger.kill());
      triggersRef.current = [];
    };
  }, [rootRef]);
}