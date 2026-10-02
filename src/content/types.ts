import type { Locale } from "@/i18n/routing";

/** Nilai yang punya versi per bahasa. */
export type Localized<T = string> = Record<Locale, T>;

/** Item unggulan di section "Tedja Picks" homepage. */
export interface Pick {
  slug: string;
  name: string;
  description: Localized;
  image: string;
}

export type MenuGroup = "drinks" | "food";
export type MenuTag = "bestSeller" | "recommended" | "spicy";

export interface MenuEntry {
  name: string;
  /** Harga dalam ribu rupiah, sesuai cetakan menu */
  price: number;
  /** Pilihan harga (mis. jenis biji Filter Coffee) */
  priceOptions?: Array<{ label: string; price: number }>;
  serve?: "hotIce" | "ice";
  options?: string;
  description?: string;
  kcal?: string;
  protein?: string;
  image?: string;
  tags?: MenuTag[];
}

export interface MenuSection {
  slug: string;
  group: MenuGroup;
  title: string;
  items: MenuEntry[];
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
