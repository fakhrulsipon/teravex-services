import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CalendarCheck,
  Code2,
  Gauge,
  LayoutDashboard,
  LayoutTemplate,
  Lightbulb,
  LifeBuoy,
  Mail,
  PenTool,
  Rocket,
  ServerCog,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  TabletSmartphone,
  type LucideIcon,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { LinkButton } from "@/components/ui/Button";
import ImageBanner from "@/components/ui/ImageBanner";
import Photo from "@/components/ui/Photo";
import SectionHeading from "@/components/ui/SectionHeading";
import { serviceBySlug, type Service } from "@/data/services";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Website & Mobile App Development in Qatar",
  description:
    "Teravex builds modern business websites, e-commerce stores and Android & iOS mobile apps for companies in Qatar — designed, developed, launched and supported.",
  alternates: { canonical: "/digital-solutions/" },
};

type Feature = { title: string; Icon: LucideIcon };

type Showcase = {
  service: Service;
  num: string;
  main: { name: string; alt: string; focus?: string };
  inset: { name: string; alt: string; focus?: string };
  chip: { title: string; sub: string; Icon: LucideIcon };
  features: Feature[];
  cta: string;
};

const web = serviceBySlug("web-development")!;
const app = serviceBySlug("mobile-app")!;

const showcases: Showcase[] = [
  {
    service: web,
    num: "01",
    main: {
      name: "web-design-studio",
      alt: "Designer sketching a website layout on a tablet next to a monitor full of code",
    },
    inset: {
      name: "web-coding",
      alt: "Developer writing website code on a laptop",
    },
    chip: {
      title: "Fast & Responsive",
      sub: "Looks great on every screen",
      Icon: Gauge,
    },
    features: [
      { title: "Corporate Websites", Icon: Building2 },
      { title: "E-commerce Stores", Icon: ShoppingCart },
      { title: "Landing Pages", Icon: LayoutTemplate },
      { title: "Web Portals & Dashboards", Icon: LayoutDashboard },
      { title: "SEO-Ready Build", Icon: BarChart3 },
      { title: "Hosting & Maintenance", Icon: ServerCog },
    ],
    cta: "Hello Teravex, I'd like a quote for a new website.",
  },
  {
    service: app,
    num: "02",
    main: {
      name: "app-design",
      alt: "Designer testing a mobile app prototype over hand-drawn wireframes",
    },
    inset: {
      name: "mobile-app",
      alt: "Smartphone running a colourful business app beside a laptop",
    },
    chip: {
      title: "Android & iOS",
      sub: "Published on the app stores",
      Icon: Smartphone,
    },
    features: [
      { title: "Android Apps", Icon: Smartphone },
      { title: "iOS Apps", Icon: TabletSmartphone },
      { title: "Booking & Delivery Apps", Icon: CalendarCheck },
      { title: "E-commerce Apps", Icon: ShoppingBag },
      { title: "UI/UX Design", Icon: PenTool },
      { title: "Updates & Support", Icon: LifeBuoy },
    ],
    cta: "Hello Teravex, I'd like a quote for a mobile app.",
  },
];

const steps: Feature[] = [
  { title: "Discover", Icon: Lightbulb },
  { title: "Design", Icon: PenTool },
  { title: "Develop", Icon: Code2 },
  { title: "Launch & Support", Icon: Rocket },
];

const delay = (ms: number) =>
  ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

