import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { ButtonLink } from "@/components/ui/Button";
import { articles, getArticle } from "@/content/journal";
import type { Locale } from "@/i18n/routing";
import { formatDate, localize } from "@/lib/localize";
import { buildMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/journal/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const lang = locale as Locale;
  return buildMetadata({
    locale: lang,
    path: `/journal/${slug}`,
    title: localize(article.title, lang),
    description: localize(article.excerpt, lang),
    image: article.image,
  });
}

export default async function ArticlePage({ params }: PageProps<"/[locale]/journal/[slug]">) {
  const { locale: rawLocale, slug } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  const article = getArticle(slug);
  if (!article) notFound();

  const t = await getTranslations("journal");
  const tCommon = await getTranslations("common");
  const tPage = await getTranslations("journalPage");
  const related = articles.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <header className="rounded-b-[2rem] bg-brick-950 lg:rounded-b-[3rem]">
        <div className="container-site max-w-4xl pt-28 pb-12 sm:pt-32 sm:pb-14 lg:pt-40 lg:pb-20">
          <ButtonLink href="/journal" variant="text-light" icon="arrow-left" className="flex-row-reverse">
            {tCommon("backToJournal")}
          </ButtonLink>
          <p className="eyebrow mt-6 text-orange sm:mt-8">
            {t(`categories.${article.category}`)} · <time dateTime={article.publishedAt}>{formatDate(article.publishedAt, locale)}</time>
          </p>
          <h1 className="mt-4 text-[2rem] leading-[1.05] text-shell sm:text-5xl lg:text-6xl">{localize(article.title, locale)}</h1>
          <p className="mt-4 max-w-2xl text-base text-shell/80 sm:mt-5 sm:text-lg">{localize(article.excerpt, locale)}</p>
        </div>
      </header>

      <article className="container-site max-w-4xl py-10 sm:py-16">
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-brick">
          <Image src={article.image} alt="" fill priority sizes="(min-width: 1024px) 56rem, 100vw" className="object-cover" />
        </div>
        <div className="mx-auto mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-charcoal sm:mt-10 sm:space-y-6 sm:text-lg">
          {localize(article.body, locale).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      <section className="border-t border-brick/10 py-12 sm:py-20">
        <div className="container-site">
          <h2 className="reveal text-2xl text-brick-950 uppercase sm:text-3xl">{tPage("more")}</h2>
          <div className="reveal-stagger mt-6 grid gap-y-6 sm:mt-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3">
            {related.map((item) => (
              <ArticleCard
                key={item.slug}
                layout="list"
                slug={item.slug}
                title={localize(item.title, locale)}
                category={t(`categories.${item.category}`)}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
