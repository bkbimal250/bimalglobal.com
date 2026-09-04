"use client";

import Link from "next/link";
import { useState } from "react";

type ProcessStep = {
  description: string;
  imagePath: string;
  name: string;
  number: string;
};

const processSteps: ProcessStep[] = [
  {
    number: "01",
    name: "Understand",
    description:
      "We begin by understanding the challenge, the context, the people involved, and what success needs to look like.",
    imagePath: "/images/home/how-we-work/understand.jpg",
  },
  {
    number: "02",
    name: "Define",
    description:
      "We bring structure to the opportunity by identifying priorities, requirements, constraints, and the right path forward.",
    imagePath: "/images/home/how-we-work/define.jpg",
  },
  {
    number: "03",
    name: "Design",
    description:
      "We shape product experiences, systems, and technical approaches around real user and business needs.",
    imagePath: "/images/home/how-we-work/design.jpg",
  },
  {
    number: "04",
    name: "Build",
    description:
      "Our teams design and engineer software, platforms, mobile applications, infrastructure, and intelligent systems.",
    imagePath: "/images/home/how-we-work/build.jpg",
  },
  {
    number: "05",
    name: "Launch",
    description:
      "We prepare technology for real-world use through testing, deployment, integration, and operational readiness.",
    imagePath: "/images/home/how-we-work/launch.jpg",
  },
  {
    number: "06",
    name: "Evolve",
    description:
      "Technology does not stop at launch. We support iteration, improvement, scaling, and long-term evolution.",
    imagePath: "/images/home/how-we-work/evolve.jpg",
  },
];

export function HowWeWork() {
  const [activeStep, setActiveStep] = useState(processSteps[0]);

  return (
    <section
      id="how-we-work"
      aria-labelledby="how-we-work-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-14 lg:grid-cols-[minmax(20rem,0.52fr)_minmax(0,1fr)] lg:gap-20 xl:gap-28">
        <div className="lg:sticky lg:top-10 lg:self-start">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
            How We Work
          </p>
          <h2
            id="how-we-work-title"
            className="mt-7 max-w-3xl font-serif text-[clamp(3rem,6.6vw,7rem)] leading-[0.92] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]"
          >
            Built around the problem.
            <span className="block text-[#e35d3f]">Designed for what comes next.</span>
          </h2>
          <p className="mt-9 max-w-xl font-sans text-lg leading-8 text-[#f7f7f2]/68 sm:text-xl sm:leading-9 motion-safe:animate-[hero-rise_800ms_220ms_ease-out_both]">
            Every technology challenge is different. Our approach brings
            together the right people, disciplines, and technology at each stage
            to move from understanding the problem to building and evolving the
            solution.
          </p>

          <div className="mt-10 border-l border-[#f7f7f2]/18 pl-6 motion-safe:animate-[hero-rise_800ms_300ms_ease-out_both]">
            <p className="font-sans text-sm font-semibold uppercase leading-7 tracking-[0.16em] text-[#f7f7f2]/58">
              Structured when it matters.
              <span className="block text-[#f7f7f2]/80">Flexible where it counts.</span>
            </p>
            <Link
              className="mt-8 inline-flex min-h-12 w-fit items-center justify-center border border-[#f7f7f2]/28 px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:border-[#e35d3f] hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f]"
              href="/contact"
            >
              Start a Conversation
              <span aria-hidden="true" className="ml-8 text-lg leading-none">
                &rarr;
              </span>
            </Link>
          </div>

          <ProcessVisual step={activeStep} />
        </div>

        <ol
          aria-label="Bimal Global process principles"
          className="divide-y divide-[#f7f7f2]/14 border-y border-[#f7f7f2]/14"
        >
          {processSteps.map((step, index) => (
            <ProcessStepItem
              isActive={step.name === activeStep.name}
              key={step.name}
              onActivate={() => setActiveStep(step)}
              stagger={index}
              step={step}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProcessStepItem({
  isActive,
  onActivate,
  stagger,
  step,
}: {
  isActive: boolean;
  onActivate: () => void;
  stagger: number;
  step: ProcessStep;
}) {
  return (
    <li
      className="motion-safe:animate-[hero-rise_800ms_ease-out_both]"
      style={{ animationDelay: `${260 + stagger * 80}ms` }}
    >
      <button
        className="group grid w-full grid-cols-1 gap-5 py-8 text-left outline-none transition-colors hover:bg-[#f7f7f2]/[0.035] focus-visible:bg-[#f7f7f2]/[0.055] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#e35d3f] sm:grid-cols-[5rem_minmax(0,0.48fr)_minmax(18rem,0.7fr)] sm:gap-8 sm:py-10 lg:px-5"
        onClick={onActivate}
        onFocus={onActivate}
        onMouseEnter={onActivate}
        type="button"
      >
        <span
          className={`font-sans text-xs font-semibold uppercase tracking-[0.24em] transition-colors ${
            isActive ? "text-[#e35d3f]" : "text-[#f7f7f2]/42"
          }`}
        >
          {step.number}
        </span>

        <span
          className={`block font-serif text-[clamp(2.15rem,4.8vw,4.75rem)] leading-[0.96] tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2 ${
            isActive ? "text-[#f7f7f2]" : "text-[#f7f7f2]/82"
          }`}
        >
          {step.name}
        </span>

        <span
          className={`block max-w-2xl self-end font-sans text-sm leading-7 transition-colors sm:text-base sm:leading-8 ${
            isActive ? "text-[#f7f7f2]/74" : "text-[#f7f7f2]/50"
          }`}
        >
          {step.description}
        </span>
      </button>
    </li>
  );
}

function ProcessVisual({ step }: { step: ProcessStep }) {
  return (
    <aside
      aria-label={`${step.name} process visual placeholder`}
      className="relative mt-12 min-h-[18rem] overflow-hidden bg-[#202927] text-[#f7f7f2] motion-safe:animate-[hero-reveal_1000ms_260ms_ease-out_both] sm:min-h-[24rem] lg:min-h-[28rem]"
      data-image-path={step.imagePath}
      key={step.name}
      style={{
        backgroundImage: `linear-gradient(145deg, rgba(23, 24, 23, 0.18), rgba(23, 24, 23, 0.9)), url(${step.imagePath})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(247,247,242,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.12)_1px,transparent_1px)] [background-size:3rem_3rem]" />
      <div className="absolute left-8 top-20 h-px w-36 bg-[#f7f7f2]/24" />
      <div className="absolute left-8 top-20 h-36 w-px bg-[#f7f7f2]/24" />
      <div className="absolute right-8 top-20 h-32 w-32 border border-[#f7f7f2]/24" />
      <div className="absolute bottom-12 left-8 h-28 w-28 border-[1.35rem] border-[#e35d3f] opacity-90" />

      <div className="absolute inset-x-7 top-7 flex items-center justify-between border-t border-[#f7f7f2]/30 pt-4 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[#f7f7f2]/70 sm:inset-x-9 sm:top-9">
        <span>{step.number}</span>
        <span>Process visual</span>
      </div>

      <div className="absolute inset-x-7 bottom-7 font-sans sm:inset-x-9 sm:bottom-9">
        <p className="max-w-xs text-[0.62rem] font-semibold uppercase leading-5 tracking-[0.22em] text-[#f7f7f2]/60">
          Replace image at
        </p>
        <p className="mt-3 max-w-sm break-words text-xs leading-5 text-[#f7f7f2]/78">
          {step.imagePath}
        </p>
      </div>
    </aside>
  );
}
