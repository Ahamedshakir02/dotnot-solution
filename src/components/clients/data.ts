export type Client = { name: string; logo?: string; factory?: boolean };

// logo: square tile in /public/clients (96px webp)
const L = (slug: string) => `/clients/${slug}.webp`;

export const industries: { name: string; clients: Client[] }[] = [
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
    clients: [
      { name: "Pearl City", logo: L("pearl-city") },
      { name: "Evergreen Furniture", logo: L("evergreen") },
      { name: "Apparel manufacturer", factory: true },
    ],
  },
  { name: "Restaurants", clients: [{ name: "Aslee Hindi", logo: L("aslee-hindi") }, { name: "Shawook" }, { name: "Mr. Eggy", logo: L("mr-eggy") }] },
  { name: "Agencies", clients: [{ name: "Tale8", logo: L("tale8") }, { name: "Beyo", logo: L("beyo") }] },
  { name: "Healthcare", clients: [{ name: "Sravana Hearing Aid", logo: L("sravana") }] },
  { name: "Education and travel", clients: [{ name: "Edu Wisdom", logo: L("edu-wisdom") }, { name: "Europe Travels", logo: L("europe-travels") }] },
];

export const allClients = industries.flatMap((ind) => ind.clients);
export const withLogo = allClients.filter((c) => c.logo);

export const stories = [
  {
    client: "Colors and Looms",
    sector: "Bespoke apparel · UAE",
    logo: L("colors-and-looms"),
    number: "2x",
    label: "off-season sales",
    text: "Rebuilt the sales process and customer experience. Monthly retainer revenue up 50%.",
  },
  {
    client: "Safari Mall Leasing",
    sector: "Leasing · UAE",
    logo: L("safari-mall"),
    number: "80%",
    label: "of the issues resolved",
    text: "The Growth Audit found misalignment and poor communication between departments.",
  },
  {
    client: "Apparel manufacturer",
    sector: "Manufacturing · India",
    logo: undefined,
    number: "₹3 Cr",
    label: "revenue loss identified",
    text: "Found by the Growth Audit, started August 2026.",
  },
];
