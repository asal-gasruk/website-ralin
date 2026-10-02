import { getTranslations, setRequestLocale } from "next-intl/server";
import { MemberCard } from "@/components/brand/MemberCard";
import { StarMark } from "@/components/brand/Supergraphic";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { ButtonLink } from "@/components/ui/Button";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { Icon } from "@/components/ui/Icon";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { SplitSection } from "@/components/ui/SplitSection";
import { locations } from "@/content/locations";
import type { Locale } from "@/i18n/routing";
import { infoPageMetadata } from "@/lib/metadata";

// TODO: sesuaikan benefit & FAQ dengan aturan loyalty resmi sebelum rilis
const benefits = [
  { key: "points", icon: "star" },
  { key: "birthday", icon: "cake" },
  { key: "events", icon: "users" },
  { key: "early", icon: "coffee" },
  { key: "rewards", icon: "sparkle" },
  { key: "community", icon: "heart" },
] as const;

const steps = ["register", "visit", "redeem"] as const;
const faqs = ["free", "points", "where", "existing"] as const;

export function generateMetadata({ params }: PageProps<"/[locale]/membership">) {
  return infoPageMetadata(params, "membership", "/membership");
}

export default async function MembershipPage({ params }: PageProps<"/[locale]/membership">) {
  setRequestLocale((await params).locale as Locale);
  const t = await getTranslations("membership");
  const tf = await getTranslations("forms.fields");

  return (
    <>
      {/* Hero: copy + visual kartu member */}
      <section className="relative isolate overflow-hidden rounded-b-[2rem] bg-brick-950 text-shell lg:rounded-b-[3rem]">
        <StarMark className="absolute -top-24 -right-24 -z-10 size-96 text-brick-900" />
        <div className="container-site grid items-center gap-12 pt-28 pb-14 sm:pt-32 sm:pb-20 lg:grid-cols-2 lg:pt-40 lg:pb-24">
          <div>
            <p className="eyebrow animate-fade-up text-orange">{t("hero.eyebrow")}</p>
            <h1 className="animate-fade-up mt-3 text-[2.5rem] leading-[1] uppercase [animation-delay:100ms] sm:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="animate-fade-up mt-5 max-w-md text-base leading-relaxed text-shell/80 [animation-delay:200ms] sm:text-lg">
              {t("hero.body")}
            </p>
            <div className="animate-fade-up mt-8 flex flex-col gap-3 [animation-delay:300ms] sm:flex-row">
              <ButtonLink href="/membership#register" variant="accent" className="justify-center">
                {t("hero.cta")}
              </ButtonLink>
              <ButtonLink href="/membership#benefits" variant="outline-light" className="justify-center">
                {t("hero.secondary")}
              </ButtonLink>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm sm:max-w-md">
            <div className="absolute inset-0 translate-x-6 translate-y-6 rotate-6 rounded-2xl bg-shell/10" aria-hidden="true" />
            <MemberCard
              holderLabel={t("card.holder")}
              holderName={t("card.name")}
              badge={t("card.badge")}
              className="animate-fade-up rotate-[-5deg] [animation-delay:250ms]"
            />
          </div>
        </div>
      </section>

      <SplitSection
        id="benefits"
        intro={<SectionIntro eyebrow={t("benefitsIntro.eyebrow")} title={t("benefitsIntro.title")} body={t("benefitsIntro.body")} />}
      >
        <FeatureGrid
          columns={2}
          items={benefits.map(({ key, icon }) => ({
            icon,
            title: t(`benefits.${key}.title`),
            body: t(`benefits.${key}.body`),
          }))}
        />
      </SplitSection>

      <section className="bg-brick text-shell">
        <div className="container-site py-12 sm:py-16">
          <p className="reveal eyebrow text-orange">{t("steps.eyebrow")}</p>
          <h2 className="reveal mt-3 text-3xl uppercase sm:text-4xl">{t("steps.title")}</h2>
          <ol className="reveal-stagger mt-8 grid gap-4 sm:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step} className="rounded-xl border border-shell/15 bg-brick-900/50 p-5 sm:p-6">
                <span className="font-display text-4xl font-semibold text-orange">0{index + 1}</span>
                <h3 className="mt-4 text-sm tracking-[0.12em] uppercase">{t(`steps.${step}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-shell/75">{t(`steps.${step}.body`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SplitSection
        id="register"
        intro={<SectionIntro eyebrow={t("form.eyebrow")} title={t("form.title")} body={t("form.body")} />}
      >
        <InquiryForm
          submitLabel={t("form.submit")}
          successTitle={t("form.successTitle")}
          successBody={t("form.successBody")}
          fields={[
            { name: "name", type: "text", label: tf("name"), required: true, autoComplete: "name" },
            {
              name: "whatsapp",
              type: "tel",
              label: tf("whatsapp"),
              required: true,
              width: "half",
              autoComplete: "tel",
              placeholder: "08xx xxxx xxxx",
            },
            { name: "email", type: "email", label: tf("email"), width: "half", autoComplete: "email" },
            { name: "birthDate", type: "date", label: tf("birthDate"), width: "half", autoComplete: "bday" },
            {
              name: "favoriteLocation",
              type: "select",
              label: tf("favoriteLocation"),
              width: "half",
              options: locations.map((location) => ({ value: location.slug, label: location.name })),
            },
            { name: "terms", type: "checkbox", label: t("form.terms"), required: true },
            { name: "marketing", type: "checkbox", label: t("form.marketing") },
          ]}
        />
      </SplitSection>

      <section className="container-site pb-14 sm:pb-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="reveal lg:col-span-4">
            <SectionIntro eyebrow={t("faq.eyebrow")} title={t("faq.title")} />
          </div>
          <div className="reveal space-y-3 lg:col-span-8">
            {faqs.map((key) => (
              <details key={key} className="group rounded-xl border border-brick/10 bg-white/60 open:bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-sm font-semibold text-brick-950 [&::-webkit-details-marker]:hidden">
                  {t(`faq.items.${key}.q`)}
                  <Icon name="arrow-down" className="size-4 shrink-0 text-brick transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-charcoal/80">{t(`faq.items.${key}.a`)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
