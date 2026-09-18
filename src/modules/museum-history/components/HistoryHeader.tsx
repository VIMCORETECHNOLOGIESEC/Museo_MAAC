import { Display, Eyebrow, Lead } from '@/shared/ui';

type HistoryHeaderProps = {
  eyebrow: string;
  title: string;
  lead: string;
};

export function HistoryHeader({ eyebrow, title, lead }: HistoryHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
      <div data-history-header-item>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <div data-history-header-item>
        <Display>{title}</Display>
      </div>
      <div data-history-header-item>
        <Lead>{lead}</Lead>
      </div>
    </header>
  );
}
