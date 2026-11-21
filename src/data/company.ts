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

/** Companies we work with — logos live in /public/clients (width/height = file size, prevents layout shift). */
export const trustedCompanies = [
  { name: "QatarEnergy", logo: "/clients/qatarenergy.webp", w: 337, h: 346 },
  { name: "Qatar Petroleum", logo: "/clients/qatar-petroleum.webp", w: 320, h: 114 },
  { name: "G4S", logo: "/clients/g4s.webp", w: 296, h: 190 },
  { name: "DoubleTree by Hilton", logo: "/clients/doubletree.webp", w: 162, h: 123 },
  { name: "Best Plaza West Bay Hotel", logo: "/clients/best-plaza.webp", w: 323, h: 165 },
  { name: "Teyseer Holding", logo: "/clients/teyseer.webp", w: 524, h: 128 },
  { name: "Dana Hypermarket", logo: "/clients/dana-hypermarket.webp", w: 258, h: 304 },
  { name: "Day to Day Discount Center", logo: "/clients/day-to-day.webp", w: 262, h: 127 },
  { name: "Urban Hospitality Services", logo: "/clients/urban-hospitality.webp", w: 365, h: 151 },
  { name: "Swan Global", logo: "/clients/swan-global.webp", w: 336, h: 104 },
  { name: "Al Khebra Driving Academy", logo: "/clients/al-khebra.webp", w: 496, h: 86 },
  { name: "Blue Galaxy", logo: "/clients/blue-galaxy.webp", w: 351, h: 128 },
  { name: "Orbee", logo: "/clients/orbee.webp", w: 305, h: 114 },
  { name: "Angel Touch Body Massage & Spa", logo: "/clients/angel-touch.webp", w: 360, h: 360 },
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
