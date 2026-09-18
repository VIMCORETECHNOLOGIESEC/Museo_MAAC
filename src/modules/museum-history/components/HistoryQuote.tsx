import { BodyLarge, Small } from "@/shared/ui";

type HistoryQuoteProps = {
  quote: { text: string; attribution: string };
};

export function HistoryQuote({ quote }: HistoryQuoteProps) {
  return (
    <figure
      data-history-quote
      className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto py-16"
    >
      <BodyLarge as="blockquote" className="italic">
        &ldquo;{quote.text}&rdquo;
      </BodyLarge>
      <Small as="figcaption">&mdash; {quote.attribution}</Small>
    </figure>
  );
}