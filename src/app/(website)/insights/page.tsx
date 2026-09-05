import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { capabilitiesPage } from "@/content/capabilities";

export const metadata: Metadata = {
  title: "Insights | BIMAL GLOBAL",
  description:
    "Perspectives on software engineering, product development, mobile platforms, cloud infrastructure, artificial intelligence, and digital products.",
};

type InsightEntry = {
  category: string;
  readingTime: string;
  summary: string;
  title: string;
};

type Theme = {
  href?: string;
  label: string;
  summary: string;
  topics: string[];
};

type Perspective = {
  title: string;
  description: string;
};

type FaqItem = {
  answer: string;
  question: string;
};

const capabilityById = new Map(
  capabilitiesPage.capabilities.map((capability) => [
    capability.id,
    {
      description: capability.description,
      href: capability.href,
      title: capability.title,
    },
  ]),
);

const hero = {
  eyebrow: "Insights",
  title: "Ideas for building what comes next.",
  description:
    "Perspectives on software engineering, product development, cloud infrastructure, mobile platforms, artificial intelligence, and the systems behind modern digital products.",
  primaryCta: { href: "#latest-insights", label: "Explore Insights" },
  secondaryCta: { href: "/capabilities", label: "Explore Capabilities" },
};

const featuredInsight: InsightEntry = {
  category: "Software Engineering",
  readingTime: "6 min perspective",
  title: "Building Software That Can Evolve",
  summary:
    "Architecture should support continuous product change, not only the first release. This perspective looks at how APIs, data models, infrastructure, and product decisions shape what a system can become.",
};

const categories = [
  "Software Engineering",
  "Product Development",
  "Artificial Intelligence",
  "Cloud & Infrastructure",
  "Mobile Platforms",
  "Architecture",
  "Digital Products",
  "Technology Strategy",
];

const latestInsights: InsightEntry[] = [
  {
    category: "Architecture",
    readingTime: "5 min perspective",
    title: "Designing APIs for Products That Keep Changing",
    summary:
      "Stable interfaces help teams evolve features, integrations, and user experiences without reshaping the whole platform every time requirements move.",
  },
  {
    category: "Artificial Intelligence",
    readingTime: "7 min perspective",
    title: "When Should a Business Introduce AI?",
    summary:
      "AI belongs where it improves a workflow, decision, search path, or support experience. The starting point is usefulness, not novelty.",
  },
  {
    category: "Mobile Platforms",
    readingTime: "5 min perspective",
    title: "Building Mobile Products Around Real User Workflows",
    summary:
      "Mobile products work best when they respect location, repetition, connectivity, permissions, and the speed of the user's actual task.",
  },
  {
    category: "Cloud",
    readingTime: "6 min perspective",
    title: "Cloud Infrastructure as a Product Foundation",
    summary:
      "Infrastructure decisions influence release speed, reliability, visibility, and how confidently a product can grow after launch.",
  },
  {
    category: "Product Development",
    readingTime: "6 min perspective",
    title: "From Operational Software to Digital Platform",
    summary:
      "A useful internal tool can become a broader platform when workflows, permissions, data, integrations, and product boundaries are designed deliberately.",
  },
  {
    category: "Reliability",
    readingTime: "4 min perspective",
    title: "Why Observability Matters Before Scale",
    summary:
      "Logs, metrics, traces, and product signals are easier to shape before a system is under pressure and harder to add after teams are already reacting.",
  },
  {
    category: "Search",
    readingTime: "5 min perspective",
    title: "Designing Search for Large Content Systems",
    summary:
      "Good search combines information architecture, ranking, metadata, interface decisions, and feedback loops instead of relying on one query box.",
  },
  {
    category: "AI Workflows",
    readingTime: "7 min perspective",
    title: "Building AI Workflows With Human Oversight",
    summary:
      "AI-assisted systems need review paths, confidence signals, evaluation, and operational visibility when the result affects a real user decision.",
  },
];

const themes: Theme[] = [
  {
    href: capabilityById.get("software-engineering")?.href,
    label: "Build",
    summary: "Software architecture, APIs, applications, and platforms.",
    topics: ["Architecture", "APIs", "Applications", "Platforms"],
  },
  {
    href: capabilityById.get("product-development")?.href,
    label: "Product",
    summary: "Discovery, UX, MVPs, evolution, and experimentation.",
    topics: ["Discovery", "UX", "Prioritization", "Feedback"],
  },
  {
    href: capabilityById.get("mobile-platforms")?.href,
    label: "Mobile",
    summary: "Android, iOS, cross-platform architecture, and mobile backends.",
    topics: ["iOS", "Android", "Cross-platform", "Mobile APIs"],
  },
  {
    href: capabilityById.get("cloud-infrastructure")?.href,
    label: "Cloud",
    summary: "Infrastructure, CI/CD, observability, reliability, and scale.",
    topics: ["CI/CD", "Containers", "Observability", "Reliability"],
  },
  {
    href: capabilityById.get("artificial-intelligence")?.href,
    label: "AI",
    summary: "Generative AI, RAG, agents, evaluation, and AI operations.",
    topics: ["LLMs", "RAG", "Agents", "Evaluation"],
  },
];

