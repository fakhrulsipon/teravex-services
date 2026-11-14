import { CheckCircle2, Mail, PencilLine } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { buttonClass } from "@/components/ui/Button";
import { buildMessage, type SummaryRow } from "@/lib/forms";
import { mailtoLink, whatsappLink } from "@/lib/site";

type Props = {
  name: string;
  title: string;
  rows: SummaryRow[];
  onEdit: () => void;
  compact?: boolean;
};

/**
 * Frontend-only hand-off: the request is sent via WhatsApp or email, pre-filled.
 * (Swap for an API call / form service later if a backend is added.)
 */
export default function FormSuccess({ name, title, rows, onEdit, compact }: Props) {
  const message = buildMessage(title, rows);
  return (
    <div role="status" aria-live="polite" className="animate-fade-up">
      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
          <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <h3 className="text-xl font-extrabold text-navy-900 sm:text-2xl">
            Thank you{name ? `, ${name.split(" ")[0]}` : ""}! One last step.
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-body sm:text-base">
            Send your details to our team in one tap — we&apos;ll get back to you with a tailored quote.
          </p>
        </div>
      </div>

      <div className={`mt-6 grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass("whatsapp", "lg")}
        >
          <WhatsAppIcon className="h-5 w-5" /> Send via WhatsApp
        </a>
        <a href={mailtoLink(title, message.replace(/\*/g, ""))} className={buttonClass("navy", "lg")}>
          <Mail className="h-5 w-5" aria-hidden="true" /> Send via Email
        </a>
      </div>

      {!compact ? (
        <dl className="mt-8 grid gap-x-6 gap-y-4 rounded-2xl border border-line bg-surface p-5 text-sm sm:grid-cols-2 sm:p-6">
          {rows
            .filter((r) => r.value.trim())
            .map((r) => (
              <div key={r.label}>
                <dt className="text-xs font-semibold uppercase tracking-wider text-body/80">{r.label}</dt>
                <dd className="mt-1 break-words font-semibold text-navy-900">{r.value}</dd>
              </div>
            ))}
        </dl>
      ) : null}

      <button
        type="button"
        onClick={onEdit}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 underline-offset-4 hover:text-gold-700 hover:underline"
      >
        <PencilLine className="h-4 w-4" aria-hidden="true" /> Edit details
      </button>
    </div>
  );
}
