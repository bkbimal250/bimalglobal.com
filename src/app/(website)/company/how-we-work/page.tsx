import { existsSync } from "node:fs";
import { join } from "node:path";

import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { capabilitiesPage } from "@/content/capabilities";

export const metadata: Metadata = {
  title: "How We Work | BIMAL GLOBAL",
  description:
    "Explore how BIMAL GLOBAL connects business context, product thinking, engineering, and long-term technology decisions.",
};

type JourneyStep = {
  title: string;
  description: string;
};

type CardItem = {
  title: string;
  description: string;
  href?: string;
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
  eyebrow: "HOW WE WORK",
  title: "Understand first. Build with purpose. Evolve continuously.",
  description:
    "BIMAL GLOBAL approaches technology projects by connecting business context, product thinking, engineering, and long-term technology decisions.",
  imagePath: "/images/company/how-we-work/hero.jpg",
  actions: [
    { href: "/contact", label: "Start a Conversation" },
    { href: "/capabilities", label: "Explore Capabilities" },
  ],
};

const approachFlow = ["Context", "Problem", "Opportunity", "Solution"];

const journeySteps: JourneyStep[] = [
  {
    title: "Understand",
    description:
      "We begin with the business setting, user needs, existing workflows, constraints, and the outcome the work needs to support.",
  },
  {
    title: "Define",
    description:
      "We turn the early context into clearer priorities, product direction, technical requirements, and boundaries for the first meaningful scope.",
  },
  {
    title: "Design",
    description:
      "We shape journeys, interfaces, system behaviors, and decision points so the product can be understood before it is engineered.",
  },
  {
    title: "Engineer",
    description:
      "We build the product, platform, integration, or application with attention to architecture, maintainability, and operational use.",
  },
  {
    title: "Validate",
    description:
      "We test core flows, edge cases, usability, reliability, and fit against the product and business expectations.",
  },
  {
    title: "Integrate",
    description:
      "We connect the work with the systems, data sources, services, APIs, and infrastructure it depends on.",
  },
  {
    title: "Launch",
    description:
      "We prepare the release path, deployment approach, handover points, and visibility needed for a real operating product.",
  },
  {
    title: "Observe",
    description:
      "We watch how the system behaves, how users respond, and where operational signals point to improvement.",
  },
  {
    title: "Evolve",
    description:
      "We use feedback, new priorities, and technical learning to improve the product over time.",
  },
];

const discoveryQuestions = [
  "What business problem should this solve?",
  "Who depends on this product, workflow, or system?",
  "Where does the current process slow down or create risk?",
  "Which systems, teams, data, and rules already exist?",
  "What constraints must the solution respect?",
  "What result would make the work valuable?",
];

const productEngineeringBlocks = [
  "Product Thinking",
  "User Experience",
  "Software Engineering",
  "Architecture",
];

const foundationItems: CardItem[] = [
  {
    title: "Architecture",
    description:
      "Choose structures that fit current requirements while leaving space for growth, integration, and change.",
  },
  {
    title: "Maintainability",
    description:
      "Keep code, patterns, and responsibilities readable enough for future teams to extend with confidence.",
  },
  {
    title: "API Design",
    description:
      "Design interfaces between systems so capabilities can be reused, connected, and governed clearly.",
  },
  {
    title: "Data Modeling",
    description:
      "Shape data around the product behavior, business rules, reporting needs, and long-term integrity.",
  },
  {
    title: "Access Control",
    description:
      "Define authentication, roles, permissions, and sensitive flows as part of the system design.",
  },
  {
    title: "Testing & Releases",
    description:
      "Build confidence through practical test coverage, deployment habits, and release visibility.",
  },
  {
    title: "Error Handling",
    description:
      "Plan for failures, edge cases, recovery paths, and clear feedback when something needs attention.",
  },
  {
    title: "Observability",
    description:
      "Create visibility into application behavior, infrastructure health, and operational signals.",
  },
];

