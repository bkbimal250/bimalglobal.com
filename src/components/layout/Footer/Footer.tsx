import Link from "next/link";

import { Logo } from "@/components/brand/Logo";
import {
  footerNavigationGroups,
  legalNavigation,
  primaryNavigationCta,
} from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/config/social";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171817] px-6 py-16 text-[#f7f7f2] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 border-b border-[#f7f7f2]/15 pb-14 lg:grid-cols-[minmax(0,0.86fr)_minmax(22rem,0.5fr)] lg:gap-20 lg:pb-20">
          <div>
            <div className="[&_a]:text-[#f7f7f2] [&_a]:focus-visible:outline-[#f7f7f2]">
              <Logo />
            </div>
            <p className="mt-8 max-w-4xl font-serif text-[clamp(2.75rem,6vw,6.75rem)] leading-[0.94] tracking-[-0.045em]">
              Technology for ambitious ideas,
              <span className="block text-[#f7f7f2]/55">
                complex systems, and what comes next.
              </span>
            </p>
          </div>

          <div className="self-end border-t border-[#f7f7f2]/15 pt-8 lg:border-t-0 lg:pt-0">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#e35d3f]">
              Start a conversation
            </p>
            <p className="mt-5 max-w-sm font-sans text-lg leading-8 text-[#f7f7f2]/66">
              Have something ambitious in mind?
            </p>
            <Link
              className="mt-7 inline-flex min-h-12 w-fit items-center justify-center border border-[#f7f7f2]/25 px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:border-[#e35d3f] hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7f7f2]"
              href={primaryNavigationCta.href}
            >
              {primaryNavigationCta.label}
              <span aria-hidden="true" className="ml-8 text-lg leading-none">
                &rarr;
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 border-b border-[#f7f7f2]/15 py-12 sm:grid-cols-2 lg:grid-cols-[0.72fr_1fr_0.58fr_0.42fr] lg:gap-12 lg:py-16">
          {footerNavigationGroups.map((group) => (
            <nav aria-label={`${group.label} footer navigation`} key={group.label}>
              <h2 className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#e35d3f]">
                {group.label}
              </h2>
              <ul className="mt-6 grid gap-4">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="group inline-flex items-center font-sans text-sm font-semibold text-[#f7f7f2]/62 transition-colors hover:text-[#f7f7f2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7f7f2] sm:text-base"
                      href={link.href}
                    >
                      {link.label}
                      <span
                        aria-hidden="true"
                        className="ml-3 text-[#e35d3f] opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:translate-x-1 group-focus-visible:opacity-100"
                      >
                        &rarr;
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
          <div>
            <p className="font-serif text-[clamp(2rem,4vw,4rem)] leading-none tracking-[-0.04em]">
              Engineering what comes next.
            </p>
            <p className="mt-5 max-w-xl font-sans text-sm leading-7 text-[#f7f7f2]/54 sm:text-base sm:leading-8">
              Built across India and Nepal. Thinking globally.
            </p>
          </div>

          <div className="font-sans text-sm text-[#f7f7f2]/56 lg:text-right">
            {socialLinks.length > 0 ? (
              <nav aria-label="Social links" className="mb-6">
                <ul className="flex flex-wrap gap-4 lg:justify-end">
                  {socialLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        className="font-semibold transition-colors hover:text-[#f7f7f2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7f7f2]"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}
            <p>
              &copy; {currentYear} {siteConfig.name.toUpperCase()}. All rights
              reserved.
            </p>
            {legalNavigation.length > 0 ? (
              <nav aria-label="Legal navigation" className="mt-4">
                <ul className="flex flex-wrap gap-x-5 gap-y-2 lg:justify-end">
                  {legalNavigation.map((link) => (
                    <li key={link.href}>
                      <Link
                        className="transition-colors hover:text-[#f7f7f2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7f7f2]"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
