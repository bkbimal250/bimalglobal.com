import type { Metadata } from "next";
import Link from "next/link";

import {
  productDevelopmentPage,
  type ProductJourney,
  type ProductSection,
  type ProductTextBlock,
} from "@/content/product-development";
import { ProductDevelopmentFaq } from "./ProductDevelopmentFaq";

export const metadata: Metadata = {
  title: "Product Development | BIMAL GLOBAL",
  description:
    "BIMAL GLOBAL helps shape, design, engineer, launch, and evolve digital products through product strategy, UX, prototyping, MVP development, software engineering, and continuous improvement.",
};

export default function ProductDevelopmentPage() {
  return (
    <main className="overflow-hidden bg-[#f7f7f2] text-[#171817]">
      <Hero />
      <Overview />
      <ProductCategories />
      {productDevelopmentPage.sections.map((section, index) => (
        <ProductSectionBlock
          dark={index % 4 === 3}
          flipped={index % 2 === 1}
          key={section.title}
          section={section}
        />
      ))}
      <Lifecycle />
      <CrossFunctional />
      <TechnologyDomains />
      <Principles />
      <WhenToWork />
      <EngagementModels />
      <ProductJourneys />
      <EngineeringConnection />
      <RelatedCapabilities />
      <FaqSection />
      <FinalCta />
    </main>
  );
}

function Hero() {
  const { hero } = productDevelopmentPage;

  return (
    <section
      aria-labelledby="product-development-title"
      className="relative isolate px-6 pb-20 pt-32 sm:px-10 sm:pb-28 sm:pt-36 lg:px-16 lg:pb-36 lg:pt-44"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(24rem,0.8fr)] lg:items-center lg:gap-20 xl:gap-28">
        <div className="max-w-4xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
            {hero.eyebrow}
          </p>
          <h1
            className="mt-7 font-serif text-[clamp(3.35rem,7.8vw,8.5rem)] leading-[0.9] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]"
            id="product-development-title"
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
          label="Product system"
          meta="Strategy / Design / Engineering"
        />
      </div>
    </section>
  );
}

