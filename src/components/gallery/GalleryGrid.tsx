"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import Photo from "@/components/ui/Photo";
import PhotoCardContent, {
  photoCardClass,
  photoCardItemClass,
} from "@/components/ui/PhotoCard";
import { galleryPhotos, type GalleryPhoto } from "@/data/gallery";
import { services } from "@/data/services";

const labelOf = (slug: string) =>
  services.find((s) => s.slug === slug)?.label ?? slug;

/** "All" view: take one photo from each sector in turn, so neighbouring tiles always differ. */
function interleave(photos: GalleryPhoto[]) {
  const groups = services.map((s) =>
    photos.filter((p) => p.category === s.slug),
  );
  const out: GalleryPhoto[] = [];
  for (let i = 0; out.length < photos.length; i++) {
    for (const g of groups) if (g[i]) out.push(g[i]);
  }
  return out;
}

export default function GalleryGrid() {
  const [filter, setFilter] = useState<string>("all");
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);

  const all = useMemo(() => interleave(galleryPhotos), []);
  const items =
    filter === "all" ? all : galleryPhotos.filter((p) => p.category === filter);
  const filters = [
    { slug: "all", label: "All" },
    ...services.map((s) => ({ slug: s.slug, label: s.label })),
  ];

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = (d: number) =>
    setIndex((i) => (i === null ? i : (i + d + items.length) % items.length));
  const current = index === null ? null : items[index];

  return (
    <>
      {/* Sector filter */}
      <div
        role="toolbar"
        aria-label="Filter photos by service"
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
      >
        {filters.map((f) => {
          const on = filter === f.slug;
          return (
            <button
              key={f.slug}
              type="button"
              aria-pressed={on}
              onClick={() => setFilter(f.slug)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                on
                  ? "bg-navy-950 text-white shadow-card"
                  : "border border-line bg-white text-navy-900 hover:border-gold-300 hover:text-gold-700"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Photo cards — same look as the home "Our Core Services" cards (photo on top, name below), but static on hover.
          Flex-wrap so an incomplete last row sits centred: 1 / 2 / 3 cards per row. */}
      <ul
        key={filter}
        className="mt-10 flex flex-wrap justify-center gap-5 lg:gap-6"
      >
        {items.map((p, i) => (
          <li
            key={p.name}
            className={`animate-fade-up ${photoCardItemClass}`}
            style={{ animationDelay: `${Math.min(i, 12) * 50}ms` }}
          >
            <button
              type="button"
              onClick={() => open(i)}
              aria-haspopup="dialog"
              aria-label={`View photo: ${p.alt}`}
              className={photoCardClass}
            >
              <PhotoCardContent
                name={p.name}
                alt={p.alt}
                label={labelOf(p.category)}
                focus={p.focus}
              />
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      <dialog
        ref={dialogRef}
        aria-label="Photo viewer"
        onClose={() => setIndex(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 backdrop:bg-navy-950/95 backdrop:backdrop-blur-sm"
      >
        {current ? (
          <div
            className="flex h-full flex-col"
            onClick={(e) => e.target === e.currentTarget && close()}
          >
            <div className="flex items-center justify-between px-4 py-4 text-white sm:px-8">
              <p className="text-sm font-semibold">
                <span className="text-gold-300">
                  {labelOf(current.category)}
                </span>
                <span className="ml-3 text-white/50">
                  {index! + 1} / {items.length}
                </span>
              </p>
              <button
                type="button"
                onClick={close}
                autoFocus
                aria-label="Close"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-gold-300 hover:text-white"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div
              className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-24 sm:px-24 sm:pb-6"
              onClick={(e) => e.target === e.currentTarget && close()}
              onTouchStart={(e) => {
                touchX.current = e.touches[0].clientX;
              }}
              onTouchEnd={(e) => {
                if (touchX.current === null) return;
                const dx = e.changedTouches[0].clientX - touchX.current;
                touchX.current = null;
                if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
              }}
            >
              <Photo
                key={current.name}
                name={current.name}
                alt={current.alt}
                sizes="100vw"
                priority
                className="h-auto max-h-full w-auto max-w-full animate-fade-in rounded-2xl object-contain! shadow-2xl"
              />

              {items.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Previous photo"
                    className="absolute bottom-6 left-[calc(50%-3.5rem)] grid h-12 w-12 sm:bottom-auto sm:left-6 sm:top-1/2 sm:-translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-gold-400 hover:text-navy-950"
                  >
                    <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Next photo"
                    className="absolute bottom-6 right-[calc(50%-3.5rem)] grid h-12 w-12 sm:bottom-auto sm:right-6 sm:top-1/2 sm:-translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-gold-400 hover:text-navy-950"
                  >
                    <ChevronRight className="h-6 w-6" aria-hidden="true" />
                  </button>
                </>
              ) : null}
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
