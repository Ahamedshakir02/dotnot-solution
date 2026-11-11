const items = [
  { n: "2x", text: "off-season sales", client: "Colors and Looms" },
  { n: "80%", text: "of issues resolved", client: "Safari Mall Leasing" },
  { n: "₹3 Cr", text: "about, from the Growth Audit", client: "Apparel manufacturer" },
  { n: "+50%", text: "monthly retainer revenue", client: "Colors and Looms" },
];

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-9 pr-9" aria-hidden={hidden || undefined}>
      {items.map((it) => (
        <li key={it.n + it.client} className="flex items-center gap-9">
          <span className="flex items-center gap-3">
            <span className="text-[26px] font-extrabold tracking-[-0.03em] text-lime md:text-[32px]">{it.n}</span>
            <span className="flex flex-col leading-tight">
              <span className="text-[13px] font-medium text-white md:text-[15px]">{it.text}</span>
              <span className="text-[10px] font-bold tracking-[0.08em] text-white/50 uppercase md:text-[11px]">{it.client}</span>
            </span>
          </span>
          <span aria-hidden className="text-[28px] font-light text-white/20">
            /
          </span>
        </li>
      ))}
    </ul>
  );
}

export function ResultsTicker() {
  return (
    <section aria-label="Results" className="flex items-center overflow-hidden bg-ink py-5 text-white">
      <div className="flex w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
        <div className="animate-marquee flex w-max">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
