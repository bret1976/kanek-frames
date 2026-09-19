import { createFileRoute } from "@tanstack/react-router";
import { CraneFilm, CraneStats } from "@/components/site/about";
import { Chrome } from "@/components/site/chrome";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [{ title: "About — KANEK FRAMES" }],
  }),
});

function AboutPage() {
  return (
    <Chrome>
      <CraneFilm />
      <CraneStats />
    </Chrome>
  );
}
