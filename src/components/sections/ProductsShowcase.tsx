import { ArrowRight, ExternalLink } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

const delay = (ms: number) =>
  ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

type Props = {
  id?: string;
  /** Section background, e.g. "bg-surface" or "bg-white". */
  className?: string;
  /** Show a button linking to the Web & App Development page (used on the home page). */
  moreLink?: boolean;
};

/** "Products We've Built" — screenshot cards of our live products; each card opens the real site in a new tab. */
export default function ProductsShowcase({
  id = "products",
  className = "bg-surface",
  moreLink = false,
}: Props) {
  return (
    <section id={id} className={`scroll-mt-28 py-20 lg:py-28 ${className}`}>
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Products"
          title={
            <>
              Products <span className="text-gold-600">We&apos;ve Built</span>
            </>
          }
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((p, i) => (
            <li key={p.slug} data-reveal style={delay((i % 2) * 100)}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} — ${p.tagline} (opens the live site in a new tab)`}
                className="group flex h-full flex-col rounded-[2rem] border border-line bg-white p-2.5 shadow-card transition-colors duration-300 hover:border-gold-300 sm:p-3"
              >
                {/* browser-window frame around the screenshot */}
                <span className="block overflow-hidden rounded-[1.6rem] border border-line bg-navy-950">
                  <span
                    aria-hidden="true"
                    className="flex items-center gap-1.5 bg-navy-950 px-4 py-2.5"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-3 truncate rounded-full bg-white/10 px-3 py-0.5 text-[0.7rem] text-white/60">
                      {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </span>
                  </span>
                  <span className="relative block aspect-[2/1] overflow-hidden bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element -- static export, responsive srcSet provided manually */}
                    <img
                      src={`/projects/${p.slug}-1200.webp`}
                      srcSet={`/projects/${p.slug}-640.webp 640w, /projects/${p.slug}-1200.webp 1200w`}
                      sizes="(min-width: 768px) 45vw, 100vw"
                      alt={p.alt}
                      width={1200}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top"
                    />
                  </span>
                </span>

                <span className="flex flex-1 items-center justify-between gap-4 px-3 pb-2 pt-5 sm:px-4">
                  <span className="min-w-0">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
                        {p.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-emerald-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Live
                      </span>
                    </span>
                    <span className="mt-1.5 block text-xl font-extrabold text-navy-900 sm:text-2xl">
                      {p.name}
                    </span>
                    <span className="mt-1 block text-sm text-body sm:text-[0.95rem]">
                      {p.tagline}
                    </span>
                    <span className="mt-3 flex flex-wrap gap-1.5">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-line px-2.5 py-0.5 text-[0.7rem] font-medium text-body"
                        >
                          {t}
                        </span>
                      ))}
                    </span>
                  </span>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-gold-600 transition-colors duration-300 group-hover:border-gold-400 group-hover:bg-gold-gradient group-hover:text-navy-950">
                    <ExternalLink className="h-5 w-5" aria-hidden="true" />
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        {moreLink ? (
          <div data-reveal className="mt-12 flex justify-center">
            <LinkButton href="/services#web-development" size="lg">
              Explore Web &amp; App Services{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </LinkButton>
          </div>
        ) : null}
      </div>
    </section>
  );
}
