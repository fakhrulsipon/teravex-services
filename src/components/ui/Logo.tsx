import Link from "next/link";

type Props = {
  /** Kept for call-site compatibility (header, drawer, footer). */
  id?: string;
  size?: "md" | "lg";
  className?: string;
};

/**
 * Site logo — the company seal exactly as designed, recoloured to the site's gold
 * on a transparent background (/public/brand/seal-{192,384}.webp).
 */
export default function Logo({ size = "md", className = "" }: Props) {
  const lg = size === "lg";
  return (
    <Link
      href="/"
      aria-label="Teravex Contracting & Services W.L.L — Home"
      className={`group inline-flex shrink-0 items-center ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, responsive srcSet provided manually */}
      <img
        src="/brand/seal-192.webp"
        srcSet="/brand/seal-192.webp 192w, /brand/seal-384.webp 384w"
        sizes={lg ? "128px" : "64px"}
        alt="Teravex Contracting & Services W.L.L"
        width={192}
        height={192}
        decoding="async"
        className={`${lg ? "h-32 w-32" : "h-14 w-14 sm:h-16 sm:w-16"} shrink-0 drop-shadow-[0_0_12px_rgb(243_167_46/0.25)] transition-transform duration-500 group-hover:rotate-6`}
      />
    </Link>
  );
}
