import Link from "next/link";

import {
  company,
  type CompanyBuildArea,
  type CompanyCapability,
  type CompanyJourneyItem,
  type CompanyMetric,
  type CompanyPresenceItem,
  type CompanyPrinciple,
} from "@/content/company";

export default function CompanyPage() {
  return (
    <main className="overflow-hidden bg-[#f7f7f2] text-[#171817]">
      <CompanyHero />
      <WhoWeAre />
      <Philosophy />
      <WhatWeBuild />
      <Principles />
      <TechnologyEcosystem />
      <LongTerm />
      <Journey />
      <Presence />
      <LeadershipPreview />
      <CompanyNumbers />
      <CompanyCta />
    </main>
  );
}

function CompanyHero() {
  const { hero } = company;

  return (
    <section
      aria-labelledby="company-hero-title"
      className="relative isolate px-6 pb-20 pt-32 sm:px-10 sm:pb-28 sm:pt-36 lg:px-16 lg:pb-36 lg:pt-44"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(24rem,0.8fr)] lg:items-center lg:gap-20 xl:gap-28">
        <div className="max-w-4xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
            {hero.eyebrow}
          </p>
          <h1
            id="company-hero-title"
            className="mt-7 font-serif text-[clamp(3.5rem,8vw,8.75rem)] leading-[0.9] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]"
          >
            {hero.heading}
            <span className="block text-[#e35d3f]">{hero.highlight}</span>
          </h1>
          <p className="mt-9 max-w-2xl font-sans text-lg leading-8 text-[#171817]/68 sm:text-xl sm:leading-9 motion-safe:animate-[hero-rise_800ms_220ms_ease-out_both]">
            {hero.summary}
          </p>
          <div className="mt-10 flex flex-col gap-3 font-sans text-sm font-semibold sm:flex-row motion-safe:animate-[hero-rise_800ms_320ms_ease-out_both]">
            <Link
              className="inline-flex min-h-12 items-center justify-center bg-[#171817] px-6 text-[#f7f7f2] transition-colors hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
              href={hero.primaryCta.href}
            >
              {hero.primaryCta.label}
              <span aria-hidden="true" className="ml-8 text-lg leading-none">
                &rarr;
              </span>
            </Link>
            <Link
              className="inline-flex min-h-12 items-center justify-center border border-[#171817]/25 px-6 text-[#171817] transition-colors hover:border-[#171817] hover:bg-[#171817]/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
              href={hero.secondaryCta.href}
            >
              {hero.secondaryCta.label}
              <span aria-hidden="true" className="ml-8 text-lg leading-none">
                &rarr;
              </span>
            </Link>
          </div>
        </div>

        <VisualPanel
          alt={hero.imageAlt}
          imagePath={hero.imagePath}
          label="Company system"
          meta="Strategy / Product / Engineering"
        />
      </div>
    </section>
  );
}

