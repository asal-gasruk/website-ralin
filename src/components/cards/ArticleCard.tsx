import Image from "next/image";
import { useTranslations } from "next-intl";
import { Icon } from "@/components/ui/Icon";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

interface ArticleCardProps {
  slug: string;
  title: string;
  category: string;
  excerpt?: string;
  image: string;
  size?: "default" | "large";
  /** list = baris ringkas (thumbnail kiri) di mobile, kembali bertumpuk mulai sm. */
  layout?: "stack" | "list";
  className?: string;
}

const badgeClass =
  "absolute top-3 left-3 rounded bg-brick px-2 py-1 text-[0.625rem] font-semibold tracking-[0.14em] text-shell uppercase";

export function ArticleCard({
  slug,
  title,
  category,
  excerpt,
  image,
  size = "default",
  layout = "stack",
  className,
}: ArticleCardProps) {
  const t = useTranslations("common");
  const isLarge = size === "large";
  const isList = layout === "list";

  return (
    <article className={cn("group", className)}>
      <Link href={`/journal/${slug}`} className={cn("block", isList && "grid grid-cols-[7rem_1fr] gap-4 sm:block")}>
        <div
          className={cn(
            "relative overflow-hidden rounded-xl bg-brick",
            isLarge ? "aspect-[16/10]" : "aspect-[4/3]",
            isList && "aspect-square sm:aspect-[4/3]",
          )}
        >
          <Image
            src={image}
            alt=""
            fill
            sizes={isLarge ? "(min-width: 1024px) 33vw, 90vw" : "(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 80vw"}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className={cn(badgeClass, isList && "hidden sm:inline")}>{category}</span>
        </div>
        <div className={cn(!isList && "mt-4", isList && "self-center sm:mt-4")}>
          {isList && <p className="eyebrow mb-1 text-[0.625rem] text-brick sm:hidden">{category}</p>}
          <h3 className={cn("leading-snug text-brick-950 group-hover:text-brick", isLarge ? "text-lg" : "text-base")}>
            {title}
          </h3>
          {excerpt && (
            <p className={cn("mt-1 text-sm leading-relaxed text-charcoal/75", isList && "line-clamp-2 sm:line-clamp-none")}>
              {excerpt}
            </p>
          )}
          <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-brick">
            {t("readMore")}
            <Icon name="arrow-right" className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </article>
  );
}
