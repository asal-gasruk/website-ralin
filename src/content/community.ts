import type { Community, CommunityCategory, CommunityIcon } from "./types";

/** Urutan & ikon kategori komunitas (label & deskripsi ada di messages `communityPage.categories`). */
export const communityCategories: Array<{ key: CommunityCategory; icon: CommunityIcon }> = [
  { key: "sports", icon: "padel" },
  { key: "automotive", icon: "automotive" },
  { key: "creative", icon: "creative" },
  { key: "business", icon: "business" },
  { key: "music", icon: "music" },
];

export const communities: Community[] = [
  {
    slug: "padel-club",
    category: "sports",
    isFeatured: true,
    icon: "padel",
    name: { en: "Padel Club", id: "Padel Club" },
    tagline: { en: "Play, connect, have fun.", id: "Main, terhubung, bersenang-senang." },
    description: {
      en: "Weekly matches and open play sessions for every level, followed by coffee together.",
      id: "Pertandingan mingguan dan sesi open play untuk semua level, ditutup dengan ngopi bersama.",
    },
    image: "/images/com-padel.webp",
  },
  {
    slug: "workshop",
    category: "creative",
    isFeatured: true,
    icon: "workshop",
    name: { en: "Workshop", id: "Workshop" },
    tagline: { en: "Learn new skills, grow together.", id: "Belajar keterampilan baru, tumbuh bersama." },
    description: {
      en: "Hands-on classes from brewing to crafts, hosted by people who love what they do.",
      id: "Kelas praktik dari seduh kopi hingga kerajinan, dipandu orang-orang yang mencintai bidangnya.",
    },
    image: "/images/com-workshop.webp",
  },
  {
    slug: "creative-community",
    category: "creative",
    isFeatured: true,
    icon: "creative",
    name: { en: "Creative Community", id: "Komunitas Kreatif" },
    tagline: { en: "Create, inspire, collaborate.", id: "Berkarya, menginspirasi, berkolaborasi." },
    description: {
      en: "A home for makers, designers and storytellers to share work and build projects together.",
      id: "Rumah bagi pembuat, desainer, dan pencerita untuk berbagi karya dan membangun proyek bersama.",
    },
    image: "/images/com-creative.webp",
  },
  {
    slug: "business-gathering",
    category: "business",
    isFeatured: true,
    icon: "business",
    name: { en: "Business Gathering", id: "Business Gathering" },
    tagline: { en: "Meet, share, build opportunities.", id: "Bertemu, berbagi, membangun peluang." },
    description: {
      en: "Casual meetups for founders and professionals to exchange ideas over a good cup.",
      id: "Pertemuan santai bagi founder dan profesional untuk bertukar ide sambil ngopi.",
    },
    image: "/images/com-business.webp",
  },
  {
    slug: "music",
    category: "music",
    isFeatured: true,
    icon: "music",
    name: { en: "Music", id: "Musik" },
    tagline: { en: "Good music, good vibes.", id: "Musik bagus, suasana bagus." },
    description: {
      en: "Live sessions and open mics featuring Bandung's local talents.",
      id: "Sesi live dan open mic yang menampilkan talenta lokal Bandung.",
    },
    image: "/images/com-music.webp",
  },
  {
    slug: "automotive-community",
    category: "automotive",
    isFeatured: true,
    icon: "automotive",
    name: { en: "Automotive Community", id: "Komunitas Otomotif" },
    tagline: { en: "Ride together, share the passion.", id: "Berkendara bersama, berbagi semangat." },
    description: {
      en: "Morning rides and meetups for riders and car enthusiasts, starting and ending at Tedja.",
      id: "Morning ride dan kopdar untuk pengendara dan pecinta mobil, berangkat dan berakhir di Tedja.",
    },
    image: "/images/com-automotive.webp",
  },
  // TODO: verifikasi dengan tim komunitas — diambil dari materi brand (poster Strength Training & foto lari bersama)
  {
    slug: "running-club",
    category: "sports",
    icon: "running",
    name: { en: "Running Club", id: "Running Club" },
    tagline: { en: "Run together, refuel together.", id: "Lari bersama, isi energi bersama." },
    description: {
      en: "Group runs around Bandung for every pace, finishing with coffee at Tedja.",
      id: "Lari bersama keliling Bandung untuk semua pace, ditutup dengan ngopi di Tedja.",
    },
    image: "/images/journal-creative-community.webp",
  },
  {
    slug: "strength-training",
    category: "sports",
    icon: "strength",
    name: { en: "Strength Training", id: "Strength Training" },
    tagline: { en: "Train hard, recover right.", id: "Latihan serius, pemulihan tepat." },
    description: {
      en: "Outdoor strength and conditioning sessions led by coaches, open to all levels.",
      id: "Sesi strength dan conditioning di luar ruangan bersama coach, terbuka untuk semua level.",
    },
    image: "/images/journal-better-morning.webp",
  },
];
