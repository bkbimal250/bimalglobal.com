const companyImagePath = "/images/home/company-introduction.jpg";

export function CompanyVisual() {
  return (
    <div
      aria-label="Company introduction image placeholder"
      className="relative min-h-[18rem] overflow-hidden bg-[#17211f] motion-safe:animate-[hero-reveal_1000ms_180ms_ease-out_both] sm:min-h-[24rem] lg:min-h-[34rem]"
      data-image-path={companyImagePath}
      role="img"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(23, 33, 31, 0.2), rgba(23, 33, 31, 0.86))`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(247,247,242,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(247,247,242,0.16)_1px,transparent_1px)] [background-size:3.5rem_3.5rem]" />
      <div className="absolute inset-x-7 top-7 flex items-center justify-between border-t border-[#f7f7f2]/30 pt-4 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-[#f7f7f2]/70 sm:inset-x-9 sm:top-9">
        <span>Global systems</span>
        <span>India / Nepal</span>
      </div>
      <div className="absolute bottom-0 right-0 h-32 w-32 border-l border-t border-[#f7f7f2]/25 sm:h-44 sm:w-44" />
      <div className="absolute bottom-7 left-7 max-w-[13rem] font-sans text-[0.62rem] font-medium uppercase leading-5 tracking-[0.22em] text-[#f7f7f2]/75 sm:bottom-9 sm:left-9">
        Replace visual at {companyImagePath}
      </div>
      <span className="absolute right-7 top-24 h-3 w-3 bg-[#e35d3f] sm:right-9" />
    </div>
  );
}
