"use client";

import Link from "next/link";
import { useState } from "react";

type LifecycleStage = {
  description: string;
  imagePath: string;
  name: string;
  number: string;
};

const lifecycleStages: LifecycleStage[] = [
  {
    number: "01",
    name: "Strategy & Discovery",
    description:
      "Understanding opportunities, defining problems, and creating the foundation for what comes next.",
    imagePath: "/images/home/full-spectrum/strategy.jpg",
  },
  {
    number: "02",
    name: "Product & Experience",
    description:
      "Turning ideas into meaningful product experiences through product thinking, UX, and design.",
    imagePath: "/images/home/full-spectrum/product.jpg",
  },
  {
    number: "03",
    name: "Design & Engineering",
    description:
      "Building reliable software, applications, platforms, APIs, and digital systems.",
    imagePath: "/images/home/full-spectrum/engineering.jpg",
  },
  {
    number: "04",
    name: "Infrastructure & Integration",
    description:
      "Creating the technical foundations, cloud environments, integrations, and systems needed to operate reliably.",
    imagePath: "/images/home/full-spectrum/infrastructure.jpg",
  },
  {
    number: "05",
    name: "Launch & Evolution",
    description:
      "Supporting products beyond launch through iteration, optimization, scaling, and continuous development.",
    imagePath: "/images/home/full-spectrum/launch.jpg",
  },
  {
    number: "06",
    name: "Intelligence & Automation",
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
      </div>
    </section>
  );
}

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
      aria-label={`${stage.name} lifecycle visual placeholder`}
      className="relative min-h-[20rem] overflow-hidden bg-[#17211f] text-[#f7f7f2] motion-safe:animate-[hero-reveal_1000ms_220ms_ease-out_both] sm:min-h-[27rem] lg:sticky lg:top-10 lg:min-h-[36rem]"
      data-image-path={stage.imagePath}
      key={stage.name}
      style={{
        backgroundImage: `linear-gradient(145deg, rgba(23, 33, 31, 0.14), rgba(23, 33, 31, 0.9)), url(${stage.imagePath})`,
        backgroundPosition: "center",
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
          Replace image at
        </p>
        <p className="mt-3 max-w-sm break-words text-xs leading-5 text-[#f7f7f2]/78">
          {stage.imagePath}
        </p>
      </div>
    </aside>
  );
}
