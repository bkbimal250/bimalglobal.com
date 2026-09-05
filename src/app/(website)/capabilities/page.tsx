import type { Metadata } from "next";
import Link from "next/link";

import {
  capabilitiesPage,
  type Capability,
  type CapabilityLifecycleStage,
  type CapabilityOutcome,
  type EngagementScenario,
} from "@/content/capabilities";

export const metadata: Metadata = {
  title: "Capabilities | BIMAL GLOBAL",
  description:
    "Explore BIMAL GLOBAL's software engineering, product development, mobile, cloud, infrastructure, and artificial intelligence capabilities.",
};

export default function CapabilitiesPage() {
  return (
    <main className="overflow-hidden bg-[#f7f7f2] text-[#171817]">
      <CapabilitiesHero />
      <CapabilityIntro />
      <CapabilityEcosystem />
      <CapabilityRelationship />
      <CapabilityOutcomes />
      <TechnologyLifecycle />
      <FlexibleEngagement />
      <TechnologyDomains />
      <IndustryConnection />
      <EngineeringMindset />
      <CapabilityDepth />
      <FeaturedCapabilityCta />
    </main>
  );
}

function CapabilitiesHero() {
  const { hero } = capabilitiesPage;

  return (
    <section
      aria-labelledby="capabilities-page-title"
      className="relative isolate px-6 pb-20 pt-32 sm:px-10 sm:pb-28 sm:pt-36 lg:px-16 lg:pb-36 lg:pt-44"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(24rem,0.8fr)] lg:items-center lg:gap-20 xl:gap-28">
        <div className="max-w-4xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
            {hero.eyebrow}
          </p>
          <h1
            id="capabilities-page-title"
            className="mt-7 font-serif text-[clamp(3.5rem,8vw,8.75rem)] leading-[0.9] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]"
          >
            {hero.heading}
            <span className="block text-[#e35d3f]">{hero.highlight}</span>
          </h1>
          <p className="mt-9 max-w-2xl font-sans text-lg leading-8 text-[#171817]/68 sm:text-xl sm:leading-9 motion-safe:animate-[hero-rise_800ms_220ms_ease-out_both]">
            {hero.summary}
          </p>
          <div className="mt-10 flex flex-col gap-3 font-sans text-sm font-semibold sm:flex-row motion-safe:animate-[hero-rise_800ms_320ms_ease-out_both]">
            <PrimaryLink href={hero.primaryCta.href} label={hero.primaryCta.label} />
            <SecondaryLink href={hero.secondaryCta.href} label={hero.secondaryCta.label} />
          </div>
        </div>

        <VisualPanel
          alt={hero.imageAlt}
          imagePath={hero.imagePath}
          label="Capability ecosystem"
          meta="Five connected disciplines"
        />
      </div>
    </section>
  );
}

