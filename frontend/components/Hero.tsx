import Link from "next/link";

type HeroProps = {
  eyebrow: string;
  headline: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
  highlights: string[];
  stats: Array<{
    label: string;
    value: string;
  }>;
};

export default function Hero({
  eyebrow,
  headline,
  description,
  primaryAction,
  secondaryAction,
  highlights,
  stats,
}: HeroProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14">
      <div className="overflow-hidden rounded-[2.25rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(236,253,245,0.92))] shadow-[0_30px_90px_rgba(15,23,42,0.12)]">
        <div className="grid gap-10 px-6 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-14">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-700">{eyebrow}</p>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                {headline}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={primaryAction.href}
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700"
              >
                {primaryAction.label}
              </Link>
              <Link
                href={secondaryAction.href}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-200 hover:text-sky-700"
              >
                {secondaryAction.label}
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              {highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/80 bg-white/90 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.08)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">{stat.label}</p>
                <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">{stat.value}</p>
              </div>
            ))}
            <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-600 to-sky-700 p-6 text-white shadow-[0_20px_50px_rgba(16,185,129,0.22)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-50/80">Local focus</p>
              <p className="mt-3 text-xl font-semibold">Residential plots and development works built around trust.</p>
              <p className="mt-3 text-sm leading-6 text-emerald-50/90">
                Designed for quick browsing, clear enquiry capture, and an easy path to a site visit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}