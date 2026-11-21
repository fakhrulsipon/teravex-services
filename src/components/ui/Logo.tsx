import Link from "next/link";

export function LogoMark({ className = "h-10 w-10", id = "logo" }: { className?: string; id?: string }) {
  const gid = `tvx-grad-${id}`;
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fde1a3" />
          <stop offset="0.5" stopColor="#f3a72e" />
          <stop offset="1" stopColor="#d97706" />
        </linearGradient>
      </defs>
      <path d="M20 1.5 36.5 11v18L20 38.5 3.5 29V11z" fill={`url(#${gid})`} />
      <path d="M20 5.2 33.3 12.9v14.2L20 34.8 6.7 27.1V12.9z" fill="none" stroke="#0f172a" strokeOpacity=".22" />
      <path d="M11.5 12.5h17v4.4h-6.3V29h-4.4V16.9h-6.3z" fill="#0f172a" />
    </svg>
  );
}

export default function Logo({ id = "header", className = "" }: { id?: string; className?: string }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${className}`} aria-label="Teravex — Home">
      <LogoMark id={id} className="h-10 w-10 shrink-0 transition-transform duration-500 group-hover:rotate-[30deg]" />
      <span className="flex flex-col leading-none">
        <span className="text-[1.3rem] font-[800] tracking-[0.2em] text-white">TERAVEX</span>
        <span className="mt-1 text-[0.56rem] font-[600] tracking-[0.2em] text-gold-300/90">
          CONTRACTING &amp; SERVICES W.L.L
        </span>
      </span>
    </Link>
  );
}
