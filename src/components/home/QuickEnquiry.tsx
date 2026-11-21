import { Mail, Phone } from "lucide-react";
import QuickEnquiryForm from "@/components/forms/QuickEnquiryForm";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import Photo from "@/components/ui/Photo";
import { site, whatsappLink } from "@/lib/site";

const channels = [
  {
    label: "WhatsApp (fastest)",
    value: site.phoneDisplay,
    href: whatsappLink("Hello Teravex, I would like to discuss a manpower requirement."),
    Icon: WhatsAppIcon,
    external: true,
  },
  { label: "Call us 24/7", value: site.phoneDisplay, href: `tel:${site.phoneHref}`, Icon: Phone, external: false },
  { label: "Email us", value: site.email, href: `mailto:${site.email}`, Icon: Mail, external: false },
];

export default function QuickEnquiry() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-24 lg:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Photo name="support-team" alt="" sizes="100vw" style={{ objectPosition: "50% 30%" }} className="absolute inset-0 h-full w-full opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/75 to-navy-950/30" />
        <div className="absolute inset-0 bg-pattern-star opacity-40" />
        <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-maroon-600/40 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[30rem] w-[30rem] rounded-full bg-gold-500/20 blur-3xl" />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_28rem] lg:gap-20">
        <div data-reveal>
          <span className="eyebrow eyebrow-light">Quick Enquiry</span>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl lg:text-5xl">
            Need Workers? <span className="text-gradient-gold">Get a Quote in Minutes.</span>
          </h2>

          <ul className="mt-8 grid gap-3 sm:max-w-md">
            {channels.map(({ label, value, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all hover:border-gold-400/50 hover:bg-white/[0.07]"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold-gradient text-navy-950">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-medium uppercase tracking-wider text-white/50">{label}</span>
                    <span className="block truncate font-bold text-white group-hover:text-gold-200">{value}</span>
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
