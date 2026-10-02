import { Icon, type IconName } from "./Icon";
import { cn } from "@/lib/cn";

export interface Feature {
  icon: IconName;
  title: string;
  body: string;
}

interface FeatureGridProps {
  items: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const columnClass = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

/** Grid kartu ikon + judul + deskripsi (perks, jenis acara, jenis kolaborasi). */
export function FeatureGrid({ items, columns = 3, className }: FeatureGridProps) {
  return (
    <ul className={cn("reveal-stagger grid gap-4", columnClass[columns], className)}>
      {items.map((item) => (
        <li key={item.title} className="rounded-xl border border-brick/10 bg-white/60 p-5 sm:p-6">
          <span className="grid size-10 place-items-center rounded-full bg-brick text-shell">
            <Icon name={item.icon} className="size-5" />
          </span>
          <h3 className="mt-4 text-sm tracking-[0.12em] text-brick-950 uppercase">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
