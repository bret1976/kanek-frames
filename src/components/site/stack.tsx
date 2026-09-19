import { useEffect, useRef, useState, type ReactNode } from "react";

export function StackSection({
  children,
  z,
}: {
  children: ReactNode;
  z: number;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const [cover, setCover] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let raf = 0;
    const measure = () => {
      const el = wrap.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, -rect.top / Math.max(rect.height, 1)));
      setCover(p);
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

  return (
    <div ref={wrap} className="relative h-dvh" style={{ zIndex: z }}>
      <div className="sticky top-0 h-dvh overflow-hidden bg-bg">
        <div
          className="h-full w-full origin-center will-change-transform"
          style={{
            transform: `scale(${1 - cover * 0.08})`,
            filter: `brightness(${1 - cover * 0.55})`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
