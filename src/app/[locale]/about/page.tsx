import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Pillars } from "@/components/sections/Pillars";
import { ButtonLink } from "@/components/ui/Button";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { SplitSection } from "@/components/ui/SplitSection";
import { communities } from "@/content/community";
import { locations } from "@/content/locations";
import type { Locale } from "@/i18n/routing";
import { infoPageMetadata } from "@/lib/metadata";

const mosaic = [
  "/images/loc-saparua.webp",
  "/images/day-morning.webp",
  "/images/com-padel.webp",
  "/images/menu-signature-latte.webp",
];

export function generateMetadata({ params }: PageProps<"/[locale]/about">) {
  return infoPageMetadata(params, "about", "/about");
}

export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  setRequestLocale((await params).locale as Locale);
  const t = await getTranslations("about");

  const stats = [
    { value: String(locations.length), label: t("stats.locations") },
    { value: String(communities.length), label: t("stats.communities") },
    { value: "07:00", label: t("stats.open") },
    { value: "Bandung", label: t("stats.city") },
  ];

  return (
    <>
      <PageHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} body={t("hero.body")} />

      <SplitSection intro={<SectionIntro eyebrow={t("story.eyebrow")} title={t("story.title")} />}>
        <div className="space-y-5 text-base leading-relaxed text-charcoal sm:text-lg">
          <p>{t("story.p1")}</p>
          <p>{t("story.p2")}</p>
          <p>{t("story.p3")}</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
          {mosaic.map((src, index) => (
            <div
              key={src}
              className={index % 3 === 0 ? "relative aspect-[4/5] overflow-hidden rounded-xl bg-brick" : "relative aspect-square overflow-hidden rounded-xl bg-brick"}
            >
              <Image src={src} alt="" fill sizes="(min-width: 1024px) 30vw, 45vw" className="object-cover" />
            </div>
          ))}
        </div>
      </SplitSection>

      <section className="bg-brick-950 text-shell">
        <dl className="container-site reveal-stagger grid grid-cols-2 gap-y-8 py-12 sm:py-16 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l border-shell/15 pl-4 sm:pl-6">
              <dd className="font-display text-3xl font-semibold text-orange sm:text-5xl">{stat.value}</dd>
              <dt className="mt-2 text-xs tracking-[0.14em] text-shell/70 uppercase">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <Pillars />

      <CtaBand
        title={t("cta.title")}
        body={t("cta.body")}
        actions={
          <>
            <ButtonLink href="/locations" variant="outline-light" className="justify-center bg-brick">
              {t("cta.primary")}
            </ButtonLink>
            <ButtonLink href="/community" variant="text-light" className="justify-center">
              {t("cta.secondary")}
            </ButtonLink>
          </>
        }
      />
    </>
  );
}
