import { useEffect, useRef, useState } from "react";

export type ScrollCaption = {
  kicker: string;
  title: string;
  body?: string;
};

export function ScrollFilm({
  id,
  frames,
  captions,
  alt,
  length = 380,
}: {
  id?: string;
  frames: string[];
  captions: ScrollCaption[];
  alt: string;
  length?: number;
}) {
  const track = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    frames.forEach((src) => {
      const img = new Image();
      img.src = src;
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
  }, [frames]);

  const last = Math.max(frames.length - 1, 1);
  const exact = progress * last;
  const i = Math.min(last, Math.floor(exact));
  const next = Math.min(last, i + 1);
  const fade = exact - i;
  const cap = captions[Math.min(captions.length - 1, i)] ?? captions[0];

  return (
    <section id={id} ref={track} className="relative bg-bg" style={{ height: `${length}vh` }}>
      <div className="sticky top-0 h-dvh overflow-hidden">
        {frames.map((src, idx) => {
          const show = idx === i || idx === next;
          if (!show) return null;
          const opacity = idx === i ? 1 - fade * 0.85 : fade;
          return (
            <img
              key={src}
              src={src}
              alt={idx === i ? alt : ""}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ opacity }}
            />
          );
        })}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-transparent">
          <div className="h-full bg-red" style={{ width: `${Math.round(progress * 100)}%` }} />
        </div>
        {cap ? (
          <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-10 md:px-10 md:pb-14">
            <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-red">{cap.kicker}</p>
            <h2 className="mt-2 max-w-3xl font-display text-4xl leading-[0.92] tracking-wide text-fg md:text-6xl">
              {cap.title}
            </h2>
            {cap.body ? <p className="mt-3 max-w-md text-sm text-steel md:text-base">{cap.body}</p> : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