function ShowcaseSection({ s, flip }: { s: Showcase; flip: boolean }) {
  const { service } = s;
  return (
    <section
      id={service.slug}
      className={`relative scroll-mt-28 overflow-hidden py-20 lg:py-28 ${flip ? "bg-white" : "bg-surface"}`}
    >
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Photo collage */}
        <div
          data-reveal
          className={`relative pb-12 sm:pb-16 ${flip ? "lg:order-2" : ""}`}
        >
          <figure className="relative isolate aspect-[4/3] overflow-hidden rounded-[2rem] bg-navy-950 shadow-card-hover ring-1 ring-black/5 lg:aspect-[5/4]">
            <Photo
              name={s.main.name}
              alt={s.main.alt}
              style={{ objectPosition: s.main.focus }}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="absolute inset-0 -z-10 h-full w-full"
            />
            <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-navy-950/60 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 backdrop-blur-md">
              Service {s.num}
            </span>
          </figure>

          <figure
            className={`absolute bottom-0 isolate aspect-[4/3] w-[44%] overflow-hidden rounded-[1.5rem] border-[6px] border-white bg-navy-950 shadow-float ${
              flip ? "left-0 sm:-left-4" : "right-0 sm:-right-4"
            }`}
          >
            <Photo
              name={s.inset.name}
              alt={s.inset.alt}
              style={{ objectPosition: s.inset.focus }}
              sizes="(min-width: 1024px) 20vw, 45vw"
              className="absolute inset-0 -z-10 h-full w-full"
            />
          </figure>

          <div
            className={`absolute bottom-6 hidden items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-card-hover sm:flex ${
              flip ? "right-2" : "left-2"
            }`}
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-gradient text-navy-950 shadow-gold">
              <s.chip.Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold text-navy-900">
                {s.chip.title}
              </span>
              <span className="block text-xs text-body">{s.chip.sub}</span>
            </span>
          </div>
        </div>

        {/* Copy */}
        <div>
          <div data-reveal>
            <span className="eyebrow">{service.label}</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] sm:text-4xl lg:text-[2.6rem]">
              {service.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed sm:text-lg">
              {service.short}
            </p>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {s.features.map(({ title, Icon }, i) => (
              <li
                key={title}
                data-reveal
                style={delay((i % 2) * 70 + Math.floor(i / 2) * 50)}
                className="group flex items-center gap-3 rounded-2xl border border-line bg-white p-3.5 shadow-card transition-colors duration-300 hover:border-gold-300"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-950 text-gold-300 transition-colors duration-300 group-hover:bg-gold-gradient group-hover:text-navy-950">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-[0.95rem] font-semibold text-navy-900">
                  {title}
                </span>
              </li>
            ))}
          </ul>

          <div
            data-reveal
            style={delay(200)}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <LinkButton href={whatsappLink(s.cta)} variant="whatsapp" size="lg">
              <WhatsAppIcon className="h-5 w-5" /> Get a Free Quote
            </LinkButton>
            <LinkButton href="/contact" variant="outline-dark" size="lg">
              <Mail className="h-4 w-4" /> Contact Us
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DigitalSolutionsPage() {
  return (
    <>
      <ImageBanner
        src="/banners/digital"
        alt="Software developer coding on a dual-monitor setup in a modern office"
        title="Web & App Development"
        focus="50% 45%"
      />

      {/* Overview — two big photo cards */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Digital Solutions"
            title={
              <>
                Websites &amp; Apps That{" "}
                <span className="text-gold-600">Grow Your Business</span>
              </>
            }
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {showcases.map((s, i) => (
              <Link
                key={s.service.slug}
                href={`#${s.service.slug}`}
                data-reveal
                style={delay(i * 100)}
                className="group flex flex-col rounded-[2rem] border border-line bg-white p-2.5 shadow-card transition-colors duration-300 hover:border-gold-300 sm:p-3"
              >
                <span className="relative isolate block aspect-[16/10] overflow-hidden rounded-[1.6rem] bg-navy-950">
                  <Photo
                    name={s.service.slug}
                    alt={s.service.photoAlt}
                    style={{ objectPosition: s.service.photoFocus }}
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="absolute inset-0 -z-10 h-full w-full"
                  />
                  <span className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-2xl bg-gold-gradient text-navy-950 shadow-gold sm:left-5 sm:top-5 sm:h-14 sm:w-14">
                    <s.service.icon
                      className="h-6 w-6 sm:h-7 sm:w-7"
                      aria-hidden="true"
                    />
                  </span>
                </span>
                <span className="flex items-center justify-between gap-4 px-3 pb-2 pt-5 sm:px-4">
                  <span>
                    <span className="block text-xl font-extrabold text-navy-900 sm:text-2xl">
                      {s.service.label}
                    </span>
                    <span className="mt-1 block text-sm text-body sm:text-[0.95rem]">
                      {s.service.short}
                    </span>
                  </span>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-gold-600 transition-colors duration-300 group-hover:border-gold-400 group-hover:bg-gold-gradient group-hover:text-navy-950">
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {showcases.map((s, i) => (
        <ShowcaseSection key={s.service.slug} s={s} flip={i % 2 === 1} />
      ))}

      {/* Process */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-20 lg:py-28">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-pattern-star opacity-40" />
          <div className="absolute -left-32 top-0 h-[26rem] w-[26rem] rounded-full bg-maroon-600/30 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-gold-500/15 blur-3xl" />
        </div>

        <div className="container-x">
          <SectionHeading
            dark
            eyebrow="How We Work"
            title={
              <>
                From Idea to <span className="text-gradient-gold">Launch</span>
              </>
            }
          />

          <ol className="relative mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* connecting line behind the step badges (desktop) */}
            <span
              aria-hidden="true"
              className="absolute left-[12.5%] right-[12.5%] top-10 hidden h-px bg-linear-to-r from-gold-400/0 via-gold-400/60 to-gold-400/0 lg:block"
            />
            {steps.map(({ title, Icon }, i) => (
              <li
                key={title}
                data-reveal
                style={delay(i * 110)}
                className="relative flex flex-col items-center rounded-3xl border border-white/10 bg-white/[0.04] px-5 pb-7 pt-5 text-center backdrop-blur-sm transition-colors duration-300 hover:border-gold-400/50"
              >
                <span className="relative grid h-[4.25rem] w-[4.25rem] place-items-center rounded-2xl bg-gold-gradient text-navy-950 shadow-gold ring-8 ring-navy-950">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <span className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-300">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-1.5 text-lg font-bold text-white">
                  {title}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
