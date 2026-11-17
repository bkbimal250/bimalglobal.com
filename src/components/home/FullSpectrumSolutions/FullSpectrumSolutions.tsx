<<<<<<< HEAD
"use client";

import Link from "next/link";
import { useState } from "react";
=======

"use client";

import { useState } from "react";
import Link from "next/link";
>>>>>>> origin/develop

type LifecycleStage = {
  description: string;
  imagePath: string;
  name: string;
<<<<<<< HEAD
=======
  highlight: string;
>>>>>>> origin/develop
  number: string;
};

const lifecycleStages: LifecycleStage[] = [
  {
    number: "01",
    name: "Strategy & Discovery",
<<<<<<< HEAD
=======
    highlight: "Discovery",
>>>>>>> origin/develop
    description:
      "Understanding opportunities, defining problems, and creating the foundation for what comes next.",
    imagePath: "/images/home/full-spectrum/strategy.jpg",
  },
  {
    number: "02",
    name: "Product & Experience",
<<<<<<< HEAD
=======
    highlight: "Experience",
>>>>>>> origin/develop
    description:
      "Turning ideas into meaningful product experiences through product thinking, UX, and design.",
    imagePath: "/images/home/full-spectrum/product.jpg",
  },
  {
    number: "03",
    name: "Design & Engineering",
<<<<<<< HEAD
=======
    highlight: "Engineering",
>>>>>>> origin/develop
    description:
      "Building reliable software, applications, platforms, APIs, and digital systems.",
    imagePath: "/images/home/full-spectrum/engineering.jpg",
  },
  {
    number: "04",
    name: "Infrastructure & Integration",
<<<<<<< HEAD
=======
    highlight: "Integration",
>>>>>>> origin/develop
    description:
      "Creating the technical foundations, cloud environments, integrations, and systems needed to operate reliably.",
    imagePath: "/images/home/full-spectrum/infrastructure.jpg",
  },
  {
    number: "05",
    name: "Launch & Evolution",
<<<<<<< HEAD
=======
    highlight: "Evolution",
>>>>>>> origin/develop
    description:
      "Supporting products beyond launch through iteration, optimization, scaling, and continuous development.",
    imagePath: "/images/home/full-spectrum/launch.jpg",
  },
  {
    number: "06",
    name: "Intelligence & Automation",
<<<<<<< HEAD
=======
    highlight: "Automation",
>>>>>>> origin/develop
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
<<<<<<< HEAD
      className="bg-[#f7f7f2] px-6 py-20 text-[#171817] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 border-b border-[#171817]/15 pb-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.72fr)] lg:gap-20 lg:pb-20">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
              How We Create
            </p>
            <h2
              id="full-spectrum-title"
              className="mt-7 max-w-4xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]"
            >
              From ideas to
              <span className="block text-[#e35d3f]">technology at scale.</span>
            </h2>
          </div>

          <p className="max-w-xl self-end font-sans text-lg leading-8 text-[#171817]/68 sm:text-xl sm:leading-9 motion-safe:animate-[hero-rise_800ms_220ms_ease-out_both]">
            Technology is rarely just one thing. We bring together strategy,
            product thinking, design, engineering, infrastructure, and
            intelligent systems to solve complex problems from end to end.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.42fr)] lg:gap-16 lg:pt-16">
          <ol aria-label="Technology lifecycle" className="relative">
            <span
              aria-hidden="true"
              className="absolute bottom-10 left-[1.15rem] top-10 hidden w-px bg-[#171817]/12 sm:block"
            />
            {lifecycleStages.map((stage, index) => (
              <LifecycleItem
                isActive={stage.name === activeStage.name}
                key={stage.name}
                onActivate={() => setActiveStage(stage)}
                stage={stage}
                stagger={index}
              />
            ))}
          </ol>

          <LifecycleVisual stage={activeStage} />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-[#171817]/15 pt-8 lg:mt-24 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <p className="max-w-3xl font-serif text-[clamp(2.4rem,5vw,5.5rem)] leading-[0.96] tracking-[-0.04em] text-[#171817] motion-safe:animate-[hero-rise_800ms_220ms_ease-out_both]">
            One team. Multiple disciplines.
            <span className="block text-[#171817]/55">Built around the problem.</span>
          </p>

          <Link
            className="inline-flex min-h-12 w-fit items-center justify-center bg-[#171817] px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817] motion-safe:animate-[hero-rise_800ms_320ms_ease-out_both]"
            href="/company/how-we-work"
          >
            Explore How We Work
            <span aria-hidden="true" className="ml-8 text-lg leading-none">
              &rarr;
            </span>
          </Link>
        </div>
=======
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

>>>>>>> origin/develop
      </div>
    </section>
  );
}
<<<<<<< HEAD

