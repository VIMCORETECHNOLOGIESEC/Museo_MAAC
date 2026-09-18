"use client";

import {
  ScrollTrigger,
  batchReveal,
  createScrollTrigger,
  defaultScrollConfig,
  getGsap,
} from "@/shared/gsap";

export function createHistoryReveal(root: HTMLElement): ScrollTrigger[] {
  const gsap = getGsap();
  const triggers: ScrollTrigger[] = [];

  const entries = Array.from(
    root.querySelectorAll<HTMLElement>("[data-history-entry]"),
  );
  const leftEntries = entries.filter(
    (el) => el.dataset.historyEntryAlign === "left",
  );
  const rightEntries = entries.filter(
    (el) => el.dataset.historyEntryAlign === "right",
  );

  if (leftEntries.length > 0) {
    triggers.push(
      ...batchReveal(leftEntries, {
        start: defaultScrollConfig.start,
        onEnter: (batch) =>
          gsap.from(batch, {
            opacity: 0,
            x: -40,
            y: 16,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.08,
          }),
      }),
    );
  }

  if (rightEntries.length > 0) {
    triggers.push(
      ...batchReveal(rightEntries, {
        start: defaultScrollConfig.start,
        onEnter: (batch) =>
          gsap.from(batch, {
            opacity: 0,
            x: 40,
            y: 16,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.08,
          }),
      }),
    );
  }

  const quoteEl = root.querySelector<HTMLElement>("[data-history-quote]");
  if (quoteEl) {
    triggers.push(
      createScrollTrigger({
        trigger: quoteEl,
        start: defaultScrollConfig.start,
        toggleActions: defaultScrollConfig.toggleActions,
        onEnter: () => {
          gsap.fromTo(
            quoteEl,
            { opacity: 0, filter: "blur(12px)" },
            {
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.9,
              ease: "power3.out",
            },
          );
        },
      }),
    );
  }

  const headerItems = Array.from(
    root.querySelectorAll<HTMLElement>("[data-history-header-item]"),
  );
  if (headerItems.length > 0) {
    triggers.push(
      createScrollTrigger({
        trigger: headerItems[0],
        start: defaultScrollConfig.start,
        toggleActions: defaultScrollConfig.toggleActions,
        onEnter: () => {
          gsap.from(headerItems, {
            opacity: 0,
            y: 24,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.12,
          });
        },
      }),
    );
  }

  return triggers;
}