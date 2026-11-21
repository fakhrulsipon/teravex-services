type Props = {
  /** Path prefix of the responsive WebP set, e.g. "/banners/request-manpower" → "-960.webp", "-1600.webp", "-2400.webp". */
  src: string;
  alt: string;
  /** Page heading — kept for SEO / screen readers, visually hidden. */
  title: string;
  /** Id of the section the scroll cue jumps to. */
  scrollTo?: string;
  /** CSS object-position for the photo (keeps the subject in frame on narrow screens). */
  focus?: string;
};

const widths = [960, 1600, 2400];

/** Full-bleed, text-free photo banner used at the top of inner pages. */
export default function ImageBanner({ src, alt, title, scrollTo, focus = "35% 70%" }: Props) {
  return (
    <section className="relative isolate h-[26rem] overflow-hidden bg-navy-950 sm:h-[32rem] md:h-[36rem] lg:h-[42rem] xl:h-[46rem]">
      <h1 className="sr-only">{title}</h1>

      {/* Photo with a slow cinematic zoom-in */}
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, responsive srcSet provided manually */}
      <img
        src={`${src}-1600.webp`}
        srcSet={widths.map((w) => `${src}-${w}.webp ${w}w`).join(", ")}
        sizes="100vw"
        alt={alt}
        width={2400}
        height={1601}
        fetchPriority="high"
        decoding="async"
        style={{ objectPosition: focus }}
        className="absolute inset-0 -z-20 h-full w-full animate-ken-burns object-cover"
      />

      {/* Brand grading: navy at the top (keeps the transparent header readable), warm glow, deep vignette */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-navy-950/95 via-navy-950/60 to-transparent sm:h-56" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgb(7_12_25/0.7)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_35%,rgb(243_167_46/0.25),transparent_55%)] mix-blend-screen" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgb(141_27_61/0.28),transparent_45%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
        <div className="absolute inset-0 bg-pattern-star opacity-25 mask-fade-b" />
      </div>

      {/* Gold frame corners */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-4 bottom-8 top-28 hidden animate-fade-in [animation-delay:600ms] sm:block lg:inset-x-10 lg:top-36">
        <span className="absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-gold-400/70 lg:h-14 lg:w-14" />
        <span className="absolute right-0 top-0 h-10 w-10 border-r-2 border-t-2 border-gold-400/70 lg:h-14 lg:w-14" />
        <span className="absolute bottom-0 left-0 h-10 w-10 border-b-2 border-l-2 border-gold-400/70 lg:h-14 lg:w-14" />
        <span className="absolute bottom-0 right-0 h-10 w-10 border-b-2 border-r-2 border-gold-400/70 lg:h-14 lg:w-14" />
      </div>

      {/* Scroll cue */}
      {scrollTo ? (
        <a
          href={`#${scrollTo}`}
          aria-label="Scroll to the request form"
          className="group absolute bottom-6 left-1/2 flex h-12 w-7 -translate-x-1/2 justify-center rounded-full border-2 border-white/50 pt-2 backdrop-blur-sm transition-colors hover:border-gold-400 sm:bottom-10"
        >
          <span className="h-2 w-1 animate-scroll-dot rounded-full bg-gold-400" />
        </a>
      ) : null}

      {/* Gold hairline */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent" />
    </section>
  );
}
