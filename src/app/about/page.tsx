import {
  Award,
  BadgeCheck,
  Building2,
  Clock,
  Eye,
  FileCheck2,
  Globe,
  HardHat,
  HeartHandshake,
  Layers,
  Scale,
  ShieldCheck,
  Stethoscope,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Clients from "@/components/sections/Clients";
import CtaBand from "@/components/sections/CtaBand";
import Nationalities from "@/components/sections/Nationalities";
import Counter from "@/components/ui/Counter";
import ImageBanner from "@/components/ui/ImageBanner";
import Photo from "@/components/ui/Photo";
import SectionHeading from "@/components/ui/SectionHeading";
import { stats } from "@/data/company";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Qatar Manpower & Contracting Partner",
  description:
    "Learn about Teravex Contracting & Services W.L.L — a Doha-based manpower supply, contracting and overseas recruitment company with a 5,000–6,000+ workforce, fully compliant with Qatar Labour Law.",
  alternates: { canonical: "/about/" },
};

const values = [
  { title: "Integrity", text: "Transparent terms and honest commitments.", Icon: Scale },
  { title: "Compliance", text: "Every process aligned with Qatar law.", Icon: ShieldCheck },
  { title: "Speed", text: "Rapid mobilization, 24/7 response.", Icon: Zap },
  { title: "Care for People", text: "Respect and welfare for every worker.", Icon: HeartHandshake },
];

const compliance = [
  {
    title: "Qatar Labour Law Compliant",
    text: "100% compliant with Qatar Labour Law across recruitment, employment and worker welfare.",
    Icon: Scale,
  },
  {
    title: "Registered W.L.L in Qatar",
    text: `${site.name} is a registered company headquartered in Doha, State of Qatar.`,
    Icon: Building2,
  },
  {
    title: "Work Visa Processing",
    text: "Qatar work visa processing handled end-to-end through the proper official channels.",
    Icon: FileCheck2,
  },
  {
    title: "Medical Clearance",
    text: "Every overseas candidate completes medical clearance before deployment.",
    Icon: Stethoscope,
  },
  {
    title: "Trade-Tested & Certified",
    text: "Skills verified through trade testing — certified professionals for technical roles.",
    Icon: BadgeCheck,
  },
  {
    title: "HSE Standards",
    text: "Safety-certified, HSE-compliant workforce for oil & gas and construction sites.",
    Icon: HardHat,
  },
];

const reasons = [
  {
    title: "Ready Workforce Pool",
    text: "Immediate access to 5,000 – 6,000+ skilled, semi-skilled and general workers.",
    Icon: Users,
  },
  {
    title: "Rapid Deployment",
    text: "24/7 support and fast mobilization when your project can't wait.",
    Icon: Clock,
  },
  {
    title: "Multi-National Talent",
    text: "Culturally adaptable professionals from 8+ trusted source countries.",
    Icon: Globe,
  },
  {
    title: "Fully Compliant",
    text: "100% Qatar Labour Law compliant — zero compliance headaches for you.",
    Icon: ShieldCheck,
  },
  {
    title: "End-to-End Solutions",
    text: "Sourcing, trade testing, medicals, visas and onboarding under one roof.",
    Icon: Workflow,
  },
  {
    title: "Multi-Sector Expertise",
    text: "Eight service lines — from 5-star hospitality to oil & gas construction.",
    Icon: Layers,
  },
];

