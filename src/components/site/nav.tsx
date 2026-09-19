import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/site/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/catalog", label: "Catalog" },
  { to: "/knowledge", label: "Knowledge" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "bg-bg/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="flex h-16 items-center justify-between gap-4 px-5 md:h-[72px] md:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-xs font-medium uppercase tracking-[0.18em] text-fg/80 transition-colors hover:text-red"
              activeProps={{ className: "text-red" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+17025550148"
            className="font-mono text-xs tracking-wide text-fg/80 hover:text-fg"
          >
            +1 702 555 0148
          </a>
          <Button asChild size="sm">
            <Link to="/contact">Build Intelligence</Link>
          </Button>
        </div>
        <div className="flex items-center gap-1 lg:hidden">
          <a
            href="tel:+17025550148"
            className="grid size-11 place-items-center text-fg"
            aria-label="Call"
          >
            <Phone className="size-5" />
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center text-fg"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="flex min-h-dvh flex-col gap-4 bg-bg px-6 pb-16 pt-4 lg:hidden">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-display text-5xl tracking-wide text-fg hover:text-red"
            >
              {l.label}
            </Link>
          ))}
          <Button asChild size="lg" className="mt-8 w-full">
            <Link to="/contact" onClick={() => setOpen(false)}>
              Build Intelligence
            </Link>
          </Button>
        </div>
      ) : null}
    </header>
  );
}
