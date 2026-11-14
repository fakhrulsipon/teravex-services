import { Clock, Globe, ShieldCheck, Users } from "lucide-react";
import Counter from "@/components/ui/Counter";
import { stats } from "@/data/company";

const icons = [Users, Globe, ShieldCheck, Clock];

export default function StatsBar() {
  return (
    <section aria-label="Key figures" className="relative z-10 -mt-24 lg:-mt-28">
      <div className="container-x">
        <div
          data-reveal
          className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line shadow-[0_30px_80px_-30px_rgb(7_12_25/0.4)] lg:grid-cols-4"
        >
          {stats.map((s, i) => {
            const Icon = icons[i];
            return (
              <div key={s.label} className="group relative bg-white p-5 sm:p-8">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold-gradient transition-transform duration-500 group-hover:scale-x-100" />
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gold-50 text-gold-600 ring-1 ring-gold-200/60 sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </span>
                <p className="mt-4 text-3xl font-extrabold tracking-tight text-navy-900 sm:mt-5 sm:text-[2.6rem]">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm font-semibold text-navy-900 sm:text-base">{s.label}</p>
                <p className="mt-1 text-xs text-body sm:text-sm">{s.caption}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
