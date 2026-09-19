import { Link, createFileRoute } from "@tanstack/react-router";
import { Chrome } from "@/components/site/chrome";
import { ProductStage } from "@/components/site/product-stage";
import { ProjectGrid } from "@/components/site/work";
import { getProduct } from "@/data/products";

export const Route = createFileRoute("/catalog/$slug")({
  component: ProductPage,
  head: ({ params }) => {
    const product = getProduct(params.slug);
    return {
      meta: [{ title: `${product?.name ?? "Catalog"} — KANEK FRAMES` }],
    };
  },
});

function ProductPage() {
  const { slug } = Route.useParams();
  const product = getProduct(slug);

  if (!product) {
    return (
      <Chrome>
        <section className="grid min-h-dvh place-items-center px-5 text-center">
          <div>
            <p className="font-display text-5xl text-fg">Not in the book.</p>
            <Link to="/catalog" className="mt-6 inline-block text-red underline underline-offset-4">
              Back to catalog
            </Link>
          </div>
        </section>
      </Chrome>
    );
  }

  return (
    <Chrome>
      <ProductStage product={product} nextHref="#catalog-grid" />
      <div className="border-t border-line px-5 py-10 md:px-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-red">Other frames</p>
        <div className="mt-3 flex items-end justify-between gap-4">
          <h2 className="font-display text-4xl tracking-wide text-fg md:text-5xl">The catalog</h2>
          <Link to="/catalog" className="text-sm text-red hover:underline">
            All models
          </Link>
        </div>
      </div>
      <ProjectGrid />
    </Chrome>
  );
}
