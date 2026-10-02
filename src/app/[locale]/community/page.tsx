import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { DotPattern } from "@/components/brand/Supergraphic";
import { CommunityCard } from "@/components/cards/CommunityCard";
import { PageHero } from "@/components/sections/PageHero";
import { ExternalButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { communities, communityCategories } from "@/content/community";
import { socials } from "@/content/site";
import type { Locale } from "@/i18n/routing";
import { localize } from "@/lib/localize";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: PageProps<"/[locale]/community">): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const t = await getTranslations({ locale, namespace: "meta.community" });
  return buildMetadata({ locale, path: "/community", title: t("title"), description: t("description") });
}

export default async function CommunityPage({ params }: PageProps<"/[locale]/community">) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("communityPage");
  const tCommon = await getTranslations("common");

  // Hanya kategori yang punya komunitas, sesuai urutan di communityCategories
  const groups = communityCategories
    .map((category) => ({
      ...category,
      items: communities.filter((community) => community.category === category.key),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} body={t("body")} />

      {/* Navigasi kategori, menempel di bawah header saat menggulir */}
      <nav
        aria-label={t("jumpTo")}
        className="sticky top-16 z-30 border-b border-brick/10 bg-shell-50/90 backdrop-blur lg:top-20"
      >
        <ul className="container-site flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {groups.map((group) => (
            <li key={group.key} className="shrink-0">
              <a
                href={`#${group.key}`}
                className="inline-flex items-center gap-2 rounded-full border border-brick/20 bg-white/70 px-3.5 py-2 text-[0.6875rem] font-semibold tracking-[0.12em] text-brick uppercase transition-colors hover:border-brick hover:bg-brick hover:text-shell"
              >
                <Icon name={group.icon} className="size-3.5" />
                {t(`categories.${group.key}.title`)}
                <span className="text-brick/50">{group.items.length}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container-site space-y-14 py-12 sm:space-y-20 sm:py-20">
        {groups.map((group) => (
          <section key={group.key} id={group.key} aria-labelledby={`${group.key}-title`} className="scroll-mt-36 lg:scroll-mt-40">
            <header className="reveal flex flex-wrap items-end justify-between gap-4 border-b border-brick/10 pb-5">
              <div className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brick text-shell">
                  <Icon name={group.icon} className="size-6" />
                </span>
                <div>
                  <h2 id={`${group.key}-title`} className="text-2xl text-brick-950 uppercase sm:text-3xl">
                    {t(`categories.${group.key}.title`)}
                  </h2>
                  <p className="mt-1 max-w-xl text-sm text-charcoal/75 sm:text-base">{t(`categories.${group.key}.body`)}</p>
                </div>
              </div>
              <p className="eyebrow text-[0.625rem] text-brick/70">{t("count", { count: group.items.length })}</p>
            </header>

            <div className="reveal-stagger mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((community) => (
                <CommunityCard
                  key={community.slug}
                  name={localize(community.name, locale)}
                  tagline={localize(community.tagline, locale)}
                  description={localize(community.description, locale)}
                  image={community.image}
                  icon={community.icon}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="container-site pb-14 sm:pb-20">
        <div className="reveal relative isolate overflow-hidden rounded-2xl bg-botanical px-6 py-10 text-shell sm:px-12 sm:py-16">
          <DotPattern className="absolute inset-0 -z-10 size-full text-botanical-900" />
          <h2 className="max-w-lg text-2xl uppercase sm:text-4xl">{t("ctaTitle")}</h2>
          <p className="mt-4 max-w-md text-shell/85">{t("ctaBody")}</p>
          <ExternalButtonLink href={socials.instagram} variant="outline-light" className="mt-8 bg-botanical">
            {tCommon("followInstagram")}
          </ExternalButtonLink>
        </div>
      </section>
    </>
  );
}
