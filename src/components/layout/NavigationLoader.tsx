"use client";

import { useEffect, useRef, useState } from "react";
// usePathname bawaan Next (bukan next-intl) agar pergantian locale ikut terdeteksi
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { LogoMark } from "@/components/brand/Logo";
import { cn } from "@/lib/cn";

/** Durasi tampil minimum agar loader tidak sekadar berkedip pada navigasi yang instan. */
const MIN_VISIBLE_MS = 450;
/** Pengaman bila navigasi dibatalkan/gagal sehingga pathname tidak pernah berubah. */
const FAILSAFE_MS = 10_000;

/** Apakah klik ini memicu navigasi client-side ke halaman lain di situs ini. */
function isInternalPageNavigation(event: MouseEvent): boolean {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;

  const anchor = (event.target as Element | null)?.closest?.("a");
  if (!anchor || anchor.hasAttribute("download")) return false;
  if (anchor.target && anchor.target !== "_self") return false;

  const url = new URL(anchor.href, window.location.href);
  // Abaikan link eksternal dan link anchor di halaman yang sama (#experience)
  return url.origin === window.location.origin && url.pathname !== window.location.pathname;
}

export function NavigationLoader() {
  const t = useTranslations("common");
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const startedAt = useRef<number | null>(null);

  useEffect(() => {
    let failsafe: ReturnType<typeof setTimeout> | undefined;

    // Fase capture: berjalan sebelum <Link> memanggil preventDefault
    const onClick = (event: MouseEvent) => {
      if (!isInternalPageNavigation(event)) return;
      startedAt.current = Date.now();
      setIsVisible(true);
      clearTimeout(failsafe);
      failsafe = setTimeout(() => {
        startedAt.current = null;
        setIsVisible(false);
      }, FAILSAFE_MS);
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      clearTimeout(failsafe);
    };
  }, []);

  // Halaman baru sudah dirender → sembunyikan setelah durasi minimum terpenuhi
  useEffect(() => {
    if (startedAt.current === null) return;
    const remaining = Math.max(0, MIN_VISIBLE_MS - (Date.now() - startedAt.current));
    const timer = setTimeout(() => {
      startedAt.current = null;
      setIsVisible(false);
    }, remaining);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy={isVisible}
      className={cn(
        "fixed inset-0 z-[60] grid place-items-center bg-brick-950/85 backdrop-blur-sm transition-opacity duration-300",
        isVisible ? "opacity-100" : "pointer-events-none invisible opacity-0",
      )}
    >
      <div className="relative grid size-24 place-items-center">
        <span aria-hidden="true" className="absolute inset-0 animate-spin rounded-full border-2 border-shell/15 border-t-orange" />
        <LogoMark
          className="w-12 animate-bob text-shell"
          // Pivot di pangkal lengkung (kiri bawah) agar tetap menempel pada mangkuk
          swooshClassName="origin-bottom-left animate-stir [transform-box:fill-box]"
        />
      </div>
      {isVisible && <span className="sr-only">{t("loading")}</span>}
    </div>
  );
}
