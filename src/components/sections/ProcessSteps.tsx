import { ClipboardList, PlaneTakeoff, UserCheck, Zap } from "lucide-react";
import Photo from "@/components/ui/Photo";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/company";

const icons = [ClipboardList, UserCheck, PlaneTakeoff, Zap];

export default function ProcessSteps() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="How It Works"
          title={
            <>
              From Requirement to Deployment in <span className="text-gold-600">4 Simple Steps</span>
            </>
          }
        />

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => {
            const Icon = icons[i];
            return (
              <li
                key={step.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
                className="group relative overflow-hidden rounded-3xl border border-line bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-300 hover:shadow-card-hover"
              >
                <div className="relative isolate aspect-[4/3] overflow-hidden bg-navy-950">
                  <Photo
                    name={step.photo}
                    alt={step.photoAlt}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="absolute inset-0 -z-10 h-full w-full transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                  <span
                    aria-hidden="true"
                    className="absolute bottom-3 right-4 text-5xl font-black leading-none text-white/25"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative px-5 pb-6 pt-9">
                  <span className="absolute -top-6 left-5 grid h-12 w-12 place-items-center rounded-2xl bg-gold-gradient text-navy-950 shadow-gold ring-4 ring-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">Step {i + 1}</p>
                  <h3 className="mt-1 text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{step.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
