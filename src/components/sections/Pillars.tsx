import { useTranslations } from "next-intl";
import { Icon, type IconName } from "@/components/ui/Icon";

const pillars: Array<{ key: "focus" | "connect" | "move"; icon: IconName }> = [
  { key: "focus", icon: "target" },
  { key: "connect", icon: "users" },
  { key: "move", icon: "arrow-up-right" },
];

export function Pillars() {
  const t = useTranslations("pillars");

  return (
    <section id="experience" className="scroll-mt-20 py-12 sm:py-20 lg:py-24">
      <div className="container-site grid gap-6 sm:gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="reveal lg:col-span-5">
          <p className="eyebrow text-brick">{t("eyebrow")}</p>
          <h2 className="mt-3 max-w-sm text-3xl leading-[1.05] text-brick-950 uppercase sm:text-4xl">{t("title")}</h2>
        </div>
        <ul className="reveal-stagger grid sm:grid-cols-3 lg:col-span-7">
          {pillars.map(({ key, icon }) => (
            <li
              key={key}
              className="flex gap-4 border-t border-brick/15 py-5 first:border-t-0 first:pt-0 sm:block sm:border-t-0 sm:border-l sm:px-6 sm:py-0 sm:first:border-l-0 sm:first:pl-0"
            >
              <Icon name={icon} className="size-6 text-brick" />
              <div>
                <h3 className="text-sm tracking-[0.14em] text-brick-950 uppercase sm:mt-4">{t(`${key}.title`)}</h3>
                <p className="mt-1 text-sm leading-relaxed text-charcoal/75 sm:mt-2">{t(`${key}.body`)}</p>
                <span aria-hidden="true" className="mt-4 hidden h-0.5 w-8 bg-brick sm:block" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
