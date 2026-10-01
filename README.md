# Tedja Coffee — Website

Website company profile TEDJA Coffee. Next.js 16 (App Router) + Tailwind CSS v4 + next-intl (EN/ID), semua halaman di-generate statis.

## Menjalankan

```bash
pnpm install
pnpm dev          # http://localhost:3000 → redirect ke /en
pnpm build && pnpm start
pnpm lint
```

Salin `.env.example` ke `.env.local` bila perlu mengganti `NEXT_PUBLIC_SITE_URL`.

## Struktur

```
messages/{en,id}.json        teks UI per bahasa
src/app/[locale]/            halaman: home, menu, locations, community, journal, journal/[slug]
src/components/brand/        Logo, Supergraphic (pola garis, titik, bintang)
src/components/layout/       Header, Footer, LocaleSwitcher, NewsletterForm, SocialLinks
src/components/sections/     section homepage + PageHero + MenuBrowser
src/components/cards/        PhotoCard, MenuCard, LocationCard, ArticleCard
src/components/ui/           Button, Icon, SectionIntro, SplitSection
src/content/                 data bilingual bertipe (menu, lokasi, komunitas, jurnal, site)
src/i18n/ + src/proxy.ts     routing locale (next-intl)
```

## Brand

Token mengikuti *Brand Identity Guidelines TEDJA Coffee v2.0* (`erp/docs/Brand Guideline.xlsx`), didefinisikan di `src/app/globals.css`:

- Primary: Fired Brick `#6F2D28`, Shell White `#EFE1D3`, Botanical Depth `#5A4F26`
- Secondary: `#E18040`, `#5A8B81`, `#003E44`, `#924B31`, `#473A3A`, `#B5B8B1`
- Headline: Red Rose · Body: Host Grotesk (self-hosted di `src/app/fonts`)

Menambah konten cukup lewat `src/content/*.ts` (field `{ en, id }`) dan `messages/*.json`.
