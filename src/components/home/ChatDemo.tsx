"use client";

import { useEffect, useRef, useState } from "react";
import { ChatBubbles, type ChatLine } from "@/components/ui/PhoneChat";

const script: ChatLine[] = [
  { from: "agent", text: "Tell me about the business. What do you do, and how many branches?" },
  { from: "user", text: "Furniture retail. Three branches, about 40 people." },
  { from: "agent", text: "What’s slowing it down most right now? You can send a voice note." },
  { from: "voice", duration: "0:24" },
  { from: "agent", text: "What have you tried so far?" },
  { from: "user", text: "We bought a CRM last year. The team barely uses it." },
];

/** The "See how it works" demo: plays the sample conversation once it scrolls into view. */
export function ChatDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(0);
  const [started, setStarted] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setStarted(true), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started || shown > script.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), reduced.current ? 0 : shown === 0 ? 300 : 1100);
    return () => clearTimeout(t);
  }, [started, shown]);

  const done = shown > script.length;

  return (
    <div ref={ref} className="flex flex-col gap-3 rounded-3xl bg-white p-5 text-ink md:p-6">
      <div className="flex items-center gap-3 border-b border-line pb-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-deep text-sm font-bold text-lime">D</span>
        <span className="flex flex-col leading-tight">
          <span className="text-[15px] font-bold">Dotnot agent</span>
          <span className="text-xs text-muted">See how it works</span>
        </span>
        <span className="ml-auto rounded-full bg-tint px-3 py-1.5 text-xs font-bold text-gtext">Sample conversation</span>
      </div>

      <div className="flex min-h-[340px] flex-col gap-2.5 rounded-2xl bg-chat p-3" aria-live="polite">
        <ChatBubbles lines={script.slice(0, Math.min(shown, script.length))} />
        {started && !done && shown < script.length && (
          <span className="flex w-fit gap-1 rounded-2xl bg-white px-3 py-3" aria-hidden>
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted" style={{ animationDelay: `${i * 150}ms` }} />
            ))}
          </span>
        )}
      </div>

      <div className={`flex flex-col gap-1.5 rounded-2xl border border-lime bg-tint p-4 transition-opacity duration-500 ${done ? "opacity-100" : "opacity-0"}`}>
        <p className="text-xs font-bold tracking-[0.08em] text-brand uppercase">Summary our team receives</p>
        <p className="text-sm">
          <b className="text-gtext">Business:</b> furniture retail, 3 branches, about 40 people
        </p>
        <p className="text-sm">
          <b className="text-gtext">Main problem:</b> enquiry follow-up differs by branch; numbers only at month-end
        </p>
        <p className="text-sm">
          <b className="text-gtext">Tried:</b> CRM, low use
        </p>
      </div>

      {done && (
        <button type="button" onClick={() => setShown(0)} className="self-start text-sm font-bold text-brand hover:underline">
          ↻ Play again
        </button>
      )}
    </div>
  );
}
