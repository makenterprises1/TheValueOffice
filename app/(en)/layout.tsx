import type { Metadata, Viewport } from "next";
import { Newsreader, Instrument_Sans } from "next/font/google";
import "@/app/globals.css";
import { T } from "@/lib/content";
import { SITE } from "@/lib/config";
const serif = Newsreader({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const m = T.en.meta;
export const metadata: Metadata = {
  title: m.title, description: m.description,
  metadataBase: SITE.siteUrl ? new URL(SITE.siteUrl) : undefined,
  alternates: SITE.siteUrl ? { canonical: "/", languages: { en: "/", fr: "/fr/" } } : undefined,
  openGraph: { title: m.title, description: m.description, type: "website", locale: "en_US" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#000000" };
export default function Layout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${serif.variable} ${sans.variable}`}><body>{children}</body></html>);
}
