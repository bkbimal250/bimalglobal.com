
"use client";

import { useState } from "react";
import Link from "next/link";

type LifecycleStage = {
  description: string;
  imagePath: string;
  name: string;
  highlight: string;
  number: string;
};

const lifecycleStages: LifecycleStage[] = [
  {
    number: "01",
    name: "Strategy & Discovery",
    highlight: "Discovery",
    description:
      "Understanding opportunities, defining problems, and creating the foundation for what comes next.",
    imagePath: "/images/home/full-spectrum/strategy.jpg",
  },
  {
    number: "02",
    name: "Product & Experience",
    highlight: "Experience",
    description:
      "Turning ideas into meaningful product experiences through product thinking, UX, and design.",
    imagePath: "/images/home/full-spectrum/product.jpg",
  },
  {
    number: "03",
    name: "Design & Engineering",
    highlight: "Engineering",
    description:
      "Building reliable software, applications, platforms, APIs, and digital systems.",
    imagePath: "/images/home/full-spectrum/engineering.jpg",
  },
  {
    number: "04",
    name: "Infrastructure & Integration",
    highlight: "Integration",
    description:
      "Creating the technical foundations, cloud environments, integrations, and systems needed to operate reliably.",
    imagePath: "/images/home/full-spectrum/infrastructure.jpg",
  },
  {
    number: "05",
    name: "Launch & Evolution",
    highlight: "Evolution",
    description:
      "Supporting products beyond launch through iteration, optimization, scaling, and continuous development.",
    imagePath: "/images/home/full-spectrum/launch.jpg",
  },
  {
    number: "06",
    name: "Intelligence & Automation",
    highlight: "Automation",
    description:
      "Applying AI, automation, data, and intelligent technologies where they create real value.",
    imagePath: "/images/home/full-spectrum/intelligence.jpg",
  },
];