const technologyChoices: CardItem[] = [
  {
    title: capabilityById.get("mobile-platforms")?.title ?? "Mobile Platforms",
    description:
      "When the use case belongs in the hand, the field, or repeated daily routines, mobile becomes part of the product strategy.",
    href: capabilityById.get("mobile-platforms")?.href,
  },
  {
    title:
      capabilityById.get("cloud-infrastructure")?.title ??
      "Cloud & Infrastructure",
    description:
      "When reliability, deployment, scale, or operational control matter, infrastructure decisions move from background detail to core design.",
    href: capabilityById.get("cloud-infrastructure")?.href,
  },
  {
    title:
      capabilityById.get("artificial-intelligence")?.title ??
      "Artificial Intelligence",
    description:
      "When intelligence can improve search, support, automation, insight, or decision flows, AI is considered in context.",
    href: capabilityById.get("artificial-intelligence")?.href,
  },
];

const qualityItems: CardItem[] = [
  {
    title: "Functional Quality",
    description:
      "The product should do what the business and users expect across its most important flows.",
  },
  {
    title: "User Experience",
    description:
      "Interfaces, journeys, and states should be understandable, efficient, and appropriate for the audience.",
  },
  {
    title: "Reliability",
    description:
      "Core behavior should be resilient enough for real users, real data, and everyday operational pressure.",
  },
  {
    title: "Performance",
    description:
      "Important interactions should feel responsive, with attention to the product's context and constraints.",
  },
  {
    title: "Security Awareness",
    description:
      "Access, sensitive data, abuse cases, and permission boundaries are considered as part of delivery.",
  },
  {
    title: "Operational Readiness",
    description:
      "The team should know how the product is deployed, observed, supported, and improved after release.",
  },
];

const evolutionItems = [
  "New features",
  "Better workflows",
  "Performance improvements",
  "New integrations",
  "Mobile expansion",
  "AI capabilities",
  "Infrastructure changes",
  "User experience refinement",
  "System modernization",
];

const collaborationItems: CardItem[] = [
  {
    title: "Business Teams",
    description:
      "Clarify priorities, constraints, process realities, and the outcomes that matter most.",
  },
  {
    title: "Product Owners",
    description:
      "Translate needs into direction, scope, user journeys, and decisions the team can act on.",
  },
  {
    title: "Engineering Teams",
    description:
      "Shape the technical path, implementation quality, integrations, and architecture choices.",
  },
  {
    title: "Operations Teams",
    description:
      "Bring deployment, monitoring, support, feedback, and day-to-day usage into the product loop.",
  },
];

const startingPoints: CardItem[] = [
  {
    title: "A New Digital Product",
    description:
      "Shape an idea into a practical product direction, then move through design, engineering, and launch.",
    href: capabilityById.get("product-development")?.href,
  },
  {
    title: "A Software Platform",
    description:
      "Build or modernize the systems, applications, and integrations that support business operations.",
    href: capabilityById.get("software-engineering")?.href,
  },
  {
    title: "A Mobile Experience",
    description:
      "Extend workflows, services, and customer interactions into mobile contexts when the need is clear.",
    href: capabilityById.get("mobile-platforms")?.href,
  },
  {
    title: "A Cloud or AI Initiative",
    description:
      "Improve infrastructure, operational capability, automation, or intelligent product behavior where it adds value.",
    href: capabilityById.get("cloud-infrastructure")?.href,
  },
];

const principles: CardItem[] = [
  {
    title: "Context Before Output",
    description:
      "Good technology decisions begin with the setting they need to serve.",
  },
  {
    title: "Clarity Over Assumption",
    description:
      "We make priorities, constraints, and tradeoffs explicit before they become expensive.",
  },
  {
    title: "Useful Scope",
    description:
      "The right first build is the one that creates learning, value, and a foundation for what follows.",
  },
  {
    title: "Product and Engineering Together",
    description:
      "Experience, behavior, architecture, and implementation inform one another throughout the work.",
  },
  {
    title: "Built for Change",
    description:
      "Products should be able to adapt as users, operations, and business needs move.",
  },
  {
    title: "Operational Thinking",
    description:
      "Launch, monitoring, support, and ownership are part of the product, not an afterthought.",
  },
  {
    title: "Measured Improvement",
    description:
      "Feedback and observation guide what should be improved next.",
  },
  {
    title: "Technology Follows Need",
    description:
      "Cloud, mobile, AI, and software choices should earn their place by solving the right problem.",
  },
];

