import { useLocale, useTranslations } from "next-intl";
import { MenuCard } from "@/components/cards/MenuCard";
import { ButtonLink } from "@/components/ui/Button";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { SplitSection } from "@/components/ui/SplitSection";
import { menuItems } from "@/content/menu";
import { localize } from "@/lib/localize";

export function Picks() {
  const t = useTranslations("picks");
  const locale = useLocale();
  const picks = menuItems.filter((item) => item.isPick);

  return (
    <SplitSection
      intro={
        <SectionIntro
          eyebrow={t("eyebrow")}
          title={t("title")}
          body={t("body")}
          action={
            <ButtonLink href="/menu" variant="text">
              {t("cta")}
            </ButtonLink>
          }
        />
      }
    >
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
        {picks.map((item) => (
          <MenuCard
            key={item.slug}
            name={item.name}
            description={localize(item.description, locale)}
            image={item.image}
          />
        ))}
      </div>
    </SplitSection>
  );
}
