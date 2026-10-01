import type { ReactNode } from "react";

// Template di-mount ulang setiap navigasi, sehingga animasi masuk berjalan di tiap pindah halaman.
// Header & footer berada di layout, jadi tetap diam.
export default function Template({ children }: { children: ReactNode }) {
  return <div className="animate-page-in">{children}</div>;
}
