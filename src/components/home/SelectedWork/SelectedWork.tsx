import Link from "next/link";

import { type WorkItem, workItems } from "@/content/work";

const publicWorkItems = workItems.filter((item) => item.visibility === "public");

export function SelectedWork() {
  return (
    <section
      id="selected-work"
      aria-labelledby="selected-work-title"
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
          backgroundImage: `linear-gradient(145deg, rgba(23, 24, 23, 0.12), rgba(23, 24, 23, 0.86))`,
          backgroundPosition: "center",
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
  );
}

function NoPublicWorkState() {
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
    </div>
  );
}

function ProjectPlaceholderVisual() {
  const imagePath = "/images/work/project-01.jpg";

  return (
    <aside
      aria-label="Selected work visual placeholder"
      className="relative min-h-[20rem] overflow-hidden bg-[#17211f] text-[#f7f7f2] motion-safe:animate-[hero-reveal_1000ms_220ms_ease-out_both] sm:min-h-[27rem] lg:min-h-[35rem]"
      data-image-path={imagePath}
      role="img"
      style={{
        backgroundImage: `linear-gradient(145deg, rgba(23, 33, 31, 0.16), rgba(23, 33, 31, 0.92))`,
        backgroundPosition: "center",
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
          Future image path
        </p>
        <p className="mt-3 max-w-sm break-words text-xs leading-5 text-[#f7f7f2]/78">
          {imagePath}
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
      </Link>
    </div>
  );
}
