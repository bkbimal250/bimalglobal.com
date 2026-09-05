import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { contactPage, type ContactOption } from "@/content/contact";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | BIMAL GLOBAL",
  description:
    "Start a conversation with BIMAL GLOBAL about software engineering, product development, mobile platforms, cloud infrastructure, artificial intelligence, and digital products.",
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#f7f7f2] text-[#171817]">
      <Hero />
      <InquirySection />
      <HelpfulContextSection />
      <CapabilitySection />
      <StartingPointsSection />
      <GlobalCollaborationSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
}

function Hero() {
  const { hero } = contactPage;

  return (
    <section
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-[#171817] px-6 py-28 text-[#f7f7f2] sm:px-10 sm:py-36 lg:px-16"
    >
      <TechnicalBackdrop />
      <div className="relative mx-auto grid w-full max-w-[1440px] gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(22rem,0.54fr)] lg:items-end">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#e35d3f]">
            {hero.eyebrow}
          </p>
          <h1
            className="mt-8 max-w-5xl font-serif text-[clamp(4rem,10vw,9.5rem)] leading-[0.88] tracking-[-0.045em]"
            id="contact-title"
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

function InquirySection() {
  const { form } = contactPage;

  return (
    <section
      aria-labelledby="contact-form-title"
      className="border-b border-[#d9d4c7] px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.58fr)_minmax(24rem,0.9fr)] lg:gap-20">
          <div className="border-y border-[#171817]/15 py-12 lg:py-16">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#e35d3f]">
              Inquiry Form
            </p>
            <h2
              className="mt-7 font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.92] tracking-[-0.045em]"
              id="contact-form-title"
            >
              {form.title}
            </h2>
            <p className="mt-8 max-w-xl font-sans text-base leading-8 text-[#55584f] sm:text-lg sm:leading-9">
              {form.summary}
            </p>
          </div>
          <div className="border border-[#171817]/15 bg-[#fdfbf5] p-6 sm:p-8 lg:p-10">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

function HelpfulContextSection() {
  return (
    <section className="bg-[#ebe6d9] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1fr] lg:items-start">
          <SectionHeading
            eyebrow="What to Tell Us"
            title="A complete specification is not required."
            description="A useful inquiry starts with context. Share what you know, leave what you do not know, and let the conversation clarify the next step."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {contactPage.usefulContext.map((item, index) => (
              <NumberedCard index={index} item={item} key={item.title} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function CapabilitySection() {
  return (
    <section className="border-b border-[#d9d4c7] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <SectionHeading
          eyebrow="What We Can Help With"
          title="Start from the challenge, then choose the right capability."
          description="The conversation can begin with product direction, engineering execution, infrastructure, mobile, AI, integration, or modernization."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {contactPage.capabilities.map((item) => (
            <CapabilityCard item={item} key={item.href} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function StartingPointsSection() {
  return (
    <section className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <SectionHeading
          eyebrow="Engagement Starting Points"
          title="There is more than one way to begin."
          description="A useful conversation can start from an idea, an existing product, a technical constraint, or a larger platform question."
          light
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {contactPage.startingPoints.map((item) => (
            <article className="border border-[#f7f7f2]/16 p-6" key={item.title}>
              <h3 className="font-serif text-[clamp(2.35rem,4vw,4.6rem)] leading-[0.92] tracking-[-0.045em] text-[#f7f7f2]">
                {item.title}
              </h3>
              <p className="mt-6 font-sans text-sm leading-7 text-[#f7f7f2]/64">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function GlobalCollaborationSection() {
  const { collaboration } = contactPage;

  return (
    <section className="border-b border-[#d9d4c7] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1fr] lg:items-center">
          <SectionHeading
            eyebrow="Global Collaboration"
            title={collaboration.title}
            description={collaboration.description}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {["India", "Nepal", "International markets", "Distributed collaboration"].map(
              (item) => (
                <div
                  className="border border-[#d9d4c7] bg-[#fdfbf5] p-6 font-sans text-lg font-semibold text-[#171817]"
                  key={item}
                >
                  {item}
                </div>
              ),
            )}
            <div className="flex flex-wrap gap-3 sm:col-span-2">
              {collaboration.links.map((item) => (
                <TextLink href={item.href} key={item.href}>
                  {item.label}
                </TextLink>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-[#ebe6d9] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1fr]">
          <SectionHeading
            eyebrow="FAQ"
            title="Start with what you know."
            description="The first conversation does not need perfect answers. It needs a useful starting point."
          />
          <div className="divide-y divide-[#d2cab8] border-y border-[#d2cab8]">
            {contactPage.faqs.map((item) => (
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
  const { finalCta } = contactPage;

  return (
    <section className="bg-[#f7f7f2] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
      <Container>
        <div className="grid gap-12 border-y border-[#171817]/15 py-14 lg:grid-cols-[1fr_auto] lg:items-end lg:py-20">
          <div className="max-w-5xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[#e35d3f]">
              Begin Here
            </p>
            <h2 className="mt-7 font-serif text-[clamp(3.2rem,7vw,7.25rem)] leading-[0.9] tracking-[-0.045em]">
              {finalCta.title}
            </h2>
            <p className="mt-7 max-w-2xl font-sans text-lg leading-8 text-[#55584f] sm:text-xl sm:leading-9">
              {finalCta.summary}
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

function CapabilityCard({ item }: { item: ContactOption }) {
  return (
    <Link
      className="group border border-[#d9d4c7] bg-[#fdfbf5] p-6 transition-colors hover:border-[#171817] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
      href={item.href}
    >
      <h3 className="font-sans text-xl font-semibold text-[#171817]">
        {item.title}
      </h3>
      <p className="mt-5 font-sans text-sm leading-7 text-[#55584f]">
        {item.description}
      </p>
      <span className="mt-8 inline-flex font-sans text-sm font-semibold text-[#e35d3f]">
        Explore
        <span aria-hidden="true" className="ml-2">
          &rarr;
        </span>
      </span>
    </Link>
  );
}

function NumberedCard({
  index,
  item,
}: {
  index: number;
  item: { description: string; title: string };
}) {
  return (
    <article className="border-t border-[#171817]/18 py-6">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#e35d3f]">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-6 font-sans text-xl font-semibold text-[#171817]">
        {item.title}
      </h3>
      <p className="mt-3 font-sans text-sm leading-7 text-[#55584f]">
        {item.description}
      </p>
    </article>
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
