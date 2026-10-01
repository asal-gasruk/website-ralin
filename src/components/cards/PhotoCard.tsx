import Image from "next/image";
import { Icon, type IconName } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

interface PhotoCardProps {
  image: string;
  title: string;
  body: string;
  badge?: string;
  icon?: IconName;
  aspect?: "portrait" | "landscape";
  sizes?: string;
}

/** Kartu foto dengan teks di atas overlay gelap (Experience & Community). */
export function PhotoCard({
  image,
  title,
  body,
  badge,
  icon,
  aspect = "portrait",
  sizes = "(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw",
}: PhotoCardProps) {
  return (
    <article
      className={cn(
        "group relative isolate overflow-hidden rounded-xl bg-brick-900",
        aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]",
      )}
    >
      <Image
        src={image}
        alt=""
        fill
        sizes={sizes}
        className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brick-950/90 via-brick-950/20 to-transparent" />
      {badge && (
        <span className="absolute top-3 left-3 rounded bg-brick px-2 py-1 text-[0.625rem] font-semibold tracking-[0.14em] text-shell uppercase">
          {badge}
        </span>
      )}
      <div className="absolute inset-x-0 bottom-0 p-4 text-shell sm:p-5">
        {icon && <Icon name={icon} className="mb-2 size-5 text-shell/90" />}
        <h3 className="text-lg leading-tight">{title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-shell/80 sm:text-sm">{body}</p>
      </div>
    </article>
  );
}
