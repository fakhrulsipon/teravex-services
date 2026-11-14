import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
};

export default function SectionHeading({ eyebrow, title, text, align = "center", dark, className = "" }: Props) {
  const center = align === "center";
  return (
    <div data-reveal className={`${center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}>
      <span className={`eyebrow ${dark ? "eyebrow-light" : ""}`}>{eyebrow}</span>
      <h2
        className={`mt-4 text-3xl font-extrabold leading-[1.15] sm:text-4xl lg:text-[2.75rem] ${dark ? "text-white" : ""}`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? "text-white/70" : "text-body"}`}>{text}</p>
      ) : null}
    </div>
  );
}
