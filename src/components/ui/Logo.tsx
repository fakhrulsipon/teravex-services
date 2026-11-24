import Link from "next/link";

type Props = {
  /** Kept for call-site compatibility (header, drawer, footer). */
  id?: string;
  size?: "md" | "lg";
  className?: string;
};

/**
 * Site logo — gold TVX monogram without background beside the TERAVEX brand name.
 */
export default function Logo({ size = "md", className = "" }: Props) {
  const lg = size === "lg";
  return (
    <Link
      href="/"
      aria-label="Teravex Contracting & Services W.L.L — Home"
      className={`group inline-flex shrink-0 items-center ${
        lg ? "gap-3 sm:gap-3.5" : "gap-2.5 sm:gap-3"
      } ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static export, crisp SVG logo from favicon */}
      <img
        src="/brand/logo.svg"
        alt="Teravex Contracting & Services W.L.L"
        width={lg ? 117 : 89}
        height={lg ? 50 : 38}
        decoding="async"
        className={`${
          lg
            ? "h-11 sm:h-12 w-auto"
            : "h-8 sm:h-9 w-auto"
        } shrink-0 drop-shadow-[0_0_12px_rgb(243_167_46/0.28)] transition-transform duration-300 group-hover:scale-105`}
      />
      <span
        className={`${
          lg
            ? "text-[1.6rem] sm:text-[1.85rem] tracking-[0.12em]"
            : "text-[1.35rem] sm:text-[1.5rem] tracking-[0.12em]"
        } font-[800] leading-none text-white transition-colors duration-300 group-hover:text-gold-200`}
      >
        TERAVEX
      </span>
    </Link>
  );
}
