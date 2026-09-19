import { useState } from "react";

const ITEMS = [
  {
    q: "What is an intelligent frame?",
    a: "A Kanek Frame is structural steel with embedded digital intelligence. Each beam can carry a secure identity and communicate position, connections, status, and environment to the building network. Physical steel. Digital structure. One system.",
  },
  {
    q: "What is Kanek Core™?",
    a: "Kanek Core™ is the embedded intelligence architecture inside every frame. Instead of treating thousands of beams as passive material, Core turns them into interconnected components of a building-scale computing environment.",
  },
  {
    q: "What is Digital Wireframe™?",
    a: "As Kanek Frames are assembled, their digital counterparts assemble with them. Every beam, connection, floor, and critical system can become part of a continuously evolving Digital Wireframe™ — synchronized through construction and operation.",
  },
  {
    q: "How does this help AI?",
    a: "Most building AI runs on cameras, sensors, and separate software. Kanek gives AI the structure itself as a data layer — so intelligent systems understand the building against its exact physical architecture.",
  },
  {
    q: "Is it quantum-ready?",
    a: "Yes. Kanek Frames are designed around zero-trust architecture capable of supporting post-quantum cryptography. Every authorized node can maintain a cryptographically verifiable identity. Every connection can be authenticated.",
  },
  {
    q: "Does the intelligence become obsolete?",
    a: "The architecture separates the permanent structural layer from upgradeable computational systems. Processors change. Networks evolve. AI advances. The steel remains. Kanek is built for what comes next.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="knowledge" className="border-t border-line bg-bg px-5 py-16 md:px-10 md:py-24">
      <h2 className="font-display text-4xl tracking-wide text-fg md:text-6xl">
        The technical part, without the extra.
      </h2>
      <div className="mt-12 divide-y divide-line border-y border-line">
        {ITEMS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                type="button"
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="text-lg text-fg md:text-xl">{item.q}</span>
                <span className="mt-1 font-mono text-red" aria-hidden>
                  {isOpen ? "–" : "+"}
                </span>
              </button>
              {isOpen ? (
                <p className="max-w-3xl pb-6 text-pretty leading-relaxed text-muted">{item.a}</p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