function Overview() {
  const { overview } = productDevelopmentPage;

  return (
    <section
      aria-labelledby="product-overview-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 border-y border-[#171817]/15 py-14 lg:grid-cols-[minmax(0,0.74fr)_minmax(24rem,0.8fr)] lg:gap-20 lg:py-20">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
            Overview
          </p>
          <h2
            className="mt-7 font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
            id="product-overview-title"
          >
            {overview.title}
          </h2>
          <div className="mt-8 grid gap-6 font-sans text-base leading-8 text-[#171817]/68 sm:text-lg sm:leading-9">
            {overview.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <LayerDiagram layers={overview.layers} />
      </div>
    </section>
  );
}

function ProductCategories() {
  return (
    <section
      aria-labelledby="product-categories-title"
      className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow="What We Help Build"
          id="product-categories-title"
          title="Products across digital experiences and business models"
        />
        <p className="mt-7 max-w-2xl font-sans text-sm font-semibold uppercase leading-7 tracking-[0.16em] text-[#171817]/54">
          Solution categories - not claims about existing clients.
        </p>
        <div className="mt-12 grid grid-cols-1 border-t border-[#171817]/15 lg:grid-cols-2">
          {productDevelopmentPage.productCategories.map((item, index) => (
            <EditorialItem index={index} item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductSectionBlock({
  dark,
  flipped,
  section,
}: {
  dark: boolean;
  flipped: boolean;
  section: ProductSection;
}) {
  return (
    <section
      className={`${dark ? "bg-[#171817] text-[#f7f7f2]" : "bg-[#f7f7f2] text-[#171817]"} px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36`}
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(22rem,0.62fr)] lg:items-end lg:gap-16">
        <div className={flipped ? "lg:order-2" : ""}>
          <VisualPanel
            imagePath={
              section.imagePath ??
              "/images/capabilities/product-development/engineering.jpg"
            }
            label={section.title}
            meta="Product development"
            tall
          />
        </div>
        <div
          className={`${flipped ? "lg:order-1" : ""} border-y ${dark ? "border-[#f7f7f2]/15" : "border-[#171817]/15"} py-12 sm:py-16 lg:py-20`}
        >
          <h2 className="font-serif text-[clamp(2.85rem,6vw,6.6rem)] leading-[0.94] tracking-[-0.045em]">
            {section.title}
          </h2>
          <div
            className={`mt-8 grid gap-6 font-sans text-lg leading-8 ${dark ? "text-[#f7f7f2]/66" : "text-[#171817]/66"} sm:text-xl sm:leading-9`}
          >
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <FocusList dark={dark} items={section.items} />
          {section.title === "Where product thinking becomes working software." ? (
            <Link
              className={`mt-9 inline-flex min-h-12 w-fit items-center justify-center px-6 font-sans text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 ${dark ? "border border-[#f7f7f2]/25 text-[#f7f7f2] hover:border-[#e35d3f] hover:bg-[#e35d3f] focus-visible:outline-[#f7f7f2]" : "bg-[#171817] text-[#f7f7f2] hover:bg-[#e35d3f] focus-visible:outline-[#171817]"}`}
              href="/capabilities/software-engineering"
            >
              Explore Software Engineering
              <span aria-hidden="true" className="ml-8 text-lg leading-none">
                &rarr;
              </span>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function Lifecycle() {
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
          From first conversation to continuous evolution.
        </h2>
        <div className="mt-12 grid grid-cols-1 border-y border-[#f7f7f2]/15 lg:mt-16 lg:grid-cols-4">
          {productDevelopmentPage.lifecycle.map((stage, index) => (
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

function CrossFunctional() {
  const { ecosystem } = productDevelopmentPage;

  return (
    <section
      aria-labelledby="cross-functional-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(24rem,0.85fr)] lg:items-center lg:gap-20 xl:gap-28">
        <div>
          <h2
            className="font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
            id="cross-functional-title"
          >
            {ecosystem.title}
          </h2>
          <p className="mt-9 max-w-xl font-sans text-lg leading-8 text-[#171817]/68 sm:text-xl sm:leading-9">
            {ecosystem.summary}
          </p>
        </div>
        <div className="relative min-h-[34rem] overflow-hidden border border-[#171817]/15 bg-[#efefe7] p-6 motion-safe:animate-[hero-reveal_1000ms_180ms_ease-out_both] sm:p-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(23,24,23,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(23,24,23,0.08)_1px,transparent_1px)] [background-size:3rem_3rem]"
          />
          <div className="relative grid min-h-[30rem] place-items-center">
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 border border-[#171817]/18 sm:h-72 sm:w-72" />
            <p className="relative z-10 max-w-40 text-center font-sans text-xs font-semibold uppercase leading-5 tracking-[0.24em]">
              Product Strategy
            </p>
            <div className="absolute inset-0 grid grid-cols-1 content-between gap-4 sm:grid-cols-2">
              {ecosystem.items.map((item, index) => (
                <Link
                  className="group flex min-h-20 items-center justify-between gap-4 border border-[#171817]/14 bg-[#f7f7f2]/75 px-5 py-4 font-sans text-sm font-semibold text-[#171817]/72 outline-none transition-colors hover:border-[#e35d3f]/70 hover:text-[#171817] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f]"
                  href={item.href}
                  key={item.href}
                  style={{ animationDelay: `${220 + index * 80}ms` }}
                >
                  {item.title}
                  <span className="text-lg leading-none text-[#e35d3f]" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnologyDomains() {
  return (
    <section className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 border-y border-[#171817]/15 py-14 lg:grid-cols-[minmax(0,0.62fr)_minmax(24rem,1fr)] lg:gap-20 lg:py-20">
        <h2 className="font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]">
          Technology supporting the product
        </h2>
        <div>
          <p className="max-w-2xl font-sans text-base leading-8 text-[#171817]/64 sm:text-lg sm:leading-9">
            Technology choices should follow product requirements rather than
            trend-driven architecture. These are domains, not a promise that
            every product uses all of them.
          </p>
          <TagCloud items={productDevelopmentPage.technologyDomains} />
        </div>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section
      aria-labelledby="product-principles-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow="Product Development Principles"
          id="product-principles-title"
          title="How we approach product development"
        />
        <div className="mt-12 grid grid-cols-1 border-t border-[#171817]/15 lg:mt-16 lg:grid-cols-2">
          {productDevelopmentPage.principles.map((item, index) => (
            <EditorialItem index={index} item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhenToWork() {
  return (
    <section
      aria-labelledby="when-product-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <h2
          className="max-w-5xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
          id="when-product-title"
        >
          When an idea needs more than a prototype.
        </h2>
        <div className="mt-12 grid grid-cols-1 border-t border-[#f7f7f2]/15 lg:grid-cols-2">
          {productDevelopmentPage.situations.map((item, index) => (
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
      aria-labelledby="product-engagement-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <h2
          className="max-w-5xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
          id="product-engagement-title"
        >
          Ways to build together
        </h2>
        <div className="mt-12 grid grid-cols-1 border-y border-[#171817]/15 lg:mt-16 lg:grid-cols-3">
          {productDevelopmentPage.engagementModels.map((item, index) => (
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
      </div>
    </section>
  );
}

function ProductJourneys() {
  return (
    <section className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36">
      <div className="mx-auto w-full max-w-[1440px]">
        <h2 className="max-w-5xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]">
          Different starting points. One engineering mindset.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-3">
          {productDevelopmentPage.journeys.map((journey, index) => (
            <JourneyCard index={index} journey={journey} key={journey.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneyCard({
  index,
  journey,
}: {
  index: number;
  journey: ProductJourney;
}) {
  return (
    <article
      className="border border-[#171817]/15 p-7 motion-safe:animate-[hero-rise_800ms_ease-out_both] sm:p-8"
      style={{ animationDelay: `${180 + index * 80}ms` }}
    >
      <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#e35d3f]">
        {journey.label}
      </p>
      <h3 className="mt-6 font-serif text-[clamp(2.5rem,5vw,5rem)] leading-none tracking-[-0.04em]">
        {journey.title}
      </h3>
      <ol className="mt-8 grid gap-4">
        {journey.steps.map((step, stepIndex) => (
          <li className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4" key={step}>
            <span className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#171817]/38">
              {String(stepIndex + 1).padStart(2, "0")}
            </span>
            <span className="font-sans text-sm font-semibold text-[#171817]/68">
              {step}
            </span>
          </li>
        ))}
      </ol>
    </article>
  );
}

function EngineeringConnection() {
  const connection = productDevelopmentPage.productEngineeringConnection;

  return (
    <section className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.55fr)] lg:items-end lg:gap-20">
        <h2 className="font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]">
          {connection.title}
        </h2>
        <div>
          <p className="font-sans text-lg leading-8 text-[#f7f7f2]/68 sm:text-xl sm:leading-9">
            {connection.summary}
          </p>
          <Link
            className="mt-9 inline-flex min-h-12 w-fit items-center justify-center border border-[#f7f7f2]/25 px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:border-[#e35d3f] hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7f7f2]"
            href={connection.href}
          >
            {connection.label}
            <span aria-hidden="true" className="ml-8 text-lg leading-none">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function RelatedCapabilities() {
  return (
    <section
      aria-labelledby="related-product-capabilities-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <h2
          className="max-w-5xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
          id="related-product-capabilities-title"
        >
          Related capabilities
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {productDevelopmentPage.relatedCapabilities.map((item) => (
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
      aria-labelledby="product-development-faq-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow="FAQ"
          id="product-development-faq-title"
          title="Product development questions"
        />
        <div className="mt-12 lg:mt-16">
          <ProductDevelopmentFaq items={productDevelopmentPage.faqs} />
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const { finalCta } = productDevelopmentPage;

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
            <LightLink
              href={finalCta.primaryCta.href}
              label={finalCta.primaryCta.label}
            />
            <DarkOutlineLink
              href={finalCta.secondaryCta.href}
              label={finalCta.secondaryCta.label}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function LayerDiagram({ layers }: { layers: readonly string[] }) {
  return (
    <div className="relative overflow-hidden border border-[#171817]/15 bg-[#efefe7] p-6">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-55 [background-image:linear-gradient(rgba(23,24,23,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(23,24,23,0.08)_1px,transparent_1px)] [background-size:3rem_3rem]"
      />
      <div className="relative grid gap-4">
        {layers.map((layer, index) => (
          <div
            className="grid min-h-16 grid-cols-[auto_minmax(0,1fr)] items-center gap-5 border border-[#171817]/15 bg-[#f7f7f2]/80 px-5"
            key={layer}
          >
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[#e35d3f]">
              0{index + 1}
            </span>
            <span className="font-serif text-3xl leading-none tracking-[-0.04em]">
              {layer}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EditorialItem({
  index,
  item,
}: {
  index: number;
  item: ProductTextBlock;
}) {
  return (
    <article className="group grid gap-5 border-b border-[#171817]/15 py-8 transition-colors hover:border-[#e35d3f]/60 hover:bg-[#171817]/[0.025] sm:grid-cols-[5rem_minmax(0,0.55fr)_minmax(0,1fr)] sm:gap-8 sm:py-10 lg:px-5">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
        0{index + 1}
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
        0{index + 1}
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
