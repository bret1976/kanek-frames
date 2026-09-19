import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Film } from "@/components/site/film";

export function Hero() {
  return (
    <section id="top" className="relative h-dvh overflow-hidden bg-bg">
      <Film
        src="/video/hero.mp4"
        poster="/images/hero-poster.jpg"
        label="Kanek Frames — intelligence built into the structure"
      />

      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-6 px-5 pb-8 md:px-10 md:pb-10">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-red">Kanek Frames</p>
          <h1 className="mt-2 max-w-xl font-display text-4xl leading-[0.92] tracking-wide text-fg md:text-6xl">
            Intelligence, Built Into the Structure.
          </h1>
        </div>
        <div className="hidden shrink-0 flex-col items-end gap-3 sm:flex">
          <Button asChild size="sm" variant="outline">
            <a href="#about">About</a>
          </Button>
          <Button asChild size="sm">
            <Link to="/catalog">Catalog</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
