import { Handshake } from "lucide-react";
import Photo from "@/components/ui/Photo";
import SectionHeading from "@/components/ui/SectionHeading";
import { clients } from "@/data/company";

export default function Clients() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-24 lg:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Photo name="boardroom" alt="" sizes="100vw" className="absolute inset-0 h-full w-full opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/50 to-navy-950/90" />
        <div className="absolute inset-0 bg-pattern-star opacity-30" />
      </div>

      <div className="container-x">
        <SectionHeading
          dark
          eyebrow="Clients & Partners"
          title={
            <>
              Strategic Collaborations &amp; <span className="text-gradient-gold">Trusted Relationships</span>
            </>
          }
        />

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {clients.map((c, i) => (
            <li
              key={c.name}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              className="group flex flex-col items-center justify-start rounded-3xl border border-white/10 bg-white/[0.06] px-4 py-8 text-center backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/50 hover:bg-white/[0.1] sm:py-10"
            >
              {/* Monogram placeholder — swap for the official logo file when available */}
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gold-gradient text-lg font-black tracking-tight text-navy-950 shadow-gold sm:h-20 sm:w-20 sm:text-xl">
                {c.mark}
              </span>
              <p className="mt-5 text-base font-extrabold text-white sm:text-lg">{c.name}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/55">{c.full}</p>
            </li>
          ))}
        </ul>

        <p
          data-reveal
          className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-2 text-center text-sm text-white/70"
        >
          <Handshake className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
          Long-term partnerships built on reliability, compliance and rapid response.
        </p>
      </div>
    </section>
  );
}