const finalCta = {
  title: "Have a product, platform, or system to shape?",
  description:
    "Start with the business context. We can help turn it into a clear product and engineering path.",
  actions: [
    { href: "/contact", label: "Start a Conversation" },
    { href: "/capabilities", label: "Explore Capabilities" },
  ],
};

export default function HowWeWorkPage() {
  return (
    <main className="bg-[#f6f4ee] text-[#151713]">
      <Hero />
      <ApproachSection />
      <JourneySection />
      <DiscoverySection />
      <DefinitionSection />
      <ProductEngineeringSection />
      <FoundationSection />
      <TechnologySection />
      <QualitySection />
      <LaunchSection />
      <EvolutionSection />
      <CollaborationSection />
      <StartingPointsSection />
      <PrinciplesSection />
      <FinalCtaSection />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#11130f] text-white">
      <VisualBackground imagePath={hero.imagePath} />
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1240px] flex-col justify-end px-6 pb-12 pt-32 sm:px-8 lg:px-10">
        <div className="max-w-5xl">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.42em] text-white/75">
            {hero.eyebrow}
          </p>
          <h1 className="max-w-5xl text-5xl font-medium leading-[0.96] tracking-normal text-white sm:text-6xl lg:text-8xl">
            {hero.title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/78 sm:text-xl">
            {hero.description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <DarkLink href={hero.actions[0].href}>{hero.actions[0].label}</DarkLink>
            <LightLink href={hero.actions[1].href}>{hero.actions[1].label}</LightLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="border-b border-[#d9d4c7] bg-[#f6f4ee] py-20 sm:py-28">
      <Container>
        <TwoColumn
          eyebrow="Our Approach"
          title="The process starts before the code."
          body={[
            "We look at the problem inside its real environment: the people involved, the workflows already in motion, the systems that must connect, and the constraints that cannot be ignored.",
            "That early understanding helps turn ambition into requirements, requirements into product direction, and product direction into technical choices that can hold up beyond the first release.",
          ]}
        >
          <Flow items={approachFlow} />
        </TwoColumn>
      </Container>
    </section>
  );
}

