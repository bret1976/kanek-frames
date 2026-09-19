import { Link } from "@tanstack/react-router";

const SERVICES = [
  {
    n: "01",
    title: "Kanek Core™",
    body: "Intelligence inside the beam. Each structural component carries a secure digital identity and reports position, connections, status, and environment to the building network.",
  },
  {
    n: "02",
    title: "Digital Wireframe™",
    body: "As the frames go up, their digital counterparts assemble with them. A living replica synchronized through construction and operation — the foundation for digital twins.",
  },
  {
    n: "03",
    title: "Building-scale AI",
    body: "Give AI the building itself. Thousands of interconnected components become a persistent data layer — structural, environmental, occupancy, energy, security — against the exact architecture.",
  },
  {
    n: "04",
    title: "Quantum-ready security",
    body: "Security from the frame out. Zero-trust. Post-quantum capable. Every node authenticated. Every connection logged. Segmented environments for every critical system.",
  },
];

export function Services() {
  return (
    <section id="services" className="border-t border-line bg-bg">
      <div className="flex items-end justify-between px-5 py-10 md:px-10 md:py-14">
        <h2 className="font-display text-4xl tracking-wide text-fg md:text-5xl">Our services</h2>
        <Link to="/contact" className="text-sm text-red hover:underline">
          More
        </Link>
      </div>
      <div className="grid border-t border-line md:grid-cols-2">
        {SERVICES.map((s) => (
          <article
            key={s.n}
            className="group flex min-h-[55vh] flex-col justify-between border-b border-line px-5 py-12 md:min-h-[60vh] md:px-10 md:py-16 md:odd:border-r"
          >
            <p className="font-mono text-sm text-red">{s.n}</p>
            <div>
              <h3 className="font-display text-5xl tracking-wide text-fg md:text-6xl">{s.title}</h3>
              <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted">{s.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
