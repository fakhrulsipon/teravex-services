import { Handshake } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { clients } from "@/data/company";

export default function Clients() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Clients & Partners"
          title={
            <>
              Strategic Collaborations &amp; <span className="text-gold-600">Trusted Relationships</span>
            </>
          }
          text="Trusted by industry leaders across construction, energy and facility management in Qatar."
        />

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {clients.map((c, i) => (
            <li
              key={c.name}
              data-reveal
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
              className="group flex flex-col items-center justify-start rounded-3xl border border-line bg-white px-4 py-8 text-center transition-all duration-500 hover:-translate-y-1 hover:border-gold-300 hover:shadow-card-hover sm:py-10"
            >
              {/* Monogram placeholder — swap for the official logo file when available */}
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-navy-900 text-lg font-black tracking-tight text-white transition-all duration-500 group-hover:bg-gold-gradient group-hover:text-navy-950 sm:h-20 sm:w-20 sm:text-xl">
                {c.mark}
              </span>
              <p className="mt-5 text-base font-extrabold text-navy-900 sm:text-lg">{c.name}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-body/80">{c.full}</p>
            </li>
          ))}
        </ul>

        <p
          data-reveal
          className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-2 text-center text-sm text-body"
        >
          <Handshake className="h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
          Long-term partnerships built on reliability, compliance and rapid response.
        </p>
      </div>
    </section>
  );
}
