import type { ReactNode } from "react";

type Props = {
  /** Path prefix of the responsive WebP set, e.g. "/banners/about" → "-960.webp", "-1600.webp", "-2400.webp". */
  src: string;
  alt: string;
  /** Page heading shown over the photo. */
  title: ReactNode;
  /** CSS object-position for the photo (keeps the subject in frame on every screen size). */
  focus?: string;
};

const widths = [960, 1600, 2400];

/** Gold L-shaped accents sitting on the four corners of the inset frame. */
const corners = [
  "left-0 top-0 border-l-2 border-t-2 rounded-tl-[1.5rem] sm:rounded-tl-[2rem]",
  "right-0 top-0 border-r-2 border-t-2 rounded-tr-[1.5rem] sm:rounded-tr-[2rem]",
  "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-[1.5rem] sm:rounded-bl-[2rem]",
  "bottom-0 right-0 border-b-2 border-r-2 rounded-br-[1.5rem] sm:rounded-br-[2rem]",
];

/**
 * Inner-page banner — one clear, full-bleed service photo inside a thin gold-cornered frame,
 * with the page title and a small gold ornament. Title only, no extra copy.
 */
export default function ImageBanner({
  src,
  alt,
  title,
  focus = "50% 50%",
}: Props) {
  return (
    /* Top padding = the fixed header's height (80px mobile; 40px info bar + 1px border + 80px nav on desktop),
       so the photo starts right below the navbar instead of running underneath it. */
    <section className="bg-navy-950 pt-20 lg:pt-[121px]">
      <div className="relative isolate h-[21rem] overflow-hidden sm:h-[27rem] lg:h-[33rem]">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export, responsive srcSet provided manually */}
        <img
          src={`${src}-1600.webp`}
          srcSet={widths.map((w) => `${src}-${w}.webp ${w}w`).join(", ")}
          sizes="100vw"
          alt={alt}
          width={2400}
          height={1600}
          fetchPriority="high"
          decoding="async"
          style={{ objectPosition: focus }}
          className="absolute inset-0 -z-10 h-full w-full animate-ken-burns object-cover brightness-105 saturate-[1.1]"
        />

        {/* Light shading only at the edges and behind the title — the photo itself stays clear */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-navy-950/55 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-navy-950/70 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_38%_at_center,rgb(7_12_25/0.5),transparent)]" />
        </div>

        {/* Inset frame with gold corners */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-3 animate-fade-in rounded-[1.5rem] border border-white/25 sm:inset-5 sm:rounded-[2rem] lg:inset-6"
        >
          {corners.map((c) => (
            <span
              key={c}
              className={`absolute h-7 w-7 border-gold-400 drop-shadow-[0_0_6px_rgb(243_167_46/0.6)] sm:h-10 sm:w-10 ${c}`}
            />
          ))}
        </div>

        {/* Title — no plate over the photo, just a soft shadow so it reads on any image */}
        <div className="flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="animate-fade-up text-3xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_24px_rgb(0_0_0/0.65)] sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <span
            aria-hidden="true"
            className="mt-4 flex animate-fade-up items-center justify-center gap-2.5 [animation-delay:120ms]"
          >
            <span className="h-0.5 w-10 rounded-full bg-linear-to-r from-transparent to-gold-400 sm:w-16" />
            <span className="h-2.5 w-2.5 rotate-45 bg-gold-gradient shadow-gold" />
            <span className="h-0.5 w-10 rounded-full bg-linear-to-l from-transparent to-gold-400 sm:w-16" />
          </span>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-gold-400/70 to-transparent"
        />
      </div>
    </section>
  );
}
