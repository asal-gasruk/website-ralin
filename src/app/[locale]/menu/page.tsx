import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { MenuBrowser } from "@/components/sections/MenuBrowser";
import { PageHero } from "@/components/sections/PageHero";
import { menuCategories, menuItems } from "@/content/menu";
import type { Locale } from "@/i18n/routing";
import { localize } from "@/lib/localize";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/menu">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "meta.menu" });
  return buildMetadata({ locale, path: "/menu", title: t("title"), description: t("description") });
}

export default async function MenuPage({ params }: PageProps<"/[locale]/menu">) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("menuPage");

  const items = menuItems.map((item) => ({ ...item, description: localize(item.description, locale) }));

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} body={t("body")} />
      <section className="container-site py-12 sm:py-20">
        <MenuBrowser items={items} categories={menuCategories} />
        <p className="mt-12 text-xs text-charcoal/60">{t("note")}</p>
      </section>
    </>
  );
}
