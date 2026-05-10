"use client";

import { useMemo, useState } from "react";

import CTASection from "@/components/CTASection";
import EnquiryForm from "@/components/EnquiryForm";
import PlotCard from "@/components/PlotCard";
import { plots } from "@/data/plots";

const locations = ["All Locations", ...Array.from(new Set(plots.map((plot) => plot.location)))];
const statuses = ["All Statuses", ...Array.from(new Set(plots.map((plot) => plot.status)))];

export default function PlotsPage() {
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [statusFilter, setStatusFilter] = useState("All Statuses");

  const filteredPlots = useMemo(
    () =>
      plots.filter((plot) => {
        const matchesLocation = locationFilter === "All Locations" || plot.location === locationFilter;
        const matchesStatus = statusFilter === "All Statuses" || plot.status === statusFilter;

        return matchesLocation && matchesStatus;
      }),
    [locationFilter, statusFilter],
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Available plots</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Residential plots ready for discovery and enquiry
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          Browse the current selection of residential plots and shortlist the locations that match your family or
          investment goals.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700">Filter by location</span>
            <select
              value={locationFilter}
              onChange={(event) => setLocationFilter(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
            >
              {locations.map((location) => (
                <option key={location}>{location}</option>
              ))}
            </select>
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700">Filter by status</span>
            <select
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
            >
              {statuses.map((status) => (
                <option key={status}>{status}</option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <section className="py-10">
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-slate-600">
            Showing <span className="font-semibold text-slate-900">{filteredPlots.length}</span> plot(s)
          </p>
          <button
            type="button"
            onClick={() => {
              setLocationFilter("All Locations");
              setStatusFilter("All Statuses");
            }}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-emerald-200 hover:text-emerald-700"
          >
            Reset filters
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredPlots.map((plot) => (
            <PlotCard key={plot.name} plot={plot} />
          ))}
        </div>

        {filteredPlots.length === 0 ? (
          <div className="mt-8 rounded-[1.5rem] border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
            No plots match the current filters. Try a different location or status.
          </div>
        ) : null}
      </section>

      <CTASection
        eyebrow="Need help deciding?"
        title="Share your preferred budget, location, and site-visit timing."
        description="We can shortlist the best options and follow up with the details that matter before you visit the site."
        primaryAction={{ label: "Contact us", href: "/contact#enquiry" }}
        secondaryAction={{ label: "See layouts", href: "/layouts" }}
      />

      <section className="py-6" id="enquiry">
        <EnquiryForm interestOptions={plots.map((plot) => plot.name)} />
      </section>
    </div>
  );
}