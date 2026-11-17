<<<<<<< HEAD
=======

>>>>>>> origin/develop
"use client";

import Link from "next/link";
import { useState } from "react";

type Capability = {
  description: string;
  href: string;
  imagePath: string;
  name: string;
  number: string;
<<<<<<< HEAD
=======
  highlight: string;
>>>>>>> origin/develop
};

const capabilities: Capability[] = [
  {
    number: "01",
    name: "Software Engineering",
<<<<<<< HEAD
    description:
      "Designing and engineering scalable software systems, platforms, applications, APIs, and digital infrastructure built for long-term growth.",
    href: "/capabilities/software-engineering",
    imagePath: "/images/home/capabilities/software-engineering.jpg",
=======
    highlight: "Engineering",
    description:
      "Designing and engineering scalable software systems, platforms, applications, APIs, and digital infrastructure built for long-term growth.",
    href: "/capabilities/software-engineering",
    imagePath: "/images/capabilities/1.png",
>>>>>>> origin/develop
  },
  {
    number: "02",
    name: "Product Development",
<<<<<<< HEAD
    description:
      "Taking ideas from strategy and discovery through design, engineering, launch, and continuous product evolution.",
    href: "/capabilities/product-development",
    imagePath: "/images/home/capabilities/product-development.jpg",
=======
    highlight: "Development",
    description:
      "Taking ideas from strategy and discovery through design, engineering, launch, and continuous product evolution.",
    href: "/capabilities/product-development",
    imagePath: "/images/capabilities/2.png",
>>>>>>> origin/develop
  },
  {
    number: "03",
    name: "Mobile Platforms",
<<<<<<< HEAD
    description:
      "Creating reliable, intuitive, and scalable mobile experiences for consumers, teams, and connected businesses.",
    href: "/capabilities/mobile-platforms",
    imagePath: "/images/home/capabilities/mobile-platforms.jpg",
=======
    highlight: "Platforms",
    description:
      "Creating reliable, intuitive, and scalable mobile experiences for consumers, teams, and connected businesses.",
    href: "/capabilities/mobile-platforms",
    imagePath: "/images/capabilities/3.png",
>>>>>>> origin/develop
  },
  {
    number: "04",
    name: "Cloud & Infrastructure",
<<<<<<< HEAD
    description:
      "Building reliable cloud foundations, infrastructure, deployment systems, and technology environments designed to perform at scale.",
    href: "/capabilities/cloud-infrastructure",
    imagePath: "/images/home/capabilities/cloud-infrastructure.jpg",
=======
    highlight: "Infrastructure",
    description:
      "Building reliable cloud foundations, infrastructure, deployment systems, and technology environments designed to perform at scale.",
    href: "/capabilities/cloud-infrastructure",
    imagePath: "/images/capabilities/4.png",
>>>>>>> origin/develop
  },
  {
    number: "05",
    name: "Artificial Intelligence",
<<<<<<< HEAD
    description:
      "Applying intelligent technologies, automation, machine learning, and AI systems to create new possibilities for businesses and products.",
    href: "/capabilities/artificial-intelligence",
    imagePath: "/images/home/capabilities/artificial-intelligence.jpg",
=======
    highlight: "Intelligence",
    description:
      "Applying intelligent technologies, automation, machine learning, and AI systems to create new possibilities for businesses and products.",
    href: "/capabilities/artificial-intelligence",
    imagePath: "/images/capabilities/5.png",
>>>>>>> origin/develop
  },
];

