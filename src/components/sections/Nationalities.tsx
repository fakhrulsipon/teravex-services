import Flag from "@/components/ui/Flag";
import Photo from "@/components/ui/Photo";
import SectionHeading from "@/components/ui/SectionHeading";
import { nationalities } from "@/data/company";

/** `compact` drops the intro paragraph (used on the About page). */
export default function Nationalities({ compact = false }: { compact?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-surface py-24 lg:py-32">
      <div aria-hidden="true" className="absolute inset-0 bg-pattern-star-dark mask-fade-b" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Global Talent Pool"
          title={
            <>
              Diverse, Multi-National Workforce <span className="text-gold-600">Ready for Deployment</span>
            </>
          }
          text={
            compact
              ? undefined
              : "We recruit and deploy hardworking, culturally adaptable professionals from trusted global talent hubs."
          }
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        <figure
          data-reveal
          className="relative isolate min-h-[18rem] overflow-hidden rounded-[2rem] bg-navy-950 shadow-card-hover sm:min-h-[24rem]"
        >
          <Photo
            name="multinational"
            alt="Smiling engineers from different backgrounds in hard hats"
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="absolute inset-0 -z-10 h-full w-full"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
          <figcaption className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 sm:inset-x-7 sm:bottom-7">
            <span>
              <span className="block text-4xl font-extrabold text-gradient-gold sm:text-5xl">8+</span>
              <span className="mt-1 block text-sm font-semibold text-white">Source nationalities</span>
            </span>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              One team, many cultures
            </span>
          </figcaption>
        </figure>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4">
          {nationalities.map((n, i) => (
            <li
              key={n.name}
              data-reveal
              style={{ "--reveal-delay": `${(i % 4) * 70}ms` } as React.CSSProperties}
              className="group relative overflow-hidden rounded-3xl border border-line bg-white p-4 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-gold-300 hover:shadow-card-hover sm:p-6"
            >
              <span
                aria-hidden="true"
                className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-gold-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Flag src={n.flag} name={n.name} className="h-10 w-14 shrink-0 sm:h-11 sm:w-[3.75rem]" />
                <div>
                  <p className="font-bold leading-snug text-navy-900">{n.name}</p>
                  <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-body/80">{n.note}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
}
