"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ShareButton } from "@/components/ui/Button";
import { Ring, Section, SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

type Client = { name: string; logo?: string };

// logo: square tile in /public/clients (96px webp)
const L = (slug: string) => `/clients/${slug}.webp`;
const industries: { name: string; clients: Client[] }[] = [
  {
    name: "Retail",
    clients: [
      { name: "Colors and Looms", logo: L("colors-and-looms") },
      { name: "Zeenath Textile", logo: L("zeenath") },
      { name: "Eyenation", logo: L("eyenation") },
      { name: "Safari Furniture", logo: L("safari-furniture") },
      { name: "Al Rams", logo: L("al-rams") },
    ],
  },
  {
    name: "Manufacturing",
    clients: [{ name: "Pearl City", logo: L("pearl-city") }, { name: "Evergreen Furniture", logo: L("evergreen") }, { name: "Apparel manufacturer" }],
  },
  { name: "Restaurants", clients: [{ name: "Aslee Hindi", logo: L("aslee-hindi") }, { name: "Shawook" }, { name: "Mr. Eggy", logo: L("mr-eggy") }] },
  { name: "Agencies", clients: [{ name: "Tale8", logo: L("tale8") }, { name: "Beyo", logo: L("beyo") }] },
  { name: "Healthcare", clients: [{ name: "Sravana Hearing Aid", logo: L("sravana") }] },
  { name: "Education and travel", clients: [{ name: "Edu Wisdom", logo: L("edu-wisdom") }, { name: "Europe Travels", logo: L("europe-travels") }] },
];
const all = industries.flatMap((ind) => ind.clients.map((c) => ({ ...c, factory: ind.name === "Manufacturing" })));
const withLogo = all.filter((c) => c.logo);

const stories = [
  {
    client: "Colors and Looms",
    sector: "Bespoke apparel · UAE",
    logo: L("colors-and-looms"),
    number: "2x",
    label: "off-season sales",
    text: "Rebuilt the sales process and customer experience. Monthly retainer revenue up 50%.",
  },
  {
    client: "Safari Mall Leasing",
    sector: "Leasing · UAE",
    logo: L("safari-mall"),
    number: "80%",
    label: "of the issues resolved",
    text: "The Growth Audit found misalignment and poor communication between departments.",
  },
  {
    client: "Apparel manufacturer",
    sector: "Manufacturing · India",
    number: "₹3 Cr",
    label: "revenue loss identified",
    text: "Found by the Growth Audit, started August 2026.",
  },
];

function NoLogo({ factory, className }: { factory?: boolean; className?: string }) {
  return (
    <span aria-hidden className={cn("flex items-center justify-center bg-tint text-gtext", className)}>
      <svg viewBox="0 0 24 24" className="h-1/2 w-1/2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round">
        {factory ? (
          <>
            <path d="M3 21V9l6 4V9l6 4V5h6v16H3z" />
            <path d="M7 17h2M12 17h2M17 17h1" />
          </>
        ) : (
          <>
            <path d="M4 10v10h16V10" />
            <path d="M3 10l2-6h14l2 6c0 1.5-1.3 2.5-2.7 2.5S16 11.5 16 10c0 1.5-1.3 2.5-2.7 2.5S10.7 11.5 10.7 10c0 1.5-1.3 2.5-2.7 2.5S5.3 11.5 5.3 10 3 11.5 3 10z" />
            <path d="M10 20v-4h4v4" />
          </>
        )}
      </svg>
    </span>
  );
}

function Logo({ c, size, className }: { c: Client & { factory?: boolean }; size: number; className?: string }) {
  return c.logo ? (
    <Image src={c.logo} alt="" width={size} height={size} unoptimized className={cn("object-cover", className)} />
  ) : (
    <NoLogo factory={c.factory} className={className} />
  );
}

/** Overlapping round logos, like an avatar stack. */
function Stack({ list, max, size = "h-9 w-9", more = true }: { list: (Client & { factory?: boolean })[]; max: number; size?: string; more?: boolean }) {
  const shown = list.length > max + 1 ? list.slice(0, max) : list;
  const rest = list.length - shown.length;
  return (
    <span className="flex -space-x-2.5">
      {shown.map((c) => (
        <Logo key={c.name} c={c} size={48} className={cn(size, "shrink-0 rounded-full ring-2 ring-white")} />
      ))}
      {more && rest > 0 && (
        <span className={cn(size, "flex shrink-0 items-center justify-center rounded-full bg-ink text-xs font-extrabold text-white ring-2 ring-white")}>+{rest}</span>
      )}
    </span>
  );
}

function Spotlight() {
  const [i, setI] = useState(0);
  const [held, setHeld] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const touch = useRef(0);
  const s = stories[i];
  const go = (n: number) => {
    setHeld(true);
    setI((n + stories.length) % stories.length);
  };

  // rotate every 6s while on screen, until the visitor takes over
  useEffect(() => {
    const el = box.current;
    if (!el || held || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        window.clearInterval(timer);
        if (e.isIntersecting) timer = window.setInterval(() => setI((n) => (n + 1) % stories.length), 6000);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearInterval(timer);
    };
  }, [held]);

  return (
    <div
      ref={box}
      data-reveal
      role="region"
      aria-roledescription="carousel"
      aria-label="Client stories"
      onMouseEnter={() => setHeld(true)}
      onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - touch.current;
        if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1));
      }}
      className="bg-brand-gradient relative flex min-h-[392px] flex-col overflow-hidden rounded-3xl p-5 text-white shadow-[0_24px_50px_-10px_rgba(13,51,26,0.35)] md:min-h-[480px] md:rounded-[28px] md:p-10"
    >
      <Ring size={420} className="-top-36 right-[-120px] border-lime/15" />
      <div key={i} aria-live="polite" className="story-in relative flex flex-1 flex-col">
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
      <div className="relative mt-6 flex items-center gap-2">
        {stories.map((st, k) => (
          <button
            key={st.client}
            type="button"
            aria-label={`Show ${st.client}`}
            aria-current={k === i}
            onClick={() => go(k)}
            className={cn("h-2 rounded-full transition-all", k === i ? "w-6 bg-lime" : "w-2 bg-white/30")}
          />
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

function AllClients({ dlg }: { dlg: React.RefObject<HTMLDialogElement | null> }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <dialog
      ref={dlg}
      aria-labelledby="all-clients-title"
      onClose={() => {
        document.documentElement.style.overflow = "";
        setOpen(null);
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) dlg.current?.close();
      }}
      className="sheet-up m-0 mt-auto max-h-[90dvh] w-full max-w-none overflow-hidden rounded-t-[28px] bg-white p-0 text-ink backdrop:bg-forest/60 md:m-auto md:max-h-[86dvh] md:max-w-[960px] md:rounded-[28px]"
    >
      <div className="flex max-h-[90dvh] flex-col md:max-h-[86dvh]">
        <div className="relative shrink-0 border-b border-line px-5 pt-3 pb-4 md:px-8 md:pt-7">
          <span aria-hidden className="mx-auto mb-3 block h-1.5 w-10 rounded-full bg-line md:hidden" />
          <h3 id="all-clients-title" className="text-2xl font-extrabold tracking-[-0.02em] md:text-3xl">
            All clients
          </h3>
          <p className="pr-12 text-sm font-medium text-muted">15+ businesses across 6 industries. Tap one to see who.</p>
          <button
            type="button"
            aria-label="Close"
            onClick={() => dlg.current?.close()}
            className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-paper text-lg font-bold md:top-7 md:right-8"
          >
            ✕
          </button>
        </div>

        <ul className="grid flex-1 grid-cols-2 gap-2.5 overflow-y-auto p-4 md:grid-cols-3 md:gap-4 md:p-8">
          {industries.map((ind, k) => {
            const on = open === k;
            const list = ind.clients.map((c) => ({ ...c, factory: ind.name === "Manufacturing" }));
            return (
              <li key={ind.name} className={cn("rounded-[20px] border bg-white transition-colors", on ? "col-span-2 border-ink md:col-span-3" : "border-line")}>
                <button
                  type="button"
                  aria-expanded={on}
                  onClick={() => setOpen(on ? null : k)}
                  className="flex w-full flex-col gap-2.5 p-4 text-left md:gap-3 md:p-5"
                >
                  <span className="flex items-start gap-2">
                    <span className="text-[15px] leading-5 font-bold md:text-lg md:leading-6">{ind.name}</span>
                    <span
                      aria-hidden
                      className={cn("ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-base font-bold", on ? "bg-ink text-white" : "bg-paper")}
                    >
                      {on ? "−" : "+"}
                    </span>
                  </span>
                  <span className="text-xs font-semibold text-muted md:text-[13px]">
                    {ind.clients.length} {ind.clients.length > 1 ? "clients" : "client"}
                  </span>
                  {!on && <Stack list={list} max={3} size="h-9 w-9 md:h-11 md:w-11" />}
                </button>
                {on && (
                  <ul className="grid gap-x-8 px-4 pb-3 md:grid-cols-2 md:px-5 md:pb-5">
                    {list.map((c) => (
                      <li key={c.name} className="flex items-center gap-3 border-t border-line py-3">
                        <Logo c={c} size={44} className="h-11 w-11 shrink-0 rounded-xl ring-1 ring-black/5" />
                        <span className="text-[15px] font-semibold">{c.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
          <li className="col-span-2 px-1 pt-1 text-sm font-semibold text-muted md:col-span-3">…and more.</li>
        </ul>

        <div className="shrink-0 border-t border-line px-5 pt-3 pb-5 md:flex md:items-center md:justify-between md:px-8 md:py-5">
          <p className="mb-2 text-[13px] font-semibold text-muted md:mb-0 md:text-sm">See a business like yours?</p>
          <ShareButton tag={false} className="w-full md:w-auto" />
        </div>
      </div>
    </dialog>
  );
}

export function Clientele() {
  const dlg = useRef<HTMLDialogElement>(null);
  const openAll = () => {
    document.documentElement.style.overflow = "hidden";
    dlg.current?.showModal();
  };

  return (
    <Section id="clientele">
      <SectionHeader overline="Clientele" title="Trusted by growing businesses across six industries." accent="across six industries." />

      <div className="mt-8 grid gap-4 md:mt-14 lg:grid-cols-[minmax(0,740px)_1fr] lg:gap-14">
        <Spotlight />

        {/* PC: count, logo grid and button */}
        <div className="hidden flex-col gap-6 lg:flex">
          <div>
            <p className="text-[80px] leading-none font-light tracking-[-0.04em]">
              15<span className="font-extrabold text-gtext">+</span>
            </p>
            <p className="mt-2 font-medium text-muted">clients across 6 industries</p>
          </div>
          <ul data-stagger className="grid grid-cols-4 gap-3">
            {withLogo.slice(0, 11).map((c) => (
              <li key={c.name} title={c.name} className="flex aspect-square items-center justify-center rounded-[18px] border border-line bg-white">
                <Logo c={c} size={64} className="h-[64%] w-[64%] rounded-xl" />
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={openAll}
                className="flex aspect-square w-full items-center justify-center rounded-[18px] bg-tint text-xl font-extrabold text-gtext transition-colors hover:bg-tint2"
                aria-label="See all clients"
              >
                +{all.length - 11}
              </button>
            </li>
          </ul>
          <button
            type="button"
            onClick={openAll}
            className="inline-flex w-fit items-center gap-2.5 rounded-full border-[1.5px] border-ink/15 bg-white px-6 py-4 text-[15px] font-bold transition-colors hover:border-brand/50"
          >
            See all clients <span aria-hidden>→</span>
          </button>
        </div>

        {/* Phone and tablet: the small trust strip under the spotlight */}
        <div data-reveal className="flex flex-col gap-4 rounded-3xl border border-line bg-white p-5 shadow-[0_10px_30px_rgba(13,51,26,0.06)] lg:hidden">
          <Stack list={all} max={6} size="h-11 w-11" />
          <p className="text-2xl leading-[30px] font-light tracking-[-0.02em]">
            Trusted by <span className="font-extrabold text-gtext">15+ growing businesses</span>
          </p>
          <p className="-mt-1 text-sm leading-[21px] font-medium text-muted">Retail, manufacturing, restaurants, agencies, healthcare, education and travel.</p>
          <button
            type="button"
            onClick={openAll}
            className="mt-1 flex items-center justify-center gap-2.5 rounded-full bg-ink px-6 py-4 text-[15px] font-bold text-white"
          >
            See all clients <span aria-hidden className="text-lime">→</span>
          </button>
        </div>
      </div>

      <AllClients dlg={dlg} />
    </Section>
  );
}
