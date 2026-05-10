import EnquiryForm from "@/components/EnquiryForm";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[2rem] border border-white/80 bg-white/90 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Contact Nyamagoud Developers
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          Reach out for plot discovery, layout details, completed project references, or a site visit appointment.
        </p>
      </section>

      <section className="grid gap-6 py-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <div className="rounded-[1.75rem] border border-white/80 bg-white p-6 shadow-[0_16px_45px_rgba(15,23,42,0.08)]">
            <h2 className="text-xl font-semibold text-slate-900">Contact details</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
              <p>Address: Jamkhandi, Karnataka</p>
              <p>Phone: +91 7899136326</p>
              <p>Email: infocmnyamagoud@gmail.com</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="https://wa.me/+917899136326"
                className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                WhatsApp Button Placeholder
              </a>
              <a
                href="mailto:infocmnyamagoud@gmail.com"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-emerald-200 hover:text-emerald-700"
              >
                Email Placeholder
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.75rem] border border-white/80 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.08)]">
            <div className="bg-slate-900 px-6 py-4 text-white">
              <h2 className="text-xl font-semibold">Google Maps placeholder</h2>
              <p className="mt-1 text-sm text-white/70">Swap this embed with the exact office or site location later.</p>
            </div>
            <iframe
              title="Jamkhandi location map"
              src="https://www.google.com/maps?q=Jamkhandi%2C%20Karnataka&output=embed"
              className="h-[320px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        <div id="enquiry">
          <EnquiryForm
            interestOptions={[
              "Aman Heights Plot 12",
              "Shakti Nagar Plot 08",
              "Aman Heights Layout",
              "Green Valley Extension",
              "Completed Project Reference",
            ]}
          />
        </div>
      </section>
    </div>
  );
}