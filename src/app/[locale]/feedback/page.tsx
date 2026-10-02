import { getTranslations, setRequestLocale } from "next-intl/server";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { PageHero } from "@/components/sections/PageHero";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { SplitSection } from "@/components/ui/SplitSection";
import { locations } from "@/content/locations";
import type { Locale } from "@/i18n/routing";
import { infoPageMetadata } from "@/lib/metadata";

export function generateMetadata({ params }: PageProps<"/[locale]/feedback">) {
  return infoPageMetadata(params, "feedback", "/feedback");
}

export default async function FeedbackPage({ params }: PageProps<"/[locale]/feedback">) {
  setRequestLocale((await params).locale as Locale);
  const t = await getTranslations("feedback");
  const tf = await getTranslations("forms.fields");

  return (
    <>
      <PageHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} body={t("hero.body")} />

      <SplitSection intro={<SectionIntro eyebrow={t("form.eyebrow")} title={t("form.title")} body={t("form.body")} />}>
        <InquiryForm
          submitLabel={t("form.submit")}
          successTitle={t("form.successTitle")}
          successBody={t("form.successBody")}
          fields={[
            { name: "rating", type: "rating", label: tf("rating"), required: true },
            {
              name: "location",
              type: "select",
              label: tf("location"),
              required: true,
              width: "half",
              options: locations.map((location) => ({ value: location.slug, label: location.name })),
            },
            { name: "visitDate", type: "date", label: tf("visitDate"), width: "half" },
            { name: "name", type: "text", label: tf("name"), width: "half", autoComplete: "name" },
            { name: "email", type: "email", label: tf("email"), width: "half", autoComplete: "email" },
            { name: "message", type: "textarea", label: tf("message"), required: true },
          ]}
        />
      </SplitSection>
    </>
  );
}
