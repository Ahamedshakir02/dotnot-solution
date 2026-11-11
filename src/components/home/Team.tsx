import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

type Person = { name: string; role: string; area: string; photo?: string };

// photo: "/team/<file>"
const team: Person[] = [
  { name: "Murshid Basil", role: "Chief Growth Architect", area: "Growth" },
  { name: "M Nasim", role: "Chief Business Architect", area: "Business" },
  { name: "Serin Paul", role: "Chief Product Architect", area: "Product" },
  { name: "Adithyan M Nair", role: "Tech Architect", area: "Tech" },
];

function Leg({ up }: { up?: boolean }) {
  return (
    <span aria-hidden className={cn("flex h-7 flex-col items-center md:h-9", up && "flex-col-reverse")}>
      <span className="w-0.5 flex-1 bg-brand/30" />
      <span className="h-2 w-2 rounded-full bg-brand" />
    </span>
  );
}

function Seat({ p, below }: { p: Person; below?: boolean }) {
  return (
    <div className={cn("flex flex-col items-center", !below && "from-above")}>
      {below && <Leg up />}
      <div className="lift flex w-full max-w-[320px] flex-1 flex-col items-center justify-center gap-3 rounded-[20px] border border-line bg-white px-4 py-5 text-center md:px-6 md:py-6">
        {p.photo && (
          <Image src={p.photo} alt="" width={160} height={160} className="h-14 w-14 shrink-0 rounded-full object-cover md:h-16 md:w-16" />
        )}
        <span className="flex flex-col gap-1">
          <span className="text-[15px] leading-5 font-bold md:text-lg md:leading-6">{p.name}</span>
          <span className="text-xs font-semibold text-gtext md:text-sm">{p.role}</span>
        </span>
      </div>
      {!below && <Leg />}
    </div>
  );
}

export function Team() {
  const [a, b, c, d] = team;
  return (
    <Section id="team">
      <SectionHeader overline="Team" title="Strategy, operations, product and technology at one table." accent="at one table." />

      {/* the four of us around one table, with your business in the middle */}
      <div data-stagger className="mx-auto mt-10 grid max-w-[1000px] grid-cols-2 gap-x-3 md:mt-14 md:gap-x-10">
        <Seat p={a} />
        <Seat p={b} />
        <div className="bg-brand-gradient relative col-span-2 flex h-[150px] flex-col items-center justify-center gap-1 rounded-[28px] text-white shadow-[0_28px_60px_-18px_rgba(8,34,19,0.55)] md:h-[200px] md:rounded-[36px]">
          <span aria-hidden className="absolute inset-3 rounded-[20px] border border-white/10 md:inset-4 md:rounded-[26px]" />
          {team.map((p, i) => (
            <span
              key={p.area}
              aria-hidden
              className={cn(
                "absolute -translate-x-1/2 rounded-full border border-lime/40 bg-night/40 px-3 py-1 text-[11px] font-bold text-lime md:text-xs",
                i < 2 ? "top-5 md:top-8" : "bottom-5 md:bottom-8",
                i % 2 === 0 ? "left-1/4" : "left-3/4",
              )}
            >
              {p.area}
            </span>
          ))}
          <span className="text-[10px] font-semibold tracking-[0.14em] text-white/55 uppercase md:text-[11px]">On the table</span>
          <span className="text-[24px] leading-none font-light tracking-[-0.02em] md:text-[38px]">
            Your <span className="font-extrabold text-lime">business</span>
          </span>
        </div>
        <Seat p={c} below />
        <Seat p={d} below />
      </div>
    </Section>
  );
}
