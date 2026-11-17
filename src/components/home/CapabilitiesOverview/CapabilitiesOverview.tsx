
"use client";

import Link from "next/link";
import { useState } from "react";

type Capability = {
  description: string;
  href: string;
  imagePath: string;
  name: string;
  number: string;
  highlight: string;
};

const capabilities: Capability[] = [
  {
    number: "01",
    name: "Software Engineering",
    highlight: "Engineering",
    description:
      "Designing and engineering scalable software systems, platforms, applications, APIs, and digital infrastructure built for long-term growth.",
    href: "/capabilities/software-engineering",
    imagePath: "/images/capabilities/1.png",
  },
  {
    number: "02",
    name: "Product Development",
    highlight: "Development",
    description:
      "Taking ideas from strategy and discovery through design, engineering, launch, and continuous product evolution.",
    href: "/capabilities/product-development",
    imagePath: "/images/capabilities/2.png",
  },
  {
    number: "03",
    name: "Mobile Platforms",
    highlight: "Platforms",
    description:
      "Creating reliable, intuitive, and scalable mobile experiences for consumers, teams, and connected businesses.",
    href: "/capabilities/mobile-platforms",
    imagePath: "/images/capabilities/3.png",
  },
  {
    number: "04",
    name: "Cloud & Infrastructure",
    highlight: "Infrastructure",
    description:
      "Building reliable cloud foundations, infrastructure, deployment systems, and technology environments designed to perform at scale.",
    href: "/capabilities/cloud-infrastructure",
    imagePath: "/images/capabilities/4.png",
  },
  {
    number: "05",
    name: "Artificial Intelligence",
    highlight: "Intelligence",
    description:
      "Applying intelligent technologies, automation, machine learning, and AI systems to create new possibilities for businesses and products.",
    href: "/capabilities/artificial-intelligence",
    imagePath: "/images/capabilities/5.png",
  },
];

export function CapabilitiesOverview() {
  const [activeCapability, setActiveCapability] = useState(capabilities[0]);

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-overview-title"
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

      </div>
    </section>
  );
}
