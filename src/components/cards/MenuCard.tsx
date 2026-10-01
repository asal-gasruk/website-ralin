import Image from "next/image";
import { LogoMark } from "@/components/brand/Logo";
import { DotPattern } from "@/components/brand/Supergraphic";

interface MenuCardProps {
  name: string;
  description: string;
  image?: string;
  badge?: string;
}

export function MenuCard({ name, description, image, badge }: MenuCardProps) {
  return (
    <article className="group">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-brick">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          // Placeholder brand selama foto produk belum tersedia
          <div className="absolute inset-0 grid place-items-center text-rust">
            <DotPattern className="absolute inset-0 size-full" />
            <LogoMark className="relative w-1/3 text-shell" />
          </div>
        )}
        {badge && (
          <span className="absolute top-3 left-3 rounded bg-shell px-2 py-1 text-[0.625rem] font-semibold tracking-[0.14em] text-brick uppercase">
            {badge}
          </span>
        )}
      </div>
      <h3 className="mt-4 text-sm tracking-wide text-brick-950 uppercase">{name}</h3>
      <p className="mt-1 text-xs leading-relaxed text-charcoal/75 sm:text-sm">{description}</p>
    </article>
  );
}
