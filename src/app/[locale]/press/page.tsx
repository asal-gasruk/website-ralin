import { getTranslations, setRequestLocale } from "next-intl/server";
import { Logo } from "@/components/brand/Logo";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { SplitSection } from "@/components/ui/SplitSection";
import { primarySwatches, secondarySwatches, type Swatch } from "@/content/brand";
import { locations } from "@/content/locations";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/cn";
import { infoPageMetadata } from "@/lib/metadata";

export function generateMetadata({ params }: PageProps<"/[locale]/press">) {
  return infoPageMetadata(params, "press", "/press");
}

function SwatchList({ title, swatches, large }: { title: string; swatches: Swatch[]; large?: boolean }) {
  return (
    <div>
      <h3 className="eyebrow text-brick">{title}</h3>
      <ul className={cn("reveal-stagger mt-3 grid gap-3", large ? "grid-cols-3" : "grid-cols-3 sm:grid-cols-6")}>
        {swatches.map((swatch) => (
          <li
            key={swatch.hex}
            style={{ backgroundColor: swatch.hex }}
            className={cn(
              "flex flex-col justify-end rounded-xl p-3 ring-1 ring-brick/10",
              large ? "aspect-[4/5]" : "aspect-square",
              swatch.ink === "light" ? "text-shell" : "text-brick-950",
            )}
          >
            <span className="text-[0.625rem] font-semibold tracking-[0.12em] uppercase">{swatch.name}</span>
            <span className="mt-0.5 font-mono text-xs opacity-80">{swatch.hex}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function PressPage({ params }: PageProps<"/[locale]/press">) {
  setRequestLocale((await params).locale as Locale);
  const t = await getTranslations("press");

  const facts = [
    { label: t("facts.tagline"), value: t("facts.taglineValue") },
    { label: t("facts.promise"), value: t("facts.promiseValue") },
    { label: t("facts.locations"), value: t("facts.locationsValue", { count: locations.length }) },
    { label: t("facts.city"), value: t("facts.cityValue") },
  ];

  const logoTiles = [
    { label: t("assets.onLight"), tone: "brick", bg: "bg-white" },
    { label: t("assets.onBrick"), tone: "light", bg: "bg-brick" },
    { label: t("assets.onShell"), tone: "brick", bg: "bg-shell" },
  ] as const;

  return (
    <>
      <PageHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} body={t("hero.body")} />

      <SplitSection intro={<SectionIntro eyebrow={t("facts.eyebrow")} title={t("facts.title")} />}>
        <dl className="reveal-stagger grid gap-4 sm:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact.label} className="rounded-xl border border-brick/10 bg-white/60 p-5">
              <dt className="eyebrow text-[0.625rem] text-brick">{fact.label}</dt>
              <dd className="mt-2 font-display text-xl font-semibold text-brick-950">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </SplitSection>

      <SplitSection
        intro={<SectionIntro eyebrow={t("assets.eyebrow")} title={t("assets.title")} body={t("assets.body")} />}
      >
        <ul className="reveal-stagger grid gap-3 sm:grid-cols-3">
          {logoTiles.map((tile) => (
            <li key={tile.label}>
              <div className={cn("grid aspect-[3/2] place-items-center rounded-xl ring-1 ring-brick/10", tile.bg)}>
                <Logo tone={tile.tone} />
              </div>
              <p className="mt-2 text-xs text-charcoal/70">{tile.label}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 space-y-8">
          <SwatchList title={t("assets.primary")} swatches={primarySwatches} large />
          <SwatchList title={t("assets.secondary")} swatches={secondarySwatches} />
        </div>
      </SplitSection>

      <CtaBand
        title={t("cta.title")}
        body={t("cta.body")}
        actions={
          <ButtonLink href="/contact" variant="outline-light" className="justify-center bg-brick">
            {t("cta.primary")}
          </ButtonLink>
        }
      />
    </>
  );
}
