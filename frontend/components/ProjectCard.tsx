import Link from "next/link";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const primaryImage = project.images[0] ?? "/assets/projects/project-1.jpg";
  const secondaryImage = project.images[1] ?? primaryImage;

  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.12)]">
      <div className="grid gap-3 p-3 sm:grid-cols-[1.2fr_0.8fr]">
        <div
          className="min-h-[240px] rounded-[1.25rem] bg-slate-100"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(15,23,42,0.1), rgba(15,23,42,0.58)), url(${primaryImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="grid gap-3 sm:grid-rows-2">
          <div
            className="min-h-[114px] rounded-[1.25rem] bg-slate-100"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(15,23,42,0.08), rgba(15,23,42,0.5)), url(${secondaryImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="rounded-[1.25rem] bg-slate-900 p-4 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">Completed in</p>
            <p className="mt-2 text-2xl font-semibold">{project.year}</p>
            <p className="mt-2 text-sm leading-6 text-white/80">{project.location}</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 px-6 pb-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">{project.name}</p>
          <p className="mt-2 text-sm text-slate-500">{project.location}</p>
        </div>
        <p className="text-sm leading-6 text-slate-600">{project.description}</p>
        <Link
          href="/contact#enquiry"
          className="inline-flex items-center rounded-full bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-700"
        >
          Enquire About Similar Work
        </Link>
      </div>
    </article>
  );
}