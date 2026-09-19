import { Link } from "@tanstack/react-router";

const PARTNERS = [
  "Apex Hospitality",
  "Desert Civic Trust",
  "Nellis Logistics",
  "Red Rock Partners",
  "Summit Hangar Co.",
  "Westline Developers",
  "Clark Steel Erection",
  "Mojave Civic",
];

const LINKS = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/catalog", label: "Catalog" },
  { to: "/knowledge", label: "Knowledge" },
  { to: "/contact", label: "Contact" },
] as const;

export function PartnerMarquee() {
  return (
    <div className="overflow-hidden border-t border-line/40 bg-bg/70 py-3.5 backdrop-blur-sm">
      <div className="marquee-track gap-12 px-8">
        {[...PARTNERS, ...PARTNERS].map((p, i) => (
          <span key={`${p}-${i}`} className="font-display text-3xl tracking-wide text-red">
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <PartnerMarquee />
      <div className="grid gap-10 px-5 py-14 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-display text-3xl tracking-wide text-fg">KANEK FRAMES</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Intelligence, built into the structure. Steel was the framework of the industrial age. Kanek is the framework of the intelligence age.
          </p>
        </div>
        <div className="text-sm text-muted">
          <p className="text-xs uppercase tracking-[0.2em] text-fg">Yard</p>
          <p className="mt-3">1840 Helm Drive</p>
          <p>North Las Vegas, NV 89030</p>
          <a href="tel:+17025550148" className="mt-3 block text-fg hover:text-red">
            +1 702 555 0148
          </a>
          <a href="mailto:yard@kanekframes.com" className="block hover:text-red">
            yard@kanekframes.com
          </a>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="text-muted hover:text-fg">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-5 font-mono text-[10px] uppercase tracking-[0.18em] text-faint md:px-10">
        <span>© {new Date().getFullYear()} Kanek Frames</span>
        <span>Build intelligence</span>
      </div>
    </footer>
  );
}
