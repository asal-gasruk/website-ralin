/** Palet warna resmi — Brand Identity Guidelines TEDJA Coffee v2.0. */
export interface Swatch {
  name: string;
  hex: string;
  /** Warna teks di atas swatch agar tetap terbaca */
  ink: "light" | "dark";
}

export const primarySwatches: Swatch[] = [
  { name: "Fired Brick", hex: "#6F2D28", ink: "light" },
  { name: "Shell White", hex: "#EFE1D3", ink: "dark" },
  { name: "Botanical Depth", hex: "#5A4F26", ink: "light" },
];

export const secondarySwatches: Swatch[] = [
  { name: "Orange", hex: "#E18040", ink: "dark" },
  { name: "Teal", hex: "#5A8B81", ink: "light" },
  { name: "Deep Teal", hex: "#003E44", ink: "light" },
  { name: "Rust", hex: "#924B31", ink: "light" },
  { name: "Charcoal", hex: "#473A3A", ink: "light" },
  { name: "Stone", hex: "#B5B8B1", ink: "dark" },
];
