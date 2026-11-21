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
import Nationalities from "@/components/sections/Nationalities";
import Counter from "@/components/ui/Counter";
import ImageBanner from "@/components/ui/ImageBanner";
import Photo from "@/components/ui/Photo";
import SectionHeading from "@/components/ui/SectionHeading";
import { stats } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us — Qatar Manpower & Contracting Partner",
  description:
    "Learn about Teravex Contracting & Services W.L.L — a Doha-based manpower supply, contracting and overseas recruitment company with a 5,000–6,000+ workforce, fully compliant with Qatar Labour Law.",
  alternates: { canonical: "/about/" },
};

const values = [
  { title: "Integrity", Icon: Scale },
  { title: "Compliance", Icon: ShieldCheck },
  { title: "Speed", Icon: Zap },
  { title: "Care for People", Icon: HeartHandshake },
];

const purpose = [
  {
    title: "Our Vision",
    text: "To be Qatar's most trusted workforce partner.",
    Icon: Eye,
    photo: "refinery-night",
    alt: "Gas processing plant illuminated at dusk",
  },
  {
    title: "Our Mission",
    text: "Deploy skilled workers fast, ethically and fully compliant.",
    Icon: Target,
    photo: "construction",
    alt: "Construction workers in hard hats on a building site",
  },
];

const compliance = [
  { title: "Qatar Labour Law Compliant", Icon: Scale },
  { title: "Registered W.L.L in Qatar", Icon: Building2 },
  { title: "Work Visa Processing", Icon: FileCheck2 },
  { title: "Medical Clearance", Icon: Stethoscope },
  { title: "Trade-Tested & Certified", Icon: BadgeCheck },
  { title: "HSE Standards", Icon: HardHat },
];

const reasons = [
  { title: "Ready Workforce Pool", Icon: Users },
  { title: "Rapid Deployment", Icon: Clock },
  { title: "Multi-National Talent", Icon: Globe },
  { title: "Fully Compliant", Icon: ShieldCheck },
  { title: "End-to-End Solutions", Icon: Workflow },
  { title: "Multi-Sector Expertise", Icon: Layers },
];

const delay = (ms: number) => ({ "--reveal-delay": `${ms}ms` }) as React.CSSProperties;

export default function AboutPage() {
  return (
    <>
      <ImageBanner
        src="/banners/about"
        alt="Team of construction workers in hard hats and safety vests on site"
        title="About Us"
        focus="50% 66%"
      />

      {/* Who we are */}
      <section id="who-we-are" className="scroll-mt-20 py-24 lg:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div data-reveal>
            <span className="eyebrow">Who We Are</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] sm:text-4xl">
              Qatar&apos;s Trusted <span className="text-gold-600">Manpower Partner</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed sm:text-lg">
              Manpower supply, contracting &amp; overseas recruitment from Doha — 5,000+ workers ready to deploy.
            </p>
          </div>

          <div data-reveal style={delay(120)} className="relative">
            <div className="relative isolate aspect-[4/3] overflow-hidden rounded-[2rem] bg-navy-950 shadow-card-hover sm:aspect-[5/4]">
              <Photo
                name="site"
                alt="Large construction site with cranes and steel frameworks"
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="absolute inset-0 -z-10 h-full w-full"
              />
            </div>
            <dl className="absolute -bottom-8 left-4 right-4 grid grid-cols-2 gap-3 sm:left-8 sm:right-auto sm:w-[26rem]">
              {[stats[0], stats[3]].map((st, i) => (
                <div
                  key={st.label}
                  className={`flex flex-col-reverse rounded-2xl p-4 shadow-float sm:p-5 ${i === 0 ? "bg-navy-950 text-white" : "bg-gold-gradient text-navy-950"}`}
                >
                  <dt className={`mt-1 text-xs font-semibold ${i === 0 ? "text-white/80" : "text-navy-950/80"}`}>
                    {st.label}
                  </dt>
                  <dd className={`text-2xl font-extrabold tracking-tight sm:text-3xl ${i === 0 ? "text-gradient-gold" : ""}`}>
                    <Counter value={st.value} suffix={st.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Vision & mission — photo on top, short line below */}
      <section className="bg-surface py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Vision & Mission"
            title={
              <>
                Driven by Purpose, <span className="text-gold-600">Built on Trust</span>
              </>
            }
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {purpose.map(({ title, text, Icon, photo, alt }, i) => (
              <article
                key={title}
                data-reveal
                style={delay(i * 120)}
                className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-card"
              >
                <div className="relative isolate aspect-[16/9] overflow-hidden bg-navy-950">
                  <Photo
                    name={photo}
                    alt={alt}
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="absolute inset-0 -z-10 h-full w-full"
                  />
                </div>
                <div className="relative px-7 pb-8 pt-10 sm:px-9">
                  <span className="absolute -top-7 left-7 grid h-14 w-14 place-items-center rounded-2xl bg-gold-gradient text-navy-950 shadow-gold ring-4 ring-white sm:left-9">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="text-2xl font-extrabold">{title}</h3>
                  <p className="mt-2 text-base leading-relaxed">{text}</p>
                </div>
              </article>
            ))}
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {values.map(({ title, Icon }, i) => (
              <li
                key={title}
                data-reveal
                style={delay(i * 80)}
                className="flex items-center gap-3 rounded-2xl border border-line bg-white p-4 sm:p-5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold-50 text-gold-600 ring-1 ring-gold-200">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-bold text-navy-900">{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Compliance & licensing — photo beside the list, no background image */}
      <section className="bg-navy-950 py-24 lg:py-32">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <figure
            data-reveal
            className="relative isolate aspect-[4/3] overflow-hidden rounded-[2rem] bg-navy-900 shadow-card-hover"
          >
            <Photo
              name="contract"
              alt="Contract being signed with a pen"
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="absolute inset-0 -z-10 h-full w-full"
            />
          </figure>

          <div>
            <div data-reveal>
              <span className="eyebrow eyebrow-light">Qatar Compliance &amp; Licensing</span>
              <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl">
                Fully Compliant &amp; <span className="text-gradient-gold">Licensed in Qatar</span>
              </h2>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {compliance.map(({ title, Icon }, i) => (
                <li
                  key={title}
                  data-reveal
                  style={delay((i % 2) * 80)}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold-gradient text-navy-950">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-white">{title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Choose Teravex"
            title={
              <>
                Why Companies <span className="text-gold-600">Choose Us</span>
              </>
            }
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
            <figure
              data-reveal
              className="relative isolate min-h-[18rem] overflow-hidden rounded-[2rem] bg-navy-950 shadow-card-hover sm:min-h-[24rem] lg:min-h-0"
            >
              <Photo
                name="engineers-tablet"
                alt="Site engineers in hard hats coordinating with a tablet and radio"
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="absolute inset-0 -z-10 h-full w-full"
              />
              <figcaption className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-navy-950/70 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                <Award className="h-4 w-4 text-gold-300" aria-hidden="true" />
                Trusted across Qatar
              </figcaption>
            </figure>
            <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {reasons.map(({ title, Icon }, i) => (
                <li
                  key={title}
                  data-reveal
                  style={delay((i % 2) * 80)}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-gold-300 hover:shadow-card-hover"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold-300 transition-all duration-500 group-hover:bg-gold-gradient group-hover:text-navy-950">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-bold">{title}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Nationalities compact />
      <Clients />
    </>
  );
}
