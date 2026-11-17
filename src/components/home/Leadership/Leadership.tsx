<<<<<<< HEAD
import Link from "next/link";
=======

import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Users,
  Target,
  Lightbulb,
} from "lucide-react";
>>>>>>> origin/develop

import { type Leader, leaders } from "@/content/leadership";

const featuredLeader = leaders.find((leader) => leader.featured) ?? leaders[0];
const secondaryLeaders = leaders.filter((leader) => !leader.featured);

export function Leadership() {
<<<<<<< HEAD
  if (!featuredLeader) {
    return null;
  }
=======
  if (!featuredLeader) return null;
>>>>>>> origin/develop

  return (
    <section
      id="leadership"
      aria-labelledby="leadership-title"
<<<<<<< HEAD
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
=======
      className="relative overflow-hidden bg-[#F7F5F0] px-6 py-20 text-[#17201F] sm:px-10 sm:py-24 lg:px-16 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-0 h-[30rem] w-[30rem] rounded-full border border-[#17201F]/[0.035]" />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 border-b border-[#17201F]/15 pb-8 sm:flex-row sm:items-end lg:mb-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#DC5235]">
                The People Behind Bimal Global
              </p>
            </div>

            <h2
              id="leadership-title"
              className="max-w-3xl font-serif text-[clamp(2.125rem,4vw,4rem)] leading-[1.02] tracking-[-0.045em]"
            >
              Leadership with
              <span className="block text-[#DC5235]">
                purpose and perspective.
              </span>
            </h2>
          </div>

          <p className="max-w-md font-sans text-sm leading-7 text-[#17201F]/60 sm:text-base sm:leading-8">
            Meet the people shaping our vision, guiding our teams, and
            building meaningful technology for the future.
          </p>
        </div>

        {/* Featured Leader */}
        <div className="grid overflow-hidden border border-[#17201F]/15 bg-white lg:grid-cols-[0.88fr_1.12fr]">
          <LeadershipPortrait leader={featuredLeader} />

          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12 xl:p-14">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center bg-[#FCEAE5] text-[#DC5235]">
                  <Users size={17} strokeWidth={1.7} />
                </span>
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#DC5235]">
                  Founder & Leadership
                </p>
              </div>

              <h3 className="mt-8 font-serif text-[clamp(2.125rem,4vw,4rem)] leading-[1.02] tracking-[-0.04em]">
                {featuredLeader.name}
              </h3>

              <p className="mt-4 font-sans text-xs font-bold uppercase tracking-[0.17em] text-[#17201F]/50 sm:text-sm">
                {featuredLeader.role}
              </p>

              <div className="my-8 h-px w-full bg-[#17201F]/12" />

              <p className="max-w-xl font-sans text-sm leading-7 text-[#17201F]/65 sm:text-base sm:leading-8">
                {featuredLeader.bio}
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-[#17201F]/12 pt-6">
              <div>
                <p className="font-serif text-xl">Bimal Global</p>
                <p className="mt-1 font-sans text-[11px] font-semibold uppercase tracking-[0.17em] text-[#17201F]/40">
                  Connecting Possibilities
                </p>
              </div>

              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#17201F]/15 text-[#DC5235]">
                <ArrowUpRight size={19} strokeWidth={1.5} />
              </span>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        {secondaryLeaders.length > 0 && (
          <div className="mt-16 lg:mt-20">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#DC5235]">
                  Our Leadership Team
                </p>
                <h3 className="mt-3 font-serif text-3xl tracking-[-0.03em] sm:text-4xl">
                  Building together.
                </h3>
              </div>

              <p className="font-sans text-xs text-[#17201F]/45">
                Shared vision. Collective experience.
              </p>
            </div>

            <div className="grid grid-cols-1 border-y border-[#17201F]/15 sm:grid-cols-2 lg:grid-cols-3">
              {secondaryLeaders.map((leader, index) => (
                <SecondaryLeader
                  leader={leader}
                  index={index}
                  key={leader.name}
                />
              ))}
            </div>
          </div>
        )}

        {/* Leadership Principles */}
        <div className="mt-16 grid gap-8 border-t border-[#17201F]/15 pt-10 sm:grid-cols-3 lg:mt-20">
          <LeadershipPrinciple
            icon={<Target size={19} strokeWidth={1.6} />}
            title="Clear Direction"
            description="A focused vision that connects business goals with meaningful outcomes."
          />

          <LeadershipPrinciple
            icon={<Lightbulb size={19} strokeWidth={1.6} />}
            title="Forward Thinking"
            description="An approach shaped by innovation, curiosity, and continuous improvement."
          />

          <LeadershipPrinciple
            icon={<Users size={19} strokeWidth={1.6} />}
            title="People First"
            description="Strong relationships, collaborative teams, and shared responsibility."
          />
        </div>

        {/* Footer CTA */}
        <div className="mt-14 flex flex-col gap-6 border-t border-[#17201F]/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-xl tracking-tight sm:text-2xl">
              Great leadership creates lasting possibilities.
            </p>
            <p className="mt-2 font-sans text-xs leading-6 text-[#17201F]/50">
              Discover the people and vision behind our work.
            </p>
          </div>

          <Link
            href="/company/leadership"
            className="group inline-flex min-h-12 w-fit items-center gap-7 bg-[#17201F] px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#DC5235] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DC5235]"
          >
            Meet Our Leadership
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
>>>>>>> origin/develop
        </div>
      </div>
    </section>
  );
}

function LeadershipPortrait({ leader }: { leader: Leader }) {
  return (
    <div
<<<<<<< HEAD
      aria-label={leader.imageAlt}
      className="relative min-h-[30rem] overflow-hidden bg-[#17211f] text-[#f7f7f2] motion-safe:animate-[hero-reveal_1000ms_180ms_ease-out_both] sm:min-h-[42rem] lg:min-h-[48rem]"
      data-image-path={leader.imagePath}
      role="img"
      style={{
        backgroundImage: `linear-gradient(145deg, rgba(23, 33, 31, 0.1), rgba(23, 33, 31, 0.9)), url("${leader.imagePath}")`,
=======
      role="img"
      aria-label={leader.imageAlt}
      className="group relative min-h-[27rem] overflow-hidden bg-[#17201F] sm:min-h-[36rem] lg:min-h-[43rem]"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(13,21,20,0.04) 25%, rgba(13,21,20,0.82) 100%), url("${leader.imagePath}")`,
>>>>>>> origin/develop
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
<<<<<<< HEAD
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(247,247,242,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.12)_1px,transparent_1px)] [background-size:3rem_3rem]" />
      <div className="absolute left-1/2 top-1/2 h-[17rem] w-[17rem] -translate-x-1/2 -translate-y-1/2 border border-[#f7f7f2]/20 sm:h-[25rem] sm:w-[25rem]" />
      <div className="absolute bottom-16 right-10 h-32 w-32 border-[1.5rem] border-[#e35d3f] opacity-90 sm:h-44 sm:w-44" />

      <div className="absolute inset-x-7 top-7 flex items-center justify-between border-t border-[#f7f7f2]/30 pt-4 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[#f7f7f2]/70 sm:inset-x-9 sm:top-9">
        <span>Founder portrait</span>
        <span>Leadership</span>
      </div>

      <div className="absolute inset-x-7 bottom-7 font-sans sm:inset-x-9 sm:bottom-9">
        <p className="max-w-xs text-[0.62rem] font-semibold uppercase leading-5 tracking-[0.22em] text-[#f7f7f2]/60">
          {leader.name}
        </p>
        <p className="mt-3 max-w-sm text-xs leading-5 text-[#f7f7f2]/78">
          {leader.role}
        </p>
=======
      <div className="absolute inset-0 bg-[#17201F]/10 transition-colors duration-500 group-hover:bg-transparent" />

      <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-9 sm:top-9">
        <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-white">
          Leadership
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">
          Featured Leader
        </p>

        <h3 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl">
          {leader.name}
        </h3>

        <p className="mt-2 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
          {leader.role}
        </p>

        <div className="mt-6 h-px w-full bg-white/25" />

        <div className="mt-4 flex items-center justify-between">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
            Bimal Global
          </span>
          <ArrowUpRight size={18} className="text-[#DC5235]" />
        </div>
>>>>>>> origin/develop
      </div>
    </div>
  );
}

<<<<<<< HEAD
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
=======
function SecondaryLeader({
  leader,
  index,
}: {
  leader: Leader;
  index: number;
}) {
  return (
    <article className="group border-b border-[#17201F]/15 px-5 py-7 transition-colors duration-300 hover:bg-white sm:px-7 sm:py-9 sm:even:border-l sm:even:border-l-[#17201F]/15 lg:border-b-0 lg:even:border-l-0 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:border-l-[#17201F]/15">
      <div className="flex items-center justify-between">
        <span className="font-sans text-[11px] font-bold tabular-nums tracking-wider text-[#DC5235]">
          {String(index + 2).padStart(2, "0")}
        </span>

        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#17201F]/15 text-[#DC5235] transition-all group-hover:border-[#DC5235] group-hover:bg-[#DC5235] group-hover:text-white">
          <ArrowUpRight size={15} />
        </span>
      </div>

      <h4 className="mt-8 font-serif text-2xl leading-tight tracking-[-0.025em] sm:text-3xl">
        {leader.name}
      </h4>

      <p className="mt-3 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-[#DC5235]">
        {leader.role}
      </p>

      <p className="mt-5 font-sans text-sm leading-7 text-[#17201F]/60">
>>>>>>> origin/develop
        {leader.bio}
      </p>
    </article>
  );
}
<<<<<<< HEAD
=======

function LeadershipPrinciple({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#DC5235]/30 bg-[#FCEAE5] text-[#DC5235]">
        {icon}
      </span>

      <div>
        <h4 className="font-serif text-xl tracking-tight">{title}</h4>
        <p className="mt-2 max-w-xs font-sans text-xs leading-6 text-[#17201F]/55">
          {description}
        </p>
      </div>
    </div>
  );
}
>>>>>>> origin/develop
