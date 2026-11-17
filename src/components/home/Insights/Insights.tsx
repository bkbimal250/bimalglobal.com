<<<<<<< HEAD
import Link from "next/link";
=======

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Clock3,
  MoveUpRight,
} from "lucide-react";
>>>>>>> origin/develop

import { type Insight, insights } from "@/content/insights";

const selectedInsights = insights.slice(0, 3);
<<<<<<< HEAD
const featuredInsight =
  selectedInsights.find((insight) => insight.featured) ?? selectedInsights[0];
const secondaryInsights = selectedInsights.filter(
  (insight) => insight.slug !== featuredInsight?.slug,
=======

const featuredInsight =
  selectedInsights.find((insight) => insight.featured) ?? selectedInsights[0];

const secondaryInsights = selectedInsights.filter(
  (insight) => insight.slug !== featuredInsight?.slug
>>>>>>> origin/develop
);

export function Insights() {
  const hasPublishedInsights = selectedInsights.length > 0;

  return (
    <section
      id="insights"
      aria-labelledby="insights-title"
<<<<<<< HEAD
      className="bg-[#171817] px-6 py-20 text-[#f7f7f2] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 border-b border-[#f7f7f2]/15 pb-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.72fr)] lg:gap-20 lg:pb-20">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f] motion-safe:animate-[hero-rise_700ms_ease-out_both]">
              Insights
            </p>
            <h2
              id="insights-title"
              className="mt-7 max-w-4xl font-serif text-[clamp(3rem,7vw,7.25rem)] leading-[0.92] tracking-[-0.045em] motion-safe:animate-[hero-rise_800ms_120ms_ease-out_both]"
            >
              Ideas, technology,
              <span className="block text-[#e35d3f]">and what comes next.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-end gap-8 motion-safe:animate-[hero-rise_800ms_220ms_ease-out_both]">
            <p className="max-w-xl font-sans text-lg leading-8 text-[#f7f7f2]/68 sm:text-xl sm:leading-9">
              Perspectives on engineering, products, artificial intelligence,
              technology, and the ideas shaping what businesses and digital
              platforms build next.
            </p>
            <Link
              className="group inline-flex min-h-12 w-fit items-center justify-center border border-[#f7f7f2]/25 px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:border-[#e35d3f] hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7f7f2]"
              href="/insights"
            >
              View All Insights
              <span
                aria-hidden="true"
                className="ml-8 text-lg leading-none transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2"
              >
                &rarr;
              </span>
=======
      className="relative overflow-hidden bg-[#0D1514] px-6 py-20 text-[#F7F5F0] sm:px-10 sm:py-24 lg:px-16 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full border border-white/[0.035]" />

      <div className="relative mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-9 lg:flex-row lg:items-end lg:pb-12">
          <div>
            <div className="mb-5 flex items-center gap-3">
            
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.23em] text-[#DC5235]">
                Ideas & Perspectives
              </p>
            </div>

            <h2
              id="insights-title"
              className="max-w-3xl font-serif text-[clamp(2.125rem,4vw,4rem)] leading-[1.04] tracking-[-0.045em]"
            >
              Thinking beyond
              <span className="block text-[#DC5235]">
                the technology.
              </span>
            </h2>
          </div>

          <div className="max-w-md lg:pb-1">
            <p className="font-sans text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Ideas, perspectives, and practical thinking on technology,
              engineering, products, and the changing digital landscape.
            </p>

            <Link
              href="/insights"
              className="group mt-5 inline-flex items-center gap-3 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:text-[#DC5235]"
            >
              Explore All Insights
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
>>>>>>> origin/develop
            </Link>
          </div>
        </div>

        {hasPublishedInsights && featuredInsight ? (
          <InsightsShowcase
            featuredInsight={featuredInsight}
            secondaryInsights={secondaryInsights}
          />
        ) : (
          <InsightsEmptyState />
        )}
      </div>
    </section>
  );
}

