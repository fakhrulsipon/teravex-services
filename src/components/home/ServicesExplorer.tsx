"use client";

import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { buttonClass } from "@/components/ui/Button";
import Photo from "@/components/ui/Photo";
import { services, type Service } from "@/data/services";

/** Service cards — clicking a card opens a modal listing every role in that sector. */
export default function ServicesExplorer() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<Service | null>(null);

  const open = (s: Service) => {
    setActive(s);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {services.map((s, i) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => open(s)}
            data-reveal
            style={{ "--reveal-delay": `${(i % 4) * 80}ms` } as React.CSSProperties}
            aria-haspopup="dialog"
            className="group relative isolate flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-3xl bg-navy-950 text-left shadow-card ring-1 ring-black/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-card-hover sm:aspect-[4/5]"
          >
            <Photo
              name={s.slug}
              alt={s.photoAlt}
              style={{ objectPosition: s.photoFocus }}
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="absolute inset-0 -z-10 h-full w-full transition-transform duration-[1.2s] ease-out group-hover:scale-110"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/45 to-navy-950/5 transition-colors duration-500 group-hover:via-navy-950/60"
            />
            <span
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold-gradient transition-transform duration-500 group-hover:scale-x-100"
            />

            <span className="absolute inset-x-3 top-3 flex items-start justify-between sm:inset-x-5 sm:top-5">
              <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/20 bg-navy-950/40 text-gold-300 backdrop-blur-md transition-all duration-500 group-hover:rotate-[-6deg] group-hover:border-transparent group-hover:bg-gold-gradient group-hover:text-navy-950 sm:h-12 sm:w-12">
                <s.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-xs font-bold text-white/60 sm:text-sm">{String(i + 1).padStart(2, "0")}</span>
            </span>

            <span className="flex items-end justify-between gap-2 p-4 sm:p-6">
              <span className="block text-base font-extrabold leading-snug text-white sm:text-xl">{s.label}</span>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors group-hover:bg-gold-400 group-hover:text-navy-950 sm:h-10 sm:w-10">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="modal"
        aria-labelledby="service-modal-title"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onClose={() => setActive(null)}
      >
        {active ? (
          <div className="flex max-h-[inherit] flex-col">
            <div className="relative isolate overflow-hidden bg-navy-950 px-6 pb-7 pt-6 text-white sm:px-8 sm:pt-8">
              <Photo name={active.slug} alt="" sizes="(min-width: 640px) 42rem, 100vw" style={{ objectPosition: active.photoFocus }} className="absolute inset-0 -z-10 h-full w-full" />
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/75 to-navy-950/30" />
              <div className="relative flex items-start justify-between gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gold-gradient text-navy-950">
                  <active.icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  autoFocus
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-gold-300 hover:text-white"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <h3 id="service-modal-title" className="relative mt-16 sm:mt-24 text-2xl font-extrabold text-white sm:text-3xl">
                {active.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-white/70 sm:text-base">{active.description}</p>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-7 sm:px-8">
              <div className="grid gap-6 sm:grid-cols-2">
                {active.roleGroups.map((g) => (
                  <div key={g.title}>
                    <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-gold-700">{g.title}</h4>
                    <ul className="mt-3 space-y-2">
                      {g.roles.map((r) => (
                        <li key={r} className="flex items-center gap-2.5 text-sm font-medium text-navy-900">
                          <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-50 text-gold-600 ring-1 ring-gold-200">
                            <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                          </span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-line bg-surface px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <Link
                href={`/services#${active.slug}`}
                onClick={close}
                className="text-center text-sm font-semibold text-navy-900 underline-offset-4 hover:text-gold-700 hover:underline"
              >
                Full service details
              </Link>
              <Link
                href={`/request-manpower?sector=${active.slug}`}
                onClick={close}
                className={buttonClass("gold", "md")}
              >
                Request {active.label} Staff <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
