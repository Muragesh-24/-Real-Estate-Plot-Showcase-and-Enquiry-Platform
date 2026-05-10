import Link from "next/link";

import type { Layout } from "@/data/layouts";

type LayoutCardProps = {
  layout: Layout;
};

export default function LayoutCard({ layout }: LayoutCardProps) {
  return (
    <article className="grid gap-0 overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.08)] lg:grid-cols-[1fr_1.05fr]">
      <div
        className="min-h-[260px] bg-slate-100"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(15,23,42,0.1), rgba(15,23,42,0.58)), url(${layout.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="space-y-5 p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">{layout.status}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{layout.name}</h3>
          <p className="mt-2 text-sm text-slate-500">{layout.location}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Total plots</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">{layout.totalPlots}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Available plots</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">{layout.availablePlots}</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">Amenities</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {layout.amenities.map((amenity) => (
              <span key={amenity} className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
                {amenity}
              </span>
            ))}
          </div>
        </div>
        <p className="text-sm leading-6 text-slate-600">{layout.description}</p>
        <Link
          href="/contact#enquiry"
          className="inline-flex items-center rounded-full bg-amber-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-700"
        >
          Enquire Now
        </Link>
      </div>
    </article>
  );
}