import type { ReactNode } from "react";
import { StripePattern } from "@/components/brand/Supergraphic";

interface CtaBandProps {
  title: string;
  body?: string;
  actions: ReactNode;
}

/** Penutup halaman: blok brick dengan judul, deskripsi, dan tombol aksi. */
export function CtaBand({ title, body, actions }: CtaBandProps) {
  return (
    <section className="container-site pb-14 sm:pb-20">
      <div className="reveal relative isolate overflow-hidden rounded-2xl bg-brick px-6 py-10 text-shell sm:px-12 sm:py-14">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-1/3 md:block">
          <StripePattern className="size-full text-rust/50" />
        </div>
        <h2 className="max-w-xl text-2xl uppercase sm:text-4xl">{title}</h2>
        {body && <p className="mt-3 max-w-lg text-sm leading-relaxed text-shell/85 sm:text-base">{body}</p>}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">{actions}</div>
      </div>
    </section>
  );
}