function CapabilityIntro() {
  const { introduction } = capabilitiesPage;

  return (
    <section
      aria-labelledby="capability-intro-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 border-y border-[#171817]/15 py-14 lg:grid-cols-[minmax(0,0.78fr)_minmax(24rem,0.72fr)] lg:gap-20 lg:py-20">
        <SectionHeading
          eyebrow={introduction.eyebrow}
          heading={introduction.heading}
          highlight={introduction.highlight}
          id="capability-intro-title"
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

function CapabilityEcosystem() {
  return (
    <section
      aria-labelledby="capability-ecosystem-title"
      className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow="Capability Ecosystem"
          heading="Five primary capabilities."
          highlight="One technology platform."
          id="capability-ecosystem-title"
        />
        <div className="mt-12 grid grid-cols-1 gap-12 lg:mt-20">
          {capabilitiesPage.capabilities.map((capability, index) => (
            <CapabilityBlock
              capability={capability}
              flipped={index % 2 === 1}
              index={index}
              key={capability.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityBlock({
  capability,
  flipped,
  index,
}: {
  capability: Capability;
  flipped: boolean;
  index: number;
}) {
  return (
    <article
      className="grid grid-cols-1 gap-10 border-y border-[#171817]/15 py-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(22rem,0.62fr)] lg:items-end lg:gap-16 lg:py-14 motion-safe:animate-[hero-rise_800ms_ease-out_both]"
      style={{ animationDelay: `${160 + index * 70}ms` }}
    >
      <div className={flipped ? "lg:order-2" : ""}>
        <VisualPanel
          alt={capability.imageAlt}
          imagePath={capability.imagePath}
          label={capability.number}
          meta={capability.title}
          tall
        />
      </div>
      <div className={flipped ? "lg:order-1" : ""}>
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
          {capability.number}
        </p>
        <h3 className="mt-7 font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.92] tracking-[-0.045em]">
          {capability.title}
        </h3>
        <p className="mt-8 max-w-2xl font-sans text-lg leading-8 text-[#171817]/66 sm:text-xl sm:leading-9">
          {capability.description}
        </p>
        <FocusList items={capability.focusAreas} />
        <Link
          className="mt-9 inline-flex min-h-12 w-fit items-center justify-center bg-[#171817] px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
          href={capability.href}
        >
          Explore {capability.title}
          <span aria-hidden="true" className="ml-8 text-lg leading-none">
            &rarr;
          </span>
        </Link>
      </div>
    </article>
  );
}

function CapabilityRelationship() {
  return (
    <section
      aria-labelledby="relationship-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(24rem,0.85fr)] lg:items-center lg:gap-20 xl:gap-28">
        <div>
          <SectionHeading
            eyebrow="Connected Capabilities"
            heading="Technology works better"
            highlight="when the pieces work together."
            id="relationship-title"
            inverted
          />
          <p className="mt-9 max-w-xl font-sans text-lg leading-8 text-[#f7f7f2]/68 sm:text-xl sm:leading-9">
            Product, engineering, mobile, cloud, and AI can support one another
            across the same technology system without becoming a fixed sequence.
          </p>
        </div>
        <div className="relative min-h-[36rem] overflow-hidden border border-[#f7f7f2]/15 bg-[#202320] p-6 motion-safe:animate-[hero-reveal_1000ms_180ms_ease-out_both] sm:p-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(247,247,242,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.1)_1px,transparent_1px)] [background-size:3rem_3rem]"
          />
          <div className="relative grid min-h-[32rem] place-items-center">
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f7f7f2]/18 sm:h-80 sm:w-80" />
            <p className="relative z-10 max-w-36 text-center font-sans text-xs font-semibold uppercase leading-5 tracking-[0.24em]">
              Bimal Global System
            </p>
            <div className="absolute inset-0 grid grid-cols-1 content-between gap-4 sm:grid-cols-2">
              {capabilitiesPage.capabilities.map((capability, index) => (
                <CapabilityNode
                  capability={capability}
                  index={index}
                  key={capability.id}
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
  capability,
  index,
}: {
  capability: Capability;
  index: number;
}) {
  return (
    <Link
      className="group flex min-h-20 items-center justify-between gap-4 border border-[#f7f7f2]/14 bg-[#171817]/60 px-5 py-4 font-sans text-sm font-semibold text-[#f7f7f2]/72 outline-none transition-colors hover:border-[#e35d3f]/70 hover:text-[#f7f7f2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f] motion-safe:animate-[hero-rise_800ms_ease-out_both]"
      href={capability.href}
      style={{ animationDelay: `${220 + index * 80}ms` }}
    >
      {capability.title}
      <span
        aria-hidden="true"
        className="text-lg leading-none text-[#e35d3f] transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2"
      >
        &rarr;
      </span>
    </Link>
  );
}

function CapabilityOutcomes() {
  return (
    <section
      aria-labelledby="outcomes-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow="What We Enable"
          heading="Capabilities become"
          highlight="technology outcomes."
          id="outcomes-title"
        />
        <div className="mt-12 grid grid-cols-1 border-t border-[#171817]/15 lg:mt-16 lg:grid-cols-2">
          {capabilitiesPage.outcomes.map((item, index) => (
            <OutcomeItem index={index} item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OutcomeItem({
  index,
  item,
}: {
  index: number;
  item: CapabilityOutcome;
}) {
  return (
    <article
      className="group grid gap-5 border-b border-[#171817]/15 py-8 transition-colors hover:border-[#e35d3f]/60 hover:bg-[#171817]/[0.025] sm:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)_auto] sm:gap-8 sm:py-10 lg:px-5 motion-safe:animate-[hero-rise_800ms_ease-out_both]"
      style={{ animationDelay: `${160 + index * 50}ms` }}
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

function TechnologyLifecycle() {
  const { lifecycle } = capabilitiesPage;

  return (
    <section className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 border-b border-[#f7f7f2]/15 pb-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.62fr)] lg:items-end lg:gap-20 lg:pb-20">
          <h2 className="font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]">
            {lifecycle.heading}
            <span className="block text-[#e35d3f]">{lifecycle.highlight}</span>
          </h2>
          <p className="font-sans text-lg leading-8 text-[#f7f7f2]/68 sm:text-xl sm:leading-9">
            {lifecycle.note}
          </p>
        </div>
        <div className="grid grid-cols-1 border-y border-[#f7f7f2]/15 lg:grid-cols-7">
          {lifecycle.stages.map((stage, index) => (
            <LifecycleStage index={index} key={stage.stage} stage={stage} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LifecycleStage({
  index,
  stage,
}: {
  index: number;
  stage: CapabilityLifecycleStage;
}) {
  return (
    <article
      className="border-b border-[#f7f7f2]/15 py-8 lg:border-b-0 lg:border-r lg:px-5 lg:py-10 lg:last:border-r-0 motion-safe:animate-[hero-rise_800ms_ease-out_both]"
      style={{ animationDelay: `${160 + index * 60}ms` }}
    >
      <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#e35d3f]">
        0{index + 1}
      </p>
      <h3 className="mt-7 font-serif text-[clamp(2.1rem,4vw,4rem)] leading-none tracking-[-0.04em]">
        {stage.stage}
      </h3>
      <p className="mt-5 font-sans text-sm leading-7 text-[#f7f7f2]/62">
        {stage.description}
      </p>
      <ul className="mt-6 grid gap-2 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#f7f7f2]/42">
        {stage.capabilities.map((capability) => (
          <li key={capability}>{capability}</li>
        ))}
      </ul>
    </article>
  );
}

function FlexibleEngagement() {
  const { engagements } = capabilitiesPage;

  return (
    <section
      aria-labelledby="engagement-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow={engagements.eyebrow}
          heading={engagements.heading}
          highlight={engagements.highlight}
          id="engagement-title"
        />
        <div className="mt-12 grid grid-cols-1 border-y border-[#171817]/15 lg:mt-16 lg:grid-cols-3">
          {engagements.items.map((item, index) => (
            <EngagementItem index={index} item={item} key={item.number} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EngagementItem({
  index,
  item,
}: {
  index: number;
  item: EngagementScenario;
}) {
  return (
    <article
      className="border-b border-[#171817]/15 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-10 lg:last:border-r-0 motion-safe:animate-[hero-rise_800ms_ease-out_both]"
      style={{ animationDelay: `${180 + index * 80}ms` }}
    >
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
        {item.number}
      </p>
      <h3 className="mt-8 font-serif text-[clamp(2.5rem,5vw,5.25rem)] leading-none tracking-[-0.04em]">
        {item.title}
      </h3>
      <p className="mt-7 max-w-md font-sans text-sm leading-7 text-[#171817]/64 sm:text-base sm:leading-8">
        {item.description}
      </p>
      <FocusList items={item.capabilities} />
      <Link
        className="mt-8 inline-flex font-sans text-sm font-semibold text-[#171817] transition-colors hover:text-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f]"
        href={item.cta.href}
      >
        {item.cta.label}
        <span aria-hidden="true" className="ml-6 text-lg leading-none">
          &rarr;
        </span>
      </Link>
    </article>
  );
}

function TechnologyDomains() {
  return (
    <section className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 border-y border-[#171817]/15 py-14 lg:grid-cols-[minmax(0,0.6fr)_minmax(24rem,1fr)] lg:gap-20 lg:py-20">
        <h2 className="font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]">
          Broad technology domains.
          <span className="block text-[#e35d3f]">Not a fixed tool list.</span>
        </h2>
        <div>
          <p className="max-w-xl font-sans text-base leading-8 text-[#171817]/64 sm:text-lg sm:leading-9">
            This demo taxonomy is designed as a flexible frontend structure,
            not an exhaustive or certified list of technologies.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {capabilitiesPage.domains.map((domain) => (
              <span
                className="border border-[#171817]/15 px-4 py-3 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#171817]/58"
                key={domain}
              >
                {domain}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryConnection() {
  const { industries } = capabilitiesPage;

  return (
    <section
      aria-labelledby="industry-connection-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 border-b border-[#f7f7f2]/15 pb-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.62fr)] lg:items-end lg:gap-20 lg:pb-20">
          <SectionHeading
            eyebrow={industries.eyebrow}
            heading={industries.heading}
            highlight={industries.highlight}
            id="industry-connection-title"
            inverted
          />
          <div>
            <p className="font-sans text-lg leading-8 text-[#f7f7f2]/68 sm:text-xl sm:leading-9">
              {industries.summary}
            </p>
            <Link
              className="mt-8 inline-flex min-h-12 w-fit items-center justify-center border border-[#f7f7f2]/28 px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:border-[#e35d3f] hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f]"
              href={industries.cta.href}
            >
              {industries.cta.label}
              <span aria-hidden="true" className="ml-8 text-lg leading-none">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {industries.items.map((industry) => (
            <span
              className="border border-[#f7f7f2]/14 px-4 py-3 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#f7f7f2]/62"
              key={industry}
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngineeringMindset() {
  const { mindset } = capabilitiesPage;

  return (
    <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 border-y border-[#171817]/15 py-14 lg:grid-cols-[minmax(0,0.86fr)_minmax(22rem,0.58fr)] lg:items-end lg:gap-20 lg:py-20">
        <h2 className="font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]">
          {mindset.heading}
          <span className="block text-[#e35d3f]">{mindset.highlight}</span>
        </h2>
        <div className="grid gap-7 font-sans text-base leading-8 text-[#171817]/68 sm:text-lg sm:leading-9">
          {mindset.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityDepth() {
  const { depth } = capabilitiesPage;

  return (
    <section className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36">
      <div className="mx-auto w-full max-w-[1440px]">
        <h2 className="max-w-5xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]">
          {depth.heading}
          <span className="block text-[#e35d3f]">{depth.highlight}</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 border-y border-[#171817]/15 lg:mt-16 lg:grid-cols-5">
          {depth.stages.map((stage, index) => (
            <article
              className="border-b border-[#171817]/15 py-8 lg:border-b-0 lg:border-r lg:px-6 lg:py-10 lg:last:border-r-0"
              key={stage}
            >
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
                0{index + 1}
              </p>
              <p className="mt-8 font-serif text-[clamp(2.3rem,4.5vw,4.5rem)] leading-none tracking-[-0.04em]">
                {stage}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCapabilityCta() {
  const { cta } = capabilitiesPage;

  return (
    <section className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.55fr)] lg:items-end lg:gap-20">
        <h2 className="font-serif text-[clamp(3.5rem,8vw,8.75rem)] leading-[0.9] tracking-[-0.045em]">
          {cta.heading}
          <span className="block text-[#e35d3f]">{cta.highlight}</span>
        </h2>
        <div>
          <p className="max-w-xl font-sans text-lg leading-8 text-[#f7f7f2]/68 sm:text-xl sm:leading-9">
            {cta.summary}
          </p>
          <div className="mt-10 flex flex-col gap-3 font-sans text-sm font-semibold sm:flex-row lg:flex-col xl:flex-row">
            <LightLink href={cta.primaryCta.href} label={cta.primaryCta.label} />
            <DarkOutlineLink
              href={cta.secondaryCta.href}
              label={cta.secondaryCta.label}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FocusList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-[#171817]/15 pt-6 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#171817]/48">
      {items.map((item) => (
        <li key={item}>{item}</li>
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

function PrimaryLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      className="inline-flex min-h-12 items-center justify-center bg-[#171817] px-6 text-[#f7f7f2] transition-colors hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
      href={href}
    >
      {label}
      <span aria-hidden="true" className="ml-8 text-lg leading-none">
        &rarr;
      </span>
    </Link>
  );
}

function SecondaryLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      className="inline-flex min-h-12 items-center justify-center border border-[#171817]/25 px-6 text-[#171817] transition-colors hover:border-[#171817] hover:bg-[#171817]/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
      href={href}
    >
      {label}
      <span aria-hidden="true" className="ml-8 text-lg leading-none">
        &rarr;
      </span>
    </Link>
  );
}

function LightLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      className="inline-flex min-h-12 items-center justify-center bg-[#f7f7f2] px-6 text-[#171817] transition-colors hover:bg-[#e35d3f] hover:text-[#f7f7f2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7f7f2]"
      href={href}
    >
      {label}
      <span aria-hidden="true" className="ml-8 text-lg leading-none">
        &rarr;
      </span>
    </Link>
  );
}

function DarkOutlineLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      className="inline-flex min-h-12 items-center justify-center border border-[#f7f7f2]/25 px-6 text-[#f7f7f2] transition-colors hover:border-[#e35d3f] hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7f7f2]"
      href={href}
    >
      {label}
      <span aria-hidden="true" className="ml-8 text-lg leading-none">
        &rarr;
      </span>
    </Link>
  );
}
