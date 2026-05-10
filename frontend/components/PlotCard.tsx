import Link from "next/link";

import type { Plot } from "@/data/plots";

type PlotCardProps = {
  plot: Plot;
};

export default function PlotCard({ plot }: PlotCardProps) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.12)]">
      <div
        className="relative aspect-[4/3] overflow-hidden bg-slate-100"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(15,23,42,0.08), rgba(15,23,42,0.55)), url(${plot.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
          {plot.status}
        </div>
        <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-black/35 p-4 text-white backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/75">{plot.location}</p>
          <p className="mt-1 text-xl font-semibold">{plot.name}</p>
        </div>
      </div>

      <div className="space-y-4 p-6">
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
          <span className="rounded-full bg-slate-100 px-3 py-1 font-medium">Size: {plot.size}</span>
          <span className="rounded-full bg-slate-100 px-3 py-1 font-medium">Facing: {plot.facing}</span>
        </div>
        <p className="text-sm leading-6 text-slate-600">{plot.description}</p>
        <div className="flex items-center justify-between gap-4 border-t border-slate-100 pt-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Price</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">{plot.price}</p>
          </div>
          <Link
            href="/contact#enquiry"
            className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </article>
  );
}