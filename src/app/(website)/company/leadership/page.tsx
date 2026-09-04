import Link from "next/link";

import {
  leadershipPage,
  leaders,
  type Leader,
  type LeadershipCapability,
  type LeadershipPrinciple,
} from "@/content/leadership";

const featuredLeader = leaders.find((leader) => leader.featured) ?? leaders[0];

export default function LeadershipPage() {
  return (
    <main className="overflow-hidden bg-[#f7f7f2] text-[#171817]">
      <LeadershipHero />
      <LeadershipIntroduction />
      {featuredLeader ? <FounderFeature leader={featuredLeader} /> : null}
      <FoundingTeam />
      <HowWeLead />
      <BuildingCompany />
      <LeadershipDirection />
      <LookForward />
      <LeadershipCta />
    </main>
  );
}

function LeadershipHero() {
  const { hero } = leadershipPage;

  return (
    <section
      aria-labelledby="leadership-page-title"
      className="relative isolate px-6 pb-20 pt-32 sm:px-10 sm:pb-28 sm:pt-36 lg:px-16 lg:pb-36 lg:pt-44"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(24rem,0.8fr)] lg:items-center lg:gap-20 xl:gap-28">
        <div className="max-w-4xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
            {hero.eyebrow}
          </p>
          <h1
            id="leadership-page-title"
            className="mt-7 font-serif text-[clamp(3.5rem,8vw,8.75rem)] leading-[0.9] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]"
          >
            {hero.heading}
            <span className="block text-[#e35d3f]">{hero.highlight}</span>
          </h1>
          <p className="mt-9 max-w-2xl font-sans text-lg leading-8 text-[#171817]/68 sm:text-xl sm:leading-9 motion-safe:animate-[hero-rise_800ms_220ms_ease-out_both]">
            {hero.summary}
          </p>
        </div>

        <VisualPanel
          alt={hero.imageAlt}
          imagePath={hero.imagePath}
          label="Leadership system"
          meta="Vision / Product / Engineering"
        />
      </div>
    </section>
  );
}

