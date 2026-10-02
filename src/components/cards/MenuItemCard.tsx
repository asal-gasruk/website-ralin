import Image from "next/image";
import { useTranslations } from "next-intl";
import { Icon } from "@/components/ui/Icon";
import type { MenuEntry, MenuTag } from "@/content/types";
import { cn } from "@/lib/cn";
import { formatPrice } from "@/lib/localize";

const tagStyle: Record<MenuTag, string> = {
  bestSeller: "bg-orange text-brick-950",
  recommended: "bg-brick text-shell",
  spicy: "bg-rust text-shell",
};

export function MenuItemCard({ item }: { item: MenuEntry }) {
  const t = useTranslations("menuPage");
  const priceLabel = item.priceOptions?.length
    ? `${formatPrice(Math.min(...item.priceOptions.map((o) => o.price)))}–${formatPrice(Math.max(...item.priceOptions.map((o) => o.price)))}`
    : formatPrice(item.price);

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-brick/10 bg-white transition-shadow hover:shadow-lg hover:shadow-brick/10">
      <div className="relative aspect-square overflow-hidden bg-white">
        {item.image && (
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 46vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        {item.tags && (
          <ul className="absolute top-2 left-2 flex flex-wrap gap-1">
            {item.tags.map((tag) => (
              <li
                key={tag}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.5625rem] font-semibold tracking-[0.08em] uppercase",
                  tagStyle[tag],
                )}
              >
                {tag === "bestSeller" && <Icon name="star" className="size-2.5" />}
                {t(`tags.${tag}`)}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-[0.8125rem] leading-snug tracking-wide text-brick-950 uppercase sm:text-sm">{item.name}</h3>
          <p className="shrink-0 font-display text-sm font-semibold text-brick sm:text-base">{priceLabel}</p>
        </div>

        {(item.serve || item.options) && (
          <p className="mt-1 text-[0.6875rem] font-medium text-brick/80">
            {item.serve && t(item.serve)}
            {item.serve && item.options && " · "}
            {item.options}
          </p>
        )}
        {item.description && <p className="mt-1.5 text-xs leading-relaxed text-charcoal/70">{item.description}</p>}

        {item.priceOptions && (
          <ul className="mt-2 space-y-0.5 text-xs text-charcoal/80">
            {item.priceOptions.map((option) => (
              <li key={option.label} className="flex justify-between gap-2">
                <span>{option.label}</span>
                <span className="font-semibold text-brick">{formatPrice(option.price)}</span>
              </li>
            ))}
          </ul>
        )}

        {(item.kcal || item.protein) && (
          <p className="mt-auto pt-2 text-[0.6875rem] text-charcoal/50">
            {[item.kcal, item.protein].filter(Boolean).join(" · ")}
          </p>
        )}
      </div>
    </article>
  );
}
