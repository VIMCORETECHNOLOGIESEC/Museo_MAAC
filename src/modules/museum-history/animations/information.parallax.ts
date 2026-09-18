"use client";

import { ScrollTrigger, getGsap } from "@/shared/gsap";

export function createInformationParallax(root: HTMLElement): ScrollTrigger[] {
  const gsap = getGsap();
  const track = root.querySelector<HTMLElement>("[data-information-track]");
  const triggers: ScrollTrigger[] = [];

  if (!track) return triggers;

  const firstPanel = track.firstElementChild;
  if (!(firstPanel instanceof HTMLElement)) return triggers;

  const panelCount = track.children.length;
  const getHorizontalDistance = () =>
    firstPanel.offsetWidth * Math.max(panelCount - 1, 0);

  const horizontalTween = gsap.timeline({
    scrollTrigger: {
      id: "information-parallax",
      trigger: firstPanel,
      start: "top top",
      // Keep the final sector pinned for one viewport while contact enters.
      end: () => `+=${getHorizontalDistance() + window.innerHeight}`,
      pin: root,
      pinSpacing: true,
      scrub: 0.6,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  horizontalTween
    .to(track, {
      x: () => -getHorizontalDistance(),
      duration: () => getHorizontalDistance(),
      ease: "none",
    })
    .to({}, { duration: () => window.innerHeight });

  const horizontalTrigger = horizontalTween.scrollTrigger;
  if (!horizontalTrigger) return triggers;

  triggers.push(horizontalTrigger);

  ScrollTrigger.refresh();

  return triggers;
}
