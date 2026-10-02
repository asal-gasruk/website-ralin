import Image from "next/image";
import { useTranslations } from "next-intl";
import { Icon } from "@/components/ui/Icon";
import { mapsUrl } from "@/lib/localize";

interface LocationCardProps {
  name: string;
  tag: string;
  area: string;
  address?: string;
  hours?: string;
  image: string;
  mapsQuery: string;
}

export function LocationCard({
  name,
  tag,
  area,
  address,
  hours,
  image,
  mapsQuery,
}: LocationCardProps) {
  const t = useTranslations("common");

  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-brick">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 80vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded bg-brick px-2 py-1 text-[0.625rem] font-semibold tracking-[0.14em] text-shell uppercase">
          {tag}
        </span>
      </div>

      <div className="mt-4 min-w-0">
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