function InsightsShowcase({
  featuredInsight,
  secondaryInsights,
}: {
  featuredInsight: Insight;
  secondaryInsights: Insight[];
}) {
  return (
<<<<<<< HEAD
    <div className="grid grid-cols-1 gap-8 pt-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.58fr)] lg:gap-10 lg:pt-16">
      <InsightCard insight={featuredInsight} isFeatured />

      <div className="grid grid-cols-1 gap-8">
        {secondaryInsights.map((insight) => (
          <InsightCard insight={insight} key={insight.slug} />
        ))}
=======
    <div className="grid gap-10 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:pt-14">
      {/* Featured Article */}
      <Link
        href="/insights"
        aria-label={`Read ${featuredInsight.title}`}
        className="group flex min-w-0 flex-col outline-none"
      >
        <div className="relative min-h-[18rem] overflow-hidden bg-[#192522] sm:min-h-[25rem] lg:min-h-[34rem]">
          <InsightVisual insight={featuredInsight} featured />

          <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-8 sm:top-8">
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              Featured Article
            </span>
          </div>

          <span className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#DC5235] text-white transition-transform duration-300 group-hover:rotate-45 sm:bottom-8 sm:right-8 sm:h-12 sm:w-12">
            <ArrowUpRight size={19} />
          </span>

          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
            <span className="font-serif text-6xl leading-none text-white/75 sm:text-8xl">
              01
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between border-b border-white/15 py-7 sm:py-8">
          <div>
            {featuredInsight.category && (
              <p className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] text-[#DC5235]">
                {featuredInsight.category}
              </p>
            )}

            <h3 className="mt-4 max-w-2xl font-serif text-[clamp(1.9rem,3.4vw,3.3rem)] leading-[1.08] tracking-[-0.035em] transition-colors duration-300 group-hover:text-[#DC5235]">
              {featuredInsight.title}
            </h3>

            {featuredInsight.excerpt && (
              <p className="mt-4 max-w-2xl font-sans text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                {featuredInsight.excerpt}
              </p>
            )}
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
            <InsightMeta insight={featuredInsight} />

            <span className="inline-flex items-center gap-2 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-white/65 transition-colors group-hover:text-[#DC5235]">
              Read Article
              <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </Link>

      {/* Secondary Articles */}
      <div className="flex flex-col">
        <div className="mb-5 flex items-center justify-between border-b border-white/15 pb-4">
          <p className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-white/55">
            More Perspectives
          </p>
          <span className="font-sans text-[11px] uppercase tracking-[0.16em] text-[#DC5235]">
            02 — 03
          </span>
        </div>

        <div className="flex flex-1 flex-col divide-y divide-white/15">
          {secondaryInsights.map((insight, index) => (
            <SecondaryInsight
              insight={insight}
              index={index}
              key={insight.slug}
            />
          ))}

          {secondaryInsights.length === 0 && (
            <div className="flex flex-1 flex-col justify-center py-12">
              <BookOpen size={25} className="text-[#DC5235]" />
              <p className="mt-5 font-serif text-2xl">
                More ideas are on the way.
              </p>
              <p className="mt-3 max-w-sm font-sans text-sm leading-7 text-white/50">
                New perspectives and company insights will appear here
                as they are published.
              </p>
            </div>
          )}
        </div>

        <Link
          href="/insights"
          className="group mt-7 flex items-center justify-between border border-white/20 px-5 py-4 transition-colors duration-300 hover:border-[#DC5235] hover:bg-[#DC5235]"
        >
          <span className="font-sans text-[11px] font-bold uppercase tracking-[0.15em]">
            Browse the journal
          </span>
          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </Link>
>>>>>>> origin/develop
      </div>
    </div>
  );
}

