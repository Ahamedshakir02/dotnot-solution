import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";

// Add a `logo` path (in /public/clients) to any client when the logos arrive.
const industries: { name: string; clients: { name: string; logo?: string }[] }[] = [
  { name: "Retail", clients: [{ name: "Colors and Looms" }, { name: "Zeenath Textile" }, { name: "Eyenation" }, { name: "Safari Furniture" }, { name: "Al Rams" }] },
  { name: "Manufacturing", clients: [{ name: "Pearl City" }, { name: "Evergreen Furniture" }, { name: "An apparel manufacturer" }] },
  { name: "Restaurants", clients: [{ name: "Aslee Hindi" }, { name: "Shawook" }, { name: "Mr. Eggy" }] },
  { name: "Agencies", clients: [{ name: "Tale8" }, { name: "Beyo" }] },
  { name: "Healthcare", clients: [{ name: "Sravana Hearing Aid" }] },
  { name: "Education and travel", clients: [{ name: "Edu Wisdom" }, { name: "Europe Travels" }] },
];

export function Clientele() {
  return (
    <Section id="clientele" tone="paper">
      <span aria-hidden className="text-outline-green absolute top-0 right-12 hidden xl:right-[110px] text-[220px] leading-[200px] font-extrabold tracking-[-0.06em] lg:block">
        01
      </span>
      <SectionHeader
        overline="Clientele"
        title="Trusted by growing businesses across six industries."
        accent="across six industries."
        lead="Sixteen clients, grouped by what they do."
      />
      <ul className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {industries.map((ind, i) => (
          <li key={ind.name} className="flex flex-col gap-5 rounded-[20px] border border-line bg-white p-6 md:p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-tint text-sm font-semibold text-gtext">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[19px] font-semibold">{ind.name}</h3>
              <span className="ml-auto text-[13px] font-medium text-muted">
                {ind.clients.length} {ind.clients.length > 1 ? "clients" : "client"}
              </span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {ind.clients.map((c) => (
                <li key={c.name} className="rounded-full border border-line bg-paper px-3.5 py-2 text-sm font-medium">
                  {c.logo ? <Image src={c.logo} alt={c.name} width={120} height={40} className="h-5 w-auto" /> : c.name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
