import { createFileRoute } from "@tanstack/react-router";
import { Chrome } from "@/components/site/chrome";
import { Contact } from "@/components/site/contact";
import { ScrollFilm } from "@/components/site/scroll-film";

const FRAMES = [
  "/images/catalog-dusk.jpg",
  "/images/scroll/crane/01.jpg",
  "/images/shop-interior.jpg",
  "/images/scroll/build/04.jpg",
  "/images/truck-dusk.jpg",
  "/images/scroll/crane/08.jpg",
];

const CAPS = [
  { kicker: "Contact", title: "Build intelligence." },
  { kicker: "The frame", title: "We don't add technology. We build it in." },
  { kicker: "The shop", title: "Identity starts at manufacturing." },
  { kicker: "The grid", title: "When the frames connect, the building comes online." },
  { kicker: "The haul", title: "Physical steel. Digital structure. One system." },
  { kicker: "Kanek", title: "The framework of the intelligence age." },
];

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [{ title: "Contact — KANEK FRAMES" }],
  }),
});

function ContactPage() {
  return (
    <Chrome>
      <ScrollFilm id="yard" frames={FRAMES} captions={CAPS} alt="Build intelligence" length={320} />
      <Contact />
    </Chrome>
  );
}
