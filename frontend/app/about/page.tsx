import CTASection from "@/components/CTASection";

const pillars = [
  {
    title: "Trust and transparency",
    text: "The website is positioned around direct communication, clear project details, and a simple enquiry path.",
  },
  {
    title: "Local experience",
    text: "C. M. Nyamagoud's real estate work is presented with a Jamkhandi-first focus and practical regional awareness.",
  },
  {
    title: "Customer support",
    text: "Site visits, pricing queries, and callback requests are kept easy to manage through reusable enquiry flows.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">About us</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          About C. M. Nyamagoud and the Jamkhandi real estate journey
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600">
          Nyamagoud Developers is presented as a residential plot and layout development business centered on trust,
          transparent dealing, and customer support for families, first-time buyers, and investors in Jamkhandi.
        </p>
      </section>

      <section className="grid gap-6 py-10 md:grid-cols-3">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="rounded-[1.75rem] border border-white/80 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.08)]">
            <h2 className="text-xl font-semibold text-slate-900">{pillar.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.text}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 rounded-[2rem] border border-white/80 bg-slate-900 px-6 py-8 text-white shadow-[0_22px_60px_rgba(15,23,42,0.14)] lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">What we focus on</p>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-white/85">
            <li>Residential plot development with clear layout planning</li>
            <li>Completed project showcases to build buyer confidence</li>
            <li>Customer guidance from discovery to site visit</li>
            <li>Transparent communication and local support</li>
          </ul>
        </div>
        <div className="rounded-[1.5rem] bg-white/10 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">Business vision</p>
          <p className="mt-3 text-lg leading-8 text-white/90">
            Build a professional, easy-to-use real estate presence that helps visitors quickly understand available
            plots, ongoing layouts, and completed works while making enquiry capture straightforward.
          </p>
        </div>
      </section>

      <CTASection
        eyebrow="Ready to talk?"
        title="Ask about residential plots, ongoing layouts, or completed development works."
        description="Everything on this site is static and local for now, making it simple to expand later with APIs or a backend."
        primaryAction={{ label: "Contact page", href: "/contact#enquiry" }}
        secondaryAction={{ label: "View projects", href: "/completed-projects" }}
      />
    </div>
  );
}