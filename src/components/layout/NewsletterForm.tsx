"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Icon } from "@/components/ui/Icon";

type Status = "idle" | "invalid" | "success";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterForm() {
  const t = useTranslations("footer");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") ?? "").trim();

    if (!EMAIL_PATTERN.test(email)) {
      setStatus("invalid");
      return;
    }

    // TODO: kirim ke endpoint newsletter (ESP/CRM) saat backend tersedia
    setStatus("success");
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-4">
      <label htmlFor="newsletter-email" className="sr-only">
        {t("emailPlaceholder")}
      </label>
      <div className="flex overflow-hidden rounded-md border border-shell/30 focus-within:border-orange">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={t("emailPlaceholder")}
          aria-invalid={status === "invalid"}
          aria-describedby="newsletter-status"
          className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-shell placeholder:text-shell/50 focus:outline-none"
        />
        <button
          type="submit"
          aria-label={t("subscribe")}
          className="grid w-11 place-items-center bg-shell text-brick transition-colors hover:bg-orange hover:text-shell"
        >
          <Icon name="arrow-right" className="size-4" />
        </button>
      </div>
      <p id="newsletter-status" role="status" className="mt-2 min-h-5 text-xs">
        {status === "invalid" && <span className="text-orange">{t("invalidEmail")}</span>}
        {status === "success" && <span className="text-shell/80">{t("subscribed")}</span>}
      </p>
    </form>
  );
}
