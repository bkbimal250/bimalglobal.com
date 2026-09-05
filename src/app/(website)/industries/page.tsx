import type { Metadata } from "next";
import Link from "next/link";

import {
  industries,
  industriesOverviewPage,
  type CapabilityConnection,
  type FlowSection,
  type Industry,
  type TextBlock,
} from "@/content/industries";
import { IndustriesFaq } from "./IndustriesFaq";

export const metadata: Metadata = {
  title: "Industries | BIMAL GLOBAL",
  description:
    "BIMAL GLOBAL builds software, digital products, mobile applications, cloud infrastructure, and AI-enabled solutions for businesses across industries including commerce, healthcare, media, real estate, hospitality, education, and more.",
};

export default function IndustriesPage() {
  return (
    <main className="overflow-hidden bg-[#f7f7f2] text-[#171817]">
      <Hero />
      <Overview />
      <IndustriesGrid />
      <IndustryChallenges />
      <TechnologyValue />
      <SolutionLifecycle />
      <CapabilityConnections />
      <DigitalProductOpportunities />
      <AIAcrossIndustries />
      <Modernization />
      <GlobalLocalContext />
      <WhenToWork />
      <IndustryPrinciples />
      <RelatedCapabilities />
      <FaqSection />
      <FinalCta />
    </main>
  );
}

function Hero() {
  const { hero } = industriesOverviewPage;

  return (
    <section
      aria-labelledby="industries-title"
      className="relative isolate px-6 pb-20 pt-32 sm:px-10 sm:pb-28 sm:pt-36 lg:px-16 lg:pb-36 lg:pt-44"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(24rem,0.8fr)] lg:items-center lg:gap-20 xl:gap-28">
        <div className="max-w-4xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
            {hero.eyebrow}
          </p>
          <h1
            className="mt-7 font-serif text-[clamp(3.35rem,7.8vw,8.5rem)] leading-[0.9] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]"
            id="industries-title"
          >
            {hero.title}
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
          label="Industry systems"
          meta="Business / Product / Technology"
        />
      </div>
    </section>
  );
}

