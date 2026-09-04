import Link from "next/link";

import { type Leader, leaders } from "@/content/leadership";

const featuredLeader = leaders.find((leader) => leader.featured) ?? leaders[0];
const secondaryLeaders = leaders.filter((leader) => !leader.featured);

export function Leadership() {
  if (!featuredLeader) {
    return null;
  }

  return (
    <section
      id="leadership"
      aria-labelledby="leadership-title"
      className="bg-[#f7f7f2] px-6 py-20 text-[#171817] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-[minmax(22rem,0.54fr)_minmax(0,0.9fr)] lg:gap-20 xl:gap-28">
        <LeadershipPortrait leader={featuredLeader} />

        <div className="flex flex-col justify-between gap-12 lg:py-3">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
              Leadership
            </p>
            <h2
              id="leadership-title"
              className="mt-7 max-w-4xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]"
            >
              Built by people
              <span className="block text-[#e35d3f]">who think long term.</span>
            </h2>
            <p className="mt-9 max-w-xl font-sans text-lg leading-8 text-[#171817]/68 sm:text-xl sm:leading-9 motion-safe:animate-[hero-rise_800ms_220ms_ease-out_both]">
              Bimal Global is led by founders who bring together technology,
              product thinking, engineering, and long-term ambition to build
              what comes next.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 border-y border-[#171817]/15 py-10 motion-safe:animate-[hero-rise_800ms_300ms_ease-out_both] sm:py-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(14rem,0.42fr)] lg:gap-12">
            <div>
              <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#e35d3f]">
                Founder
              </p>
              <h3 className="mt-5 font-serif text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.96] tracking-[-0.04em]">
                {featuredLeader.name}
              </h3>
              <p className="mt-4 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-[#171817]/48">
                {featuredLeader.role}
              </p>
            </div>

            <p className="self-end font-sans text-sm leading-7 text-[#171817]/66 sm:text-base sm:leading-8">
              {featuredLeader.bio}
            </p>
          </div>

          {secondaryLeaders.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {secondaryLeaders.map((leader) => (
                <SecondaryLeader leader={leader} key={leader.name} />
              ))}
            </div>
          ) : null}

          <div className="grid grid-cols-1 gap-8 border-t border-[#171817]/15 pt-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <p className="max-w-2xl font-serif text-[clamp(2.25rem,4.8vw,4.75rem)] leading-[0.96] tracking-[-0.04em] text-[#171817] motion-safe:animate-[hero-rise_800ms_360ms_ease-out_both]">
              Technology is built by teams.
              <span className="block text-[#171817]/55">Direction begins with people.</span>
            </p>

            <Link
              className="inline-flex min-h-12 w-fit items-center justify-center bg-[#171817] px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817] motion-safe:animate-[hero-rise_800ms_420ms_ease-out_both]"
              href="/company/leadership"
            >
              Meet Our Leadership
              <span aria-hidden="true" className="ml-8 text-lg leading-none">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadershipPortrait({ leader }: { leader: Leader }) {
  return (
    <div
      aria-label={leader.imageAlt}
      className="relative min-h-[30rem] overflow-hidden bg-[#17211f] text-[#f7f7f2] motion-safe:animate-[hero-reveal_1000ms_180ms_ease-out_both] sm:min-h-[42rem] lg:min-h-[48rem]"
      data-image-path={leader.imagePath}
      role="img"
      style={{
        backgroundImage: `linear-gradient(145deg, rgba(23, 33, 31, 0.1), rgba(23, 33, 31, 0.9)), url(${leader.imagePath})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(247,247,242,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.12)_1px,transparent_1px)] [background-size:3rem_3rem]" />
      <div className="absolute left-1/2 top-1/2 h-[17rem] w-[17rem] -translate-x-1/2 -translate-y-1/2 border border-[#f7f7f2]/20 sm:h-[25rem] sm:w-[25rem]" />
      <div className="absolute bottom-16 right-10 h-32 w-32 border-[1.5rem] border-[#e35d3f] opacity-90 sm:h-44 sm:w-44" />

      <div className="absolute inset-x-7 top-7 flex items-center justify-between border-t border-[#f7f7f2]/30 pt-4 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[#f7f7f2]/70 sm:inset-x-9 sm:top-9">
        <span>Founder portrait</span>
        <span>Verified profile</span>
      </div>

      <div className="absolute inset-x-7 bottom-7 font-sans sm:inset-x-9 sm:bottom-9">
        <p className="max-w-xs text-[0.62rem] font-semibold uppercase leading-5 tracking-[0.22em] text-[#f7f7f2]/60">
          Replace image at
        </p>
        <p className="mt-3 max-w-sm break-words text-xs leading-5 text-[#f7f7f2]/78">
          {leader.imagePath}
        </p>
      </div>
    </div>
  );
}

function SecondaryLeader({ leader }: { leader: Leader }) {
  return (
    <article className="border border-[#171817]/15 p-7 transition-colors hover:border-[#e35d3f]/50 sm:p-8">
      <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#e35d3f]">
        Founder
      </p>
      <h3 className="mt-5 font-serif text-4xl leading-none tracking-[-0.04em]">
        {leader.name}
      </h3>
      <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#171817]/48">
        {leader.role}
      </p>
      <p className="mt-6 font-sans text-sm leading-7 text-[#171817]/64">
        {leader.bio}
      </p>
    </article>
  );
}
