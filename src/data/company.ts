export type Nationality = {
  name: string;
  /** flag file in /public/flags, or null for the "Other African Nations" globe card */
  flag: string | null;
  note: string;
};

export const nationalities: Nationality[] = [
  { name: "Bangladesh", flag: "/flags/bd.svg", note: "South Asia" },
  { name: "Nepal", flag: "/flags/np.svg", note: "South Asia" },
  { name: "India", flag: "/flags/in.svg", note: "South Asia" },
  { name: "Pakistan", flag: "/flags/pk.svg", note: "South Asia" },
  { name: "Philippines", flag: "/flags/ph.svg", note: "Southeast Asia" },
  { name: "Sri Lanka", flag: "/flags/lk.svg", note: "South Asia" },
  { name: "Kenya", flag: "/flags/ke.svg", note: "East Africa" },
  { name: "Other African Nations", flag: null, note: "Across Africa" },
];

// TODO: replace the monogram tiles with the real logo files once the client sends them.
export const clients = [
  { name: "QCC", full: "Construction & Contracting", mark: "QCC" },
  { name: "QatarEnergy", full: "Energy", mark: "QE" },
  { name: "NPMS Qatar", full: "Strategic Partner", mark: "NP" },
  { name: "Qaysar Group", full: "Strategic Partner", mark: "QG" },
];

export const stats = [
  { value: 5000, suffix: "+", label: "Active Workforce", caption: "Pool of 5,000 – 6,000+ workers" },
  { value: 8, suffix: "+", label: "Source Nationalities", caption: "Major global talent hubs" },
  { value: 100, suffix: "%", label: "Qatar Labour Law Compliant", caption: "Fully compliant operations" },
  { value: 24, suffix: "/7", label: "Rapid Deployment Support", caption: "Round-the-clock response" },
];

export const processSteps = [
  {
    title: "Share Your Requirement",
    text: "Tell us the roles, headcount, nationality preference and project duration.",
  },
  {
    title: "Source & Trade-Test",
    text: "We shortlist from our ready pool or recruit overseas, then trade-test every candidate.",
  },
  {
    title: "Visa & Mobilization",
    text: "Medical clearance, Qatar work visa processing and onboarding — all handled by us.",
  },
  {
    title: "Deploy & Support",
    text: "Workers report on site, backed by 24/7 support and quick replacements.",
  },
];
