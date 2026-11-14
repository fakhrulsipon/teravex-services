"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import FormSuccess from "@/components/forms/FormSuccess";
import { buttonClass } from "@/components/ui/Button";
import { focusFirstError, isEmail, isPhone } from "@/lib/forms";

type Values = { name: string; email: string; phone: string; subject: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

const subjects = ["General Enquiry", "Manpower Request", "Partnership", "Other"];
const initial: Values = { name: "", email: "", phone: "", subject: subjects[0], message: "" };

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!isEmail(v.email)) e.email = "Please enter a valid email address.";
  if (v.phone.trim() && !isPhone(v.phone)) e.phone = "Please enter a valid phone number.";
  if (v.message.trim().length < 10) e.message = "Please write a short message (10+ characters).";
  return e;
}

export default function ContactForm() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof Values, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    const bad = (["name", "email", "phone", "message"] as const).filter((k) => errs[k]);
    if (bad.length) return focusFirstError(bad.map((k) => `cf-${k}`));
    setSubmitted(true);
  };

  const fp = (key: keyof Values) => ({
    id: `cf-${key}`,
    name: key,
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `cf-${key}-error` : undefined,
  });
  const err = (k: keyof Values) =>
    errors[k] ? (
      <p id={`cf-${k}-error`} className="field-error">
        {errors[k]}
      </p>
    ) : null;

  if (submitted) {
    return (
      <FormSuccess
        name={values.name}
        title={`${values.subject} — Teravex Website`}
        onEdit={() => setSubmitted(false)}
        rows={[
          { label: "Name", value: values.name },
          { label: "Email", value: values.email },
          { label: "Phone", value: values.phone },
          { label: "Subject", value: values.subject },
          { label: "Message", value: values.message },
        ]}
      />
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="cf-name" className="field-label">
          Full Name <span className="text-gold-600">*</span>
        </label>
        <input
          {...fp("name")}
          className="field"
          autoComplete="name"
          placeholder="Your name"
          value={values.name}
          onChange={(e) => set("name", e.target.value)}
        />
        {err("name")}
      </div>
      <div>
        <label htmlFor="cf-email" className="field-label">
          Email Address <span className="text-gold-600">*</span>
        </label>
        <input
          {...fp("email")}
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
      <div>
        <label htmlFor="cf-phone" className="field-label">
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
      <div>
        <label htmlFor="cf-subject" className="field-label">
          Subject
        </label>
        <select {...fp("subject")} className="field" value={values.subject} onChange={(e) => set("subject", e.target.value)}>
          {subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="cf-message" className="field-label">
          Message <span className="text-gold-600">*</span>
        </label>
        <textarea
          {...fp("message")}
          rows={5}
          className="field resize-y"
          placeholder="How can we help you?"
          value={values.message}
          onChange={(e) => set("message", e.target.value)}
        />
        {err("message")}
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className={buttonClass("gold", "lg", "w-full sm:w-auto")}>
          Send Message <Send className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
