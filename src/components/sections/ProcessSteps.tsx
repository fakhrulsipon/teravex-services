import { ClipboardList, PlaneTakeoff, UserCheck, Zap } from "lucide-react";
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
          text="A streamlined, fully compliant process that gets the right people on your site — fast."
        />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <span
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px border-t-2 border-dashed border-gold-300 lg:block"
          />
          {processSteps.map((step, i) => {
            const Icon = icons[i];
            return (
              <li
                key={step.title}
                data-reveal
                style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
                className="relative text-center"
              >
                <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-full bg-white shadow-card ring-1 ring-line">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-navy-900 text-gold-300">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-gold-gradient text-xs font-extrabold text-navy-950 shadow-gold">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed">{step.text}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
