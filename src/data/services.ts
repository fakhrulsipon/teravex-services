import type { LucideIcon } from "lucide-react";
import {
  Flame,
  HardHat,
  Hotel,
  PlaneTakeoff,
  ShieldCheck,
  Sparkles,
  Trees,
  UtensilsCrossed,
  MonitorSmartphone,
  Smartphone,
} from "lucide-react";

export type RoleGroup = {
  title: string;
  roles: string[];
};

export type Service = {
  slug: string;
  /** Short label used in dropdowns, filters and chips */
  label: string;
  /** Very short label for the sticky section menu */
  navLabel: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  /** Alt text for the service photo (/public/photos/<slug>-*.webp) */
  photoAlt: string;
  /** CSS object-position keeping the subject in frame when the photo is cropped (default "50% 50%") */
  photoFocus?: string;
  roleGroups: RoleGroup[];
  highlights: string[];
  /** Digital (non-manpower) service — kept out of the manpower request form. */
  digital?: boolean;
  /** Main button on the Services page; defaults to "Request <label> Staff". */
  cta?: { label: string; href: string };
};

/** Where a service card / menu item should link to. */
export const serviceHref = (s: Service) => `/services#${s.slug}`;

export const services: Service[] = [
  {
    slug: "web-development",
    label: "Website Development",
    navLabel: "Websites",
    title: "Website Design & Development",
    short: "Fast, modern business websites, online stores and web portals.",
    description:
      "Professional, mobile-friendly websites built to win customers — from company sites and landing pages to e-commerce stores and custom web portals.",
    icon: MonitorSmartphone,
    photoAlt: "Web designer's dual-monitor workstation showing website layouts",
    photoFocus: "70% 50%",
    digital: true,
    cta: { label: "View Our Products", href: "/#products" },
    roleGroups: [
      {
        title: "What We Build",
        roles: ["Corporate Websites", "E-commerce Stores", "Landing Pages", "Web Portals & Dashboards"],
      },
      { title: "Included", roles: ["Responsive Design", "SEO-Ready Build", "Hosting & Maintenance"] },
    ],
    highlights: ["Mobile-friendly & fast", "Arabic & English ready", "SEO-ready build"],
  },
  {
    slug: "mobile-app",
    label: "Mobile App Development",
    navLabel: "Mobile Apps",
    title: "Mobile App Development",
    short: "Android & iOS apps with clean design, from idea to app store.",
    description:
      "Android and iOS apps designed around your customers — booking, delivery, e-commerce and business apps, launched on the stores and supported after go-live.",
    icon: Smartphone,
    photoAlt: "Hand holding a smartphone running a colourful business app beside a laptop",
    digital: true,
    cta: { label: "Get a Free Quote", href: "/contact" },
    roleGroups: [
      {
        title: "What We Build",
        roles: ["Android Apps", "iOS Apps", "Booking & Delivery Apps", "Business & Admin Apps"],
      },
      { title: "Included", roles: ["UI/UX Design", "App Store Publishing", "Updates & Support"] },
    ],
    highlights: ["Android & iOS", "Clean, modern UI", "Store launch & support"],
  },
  {
    slug: "hospitality",
    label: "Hotel & Hospitality",
    navLabel: "Hospitality",
    title: "Hotel & Hospitality Staffing",
    short: "5-star trained front office, housekeeping and F&B professionals.",
    description:
      "Providing polished, service-oriented hospitality professionals trained to uphold 5-star standards.",
    icon: Hotel,
    photoAlt: "Uniformed doorman welcoming guests in a luxury hotel lobby",
    roleGroups: [
      { title: "Front Office & Guest Services", roles: ["Receptionist", "Concierge", "Bell Boy"] },
      {
        title: "Housekeeping & Laundry",
        roles: ["Head Housekeeper", "Room Attendant", "Cleaner", "Laundry Attendant"],
      },
      {
        title: "Food & Beverage",
        roles: ["Chef", "Line Cook", "Waiter / Waitress / Server", "Bartender / Barista"],
      },
      { title: "Operations & Support", roles: ["Accountant / Cashier", "Security Guard", "Driver"] },
    ],
    highlights: ["5-star service standards", "Guest-facing grooming & etiquette", "Flexible shift coverage"],
  },
  {
    slug: "restaurant",
    label: "Restaurant & Culinary",
    navLabel: "Restaurant",
    title: "Restaurant & Culinary Support",
    short: "Kitchen and dining teams for restaurants, cafes and catering.",
    description:
      "Specialized kitchen and dining staff for restaurants, cafes, cloud kitchens, and catering companies.",
    icon: UtensilsCrossed,
    photoAlt: "Chef plating gourmet dishes in a professional restaurant kitchen",
    photoFocus: "55% 75%",
    roleGroups: [
      {
        title: "Culinary Team",
        roles: ["Chef", "Commi Chef", "Roti Maker", "Pizza Maker", "Juice Maker", "Barista"],
      },
      { title: "Kitchen Support", roles: ["Kitchen Helper", "Dishwasher"] },
      { title: "Service & Management", roles: ["Team Leader", "Waiter / Waitress", "Food Runner", "Cashier"] },
    ],
    highlights: ["Restaurants, cafes & cloud kitchens", "Catering & event support", "Food-safety aware staff"],
  },
  {
    slug: "construction",
    label: "Construction & Technical",
    navLabel: "Construction",
    title: "Construction & Technical Manpower",
    short: "Certified tradespeople for civil, MEP and industrial projects.",
    description:
      "Certified tradespeople and site support teams for civil, MEP, and industrial construction projects.",
    icon: HardHat,
    photoAlt: "Construction crew in hard hats working on a high-rise building site",
    roleGroups: [
      {
        title: "MEP & Fabrication",
        roles: ["Electrician", "Pipe Fitter", "Pipe Fabricator", "Welder", "Technician"],
      },
      { title: "Civil & Structural", roles: ["Steel Fixer", "Carpenter", "Mason", "Rigger"] },
      {
        title: "Logistics & General Support",
        roles: ["Heavy / Light Driver", "Equipment Operator", "Site Helper"],
      },
    ],
    highlights: ["Trade-tested & certified", "Civil, MEP & industrial sites", "Rapid site mobilization"],
  },
  {
    slug: "oil-gas",
    label: "Oil & Gas",
    navLabel: "Oil & Gas",
    title: "Oil & Gas Construction Support",
    short: "HSE-compliant technical workforce for upstream to downstream.",
    description:
      "Safety-certified (HSE compliant) technical workforce specialized in upstream, midstream, and downstream oil & gas construction and maintenance projects across Qatar.",
    icon: Flame,
    photoAlt: "Engineers in safety gear inspecting pipework at an oil and gas plant",
    photoFocus: "78% 78%",
    roleGroups: [
      {
        title: "Project Coverage",
        roles: ["Upstream Projects", "Midstream Projects", "Downstream Projects", "Shutdown & Maintenance"],
      },
      {
        title: "Technical Workforce",
        roles: ["Pipe Fitter", "Welder", "Rigger", "Scaffolder", "Technician", "Equipment Operator"],
      },
    ],
    highlights: ["HSE compliant & safety-certified", "Construction & maintenance", "Projects across Qatar"],
  },
  {
    slug: "security",
    label: "Security Guard",
    navLabel: "Security",
    title: "Security Guard Services",
    short: "Vetted, trained guards for towers, hotels, sites and compounds.",
    description:
      "Vetted, physically fit, and trained security personnel for commercial towers, hotels, construction sites, and residential compounds.",
    icon: ShieldCheck,
    photoAlt: "Uniformed security officer with badge and radio on duty",
    photoFocus: "40% 50%",
    roleGroups: [
      { title: "Security Personnel", roles: ["Security Guard", "Security Supervisor"] },
      {
        title: "Sites We Secure",
        roles: ["Commercial Towers", "Hotels", "Construction Sites", "Residential Compounds"],
      },
      {
        title: "Available Nationalities",
        roles: ["Bangladesh", "Nepal", "Pakistan", "India", "Sri Lanka", "African Nations"],
      },
    ],
    highlights: ["Background-vetted personnel", "Physically fit & trained", "Day & night deployment"],
  },
  {
    slug: "cleaning",
    label: "Cleaning",
    navLabel: "Cleaning",
    title: "Commercial & Industrial Cleaning",
    short: "Deep cleaning, post-construction and daily janitorial teams.",
    description:
      "Comprehensive deep cleaning, post-construction cleanup, and daily janitorial maintenance for offices, malls, hotels, and industrial facilities.",
    icon: Sparkles,
    photoAlt: "Rope-access cleaners washing the glass facade of a commercial tower",
    roleGroups: [
      {
        title: "Cleaning Services",
        roles: ["Deep Cleaning", "Post-Construction Cleanup", "Daily Janitorial Maintenance"],
      },
      { title: "Facilities Covered", roles: ["Offices", "Malls", "Hotels", "Industrial Facilities"] },
      { title: "Cleaning Staff", roles: ["Cleaner", "Cleaning Supervisor"] },
    ],
    highlights: ["Commercial & industrial sites", "Scheduled or on-demand", "Supervised teams"],
  },
  {
    slug: "landscaping",
    label: "Landscaping",
    navLabel: "Landscaping",
    title: "Landscaping & Gardening",
    short: "Turf, irrigation, pruning and year-round garden upkeep.",
    description:
      "Complete outdoor beautification, turf installation, irrigation maintenance, tree pruning, and regular garden upkeep for commercial and residential properties.",
    icon: Trees,
    photoAlt: "Gardener in uniform trimming grass in a landscaped garden",
    photoFocus: "70% 50%",
    roleGroups: [
      {
        title: "Landscaping Services",
        roles: [
          "Outdoor Beautification",
          "Turf Installation",
          "Irrigation Maintenance",
          "Tree Pruning",
          "Regular Garden Upkeep",
        ],
      },
      { title: "Landscaping Staff", roles: ["Gardener", "Irrigation Technician"] },
    ],
    highlights: ["Commercial & residential", "Heat-adapted planting care", "Scheduled maintenance plans"],
  },
  {
    slug: "overseas-recruitment",
    label: "Overseas Recruitment",
    navLabel: "Recruitment",
    title: "Overseas Recruitment & Visa Processing",
    short: "Sourcing, trade testing, medicals and Qatar work visas.",
    description:
      "End-to-end international recruitment solutions — from candidate sourcing, trade testing, and medical clearance to Qatar work visa processing and onboarding.",
    icon: PlaneTakeoff,
    photoAlt: "Professional arriving at an airport terminal with luggage",
    roleGroups: [
      {
        title: "Recruitment Process",
        roles: [
          "Candidate Sourcing",
          "Trade Testing",
          "Medical Clearance",
          "Qatar Work Visa Processing",
          "Onboarding",
        ],
      },
    ],
    highlights: ["End-to-end, single point of contact", "8+ source nationalities", "Visa & onboarding handled"],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);

/**
 * Hireable job positions for the searchable directory on the Services page.
 * (Scope / site / process lists above are descriptive and not included here.)
 */
const hireableGroups: Record<string, string[]> = {
  hospitality: [
    "Front Office & Guest Services",
    "Housekeeping & Laundry",
    "Food & Beverage",
    "Operations & Support",
  ],
  restaurant: ["Culinary Team", "Kitchen Support", "Service & Management"],
  construction: ["MEP & Fabrication", "Civil & Structural", "Logistics & General Support"],
  "oil-gas": ["Technical Workforce"],
  security: ["Security Personnel"],
  cleaning: ["Cleaning Staff"],
  landscaping: ["Landscaping Staff"],
};

export type DirectoryRole = {
  role: string;
  group: string;
  serviceSlug: string;
  serviceLabel: string;
};

export const directoryRoles: DirectoryRole[] = services.flatMap((s) =>
  s.roleGroups
    .filter((g) => hireableGroups[s.slug]?.includes(g.title))
    .flatMap((g) =>
      g.roles.map((role) => ({ role, group: g.title, serviceSlug: s.slug, serviceLabel: s.label })),
    ),
);