export function CapabilitiesOverview() {
  const [activeCapability, setActiveCapability] = useState(capabilities[0]);

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-overview-title"
<<<<<<< HEAD
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
=======
      className="relative overflow-hidden bg-[#0D1514] px-5 py-20 text-white sm:px-10 sm:py-24 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* SECTION HEADER */}

        <div className="mb-14 grid grid-cols-1 gap-6 border-b border-white/10 pb-9 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-16">

          <div>
            <div className="mb-5 flex items-center gap-3">

              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#DC5235]">
                What We Do
              </p>
            </div>

            <h2
              id="capabilities-overview-title"
              className="max-w-2xl font-serif text-[clamp(2.125rem,4vw,4rem)] leading-[1.08] tracking-[-0.045em] text-white"
            >
              Our capabilities,

              <span className="block text-[#DC5235]">
                your next advantage.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-[#D5DEDA]/65 sm:text-base sm:leading-8 lg:pb-1">
            We combine technology, expertise and creative thinking
            to develop digital solutions that help businesses
            innovate, adapt and grow with confidence.
          </p>

        </div>

        {/* CAPABILITIES CONTENT */}

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">

          {/* LEFT CAPABILITY LIST */}

          <div>

            <div className="mb-5 flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Our Expertise
              </p>

              <p className="text-[11px] uppercase tracking-[0.16em] text-white/40">
                05 Capabilities
              </p>
            </div>

            <div className="border-t border-white/15">

              {capabilities.map((capability) => {
                const isActive =
                  activeCapability.href === capability.href;

                return (
                  <Link
                    key={capability.href}
                    href={capability.href}
                    onMouseEnter={() =>
                      setActiveCapability(capability)
                    }
                    onFocus={() =>
                      setActiveCapability(capability)
                    }
                    onClick={() =>
                      setActiveCapability(capability)
                    }
                    aria-current={isActive ? "true" : undefined}
                    className={`group relative grid grid-cols-[36px_minmax(0,1fr)_24px] items-start gap-3 border-b border-white/10 px-2 py-6 transition-all duration-300 sm:grid-cols-[48px_minmax(0,1fr)_30px] sm:gap-5 sm:py-7 ${
                      isActive
                        ? "bg-white/[0.045]"
                        : "hover:bg-white/[0.025]"
                    }`}
                  >

                    {/* Active Indicator */}

                    <span
                      className={`absolute bottom-0 left-0 top-0 w-[2px] transition-all duration-300 ${
                        isActive
                          ? "bg-[#DC5235]"
                          : "bg-transparent"
                      }`}
                    />

                    {/* Number */}

                    <span
                      className={`pt-1 text-[11px] font-semibold tracking-[0.15em] transition-colors ${
                        isActive
                          ? "text-[#DC5235]"
                          : "text-white/35"
                      }`}
                    >
                      {capability.number}
                    </span>

                    {/* Content */}

                    <span className="block min-w-0">

                      <span
                        className={`block font-serif text-[clamp(1.3rem,2.5vw,2rem)] leading-tight tracking-[-0.025em] transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : "text-white/75 group-hover:text-white"
                        }`}
                      >
                        {capability.name.split(capability.highlight)[0]}

                        <span
                          className={
                            isActive
                              ? "text-[#DC5235]"
                              : "text-white/75 group-hover:text-[#DC5235]"
                          }
                        >
                          {capability.highlight}
                        </span>
                      </span>

                      <span
                        className={`mt-2 block max-w-xl text-xs leading-6 transition-colors duration-300 sm:text-sm ${
                          isActive
                            ? "text-white/65"
                            : "text-white/40 group-hover:text-white/60"
                        }`}
                      >
                        {capability.description}
                      </span>

                    </span>

                    {/* Arrow */}

                    <span
                      className={`pt-1 text-xl transition-all duration-300 ${
                        isActive
                          ? "translate-x-1 text-[#DC5235]"
                          : "text-white/35 group-hover:translate-x-1 group-hover:text-[#DC5235]"
                      }`}
                    >
                      ↗
                    </span>

                  </Link>
                );
              })}

            </div>

          </div>

          {/* RIGHT IMAGE PANEL */}

          <div className="relative min-h-[380px] overflow-hidden rounded-sm bg-[#263431] sm:min-h-[480px] lg:sticky lg:top-24 lg:min-h-[570px]">

            {/* Background Image */}

            <img
              key={activeCapability.imagePath}
              src={activeCapability.imagePath}
              alt={activeCapability.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1514] via-[#0D1514]/20 to-[#0D1514]/10" />

            {/* Top Information */}

            <div className="absolute inset-x-6 top-6 flex items-center justify-between sm:inset-x-8 sm:top-8">

              <span className="border border-white/30 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                Bimal Global
              </span>

              <span className="text-xs font-semibold tracking-[0.15em] text-white/80">
                {activeCapability.number} / 05
              </span>

            </div>

            {/* Bottom Information */}

            <div className="absolute inset-x-6 bottom-7 sm:inset-x-9 sm:bottom-9">

              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.23em] text-[#F07858]">
                Our Capabilities
              </p>

              <h3 className="max-w-md font-serif text-3xl leading-tight text-white sm:text-4xl">
                {activeCapability.name}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
                {activeCapability.description}
              </p>

              <Link
                href={activeCapability.href}
                className="group mt-7 inline-flex items-center gap-5 border-b border-[#DC5235] pb-2 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:text-[#F07858]"
              >
                Explore Capability

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

          </div>

        </div>

        {/* BOTTOM LINE */}

        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40 sm:text-[11px]">
            Technology · Innovation · Excellence
          </p>

          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#DC5235]">
            Connecting Possibilities
          </span>
        </div>

>>>>>>> origin/develop
      </div>
    </section>
  );
}
<<<<<<< HEAD

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
      aria-label={`${capability.name} visual`}
      className="relative min-h-[20rem] overflow-hidden bg-[#202927] motion-safe:animate-[hero-reveal_1000ms_220ms_ease-out_both] sm:min-h-[27rem] lg:sticky lg:top-10 lg:min-h-[34rem]"
      data-image-path={capability.imagePath}
      key={capability.href}
      style={{
        backgroundImage: `linear-gradient(140deg, rgba(23, 24, 23, 0.18), rgba(23, 24, 23, 0.92)), url("${capability.imagePath}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
          {capability.name}
        </p>
        <p className="mt-3 max-w-sm text-xs leading-5 text-[#f7f7f2]/78">
          {capability.description}
        </p>
      </div>
    </aside>
  );
}
=======
>>>>>>> origin/develop
