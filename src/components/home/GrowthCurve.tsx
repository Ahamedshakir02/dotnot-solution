// "Your business, before and after" card from the hero (concept C2).
// Coordinates come from the Figma card (560 × 470).

const W = 560;
const H = 470;

const milestones = [
  { x: 200, y: 402, n: "1", title: "You share", sub: "5 minutes", label: { x: 120, y: 420 } },
  { x: 309, y: 354, n: "2", title: "We find it", sub: "and put a price on it", label: { x: 326, y: 372 } },
  { x: 392, y: 272, n: "3", title: "We build it", sub: "with your team", label: { x: 410, y: 290 } },
  { x: 498, y: 146, n: "4", title: "Your team runs it", sub: "we stay through Sustain", label: { x: 330, y: 100 } },
];

const pct = (v: number, of: number) => `${(v / of) * 100}%`;

export function GrowthCurve() {
  return (
    <figure
      data-reveal
      data-draw
      className="relative w-full rounded-[28px] bg-white shadow-[0_4px_10px_rgba(3,20,8,0.22),0_28px_56px_-6px_rgba(3,20,8,0.45),0_0_40px_rgba(134,204,89,0.18)]"
      style={{ aspectRatio: `${W} / ${H}` }}
    >
      <figcaption className="absolute top-[6%] left-[5.7%] text-[10px] font-bold tracking-[0.08em] text-muted uppercase md:text-[13px]">
        Your business, before and after
      </figcaption>

      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="gc-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#86CC59" stopOpacity="0.38" />
            <stop offset="1" stopColor="#86CC59" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[120, 220, 320, 420].map((y) => (
          <line key={y} x1="32" x2="528" y1={y} y2={y} stroke="#DADFDA" strokeWidth="1" />
        ))}
        <path className="fade" style={{ ["--dd" as string]: "900ms" }} d="M200 402 C320 392 400 252 528 112 L528 420 L200 420 Z" fill="url(#gc-area)" />
        <polyline
          className="draw"
          pathLength={1}
          style={{ ["--dd" as string]: "200ms" }}
          points="32,400 60,385 85,410 110,392 135,415 160,396 185,412 200,402"
          fill="none"
          stroke="#5F6863"
          strokeOpacity="0.5"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path className="draw" pathLength={1} style={{ ["--dd" as string]: "700ms" }} d="M200 402 C320 392 400 252 528 112" fill="none" stroke="#218A43" strokeWidth="3.5" strokeLinecap="round" />
        {milestones.map((m, i) => {
          const last = i === milestones.length - 1;
          const r = last ? 17 : 14;
          return (
            <g key={m.n} className="pop" style={{ ["--dd" as string]: `${900 + i * 300}ms` }}>
              <circle cx={m.x} cy={m.y} r={r} fill={last ? "#86CC59" : "#fff"} stroke="#218A43" strokeWidth="1.5" />
              <text x={m.x} y={m.y + 4.5} textAnchor="middle" fontSize="13" fontWeight="800" fill={last ? "#101010" : "#218A43"}>
                {m.n}
              </text>
            </g>
          );
        })}
      </svg>

      {milestones.map((m) => (
        <div
          key={m.n}
          className="pop absolute flex flex-col leading-tight"
          style={{ left: pct(m.label.x, W), top: pct(m.label.y, H), ["--dd" as string]: `${1000 + Number(m.n) * 300}ms` }}
        >
          <span className="text-[10px] font-bold text-ink sm:text-[14px]">{m.title}</span>
          <span className="hidden text-[12px] text-muted sm:block">{m.sub}</span>
        </div>
      ))}

      <span className="absolute bottom-[3%] left-[7%] rounded-full bg-paper px-2.5 py-1 text-[10px] font-bold text-muted sm:text-[11px]">Before</span>
      <span className="absolute right-[6%] bottom-[3%] rounded-full bg-tint px-2.5 py-1 text-[10px] font-bold text-gtext sm:text-[11px]">After</span>
    </figure>
  );
}
