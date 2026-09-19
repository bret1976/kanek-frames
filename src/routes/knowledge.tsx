import { createFileRoute } from "@tanstack/react-router";
import { Chrome } from "@/components/site/chrome";
import { Faq } from "@/components/site/faq";
import { ScrollFilm } from "@/components/site/scroll-film";

const FRAMES = [
  "/images/scroll/knowledge/01.jpg",
  "/images/scroll/knowledge/02.jpg",
  "/images/scroll/knowledge/03.jpg",
  "/images/scroll/knowledge/04.jpg",
  "/images/scroll/knowledge/05.jpg",
  "/images/scroll/knowledge/06.jpg",
  "/images/scroll/knowledge/07.jpg",
  "/images/scroll/knowledge/08.jpg",
];

const CAPS = [
  { kicker: "Knowledge", title: "Drawn from the structure.", body: "What the building knows is what the frame reports." },
  { kicker: "Kanek Core™", title: "Identity before the pick.", body: "Every component can receive a unique digital identity during manufacturing." },
  { kicker: "The weld", title: "A connection that can be authenticated.", body: "Every joint logged. Every change in the record." },
  { kicker: "The packet", title: "One continuous record.", body: "Fabrication, haul, install, inspect, operate, replace." },
  { kicker: "Inside the frame", title: "The digital counterpart.", body: "Build the physical structure once. Create its replica simultaneously." },
  { kicker: "The cab", title: "Give AI the building itself.", body: "The structure as a data layer — not a camera array." },
  { kicker: "The machine", title: "Security from the frame out.", body: "Zero-trust. Post-quantum capable." },
  { kicker: "The inspector", title: "A building that knows.", body: "Anomalies reported to the engineer — not the next cycle." },
];

export const Route = createFileRoute("/knowledge")({
  component: KnowledgePage,
  head: () => ({
    meta: [{ title: "Knowledge — KANEK FRAMES" }],
  }),
});

function KnowledgePage() {
  return (
    <Chrome>
      <ScrollFilm
        id="knowledge"
        frames={FRAMES}
        captions={CAPS}
        alt="Kanek Frames — structural intelligence"
        length={440}
      />
      <Faq />
    </Chrome>
  );
}
