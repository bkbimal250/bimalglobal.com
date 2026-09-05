import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { capabilitiesPage } from "@/content/capabilities";
import { careerAreas, jobOpenings } from "@/content/careers";

export const metadata: Metadata = {
  title: "Careers | BIMAL GLOBAL",
  description:
    "Explore opportunities to build software, products, mobile platforms, cloud infrastructure, and AI-enabled technology with BIMAL GLOBAL.",
};

type Principle = {
  description: string;
  title: string;
};

type WorkArea = {
  discipline: string;
  href?: string;
  summary: string;
  topics: string[];
};

type FaqItem = {
  answer: string;
  question: string;
};

const capabilityById = new Map(
  capabilitiesPage.capabilities.map((capability) => [
    capability.id,
    {
      href: capability.href,
      title: capability.title,
    },
  ]),
);

const careerAreaDescriptions = new Map(
  careerAreas.map((area) => [area.name, area.description]),
);

const hero = {
  eyebrow: "Careers",
  title: "Build technology that moves ideas forward.",
  description:
    "We are building a technology company around strong engineering, thoughtful products, practical AI, and systems designed to evolve. We look for people who enjoy solving difficult problems and turning ideas into useful technology.",
  primaryCta: { href: "#current-opportunities", label: "Explore Opportunities" },
  secondaryCta: { href: "/company/how-we-work", label: "Learn How We Work" },
};

const whyBuildWithUs: Principle[] = [
  {
    title: "Real Problems",
    description:
      "Work on software and technology problems connected to real businesses, products, systems, and users.",
  },
  {
    title: "Engineering Depth",
    description:
      "Think beyond individual features and consider architecture, reliability, performance, security, and long-term evolution.",
  },
  {
    title: "Product Thinking",
    description:
      "Understand why something should be built, not only how it should be implemented.",
  },
  {
    title: "Modern Technology",
    description:
      "Contribute across software engineering, mobile platforms, cloud infrastructure, and artificial intelligence where they fit the problem.",
  },
  {
    title: "Continuous Learning",
    description:
      "Technology changes continuously. Curiosity, fundamentals, and the ability to keep learning matter.",
  },
];

const values: Principle[] = [
  {
    title: "Think Clearly",
    description: "Understand the problem before rushing toward implementation.",
  },
  {
    title: "Build With Purpose",
    description: "Technology should solve a meaningful problem.",
  },
  {
    title: "Own the Outcome",
    description:
      "Take responsibility for quality and the result, not only assigned tasks.",
  },
  {
    title: "Stay Curious",
    description: "Learn new technologies and challenge assumptions.",
  },
  {
    title: "Keep It Practical",
    description: "Choose technology based on the problem rather than trends.",
  },
  {
    title: "Design for Evolution",
    description:
      "Build systems that can change as products and businesses change.",
  },
  {
    title: "Communicate Openly",
    description:
      "Good technology requires clear communication across engineering, product, design, and business.",
  },
];

const areasOfWork: WorkArea[] = [
  {
    discipline: "Software Engineering",
    href: capabilityById.get("software-engineering")?.href,
    summary: `${careerAreaDescriptions.get("Engineering") ?? "Building software, platforms, systems, and digital infrastructure."} Frontend, backend, APIs, architecture, integrations, testing, performance, and platform engineering.`,
    topics: ["Frontend", "Backend", "APIs", "Architecture", "Testing"],
  },
  {
    discipline: "Product Development",
    href: capabilityById.get("product-development")?.href,
    summary: `${careerAreaDescriptions.get("Product") ?? "Turning opportunities into products and experiences with real purpose."} Product thinking, UX, discovery, prototyping, strategy, experimentation, and product evolution.`,
    topics: ["Discovery", "UX", "Prototyping", "Strategy", "Evolution"],
  },
  {
    discipline: "Mobile Platforms",
    href: capabilityById.get("mobile-platforms")?.href,
    summary: `${careerAreaDescriptions.get("Mobile") ?? "Building modern mobile platforms and connected digital experiences."} Android, iOS, cross-platform applications, mobile architecture, device capabilities, and offline experiences.`,
    topics: ["Android", "iOS", "Cross-platform", "Offline", "Mobile APIs"],
  },
  {
    discipline: "Cloud & Infrastructure",
    href: capabilityById.get("cloud-infrastructure")?.href,
    summary: `${careerAreaDescriptions.get("Cloud & Infrastructure") ?? "Creating reliable foundations for products and technology systems."} Cloud architecture, CI/CD, containers, automation, networking, observability, reliability, and scalability.`,
    topics: ["Cloud", "CI/CD", "Containers", "Automation", "Reliability"],
  },
  {
    discipline: "Artificial Intelligence",
    href: capabilityById.get("artificial-intelligence")?.href,
    summary: `${careerAreaDescriptions.get("Artificial Intelligence") ?? "Exploring and applying intelligent systems, automation, and emerging technologies."} Generative AI, machine learning, RAG, AI workflows, evaluation, intelligent search, and automation.`,
    topics: ["Generative AI", "RAG", "Evaluation", "Search", "Automation"],
  },
  {
    discipline: "Product & Design",
    href: capabilityById.get("product-development")?.href,
    summary: `${careerAreaDescriptions.get("Design") ?? "Creating thoughtful and intuitive experiences around people and technology."} User experience, interface design, interaction design, product workflows, research, and prototyping.`,
    topics: ["Interface design", "Research", "Workflows", "Interaction", "Prototype"],
  },
];

