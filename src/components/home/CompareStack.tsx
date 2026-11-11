"use client";

import { useState } from "react";
import { Tick } from "@/components/ui/Section";
import { cn } from "@/lib/cn";
import { comparison } from "./comparison";

const tabs = ["Consultant", "Vendor", "Dotnot"];

export function CompareTabs() {
  const [active, setActive] = useState(2);
  const dotnot = active === 2;
  return (
    <div className="mt-8 md:hidden">
      <div role="tablist" aria-label="Compare" className="flex gap-1 rounded-full border border-line bg-white p-1">
        {tabs.map((t, i) => (
          <button
            key={t}
            role="tab"
            type="button"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={cn("flex-1 rounded-full py-2.5 text-sm font-bold transition-colors", active === i ? "bg-deep text-lime" : "text-muted")}
          >
            {t}
          </button>
        ))}
      </div>
      <dl role="tabpanel" className={cn("mt-3 rounded-[20px] px-5 py-1", dotnot ? "bg-deep text-white" : "border border-line bg-white")}>
        {comparison.rows.map((r, i) => (
          <div key={r[0]} className={cn("flex flex-col gap-1.5 py-4", i < 4 && (dotnot ? "border-b border-white/10" : "border-b border-line"))}>
            <dt className={cn("text-[11px] font-bold tracking-[0.08em] uppercase", dotnot ? "text-lime" : "text-muted")}>{r[0]}</dt>
            <dd className="flex gap-2.5 text-[15px] font-semibold">
              {dotnot && <Tick size={18} />}
              <span className={dotnot ? "" : "font-normal text-muted"}>{r[active + 1]}</span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
