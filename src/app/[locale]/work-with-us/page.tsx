import { getTranslations, setRequestLocale } from "next-intl/server";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { SplitSection } from "@/components/ui/SplitSection";
import type { Locale } from "@/i18n/routing";
import { infoPageMetadata } from "@/lib/metadata";

const steps = ["one", "two", "three"] as const;

export function generateMetadata({ params }: PageProps<"/[locale]/work-with-us">) {
  return infoPageMetadata(params, "workWithUs", "/work-with-us");
}

export default async function WorkWithUsPage({ params }: PageProps<"/[locale]/work-with-us">) {
  setRequestLocale((await params).locale as Locale);
  const t = await getTranslations("workWithUs");
  const tf = await getTranslations("forms.fields");

  const collaborations = [
    { key: "brand", icon: "coffee" },
    { key: "community", icon: "users" },
    { key: "popup", icon: "sparkle" },
    { key: "corporate", icon: "business" },
  ] as const;

  return (
    <>
      <PageHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} body={t("hero.body")} />

      <SplitSection intro={<SectionIntro eyebrow={t("types.eyebrow")} title={t("types.title")} />}>
        <FeatureGrid
          columns={2}
          items={collaborations.map(({ key, icon }) => ({
            icon,
            title: t(`types.${key}.title`),
            body: t(`types.${key}.body`),
          }))}
        />
      </SplitSection>

      <SplitSection intro={<SectionIntro eyebrow={t("steps.eyebrow")} title={t("steps.title")} />}>
        <ol className="reveal-stagger grid gap-4 sm:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step} className="relative rounded-xl bg-brick-950 p-5 text-shell sm:p-6">
              <span className="font-display text-4xl font-semibold text-orange">0{index + 1}</span>
              <h3 className="mt-4 text-sm tracking-[0.12em] uppercase">{t(`steps.${step}.title`)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-shell/75">{t(`steps.${step}.body`)}</p>
            </li>
          ))}
        </ol>
      </SplitSection>

      <SplitSection intro={<SectionIntro eyebrow={t("form.eyebrow")} title={t("form.title")} />}>
        <InquiryForm
          submitLabel={t("form.submit")}
          successTitle={t("form.successTitle")}
          successBody={t("form.successBody")}
          fields={[
            { name: "name", type: "text", label: tf("name"), required: true, width: "half", autoComplete: "name" },
            { name: "company", type: "text", label: tf("company"), required: true, width: "half", autoComplete: "organization" },
            { name: "email", type: "email", label: tf("email"), required: true, width: "half", autoComplete: "email" },
            { name: "phone", type: "tel", label: tf("phone"), width: "half", autoComplete: "tel" },
            {
              name: "collabType",
              type: "select",
              label: tf("collabType"),
              required: true,
              options: [
                ...collaborations.map(({ key }) => ({ value: key, label: t(`types.${key}.title`) })),
                { value: "other", label: tf("other") },
              ],
            },
            { name: "message", type: "textarea", label: tf("message"), required: true },
          ]}
        />
      </SplitSection>
    </>
  );
}
