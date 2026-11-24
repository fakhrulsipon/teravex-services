import Link from "next/link";

type Props = {
  /** Kept for call-site compatibility (header, drawer, footer). */
  id?: string;
  size?: "md" | "lg";
  className?: string;
};

/**
 * Site logo — the icon used as the favicon (gold TVX emblem on navy squircle)
 * accompanied by the TERAVEX brand text.
 */
export default function Logo({ size = "md", className = "" }: Props) {
  const lg = size === "lg";
  return (
    <Link
      href="/"
      aria-label="Teravex Contracting & Services W.L.L — Home"
      className={`group inline-flex shrink-0 items-center gap-3 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, crisp SVG logo from favicon */}
      <img
        src="/brand/logo.svg"
        alt="Teravex Contracting & Services W.L.L"
        width={lg ? 64 : 48}
        height={lg ? 64 : 48}
        decoding="async"
        className={`${
          lg ? "h-14 w-14 sm:h-16 sm:w-16" : "h-10 w-10 sm:h-11 sm:w-11"
        } shrink-0 rounded-xl drop-shadow-[0_0_12px_rgb(243_167_46/0.25)] transition-transform duration-300 group-hover:scale-105`}
      />
      <span
        className={`${
          lg
            ? "text-[1.65rem] sm:text-[1.85rem]"
            : "text-[1.45rem] sm:text-[1.6rem]"
        } font-[800] leading-none tracking-[0.12em] text-white transition-colors duration-300 group-hover:text-gold-200`}
      >
        TERAVEX
      </span>
    </Link>
  );
}
