import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Film } from "@/components/site/film";
import { PartnerMarquee } from "@/components/site/footer";
import { Button } from "@/components/ui/button";

type Layer = {
  id?: string;
  kind: "video" | "image";
  src: string;
  poster?: string;
  alt: string;
  kicker: string;
  title: string;
  body?: string;
  actions?: ReactNode;
};

const LAYERS: Layer[] = [
  {
    id: "top",
    kind: "video",
    src: "/video/hero.mp4",
    poster: "/images/hero-poster.jpg",
    alt: "Kanek Frames — intelligence built into the structure",
    kicker: "Kanek Frames",
    title: "Intelligence, Built Into the Structure.",
    actions: (
      <div className="hidden shrink-0 flex-col items-end gap-3 sm:flex">
        <Button asChild size="sm" variant="outline">
          <Link to="/about">About</Link>
        </Button>
        <Button asChild size="sm">
          <Link to="/catalog">Catalog</Link>
        </Button>
      </div>
    ),
  },
  {
    id: "about",
    kind: "video",
    src: "/video/shop.mp4",
    poster: "/images/shop-poster.jpg",
    alt: "Kanek Frames shop floor",
    kicker: "About",
    title: "We build technology into them.",
    body: "We don't add technology to buildings. Every Kanek Frame is more than steel — it is part of a connected structural network.",
  },
  {
    id: "machine",
    kind: "video",
    src: "/video/crane.mp4",
    poster: "/images/crane-poster.jpg",
    alt: "The intelligent frame",
    kicker: "The intelligent frame",
    title: "Now it's computational.",
    body: "Steel has been structural for centuries. Kanek reverses the model: digital wireframe architecture, built into the steel.",
  },
  {
    id: "services",
    kind: "image",
    src: "/images/scroll/build/04.jpg",
    alt: "Digital Wireframe",
    kicker: "Digital Wireframe™",
    title: "A living digital replica.",
    body: "Physical steel. Digital structure. One system.",
  },
  {
    id: "shopcrane",
    kind: "image",
    src: "/images/scroll/shopcrane/01.jpg",
    alt: "Kanek Core inside the beam",
    kicker: "Kanek Core™",
    title: "Intelligence inside the beam.",
    body: "Each component carries a secure digital identity — position, connections, status, environment.",
  },
  {
    kind: "image",
    src: "/images/scroll/shopcrane/02.jpg",
    alt: "Building-scale AI",
    kicker: "Building-scale AI",
    title: "Give AI the building itself.",
    body: "Most building AI lives in cameras and servers. Kanek gives AI the structure as a data layer.",
  },
  {
    kind: "image",
    src: "/images/scroll/shopcrane/03.jpg",
    alt: "Quantum-ready security",
    kicker: "Quantum-ready",
    title: "Security from the frame out.",
    body: "Zero-trust. Post-quantum capable. Every node authenticated. Every change logged.",
  },
  {
    kind: "image",
    src: "/images/scroll/shopcrane/04.jpg",
    alt: "Structural intelligence",
    kicker: "Structural intelligence",
    title: "A building that knows.",
    body: "Stress. Vibration. Movement. Temperature. Moisture. Load. Connection integrity.",
  },
  {
    kind: "image",
    src: "/images/scroll/shopcrane/05.jpg",
    alt: "Kanek Grid",
    kicker: "Kanek Grid™",
    title: "The building comes online.",
    body: "A single frame is intelligent. Thousands connected become a building-scale network.",
  },
  {
    kind: "image",
    src: "/images/scroll/shopcrane/06.jpg",
    alt: "Build intelligence",
    kicker: "The next generation",
    title: "Build intelligence.",
    body: "Steel was the framework of the industrial age. Kanek is the framework of the intelligence age.",
  },
];

function smooth(t: number) {
  const x = Math.max(0, Math.min(1, t));
  return x * x * (3 - 2 * x);
}

export function HomeReel() {
  const track = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    LAYERS.forEach((layer) => {
      if (layer.kind === "image") {
        const img = new Image();
        img.src = layer.src;
      }
    });

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setProgress(0);
      return;
    }

    let raf = 0;
    const measure = () => {
      const el = track.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const p = Math.max(0, Math.min(1, -el.getBoundingClientRect().top / total));
      setProgress(p);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const last = LAYERS.length - 1;
  const exact = progress * last;
  const i = Math.min(last, Math.floor(exact));
  const next = Math.min(last, i + 1);
  const fade = smooth(exact - i);
  const layer = LAYERS[i] ?? LAYERS[0];
  const incoming = LAYERS[next] ?? layer;
  const marquee = smooth((exact - 3.4) / 1.1);

  return (
    <section
      ref={track}
      className="relative bg-bg"
      style={{ height: `${last * 80 + 180}vh` }}
    >
      <div className="sticky top-0 h-dvh overflow-hidden bg-bg">
        {LAYERS.map((item, idx) => {
          let opacity = 0;
          if (idx === i) opacity = 1 - fade;
          else if (idx === next) opacity = fade;
          if (opacity < 0.02 && item.kind === "image") return null;
          const active = opacity > 0.12;
          return (
            <div
              key={item.src}
              className="absolute inset-0"
              style={{ opacity, zIndex: idx === next ? 2 : 1 }}
              aria-hidden={!active}
            >
              {item.kind === "video" ? (
                <Film
                  src={item.src}
                  poster={item.poster ?? item.src}
                  label={item.alt}
                  active={active}
                />
              ) : (
                <img src={item.src} alt="" className="absolute inset-0 h-full w-full object-cover" />
              )}
            </div>
          );
        })}

        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[2px] bg-transparent">
          <div className="h-full bg-red" style={{ width: `${Math.round(progress * 100)}%` }} />
        </div>

        <Caption layer={layer} opacity={1 - fade} marquee={marquee} />
        {next !== i ? <Caption layer={incoming} opacity={fade} marquee={marquee} /> : null}

        <div
          className="absolute inset-x-0 bottom-0 z-30"
          style={{ opacity: marquee, pointerEvents: marquee > 0.4 ? "auto" : "none" }}
        >
          <PartnerMarquee />
        </div>
      </div>
    </section>
  );
}

function Caption({
  layer,
  opacity,
  marquee,
}: {
  layer: Layer;
  opacity: number;
  marquee: number;
}) {
  if (opacity < 0.04) return null;
  return (
    <div
      className="absolute inset-x-0 z-20 flex items-end justify-between gap-6 px-5 md:px-10"
      style={{
        opacity,
        bottom: marquee > 0.08 ? "7.5rem" : "2.5rem",
        paddingBottom: "1.5rem",
      }}
    >
      <div className="max-w-3xl">
        {layer.id ? <span id={layer.id} className="sr-only" /> : null}
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-red">{layer.kicker}</p>
        {layer.id === "top" ? (
          <h1 className="mt-2 font-display text-4xl leading-[0.92] tracking-wide text-fg md:text-6xl">
            {layer.title}
          </h1>
        ) : (
          <h2 className="mt-2 font-display text-4xl leading-[0.92] tracking-wide text-fg md:text-6xl">
            {layer.title}
          </h2>
        )}
        {layer.body ? (
          <p className="mt-3 max-w-md text-sm leading-relaxed text-steel md:text-base">{layer.body}</p>
        ) : null}
      </div>
      {layer.actions}
    </div>
  );
}
