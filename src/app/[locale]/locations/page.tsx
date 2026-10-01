import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LocationCard } from "@/components/cards/LocationCard";
import { PageHero } from "@/components/sections/PageHero";
import { ExternalButtonLink } from "@/components/ui/Button";
import { locations } from "@/content/locations";
import type { Locale } from "@/i18n/routing";
import { localize, mapsUrl } from "@/lib/localize";
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
  const tCommon = await getTranslations("common");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} body={t("body")} />
      <section className="container-site py-12 sm:py-20">
        <div className="reveal-stagger grid gap-y-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3">
          {locations.map((location) => (
            <LocationCard key={location.slug} layout="list" {...location} tag={localize(location.tag, locale)} />
          ))}
        </div>
        <div className="mt-10 flex justify-center sm:mt-14">
          <ExternalButtonLink href={mapsUrl("Tedja Coffee Bandung")}>{tCommon("openInMaps")}</ExternalButtonLink>
        </div>
      </section>
    </>
  );
}
