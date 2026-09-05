import type { Metadata } from "next";
import Link from "next/link";

import {
  presencePage,
  type PresenceCapability,
  type PresenceConcept,
  type PresenceCountry,
  type PresenceMetric,
} from "@/content/presence";

export const metadata: Metadata = {
  description:
    "BIMAL GLOBAL works from India and Nepal with a global outlook for technology, engineering, product, cloud, and AI initiatives.",
  title: "Presence | BIMAL GLOBAL",
};

export default function PresencePage() {
  return (
    <main className="overflow-hidden bg-[#f7f7f2] text-[#171817]">
      <PresenceHero />
      <PresenceIntroduction />
      {presencePage.countries.map((country, index) => (
        <CountrySection country={country} flipped={index % 2 === 1} key={country.code} />
      ))}
      <IndiaNepalConnection />
      <GlobalOutlook />
      <MarketPerspective />
      <PresenceVisualization />
      <HowWeCollaborate />
      <FuturePresence />
      <PresenceMetrics />
      <CompanyConnection />
      <PresenceCta />
    </main>
  );
}

function PresenceHero() {
  const { hero } = presencePage;

  return (
    <section
      aria-labelledby="presence-page-title"
      className="relative isolate px-6 pb-20 pt-32 sm:px-10 sm:pb-28 sm:pt-36 lg:px-16 lg:pb-36 lg:pt-44"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(24rem,0.8fr)] lg:items-center lg:gap-20 xl:gap-28">
        <div className="max-w-4xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
            {hero.eyebrow}
          </p>
          <h1
            id="presence-page-title"
            className="mt-7 font-serif text-[clamp(3.5rem,8vw,8.75rem)] leading-[0.9] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]"
          >
            {hero.heading}
            <span className="block text-[#e35d3f]">{hero.highlight}</span>
          </h1>
          <p className="mt-9 max-w-2xl font-sans text-lg leading-8 text-[#171817]/68 sm:text-xl sm:leading-9 motion-safe:animate-[hero-rise_800ms_220ms_ease-out_both]">
            {hero.summary}
          </p>
          <div className="mt-10 flex flex-col gap-3 font-sans text-sm font-semibold sm:flex-row motion-safe:animate-[hero-rise_800ms_320ms_ease-out_both]">
            <Link className="inline-flex min-h-12 items-center justify-center bg-[#171817] px-6 text-[#f7f7f2] transition-colors hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <span aria-hidden="true" className="ml-8 text-lg leading-none">&rarr;</span>
            </Link>
            <Link className="inline-flex min-h-12 items-center justify-center border border-[#171817]/25 px-6 text-[#171817] transition-colors hover:border-[#171817] hover:bg-[#171817]/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
              <span aria-hidden="true" className="ml-8 text-lg leading-none">&rarr;</span>
            </Link>
          </div>
        </div>

        <VisualPanel
          alt={hero.imageAlt}
          imagePath={hero.imagePath}
          label="India / Nepal"
          meta="Global outlook"
        />
      </div>
    </section>
  );
}

