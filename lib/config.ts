export const SITE = {
  applicationUrl: process.env.NEXT_PUBLIC_APPLICATION_URL || "https://docs.google.com/forms/d/e/1FAIpQLSdEg6mkLzE_WL2wt06NC2Iva-JZs8ufXguYrL1sv9aJyjBGPg/viewform?usp=publish-editor",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/makofficialtm/",
  email: process.env.NEXT_PUBLIC_EMAIL || "contact.makofficial@gmail.com",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "", // set once you have a domain
  cohortDate: process.env.NEXT_PUBLIC_COHORT_DATE || "[COHORT_DATE]",
};
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
type Img = { src: string; w: number; h: number; alt: { en: string; fr: string }; kind?: "dm" | "invite" };
// Inbound proof: shown BEFORE the first section. Set to [] to hide.
export const INBOUND: Img[] = [
  { src: "inbound-1", w: 717, h: 1261, kind: "dm", alt: { en: "LinkedIn direct message received from an international author and advisor proposing a board advisory discussion", fr: "Message LinkedIn reçu d'un auteur et conseiller international proposant une discussion sur un poste de conseil d'administration" } },
  { src: "inbound-2", w: 720, h: 1782, kind: "dm", alt: { en: "LinkedIn direct message received from a venture capitalist inviting him to investment roundtables in the Bay Area", fr: "Message LinkedIn reçu d'un investisseur en capital-risque l'invitant à des tables rondes d'investissement dans la Bay Area" } },
  { src: "inbound-3", w: 720, h: 1189, kind: "dm", alt: { en: "LinkedIn direct message received from an engineering lead asking for his view on private capital and institutional distribution", fr: "Message LinkedIn reçu d'un responsable technique demandant son avis sur le capital privé et la distribution institutionnelle" } },
  { src: "inbound-4", w: 720, h: 1431, kind: "dm", alt: { en: "LinkedIn direct message received from an executive chairman and CEO asking to verify his services for a planned VC/PE fund", fr: "Message LinkedIn reçu d'un président exécutif et CEO souhaitant vérifier ses services pour un futur fonds VC/PE" } },
  { src: "inbound-5", w: 839, h: 2008, kind: "invite", alt: { en: "Three LinkedIn invitations with personal notes from a speaker specialist, a former TV news producer and a media executive", fr: "Trois invitations LinkedIn avec notes personnelles d'une spécialiste de la prise de parole, d'un ancien producteur TV et d'un dirigeant média" } },
  { src: "inbound-6", w: 891, h: 2008, kind: "invite", alt: { en: "Three LinkedIn invitations with personal notes from a strategist, a CEO and a founder working with fintech teams", fr: "Trois invitations LinkedIn avec notes personnelles d'une stratège, d'un CEO et d'un fondateur travaillant avec des équipes fintech" } },
  { src: "inbound-7", w: 891, h: 2008, kind: "invite", alt: { en: "Three LinkedIn invitations with personal notes from an operations executive, a global expansion president and a real estate investor", fr: "Trois invitations LinkedIn avec notes personnelles d'une dirigeante des opérations, d'un président de l'expansion internationale et d'un investisseur immobilier" } },
  { src: "inbound-8", w: 870, h: 1600, kind: "invite", alt: { en: "Five more pending LinkedIn invitations from founders, producers and finance professionals, in an inbox with 458 priority invitations", fr: "Cinq autres invitations LinkedIn en attente de fondateurs, producteurs et professionnels de la finance, dans une boîte avec 458 invitations prioritaires" } },
];
// Network proof (section 10). 
export const NETWORK: Img[] = [
  { src: "network-1", w: 900, h: 1468, alt: { en: "LinkedIn first-degree connections: founders, investors and business leaders with large audiences", fr: "Relations LinkedIn de premier niveau : fondateurs, investisseurs et dirigeants à large audience" } },
  { src: "network-2", w: 900, h: 1414, alt: { en: "LinkedIn first-degree connections: chairs, CEOs and senior leaders of global financial and technology companies", fr: "Relations LinkedIn de premier niveau : présidents, CEO et dirigeants d'entreprises financières et technologiques mondiales" } },
  { src: "network-3", w: 900, h: 1176, alt: { en: "LinkedIn connections page showing 30,000 connections, with senior leaders from banking, automotive, aviation and finance", fr: "Page de relations LinkedIn affichant 30 000 relations, avec des dirigeants de la banque, de l'automobile, de l'aviation et de la finance" } },
];
