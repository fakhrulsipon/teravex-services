import Link from "next/link";

/**
 * Teravex mark — a roof-line "T" with a check-mark "V", traced from the brand logo as a crisp vector.
 * Colours follow the site: white on the dark navy surfaces, with the brand gold for the check mark.
 * The gradient id is namespaced by `id` so several logos can live on one page.
 */
export function LogoMark({
  className = "h-11 w-auto",
  id = "logo",
}: {
  className?: string;
  id?: string;
}) {
  const gold = `tvx-gold-${id}`;
  return (
    <svg viewBox="0 0 442 367" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gold} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f8c05a" />
          <stop offset="1" stopColor="#f3a72e" />
        </linearGradient>
      </defs>
      <path fill="#ffffff" d="M0 177 210 0 300 75V174L210 102 62 227Z" />
      <path fill="#ffffff" d="M128 200 205 135V367L128 305Z" />
      <path
        fill={`url(#${gold})`}
        d="M227 175H268V227L354 159V116L442 189 227 367Z"
      />
    </svg>
  );
}

type Props = {
  /** Unique per instance on a page (header, drawer, footer) — keeps the SVG gradient ids distinct. */
  id?: string;
  size?: "md" | "lg";
  className?: string;
};

/** Site logo — the mark beside TERAVEX, a hairline rule and the PROFESSIONAL SERVICES tagline. */
export default function Logo({
  id = "header",
  size = "md",
  className = "",
}: Props) {
  const lg = size === "lg";
  return (
    <Link
      href="/"
      aria-label="Teravex — Home"
      className={`group inline-flex shrink-0 items-center gap-3 ${className}`}
    >
      <LogoMark
        id={id}
        className={`${lg ? "h-14" : "h-10 sm:h-11"} w-auto shrink-0 transition-transform duration-500 group-hover:-translate-y-0.5`}
      />
      <span className="flex flex-col items-stretch leading-none">
        <span
          className={`${lg ? "text-[1.75rem]" : "text-[1.35rem] sm:text-[1.5rem]"} font-[700] tracking-[0.14em] text-white`}
        >
          TERAVEX
        </span>
        <span
          aria-hidden="true"
          className={`${lg ? "my-2" : "my-1.5"} h-px bg-white/40`}
        />
        <span
          className={`${lg ? "text-[0.6rem]" : "text-[0.5rem] sm:text-[0.55rem]"} font-[500] tracking-[0.3em] text-white/70`}
        >
          PROFESSIONAL SERVICES
        </span>
      </span>
    </Link>
  );
}
