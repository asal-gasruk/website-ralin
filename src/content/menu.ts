import type { MenuItem } from "./types";

// Item bertanda isPick tampil di section "Tedja Picks" homepage.
// TODO: item non-pick adalah placeholder — sinkronkan dengan menu resmi.
export const menuItems: MenuItem[] = [
  {
    slug: "power-latte",
    name: "Power Latte",
    category: "coffee",
    description: { en: "Coffee meets protein. Fuel your day.", id: "Kopi bertemu protein. Energi untuk harimu." },
    image: "/images/menu-power-latte.webp",
    isPick: true,
  },
  {
    slug: "signature-latte",
    name: "Signature Latte",
    category: "coffee",
    description: { en: "Smooth, balanced, signature taste.", id: "Lembut, seimbang, rasa khas Tedja." },
    image: "/images/menu-signature-latte.webp",
    isPick: true,
  },
  {
    slug: "tedja-bowl",
    name: "Tedja Bowl",
    category: "food",
    description: { en: "Hearty meal for your best performance.", id: "Hidangan mengenyangkan untuk performa terbaikmu." },
    image: "/images/menu-tedja-bowl.webp",
    isPick: true,
  },
  {
    slug: "cold-black",
    name: "Cold Black",
    category: "coffee",
    description: { en: "Clean, bold, and always refreshing.", id: "Bersih, tegas, dan selalu menyegarkan." },
    image: "/images/menu-cold-black.webp",
    isPick: true,
  },
  {
    slug: "americano",
    name: "Americano",
    category: "coffee",
    description: { en: "Espresso and water, nothing to hide.", id: "Espresso dan air, apa adanya." },
  },
  {
    slug: "cappuccino",
    name: "Cappuccino",
    category: "coffee",
    description: { en: "Velvety foam over a rich espresso base.", id: "Busa lembut di atas espresso yang kaya." },
  },
  {
    slug: "matcha-latte",
    name: "Matcha Latte",
    category: "non-coffee",
    description: { en: "Earthy matcha, calm energy.", id: "Matcha bercita rasa alami, energi yang tenang." },
  },
  {
    slug: "chocolate",
    name: "Dark Chocolate",
    category: "non-coffee",
    description: { en: "Rich cocoa for slower afternoons.", id: "Kakao pekat untuk sore yang santai." },
  },
  {
    slug: "butter-croissant",
    name: "Butter Croissant",
    category: "food",
    description: { en: "Flaky, buttery, baked every morning.", id: "Renyah dan gurih, dipanggang setiap pagi." },
  },
];

export const menuCategories = ["coffee", "non-coffee", "food"] as const;
