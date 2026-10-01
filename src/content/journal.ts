import type { Article } from "./types";

// TODO: isi artikel masih placeholder — ganti dengan tulisan tim konten.
export const articles: Article[] = [
  {
    slug: "how-to-build-a-better-morning",
    category: "productivity",
    title: { en: "How to Build a Better Morning", id: "Cara Membangun Pagi yang Lebih Baik" },
    excerpt: {
      en: "Small rituals that set the tone for a focused, productive day.",
      id: "Ritual kecil yang menentukan hari yang fokus dan produktif.",
    },
    body: {
      en: [
        "The way you start your morning often decides the pace of the rest of your day. A good morning is not about waking up earlier, it is about waking up with intention.",
        "Begin with one small win: make your bed, take a short walk, or brew a cup slowly. These moments signal to your mind that the day has started on your terms.",
        "Then pick the one task that matters most and give it your first hour of focus, before messages and meetings take over. Keep moving, one stride at a time.",
      ],
      id: [
        "Cara kamu memulai pagi sering menentukan ritme sepanjang hari. Pagi yang baik bukan soal bangun lebih awal, tetapi bangun dengan niat.",
        "Mulailah dengan satu kemenangan kecil: rapikan tempat tidur, jalan sebentar, atau seduh kopi dengan perlahan. Momen ini memberi sinyal bahwa harimu dimulai dengan caramu sendiri.",
        "Lalu pilih satu tugas terpenting dan berikan satu jam pertama fokusmu untuk itu, sebelum pesan dan rapat mengambil alih. Terus bergerak, satu langkah demi satu langkah.",
      ],
    },
    image: "/images/journal-better-morning.webp",
    publishedAt: "2026-09-02",
  },
  {
    slug: "inside-tedja-saparua",
    category: "community",
    title: { en: "Inside Tedja: Saparua", id: "Mengenal Tedja: Saparua" },
    excerpt: {
      en: "A closer look at our flagship, from the morning crowd to late-night conversations.",
      id: "Melihat lebih dekat flagship kami, dari keramaian pagi hingga obrolan larut malam.",
    },
    body: {
      en: [
        "Tedja Saparua opens at seven and closes at midnight, and every hour has its own character.",
        "Mornings belong to early risers and laptops. Afternoons fill up with meetings and padel players cooling down. Evenings are for friends, music and long conversations.",
        "It was designed as a transition space: a place to pause between where you were and where you are going next.",
      ],
      id: [
        "Tedja Saparua buka pukul tujuh pagi hingga tengah malam, dan setiap jamnya punya karakter sendiri.",
        "Pagi milik mereka yang bangun lebih awal dan laptop. Siang hari diisi rapat dan pemain padel yang beristirahat. Malam untuk teman, musik, dan obrolan panjang.",
        "Tempat ini dirancang sebagai ruang transisi: tempat berhenti sejenak di antara tempatmu tadi dan tujuanmu berikutnya.",
      ],
    },
    image: "/images/journal-inside-saparua.webp",
    publishedAt: "2026-08-21",
  },
  {
    slug: "bandungs-new-creative-community",
    category: "creative",
    title: { en: "Bandung's New Creative Community", id: "Komunitas Kreatif Baru Bandung" },
    excerpt: {
      en: "How makers and storytellers found a shared table at Tedja.",
      id: "Bagaimana para pembuat dan pencerita menemukan meja bersama di Tedja.",
    },
    body: {
      en: [
        "Bandung has always been a city of makers. What it needed was more places where they could meet.",
        "Every month, our creative community gathers to share work in progress, swap feedback and start new collaborations.",
        "Everyone is welcome. Bring your sketchbook, your camera or just your curiosity.",
      ],
      id: [
        "Bandung selalu menjadi kota para pembuat. Yang dibutuhkan adalah lebih banyak tempat untuk bertemu.",
        "Setiap bulan, komunitas kreatif kami berkumpul untuk berbagi karya yang sedang dikerjakan, bertukar masukan, dan memulai kolaborasi baru.",
        "Semua orang dipersilakan. Bawa buku sketsamu, kameramu, atau cukup rasa ingin tahumu.",
      ],
    },
    image: "/images/journal-creative-community.webp",
    publishedAt: "2026-08-08",
  },
  {
    slug: "coffee-and-focus",
    category: "coffee",
    title: { en: "Coffee & Focus", id: "Kopi & Fokus" },
    excerpt: {
      en: "What a good cup really does for your concentration, and how to time it.",
      id: "Apa yang sebenarnya dilakukan secangkir kopi untuk konsentrasimu, dan kapan waktu terbaiknya.",
    },
    body: {
      en: [
        "Coffee works best as a partner to focus, not a replacement for rest.",
        "Many people find their sharpest window comes an hour or two after waking. Pair your first cup with your most important task and keep a glass of water close.",
        "Slow down, sip, and let the work flow.",
      ],
      id: [
        "Kopi bekerja paling baik sebagai pendamping fokus, bukan pengganti istirahat.",
        "Banyak orang merasa paling tajam satu hingga dua jam setelah bangun. Pasangkan cangkir pertamamu dengan tugas terpenting dan siapkan segelas air di dekatmu.",
        "Pelan-pelan, nikmati, dan biarkan pekerjaan mengalir.",
      ],
    },
    image: "/images/journal-coffee-focus.webp",
    publishedAt: "2026-07-25",
  },
  {
    slug: "meet-the-people-behind-tedja",
    category: "people",
    title: { en: "Meet The People Behind Tedja", id: "Kenali Orang-Orang di Balik Tedja" },
    excerpt: {
      en: "The baristas, cooks and hosts who make every visit feel like home.",
      id: "Para barista, juru masak, dan host yang membuat setiap kunjungan terasa seperti di rumah.",
    },
    body: {
      en: [
        "Behind every cup is a team that cares about the details.",
        "Our baristas dial in espresso every morning, our kitchen preps fresh bowls daily, and our hosts remember your usual order.",
        "People make the place, and these are the people who make Tedja.",
      ],
      id: [
        "Di balik setiap cangkir ada tim yang peduli pada detail.",
        "Barista kami menyetel espresso setiap pagi, dapur kami menyiapkan bowl segar setiap hari, dan host kami ingat pesanan favoritmu.",
        "Orang-oranglah yang membentuk tempat, dan merekalah yang membentuk Tedja.",
      ],
    },
    image: "/images/journal-people.webp",
    publishedAt: "2026-07-10",
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
