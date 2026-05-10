import CTASection from "@/components/CTASection";
import EnquiryForm from "@/components/EnquiryForm";
import LayoutCard from "@/components/LayoutCard";
import { layouts } from "@/data/layouts";

export default function LayoutsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Ongoing layouts</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Current layouts under development
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          These layouts show the current development pipeline, including available plots, amenities, and site planning
          direction.
        </p>
      </section>

      <section className="py-10">
        <div className="grid gap-6 lg:grid-cols-2">
          {layouts.map((layout) => (
            <LayoutCard key={layout.name} layout={layout} />
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Planning a visit?"
        title="Review the layout, ask about availability, and schedule your visit."
        description="Our goal is to make the next step simple for customers who want clear project details before making a decision."
        primaryAction={{ label: "Book site visit", href: "/contact#enquiry" }}
        secondaryAction={{ label: "Explore plots", href: "/plots" }}
      />

      <section className="py-6" id="enquiry">
        <EnquiryForm interestOptions={layouts.map((layout) => layout.name)} />
      </section>
    </div>
  );
}