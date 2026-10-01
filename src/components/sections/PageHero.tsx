import { StarMark, StripePattern } from "@/components/brand/Supergraphic";
import { SectionIntro } from "@/components/ui/SectionIntro";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  body?: string;
}

/** Header gelap untuk halaman turunan (Menu, Locations, Community, Journal). */
export function PageHero({ eyebrow, title, body }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden rounded-b-[2rem] bg-brick-950 lg:rounded-b-[3rem]">
      {/* Mulai di bawah header agar tombol header tetap kontras */}
      <div className="absolute top-20 right-0 bottom-0 -z-10 hidden w-1/3 md:block lg:top-24">
        <StripePattern className="size-full text-brick-900" />
      </div>
      <StarMark className="absolute top-1/2 right-[8%] -z-10 hidden size-56 -translate-y-1/2 text-brick md:block lg:size-72" />
      <div className="container-site pt-28 pb-12 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <SectionIntro as="h1" tone="light" eyebrow={eyebrow} title={title} body={body} size="lg" className="max-w-xl" />
      </div>
    </section>
  );
}
