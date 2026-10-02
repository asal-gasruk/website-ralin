import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { MenuBook } from "@/components/sections/MenuBook";
import { PageHero } from "@/components/sections/PageHero";
import { Icon } from "@/components/ui/Icon";
import { MENU_BOOK_PAGE_RATIO, menuBookPages } from "@/content/menu";
import type { Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/menu">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "meta.menu" });
  return buildMetadata({ locale, path: "/menu", title: t("title"), description: t("description") });
}

export default async function MenuPage({ params }: PageProps<"/[locale]/menu">) {
  setRequestLocale((await params).locale as Locale);
  const t = await getTranslations("menuPage");

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} body={t("body")} />

      <section className="container-site py-10 sm:py-14">
        <p className="mb-8 flex items-center justify-center gap-2 text-center text-sm text-charcoal/80">
          <Icon name="pin" className="size-4 shrink-0 text-brick" />
          {t("locationNote")}
        </p>
        <MenuBook pages={menuBookPages} pageRatio={MENU_BOOK_PAGE_RATIO} />
        <p className="mt-10 text-center text-xs text-charcoal/60">{t("note")}</p>
      </section>
    </>
  );
}
