"use client";

import { ArrowRight, Building2, ClipboardList, Globe } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import FormSuccess from "@/components/forms/FormSuccess";
import { buttonClass } from "@/components/ui/Button";
import {
  durationOptions,
  focusFirstError,
  isEmail,
  isPhone,
  nationalityOptions,
  sectorLabel,
  sectorOptions,
  workerOptions,
} from "@/lib/forms";

type Values = {
  company: string;
  contactName: string;
  phone: string;
  email: string;
  sector: string;
  roles: string;
  nationalities: string[];
  workers: string;
  duration: string;
};
type Errors = Partial<Record<keyof Values, string>>;

const initial: Values = {
  company: "",
  contactName: "",
  phone: "",
  email: "",
  sector: "",
  roles: "",
  nationalities: ["Any"],
  workers: "",
  duration: "",
};

const order: (keyof Values)[] = ["company", "contactName", "phone", "email", "sector", "roles", "workers", "duration"];

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.company.trim()) e.company = "Please enter your company name.";
  if (!v.contactName.trim()) e.contactName = "Please enter the contact person's name.";
  if (!isPhone(v.phone)) e.phone = "Please enter a valid phone / WhatsApp number.";
  if (!isEmail(v.email)) e.email = "Please enter a valid email address.";
  if (!v.sector) e.sector = "Please choose the required service sector.";
  if (!v.roles.trim()) e.roles = "Please list the job role(s) you need.";
  if (!v.workers) e.workers = "Please choose how many workers you need.";
  if (!v.duration) e.duration = "Please choose the project duration.";
  return e;
}

