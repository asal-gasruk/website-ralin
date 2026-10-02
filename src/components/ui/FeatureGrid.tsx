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
        <li key={item.title} className="flex gap-4 rounded-xl border border-brick/10 bg-white/60 p-4 sm:block sm:p-6">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brick text-shell">
            <Icon name={item.icon} className="size-5" />
          </span>
          <div>
            <h3 className="text-sm tracking-[0.12em] text-brick-950 uppercase sm:mt-4">{item.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-charcoal/75 sm:mt-2">{item.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
