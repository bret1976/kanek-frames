import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export function Film({
  src,
  poster,
  className,
  label,
  onProgress,
  active,
}: {
  src: string;
  poster: string;
  className?: string;
  label?: string;
  onProgress?: (p: number) => void;
  active?: boolean;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const play = () => v.play().catch(() => undefined);
    const onTime = () => {
      if (v.duration) onProgress?.(v.currentTime / v.duration);
    };
    v.addEventListener("timeupdate", onTime);

    if (typeof active === "boolean") {
      if (active) play();
      else v.pause();
      return () => v.removeEventListener("timeupdate", onTime);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) play();
        else v.pause();
      },
      { threshold: 0.2 },
    );
    io.observe(v);
    play();
    return () => {
      io.disconnect();
      v.removeEventListener("timeupdate", onTime);
    };
  }, [src, onProgress, active]);

  return (
    <>
      <img
        src={poster}
        alt=""
        className={cn("absolute inset-0 h-full w-full object-cover", className)}
        aria-hidden
      />
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        aria-label={label}
        className={cn("absolute inset-0 h-full w-full object-cover", className)}
      />
    </>
  );
}
