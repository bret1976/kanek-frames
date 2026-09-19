import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/data/products";

export function CatalogHero() {
  return (
    <section id="catalog" className="relative min-h-dvh overflow-hidden bg-bg">
      <img
        src="/images/catalog-dusk.jpg"
        alt="Kanek Frames — the intelligent system"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
      <div className="relative z-10 flex min-h-dvh flex-col justify-end px-5 pb-12 md:px-10 md:pb-16">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-red">Catalog</p>
        <h2 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] tracking-wide text-fg md:text-7xl">
          Four layers. One intelligent frame.
        </h2>
        <p className="mt-5 max-w-lg text-pretty text-steel">
          Core. Wireframe. Grid. Node. The physical structure and the digital infrastructure, specified as one system.
        </p>
        <Button asChild size="lg" variant="outline" className="mt-8 w-fit">
          <a href="#catalog-grid">View models</a>
        </Button>
      </div>
    </section>
  );
}

export function ProjectGrid() {
  return (
    <div id="catalog-grid" className="grid border-t border-line md:grid-cols-2">
      {PRODUCTS.map((p) => (
        <Link
          key={p.slug}
          to="/catalog/$slug"
          params={{ slug: p.slug }}
          className="group relative min-h-[70vh] overflow-hidden md:min-h-dvh"
        >
          <img
            src={p.cover}
            alt={p.name}
            className="absolute inset-0 h-full w-full object-cover outline outline-1 -outline-offset-1 outline-fg/10 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-red">{p.code}</p>
            <h3 className="mt-2 font-display text-4xl tracking-wide text-fg md:text-5xl">{p.name}</h3>
            <p className="mt-2 text-sm text-steel">{p.specs[0]?.value} · {p.specs[0]?.label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function Work() {
  return (
    <>
      <CatalogHero />
      <ProjectGrid />
    </>
  );
}
