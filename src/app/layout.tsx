import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { StickyBar } from "@/components/ui/StickyBar";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = localFont({
  src: [
    { path: "../fonts/Manrope-latin.woff2", weight: "200 800", style: "normal" },
    { path: "../fonts/Manrope-latin-ext.woff2", weight: "200 800", style: "normal" },
  ],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Dotnot — Build a business that works better as it grows",
    template: "%s · Dotnot",
  },
  description:
    "We find what's slowing your business down, put a cost on it, and build the fix with your team. Growth Audit, Implementation and Sustain.",
  openGraph: {
    siteName: "Dotnot",
    type: "website",
    locale: "en",
  },
};

export const viewport: Viewport = {
  themeColor: "#082213",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans">
        {children}
        <StickyBar />
      </body>
    </html>
  );
}
