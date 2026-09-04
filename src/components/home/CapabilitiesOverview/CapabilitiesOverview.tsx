"use client";

import Link from "next/link";
import { useState } from "react";

type Capability = {
  description: string;
  href: string;
  imagePath: string;
  name: string;
  number: string;
};

const capabilities: Capability[] = [
  {
    number: "01",
    name: "Software Engineering",
    description:
      "Designing and engineering scalable software systems, platforms, applications, APIs, and digital infrastructure built for long-term growth.",
    href: "/capabilities/software-engineering",
    imagePath: "/images/home/capabilities/software-engineering.jpg",
  },
  {
    number: "02",
    name: "Product Development",
    description:
      "Taking ideas from strategy and discovery through design, engineering, launch, and continuous product evolution.",
    href: "/capabilities/product-development",
    imagePath: "/images/home/capabilities/product-development.jpg",
  },
  {
    number: "03",
    name: "Mobile Platforms",
    description:
      "Creating reliable, intuitive, and scalable mobile experiences for consumers, teams, and connected businesses.",
    href: "/capabilities/mobile-platforms",
    imagePath: "/images/home/capabilities/mobile-platforms.jpg",
  },
  {
    number: "04",
    name: "Cloud & Infrastructure",
    description:
      "Building reliable cloud foundations, infrastructure, deployment systems, and technology environments designed to perform at scale.",
    href: "/capabilities/cloud-infrastructure",
    imagePath: "/images/home/capabilities/cloud-infrastructure.jpg",
  },
  {
    number: "05",
    name: "Artificial Intelligence",
    description:
      "Applying intelligent technologies, automation, machine learning, and AI systems to create new possibilities for businesses and products.",
    href: "/capabilities/artificial-intelligence",
    imagePath: "/images/home/capabilities/artificial-intelligence.jpg",
  },
];

export function CapabilitiesOverview() {
  const [activeCapability, setActiveCapability] = useState(capabilities[0]);

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-overview-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 border-b border-[#f7f7f2]/15 pb-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.72fr)] lg:gap-20 lg:pb-20">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
              Our Capabilities
            </p>
            <h2
              id="capabilities-overview-title"
              className="mt-7 max-w-4xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]"
            >
              Technology built
              <span className="block text-[#e35d3f]">to move forward.</span>
            </h2>
          </div>

          <p className="max-w-xl self-end font-sans text-lg leading-8 text-[#f7f7f2]/68 sm:text-xl sm:leading-9 motion-safe:animate-[hero-rise_800ms_220ms_ease-out_both]">
            From complex software systems to intelligent digital products, we
            bring together the capabilities needed to design, build, launch, and
            scale technology.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(21rem,0.42fr)] lg:gap-16 lg:pt-16">
          <ul aria-label="Bimal Global capabilities" className="divide-y divide-[#f7f7f2]/14">
            {capabilities.map((capability, index) => (
              <CapabilityItem
                capability={capability}
                isActive={capability.href === activeCapability.href}
                key={capability.href}
                onActivate={() => setActiveCapability(capability)}
                stagger={index}
              />
            ))}
          </ul>

          <CapabilityVisual capability={activeCapability} />
        </div>
      </div>
    </section>
  );
}

function CapabilityItem({
  capability,
  isActive,
  onActivate,
  stagger,
}: {
  capability: Capability;
  isActive: boolean;
  onActivate: () => void;
  stagger: number;
}) {
  return (
    <li
      className="motion-safe:animate-[hero-rise_800ms_ease-out_both]"
      style={{ animationDelay: `${260 + stagger * 80}ms` }}
    >
      <Link
        aria-label={`Explore ${capability.name}`}
        className="group grid gap-5 py-8 outline-none transition-colors hover:bg-[#f7f7f2]/[0.035] focus-visible:bg-[#f7f7f2]/[0.055] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#e35d3f] sm:grid-cols-[4.5rem_minmax(0,1fr)_2rem] sm:gap-8 sm:py-9 lg:px-5"
        href={capability.href}
        onFocus={onActivate}
        onMouseEnter={onActivate}
      >
        <span
          className={`font-sans text-xs font-semibold uppercase tracking-[0.24em] transition-colors ${
            isActive ? "text-[#e35d3f]" : "text-[#f7f7f2]/42"
          }`}
        >
          {capability.number}
        </span>

        <span className="block">
          <span
            className={`block font-serif text-[clamp(2.15rem,5.3vw,5rem)] leading-[0.96] tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2 ${
              isActive ? "text-[#f7f7f2]" : "text-[#f7f7f2]/84"
            }`}
          >
            {capability.name}
          </span>
          <span
            className={`mt-4 block max-w-2xl font-sans text-sm leading-7 transition-colors sm:text-base sm:leading-8 ${
              isActive ? "text-[#f7f7f2]/72" : "text-[#f7f7f2]/48"
            }`}
          >
            {capability.description}
          </span>
        </span>

        <span
          aria-hidden="true"
          className={`justify-self-start font-sans text-2xl leading-none transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2 sm:justify-self-end ${
            isActive ? "text-[#e35d3f]" : "text-[#f7f7f2]/45"
          }`}
        >
          &rarr;
        </span>
      </Link>
    </li>
  );
}

function CapabilityVisual({ capability }: { capability: Capability }) {
  return (
    <aside
      aria-label={`${capability.name} visual placeholder`}
      className="relative min-h-[20rem] overflow-hidden bg-[#202927] motion-safe:animate-[hero-reveal_1000ms_220ms_ease-out_both] sm:min-h-[27rem] lg:sticky lg:top-10 lg:min-h-[34rem]"
      data-image-path={capability.imagePath}
      key={capability.href}
      style={{
        backgroundImage: `linear-gradient(140deg, rgba(23, 24, 23, 0.18), rgba(23, 24, 23, 0.92)), url(${capability.imagePath})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(247,247,242,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.12)_1px,transparent_1px)] [background-size:3rem_3rem]" />
      <div className="absolute -right-20 -top-20 h-56 w-56 border border-[#f7f7f2]/20 sm:h-72 sm:w-72" />
      <div className="absolute -bottom-16 left-8 h-40 w-40 border-[2rem] border-[#e35d3f] opacity-90 sm:h-56 sm:w-56" />

      <div className="absolute inset-x-7 top-7 flex items-center justify-between border-t border-[#f7f7f2]/30 pt-4 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[#f7f7f2]/70 sm:inset-x-9 sm:top-9">
        <span>{capability.number}</span>
        <span>Capability visual</span>
      </div>

      <div className="absolute inset-x-7 bottom-7 font-sans sm:inset-x-9 sm:bottom-9">
        <p className="max-w-xs text-[0.62rem] font-semibold uppercase leading-5 tracking-[0.22em] text-[#f7f7f2]/60">
          Replace image at
        </p>
        <p className="mt-3 max-w-sm break-words text-xs leading-5 text-[#f7f7f2]/78">
          {capability.imagePath}
        </p>
      </div>
    </aside>
  );
}
