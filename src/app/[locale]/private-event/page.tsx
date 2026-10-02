import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { PageHero } from "@/components/sections/PageHero";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { Icon } from "@/components/ui/Icon";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { SplitSection } from "@/components/ui/SplitSection";
import type { Locale } from "@/i18n/routing";
import { locationOptions } from "@/lib/forms";
import { infoPageMetadata } from "@/lib/metadata";

// TODO: sesuaikan fasilitas & kapasitas per lokasi dengan tim operasional
const included = ["space", "food", "team", "flexible"] as const;

export function generateMetadata({ params }: PageProps<"/[locale]/private-event">) {
  return infoPageMetadata(params, "privateEvent", "/private-event");
}

export default async function PrivateEventPage({ params }: PageProps<"/[locale]/private-event">) {
  setRequestLocale((await params).locale as Locale);
  const t = await getTranslations("privateEvent");
  const tf = await getTranslations("forms.fields");

  const occasions = [
    { key: "meeting", icon: "users" },
    { key: "celebration", icon: "cake" },
    { key: "community", icon: "music" },
    { key: "launch", icon: "sparkle" },
  ] as const;

  return (
    <>
      <PageHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} body={t("hero.body")} />

      <SplitSection intro={<SectionIntro eyebrow={t("types.eyebrow")} title={t("types.title")} />}>
        <FeatureGrid
          columns={2}
          items={occasions.map(({ key, icon }) => ({
            icon,
            title: t(`types.${key}.title`),
            body: t(`types.${key}.body`),
          }))}
        />
      </SplitSection>

      <SplitSection intro={<SectionIntro eyebrow={t("included.eyebrow")} title={t("included.title")} />}>
        <div className="grid items-center gap-6 md:grid-cols-2">
          <ul className="reveal-stagger space-y-3">
            {included.map((key) => (
              <li key={key} className="flex items-start gap-3 rounded-xl border border-brick/10 bg-white/60 p-4">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brick text-shell">
                  <Icon name="check" className="size-4" />
                </span>
                <span className="pt-0.5 text-sm text-brick-950">{t(`included.${key}`)}</span>
              </li>
            ))}
          </ul>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-brick md:aspect-[4/5]">
            <Image src="/images/com-business.webp" alt="" fill sizes="(min-width: 768px) 30vw, 90vw" className="object-cover" />
          </div>
        </div>
      </SplitSection>

      <SplitSection intro={<SectionIntro eyebrow={t("form.eyebrow")} title={t("form.title")} />}>
        <InquiryForm
          submitLabel={t("form.submit")}
          successTitle={t("form.successTitle")}
          successBody={t("form.successBody")}
          fields={[
            { name: "name", type: "text", label: tf("name"), required: true, width: "half", autoComplete: "name" },
            { name: "email", type: "email", label: tf("email"), required: true, width: "half", autoComplete: "email" },
            { name: "phone", type: "tel", label: tf("phone"), required: true, width: "half", autoComplete: "tel" },
            {
              name: "eventType",
              type: "select",
              label: tf("eventType"),
              required: true,
              width: "half",
              options: [
                ...occasions.map(({ key }) => ({ value: key, label: t(`types.${key}.title`) })),
                { value: "other", label: tf("other") },
              ],
            },
            { name: "location", type: "select", label: tf("location"), required: true, width: "half", options: locationOptions(tf("anyLocation")) },
            { name: "date", type: "date", label: tf("date"), required: true, width: "half" },
            { name: "guests", type: "number", label: tf("guests"), required: true, width: "half", min: 5, max: 200 },
            { name: "message", type: "textarea", label: tf("message") },
          ]}
        />
      </SplitSection>
    </>
  );
}
