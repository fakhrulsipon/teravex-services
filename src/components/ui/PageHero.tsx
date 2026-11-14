import { ChevronRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  text: ReactNode;
  crumb: string;
  children?: ReactNode;
};

/** Dark hero used at the top of every inner page. */
export default function PageHero({ eyebrow, title, text, crumb, children }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pb-20 pt-36 sm:pb-24 lg:pt-44">
      {/* Backdrop */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgb(243_167_46/0.22),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgb(141_27_61/0.28),transparent_55%)]" />
        <div className="absolute inset-0 bg-pattern-star mask-fade-b opacity-80" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
      </div>

      <div className="container-x">
        <nav aria-label="Breadcrumb" className="animate-fade-up">
          <ol className="flex items-center gap-1.5 text-sm text-white/55">
            <li>
              <Link href="/" className="transition-colors hover:text-gold-300">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li className="font-medium text-gold-300" aria-current="page">
              {crumb}
            </li>
          </ol>
        </nav>

        <div className="mt-6 grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="eyebrow eyebrow-light animate-fade-up [animation-delay:80ms]">{eyebrow}</span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] text-white animate-fade-up [animation-delay:140ms] sm:text-5xl lg:text-[3.5rem]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 animate-fade-up [animation-delay:220ms] sm:text-lg">
              {text}
            </p>
          </div>
          {children ? <div className="animate-fade-up [animation-delay:300ms]">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
