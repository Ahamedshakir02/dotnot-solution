import type { Metadata } from "next";
import Link from "next/link";
import { ShareButton } from "@/components/ui/Button";
import { ClosingCta } from "@/components/ui/ClosingCta";
import { Footer } from "@/components/ui/Footer";
import { Nav } from "@/components/ui/Nav";
import { Ring, Section, SectionHeader, SplitTitle } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Sustain",
  description:
    "We stay through Sustain, so the gains keep growing: tools that stay live, regular health reviews, and support when something changes.",
};

// before handover: the build; after it, growth that holds vs. growth that stalls
const SUSTAIN_BUILD = "M8 132 C60 128 120 118 200 92";
const SUSTAIN_UP = "M200 92 C260 74 300 72 340 62 C380 52 430 40 496 26";
const SUSTAIN_FLAT = "M200 92 C260 84 300 86 340 88 C390 90 440 92 496 94";

export default function SustainPage() {
  return (
    <>
      <main className="page-in">
        {/* 01 Hero */}
        <section data-hero className="relative overflow-hidden bg-paper">
          <Nav tone="light" />
          <div className="container-x relative grid items-center gap-12 pt-6 pb-16 lg:grid-cols-[1fr_560px] lg:pb-28">
            <div data-stagger className="flex flex-col gap-6">
              <p className="text-[13px] font-medium text-muted">
                <Link href="/" className="-my-2 inline-block py-2 hover:text-ink">Home</Link> / Sustain
              </p>
              <SplitTitle
                as="h1"
                title="We stay, so the gains keep growing."
                accent="keep growing."
                className="text-[44px] leading-[48px] text-ink md:text-[76px] md:leading-[78px] [&>span]:text-brand"
              />
              <p className="max-w-[520px] text-base leading-relaxed text-muted md:text-[19px] md:leading-[30px]">
                Once your team runs the new way of working, we keep the tools live, check the numbers with you, and step in when something changes.
              </p>
              <ShareButton variant="green" className="self-start" />
            </div>

            <div data-reveal className="flex flex-col gap-4 rounded-[28px] border border-line bg-white p-6 shadow-[0_30px_60px_rgba(13,51,26,0.10)] md:p-7">
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold">Business health</span>
                <span className="ml-auto flex items-center gap-1.5 rounded-full bg-tint px-2.5 py-1 text-[11px] font-bold text-gtext">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-brand" /> All systems live
                </span>
              </div>
              <div data-draw className="rounded-2xl bg-paper p-3">
                <div className="relative h-[130px] md:h-[150px]">
                  <svg viewBox="0 0 504 150" preserveAspectRatio="none" className="wipe absolute inset-0 h-full w-full" aria-hidden>
                    <defs>
                      <linearGradient id="su-area" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#86CC59" stopOpacity="0.3" />
                        <stop offset="1" stopColor="#86CC59" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {[40, 85, 130].map((y) => (
                      <line key={y} x1="0" x2="504" y1={y} y2={y} stroke="#DADFDA" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                    ))}
                    <line x1="200" x2="200" y1="18" y2="146" stroke="#5F6863" strokeOpacity="0.35" strokeDasharray="3 4" vectorEffect="non-scaling-stroke" />
                    <path d={`${SUSTAIN_UP} L496 146 L200 146 Z`} fill="url(#su-area)" />
                    <path d={SUSTAIN_FLAT} fill="none" stroke="#5F6863" strokeOpacity="0.55" strokeWidth="2.5" strokeDasharray="6 6" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                    <path d={`${SUSTAIN_BUILD} ${SUSTAIN_UP.replace("M200 92", "")}`} fill="none" stroke="#218A43" strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                  </svg>
                  <span className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-brand bg-white" style={{ left: "39.7%", top: "61.3%" }} />
                  <span className="absolute top-0 -translate-x-1/2 rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-muted ring-1 ring-line" style={{ left: "39.7%" }}>
                    Handover
                  </span>
                  <span className="fade absolute top-0 right-0 text-[11px] font-bold text-gtext" style={{ ["--dd" as string]: "1400ms" }}>
                    With Sustain
                  </span>
                  <span className="fade absolute top-[69%] right-0 text-[11px] font-semibold text-muted italic" style={{ ["--dd" as string]: "1400ms" }}>
                    Without upkeep, it stalls
                  </span>
                </div>
              </div>
              {[
                ["Tools", "Live and up to date", true],
                ["Health review", "At a rhythm we agree with you", false],
                ["Support", "When something changes, we adjust it", true],
              ].map(([k, v, ok]) => (
                <div key={k as string} className="flex items-center gap-3 border-t border-line pt-3">
                  <span className={cn("flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full text-xs font-extrabold", ok ? "bg-lime" : "bg-tint")}>
                    {ok ? "✓" : "•"}
                  </span>
                  <span className="flex flex-1 flex-col sm:flex-row sm:items-center">
                    <span className="text-[15px] font-bold">{k}</span>
                    <span className="text-[13px] font-medium text-muted sm:ml-auto sm:text-right">{v}</span>
                  </span>
                </div>
              ))}
              <p className="text-[10px] font-bold tracking-[0.08em] text-muted uppercase">Illustrative</p>
            </div>
          </div>
        </section>

        {/* 02 What you get */}
        <Section>
          <SectionHeader overline="What you get" title="Three things, after the build." accent="after the build." />
          <ol data-stagger className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3">
            <Promise n="01" title="Tools that stay live" text="The systems we built keep running and stay up to date.">
              <div className="flex h-11 w-full gap-1">
                {Array.from({ length: 30 }).map((_, i) => (
                  <span key={i} className={cn("flex-1 rounded-sm", i === 17 ? "bg-tint2" : "bg-brand")} />
                ))}
              </div>
              <p className="flex text-[11px] font-medium text-muted">
                Last 30 days<span className="ml-auto font-bold text-brand">Running</span>
              </p>
            </Promise>
            <Promise dark n="02" title="Regular health reviews" text="We check the numbers with you at a set rhythm.">
              <div className="grid w-full max-w-[230px] grid-cols-7 gap-1.5">
                {Array.from({ length: 28 }).map((_, i) => (
                  <span key={i} className={cn("aspect-square rounded-md", [6, 13, 20, 27].includes(i) ? "bg-lime" : "bg-white/10")} />
                ))}
              </div>
            </Promise>
            <Promise n="03" title="Support when something changes" text="New branch, new hire, new product: we adjust the system.">
              <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-paper px-3 py-2.5 text-[13px]">We’re opening a fourth branch next month.</p>
              <p className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-deep px-3 py-2.5 text-[13px] text-white">Got it. We’ll set it up in the same system.</p>
            </Promise>
          </ol>
        </Section>

        {/* 03 Not the finish line */}
        <Section tone="ink">
          <Ring size={600} className="top-[-200px] right-[-150px] border-lime/10" />
          <SectionHeader
            dark
            overline="Why Sustain"
            title="The build is not the finish line."
            accent="not the finish line."
            lead="Without upkeep, new systems drift back to old habits. Sustain keeps the gains growing."
          />
          <figure data-draw className="relative mt-10 md:mt-14">
            <svg viewBox="0 0 1200 340" preserveAspectRatio="none" className="wipe h-[220px] w-full md:h-auto" style={{ ["--dd" as string]: "200ms" }} aria-hidden>
              {[40, 130, 220, 310].map((y) => (
                <line key={y} x1="0" x2="1200" y1={y} y2={y} stroke="#fff" strokeOpacity="0.08" />
              ))}
              <line x1="560" x2="560" y1="10" y2="330" stroke="#fff" strokeOpacity="0.3" />
              <path d="M0 300 C300 290 450 180 560 150" fill="none" stroke="#86CC59" strokeWidth="3" vectorEffect="non-scaling-stroke" />
              <path d="M560 150 C760 140 900 90 1200 30" fill="none" stroke="#86CC59" strokeWidth="3" vectorEffect="non-scaling-stroke" />
              <path d="M560 150 C760 170 900 240 1200 270" fill="none" stroke="#fff" strokeOpacity="0.35" strokeWidth="2.5" strokeDasharray="8 6" vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="absolute top-[3%] left-[47.5%] rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-white md:text-xs">Handover</span>
            <span className="absolute top-[8%] right-0 rounded-full bg-lime px-2.5 py-1 text-[11px] font-bold text-ink md:top-[14%] md:text-xs">With Sustain</span>
            <span className="absolute top-[56%] right-0 rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-white md:top-[62%] md:text-xs">Without upkeep</span>
            <figcaption className="mt-3 flex justify-between text-xs text-white/55">
              <span>Implementation</span>
              <span className="font-bold tracking-[0.08em] uppercase">Illustrative</span>
            </figcaption>
          </figure>
        </Section>

        <ClosingCta
          title="Build it once. Keep it working."
          accent="Keep it working."
          lead="It starts with the Growth Audit. Five minutes on WhatsApp to share your requirement."
        />
      </main>
      <Footer />
    </>
  );
}

function Promise({ n, title, text, dark, children }: { n: string; title: string; text: string; dark?: boolean; children: React.ReactNode }) {
  return (
    <li className={cn("lift flex flex-col overflow-hidden rounded-3xl", dark ? "bg-brand-gradient text-white" : "border border-line bg-white")}>
      <div className="flex min-h-[170px] flex-col justify-center gap-2 p-6" aria-hidden>
        {children}
      </div>
      <div className="flex flex-col gap-2 px-6 pt-1 pb-7">
        <span className={cn("text-sm font-extrabold", dark ? "text-lime" : "text-brand")}>{n}</span>
        <h3 className="text-[22px] font-bold">{title}</h3>
        <p className={cn("text-[15px] leading-[23px]", dark ? "text-white/75" : "text-muted")}>{text}</p>
      </div>
    </li>
  );
}
