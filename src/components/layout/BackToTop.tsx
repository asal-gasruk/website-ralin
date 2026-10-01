"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

/** Tombol muncul setelah pengguna menggulir sejauh 1,5× tinggi layar. */
const VISIBLE_AFTER_VIEWPORTS = 1.5;

export function BackToTop() {
  const t = useTranslations("common");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > window.innerHeight * VISIBLE_AFTER_VIEWPORTS);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={t("backToTop")}
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={cn(
        "fixed right-4 bottom-5 z-40 grid size-11 place-items-center rounded-full border border-shell/20 bg-brick text-shell shadow-lg shadow-brick-950/30 transition-all duration-300 hover:bg-rust sm:right-6 sm:bottom-6 sm:size-12",
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <Icon name="arrow-up" className="size-5" />
    </button>
  );
}
