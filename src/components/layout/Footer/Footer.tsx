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
    <footer className="relative isolate overflow-hidden bg-[#f5f1eb] px-6 pb-6 pt-16 text-[#18201f] sm:px-10 sm:pt-20 lg:px-16 lg:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_100%_0%,rgba(220,82,53,0.10),transparent_50%),radial-gradient(ellipse_at_0%_65%,rgba(220,82,53,0.04),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(24,32,31,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(24,32,31,0.035)_1px,transparent_1px)] bg-size-[88px_88px] mask-[linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#e35d3f]/70 to-transparent" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-48 -z-10 h-[38rem] w-[38rem] rounded-full border-[64px] border-[#dc5235]/[0.055] sm:-right-32"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-64 -left-64 -z-10 h-[40rem] w-[40rem] rounded-full border-[70px] border-[#18201f]/[0.025]"
      />
      <div className="relative mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-12 border-b border-[#18201f]/15 pb-14 lg:grid-cols-[minmax(0,1fr)_minmax(19rem,0.55fr)] lg:gap-20 lg:pb-16">
          <div>
            <div className="[&_a]:text-[#18201f] [&_a]:focus-visible:outline-[#18201f]">
              <Logo />
            </div>
            <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#18201f]/60">
              Ambition meets engineering
            </p>
            <p className="mt-5 max-w-3xl font-serif text-[clamp(2.125rem,4vw,4rem)] leading-[1.02] tracking-[-0.045em]">
              Great ideas deserve
              <span className="block italic text-[#c34228]">
                a great partner.
              </span>
            </p>
          </div>

          <div className="relative self-end overflow-hidden rounded-2xl border border-[#18201f]/15 bg-white/65 p-7 shadow-[0_24px_70px_-30px_rgba(92,53,33,0.18)] sm:p-9">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-[#c34228]">
              Start a conversation
            </p>
            <p className="mt-5 max-w-sm font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
              What can we build together?
            </p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#18201f]/65">
              Bring your next big idea. We bring the thinking, technology, and team to move it forward.
            </p>
            <Link
              className="group mt-7 inline-flex min-h-14 w-full items-center justify-between gap-6 rounded-lg bg-[#dc5235] px-6 font-sans text-sm font-semibold text-white transition-colors hover:bg-[#bf4026] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#18201f]"
              href={primaryNavigationCta.href}
            >
              {primaryNavigationCta.label}
              <span aria-hidden="true" className="text-xl leading-none transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transform-none">
                &nearr;
              </span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-b border-[#18201f]/15 py-12 lg:grid-cols-[0.72fr_1fr_0.58fr_0.42fr] lg:gap-12 lg:py-14">
          {footerNavigationGroups.map((group) => (
            <nav aria-label={`${group.label} footer navigation`} key={group.label}>
              <h2 className="flex items-center gap-3 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c34228] before:h-px before:w-4 before:bg-[#dc5235]/60">
                {group.label}
              </h2>
              <ul className="mt-6 grid gap-4">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      className="group inline-flex items-center font-sans text-sm font-semibold text-[#18201f]/62 transition-colors hover:text-[#18201f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#18201f] sm:text-base"
                      href={link.href}
                    >
                      {link.label}
                      <span
                        aria-hidden="true"
                        className="ml-3 text-[#c34228] opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100 group-focus-visible:translate-x-1 group-focus-visible:opacity-100"
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
            <p className="font-serif text-[clamp(1.75rem,3vw,3rem)] leading-tight tracking-[-0.04em]">
              Engineering what comes next.
            </p>
            <p className="mt-5 max-w-xl font-sans text-sm leading-7 text-[#18201f]/54 sm:text-base sm:leading-8">
              Built across India and Nepal. Thinking globally.
            </p>
          </div>

          <div className="font-sans text-sm text-[#18201f]/56 lg:text-right">
            {socialLinks.length > 0 ? (
              <nav aria-label="Social links" className="mb-6">
                <ul className="flex flex-wrap gap-4 lg:justify-end">
                  {socialLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        className="font-semibold transition-colors hover:text-[#18201f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#18201f]"
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
                        className="transition-colors hover:text-[#18201f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#18201f]"
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

