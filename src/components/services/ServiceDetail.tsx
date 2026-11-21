import { ArrowRight, Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { LinkButton } from "@/components/ui/Button";
import type { Service } from "@/data/services";
import { whatsappLink } from "@/lib/site";

export default function ServiceDetail({ service: s, index, total }: { service: Service; index: number; total: number }) {
  const num = String(index + 1).padStart(2, "0");
  const flip = index % 2 === 1;

  return (
    <section id={s.slug} className={`scroll-mt-36 py-20 lg:py-28 ${flip ? "bg-surface" : "bg-white"}`}>
      <div className="container-x grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Visual card */}
        <div data-reveal className={`lg:sticky lg:top-36 ${flip ? "lg:order-2" : ""}`}>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy-950 p-7 text-white shadow-card-hover sm:p-10">
            <div aria-hidden="true" className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-pattern-star opacity-80" />
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold-500/25 blur-3xl" />
              <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-maroon-600/40 blur-3xl" />
            </div>
            <div className="flex items-start justify-between">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gold-gradient text-navy-950 shadow-gold sm:h-20 sm:w-20">
                <s.icon className="h-8 w-8 sm:h-10 sm:w-10" aria-hidden="true" />
              </span>
              <span className="text-6xl font-black leading-none text-stroke sm:text-7xl" aria-hidden="true">
                {num}
              </span>
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              Service {num} / {String(total).padStart(2, "0")}
            </p>
            <p className="mt-2 text-2xl font-extrabold leading-tight sm:text-3xl">{s.label}</p>
            <ul className="mt-6 space-y-3">
              {s.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm text-white/80">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-gold-400/40 bg-gold-400/10 text-gold-300">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content */}
        <div data-reveal style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
          <span className="eyebrow">Service {num}</span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">{s.title}</h2>
          <p className="mt-5 text-base leading-relaxed sm:text-lg">{s.description}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {s.roleGroups.map((g) => (
              <div
                key={g.title}
                className={`rounded-2xl border border-line bg-white p-5 transition-colors hover:border-gold-300 ${
                  s.roleGroups.length % 2 === 1 && g === s.roleGroups[s.roleGroups.length - 1] ? "sm:col-span-2" : ""
                }`}
              >
                <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-gold-700">{g.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.roles.map((r) => (
                    <li
                      key={r}
                      className="rounded-full border border-line bg-surface px-3 py-1.5 text-[0.82rem] font-semibold text-navy-900"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href={`/request-manpower?sector=${s.slug}`}>
              Request {s.label} Staff <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <LinkButton
              href={whatsappLink(`Hello Teravex, I'm interested in your ${s.title} service.`)}
              variant="outline-dark"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" /> Ask on WhatsApp
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
