import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import RevealObserver from "@/components/ui/RevealObserver";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const description =
  "Teravex Contracting & Services W.L.L — Doha-based manpower supply, contracting and overseas recruitment company. 5,000+ skilled workers for hospitality, construction, oil & gas, security, cleaning and landscaping across Qatar.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Teravex Contracting & Services W.L.L | Manpower Supply in Qatar",
    template: "%s | Teravex Contracting & Services W.L.L",
  },
  description,
  applicationName: site.name,
  keywords: [
    "manpower supply Qatar",
    "manpower company Doha",
    "recruitment agency Qatar",
    "hospitality staffing Qatar",
    "construction manpower Qatar",
    "oil and gas manpower Qatar",
    "security guard services Doha",
    "cleaning services Qatar",
    "overseas recruitment Qatar visa",
    "Teravex",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Teravex Contracting & Services W.L.L | Manpower Supply in Qatar",
    description,
    url: site.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teravex Contracting & Services W.L.L",
    description,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#070c19",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jakarta.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JS runs, so content is never hidden without it */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold-400 focus:px-5 focus:py-2.5 focus:font-semibold focus:text-navy-950"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <RevealObserver />
      </body>
    </html>
  );
}
