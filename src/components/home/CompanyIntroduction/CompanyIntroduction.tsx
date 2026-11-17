
const companyImages = [
  {
    src: "/images/hero/1.png",
    alt: "Business professional in a modern office",
  },
  {
    src: "/images/hero/2.png",
    alt: "Business professionals collaborating",
  },
  {
    src: "/images/hero/3.png",
    alt: "Professional team working together",
  },
];

const expertise = [
  "Strategy",
  "Innovation",
  "Technology",
  "Global Partnerships",
];

export function CompanyIntroduction() {
  return (
    <section
      id="company"
      aria-labelledby="company-title"
      className="overflow-hidden bg-[#F7F5F0]"
    >

      {/* DARK INTRODUCTION */}

      <div className="bg-[#0D1514] px-5 pb-10 pt-20 sm:px-10 sm:pb-14 sm:pt-24 lg:px-16 lg:pt-28">

        <div className="mx-auto max-w-[1400px]">

          {/* Center Heading */}

          <div className="mx-auto max-w-3xl text-center">

            <p className="mb-5 font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-[#DC5235]">
              About Bimal Global
            </p>

            <h2
              id="company-title"
              className="font-sans text-[clamp(2.125rem,4vw,4rem)] font-medium leading-[1.08] tracking-[-0.055em] text-white"
            >
              Your strategic partner for

              <span className="block text-[#DC5235]">
                business success.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-lg font-sans text-xs leading-6 text-white/50 sm:text-sm">
              Connecting possibilities through experience,
              innovation and a commitment to delivering
              meaningful results.
            </p>

          </div>

          {/* Three Images */}

          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:mt-16">

            {companyImages.map((image, index) => (
              <div
                key={image.src}
                className="group relative h-[280px] overflow-hidden rounded-xl bg-[#263431] sm:h-[300px] lg:h-[370px]"
              >

                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1514]/40 to-transparent" />

                <span className="absolute bottom-4 left-5 font-sans text-[11px] font-medium tracking-[0.2em] text-white">
                  0{index + 1}
                </span>

                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#DC5235] transition-all duration-500 group-hover:w-full" />

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* COMPANY DESCRIPTION */}

      <div className="px-5 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-12">

            {/* Small Label */}

            <div className="flex items-start gap-3">

              <span className="mt-1.5 h-2 w-2 rounded-full bg-[#DC5235]" />

              <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-[#52615C]">
                Who We Are
              </p>

            </div>

            {/* Main Content */}

            <div>

              <h3 className="max-w-5xl font-sans text-[clamp(1.5rem,3vw,2.35rem)] font-medium leading-[1.3] tracking-[-0.045em] text-[#17201F]">
                Bimal Global brings together{" "}
                <span className="text-[#DC5235]">
                  strategy, expertise and innovation
                </span>{" "}
                to help businesses discover opportunities,
                overcome challenges and achieve sustainable growth.
              </h3>

              <p className="mt-6 max-w-3xl font-sans text-sm leading-7 text-[#697570] sm:text-base">
                We believe that meaningful progress begins with
                understanding, collaboration and a clear vision.
                By combining forward-thinking ideas with a
                commitment to excellence, we aim to build
                lasting relationships and create value
                in an ever-changing business landscape.
              </p>

              {/* Expertise */}

              <div className="mt-10 grid grid-cols-2 gap-5 border-t border-[#17201F]/10 pt-6 sm:grid-cols-4 sm:gap-4">

                {expertise.map((item, index) => (
                  <div
                    key={item}
                    className="border-l border-[#17201F]/10 pl-4"
                  >

                    <span className="font-sans text-[11px] font-semibold tracking-[0.15em] text-[#DC5235]">
                      0{index + 1}
                    </span>

                    <p className="mt-2 font-sans text-xs font-semibold text-[#17201F] sm:text-sm">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
