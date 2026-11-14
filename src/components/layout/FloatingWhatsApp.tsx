import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { whatsappLink } from "@/lib/site";

/** Always-visible WhatsApp button, fixed bottom-right. */
export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("Hello Teravex, I would like to discuss a manpower requirement.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Teravex on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 sm:bottom-7 sm:right-7"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy-900 opacity-0 shadow-card-hover transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat with us
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_34px_-8px_rgb(37_211_102/0.7)] transition-transform duration-300 group-hover:scale-110">
        <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </span>
    </a>
  );
}
