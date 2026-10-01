import type { ComponentProps, ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "outline-light" | "outline-brick" | "text" | "text-light";

type Size = "sm" | "md";

const base =
  "group inline-flex shrink-0 items-center gap-2 rounded-md font-semibold tracking-[0.14em] whitespace-nowrap uppercase transition-colors";

const variants: Record<Variant, string> = {
  primary: "bg-brick text-shell hover:bg-rust",
  "outline-light": "border border-shell/60 text-shell hover:bg-shell hover:text-brick",
  "outline-brick": "border border-brick text-brick hover:bg-brick hover:text-shell",
  text: "text-brick hover:text-rust",
  "text-light": "text-shell hover:text-orange",
};

const isTextVariant = (variant: Variant) => variant === "text" || variant === "text-light";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.6875rem]",
  md: "px-5 py-3 text-xs",
};

function buttonClass(variant: Variant, size: Size, className?: string) {
  return cn(base, variants[variant], isTextVariant(variant) ? "text-xs" : sizes[size], className);
}

interface ButtonContentProps {
  children: ReactNode;
  icon?: IconName;
}

function ButtonContent({ children, icon = "arrow-right" }: ButtonContentProps) {
  return (
    <>
      {children}
      <Icon name={icon} className="size-4 transition-transform group-hover:translate-x-0.5" />
    </>
  );
}

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "children"> &
  ButtonContentProps & { variant?: Variant; size?: Size };

/** Link internal (locale-aware) bergaya tombol. */
export function ButtonLink({ variant = "primary", size = "md", icon, className, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={buttonClass(variant, size, className)} {...props}>
      <ButtonContent icon={icon}>{children}</ButtonContent>
    </Link>
  );
}

type ExternalLinkProps = Omit<ComponentProps<"a">, "children"> &
  ButtonContentProps & { variant?: Variant; size?: Size };

/** Link eksternal bergaya tombol, selalu membuka tab baru. */
export function ExternalButtonLink({
  variant = "primary",
  size = "md",
  icon = "arrow-up-right",
  className,
  children,
  ...props
}: ExternalLinkProps) {
  return (
    <a target="_blank" rel="noopener noreferrer" className={buttonClass(variant, size, className)} {...props}>
      <ButtonContent icon={icon}>{children}</ButtonContent>
    </a>
  );
}
