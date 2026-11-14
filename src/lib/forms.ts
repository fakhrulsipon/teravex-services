import { services } from "@/data/services";

export const sectorOptions = services.map((s) => ({ value: s.slug, label: s.label }));

export const nationalityOptions = [
  "Any",
  "Bangladesh",
  "Nepal",
  "India",
  "Pakistan",
  "Philippines",
  "Sri Lanka",
  "Kenya",
  "African",
] as const;

export const workerOptions = ["1–10", "11–50", "51–200", "200+"] as const;
export const durationOptions = ["Short-term", "Long-term", "Permanent"] as const;

export const sectorLabel = (slug: string) => sectorOptions.find((o) => o.value === slug)?.label ?? slug;

export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
export const isPhone = (v: string) => /^\+?[\d\s()-]{7,20}$/.test(v.trim());

export type SummaryRow = { label: string; value: string };

/** Plain-text message used for both the WhatsApp and the email hand-off. */
export function buildMessage(title: string, rows: SummaryRow[]) {
  const lines = rows.filter((r) => r.value.trim()).map((r) => `${r.label}: ${r.value.trim()}`);
  return [`*${title}*`, "", ...lines, "", "— Sent from www.teravexservices.com"].join("\n");
}

/** Focus + scroll to the first field that has an error. */
export function focusFirstError(ids: string[]) {
  const first = ids.map((id) => document.getElementById(id)).find(Boolean);
  if (first) {
    first.focus({ preventScroll: true });
    first.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}
