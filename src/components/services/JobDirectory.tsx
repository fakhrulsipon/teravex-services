"use client";

import { ArrowUpRight, Search, SearchX, X } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { buttonClass } from "@/components/ui/Button";
import { directoryRoles, services } from "@/data/services";

const categories = services
  .map((s) => ({ ...s, count: directoryRoles.filter((r) => r.serviceSlug === s.slug).length }))
  .filter((s) => s.count > 0);

const iconFor = (slug: string) => services.find((s) => s.slug === slug)!.icon;

/** Searchable, filterable directory of every position we supply. */
export default function JobDirectory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [expanded, setExpanded] = useState(false);
  const LIMIT = 12;

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return directoryRoles.filter(
      (r) =>
        (category === "all" || r.serviceSlug === category) &&
        (!q || `${r.role} ${r.group} ${r.serviceLabel}`.toLowerCase().includes(q)),
    );
  }, [query, category]);

  const visible = expanded ? results : results.slice(0, LIMIT);

  const chip = (active: boolean) =>
    `inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
      active
        ? "border-navy-900 bg-navy-900 text-white shadow-card"
        : "border-line bg-white text-navy-900 hover:border-gold-400 hover:text-gold-700"
    }`;

  return (
    <div data-reveal className="mt-12 rounded-[2rem] border border-line bg-white p-4 shadow-card sm:p-8">
      {/* Search */}
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-body"
          aria-hidden="true"
        />
        <label htmlFor="job-search" className="sr-only">
          Search job roles
        </label>
        <input
          id="job-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a role (e.g. Welder, Chef)"
          className="field h-14 rounded-2xl pl-14 pr-12 text-base [&::-webkit-search-cancel-button]:hidden"
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-body hover:bg-surface hover:text-navy-900"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        ) : null}
      </div>

      {/* Category filter */}
      <div
        role="group"
        aria-label="Filter by sector"
        className="no-scrollbar -mx-4 mt-5 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
      >
        <button type="button" onClick={() => setCategory("all")} aria-pressed={category === "all"} className={chip(category === "all")}>
          All Sectors
          <span className={`rounded-full px-2 py-0.5 text-xs ${category === "all" ? "bg-white/15" : "bg-surface"}`}>
            {directoryRoles.length}
          </span>
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => setCategory(c.slug)}
            aria-pressed={category === c.slug}
            className={chip(category === c.slug)}
          >
            <c.icon className="h-4 w-4" aria-hidden="true" />
            {c.label}
            <span className={`rounded-full px-2 py-0.5 text-xs ${category === c.slug ? "bg-white/15" : "bg-surface"}`}>
              {c.count}
            </span>
          </button>
        ))}
      </div>

      <p aria-live="polite" className="mt-6 text-sm text-body">
        Showing <strong className="font-bold text-navy-900">{results.length}</strong>{" "}
        {results.length === 1 ? "position" : "positions"}
      </p>

      {results.length ? (
        <>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((r) => {
            const Icon = iconFor(r.serviceSlug);
            return (
              <li key={`${r.serviceSlug}-${r.role}`}>
                <Link
                  href={`/request-manpower?sector=${r.serviceSlug}&role=${encodeURIComponent(r.role)}`}
                  className="group flex h-full items-center gap-3 rounded-2xl border border-line bg-white p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-card"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold-300 transition-colors group-hover:bg-gold-gradient group-hover:text-navy-950">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold leading-snug text-navy-900">{r.role}</span>
                    <span className="block truncate text-xs text-body">{r.serviceLabel}</span>
                  </span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-surface text-navy-900 transition-colors group-hover:bg-gold-400 group-hover:text-navy-950">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">Request {r.role}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        {results.length > LIMIT ? (
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className={buttonClass("outline-dark", "md")}
            >
              {expanded ? "Show fewer positions" : `Show all ${results.length} positions`}
            </button>
          </div>
        ) : null}
        </>
      ) : (
        <div className="mt-4 rounded-2xl border border-dashed border-line bg-surface px-6 py-12 text-center">
          <SearchX className="mx-auto h-10 w-10 text-gold-500" aria-hidden="true" />
          <p className="mt-4 text-lg font-bold text-navy-900">No listed role matches “{query}”</p>
          <p className="mx-auto mt-1 max-w-md text-sm text-body">
            We source beyond this list. Tell us what you need and we&apos;ll find the right people.
          </p>
          <Link href="/request-manpower" className={buttonClass("gold", "md", "mt-6")}>
            Request this role
          </Link>
        </div>
      )}
    </div>
  );
}
