import type { Metadata } from "next";
import Link from "next/link";

import {
  futureCaseStudies,
  workPage,
  type CapabilityConnection,
  type ProductType,
  type SolutionScenario,
  type TextBlock,
} from "@/content/work";
import { WorkFaq } from "./WorkFaq";

export const metadata: Metadata = {
  title: "Work | BIMAL GLOBAL",
  description:
    "Explore the types of digital products, software platforms, mobile applications, business systems, cloud infrastructure, and AI-enabled technology solutions BIMAL GLOBAL can build.",
};

export default function WorkPage() {
  return (
    <main className="overflow-hidden bg-[#f7f7f2] text-[#171817]">
      <Hero />
      <WhatWeBuild />
      <ProductTypes />
      <SolutionScenarios />
      <ProductArchitecture />
      <CapabilityConnectionSection />
      <ProductLifecycle />
      <NewProducts />
      <SystemEvolution />
      <IndustryProductTypes />
      <ProductBuildingBlocks />
      <EngineeringPrinciples />
      <EngagementModels />
      <FutureCaseStudies />
      <RelatedCapabilities />
      <FaqSection />
      <FinalCta />
    </main>
  );
}

function Hero() {
  const { hero } = workPage;

  return (
    <section
      aria-labelledby="work-title"
      className="relative isolate px-6 pb-20 pt-32 sm:px-10 sm:pb-28 sm:pt-36 lg:px-16 lg:pb-36 lg:pt-44"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(24rem,0.8fr)] lg:items-center lg:gap-20 xl:gap-28">
        <div className="max-w-4xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
            {hero.eyebrow}
          </p>
          <h1
            className="mt-7 font-serif text-[clamp(3.35rem,7.8vw,8.5rem)] leading-[0.9] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]"
            id="work-title"
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
          label="Selected work types"
          meta="Ideas / Products / Systems"
        />
      </div>
    </section>
  );
}

