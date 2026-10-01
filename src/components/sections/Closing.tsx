import Image from "next/image";
import { useTranslations } from "next-intl";

export function Closing() {
  const t = useTranslations("closing");

  return (
    <section className="relative isolate overflow-hidden bg-brick-950">
      <Image src="/images/com-business.webp" alt="" fill sizes="100vw" className="-z-20 object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brick-950 via-brick-950/85 to-brick-950/60" />
      <div className="container-site grid gap-6 py-16 sm:gap-8 sm:py-24 lg:grid-cols-12 lg:items-center lg:py-28">
        <p className="reveal max-w-xs text-sm leading-relaxed text-shell/80 lg:col-span-4">{t("body")}</p>
        <h2 className="reveal text-[1.75rem] leading-[1.05] text-shell uppercase sm:text-5xl lg:col-span-8 lg:text-6xl">
          <span className="block">{t("line1")}</span>
          <span className="block">{t("line2")}</span>
          <span className="block text-orange">{t("line3")}</span>
        </h2>
      </div>
    </section>
  );
}
