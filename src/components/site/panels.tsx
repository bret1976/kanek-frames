import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function CatalogPanel() {
  return (
    <section id="catalog" className="relative h-dvh overflow-hidden bg-bg">
      <img
        src="/images/catalog-dusk.jpg"
        alt="Kanek Frames — the intelligent system"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-10 md:px-10 md:pb-14">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-red">Catalog</p>
        <h2 className="mt-2 max-w-3xl font-display text-4xl leading-[0.92] tracking-wide text-fg md:text-6xl">
          Four layers. One intelligent frame.
        </h2>
        <Button asChild size="sm" variant="outline" className="mt-6">
          <Link to="/catalog">The book</Link>
        </Button>
      </div>
    </section>
  );
}

export function ServicesPanel() {
  return (
    <section id="services" className="relative h-dvh overflow-hidden bg-bg">
      <img
        src="/images/scroll/build/04.jpg"
        alt="Digital Wireframe"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-10 md:px-10 md:pb-14">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-red">Services</p>
        <h2 className="mt-2 max-w-3xl font-display text-4xl leading-[0.92] tracking-wide text-fg md:text-6xl">
          Core. Wireframe. Grid. Node.
        </h2>
        <p className="mt-4 max-w-md text-sm text-steel">
          Intelligence inside the beam. A living digital replica. The building as a platform.
        </p>
        <Button asChild size="sm" variant="outline" className="mt-6">
          <Link to="/services">What we take on</Link>
        </Button>
      </div>
    </section>
  );
}

export function ContactPanel() {
  return (
    <section id="contact" className="relative h-dvh overflow-hidden bg-bg">
      <img
        src="/images/shop-interior.jpg"
        alt="Kanek Frames shop"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-10 md:px-10 md:pb-14">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-red">Contact</p>
        <h2 className="mt-2 max-w-3xl font-display text-4xl leading-[0.92] tracking-wide text-fg md:text-6xl">
          Build intelligence.
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="sm">
            <Link to="/contact">Build Intelligence</Link>
          </Button>
          <Button asChild size="sm" variant="outline">
            <a href="tel:+17025550148">+1 702 555 0148</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
