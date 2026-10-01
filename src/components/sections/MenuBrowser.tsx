"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { MenuCard } from "@/components/cards/MenuCard";
import type { MenuCategory } from "@/content/types";
import { cn } from "@/lib/cn";

export interface MenuBrowserItem {
  slug: string;
  name: string;
  category: MenuCategory;
  description: string;
  image?: string;
  isPick?: boolean;
}

interface MenuBrowserProps {
  items: MenuBrowserItem[];
  categories: readonly MenuCategory[];
}

type Filter = MenuCategory | "all";

export function MenuBrowser({ items, categories }: MenuBrowserProps) {
  const t = useTranslations("menuPage");
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? items : items.filter((item) => item.category === filter);
  const filters: Filter[] = ["all", ...categories];

  return (
    <>
      <div role="group" aria-label={t("eyebrow")} className="flex flex-wrap gap-2">
        {filters.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => setFilter(value)}
            aria-pressed={filter === value}
            className={cn(
              "rounded-full border px-3.5 py-2 text-[0.6875rem] font-semibold sm:px-4 sm:text-xs tracking-[0.14em] uppercase transition-colors",
              filter === value
                ? "border-brick bg-brick text-shell"
                : "border-brick/25 text-brick hover:border-brick",
            )}
          >
            {value === "all" ? t("all") : t(`categories.${value}`)}
          </button>
        ))}
      </div>

      <div className="reveal-stagger mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-10 sm:grid-cols-3 sm:gap-y-10 lg:grid-cols-4">
        {visible.map((item) => (
          <MenuCard
            key={item.slug}
            name={item.name}
            description={item.description}
            image={item.image}
            badge={item.isPick ? t("pick") : undefined}
          />
        ))}
      </div>
    </>
  );
}
