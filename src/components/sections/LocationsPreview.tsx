import { useLocale, useTranslations } from "next-intl";
import { LocationCard } from "@/components/cards/LocationCard";
import { StripePattern } from "@/components/brand/Supergraphic";
import { ButtonLink } from "@/components/ui/Button";
import { CardRail } from "@/components/ui/CardRail";
import { Icon } from "@/components/ui/Icon";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { SplitSection } from "@/components/ui/SplitSection";
import { locations } from "@/content/locations";
import { localize, mapsUrl } from "@/lib/localize";

export function LocationsPreview() {
  const t = useTranslations("locations");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const featured = locations.filter((location) => location.isFeatured);

  return (
    <SplitSection
      intro={
        <SectionIntro
          eyebrow={t("eyebrow")}
          title={t("title")}
          body={t("body")}
          action={
            <ButtonLink href="/locations" variant="text">
              {t("cta")}
            </ButtonLink>
          }
        />
      }
    >
      <CardRail className="gap-y-8 sm:grid-cols-2 md:grid-cols-4">
        {featured.map((location) => (
          <LocationCard key={location.slug} {...location} tag={localize(location.tag, locale)} />
        ))}
        <a
          href={mapsUrl("Tedja Coffee Bandung")}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative isolate flex aspect-[4/3] flex-col justify-between self-start overflow-hidden rounded-xl bg-brick p-4 text-shell sm:aspect-auto sm:min-h-48 sm:self-stretch"
        >
          <StripePattern className="absolute inset-0 -z-10 size-full text-rust/60" />
          <span className="grid size-10 place-items-center rounded-full bg-brick-950/60">
            <Icon name="pin" className="size-5" />
          </span>
          <span className="flex items-end justify-between gap-3 rounded-md bg-brick-950/60 px-3 py-2.5 text-[0.6875rem] font-semibold tracking-[0.14em] uppercase transition-colors group-hover:bg-orange">
            {tCommon("openInMaps")}
            <Icon name="arrow-up-right" className="size-4" />
          </span>
        </a>
      </CardRail>
    </SplitSection>
  );
}
