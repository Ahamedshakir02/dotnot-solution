import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/cn";

// logo: square tile in /public/clients (96px webp)
const L = (slug: string) => `/clients/${slug}.webp`;
const industries: { name: string; clients: { name: string; logo?: string }[] }[] = [
  {
    name: "Retail",
    clients: [
      { name: "Colors and Looms", logo: L("colors-and-looms") },
      { name: "Zeenath Textile", logo: L("zeenath") },
      { name: "Eyenation", logo: L("eyenation") },
      { name: "Safari Furniture", logo: L("safari-furniture") },
      { name: "Al Rams", logo: L("al-rams") },
    ],
  },
  {
    name: "Manufacturing",
    clients: [{ name: "Pearl City", logo: L("pearl-city") }, { name: "Evergreen Furniture", logo: L("evergreen") }, { name: "An apparel manufacturer" }],
  },
  { name: "Restaurants", clients: [{ name: "Aslee Hindi", logo: L("aslee-hindi") }, { name: "Shawook" }, { name: "Mr. Eggy", logo: L("mr-eggy") }] },
  { name: "Agencies", clients: [{ name: "Tale8", logo: L("tale8") }, { name: "Beyo", logo: L("beyo") }] },
  { name: "Healthcare", clients: [{ name: "Sravana Hearing Aid", logo: L("sravana") }] },
  { name: "Education and travel", clients: [{ name: "Edu Wisdom", logo: L("edu-wisdom") }, { name: "Europe Travels", logo: L("europe-travels") }] },
];

export function Clientele() {
  return (
    <Section id="clientele" tone="paper">
      <SectionHeader
        overline="Clientele"
        title="Trusted by growing businesses across six industries."
        accent="across six industries."
        lead="15+ clients, grouped by what they do."
      />
      <ul data-stagger className="mt-8 grid gap-3 md:mt-14 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {industries.map((ind, i) => (
          <li key={ind.name} className="lift flex flex-col gap-4 rounded-[20px] border border-line bg-white p-5 md:gap-5 md:p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-tint text-[13px] font-semibold text-gtext md:h-9 md:w-9 md:text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[19px] font-semibold">{ind.name}</h3>
              <span className="ml-auto text-[13px] font-medium text-muted">
                {ind.clients.length} {ind.clients.length > 1 ? "clients" : "client"}
              </span>
            </div>
            <ul className="flex flex-wrap gap-1.5 md:gap-2">
              {ind.clients.map((c) => (
                <li key={c.name} className={cn("flex min-h-9 items-center gap-2 rounded-full border border-line bg-paper py-1 pr-3 text-[13px] font-medium md:min-h-10 md:pr-3.5 md:text-sm", c.logo ? "pl-1" : "pl-3 md:pl-3.5")}>
                  {c.logo && (
                    <Image src={c.logo} alt="" width={32} height={32} unoptimized className="h-7 w-7 shrink-0 rounded-[7px] object-cover ring-1 ring-black/5 md:h-8 md:w-8 md:rounded-lg" />
                  )}
                  {c.name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className="mt-5 text-[15px] font-semibold text-muted md:mt-6 md:text-base">…and more.</p>
    </Section>
  );
}
