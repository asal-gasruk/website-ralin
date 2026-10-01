import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  body?: string;
  action?: ReactNode;
  tone?: "dark" | "light";
  as?: "h1" | "h2";
  size?: "md" | "lg";
  className?: string;
}

/** Blok judul section: eyebrow, headline, body, dan CTA opsional. */
export function SectionIntro({
  eyebrow,
  title,
  body,
  action,
  tone = "dark",
  as: Heading = "h2",
  size = "md",
  className,
}: SectionIntroProps) {
  const isLight = tone === "light";

  return (
    <div className={cn("max-w-md", className)}>
      <p className={cn("eyebrow", isLight ? "text-orange" : "text-brick")}>{eyebrow}</p>
      <Heading
        className={cn(
          "mt-3 leading-[1.05] uppercase",
          size === "lg" ? "text-[2.25rem] sm:text-6xl" : "text-3xl sm:text-4xl",
          isLight ? "text-shell" : "text-brick-950",
        )}
      >
        {title}
      </Heading>
      {body && (
        <p className={cn("mt-4 text-sm leading-relaxed sm:text-base", isLight ? "text-shell/80" : "text-charcoal/80")}>
          {body}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
