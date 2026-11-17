<<<<<<< HEAD
import Link from "next/link";

import { type WorkItem, workItems } from "@/content/work";

const publicWorkItems = workItems.filter((item) => item.visibility === "public");
=======

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import { type WorkItem, workItems } from "@/content/work";

const publicWorkItems = workItems.filter(
  (item) => item.visibility === "public"
);
>>>>>>> origin/develop

export function SelectedWork() {
  return (
    <section
      id="selected-work"
      aria-labelledby="selected-work-title"
<<<<<<< HEAD
      className="bg-[#f7f7f2] px-6 py-20 text-[#171817] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 border-b border-[#171817]/15 pb-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.72fr)] lg:gap-20 lg:pb-20">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
              Selected Work
            </p>
            <h2
              id="selected-work-title"
              className="mt-7 max-w-4xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]"
            >
              Technology built
              <span className="block text-[#e35d3f]">for real-world challenges.</span>
            </h2>
          </div>

          <p className="max-w-xl self-end font-sans text-lg leading-8 text-[#171817]/68 sm:text-xl sm:leading-9 motion-safe:animate-[hero-rise_800ms_220ms_ease-out_both]">
            We work across products, platforms, and digital systems where
            technology, engineering, and thoughtful execution come together.
          </p>
=======
      className="bg-[#F7F5F0] px-6 py-20 text-[#17201F] sm:px-10 sm:py-24 lg:px-16 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Header */}
        <div className="grid gap-8 border-b border-[#17201F]/15 pb-10 lg:grid-cols-[1.1fr_0.65fr] lg:items-end lg:pb-14">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#DC5235]">
                Selected Work
              </p>
            </div>

            <h2
              id="selected-work-title"
              className="max-w-3xl font-serif text-[clamp(2.125rem,4vw,4rem)] leading-[1.02] tracking-[-0.045em]"
            >
              Ideas into impact.
              <span className="block text-[#DC5235]">
                Technology into progress.
              </span>
            </h2>
          </div>

          <div className="lg:justify-self-end lg:pb-2">
            <p className="max-w-md font-sans text-sm leading-7 text-[#17201F]/65 sm:text-base sm:leading-8">
              We create products, platforms, and digital systems through
              ambitious thinking, purposeful engineering, and thoughtful
              execution.
            </p>
            <div className="mt-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#17201F]/45">
              <span className="h-px w-8 bg-[#DC5235]" />
              Strategy · Design · Technology
            </div>
          </div>
>>>>>>> origin/develop
        </div>

        {publicWorkItems.length > 0 ? (
          <WorkShowcase items={publicWorkItems} />
        ) : (
          <NoPublicWorkState />
        )}
      </div>
    </section>
  );
}

function WorkShowcase({ items }: { items: WorkItem[] }) {
<<<<<<< HEAD
  return (
    <div className="pt-12 lg:pt-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {items.slice(0, 4).map((item, index) => (
          <WorkCard isFeatured={index === 0} item={item} key={item.href} />
        ))}
      </div>

      <SelectedWorkFooter ctaHref="/work" ctaLabel="View All Work" />
    </div>
  );
}