export function FullSpectrumSolutions() {
  const [activeStage, setActiveStage] = useState(lifecycleStages[0]);

  return (
    <section
      id="full-spectrum"
      aria-labelledby="full-spectrum-title"
      className="overflow-hidden bg-[#F7F5F0] px-5 py-20 text-[#17201F] sm:px-10 sm:py-24 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* =================================
            SECTION HEADER
        ================================= */}

        <div className="grid grid-cols-1 gap-7 border-b border-[#17201F]/10 pb-9 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">

          <div>
            <div className="mb-5 flex items-center gap-3">

              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#DC5235]">
                How We Create
              </p>
            </div>

            <h2
              id="full-spectrum-title"
              className="max-w-2xl font-serif text-[clamp(2.125rem,4vw,4rem)] font-medium leading-[1.08] tracking-[-0.045em] text-[#17201F]"
            >
              From ideas to

              <span className="block text-[#DC5235]">
                technology at scale.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-[#65716C] sm:text-base sm:leading-8 lg:pb-1">
            We bring together strategy, product thinking, design,
            engineering and intelligent systems to create complete
            digital solutions, from initial concept to continuous growth.
          </p>

        </div>

        {/* =================================
            LIFECYCLE CONTENT
        ================================= */}

        <div className="grid grid-cols-1 gap-9 pt-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:pt-12">

          {/* LEFT: LIFECYCLE LIST */}

          <div>

            <div className="mb-4 flex items-center justify-between">
              <p className="text-[11px] font-bold uppercase tracking-[0.19em] text-[#77817D]">
                Our Technology Lifecycle
              </p>

              <span className="text-[11px] font-semibold tracking-[0.15em] text-[#DC5235]">
                06 STAGES
              </span>
            </div>

            <ol className="border-t border-[#17201F]/10">

              {lifecycleStages.map((stage) => {
                const isActive = activeStage.name === stage.name;

                const highlightedStart = stage.name.indexOf(
                  stage.highlight
                );

                const beforeHighlight = stage.name.slice(
                  0,
                  highlightedStart
                );

                return (
                  <li key={stage.number}>

                    <button
                      type="button"
                      onClick={() => setActiveStage(stage)}
                      onMouseEnter={() => setActiveStage(stage)}
                      onFocus={() => setActiveStage(stage)}
                      aria-pressed={isActive}
                      className={`group relative grid w-full grid-cols-[34px_minmax(0,1fr)_22px] items-start gap-3 border-b border-[#17201F]/10 px-2 py-5 text-left transition-all duration-300 sm:grid-cols-[46px_minmax(0,1fr)_28px] sm:gap-4 sm:px-4 sm:py-6 ${
                        isActive
                          ? "bg-white shadow-[0_5px_20px_rgba(23,32,31,0.035)]"
                          : "hover:bg-white/60"
                      }`}
                    >

                      {/* Active Orange Indicator */}

                      <span
                        className={`absolute bottom-0 left-0 top-0 w-[3px] transition-colors duration-300 ${
                          isActive
                            ? "bg-[#DC5235]"
                            : "bg-transparent"
                        }`}
                      />

                      {/* Number */}

                      <span
                        className={`pt-1 text-[11px] font-semibold tracking-[0.15em] transition-colors duration-300 ${
                          isActive
                            ? "text-[#DC5235]"
                            : "text-[#89918D]"
                        }`}
                      >
                        {stage.number}
                      </span>

                      {/* Stage Information */}

                      <span className="block min-w-0">

                        <span className="block font-serif text-[clamp(1.15rem,2vw,1.55rem)] font-medium leading-snug tracking-[-0.025em] text-[#17201F]">

                          {beforeHighlight}

                          <span
                            className={`transition-colors duration-300 ${
                              isActive
                                ? "text-[#DC5235]"
                                : "text-[#17201F]/65 group-hover:text-[#DC5235]"
                            }`}
                          >
                            {stage.highlight}
                          </span>

                        </span>

                        <span
                          className={`mt-2 block max-w-xl text-[12px] leading-[1.8] transition-colors duration-300 sm:text-[13px] ${
                            isActive
                              ? "text-[#65716C]"
                              : "text-[#89918D] group-hover:text-[#65716C]"
                          }`}
                        >
                          {stage.description}
                        </span>

                      </span>

                      {/* Arrow */}

                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-base transition-all duration-300 ${
                          isActive
                            ? "bg-[#DC5235] text-white"
                            : "bg-[#17201F]/5 text-[#77817D] group-hover:bg-[#DC5235] group-hover:text-white"
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

          {/* RIGHT: IMAGE PREVIEW */}

          <div className="relative min-h-[370px] overflow-hidden bg-[#17201F] sm:min-h-[470px] lg:sticky lg:top-24 lg:min-h-[540px]">

            {/* Main Image */}

            <img
              key={activeStage.imagePath}
              src={activeStage.imagePath}
              alt={activeStage.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover motion-safe:animate-[hero-reveal_600ms_ease-out_both]"
            />

            {/* Image Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1514]/95 via-[#0D1514]/20 to-[#0D1514]/15" />

            {/* Top Label */}

            <div className="absolute inset-x-6 top-6 flex items-center justify-between border-t border-white/35 pt-4 sm:inset-x-8 sm:top-8">

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
                Bimal Global
              </span>

              <span className="text-[11px] font-semibold tracking-[0.15em] text-white">
                {activeStage.number} / 06
              </span>

            </div>

            {/* Decorative Orange Element */}

            <div className="absolute right-8 top-24 h-16 w-16 border border-[#DC5235]/70 sm:h-20 sm:w-20">
              <div className="absolute bottom-0 left-0 h-1/2 w-1/2 bg-[#DC5235]" />
            </div>

            {/* Bottom Image Content */}

            <div
              key={activeStage.name}
              className="absolute inset-x-6 bottom-7 motion-safe:animate-[hero-rise_600ms_ease-out_both] sm:inset-x-8 sm:bottom-9"
            >

              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.23em] text-[#F07858]">
                Our Process
              </p>

              <h3 className="max-w-md font-serif text-2xl font-medium leading-tight text-white sm:text-3xl lg:text-4xl">
                {activeStage.name}
              </h3>

              <p className="mt-3 max-w-md text-xs leading-6 text-white/65 sm:text-sm">
                {activeStage.description}
              </p>

              {/* Progress Indicators */}

              <div className="mt-7 flex items-center gap-2">
                {lifecycleStages.map((stage) => (
                  <span
                    key={stage.number}
                    className={`h-[3px] transition-all duration-500 ${
                      activeStage.number === stage.number
                        ? "w-9 bg-[#DC5235]"
                        : "w-4 bg-white/35"
                    }`}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM CTA */}

        <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-[#17201F]/10 pt-7 sm:flex-row sm:items-center">

          <p className="max-w-xl text-sm leading-7 text-[#65716C]">
            Every stage works together to create technology
            that delivers meaningful business value.
          </p>

          <Link
            href="/company/how-we-work"
            className="group inline-flex min-h-[48px] shrink-0 items-center justify-center gap-7 bg-[#17201F] px-6 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#DC5235]"
          >
            Explore How We Work

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

        </div>

      </div>
    </section>
  );
}
