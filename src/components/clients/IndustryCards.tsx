"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { ClientLogo, LogoStack } from "./ClientLogo";
import { industries } from "./data";

/**
 * Industry cards with logo stacks. Tap one to open its clients.
 * With an odd count the first (biggest) card runs two columns wide, so no card sits alone on the last row.
 */
export function IndustryCards() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <ul className="grid grid-cols-2 gap-2.5 md:gap-4 lg:grid-cols-4">
      {industries.map((ind, k) => {
        const on = open === k;
        const wide = k === 0 && industries.length % 2 === 1;
        return (
          <li
            key={ind.name}
            className={cn("rounded-[20px] border bg-white transition-colors", (on || wide) && "col-span-2", on ? "border-ink lg:col-span-4" : "border-line")}
          >
            <button type="button" aria-expanded={on} onClick={() => setOpen(on ? null : k)} className="flex w-full flex-col gap-2.5 p-4 text-left md:gap-3 md:p-6">
              <span className="flex items-start gap-2">
                <span className="text-[15px] leading-5 font-bold md:text-xl md:leading-7">{ind.name}</span>
                <span
                  aria-hidden
                  className={cn("ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-base font-bold md:h-9 md:w-9", on ? "bg-ink text-white" : "bg-paper")}
                >
                  {on ? "−" : "+"}
                </span>
              </span>
              <span className="text-xs font-semibold text-muted md:text-sm">
                {ind.clients.length} {ind.clients.length > 1 ? "clients" : "client"}
              </span>
              {!on && <LogoStack list={ind.clients} max={wide ? 5 : 3} size="h-9 w-9 md:h-12 md:w-12" />}
            </button>
            {on && (
              <ul className="grid gap-x-8 px-4 pb-3 md:grid-cols-2 md:px-6 md:pb-6">
                {ind.clients.map((c) => (
                  <li key={c.name} className="flex items-center gap-3 border-t border-line py-3">
                    <ClientLogo c={c} size={48} className="h-11 w-11 shrink-0 rounded-xl ring-1 ring-black/5 md:h-12 md:w-12" />
                    <span className="text-[15px] font-semibold md:text-base">{c.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