function Step({ n, icon, title, children }: { n: number; icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <fieldset className="border-t border-line pt-8 first:border-t-0 first:pt-0">
      <legend className="float-left mb-6 flex w-full items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-navy-900 text-gold-300">{icon}</span>
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-gold-700">Step {n}</span>
        <span className="text-base font-bold text-navy-900">{title}</span>
      </legend>
      <div className="clear-both grid gap-5 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

export default function ManpowerForm() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  // Pre-fill from links like /request-manpower?sector=construction&role=Welder
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sector = params.get("sector");
    const role = params.get("role");
    if (!sector && !role) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from the URL (static export has no server)
    setValues((v) => ({
      ...v,
      sector: sector && sectorOptions.some((o) => o.value === sector) ? sector : v.sector,
      roles: role ?? v.roles,
    }));
  }, []);

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const toggleNationality = (n: string) => {
    setValues((v) => {
      if (n === "Any") return { ...v, nationalities: ["Any"] };
      const without = v.nationalities.filter((x) => x !== "Any" && x !== n);
      const next = v.nationalities.includes(n) ? without : [...without, n];
      return { ...v, nationalities: next.length ? next : ["Any"] };
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    const bad = order.filter((k) => errs[k]);
    if (bad.length) {
      focusFirstError(bad.map((k) => `mf-${k}`));
      return;
    }
    setSubmitted(true);
    requestAnimationFrame(() => topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  const fieldProps = (key: keyof Values) => ({
    id: `mf-${key}`,
    name: key,
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `mf-${key}-error` : undefined,
  });

  const err = (k: keyof Values) =>
    errors[k] ? (
      <p id={`mf-${k}-error`} className="field-error">
        {errors[k]}
      </p>
    ) : null;

  const pill =
    "relative inline-flex cursor-pointer select-none items-center justify-center whitespace-nowrap rounded-full border border-line bg-white px-3 py-2.5 text-[0.82rem] font-medium sm:px-4 sm:text-sm text-navy-900 transition-all hover:border-gold-400 has-[:checked]:border-gold-500 has-[:checked]:bg-gold-50 has-[:checked]:text-gold-700 has-[:checked]:shadow-[0_0_0_3px_rgb(243_167_46/0.18)] has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-gold-400";

  return (
    <div
      ref={topRef}
      className="scroll-mt-28 rounded-[2rem] border border-line bg-white p-6 shadow-[0_30px_80px_-40px_rgb(7_12_25/0.35)] sm:p-10"
    >
      {submitted ? (
        <FormSuccess
          name={values.contactName}
          title="New Manpower Request — Teravex Website"
          onEdit={() => setSubmitted(false)}
          rows={[
            { label: "Company", value: values.company },
            { label: "Contact Person", value: values.contactName },
            { label: "Phone / WhatsApp", value: values.phone },
            { label: "Email", value: values.email },
            { label: "Service Sector", value: sectorLabel(values.sector) },
            { label: "Job Role(s)", value: values.roles },
            { label: "Preferred Nationality", value: values.nationalities.join(", ") },
            { label: "Number of Workers", value: values.workers },
            { label: "Project Duration", value: values.duration },
          ]}
        />
      ) : (
        <form noValidate onSubmit={onSubmit} className="space-y-8">
          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">Manpower Request Form</h2>
            <p className="mt-2 text-sm text-body sm:text-base">
              Takes under 2 minutes. Fields marked <span className="text-gold-600">*</span> are required.
            </p>
          </div>

          <Step n={1} icon={<Building2 className="h-4 w-4" aria-hidden="true" />} title="Company Details">
            <div>
              <label htmlFor="mf-company" className="field-label">
                Company Name <span className="text-gold-600">*</span>
              </label>
              <input
                {...fieldProps("company")}
                className="field"
                autoComplete="organization"
                placeholder="e.g. Al Noor Contracting"
                value={values.company}
                onChange={(e) => set("company", e.target.value)}
              />
              {err("company")}
            </div>
            <div>
              <label htmlFor="mf-contactName" className="field-label">
                Contact Person Name <span className="text-gold-600">*</span>
              </label>
              <input
                {...fieldProps("contactName")}
                className="field"
                autoComplete="name"
                placeholder="Full name"
                value={values.contactName}
                onChange={(e) => set("contactName", e.target.value)}
              />
              {err("contactName")}
            </div>
            <div>
              <label htmlFor="mf-phone" className="field-label">
                Phone / WhatsApp Number <span className="text-gold-600">*</span>
              </label>
              <input
                {...fieldProps("phone")}
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
            <div>
              <label htmlFor="mf-email" className="field-label">
                Email Address <span className="text-gold-600">*</span>
              </label>
              <input
                {...fieldProps("email")}
                type="email"
                inputMode="email"
                className="field"
                autoComplete="email"
                placeholder="you@company.com"
                value={values.email}
                onChange={(e) => set("email", e.target.value)}
              />
              {err("email")}
            </div>
          </Step>

          <Step n={2} icon={<ClipboardList className="h-4 w-4" aria-hidden="true" />} title="Your Requirement">
            <div>
              <label htmlFor="mf-sector" className="field-label">
                Required Service Sector <span className="text-gold-600">*</span>
              </label>
              <select
                {...fieldProps("sector")}
                className="field"
                value={values.sector}
                onChange={(e) => set("sector", e.target.value)}
              >
                <option value="" disabled>
                  Select a sector
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
              <label htmlFor="mf-roles" className="field-label">
                Specific Job Role(s) <span className="text-gold-600">*</span>
              </label>
              <input
                {...fieldProps("roles")}
                className="field"
                placeholder="e.g. 10 Welders, 5 Waiters"
                value={values.roles}
                onChange={(e) => set("roles", e.target.value)}
              />
              {err("roles")}
            </div>

            <div className="sm:col-span-2">
              <p id="mf-workers-label" className="field-label">
                Number of Workers Needed <span className="text-gold-600">*</span>
              </p>
              <div
                role="radiogroup"
                aria-labelledby="mf-workers-label"
                aria-describedby={errors.workers ? "mf-workers-error" : undefined}
                className="grid grid-cols-2 gap-2.5 sm:grid-cols-4"
              >
                {workerOptions.map((o, i) => (
                  <label key={o} className={pill}>
                    <input
                      type="radio"
                      name="workers"
                      id={i === 0 ? "mf-workers" : undefined}
                      value={o}
                      checked={values.workers === o}
                      onChange={() => set("workers", o)}
                      className="sr-only"
                    />
                    {o} workers
                  </label>
                ))}
              </div>
              {err("workers")}
            </div>

            <div className="sm:col-span-2">
              <p id="mf-duration-label" className="field-label">
                Project Duration <span className="text-gold-600">*</span>
              </p>
              <div
                role="radiogroup"
                aria-labelledby="mf-duration-label"
                aria-describedby={errors.duration ? "mf-duration-error" : undefined}
                className="grid grid-cols-3 gap-2.5"
              >
                {durationOptions.map((o, i) => (
                  <label key={o} className={pill}>
                    <input
                      type="radio"
                      name="duration"
                      id={i === 0 ? "mf-duration" : undefined}
                      value={o}
                      checked={values.duration === o}
                      onChange={() => set("duration", o)}
                      className="sr-only"
                    />
                    {o}
                  </label>
                ))}
              </div>
              {err("duration")}
            </div>
          </Step>

          <Step n={3} icon={<Globe className="h-4 w-4" aria-hidden="true" />} title="Workforce Preference">
            <div className="sm:col-span-2">
              <p id="mf-nat-label" className="field-label">
                Preferred Nationality <span className="font-normal text-body">(select one or more)</span>
              </p>
              <div role="group" aria-labelledby="mf-nat-label" className="flex flex-wrap gap-2.5">
                {nationalityOptions.map((n) => (
                  <label key={n} className={pill}>
                    <input
                      type="checkbox"
                      value={n}
                      checked={values.nationalities.includes(n)}
                      onChange={() => toggleNationality(n)}
                      className="sr-only"
                    />
                    {n}
                  </label>
                ))}
              </div>
            </div>
          </Step>

          <div className="flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-relaxed text-body sm:max-w-xs">
              Your details are only used to prepare your quote. We respond 24/7.
            </p>
            <button type="submit" className={buttonClass("gold", "lg", "w-full sm:w-auto")}>
              Get Instant Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
