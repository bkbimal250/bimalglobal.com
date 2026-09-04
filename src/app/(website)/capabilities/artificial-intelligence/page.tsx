import type { Metadata } from "next";
import Link from "next/link";

import {
  artificialIntelligencePage,
  type FeatureSection,
  type RelatedCapability,
  type TextBlock,
} from "@/content/artificial-intelligence";
import { ArtificialIntelligenceFaq } from "./ArtificialIntelligenceFaq";

export const metadata: Metadata = {
  title: "Artificial Intelligence | BIMAL GLOBAL",
  description:
    "BIMAL GLOBAL designs and integrates practical artificial intelligence capabilities into software products, workflows, mobile applications, data systems, and digital platforms.",
};

export default function ArtificialIntelligencePage() {
  return (
    <main className="overflow-hidden bg-[#f7f7f2] text-[#171817]">
      <Hero />
      <Overview />
      <CapabilityGrid />
      <ProductIntegration />
      <CompactFeature section={artificialIntelligencePage.generativeAI} />
      <CompactFeature dark section={artificialIntelligencePage.assistant} />
      <CompactFeature section={artificialIntelligencePage.search} />
      <WorkflowAutomation />
      <DataAndAI />
      <Architecture />
      <ConnectedCapabilities />
      <Evaluation />
      <CompactFeature dark section={artificialIntelligencePage.monitoring} />
      <ResponsibleAI />
      <Lifecycle />
      <Principles />
      <TechnologyDomains />
      <WhenToWork />
      <EngagementModels />
      <UseCases />
      <RelatedCapabilities />
      <FaqSection />
      <FinalCta />
    </main>
  );
}

function Hero() {
  const { hero } = artificialIntelligencePage;

  return (
    <section
      aria-labelledby="artificial-intelligence-title"
      className="relative isolate px-6 pb-20 pt-32 sm:px-10 sm:pb-28 sm:pt-36 lg:px-16 lg:pb-36 lg:pt-44"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(24rem,0.8fr)] lg:items-center lg:gap-20 xl:gap-28">
        <div className="max-w-4xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
            {hero.eyebrow}
          </p>
          <h1
            className="mt-7 font-serif text-[clamp(3.35rem,7.8vw,8.5rem)] leading-[0.9] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]"
            id="artificial-intelligence-title"
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
          label="Product intelligence"
          meta="Software / Data / Workflows"
        />
      </div>
    </section>
  );
}

