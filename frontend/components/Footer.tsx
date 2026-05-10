import Link from "next/link";

const footerLinks = [
  { href: "/plots", label: "Available Plots" },
  { href: "/layouts", label: "Ongoing Layouts" },
  { href: "/completed-projects", label: "Completed Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="text-xl font-semibold tracking-tight text-slate-900">Nyamagoud Developers</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
            Residential plots, layouts, completed development works, and enquiry support for Jamkhandi and nearby growth
            areas. Built to help families and investors move confidently from browsing to site visits.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Quick links</p>
          <div className="mt-4 grid gap-2 text-sm font-medium text-slate-700">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-emerald-700">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Contact</p>
          <div className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
            <p>Jamkhandi, Karnataka</p>
            <p>Phone: +91 7899136326</p>
            <p>Email: infocmnyamagoud@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-slate-500 sm:px-6 lg:px-8">
          © 2026 Nyamagoud Developers. Static website scaffold ready for future API integration.
        </div>
      </div>
    </footer>
  );
}