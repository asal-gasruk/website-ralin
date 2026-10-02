import { getTranslations, setRequestLocale } from "next-intl/server";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { Icon } from "@/components/ui/Icon";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { SplitSection } from "@/components/ui/SplitSection";
import { roles } from "@/content/careers";
import type { Locale } from "@/i18n/routing";
import { locationOptions } from "@/lib/forms";
import { localize } from "@/lib/localize";
import { infoPageMetadata } from "@/lib/metadata";

export function generateMetadata({ params }: PageProps<"/[locale]/careers">) {
  return infoPageMetadata(params, "careers", "/careers");
}

export default async function CareersPage({ params }: PageProps<"/[locale]/careers">) {
  const locale = (await params).locale as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("careers");
  const tf = await getTranslations("forms.fields");

  return (
    <>
      <PageHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} body={t("hero.body")} />

      <SplitSection intro={<SectionIntro eyebrow={t("why.eyebrow")} title={t("why.title")} />}>
        <FeatureGrid
          columns={2}
          items={[
            { icon: "coffee", title: t("perks.learn.title"), body: t("perks.learn.body") },
            { icon: "sparkle", title: t("perks.grow.title"), body: t("perks.grow.body") },
            { icon: "users", title: t("perks.community.title"), body: t("perks.community.body") },
            { icon: "heart", title: t("perks.team.title"), body: t("perks.team.body") },
          ]}
        />
      </SplitSection>

      <SplitSection intro={<SectionIntro eyebrow={t("roles.eyebrow")} title={t("roles.title")} />}>
        {roles.length === 0 ? (
          <p className="text-charcoal/75">{t("roles.empty")}</p>
        ) : (
          <ul className="reveal-stagger divide-y divide-brick/10 border-y border-brick/10">
            {roles.map((role) => (
              <li key={role.slug} className="flex flex-wrap items-center justify-between gap-3 py-5">
                <div>
                  <h3 className="text-base text-brick-950 uppercase sm:text-lg">{localize(role.title, locale)}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-charcoal/70">
                    <Icon name="pin" className="size-3.5 text-brick" />
                    {role.location}
                    <span className="ml-2 rounded-full bg-shell px-2.5 py-0.5 text-[0.625rem] font-semibold tracking-[0.12em] text-brick uppercase">
                      {t(`types.${role.type}`)}
                    </span>
                  </p>
                </div>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.14em] text-brick uppercase hover:text-rust"
                >
                  {t("roles.apply")}
                  <Icon name="arrow-right" className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </SplitSection>

      <SplitSection
        id="apply"
        intro={<SectionIntro eyebrow={t("apply.eyebrow")} title={t("apply.title")} body={t("apply.body")} />}
      >
        <InquiryForm
          submitLabel={t("apply.submit")}
          successTitle={t("apply.successTitle")}
          successBody={t("apply.successBody")}
          fields={[
            { name: "name", type: "text", label: tf("name"), required: true, width: "half", autoComplete: "name" },
            { name: "email", type: "email", label: tf("email"), required: true, width: "half", autoComplete: "email" },
            { name: "phone", type: "tel", label: tf("phone"), required: true, width: "half", autoComplete: "tel" },
            {
              name: "position",
              type: "select",
              label: tf("position"),
              required: true,
              width: "half",
              options: [
                ...roles.map((role) => ({ value: role.slug, label: localize(role.title, locale) })),
                { value: "other", label: tf("other") },
              ],
            },
            { name: "location", type: "select", label: tf("location"), width: "half", options: locationOptions(tf("anyLocation")) },
            { name: "portfolio", type: "text", label: tf("portfolio"), width: "half", placeholder: "https://" },
            { name: "message", type: "textarea", label: tf("message") },
          ]}
        />
      </SplitSection>
    </>
  );
}
