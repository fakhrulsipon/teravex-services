import { directoryRoles } from "@/data/services";

const unique = Array.from(new Set(directoryRoles.map((r) => r.role)));
const half = Math.ceil(unique.length / 2);
const rows = [unique.slice(0, half), unique.slice(half)];

/** Each role has a small photo at /public/roles/<slug>.webp (480×360). */
const photoOf = (role: string) =>
  `/roles/${role
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}.webp`;

/** Infinite, CSS-only ticker of job roles — a small photo card per role, two rows scrolling in opposite directions. */
export default function RolesMarquee() {
  return (
    <section
      aria-label="Roles we supply"
      className="relative overflow-hidden bg-navy-950 py-10 sm:py-14"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-pattern-star opacity-30"
      />
      <div className="relative space-y-4 mask-fade-x sm:space-y-5">
        {rows.map((row, r) => (
          <div
            key={r}
            className="flex w-max animate-marquee"
            style={{
              animationDuration: "90s",
              ...(r ? { animationDirection: "reverse" } : {}),
            }}
          >
            {[0, 1].map((copy) => (
              <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0">
                {row.map((role) => (
                  <li key={role} className="w-36 shrink-0 pr-3 sm:w-48 sm:pr-4">
                    <figure className="rounded-2xl border border-white/10 bg-white/[0.04] p-1.5">
                      {/* eslint-disable-next-line @next/next/no-img-element -- static export: no Next image optimiser */}
                      <img
                        src={photoOf(role)}
                        alt=""
                        width={480}
                        height={360}
                        loading="lazy"
                        decoding="async"
                        className="aspect-[4/3] w-full rounded-xl object-cover"
                      />
                      <figcaption className="truncate px-1 pb-1 pt-2 text-center text-xs font-semibold text-white/85 sm:text-[0.8rem]">
                        {role}
                      </figcaption>
                    </figure>
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
