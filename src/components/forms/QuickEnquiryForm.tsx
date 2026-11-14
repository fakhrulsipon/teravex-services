"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import FormSuccess from "@/components/forms/FormSuccess";
import { buttonClass } from "@/components/ui/Button";
import { focusFirstError, isPhone, sectorLabel, sectorOptions, workerOptions } from "@/lib/forms";

type Values = { name: string; phone: string; sector: string; workers: string };
type Errors = Partial<Record<keyof Values, string>>;

const initial: Values = { name: "", phone: "", sector: "", workers: "" };

/** Compact lead form for the home page. */
export default function QuickEnquiryForm() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof Values, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Errors = {};
    if (!values.name.trim()) errs.name = "Please enter your name.";
    if (!isPhone(values.phone)) errs.phone = "Please enter a valid phone / WhatsApp number.";
    if (!values.sector) errs.sector = "Please choose a sector.";
    if (!values.workers) errs.workers = "Please choose a headcount.";
    setErrors(errs);
    const bad = (["name", "phone", "sector", "workers"] as const).filter((k) => errs[k]);
    if (bad.length) return focusFirstError(bad.map((k) => `qe-${k}`));
    setSubmitted(true);
  };

  const fp = (key: keyof Values) => ({
    id: `qe-${key}`,
    name: key,
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `qe-${key}-error` : undefined,
  });
  const err = (k: keyof Values) =>
    errors[k] ? (
      <p id={`qe-${k}-error`} className="field-error">
        {errors[k]}
      </p>
    ) : null;

  if (submitted) {
    return (
      <FormSuccess
        compact
        name={values.name}
        title="Quick Manpower Enquiry — Teravex Website"
        onEdit={() => setSubmitted(false)}
        rows={[
          { label: "Name", value: values.name },
          { label: "Phone / WhatsApp", value: values.phone },
          { label: "Service Sector", value: sectorLabel(values.sector) },
          { label: "Number of Workers", value: values.workers },
        ]}
      />
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor="qe-name" className="field-label">
          Your Name
        </label>
        <input
          {...fp("name")}
          className="field"
          autoComplete="name"
          placeholder="Full name"
          value={values.name}
          onChange={(e) => set("name", e.target.value)}
        />
        {err("name")}
      </div>
      <div>
        <label htmlFor="qe-phone" className="field-label">
          Phone / WhatsApp
        </label>
        <input
          {...fp("phone")}
          type="tel"
          inputMode="tel"
          className="field"
          autoComplete="tel"
          placeholder="+974 5555 5555"
          value={values.phone}
          onChange={(e) => set("phone", e.target.value)}
        />
        {err("phone")}
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="qe-sector" className="field-label">
            Service Sector
          </label>
          <select {...fp("sector")} className="field" value={values.sector} onChange={(e) => set("sector", e.target.value)}>
            <option value="" disabled>
              Select
            </option>
            {sectorOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          {err("sector")}
        </div>
        <div>
          <label htmlFor="qe-workers" className="field-label">
            Workers Needed
          </label>
          <select
            {...fp("workers")}
            className="field"
            value={values.workers}
            onChange={(e) => set("workers", e.target.value)}
          >
            <option value="" disabled>
              Select
            </option>
            {workerOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          {err("workers")}
        </div>
      </div>
      <button type="submit" className={buttonClass("gold", "lg", "w-full")}>
        Get Instant Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </button>
      <p className="text-center text-xs text-body">
        Need more detail?{" "}
        <Link href="/request-manpower" className="font-semibold text-navy-900 underline-offset-4 hover:underline">
          Use the full request form
        </Link>
      </p>
    </form>
  );
}
