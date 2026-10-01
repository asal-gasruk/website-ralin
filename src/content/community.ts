import type { Community } from "./types";

export const communities: Community[] = [
  {
    slug: "padel-club",
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
    icon: "automotive",
    name: { en: "Automotive Community", id: "Komunitas Otomotif" },
    tagline: { en: "Ride together, share the passion.", id: "Berkendara bersama, berbagi semangat." },
    description: {
      en: "Morning rides and meetups for riders and car enthusiasts, starting and ending at Tedja.",
      id: "Morning ride dan kopdar untuk pengendara dan pecinta mobil, berangkat dan berakhir di Tedja.",
    },
    image: "/images/com-automotive.webp",
  },
];
