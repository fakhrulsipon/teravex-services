import { ArrowRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { LinkButton } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/site";

type Props = { title?: string; text?: string };

export default function CtaBand({
  title = "Ready to Build Your Team?",
  text = "Share your manpower requirement and get a tailored quote — skilled, compliant and ready to deploy across Qatar.",
}: Props) {
  return (
    <section className="pb-24 lg:pb-32">
      <div className="container-x">
        <div
          data-reveal
          className="relative isolate overflow-hidden rounded-[2rem] bg-navy-950 px-6 py-14 text-center sm:px-12 lg:px-20 lg:py-20"
        >
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-pattern-star opacity-80" />
            <div className="absolute -left-20 -top-28 h-80 w-80 rounded-full bg-maroon-600/50 blur-3xl" />
            <div className="absolute -bottom-32 -right-16 h-96 w-96 rounded-full bg-gold-500/30 blur-3xl" />
          </div>
          <span className="eyebrow eyebrow-light">Let&apos;s Work Together</span>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{text}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <LinkButton href="/request-manpower" size="lg">
              Request Manpower <ArrowRight className="h-4 w-4" />
            </LinkButton>
            <LinkButton
              href={whatsappLink("Hello Teravex, I would like to discuss a manpower requirement.")}
              variant="outline-light"
              size="lg"
            >
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" /> Chat on WhatsApp
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
