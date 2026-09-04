import Link from "next/link";

import { type Insight, insights } from "@/content/insights";

const selectedInsights = insights.slice(0, 3);
const featuredInsight =
  selectedInsights.find((insight) => insight.featured) ?? selectedInsights[0];
const secondaryInsights = selectedInsights.filter(
  (insight) => insight.slug !== featuredInsight?.slug,
);

export function Insights() {
  const hasPublishedInsights = selectedInsights.length > 0;

  return (
    <section
      id="insights"
      aria-labelledby="insights-title"
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
    <div className="grid grid-cols-1 gap-8 pt-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.58fr)] lg:gap-10 lg:pt-16">
      <InsightCard insight={featuredInsight} isFeatured />

      <div className="grid grid-cols-1 gap-8">
        {secondaryInsights.map((insight) => (
          <InsightCard insight={insight} key={insight.slug} />
        ))}
      </div>
    </div>
  );
}

function InsightCard({
  insight,
  isFeatured = false,
}: {
  insight: Insight;
  isFeatured?: boolean;
}) {
  return (
    <Link
      aria-label={`Read ${insight.title}`}
      className="group grid overflow-hidden border border-[#f7f7f2]/15 outline-none transition-colors hover:border-[#e35d3f]/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f]"
      href={`/insights/${insight.slug}`}
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
    </Link>
  );
}

function InsightMeta({ insight }: { insight: Insight }) {
  const meta = [insight.publishedAt, insight.author].filter(Boolean);

  if (meta.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-2 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#f7f7f2]/45">
      {meta.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function InsightVisual({
  insight,
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
          backgroundImage: `linear-gradient(145deg, rgba(23, 24, 23, 0.14), rgba(23, 24, 23, 0.88)), url(${insight.imagePath})`,
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
    </div>
  );
}

function InsightsEmptyState() {
  return (
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
