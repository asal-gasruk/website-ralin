import type { Pick } from "./types";

// TODO: Signature Latte, Tedja Bowl & Cold Black berasal dari situs referensi dan belum ada di
// menu flipbook — selaraskan dengan item di menu.ts (mis. Sea Salt Butterscotch Latte) bila perlu.
export const picks: Pick[] = [
  {
    slug: "power-latte",
    name: "Power Latte",
    description: { en: "Coffee meets protein. Fuel your day.", id: "Kopi bertemu protein. Energi untuk harimu." },
    image: "/images/menu-power-latte.webp",
  },
  {
    slug: "signature-latte",
    name: "Signature Latte",
    description: { en: "Smooth, balanced, signature taste.", id: "Lembut, seimbang, rasa khas Tedja." },
    image: "/images/menu-signature-latte.webp",
  },
  {
    slug: "tedja-bowl",
    name: "Tedja Bowl",
    description: { en: "Hearty meal for your best performance.", id: "Hidangan mengenyangkan untuk performa terbaikmu." },
    image: "/images/menu-tedja-bowl.webp",
  },
  {
    slug: "cold-black",
    name: "Cold Black",
    description: { en: "Clean, bold, and always refreshing.", id: "Bersih, tegas, dan selalu menyegarkan." },
    image: "/images/menu-cold-black.webp",
  },
];
