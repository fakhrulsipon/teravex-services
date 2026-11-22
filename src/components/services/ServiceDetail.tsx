import { ArrowRight, Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { LinkButton } from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
import type { Service } from "@/data/services";
import { whatsappLink } from "@/lib/site";

export default function ServiceDetail({ service: s, index, total }: { service: Service; index: number; total: number }) {
  const num = String(index + 1).padStart(2, "0");
  const flip = index % 2 === 1;

  return (
    <section id={s.slug} className={`scroll-mt-36 py-20 lg:py-28 ${flip ? "bg-surface" : "bg-white"}`}>
      <div className="container-x grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        {/* Photo card */}
        <div data-reveal className={`lg:sticky lg:top-36 ${flip ? "lg:order-2" : ""}`}>
          <figure className="group relative isolate aspect-[4/3] overflow-hidden rounded-[2rem] bg-navy-950 shadow-card-hover sm:aspect-[16/11] lg:aspect-[4/5]">
            <Photo
              name={s.slug}
              alt={s.photoAlt}
              style={{ objectPosition: s.photoFocus }}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="absolute inset-0 -z-10 h-full w-full transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/30 to-navy-950/10" />
            <div aria-hidden="true" className="absolute inset-0 -z-10 rounded-[2rem] ring-1 ring-inset ring-white/10" />

            <div className="absolute inset-x-5 top-5 flex items-start justify-between sm:inset-x-7 sm:top-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold-gradient text-navy-950 shadow-gold sm:h-14 sm:w-14">
                <s.icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
              </span>
              <span className="text-5xl font-black leading-none text-stroke sm:text-6xl" aria-hidden="true">
                {num}
              </span>
            </div>

            <figcaption className="absolute inset-x-5 bottom-5 sm:inset-x-7 sm:bottom-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
                Service {num} / {String(total).padStart(2, "0")}
              </p>
              <p className="mt-1 text-2xl font-extrabold leading-tight text-white sm:text-3xl">{s.label}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md"
                  >
                    <Check className="h-3.5 w-3.5 text-gold-300" strokeWidth={3} aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </figcaption>
          </figure>
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
            {s.href ? (
              <LinkButton href={s.href}>
                Explore {s.label} <ArrowRight className="h-4 w-4" />
              </LinkButton>
            ) : (
              <LinkButton href={`/request-manpower?sector=${s.slug}`}>
                Request {s.label} Staff <ArrowRight className="h-4 w-4" />
              </LinkButton>
            )}
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
