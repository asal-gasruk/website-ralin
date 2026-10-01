import type { Locale } from "@/i18n/routing";
import type { Localized } from "@/content/types";

export function localize<T>(value: Localized<T>, locale: Locale): T {
  return value[locale];
}

export function mapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function formatDate(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}
