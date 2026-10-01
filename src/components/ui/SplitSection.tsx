import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SplitSectionProps {
  id?: string;
  intro: ReactNode;
  children: ReactNode;
  className?: string;
}

/** Layout section standar: intro di kiri (sticky di desktop), konten di kanan. */
export function SplitSection({ id, intro, children, className }: SplitSectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-12 sm:py-20 lg:py-24", className)}>
      <div className="container-site grid gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="min-w-0 lg:col-span-4">
          <div className="reveal lg:sticky lg:top-28">{intro}</div>
        </div>
        <div className="reveal min-w-0 lg:col-span-8">{children}</div>
      </div>
    </section>
  );
}
