import { cn } from "@/lib/cn";

interface LogoProps {
  /** light = putih (latar gelap/foto), brick = terracotta (latar putih/beige) */
  tone?: "light" | "brick";
  className?: string;
}

const toneClass = {
  light: "text-white",
  brick: "text-brick",
} as const;

interface LogoMarkProps {
  className?: string;
  /** Kelas tambahan untuk lengkung (swoosh) dan mangkuk — dipakai untuk animasi loader. */
  swooshClassName?: string;
  bowlClassName?: string;
}

/** Mark cangkir TEDJA. TODO: ganti dengan file vektor resmi dari tim brand. */
export function LogoMark({ className, swooshClassName, bowlClassName }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 64 40" fill="currentColor" aria-hidden="true" className={className}>
      <path className={swooshClassName} d="M12 15.5C8.6 8.4 21.4 2.2 42 3.4 27.4 4.3 17.7 8.4 16.4 15.5Z" />
      <path className={bowlClassName} d="M3 18.5h58c0 11-12.6 19.5-29 19.5S3 29.5 3 18.5Z" />
    </svg>
  );
}

export function Logo({ tone = "light", className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", toneClass[tone], className)}>
      <LogoMark className="h-7 w-auto" />
      <span className="flex flex-col items-end leading-none">
        <span className="font-display text-xl font-semibold tracking-[0.28em]">TEDJA</span>
        <span className="-mr-[0.3em] text-[0.5rem] font-semibold tracking-[0.3em]">COFFEE</span>
      </span>
    </span>
  );
}
