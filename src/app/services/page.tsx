import { Search } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/sections/CtaBand";
import JobDirectory from "@/components/services/JobDirectory";
import ServiceDetail from "@/components/services/ServiceDetail";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { directoryRoles, services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services — Manpower Supply, Staffing & Recruitment in Qatar",
  description:
    "Hotel & hospitality staffing, restaurant & culinary support, construction & technical manpower, oil & gas, security guards, cleaning, landscaping and overseas recruitment & visa processing in Qatar.",
  alternates: { canonical: "/services/" },
};

const heroStats = [
  { value: String(services.length), label: "Service lines" },
  { value: String(directoryRoles.length), label: "Positions listed" },
  { value: "8+", label: "Nationalities" },
  { value: "24/7", label: "Deployment support" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        crumb="Services"
        title={
          <>
            Complete Workforce Solutions for <span className="text-gradient-gold">Every Sector</span>
          </>
        }
        text="From 5-star hotels to oil & gas sites — eight specialised service lines backed by a 5,000+ strong, multi-national workforce ready to deploy across Qatar."
      >
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 backdrop-blur">
          {heroStats.map((s) => (
            <div key={s.label} className="bg-navy-950/60 p-5 sm:p-6">
              <dt className="text-xs font-medium uppercase tracking-wider text-white/50">{s.label}</dt>
              <dd className="mt-1 text-3xl font-extrabold text-gradient-gold">{s.value}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      {/* Sticky sector navigation */}
      <nav
        aria-label="Service sections"
        className="sticky top-16 z-30 border-b border-line bg-white/90 backdrop-blur-xl"
      >
        <div className="container-x">
          <ul className="no-scrollbar -mx-4 flex gap-1 overflow-x-auto px-4 py-3 sm:mx-0 sm:px-0 xl:justify-between">
            <li>
              <Link
                href="#directory"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-navy-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
              >
                <Search className="h-4 w-4" aria-hidden="true" /> Job Directory
              </Link>
            </li>
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`#${s.slug}`}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-50 hover:text-gold-700 xl:px-3.5"
                >
                  <s.icon className="h-4 w-4 text-gold-600" aria-hidden="true" />
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section id="directory" className="scroll-mt-32 bg-surface py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Job Directory"
            title={
              <>
                Find the Exact Position <span className="text-gold-600">You Need</span>
              </>
            }
            text="Search by role or filter by sector, then request staff in one click. Don't see a role? We source beyond this list."
          />
          <JobDirectory />
        </div>
      </section>

      {services.map((s, i) => (
        <ServiceDetail key={s.slug} service={s} index={i} total={services.length} />
      ))}

      <div className="bg-white pt-4">
        <CtaBand
          title="Can't Find the Role You Need?"
          text="Our recruitment network spans 8+ countries. Share your requirement and we'll source, trade-test and deploy the right people."
        />
      </div>
    </>
  );
}
