import { Link } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";
import { cn } from "@/lib/utils";

export function ProductStage({
  product,
  nextHref = "#about",
  id,
}: {
  product: Product;
  nextHref?: string;
  id?: string;
}) {
  const [active, setActive] = useState(0);
  const view = product.views[active] ?? product.cover;

  return (
    <section id={id} className="relative min-h-dvh bg-bg pt-16 md:pt-[72px]">
      <div className="grid min-h-[calc(100dvh-4rem)] lg:grid-cols-2 md:min-h-[calc(100dvh-72px)]">
        <div className="flex gap-3 px-4 py-6 md:gap-4 md:px-6 md:py-8">
          <div className="flex w-14 shrink-0 flex-col gap-2 md:w-16">
            {product.views.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`View ${i + 1}`}
                className={cn(
                  "relative aspect-[3/4] overflow-hidden border",
                  i === active ? "border-fg" : "border-line opacity-70 hover:opacity-100",
                )}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
          <div className="relative min-h-[70vh] flex-1 overflow-hidden bg-bg-elevated">
            <img
              key={view}
              src={view}
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-12 px-5 py-10 md:px-12 md:py-14">
          <div>
            <h2 className="font-display text-5xl leading-[0.9] tracking-wide text-fg md:text-7xl">
              {product.name}
            </h2>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted">{product.blurb}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="sm" variant="outline">
                <a href={product.pdf} download>
                  PDF
                </a>
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link to="/contact">DWG</Link>
              </Button>
            </div>
          </div>

          <div>
            <dl className="border-t border-line">
              {product.specs.map((s) => (
                <div
                  key={s.label}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-4"
                >
                  <dt className="text-sm text-muted">{s.label}</dt>
                  <dd className="font-mono text-sm text-fg">{s.value}</dd>
                </div>
              ))}
            </dl>
            <a
              href={nextHref}
              className="mt-8 ml-auto grid size-11 place-items-center border border-line text-fg hover:border-fg"
              aria-label="Next section"
            >
              <ArrowDown className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
