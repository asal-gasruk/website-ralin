import Image from "next/image";
import { useTranslations } from "next-intl";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function Hero() {
  const t = useTranslations("hero");
  const tCommon = useTranslations("common");

  return (
    <section className="relative isolate flex min-h-[88svh] items-end overflow-hidden rounded-b-[2rem] bg-brick-950 lg:min-h-[92svh] lg:rounded-b-[3rem]">
      <Image
        src="/images/hero.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brick-950/95 via-brick-950/70 to-brick-950/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-brick-950/80 to-transparent" />

      <div className="container-site relative pt-28 pb-12 sm:pt-32 sm:pb-20 lg:pb-24">
        <h1 className="animate-fade-up max-w-xl text-[2.75rem] leading-[0.95] text-shell uppercase sm:text-7xl lg:text-8xl">
          {t("title")}
        </h1>
        <p className="animate-fade-up mt-6 max-w-sm text-base leading-relaxed text-shell/85 [animation-delay:120ms] sm:text-lg">
          {t("subtitle")}
        </p>
        <div className="animate-fade-up mt-8 flex flex-col gap-3 [animation-delay:240ms] sm:flex-row">
          <ButtonLink href="/#experience" className="justify-center">
            {t("explore")}
          </ButtonLink>
          <ButtonLink href="/locations" variant="outline-light" className="justify-center">
            {t("find")}
          </ButtonLink>
        </div>

        <SocialLinks direction="column" className="absolute right-4 bottom-24 hidden sm:right-6 md:flex lg:right-8" />

        <a
          href="#experience"
          className="absolute right-4 bottom-6 hidden items-center gap-2 text-[0.625rem] font-semibold tracking-[0.18em] text-shell/80 uppercase hover:text-shell sm:right-6 md:inline-flex lg:right-8"
        >
          {tCommon("scrollToExplore")}
          <Icon name="arrow-down" className="size-3.5" />
        </a>
      </div>
    </section>
  );
}
