"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { LogoMark } from "@/components/brand/Logo";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { directionsUrl, mapsEmbedUrl, mapsUrl } from "@/lib/localize";

export interface ExplorerLocation {
  slug: string;
  name: string;
  tag: string;
  area: string;
  address?: string;
  hours?: string;
  image: string;
  mapsQuery: string;
}

interface LocationExplorerProps {
  locations: ExplorerLocation[];
}

/** Breakpoint lg Tailwind — di bawahnya peta dan daftar bertumpuk. */
const STACKED_LAYOUT_QUERY = "(max-width: 1023px)";

/**
 * Daftar outlet + peta Google live (embed tanpa API key).
 * Memilih outlet memindahkan pin peta ke outlet tersebut.
 */
export function LocationExplorer({ locations }: LocationExplorerProps) {
  const t = useTranslations("locationsPage.explorer");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const mapRef = useRef<HTMLDivElement>(null);

  const [activeSlug, setActiveSlug] = useState(locations[0]?.slug);
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);

  const active = locations.find((location) => location.slug === activeSlug) ?? locations[0];
  if (!active) return null;

  const src = mapsEmbedUrl(active.mapsQuery, locale);
  const isMapLoading = loadedSrc !== src;

  const select = (slug: string) => {
    setActiveSlug(slug);
    // Di layout bertumpuk peta ada di atas daftar — bawa pengguna kembali ke peta
    if (window.matchMedia(STACKED_LAYOUT_QUERY).matches) {
      mapRef.current?.scrollIntoView({ block: "start" });
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-8">
      <div ref={mapRef} className="relative scroll-mt-20 overflow-hidden rounded-2xl bg-brick-950 lg:order-last">
        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[36rem]">
          <iframe
            key={src}
            src={src}
            title={t("mapTitle", { name: active.name })}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            onLoad={() => setLoadedSrc(src)}
            className="absolute inset-0 size-full border-0"
          />

          <div
            aria-hidden={!isMapLoading}
            className={cn(
              "pointer-events-none absolute inset-0 grid place-items-center bg-brick-950/80 transition-opacity duration-300",
              isMapLoading ? "opacity-100" : "opacity-0",
            )}
          >
            <div className="flex flex-col items-center gap-3 text-shell">
              <LogoMark className="w-10 animate-bob" swooshClassName="origin-bottom-left animate-stir [transform-box:fill-box]" />
              <span className="eyebrow text-[0.625rem] text-shell/80">{t("loadingMap")}</span>
            </div>
          </div>
        </div>

        {/* Info outlet aktif: di bawah peta (mobile), melayang di atas peta (sm+) */}
        <div className="p-4 text-shell sm:absolute sm:bottom-4 sm:left-4 sm:max-w-sm sm:rounded-xl sm:bg-brick-950/90 sm:shadow-xl sm:backdrop-blur">
          <p className="eyebrow text-[0.625rem] text-orange">{active.tag}</p>
          <h3 className="mt-1 text-base uppercase sm:text-lg">{active.name}</h3>
          <p className="mt-1 text-xs text-shell/75 sm:text-sm">
            {active.address ?? active.area}
            {active.hours && <span className="text-shell/50"> · {active.hours}</span>}
          </p>
          <div className="mt-3 grid gap-2 sm:flex sm:flex-wrap">
            <a
              href={directionsUrl(active.mapsQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-orange px-3 py-2 text-[0.6875rem] font-semibold tracking-[0.14em] text-brick-950 uppercase transition-colors hover:bg-shell"
            >
              {t("directions")}
              <Icon name="arrow-up-right" className="size-3.5" />
            </a>
            <a
              href={mapsUrl(active.mapsQuery)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-md border border-shell/30 px-3 py-2 text-[0.6875rem] font-semibold tracking-[0.14em] uppercase transition-colors hover:bg-shell hover:text-brick"
            >
              {tCommon("openInMaps")}
              <Icon name="arrow-up-right" className="size-3.5" />
            </a>
          </div>
        </div>
      </div>

      <div>
        <h2 className="eyebrow text-brick">{t("listTitle", { count: locations.length })}</h2>
        <ul className="mt-4 space-y-2 lg:max-h-[36rem] lg:overflow-y-auto lg:pr-1">
          {locations.map((location) => {
            const isActive = location.slug === active.slug;
            return (
              <li key={location.slug}>
                <button
                  type="button"
                  onClick={() => select(location.slug)}
                  aria-pressed={isActive}
                  className={cn(
                    "group flex w-full items-center gap-3 rounded-xl border p-2.5 text-left transition-colors",
                    isActive
                      ? "border-brick bg-brick text-shell"
                      : "border-brick/10 bg-white/50 text-brick-950 hover:border-brick/40 hover:bg-white",
                  )}
                >
                  <span className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-brick">
                    <Image src={location.image} alt="" fill sizes="64px" className="object-cover" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={cn("eyebrow block text-[0.5625rem]", isActive ? "text-orange" : "text-brick")}>
                      {location.tag}
                    </span>
                    <span className="mt-0.5 block font-display text-sm font-semibold tracking-wide uppercase">
                      {location.name}
                    </span>
                    <span className={cn("mt-0.5 block truncate text-xs", isActive ? "text-shell/75" : "text-charcoal/70")}>
                      {location.address ?? location.area}
                      {location.hours && ` · ${location.hours}`}
                    </span>
                  </span>
                  <Icon
                    name="pin"
                    className={cn("size-4 transition-opacity", isActive ? "text-orange" : "text-brick opacity-30 group-hover:opacity-70")}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
