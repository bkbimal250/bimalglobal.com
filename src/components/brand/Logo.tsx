import Image from "next/image";
import Link from "next/link";

export function Logo({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link
      aria-label="Bimal Global home"
      className="group inline-grid leading-none text-[#171817] outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#171817]"
      href="/"
      onClick={onNavigate}
    >
      <Image
        alt="Bimal Global"
        className="h-auto w-44"
        height={500}
        priority
        src="/logos/bimalgloballogo.webp"
        width={1920}
      />
    </Link>
  );
}
