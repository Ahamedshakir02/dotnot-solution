import { Tick } from "@/components/ui/Section";
import { comparison } from "./comparison";

export function CompareStack() {
  return (
    <dl className="mt-8 flex flex-col gap-4 md:hidden">
      {comparison.rows.map(([label, consultant, vendor, dotnot]) => (
        <div key={label} className="overflow-hidden rounded-[20px] border border-line bg-white">
          <dt className="px-5 pt-4 text-[11px] font-bold tracking-[0.08em] text-ink uppercase">{label}</dt>
          <dd className="grid grid-cols-2 gap-4 px-5 pt-3 pb-4">
            {[
              ["Consultant", consultant],
              ["Vendor", vendor],
            ].map(([who, text]) => (
              <span key={who} className="flex flex-col gap-1">
                <span className="text-[11px] font-semibold text-muted">{who}</span>
                <span className="text-sm leading-5 text-muted">{text}</span>
              </span>
            ))}
          </dd>
          <dd className="flex gap-2.5 bg-deep px-5 py-4 text-white">
            <Tick size={20} />
            <span className="flex flex-col gap-1">
              <span className="text-[11px] font-bold tracking-[0.08em] text-lime uppercase">Dotnot</span>
              <span className="text-[15px] leading-[22px] font-semibold">{dotnot}</span>
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
