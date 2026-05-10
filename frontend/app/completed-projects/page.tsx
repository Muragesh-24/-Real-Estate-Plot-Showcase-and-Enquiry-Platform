import CTASection from "@/components/CTASection";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function CompletedProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">Completed projects</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Past layout and real estate development work
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          A showcase of previously completed development works to help build confidence and show the style of delivery
          customers can expect.
        </p>
      </section>

      <section className="py-10">
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Looking for similar work?"
        title="Tell us what kind of plot development or layout you need."
        description="We can help with residential plot discovery, layout planning, and future development requirements."
        primaryAction={{ label: "Enquire now", href: "/contact#enquiry" }}
        secondaryAction={{ label: "Open gallery", href: "/gallery" }}
      />
    </div>
  );
}