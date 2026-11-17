<<<<<<< HEAD
import { CapabilitiesOverview } from "../CapabilitiesOverview/CapabilitiesOverview";
import { Careers } from "../Careers/Careers";
=======

"use client";

import { useEffect, useState } from "react";

import { CapabilitiesOverview } from "../CapabilitiesOverview/CapabilitiesOverview";

>>>>>>> origin/develop
import { CompanyIntroduction } from "../CompanyIntroduction/CompanyIntroduction";
import { FullSpectrumSolutions } from "../FullSpectrumSolutions/FullSpectrumSolutions";
import { GlobalPresence } from "../GlobalPresence/GlobalPresence";
import { HowWeWork } from "../HowWeWork/HowWeWork";
import { Insights } from "../Insights/Insights";
import { Leadership } from "../Leadership/Leadership";
import { SelectedWork } from "../SelectedWork/SelectedWork";

const heroImagePath = "/images/home/hero-placeholder.jpg";

<<<<<<< HEAD
export function Hero() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f7f2] text-[#171817]">
      <section
        aria-labelledby="hero-title"
        className="relative isolate flex min-h-screen flex-col bg-cover bg-center px-6 py-24 sm:px-10 sm:py-28 lg:px-16 lg:py-32"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(247, 247, 242, 0.98) 0%, rgba(247, 247, 242, 0.86) 34%, rgba(247, 247, 242, 0.12) 68%, rgba(247, 247, 242, 0.02) 100%), url(${heroImagePath})`,
        }}
      >
        <div className="relative z-10 flex flex-1 items-center py-10 sm:py-12 lg:py-14">
          <div className="w-full max-w-[1440px]">
            <div className="max-w-3xl">
              <p className="motion-safe:animate-[hero-rise_700ms_ease-out_both] font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
                Global technology company
              </p>
              <h1
                id="hero-title"
                className="mt-7 max-w-4xl font-serif text-[clamp(3.5rem,8vw,8.75rem)] leading-[0.9] tracking-[-0.045em] text-[#171817] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]"
              >
                Building technology
                <span className="block text-[#e35d3f]">for what comes next.</span>
              </h1>
              <p className="mt-9 max-w-xl font-sans text-base leading-7 text-[#171817]/65 sm:text-lg sm:leading-8 motion-safe:animate-[hero-rise_800ms_220ms_ease-out_both]">
                Bimal Global designs, engineers, and scales digital products,
                platforms, and intelligent systems for businesses and
                organizations around the world.
              </p>
              <div className="mt-10 flex flex-col gap-3 font-sans text-sm font-semibold sm:flex-row motion-safe:animate-[hero-rise_800ms_320ms_ease-out_both]">
                <a
                  href="#capabilities"
                  className="inline-flex min-h-12 items-center justify-center bg-[#171817] px-6 text-[#f7f7f2] transition-colors hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
                >
                  Explore Capabilities
                  <span aria-hidden="true" className="ml-8 text-lg leading-none">↗</span>
                </a>
                <a
                  href="#company"
                  className="inline-flex min-h-12 items-center justify-center border border-[#171817]/25 px-6 text-[#171817] transition-colors hover:border-[#171817] hover:bg-[#171817]/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
                >
                  Our Company
                  <span aria-hidden="true" className="ml-8 text-lg leading-none">↗</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        <footer className="relative z-10 flex items-end justify-between border-t border-[#171817]/15 pt-5 font-sans text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[#171817]/50 motion-safe:animate-[hero-rise_800ms_420ms_ease-out_both]">
          <span>Independent technology partner</span>
          <span>01 / 05</span>
        </footer>
      </section>
      <CompanyIntroduction />
      <CapabilitiesOverview />
      <FullSpectrumSolutions />
      <HowWeWork />
      <SelectedWork />
      <GlobalPresence />
      <Leadership />
      <Insights />
      <Careers />
=======
const slides = [
  {
    eyebrow: "Connecting Possibilities",
    title: "Building technology",
    highlight: "for what comes next.",
    description:
      "Bimal Global designs, engineers, and scales digital products, platforms, and intelligent systems for businesses and organizations around the world.",
    label: "Technology & Innovation",
  },
  {
    eyebrow: "Global Vision. Local Impact.",
    title: "Creating connections",
    highlight: "that move the world.",
    description:
      "We bring people, ideas, businesses and opportunities together through forward-thinking solutions and meaningful global partnerships.",
    label: "Global Connectivity",
  },
  {
    eyebrow: "Innovation Without Boundaries",
    title: "Turning possibilities",
    highlight: "into lasting impact.",
    description:
      "With a commitment to innovation, collaboration and excellence, Bimal Global helps transform ambitious ideas into meaningful opportunities.",
    label: "Future & Growth",
  },
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[activeSlide];

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F5F0] text-[#17201F]">

      {/* ================= HERO SLIDER ================= */}

      <section
        aria-label="Bimal Global introduction"
        aria-roledescription="carousel"
        className="relative isolate flex min-h-[750px] flex-col overflow-hidden bg-cover bg-center px-6 pb-16 pt-36 sm:px-10 sm:pb-20 sm:pt-40 lg:min-h-[800px] lg:px-16 lg:pb-24 lg:pt-44"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(247,245,240,0.98) 0%,
              rgba(247,245,240,0.94) 34%,
              rgba(247,245,240,0.68) 62%,
              rgba(247,245,240,0.12) 100%
            ),
            url(${heroImagePath})
          `,
        }}
      >

        {/* Decorative Elements */}

        <div className="pointer-events-none absolute -right-32 top-10 h-[550px] w-[550px] rounded-full border border-[#DC5235]/10" />

        <div className="pointer-events-none absolute -right-16 top-28 h-[400px] w-[400px] rounded-full border border-[#DC5235]/10" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1500px] flex-1 flex-col justify-center">

          <div className="max-w-4xl">

            {/* Eyebrow */}

            <div className="mb-8 flex items-center gap-4">

              <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-[#DC5235]">
                {currentSlide.eyebrow}
              </p>
            </div>

            {/* SLIDE CONTENT */}

            <div
              key={activeSlide}
              aria-live="polite"
              aria-atomic="true"
              className="motion-safe:animate-[hero-slide-in_800ms_ease-out_both]"
            >

              {/* Heading */}

              <h1 className="max-w-5xl font-serif text-[clamp(2.75rem,5.8vw,5.5rem)] font-medium leading-[1.08] tracking-[-0.055em] text-[#17201F]">

                {currentSlide.title}

                <span className="mt-2 block text-[#DC5235]">
                  {currentSlide.highlight}
                </span>

              </h1>

              {/* Description */}

              <p className="mt-8 max-w-2xl font-sans text-base leading-8 text-[#53615D] sm:text-lg sm:leading-9">
                {currentSlide.description}
              </p>

            </div>

            {/* CTA BUTTONS */}

            <div className="mt-10 flex flex-col gap-4 font-sans text-sm font-semibold sm:flex-row">

              <a
                href="#capabilities"
                className="group inline-flex min-h-[58px] items-center justify-center gap-8 bg-[#DC5235] px-7 text-white shadow-[0_12px_30px_rgba(220,82,53,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C94328] hover:shadow-[0_16px_35px_rgba(220,82,53,0.25)]"
              >
                Explore Capabilities

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

              <a
                href="#company"
                className="group inline-flex min-h-[58px] items-center justify-center gap-8 border border-[#17201F]/25 px-7 text-[#17201F] transition-all duration-300 hover:border-[#17201F] hover:bg-[#17201F] hover:text-white"
              >
                Our Company

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

            </div>

   

          </div>

        </div>

        {/* BOTTOM FOOTER */}

        <footer className="relative z-10 mx-auto mt-16 flex w-full max-w-[1500px] flex-wrap items-center justify-between gap-4 border-t border-[#17201F]/15 pt-6 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#17201F]/55">

          <span>
            Bimal Global — Connecting Possibilities
          </span>

          <span>
            {currentSlide.label}
          </span>

        </footer>

      </section>

      {/* ================= HOMEPAGE SECTIONS ================= */}

      <CompanyIntroduction />

      <CapabilitiesOverview />

      <FullSpectrumSolutions />

      <HowWeWork />



      <GlobalPresence />

      <Leadership />

      <Insights />



>>>>>>> origin/develop
    </main>
  );
}
