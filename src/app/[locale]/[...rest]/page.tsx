import { notFound } from "next/navigation";

// Tangkap path yang tidak dikenal agar memakai not-found milik [locale]
export default function CatchAllPage() {
  notFound();
}
