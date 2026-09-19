import { ScrollFilm } from "@/components/site/scroll-film";

const CRANE = [
  "/images/scroll/crane/01.jpg",
  "/images/scroll/crane/02.jpg",
  "/images/scroll/crane/03.jpg",
  "/images/scroll/crane/04.jpg",
  "/images/scroll/crane/05.jpg",
  "/images/scroll/crane/06.jpg",
  "/images/scroll/crane/07.jpg",
  "/images/scroll/crane/08.jpg",
];

const BUILD = [
  "/images/scroll/build/01.jpg",
  "/images/scroll/build/02.jpg",
  "/images/scroll/build/03.jpg",
  "/images/scroll/build/04.jpg",
  "/images/scroll/build/05.jpg",
  "/images/scroll/build/06.jpg",
  "/images/scroll/build/07.jpg",
  "/images/scroll/build/08.jpg",
];

const WAREHOUSE = [
  "/images/scroll/warehouse/01.jpg",
  "/images/scroll/warehouse/02.jpg",
  "/images/scroll/warehouse/03.jpg",
  "/images/scroll/warehouse/04.jpg",
  "/images/scroll/warehouse/05.jpg",
  "/images/scroll/warehouse/06.jpg",
];

const SHOPCRANE = [
  "/images/scroll/shopcrane/01.jpg",
  "/images/scroll/shopcrane/02.jpg",
  "/images/scroll/shopcrane/03.jpg",
  "/images/scroll/shopcrane/04.jpg",
  "/images/scroll/shopcrane/05.jpg",
  "/images/scroll/shopcrane/06.jpg",
];

const CRANE_CAPS = [
  { kicker: "Kanek Core™", title: "Intelligence inside the beam.", body: "Every authorized node can maintain its own cryptographically verifiable identity." },
  { kicker: "The node", title: "Beams become a network.", body: "Position, connections, status, environment — reported to the building." },
  { kicker: "The frame", title: "Now it's computational.", body: "Steel has been structural for centuries. This is the next layer." },
  { kicker: "The cab", title: "The structure as a data layer.", body: "AI understands the building against its exact architecture." },
  { kicker: "Kanek Grid™", title: "When the frames connect.", body: "A single frame is intelligent. Thousands become a platform." },
  { kicker: "The mast", title: "Built for what comes next.", body: "Processors change. Networks evolve. The steel remains." },
  { kicker: "The jib", title: "One continuous record.", body: "Identity follows the component from mill to operation." },
  { kicker: "The system", title: "Build intelligence.", body: "The framework of the intelligence age." },
];

const BUILD_CAPS = [
  { kicker: "Digital Wireframe™", title: "A living digital replica.", body: "As the frames go up, their counterparts assemble with them." },
  { kicker: "Inside the frame", title: "The nervous system.", body: "A digital structure that mirrors the physical architecture." },
  { kicker: "The hangar", title: "The building as a platform.", body: "AI, twins, robotics, energy, security — on the same frame." },
  { kicker: "Clear span", title: "Physical steel. Digital structure.", body: "One system. No retrofit layer." },
  { kicker: "The atrium", title: "Visualize from the steel out.", body: "The foundation for digital twins and real-time management." },
  { kicker: "Inside", title: "Synchronized through operation.", body: "Build the physical structure once. Create its digital counterpart simultaneously." },
  { kicker: "The canopy", title: "A structure that can understand itself.", body: "Anomalies reported to the engineer — not to the next inspection cycle." },
  { kicker: "The hall", title: "Infrastructure that adapts.", body: "Sense. Understand. Communicate. Authenticate. Predict." },
];

const WAREHOUSE_CAPS = [
  { kicker: "The warehouse", title: "Where the identity starts.", body: "Every component can receive a unique digital identity during manufacturing." },
  { kicker: "The roof", title: "A network before the glass.", body: "Connected nodes. Then a building." },
  { kicker: "The doors", title: "From mill to pad.", body: "Identity follows fabrication, haul, installation, inspection, operation." },
  { kicker: "The floor", title: "Thousands of beams. One grid.", body: "Kanek Grid™ — a secure, building-scale digital framework." },
  { kicker: "Night bay", title: "The shop does not wait.", body: "Intelligence is built in before the load leaves." },
  { kicker: "The connection", title: "Every joint authenticated.", body: "Every change logged. Every system segmented." },
];

const SHOPCRANE_CAPS = [
  { kicker: "Kanek Core™", title: "Intelligence inside the beam.", body: "A building-scale computing environment, not passive iron." },
  { kicker: "The pick", title: "Physical and digital, same night.", body: "If it hangs here, it comes online on the pad." },
  { kicker: "The rails", title: "The grid extends.", body: "AI management. Twins. Robotics. Predictive maintenance. Energy." },
  { kicker: "Through the lattice", title: "Security from the frame out.", body: "Zero-trust. Post-quantum capable." },
  { kicker: "The block", title: "A structure that knows.", body: "Stress. Vibration. Load. Connection integrity." },
  { kicker: "The volume", title: "Build intelligence.", body: "Steel was the framework of the industrial age." },
];

export function CraneScroll() {
  return (
    <ScrollFilm
      id="machine"
      frames={CRANE}
      captions={CRANE_CAPS}
      alt="Kanek Core — intelligence inside the beam"
      length={400}
    />
  );
}

export function BuildScroll() {
  return (
    <ScrollFilm
      id="work"
      frames={BUILD}
      captions={BUILD_CAPS}
      alt="Digital Wireframe — buildings"
      length={420}
    />
  );
}

export function WarehouseScroll() {
  return (
    <ScrollFilm
      id="warehouse"
      frames={WAREHOUSE}
      captions={WAREHOUSE_CAPS}
      alt="Kanek Grid — the shop"
      length={360}
    />
  );
}

export function ShopCraneScroll() {
  return (
    <ScrollFilm
      id="shopcrane"
      frames={SHOPCRANE}
      captions={SHOPCRANE_CAPS}
      alt="The intelligent frame"
      length={360}
    />
  );
}
