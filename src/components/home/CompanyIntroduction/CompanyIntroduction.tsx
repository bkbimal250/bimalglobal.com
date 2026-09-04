import Link from "next/link";

import { CompanyVisual } from "./CompanyVisual";

const approach = ["Strategy", "Design", "Engineering", "Technology"];

export function CompanyIntroduction() {
  return (
    <section
      id="company"
      aria-labelledby="company-introduction-title"
      className="relative bg-[#f7f7f2] px-6 py-20 text-[#171817] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(24rem,0.8fr)] lg:gap-20 xl:gap-28">
        <div className="lg:pt-3">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
            About Bimal Global
          </p>
          <h2
            id="company-introduction-title"
            className="mt-7 max-w-5xl font-serif text-[clamp(3rem,7vw,7.5rem)] leading-[0.92] tracking-[-0.045em] text-[#171817] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]"
          >
            We build technology
            <span className="block text-[#e35d3f]">that moves businesses forward.</span>
          </h2>
        </div>

        <div className="flex flex-col justify-between gap-10 lg:pt-24">
          <div className="motion-safe:animate-[hero-rise_800ms_220ms_ease-out_both]">
            <p className="max-w-xl font-sans text-lg leading-8 text-[#171817]/70 sm:text-xl sm:leading-9">
              Bimal Global brings together strategy, design, engineering, and
              technology to create digital products, platforms, and systems
              built for a rapidly changing world.
            </p>
            <p className="mt-8 max-w-lg border-l border-[#171817]/25 pl-6 font-sans text-sm font-semibold uppercase leading-7 tracking-[0.16em] text-[#171817]/60">
              From early ideas to complex digital systems, we work across the
              full technology lifecycle.
            </p>
          </div>

          <Link
            href="/company"
            className="inline-flex min-h-12 w-fit items-center justify-center bg-[#171817] px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817] motion-safe:animate-[hero-rise_800ms_320ms_ease-out_both]"
          >
            Discover Bimal Global
            <span aria-hidden="true" className="ml-8 text-lg leading-none">&rarr;</span>
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-16 grid w-full max-w-[1440px] grid-cols-1 gap-8 lg:mt-24 lg:grid-cols-[minmax(18rem,0.62fr)_minmax(0,1fr)] lg:items-end">
        <div className="order-2 flex flex-wrap gap-x-6 gap-y-3 border-t border-[#171817]/15 pt-5 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#171817]/50 lg:order-1">
          {approach.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="order-1 lg:order-2">
          <CompanyVisual />
        </div>
      </div>
    </section>
  );
}
