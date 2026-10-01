import type { Metadata } from "next";
import { routing, type Locale } from "@/i18n/routing";

interface PageMetadataInput {
  locale: Locale;
  /** Path tanpa prefix locale, contoh: "/menu" atau "" untuk beranda. */
  path: string;
  title: string;
  description: string;
  image?: string;
}

/** Metadata per halaman lengkap dengan canonical & hreflang antar bahasa. */
export function buildMetadata({ locale, path, title, description, image }: PageMetadataInput): Metadata {
  const languages = Object.fromEntries(routing.locales.map((l) => [l, `/${l}${path}`]));

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { ...languages, "x-default": `/${routing.defaultLocale}${path}` },
    },
    openGraph: {
      title,
      description,
      url: `/${locale}${path}`,
      siteName: "Tedja Coffee",
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
      images: [{ url: image ?? "/images/hero.webp" }],
    },
  };
}
