import Image from "next/image";
import { useTranslations } from "next-intl";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";
import { mapsUrl } from "@/lib/localize";

interface LocationCardProps {
  name: string;
  tag: string;
  area: string;
  address?: string;
  hours?: string;
  image: string;
  mapsQuery: string;
  /** list = baris ringkas (thumbnail kiri) di mobile, kembali bertumpuk mulai sm. */
  layout?: "stack" | "list";
}

export function LocationCard({
  name,
  tag,
  area,
  address,
  hours,
  image,
  mapsQuery,
  layout = "stack",
}: LocationCardProps) {
  const t = useTranslations("common");
  const isList = layout === "list";

  return (
    <article className={cn("group", isList ? "grid grid-cols-[7rem_1fr] gap-4 sm:flex sm:flex-col" : "flex flex-col")}>
      <div
        className={cn(
          "relative overflow-hidden rounded-xl bg-brick",
          isList ? "aspect-square sm:aspect-[4/3]" : "aspect-[4/3]",
        )}
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 80vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span
          className={cn(
            "absolute top-3 left-3 rounded bg-brick px-2 py-1 text-[0.625rem] font-semibold tracking-[0.14em] text-shell uppercase",
            isList && "hidden sm:inline",
          )}
        >
          {tag}
        </span>
      </div>

      <div className={cn("min-w-0", isList ? "self-center sm:mt-4" : "mt-4")}>
        {isList && <p className="eyebrow mb-1 text-[0.625rem] text-brick sm:hidden">{tag}</p>}
        <h3 className="text-sm tracking-wide text-brick-950 uppercase">{name}</h3>
        <ul className="mt-2 space-y-1 text-xs text-charcoal/75 sm:text-sm">
          <li className="flex items-start gap-1.5">
            <Icon name="pin" className="mt-0.5 size-3.5 text-brick" />
            <span>{address ?? area}</span>
          </li>
          <li className="flex items-start gap-1.5">
            <Icon name="clock" className="mt-0.5 size-3.5 text-brick" />
            <span>{hours ?? t("detailsSoon")}</span>
          </li>
        </ul>
        <a
          href={mapsUrl(mapsQuery)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-[0.6875rem] font-semibold tracking-[0.14em] text-brick uppercase hover:text-rust"
        >
          {t("viewLocation")}
          <Icon name="arrow-up-right" className="size-3.5" />
        </a>
      </div>
    </article>
  );
}
