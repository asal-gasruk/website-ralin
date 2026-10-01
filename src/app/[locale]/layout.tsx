import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { BackToTop } from "@/components/layout/BackToTop";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { NavigationLoader } from "@/components/layout/NavigationLoader";
import { siteUrl } from "@/content/site";
import { routing } from "@/i18n/routing";
import "../globals.css";

const redRose = localFont({
  src: "../fonts/RedRose-VariableFont_wght.ttf",
  variable: "--font-red-rose",
  weight: "300 700",
  display: "swap",
});

const hostGrotesk = localFont({
  src: "../fonts/HostGrotesk-VariableFont_wght.ttf",
  variable: "--font-host-grotesk",
  weight: "300 800",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#3a1816",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as (typeof routing.locales)[number], namespace: "meta" });

  return {
    metadataBase: new URL(siteUrl),
    title: { default: t("home.title"), template: `%s · ${t("siteName")}` },
    description: t("home.description"),
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);

  return (
    // data-scroll-behavior: Next mematikan smooth scroll sesaat ketika pindah halaman (lompat instan ke atas),
    // sementara anchor & tombol back-to-top tetap halus.
    <html lang={locale} data-scroll-behavior="smooth" className={`${redRose.variable} ${hostGrotesk.variable}`}>
      <body className="flex min-h-svh flex-col">
        <NextIntlClientProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
          <NavigationLoader />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
