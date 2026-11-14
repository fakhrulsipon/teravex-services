import Flag from "@/components/ui/Flag";
import SectionHeading from "@/components/ui/SectionHeading";
import { nationalities } from "@/data/company";

export default function Nationalities() {
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
          text="We recruit and deploy hardworking, culturally adaptable professionals from trusted global talent hubs."
        />

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {nationalities.map((n, i) => (
            <li
              key={n.name}
              data-reveal
              style={{ "--reveal-delay": `${(i % 4) * 70}ms` } as React.CSSProperties}
              className="group relative overflow-hidden rounded-3xl border border-line bg-white p-5 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-gold-300 hover:shadow-card-hover sm:p-6"
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
    </section>
  );
}
