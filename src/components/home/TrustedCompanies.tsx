import { BadgeCheck } from "lucide-react";
import { trustedCompanies } from "@/data/company";

type Company = (typeof trustedCompanies)[number];

// Second row starts half-way through the list so the two rows never line up.
const mid = Math.ceil(trustedCompanies.length / 2);
const rows: Company[][] = [trustedCompanies, [...trustedCompanies.slice(mid), ...trustedCompanies.slice(0, mid)]];

function LogoCard({ c }: { c: Company }) {
  return (
    <div className="flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl border border-line bg-white px-4 py-3 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-gold-300 hover:shadow-card-hover sm:h-24 sm:w-48 sm:px-5 lg:h-28 lg:w-56 lg:px-6">
      {/* eslint-disable-next-line @next/next/no-img-element -- small static logos, static export has no image optimiser */}
      <img
        src={c.logo}
        alt={c.name}
        title={c.name}
        width={c.w}
        height={c.h}
        loading="lazy"
        decoding="async"
        className="h-auto max-h-full w-auto max-w-full object-contain"
      />
    </div>
  );
}

/** "Trusted by" logo wall — infinite two-way marquee; a static grid for reduced-motion users. */
export default function TrustedCompanies() {
  return (
    <section
      aria-labelledby="trusted-heading"
      className="relative overflow-hidden border-y border-line bg-surface py-14 sm:py-16 lg:py-20"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-pattern-star-dark mask-fade-b" />
      <div className="container-x relative">
        <div data-reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Trusted By</span>
          <h2 id="trusted-heading" className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
            Companies That <span className="text-gold-600">Trust Teravex</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-body sm:text-base">
            Proud to supply manpower and services to leading names in energy, hospitality, retail and security across
            Qatar.
          </p>
        </div>
      </div>

      {/* Animated marquee (default) */}
      <div data-reveal className="group relative mt-10 space-y-4 mask-fade-x motion-reduce:hidden sm:mt-12 sm:space-y-6">
        {rows.map((row, r) => (
          <div
            key={r}
            className="flex w-max animate-marquee py-2 group-hover:[animation-play-state:paused]"
            style={{ animationDuration: "70s", animationDirection: r ? "reverse" : undefined }}
          >
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={r === 1 || copy === 1 ? true : undefined}
                aria-label={r === 0 && copy === 0 ? "Our trusted clients" : undefined}
                className="flex shrink-0 items-center gap-4 pr-4 sm:gap-6 sm:pr-6"
              >
                {row.map((c) => (
                  <li key={c.name}>
                    <LogoCard c={c} />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        ))}
      </div>

      {/* Static grid for users who prefer reduced motion */}
      <ul
        aria-label="Our trusted clients"
        className="container-x relative mt-10 hidden grid-cols-2 justify-items-center gap-4 motion-reduce:grid sm:grid-cols-3 lg:grid-cols-5"
      >
        {trustedCompanies.map((c) => (
          <li key={c.name}>
            <LogoCard c={c} />
          </li>
        ))}
      </ul>

      <p
        data-reveal
        className="container-x relative mt-8 flex items-center justify-center gap-2 text-center text-xs font-medium text-body sm:text-sm"
      >
        <BadgeCheck className="h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
        {trustedCompanies.length}+ companies rely on our workforce every day
      </p>
    </section>
  );
}