const engineeringPerspectives: Perspective[] = [
  {
    title: "Architecture decisions",
    description:
      "How boundaries, dependencies, data ownership, and module structure influence future product change.",
  },
  {
    title: "Frontend and backend boundaries",
    description:
      "Where experience logic, API contracts, orchestration, and state should live as a product grows.",
  },
  {
    title: "Reliability and observability",
    description:
      "How systems report health, reveal failures, and give teams enough context to improve behavior.",
  },
  {
    title: "Modernization and technical debt",
    description:
      "How to improve older systems without interrupting the workflows that still depend on them.",
  },
];

const productPerspectives: Perspective[] = [
  {
    title: "Validating direction",
    description:
      "Define what needs to be learned before committing too much design, engineering, or infrastructure effort.",
  },
  {
    title: "Scoping the first useful version",
    description:
      "Balance speed and quality by deciding what must be solved now and what should wait for evidence.",
  },
  {
    title: "Workflow-centered UX",
    description:
      "Design around the actual sequence of decisions, actions, errors, and handoffs users encounter.",
  },
  {
    title: "Platform evolution",
    description:
      "Move from a useful product to a durable platform by improving permissions, data, integrations, and operations.",
  },
];

const aiCloudPerspectives = [
  {
    href: capabilityById.get("artificial-intelligence")?.href,
    label: "Artificial Intelligence",
    topics: [
      "generative AI",
      "LLM applications",
      "RAG",
      "AI assistants",
      "AI workflows",
      "recommendations",
      "document intelligence",
      "evaluation",
      "responsible AI",
      "AI observability",
    ],
  },
  {
    href: capabilityById.get("cloud-infrastructure")?.href,
    label: "Cloud & Infrastructure",
    topics: [
      "cloud architecture",
      "containers",
      "CI/CD",
      "infrastructure automation",
      "observability",
      "reliability",
      "scalability",
      "backup and recovery",
      "cost-aware infrastructure",
    ],
  },
];

const faqs: FaqItem[] = [
  {
    question: "What topics does BIMAL GLOBAL write about?",
    answer:
      "The Insights section focuses on software engineering, product development, mobile platforms, cloud infrastructure, artificial intelligence, architecture, and technology strategy.",
  },
  {
    question: "Are these technical articles or business articles?",
    answer:
      "The focus is practical technology and product thinking. Some perspectives are more technical, while others are written for business and product teams making technology decisions.",
  },
  {
    question: "Can BIMAL GLOBAL discuss a technology problem with our team?",
    answer:
      "Yes. A conversation can start with the problem, the existing system, the product direction, or the technical decision your team is trying to make.",
  },
  {
    question: "Do you publish case studies?",
    answer:
      "This Insights page is focused on perspectives and technical thinking. It does not present invented client stories or unverified case studies.",
  },
];

const finalCta = {
  title: "Have a technology question worth exploring?",
  description:
    "Whether you are starting a new product, modernizing an existing system, or exploring where AI can create practical value, start with the problem.",
  primaryCta: { href: "/contact", label: "Talk to BIMAL GLOBAL" },
  secondaryCta: { href: "/capabilities", label: "Explore Capabilities" },
};

