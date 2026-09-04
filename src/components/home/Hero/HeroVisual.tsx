const heroImagePath = "/images/home/hero-placeholder.jpg";

export function HeroVisual() {
  return (
    <div
      aria-label="Hero image placeholder"
      className="relative min-h-[22rem] overflow-hidden bg-[#1c2726] motion-safe:animate-[hero-reveal_1100ms_180ms_ease-out_both] sm:min-h-[30rem] lg:min-h-[38rem]"
      data-image-path={heroImagePath}
      role="img"
    >
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(247,247,242,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.22)_1px,transparent_1px)] [background-size:4rem_4rem]" />
      <div className="absolute -right-20 -top-16 h-[22rem] w-[22rem] rounded-full border border-[#f7f7f2]/20 sm:h-[30rem] sm:w-[30rem]" />
      <div className="absolute -bottom-32 -left-24 h-[25rem] w-[25rem] rounded-full border-[3rem] border-[#e35d3f] sm:h-[34rem] sm:w-[34rem]" />
      <div className="absolute inset-x-8 bottom-8 flex items-end justify-between border-t border-[#f7f7f2]/35 pt-4 font-sans text-[0.6rem] uppercase tracking-[0.2em] text-[#f7f7f2]/70 sm:inset-x-10 sm:bottom-10">
        <span>Image placeholder</span>
        <span>Replace asset</span>
      </div>
      <span className="absolute left-8 top-8 h-3 w-3 bg-[#e35d3f] sm:left-10 sm:top-10" />
    </div>
  );
}