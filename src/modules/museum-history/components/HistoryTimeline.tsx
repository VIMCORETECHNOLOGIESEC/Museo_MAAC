import { cn } from "@/lib/utils";

import { HistoryBlock } from "./HistoryBlock";
import type { HistoryEntry } from "../types";

type HistoryTimelineProps = {
  entries: HistoryEntry[];
};

export function HistoryTimeline({ entries }: HistoryTimelineProps) {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border"
      />
      <ol className="flex flex-col">
        {entries.map((entry, index) => {
          const align: "left" | "right" = index % 2 === 0 ? "left" : "right";
          const isLeft = align === "left";

          return (
            <li
              key={`${entry.year}-${index}`}
              className="relative flex flex-col md:flex-row items-stretch py-12 first:pt-0 last:pb-0"
            >
              <span
                aria-hidden
                className="absolute left-1/2 -translate-x-1/2 top-12 w-3 h-3 rounded-full bg-primary"
              />
              <div
                className={cn(
                  "md:w-1/2",
                  isLeft ? "md:pr-12 md:text-right" : "md:order-2 md:pl-12 md:text-left",
                )}
              >
                <HistoryBlock entry={entry} align={align} />
              </div>
              <div
                aria-hidden
                className={cn(
                  "hidden md:block md:w-1/2",
                  isLeft ? "md:order-2" : "",
                )}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}