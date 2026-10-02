// TODO: verifikasi handle sosial media resmi TEDJA Coffee
export const socials = {
  instagram: "https://www.instagram.com/tedjacoffee",
  tiktok: "https://www.tiktok.com/@tedjacoffee",
} as const;

export const mainNav = [
  { key: "experience", href: "/#experience" },
  { key: "menu", href: "/menu" },
  { key: "locations", href: "/locations" },
  { key: "community", href: "/community" },
  { key: "journal", href: "/journal" },
] as const;

export const companyNav = [
  { key: "aboutTedja", href: "/about" },
  { key: "careers", href: "/careers" },
  { key: "press", href: "/press" },
  { key: "contact", href: "/contact" },
] as const;

export const infoNav = [
  { key: "workWithUs", href: "/work-with-us" },
  { key: "privateEvent", href: "/private-event" },
  { key: "feedback", href: "/feedback" },
] as const;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.tedjacoffee.com";
