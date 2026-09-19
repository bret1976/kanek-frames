import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link to="/" className={cn("flex items-center gap-3 text-fg", className)}>
      <span className="relative grid size-9 shrink-0 place-items-center bg-red" aria-hidden>
        <svg viewBox="0 0 24 24" className="size-[18px] fill-fg" aria-hidden>
          <rect x="4" y="3" width="5" height="18" />
          <polygon points="12,3 16.8,3 13.4,12 17,21 12,21 9.5,12" />
        </svg>
      </span>
      {compact ? null : (
        <span className="font-display text-xl leading-none tracking-[0.18em]">KANEK FRAMES</span>
      )}
    </Link>
  );
}
