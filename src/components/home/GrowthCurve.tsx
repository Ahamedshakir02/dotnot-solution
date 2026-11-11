const W = 560;
const H = 470;

// Before: early growth that flattens out. After: a slow start, a small dip while
// the new way settles in, then steady growth. The dashed line is what happens if nothing changes.
const STALL = "32,388 58,372 84,354 110,341 134,334 152,337 170,329 190,334 210,328";
const AFTER = "M210 328 C240 328 266 323 290 316 C318 308 336 288 354 281 C368 276 376 286 392 263 C420 226 456 198 500 168 C512 160 520 156 528 151";
const AREA = `${AFTER} L528 420 L210 420 Z`;

const milestones = [
  { x: 210, y: 328, n: "1", title: "You share", sub: "5 minutes", label: { x: 150, y: 346 } },
  { x: 290, y: 316, n: "2", title: "We find it", sub: "and put a price on it", label: { x: 258, y: 352 } },
  { x: 392, y: 263, n: "3", title: "We build it", sub: "with your team", label: { x: 404, y: 270 } },
  { x: 500, y: 168, n: "4", title: "Your team runs it", sub: "we stay through Sustain", label: { x: 330, y: 104 } },
];

const pct = (v: number, of: number) => `${(v / of) * 100}%`;

export function GrowthCurve() {
  return (
    <figure
      data-reveal
      data-draw
      className="relative w-full rounded-[28px] bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.07),0_0_70px_6px_rgba(134,204,89,0.25),0_40px_80px_-12px_rgba(0,0,0,0.6)]"
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

        {/* growth that stalls */}
        <polyline
          className="draw"
          pathLength={1}
          style={{ ["--dd" as string]: "200ms" }}
          points={STALL}
          fill="none"
          stroke="#5F6863"
          strokeOpacity="0.55"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* if nothing changes */}
        <path
          className="fade"
          style={{ ["--dd" as string]: "900ms" }}
          d="M210 328 C300 330 400 338 528 350"
          fill="none"
          stroke="#5F6863"
          strokeOpacity="0.45"
          strokeWidth="2"
          strokeDasharray="5 6"
          strokeLinecap="round"
        />

        <path className="fade" style={{ ["--dd" as string]: "1300ms" }} d={AREA} fill="url(#gc-area)" />
        <path className="draw" pathLength={1} style={{ ["--dd" as string]: "900ms" }} d={AFTER} fill="none" stroke="#218A43" strokeWidth="3.5" strokeLinecap="round" />
        {milestones.map((m, i) => {
          const last = i === milestones.length - 1;
          const r = last ? 17 : 14;
          return (
            <g key={m.n} className="pop" style={{ ["--dd" as string]: `${1000 + i * 300}ms` }}>
              <circle cx={m.x} cy={m.y} r={r} fill={last ? "#86CC59" : "#fff"} stroke="#218A43" strokeWidth="1.5" />
              <text x={m.x} y={m.y + 4.5} textAnchor="middle" fontSize="13" fontWeight="800" fill={last ? "#101010" : "#218A43"}>
                {m.n}
              </text>
            </g>
          );
        })}
      </svg>

      <span
        className="fade absolute text-[9px] font-semibold text-muted italic sm:text-[12px]"
        style={{ left: pct(56, W), top: pct(296, H), ["--dd" as string]: "600ms" }}
      >
        Growth stalls
      </span>
      <span
        className="fade absolute text-right text-[9px] font-semibold text-muted italic sm:text-[12px]"
        style={{ right: pct(32, W), top: pct(358, H), ["--dd" as string]: "1100ms" }}
      >
        If nothing changes
      </span>

      {milestones.map((m) => (
        <div
          key={m.n}
          className="pop absolute flex flex-col leading-tight"
          style={{ left: pct(m.label.x, W), top: pct(m.label.y, H), ["--dd" as string]: `${1100 + Number(m.n) * 300}ms` }}
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
