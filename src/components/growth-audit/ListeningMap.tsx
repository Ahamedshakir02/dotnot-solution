import { Redacted } from "@/components/ui/Redacted";

const W = 640;
const H = 640;
const target = { x: 330, y: 420 };

const rows = [
  { label: "Owner", y: 60, xs: [370], r: 20 },
  { label: "Managers", y: 170, xs: [190, 310, 430, 550], r: 16 },
  { label: "Frontline", y: 280, xs: [130, 181, 232, 283, 334, 385, 436, 487, 538, 589], r: 12 },
];

const ringed = new Set([1, 4, 7]);
const pct = (v: number, of: number) => `${(v / of) * 100}%`;

function VoiceChip({ x, y, t }: { x: number; y: number; t: string }) {
  return (
    <span
      className="absolute flex items-center gap-1.5 rounded-xl border border-lime/50 bg-deep px-2 py-1.5"
      style={{ left: pct(x, W), top: pct(y, H) }}
      aria-hidden
    >
      <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-lime text-[7px] text-ink">▶</span>
      <span className="flex items-center gap-[2px]">
        {[5, 10, 14, 8, 16, 11, 6, 12].map((h, i) => (
          <span key={i} className="w-[2px] rounded bg-lime" style={{ height: h }} />
        ))}
      </span>
      <span className="text-[10px] font-semibold text-white">{t}</span>
    </span>
  );
}

export function ListeningMap() {
  return (
    <div data-draw className="relative w-full" style={{ aspectRatio: `${W} / ${H}` }} role="img" aria-label="Diagram: owner, managers and frontline staff all feed into one Growth Audit report with a cost on each problem">
      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" aria-hidden>
        {rows.flatMap((row) =>
          row.xs.map((x) => {
            const midY = (row.y + target.y + 90) / 2;
            return (
              <path
                className="draw"
                pathLength={1}
                style={{ ["--dd" as string]: `${400 + row.y * 2}ms` }}
                key={`${row.label}-${x}`}
                d={`M${x} ${row.y} C${x} ${midY} ${target.x} ${midY - 40} ${target.x} ${target.y}`}
                fill="none"
                stroke="#86CC59"
                strokeOpacity={row.label === "Frontline" ? 0.22 : 0.35}
                strokeWidth="1.2"
              />
            );
          }),
        )}
        {rows.map((row) => (
          <text key={row.label} x="0" y={row.y + 4} fontSize="11" fontWeight="700" letterSpacing="1" fill="#86CC59" fillOpacity="0.8">
            {row.label.toUpperCase()}
          </text>
        ))}
        {rows.flatMap((row) =>
          row.xs.map((x, i) => (
            <g key={`n-${row.label}-${x}`} className="pop" style={{ ["--dd" as string]: `${row.y * 2 + i * 40}ms` }}>
              {row.label === "Frontline" && ringed.has(i) && (
                <>
                  <circle cx={x} cy={row.y} r={row.r + 11} fill="none" stroke="#86CC59" strokeOpacity="0.7" strokeWidth="1.5" />
                  <circle cx={x} cy={row.y} r={row.r + 22} fill="none" stroke="#86CC59" strokeOpacity="0.3" />
                </>
              )}
              <circle cx={x} cy={row.y} r={row.r} fill="#fff" />
            </g>
          )),
        )}
      </svg>

      <VoiceChip x={150} y={330} t="0:41" />
      <VoiceChip x={460} y={330} t="0:24" />

      <div
        className="float absolute flex flex-col gap-2 rounded-[20px] bg-white p-3 text-ink shadow-[0_20px_44px_-4px_rgba(3,20,8,0.4),0_0_30px_rgba(134,204,89,0.2)] sm:gap-2.5 sm:p-5"
        style={{ left: pct(target.x - 160, W), top: pct(target.y, H), width: pct(320, W) }}
      >
        <div className="flex items-center">
          <span className="text-[11px] font-bold sm:text-sm">Growth Audit report</span>
          <span className="ml-auto text-[10px] font-bold text-brand sm:text-[11px]">Sample</span>
        </div>
        {[150, 120, 90].map((w) => (
          <div key={w} className="flex items-center gap-2 border-t border-line pt-2">
            <span className="h-2 rounded bg-line" style={{ width: `${(w / 280) * 100}%` }} />
            <Redacted className="ml-auto text-[10px] sm:text-[13px]" />
          </div>
        ))}
      </div>
    </div>
  );
}
