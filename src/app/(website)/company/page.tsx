import type { Metadata } from "next";
import Link from "next/link";

import { capabilitiesPage, type Capability } from "@/content/capabilities";
import {
  companyOverviewPage,
  type LeadershipProfile,
  type LinkItem,
  type ProcessStep,
  type TextBlock,
} from "@/content/company";

export const metadata: Metadata = {
  title: "Company | BIMAL GLOBAL",
  description:
    "Learn about BIMAL GLOBAL, a technology company building software, digital products, mobile platforms, cloud infrastructure, and AI-enabled solutions for businesses and products across markets.",
};

export default function CompanyPage() {
  return (
    <main className="overflow-hidden bg-[#f7f7f2] text-[#171817]">
      <Hero />
      <Introduction />
      <Capabilities />
      <TechnologyView />
      <WhyWeExist />
      <BuildCategories />
      <Approach />
      <BusinessTypes />
      <GlobalView />
      <LeadershipPreview />
      <LongTermDirection />
      <CompanyPrinciples />
      <ExploreCompany />
      <FinalCta />
    </main>
  );
}

function Hero() {
  const { hero } = companyOverviewPage;

  return (
    <section
      aria-labelledby="company-title"
      className="relative isolate px-6 pb-20 pt-32 sm:px-10 sm:pb-28 sm:pt-36 lg:px-16 lg:pb-36 lg:pt-44"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(24rem,0.8fr)] lg:items-center lg:gap-20 xl:gap-28">
        <div className="max-w-4xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
            {hero.eyebrow}
          </p>
          <h1
            className="mt-7 font-serif text-[clamp(3.35rem,7.8vw,8.5rem)] leading-[0.9] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]"
            id="company-title"
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
          label="Company"
          meta="Product / Engineering / Systems"
        />
      </div>
    </section>
  );
}