const lifecycle = [
  "Understand",
  "Define",
  "Design",
  "Engineer",
  "Validate",
  "Launch",
  "Evolve",
];

const collaborators = [
  "engineering",
  "product",
  "design",
  "infrastructure",
  "mobile",
  "AI",
  "business and domain stakeholders",
];

const culturePrinciples: Principle[] = [
  {
    title: "Quality Matters",
    description: "Readable, maintainable, testable software is part of the work.",
  },
  {
    title: "Architecture Has a Purpose",
    description:
      "Architecture should be chosen around product requirements and expected evolution.",
  },
  {
    title: "Product and Engineering Work Together",
    description:
      "Engineering should understand the user and business requirements behind the build.",
  },
  {
    title: "Technology Should Be Explainable",
    description:
      "Important technical decisions should be understandable to the people affected by them.",
  },
  {
    title: "Iterate Intentionally",
    description: "Build, observe, learn, and improve with direction.",
  },
  {
    title: "Responsible Technology",
    description:
      "Security, privacy, reliability, and responsible AI considerations belong in the engineering process.",
  },
];

const growthAreas = [
  "learning new technologies",
  "improving engineering fundamentals",
  "understanding system architecture",
  "developing product thinking",
  "improving communication",
  "working across disciplines",
  "understanding cloud and infrastructure",
  "exploring AI responsibly",
  "learning through real project problems",
];

const fitProfiles: Principle[] = [
  {
    title: "Engineers who enjoy systems",
    description: "People interested in how software behaves beyond a single feature.",
  },
  {
    title: "Builders who like ownership",
    description:
      "People who want to understand the problem and contribute to the outcome.",
  },
  {
    title: "Product-minded technologists",
    description: "People who care about users and business context.",
  },
  {
    title: "Curious learners",
    description:
      "People comfortable learning unfamiliar tools, patterns, and technologies.",
  },
  {
    title: "Practical problem solvers",
    description:
      "People who can balance ideal architecture with real-world constraints.",
  },
];

const faqs: FaqItem[] = [
  {
    question: "What kinds of roles does BIMAL GLOBAL work with?",
    answer:
      "The work connects engineering, product, mobile, cloud, AI, design, and related technology disciplines where they support the product or system being built.",
  },
  {
    question: "Can I contact BIMAL GLOBAL if there is no matching opening?",
    answer:
      "Yes. If no current opening is listed, you can use the contact page to introduce yourself and share the kind of technology work you would like to build.",
  },
  {
    question: "What technology areas are relevant?",
    answer:
      "Relevant areas include software engineering, product development, mobile platforms, cloud infrastructure, artificial intelligence, architecture, and digital products. The exact stack depends on the work.",
  },
  {
    question: "Does BIMAL GLOBAL hire only experienced professionals?",
    answer:
      "Requirements depend on the specific role and opening. The Careers page avoids making a blanket claim where no role-specific criteria are currently listed.",
  },
  {
    question: "Can I work on AI, cloud, mobile, and software engineering projects?",
    answer:
      "Project involvement depends on business requirements, role fit, and the capability needs of the work being done.",
  },
];

const finalCta = {
  title: "Want to build what comes next?",
  description:
    "Explore the kind of technology we build, understand how we work, and see whether your skills and interests fit the journey.",
  primaryCta: { href: "#current-opportunities", label: "View Opportunities" },
  secondaryCta: { href: "/company/how-we-work", label: "How We Work" },
};

