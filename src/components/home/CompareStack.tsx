import { Tick } from "@/components/ui/Section";
import { comparison } from "./comparison";

function Cross() {
  return (
    <span aria-hidden className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-line text-muted">
      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M2.5 2.5l7 7M9.5 2.5l-7 7" />
      </svg>
    </span>
  );
}

// Phone version of the comparison table: each row is a card where the two usual
// options (✕) sit above a "vs" and Dotnot (✓), so it reads as a comparison at a glance.
export function CompareStack() {
  const [consultantHead, vendorHead] = comparison.heads;
  return (
    <dl className="mt-8 flex flex-col gap-4 md:hidden">
      {comparison.rows.map(([label, consultant, vendor, dotnot]) => {
        const them = [
          [consultantHead, consultant],
          [vendorHead, vendor],
        ];
        return (
          <div key={label} className="overflow-hidden rounded-[20px] border border-line bg-white">
            <dt className="px-5 pt-4 text-[11px] font-bold tracking-[0.08em] text-ink uppercase">{label}</dt>
            {/* names on one row, answers on the next, so both answers start level even if a name wraps */}
            <dd className="grid grid-cols-2 gap-x-4 gap-y-1.5 px-5 pt-3 pb-6">
              {them.map(([who]) => (
                <span key={who} aria-hidden className="flex items-center gap-1.5 text-[12px] font-bold text-ink/70">
                  <Cross />
                  {who}
                </span>
              ))}
              {them.map(([who, text]) => (
                <span key={text} className="text-sm leading-5 text-muted">
                  <span className="sr-only">{who}: </span>
                  {text}
                </span>
              ))}
            </dd>
            <dd className="relative flex gap-2.5 bg-deep px-5 pt-5 pb-4 text-white">
              <span
                aria-hidden
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-line bg-white px-3 py-1 text-[11px] font-extrabold tracking-[0.06em] text-ink uppercase"
              >
                vs
              </span>
              <Tick size={20} />
              <span className="flex flex-col gap-1">
                <span className="text-[11px] font-bold tracking-[0.08em] text-lime uppercase">Dotnot</span>
                <span className="text-[15px] leading-[22px] font-semibold">{dotnot}</span>
              </span>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
