import Link from "next/link";
import PhotoCardContent, {
  photoCardClass,
  photoCardItemClass,
} from "@/components/ui/PhotoCard";
import { services } from "@/data/services";

/** Home "Our Core Services" grid — each photo card links to that service on the Services page. */
export default function ServicesExplorer() {
  // Flex-wrap (not grid) so an incomplete last row sits centred: 1 / 2 / 3 cards per row.
  return (
    <ul className="mt-14 flex flex-wrap justify-center gap-5 lg:gap-6">
      {services.map((s, i) => (
        <li
          key={s.slug}
          data-reveal
          className={photoCardItemClass}
          style={
            { "--reveal-delay": `${(i % 3) * 80}ms` } as React.CSSProperties
          }
        >
          <Link href={`/services#${s.slug}`} className={photoCardClass}>
            <PhotoCardContent
              name={s.slug}
              alt={s.photoAlt}
              label={s.label}
              focus={s.photoFocus}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
