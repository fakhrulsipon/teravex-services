/**
 * Central place for all company / contact details.
 * Update the TODO values once the client confirms them — every page reads from here.
 */
export const site = {
  name: "Teravex Contracting & Services W.L.L",
  shortName: "Teravex",
  tagline: "Manpower Supply · Contracting · Overseas Recruitment",
  url: "https://www.teravexservices.com",
  domain: "www.teravexservices.com",
  email: "info@teravexservices.com",

  // TODO: replace with the real Qatar number once confirmed.
  phoneDisplay: "+974 XXXX XXXX",
  phoneHref: "+97400000000",
  // Digits only, with country code, no "+" (used for wa.me links).
  whatsapp: "97400000000",

  // TODO: add building / street / zone once confirmed.
  address: {
    line1: "Doha",
    line2: "State of Qatar",
  },
  mapQuery: "Doha, Qatar",

  // TODO: add the real profile links.
  social: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    telegram: "#",
  },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export function mailtoLink(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