export default function AboutPage() {
  return (
    <>
      <ImageBanner
        src="/banners/about"
        alt="Traditional dhow boat sailing in front of the Doha skyline"
        title="About Teravex — Your Reliable Partner in Total Workforce & Contracting Solutions"
        scrollTo="who-we-are"
        scrollLabel="Scroll to who we are"
        focus="55% 60%"
      />

      {/* Who we are */}
      <section id="who-we-are" className="scroll-mt-20 py-24 lg:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div data-reveal>
            <span className="eyebrow">Who We Are</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] sm:text-4xl">
              A Premier Manpower, Contracting &amp; Recruitment Company in Qatar
            </h2>
            <p className="mt-6 text-base leading-relaxed sm:text-lg">
              Based in Doha, Qatar, <strong className="font-semibold text-navy-900">{site.name}</strong> is a premier
              manpower supply, contracting, and overseas recruitment company. With a robust pool of 5,000 to 6,000
              skilled, semi-skilled, and general workers, we bridge the gap between ambitious projects and dedicated
              talent.
            </p>
          </div>

          <div data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties} className="relative">
            <div className="relative isolate aspect-[4/3] overflow-hidden rounded-[2rem] bg-navy-950 shadow-card-hover sm:aspect-[5/4]">
              <Photo
                name="site"
                alt="Large construction site with cranes and steel frameworks"
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="absolute inset-0 -z-10 h-full w-full"
              />
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
            </div>
            <dl className="absolute -bottom-8 left-4 right-4 grid grid-cols-2 gap-3 sm:left-8 sm:right-auto sm:w-[26rem]">
              {[stats[0], stats[3]].map((st, i) => (
                <div
                  key={st.label}
                  className={`flex flex-col-reverse rounded-2xl p-4 shadow-float sm:p-5 ${i === 0 ? "bg-navy-950 text-white" : "bg-gold-gradient text-navy-950"}`}
                >
                  <dt className={`mt-1 text-xs font-semibold ${i === 0 ? "text-white/80" : "text-navy-950/80"}`}>{st.label}</dt>
                  <dd className={`text-2xl font-extrabold tracking-tight sm:text-3xl ${i === 0 ? "text-gradient-gold" : ""}`}>
                    <Counter value={st.value} suffix={st.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Vision & mission */}
      <section className="relative overflow-hidden bg-surface py-24 lg:py-32">
        <div aria-hidden="true" className="absolute inset-0 bg-pattern-star-dark mask-fade-b" />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Vision & Mission"
            title={
              <>
                Driven by Purpose, <span className="text-gold-600">Built on Trust</span>
              </>
            }
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <article
              data-reveal
              className="relative isolate flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-[2rem] bg-navy-950 p-8 text-white sm:p-10"
            >
              <Photo name="doha-sunset" alt="" sizes="(min-width: 1024px) 40vw, 100vw" className="absolute inset-0 -z-10 h-full w-full" />
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/10" />
              <div className="relative">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-gradient text-navy-950">
                  <Eye className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl font-extrabold text-white">Our Vision</h3>
                <p className="mt-3 leading-relaxed text-white/75">
                  To be Qatar&apos;s most trusted workforce partner — the first call for any project that needs
                  skilled, reliable people, delivered with integrity and speed.
                </p>
              </div>
            </article>
            <article
              data-reveal
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
              className="relative isolate flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-[2rem] bg-navy-950 p-8 text-white shadow-card sm:p-10"
            >
              <Photo name="team-plan" alt="" sizes="(min-width: 1024px) 40vw, 100vw" className="absolute inset-0 -z-10 h-full w-full" />
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/10" />
              <div className="relative">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-gradient text-navy-950">
                  <Target className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl font-extrabold text-white">Our Mission</h3>
                <p className="mt-3 leading-relaxed text-white/75">
                  To source, prepare and deploy skilled, semi-skilled and general workers quickly and ethically — in
                  full compliance with Qatar Labour Law — so our clients can focus on delivering their projects.
                </p>
              </div>
            </article>
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {values.map(({ title, text, Icon }, i) => (
              <li
                key={title}
                data-reveal
                style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
                className="rounded-3xl border border-line bg-white p-5 sm:p-6"
              >
                <Icon className="h-6 w-6 text-gold-600" aria-hidden="true" />
                <p className="mt-4 font-bold text-navy-900">{title}</p>
                <p className="mt-1 text-sm leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Compliance & licensing */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-24 lg:py-32">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <Photo name="contract" alt="" sizes="100vw" className="absolute inset-0 h-full w-full opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/60 to-navy-950/90" />
          <div className="absolute inset-0 bg-pattern-star opacity-40" />
          <div className="absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-maroon-600/45 blur-3xl" />
          <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-gold-500/15 blur-3xl" />
        </div>
        <div className="container-x">
          <SectionHeading
            dark
            eyebrow="Qatar Compliance & Licensing"
            title={
              <>
                Compliance Isn&apos;t a Checkbox — <span className="text-gradient-gold">It&apos;s Our Foundation</span>
              </>
            }
            text="Every worker we deploy is recruited, processed and managed in line with the laws and standards of the State of Qatar."
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {compliance.map(({ title, text, Icon }, i) => (
              <li
                key={title}
                data-reveal
                style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/40 hover:bg-white/[0.07] sm:p-7"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-gold-400/30 bg-gold-400/10 text-gold-300 transition-colors group-hover:bg-gold-gradient group-hover:text-navy-950">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Choose Teravex"
            title={
              <>
                Six Reasons Leading Companies <span className="text-gold-600">Choose Us</span>
              </>
            }
            text="We combine scale, speed and full compliance — so you get the right people, on time, every time."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          <figure
            data-reveal
            className="relative isolate min-h-[18rem] overflow-hidden rounded-[2rem] bg-navy-950 shadow-card-hover sm:min-h-[24rem] lg:min-h-0"
          >
            <Photo
              name="engineers-tablet"
              alt="Site engineers in hard hats coordinating with a tablet and radio"
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="absolute inset-0 -z-10 h-full w-full"
            />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-6 bottom-6 flex items-center gap-3 text-white">
              <Award className="h-6 w-6 shrink-0 text-gold-300" aria-hidden="true" />
              <span className="text-sm font-semibold">Trusted by leading names in Qatar&apos;s construction and energy sectors</span>
            </figcaption>
          </figure>
          <ul className="grid gap-4 sm:grid-cols-2">
            {reasons.map(({ title, text, Icon }, i) => (
              <li
                key={title}
                data-reveal
                style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties}
                className="group relative overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-gold-300 hover:shadow-card-hover"
              >
                <span
                  aria-hidden="true"
                  className="absolute right-6 top-5 text-5xl font-black text-navy-900/[0.05] transition-colors group-hover:text-gold-400/20"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-navy-900 text-gold-300 transition-all duration-500 group-hover:bg-gold-gradient group-hover:text-navy-950">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{text}</p>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </section>

      <Nationalities />
      <Clients />
      <CtaBand />
    </>
  );
}
