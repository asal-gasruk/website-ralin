import { useTranslations } from "next-intl";
import { StarMark } from "@/components/brand/Supergraphic";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-brick-950">
      <StarMark className="absolute -right-20 top-1/2 -z-10 size-[28rem] -translate-y-1/2 text-brick-900" />
      <div className="container-site pt-24">
        <p className="eyebrow text-orange">404</p>
        <h1 className="mt-4 text-5xl text-shell uppercase sm:text-6xl">{t("title")}</h1>
        <p className="mt-4 max-w-md text-shell/80">{t("body")}</p>
        <ButtonLink href="/" className="mt-8">
          {t("cta")}
        </ButtonLink>
      </div>
    </section>
  );
}
