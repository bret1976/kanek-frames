import { Film } from "@/components/site/film";

export function PageHero({
  title,
  kicker,
  image,
  video,
  poster,
}: {
  title: string;
  kicker?: string;
  image?: string;
  video?: string;
  poster?: string;
}) {
  return (
    <section className="relative min-h-dvh overflow-hidden bg-bg">
      {video && poster ? (
        <Film src={video} poster={poster} />
      ) : (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/35 to-transparent" />
      <div className="relative z-10 flex min-h-dvh flex-col justify-end px-5 pb-12 md:px-10 md:pb-16">
        {kicker ? (
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-red">{kicker}</p>
        ) : null}
        <h1 className="mt-3 max-w-4xl font-display text-6xl leading-[0.9] tracking-wide text-fg md:text-8xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
