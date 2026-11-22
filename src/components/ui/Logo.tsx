import Link from "next/link";

type Props = {
  /** "compact" = TVX mark + TERAVEX + English line (header, drawer); "full" adds the Arabic line (footer). */
  variant?: "compact" | "full";
  className?: string;
};

const files = {
  compact: {
    src: "/brand/logo.png",
    width: 716,
    height: 391,
    img: "h-11 sm:h-12",
  },
  full: {
    src: "/brand/logo-full.png",
    width: 718,
    height: 456,
    img: "h-24 sm:h-28",
  },
} as const;

/**
 * Teravex brand logo (red & black artwork on a transparent background).
 * The site chrome is dark navy, so the logo sits on a small white card to keep the black lettering readable.
 */
export default function Logo({ variant = "compact", className = "" }: Props) {
  const f = files[variant];
  return (
    <Link
      href="/"
      aria-label="Teravex Contracting & Services W.L.L — Home"
      className={`inline-flex shrink-0 items-center rounded-xl bg-white px-2.5 py-1 shadow-[0_8px_24px_-10px_rgb(0_0_0/0.6)] ring-1 ring-black/5 transition-transform duration-300 hover:scale-[1.03] ${
        variant === "full" ? "rounded-2xl px-4 py-3" : ""
      } ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- static export: no Next image optimiser */}
      <img
        src={f.src}
        alt="Teravex Contracting & Services W.L.L"
        width={f.width}
        height={f.height}
        className={`${f.img} w-auto`}
      />
    </Link>
  );
}
