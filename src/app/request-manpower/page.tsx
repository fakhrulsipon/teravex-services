import { Clock, Mail, Phone, ShieldCheck, Users } from "lucide-react";
import type { Metadata } from "next";
import ManpowerForm from "@/components/forms/ManpowerForm";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { LinkButton } from "@/components/ui/Button";
import ImageBanner from "@/components/ui/ImageBanner";
import Photo from "@/components/ui/Photo";
import { processSteps } from "@/data/company";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request Manpower — Get an Instant Quote",
  description:
    "Request skilled, semi-skilled or general workers in Qatar. Choose the sector, roles, nationality, headcount and duration — Teravex will send you a tailored quote.",
  alternates: { canonical: "/request-manpower/" },
};

const trust = [
  { text: "5,000+ ready workforce", Icon: Users },
  { text: "100% Qatar Labour Law compliant", Icon: ShieldCheck },
  { text: "24/7 rapid deployment support", Icon: Clock },
];

export default function RequestManpowerPage() {
  return (
    <>
      <ImageBanner
        src="/banners/request-manpower"
        alt="Two engineers in hard hats reviewing blueprints on a construction site"
        title="Request Manpower"
        focus="50% 40%"
      />

      <section
        id="request-form"
        className="relative scroll-mt-20 bg-surface py-16 lg:py-24"
      >
        <div className="container-x grid items-start gap-8 lg:grid-cols-[1fr_22rem] lg:gap-10">
          <ManpowerForm />

          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="rounded-[1.75rem] border border-line bg-white p-6 sm:p-7">
              <h2 className="text-lg font-extrabold">What Happens Next?</h2>
              <ol className="mt-5 space-y-5">
                {processSteps.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold-gradient text-sm font-extrabold text-navy-950">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-navy-900">
                        {s.title}
                      </p>
                      <p className="mt-0.5 text-[0.82rem] leading-relaxed">
                        {s.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-navy-950 p-6 pt-40 text-white sm:p-7 sm:pt-44">
              <Photo
                name="support-agent"
                alt=""
                sizes="(min-width: 1024px) 22rem, 100vw"
                style={{ objectPosition: "60% 30%" }}
                className="absolute inset-x-0 top-0 -z-10 h-64 w-full"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-navy-950/90 to-navy-950"
              />
              <div className="relative">
                <h2 className="text-lg font-extrabold text-white">
                  Prefer to Talk?
                </h2>
                <p className="mt-1 text-sm text-white/65">
                  Our team is available 24/7.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <LinkButton
                    href={whatsappLink(
                      "Hello Teravex, I would like to request manpower.",
                    )}
                    variant="whatsapp"
                  >
                    <WhatsAppIcon className="h-5 w-5" /> WhatsApp Us
                  </LinkButton>
                  <LinkButton
                    href={`tel:${site.phoneHref}`}
                    variant="outline-light"
                  >
                    <Phone className="h-4 w-4" /> {site.phoneDisplay}
                  </LinkButton>
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 inline-flex items-center justify-center gap-2 text-sm text-white/70 hover:text-gold-300"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" /> {site.email}
                  </a>
                </div>
              </div>
            </div>

            <ul className="space-y-3 rounded-[1.75rem] border border-line bg-white p-6 sm:p-7">
              {trust.map(({ text, Icon }) => (
                <li
                  key={text}
                  className="flex items-center gap-3 text-sm font-semibold text-navy-900"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gold-50 text-gold-600 ring-1 ring-gold-200/70">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
