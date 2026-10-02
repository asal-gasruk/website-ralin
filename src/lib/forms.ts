import type { FieldOption } from "@/components/forms/InquiryForm";
import { locations } from "@/content/locations";

/** Opsi lokasi untuk select di form, diawali pilihan "lokasi mana saja". */
export function locationOptions(anyLocationLabel: string): FieldOption[] {
  return [
    { value: "any", label: anyLocationLabel },
    ...locations.map((location) => ({ value: location.slug, label: location.name })),
  ];
}

/** Ubah daftar key menjadi opsi select dengan label terjemahan. */
export function keyedOptions<K extends string>(keys: readonly K[], label: (key: K) => string): FieldOption[] {
  return keys.map((key) => ({ value: key, label: label(key) }));
}
