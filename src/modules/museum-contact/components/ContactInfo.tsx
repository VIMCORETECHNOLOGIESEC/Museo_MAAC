import { cn } from "@/lib/utils";
import type { ContactInfo as ContactInfoData } from "../types";

type ContactInfoProps = {
  info: ContactInfoData;
  className?: string;
};

type Row = {
  code: string;
  label: string;
  value: React.ReactNode;
};

export function ContactInfo({ info, className }: ContactInfoProps) {
  const rows: Row[] = [
    {
      code: "DIR",
      label: "Dirección",
      value: (
        <>
          {info.address.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </>
      ),
    },
    {
      code: "TEL",
      label: "Teléfono",
      value: (
        <a
          href={`tel:${info.phone.replace(/\s+/g, "")}`}
          className="underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm"
        >
          {info.phone}
        </a>
      ),
    },
    {
      code: "MAIL",
      label: "Correo",
      value: (
        <a
          href={`mailto:${info.email}`}
          className="break-all underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm"
        >
          {info.email}
        </a>
      ),
    },
    {
      code: "HR",
      label: "Horario",
      value: (
        <ul className="flex flex-col gap-1">
          {info.hours.map((row) => (
            <li
              key={row.days}
              className="flex items-baseline justify-between gap-4 border-b border-black/15 pb-1 last:border-b-0"
            >
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-black/55">
                {row.days}
              </span>
              <span className="font-mono text-[0.7rem] tracking-[0.18em] text-black">
                {row.hours}
              </span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      code: "WEB",
      label: "Redes",
      value: (
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {info.social.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="inline-flex items-center gap-2 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-sm"
              >
                <span aria-hidden className="block h-1.5 w-1.5 bg-black" />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <dl className={cn("flex flex-col", className)}>
      {rows.map((row, i) => (
        <div
          key={row.code}
          data-history-entry
          data-history-entry-align="left"
          className={
            "grid grid-cols-[6rem_minmax(0,1fr)] gap-x-6 gap-y-3 border-t border-black/15 py-5 first:border-t " +
            (i === rows.length - 1 ? "border-b" : "")
          }
        >
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-black/55">
              {row.code}
            </span>
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.34em] text-black/70">
              {row.label}
            </span>
          </div>
          <dd className="font-sans text-body leading-7 text-black">
            {row.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
