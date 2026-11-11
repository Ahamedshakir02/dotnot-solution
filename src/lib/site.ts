export const site = {
  name: "Dotnot",
  tagline: "Grow forward.",
  url: "https://dotnot.solutions",
  email: "hello@dotnot.solutions",
  phones: {
    india: { label: "+91 9747 55 5030", wa: "919747555030" },
    uae: { label: "+971 55 502 5030", wa: "971555025030" },
  },
  address: [
    "5th Floor, 62/5217-A Kandamkulathy Towers",
    "Mahatma Gandhi Road, Kochi, Ernakulam",
    "Kerala 682011, India",
  ],
  legalName: "Dotnot Strategic Solutions",
};

// TODO: replace with the requirement agent link
const DEFAULT_MESSAGE = "Hi Dotnot, I'd like to share a requirement.";

export function requirementLink(message: string = DEFAULT_MESSAGE) {
  return `https://wa.me/${site.phones.india.wa}?text=${encodeURIComponent(message)}`;
}

export function whatsappLink(number: string) {
  return `https://wa.me/${number}`;
}

export const navLinks = [
  { label: "Growth Audit", href: "/growth-audit" },
  { label: "Implementation", href: "/implementation" },
  { label: "Sustain", href: "/sustain" },
  { label: "Results", href: "/#results" },
  { label: "Team", href: "/#team" },
];
