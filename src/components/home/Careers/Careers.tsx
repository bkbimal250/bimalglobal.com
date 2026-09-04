import Link from "next/link";

import { careerAreas, jobOpenings, type CareerArea } from "@/content/careers";

const careersImagePath = "/images/home/careers/team.jpg";

export function Careers() {
  const hasOpenPositions = jobOpenings.length > 0;

  return (
    <section
      id="careers"
      aria-labelledby="careers-title"
      className="bg-[#f7f7f2] px-6 py-20 text-[#171817] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.86fr)_minmax(22rem,0.72fr)] lg:gap-20 xl:gap-28">
          <div className="flex flex-col justify-between gap-12 lg:py-3">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
                Careers
              </p>
              <h2
                id="careers-title"
                className="mt-7 max-w-4xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]"
              >
                Build what
                <span className="block text-[#e35d3f]">comes next.</span>
              </h2>
              <p className="mt-9 max-w-xl font-sans text-lg leading-8 text-[#171817]/68 sm:text-xl sm:leading-9 motion-safe:animate-[hero-rise_800ms_220ms_ease-out_both]">
                We are building a company for people who want to solve
                meaningful technology challenges, create ambitious products,
                and grow with the work they do.
              </p>
            </div>

            <div className="border-y border-[#171817]/15 py-10 motion-safe:animate-[hero-rise_800ms_300ms_ease-out_both] sm:py-12">
              <p className="max-w-3xl font-serif text-[clamp(2.25rem,4.8vw,4.75rem)] leading-[0.96] tracking-[-0.04em]">
                Good technology starts
                <span className="block text-[#171817]/55">with curious people.</span>
              </p>
              <p className="mt-7 max-w-2xl font-sans text-sm leading-7 text-[#171817]/66 sm:text-base sm:leading-8">
                We bring together people across engineering, product, design,
                infrastructure, and emerging technologies to build solutions
                for real-world challenges.
              </p>
            </div>

            <div className="flex flex-col gap-3 font-sans text-sm font-semibold sm:flex-row motion-safe:animate-[hero-rise_800ms_380ms_ease-out_both]">
              <Link
                className="inline-flex min-h-12 items-center justify-center bg-[#171817] px-6 text-[#f7f7f2] transition-colors hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
                href="/careers"
              >
                {hasOpenPositions ? "Join Us" : "Explore Careers"}
                <span aria-hidden="true" className="ml-8 text-lg leading-none">
                  &rarr;
                </span>
              </Link>
              <Link
                className="inline-flex min-h-12 items-center justify-center border border-[#171817]/25 px-6 text-[#171817] transition-colors hover:border-[#171817] hover:bg-[#171817]/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
                href="/contact"
              >
                Introduce Yourself
                <span aria-hidden="true" className="ml-8 text-lg leading-none">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>

          <CareersVisual />
        </div>

        <CareerAreas />

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-[#171817]/15 pt-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <p className="max-w-2xl font-serif text-[clamp(2.25rem,4.8vw,4.75rem)] leading-[0.96] tracking-[-0.04em] motion-safe:animate-[hero-rise_800ms_320ms_ease-out_both]">
            Different disciplines.
            <span className="block text-[#171817]/55">One shared ambition.</span>
          </p>
          <p className="max-w-md font-sans text-sm leading-7 text-[#171817]/56 sm:text-base sm:leading-8 motion-safe:animate-[hero-rise_800ms_380ms_ease-out_both]">
            Build with curiosity. Grow with the challenge. Keep the work
            connected to real products, real systems, and real people.
          </p>
        </div>
      </div>
    </section>
  );
}

function CareerAreas() {
  return (
    <div className="pt-12 lg:pt-16">
      <div className="grid grid-cols-1 border-t border-[#171817]/15 lg:grid-cols-2">
        {careerAreas.map((area, index) => (
          <CareerAreaItem area={area} index={index} key={area.name} />
        ))}
      </div>
    </div>
  );
}

function CareerAreaItem({
  area,
  index,
}: {
  area: CareerArea;
  index: number;
}) {
  return (
    <Link
      aria-label={`Explore careers in ${area.name}`}
      className="group grid gap-5 border-b border-[#171817]/15 py-7 outline-none transition-colors hover:border-[#e35d3f]/60 hover:bg-[#171817]/[0.025] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f] sm:grid-cols-[minmax(12rem,0.48fr)_minmax(0,1fr)_auto] sm:items-start sm:gap-8 sm:py-9 motion-safe:animate-[hero-rise_800ms_ease-out_both]"
      href="/careers"
      style={{ animationDelay: `${260 + index * 70}ms` }}
    >
      <h3 className="font-serif text-[clamp(2rem,4vw,4rem)] leading-none tracking-[-0.04em] transition-colors group-hover:text-[#e35d3f] group-focus-visible:text-[#e35d3f]">
        {area.name}
      </h3>
      <p className="max-w-xl font-sans text-sm leading-7 text-[#171817]/58 transition-colors group-hover:text-[#171817]/76 group-focus-visible:text-[#171817]/76 sm:text-base sm:leading-8">
        {area.description}
      </p>
      <span className="font-sans text-2xl leading-none text-[#e35d3f] transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2">
        &rarr;
      </span>
    </Link>
  );
}

function CareersVisual() {
  return (
    <aside
      aria-label="Careers visual placeholder"
      className="relative min-h-[30rem] overflow-hidden bg-[#17211f] text-[#f7f7f2] motion-safe:animate-[hero-reveal_1000ms_180ms_ease-out_both] sm:min-h-[42rem] lg:min-h-[48rem]"
      data-image-path={careersImagePath}
      role="img"
    >
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(247,247,242,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.12)_1px,transparent_1px)] [background-size:3rem_3rem]" />
      <div className="absolute left-1/2 top-1/2 h-[17rem] w-[17rem] -translate-x-1/2 -translate-y-1/2 border border-[#f7f7f2]/20 sm:h-[25rem] sm:w-[25rem]" />
      <div className="absolute bottom-16 right-10 h-32 w-32 border-[1.5rem] border-[#e35d3f] opacity-90 sm:h-44 sm:w-44" />
      <div className="absolute left-8 top-24 h-28 w-28 border border-[#e35d3f]/55 sm:left-10 sm:h-40 sm:w-40" />

      <div className="absolute inset-x-7 top-7 flex items-center justify-between border-t border-[#f7f7f2]/30 pt-4 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[#f7f7f2]/70 sm:inset-x-9 sm:top-9">
        <span>India / Nepal</span>
        <span>Global outlook</span>
      </div>

      <div className="absolute inset-x-7 bottom-7 font-sans sm:inset-x-9 sm:bottom-9">
        <p className="max-w-xs text-[0.62rem] font-semibold uppercase leading-5 tracking-[0.22em] text-[#f7f7f2]/60">
          Future team image path
        </p>
        <p className="mt-3 max-w-sm break-words text-xs leading-5 text-[#f7f7f2]/78">
          {careersImagePath}
        </p>
      </div>
    </aside>
  );
}