export default function CareersPage() {
  return (
    <main className="bg-[#f7f7f2] text-[#171817]">
      <HeroSection />
      <WhyBuildSection />
      <ValuesSection />
      <AreasSection />
      <TeamWorkSection />
      <CultureSection />
      <GrowthSection />
      <FitSection />
      <OpportunitiesSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#171817] px-6 py-28 text-[#f7f7f2] sm:px-10 sm:py-36 lg:px-16">
      <TechnicalBackdrop />
      <div className="relative mx-auto grid w-full max-w-[1440px] gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.58fr)] lg:items-end">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#e35d3f]">
            {hero.eyebrow}
          </p>
          <h1 className="mt-8 max-w-5xl font-serif text-[clamp(3.8rem,9vw,9rem)] leading-[0.88] tracking-[-0.045em]">
            {hero.title}
          </h1>
        </div>
        <div className="lg:pb-3">
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

function WhyBuildSection() {
  return (
    <section className="border-b border-[#d9d4c7] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <SectionHeading
          eyebrow="Why Build With Us"
          title="Build technology. Solve meaningful problems. Keep learning."
          description="BIMAL GLOBAL is shaped around technology work that connects real problems, strong engineering, product thinking, and practical learning."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {whyBuildWithUs.map((item) => (
            <PrincipleCard item={item} key={item.title} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="bg-[#ebe6d9] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr] lg:items-start">
          <SectionHeading
            eyebrow="What We Value"
            title="Clear thinking before clever execution."
            description="These values describe the mindset we look for. They are principles, not claims about employee statistics or workplace rankings."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((item, index) => (
              <NumberedValue item={item} index={index} key={item.title} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function AreasSection() {
  return (
    <section className="border-b border-[#d9d4c7] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <SectionHeading
          eyebrow="Areas of Work"
          title="Different disciplines, one product and engineering lens."
          description="People may contribute across the technology areas that match BIMAL GLOBAL's stated capabilities and the needs of each project."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {areasOfWork.map((area) => (
            <AreaCard area={area} key={area.discipline} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function TeamWorkSection() {
  return (
    <section className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="How Teams Work"
              title="Understand, define, design, engineer, validate, launch, evolve."
              description="The work aligns with the collaborative lifecycle described on the How We Work page. People may collaborate across technical, product, design, infrastructure, mobile, AI, and business contexts."
              light
            />
            <div className="mt-9">
              <LightLink href="/company/how-we-work" label="Learn How We Work" />
            </div>
          </div>
          <div>
            <Flow items={lifecycle} />
            <div className="mt-8 flex flex-wrap gap-3">
              {collaborators.map((item) => (
                <span
                  className="border border-[#f7f7f2]/18 px-4 py-3 font-sans text-sm text-[#f7f7f2]/70"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CultureSection() {
  return (
    <section className="border-b border-[#d9d4c7] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <SectionHeading
          eyebrow="Engineering & Product Culture"
          title="Practical working principles for serious technology work."
          description="The culture described here is about how decisions are made, explained, tested, and improved through the product and engineering process."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {culturePrinciples.map((item) => (
            <PrincipleCard item={item} key={item.title} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function GrowthSection() {
  return (
    <section className="bg-[#ebe6d9] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1fr] lg:items-start">
          <SectionHeading
            eyebrow="Learning & Growth"
            title="Growth comes from fundamentals, curiosity, and real problems."
            description="This is principle-based growth: learning through the technology challenges, product questions, and system decisions that real work creates."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {growthAreas.map((item) => (
              <div
                className="border border-[#d2cab8] bg-[#f7f7f2] px-5 py-4 font-sans text-sm font-semibold text-[#55584f]"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FitSection() {
  return (
    <section className="border-b border-[#d9d4c7] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <SectionHeading
          eyebrow="Who May Fit"
          title="For people who like ownership, systems, and useful outcomes."
          description="The page focuses on mindset and working style without using protected-characteristic criteria or invented hiring promises."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {fitProfiles.map((item) => (
            <PrincipleCard item={item} key={item.title} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function OpportunitiesSection() {
  const hasOpenings = jobOpenings.length > 0;

  return (
    <section
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16"
      id="current-opportunities"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1fr] lg:items-start">
          <SectionHeading
            eyebrow="Current Opportunities"
            title={hasOpenings ? "Open roles." : "No current openings listed."}
            description={
              hasOpenings
                ? "Open roles are rendered from the existing careers data source."
                : "We are continuing to build our technology team. If your skills align with the kind of work described on this page, you can still introduce yourself and share what you would like to build with us."
            }
            light
          />
          {hasOpenings ? (
            <div className="grid gap-4">
              {jobOpenings.map((job) => (
                <Link
                  className="group border border-[#f7f7f2]/16 p-6 transition-colors hover:border-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f]"
                  href={job.href}
                  key={`${job.title}-${job.href}`}
                >
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#e35d3f]">
                    {[job.department, job.type, job.location].filter(Boolean).join(" / ")}
                  </p>
                  <h3 className="mt-5 font-serif text-4xl leading-none tracking-[-0.04em] text-[#f7f7f2]">
                    {job.title}
                  </h3>
                  <span className="mt-7 inline-flex font-sans text-sm font-semibold text-[#e35d3f]">
                    View role
                    <span aria-hidden="true" className="ml-2">
                      &rarr;
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="border border-[#f7f7f2]/16 p-7 sm:p-9">
              <p className="font-serif text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[0.92] tracking-[-0.045em] text-[#f7f7f2]">
                Introduce yourself with the kind of technology you want to build.
              </p>
              <p className="mt-7 max-w-2xl font-sans text-base leading-8 text-[#f7f7f2]/66">
                Since there are no listed vacancies in the current project data,
                the next step is a general inquiry through the verified contact
                route.
              </p>
              <div className="mt-9">
                <LightLink href="/contact" label="General Inquiry" />
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="border-b border-[#d9d4c7] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr]">
          <SectionHeading
            eyebrow="Career FAQ"
            title="A few practical notes before you reach out."
            description="The answers stay close to the actual project data and avoid unsupported employer claims."
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
    <section className="bg-[#f7f7f2] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-5xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#e35d3f]">
              Careers at BIMAL GLOBAL
            </p>
            <h2 className="mt-7 font-serif text-[clamp(3.2rem,7vw,7.25rem)] leading-[0.9] tracking-[-0.045em]">
              {finalCta.title}
            </h2>
            <p className="mt-7 max-w-2xl font-sans text-lg leading-8 text-[#55584f] sm:text-xl sm:leading-9">
              {finalCta.description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <PrimaryLink href={finalCta.primaryCta.href} label={finalCta.primaryCta.label} />
            <SecondaryLink
              href={finalCta.secondaryCta.href}
              label={finalCta.secondaryCta.label}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function AreaCard({ area }: { area: WorkArea }) {
  const content = (
    <>
      <h3 className="font-serif text-[clamp(2.45rem,4.4vw,4.8rem)] leading-[0.92] tracking-[-0.045em] text-[#171817]">
        {area.discipline}
      </h3>
      <p className="mt-6 font-sans text-sm leading-7 text-[#55584f]">
        {area.summary}
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {area.topics.map((topic) => (
          <span
            className="border border-[#171817]/16 px-3 py-2 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#55584f]"
            key={topic}
          >
            {topic}
          </span>
        ))}
      </div>
      {area.href ? (
        <span className="mt-8 inline-flex font-sans text-sm font-semibold text-[#e35d3f]">
          Explore capability
          <span aria-hidden="true" className="ml-2">
            &rarr;
          </span>
        </span>
      ) : null}
    </>
  );

  if (!area.href) {
    return <article className="border border-[#d9d4c7] bg-[#fdfbf5] p-7">{content}</article>;
  }

  return (
    <Link
      className="group border border-[#d9d4c7] bg-[#fdfbf5] p-7 transition-colors hover:border-[#171817] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
      href={area.href}
    >
      {content}
    </Link>
  );
}

function PrincipleCard({ item }: { item: Principle }) {
  return (
    <article className="border border-[#d9d4c7] bg-[#fdfbf5] p-6">
      <h3 className="font-sans text-xl font-semibold text-[#171817]">
        {item.title}
      </h3>
      <p className="mt-4 font-sans text-sm leading-7 text-[#55584f]">
        {item.description}
      </p>
    </article>
  );
}

function NumberedValue({ index, item }: { index: number; item: Principle }) {
  return (
    <article className="grid gap-5 border-t border-[#171817]/18 py-6 sm:grid-cols-[4rem_1fr]">
      <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#e35d3f]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-sans text-xl font-semibold text-[#171817]">
          {item.title}
        </h3>
        <p className="mt-3 font-sans text-sm leading-7 text-[#55584f]">
          {item.description}
        </p>
      </div>
    </article>
  );
}

function Flow({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-7">
      {items.map((item, index) => (
        <div className="flex min-w-0 items-stretch gap-3" key={item}>
          <div className="flex min-h-24 flex-1 items-center justify-center border border-[#f7f7f2]/16 bg-[#f7f7f2]/[0.04] px-4 py-5 text-center font-sans text-sm font-semibold text-[#f7f7f2]">
            {item}
          </div>
          {index < items.length - 1 ? (
            <div className="hidden items-center justify-center text-[#e35d3f] xl:flex">
              &rarr;
            </div>
          ) : null}
        </div>
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
    <div className="max-w-3xl">
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
