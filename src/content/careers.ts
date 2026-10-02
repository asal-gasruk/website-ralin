import type { Localized } from "./types";

export type EmploymentType = "fullTime" | "partTime";

export interface Role {
  slug: string;
  title: Localized;
  location: string;
  type: EmploymentType;
}

// TODO: placeholder — ganti dengan lowongan aktif dari tim HR (bisa disinkronkan dari modul HRIS ERP).
export const roles: Role[] = [
  { slug: "barista", title: { en: "Barista", id: "Barista" }, location: "Tedja Saparua", type: "fullTime" },
  { slug: "kitchen-crew", title: { en: "Kitchen Crew", id: "Kitchen Crew" }, location: "Tedja Tamblong", type: "fullTime" },
  { slug: "service-crew", title: { en: "Service Crew", id: "Service Crew" }, location: "Tedja Kiara Artha", type: "partTime" },
  { slug: "store-supervisor", title: { en: "Store Supervisor", id: "Store Supervisor" }, location: "Tedja Summarecon", type: "fullTime" },
];
