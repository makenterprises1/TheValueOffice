// Replace placeholders before going live. Never hard-code a hostname in copy.
export const SITE = {
  name: "The Value Office",
  title: "The Value Office — Cohort 0 | High-Value Relationship & Market Access Operating System",
  description: "A selective 3-month execution environment for 10 Tunisian founders, CEOs and experts building authority, high-value relationships and commercial opportunities through LinkedIn.",
  applicationUrl: process.env.NEXT_PUBLIC_APPLICATION_URL || "[APPLICATION_URL]", // Tally / Typeform / Google Form
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || "[LINKEDIN_URL]",
  email: process.env.NEXT_PUBLIC_EMAIL || "[EMAIL]",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "", // set to [DOMAIN] once you have one
  cohortDate: process.env.NEXT_PUBLIC_COHORT_DATE || "[COHORT_DATE]",
};
// Founder metrics: VERIFY each before launch. LinkedIn caps first-degree connections
// at 30,000, so check the "348K+" figure (it may be reach/audience, not connections).
export const FOUNDER_STATS = [
  { v: "15+", l: "years across entrepreneurship, finance, advisory, venture capital and international ecosystems" },
  { v: "5+", l: "years inside Silicon Valley" },
  { v: "34K+", l: "LinkedIn followers" },
  { v: "348K+", l: "network reach (verify wording)" },
  { v: "14+", l: "countries, across 4 continents" },
];
// Set show:false to hide a screenshot. Alt text describes only what is visible.
export const PROOF = [
  { src: "network-1.webp", w: 1187, h: 1092, show: true, alt: "LinkedIn first-degree connections list showing executives, investors and founders connected in July 2026" },
  { src: "network-2.webp", w: 1181, h: 1098, show: true, alt: "LinkedIn connections list showing senior automotive, aviation and venture capital leaders connected in June and July 2026" },
  { src: "network-3.webp", w: 1165, h: 968, show: true, alt: "LinkedIn connections list showing chairmen, CEOs, authors and startup founders connected in May and June 2026" },
  { src: "network-4.webp", w: 1176, h: 1110, show: true, alt: "LinkedIn connections list showing banking, M&A, real estate and payments leaders connected in April 2026" },
  { src: "network-5.webp", w: 1176, h: 1918, show: true, alt: "LinkedIn first-degree connections showing founders, investors and business leaders with large audiences" },
];
