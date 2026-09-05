import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import {
  workItems,
  workPage,
  type CapabilityConnection,
  type ComplexityStage,
  type LifecycleStage,
  type ProductType,
  type SolutionScenario,
  type TechnologyLayer,
  type TextBlock,
} from "@/content/work";
import { WorkFaq } from "./WorkFaq";

export const metadata: Metadata = {
  title: "Work | BIMAL GLOBAL",
  description:
    "Explore the types of digital products, platforms, mobile applications, cloud systems, and AI-enabled technology BIMAL GLOBAL can build.",
};

export default function WorkPage() {
  return (
    <main className="overflow-hidden bg-[#f7f7f2] text-[#171817]">
      <Hero />
      <WhatWeBuild />
      <ProductTypes />
      <SolutionScenarios />
      <ComplexitySection />
      <BuildingBlocks />
      <LifecycleSection />
      <ExistingSystems />
      <IndustrySection />
      <EngagementAndFutureWork />
      <RelatedCapabilities />
      <FinalCta />
    </main>
  );
}

function Hero() {
  const { hero } = workPage;

  return (
    <section
      aria-labelledby="work-title"
      className="relative overflow-hidden bg-[#171817] px-6 py-28 text-[#f7f7f2] sm:px-10 sm:py-36 lg:px-16"
    >
      <TechnicalBackdrop />
      <div className="relative mx-auto grid w-full max-w-[1440px] gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(22rem,0.56fr)] lg:items-end">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#e35d3f]">
            {hero.eyebrow}
          </p>
          <h1
            className="mt-8 max-w-6xl font-serif text-[clamp(3.75rem,8.8vw,8.9rem)] leading-[0.88] tracking-[-0.045em]"
            id="work-title"
          >
            {hero.title}
          </h1>
        </div>
        <div className="lg:pb-3">
          <p className="max-w-xl font-sans text-lg leading-8 text-[#f7f7f2]/70 sm:text-xl sm:leading-9">
            {hero.summary}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <LightLink href={hero.primaryCta.href} label={hero.primaryCta.label} />
            <DarkOutlineLink
              href={hero.secondaryCta.href}
              label={hero.secondaryCta.label}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatWeBuild() {
  return (
    <section className="border-b border-[#d9d4c7] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <SectionHeading
          eyebrow="What We Build"
          title="Products, platforms, and systems shaped around real requirements."
          description="These categories describe what BIMAL GLOBAL can build. They are capability areas, not claims that every category represents a completed project."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-7">
          {workPage.buildCategories.map((item) => (
            <CompactCard item={item} key={item.title} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProductTypes() {
  return (
    <section className="bg-[#ebe6d9] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.66fr_1fr] lg:items-start">
          <SectionHeading
            eyebrow="Product Types"
            title="Breadth without pretending every example is a client project."
            description="The page shows technology directions BIMAL GLOBAL can support across digital products, operational systems, mobile experiences, platforms, and intelligent workflows."
          />
          <div className="grid gap-4">
            {workPage.productTypes.map((item, index) => (
              <ProductTypeRow index={index} item={item} key={item.label} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ProductTypeRow({ index, item }: { index: number; item: ProductType }) {
  return (
    <article className="grid gap-5 border-t border-[#171817]/18 py-6 sm:grid-cols-[4.5rem_0.7fr_1fr] sm:items-start">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#e35d3f]">
        {String(index + 1).padStart(2, "0")}
      </p>
      <div>
        <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#55584f]">
          {item.label}
        </p>
        <h3 className="mt-3 font-serif text-[clamp(2rem,3.6vw,3.7rem)] leading-none tracking-[-0.04em]">
          {item.title}
        </h3>
      </div>
      <p className="font-sans text-sm leading-7 text-[#55584f] sm:text-base sm:leading-8">
        {item.description}
      </p>
    </article>
  );
}

function SolutionScenarios() {
  return (
    <section className="border-b border-[#d9d4c7] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <SectionHeading
          eyebrow="Illustrative Solution Scenarios"
          title="Examples of technology possibilities, not client case studies."
          description="These scenarios show how product thinking, engineering, infrastructure, mobile, and AI can come together without implying existing customers or completed portfolio work."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {workPage.scenarios.map((scenario) => (
            <ScenarioCard key={scenario.number} scenario={scenario} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ScenarioCard({ scenario }: { scenario: SolutionScenario }) {
  return (
    <article className="border border-[#d9d4c7] bg-[#fdfbf5] p-7 transition-colors hover:border-[#171817] sm:p-8">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
        Scenario {scenario.number}
      </p>
      <h3 className="mt-7 font-serif text-[clamp(2.5rem,5vw,5.25rem)] leading-none tracking-[-0.04em]">
        {scenario.title}
      </h3>
      <p className="mt-6 font-sans text-base leading-8 text-[#55584f]">
        {scenario.description}
      </p>
      <TagCloud items={scenario.components} />
    </article>
  );
}

function ComplexitySection() {
  return (
    <section className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <SectionHeading
          eyebrow="Technology Complexity"
          title="Architecture should match the actual complexity of the product."
          description="Different products require different engineering depth. Complexity should be earned by the requirement, not added by default."
          light
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {workPage.complexity.map((stage, index) => (
            <ComplexityCard index={index} key={stage.title} stage={stage} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ComplexityCard({
  index,
  stage,
}: {
  index: number;
  stage: ComplexityStage;
}) {
  return (
    <article className="border border-[#f7f7f2]/16 p-6">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-8 font-serif text-[clamp(2.35rem,4vw,4.4rem)] leading-none tracking-[-0.04em] text-[#f7f7f2]">
        {stage.title}
      </h3>
      <p className="mt-4 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#f7f7f2]/42">
        {stage.scope}
      </p>
      <p className="mt-5 font-sans text-sm leading-7 text-[#f7f7f2]/64">
        {stage.description}
      </p>
    </article>
  );
}

function BuildingBlocks() {
  return (
    <section className="border-b border-[#d9d4c7] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <SectionHeading
            eyebrow="Technology Building Blocks"
            title="Modern products are assembled from connected layers."
            description="These layers are selected and combined according to the product's requirements, operating model, user experience, and technical constraints."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {workPage.buildingBlocks.map((layer) => (
              <LayerCard key={layer.title} layer={layer} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function LayerCard({ layer }: { layer: TechnologyLayer }) {
  return (
    <article className="border border-[#d9d4c7] bg-[#fdfbf5] p-6">
      <h3 className="font-sans text-xl font-semibold text-[#171817]">
        {layer.title}
      </h3>
      <p className="mt-4 font-sans text-sm leading-7 text-[#55584f]">
        {layer.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {layer.examples.map((example) => (
          <span
            className="border border-[#171817]/14 px-3 py-2 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#55584f]"
            key={example}
          >
            {example}
          </span>
        ))}
      </div>
    </article>
  );
}

function LifecycleSection() {
  return (
    <section className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Product Development Lifecycle"
              title="A flexible path from context to evolution."
              description="This is not an inflexible methodology. It is a practical way to keep product, engineering, launch, and learning connected."
              light
            />
            <div className="mt-9">
              <DarkOutlineLink href="/company/how-we-work" label="See How We Work" />
            </div>
          </div>
          <div className="grid gap-3">
            {workPage.lifecycle.map((stage) => (
              <LifecycleRow key={stage.number} stage={stage} />
            ))}
          </div>
        </div>
        <div className="mt-16 grid gap-10 border-t border-[#f7f7f2]/15 pt-12 lg:grid-cols-[0.72fr_1fr] lg:items-center">
          <div>
            <h3 className="font-serif text-[clamp(2.8rem,5.8vw,6rem)] leading-[0.92] tracking-[-0.045em] text-[#f7f7f2]">
              The objective is not simply to build features.
            </h3>
            <p className="mt-6 max-w-2xl font-sans text-base leading-8 text-[#f7f7f2]/66 sm:text-lg">
              New products need a technology foundation capable of supporting
              future product decisions, not just a first release.
            </p>
          </div>
          <Flow dark items={workPage.newProductFlow} />
        </div>
      </Container>
    </section>
  );
}

function LifecycleRow({ stage }: { stage: LifecycleStage }) {
  return (
    <article className="grid gap-4 border border-[#f7f7f2]/16 p-5 sm:grid-cols-[4rem_0.35fr_1fr] sm:items-center">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#e35d3f]">
        {stage.number}
      </p>
      <h3 className="font-serif text-3xl leading-none tracking-[-0.04em] text-[#f7f7f2]">
        {stage.title}
      </h3>
      <p className="font-sans text-sm leading-7 text-[#f7f7f2]/64">
        {stage.description}
      </p>
    </article>
  );
}

function ExistingSystems() {
  return (
    <section className="border-b border-[#d9d4c7] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <SectionHeading
          eyebrow="Existing-System Evolution"
          title="Not every technology challenge starts from a blank page."
          description="Businesses with existing products may need modernization, extension, integration, reliability improvements, mobile expansion, AI integration, or cloud evolution."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-7">
          {workPage.existingSystemEvolution.map((item) => (
            <CompactCard item={item} key={item.title} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function IndustrySection() {
  return (
    <section className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.76fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Work Across Industries"
              title="Engineering capability travels. Business logic stays specific."
              description="The same software, mobile, cloud, and AI capabilities can support different industries, while workflows and experiences remain domain-specific."
              light
            />
            <div className="mt-9">
              <DarkOutlineLink href="/industries" label="Explore Industries" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {workPage.industries.map((item) => (
              <DarkCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function EngagementAndFutureWork() {
  return (
    <section className="border-b border-[#d9d4c7] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Engagement Models"
              title="Different technology work begins in different ways."
              description="These are starting points, not fixed packages, pricing models, or delivery guarantees."
            />
            <div className="mt-10 grid gap-4">
              {workPage.engagementModels.map((item) => (
                <NumberedItem item={item} key={item.title} />
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Future Case-Study Architecture"
              title={`${workItems.length} verified public work items are currently listed.`}
              description="Future public work can be presented transparently through problem, approach, architecture, and outcome once verified project information is available."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {workPage.futureCaseStudyStructure.map((item) => (
                <CompactCard item={item} key={item.title} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 grid gap-12 border-t border-[#171817]/15 pt-12 lg:grid-cols-[0.72fr_1fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Work questions."
            description="A concise guide to how to read this page without turning illustrative scenarios into fake portfolio claims."
          />
          <WorkFaq items={workPage.faqs} />
        </div>
      </Container>
    </section>
  );
}

function RelatedCapabilities() {
  return (
    <section className="bg-[#ebe6d9] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <SectionHeading
          eyebrow="Related Capabilities"
          title="Explore the capabilities behind the work."
          description="These verified pages describe the product, engineering, mobile, cloud, and AI capabilities that can power a build."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {workPage.capabilityConnections.map((item) => (
            <CapabilityCard item={item} key={item.href} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <PrimaryLink href="/capabilities" label="All Capabilities" />
          <SecondaryLink href="/company/how-we-work" label="How We Work" />
        </div>
      </Container>
    </section>
  );
}

function FinalCta() {
  const { finalCta } = workPage;

  return (
    <section className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-5xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#e35d3f]">
              Start With the Problem
            </p>
            <h2 className="mt-7 font-serif text-[clamp(3.2rem,7vw,7.25rem)] leading-[0.9] tracking-[-0.045em]">
              {finalCta.title}
            </h2>
            <p className="mt-7 max-w-2xl font-sans text-lg leading-8 text-[#f7f7f2]/68 sm:text-xl sm:leading-9">
              {finalCta.summary}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <LightLink href={finalCta.primaryCta.href} label={finalCta.primaryCta.label} />
            <DarkOutlineLink
              href={finalCta.secondaryCta.href}
              label={finalCta.secondaryCta.label}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function CapabilityCard({ item }: { item: CapabilityConnection }) {
  return (
    <Link
      className="group border border-[#d2cab8] bg-[#fdfbf5] p-6 transition-colors hover:border-[#171817] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
      href={item.href}
    >
      <h3 className="font-sans text-xl font-semibold text-[#171817]">
        {item.title}
      </h3>
      <p className="mt-4 font-sans text-sm leading-7 text-[#55584f]">
        {item.description}
      </p>
      <span className="mt-7 inline-flex font-sans text-sm font-semibold text-[#e35d3f]">
        Explore
        <span aria-hidden="true" className="ml-2">
          &rarr;
        </span>
      </span>
    </Link>
  );
}

function CompactCard({ item }: { item: TextBlock }) {
  return (
    <article className="border border-[#d9d4c7] bg-[#fdfbf5] p-5">
      <h3 className="font-sans text-lg font-semibold text-[#171817]">
        {item.title}
      </h3>
      <p className="mt-4 font-sans text-sm leading-7 text-[#55584f]">
        {item.description}
      </p>
    </article>
  );
}

function DarkCard({ item }: { item: TextBlock }) {
  return (
    <article className="border border-[#f7f7f2]/16 p-6">
      <h3 className="font-sans text-xl font-semibold text-[#f7f7f2]">
        {item.title}
      </h3>
      <p className="mt-4 font-sans text-sm leading-7 text-[#f7f7f2]/64">
        {item.description}
      </p>
    </article>
  );
}

function NumberedItem({ item }: { item: TextBlock }) {
  return (
    <article className="border-t border-[#171817]/18 py-5">
      <h3 className="font-sans text-xl font-semibold text-[#171817]">
        {item.title}
      </h3>
      <p className="mt-3 font-sans text-sm leading-7 text-[#55584f]">
        {item.description}
      </p>
    </article>
  );
}

function Flow({ dark = false, items }: { dark?: boolean; items: readonly string[] }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 xl:grid-cols-7">
      {items.map((item, index) => (
        <li className="flex min-w-0 items-stretch gap-3" key={item}>
          <div
            className={`flex min-h-24 flex-1 flex-col justify-center border px-4 py-5 ${
              dark
                ? "border-[#f7f7f2]/16 bg-[#f7f7f2]/[0.04]"
                : "border-[#171817]/16 bg-[#fdfbf5]"
            }`}
          >
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#e35d3f]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className={`mt-3 font-sans text-sm font-semibold ${
                dark ? "text-[#f7f7f2]" : "text-[#171817]"
              }`}
            >
              {item}
            </span>
          </div>
          {index < items.length - 1 ? (
            <div className="hidden items-center text-[#e35d3f] xl:flex">
              &rarr;
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function TagCloud({ items }: { items: readonly string[] }) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          className="border border-[#171817]/15 px-4 py-3 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#55584f]"
          key={item}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function SectionHeading({
  description,
  eyebrow,
  light = false,
  title,
}: {
  description: string;
  eyebrow: string;
  light?: boolean;
  title: string;
}) {
  return (
    <div className="max-w-4xl">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#e35d3f]">
        {eyebrow}
      </p>
      <h2
        className={`mt-5 font-serif text-[clamp(2.8rem,5.8vw,6rem)] leading-[0.92] tracking-[-0.045em] ${
          light ? "text-[#f7f7f2]" : "text-[#171817]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-6 max-w-3xl font-sans text-base leading-8 sm:text-lg ${
          light ? "text-[#f7f7f2]/66" : "text-[#55584f]"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-[1440px]">{children}</div>;
}

function TechnicalBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(247,247,242,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.16)_1px,transparent_1px)] [background-size:4rem_4rem]"
    />
  );
}

function PrimaryLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      className="inline-flex min-h-12 w-fit items-center justify-center bg-[#171817] px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
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
      className="inline-flex min-h-12 w-fit items-center justify-center border border-[#171817]/25 px-6 font-sans text-sm font-semibold text-[#171817] transition-colors hover:border-[#171817] hover:bg-[#171817]/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
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
      className="inline-flex min-h-12 items-center justify-center bg-[#f7f7f2] px-6 font-sans text-sm font-semibold text-[#171817] transition-colors hover:bg-[#e35d3f] hover:text-[#f7f7f2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7f7f2]"
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
      className="inline-flex min-h-12 items-center justify-center border border-[#f7f7f2]/25 px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:border-[#e35d3f] hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7f7f2]"
      href={href}
    >
      {label}
      <span aria-hidden="true" className="ml-8 text-lg leading-none">
        &rarr;
      </span>
    </Link>
  );
}
