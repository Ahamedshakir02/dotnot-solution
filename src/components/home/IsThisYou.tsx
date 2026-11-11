"use client";

import { useState } from "react";
import { ShareButton } from "@/components/ui/Button";
import { Ring, Section, SectionHeader, Tick } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

const pains = [
  "Decisions still come back to me",
  "Every branch runs its own way",
  "Sales are up, but profit is flat",
  "I see the numbers only at month-end",
  "When a key person leaves, the know-how leaves",
  "We bought software the team barely uses",
  "The same mistakes repeat every month",
  "Nobody is sure who owns what",
  "Follow-ups depend on who remembers",
  "I can’t step away for a week",
];

function verdict(score: number) {
  if (score >= 8) return { title: "We should talk now.", cta: "Let’s talk now", zone: 2 };
  if (score >= 5) return { title: "A Growth Audit is the right start.", cta: "Start with a Growth Audit", zone: 1 };
  return { title: "Tick what sounds familiar.", cta: "Share your requirement", zone: 0 };
}

function Gauge({ score }: { score: number }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 120 120" className="h-[96px] w-[96px] shrink-0 md:h-[120px] md:w-[120px]" aria-hidden>
      <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="11" />
      <circle
        cx="60"
        cy="60"
        r={r}
        fill="none"
        stroke="#86CC59"
        strokeWidth="11"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - score / 10)}
        transform="rotate(-90 60 60)"
        style={{ transition: "stroke-dashoffset 0.4s ease-out" }}
      />
      <text x="60" y="73" textAnchor="middle" fontSize="40" fontWeight="800" fill="#fff">
        {score}
      </text>
    </svg>
  );
}

export function IsThisYou() {
  const [ticked, setTicked] = useState<Set<number>>(new Set());
  const score = ticked.size;
  const v = verdict(score);

  const toggle = (i: number) =>
    setTicked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  const message = `Hi Dotnot, I ticked ${score} of 10 on "Is this you?". I'd like to share a requirement.`;

  return (
    <Section id="is-this-you">
      <span aria-hidden className="text-outline-green absolute top-0 right-12 hidden xl:right-[110px] text-[220px] leading-[200px] font-extrabold tracking-[-0.06em] lg:block">
        02
      </span>
      <SectionHeader overline="Is this you?" title="Your business has grown. Has the way it runs?" accent="Has the way it runs?" />
      <p className="mt-4 flex items-center gap-2 text-sm font-medium text-muted">
        <span className="h-2 w-2 rounded-full bg-brand" />
        Tap to tick. Your score and next step update as you go.
      </p>

      <div className="mt-8 grid gap-6 md:mt-12 lg:grid-cols-[1fr_384px] lg:gap-8">
        <ul className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
          {pains.map((p, i) => {
            const on = ticked.has(i);
            return (
              <li key={p}>
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(i)}
                  className={cn(
                    "flex w-full items-center gap-3.5 rounded-[14px] border px-4 py-3.5 text-left text-[14px] font-semibold transition-colors md:px-5 md:py-[18px] md:text-[15px]",
                    on ? "border-tint2 bg-tint" : "border-line bg-white hover:border-brand/40",
                  )}
                >
                  <Tick on={on} />
                  {p}
                </button>
              </li>
            );
          })}
        </ul>

        <div aria-live="polite" className="bg-brand-gradient relative flex flex-col gap-5 overflow-hidden rounded-3xl p-6 text-white md:p-9">
          <Ring size={260} className="-top-[90px] right-[-60px] border-lime/25" />
          <p className="text-[13px] font-semibold tracking-[0.12em] text-lime uppercase">Your result</p>
          <div className="flex items-center gap-5">
            <Gauge score={score} />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-lime">of 10 ticked</span>
              <span className="text-[20px] leading-[26px] font-bold">{v.title}</span>
            </div>
          </div>
          <ul className="flex flex-col gap-2 text-[13px]">
            {[
              { k: "5–7", t: "Start with a Growth Audit", zone: 1 },
              { k: "8+", t: "We should talk now", zone: 2 },
            ].map((z) => (
              <li key={z.k} className={cn("flex items-center gap-2.5 rounded-[10px] px-3 py-2", v.zone === z.zone ? "bg-white/15" : "bg-white/5 text-white/60")}>
                <span className={cn("font-extrabold", v.zone === z.zone && "text-lime")}>{z.k}</span>
                <span className="font-medium">{z.t}</span>
              </li>
            ))}
          </ul>
          <ShareButton label={v.cta} message={message} tag={false} className="mt-1 self-start" />
        </div>
      </div>
    </Section>
  );
}
