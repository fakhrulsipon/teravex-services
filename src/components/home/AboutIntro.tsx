import { ArrowRight, Check, HardHat, MapPin, Phone, Users, Wrench } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import { services } from "@/data/services";
import { site } from "@/lib/site";

const tiers = [
  { label: "Skilled", Icon: Wrench },
  { label: "Semi-Skilled", Icon: HardHat },
  { label: "General", Icon: Users },
];

const points = [
  "End-to-end staffing for every project size",
  "Overseas recruitment & Qatar visa processing",
  "Facility services: security, cleaning, landscaping",
  "Teams tailored to your exact operational demands",
];

export default function AboutIntro() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Visual */}
        <div data-reveal className="relative order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 p-6 text-white shadow-card-hover sm:p-9">
            <div aria-hidden="true" className="absolute inset-0 bg-pattern-star opacity-80" />
            <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-maroon-600/40 blur-3xl" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold-gradient text-navy-950">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/50">Headquarters</p>
                  <p className="font-bold">Doha, State of Qatar</p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
                <p className="text-sm text-white/60">Total workforce pool</p>
                <p className="mt-1 whitespace-nowrap text-[clamp(1.6rem,8vw,3rem)] font-extrabold tracking-tight text-gradient-gold">
                  5,000 – 6,000+
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
                  {tiers.map(({ label, Icon }) => (
                    <div
                      key={label}
                      className="rounded-xl border border-white/10 bg-navy-900/70 px-2 py-3 text-center sm:px-3 sm:py-4"
                    >
                      <Icon className="mx-auto h-5 w-5 text-gold-300" aria-hidden="true" />
                      <p className="mt-2 text-[0.7rem] font-semibold text-white/85 sm:text-xs">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/50">Sectors we serve</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {services.map((s) => (
                    <span
                      key={s.slug}
                      title={s.title}
                      className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-gold-300"
                    >
                      <s.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                      <span className="sr-only">{s.title}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-7 right-4 animate-float rounded-2xl bg-gold-gradient px-5 py-4 text-navy-950 shadow-gold sm:-right-6 sm:px-6">
            <p className="text-3xl font-extrabold leading-none">8</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-wider">Service sectors</p>
          </div>
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <div data-reveal>
            <span className="eyebrow">About Teravex</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] sm:text-4xl lg:text-[2.75rem]">
              Your Reliable Partner in Total Workforce &amp; Contracting Solutions
            </h2>
            <p className="mt-6 text-base leading-relaxed sm:text-lg">
              Based in Doha, Qatar, <strong className="font-semibold text-navy-900">{site.name}</strong> is a premier
              manpower supply, contracting, and overseas recruitment company. With a robust pool of 5,000 to 6,000
              skilled, semi-skilled, and general workers, we bridge the gap between ambitious projects and dedicated
              talent.
            </p>
            <p className="mt-4 text-base leading-relaxed">
              Whether you are launching a luxury hotel, scaling a restaurant chain, or managing massive construction and
              oil &amp; gas infrastructure, Teravex provides end-to-end staffing, visa processing, and facility services
              tailored to your exact operational demands.
            </p>
          </div>

          <ul data-reveal className="mt-8 grid gap-3 sm:grid-cols-2" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-sm font-medium text-navy-900">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-gradient text-navy-950">
                  <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <div
            data-reveal
            className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center"
            style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
          >
            <LinkButton href="/about" variant="navy" size="lg">
              Discover Our Story <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <a href={`tel:${site.phoneHref}`} className="group flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-line text-gold-600 transition-colors group-hover:border-gold-400 group-hover:bg-gold-50">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block text-xs text-body">Call us anytime</span>
                <span className="block font-bold text-navy-900">{site.phoneDisplay}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
