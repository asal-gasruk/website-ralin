import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LocationExplorer } from "@/components/sections/LocationExplorer";
import { PageHero } from "@/components/sections/PageHero";
import { locations } from "@/content/locations";
import type { Locale } from "@/i18n/routing";
import { localize } from "@/lib/localize";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/locations">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "meta.locations" });
  return buildMetadata({ locale, path: "/locations", title: t("title"), description: t("description") });
}

export default async function LocationsPage({ params }: PageProps<"/[locale]/locations">) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("locationsPage");

  const explorerLocations = locations.map((location) => ({ ...location, tag: localize(location.tag, locale) }));

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} body={t("body")} />
      <section className="reveal container-site py-12 sm:py-20">
        <LocationExplorer locations={explorerLocations} />
      </section>
    </>
  );
}
