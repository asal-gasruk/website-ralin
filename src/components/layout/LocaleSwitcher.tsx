"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/cn";

export function LocaleSwitcher({ className }: { className?: string }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const current = useLocale();

  return (
    <div role="group" aria-label={t("language")} className={cn("inline-flex h-9 items-center rounded-md border border-shell/30 bg-brick-950/30 p-0.5 backdrop-blur-sm", className)}>
      {routing.locales.map((locale) => (
        <Link
          key={locale}
          href={pathname}
          locale={locale}
          aria-current={locale === current ? "true" : undefined}
          className={cn(
            "grid h-full place-items-center rounded px-2.5 text-[0.6875rem] font-semibold tracking-[0.14em] uppercase transition-colors",
            locale === current ? "bg-shell text-brick" : "text-shell/80 hover:text-shell",
          )}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
