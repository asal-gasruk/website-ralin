import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Closing } from "@/components/sections/Closing";
import { CommunityPreview } from "@/components/sections/CommunityPreview";
import { DayStride } from "@/components/sections/DayStride";
import { Hero } from "@/components/sections/Hero";
import { JournalPreview } from "@/components/sections/JournalPreview";
import { LocationsPreview } from "@/components/sections/LocationsPreview";
import { Picks } from "@/components/sections/Picks";
import { Pillars } from "@/components/sections/Pillars";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "meta.home" });
  return { ...buildMetadata({ locale, path: "", title: t("title"), description: t("description") }), title: { absolute: t("title") } };
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  setRequestLocale((await params).locale as Locale);

  return (
    <>
      <Hero />
      <Pillars />
      <DayStride />
      <Picks />
      <LocationsPreview />
      <CommunityPreview />
      <JournalPreview />
      <Closing />
    </>
  );
}
