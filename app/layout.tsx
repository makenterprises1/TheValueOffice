import type { Metadata, Viewport } from "next";
import { Newsreader, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/config";
const serif = Newsreader({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
export const metadata: Metadata = {
  title: SITE.title, description: SITE.description,
  metadataBase: SITE.siteUrl ? new URL(SITE.siteUrl) : undefined,
  openGraph: { title: SITE.title, description: SITE.description, type: "website" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#000000" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${serif.variable} ${sans.variable}`}><body>{children}</body></html>);
}
