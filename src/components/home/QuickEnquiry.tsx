import { Clock, Mail, Phone } from "lucide-react";
import QuickEnquiryForm from "@/components/forms/QuickEnquiryForm";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import Photo from "@/components/ui/Photo";
import { site, whatsappLink } from "@/lib/site";

const channels = [
  {
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: whatsappLink("Hello Teravex, I would like to discuss a manpower requirement."),
    Icon: WhatsAppIcon,
    external: true,
  },
  { label: "Call 24/7", value: site.phoneDisplay, href: `tel:${site.phoneHref}`, Icon: Phone, external: false },
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: Mail, external: false },
];

/** Quick enquiry — support-team photo card + contact channels beside the quote form (no background image). */
export default function QuickEnquiry() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-24 lg:py-32">
      {/* Soft brand glows only */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-maroon-600/35 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[30rem] w-[30rem] rounded-full bg-gold-500/15 blur-3xl" />
      </div>

      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_28rem] lg:gap-16">
        <div data-reveal>
          <span className="eyebrow eyebrow-light">Quick Enquiry</span>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl lg:text-5xl">
            Need Workers? <span className="text-gradient-gold">Get a Quote in Minutes.</span>
          </h2>

          {/* Photo card */}
          <figure className="relative isolate mt-8 aspect-[16/10] overflow-hidden rounded-[1.75rem] bg-navy-900 shadow-float ring-1 ring-white/10 sm:aspect-[16/9]">
            <Photo
              name="support-team"
              alt="Teravex support team with headsets, ready to help"
              sizes="(min-width: 1024px) 45vw, 100vw"
              style={{ objectPosition: "50% 30%" }}
              className="absolute inset-0 -z-10 h-full w-full"
            />
            <figcaption className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-navy-950/65 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md sm:left-5 sm:top-5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Online now
              <Clock className="ml-1 h-3.5 w-3.5 text-gold-300" aria-hidden="true" />
              24/7
            </figcaption>
          </figure>

          {/* Contact channels */}
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {channels.map(({ label, value, href, Icon, external }, i) => (
              <li key={label} className={i === 2 ? "sm:col-span-2" : undefined}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex h-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-3 transition-all hover:border-gold-400/50 hover:bg-white/[0.08]"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold-gradient text-navy-950">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 leading-tight">
                    <span className="block text-[0.7rem] font-medium uppercase tracking-wider text-white/50">{label}</span>
                    <span className="block truncate text-sm font-semibold text-white group-hover:text-gold-200">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          data-reveal
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          className="rounded-[2rem] bg-white p-6 shadow-float sm:p-8"
        >
          <h3 className="text-xl font-extrabold">Quick Quote Request</h3>
          <p className="mb-6 mt-1 text-sm text-body">4 quick fields — then send it to us on WhatsApp or email.</p>
          <QuickEnquiryForm />
        </div>
      </div>
    </section>
  );
}
