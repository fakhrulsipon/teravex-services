import Photo from "@/components/ui/Photo";

/**
 * Shared look for the photo-first cards (home "Our Core Services" + Gallery).
 * The photo is the hero: framed inside a thin white mat, with a small caption underneath.
 * Deliberately static on hover — only the frame colour changes, nothing moves or zooms.
 */
export const photoCardClass =
  "flex h-full w-full flex-col rounded-[1.75rem] border border-line bg-white p-2 text-left shadow-card transition-colors duration-300 hover:border-gold-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500 sm:p-2.5";

/** Card widths inside a centred flex-wrap list: 1 / 2 / 3 per row (gap-5 → lg:gap-6). */
export const photoCardItemClass =
  "w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-1rem)]";

type Props = {
  name: string;
  alt: string;
  label: string;
  focus?: string;
};

export default function PhotoCardContent({ name, alt, label, focus }: Props) {
  return (
    <>
      <span className="relative isolate block aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-navy-950">
        <Photo
          name={name}
          alt={alt}
          style={{ objectPosition: focus }}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="absolute inset-0 -z-10 h-full w-full"
        />
        {/* hairline inner edge so bright photos don't bleed into the white mat */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-[1.35rem] ring-1 ring-inset ring-black/5"
        />
      </span>
      <span className="flex items-center justify-center gap-2.5 px-3 pb-1.5 pt-3 sm:pt-3.5">
        <span
          aria-hidden="true"
          className="h-0.5 w-4 rounded-full bg-gold-gradient"
        />
        <span className="text-sm font-semibold tracking-wide text-navy-900 sm:text-[0.95rem]">
          {label}
        </span>
        <span
          aria-hidden="true"
          className="h-0.5 w-4 rounded-full bg-gold-gradient"
        />
      </span>
    </>
  );
}
