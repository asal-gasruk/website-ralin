import { useTranslations } from "next-intl";
import { MemberCard } from "@/components/brand/MemberCard";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const highlights = ["points", "birthday", "events"] as const;

/** Ajakan bergabung membership di homepage. */
export function MembershipTeaser() {
  const t = useTranslations("membership");

  return (
    <section className="container-site py-12 sm:py-20">
      <div className="reveal relative isolate grid items-center gap-10 overflow-hidden rounded-3xl bg-brick-950 px-6 py-10 text-shell sm:px-12 sm:py-14 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-orange">{t("teaser.eyebrow")}</p>
          <h2 className="mt-3 text-3xl leading-[1.05] uppercase sm:text-4xl">{t("teaser.title")}</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-shell/80 sm:text-base">{t("teaser.body")}</p>
          <ul className="mt-6 space-y-2.5">
            {highlights.map((key) => (
              <li key={key} className="flex items-center gap-3 text-sm text-shell/90">
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-orange text-brick-950">
                  <Icon name="check" className="size-3.5" />
                </span>
                {t(`benefits.${key}.title`)}
              </li>
            ))}
          </ul>
          <ButtonLink href="/membership#register" variant="accent" className="mt-8 justify-center">
            {t("teaser.cta")}
          </ButtonLink>
        </div>
        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <MemberCard
            holderLabel={t("card.holder")}
            holderName={t("card.name")}
            badge={t("card.badge")}
            className="rotate-[-4deg] transition-transform duration-500 hover:rotate-0"
          />
        </div>
      </div>
    </section>
  );
}