function Introduction() {
  const { introduction } = companyOverviewPage;

  return (
    <section
      aria-labelledby="company-introduction-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 border-y border-[#171817]/15 py-14 lg:grid-cols-[minmax(0,0.78fr)_minmax(24rem,0.72fr)] lg:gap-20 lg:py-20">
        <SectionHeading
          eyebrow="Company Introduction"
          id="company-introduction-title"
          title={introduction.title}
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

function Capabilities() {
  return (
    <section
      aria-labelledby="company-capabilities-title"
      className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow="What BIMAL GLOBAL Does"
          id="company-capabilities-title"
          title="From product ideas to technology systems."
        />
        <div className="mt-12 grid grid-cols-1 border-t border-[#171817]/15 lg:grid-cols-2">
          {capabilitiesPage.capabilities.map((capability) => (
            <CapabilityItem
              capability={capability}
              key={capability.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityItem({
  capability,
}: {
  capability: Capability;
}) {
  return (
    <Link
      className="group grid gap-5 border-b border-[#171817]/15 py-8 transition-colors hover:border-[#e35d3f]/60 hover:bg-[#171817]/[0.025] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f] sm:grid-cols-[5rem_minmax(0,0.55fr)_minmax(0,1fr)] sm:gap-8 sm:py-10 lg:px-5"
      href={capability.href}
    >
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
        {capability.number}
      </p>
      <h3 className="font-serif text-[clamp(2rem,4vw,4rem)] leading-none tracking-[-0.04em] transition-colors group-hover:text-[#e35d3f]">
        {capability.title}
      </h3>
      <div>
        <p className="max-w-xl font-sans text-sm leading-7 text-[#171817]/62 sm:text-base sm:leading-8">
          {capability.description}
        </p>
        <p className="mt-5 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#171817]/42">
          Explore capability
          <span aria-hidden="true" className="ml-4 text-[#e35d3f]">
            &rarr;
          </span>
        </p>
      </div>
    </Link>
  );
}

function TechnologyView() {
  const { technologyView } = companyOverviewPage;

  return (
    <section
      aria-labelledby="technology-view-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(24rem,0.82fr)] lg:items-center lg:gap-20">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
            Our Technology View
          </p>
          <h2
            className="mt-7 font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
            id="technology-view-title"
          >
            {technologyView.title}
          </h2>
          <p className="mt-8 max-w-2xl font-sans text-lg leading-8 text-[#f7f7f2]/66 sm:text-xl sm:leading-9">
            {technologyView.summary}
          </p>
        </div>
        <div>
          <VisualPanel
            alt={technologyView.imageAlt}
            imagePath={technologyView.imagePath}
            label="Technology view"
            meta="Connected disciplines"
            tall
          />
          <div className="mt-5">
            <LayerDiagram dark layers={technologyView.flow} />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyWeExist() {
  return (
    <section
      aria-labelledby="why-we-exist-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow="Why We Exist"
          id="why-we-exist-title"
          title="Technology should create possibilities, not unnecessary complexity."
        />
        <div className="mt-12 grid grid-cols-1 border-t border-[#171817]/15 lg:grid-cols-2">
          {companyOverviewPage.whyWeExist.map((item, index) => (
            <EditorialItem index={index} item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BuildCategories() {
  return (
    <section
      aria-labelledby="technology-forms-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 border-y border-[#f7f7f2]/15 py-14 lg:grid-cols-[minmax(0,0.58fr)_minmax(24rem,1fr)] lg:gap-20 lg:py-20">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
            What We Can Help Build
          </p>
          <h2
            className="mt-7 font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
            id="technology-forms-title"
          >
            Technology can take many forms.
          </h2>
          <Link
            className="mt-9 inline-flex min-h-12 w-fit items-center justify-center border border-[#f7f7f2]/25 px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:border-[#e35d3f] hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7f7f2]"
            href="/work"
          >
            Explore Our Work
            <span aria-hidden="true" className="ml-8 text-lg leading-none">
              &rarr;
            </span>
          </Link>
        </div>
        <TagCloud dark items={companyOverviewPage.buildCategories} />
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section
      aria-labelledby="company-approach-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow="Our Approach"
          id="company-approach-title"
          title="Understand. Build. Learn. Evolve."
        />
        <div className="mt-12 grid grid-cols-1 border-y border-[#171817]/15 lg:mt-16 lg:grid-cols-3">
          {companyOverviewPage.approach.map((step, index) => (
            <ProcessCard index={index} key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessCard({ index, step }: { index: number; step: ProcessStep }) {
  return (
    <article
      className="border-b border-[#171817]/15 py-8 lg:border-r lg:px-8 lg:py-10 lg:[&:nth-child(3n)]:border-r-0 motion-safe:animate-[hero-rise_800ms_ease-out_both]"
      style={{ animationDelay: `${160 + index * 60}ms` }}
    >
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
        {step.number}
      </p>
      <h3 className="mt-8 font-serif text-[clamp(2.35rem,4.6vw,4.75rem)] leading-none tracking-[-0.04em]">
        {step.title}
      </h3>
      <p className="mt-6 max-w-md font-sans text-sm leading-7 text-[#171817]/64 sm:text-base sm:leading-8">
        {step.description}
      </p>
    </article>
  );
}

function BusinessTypes() {
  return (
    <section
      aria-labelledby="business-types-title"
      className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 border-b border-[#171817]/15 pb-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.55fr)] lg:items-end lg:gap-20 lg:pb-20">
          <SectionHeading
            eyebrow="Built For Different Types Of Businesses"
            id="business-types-title"
            title="Technology requirements change with the business."
          />
          <Link
            className="inline-flex min-h-12 w-fit items-center justify-center border border-[#171817]/25 px-6 font-sans text-sm font-semibold text-[#171817] transition-colors hover:border-[#171817] hover:bg-[#171817]/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
            href="/industries"
          >
            Explore Industries
            <span aria-hidden="true" className="ml-8 text-lg leading-none">
              &rarr;
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 border-y border-[#171817]/15 lg:mt-16 lg:grid-cols-3">
          {companyOverviewPage.businessTypes.map((item, index) => (
            <BusinessCard index={index} item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BusinessCard({ index, item }: { index: number; item: TextBlock }) {
  return (
    <article className="border-b border-[#171817]/15 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-10 lg:last:border-r-0">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
        0{index + 1}
      </p>
      <h3 className="mt-8 font-serif text-[clamp(2.45rem,5vw,5rem)] leading-none tracking-[-0.04em]">
        {item.title}
      </h3>
      <p className="mt-7 font-sans text-sm leading-7 text-[#171817]/64 sm:text-base sm:leading-8">
        {item.description}
      </p>
    </article>
  );
}

function GlobalView() {
  const { globalView } = companyOverviewPage;

  return (
    <section
      aria-labelledby="company-global-view-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(22rem,0.62fr)] lg:items-end lg:gap-16">
        <VisualPanel
          alt={globalView.imageAlt}
          imagePath={globalView.imagePath}
          label="India / Nepal"
          meta="Global view"
          tall
        />
        <div className="border-y border-[#f7f7f2]/15 py-12 sm:py-16 lg:py-20">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
            India, Nepal, And A Global View
          </p>
          <h2
            className="mt-7 font-serif text-[clamp(2.85rem,6vw,6.6rem)] leading-[0.94] tracking-[-0.045em]"
            id="company-global-view-title"
          >
            {globalView.title}
          </h2>
          <div className="mt-8 grid gap-6 font-sans text-lg leading-8 text-[#f7f7f2]/66 sm:text-xl sm:leading-9">
            {globalView.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadershipPreview() {
  const { leadership } = companyOverviewPage;

  return (
    <section
      aria-labelledby="company-leadership-title"
      className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-[minmax(22rem,0.5fr)_minmax(0,0.85fr)] lg:gap-20 xl:gap-28">
        <VisualPanel
          alt={leadership.imageAlt}
          imagePath={leadership.imagePath}
          label="Leadership"
          meta="Three founders"
          tall
        />
        <div>
          <SectionHeading
            eyebrow="Leadership Preview"
            id="company-leadership-title"
            title={leadership.title}
          />
          <p className="mt-8 max-w-2xl font-sans text-lg leading-8 text-[#171817]/66 sm:text-xl sm:leading-9">
            {leadership.summary}
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {leadership.profiles.map((profile) => (
              <LeadershipCard key={`${profile.name}-${profile.label}`} profile={profile} />
            ))}
          </div>
          <div className="mt-9">
            <PrimaryLink href="/company/leadership" label="Explore Leadership" />
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadershipCard({ profile }: { profile: LeadershipProfile }) {
  return (
    <article
      className={`border p-6 ${profile.verified ? "border-[#e35d3f]/50" : "border-[#171817]/15 bg-[#efefe7]"}`}
    >
      <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#e35d3f]">
        {profile.label}
      </p>
      <h3 className="mt-6 font-serif text-[clamp(2rem,4vw,3.75rem)] leading-none tracking-[-0.04em]">
        {profile.name}
      </h3>
      <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#171817]/48">
        {profile.role}
      </p>
      <p className="mt-5 font-sans text-sm leading-7 text-[#171817]/62">
        {profile.note}
      </p>
    </article>
  );
}

function LongTermDirection() {
  const { longTerm } = companyOverviewPage;

  return (
    <section
      aria-labelledby="long-term-direction-title"
      className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 border-y border-[#171817]/15 py-14 lg:grid-cols-[minmax(0,0.78fr)_minmax(22rem,0.58fr)] lg:items-end lg:gap-20 lg:py-20">
        <h2
          className="font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
          id="long-term-direction-title"
        >
          {longTerm.title}
        </h2>
        <div className="grid gap-7 font-sans text-base leading-8 text-[#171817]/68 sm:text-lg sm:leading-9">
          {longTerm.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompanyPrinciples() {
  return (
    <section
      aria-labelledby="company-principles-title"
      className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <SectionHeading
          eyebrow="Company Principles"
          id="company-principles-title"
          title="How we think about technology."
        />
        <div className="mt-12 grid grid-cols-1 border-t border-[#171817]/15 lg:grid-cols-2">
          {companyOverviewPage.principles.map((item, index) => (
            <EditorialItem index={index} item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExploreCompany() {
  return (
    <section
      aria-labelledby="explore-company-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <h2
          className="max-w-5xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
          id="explore-company-title"
        >
          Explore the company
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {companyOverviewPage.explore.map((item) => (
            <ExploreCard item={item} key={item.href} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExploreCard({ item }: { item: LinkItem }) {
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

function FinalCta() {
  const { finalCta } = companyOverviewPage;

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
  index,
  item,
}: {
  index: number;
  item: TextBlock;
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
        backgroundImage: `linear-gradient(145deg, rgba(23, 33, 31, 0.14), rgba(23, 33, 31, 0.92))`,
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