function WorkCard({ isFeatured, item }: { isFeatured: boolean; item: WorkItem }) {
  return (
    <Link
      aria-label={`View ${item.name}`}
      className={`group grid overflow-hidden border border-[#171817]/15 outline-none transition-colors hover:border-[#e35d3f]/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f] ${
        isFeatured ? "lg:col-span-2 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,0.75fr)]" : ""
      }`}
      href="/work"
    >
      <div
        aria-label={item.imageAlt}
        className={`relative min-h-[18rem] overflow-hidden bg-[#17211f] sm:min-h-[24rem] ${
          isFeatured ? "lg:min-h-[34rem]" : "lg:min-h-[26rem]"
        }`}
        role="img"
        style={{
          backgroundImage: `linear-gradient(145deg, rgba(23, 24, 23, 0.12), rgba(23, 24, 23, 0.86)), url("${item.imagePath}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 opacity-35 transition-transform duration-500 group-hover:scale-105 [background-image:linear-gradient(rgba(247,247,242,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.12)_1px,transparent_1px)] [background-size:3rem_3rem]" />
        <div className="absolute bottom-8 left-8 h-28 w-28 border-[1.35rem] border-[#e35d3f] opacity-90" />
      </div>

      <div className="flex min-h-[20rem] flex-col justify-between p-7 sm:p-9 lg:p-10">
        <div>
          <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#e35d3f]">
            {item.category}
          </p>
          <h3 className="mt-5 font-serif text-[clamp(2.25rem,4.8vw,5rem)] leading-[0.96] tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2">
            {item.name}
          </h3>
          <p className="mt-6 max-w-xl font-sans text-sm leading-7 text-[#171817]/64 sm:text-base sm:leading-8">
            {item.description}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-2 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#171817]/45">
            {item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <span className="font-sans text-2xl leading-none text-[#e35d3f] transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2">
            &rarr;
          </span>
        </div>
      </div>
    </Link>
=======
  const featuredItem = items[0];
  const remainingItems = items.slice(1, 4);

  return (
    <div className="pt-10 lg:pt-14">
      {/* Single Featured Project */}
      <Link
        href="/work"
        aria-label={`View ${featuredItem.name}`}
        className="group grid overflow-hidden border border-[#17201F]/15 bg-white outline-none transition-colors duration-300 hover:border-[#DC5235]/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DC5235] lg:grid-cols-[1.05fr_0.95fr]"
      >
        {/* Only Image in the Section */}
        <div
          role="img"
          aria-label={featuredItem.imageAlt}
          className="relative min-h-[18rem] overflow-hidden bg-[#17201F] sm:min-h-[25rem] lg:min-h-[34rem]"
          style={{
            backgroundImage: `linear-gradient(145deg, rgba(13,21,20,0.05), rgba(13,21,20,0.55)), url("${featuredItem.imagePath}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-[#17201F]/10 transition-colors duration-500 group-hover:bg-[#17201F]/0" />

          <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-9 sm:top-9">
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
              Featured Project
            </span>
          </div>

          <div className="absolute bottom-6 left-6 sm:bottom-9 sm:left-9">
            <span className="font-serif text-6xl leading-none text-white/80 sm:text-8xl">
              01
            </span>
          </div>

          <div className="absolute bottom-7 right-7 flex h-11 w-11 items-center justify-center rounded-full bg-[#DC5235] text-white transition-transform duration-300 group-hover:rotate-45 sm:bottom-9 sm:right-9 sm:h-14 sm:w-14">
            <ArrowUpRight size={21} strokeWidth={1.5} />
          </div>
        </div>

        {/* Featured Project Content */}
        <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#DC5235]">
                {featuredItem.category}
              </span>
              <span className="h-1 w-1 rounded-full bg-[#17201F]/30" />
              <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-[#17201F]/40">
                Case Study
              </span>
            </div>

            <h3 className="mt-7 max-w-xl font-serif text-[clamp(2.125rem,4vw,4rem)] leading-[1.04] tracking-[-0.04em] transition-colors duration-300 group-hover:text-[#DC5235]">
              {featuredItem.name}
            </h3>

            <p className="mt-6 max-w-lg font-sans text-sm leading-7 text-[#17201F]/65 sm:text-base sm:leading-8">
              {featuredItem.description}
            </p>
          </div>

          <div className="mt-12 border-t border-[#17201F]/15 pt-6">
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {featuredItem.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#17201F]/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#17201F]">
                Explore Project
              </span>
              <ArrowRight
                size={18}
                className="text-[#DC5235] transition-transform duration-300 group-hover:translate-x-2"
              />
            </div>
          </div>
        </div>
      </Link>

      {/* Remaining Projects - Text Only */}
      {remainingItems.length > 0 && (
        <div className="mt-14">
          <div className="mb-5 flex items-center justify-between">
            <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#DC5235]">
              More Selected Work
            </p>
            <span className="font-sans text-[11px] uppercase tracking-[0.15em] text-[#17201F]/40">
              02 — 04
            </span>
          </div>

          <div className="border-t border-[#17201F]/15">
            {remainingItems.map((item, index) => (
              <Link
                href="/work"
                key={item.href}
                aria-label={`View ${item.name}`}
                className="group grid grid-cols-[38px_minmax(0,1fr)_auto] items-center gap-4 border-b border-[#17201F]/15 py-6 outline-none transition-colors duration-300 hover:bg-white/70 focus-visible:bg-white/70 sm:grid-cols-[60px_minmax(0,1fr)_auto] sm:gap-7 sm:py-8"
              >
                <span className="font-sans text-xs font-semibold tabular-nums text-[#DC5235]">
                  0{index + 2}
                </span>

                <div className="min-w-0">
                  <p className="mb-2 font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#DC5235]">
                    {item.category}
                  </p>

                  <h3 className="font-serif text-[clamp(1.35rem,2.6vw,2.3rem)] leading-tight tracking-[-0.025em] transition-colors duration-300 group-hover:text-[#DC5235]">
                    {item.name}
                  </h3>

                  <p className="mt-2 max-w-2xl font-sans text-xs leading-6 text-[#17201F]/55 sm:text-sm">
                    {item.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-sans text-[11px] font-semibold uppercase tracking-[0.13em] text-[#17201F]/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#17201F]/20 text-[#17201F] transition-all duration-300 group-hover:border-[#DC5235] group-hover:bg-[#DC5235] group-hover:text-white">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <SelectedWorkFooter />
    </div>
>>>>>>> origin/develop
  );
}

function NoPublicWorkState() {
<<<<<<< HEAD
  return (
    <div className="grid grid-cols-1 gap-10 pt-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(22rem,0.5fr)] lg:gap-16 lg:pt-16">
      <div className="border-y border-[#171817]/15 py-12 motion-safe:animate-[hero-rise_800ms_260ms_ease-out_both] sm:py-16 lg:py-20">
        <p className="max-w-5xl font-serif text-[clamp(2.65rem,6vw,6.6rem)] leading-[0.94] tracking-[-0.045em]">
          Building products, platforms, and technology
          <span className="block text-[#171817]/55">with long-term ambition.</span>
        </p>
        <p className="mt-8 max-w-2xl font-sans text-lg leading-8 text-[#171817]/66 sm:text-xl sm:leading-9">
          Our work spans digital products, software platforms, and technology
          initiatives. Selected work and case studies will be shared here as
          they become publicly available.
        </p>
      </div>

      <ProjectPlaceholderVisual />

      <SelectedWorkFooter ctaHref="/work" ctaLabel="View All Work" />
=======
  const imagePath = "/images/home/work/project-01.jpg";

  return (
    <div className="pt-10 lg:pt-14">
      <div className="grid overflow-hidden border border-[#17201F]/15 bg-white lg:grid-cols-[1.05fr_0.95fr]">
        {/* Single Placeholder Image */}
        <div
          role="img"
          aria-label="Abstract project visual"
          className="relative min-h-[18rem] bg-[#17201F] sm:min-h-[25rem] lg:min-h-[32rem]"
          style={{
            backgroundImage: `linear-gradient(145deg, rgba(13,21,20,0.1), rgba(13,21,20,0.7)), url("${imagePath}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute left-7 top-7 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
            Bimal Global · Selected Work
          </div>
          <span className="absolute bottom-7 left-7 font-serif text-7xl text-white/80 sm:text-8xl">
            01
          </span>
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#DC5235]">
            Work in Progress
          </p>

          <h3 className="mt-6 font-serif text-[clamp(2.1rem,4vw,3.8rem)] leading-[1.05] tracking-[-0.04em]">
            The next chapter
            <span className="block text-[#DC5235]">is being built.</span>
          </h3>

          <p className="mt-6 max-w-lg font-sans text-sm leading-7 text-[#17201F]/60">
            We are shaping products, platforms, and digital experiences
            around meaningful challenges. Our public case studies will
            appear here as they become available.
          </p>
        </div>
      </div>

      <SelectedWorkFooter />
>>>>>>> origin/develop
    </div>
  );
}

<<<<<<< HEAD
function ProjectPlaceholderVisual() {
  const imagePath = "/images/home/work/project-01.jpg";

  return (
    <aside
      aria-label="Selected work visual"
      className="relative min-h-[20rem] overflow-hidden bg-[#17211f] text-[#f7f7f2] motion-safe:animate-[hero-reveal_1000ms_220ms_ease-out_both] sm:min-h-[27rem] lg:min-h-[35rem]"
      data-image-path={imagePath}
      role="img"
      style={{
        backgroundImage: `linear-gradient(145deg, rgba(23, 33, 31, 0.16), rgba(23, 33, 31, 0.92)), url("${imagePath}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(247,247,242,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.12)_1px,transparent_1px)] [background-size:3rem_3rem]" />
      <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 border border-[#f7f7f2]/24 sm:h-72 sm:w-72" />
      <div className="absolute bottom-12 right-8 h-28 w-28 border-[1.35rem] border-[#e35d3f] opacity-90 sm:h-40 sm:w-40" />

      <div className="absolute inset-x-7 top-7 flex items-center justify-between border-t border-[#f7f7f2]/30 pt-4 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[#f7f7f2]/70 sm:inset-x-9 sm:top-9">
        <span>Work system</span>
        <span>Public case studies</span>
      </div>

      <div className="absolute inset-x-7 bottom-7 font-sans sm:inset-x-9 sm:bottom-9">
        <p className="max-w-xs text-[0.62rem] font-semibold uppercase leading-5 tracking-[0.22em] text-[#f7f7f2]/60">
          Selected work
        </p>
        <p className="mt-3 max-w-sm text-xs leading-5 text-[#f7f7f2]/78">
          Public case study preview
        </p>
      </div>
    </aside>
  );
}

function SelectedWorkFooter({
  ctaHref,
  ctaLabel,
}: {
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-8 border-t border-[#171817]/15 pt-8 lg:col-span-2 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
      <p className="max-w-2xl font-serif text-[clamp(2.25rem,4.8vw,4.75rem)] leading-[0.96] tracking-[-0.04em] text-[#171817] motion-safe:animate-[hero-rise_800ms_300ms_ease-out_both]">
        Built with technology.
        <span className="block text-[#171817]/55">Defined by the problem.</span>
      </p>

      <Link
        className="inline-flex min-h-12 w-fit items-center justify-center bg-[#171817] px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817] motion-safe:animate-[hero-rise_800ms_360ms_ease-out_both]"
        href={ctaHref}
      >
        {ctaLabel}
        <span aria-hidden="true" className="ml-8 text-lg leading-none">
          &rarr;
        </span>
=======
function SelectedWorkFooter() {
  return (
    <div className="mt-10 flex flex-col gap-6 border-t border-[#17201F]/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-serif text-xl tracking-tight sm:text-2xl">
          Good work starts with a meaningful challenge.
        </p>
        <p className="mt-2 font-sans text-xs leading-6 text-[#17201F]/50">
          Discover how we turn complex ideas into practical solutions.
        </p>
      </div>

      <Link
        href="/work"
        className="group inline-flex min-h-12 w-fit items-center gap-7 bg-[#17201F] px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-[#DC5235] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#DC5235]"
      >
        View All Work
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
>>>>>>> origin/develop
      </Link>
    </div>
  );
}
