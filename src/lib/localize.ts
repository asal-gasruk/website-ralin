import type { Locale } from "@/i18n/routing";
import type { Localized } from "@/content/types";

export function localize<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

export function mapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/** Rute dari lokasi pengguna ke tujuan (Google Maps URLs API). */
export function directionsUrl(destination: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}

/** URL embed peta untuk <iframe> — tidak memerlukan API key. */
export function mapsEmbedUrl(query: string, locale: Locale, zoom = 16): string {
  const params = new URLSearchParams({ q: query, z: String(zoom), hl: locale, output: "embed" });
  return `https://maps.google.com/maps?${params.toString()}`;
}

/** Harga menu dalam ribu rupiah → "37K" */
export function formatPrice(price: number): string {
  return `${price}K`;
}

export function formatDate(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}
