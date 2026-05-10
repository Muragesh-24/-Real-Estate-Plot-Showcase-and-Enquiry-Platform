import CTASection from "@/components/CTASection";
import EnquiryForm from "@/components/EnquiryForm";
import GalleryGrid from "@/components/GalleryGrid";
import Hero from "@/components/Hero";
import LayoutCard from "@/components/LayoutCard";
import PlotCard from "@/components/PlotCard";
import ProjectCard from "@/components/ProjectCard";
import { galleryItems } from "@/data/gallery";
import { layouts } from "@/data/layouts";
import { plots } from "@/data/plots";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredPlots = plots.slice(0, 3);
  const featuredLayouts = layouts.slice(0, 2);
  const featuredProjects = projects.slice(0, 2);
  const enquiryOptions = Array.from(
    new Set([
      ...plots.slice(0, 4).map((plot) => plot.name),
      ...layouts.slice(0, 3).map((layout) => layout.name),
    ]),
  );

  return (
    <div className="pb-16">
      <Hero
        eyebrow="Nyamagoud Developers, Jamkhandi"
        headline="Premium Residential Plots in and around Jamkhandi"
        description="Discover carefully planned residential plots, developing layouts, and completed real estate works from a local team focused on trust, clarity, and site support."
        primaryAction={{ label: "View Available Plots", href: "/plots" }}
        secondaryAction={{ label: "Book a Site Visit", href: "/contact#enquiry" }}
        highlights={[
          "Residential plot discovery",
          "Ongoing layout development",
          "Transparent enquiry support",
        ]}
        stats={[
          { label: "Focused on", value: "Jamkhandi region" },
          { label: "Project types", value: "Plots, layouts, works" },
          { label: "Approach", value: "Local and transparent" },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-white/80 bg-white/80 p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur sm:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">About the developer</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              C. M. Nyamagoud brings local experience and a practical approach to real estate development.
            </h2>
            <p className="max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              The focus is on residential plots, layout development, and completed works that are easy to understand,
              easy to inspect, and simple to enquire about. Every listing is presented with enough detail to help a
              family or investor move from discovery to a site visit with confidence.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ["Trust first", "Transparent dealing and clear communication."],
              ["Site support", "Guidance from enquiry to visit and follow-up."],
              ["Local knowledge", "Focused on Jamkhandi and nearby growth corridors."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-emerald-50 p-5 shadow-sm ring-1 ring-emerald-100">
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">Featured plots</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Available residential opportunities</h2>
          </div>
          <a
            href="/plots"
            className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700"
          >
            Explore all plots
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredPlots.map((plot) => (
            <PlotCard key={plot.name} plot={plot} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-700">Ongoing layouts</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Layouts currently under development</h2>
          </div>
          <a
            href="/layouts"
            className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200 hover:text-amber-700"
          >
            View all layouts
          </a>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredLayouts.map((layout) => (
            <LayoutCard key={layout.name} layout={layout} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">Completed projects</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Delivered development works</h2>
          </div>
          <a
            href="/completed-projects"
            className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-200 hover:text-teal-700"
          >
            View past projects
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Trusted local presence", "Jamkhandi-focused development and plot discovery."],
            ["Clear enquiry flow", "Cards, CTAs, and a reusable form for quick follow-up."],
            ["Residential planning", "Layouts and plots designed for practical family living."],
            ["Long-term support", "From site visit scheduling to post-enquiry guidance."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-white/80 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.08)]">
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-700">Gallery preview</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">Recent site and project visuals</h2>
          </div>
          <a
            href="/gallery"
            className="inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-rose-200 hover:text-rose-700"
          >
            Open gallery
          </a>
        </div>
        <GalleryGrid items={galleryItems.slice(0, 6)} />
      </section>

      <CTASection
        eyebrow="Ready to enquire?"
        title="Tell us what you are looking for and we will guide you to the right plot or layout."
        description="Use the form below to request pricing, schedule a site visit, or ask for a callback. The form is static for now and logs enquiries to the console so it can be connected to an API route later."
        primaryAction={{ label: "Open contact page", href: "/contact" }}
        secondaryAction={{ label: "Browse available plots", href: "/plots" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="enquiry">
        <EnquiryForm interestOptions={enquiryOptions} />
      </section>
    </div>
  );
}
