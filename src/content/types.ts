import type { Locale } from "@/i18n/routing";

/** Nilai yang punya versi per bahasa. */
export type Localized<T = string> = Record<Locale, T>;

export type MenuCategory = "coffee" | "non-coffee" | "food";

export interface MenuItem {
  slug: string;
  name: string;
  category: MenuCategory;
  description: Localized;
  image?: string;
  isPick?: boolean;
}

export interface Location {
  slug: string;
  name: string;
  tag: Localized;
  area: string;
  address?: string;
  hours?: string;
  image: string;
  mapsQuery: string;
  isFeatured?: boolean;
}

export type CommunityIcon =
  | "padel"
  | "running"
  | "strength"
  | "workshop"
  | "creative"
  | "business"
  | "music"
  | "automotive";

export type CommunityCategory = "sports" | "automotive" | "creative" | "business" | "music";

export interface Community {
  slug: string;
  category: CommunityCategory;
  icon: CommunityIcon;
  /** Ditampilkan di section Community pada homepage */
  isFeatured?: boolean;
  name: Localized;
  tagline: Localized;
  description: Localized;
  image: string;
}

export type JournalCategory = "productivity" | "community" | "creative" | "coffee" | "people";

export interface Article {
  slug: string;
  category: JournalCategory;
  title: Localized;
  excerpt: Localized;
  body: Localized<string[]>;
  image: string;
  publishedAt: string;
}