function Overview() {
  const { overview } = artificialIntelligencePage;

  return (
    <section
      aria-labelledby="ai-overview-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 border-y border-[#171817]/15 py-14 lg:grid-cols-[minmax(0,0.72fr)_minmax(24rem,0.82fr)] lg:gap-20 lg:py-20">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
            Overview
          </p>
          <h2
            className="mt-7 font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
            id="ai-overview-title"
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

function CapabilityGrid() {
  return (
    <section
      aria-labelledby="ai-capabilities-title"
      className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow="What We Can Build"
          id="ai-capabilities-title"
          title="Practical AI capabilities for modern products"
        />
        <div className="mt-12 grid grid-cols-1 border-t border-[#171817]/15 lg:grid-cols-2">
          {artificialIntelligencePage.capabilities.map((item, index) => (
            <EditorialItem index={index} item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductIntegration() {
  const section = artificialIntelligencePage.productIntegration;

  return (
    <FeatureWithVisual
      dark
      label="Product integration"
      meta="Context / Actions / Feedback"
      section={section}
    />
  );
}

function WorkflowAutomation() {
  return (
    <FeatureWithVisual
      label="Workflow automation"
      meta="Review / Risk / Impact"
      section={artificialIntelligencePage.workflowAutomation}
    />
  );
}

function DataAndAI() {
  return (
    <FeatureWithVisual
      dark
      label="Data and context"
      meta="Quality / Access / Lifecycle"
      section={artificialIntelligencePage.dataAI}
    />
  );
}

function Architecture() {
  return (
    <FeatureWithVisual
      label="AI system architecture"
      meta="Applications / Models / Infrastructure"
      section={artificialIntelligencePage.architecture}
    />
  );
}

function Evaluation() {
  return (
    <FeatureWithVisual
      label="Evaluation loop"
      meta="Quality / Feedback / Improvement"
      section={artificialIntelligencePage.evaluation}
    />
  );
}

function FeatureWithVisual({
  dark = false,
  label,
  meta,
  section,
}: {
  dark?: boolean;
  label: string;
  meta: string;
  section: FeatureSection;
}) {
  return (
    <section
      className={`${dark ? "bg-[#171817] text-[#f7f7f2]" : "bg-[#f7f7f2] text-[#171817]"} px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36`}
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.74fr)_minmax(22rem,0.78fr)] lg:items-center lg:gap-16">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
            {section.eyebrow}
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
            imagePath={section.imagePath ?? artificialIntelligencePage.hero.imagePath}
            label={label}
            meta={meta}
            tall
          />
          {section.flow ? (
            <div className="mt-5">
              <Pipeline dark={dark} items={section.flow} />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function CompactFeature({ dark = false, section }: { dark?: boolean; section: FeatureSection }) {
  return (
    <section
      className={`${dark ? "bg-[#171817] text-[#f7f7f2]" : "bg-[#f7f7f2] text-[#171817]"} px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36`}
    >
      <div className={`mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 border-y py-14 lg:grid-cols-[minmax(0,0.62fr)_minmax(24rem,1fr)] lg:gap-20 lg:py-20 ${dark ? "border-[#f7f7f2]/15" : "border-[#171817]/15"}`}>
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
            {section.eyebrow}
          </p>
          <h2 className="mt-7 font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]">
            {section.title}
          </h2>
          <p className={`mt-8 max-w-2xl font-sans text-base leading-8 sm:text-lg sm:leading-9 ${dark ? "text-[#f7f7f2]/66" : "text-[#171817]/66"}`}>
            {section.body}
          </p>
        </div>
        <div>
          {section.flow ? <Pipeline dark={dark} items={section.flow} /> : null}
          <TagCloud dark={dark} items={section.items} />
        </div>
      </div>
    </section>
  );
}

function ConnectedCapabilities() {
  return (
    <section
      aria-labelledby="ai-connections-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow="Connected Capability"
          id="ai-connections-title"
          title="AI connects with software, mobile, and infrastructure"
        />
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {artificialIntelligencePage.connections.map((item) => (
            <article className="border border-[#171817]/15 p-7 sm:p-8" key={item.title}>
              <h3 className="font-serif text-[clamp(2.2rem,4vw,4.25rem)] leading-none tracking-[-0.04em]">
                {item.title}
              </h3>
              <p className="mt-6 font-sans text-sm leading-7 text-[#171817]/64 sm:text-base sm:leading-8">
                {item.description}
              </p>
              <LayerDiagram layers={item.flow} small />
              <PrimaryLink href={item.href} label={item.cta} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResponsibleAI() {
  const { responsibleAI } = artificialIntelligencePage;

  return (
    <section
      aria-labelledby="responsible-ai-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 border-y border-[#171817]/15 py-14 lg:grid-cols-[minmax(0,0.7fr)_minmax(24rem,0.9fr)] lg:gap-20 lg:py-20">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
            Responsible AI Considerations
          </p>
          <h2
            className="mt-7 font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
            id="responsible-ai-title"
          >
            {responsibleAI.title}
          </h2>
          <p className="mt-8 max-w-2xl font-sans text-lg font-semibold leading-8 text-[#171817] sm:text-xl sm:leading-9">
            {responsibleAI.statement}
          </p>
        </div>
        <div className="grid grid-cols-1 border-t border-[#171817]/15 sm:grid-cols-2">
          {responsibleAI.items.map((item, index) => (
            <ListRow index={index} key={item} text={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Lifecycle() {
  return (
    <section
      aria-labelledby="ai-lifecycle-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <h2
          className="max-w-5xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
          id="ai-lifecycle-title"
        >
          From opportunity to evolving AI capability
        </h2>
        <div className="mt-12 grid grid-cols-1 border-y border-[#f7f7f2]/15 lg:mt-16 lg:grid-cols-4">
          {artificialIntelligencePage.lifecycle.map((stage, index) => (
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

function Principles() {
  return (
    <section
      aria-labelledby="ai-principles-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow="AI Engineering Principles"
          id="ai-principles-title"
          title="How we think about AI engineering"
        />
        <div className="mt-12 grid grid-cols-1 border-t border-[#171817]/15 lg:mt-16 lg:grid-cols-2">
          {artificialIntelligencePage.principles.map((item, index) => (
            <EditorialItem index={index} item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologyDomains() {
  return (
    <section
      aria-labelledby="ai-technology-title"
      className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 border-y border-[#171817]/15 py-14 lg:grid-cols-[minmax(0,0.62fr)_minmax(24rem,1fr)] lg:gap-20 lg:py-20">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
            Technology Domains
          </p>
          <h2
            className="mt-7 font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
            id="ai-technology-title"
          >
            Artificial intelligence technology domains
          </h2>
        </div>
        <div>
          <p className="max-w-2xl font-sans text-base leading-8 text-[#171817]/64 sm:text-lg sm:leading-9">
            Technology choices should follow product requirements, data needs,
            operational constraints, and long-term maintainability.
          </p>
          <TagCloud items={artificialIntelligencePage.technologyDomains} />
        </div>
      </div>
    </section>
  );
}

function WhenToWork() {
  return (
    <section
      aria-labelledby="when-ai-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <h2
          className="max-w-5xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
          id="when-ai-title"
        >
          When AI needs to become part of the product
        </h2>
        <div className="mt-12 grid grid-cols-1 border-t border-[#f7f7f2]/15 lg:grid-cols-2">
          {artificialIntelligencePage.situations.map((item, index) => (
            <ListRow dark index={index} key={item} text={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EngagementModels() {
  return (
    <section
      aria-labelledby="ai-engagement-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <h2
          className="max-w-5xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
          id="ai-engagement-title"
        >
          Ways to build AI-enabled products
        </h2>
        <div className="mt-12 grid grid-cols-1 border-y border-[#171817]/15 lg:mt-16 lg:grid-cols-3">
          {artificialIntelligencePage.engagementModels.map((item, index) => (
            <article
              className="border-b border-[#171817]/15 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-10 lg:last:border-r-0"
              key={item.title}
            >
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
                0{index + 1}
              </p>
              <h3 className="mt-8 font-serif text-[clamp(2.5rem,5vw,5.25rem)] leading-none tracking-[-0.04em]">
                {item.title}
              </h3>
              <p className="mt-7 font-sans text-sm leading-7 text-[#171817]/64 sm:text-base sm:leading-8">
                {item.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <SecondaryLink href="/company/how-we-work" label="See How We Work" />
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section
      aria-labelledby="ai-use-cases-title"
      className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 border-y border-[#171817]/15 py-14 lg:grid-cols-[minmax(0,0.55fr)_minmax(24rem,1fr)] lg:gap-20 lg:py-20">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
            Illustrative use cases - not client case studies.
          </p>
          <h2
            className="mt-7 font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
            id="ai-use-cases-title"
          >
            What practical AI can support
          </h2>
        </div>
        <TagCloud items={artificialIntelligencePage.useCases} />
      </div>
    </section>
  );
}

function RelatedCapabilities() {
  return (
    <section
      aria-labelledby="related-ai-capabilities-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <h2
          className="max-w-5xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
          id="related-ai-capabilities-title"
        >
          Related capabilities
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {artificialIntelligencePage.relatedCapabilities.map((item) => (
            <CapabilityLink item={item} key={item.href} />
          ))}
        </div>
        <Link
          className="mt-8 inline-flex min-h-12 w-fit items-center justify-center border border-[#f7f7f2]/25 px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:border-[#e35d3f] hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7f7f2]"
          href="/capabilities"
        >
          Back to All Capabilities
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
      aria-labelledby="artificial-intelligence-faq-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow="FAQ"
          id="artificial-intelligence-faq-title"
          title="Artificial intelligence questions"
        />
        <div className="mt-12 lg:mt-16">
          <ArtificialIntelligenceFaq items={artificialIntelligencePage.faqs} />
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const { finalCta } = artificialIntelligencePage;

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
          <span className="text-[#e35d3f]">0{index + 1}</span>
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

function CapabilityLink({ item }: { item: RelatedCapability }) {
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
        backgroundImage: `linear-gradient(145deg, rgba(23, 33, 31, 0.16), rgba(23, 33, 31, 0.92)), url(${imagePath})`,
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
