import { getTranslations, setRequestLocale } from "next-intl/server";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { PageHero } from "@/components/sections/PageHero";
import { Icon, type IconName } from "@/components/ui/Icon";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { SplitSection } from "@/components/ui/SplitSection";
import { socials } from "@/content/site";
import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { keyedOptions } from "@/lib/forms";
import { infoPageMetadata } from "@/lib/metadata";

const topics = ["general", "partnership", "press", "event", "careers", "feedback"] as const;

export function generateMetadata({ params }: PageProps<"/[locale]/contact">) {
  return infoPageMetadata(params, "contact", "/contact");
}

const channelClass =
  "group flex items-start gap-4 rounded-xl border border-brick/10 bg-white/60 p-4 transition-colors hover:border-brick/40 hover:bg-white";

function ChannelContent({ icon, title, body, external }: { icon: IconName; title: string; body: string; external?: boolean }) {
  return (
    <>
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brick text-shell">
        <Icon name={icon} className="size-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold tracking-[0.12em] text-brick-950 uppercase">{title}</span>
        <span className="mt-1 block text-sm text-charcoal/70">{body}</span>
      </span>
      <Icon
        name={external ? "arrow-up-right" : "arrow-right"}
        className="mt-1 size-4 text-brick opacity-40 transition-opacity group-hover:opacity-100"
      />
    </>
  );
}

export default async function ContactPage({ params }: PageProps<"/[locale]/contact">) {
  setRequestLocale((await params).locale as Locale);
  const t = await getTranslations("contact");
  const tf = await getTranslations("forms.fields");

  return (
    <>
      <PageHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} body={t("hero.body")} />

      <SplitSection
        intro={
          <div>
            <SectionIntro eyebrow={t("channels.eyebrow")} title={t("channels.title")} />
            <div className="mt-6 space-y-3">
              <Link href="/locations" className={channelClass}>
                <ChannelContent icon="pin" title={t("channels.visit.title")} body={t("channels.visit.body")} />
              </Link>
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className={channelClass}>
                <ChannelContent icon="instagram" title={t("channels.instagram.title")} body={t("channels.instagram.body")} external />
              </a>
              <a href={socials.tiktok} target="_blank" rel="noopener noreferrer" className={channelClass}>
                <ChannelContent icon="tiktok" title={t("channels.tiktok.title")} body={t("channels.tiktok.body")} external />
              </a>
            </div>
          </div>
        }
      >
        <p className="eyebrow text-brick">{t("form.eyebrow")}</p>
        <h2 className="mt-3 mb-6 text-2xl leading-tight text-brick-950 uppercase sm:text-3xl">{t("form.title")}</h2>
        <InquiryForm
          submitLabel={t("form.submit")}
          successTitle={t("form.successTitle")}
          successBody={t("form.successBody")}
          fields={[
            { name: "name", type: "text", label: tf("name"), required: true, width: "half", autoComplete: "name" },
            { name: "email", type: "email", label: tf("email"), required: true, width: "half", autoComplete: "email" },
            { name: "phone", type: "tel", label: tf("phone"), width: "half", autoComplete: "tel" },
            {
              name: "topic",
              type: "select",
              label: tf("topic"),
              required: true,
              width: "half",
              options: keyedOptions(topics, (key) => t(`topics.${key}`)),
            },
            { name: "message", type: "textarea", label: tf("message"), required: true },
          ]}
        />
      </SplitSection>
    </>
  );
}
