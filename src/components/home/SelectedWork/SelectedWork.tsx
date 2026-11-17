
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import { type WorkItem, workItems } from "@/content/work";

const publicWorkItems = workItems.filter(
  (item) => item.visibility === "public"
);

export function SelectedWork() {
  return (
    <section
      id="selected-work"
      aria-labelledby="selected-work-title"
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
  );
}

function NoPublicWorkState() {
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
    </div>
  );
}

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
      </Link>
    </div>
  );
}