<<<<<<< HEAD
function InsightCard({
  insight,
  isFeatured = false,
}: {
  insight: Insight;
  isFeatured?: boolean;
}) {
  return (
    <Link
      aria-label={`View insights including ${insight.title}`}
      className="group grid overflow-hidden border border-[#f7f7f2]/15 outline-none transition-colors hover:border-[#e35d3f]/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f]"
      href="/insights"
    >
      <InsightVisual insight={insight} isFeatured={isFeatured} />

      <article className="flex min-h-[19rem] flex-col justify-between p-7 sm:p-9 lg:p-10">
        <div>
          {insight.category ? (
            <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#e35d3f]">
              {insight.category}
            </p>
          ) : null}
          <h3
            className={`font-serif leading-[0.98] tracking-[-0.04em] transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2 ${
              insight.category ? "mt-5" : ""
            } ${isFeatured ? "text-[clamp(2.65rem,5.8vw,6rem)]" : "text-[clamp(2.1rem,4vw,3.75rem)]"}`}
          >
            {insight.title}
          </h3>
          {insight.excerpt ? (
            <p className="mt-6 max-w-2xl font-sans text-sm leading-7 text-[#f7f7f2]/64 sm:text-base sm:leading-8">
              {insight.excerpt}
            </p>
          ) : null}
        </div>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <InsightMeta insight={insight} />
          <span className="font-sans text-2xl leading-none text-[#e35d3f] transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2">
            &rarr;
          </span>
        </div>
      </article>
=======
function SecondaryInsight({
  insight,
  index,
}: {
  insight: Insight;
  index: number;
}) {
  return (
    <Link
      href="/insights"
      aria-label={`Read ${insight.title}`}
      className="group block py-7 outline-none transition-colors duration-300 hover:bg-white/[0.035] focus-visible:bg-white/[0.035] sm:py-9"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-sans text-[11px] font-semibold tabular-nums tracking-wider text-[#DC5235]">
          0{index + 2}
        </span>

        {insight.category && (
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
            {insight.category}
          </span>
        )}
      </div>

      <h3 className="mt-5 font-serif text-[clamp(1.5rem,2.6vw,2.3rem)] leading-[1.12] tracking-[-0.025em] transition-colors duration-300 group-hover:text-[#DC5235]">
        {insight.title}
      </h3>

      {insight.excerpt && (
        <p className="mt-3 line-clamp-3 font-sans text-xs leading-6 text-white/50 sm:text-sm sm:leading-7">
          {insight.excerpt}
        </p>
      )}

      <div className="mt-5 flex items-center justify-between gap-4">
        <InsightMeta insight={insight} />

        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 group-hover:border-[#DC5235] group-hover:bg-[#DC5235] group-hover:text-white">
          <ArrowUpRight size={15} />
        </span>
      </div>
>>>>>>> origin/develop
    </Link>
  );
}

function InsightMeta({ insight }: { insight: Insight }) {
  const meta = [insight.publishedAt, insight.author].filter(Boolean);

<<<<<<< HEAD
  if (meta.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#f7f7f2]/45">
=======
  if (meta.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-sans text-[11px] font-semibold uppercase tracking-[0.13em] text-white/40">
>>>>>>> origin/develop
      {meta.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function InsightVisual({
  insight,
<<<<<<< HEAD
  isFeatured,
}: {
  insight: Insight;
  isFeatured: boolean;
}) {
  const visualClasses = `relative min-h-[16rem] overflow-hidden bg-[#202320] ${
    isFeatured ? "sm:min-h-[25rem] lg:min-h-[34rem]" : "sm:min-h-[20rem]"
  }`;

  if (insight.imagePath) {
    return (
      <div
        aria-label={insight.imageAlt ?? ""}
        className={visualClasses}
        role={insight.imageAlt ? "img" : undefined}
        style={{
          backgroundImage: `linear-gradient(145deg, rgba(23, 24, 23, 0.14), rgba(23, 24, 23, 0.88))`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 opacity-35 transition-transform duration-500 group-hover:scale-105 [background-image:linear-gradient(rgba(247,247,242,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.12)_1px,transparent_1px)] [background-size:3rem_3rem]" />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={visualClasses}>
      <div className="absolute inset-0 opacity-30 transition-transform duration-500 group-hover:scale-105 [background-image:linear-gradient(rgba(247,247,242,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.1)_1px,transparent_1px)] [background-size:3rem_3rem]" />
      <div className="absolute left-8 top-8 h-24 w-24 border border-[#f7f7f2]/22 sm:h-36 sm:w-36" />
      <div className="absolute bottom-8 right-8 h-28 w-28 border-[1.25rem] border-[#e35d3f] opacity-90 sm:h-40 sm:w-40" />
      <div className="absolute inset-x-7 bottom-7 flex items-center justify-between border-t border-[#f7f7f2]/24 pt-4 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[#f7f7f2]/55 sm:inset-x-9 sm:bottom-9">
        <span>Editorial system</span>
        <span>Technology perspectives</span>
      </div>
=======
  featured = false,
}: {
  insight: Insight;
  featured?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden"
    >
      {insight.imagePath ? (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `linear-gradient(145deg, rgba(13,21,20,0.12), rgba(13,21,20,0.72)), url("${insight.imagePath}")`,
          }}
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(220,82,53,0.24),transparent_35%),linear-gradient(135deg,#263B35,#101A18)]">
          <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full border border-white/15 transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute -right-4 top-0 h-48 w-48 rounded-full border border-white/10" />
          <div className="absolute bottom-8 left-8 h-24 w-24 border border-[#DC5235]/70 sm:h-36 sm:w-36" />
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(247,245,240,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(247,245,240,0.15)_1px,transparent_1px)] [background-size:3rem_3rem]" />
          <div className="absolute bottom-10 right-10 font-serif text-7xl text-white/10 sm:text-9xl">
            B.
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#0D1514]/40 via-transparent to-transparent" />
>>>>>>> origin/develop
    </div>
  );
}

function InsightsEmptyState() {
  return (
<<<<<<< HEAD
    <div className="grid grid-cols-1 gap-10 pt-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(22rem,0.5fr)] lg:gap-16 lg:pt-16">
      <div className="border-y border-[#f7f7f2]/15 py-12 motion-safe:animate-[hero-rise_800ms_260ms_ease-out_both] sm:py-16 lg:py-20">
        <p className="max-w-5xl font-serif text-[clamp(2.65rem,6vw,6.6rem)] leading-[0.94] tracking-[-0.045em]">
          Building a space for technical perspective
          <span className="block text-[#f7f7f2]/55">with a long-term view.</span>
        </p>
        <p className="mt-8 max-w-2xl font-sans text-lg leading-8 text-[#f7f7f2]/66 sm:text-xl sm:leading-9">
          We are building a space for perspectives on technology, engineering,
          products, artificial intelligence, and the systems shaping the future.
        </p>
        <p className="mt-6 max-w-2xl font-sans text-sm leading-7 text-[#f7f7f2]/48 sm:text-base sm:leading-8">
          Insights and company perspectives will be shared here as they become
          available.
        </p>
      </div>

      <EditorialPlaceholderVisual />

      <div className="mt-0 grid grid-cols-1 gap-8 border-t border-[#f7f7f2]/15 pt-8 lg:col-span-2 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <p className="max-w-2xl font-serif text-[clamp(2.25rem,4.8vw,4.75rem)] leading-[0.96] tracking-[-0.04em] text-[#f7f7f2] motion-safe:animate-[hero-rise_800ms_300ms_ease-out_both]">
          Technology changes quickly.
          <span className="block text-[#f7f7f2]/55">Point of view compounds over time.</span>
        </p>

        <Link
          className="inline-flex min-h-12 w-fit items-center justify-center bg-[#f7f7f2] px-6 font-sans text-sm font-semibold text-[#171817] transition-colors hover:bg-[#e35d3f] hover:text-[#f7f7f2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7f7f2] motion-safe:animate-[hero-rise_800ms_360ms_ease-out_both]"
          href="/insights"
        >
          View All Insights
          <span aria-hidden="true" className="ml-8 text-lg leading-none">
            &rarr;
          </span>
        </Link>
      </div>
    </div>
  );
}

function EditorialPlaceholderVisual() {
  return (
    <aside
      aria-hidden="true"
      className="relative min-h-[20rem] overflow-hidden bg-[#202320] text-[#f7f7f2] motion-safe:animate-[hero-reveal_1000ms_220ms_ease-out_both] sm:min-h-[27rem] lg:min-h-[35rem]"
    >
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(247,247,242,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.1)_1px,transparent_1px)] [background-size:3rem_3rem]" />
      <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 border border-[#f7f7f2]/24 sm:h-72 sm:w-72" />
      <div className="absolute bottom-12 right-8 h-28 w-28 border-[1.35rem] border-[#e35d3f] opacity-90 sm:h-40 sm:w-40" />
      <div className="absolute left-8 top-8 h-20 w-20 border border-[#e35d3f]/55 sm:h-28 sm:w-28" />

      <div className="absolute inset-x-7 top-7 flex items-center justify-between border-t border-[#f7f7f2]/30 pt-4 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[#f7f7f2]/70 sm:inset-x-9 sm:top-9">
        <span>Publishing space</span>
        <span>Ideas in progress</span>
      </div>

      <div className="absolute inset-x-7 bottom-7 grid grid-cols-3 gap-3 sm:inset-x-9 sm:bottom-9">
        <span className="h-1 bg-[#f7f7f2]/30" />
        <span className="h-1 bg-[#e35d3f]/80" />
        <span className="h-1 bg-[#f7f7f2]/18" />
      </div>
    </aside>
  );
}
=======
    <div className="grid gap-10 pt-12 lg:grid-cols-[1fr_0.7fr] lg:items-center lg:pt-16">
      <div className="py-8 sm:py-12">
        <BookOpen size={28} className="text-[#DC5235]" />

        <h3 className="mt-7 max-w-2xl font-serif text-[clamp(2.125rem,4vw,4rem)] leading-[1.05] tracking-[-0.04em]">
          A place for ideas worth sharing.
        </h3>

        <p className="mt-5 max-w-xl font-sans text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
          We are preparing perspectives on engineering, products,
          artificial intelligence, and the technology shaping tomorrow.
          Check back for our latest thinking.
        </p>

        <Link
          href="/insights"
          className="mt-8 inline-flex min-h-12 items-center gap-6 bg-[#DC5235] px-6 font-sans text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#C94328]"
        >
          Explore Insights
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="relative flex min-h-[20rem] items-center justify-center overflow-hidden border border-white/10 bg-[#172522] sm:min-h-[25rem]">
        <div className="absolute h-64 w-64 rounded-full border border-white/15" />
        <div className="absolute h-44 w-44 rounded-full border border-white/10" />
        <div className="relative text-center">
          <p className="font-serif text-7xl text-white/90">B.</p>
          <p className="mt-3 font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#DC5235]">
            Ideas in progress
          </p>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/develop
