import { Icon } from "@/components/ui/Icon";
import { socials } from "@/content/site";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

interface SocialLinksProps {
  direction?: "row" | "column";
  className?: string;
}

const itemClass =
  "grid size-9 place-items-center rounded-full border border-shell/30 text-shell transition-colors hover:border-orange hover:bg-orange";

export function SocialLinks({ direction = "row", className }: SocialLinksProps) {
  return (
    <ul className={cn("flex gap-3", direction === "column" && "flex-col", className)}>
      <li>
        <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={itemClass}>
          <Icon name="instagram" className="size-4" />
        </a>
      </li>
      <li>
        <a href={socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={itemClass}>
          <Icon name="tiktok" className="size-4" />
        </a>
      </li>
      <li>
        <Link href="/locations" aria-label="Locations" className={itemClass}>
          <Icon name="pin" className="size-4" />
        </Link>
      </li>
    </ul>
  );
}