function Overview() {
  const { overview } = industriesOverviewPage;

  return (
    <section
      aria-labelledby="industry-overview-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 border-y border-[#171817]/15 py-14 lg:grid-cols-[minmax(0,0.72fr)_minmax(24rem,0.82fr)] lg:gap-20 lg:py-20">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
            Industry Overview
          </p>
          <h2
            className="mt-7 font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
            id="industry-overview-title"
          >
            {overview.title}
          </h2>
          <div className="mt-8 grid gap-6 font-sans text-base leading-8 text-[#171817]/68 sm:text-lg sm:leading-9">
            {overview.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-10 border-l-2 border-[#e35d3f] pl-6 font-sans text-lg font-semibold leading-8 text-[#171817] sm:text-xl sm:leading-9">
            {overview.statement}
          </p>
        </div>
        <LayerDiagram layers={overview.flow} />
      </div>
    </section>
  );
}

function IndustriesGrid() {
  return (
    <section
      aria-labelledby="industries-grid-title"
      className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow="Industry Domains"
          id="industries-grid-title"
          title="Industries we can build for"
        />
        <div className="mt-12 grid grid-cols-1 border-t border-[#171817]/15 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => (
            <IndustryCard index={index} industry={industry} key={industry.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ index, industry }: { index: number; industry: Industry }) {
  return (
    <Link
      className="group flex min-h-[24rem] flex-col border-b border-[#171817]/15 p-7 transition-colors hover:border-[#e35d3f]/70 hover:bg-[#171817]/[0.025] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f] md:border-r md:[&:nth-child(2n)]:border-r-0 xl:[&:nth-child(2n)]:border-r xl:[&:nth-child(3n)]:border-r-0 motion-safe:animate-[hero-rise_800ms_ease-out_both]"
      href="/industries"
      style={{ animationDelay: `${120 + index * 40}ms` }}
    >
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-7 font-serif text-[clamp(2.4rem,4.6vw,4.75rem)] leading-none tracking-[-0.04em] transition-colors group-hover:text-[#e35d3f]">
        {industry.name}
      </h3>
      <p className="mt-6 font-sans text-sm leading-7 text-[#171817]/64 sm:text-base sm:leading-8">
        {industry.shortDescription}
      </p>
      <ul className="mt-7 flex flex-wrap gap-2 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#171817]/48">
        {industry.opportunities.map((item) => (
          <li className="border border-[#171817]/12 px-3 py-2" key={item}>
            {item}
          </li>
        ))}
      </ul>
      <span className="mt-auto pt-8 font-sans text-sm font-semibold text-[#e35d3f]">
        Industry context
        <span aria-hidden="true" className="ml-4 inline-block transition-transform duration-300 group-hover:translate-x-2">
          &rarr;
        </span>
      </span>
    </Link>
  );
}

function IndustryChallenges() {
  return (
    <section
      aria-labelledby="industry-challenges-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <h2
          className="max-w-5xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
          id="industry-challenges-title"
        >
          Different industries. Different technology challenges.
        </h2>
        <div className="mt-12 grid grid-cols-1 border-t border-[#f7f7f2]/15 md:grid-cols-2 lg:mt-16 xl:grid-cols-4">
          {industriesOverviewPage.challenges.map((item, index) => (
            <ChallengeCard index={index} item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChallengeCard({ index, item }: { index: number; item: TextBlock }) {
  return (
    <article className="border-b border-[#f7f7f2]/15 py-8 md:border-r md:px-6 xl:[&:nth-child(4n)]:border-r-0">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-7 font-serif text-[clamp(2.1rem,4vw,4rem)] leading-none tracking-[-0.04em]">
        {item.title}
      </h3>
      <p className="mt-5 font-sans text-sm leading-7 text-[#f7f7f2]/62 sm:text-base sm:leading-8">
        {item.description}
      </p>
    </article>
  );
}

function TechnologyValue() {
  const { value } = industriesOverviewPage;

  return (
    <section
      aria-labelledby="technology-value-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 border-y border-[#171817]/15 py-14 lg:grid-cols-[minmax(0,0.66fr)_minmax(24rem,1fr)] lg:gap-20 lg:py-20">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
            How Technology Creates Value
          </p>
          <h2
            className="mt-7 font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
            id="technology-value-title"
          >
            {value.title}
          </h2>
          <p className="mt-8 max-w-2xl font-sans text-base leading-8 text-[#171817]/66 sm:text-lg sm:leading-9">
            {value.body}
          </p>
        </div>
        <div>
          <Pipeline items={value.flow} />
          <TagCloud items={value.items} />
        </div>
      </div>
    </section>
  );
}

function SolutionLifecycle() {
  return (
    <section
      aria-labelledby="industry-lifecycle-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <h2
          className="max-w-5xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
          id="industry-lifecycle-title"
        >
          Start with the problem, not the technology.
        </h2>
        <div className="mt-12 grid grid-cols-1 border-y border-[#f7f7f2]/15 lg:mt-16 lg:grid-cols-4">
          {industriesOverviewPage.lifecycle.map((stage, index) => (
            <article
              className="border-b border-[#f7f7f2]/15 py-8 lg:border-r lg:px-6 lg:py-10 lg:[&:nth-child(4n)]:border-r-0 motion-safe:animate-[hero-rise_800ms_ease-out_both]"
              key={stage.number}
              style={{ animationDelay: `${160 + index * 60}ms` }}
            >
              <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#e35d3f]">
                {stage.number}
              </p>
              <h3 className="mt-7 font-serif text-[clamp(2.1rem,4vw,4rem)] leading-none tracking-[-0.04em]">
                {stage.title}
              </h3>
              <p className="mt-5 font-sans text-sm leading-7 text-[#f7f7f2]/62">
                {stage.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityConnections() {
  return (
    <section
      aria-labelledby="industry-capability-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow="Capability Connection"
          id="industry-capability-title"
          title="One industry challenge can require multiple capabilities."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-5">
          {industriesOverviewPage.capabilities.map((item, index) => (
            <CapabilityCard index={index} item={item} key={item.href} />
          ))}
        </div>
        <div className="mt-8">
          <PrimaryLink href="/capabilities" label="Explore Our Capabilities" />
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ index, item }: { index: number; item: CapabilityConnection }) {
  return (
    <Link
      className="group border border-[#171817]/15 p-6 transition-colors hover:border-[#e35d3f]/70 hover:bg-[#171817]/[0.025] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f]"
      href={item.href}
    >
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-7 font-serif text-[clamp(2rem,3.5vw,3.5rem)] leading-none tracking-[-0.04em] transition-colors group-hover:text-[#e35d3f]">
        {item.title}
      </h3>
      <p className="mt-5 font-sans text-sm leading-7 text-[#171817]/62">
        {item.description}
      </p>
    </Link>
  );
}

function DigitalProductOpportunities() {
  return (
    <FlowFeature
      label="Digital products"
      meta="Problems / Markets / Platforms"
      section={industriesOverviewPage.digitalProducts}
    />
  );
}

function AIAcrossIndustries() {
  const { aiAcrossIndustries } = industriesOverviewPage;

  return (
    <section
      aria-labelledby="industry-ai-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 border-y border-[#f7f7f2]/15 py-14 lg:grid-cols-[minmax(0,0.62fr)_minmax(24rem,1fr)] lg:gap-20 lg:py-20">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
            AI Across Industries
          </p>
          <h2
            className="mt-7 font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
            id="industry-ai-title"
          >
            {aiAcrossIndustries.title}
          </h2>
          <p className="mt-8 max-w-2xl font-sans text-base leading-8 text-[#f7f7f2]/66 sm:text-lg sm:leading-9">
            {aiAcrossIndustries.body}
          </p>
          <p className="mt-8 border-l-2 border-[#e35d3f] pl-6 font-sans text-lg font-semibold leading-8 text-[#f7f7f2]">
            {aiAcrossIndustries.statement}
          </p>
          <div className="mt-9">
            <LightLink href="/capabilities/artificial-intelligence" label="Explore Artificial Intelligence" />
          </div>
        </div>
        <TagCloud dark items={aiAcrossIndustries.items} />
      </div>
    </section>
  );
}

function Modernization() {
  return (
    <FlowFeature
      dark
      label="Modernization"
      meta="Assess / Improve / Evolve"
      section={industriesOverviewPage.modernization}
    />
  );
}

function GlobalLocalContext() {
  return (
    <FlowFeature
      label="Global and local context"
      meta="India / Nepal / Growth"
      section={industriesOverviewPage.globalContext}
    />
  );
}

function FlowFeature({
  dark = false,
  label,
  meta,
  section,
}: {
  dark?: boolean;
  label: string;
  meta: string;
  section: FlowSection;
}) {
  return (
    <section
      className={`${dark ? "bg-[#171817] text-[#f7f7f2]" : "bg-[#f7f7f2] text-[#171817]"} px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36`}
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.74fr)_minmax(22rem,0.78fr)] lg:items-center lg:gap-16">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
            {label}
          </p>
          <h2 className="mt-7 font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]">
            {section.title}
          </h2>
          <p className={`mt-8 max-w-3xl font-sans text-lg leading-8 sm:text-xl sm:leading-9 ${dark ? "text-[#f7f7f2]/66" : "text-[#171817]/66"}`}>
            {section.body}
          </p>
          <FocusList dark={dark} items={section.items} />
        </div>
        <div>
          <VisualPanel
            alt={section.imageAlt}
            imagePath={section.imagePath ?? industriesOverviewPage.hero.imagePath}
            label={label}
            meta={meta}
            tall
          />
          <div className="mt-5">
            <Pipeline dark={dark} items={section.flow} />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhenToWork() {
  return (
    <section
      aria-labelledby="industry-engagement-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <h2
          className="max-w-5xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
          id="industry-engagement-title"
        >
          When your industry challenge becomes a technology opportunity
        </h2>
        <div className="mt-12 grid grid-cols-1 border-t border-[#f7f7f2]/15 lg:grid-cols-2">
          {industriesOverviewPage.engagementScenarios.map((item, index) => (
            <ListRow dark index={index} key={item} text={item} />
          ))}
        </div>
        <div className="mt-8">
          <DarkOutlineLink href="/company/how-we-work" label="See How We Work" />
        </div>
      </div>
    </section>
  );
}

function IndustryPrinciples() {
  return (
    <section
      aria-labelledby="industry-principles-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow="Industry Solution Principles"
          id="industry-principles-title"
          title="How we approach industry technology"
        />
        <div className="mt-12 grid grid-cols-1 border-t border-[#171817]/15 lg:mt-16 lg:grid-cols-2">
          {industriesOverviewPage.principles.map((item, index) => (
            <EditorialItem index={index} item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedCapabilities() {
  return (
    <section
      aria-labelledby="related-industry-capabilities-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <h2
          className="max-w-5xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
          id="related-industry-capabilities-title"
        >
          Technology capabilities behind industry solutions
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {industriesOverviewPage.capabilities.map((item) => (
            <CapabilityLink item={item} key={item.href} />
          ))}
        </div>
        <Link
          className="mt-8 inline-flex min-h-12 w-fit items-center justify-center border border-[#f7f7f2]/25 px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:border-[#e35d3f] hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7f7f2]"
          href="/capabilities"
        >
          Explore All Capabilities
          <span aria-hidden="true" className="ml-8 text-lg leading-none">
            &rarr;
          </span>
        </Link>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section
      aria-labelledby="industries-faq-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow="FAQ"
          id="industries-faq-title"
          title="Industry technology questions"
        />
        <div className="mt-12 lg:mt-16">
          <IndustriesFaq items={industriesOverviewPage.faqs} />
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const { finalCta } = industriesOverviewPage;

  return (
    <section className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.55fr)] lg:items-end lg:gap-20">
        <h2 className="font-serif text-[clamp(3.5rem,8vw,8.75rem)] leading-[0.9] tracking-[-0.045em]">
          {finalCta.title}
        </h2>
        <div>
          <p className="max-w-xl font-sans text-lg leading-8 text-[#f7f7f2]/68 sm:text-xl sm:leading-9">
            {finalCta.summary}
          </p>
          <div className="mt-10 flex flex-col gap-3 font-sans text-sm font-semibold sm:flex-row lg:flex-col xl:flex-row">
            <LightLink href={finalCta.primaryCta.href} label={finalCta.primaryCta.label} />
            <DarkOutlineLink href={finalCta.secondaryCta.href} label={finalCta.secondaryCta.label} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pipeline({ dark = false, items }: { dark?: boolean; items: readonly string[] }) {
  return (
    <ol className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <li
          className={`relative min-h-20 border px-5 py-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] motion-safe:animate-[hero-rise_700ms_ease-out_both] ${dark ? "border-[#f7f7f2]/15 text-[#f7f7f2]/72" : "border-[#171817]/15 text-[#171817]/62"}`}
          key={item}
          style={{ animationDelay: `${120 + index * 55}ms` }}
        >
          <span className="text-[#e35d3f]">{String(index + 1).padStart(2, "0")}</span>
          <span className="mt-4 block break-words">{item}</span>
        </li>
      ))}
    </ol>
  );
}

function LayerDiagram({
  dark = false,
  layers,
  small = false,
}: {
  dark?: boolean;
  layers: readonly string[];
  small?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden border p-5 ${dark ? "border-[#f7f7f2]/15 bg-[#20211f]" : "border-[#171817]/15 bg-[#efefe7]"}`}
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 opacity-50 [background-size:3rem_3rem] ${dark ? "[background-image:linear-gradient(rgba(247,247,242,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.09)_1px,transparent_1px)]" : "[background-image:linear-gradient(rgba(23,24,23,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(23,24,23,0.08)_1px,transparent_1px)]"}`}
      />
      <div className="relative grid gap-4">
        {layers.map((layer, index) => (
          <div
            className={`grid min-h-14 grid-cols-[auto_minmax(0,1fr)] items-center gap-4 border px-4 ${small ? "sm:min-h-14" : "sm:min-h-16 sm:px-5"} ${dark ? "border-[#f7f7f2]/15 bg-[#171817]/78" : "border-[#171817]/15 bg-[#f7f7f2]/80"}`}
            key={layer}
          >
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[#e35d3f]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={`${small ? "text-2xl" : "text-3xl"} break-words font-serif leading-none tracking-[-0.04em]`}>
              {layer}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EditorialItem({ index, item }: { index: number; item: TextBlock }) {
  return (
    <article className="group grid gap-5 border-b border-[#171817]/15 py-8 transition-colors hover:border-[#e35d3f]/60 hover:bg-[#171817]/[0.025] sm:grid-cols-[5rem_minmax(0,0.55fr)_minmax(0,1fr)] sm:gap-8 sm:py-10 lg:px-5">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="font-serif text-[clamp(2rem,4vw,4rem)] leading-none tracking-[-0.04em] transition-colors group-hover:text-[#e35d3f]">
        {item.title}
      </h3>
      <p className="max-w-xl font-sans text-sm leading-7 text-[#171817]/62 sm:text-base sm:leading-8">
        {item.description}
      </p>
    </article>
  );
}

function CapabilityLink({ item }: { item: CapabilityConnection }) {
  return (
    <Link
      className="group border border-[#f7f7f2]/15 p-7 transition-colors hover:border-[#e35d3f]/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f] sm:p-8"
      href={item.href}
    >
      <h3 className="font-serif text-[clamp(2.2rem,4vw,4.25rem)] leading-none tracking-[-0.04em] transition-colors group-hover:text-[#e35d3f]">
        {item.title}
      </h3>
      <p className="mt-6 font-sans text-sm leading-7 text-[#f7f7f2]/64 sm:text-base sm:leading-8">
        {item.description}
      </p>
      <span className="mt-8 inline-flex font-sans text-sm font-semibold text-[#e35d3f]">
        Explore
        <span className="ml-4 transition-transform duration-300 group-hover:translate-x-2">
          &rarr;
        </span>
      </span>
    </Link>
  );
}

function ListRow({
  dark = false,
  index,
  text,
}: {
  dark?: boolean;
  index: number;
  text: string;
}) {
  return (
    <article
      className={`grid gap-5 border-b py-7 sm:grid-cols-[5rem_minmax(0,1fr)] sm:items-center lg:px-5 ${dark ? "border-[#f7f7f2]/15" : "border-[#171817]/15"}`}
    >
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
        {String(index + 1).padStart(2, "0")}
      </p>
      <p
        className={`font-serif text-[clamp(1.9rem,3.6vw,3.75rem)] leading-none tracking-[-0.04em] ${dark ? "text-[#f7f7f2]" : "text-[#171817]"}`}
      >
        {text}
      </p>
    </article>
  );
}

function FocusList({
  dark = false,
  items,
}: {
  dark?: boolean;
  items: readonly string[];
}) {
  return (
    <ul
      className={`mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t pt-6 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] ${dark ? "border-[#f7f7f2]/15 text-[#f7f7f2]/50" : "border-[#171817]/15 text-[#171817]/48"}`}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function TagCloud({ dark = false, items }: { dark?: boolean; items: readonly string[] }) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          className={`border px-4 py-3 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] ${dark ? "border-[#f7f7f2]/15 text-[#f7f7f2]/58" : "border-[#171817]/15 text-[#171817]/58"}`}
          key={item}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function SectionHeading({ eyebrow, id, title }: { eyebrow: string; id: string; title: string }) {
  return (
    <div>
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
        {eyebrow}
      </p>
      <h2
        className="mt-7 max-w-5xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
        id={id}
      >
        {title}
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
      className={`relative overflow-hidden bg-[#17211f] text-[#f7f7f2] motion-safe:animate-[hero-reveal_1000ms_180ms_ease-out_both] ${tall ? "min-h-[30rem] sm:min-h-[42rem] lg:min-h-[48rem]" : "min-h-[28rem] sm:min-h-[36rem] lg:min-h-[42rem]"}`}
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
      <div className="absolute inset-x-7 top-7 flex items-center justify-between gap-5 border-t border-[#f7f7f2]/30 pt-4 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[#f7f7f2]/70 sm:inset-x-9 sm:top-9">
        <span>{label}</span>
        <span className="text-right">{meta}</span>
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
      className="inline-flex min-h-12 w-fit items-center justify-center bg-[#171817] px-6 text-[#f7f7f2] transition-colors hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
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
      className="inline-flex min-h-12 w-fit items-center justify-center border border-[#171817]/25 px-6 text-[#171817] transition-colors hover:border-[#171817] hover:bg-[#171817]/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
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
      className="inline-flex min-h-12 w-fit items-center justify-center bg-[#f7f7f2] px-6 text-[#171817] transition-colors hover:bg-[#e35d3f] hover:text-[#f7f7f2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7f7f2]"
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
      className="inline-flex min-h-12 w-fit items-center justify-center border border-[#f7f7f2]/25 px-6 text-[#f7f7f2] transition-colors hover:border-[#e35d3f] hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7f7f2]"
      href={href}
    >
      {label}
      <span aria-hidden="true" className="ml-8 text-lg leading-none">
        &rarr;
      </span>
    </Link>
  );
}
