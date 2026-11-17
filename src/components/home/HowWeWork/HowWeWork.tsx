
"use client";

import Link from "next/link";
import { useState } from "react";

type ProcessStep = {
  description: string;
  imagePath: string;
  name: string;
  number: string;
  subtitle: string;
};

const processSteps: ProcessStep[] = [
  {
    number: "01",
    name: "Understand",
    subtitle: "Discover the opportunity",
    description:
      "We begin by understanding the challenge, the context, the people involved, and what success needs to look like.",
    imagePath: "/images/home/how-we-work/understand.jpg",
  },
  {
    number: "02",
    name: "Define",
    subtitle: "Establish the direction",
    description:
      "We bring structure to the opportunity by identifying priorities, requirements, constraints, and the right path forward.",
    imagePath: "/images/home/how-we-work/define.jpg",
  },
  {
    number: "03",
    name: "Design",
    subtitle: "Shape the experience",
    description:
      "We shape product experiences, systems, and technical approaches around real user and business needs.",
    imagePath: "/images/home/how-we-work/design.jpg",
  },
  {
    number: "04",
    name: "Build",
    subtitle: "Engineer the solution",
    description:
      "Our teams design and engineer software, platforms, mobile applications, infrastructure, and intelligent systems.",
    imagePath: "/images/home/how-we-work/build.jpg",
  },
  {
    number: "05",
    name: "Launch",
    subtitle: "Bring ideas to life",
    description:
      "We prepare technology for real-world use through testing, deployment, integration, and operational readiness.",
    imagePath: "/images/home/how-we-work/launch.jpg",
  },
  {
    number: "06",
    name: "Evolve",
    subtitle: "Grow beyond launch",
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

      </div>
    </section>
  );
}
