import { useId } from "react";
import { cn } from "@/lib/cn";

interface SupergraphicProps {
  className?: string;
}

/** Supergraphic-01: pola garis paralel bertingkat. */
export function StripePattern({ className }: SupergraphicProps) {
  const id = useId();
  return (
    <svg aria-hidden="true" className={cn("pointer-events-none", className)} preserveAspectRatio="none">
      <defs>
        <pattern id={id} width="48" height="96" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="16" height="48" fill="currentColor" />
          <rect x="24" y="48" width="16" height="48" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/** Supergraphic-02: pola titik. */
export function DotPattern({ className }: SupergraphicProps) {
  const id = useId();
  return (
    <svg aria-hidden="true" className={cn("pointer-events-none", className)}>
      <defs>
        <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="6" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/** Supergraphic-03: bintang delapan arah (bentuk "TEDJA" berulang). */
export function StarMark({ className }: SupergraphicProps) {
  const arms = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg viewBox="-50 -50 100 100" aria-hidden="true" className={cn("pointer-events-none", className)}>
      {arms.map((deg) => (
        <path
          key={deg}
          transform={`rotate(${deg})`}
          d="M-4 -46h18v6H4v22h-8Z"
          fill="currentColor"
        />
      ))}
    </svg>
  );
}
