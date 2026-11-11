import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";

// photo: "/team/<file>"
const team: { initials: string; name: string; role: string; photo?: string }[] = [
  { initials: "MB", name: "Murshid Basil", role: "Chief Growth Architect" },
  { initials: "MN", name: "M Nasim", role: "Chief Business Architect" },
  { initials: "SP", name: "Serin Paul", role: "Chief Product Architect" },
  { initials: "AN", name: "Adithyan M Nair", role: "Tech Architect" },
];

export function Team() {
  return (
    <Section id="team">
      <span aria-hidden className="text-outline-green absolute top-0 right-12 hidden xl:right-[110px] text-[220px] leading-[200px] font-extrabold tracking-[-0.06em] lg:block">
        07
      </span>
      <SectionHeader overline="Team" title="Strategy, operations, product and technology at one table." accent="at one table." />
      <ul data-stagger className="mt-10 grid grid-cols-2 gap-3 md:mt-14 md:gap-6 lg:grid-cols-4">
        {team.map((p) => (
          <li key={p.name} className="flex flex-col gap-3 rounded-[20px] border border-line bg-white p-5 md:gap-4 md:p-7">
            {p.photo ? (
              <Image src={p.photo} alt="" width={160} height={160} className="h-16 w-16 rounded-full object-cover md:h-20 md:w-20" />
            ) : (
              <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-lime bg-tint text-lg font-extrabold text-gtext md:h-20 md:w-20 md:text-2xl">
                {p.initials}
              </span>
            )}
            <span className="flex flex-col gap-1">
              <span className="text-base font-bold md:text-xl">{p.name}</span>
              <span className="text-xs font-semibold text-gtext md:text-sm">{p.role}</span>
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