export default function InsightsPage() {
  return (
    <main className="bg-[#f6f4ee] text-[#171817]">
      <HeroSection />
      <FeaturedInsightSection />
      <CategorySection />
      <LatestInsightsSection />
      <ThemesSection />
      <EngineeringSection />
      <ProductSection />
      <AiCloudSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#171817] px-6 py-28 text-[#f7f7f2] sm:px-10 sm:py-36 lg:px-16">
      <EditorialGrid />
      <div className="relative mx-auto grid w-full max-w-[1440px] gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(22rem,0.54fr)] lg:items-end">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#e35d3f]">
            {hero.eyebrow}
          </p>
          <h1 className="mt-8 max-w-5xl font-serif text-[clamp(4rem,10vw,9.5rem)] leading-[0.88] tracking-[-0.045em]">
            {hero.title}
          </h1>
        </div>
        <div className="lg:pb-4">
          <p className="max-w-xl font-sans text-lg leading-8 text-[#f7f7f2]/70 sm:text-xl sm:leading-9">
            {hero.description}
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

function FeaturedInsightSection() {
  return (
    <section className="border-b border-[#d9d4c7] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.12fr)] lg:items-stretch">
          <div>
            <SectionHeading
              eyebrow="Featured Perspective"
              title="A practical editorial lens on technology decisions."
              description="This is a BIMAL GLOBAL perspective entry, not a claimed publication record or client case study."
            />
          </div>
          <article className="grid border border-[#171817] bg-[#fdfbf5] lg:grid-cols-[0.74fr_1fr]">
            <InsightSignal label="Featured" />
            <div className="flex min-h-[28rem] flex-col justify-between p-7 sm:p-9 lg:p-10">
              <div>
                <InsightMeta
                  category={featuredInsight.category}
                  readingTime={featuredInsight.readingTime}
                />
                <h2 className="mt-8 font-serif text-[clamp(3rem,6vw,6.5rem)] leading-[0.9] tracking-[-0.045em] text-[#171817]">
                  {featuredInsight.title}
                </h2>
                <p className="mt-7 max-w-2xl font-sans text-base leading-8 text-[#55584f] sm:text-lg">
                  {featuredInsight.summary}
                </p>
              </div>
              <p className="mt-10 font-sans text-sm font-semibold text-[#e35d3f]">
                Editorial perspective
              </p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}

function CategorySection() {
  return (
    <section className="bg-[#ebe6d9] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-start">
          <SectionHeading
            eyebrow="Insight Categories"
            title="Organized around technology decisions."
            description="These labels show the editorial structure for future articles without sending visitors to placeholder article pages."
          />
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <span
                className="border border-[#171817]/20 bg-[#f6f4ee] px-4 py-3 font-sans text-sm font-semibold text-[#171817]"
                key={category}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function LatestInsightsSection() {
  return (
    <section
      className="border-b border-[#d9d4c7] px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
      id="latest-insights"
    >
      <Container>
        <SectionHeading
          eyebrow="Latest Insights"
          title="Concise thinking for product and engineering teams."
          description="These demo editorial entries are written as BIMAL GLOBAL perspectives and avoid fake dates, authors, readership, or case-study claims."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {latestInsights.map((insight) => (
            <InsightCard insight={insight} key={insight.title} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ThemesSection() {
  return (
    <section className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <SectionHeading
          eyebrow="Technology Themes"
          title="The themes behind modern digital products."
          description="BIMAL GLOBAL explores technology from the level of product behavior, engineering foundation, infrastructure, and intelligent workflows."
          light
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {themes.map((theme) => (
            <ThemeCard theme={theme} key={theme.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function EngineeringSection() {
  return (
    <section className="border-b border-[#d9d4c7] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Engineering Perspectives"
              title="Practical, technical, and grounded."
              description="Engineering writing should help teams think through the tradeoffs behind architecture, API design, reliability, security-aware engineering, testing, observability, performance, debt, modernization, and integration."
            />
            <div className="mt-9">
              <PrimaryLink
                href="/capabilities/software-engineering"
                label="Explore Software Engineering"
              />
            </div>
          </div>
          <PerspectiveGrid items={engineeringPerspectives} />
        </div>
      </Container>
    </section>
  );
}

function ProductSection() {
  return (
    <section className="bg-[#ebe6d9] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Product Perspectives"
              title="Product decisions and technology decisions move together."
              description="The strongest product choices account for validation, MVP scope, discovery, user workflows, UX and engineering collaboration, analytics, feedback, product-market learning, and platform evolution."
            />
            <div className="mt-9">
              <PrimaryLink
                href="/capabilities/product-development"
                label="Explore Product Development"
              />
            </div>
          </div>
          <PerspectiveGrid items={productPerspectives} />
        </div>
      </Container>
    </section>
  );
}

function AiCloudSection() {
  return (
    <section className="border-b border-[#d9d4c7] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <SectionHeading
          eyebrow="AI + Cloud Perspectives"
          title="Intelligence and infrastructure need product context."
          description="AI and cloud choices become useful when they are connected to real workflows, reliability needs, deployment habits, feedback loops, and operational visibility."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {aiCloudPerspectives.map((area) => (
            <article className="border border-[#d9d4c7] bg-[#fdfbf5] p-7 sm:p-9" key={area.label}>
              <h3 className="font-serif text-[clamp(2.5rem,5vw,5.2rem)] leading-[0.92] tracking-[-0.04em] text-[#171817]">
                {area.label}
              </h3>
              <div className="mt-8 flex flex-wrap gap-3">
                {area.topics.map((topic) => (
                  <span
                    className="border border-[#171817]/18 px-3 py-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#55584f]"
                    key={topic}
                  >
                    {topic}
                  </span>
                ))}
              </div>
              {area.href ? (
                <div className="mt-9">
                  <TextLink href={area.href}>Explore capability</TextLink>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-[#f6f4ee] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="What this knowledge hub is for."
            description="A concise guide to the kind of thinking BIMAL GLOBAL will share here."
          />
          <div className="divide-y divide-[#d9d4c7] border-y border-[#d9d4c7]">
            {faqs.map((item) => (
              <details className="group py-6" key={item.question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-sans text-lg font-semibold text-[#171817] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]">
                  <span>{item.question}</span>
                  <span className="text-2xl leading-none text-[#e35d3f] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-5 max-w-2xl font-sans text-base leading-8 text-[#55584f]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <div className="max-w-5xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#e35d3f]">
            Start With the Problem
          </p>
          <h2 className="mt-7 font-serif text-[clamp(3.2rem,7vw,7.25rem)] leading-[0.9] tracking-[-0.045em]">
            {finalCta.title}
          </h2>
          <p className="mt-7 max-w-2xl font-sans text-lg leading-8 text-[#f7f7f2]/68 sm:text-xl sm:leading-9">
            {finalCta.description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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

function InsightCard({ insight }: { insight: InsightEntry }) {
  return (
    <article className="flex min-h-[24rem] flex-col justify-between border border-[#d9d4c7] bg-[#fdfbf5] p-6 transition-colors hover:border-[#171817]">
      <div>
        <InsightMeta category={insight.category} readingTime={insight.readingTime} />
        <h3 className="mt-8 font-serif text-4xl leading-[0.94] tracking-[-0.04em] text-[#171817]">
          {insight.title}
        </h3>
        <p className="mt-6 font-sans text-sm leading-7 text-[#55584f]">
          {insight.summary}
        </p>
      </div>
      <p className="mt-10 font-sans text-sm font-semibold text-[#e35d3f]">
        Perspective preview
      </p>
    </article>
  );
}

function ThemeCard({ theme }: { theme: Theme }) {
  const content = (
    <>
      <p className="font-serif text-5xl leading-none tracking-[-0.04em] text-[#f7f7f2]">
        {theme.label}
      </p>
      <p className="mt-6 font-sans text-sm leading-7 text-[#f7f7f2]/64">
        {theme.summary}
      </p>
      <ul className="mt-8 space-y-3 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-[#f7f7f2]/42">
        {theme.topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
      {theme.href ? (
        <span className="mt-8 inline-flex font-sans text-sm font-semibold text-[#e35d3f]">
          Explore theme
          <span aria-hidden="true" className="ml-2">
            &rarr;
          </span>
        </span>
      ) : null}
    </>
  );

  if (!theme.href) {
    return <article className="border border-[#f7f7f2]/14 p-6">{content}</article>;
  }

  return (
    <Link
      className="group border border-[#f7f7f2]/14 p-6 transition-colors hover:border-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f]"
      href={theme.href}
    >
      {content}
    </Link>
  );
}

function PerspectiveGrid({ items }: { items: Perspective[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <article className="border-l-2 border-[#e35d3f] bg-[#fdfbf5] p-6" key={item.title}>
          <h3 className="font-sans text-xl font-semibold text-[#171817]">
            {item.title}
          </h3>
          <p className="mt-4 font-sans text-sm leading-7 text-[#55584f]">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}

function InsightSignal({ label }: { label: string }) {
  return (
    <div className="relative min-h-[22rem] overflow-hidden bg-[#171817] text-[#f7f7f2]">
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(247,247,242,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.1)_1px,transparent_1px)] [background-size:3rem_3rem]" />
      <div className="absolute left-8 top-8 h-24 w-24 border border-[#f7f7f2]/22" />
      <div className="absolute bottom-8 right-8 h-32 w-32 border-[1rem] border-[#e35d3f]" />
      <div className="absolute inset-x-7 bottom-7 flex items-center justify-between border-t border-[#f7f7f2]/24 pt-4 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[#f7f7f2]/60">
        <span>{label}</span>
        <span>Technology perspective</span>
      </div>
    </div>
  );
}

function InsightMeta({
  category,
  readingTime,
}: {
  category: string;
  readingTime: string;
}) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#e35d3f]">
      <span>{category}</span>
      <span className="text-[#55584f]/60">{readingTime}</span>
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
    <div className="max-w-3xl">
      <p
        className={`font-sans text-xs font-semibold uppercase tracking-[0.28em] ${
          light ? "text-[#e35d3f]" : "text-[#e35d3f]"
        }`}
      >
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
        className={`mt-6 font-sans text-base leading-8 sm:text-lg ${
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

function EditorialGrid() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-[0.11] [background-image:linear-gradient(rgba(247,247,242,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.16)_1px,transparent_1px)] [background-size:4rem_4rem]"
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

function TextLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <Link
      className="inline-flex items-center border-b border-[#e35d3f] pb-1 font-sans text-sm font-semibold text-[#171817] transition-colors hover:text-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
      href={href}
    >
      {children}
      <span aria-hidden="true" className="ml-2">
        &rarr;
      </span>
    </Link>
  );
}
