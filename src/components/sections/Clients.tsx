import { Handshake } from "lucide-react";
import Photo from "@/components/ui/Photo";
import SectionHeading from "@/components/ui/SectionHeading";
import { clients } from "@/data/company";

/** Clients & partners — boardroom photo beside the client cards (no background image). */
export default function Clients() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Clients & Partners"
          title={
            <>
              Trusted by <span className="text-gold-600">Leading Names</span>
            </>
          }
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <figure
            data-reveal
            className="relative isolate min-h-[18rem] overflow-hidden rounded-[2rem] bg-navy-950 shadow-card-hover sm:min-h-[22rem]"
          >
            <Photo
              name="boardroom"
              alt="Business partners meeting around a boardroom table"
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="absolute inset-0 -z-10 h-full w-full"
            />
            <figcaption className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-navy-950/65 p-3 pr-4 text-white shadow-float backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold-gradient text-navy-950">
                <Handshake className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-bold">Long-Term Partnerships</span>
                <span className="block text-xs text-white/65">Reliable · Compliant · Rapid</span>
              </span>
            </figcaption>
          </figure>

          <ul className="grid grid-cols-2 gap-3 sm:gap-4">
            {clients.map((c, i) => (
              <li
                key={c.name}
                data-reveal
                style={{ "--reveal-delay": `${(i % 2) * 80}ms` } as React.CSSProperties}
                className="flex flex-col items-center justify-center rounded-3xl border border-line bg-white px-4 py-7 text-center shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-gold-300 hover:shadow-card-hover"
              >
                {/* Monogram placeholder — swap for the official logo file when available */}
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-gradient text-base font-black tracking-tight text-navy-950 shadow-gold sm:h-16 sm:w-16 sm:text-lg">
                  {c.mark}
                </span>
                <p className="mt-4 text-base font-extrabold text-navy-900 sm:text-lg">{c.name}</p>
                <p className="mt-1 text-[0.7rem] font-medium uppercase tracking-wider text-body">{c.full}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
