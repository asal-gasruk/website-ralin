import { LogoMark } from "./Logo";
import { StripePattern } from "./Supergraphic";
import { cn } from "@/lib/cn";

interface MemberCardProps {
  holderLabel: string;
  holderName: string;
  badge: string;
  className?: string;
}

/** Ilustrasi kartu member TEDJA (CSS murni, rasio kartu kredit). */
export function MemberCard({ holderLabel, holderName, badge, className }: MemberCardProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative isolate aspect-[1.586] w-full overflow-hidden rounded-2xl bg-brick p-5 text-shell shadow-2xl shadow-brick-950/40 ring-1 ring-shell/10 sm:p-6",
        className,
      )}
    >
      <div className="absolute inset-y-0 right-0 -z-10 w-1/2 opacity-60">
        <StripePattern className="size-full text-rust" />
      </div>
      <div className="absolute -bottom-16 -left-10 -z-10 size-48 rounded-full bg-brick-900/70" />

      <div className="flex items-start justify-between">
        <span className="inline-flex items-center gap-2">
          <LogoMark className="h-6 w-auto" />
          <span className="font-display text-sm font-semibold tracking-[0.28em]">TEDJA</span>
        </span>
        <span className="rounded-full bg-orange px-2.5 py-1 text-[0.5625rem] font-semibold tracking-[0.16em] text-brick-950 uppercase">
          {badge}
        </span>
      </div>

      <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6">
        <p className="text-[0.5625rem] tracking-[0.18em] text-shell/60 uppercase">{holderLabel}</p>
        <p className="mt-1 font-display text-lg font-semibold tracking-[0.12em] uppercase sm:text-xl">{holderName}</p>
        <p className="mt-2 font-mono text-xs tracking-[0.2em] text-shell/70">•••• •••• 2026</p>
      </div>
    </div>
  );
}
