"use client";

import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { buttonClass } from "@/components/ui/Button";
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
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => open(s)}
            data-reveal
            style={{ "--reveal-delay": `${(i % 4) * 80}ms` } as React.CSSProperties}
            aria-haspopup="dialog"
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white p-6 text-left shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-300 hover:shadow-card-hover sm:p-7"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold-gradient transition-transform duration-500 group-hover:scale-x-100"
            />
            <span
              aria-hidden="true"
              className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            />
            <span className="relative flex items-start justify-between">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 text-gold-300 transition-all duration-500 group-hover:rotate-[-6deg] group-hover:bg-gold-gradient group-hover:text-navy-950">
                <s.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="text-sm font-bold text-navy-900/15 transition-colors group-hover:text-gold-500">
                <span className="hidden sm:inline">{String(i + 1).padStart(2, "0")}</span>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-surface text-navy-900 sm:hidden">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </span>
            </span>
            <span className="relative mt-4 block text-lg font-bold leading-snug text-navy-900 sm:mt-6">{s.title}</span>
            <span className="relative mt-2 block flex-1 text-sm leading-relaxed text-body">{s.short}</span>
            <span className="relative mt-6 hidden items-center justify-between border-t border-line pt-4 text-sm sm:flex">
              <span className="font-semibold text-navy-900 transition-colors group-hover:text-gold-700">
                View roles &amp; scope
              </span>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-surface transition-colors group-hover:bg-gold-400 group-hover:text-navy-950">
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
            <div className="relative overflow-hidden bg-navy-950 px-6 pb-7 pt-6 text-white sm:px-8">
              <div aria-hidden="true" className="absolute inset-0 bg-pattern-star opacity-70" />
              <div aria-hidden="true" className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gold-500/25 blur-3xl" />
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
              <h3 id="service-modal-title" className="relative mt-5 text-2xl font-extrabold text-white sm:text-3xl">
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
