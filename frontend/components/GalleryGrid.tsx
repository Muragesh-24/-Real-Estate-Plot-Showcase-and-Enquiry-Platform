import type { GalleryItem } from "@/data/gallery";

type GalleryGridProps = {
  items: GalleryItem[];
};

export default function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((item) => (
        <article
          key={item.title}
          className="overflow-hidden rounded-[1.5rem] border border-white/80 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.08)]"
        >
          <div
            className="relative aspect-[4/3] bg-slate-100"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(15,23,42,0.12), rgba(15,23,42,0.5)), url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-x-4 bottom-4 rounded-full bg-black/35 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
              {item.category}
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}