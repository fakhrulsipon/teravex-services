import { ArrowRight, Check, MapPin, Phone } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
import { site } from "@/lib/site";

const points = ["Manpower Supply", "Overseas Recruitment", "Qatar Visa Processing", "Facility Services"];

export default function AboutIntro() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Visual — photo collage */}
        <div data-reveal className="relative order-2 pb-10 lg:order-1 lg:pb-0">
          <div className="relative isolate ml-auto aspect-[4/5] w-[88%] overflow-hidden rounded-[2rem] bg-navy-950 shadow-card-hover sm:w-[80%]">
            <Photo
              name="workers"
              alt="Construction workers in hard hats on a building site"
              sizes="(min-width: 1024px) 38vw, 80vw"
              className="absolute inset-0 -z-10 h-full w-full"
            />          </div>

          <div className="absolute bottom-0 left-0 isolate aspect-square w-[46%] overflow-hidden rounded-[1.5rem] border-[6px] border-white bg-navy-950 shadow-float sm:w-[42%]">
            <Photo
              name="housekeeping"
              alt="Hotel housekeeper arranging pillows in a luxury room"
              sizes="(min-width: 1024px) 20vw, 45vw"
              className="absolute inset-0 -z-10 h-full w-full"
            />
          </div>

          <div className="absolute bottom-6 right-2 hidden items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-card-hover sm:flex">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy-900 text-gold-300">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-body">Headquarters</span>
              <span className="block text-sm font-bold text-navy-900">Doha, Qatar</span>
            </span>
          </div>
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <div data-reveal>
            <span className="eyebrow">About Teravex</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] sm:text-4xl lg:text-[2.75rem]">
              Your Reliable <span className="text-gold-600">Workforce Partner</span> in Qatar
            </h2>
            <p className="mt-5 text-base leading-relaxed sm:text-lg">
              Skilled, semi-skilled &amp; general workers — ready when your project is.
            </p>
          </div>

          <ul data-reveal className="mt-8 grid grid-cols-2 gap-3" style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm font-semibold text-navy-900 sm:text-base">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-gradient text-navy-950">
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
