import type { CSSProperties } from "react";

/** Widths every photo in /public/photos is exported at: <name>-640.webp, <name>-1200.webp, <name>-2000.webp. */
export const PHOTO_WIDTHS = [640, 1200, 2000] as const;

type Props = {
  /** Photo name inside /public/photos, without size/extension — e.g. "hospitality". */
  name: string;
  alt: string;
  /** `sizes` attribute — how wide the photo renders, so the browser picks the right file. */
  sizes: string;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
};

/** Responsive, lazy-loaded WebP photo (static export, so the srcSet is generated at build time by a script). */
export default function Photo({ name, alt, sizes, className = "", style, priority = false }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export: no Next image optimiser
    <img
      src={`/photos/${name}-1200.webp`}
      srcSet={PHOTO_WIDTHS.map((w) => `/photos/${name}-${w}.webp ${w}w`).join(", ")}
      sizes={sizes}
      alt={alt}
      width={1200}
      height={800}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      style={style}
      className={`object-cover ${className}`}
    />
  );
}
