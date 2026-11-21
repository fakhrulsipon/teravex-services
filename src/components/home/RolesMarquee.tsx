import Photo from "@/components/ui/Photo";
import { directoryRoles } from "@/data/services";

const unique = Array.from(new Set(directoryRoles.map((r) => r.role)));
const half = Math.ceil(unique.length / 2);
const rows = [unique.slice(0, half), unique.slice(half)];

/** Infinite, CSS-only ticker of job roles. */
export default function RolesMarquee() {
  return (
    <section aria-label="Roles we supply" className="relative overflow-hidden bg-navy-950 py-10 sm:py-14">
      <Photo name="construction" alt="" sizes="100vw" className="absolute inset-0 h-full w-full opacity-45" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/70 to-navy-950" />
      <div aria-hidden="true" className="absolute inset-0 bg-pattern-star opacity-30" />
      <div className="relative space-y-4 mask-fade-x">
        {rows.map((row, r) => (
          <div key={r} className="flex w-max animate-marquee" style={r ? { animationDirection: "reverse" } : undefined}>
            {[0, 1].map((copy) => (
              <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
                {row.map((role, i) => (
                  <li key={role} className="flex items-center">
                    <span
                      className={`whitespace-nowrap px-5 text-2xl font-extrabold tracking-tight sm:px-7 sm:text-4xl ${
                        (i + r) % 2 ? "text-stroke" : "text-white/90"
                      }`}
                    >
                      {role}
                    </span>
                    <span aria-hidden="true" className="text-xl text-gold-400 sm:text-2xl">
                      ✦
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
