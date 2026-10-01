import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { DotPattern } from "@/components/brand/Supergraphic";
import { PageHero } from "@/components/sections/PageHero";
import { ExternalButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { communities } from "@/content/community";
import { socials } from "@/content/site";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/cn";
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

  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} body={t("body")} />

      <section className="container-site space-y-12 py-12 sm:space-y-24 sm:py-24">
        {communities.map((community, index) => (
          <article key={community.slug} className="reveal grid items-center gap-5 md:grid-cols-2 md:gap-12">
            <div
              className={cn(
                "relative aspect-[16/10] overflow-hidden rounded-xl bg-brick md:aspect-[4/3]",
                index % 2 === 1 && "md:order-2",
              )}
            >
              <Image
                src={community.image}
                alt={localize(community.name, locale)}
                fill
                sizes="(min-width: 768px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <div>
              <Icon name={community.icon} className="size-6 text-brick sm:size-7" />
              <h2 className="mt-3 text-2xl text-brick-950 uppercase sm:mt-4 sm:text-4xl">{localize(community.name, locale)}</h2>
              <p className="mt-1 font-display text-base text-brick sm:mt-2 sm:text-lg">{localize(community.tagline, locale)}</p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal/80 sm:mt-4 sm:text-base">{localize(community.description, locale)}</p>
            </div>
          </article>
        ))}
      </section>

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
