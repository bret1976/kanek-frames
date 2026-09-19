import { Link } from "@tanstack/react-router";
import { Film } from "@/components/site/film";

const STATS = [
  {
    value: "1",
    label: "Physical steel. Digital structure. One system — a nervous system that mirrors the architecture.",
  },
  {
    value: "100",
    label: "Years the steel can stand. Processors change. Networks evolve. The frame remains.",
  },
];

export function AboutFilm() {
  return (
    <section id="about" className="relative h-dvh overflow-hidden bg-bg">
      <Film
        src="/video/shop.mp4"
        poster="/images/shop-poster.jpg"
        label="Kanek Frames — intelligence inside the shop"
      />
      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-10 md:px-10 md:pb-14 lg:max-w-2xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-red">About</p>
        <h2 className="mt-2 font-display text-4xl leading-[0.92] tracking-wide text-fg md:text-6xl">
          We build technology into them.
        </h2>
        <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-steel md:text-base">
          Kanek Frames is redefining what a building can be. Advanced structural
          steel with embedded digital intelligence — physical structure and
          digital infrastructure, one system.
        </p>
        <Link
          to="/about"
          className="mt-6 inline-block text-sm font-medium text-fg underline decoration-red decoration-2 underline-offset-8 hover:text-red"
        >
          More
        </Link>
      </div>
    </section>
  );
}

export function CraneFilm() {
  return (
    <section id="machine" className="relative h-dvh overflow-hidden bg-bg">
      <Film
        src="/video/crane.mp4"
        poster="/images/crane-poster.jpg"
        label="The intelligent frame"
      />
      <div className="absolute inset-x-0 bottom-0 z-10 px-5 pb-10 md:px-10 md:pb-14 lg:max-w-2xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-red">The intelligent frame</p>
        <h2 className="mt-2 font-display text-4xl leading-[0.92] tracking-wide text-fg md:text-6xl">
          Now it's computational.
        </h2>
        <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-steel md:text-base">
          Traditional buildings are constructed first and made intelligent later.
          Kanek reverses that model. Individual beams become connected nodes.
          Connected nodes become a network.
        </p>
        <Link
          to="/catalog/$slug"
          params={{ slug: "kf-6516" }}
          className="mt-6 inline-block text-sm font-medium text-fg underline decoration-red decoration-2 underline-offset-8 hover:text-red"
        >
          Specs
        </Link>
      </div>
    </section>
  );
}

export function CraneStats() {
  return (
    <section className="relative min-h-dvh overflow-hidden border-t border-line bg-bg">
      <div className="absolute inset-0 lg:left-auto lg:w-7/12">
        <img
          src="/images/crane.jpg"
          alt="Kanek Frames intelligent structure"
          className="h-full w-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/20 lg:hidden" />
      </div>
      <div className="relative z-10 grid min-h-dvh lg:grid-cols-12">
        <div className="flex flex-col justify-end lg:col-span-5 lg:justify-center lg:bg-bg">
          {STATS.map((s, i) => (
            <div
              key={s.value}
              className={`flex min-h-[42vh] flex-col justify-end px-5 py-12 md:px-10 lg:min-h-[45vh] lg:justify-center ${
                i === 0 ? "lg:border-b lg:border-line" : ""
              }`}
            >
              <p className="font-display text-[7rem] leading-none tracking-wide text-fg md:text-[9rem]">
                {s.value}
              </p>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-steel lg:text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
        <div className="hidden lg:col-span-7 lg:block" />
      </div>
    </section>
  );
}
