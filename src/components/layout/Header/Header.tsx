"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

import { Logo } from "@/components/brand/Logo";
import {
  navigation,
  primaryNavigationCta,
  type NavigationItem,
} from "@/config/navigation";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navId = useId();

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 12);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-all duration-300 sm:px-6 lg:px-8 ${
        scrolled ? "pt-3" : ""
      }`}
    >
      <div
        className={`relative z-10 mx-auto max-w-[1480px] border px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled || mobileOpen
            ? "border-[#171817]/15 bg-[#f7f7f2]/94 backdrop-blur-md"
            : "border-transparent bg-[#f7f7f2]/72 backdrop-blur-sm"
        }`}
      >
        <div className="flex min-h-12 items-center justify-between gap-6">
          <Logo />

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navigation.map((item) =>
              item.items ? (
                <DesktopMegaMenu
                  isActive={isActivePath(pathname, item.href)}
                  item={item}
                  key={item.label}
                  menuId={`${navId}-${item.label}`}
                  onOpenChange={setOpenMenu}
                  open={openMenu === item.label}
                  pathname={pathname}
                />
              ) : (
                <DesktopNavLink
                  isActive={isActivePath(pathname, item.href)}
                  item={item}
                  key={item.label}
                />
              ),
            )}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              className="inline-flex min-h-11 items-center justify-center bg-[#171817] px-5 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
              href={primaryNavigationCta.href}
            >
              {primaryNavigationCta.label}
              <span aria-hidden="true" className="ml-6 text-base leading-none">
                &rarr;
              </span>
            </Link>
          </div>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex min-h-11 items-center justify-center border border-[#171817]/20 px-4 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#171817] transition-colors hover:border-[#171817] hover:bg-[#171817]/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817] lg:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            type="button"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <MobileNavigation
        onClose={() => setMobileOpen(false)}
        open={mobileOpen}
        pathname={pathname}
      />
    </header>
  );
}

function DesktopNavLink({
  isActive,
  item,
}: {
  isActive: boolean;
  item: NavigationItem;
}) {
  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={`px-4 py-3 font-sans text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817] ${
        isActive
          ? "text-[#e35d3f]"
          : "text-[#171817]/68 hover:text-[#171817]"
      }`}
      href={item.href}
    >
      {item.label}
    </Link>
  );
}

function DesktopMegaMenu({
  isActive,
  item,
  menuId,
  onOpenChange,
  open,
  pathname,
}: {
  isActive: boolean;
  item: NavigationItem;
  menuId: string;
  onOpenChange: (value: string | null) => void;
  open: boolean;
  pathname: string;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => onOpenChange(item.label)}
      onMouseLeave={() => onOpenChange(null)}
    >
      <button
        aria-controls={menuId}
        aria-expanded={open}
        className={`px-4 py-3 font-sans text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817] ${
          isActive
            ? "text-[#e35d3f]"
            : "text-[#171817]/68 hover:text-[#171817]"
        }`}
        onClick={() => onOpenChange(open ? null : item.label)}
        onFocus={() => onOpenChange(item.label)}
        type="button"
      >
        {item.label}
        <span aria-hidden="true" className="ml-2 text-xs">
          v
        </span>
      </button>

      <div
        className={`absolute left-1/2 top-full w-[28rem] -translate-x-1/2 pt-3 transition duration-200 motion-reduce:transition-none ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
        id={menuId}
        onFocus={() => onOpenChange(item.label)}
      >
        <div className="border border-[#171817]/15 bg-[#f7f7f2]/98 p-6 text-[#171817] backdrop-blur-md">
          {item.description ? (
            <p className="mb-5 max-w-xs font-sans text-sm leading-6 text-[#171817]/58">
              {item.description}
            </p>
          ) : null}
          <div className="grid gap-1">
            {item.items?.map((subItem) => {
              const active = isActivePath(pathname, subItem.href);

              return (
                <Link
                  aria-current={active ? "page" : undefined}
                  className={`group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-[#171817]/10 py-4 font-sans outline-none transition-colors hover:border-[#e35d3f]/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f] ${
                    active ? "text-[#e35d3f]" : "text-[#171817]"
                  }`}
                  href={subItem.href}
                  key={subItem.href}
                >
                  <span className="text-base font-semibold">{subItem.label}</span>
                  <span
                    aria-hidden="true"
                    className="text-lg leading-none text-[#e35d3f] transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2"
                  >
                    &rarr;
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileNavigation({
  onClose,
  open,
  pathname,
}: {
  onClose: () => void;
  open: boolean;
  pathname: string;
}) {
  const activeParent = navigation.find(
    (item) => item.items && isActivePath(pathname, item.href),
  );
  const [expanded, setExpanded] = useState<string | null>(null);
  const expandedGroup = expanded ?? activeParent?.label ?? "Company";

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-0 bg-[#f7f7f2] px-6 pb-8 pt-28 transition duration-300 motion-reduce:transition-none lg:hidden ${
        open
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-3 opacity-0"
      }`}
      id="mobile-navigation"
      inert={open ? undefined : true}
    >
      <nav aria-label="Mobile navigation" className="flex h-full flex-col">
        <div className="min-h-0 flex-1 overflow-y-auto border-y border-[#171817]/15 py-4">
          {navigation.map((item) =>
            item.items ? (
              <MobileNavigationGroup
                expanded={expandedGroup === item.label}
                item={item}
                key={item.label}
                onNavigate={onClose}
                onToggle={() =>
                  setExpanded((value) =>
                    (value ?? expandedGroup) === item.label ? null : item.label,
                  )
                }
                pathname={pathname}
              />
            ) : (
              <MobileNavigationLink
                active={isActivePath(pathname, item.href)}
                item={item}
                key={item.href}
                onNavigate={onClose}
              />
            ),
          )}
        </div>

        <div className="pt-6">
          <Link
            className="inline-flex min-h-12 w-full items-center justify-center bg-[#171817] px-6 font-sans text-sm font-semibold text-[#f7f7f2] transition-colors hover:bg-[#e35d3f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
            href={primaryNavigationCta.href}
            onClick={onClose}
          >
            {primaryNavigationCta.label}
            <span aria-hidden="true" className="ml-8 text-lg leading-none">
              &rarr;
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

function MobileNavigationGroup({
  expanded,
  item,
  onNavigate,
  onToggle,
  pathname,
}: {
  expanded: boolean;
  item: NavigationItem;
  onNavigate: () => void;
  onToggle: () => void;
  pathname: string;
}) {
  const panelId = useId();
  const active = isActivePath(pathname, item.href);

  return (
    <div className="border-b border-[#171817]/12 py-2">
      <button
        aria-controls={panelId}
        aria-expanded={expanded}
        className={`flex w-full items-center justify-between py-5 text-left font-serif text-[clamp(2.25rem,9vw,4rem)] leading-none tracking-[-0.04em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817] ${
          active ? "text-[#e35d3f]" : "text-[#171817]"
        }`}
        onClick={onToggle}
        type="button"
      >
        {item.label}
        <span className="font-sans text-2xl leading-none" aria-hidden="true">
          {expanded ? "-" : "+"}
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 motion-reduce:transition-none ${
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        id={panelId}
      >
        <div className="overflow-hidden">
          <div className="grid gap-1 pb-5">
            {item.items?.map((subItem) => (
              <Link
                aria-current={
                  isActivePath(pathname, subItem.href) ? "page" : undefined
                }
                className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 font-sans text-base font-semibold text-[#171817]/70 outline-none transition-colors hover:text-[#171817] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e35d3f]"
                href={subItem.href}
                key={subItem.href}
                onClick={onNavigate}
              >
                <span>{subItem.label}</span>
                <span
                  aria-hidden="true"
                  className="text-lg leading-none text-[#e35d3f] transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2"
                >
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileNavigationLink({
  active,
  item,
  onNavigate,
}: {
  active: boolean;
  item: NavigationItem;
  onNavigate: () => void;
}) {
  return (
    <Link
      aria-current={active ? "page" : undefined}
      className={`group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-[#171817]/12 py-6 font-serif text-[clamp(2.25rem,9vw,4rem)] leading-none tracking-[-0.04em] outline-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817] ${
        active ? "text-[#e35d3f]" : "text-[#171817] hover:text-[#e35d3f]"
      }`}
      href={item.href}
      onClick={onNavigate}
    >
      <span>{item.label}</span>
      <span
        aria-hidden="true"
        className="font-sans text-2xl leading-none text-[#e35d3f] transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2"
      >
        &rarr;
      </span>
    </Link>
  );
}
