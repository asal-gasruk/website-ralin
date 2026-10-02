import Image from "next/image";
import { Icon, type IconName } from "@/components/ui/Icon";

interface CommunityCardProps {
  name: string;
  tagline: string;
  description: string;
  image: string;
  icon: IconName;
}

export function CommunityCard({ name, tagline, description, image, icon }: CommunityCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-brick/10 bg-white/60">
      <div className="relative aspect-[16/10] overflow-hidden bg-brick">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 grid size-9 place-items-center rounded-full bg-brick text-shell">
          <Icon name={icon} className="size-4" />
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg text-brick-950 uppercase">{name}</h3>
        <p className="mt-1 font-display text-sm text-brick">{tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{description}</p>
      </div>
    </article>
  );
}