function WhatWeBuild() {
  return (
    <section
      aria-labelledby="what-we-build-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow="What We Build"
          id="what-we-build-title"
          title="Different problems can become different products."
        />
        <p className="mt-7 max-w-2xl font-sans text-sm font-semibold uppercase leading-7 tracking-[0.16em] text-[#171817]/54">
          Product categories and technology possibilities, not completed client
          project claims.
        </p>
        <div className="mt-12 grid grid-cols-1 border-t border-[#171817]/15 lg:grid-cols-2">
          {workPage.categories.map((item, index) => (
            <EditorialItem index={index} item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductTypes() {
  return (
    <section
      aria-labelledby="product-types-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.58fr)_minmax(24rem,0.95fr)] lg:items-center lg:gap-20">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
            Product Types
          </p>
          <h2
            className="mt-7 font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
            id="product-types-title"
          >
            Products can take many forms.
          </h2>
        </div>
        <div className="grid gap-4">
          {workPage.productTypes.map((item, index) => (
            <ProductTypeRow index={index} item={item} key={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductTypeRow({ index, item }: { index: number; item: ProductType }) {
  return (
    <article
      className="grid gap-4 border border-[#f7f7f2]/15 bg-[#171817]/60 p-5 sm:grid-cols-[minmax(10rem,0.42fr)_minmax(0,1fr)] sm:items-center motion-safe:animate-[hero-rise_800ms_ease-out_both]"
      style={{ animationDelay: `${140 + index * 55}ms` }}
    >
      <div>
        <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#e35d3f]">
          {item.label}
        </p>
        <h3 className="mt-3 font-serif text-[clamp(1.8rem,3.5vw,3.6rem)] leading-none tracking-[-0.04em]">
          {item.title}
        </h3>
      </div>
      <p className="font-sans text-sm leading-7 text-[#f7f7f2]/62 sm:text-base sm:leading-8">
        {item.description}
      </p>
    </article>
  );
}

function SolutionScenarios() {
  return (
    <section
      aria-labelledby="solution-scenarios-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
          Illustrative examples - not client case studies.
        </p>
        <h2
          className="mt-7 max-w-5xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
          id="solution-scenarios-title"
        >
          Illustrative technology scenarios
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {workPage.scenarios.map((scenario) => (
            <ScenarioCard key={scenario.number} scenario={scenario} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ScenarioCard({ scenario }: { scenario: SolutionScenario }) {
  return (
    <article className="border border-[#171817]/15 p-7 transition-colors hover:border-[#e35d3f]/60 hover:bg-[#171817]/[0.025] sm:p-8">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
        Scenario {scenario.number}
      </p>
      <h3 className="mt-7 font-serif text-[clamp(2.5rem,5vw,5.25rem)] leading-none tracking-[-0.04em]">
        {scenario.title}
      </h3>
      <p className="mt-6 font-sans text-base leading-8 text-[#171817]/66 sm:text-lg sm:leading-9">
        {scenario.example}
      </p>
      <TagCloud items={scenario.components} />
      <div className="mt-7 border-t border-[#171817]/15 pt-5">
        <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#171817]/42">
          Technology connection
        </p>
        <p className="mt-3 font-sans text-sm font-semibold leading-7 text-[#171817]/64">
          {scenario.capabilities.join(" + ")}
        </p>
      </div>
    </article>
  );
}

function ProductArchitecture() {
  return (
    <section
      aria-labelledby="product-architecture-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(24rem,0.82fr)] lg:gap-20">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
            Product Complexity
          </p>
          <h2
            className="mt-7 font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
            id="product-architecture-title"
          >
            A product is more than what the user sees.
          </h2>
          <p className="mt-8 max-w-2xl font-sans text-lg leading-8 text-[#f7f7f2]/66 sm:text-xl sm:leading-9">
            Different products require different combinations of these layers.
          </p>
        </div>
        <div>
          <VisualPanel
            imagePath="/images/work/product-systems.jpg"
            label="Product systems"
            meta="Experience to operations"
            tall
          />
          <div className="mt-5">
            <LayerDiagram dark layers={workPage.architectureLayers.map((layer) => `${layer.title}: ${layer.detail}`)} />
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilityConnectionSection() {
  return (
    <section
      aria-labelledby="capability-connection-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow="Technology Behind The Product"
          id="capability-connection-title"
          title="Connected capabilities create complete products."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,0.35fr)] lg:items-stretch">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
            {workPage.capabilityConnections.map((item, index) => (
              <CapabilityCard index={index} item={item} key={item.href} />
            ))}
          </div>
          <div className="grid place-items-center border border-[#171817]/15 bg-[#efefe7] p-8 text-center">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
              Result
            </p>
            <p className="mt-5 font-serif text-[clamp(2.7rem,6vw,5.5rem)] leading-none tracking-[-0.045em]">
              Digital Product
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({
  index,
  item,
}: {
  index: number;
  item: CapabilityConnection;
}) {
  return (
    <Link
      className="group border border-[#171817]/15 p-6 transition-colors hover:border-[#e35d3f]/70 hover:bg-[#171817]/[0.025] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f] motion-safe:animate-[hero-rise_800ms_ease-out_both]"
      href={item.href}
      style={{ animationDelay: `${150 + index * 70}ms` }}
    >
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
        0{index + 1}
      </p>
      <h3 className="mt-6 font-serif text-[clamp(2rem,4vw,3.8rem)] leading-none tracking-[-0.04em] transition-colors group-hover:text-[#e35d3f]">
        {item.title}
      </h3>
      <p className="mt-5 font-sans text-sm leading-7 text-[#171817]/62">
        {item.description}
      </p>
    </Link>
  );
}

function ProductLifecycle() {
  return (
    <section
      aria-labelledby="product-lifecycle-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <h2
          className="max-w-5xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
          id="product-lifecycle-title"
        >
          From opportunity to working technology
        </h2>
        <div className="mt-12 grid grid-cols-1 border-y border-[#f7f7f2]/15 lg:mt-16 lg:grid-cols-4">
          {workPage.lifecycle.map((stage, index) => (
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

function NewProducts() {
  const { newProducts } = workPage;

  return (
    <EditorialImageSection
      eyebrow="Building New Products"
      imageAlt={newProducts.imageAlt}
      imagePath={newProducts.imagePath}
      items={newProducts.items}
      paragraphs={newProducts.paragraphs}
      title={newProducts.title}
    />
  );
}

function SystemEvolution() {
  const { evolution } = workPage;

  return (
    <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(22rem,0.62fr)] lg:items-end lg:gap-16">
        <VisualPanel
          alt={evolution.imageAlt}
          imagePath={evolution.imagePath}
          label="System evolution"
          meta="Modernize / Integrate / Evolve"
          tall
        />
        <div className="border-y border-[#171817]/15 py-12 sm:py-16 lg:py-20">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
            Evolving Existing Systems
          </p>
          <h2 className="mt-7 font-serif text-[clamp(2.85rem,6vw,6.6rem)] leading-[0.94] tracking-[-0.045em]">
            {evolution.title}
          </h2>
          <div className="mt-8 grid gap-6 font-sans text-lg leading-8 text-[#171817]/66 sm:text-xl sm:leading-9">
            {evolution.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Pipeline items={evolution.flow} />
          <FocusList items={evolution.items} />
        </div>
      </div>
    </section>
  );
}

function IndustryProductTypes() {
  return (
    <section
      aria-labelledby="industry-products-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 border-b border-[#f7f7f2]/15 pb-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.55fr)] lg:items-end lg:gap-20 lg:pb-20">
          <h2
            className="font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
            id="industry-products-title"
          >
            The same technology capability can support different industries.
          </h2>
          <div>
            <p className="font-sans text-lg leading-8 text-[#f7f7f2]/68 sm:text-xl sm:leading-9">
              Industry context changes the workflow, data, product model, and
              operating needs. The engineering foundation still connects product,
              software, mobile, infrastructure, and AI.
            </p>
            <Link
              className="mt-8 inline-flex min-h-12 w-fit items-center justify-center border border-[#f7f7f2]/28 px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:border-[#e35d3f] hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f]"
              href="/industries"
            >
              Explore Industries
              <span aria-hidden="true" className="ml-8 text-lg leading-none">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 border-t border-[#f7f7f2]/15 lg:grid-cols-2">
          {workPage.industries.map((item, index) => (
            <EditorialItem dark index={index} item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductBuildingBlocks() {
  return (
    <section
      aria-labelledby="building-blocks-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 border-y border-[#171817]/15 py-14 lg:grid-cols-[minmax(0,0.58fr)_minmax(24rem,1fr)] lg:gap-20 lg:py-20">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
            Building Blocks
          </p>
          <h2
            className="mt-7 font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
            id="building-blocks-title"
          >
            Products are built from connected systems.
          </h2>
          <p className="mt-8 max-w-xl font-sans text-base leading-8 text-[#171817]/64 sm:text-lg sm:leading-9">
            The right combination depends on the product, not a fixed technology
            checklist.
          </p>
        </div>
        <TagCloud items={workPage.buildingBlocks} />
      </div>
    </section>
  );
}

function EngineeringPrinciples() {
  return (
    <section
      aria-labelledby="work-principles-title"
      className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow="How We Think About Building"
          id="work-principles-title"
          title="Technology should support the next stage of the product."
        />
        <div className="mt-12 grid grid-cols-1 border-t border-[#171817]/15 lg:mt-16 lg:grid-cols-2">
          {workPage.principles.map((item, index) => (
            <EditorialItem index={index} item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EngagementModels() {
  return (
    <section
      aria-labelledby="work-engagement-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <h2
          className="max-w-5xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
          id="work-engagement-title"
        >
          Different projects need different starting points.
        </h2>
        <div className="mt-12 grid grid-cols-1 border-y border-[#f7f7f2]/15 lg:mt-16 lg:grid-cols-4">
          {workPage.engagementModels.map((item, index) => (
            <article
              className="border-b border-[#f7f7f2]/15 py-8 lg:border-b-0 lg:border-r lg:px-6 lg:py-10 lg:last:border-r-0"
              key={item.title}
            >
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
                0{index + 1}
              </p>
              <h3 className="mt-8 font-serif text-[clamp(2.2rem,4vw,4rem)] leading-none tracking-[-0.04em]">
                {item.title}
              </h3>
              <p className="mt-7 font-sans text-sm leading-7 text-[#f7f7f2]/64 sm:text-base sm:leading-8">
                {item.description}
              </p>
            </article>
          ))}
        </div>
        <Link
          className="mt-8 inline-flex min-h-12 w-fit items-center justify-center border border-[#f7f7f2]/25 px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:border-[#e35d3f] hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7f7f2]"
          href="/company/how-we-work"
        >
          See How We Work
          <span aria-hidden="true" className="ml-8 text-lg leading-none">
            &rarr;
          </span>
        </Link>
      </div>
    </section>
  );
}

function FutureCaseStudies() {
  return (
    <section
      aria-labelledby="future-case-studies-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 border-y border-[#171817]/15 py-14 lg:grid-cols-[minmax(0,0.58fr)_minmax(24rem,1fr)] lg:gap-20 lg:py-20">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
            Future Case Study Architecture
          </p>
          <h2
            className="mt-7 font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
            id="future-case-studies-title"
          >
            Real project stories will be added here as BIMAL GLOBAL publishes
            selected work.
          </h2>
          <p className="mt-8 max-w-xl font-sans text-base leading-8 text-[#171817]/64 sm:text-lg sm:leading-9">
            Selected project stories will be published as they become available
            for public sharing.
          </p>
        </div>
        <div className="border border-[#171817]/15 bg-[#efefe7] p-7 sm:p-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#171817]/42">
            Ready for /work/[slug]
          </p>
          <p className="mt-5 font-serif text-[clamp(2rem,4vw,4rem)] leading-none tracking-[-0.04em]">
            {futureCaseStudies.length} public case studies currently published.
          </p>
          <TagCloud items={workPage.futureCaseStudySchema} />
        </div>
      </div>
    </section>
  );
}

function RelatedCapabilities() {
  return (
    <section
      aria-labelledby="related-work-capabilities-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <h2
          className="max-w-5xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
          id="related-work-capabilities-title"
        >
          Explore what powers the work
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {workPage.capabilityConnections.map((item) => (
            <Link
              className="group border border-[#f7f7f2]/15 p-7 transition-colors hover:border-[#e35d3f]/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f] sm:p-8"
              href={item.href}
              key={item.href}
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
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section
      aria-labelledby="work-faq-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading eyebrow="FAQ" id="work-faq-title" title="Work questions" />
        <div className="mt-12 lg:mt-16">
          <WorkFaq items={workPage.faqs} />
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const { finalCta } = workPage;

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

function EditorialImageSection({
  eyebrow,
  imageAlt,
  imagePath,
  items,
  paragraphs,
  title,
}: {
  eyebrow: string;
  imageAlt: string;
  imagePath: string;
  items: readonly string[];
  paragraphs: readonly string[];
  title: string;
}) {
  return (
    <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(22rem,0.62fr)] lg:items-end lg:gap-16">
        <div>
          <VisualPanel
            alt={imageAlt}
            imagePath={imagePath}
            label={eyebrow}
            meta="Opportunity to product"
            tall
          />
        </div>
        <div className="border-y border-[#171817]/15 py-12 sm:py-16 lg:py-20">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
            {eyebrow}
          </p>
          <h2 className="mt-7 font-serif text-[clamp(2.85rem,6vw,6.6rem)] leading-[0.94] tracking-[-0.045em]">
            {title}
          </h2>
          <div className="mt-8 grid gap-6 font-sans text-lg leading-8 text-[#171817]/66 sm:text-xl sm:leading-9">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <FocusList items={items} />
        </div>
      </div>
    </section>
  );
}

function Pipeline({ items }: { items: readonly string[] }) {
  return (
    <ol className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => (
        <li
          className="relative min-h-20 border border-[#171817]/15 px-5 py-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#171817]/62 motion-safe:animate-[hero-rise_700ms_ease-out_both]"
          key={item}
          style={{ animationDelay: `${120 + index * 55}ms` }}
        >
          <span className="text-[#e35d3f]">0{index + 1}</span>
          <span className="mt-4 block">{item}</span>
        </li>
      ))}
    </ol>
  );
}

function LayerDiagram({
  dark = false,
  layers,
}: {
  dark?: boolean;
  layers: readonly string[];
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
            className={`grid min-h-16 grid-cols-[auto_minmax(0,1fr)] items-center gap-4 border px-4 sm:px-5 ${dark ? "border-[#f7f7f2]/15 bg-[#171817]/78" : "border-[#171817]/15 bg-[#f7f7f2]/80"}`}
            key={layer}
          >
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[#e35d3f]">
              0{index + 1}
            </span>
            <span className="break-words font-serif text-2xl leading-none tracking-[-0.04em] sm:text-3xl">
              {layer}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EditorialItem({
  dark = false,
  index,
  item,
}: {
  dark?: boolean;
  index: number;
  item: TextBlock;
}) {
  return (
    <article
      className={`group grid gap-5 border-b py-8 transition-colors sm:grid-cols-[5rem_minmax(0,0.55fr)_minmax(0,1fr)] sm:gap-8 sm:py-10 lg:px-5 ${dark ? "border-[#f7f7f2]/15 hover:border-[#e35d3f]/60" : "border-[#171817]/15 hover:border-[#e35d3f]/60 hover:bg-[#171817]/[0.025]"}`}
    >
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
        0{index + 1}
      </p>
      <h3 className="font-serif text-[clamp(2rem,4vw,4rem)] leading-none tracking-[-0.04em] transition-colors group-hover:text-[#e35d3f]">
        {item.title}
      </h3>
      <p className={`max-w-xl font-sans text-sm leading-7 sm:text-base sm:leading-8 ${dark ? "text-[#f7f7f2]/62" : "text-[#171817]/62"}`}>
        {item.description}
      </p>
    </article>
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

function TagCloud({ items }: { items: readonly string[] }) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          className="border border-[#171817]/15 px-4 py-3 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#171817]/58"
          key={item}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  id,
  title,
}: {
  eyebrow: string;
  id: string;
  title: string;
}) {
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
        backgroundImage: `linear-gradient(145deg, rgba(23, 33, 31, 0.14), rgba(23, 33, 31, 0.92)), url(${imagePath})`,
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
        className="absolute left-8 top-24 h-40 w-[70%] border border-[#f7f7f2]/20 sm:left-12 sm:h-56"
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
