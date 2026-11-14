import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "gold" | "outline-light" | "outline-dark" | "navy" | "ghost-light" | "whatsapp";
type Size = "md" | "lg";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold transition-all duration-300 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  gold: "bg-gold-gradient text-navy-950 shadow-gold hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgb(217_119_6/0.75)]",
  "outline-light":
    "border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:border-gold-300/70 hover:bg-white/10",
  "outline-dark": "border border-navy-900/15 bg-white text-navy-900 hover:border-gold-500 hover:text-gold-700",
  navy: "bg-navy-900 text-white hover:-translate-y-0.5 hover:bg-navy-800 hover:shadow-card-hover",
  "ghost-light": "text-white/80 hover:text-white",
  whatsapp:
    "bg-[#25D366] text-white shadow-[0_12px_30px_-10px_rgb(37_211_102/0.7)] hover:-translate-y-0.5 hover:bg-[#1fbe5b]",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[0.95rem]",
};

export function buttonClass(variant: Variant = "gold", size: Size = "md", extra = "") {
  return `${base} ${variants[variant]} ${sizes[size]} ${extra}`;
}

/** Light sweep across gold buttons */
function Shine({ variant }: { variant: Variant }) {
  if (variant !== "gold") return null;
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/40 blur-md animate-shine"
    />
  );
}

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  external?: boolean;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

export function LinkButton({
  href,
  variant = "gold",
  size = "md",
  className = "",
  children,
  external,
  ...rest
}: LinkButtonProps) {
  const cls = buttonClass(variant, size, className);
  if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        <Shine variant={variant} />
        <span className="relative inline-flex items-center gap-2">{children}</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      <Shine variant={variant} />
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}
