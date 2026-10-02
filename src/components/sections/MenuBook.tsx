"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore, type PointerEvent } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

interface MenuBookProps {
  pages: string[];
  /** Rasio lebar/tinggi satu halaman */
  pageRatio: number;
}

const FLIP_MS = 700;
const SWIPE_PX = 40;
/** Halaman di luar jarak ini dari posisi aktif tidak dirender gambarnya */
const RENDER_RANGE = 2;
const DESKTOP_QUERY = "(min-width: 1024px)";

function subscribe(callback: () => void) {
  const media = window.matchMedia(DESKTOP_QUERY);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function useIsDesktop() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(DESKTOP_QUERY).matches,
    () => false,
  );
}

function PageImage({ src, priority }: { src?: string; priority?: boolean }) {
  if (!src) return <div className="absolute inset-0 bg-shell" />;
  return (
    <Image
      src={src}
      alt=""
      fill
      priority={priority}
      sizes="(min-width: 1024px) 40vw, 92vw"
      className="pointer-events-none object-cover select-none"
      draggable={false}
    />
  );
}

/** Desktop: dua halaman berdampingan, lembar dibalik dengan animasi 3D. */
function BookSpread({ pages, pageRatio }: MenuBookProps) {
  const t = useTranslations("menuPage.book");
  const leaves = Math.ceil(pages.length / 2);
  const [flipped, setFlipped] = useState(0);
  const [moving, setMoving] = useState<number | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const go = useCallback(
    (next: number) => {
      const target = Math.max(0, Math.min(leaves, next));
      if (target === flipped) return;
      // Lembar yang sedang berputar ditaruh paling atas selama animasi
      setMoving(target > flipped ? flipped : target);
      setFlipped(target);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setMoving(null), FLIP_MS);
    },
    [flipped, leaves],
  );

  useEffect(() => () => clearTimeout(timer.current), []);

  // Halaman yang terlihat: kiri = belakang lembar terakhir yang dibalik, kanan = depan lembar berikutnya
  const left = flipped > 0 ? 2 * flipped : null;
  const right = flipped < leaves && 2 * flipped + 1 <= pages.length ? 2 * flipped + 1 : null;
  const label = [left, right].filter(Boolean).join("–");

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") go(flipped + 1);
      if (event.key === "ArrowLeft") go(flipped - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [flipped, go]);

  // Sampul tertutup / halaman akhir: geser buku agar halaman tunggal tetap di tengah
  const shift = flipped === 0 ? "-25%" : flipped === leaves && pages.length % 2 === 0 ? "25%" : "0%";

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-full max-w-5xl [perspective:2600px]">
        <div
          className="relative w-full transition-transform duration-700 ease-out"
          style={{ aspectRatio: `${pageRatio * 2}`, transform: `translateX(${shift})` }}
        >
          {Array.from({ length: leaves }, (_, i) => {
            const isFlipped = i < flipped;
            const near = Math.abs(i - flipped) <= RENDER_RANGE;
            return (
              <div
                key={i}
                onClick={() => go(isFlipped ? i : i + 1)}
                className="absolute top-0 right-0 h-full w-1/2 origin-left cursor-pointer transition-transform duration-700 ease-in-out [transform-style:preserve-3d]"
                style={{
                  transform: `rotateY(${isFlipped ? -180 : 0}deg)`,
                  zIndex: moving === i ? leaves * 3 : isFlipped ? leaves + i : leaves - i,
                }}
              >
                <div className="absolute inset-0 overflow-hidden rounded-r-md bg-white shadow-xl shadow-brick-950/25 [backface-visibility:hidden]">
                  {near && <PageImage src={pages[2 * i]} priority={i === 0} />}
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-black/20 to-transparent" />
                </div>
                <div className="absolute inset-0 overflow-hidden rounded-l-md bg-white shadow-xl shadow-brick-950/25 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  {near && <PageImage src={pages[2 * i + 1]} />}
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black/20 to-transparent" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <BookControls
        canPrev={flipped > 0}
        canNext={flipped < leaves}
        onPrev={() => go(flipped - 1)}
        onNext={() => go(flipped + 1)}
        onFirst={() => go(0)}
        label={
          left && right
            ? t("pages", { pages: label, total: pages.length })
            : t("page", { page: left ?? right ?? 1, total: pages.length })
        }
      />
    </div>
  );
}

/** Mobile: satu halaman, geser kiri/kanan untuk berpindah. */
function BookPager({ pages, pageRatio }: MenuBookProps) {
  const t = useTranslations("menuPage.book");
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const startX = useRef<number | null>(null);

  const go = useCallback(
    (next: number) => {
      const target = Math.max(0, Math.min(pages.length - 1, next));
      if (target === page) return;
      setDirection(target > page ? 1 : -1);
      setPage(target);
    },
    [page, pages.length],
  );

  const label = t("page", { page: page + 1, total: pages.length });

  const onPointerDown = (event: PointerEvent) => {
    startX.current = event.clientX;
  };
  const onPointerUp = (event: PointerEvent) => {
    if (startX.current === null) return;
    const delta = event.clientX - startX.current;
    startX.current = null;
    if (delta < -SWIPE_PX) go(page + 1);
    else if (delta > SWIPE_PX) go(page - 1);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <div
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        className="relative w-full max-w-md touch-pan-y overflow-hidden rounded-lg bg-white shadow-xl shadow-brick-950/25"
        style={{ aspectRatio: `${pageRatio}` }}
      >
        <div key={page} className={cn("absolute inset-0", direction === 1 ? "animate-page-next" : "animate-page-prev")}>
          <PageImage src={pages[page]} priority={page === 0} />
        </div>
        {/* Preload halaman berikutnya */}
        {pages[page + 1] && (
          <div className="invisible absolute inset-0" aria-hidden="true">
            <PageImage src={pages[page + 1]} />
          </div>
        )}
      </div>

      <BookControls
        canPrev={page > 0}
        canNext={page < pages.length - 1}
        onPrev={() => go(page - 1)}
        onNext={() => go(page + 1)}
        onFirst={() => go(0)}
        label={label}
      />
    </div>
  );
}

interface BookControlsProps {
  canPrev: boolean;
  canNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  onFirst: () => void;
  label: string;
}

function BookControls({ canPrev, canNext, onPrev, onNext, onFirst, label }: BookControlsProps) {
  const t = useTranslations("menuPage.book");
  const buttonClass =
    "grid size-11 place-items-center rounded-full bg-brick text-shell transition-colors hover:bg-rust disabled:cursor-not-allowed disabled:bg-brick/30";

  return (
    <div className="flex w-full max-w-md items-center justify-between gap-4">
      <button type="button" onClick={onPrev} disabled={!canPrev} aria-label={t("prev")} className={buttonClass}>
        <Icon name="arrow-left" className="size-5" />
      </button>
      <div className="text-center">
        <p className="text-sm font-semibold text-brick-950" aria-live="polite">
          {label}
        </p>
        <button
          type="button"
          onClick={onFirst}
          disabled={!canPrev}
          className="mt-1 text-[0.625rem] font-semibold tracking-[0.14em] text-brick uppercase hover:text-rust disabled:invisible"
        >
          {t("first")}
        </button>
      </div>
      <button type="button" onClick={onNext} disabled={!canNext} aria-label={t("next")} className={buttonClass}>
        <Icon name="arrow-right" className="size-5" />
      </button>
    </div>
  );
}

/** Buku menu: halaman membalik di desktop, geser halaman di mobile. */
export function MenuBook({ pages, pageRatio }: MenuBookProps) {
  const t = useTranslations("menuPage.book");
  const isDesktop = useIsDesktop();

  return (
    <div className="py-4">
      {isDesktop ? (
        <BookSpread pages={pages} pageRatio={pageRatio} />
      ) : (
        <BookPager pages={pages} pageRatio={pageRatio} />
      )}
      <p className="mt-4 text-center text-xs text-charcoal/60">{isDesktop ? t("hintDesktop") : t("hintMobile")}</p>
    </div>
  );
}
