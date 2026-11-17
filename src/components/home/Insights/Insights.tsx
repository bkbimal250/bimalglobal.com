
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Clock3,
  MoveUpRight,
} from "lucide-react";

import { type Insight, insights } from "@/content/insights";

const selectedInsights = insights.slice(0, 3);

const featuredInsight =
  selectedInsights.find((insight) => insight.featured) ?? selectedInsights[0];

const secondaryInsights = selectedInsights.filter(
  (insight) => insight.slug !== featuredInsight?.slug
);

export function Insights() {
  const hasPublishedInsights = selectedInsights.length > 0;

  return (
    <section
      id="insights"
      aria-labelledby="insights-title"
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
      </div>
    </div>
  );
}

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
    </Link>
  );
}

function InsightMeta({ insight }: { insight: Insight }) {
  const meta = [insight.publishedAt, insight.author].filter(Boolean);

  if (meta.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-sans text-[11px] font-semibold uppercase tracking-[0.13em] text-white/40">
      {meta.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function InsightVisual({
  insight,
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
    </div>
  );
}

function InsightsEmptyState() {
  return (
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
