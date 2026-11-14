import { ArrowRight } from "lucide-react";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-navy-950 pb-20 pt-36">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-pattern-star opacity-70 mask-fade-b" />
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-gold-500/20 blur-3xl" />
      </div>
      <div className="container-x text-center">
        <p className="text-8xl font-black text-gradient-gold sm:text-9xl">404</p>
        <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-white/65">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <LinkButton href="/" size="lg">
            Back to Home <ArrowRight className="h-4 w-4" />
          </LinkButton>
          <LinkButton href="/request-manpower" variant="outline-light" size="lg">
            Request Manpower
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
