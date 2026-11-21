import { ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
import { nationalities } from "@/data/company";
import { services } from "@/data/services";

const flags = nationalities.filter((n) => n.flag);

function HeroOrbit() {
  const R = 42; // orbit radius, % of the box
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[21rem] animate-fade-in [animation-delay:150ms] sm:max-w-[28rem] lg:max-w-[33rem]"
    >
      {/* glow + rings */}
      <div className="absolute inset-[14%] rounded-full bg-gold-500/25 blur-3xl" />
      <div className="absolute inset-0 rounded-full border border-white/[0.05]" />
      <div className="absolute inset-[8%] rounded-full border border-white/10" />
      <div className="absolute inset-[21%] animate-orbit-slow rounded-full border border-dashed border-gold-400/35" />

      {/* core */}
      <div className="absolute inset-[29%] grid place-items-center rounded-full border border-gold-400/30 bg-[radial-gradient(circle_at_30%_25%,#22345a,#070c19_72%)] text-center shadow-[0_0_90px_-12px_rgb(243_167_46/0.55)]">
        <div className="px-2">
          <p className="text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-white/50 sm:text-[0.68rem]">
            Active Workforce
          </p>
          <p className="mt-1 text-[1.9rem] font-extrabold leading-none text-gradient-gold sm:text-5xl">5,000+</p>
          <p className="mt-2 text-[0.6rem] font-medium text-white/65 sm:text-xs">Ready to deploy in Qatar</p>
        </div>
      </div>

      {/* orbiting service icons */}
      <div className="absolute inset-0 animate-orbit">
        {services.map((s, i) => {
          const a = (i / services.length) * Math.PI * 2;
          const left = (50 + R * Math.sin(a)).toFixed(3);
          const top = (50 - R * Math.cos(a)).toFixed(3);
          return (
            <div
              key={s.slug}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${left}%`, top: `${top}%` }}
            >
              <div className="animate-orbit-reverse">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-navy-800 text-gold-300 shadow-[0_10px_30px_-10px_rgb(0_0_0/0.8)] sm:h-14 sm:w-14 sm:rounded-2xl">
                  <s.icon className="h-[18px] w-[18px] sm:h-6 sm:w-6" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* floating chips */}
      <div className="absolute -left-4 top-[4%] z-10 hidden animate-float items-center gap-2.5 rounded-2xl border border-white/10 bg-navy-900/80 p-2.5 pr-4 shadow-float backdrop-blur-md sm:flex">
        <span className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-400/15 text-emerald-300 sm:h-9 sm:w-9">
          <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" />
        </span>
        <span className="leading-tight">
          <span className="block text-xs font-bold text-white sm:text-sm">100% Compliant</span>
          <span className="block text-[0.62rem] text-white/55 sm:text-[0.7rem]">Qatar Labour Law</span>
        </span>
      </div>

      <div className="absolute -right-1 top-[70%] z-10 hidden animate-float items-center gap-2.5 rounded-2xl border border-white/10 bg-navy-900/80 p-2.5 pr-4 shadow-float backdrop-blur-md [animation-delay:-2s] sm:-right-6 sm:flex">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold-400/15 text-gold-300">
          <Clock className="h-5 w-5" />
        </span>
        <span className="leading-tight">
          <span className="block text-sm font-bold text-white">24/7 Support</span>
          <span className="block text-[0.7rem] text-white/55">Rapid deployment</span>
        </span>
      </div>

      <div className="absolute bottom-[1%] left-[-2%] z-10 hidden animate-float items-center gap-3 rounded-2xl border border-white/10 bg-navy-900/80 p-2.5 pr-4 shadow-float backdrop-blur-md [animation-delay:-4s] sm:flex">
        <span className="flex">
          {flags.slice(0, 4).map((f) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={f.name}
              src={f.flag!}
              alt=""
              width={28}
              height={28}
              className="-ml-2 h-6 w-6 rounded-full object-cover ring-2 ring-navy-900 first:ml-0 sm:h-7 sm:w-7"
            />
          ))}
        </span>
        <span className="leading-tight">
          <span className="block text-xs font-bold text-white sm:text-sm">8+ Nationalities</span>
          <span className="block text-[0.62rem] text-white/55 sm:text-[0.7rem]">Global talent pool</span>
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pb-36 pt-32 sm:pt-36 lg:pb-44 lg:pt-48">
      {/* backdrop */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Photo
          name="doha-night"
          alt=""
          sizes="100vw"
          priority
          style={{ objectPosition: "60% 55%" }}
          className="absolute inset-0 h-full w-full animate-ken-burns opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/35" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-navy-950 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_75%_30%,rgb(243_167_46/0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_0%_100%,rgb(141_27_61/0.35),transparent_70%)]" />
        <div className="absolute inset-0 bg-grid-lines opacity-60 mask-radial" />
        <div className="absolute inset-0 bg-pattern-star opacity-50 mask-fade-b" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-navy-950" />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.12fr_1fr] lg:gap-6">
        <div className="text-center lg:text-left">
          <div className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 pl-1.5 pr-4 text-[0.72rem] font-medium text-white/80 backdrop-blur sm:text-xs">
            <span className="rounded-full bg-gold-gradient px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-navy-950">
              Doha · Qatar
            </span>
            Manpower · Contracting · Recruitment
          </div>

          <h1 className="mt-7 animate-fade-up text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-white [animation-delay:60ms] sm:text-5xl lg:text-[3.35rem] xl:text-[3.7rem]">
            Empowering Qatar&apos;s Growth with <span className="text-gradient-gold">Skilled Manpower</span> &amp;
            Contracting Excellence
          </h1>

          <p className="mx-auto mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-white/70 [animation-delay:140ms] sm:text-lg lg:mx-0">
            Delivering 5,000+ certified professionals across Hospitality, Construction, Oil &amp; Gas, Security, and
            Facility Management in Doha and beyond.
          </p>

          <div className="mt-9 flex animate-fade-up flex-col justify-center gap-3 [animation-delay:220ms] sm:flex-row lg:justify-start">
            <LinkButton href="/request-manpower" size="lg">
              Request Manpower <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </LinkButton>
            <LinkButton href="/services" variant="outline-light" size="lg">
              Explore Services
            </LinkButton>
          </div>

          <div className="mt-10 flex animate-fade-up flex-wrap items-center justify-center gap-x-6 gap-y-4 [animation-delay:300ms] lg:justify-start">
            <div className="flex items-center gap-3">
              <span className="flex">
                {flags.map((f) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={f.name}
                    src={f.flag!}
                    alt={`${f.name} flag`}
                    width={32}
                    height={32}
                    className="-ml-2.5 h-8 w-8 rounded-full object-cover ring-2 ring-navy-950 first:ml-0"
                  />
                ))}
              </span>
              <span className="text-left text-sm leading-tight text-white/60">
                <span className="block font-semibold text-white">8+ nationalities</span>
                ready for deployment
              </span>
            </div>
            <span className="hidden h-10 w-px bg-white/15 sm:block" aria-hidden="true" />
            <div className="flex items-center gap-3 text-left text-sm leading-tight text-white/60">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-semibold text-white">100% compliant</span>
                with Qatar Labour Law
              </span>
            </div>
          </div>
        </div>

        <HeroOrbit />
      </div>
    </section>
  );
}