function LeadershipIntroduction() {
  const { introduction } = leadershipPage;

  return (
    <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 border-y border-[#171817]/15 py-14 lg:grid-cols-[minmax(0,0.86fr)_minmax(22rem,0.58fr)] lg:items-end lg:gap-20 lg:py-20">
        <h2 className="font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_ease-out_both]">
          {introduction.heading}
          <span className="block text-[#e35d3f]">{introduction.highlight}</span>
        </h2>
        <div className="grid gap-7 font-sans text-base leading-8 text-[#171817]/68 sm:text-lg sm:leading-9 motion-safe:animate-[hero-rise_800ms_160ms_ease-out_both]">
          {introduction.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderFeature({ leader }: { leader: Leader }) {
  const { founderFeature } = leadershipPage;

  return (
    <section
      aria-labelledby="founder-ceo-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-[minmax(22rem,0.52fr)_minmax(0,0.86fr)] lg:gap-20 xl:gap-28">
        <VisualPanel
          alt={leader.imageAlt}
          imagePath={leader.imagePath}
          label="Founder & CEO"
          meta="Bimal Vishwakarma"
          tall
        />

        <div className="flex flex-col justify-between gap-12 lg:py-3">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
              Founder & CEO
            </p>
            <h2
              id="founder-ceo-title"
              className="mt-7 max-w-4xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]"
            >
              {founderFeature.heading}
              <span className="block text-[#e35d3f]">
                {founderFeature.highlight}
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 border-y border-[#f7f7f2]/15 py-10 sm:py-12 lg:grid-cols-[minmax(0,0.62fr)_minmax(16rem,0.42fr)] lg:gap-12">
            <div>
              <h3 className="font-serif text-[clamp(2.75rem,5.5vw,5.75rem)] leading-[0.96] tracking-[-0.04em]">
                {leader.name}
              </h3>
              <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#f7f7f2]/48">
                {leader.role}
              </p>
            </div>
            <div className="grid gap-6 self-end font-sans text-sm leading-7 text-[#f7f7f2]/66 sm:text-base sm:leading-8">
              {founderFeature.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <FocusAreas areas={leader.focusAreas} inverted />
        </div>
      </div>
    </section>
  );
}

function FoundingTeam() {
  const { team } = leadershipPage;

  return (
    <section
      aria-labelledby="founding-team-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow={team.eyebrow}
          heading={team.heading}
          highlight={team.highlight}
          id="founding-team-title"
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-3">
          {leaders.map((leader, index) => (
            <FounderCard index={index} key={leader.name} leader={leader} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderCard({ index, leader }: { index: number; leader: Leader }) {
  return (
    <article
      className="group border border-[#171817]/15 transition-colors hover:border-[#e35d3f]/60 motion-safe:animate-[hero-rise_800ms_ease-out_both]"
      style={{ animationDelay: `${180 + index * 90}ms` }}
    >
      <ProfileVisual leader={leader} />
      <div className="p-7 sm:p-8">
        <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#e35d3f]">
          {leader.specialty ?? leader.role}
        </p>
        <h3 className="mt-5 font-serif text-[clamp(2.35rem,4.6vw,4.75rem)] leading-[0.96] tracking-[-0.04em] transition-colors group-hover:text-[#e35d3f]">
          {leader.name}
        </h3>
        <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#171817]/48">
          {leader.role}
        </p>
        <p className="mt-6 font-sans text-sm leading-7 text-[#171817]/64 sm:text-base sm:leading-8">
          {leader.bio}
        </p>
        <FocusAreas areas={leader.focusAreas} />
      </div>
    </article>
  );
}

function HowWeLead() {
  const { principles } = leadershipPage;

  return (
    <section
      aria-labelledby="how-we-lead-title"
      className="bg-[#f7f7f2] px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow={principles.eyebrow}
          heading={principles.heading}
          highlight={principles.highlight}
          id="how-we-lead-title"
        />
        <div className="mt-12 divide-y divide-[#171817]/15 border-y border-[#171817]/15 lg:mt-16">
          {principles.items.map((principle, index) => (
            <PrincipleItem
              index={index}
              key={principle.number}
              principle={principle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PrincipleItem({
  index,
  principle,
}: {
  index: number;
  principle: LeadershipPrinciple;
}) {
  return (
    <article
      className="grid gap-5 py-8 sm:grid-cols-[6rem_minmax(14rem,0.5fr)_minmax(0,1fr)] sm:gap-10 sm:py-10 motion-safe:animate-[hero-rise_800ms_ease-out_both]"
      style={{ animationDelay: `${180 + index * 70}ms` }}
    >
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
        {principle.number}
      </p>
      <h3 className="font-serif text-[clamp(2.1rem,4vw,4.25rem)] leading-none tracking-[-0.04em]">
        {principle.title}
      </h3>
      <p className="max-w-2xl self-end font-sans text-sm leading-7 text-[#171817]/64 sm:text-base sm:leading-8">
        {principle.description}
      </p>
    </article>
  );
}

function BuildingCompany() {
  const { buildingCompany } = leadershipPage;

  return (
    <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.55fr)] lg:items-end lg:gap-16">
        <VisualPanel
          imagePath={buildingCompany.imagePath}
          label="Building the company"
          meta="Ideas / People / Systems"
          tall
        />
        <div className="border-y border-[#171817]/15 py-12 sm:py-16 lg:py-20">
          <h2 className="font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.92] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_ease-out_both]">
            {buildingCompany.heading}
            <span className="block text-[#e35d3f]">
              {buildingCompany.highlight}
            </span>
          </h2>
          <div className="mt-8 grid gap-6 font-sans text-lg leading-8 text-[#171817]/66 sm:text-xl sm:leading-9">
            {buildingCompany.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadershipDirection() {
  const { direction } = leadershipPage;

  return (
    <section
      aria-labelledby="leadership-direction-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(24rem,0.85fr)] lg:items-center lg:gap-20 xl:gap-28">
        <div>
          <SectionHeading
            eyebrow={direction.eyebrow}
            heading={direction.heading}
            highlight={direction.highlight}
            id="leadership-direction-title"
            inverted
          />
          <p className="mt-9 max-w-xl font-sans text-lg leading-8 text-[#f7f7f2]/68 sm:text-xl sm:leading-9">
            {direction.summary}
          </p>
        </div>

        <div className="relative min-h-[34rem] overflow-hidden border border-[#f7f7f2]/15 bg-[#202320] p-6 motion-safe:animate-[hero-reveal_1000ms_180ms_ease-out_both] sm:p-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(247,247,242,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.1)_1px,transparent_1px)] [background-size:3rem_3rem]"
          />
          <div className="relative grid min-h-[30rem] place-items-center">
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 border border-[#f7f7f2]/20 sm:h-72 sm:w-72" />
            <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 border border-[#e35d3f]/60 sm:h-44 sm:w-44" />
            <p className="relative z-10 max-w-40 text-center font-sans text-xs font-semibold uppercase leading-5 tracking-[0.24em] text-[#f7f7f2]">
              Leadership Direction
            </p>
            <div className="absolute inset-0 grid grid-cols-1 content-between gap-4 sm:grid-cols-2">
              {direction.capabilities.map((item, index) => (
                <CapabilityNode
                  index={index}
                  item={item}
                  key={item.href}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilityNode({
  index,
  item,
}: {
  index: number;
  item: LeadershipCapability;
}) {
  return (
    <Link
      className="group flex min-h-20 items-center justify-between gap-4 border border-[#f7f7f2]/14 bg-[#171817]/60 px-5 py-4 font-sans text-sm font-semibold text-[#f7f7f2]/72 outline-none transition-colors hover:border-[#e35d3f]/70 hover:text-[#f7f7f2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f] motion-safe:animate-[hero-rise_800ms_ease-out_both]"
      href={item.href}
      style={{ animationDelay: `${220 + index * 80}ms` }}
    >
      {item.title}
      <span
        aria-hidden="true"
        className="text-lg leading-none text-[#e35d3f] transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2"
      >
        &rarr;
      </span>
    </Link>
  );
}

function LookForward() {
  const { forward } = leadershipPage;

  return (
    <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 border-y border-[#171817]/15 py-14 lg:grid-cols-[minmax(0,0.86fr)_minmax(22rem,0.58fr)] lg:items-end lg:gap-20 lg:py-20">
        <h2 className="font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_ease-out_both]">
          {forward.heading}
          <span className="block text-[#e35d3f]">{forward.highlight}</span>
        </h2>
        <div className="grid gap-7 font-sans text-base leading-8 text-[#171817]/68 sm:text-lg sm:leading-9">
          {forward.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipCta() {
  const { cta } = leadershipPage;

  return (
    <section className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.55fr)] lg:items-end lg:gap-20">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
            {cta.eyebrow}
          </p>
          <h2 className="mt-7 font-serif text-[clamp(3.5rem,8vw,8.75rem)] leading-[0.9] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]">
            {cta.heading}
            <span className="block text-[#e35d3f]">{cta.highlight}</span>
          </h2>
        </div>
        <div>
          <p className="max-w-xl font-sans text-lg leading-8 text-[#f7f7f2]/68 sm:text-xl sm:leading-9">
            {cta.summary}
          </p>
          <div className="mt-10 flex flex-col gap-3 font-sans text-sm font-semibold sm:flex-row lg:flex-col xl:flex-row">
            <Link
              className="inline-flex min-h-12 items-center justify-center bg-[#f7f7f2] px-6 text-[#171817] transition-colors hover:bg-[#e35d3f] hover:text-[#f7f7f2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7f7f2]"
              href={cta.primaryCta.href}
            >
              {cta.primaryCta.label}
              <span aria-hidden="true" className="ml-8 text-lg leading-none">
                &rarr;
              </span>
            </Link>
            <Link
              className="inline-flex min-h-12 items-center justify-center border border-[#f7f7f2]/25 px-6 text-[#f7f7f2] transition-colors hover:border-[#e35d3f] hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7f7f2]"
              href={cta.secondaryCta.href}
            >
              {cta.secondaryCta.label}
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

function FocusAreas({
  areas,
  inverted = false,
}: {
  areas: string[];
  inverted?: boolean;
}) {
  return (
    <ul
      className={`mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t pt-6 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] ${
        inverted
          ? "border-[#f7f7f2]/15 text-[#f7f7f2]/54"
          : "border-[#171817]/15 text-[#171817]/48"
      }`}
    >
      {areas.map((area) => (
        <li key={area}>{area}</li>
      ))}
    </ul>
  );
}

function SectionHeading({
  eyebrow,
  heading,
  highlight,
  id,
  inverted = false,
}: {
  eyebrow: string;
  heading: string;
  highlight?: string;
  id: string;
  inverted?: boolean;
}) {
  return (
    <div>
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
        {eyebrow}
      </p>
      <h2
        className={`mt-7 max-w-5xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both] ${
          inverted ? "text-[#f7f7f2]" : "text-[#171817]"
        }`}
        id={id}
      >
        {heading}
        {highlight ? (
          <span className="block text-[#e35d3f]">{highlight}</span>
        ) : null}
      </h2>
    </div>
  );
}

function ProfileVisual({ leader }: { leader: Leader }) {
  return (
    <div
      aria-label={leader.imageAlt}
      className="relative min-h-[24rem] overflow-hidden bg-[#17211f] text-[#f7f7f2] sm:min-h-[30rem]"
      data-image-path={leader.imagePath}
      role="img"
      style={{
        backgroundImage: `linear-gradient(145deg, rgba(23, 33, 31, 0.16), rgba(23, 33, 31, 0.9)), url(${leader.imagePath})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-35 transition-transform duration-500 group-hover:scale-105 [background-image:linear-gradient(rgba(247,247,242,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.12)_1px,transparent_1px)] [background-size:3rem_3rem]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 border border-[#f7f7f2]/22 sm:h-56 sm:w-56"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-8 right-8 h-24 w-24 border-[1.15rem] border-[#e35d3f] opacity-90 sm:h-32 sm:w-32"
      />
      <p className="absolute inset-x-7 top-7 border-t border-[#f7f7f2]/30 pt-4 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[#f7f7f2]/70 sm:inset-x-8">
        {leader.role}
      </p>
    </div>
  );
}

function VisualPanel({
  alt,
  imagePath,
  label,
  meta,
  tall = false,
}: {
  alt?: string;
  imagePath: string;
  label: string;
  meta: string;
  tall?: boolean;
}) {
  return (
    <div
      aria-label={alt ?? label}
      className={`relative overflow-hidden bg-[#17211f] text-[#f7f7f2] motion-safe:animate-[hero-reveal_1000ms_180ms_ease-out_both] ${
        tall
          ? "min-h-[30rem] sm:min-h-[42rem] lg:min-h-[48rem]"
          : "min-h-[28rem] sm:min-h-[36rem] lg:min-h-[42rem]"
      }`}
      data-image-path={imagePath}
      role="img"
      style={{
        backgroundImage: `linear-gradient(145deg, rgba(23, 33, 31, 0.12), rgba(23, 33, 31, 0.92)), url(${imagePath})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(247,247,242,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.12)_1px,transparent_1px)] [background-size:3rem_3rem]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[17rem] w-[17rem] -translate-x-1/2 -translate-y-1/2 border border-[#f7f7f2]/20 sm:h-[25rem] sm:w-[25rem]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-16 right-10 h-32 w-32 border-[1.5rem] border-[#e35d3f] opacity-90 sm:h-44 sm:w-44"
      />
      <div className="absolute inset-x-7 top-7 flex items-center justify-between border-t border-[#f7f7f2]/30 pt-4 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[#f7f7f2]/70 sm:inset-x-9 sm:top-9">
        <span>{label}</span>
        <span>{meta}</span>
      </div>
      <div className="absolute inset-x-7 bottom-7 font-sans sm:inset-x-9 sm:bottom-9">
        <p className="max-w-xs text-[0.62rem] font-semibold uppercase leading-5 tracking-[0.22em] text-[#f7f7f2]/60">
          Replace image at
        </p>
        <p className="mt-3 max-w-sm break-words text-xs leading-5 text-[#f7f7f2]/78">
          {imagePath}
        </p>
      </div>
    </div>
  );
}
