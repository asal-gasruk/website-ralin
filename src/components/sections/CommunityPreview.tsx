import { useLocale, useTranslations } from "next-intl";
import { PhotoCard } from "@/components/cards/PhotoCard";
import { ButtonLink } from "@/components/ui/Button";
import { CardRail } from "@/components/ui/CardRail";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { SplitSection } from "@/components/ui/SplitSection";
import { communities } from "@/content/community";
import { localize } from "@/lib/localize";

export function CommunityPreview() {
  const t = useTranslations("community");
  const locale = useLocale();

  return (
    <SplitSection
      intro={
        <SectionIntro
          eyebrow={t("eyebrow")}
          title={t("title")}
          body={t("body")}
          action={
            <ButtonLink href="/community" variant="text">
              {t("cta")}
            </ButtonLink>
          }
        />
      }
    >
      <CardRail className="sm:grid-cols-2 md:grid-cols-3">
        {communities.map((community) => (
          <PhotoCard
            key={community.slug}
            aspect="landscape"
            image={community.image}
            icon={community.icon}
            title={localize(community.name, locale)}
            body={localize(community.tagline, locale)}
          />
        ))}
      </CardRail>
    </SplitSection>
  );
}
