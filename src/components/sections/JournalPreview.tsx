import { useLocale, useTranslations } from "next-intl";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { ButtonLink } from "@/components/ui/Button";
import { CardRail } from "@/components/ui/CardRail";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { SplitSection } from "@/components/ui/SplitSection";
import { articles } from "@/content/journal";
import { cn } from "@/lib/cn";
import { localize } from "@/lib/localize";

/** Tiga artikel pertama ukuran normal, sisanya besar (mengikuti layout referensi). */
const LARGE_FROM = 3;

export function JournalPreview() {
  const t = useTranslations("journal");
  const locale = useLocale();

  return (
    <SplitSection
      intro={
        <SectionIntro
          eyebrow={t("eyebrow")}
          title={t("title")}
          body={t("body")}
          action={
            <ButtonLink href="/journal" variant="text">
              {t("cta")}
            </ButtonLink>
          }
        />
      }
    >
      <CardRail className="gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
        {articles.map((article, index) => {
          const isLarge = index >= LARGE_FROM;
          return (
            <ArticleCard
              key={article.slug}
              size={isLarge ? "large" : "default"}
              slug={article.slug}
              title={localize(article.title, locale)}
              category={t(`categories.${article.category}`)}
              image={article.image}
              className={cn(
                isLarge ? "lg:col-span-3" : "lg:col-span-2",
                // Item terakhir mengisi baris penuh saat grid 2 kolom
                index === articles.length - 1 && articles.length % 2 === 1 && "sm:col-span-2",
              )}
            />
          );
        })}
      </CardRail>
    </SplitSection>
  );
}
