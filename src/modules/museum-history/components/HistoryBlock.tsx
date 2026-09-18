import { Body, Eyebrow, H4 } from "@/shared/ui";

import type { HistoryEntry } from "../types";

type HistoryBlockProps = {
  entry: HistoryEntry;
  align: "left" | "right";
};

export function HistoryBlock({ entry, align }: HistoryBlockProps) {
  return (
    <article
      data-history-entry
      data-history-entry-align={align}
      className="flex flex-col gap-3"
    >
      <Eyebrow as="h3">{entry.year}</Eyebrow>
      <H4>{entry.title}</H4>
      <Body>{entry.body}</Body>
    </article>
  );
}