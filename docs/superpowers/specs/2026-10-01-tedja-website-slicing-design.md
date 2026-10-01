# Tedja Website Slicing — Design

**Tanggal:** 2026-10-01 · **Status:** diimplementasikan

## Tujuan
Slicing website TEDJA Coffee berdasarkan struktur tedjacoffee.com, dengan visual mengikuti Brand Guideline v2.0.

## Keputusan
- **Stack:** Next.js 16.2 App Router, React 19, Tailwind v4, pnpm (selaras dengan `erp/`), app terpisah di `website/`.
- **Bahasa:** bilingual EN/ID via `next-intl`, prefix URL `/en` & `/id` (default `en`), proxy redirect `/` → `/en`.
- **Konten:** teks UI di `messages/*.json`; data list (menu, lokasi, komunitas, jurnal) di `src/content/*.ts` bertipe dengan `Localized<T>`. Siap dipindah ke CMS tanpa mengubah komponen.
- **Render:** semua halaman SSG (`generateStaticParams`), journal `dynamicParams = false`.
- **Foto:** `erp/docs/DATA RALIN/Foto Foto Website/Salinan N.png` → `public/images/*.webp` sesuai penomoran mockup `Salinan PENOMERAN 1/2`.

## Halaman
Home (Hero, Pillars, Day Stride, Picks, Locations, Community, Journal, Closing) · Menu (filter kategori) · Locations (6 outlet) · Community · Journal · Journal detail · 404.

## Belum final / TODO
- Logo masih rekonstruksi SVG → ganti dengan vektor resmi.
- Alamat & jam Margahayu, Summarecon, Antapani.
- Item menu non-pick dan isi artikel jurnal masih placeholder.
- Handle Instagram/TikTok perlu diverifikasi.
- Newsletter belum terhubung backend; tautan Company/Info/Legal masih `#`.
