import { CapabilitiesOverview } from "../CapabilitiesOverview/CapabilitiesOverview";
import { Careers } from "../Careers/Careers";
import { CompanyIntroduction } from "../CompanyIntroduction/CompanyIntroduction";
import { FullSpectrumSolutions } from "../FullSpectrumSolutions/FullSpectrumSolutions";
import { GlobalPresence } from "../GlobalPresence/GlobalPresence";
import { HowWeWork } from "../HowWeWork/HowWeWork";
import { Insights } from "../Insights/Insights";
import { Leadership } from "../Leadership/Leadership";
import { SelectedWork } from "../SelectedWork/SelectedWork";

const heroImagePath = "/images/home/hero-placeholder.jpg";

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
    </main>
  );
}
