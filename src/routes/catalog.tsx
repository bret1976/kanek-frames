import { createFileRoute } from "@tanstack/react-router";
import { Chrome } from "@/components/site/chrome";
import { BuildScroll } from "@/components/site/sequences";
import { Work } from "@/components/site/work";

export const Route = createFileRoute("/catalog")({
  component: CatalogPage,
  head: () => ({
    meta: [{ title: "Catalog — KANEK FRAMES" }],
  }),
});

function CatalogPage() {
  return (
    <Chrome>
      <BuildScroll />
      <Work />
    </Chrome>
  );
}