function PresenceIntroduction() {
  const { introduction } = presencePage;

  return (
    <section
      aria-labelledby="where-we-work-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 border-y border-[#171817]/15 py-14 lg:grid-cols-[minmax(0,0.78fr)_minmax(24rem,0.72fr)] lg:gap-20 lg:py-20">
        <SectionHeading
          eyebrow={introduction.eyebrow}
          heading={introduction.heading}
          highlight={introduction.highlight}
          id="where-we-work-title"
        />
        <div className="grid gap-7 self-end font-sans text-base leading-8 text-[#171817]/68 sm:text-lg sm:leading-9">
          {introduction.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountrySection({
  country,
  flipped,
}: {
  country: PresenceCountry;
  flipped: boolean;
}) {
  return (
    <section
      aria-labelledby={`${country.code.toLowerCase()}-presence-title`}
      className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.84fr)_minmax(22rem,0.62fr)] lg:items-end lg:gap-16">
        <div className={flipped ? "lg:order-2" : ""}>
          <VisualPanel
            imagePath={country.imagePath}
            label={country.country}
            meta={country.status}
            tall
          />
        </div>
        <div className={`border-y border-[#171817]/15 py-12 sm:py-16 lg:py-20 ${flipped ? "lg:order-1" : ""}`}>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
            {country.country}
          </p>
          <h2
            id={`${country.code.toLowerCase()}-presence-title`}
            className="mt-7 font-serif text-[clamp(2.85rem,6vw,6.6rem)] leading-[0.94] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]"
          >
            {country.heading}
          </h2>
          <p className="mt-8 max-w-xl font-sans text-lg leading-8 text-[#171817]/66 sm:text-xl sm:leading-9">
            {country.description}
          </p>
          <p className="mt-8 inline-flex border-l border-[#171817]/25 pl-6 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#171817]/55">
            {country.country} / {country.status}
          </p>
        </div>
      </div>
    </section>
  );
}

function IndiaNepalConnection() {
  const { connection } = presencePage;

  return (
    <section className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(22rem,0.58fr)] lg:items-end lg:gap-20">
          <h2 className="font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_ease-out_both]">
            {connection.heading}
            <span className="block text-[#e35d3f]">{connection.highlight}</span>
          </h2>
          <p className="max-w-xl font-sans text-lg leading-8 text-[#f7f7f2]/68 sm:text-xl sm:leading-9">
            {connection.summary}
          </p>
        </div>

        <div className="mt-14 border-y border-[#f7f7f2]/15 py-10 lg:mt-20 lg:py-14">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)_minmax(0,0.4fr)] lg:items-center">
            <CountryNode label="India" />
            <div className="relative min-h-36 overflow-hidden border border-[#f7f7f2]/15 bg-[#202320] p-6">
              <div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(247,247,242,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.1)_1px,transparent_1px)] [background-size:3rem_3rem]" />
              <div className="relative z-10 flex h-full min-h-24 flex-col justify-center gap-4">
                <div className="h-px w-full bg-[#f7f7f2]/24" />
                <div className="flex flex-wrap justify-center gap-3">
                  {connection.disciplines.map((item) => (
                    <span className="border border-[#f7f7f2]/16 px-4 py-2 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#f7f7f2]/70" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <div className="h-px w-full bg-[#e35d3f]/70" />
              </div>
            </div>
            <CountryNode label="Nepal" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CountryNode({ label }: { label: string }) {
  return (
    <div className="grid min-h-36 place-items-center border border-[#f7f7f2]/15 bg-[#202320] p-6">
      <div className="text-center">
        <p className="font-serif text-[clamp(3rem,7vw,6.5rem)] leading-none tracking-[-0.04em]">
          {label}
        </p>
        <p className="mt-5 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#e35d3f]">
          Operational Presence
        </p>
      </div>
    </div>
  );
}

function GlobalOutlook() {
  const { globalOutlook } = presencePage;

  return (
    <section
      aria-labelledby="global-outlook-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 border-y border-[#171817]/15 py-14 lg:grid-cols-[minmax(0,0.78fr)_minmax(24rem,0.72fr)] lg:gap-20 lg:py-20">
        <SectionHeading
          eyebrow={globalOutlook.eyebrow}
          heading={globalOutlook.heading}
          highlight={globalOutlook.highlight}
          id="global-outlook-title"
        />
        <div className="grid gap-7 self-end font-sans text-base leading-8 text-[#171817]/68 sm:text-lg sm:leading-9">
          {globalOutlook.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarketPerspective() {
  const { marketPerspective } = presencePage;

  return (
    <section className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36">
      <div className="mx-auto w-full max-w-[1440px]">
        <h2 className="max-w-5xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_ease-out_both]">
          {marketPerspective.heading}
          <span className="block text-[#e35d3f]">{marketPerspective.highlight}</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 border-y border-[#171817]/15 lg:mt-16 lg:grid-cols-3">
          {marketPerspective.items.map((item, index) => (
            <ConceptItem index={index} item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ConceptItem({
  index,
  item,
}: {
  index: number;
  item: PresenceConcept;
}) {
  return (
    <article
      className="border-b border-[#171817]/15 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-10 lg:last:border-r-0 motion-safe:animate-[hero-rise_800ms_ease-out_both]"
      style={{ animationDelay: `${180 + index * 80}ms` }}
    >
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
        0{index + 1}
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

function PresenceVisualization() {
  const { visualization } = presencePage;

  return (
    <section className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(24rem,0.85fr)] lg:items-center lg:gap-20 xl:gap-28">
        <div>
          <h2 className="font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]">
            {visualization.heading}
            <span className="block text-[#e35d3f]">{visualization.highlight}</span>
          </h2>
          <p className="mt-9 max-w-xl font-sans text-lg leading-8 text-[#f7f7f2]/68 sm:text-xl sm:leading-9">
            {visualization.summary}
          </p>
        </div>
        <div className="relative min-h-[34rem] overflow-hidden border border-[#f7f7f2]/15 bg-[#202320] p-6 motion-safe:animate-[hero-reveal_1000ms_180ms_ease-out_both] sm:p-8">
          <div aria-hidden="true" className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(247,247,242,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.1)_1px,transparent_1px)] [background-size:3rem_3rem]" />
          <div className="relative h-full min-h-[30rem]">
            <MapMarker className="left-[54%] top-[45%]" label="India" />
            <MapMarker className="left-[62%] top-[38%]" label="Nepal" />
            <div className="absolute left-[55%] top-[46%] h-px w-[13%] -rotate-[24deg] bg-[#e35d3f]/70" />
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f7f7f2]/16 sm:h-80 sm:w-80" />
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f7f7f2]/12 sm:h-56 sm:w-56" />
            <p className="absolute bottom-0 left-0 max-w-xs font-sans text-[0.62rem] font-semibold uppercase leading-5 tracking-[0.22em] text-[#f7f7f2]/58">
              Global collaboration field. No additional office locations implied.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapMarker({ className, label }: { className: string; label: string }) {
  return (
    <div className={`absolute z-10 ${className}`}>
      <span className="block h-4 w-4 bg-[#e35d3f]" />
      <span className="mt-3 block whitespace-nowrap font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#f7f7f2]">
        {label}
      </span>
      <span className="mt-1 block whitespace-nowrap font-sans text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-[#f7f7f2]/52">
        Operational Presence
      </span>
    </div>
  );
}

function HowWeCollaborate() {
  const { collaboration } = presencePage;

  return (
    <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.55fr)] lg:items-end lg:gap-16">
        <VisualPanel
          imagePath={collaboration.imagePath}
          label="Connected work"
          meta="Product / Engineering / Systems"
          tall
        />
        <div className="border-y border-[#171817]/15 py-12 sm:py-16 lg:py-20">
          <SectionHeading
            eyebrow={collaboration.eyebrow}
            heading={collaboration.heading}
            highlight={collaboration.highlight}
            id="collaboration-title"
          />
          <div className="mt-8 grid gap-6 font-sans text-lg leading-8 text-[#171817]/66 sm:text-xl sm:leading-9">
            {collaboration.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FuturePresence() {
  const { future } = presencePage;

  return (
    <section className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 border-y border-[#171817]/15 py-14 lg:grid-cols-[minmax(0,0.86fr)_minmax(22rem,0.58fr)] lg:items-end lg:gap-20 lg:py-20">
        <h2 className="font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_ease-out_both]">
          {future.heading}
        </h2>
        <div className="grid gap-7 font-sans text-base leading-8 text-[#171817]/68 sm:text-lg sm:leading-9">
          {future.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function PresenceMetrics() {
  return (
    <section
      aria-label="Presence structure"
      className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 border-y border-[#171817]/15 sm:grid-cols-2 lg:grid-cols-4">
        {presencePage.metrics.map((metric, index) => (
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
  metric: PresenceMetric;
}) {
  return (
    <article
      className="border-b border-[#171817]/15 py-8 sm:px-7 lg:border-b-0 lg:border-r lg:py-10 lg:last:border-r-0 motion-safe:animate-[hero-rise_800ms_ease-out_both]"
      style={{ animationDelay: `${160 + index * 70}ms` }}
    >
      <p className="font-serif text-[clamp(2.75rem,5.5vw,6rem)] leading-none tracking-[-0.04em] text-[#e35d3f]">
        {metric.value}
      </p>
      <p className="mt-5 max-w-xs font-sans text-[0.68rem] font-semibold uppercase leading-6 tracking-[0.2em] text-[#171817]/56">
        {metric.label}
      </p>
    </article>
  );
}

function CompanyConnection() {
  const { capabilities } = presencePage;

  return (
    <section className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(24rem,0.85fr)] lg:items-center lg:gap-20 xl:gap-28">
        <div>
          <h2 className="font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]">
            {capabilities.heading}
            <span className="block text-[#e35d3f]">{capabilities.highlight}</span>
          </h2>
          <p className="mt-9 max-w-xl font-sans text-lg leading-8 text-[#f7f7f2]/68 sm:text-xl sm:leading-9">
            {capabilities.summary}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 border-y border-[#f7f7f2]/15 py-6">
          {capabilities.items.map((item, index) => (
            <CapabilityLink index={index} item={item} key={item.href} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityLink({
  index,
  item,
}: {
  index: number;
  item: PresenceCapability;
}) {
  return (
    <Link
      className="group flex min-h-16 items-center justify-between gap-4 border border-[#f7f7f2]/14 px-5 py-4 font-sans text-sm font-semibold text-[#f7f7f2]/72 outline-none transition-colors hover:border-[#e35d3f]/70 hover:text-[#f7f7f2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f] motion-safe:animate-[hero-rise_800ms_ease-out_both]"
      href={item.href}
      style={{ animationDelay: `${220 + index * 70}ms` }}
    >
      {item.title}
      <span aria-hidden="true" className="text-lg leading-none text-[#e35d3f] transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2">
        &rarr;
      </span>
    </Link>
  );
}

function PresenceCta() {
  const { cta } = presencePage;

  return (
    <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
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
          <p className="max-w-xl font-sans text-lg leading-8 text-[#171817]/68 sm:text-xl sm:leading-9">
            {cta.summary}
          </p>
          <div className="mt-10 flex flex-col gap-3 font-sans text-sm font-semibold sm:flex-row lg:flex-col xl:flex-row">
            <Link className="inline-flex min-h-12 items-center justify-center bg-[#171817] px-6 text-[#f7f7f2] transition-colors hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]" href={cta.primaryCta.href}>
              {cta.primaryCta.label}
              <span aria-hidden="true" className="ml-8 text-lg leading-none">&rarr;</span>
            </Link>
            <Link className="inline-flex min-h-12 items-center justify-center border border-[#171817]/25 px-6 text-[#171817] transition-colors hover:border-[#171817] hover:bg-[#171817]/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]" href={cta.secondaryCta.href}>
              {cta.secondaryCta.label}
              <span aria-hidden="true" className="ml-8 text-lg leading-none">&rarr;</span>
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
}: {
  eyebrow: string;
  heading: string;
  highlight?: string;
  id: string;
}) {
  return (
    <div>
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
        {eyebrow}
      </p>
      <h2
        className="mt-7 max-w-5xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em] text-[#171817] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]"
        id={id}
      >
        {heading}
        {highlight ? <span className="block text-[#e35d3f]">{highlight}</span> : null}
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
      aria-label={alt ?? `${label} visual`}
      className={`relative overflow-hidden bg-[#17211f] text-[#f7f7f2] motion-safe:animate-[hero-reveal_1000ms_180ms_ease-out_both] ${
        tall
          ? "min-h-[30rem] sm:min-h-[42rem] lg:min-h-[48rem]"
          : "min-h-[28rem] sm:min-h-[36rem] lg:min-h-[42rem]"
      }`}
      data-image-path={imagePath}
      role="img"
      style={{
        backgroundImage: `linear-gradient(145deg, rgba(23, 33, 31, 0.12), rgba(23, 33, 31, 0.92))`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div aria-hidden="true" className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(247,247,242,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.12)_1px,transparent_1px)] [background-size:3rem_3rem]" />
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[17rem] w-[17rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f7f7f2]/20 sm:h-[25rem] sm:w-[25rem]" />
      <div aria-hidden="true" className="absolute left-1/2 top-1/2 h-[10rem] w-[10rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f7f7f2]/14 sm:h-[16rem] sm:w-[16rem]" />
      <div aria-hidden="true" className="absolute bottom-16 right-10 h-32 w-32 border-[1.5rem] border-[#e35d3f] opacity-90 sm:h-44 sm:w-44" />
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
