import { useTranslations } from "next-intl";
import { PhotoCard } from "@/components/cards/PhotoCard";
import { ButtonLink } from "@/components/ui/Button";
import { CardRail } from "@/components/ui/CardRail";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { SplitSection } from "@/components/ui/SplitSection";

const moments = [
  { key: "morning", image: "/images/day-morning.webp" },
  { key: "afternoon", image: "/images/day-afternoon.webp" },
  { key: "evening", image: "/images/day-evening.webp" },
] as const;

export function DayStride() {
  const t = useTranslations("day");

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
      <CardRail className="sm:grid-cols-3">
        {moments.map(({ key, image }) => (
          <PhotoCard
            key={key}
            image={image}
            badge={t(`${key}.label`)}
            title={t(`${key}.title`)}
            body={t(`${key}.body`)}
          />
        ))}
      </CardRail>
    </SplitSection>
  );
}
