import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/components/ui/BrandIcons";
import ImageBanner from "@/components/ui/ImageBanner";
import Photo from "@/components/ui/Photo";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Doha Office, Phone & WhatsApp",
  description:
    "Contact Teravex Contracting & Services W.L.L in Doha, Qatar. Call or WhatsApp us 24/7, email info@teravexservices.com, or send a message.",
  alternates: { canonical: "/contact/" },
};

const cards = [
  {
    title: "Visit Our Office",
    detail: `${site.address.line1}, ${site.address.line2}`,
    Icon: MapPin,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`,
  },
  {
    title: "Call Us",
    detail: site.phoneDisplay,
    Icon: Phone,
    href: `tel:${site.phoneHref}`,
  },
  {
    title: "WhatsApp",
    detail: site.phoneDisplay,
    Icon: WhatsAppIcon,
    href: whatsappLink("Hello Teravex, I have an enquiry."),
  },
  {
    title: "Email Us",
    detail: site.email,
    Icon: Mail,
    href: `mailto:${site.email}`,
  },
];

const socials = [
  { label: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedinIcon },
  { label: "Telegram", href: site.social.telegram, Icon: TelegramIcon },
];

export default function ContactPage() {
  return (
    <>
      <ImageBanner
        src="/banners/contact"
        alt="Two construction workers in safety gear shaking hands"
        title="Contact Us"
        focus="50% 35%"
      />

      {/* Contact cards */}
      <section className="relative z-10 -mt-10">
        <div className="container-x">
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map(({ title, detail, Icon, href }, i) => {
              const external = href.startsWith("http");
              return (
                <li
                  key={title}
                  data-reveal
                  style={
                    { "--reveal-delay": `${i * 80}ms` } as React.CSSProperties
                  }
                >
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex h-full items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-card-hover"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold-300 transition-colors group-hover:bg-gold-gradient group-hover:text-navy-950">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0 leading-tight">
                      <span className="block text-sm font-bold text-navy-900">
                        {title}
                      </span>
                      <span className="mt-0.5 block truncate text-[0.8rem] text-body">
                        {detail}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Form + map */}
      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div
            data-reveal
            className="rounded-[2rem] border border-line bg-white p-6 shadow-card sm:p-10"
          >
            <span className="eyebrow">Send a Message</span>
            <h2 className="mb-8 mt-3 text-2xl font-extrabold sm:text-3xl">
              How Can We Help?
            </h2>
            <ContactForm />
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            className="flex flex-col gap-6"
          >
            <div className="relative min-h-[22rem] flex-1 overflow-hidden rounded-[2rem] border border-line bg-surface shadow-card">
              <iframe
                title="Teravex office location — Doha, Qatar"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&z=12&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 grayscale-[35%]"
              />
              <div className="pointer-events-none absolute right-4 top-4 flex items-center gap-3 rounded-2xl bg-navy-950/90 p-3 pr-4 text-white shadow-float backdrop-blur">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gold-gradient text-navy-950">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-sm leading-tight">
                  <span className="block font-bold">Teravex HQ</span>
                  <span className="text-white/60">Doha, State of Qatar</span>
                </span>
              </div>
            </div>

            <div className="relative isolate overflow-hidden rounded-[2rem] bg-navy-950 p-6 text-white sm:p-8">
              <Photo
                name="support-team"
                alt=""
                sizes="(min-width: 1024px) 40vw, 100vw"
                style={{ objectPosition: "50% 30%" }}
                className="absolute inset-0 -z-10 h-full w-full opacity-40"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/50"
              />
              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <Clock
                    className="h-6 w-6 shrink-0 text-gold-300"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-bold">24/7 Rapid Deployment Support</p>
                    <p className="text-sm text-white/60">
                      Follow us for updates
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/75 transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:bg-gold-400 hover:text-navy-950"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
