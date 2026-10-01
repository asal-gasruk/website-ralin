import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { PageHero } from "@/components/sections/PageHero";
import { articles } from "@/content/journal";
import type { Locale } from "@/i18n/routing";
import { localize } from "@/lib/localize";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/journal">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "meta.journal" });
  return buildMetadata({ locale, path: "/journal", title: t("title"), description: t("description") });
}

export default async function JournalPage({ params }: PageProps<"/[locale]/journal">) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("journalPage");
  const tJournal = await getTranslations("journal");
  const [featured, ...rest] = articles;

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} body={t("body")} />
      <section className="container-site py-12 sm:py-20">
        <div className="reveal max-w-3xl">
          <ArticleCard
            size="large"
            slug={featured.slug}
            title={localize(featured.title, locale)}
            excerpt={localize(featured.excerpt, locale)}
            category={tJournal(`categories.${featured.category}`)}
            image={featured.image}
          />
        </div>
        <div className="reveal-stagger mt-10 grid gap-y-6 sm:mt-16 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4">
          {rest.map((article) => (
            <ArticleCard
              key={article.slug}
              layout="list"
              slug={article.slug}
              title={localize(article.title, locale)}
              excerpt={localize(article.excerpt, locale)}
              category={tJournal(`categories.${article.category}`)}
              image={article.image}
            />
          ))}
        </div>
      </section>
    </>
  );
}
