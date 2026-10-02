"use client";

import { useId, useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

export type FieldType = "text" | "email" | "tel" | "textarea" | "select" | "date" | "number" | "rating";

export interface FieldOption {
  value: string;
  label: string;
}

export interface FormFieldConfig {
  name: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: FieldOption[];
  min?: number;
  max?: number;
  /** half = setengah lebar di sm ke atas */
  width?: "full" | "half";
  autoComplete?: string;
}

interface InquiryFormProps {
  fields: FormFieldConfig[];
  submitLabel: string;
  successTitle: string;
  successBody: string;
}

type Errors = Record<string, string>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATING_SCALE = [1, 2, 3, 4, 5] as const;

const inputClass =
  "w-full rounded-lg border border-brick/20 bg-white px-3.5 py-2.5 text-sm text-brick-950 placeholder:text-charcoal/40 transition-colors focus:border-brick focus:outline-none aria-[invalid=true]:border-rust";

/**
 * Form pertanyaan generik (contact, private event, kolaborasi, feedback, lamaran).
 * Validasi di sisi klien; pengiriman belum terhubung ke backend.
 */
export function InquiryForm({ fields, submitLabel, successTitle, successBody }: InquiryFormProps) {
  const t = useTranslations("forms");
  const formId = useId();
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (data: FormData): Errors => {
    const next: Errors = {};
    for (const field of fields) {
      const value = String(data.get(field.name) ?? "").trim();
      if (field.required && !value) {
        next[field.name] = field.type === "rating" ? t("ratingRequired") : t("required");
      } else if (value && field.type === "email" && !EMAIL_PATTERN.test(value)) {
        next[field.name] = t("invalidEmail");
      } else if (value && field.type === "number") {
        const number = Number(value);
        if ((field.min !== undefined && number < field.min) || (field.max !== undefined && number > field.max)) {
          next[field.name] = t("outOfRange", { min: field.min ?? 0, max: field.max ?? number });
        }
      }
    }
    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors = validate(new FormData(form));
    setErrors(nextErrors);

    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    // TODO: kirim ke endpoint (email/CRM) saat backend tersedia
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div role="status" className="rounded-2xl border border-brick/10 bg-white/70 p-8 text-center sm:p-10">
        <span className="mx-auto grid size-12 place-items-center rounded-full bg-brick text-shell">
          <Icon name="check" className="size-6" />
        </span>
        <h3 className="mt-5 text-xl text-brick-950 uppercase">{successTitle}</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-charcoal/75">{successBody}</p>
        <button
          type="button"
          onClick={() => {
            setErrors({});
            setIsSubmitted(false);
          }}
          className="mt-6 text-xs font-semibold tracking-[0.14em] text-brick uppercase hover:text-rust"
        >
          {t("sendAnother")}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid gap-x-4 gap-y-5 rounded-2xl border border-brick/10 bg-white/70 p-5 sm:grid-cols-2 sm:p-8"
    >
      {fields.map((field) => {
        const id = `${formId}-${field.name}`;
        const errorId = `${id}-error`;
        const error = errors[field.name];
        const common = {
          id,
          name: field.name,
          "aria-invalid": Boolean(error),
          "aria-describedby": error ? errorId : undefined,
        };

        return (
          <div key={field.name} className={cn(field.width === "half" ? "sm:col-span-1" : "sm:col-span-2")}>
            {field.type === "rating" ? (
              <fieldset aria-describedby={error ? errorId : undefined}>
                <legend className="mb-2 text-xs font-semibold tracking-[0.12em] text-brick-950 uppercase">
                  {field.label}
                  {field.required && <span className="text-rust"> *</span>}
                </legend>
                <div className="flex gap-2">
                  {RATING_SCALE.map((score) => (
                    <label key={score} className="cursor-pointer">
                      <input type="radio" name={field.name} value={score} className="peer sr-only" />
                      <span className="grid size-11 place-items-center rounded-full border border-brick/20 bg-white text-brick/40 transition-colors peer-checked:border-brick peer-checked:bg-brick peer-checked:text-orange peer-focus-visible:outline-2 peer-focus-visible:outline-orange hover:text-brick">
                        <Icon name="star" className="size-5" />
                        <span className="sr-only">{t("ratingValue", { score })}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            ) : (
              <>
                <label htmlFor={id} className="mb-2 block text-xs font-semibold tracking-[0.12em] text-brick-950 uppercase">
                  {field.label}
                  {field.required && <span className="text-rust"> *</span>}
                  {!field.required && <span className="font-normal tracking-normal text-charcoal/50 normal-case"> ({t("optional")})</span>}
                </label>
                {field.type === "textarea" ? (
                  <textarea {...common} rows={5} placeholder={field.placeholder} className={cn(inputClass, "resize-y")} />
                ) : field.type === "select" ? (
                  <select {...common} defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      {field.placeholder ?? t("choose")}
                    </option>
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    {...common}
                    type={field.type}
                    min={field.min}
                    max={field.max}
                    placeholder={field.placeholder}
                    autoComplete={field.autoComplete}
                    className={inputClass}
                  />
                )}
              </>
            )}
            {error && (
              <p id={errorId} className="mt-1.5 text-xs text-rust">
                {error}
              </p>
            )}
          </div>
        );
      })}

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-charcoal/60">{t("requiredNote")}</p>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-md bg-brick px-5 py-3 text-xs font-semibold tracking-[0.14em] text-shell uppercase transition-colors hover:bg-rust"
        >
          {submitLabel}
          <Icon name="arrow-right" className="size-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </form>
  );
}
