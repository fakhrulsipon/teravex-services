import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
import { services } from "@/data/services";

/** Background photo widths in /public/banners/home-<w>.webp (Doha skyline at night). */
const BG_WIDTHS = [960, 1600, 2400, 3200];

/** Turns a full disc into a thin ring (used for the rotating gold light ring). */
const ringMask = {
  WebkitMask:
    "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1.5px))",
  mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1.5px))",
} as const;

function HeroOrbit() {
  const R = 42; // orbit radius, % of the box
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[21rem] animate-fade-in [animation-delay:150ms] sm:max-w-[28rem] lg:max-w-[33rem]"
    >
      {/* frosted glass disc — lifts the orbit off the busy skyline */}
      <div className="absolute inset-[4%] rounded-full border border-white/10 bg-navy-950/20 shadow-[0_40px_120px_-40px_rgb(0_0_0/0.8)]" />
      <div className="absolute inset-[16%] rounded-full bg-gold-500/20 blur-3xl" />

      {/* rings */}
      <div
        className="absolute inset-[4%] animate-orbit-slow rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgb(250_204_110/0.95)_50deg,transparent_120deg,transparent_180deg,rgb(250_204_110/0.6)_230deg,transparent_300deg)]"
        style={ringMask}
      />
      <div className="absolute inset-[21%] animate-orbit-slow rounded-full border border-dashed border-gold-400/40 [animation-direction:reverse]" />

      {/* core */}
      <div className="absolute inset-[28%] rounded-full bg-gold-gradient p-[2px] shadow-[0_0_100px_-10px_rgb(243_167_46/0.65)]">
        <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-full bg-[radial-gradient(circle_at_30%_22%,#2a3f6b,#0b1428_58%,#070c19)] text-center">
          <div className="relative px-2">
            <p className="text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-white/60 sm:text-[0.68rem]">
              Active Workforce
            </p>
            <p className="mt-1 text-[1.9rem] font-extrabold leading-none text-gradient-gold sm:text-5xl">
              5,000+
            </p>
          </div>
        </div>
      </div>

      {/* orbiting service photos */}
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
                <div className="rounded-full bg-gold-gradient p-[2px] shadow-[0_12px_30px_-6px_rgb(0_0_0/0.9),0_0_24px_-6px_rgb(243_167_46/0.7)]">
                  <div className="relative isolate h-12 w-12 overflow-hidden rounded-full border-2 border-navy-950 bg-navy-800 sm:h-18 sm:w-18">
                    <Photo
                      name={s.slug}
                      alt=""
                      sizes="80px"
                      style={{ objectPosition: s.photoFocus }}
                      className="absolute inset-0 -z-10 h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-48">
      {/* backdrop — crisp Doha skyline at night, shaded only where the copy sits */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export: no Next image optimiser */}
        <img
          src="/banners/home-1600.webp"
          srcSet={BG_WIDTHS.map((w) => `/banners/home-${w}.webp ${w}w`).join(
            ", ",
          )}
          sizes="100vw"
          alt=""
          width={3200}
          height={2400}
          fetchPriority="high"
          style={{ objectPosition: "50% 38%" }}
          className="absolute inset-0 h-full w-full animate-ken-burns object-cover brightness-110 saturate-[1.15]"
        />
        <div className="absolute inset-0 bg-navy-950/40 lg:bg-transparent" />
        <div className="absolute inset-0 hidden bg-linear-to-r from-navy-950/80 via-navy-950/25 to-transparent lg:block" />
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-navy-950/75 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-navy-950" />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.12fr_1fr] lg:gap-6">
        <div className="text-center lg:text-left">
          <span
            aria-hidden="true"
            className="mx-auto mb-7 block h-1 w-14 animate-fade-up rounded-full bg-gold-gradient shadow-gold lg:mx-0"
          />
          <h1 className="animate-fade-up text-[1.95rem] font-semibold leading-[1.15] tracking-tight text-white drop-shadow-[0_4px_24px_rgb(0_0_0/0.55)] [animation-delay:60ms] sm:text-[2.6rem] lg:text-[2.8rem] xl:text-[3.1rem]">
            Empowering Qatar&apos;s Growth with{" "}
            <span className="text-gradient-gold">
              Contracting &amp; Hospitality
            </span>{" "}
            Excellence
          </h1>

          <p className="mx-auto mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-white/80 drop-shadow-[0_2px_12px_rgb(0_0_0/0.6)] [animation-delay:140ms] sm:text-lg lg:mx-0">
            Skilled manpower supply across Qatar — ready when you are.
          </p>

          <div className="mt-9 flex animate-fade-up flex-col justify-center gap-3 [animation-delay:220ms] sm:flex-row lg:justify-start">
            <LinkButton href="/request-manpower" size="lg">
              Request Manpower{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </LinkButton>
            <LinkButton href="/services" variant="outline-light" size="lg">
              Explore Services
            </LinkButton>
          </div>
        </div>

        <HeroOrbit />
      </div>

      {/* gold hairline closing the banner */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-gold-400/70 to-transparent"
      />
    </section>
  );
}
