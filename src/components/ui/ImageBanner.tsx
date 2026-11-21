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

/** Inner-page banner — one clear, full-bleed service photo with a short centred title. */
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
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        {/* Very light shade behind the title only — the rest of the photo stays fully clear */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_45%_32%_at_center,rgb(7_12_25/0.5),transparent)]"
        />

        <div className="flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_24px_rgb(0_0_0/0.6)] animate-fade-up sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <span
            aria-hidden="true"
            className="mt-4 h-1 w-12 rounded-full bg-gold-gradient shadow-gold animate-fade-up [animation-delay:120ms] sm:w-16"
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/70 to-transparent"
        />
      </div>
    </section>
  );
}
