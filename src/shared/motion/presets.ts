import type { Transition } from "motion/react";

export const transitions = {
  fast: { duration: 0.2, ease: [0.16, 1, 0.3, 1] as const },
  base: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  slow: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  slower: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as const },
} satisfies Record<string, Transition>;