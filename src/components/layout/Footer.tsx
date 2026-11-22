import { ArrowUpRight, Clock, Globe, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TelegramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import Logo from "@/components/ui/Logo";
import { serviceHref, services } from "@/data/services";
import { site, whatsappLink } from "@/lib/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "Job Directory", href: "/services#directory" },
  { label: "Request Manpower", href: "/request-manpower" },
  { label: "Contact Us", href: "/contact" },
];

const socials = [
  { label: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedinIcon },
  { label: "Telegram", href: site.social.telegram, Icon: TelegramIcon },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-navy-950 text-white/65">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-pattern-star opacity-70" />
        <div className="absolute -top-40 left-1/2 h-80 w-[48rem] -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
      </div>

      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-12 py-16 lg:grid-cols-[1.35fr_0.8fr_1fr_1.15fr] lg:gap-12 lg:py-20">
        <div className="col-span-2 sm:col-span-1">
          <Logo variant="full" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            A premier manpower supply, contracting and overseas recruitment company based in Doha, delivering 5,000+
            skilled, semi-skilled and general workers across Qatar.
          </p>
          <div className="mt-6 flex gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:bg-gold-400 hover:text-navy-950"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="group inline-flex items-center gap-1.5 transition-colors hover:text-gold-300">
                  {l.label}
                  <ArrowUpRight
                    className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Our Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={serviceHref(s)} className="transition-colors hover:text-gold-300">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">Get in Touch</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              <span>
                {site.name}
                <br />
                {site.address.line1}, {site.address.line2}
              </span>
            </li>
            <li>
              <a href={`tel:${site.phoneHref}`} className="flex gap-3 transition-colors hover:text-gold-300">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 transition-colors hover:text-gold-300"
              >
                <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                WhatsApp: {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex gap-3 break-all transition-colors hover:text-gold-300">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
              24/7 Rapid Deployment Support
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-center text-xs sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-2">
            <Globe className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
            {site.domain}
            <span className="text-white/30">·</span>
            Doha, State of Qatar
          </p>
        </div>
      </div>
    </footer>
  );
}