function LifecycleItem({
  isActive,
  onActivate,
  stage,
  stagger,
}: {
  isActive: boolean;
  onActivate: () => void;
  stage: LifecycleStage;
  stagger: number;
}) {
  return (
    <li
      className="relative motion-safe:animate-[hero-rise_800ms_ease-out_both]"
      style={{ animationDelay: `${260 + stagger * 80}ms` }}
    >
      <button
        className="group grid w-full grid-cols-1 gap-5 border-b border-[#171817]/12 py-8 text-left outline-none transition-colors hover:bg-[#171817]/[0.035] focus-visible:bg-[#171817]/[0.045] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#e35d3f] sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-8 sm:pl-20 lg:px-5 lg:pl-24"
        onClick={onActivate}
        onFocus={onActivate}
        onMouseEnter={onActivate}
        type="button"
      >
        <span
          aria-hidden="true"
          className={`absolute left-[0.58rem] top-10 hidden h-5 w-5 border transition-colors sm:block ${
            isActive
              ? "border-[#e35d3f] bg-[#e35d3f]"
              : "border-[#171817]/22 bg-[#f7f7f2]"
          }`}
        />
        <span
          className={`font-sans text-xs font-semibold uppercase tracking-[0.24em] transition-colors ${
            isActive ? "text-[#e35d3f]" : "text-[#171817]/42"
          }`}
        >
          {stage.number}
        </span>

        <span className="block">
          <span
            className={`block font-serif text-[clamp(2rem,4.6vw,4.65rem)] leading-[0.98] tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2 ${
              isActive ? "text-[#171817]" : "text-[#171817]/78"
            }`}
          >
            {stage.name}
          </span>
          <span
            className={`mt-4 block max-w-2xl font-sans text-sm leading-7 transition-colors sm:text-base sm:leading-8 ${
              isActive ? "text-[#171817]/72" : "text-[#171817]/52"
            }`}
          >
            {stage.description}
          </span>
        </span>
      </button>
    </li>
  );
}

function LifecycleVisual({ stage }: { stage: LifecycleStage }) {
  return (
    <aside
      aria-label={`${stage.name} lifecycle visual`}
      className="relative min-h-[20rem] overflow-hidden bg-[#17211f] text-[#f7f7f2] motion-safe:animate-[hero-reveal_1000ms_220ms_ease-out_both] sm:min-h-[27rem] lg:sticky lg:top-10 lg:min-h-[36rem]"
      data-image-path={stage.imagePath}
      key={stage.name}
      style={{
        backgroundImage: `linear-gradient(145deg, rgba(23, 33, 31, 0.14), rgba(23, 33, 31, 0.9)), url("${stage.imagePath}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(247,247,242,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.12)_1px,transparent_1px)] [background-size:3rem_3rem]" />
      <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 border border-[#f7f7f2]/24 sm:h-72 sm:w-72" />
      <div className="absolute left-1/2 top-1/2 h-24 w-px -translate-y-1/2 bg-[#f7f7f2]/24" />
      <div className="absolute left-1/2 top-1/2 h-px w-24 -translate-x-1/2 bg-[#f7f7f2]/24" />
      <div className="absolute bottom-14 right-10 h-28 w-28 border-[1.5rem] border-[#e35d3f] opacity-90 sm:h-40 sm:w-40" />

      <div className="absolute inset-x-7 top-7 flex items-center justify-between border-t border-[#f7f7f2]/30 pt-4 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[#f7f7f2]/70 sm:inset-x-9 sm:top-9">
        <span>{stage.number}</span>
        <span>Lifecycle system</span>
      </div>

      <div className="absolute inset-x-7 bottom-7 font-sans sm:inset-x-9 sm:bottom-9">
        <p className="max-w-xs text-[0.62rem] font-semibold uppercase leading-5 tracking-[0.22em] text-[#f7f7f2]/60">
          {stage.name}
        </p>
        <p className="mt-3 max-w-sm text-xs leading-5 text-[#f7f7f2]/78">
          {stage.description}
        </p>
      </div>
    </aside>
  );
}
=======
>>>>>>> origin/develop
