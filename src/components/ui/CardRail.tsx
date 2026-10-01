import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardRailProps {
  children: ReactNode;
  /** Kelas grid untuk breakpoint sm ke atas, contoh: "sm:grid-cols-2 lg:grid-cols-3". */
  className?: string;
}

/**
 * Mobile: carousel horizontal (scroll-snap) dengan kartu berikutnya sedikit terlihat.
 * sm ke atas: grid biasa.
 */
export function CardRail({ children, className }: CardRailProps) {
  return (
    <div
      className={cn(
        "-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] *:w-[78%] *:shrink-0 *:snap-start [&::-webkit-scrollbar]:hidden",
        "sm:mx-0 sm:grid sm:overflow-visible sm:px-0 sm:pb-0 sm:*:w-auto",
        className,
      )}
    >
      {children}
    </div>
  );
}