function JourneySection() {
  return (
    <section className="bg-[#151713] py-20 text-white sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="End-to-End Journey"
          title="From problem to evolving product."
          description="The work moves through clear stages, but the learning is continuous. Each stage gives the next one better information."
          light
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {journeySteps.map((step, index) => (
            <article
              className="relative border border-white/12 bg-white/[0.04] p-6"
              key={step.title}
            >
              <span className="text-xs font-semibold text-white/45">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 text-2xl font-medium text-white">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/68">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function DiscoverySection() {
  return (
    <section className="border-b border-[#d9d4c7] py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Understanding the Problem"
              title="Clear questions create better systems."
              description="Discovery is not a formality. It is where the work earns its direction by finding what should be solved, why it matters, and what the solution must respect."
            />
            <ul className="mt-10 grid gap-3">
              {discoveryQuestions.map((question) => (
                <li
                  className="flex gap-4 border-t border-[#d9d4c7] pt-4 text-base leading-7 text-[#34362f]"
                  key={question}
                >
                  <span className="mt-1 h-2 w-2 shrink-0 bg-[#d64a2f]" />
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </div>
          <VisualPanel
            imagePath="/images/company/how-we-work/discovery.jpg"
            label="Replace image at /public/images/company/how-we-work/discovery.jpg"
          />
        </div>
      </Container>
    </section>
  );
}

function DefinitionSection() {
  return (
    <section className="bg-[#ebe6d9] py-20 sm:py-28">
      <Container>
        <TwoColumn
          eyebrow="Product Definition"
          title="Not everything needs to be built at once."
          body={[
            "After the problem is understood, we decide what matters now, what can wait, and what needs deeper validation. Some projects benefit from a focused first version. Others require platform work, integration depth, or operational readiness from the start.",
            "The goal is practical direction: enough scope to be useful, enough restraint to stay focused, and enough structure to support what comes next.",
          ]}
        >
          <Flow items={["Need", "Priority", "Scope", "Product Direction"]} />
        </TwoColumn>
      </Container>
    </section>
  );
}

function ProductEngineeringSection() {
  return (
    <section className="border-b border-[#d9d4c7] bg-[#f6f4ee] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Product + Engineering"
          title="Product decisions and engineering decisions should inform each other."
          description="Useful products need both experience design and technical judgment. We connect workflows, interfaces, APIs, backend systems, frontend behavior, mobile contexts, data, integrations, and infrastructure into one buildable product direction."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch">
          {productEngineeringBlocks.map((item, index) => (
            <BlockWithConnector item={item} key={item} showArrow={index < 3} />
          ))}
        </div>
        <div className="mt-8 border border-[#151713] bg-[#151713] p-8 text-center text-2xl font-medium text-white sm:text-3xl">
          Buildable Product
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <TextLink href="/capabilities/product-development">
            Product Development
          </TextLink>
          <TextLink href="/capabilities/software-engineering">
            Software Engineering
          </TextLink>
        </div>
      </Container>
    </section>
  );
}

function FoundationSection() {
  return (
    <section className="bg-[#151713] py-20 text-white sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Engineering Foundation"
              title="Build the foundation with the future in mind."
              description="The early engineering choices should support today's product while avoiding unnecessary limits on tomorrow's version."
              light
            />
            <div className="mt-8">
              <LightLink href="/capabilities/software-engineering">
                Explore Software Engineering
              </LightLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {foundationItems.map((item) => (
              <article className="border border-white/12 p-5" key={item.title}>
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/64">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function TechnologySection() {
  return (
    <section className="border-b border-[#d9d4c7] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Capability Choices"
          title="Mobile, Cloud & AI when they matter."
          description="Technology follows the requirement. We choose tools, platforms, and capabilities because they serve the problem, the users, and the operating model."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {technologyChoices.map((item) => (
            <LinkedCard item={item} key={item.title} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function QualitySection() {
  return (
    <section className="bg-[#ebe6d9] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Validation & Quality"
          title="Build it. Test it. Challenge it."
          description="Validation looks beyond whether screens exist. It asks whether the product behaves properly, communicates clearly, and can be operated with confidence."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {qualityItems.map((item) => (
            <article className="border border-[#d2cab8] bg-[#f6f4ee] p-6" key={item.title}>
              <h3 className="text-xl font-medium text-[#151713]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#55584f]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function LaunchSection() {
  return (
    <section className="border-b border-[#d9d4c7] bg-[#f6f4ee] py-20 sm:py-28">
      <Container>
        <TwoColumn
          eyebrow="Launch & Operations"
          title="Launching is the beginning of real-world learning."
          body={[
            "A launch puts the product into contact with real users, real usage patterns, and real operational conditions. That makes deployment, monitoring, error visibility, and feedback loops part of the work.",
            "We consider infrastructure observation, product analytics, support signals, and operational feedback so the product can be improved from evidence rather than guesswork.",
          ]}
        >
          <Flow items={["Build", "Deploy", "Observe", "Learn"]} />
          <div className="mt-8">
            <TextLink href="/capabilities/cloud-infrastructure">
              Cloud & Infrastructure
            </TextLink>
          </div>
        </TwoColumn>
      </Container>
    </section>
  );
}

function EvolutionSection() {
  return (
    <section className="bg-[#151713] py-20 text-white sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Continuous Evolution"
              title="Products change because businesses change."
              description="After release, new information appears. Users ask for better flows, operations expose friction, business priorities move, and technology possibilities shift."
              light
            />
            <div className="mt-9 flex flex-wrap gap-3">
              {evolutionItems.map((item) => (
                <span
                  className="border border-white/14 px-4 py-3 text-sm text-white/72"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <Flow
            dark
            items={["Launch", "Feedback", "Prioritize", "Improve", "Release", "Repeat"]}
          />
        </div>
      </Container>
    </section>
  );
}

function CollaborationSection() {
  return (
    <section className="border-b border-[#d9d4c7] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Collaboration Model"
          title="The best technology work is collaborative."
          description="Strong delivery depends on shared visibility across business context, product decisions, engineering tradeoffs, and operational learning."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Flow items={["Business Context", "Product", "Engineering", "Operations"]} />
          <div className="grid gap-4 sm:grid-cols-2">
            {collaborationItems.map((item) => (
              <article className="border-l-2 border-[#d64a2f] bg-white/45 p-5" key={item.title}>
                <h3 className="text-lg font-medium text-[#151713]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#55584f]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function StartingPointsSection() {
  return (
    <section className="bg-[#ebe6d9] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Different Starting Points"
          title="There is no single starting point."
          description="Some work begins as an idea, some as a system problem, some as a mobile need, and some as a technical capability that needs to become useful."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {startingPoints.map((item) => (
            <LinkedCard item={item} key={item.title} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function PrinciplesSection() {
  return (
    <section className="border-b border-[#d9d4c7] bg-[#f6f4ee] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Working Principles"
          title="Principles that keep the work grounded."
          description="These ideas shape how we move from first conversation to production systems and ongoing product improvement."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => (
            <article className="border border-[#d9d4c7] bg-[#fdfbf5] p-5" key={item.title}>
              <h3 className="text-lg font-medium text-[#151713]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#55584f]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="bg-[#151713] py-20 text-white sm:py-28">
      <Container>
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-white/45">
            Start the Conversation
          </p>
          <h2 className="mt-6 text-4xl font-medium leading-tight text-white sm:text-6xl">
            {finalCta.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
            {finalCta.description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <LightLink href={finalCta.actions[0].href}>
              {finalCta.actions[0].label}
            </LightLink>
            <DarkOutlineLink href={finalCta.actions[1].href}>
              {finalCta.actions[1].label}
            </DarkOutlineLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-[1240px] px-6 sm:px-8 lg:px-10">{children}</div>;
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
        className={`text-xs font-semibold uppercase tracking-[0.34em] ${
          light ? "text-white/45" : "text-[#d64a2f]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-5 text-4xl font-medium leading-tight sm:text-5xl ${
          light ? "text-white" : "text-[#151713]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-6 text-lg leading-8 ${
          light ? "text-white/68" : "text-[#55584f]"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

function TwoColumn({
  body,
  children,
  eyebrow,
  title,
}: {
  body: string[];
  children: ReactNode;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d64a2f]">
          {eyebrow}
        </p>
        <h2 className="mt-5 text-4xl font-medium leading-tight text-[#151713] sm:text-5xl">
          {title}
        </h2>
        <div className="mt-7 space-y-5 text-lg leading-8 text-[#55584f]">
          {body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

function VisualBackground({ imagePath }: { imagePath: string }) {
  const hasImage = publicAssetExists(imagePath);

  return (
    <div className="absolute inset-0" data-image-path={imagePath}>
      {hasImage ? (
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-38"
          style={{ backgroundImage: `url(${imagePath})` }}
        />
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(#f6f4ee 1px, transparent 1px), linear-gradient(90deg, #f6f4ee 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,19,15,0.98),rgba(17,19,15,0.76)_52%,rgba(17,19,15,0.56))]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,19,15,0.15),rgba(17,19,15,0.92))]" />
    </div>
  );
}

function VisualPanel({ imagePath, label }: { imagePath: string; label: string }) {
  const hasImage = publicAssetExists(imagePath);

  return (
    <div
      className="relative min-h-[430px] overflow-hidden border border-[#d9d4c7] bg-[#151713]"
      data-image-path={imagePath}
    >
      {hasImage ? (
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-72"
          style={{ backgroundImage: `url(${imagePath})` }}
        />
      ) : null}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(21,23,19,0.22),rgba(21,23,19,0.82))]" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(#f6f4ee 1px, transparent 1px), linear-gradient(90deg, #f6f4ee 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <div className="absolute bottom-6 left-6 right-6 border border-white/18 bg-[#151713]/72 p-5 text-sm leading-6 text-white/72 backdrop-blur">
        {label}
      </div>
    </div>
  );
}

function publicAssetExists(imagePath: string) {
  const localPath = imagePath.replace(/^\/+/, "");
  return existsSync(join(process.cwd(), "public", localPath));
}

function Flow({ dark = false, items }: { dark?: boolean; items: string[] }) {
  return (
    <div
      className={`grid gap-3 ${
        items.length > 4 ? "sm:grid-cols-2" : "sm:grid-cols-4"
      }`}
    >
      {items.map((item, index) => (
        <div className="flex min-w-0 items-stretch gap-3" key={`${item}-${index}`}>
          <div
            className={`flex min-h-24 flex-1 items-center justify-center border px-4 py-5 text-center text-base font-medium ${
              dark
                ? "border-white/14 bg-white/[0.04] text-white"
                : "border-[#151713] bg-[#fdfbf5] text-[#151713]"
            }`}
          >
            {item}
          </div>
          {index < items.length - 1 ? (
            <div
              className={`hidden w-6 items-center justify-center text-xl sm:flex ${
                dark ? "text-white/35" : "text-[#a43b28]"
              }`}
            >
              &rarr;
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

function BlockWithConnector({
  item,
  showArrow,
}: {
  item: string;
  showArrow: boolean;
}) {
  return (
    <>
      <div className="flex min-h-28 items-center justify-center border border-[#151713] bg-[#fdfbf5] px-4 py-6 text-center text-lg font-medium text-[#151713]">
        {item}
      </div>
      {showArrow ? (
        <div className="hidden items-center justify-center text-2xl text-[#a43b28] lg:flex">
          +
        </div>
      ) : null}
    </>
  );
}

function LinkedCard({ item }: { item: CardItem }) {
  const content = (
    <>
      <h3 className="text-2xl font-medium leading-tight text-[#151713]">
        {item.title}
      </h3>
      <p className="mt-5 text-sm leading-7 text-[#55584f]">{item.description}</p>
      {item.href ? (
        <span className="mt-7 inline-flex text-sm font-semibold text-[#d64a2f]">
          Explore capability
          <span aria-hidden className="ml-2">
            &rarr;
          </span>
        </span>
      ) : null}
    </>
  );

  if (!item.href) {
    return (
      <article className="border border-[#d9d4c7] bg-[#fdfbf5] p-7">
        {content}
      </article>
    );
  }

  return (
    <Link
      className="group border border-[#d9d4c7] bg-[#fdfbf5] p-7 transition hover:border-[#151713] hover:bg-white"
      href={item.href}
    >
      {content}
    </Link>
  );
}

function TextLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <Link
      className="inline-flex items-center border-b border-[#d64a2f] pb-1 text-sm font-semibold text-[#151713] transition hover:text-[#d64a2f]"
      href={href}
    >
      {children}
      <span aria-hidden className="ml-2">
        &rarr;
      </span>
    </Link>
  );
}

function DarkLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <Link
      className="inline-flex min-h-12 items-center justify-center bg-white px-6 text-sm font-semibold text-[#151713] transition hover:bg-[#ebe6d9]"
      href={href}
    >
      {children}
    </Link>
  );
}

function LightLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <Link
      className="inline-flex min-h-12 items-center justify-center border border-white/28 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
      href={href}
    >
      {children}
    </Link>
  );
}

function DarkOutlineLink({
  children,
  href,
}: { children: ReactNode; href: string }) {
  return (
    <Link
      className="inline-flex min-h-12 items-center justify-center border border-white/28 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
      href={href}
    >
      {children}
    </Link>
  );
}
