/** Live web products built by our team — shown on the Digital Solutions page as proof of work. */
export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  url: string;
  /** Screenshot set: /projects/<slug>-{640,1200}.webp (2:1, top of the home page). */
  alt: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "sitebari",
    name: "Sitebari",
    tagline: "E-commerce management platform",
    category: "E-commerce SaaS",
    url: "https://sitebari.com/",
    alt: "Sitebari e-commerce management platform home page",
    stack: ["Next.js", "NestJS", "PostgreSQL", "AWS"],
  },
  {
    slug: "codeclash",
    name: "CodeClash",
    tagline: "Competitive programming platform",
    category: "EdTech Platform",
    url: "https://code-clash-d9152.web.app/",
    alt: "CodeClash competitive programming platform home page",
    stack: ["React", "Node.js", "MongoDB", "Firebase"],
  },
  {
    slug: "ridex",
    name: "RideX",
    tagline: "Ride-sharing platform",
    category: "Mobility Platform",
    url: "https://ridex-ride-sharing.vercel.app/",
    alt: "RideX ride-sharing platform home page",
    stack: ["Next.js", "Express.js", "MongoDB", "GSAP"],
  },
  {
    slug: "mailbari",
    name: "Mailbari",
    tagline: "Business email & collaboration platform",
    category: "Business Email SaaS",
    url: "https://mailbari.com/",
    alt: "Mailbari business email platform home page",
    stack: ["Next.js", "NestJS", "PostgreSQL", "AWS"],
  },
];
