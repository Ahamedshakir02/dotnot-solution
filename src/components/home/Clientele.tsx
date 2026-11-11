"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ClientLogo, NoLogo } from "@/components/clients/ClientLogo";
import { allClients, byFame, industries, industryWord, stories } from "@/components/clients/data";
import { Ring, Section, SectionHeader } from "@/components/ui/Section";

// Phone: logos as a pyramid, best-known clients biggest on top, nothing overlapping.
const pyramid = [
  { row: byFame.slice(0, 4), width: "max-w-[248px]" },
  { row: byFame.slice(4, 10), width: "max-w-[290px]" },
  { row: byFame.slice(10), width: "max-w-[310px]" },
];
function LogoPyramid() {
  return (
    <div data-stagger className="flex w-full flex-col items-center gap-2.5">
      {pyramid.map(({ row, width }, r) => (
        <ul key={r} className={`grid w-full gap-2 ${width}`} style={{ gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))` }}>
          {row.map((c) => (
            <li key={c.name} title={c.name} className="aspect-square overflow-hidden rounded-full border border-line bg-white">
              <ClientLogo c={c} size={64} className="h-full w-full" />
              <span className="sr-only">{c.name}</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

function Spotlight() {
  const [i, setI] = useState(0);
  const [inView, setInView] = useState(false);
  const [hold, setHold] = useState(false); // finger, mouse or keyboard focus on the card
  const [byUser, setByUser] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const touch = useRef({ x: 0, y: 0 });
  const s = stories[i];
  const go = (n: number, user = true) => {
    if (user) setByUser(true);
    setI((n + stories.length) % stories.length);
  };

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // The active dot fills over 6s; when it is full the next story shows.
  // It pauses off screen and while held, and never runs with reduced motion.
  const running = inView && !hold;

  return (
    <div
      ref={box}
      data-reveal
      role="region"
      aria-roledescription="carousel"
      aria-label="Client stories"
      // pause for a real mouse or keyboard focus only; after a tap, phones keep a fake hover and focus
      onPointerEnter={(e) => e.pointerType === "mouse" && setHold(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setHold(false)}
      onFocus={(e) => (e.target as HTMLElement).matches(":focus-visible") && setHold(true)}
      onBlur={() => setHold(false)}
      onTouchStart={(e) => {
        setHold(true);
        touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }}
      onTouchEnd={(e) => {
        setHold(false);
        const dx = e.changedTouches[0].clientX - touch.current.x;
        const dy = e.changedTouches[0].clientY - touch.current.y;
        // a sideways swipe, not a page scroll that drifted
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) go(i + (dx < 0 ? 1 : -1));
      }}
      className="bg-brand-gradient relative flex min-h-[392px] flex-col overflow-hidden rounded-3xl p-5 text-white shadow-[0_24px_50px_-10px_rgba(13,51,26,0.35)] md:min-h-[480px] md:rounded-[28px] md:p-10"
    >
      <Ring size={420} className="-top-[220px] right-[-120px] border-lime/15" />
      <div key={`${i}-${inView}`} aria-live={byUser ? "polite" : "off"} className="story-in relative flex flex-1 flex-col">
        <div className="flex items-center gap-3 md:gap-4">
          {s.logo ? (
            <Image src={s.logo} alt="" width={64} height={64} unoptimized className="h-12 w-12 rounded-xl object-cover md:h-16 md:w-16 md:rounded-2xl" />
          ) : (
            <NoLogo factory className="h-12 w-12 rounded-xl md:h-16 md:w-16 md:rounded-2xl" />
          )}
          <span className="flex flex-col">
            <span className="text-lg leading-6 font-bold md:text-[22px]">{s.client}</span>
            <span className="text-[11px] font-semibold tracking-[0.06em] text-lime uppercase md:text-[13px]">{s.sector}</span>
          </span>
        </div>
        <div className="mt-6 flex flex-1 flex-col gap-4 md:mt-8 md:grid md:grid-cols-[1fr_280px] md:items-center md:gap-8">
          <div>
            <p className="text-[84px] leading-none font-extrabold tracking-[-0.04em] text-lime md:text-[140px]">{s.number}</p>
            <p className="mt-2 text-lg font-semibold md:text-2xl">{s.label}</p>
          </div>
          <p className="text-sm leading-[21px] text-white/80 md:text-lg md:leading-7">{s.text}</p>
        </div>
      </div>
      <div className="relative mt-6 flex items-center gap-0.5">
        {stories.map((st, k) => (
          <button
            key={st.client}
            type="button"
            aria-label={`Show ${st.client}`}
            aria-current={k === i}
            onClick={() => go(k)}
            className="-my-2 flex h-8 items-center px-1.5"
          >
            {k === i ? (
              <span className="relative block h-2 w-7 overflow-hidden rounded-full bg-white/25">
                <span
                  key={i}
                  className="story-progress absolute inset-0 origin-left rounded-full bg-lime"
                  style={{ animationPlayState: running ? "running" : "paused" }}
                  onAnimationEnd={() => go(i + 1, false)}
                />
              </span>
            ) : (
              <span className="block h-2 w-2 rounded-full bg-white/30" />
            )}
          </button>
        ))}
        <span className="ml-2 text-[13px] font-semibold text-white/60">
          {i + 1} / {stories.length} client stories
        </span>
        <span className="ml-auto hidden gap-2 md:flex">
          {[
            ["←", -1, "Previous story"],
            ["→", 1, "Next story"],
          ].map(([a, d, l]) => (
            <button
              key={l as string}
              type="button"
              aria-label={l as string}
              onClick={() => go(i + (d as number))}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/12 text-lg font-bold transition-colors hover:bg-white/20"
            >
              {a}
            </button>
          ))}
        </span>
      </div>
    </div>
  );
}

export function Clientele() {
  return (
    <Section id="clientele">
      <SectionHeader overline="Clientele" title={`Trusted by growing businesses across ${industryWord} industries.`} accent={`across ${industryWord} industries.`} />

      <div className="mt-8 grid gap-4 md:mt-14 lg:grid-cols-[minmax(0,740px)_1fr] lg:gap-14">
        <Spotlight />

        {/* PC: count, logo grid and link */}
        <div className="hidden flex-col gap-6 lg:flex">
          <div>
            <p className="text-[80px] leading-none font-light tracking-[-0.04em]">
              15<span className="font-extrabold text-gtext">+</span>
            </p>
            <p className="mt-2 font-medium text-muted">clients across {industries.length} industries</p>
          </div>
          <ul data-stagger className="grid grid-cols-4 gap-3">
            {byFame.slice(0, 11).map((c) => (
              <li key={c.name} title={c.name} className="flex aspect-square items-center justify-center rounded-[18px] border border-line bg-white">
                <ClientLogo c={c} size={64} className="h-[64%] w-[64%] rounded-xl" />
              </li>
            ))}
            <li>
              <Link
                href="/clients"
                aria-label="See all clients"
                className="flex aspect-square w-full items-center justify-center rounded-[18px] bg-tint text-xl font-extrabold text-gtext transition-colors hover:bg-tint2"
              >
                +{allClients.length - 11}
              </Link>
            </li>
          </ul>
          <Link
            href="/clients"
            className="inline-flex w-fit items-center gap-2.5 rounded-full border-[1.5px] border-ink/15 bg-white px-6 py-4 text-[15px] font-bold transition-colors hover:border-brand/50"
          >
            See all clients <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Phone and tablet: the small trust strip under the spotlight */}
        <div data-reveal className="flex flex-col items-center gap-4 rounded-3xl border border-line bg-white p-5 text-center shadow-[0_10px_30px_rgba(13,51,26,0.06)] lg:hidden">
          <LogoPyramid />
          <p className="text-2xl leading-[30px] font-light tracking-[-0.02em]">
            Trusted by <span className="font-extrabold text-gtext">15+ growing businesses</span>
          </p>
          <p className="-mt-1 text-sm leading-[21px] font-medium text-muted">Retail, manufacturing, restaurants, agencies, healthcare, education, travel and kidswear.</p>
          <Link href="/clients" className="mt-1 flex w-full items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-4 text-[15px] font-bold text-white">
            See all clients <span aria-hidden className="text-lime">→</span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
