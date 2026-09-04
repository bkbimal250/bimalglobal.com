import type { Metadata } from "next";
import Link from "next/link";

import { contactPage, type ContactOption } from "@/content/contact";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | BIMAL GLOBAL",
  description:
    "Start a conversation with BIMAL GLOBAL about software engineering, product development, mobile platforms, cloud infrastructure, AI, or technology strategy.",
};

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#f7f7f2] text-[#171817]">
      <Hero />
      <InquirySection />
      <ContactOptions />
      <ContactNotes />
    </main>
  );
}

function Hero() {
  const { hero } = contactPage;

  return (
    <section
      aria-labelledby="contact-title"
      className="relative isolate px-6 pb-20 pt-32 sm:px-10 sm:pb-28 sm:pt-36 lg:px-16 lg:pb-36 lg:pt-44"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 border-b border-[#171817]/15 pb-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.55fr)] lg:items-end lg:gap-20 lg:pb-24">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
            {hero.eyebrow}
          </p>
          <h1
            className="mt-7 max-w-5xl font-serif text-[clamp(3.5rem,8vw,8.75rem)] leading-[0.9] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]"
            id="contact-title"
          >
            {hero.title}
          </h1>
        </div>
        <p className="max-w-xl font-sans text-lg leading-8 text-[#171817]/68 sm:text-xl sm:leading-9 motion-safe:animate-[hero-rise_800ms_220ms_ease-out_both]">
          {hero.summary}
        </p>
      </div>
    </section>
  );
}

function InquirySection() {
  const { form } = contactPage;

  return (
    <section
      aria-labelledby="contact-form-title"
      className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16 lg:pb-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(24rem,0.82fr)] lg:gap-20">
        <div className="border-y border-[#171817]/15 py-12 lg:py-16">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
            Inquiry
          </p>
          <h2
            className="mt-7 font-serif text-[clamp(3rem,7vw,7rem)] leading-[0.92] tracking-[-0.045em]"
            id="contact-form-title"
          >
            {form.title}
          </h2>
          <p className="mt-8 max-w-xl font-sans text-base leading-8 text-[#171817]/66 sm:text-lg sm:leading-9">
            {form.summary}
          </p>
        </div>
        <div className="border border-[#171817]/15 p-6 sm:p-8 lg:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactOptions() {
  return (
    <section
      aria-labelledby="contact-options-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <h2
          className="max-w-5xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]"
          id="contact-options-title"
        >
          Useful reasons to start the conversation
        </h2>
        <div className="mt-12 grid grid-cols-1 border-y border-[#f7f7f2]/15 lg:mt-16 lg:grid-cols-3">
          {contactPage.options.map((item, index) => (
            <OptionCard index={index} item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OptionCard({ index, item }: { index: number; item: ContactOption }) {
  return (
    <article className="border-b border-[#f7f7f2]/15 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-10 lg:last:border-r-0">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
        0{index + 1}
      </p>
      <h3 className="mt-8 font-serif text-[clamp(2.5rem,5vw,5.25rem)] leading-none tracking-[-0.04em]">
        {item.title}
      </h3>
      <p className="mt-7 font-sans text-sm leading-7 text-[#f7f7f2]/64 sm:text-base sm:leading-8">
        {item.description}
      </p>
    </article>
  );
}

function ContactNotes() {
  return (
    <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 border-y border-[#171817]/15 py-14 lg:grid-cols-[minmax(0,0.62fr)_minmax(24rem,1fr)] lg:gap-20 lg:py-20">
        <div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
            Before We Begin
          </p>
          <h2 className="mt-7 font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em]">
            Clear context helps create a better first step.
          </h2>
          <Link
            className="mt-9 inline-flex min-h-12 w-fit items-center justify-center bg-[#171817] px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
            href="/company/how-we-work"
          >
            See How We Work
            <span aria-hidden="true" className="ml-8 text-lg leading-none">
              &rarr;
            </span>
          </Link>
        </div>
        <div className="self-end">
          <ul className="grid gap-5">
            {contactPage.details.map((detail) => (
              <li
                className="border-t border-[#171817]/15 pt-5 font-sans text-base leading-8 text-[#171817]/66 sm:text-lg sm:leading-9"
                key={detail}
              >
                {detail}
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-6">
            {contactPage.faqs.map((item) => (
              <article key={item.question}>
                <h3 className="font-serif text-[clamp(2rem,4vw,3.75rem)] leading-none tracking-[-0.04em]">
                  {item.question}
                </h3>
                <p className="mt-4 font-sans text-sm leading-7 text-[#171817]/64 sm:text-base sm:leading-8">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
