<<<<<<< HEAD
=======

>>>>>>> origin/develop
"use client";

import Link from "next/link";
import { useState } from "react";

type ProcessStep = {
  description: string;
  imagePath: string;
  name: string;
  number: string;
<<<<<<< HEAD
=======
  subtitle: string;
>>>>>>> origin/develop
};

const processSteps: ProcessStep[] = [
  {
    number: "01",
    name: "Understand",
<<<<<<< HEAD
=======
    subtitle: "Discover the opportunity",
>>>>>>> origin/develop
    description:
      "We begin by understanding the challenge, the context, the people involved, and what success needs to look like.",
    imagePath: "/images/home/how-we-work/understand.jpg",
  },
  {
    number: "02",
    name: "Define",
<<<<<<< HEAD
=======
    subtitle: "Establish the direction",
>>>>>>> origin/develop
    description:
      "We bring structure to the opportunity by identifying priorities, requirements, constraints, and the right path forward.",
    imagePath: "/images/home/how-we-work/define.jpg",
  },
  {
    number: "03",
    name: "Design",
<<<<<<< HEAD
=======
    subtitle: "Shape the experience",
>>>>>>> origin/develop
    description:
      "We shape product experiences, systems, and technical approaches around real user and business needs.",
    imagePath: "/images/home/how-we-work/design.jpg",
  },
  {
    number: "04",
    name: "Build",
<<<<<<< HEAD
=======
    subtitle: "Engineer the solution",
>>>>>>> origin/develop
    description:
      "Our teams design and engineer software, platforms, mobile applications, infrastructure, and intelligent systems.",
    imagePath: "/images/home/how-we-work/build.jpg",
  },
  {
    number: "05",
    name: "Launch",
<<<<<<< HEAD
=======
    subtitle: "Bring ideas to life",
>>>>>>> origin/develop
    description:
      "We prepare technology for real-world use through testing, deployment, integration, and operational readiness.",
    imagePath: "/images/home/how-we-work/launch.jpg",
  },
  {
    number: "06",
    name: "Evolve",
<<<<<<< HEAD
=======
    subtitle: "Grow beyond launch",
>>>>>>> origin/develop
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
<<<<<<< HEAD
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
=======
      className="overflow-hidden bg-[#0D1514] px-5 py-20 text-white sm:px-10 sm:py-24 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* SECTION HEADER */}

        <div className="mb-12 grid grid-cols-1 gap-6 border-b border-white/10 pb-9 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">

          <div>
            <div className="mb-5 flex items-center gap-3">
          

              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#DC5235]">
                Our Process
              </p>
            </div>

            <h2
              id="how-we-work-title"
              className="max-w-2xl font-serif text-[clamp(2.125rem,4vw,4rem)] font-medium leading-[1.08] tracking-[-0.045em] text-white"
            >
              A thoughtful process.

              <span className="block text-[#DC5235]">
                Meaningful outcomes.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-white/55 sm:text-base sm:leading-8 lg:pb-1">
            From the first conversation to continuous improvement,
            our collaborative approach brings clarity, creativity
            and engineering excellence to every stage of development.
          </p>

        </div>

        {/* PROCESS CONTENT */}

        <div className="grid grid-cols-1 gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">

          {/* LEFT PROCESS LIST */}

          <div>

            <div className="mb-4 flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                How We Move Forward
              </p>

              <span className="text-[11px] font-semibold tracking-[0.15em] text-[#DC5235]">
                06 STEPS
              </span>
            </div>

            <ol className="border-t border-white/15">

              {processSteps.map((step) => {
                const isActive = activeStep.name === step.name;

                return (
                  <li key={step.number}>

                    <button
                      type="button"
                      onClick={() => setActiveStep(step)}
                      onMouseEnter={() => setActiveStep(step)}
                      onFocus={() => setActiveStep(step)}
                      aria-pressed={isActive}
                      className={`group relative grid w-full grid-cols-[34px_minmax(0,1fr)_24px] items-center gap-3 border-b border-white/10 px-2 py-5 text-left transition-all duration-300 sm:grid-cols-[48px_minmax(0,1fr)_30px] sm:gap-4 sm:px-4 sm:py-6 ${
                        isActive
                          ? "bg-white/[0.055]"
                          : "hover:bg-white/[0.025]"
                      }`}
                    >

                      {/* Active Indicator */}

                      <span
                        className={`absolute bottom-0 left-0 top-0 w-[3px] transition-colors ${
                          isActive
                            ? "bg-[#DC5235]"
                            : "bg-transparent"
                        }`}
                      />

                      {/* Number */}

                      <span
                        className={`text-[11px] font-semibold tracking-[0.15em] transition-colors ${
                          isActive
                            ? "text-[#DC5235]"
                            : "text-white/35"
                        }`}
                      >
                        {step.number}
                      </span>

                      {/* Step Information */}

                      <span className="block min-w-0">

                        <span
                          className={`block font-serif text-[clamp(1.25rem,2.2vw,1.75rem)] font-medium leading-tight transition-colors duration-300 ${
                            isActive
                              ? "text-white"
                              : "text-white/75 group-hover:text-white"
                          }`}
                        >
                          {step.name}

                          {isActive && (
                            <span className="ml-2 text-[#DC5235]">
                              /
                            </span>
                          )}
                        </span>

                        <span
                          className={`mt-1.5 block text-[11px] font-medium tracking-wide transition-colors ${
                            isActive
                              ? "text-[#F07858]"
                              : "text-white/35"
                          }`}
                        >
                          {step.subtitle}
                        </span>

                        <span
                          className={`mt-2 block max-w-lg text-xs leading-6 transition-colors sm:text-[13px] ${
                            isActive
                              ? "text-white/65"
                              : "text-white/40 group-hover:text-white/60"
                          }`}
                        >
                          {step.description}
                        </span>

                      </span>

                      {/* Arrow */}

                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-base transition-all duration-300 ${
                          isActive
                            ? "bg-[#DC5235] text-white"
                            : "border border-white/15 text-white/45 group-hover:border-[#DC5235] group-hover:text-[#DC5235]"
                        }`}
                      >
                        ↗
                      </span>

                    </button>

                  </li>
                );
              })}

            </ol>

          </div>

          {/* RIGHT IMAGE PANEL */}

          <div className="relative min-h-[380px] overflow-hidden bg-[#17201F] sm:min-h-[480px] lg:sticky lg:top-24 lg:min-h-[570px]">

            {/* Image */}

            <img
              key={activeStep.imagePath}
              src={activeStep.imagePath}
              alt={activeStep.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover motion-safe:animate-[hero-reveal_700ms_ease-out_both]"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1514]/95 via-[#0D1514]/20 to-[#0D1514]/15" />

            {/* Top Information */}

            <div className="absolute inset-x-6 top-6 flex items-center justify-between border-t border-white/30 pt-4 sm:inset-x-8 sm:top-8">

              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/75">
                Bimal Global
              </span>

              <span className="text-[11px] font-semibold tracking-[0.15em] text-white">
                {activeStep.number} / 06
              </span>

            </div>

            {/* Orange Decorative Element */}

            <div className="absolute right-8 top-24 h-16 w-16 border border-[#DC5235]/70 sm:h-20 sm:w-20">
              <span className="absolute bottom-0 left-0 h-1/2 w-1/2 bg-[#DC5235]" />
            </div>

            {/* Bottom Image Content */}

            <div
              key={activeStep.name}
              className="absolute inset-x-6 bottom-7 motion-safe:animate-[hero-rise_600ms_ease-out_both] sm:inset-x-8 sm:bottom-9"
            >

              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.23em] text-[#F07858]">
                Our Approach
              </p>

              <h3 className="font-serif text-3xl font-medium leading-tight text-white sm:text-4xl">
                {activeStep.name}
              </h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-white/65">
                {activeStep.description}
              </p>

              {/* Progress */}

              <div className="mt-7 flex items-center gap-2">
                {processSteps.map((step) => (
                  <span
                    key={step.number}
                    className={`h-[3px] transition-all duration-500 ${
                      activeStep.number === step.number
                        ? "w-9 bg-[#DC5235]"
                        : "w-4 bg-white/30"
                    }`}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM CTA */}

        <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center">

          <p className="max-w-xl text-sm leading-7 text-white/50">
            Every successful solution begins with the right
            understanding and evolves through collaboration.
          </p>

          <Link
            href="/contact"
            className="group inline-flex min-h-[48px] shrink-0 items-center justify-center gap-7 border border-white/25 px-6 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-[#DC5235] hover:bg-[#DC5235]"
          >
            Start a Conversation

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>

>>>>>>> origin/develop
      </div>
    </section>
  );
}
<<<<<<< HEAD

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
      aria-label={`${step.name} process visual`}
      className="relative mt-12 min-h-[18rem] overflow-hidden bg-[#202927] text-[#f7f7f2] motion-safe:animate-[hero-reveal_1000ms_260ms_ease-out_both] sm:min-h-[24rem] lg:min-h-[28rem]"
      data-image-path={step.imagePath}
      key={step.name}
      style={{
        backgroundImage: `linear-gradient(145deg, rgba(23, 24, 23, 0.18), rgba(23, 24, 23, 0.9)), url("${step.imagePath}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
          {step.name}
        </p>
        <p className="mt-3 max-w-sm text-xs leading-5 text-[#f7f7f2]/78">
          {step.description}
        </p>
      </div>
    </aside>
  );
}
=======
>>>>>>> origin/develop
