import Link from "next/link";

import { presenceLocations } from "@/content/offices";

const globalVisualPath = "/images/home/presence/global-presence.jpg";

export function GlobalPresence() {
  return (
    <section
      id="global-presence"
      aria-labelledby="global-presence-title"
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 border-b border-[#f7f7f2]/15 pb-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.72fr)] lg:gap-20 lg:pb-20">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
              Our Presence
            </p>
            <h2
              id="global-presence-title"
              className="mt-7 max-w-4xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]"
            >
              Built across borders.
              <span className="block text-[#e35d3f]">Thinking globally.</span>
            </h2>
          </div>

          <p className="max-w-xl self-end font-sans text-lg leading-8 text-[#f7f7f2]/68 sm:text-xl sm:leading-9 motion-safe:animate-[hero-rise_800ms_220ms_ease-out_both]">
            With teams and operations across India and Nepal, Bimal Global
            brings together regional presence with a global approach to
            technology, product, and engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.42fr)] lg:gap-16 lg:pt-16">
          <PresenceVisual />

          <div className="flex flex-col justify-between gap-10">
            <div className="motion-safe:animate-[hero-rise_800ms_260ms_ease-out_both]">
              <p className="max-w-xl font-serif text-[clamp(2.6rem,5.6vw,5.75rem)] leading-[0.94] tracking-[-0.045em]">
                Rooted in India and Nepal.
                <span className="block text-[#f7f7f2]/55">Built for a global future.</span>
              </p>
              <p className="mt-8 max-w-md border-l border-[#f7f7f2]/18 pl-6 font-sans text-sm font-semibold uppercase leading-7 tracking-[0.16em] text-[#f7f7f2]/58">
                Local presence.
                <span className="block text-[#f7f7f2]/80">Global perspective.</span>
              </p>
            </div>

            <ul className="divide-y divide-[#f7f7f2]/14 border-y border-[#f7f7f2]/14">
              {presenceLocations.map((location, index) => (
                <LocationItem
                  key={location.country}
                  location={location}
                  stagger={index}
                />
              ))}
            </ul>

            <Link
              className="inline-flex min-h-12 w-fit items-center justify-center border border-[#f7f7f2]/28 px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:border-[#e35d3f] hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f] motion-safe:animate-[hero-rise_800ms_420ms_ease-out_both]"
              href="/contact"
            >
              Connect With Us
              <span aria-hidden="true" className="ml-8 text-lg leading-none">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PresenceVisual() {
  return (
    <div
      aria-label="Abstract global presence visual"
      className="relative min-h-[24rem] overflow-hidden bg-[#202927] text-[#f7f7f2] motion-safe:animate-[hero-reveal_1000ms_220ms_ease-out_both] sm:min-h-[34rem] lg:min-h-[45rem]"
      data-image-path={globalVisualPath}
      role="img"
      style={{
        backgroundImage: `linear-gradient(145deg, rgba(23, 24, 23, 0.08), rgba(23, 24, 23, 0.92)), url(${globalVisualPath})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(247,247,242,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.12)_1px,transparent_1px)] [background-size:3rem_3rem]" />
      <div className="absolute left-1/2 top-1/2 h-[17rem] w-[17rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f7f7f2]/22 sm:h-[25rem] sm:w-[25rem]" />
      <div className="absolute left-1/2 top-1/2 h-[11rem] w-[11rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f7f7f2]/16 sm:h-[17rem] sm:w-[17rem]" />
      <div className="absolute left-[36%] top-[49%] h-px w-[28%] rotate-[-10deg] bg-[#f7f7f2]/28" />
      <span className="absolute left-[35%] top-[48%] h-4 w-4 bg-[#e35d3f]" />
      <span className="absolute left-[63%] top-[42%] h-3 w-3 bg-[#e35d3f]" />
      <div className="absolute bottom-16 right-10 h-32 w-32 border-[1.5rem] border-[#e35d3f] opacity-90 sm:h-44 sm:w-44" />

      <div className="absolute inset-x-7 top-7 flex items-center justify-between border-t border-[#f7f7f2]/30 pt-4 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[#f7f7f2]/70 sm:inset-x-9 sm:top-9">
        <span>India / Nepal</span>
        <span>Global outlook</span>
      </div>

      <div className="absolute inset-x-7 bottom-7 font-sans sm:inset-x-9 sm:bottom-9">
        <p className="max-w-xs text-[0.62rem] font-semibold uppercase leading-5 tracking-[0.22em] text-[#f7f7f2]/60">
          Optional global visual
        </p>
        <p className="mt-3 max-w-sm break-words text-xs leading-5 text-[#f7f7f2]/78">
          {globalVisualPath}
        </p>
      </div>
    </div>
  );
}

function LocationItem({
  location,
  stagger,
}: {
  location: (typeof presenceLocations)[number];
  stagger: number;
}) {
  return (
    <li
      className="motion-safe:animate-[hero-rise_800ms_ease-out_both]"
      style={{ animationDelay: `${320 + stagger * 90}ms` }}
    >
      <div
        className="group grid gap-5 py-8 outline-none transition-colors hover:bg-[#f7f7f2]/[0.035] focus-within:bg-[#f7f7f2]/[0.055] sm:grid-cols-[minmax(0,0.55fr)_minmax(14rem,0.7fr)] sm:gap-8 lg:px-5"
        data-image-path={location.imagePath}
      >
        <div>
          <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#e35d3f]">
            {location.country}
          </p>
          <p className="mt-4 font-serif text-[clamp(2.4rem,5.2vw,5rem)] leading-[0.96] tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-2">
            {location.country}
          </p>
        </div>

        <p className="max-w-md self-end font-sans text-sm leading-7 text-[#f7f7f2]/62 sm:text-base sm:leading-8">
          {location.status}.
        </p>
      </div>
    </li>
  );
}
