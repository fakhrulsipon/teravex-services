import { Globe } from "lucide-react";

/** Country flag (local SVG) or a globe badge for "Other African Nations". */
export default function Flag({
  src,
  name,
  className = "h-10 w-14",
  eager = false,
}: {
  src: string | null;
  name: string;
  className?: string;
  eager?: boolean;
}) {
  if (!src) {
    return (
      <span
        className={`inline-flex items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-gold-300 to-gold-600 text-navy-950 ring-1 ring-black/5 ${className}`}
      >
        <Globe className="h-1/2 w-1/2" aria-hidden="true" />
        <span className="sr-only">{name}</span>
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element -- tiny static SVGs, no optimisation needed
    <img
      src={src}
      alt={`${name} flag`}
      width={56}
      height={42}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={`rounded-md object-cover shadow-sm ring-1 ring-black/10 ${className}`}
    />
  );
}
