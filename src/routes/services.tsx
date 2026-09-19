import { createFileRoute } from "@tanstack/react-router";
import { Chrome } from "@/components/site/chrome";
import { CraneScroll } from "@/components/site/sequences";
import { Services } from "@/components/site/services";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [{ title: "Services — KANEK FRAMES" }],
  }),
});

function ServicesPage() {
  return (
    <Chrome>
      <CraneScroll />
      <Services />
    </Chrome>
  );
}
