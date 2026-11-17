<<<<<<< HEAD
import Link from "next/link";

import { presenceLocations } from "@/content/offices";

const globalVisualPath = "/images/home/presence/global-presence.jpg";
=======

import Link from "next/link";
import { ArrowUpRight, ArrowRight, MapPin } from "lucide-react";

import { presenceLocations } from "@/content/offices";

const indiaLocations = presenceLocations.filter(
  (location) => location.country.toLowerCase() === "india"
);

const indiaVisualPath = "/images/home/presence/global-presence.jpg";
>>>>>>> origin/develop

export function GlobalPresence() {
  return (
    <section
      id="global-presence"
      aria-labelledby="global-presence-title"
<<<<<<< HEAD
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
=======
      className="relative overflow-hidden bg-[#0D1514] px-6 py-20 text-[#F7F5F0] sm:px-10 sm:py-24 lg:px-16 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full border border-white/[0.035]" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-[22rem] w-[22rem] rounded-full border border-white/[0.035]" />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="grid gap-8 border-b border-white/15 pb-10 lg:grid-cols-[1.1fr_0.65fr] lg:items-end lg:pb-14">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.24em] text-[#DC5235]">
                Our Presence
              </p>
            </div>

            <h2
              id="global-presence-title"
              className="max-w-3xl font-serif text-[clamp(2.125rem,4vw,4rem)] leading-[1.02] tracking-[-0.045em]"
            >
              Rooted in India.
              <span className="block text-[#DC5235]">
                Connected to the world.
              </span>
            </h2>
          </div>

          <p className="max-w-md font-sans text-sm leading-7 text-white/60 sm:text-base sm:leading-8 lg:justify-self-end">
            From our base in India, we bring together technology, product
            thinking, and engineering expertise to create solutions with
            a global outlook.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-10 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:pt-14">
          {/* India Visual */}
          <IndiaVisual />

          {/* India Information */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#DC5235]">
                Where We Operate
              </p>

              <h3 className="mt-5 font-serif text-[clamp(2.125rem,4vw,4rem)] leading-[1.02] tracking-[-0.04em]">
                India
                <span className="block text-white/45">
                  Our home base.
                </span>
              </h3>

              <p className="mt-6 max-w-lg font-sans text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                Our presence in India connects people, ideas, and
                capabilities. It is where we build strong partnerships
                and develop technology for businesses and communities.
              </p>
            </div>

            {/* Location Details */}
            <div className="mt-10">
              <div className="mb-4 flex items-center justify-between border-b border-white/15 pb-4">
                <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">
                  India Presence
                </p>
                <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-[#DC5235]">
                  {indiaLocations.length > 0
                    ? `${String(indiaLocations.length).padStart(2, "0")} Locations`
                    : "India"}
                </span>
              </div>

              {indiaLocations.length > 0 ? (
                <div className="divide-y divide-white/10">
                  {indiaLocations.map((location, index) => (
                    <div
                      key={location.country + index}
                      className="group flex items-start gap-4 py-5 transition-colors hover:bg-white/[0.025]"
                    >
                      <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center border border-white/15 text-[#DC5235] transition-colors group-hover:border-[#DC5235] group-hover:bg-[#DC5235] group-hover:text-white">
                        <MapPin size={16} strokeWidth={1.5} />
                      </span>

                      <div className="min-w-0">
                        <p className="font-serif text-xl text-white sm:text-2xl">
                          {location.country}
                        </p>
                        <p className="mt-1 font-sans text-xs leading-6 text-white/50 sm:text-sm">
                          {location.status}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="ml-auto mt-2 shrink-0 text-white/35 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#DC5235]"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-6">
                  <p className="font-serif text-2xl text-white">
                    India
                  </p>
                  <p className="mt-2 font-sans text-sm leading-6 text-white/50">
                    Our regional base for technology and business.
                  </p>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="group mt-8 inline-flex min-h-12 w-fit items-center gap-8 border border-white/25 px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.13em] text-white transition-all duration-300 hover:border-[#DC5235] hover:bg-[#DC5235] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DC5235]"
            >
              Connect With Us
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Brand Statement */}
        <div className="mt-16 flex flex-col gap-5 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-xl tracking-tight text-white/85 sm:text-2xl">
            Local understanding. Global ambition.
          </p>

          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/35">
            Bimal Global · India
          </p>
        </div>
>>>>>>> origin/develop
      </div>
    </section>
  );
}

<<<<<<< HEAD
function PresenceVisual() {
  return (
    <div
      aria-label="Global presence visual"
      className="relative min-h-[24rem] overflow-hidden bg-[#202927] text-[#f7f7f2] motion-safe:animate-[hero-reveal_1000ms_220ms_ease-out_both] sm:min-h-[34rem] lg:min-h-[45rem]"
      data-image-path={globalVisualPath}
      role="img"
      style={{
        backgroundImage: `linear-gradient(145deg, rgba(23, 24, 23, 0.08), rgba(23, 24, 23, 0.92)), url("${globalVisualPath}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
          Global presence
        </p>
        <p className="mt-3 max-w-sm text-xs leading-5 text-[#f7f7f2]/78">
          Regional roots, worldwide perspective.
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
=======
function IndiaVisual() {
  return (
    <div
      role="img"
      aria-label="India-focused global presence visual"
      className="group relative min-h-[25rem] overflow-hidden border border-white/10 bg-[#172522] sm:min-h-[34rem] lg:min-h-[42rem]"
      style={{
        backgroundImage: `linear-gradient(145deg, rgba(13,21,20,0.12), rgba(13,21,20,0.88)), url("${indiaVisualPath}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(247,245,240,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(247,245,240,0.15)_1px,transparent_1px)] [background-size:3rem_3rem]" />

      {/* Decorative Circles */}
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 transition-transform duration-700 group-hover:scale-110 sm:h-80 sm:w-80" />
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 sm:h-60 sm:w-60" />

      {/* Central Accent */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <span className="h-3 w-3 rounded-full bg-[#DC5235] shadow-[0_0_30px_rgba(220,82,53,0.8)]" />
        <span className="mt-4 font-serif text-5xl tracking-tight text-white sm:text-7xl">
          India
        </span>
        <span className="mt-3 font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60">
          Our foundation
        </span>
      </div>

      {/* Top Labels */}
      <div className="absolute inset-x-6 top-6 flex items-center justify-between border-t border-white/30 pt-4 sm:inset-x-9 sm:top-9">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75">
          Bimal Global
        </span>
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-[#DC5235]">
          India Presence
        </span>
      </div>

      {/* Bottom Details */}
      <div className="absolute inset-x-6 bottom-6 flex items-end justify-between sm:inset-x-9 sm:bottom-9">
        <div>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
            Regional roots
          </p>
          <p className="mt-2 font-serif text-xl text-white sm:text-2xl">
            Built for what comes next.
          </p>
        </div>

        <span className="flex h-10 w-10 items-center justify-center border border-white/30 text-white">
          <ArrowUpRight size={18} />
        </span>
      </div>

      {/* Orange Detail */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#DC5235] transition-all duration-700 group-hover:w-full" />
    </div>
>>>>>>> origin/develop
  );
}
