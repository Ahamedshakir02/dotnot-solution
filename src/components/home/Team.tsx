import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";

// photo: "/team/<file>"
const team: { name: string; role: string; photo?: string }[] = [
  { name: "Murshid Basil", role: "Chief Growth Architect" },
  { name: "M Nasim", role: "Chief Business Architect" },
  { name: "Serin Paul", role: "Chief Product Architect" },
  { name: "Adithyan M Nair", role: "Tech Architect" },
];

export function Team() {
  return (
    <Section id="team">
      <SectionHeader overline="Team" title="Strategy, operations, product and technology at one table." accent="at one table." />
      <ul data-stagger className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 md:mt-14 md:gap-x-8 lg:grid-cols-4">
        {team.map((p) => (
          <li key={p.name} className="flex flex-col gap-4 border-t-2 border-ink pt-5">
            {p.photo && (
              <Image src={p.photo} alt="" width={480} height={560} className="aspect-[6/7] w-full rounded-2xl object-cover" />
            )}
            <span className="flex flex-col gap-1.5">
              <span className="text-lg leading-6 font-bold md:text-2xl md:leading-8">{p.name}</span>
              <span className="text-sm font-medium text-muted">{p.role}</span>
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
