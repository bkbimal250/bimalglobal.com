import Link from "next/link";

export function Logo({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link
      aria-label="Bimal Global home"
      className="group inline-grid leading-none text-[#171817] outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
      href="/"
      onClick={onNavigate}
    >
      <span className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] transition-colors group-hover:text-[#e35d3f]">
        Bimal
      </span>
      <span className="mt-1 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] transition-colors group-hover:text-[#e35d3f]">
        Global
      </span>
    </Link>
  );
}
