"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Logo } from "@/components/brand/Logo";
import { Icon } from "@/components/ui/Icon";
import { mainNav } from "@/content/site";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { LocaleSwitcher } from "./LocaleSwitcher";

const SCROLL_THRESHOLD = 24;

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const isActive = (href: string) => !href.startsWith("/#") && pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        isScrolled || isOpen ? "bg-brick-950/95 shadow-lg backdrop-blur" : "bg-transparent",
      )}
    >
      <div className="container-site flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link href="/" aria-label={t("home")} onClick={closeMenu} className="shrink-0">
          <Logo tone="light" />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {mainNav.map((item) => (
              <li key={item.key}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-[0.6875rem] font-semibold tracking-[0.18em] uppercase transition-colors hover:text-orange",
                    isActive(item.href) ? "text-orange" : "text-shell",
                  )}
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LocaleSwitcher />
          </div>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? t("closeMenu") : t("openMenu")}
            className="grid size-10 place-items-center rounded-md text-shell lg:hidden"
          >
            <Icon name={isOpen ? "close" : "menu"} className="size-6" />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!isOpen}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-shell/10 bg-brick-950 lg:hidden"
      >
        <nav aria-label="Mobile" className="container-site animate-fade-in flex flex-col py-4">
          {mainNav.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={closeMenu}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "group flex items-center justify-between border-b border-shell/10 py-3.5 font-display text-lg font-semibold tracking-wide uppercase transition-colors",
                isActive(item.href) ? "text-orange" : "text-shell hover:text-orange",
              )}
            >
              {t(item.key)}
              <Icon name="arrow-right" className="size-4 opacity-40 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ))}
          <div className="mt-6">
            <LocaleSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}
