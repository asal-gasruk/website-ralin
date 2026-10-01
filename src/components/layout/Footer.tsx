import { useTranslations } from "next-intl";
import { Logo } from "@/components/brand/Logo";
import { StarMark } from "@/components/brand/Supergraphic";
import { mainNav } from "@/content/site";
import { Link } from "@/i18n/navigation";
import { NewsletterForm } from "./NewsletterForm";
import { SocialLinks } from "./SocialLinks";

// TODO: halaman Company & Info belum ada — tautan sementara "#" mengikuti referensi.
const companyLinks = ["aboutTedja", "careers", "press", "contact"] as const;
const infoLinks = ["workWithUs", "privateEvent", "feedback", "privacy", "terms"] as const;

function FooterHeading({ children }: { children: string }) {
  return <h2 className="eyebrow font-sans text-[0.625rem] text-orange sm:text-xs">{children}</h2>;
}

const linkListClass = "mt-3 space-y-2 sm:mt-4 sm:space-y-2.5";
const linkClass = "inline-block text-[0.8125rem] leading-snug text-shell/75 transition-colors hover:text-shell sm:text-sm";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-brick-950 text-shell">
      <StarMark className="absolute -right-16 -bottom-16 -z-10 size-48 text-brick-900 sm:-right-24 sm:-bottom-24 sm:size-96" />

      {/* Mobile: brand → newsletter → link. Desktop: brand | link | newsletter */}
      <div className="container-site grid gap-8 py-12 sm:gap-12 sm:py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-shell/75 sm:mt-5">{t("about")}</p>
          <SocialLinks className="mt-5 sm:mt-6" />
        </div>

        <div className="rounded-xl border border-shell/10 bg-brick-900/40 p-5 pb-3 lg:order-last lg:col-span-3 lg:border-0 lg:bg-transparent lg:p-0">
          <FooterHeading>{t("newsletter")}</FooterHeading>
          <p className="mt-3 text-sm leading-relaxed text-shell/75 sm:mt-4">{t("newsletterBody")}</p>
          <NewsletterForm />
        </div>

        <nav
          aria-label={t("explore")}
          className="grid grid-cols-3 gap-4 border-t border-shell/10 pt-8 sm:gap-8 lg:col-span-5 lg:border-0 lg:pt-0"
        >
          <div>
            <FooterHeading>{t("explore")}</FooterHeading>
            <ul className={linkListClass}>
              {mainNav
                .filter((item) => item.key !== "experience")
                .map((item) => (
                  <li key={item.key}>
                    <Link href={item.href} className={linkClass}>
                      {tNav(item.key)}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <FooterHeading>{t("company")}</FooterHeading>
            <ul className={linkListClass}>
              {companyLinks.map((key) => (
                <li key={key}>
                  <a href="#" className={linkClass}>
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <FooterHeading>{t("info")}</FooterHeading>
            <ul className={linkListClass}>
              {infoLinks.map((key) => (
                <li key={key}>
                  <a href="#" className={linkClass}>
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className="border-t border-shell/10">
        {/* pr-16 di mobile: beri ruang untuk tombol back-to-top yang melayang di kanan bawah */}
        <p className="container-site py-5 pr-16 text-xs text-shell/60 sm:py-6 sm:pr-6 lg:pr-8">{t("rights", { year })}</p>
      </div>
    </footer>
  );
}
