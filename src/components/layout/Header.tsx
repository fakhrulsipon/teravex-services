"use client";

import { ArrowRight, ChevronDown, Clock, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TelegramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import { buttonClass } from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { services } from "@/data/services";
import { nav, site, whatsappLink } from "@/lib/site";

const normalize = (p: string) => (p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p);

const socials = [
  { label: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedinIcon },
  { label: "Telegram", href: site.social.telegram, Icon: TelegramIcon },
];

export default function Header() {
  const pathname = normalize(usePathname() || "/");
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const closeAll = () => {
    setMegaOpen(false);
    setMobileOpen(false);
  };

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const navLinkCls = (active: boolean) =>
    `relative rounded-full px-4 py-2 text-[0.92rem] font-medium transition-colors ${
      active ? "text-white" : "text-white/70 hover:text-white"
    } after:absolute after:bottom-0 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-gold-400 after:transition-opacity ${
      active ? "after:opacity-100" : "after:opacity-0"
    }`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          scrolled || megaOpen
            ? "bg-navy-950/88 shadow-[0_12px_40px_-20px_rgb(0_0_0/0.7)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        {/* Top info bar (desktop) */}
        <div
          className={`hidden overflow-hidden transition-all duration-300 lg:block ${
            scrolled ? "max-h-0 opacity-0" : "max-h-12 border-b border-white/10 opacity-100"
          }`}
        >
          <div className="container-x flex h-10 items-center justify-between text-[0.8rem] text-white/60">
            <div className="flex items-center gap-6">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
                {site.address.line1}, {site.address.line2}
              </span>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-gold-300">
                <Mail className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
                {site.email}
              </a>
              <a href={`tel:${site.phoneHref}`} className="inline-flex items-center gap-2 transition-colors hover:text-gold-300">
                <Phone className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
                {site.phoneDisplay}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-gold-400" aria-hidden="true" />
                24/7 Rapid Deployment Support
              </span>
              <span className="h-4 w-px bg-white/15" aria-hidden="true" />
              <div className="flex items-center gap-1">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="grid h-7 w-7 place-items-center rounded-full transition-colors hover:bg-white/10 hover:text-gold-300"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main bar */}
        <div className="container-x">
          <div
            className={`relative flex items-stretch justify-between transition-[height] duration-300 ${
              scrolled ? "h-16" : "h-20"
            }`}
          >
            <div className="flex items-center">
              <Logo />
            </div>

            <nav aria-label="Main" className="hidden items-stretch lg:flex">
              {nav.map((item) =>
                item.href === "/services" ? (
                  <div
                    key={item.href}
                    className="flex items-center"
                    onMouseEnter={() => setMegaOpen(true)}
                    onMouseLeave={() => setMegaOpen(false)}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setMegaOpen(false);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Escape") setMegaOpen(false);
                    }}
                  >
                    <Link href="/services" onClick={closeAll} className={`${navLinkCls(isActive("/services"))} pr-1`}>
                      Services
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle services menu"
                      aria-expanded={megaOpen}
                      aria-controls="mega-menu"
                      onClick={() => setMegaOpen((v) => !v)}
                      className="mr-1 grid h-8 w-7 place-items-center rounded-full text-white/70 hover:text-white"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Mega menu */}
                    <div
                      id="mega-menu"
                      className={`absolute inset-x-0 top-full pt-3 transition-all duration-300 ${
                        megaOpen
                          ? "visible translate-y-0 opacity-100"
                          : "pointer-events-none invisible translate-y-2 opacity-0"
                      }`}
                    >
                      <div className="mx-auto grid max-w-5xl grid-cols-[1fr_17rem] overflow-hidden rounded-3xl border border-white/10 bg-navy-900/97 shadow-float backdrop-blur-xl">
                        <div className="grid grid-cols-2 gap-1 p-4">
                          {services.map((s) => (
                            <Link
                              key={s.slug}
                              href={`/services#${s.slug}`}
                              onClick={closeAll}
                              className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-white/[0.06]"
                            >
                              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-gold-300 transition-colors group-hover:border-gold-400/40 group-hover:bg-gold-400 group-hover:text-navy-950">
                                <s.icon className="h-5 w-5" aria-hidden="true" />
                              </span>
                              <span>
                                <span className="block text-sm font-semibold text-white transition-colors group-hover:text-gold-200">
                                  {s.title}
                                </span>
                                <span className="mt-0.5 block text-xs leading-snug text-white/50">{s.short}</span>
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="relative flex flex-col justify-between overflow-hidden bg-gold-gradient p-6 text-navy-950">
                          <div aria-hidden="true" className="absolute inset-0 bg-pattern-star-dark opacity-60" />
                          <div className="relative">
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-navy-900/70">
                              5,000+ Workforce
                            </p>
                            <p className="mt-2 text-xl font-extrabold leading-tight">
                              Need skilled workers deployed fast?
                            </p>
                            <p className="mt-2 text-sm text-navy-900/75">
                              Tell us the roles and headcount — we&apos;ll handle sourcing, visas and onboarding.
                            </p>
                          </div>
                          <div className="relative mt-6 flex flex-col gap-2">
                            <Link href="/request-manpower" onClick={closeAll} className={buttonClass("navy", "md")}>
                              Request Manpower <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </Link>
                            <Link
                              href="/services#directory"
                              onClick={closeAll}
                              className="text-center text-sm font-semibold underline-offset-4 hover:underline"
                            >
                              Browse job directory
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={item.href} className="flex items-center">
                    <Link href={item.href} onClick={closeAll} className={navLinkCls(isActive(item.href))}>
                      {item.label}
                    </Link>
                  </div>
                ),
              )}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <Link href="/request-manpower" onClick={closeAll} className={buttonClass("gold", "md")}>
                  Request Manpower <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-gold-300/60 lg:hidden"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer — kept outside <header> so `backdrop-filter` doesn't trap the fixed layer */}
      <div
        id="mobile-menu"
        inert={!mobileOpen}
        className={`fixed inset-0 z-[60] transition-[visibility] duration-300 lg:hidden ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-navy-950/70 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={`absolute right-0 top-0 flex h-full w-[min(88vw,24rem)] flex-col overflow-y-auto bg-navy-950 shadow-float transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-pattern-star opacity-60 mask-fade-b" />
          <div className="relative flex h-20 items-center justify-between border-b border-white/10 px-5">
            <Logo id="drawer" />
            <button
              ref={closeBtn}
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white hover:border-gold-300/60"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="relative flex-1 px-5 py-6">
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.href}>
                  {item.href === "/services" ? (
                    <div>
                      <div className="flex items-center justify-between">
                        <Link
                          href="/services"
                          onClick={closeAll}
                          className={`block flex-1 rounded-xl px-3 py-3 text-lg font-semibold ${
                            isActive("/services") ? "text-gold-300" : "text-white"
                          }`}
                        >
                          Services
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileServices((v) => !v)}
                          aria-expanded={mobileServices}
                          aria-label="Show all services"
                          className="grid h-10 w-10 place-items-center rounded-full text-white/70 hover:bg-white/5"
                        >
                          <ChevronDown
                            className={`h-5 w-5 transition-transform ${mobileServices ? "rotate-180" : ""}`}
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                      <div
                        className={`grid transition-[grid-template-rows] duration-300 ${
                          mobileServices ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <ul className="overflow-hidden">
                          {services.map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={`/services#${s.slug}`}
                                onClick={closeAll}
                                className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[0.92rem] text-white/70 hover:bg-white/5 hover:text-white"
                              >
                                <s.icon className="h-4 w-4 text-gold-400" aria-hidden="true" />
                                {s.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      className={`block rounded-xl px-3 py-3 text-lg font-semibold ${
                        isActive(item.href) ? "text-gold-300" : "text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3">
              <Link href="/request-manpower" onClick={closeAll} className={buttonClass("gold", "lg")}>
                Request Manpower <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={whatsappLink("Hello Teravex, I would like to discuss a manpower requirement.")}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClass("outline-light", "lg")}
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" /> Chat on WhatsApp
              </a>
            </div>
          </nav>

          <div className="relative space-y-3 border-t border-white/10 px-5 py-6 text-sm text-white/60">
            <a href={`tel:${site.phoneHref}`} className="flex items-center gap-3 hover:text-white">
              <Phone className="h-4 w-4 text-gold-400" aria-hidden="true" /> {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-white">
              <Mail className="h-4 w-4 text-gold-400" aria-hidden="true" /> {site.email}
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-gold-400" aria-hidden="true" /> {site.address.line1},{" "}
              {site.address.line2}
            </p>
            <div className="flex gap-2 pt-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 hover:border-gold-300/60 hover:text-gold-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
