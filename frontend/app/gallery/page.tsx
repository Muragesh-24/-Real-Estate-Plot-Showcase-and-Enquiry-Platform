import CTASection from "@/components/CTASection";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryItems } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-rose-700">Gallery</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Plot, layout, and project visuals
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          A responsive gallery of local development images intended to help visitors get a feel for the work before
          they request a site visit.
        </p>
      </section>

      <section className="py-10">
        <GalleryGrid items={galleryItems} />
      </section>

      <CTASection
        eyebrow="Want more details?"
        title="Use the enquiry form to request project images, pricing, or a guided visit."
        description="This gallery is static for now, so adding new assets later only requires dropping images into public/assets/gallery/."
        primaryAction={{ label: "Contact us", href: "/contact#enquiry" }}
        secondaryAction={{ label: "See plots", href: "/plots" }}
      />
    </div>
  );
}