function WhoWeAre() {
  const { whoWeAre } = company;

  return (
    <section
      aria-labelledby="who-we-are-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 border-y border-[#171817]/15 py-14 lg:grid-cols-[minmax(0,0.78fr)_minmax(24rem,0.72fr)] lg:gap-20 lg:py-20">
        <SectionHeading
          eyebrow={whoWeAre.eyebrow}
          heading={whoWeAre.heading}
          highlight={whoWeAre.highlight}
          id="who-we-are-title"
        />
        <div className="grid gap-7 self-end font-sans text-base leading-8 text-[#171817]/68 sm:text-lg sm:leading-9">
          {whoWeAre.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  const { philosophy } = company;

  return (
    <section className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.45fr)] lg:items-end lg:gap-20">
        <p className="font-serif text-[clamp(3rem,8vw,8rem)] leading-[0.9] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_ease-out_both]">
          {philosophy.heading}
          <span className="block text-[#e35d3f]">{philosophy.highlight}</span>
        </p>
        <div className="border-l border-[#f7f7f2]/20 pl-6 motion-safe:animate-[hero-rise_800ms_160ms_ease-out_both]">
          {philosophy.paragraphs.map((paragraph) => (
            <p
              className="max-w-md font-sans text-lg leading-8 text-[#f7f7f2]/68 sm:text-xl sm:leading-9"
              key={paragraph}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeBuild() {
  const { buildAreas } = company;

  return (
    <section
      aria-labelledby="what-we-build-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 border-b border-[#171817]/15 pb-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.72fr)] lg:gap-20 lg:pb-20">
          <SectionHeading
            eyebrow={buildAreas.eyebrow}
            heading={buildAreas.heading}
            highlight={buildAreas.highlight}
            id="what-we-build-title"
          />
          <p className="max-w-xl self-end font-sans text-lg leading-8 text-[#171817]/68 sm:text-xl sm:leading-9 motion-safe:animate-[hero-rise_800ms_220ms_ease-out_both]">
            BIMAL GLOBAL connects product thinking with practical technology
            execution across the systems companies need to build, launch, and
            evolve.
          </p>
        </div>

        <div className="grid grid-cols-1 border-t border-[#171817]/15 lg:grid-cols-2">
          {buildAreas.items.map((item, index) => (
            <BuildAreaItem index={index} item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BuildAreaItem({
  index,
  item,
}: {
  index: number;
  item: CompanyBuildArea;
}) {
  return (
    <article
      className="group grid gap-5 border-b border-[#171817]/15 py-8 transition-colors hover:border-[#e35d3f]/60 hover:bg-[#171817]/[0.025] sm:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)_auto] sm:gap-8 sm:py-10 lg:px-5 motion-safe:animate-[hero-rise_800ms_ease-out_both]"
      style={{ animationDelay: `${220 + index * 70}ms` }}
    >
      <h3 className="font-serif text-[clamp(2rem,4vw,4rem)] leading-none tracking-[-0.04em] transition-colors group-hover:text-[#e35d3f]">
        {item.title}
      </h3>
      <p className="max-w-xl font-sans text-sm leading-7 text-[#171817]/62 sm:text-base sm:leading-8">
        {item.description}
      </p>
      <span className="font-sans text-2xl leading-none text-[#e35d3f] transition-transform duration-300 group-hover:translate-x-2">
        &rarr;
      </span>
    </article>
  );
}

function Principles() {
  const { principles } = company;

  return (
    <section
      aria-labelledby="principles-title"
      className="bg-[#f7f7f2] px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow={principles.eyebrow}
          heading={principles.heading}
          highlight={principles.highlight}
          id="principles-title"
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
  principle: CompanyPrinciple;
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

function TechnologyEcosystem() {
  const { ecosystem } = company;

  return (
    <section
      aria-labelledby="ecosystem-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(24rem,0.85fr)] lg:items-center lg:gap-20 xl:gap-28">
        <SectionHeading
          eyebrow={ecosystem.eyebrow}
          heading={ecosystem.heading}
          highlight={ecosystem.highlight}
          id="ecosystem-title"
          inverted
        />
        <div className="relative min-h-[34rem] overflow-hidden border border-[#f7f7f2]/15 bg-[#202320] p-6 motion-safe:animate-[hero-reveal_1000ms_180ms_ease-out_both] sm:p-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(247,247,242,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.1)_1px,transparent_1px)] [background-size:3rem_3rem]"
          />
          <div className="relative grid min-h-[30rem] place-items-center">
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 border border-[#f7f7f2]/20 sm:h-72 sm:w-72" />
            <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 border border-[#e35d3f]/60 sm:h-44 sm:w-44" />
            <p className="relative z-10 max-w-36 text-center font-sans text-xs font-semibold uppercase leading-5 tracking-[0.24em] text-[#f7f7f2]">
              Bimal Global
            </p>
            <div className="absolute inset-0 grid grid-cols-1 content-between gap-4 sm:grid-cols-2">
              {ecosystem.items.map((item, index) => (
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
  item: CompanyCapability;
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

function LongTerm() {
  const { longTerm } = company;

  return (
    <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.55fr)] lg:items-end lg:gap-16">
        <VisualPanel
          imagePath={longTerm.imagePath}
          label="Long-term systems"
          meta="Build / Maintain / Evolve"
          tall
        />
        <div className="border-y border-[#171817]/15 py-12 sm:py-16 lg:py-20">
          <h2 className="font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.92] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_ease-out_both]">
            {longTerm.heading}
            <span className="block text-[#e35d3f]">{longTerm.highlight}</span>
          </h2>
          <div className="mt-8 grid gap-6 font-sans text-lg leading-8 text-[#171817]/66 sm:text-xl sm:leading-9">
            {longTerm.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const { journey } = company;

  return (
    <section
      aria-labelledby="journey-title"
      className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow={journey.eyebrow}
          heading={journey.heading}
          highlight={journey.highlight}
          id="journey-title"
        />
        <div className="mt-12 grid grid-cols-1 border-y border-[#171817]/15 lg:mt-16 lg:grid-cols-3">
          {journey.items.map((item, index) => (
            <JourneyItem index={index} item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneyItem({
  index,
  item,
}: {
  index: number;
  item: CompanyJourneyItem;
}) {
  return (
    <article
      className="border-b border-[#171817]/15 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-10 lg:last:border-r-0 motion-safe:animate-[hero-rise_800ms_ease-out_both]"
      style={{ animationDelay: `${180 + index * 90}ms` }}
    >
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
        {item.label}
      </p>
      <h3 className="mt-8 font-serif text-[clamp(2.5rem,5vw,5.25rem)] leading-none tracking-[-0.04em]">
        {item.title}
      </h3>
      <p className="mt-7 max-w-md font-sans text-sm leading-7 text-[#171817]/64 sm:text-base sm:leading-8">
        {item.description}
      </p>
    </article>
  );
}

function Presence() {
  const { presence } = company;

  return (
    <section
      aria-labelledby="presence-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 border-b border-[#f7f7f2]/15 pb-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.72fr)] lg:gap-20 lg:pb-20">
          <SectionHeading
            eyebrow={presence.eyebrow}
            heading={presence.heading}
            highlight={presence.highlight}
            id="presence-title"
            inverted
          />
          <div className="self-end">
            <p className="max-w-xl font-sans text-lg leading-8 text-[#f7f7f2]/68 sm:text-xl sm:leading-9">
              {presence.summary}
            </p>
            <Link
              className="mt-8 inline-flex min-h-12 w-fit items-center justify-center border border-[#f7f7f2]/28 px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:border-[#e35d3f] hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f]"
              href={presence.cta.href}
            >
              {presence.cta.label}
              <span aria-hidden="true" className="ml-8 text-lg leading-none">
                &rarr;
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 pt-12 lg:grid-cols-3 lg:pt-16">
          {presence.items.map((item, index) => (
            <PresenceItem index={index} item={item} key={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PresenceItem({
  index,
  item,
}: {
  index: number;
  item: CompanyPresenceItem;
}) {
  return (
    <article
      className="relative min-h-[24rem] overflow-hidden border border-[#f7f7f2]/15 bg-[#202320] p-7 motion-safe:animate-[hero-reveal_900ms_ease-out_both] sm:p-8"
      data-image-path={item.imagePath}
      style={{
        animationDelay: `${180 + index * 90}ms`,
        backgroundImage: item.imagePath
          ? `linear-gradient(145deg, rgba(23, 24, 23, 0.16), rgba(23, 24, 23, 0.9)), url(${item.imagePath})`
          : undefined,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(247,247,242,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.1)_1px,transparent_1px)] [background-size:3rem_3rem]"
      />
      <div className="relative z-10 flex h-full min-h-[20rem] flex-col justify-between">
        <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#e35d3f]">
          {item.label}
        </p>
        <div>
          <h3 className="font-serif text-[clamp(3rem,6vw,6rem)] leading-none tracking-[-0.04em]">
            {item.label}
          </h3>
          <p className="mt-5 max-w-sm font-sans text-sm leading-7 text-[#f7f7f2]/68 sm:text-base sm:leading-8">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}

function LeadershipPreview() {
  const { leadership } = company;

  return (
    <section
      aria-labelledby="leadership-preview-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-[minmax(22rem,0.5fr)_minmax(0,0.85fr)] lg:gap-20 xl:gap-28">
        <VisualPanel
          alt={leadership.imageAlt}
          imagePath={leadership.imagePath}
          label="Founder profile"
          meta="Verified leadership"
          tall
        />
        <div className="flex flex-col justify-between gap-12">
          <SectionHeading
            eyebrow={leadership.eyebrow}
            heading={leadership.heading}
            highlight={leadership.highlight}
            id="leadership-preview-title"
          />
          <div className="grid grid-cols-1 gap-10 border-y border-[#171817]/15 py-10 sm:py-12 lg:grid-cols-[minmax(0,0.68fr)_minmax(14rem,0.42fr)]">
            <div>
              <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#e35d3f]">
                Founder
              </p>
              <h3 className="mt-5 font-serif text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.96] tracking-[-0.04em]">
                {leadership.founderName}
              </h3>
              <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#171817]/48">
                {leadership.founderRole}
              </p>
            </div>
            <p className="self-end font-sans text-sm leading-7 text-[#171817]/66 sm:text-base sm:leading-8">
              {leadership.summary}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <p className="max-w-xl font-serif text-[clamp(2.25rem,4.8vw,4.75rem)] leading-[0.96] tracking-[-0.04em] text-[#171817]/72">
              {leadership.teamNote}
            </p>
            <Link
              className="inline-flex min-h-12 w-fit items-center justify-center bg-[#171817] px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
              href={leadership.cta.href}
            >
              {leadership.cta.label}
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

function CompanyNumbers() {
  return (
    <section
      aria-label="Company structure"
      className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 border-y border-[#171817]/15 sm:grid-cols-2 lg:grid-cols-4">
        {company.metrics.map((metric, index) => (
          <MetricItem index={index} key={metric.label} metric={metric} />
        ))}
      </div>
    </section>
  );
}

function MetricItem({
  index,
  metric,
}: {
  index: number;
  metric: CompanyMetric;
}) {
  return (
    <article
      className="border-b border-[#171817]/15 py-8 sm:px-7 lg:border-b-0 lg:border-r lg:py-10 lg:last:border-r-0 motion-safe:animate-[hero-rise_800ms_ease-out_both]"
      style={{ animationDelay: `${160 + index * 70}ms` }}
    >
      <p className="font-serif text-[clamp(3rem,6vw,6.25rem)] leading-none tracking-[-0.04em] text-[#e35d3f]">
        {metric.value}
      </p>
      <p className="mt-5 max-w-xs font-sans text-[0.68rem] font-semibold uppercase leading-6 tracking-[0.2em] text-[#171817]/56">
        {metric.label}
      </p>
    </article>
  );
}

function CompanyCta() {
  const { cta } = company;

  return (
    <section className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.55fr)] lg:items-end lg:gap-20">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
            Bimal Global
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
