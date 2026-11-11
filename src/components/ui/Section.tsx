import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "white" | "paper" | "brand" | "ink" | "deep";

const tones: Record<Tone, string> = {
  white: "bg-white",
  paper: "bg-paper",
  brand: "bg-brand-gradient text-white",
  ink: "bg-ink text-white",
  deep: "bg-[#0a2614] text-white",
};

export function Section({
  id,
  tone = "white",
  className,
  inner,
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  inner?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("relative overflow-hidden py-16 md:py-28", tones[tone], className)}>
      <div className={cn("container-x relative", inner)}>{children}</div>
    </section>
  );
}

export function Overline({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] md:text-[13px]",
        dark ? "text-lime" : "text-brand",
      )}
    >
      <span aria-hidden className={cn("h-1 w-[22px] rounded-full", dark ? "bg-lime" : "bg-brand")} />
      {children}
    </p>
  );
}

export function SplitTitle({
  title,
  accent,
  dark,
  as: Tag = "h2",
  className,
}: {
  title: string;
  accent?: string;
  dark?: boolean;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const i = accent ? title.indexOf(accent) : -1;
  const before = i >= 0 ? title.slice(0, i) : title;
  const after = i >= 0 ? title.slice(i + accent!.length) : "";
  return (
    <Tag className={cn("font-light tracking-[-0.025em]", className)}>
      {before}
      {i >= 0 && <span className={cn("font-extrabold", dark ? "text-lime" : "text-gtext")}>{accent}</span>}
      {after}
    </Tag>
  );
}

export function SectionHeader({
  overline,
  title,
  accent,
  lead,
  dark,
  center,
  className,
}: {
  overline: string;
  title: string;
  accent?: string;
  lead?: string;
  dark?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex max-w-[900px] flex-col gap-4", center && "mx-auto items-center text-center", className)}>
      <Overline dark={dark}>{overline}</Overline>
      <SplitTitle
        title={title}
        accent={accent}
        dark={dark}
        className={cn("text-[30px] leading-[36px] md:text-[48px] md:leading-[56px]", dark ? "text-white" : "text-ink")}
      />
      {lead && (
        <p className={cn("max-w-[720px] text-base leading-relaxed md:text-[19px] md:leading-[30px]", dark ? "text-white/75" : "text-muted")}>
          {lead}
        </p>
      )}
    </div>
  );
}

export function Ring({
  size,
  className,
  color = "lime",
}: {
  size: number;
  className?: string;
  color?: "lime" | "white" | "green";
}) {
  const border = { lime: "border-lime/15", white: "border-white/[0.07]", green: "border-brand/20" }[color];
  return (
    <span
      aria-hidden
      style={{ width: size, height: size }}
      className={cn("pointer-events-none absolute rounded-full border-[1.5px]", border, className)}
    />
  );
}

export function Tick({ on = true, size = 22, className }: { on?: boolean; size?: number; className?: string }) {
  return (
    <span
      aria-hidden
      style={{ width: size, height: size }}
      className={cn(
        "flex shrink-0 items-center justify-center rounded-md border-[1.5px] transition-colors",
        on ? "border-brand bg-brand" : "border-line bg-white",
        className,
      )}
    >
      {on && (
        <svg viewBox="0 0 14 10" className="w-[55%]" fill="none">
          <path d="M1 5l4 4 8-8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </span>
  );
}
