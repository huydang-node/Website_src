/**
 * DemoForm — Client component.
 *
 * Validation: React Hook Form + Zod.
 * Submit: Next.js Server Action.
 * States: idle | submitting | error
 *
 * ⚠️ Captcha: chưa tích hợp (provider chưa xác định).
 */
"use client";

import React, { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Input, Select, Textarea } from "@/components/ui";
import { INDUSTRY_OPTIONS, TEAM_SIZE_OPTIONS, DEMO_FORM } from "@/data/demo-form";
import { submitDemo } from "@/app/actions/submit-demo";
import { HONEYPOT_NAME } from "@/app/actions/demo-form";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

/* ─── Zod schema ─── */
const schema = z.object({
  fullName: z.string().min(1, "Vui lòng nhập họ tên."),
  jobTitle: z.string().min(1, "Vui lòng nhập chức vụ."),
  companyName: z.string().min(1, "Vui lòng nhập tên công ty."),
  industry: z.string().min(1, "Vui lòng chọn ngành."),
  teamSize: z.string().min(1, "Vui lòng chọn quy mô nhân sự."),
  email: z
    .string()
    .min(1, "Vui lòng nhập email.")
    .email("Email không hợp lệ."),
  phone: z.string().min(1, "Vui lòng nhập số điện thoại."),
  currentSystem: z.string().optional(),
  requirements: z.string().optional(),
  privacyConsent: z.boolean().refine((v) => v === true, {
    message: "Bạn cần đồng ý với chính sách bảo vệ dữ liệu.",
  }),
});

export type DemoFormValues = z.infer<typeof schema>;

/* ─── Default values ─── */
const defaultValues: DemoFormValues = {
  fullName: "",
  jobTitle: "",
  companyName: "",
  industry: "",
  teamSize: "",
  email: "",
  phone: "",
  currentSystem: "",
  requirements: "",
  privacyConsent: false,
};

/* ─── Main component ─── */
export function DemoForm() {
  const [isPending, startTransition] = useTransition();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
    watch,
  } = useForm<DemoFormValues>({
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onBlur",
  });

  /* Track privacy consent for submit button state */
  const privacyValue = watch("privacyConsent");
  const canSubmit =
    isValid && privacyValue === true;

  const onSubmit = (values: DemoFormValues) => {
    setSubmitError(null);
    const formData = new FormData();

    formData.set("fullName", values.fullName);
    formData.set("jobTitle", values.jobTitle);
    formData.set("companyName", values.companyName);
    formData.set("industry", values.industry);
    formData.set("teamSize", values.teamSize);
    formData.set("email", values.email);
    formData.set("phone", values.phone);
    formData.set("currentSystem", values.currentSystem ?? "");
    formData.set("requirements", values.requirements ?? "");
    formData.set("privacyConsent", values.privacyConsent ? "on" : "");

    startTransition(async () => {
      const result = await submitDemo(undefined, formData);
      if (!result.ok) {
        setSubmitError(result.message);
      }
      /* Success: server redirects — no state update needed */
    });
  };

  return (
    <form
      onSubmit={(e) => void handleSubmit(onSubmit)(e)}
      noValidate
      aria-label="Form đặt lịch demo"
      className="flex flex-col gap-6"
    >
      {/* Honeypot — visually hidden, bots fill it */}
      <div className="absolute -translate-x-full opacity-0 pointer-events-none" aria-hidden="true">
        <input
          type="text"
          name={HONEYPOT_NAME}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
      </div>

      {/* Row 1: Họ tên + Chức vụ */}
      <div className="grid md:grid-cols-2 gap-5">
        <Input
          label="Họ tên"
          placeholder="Nguyễn Văn A"
          required
          autoComplete="name"
          error={errors.fullName?.message}
          {...register("fullName")}
        />
        <Input
          label="Chức vụ"
          placeholder="Kế toán trưởng"
          required
          autoComplete="organization-title"
          error={errors.jobTitle?.message}
          {...register("jobTitle")}
        />
      </div>

      {/* Row 2: Tên công ty + Ngành */}
      <div className="grid md:grid-cols-2 gap-5">
        <Input
          label="Tên công ty"
          placeholder="Công ty ABC"
          required
          autoComplete="organization"
          error={errors.companyName?.message}
          {...register("companyName")}
        />
        <Select
          label="Ngành"
          required
          options={INDUSTRY_OPTIONS}
          placeholder="Chọn ngành…"
          error={errors.industry?.message}
          {...register("industry")}
        />
      </div>

      {/* Row 3: Quy mô + Email */}
      <div className="grid md:grid-cols-2 gap-5">
        <Select
          label="Quy mô nhân sự"
          required
          options={TEAM_SIZE_OPTIONS}
          placeholder="Chọn quy mô…"
          error={errors.teamSize?.message}
          {...register("teamSize")}
        />
        <Input
          label="Email"
          type="email"
          placeholder="nguyen.van.a@company.vn"
          required
          autoComplete="email"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      {/* Row 4: Số điện thoại */}
      <Input
        label="Số điện thoại"
        type="tel"
        placeholder="090 123 4567"
        required
        autoComplete="tel"
        error={errors.phone?.message}
        {...register("phone")}
      />

      {/* Row 5: Hệ thống đang dùng (tùy chọn) */}
      <Input
        label="Hệ thống đang dùng"
        placeholder="MISA, SAP, Excel, hoặc để trống nếu chưa có"
        helper="Tùy chọn — giúp chúng tôi chuẩn bị demo phù hợp hơn."
        {...register("currentSystem")}
      />

      {/* Row 6: Nhu cầu chính (tùy chọn) */}
      <Textarea
        label="Nhu cầu chính"
        placeholder="Mô tả ngắn gọn quy trình hoặc vấn đề bạn muốn giải quyết bằng Qortex…"
        helper="Tùy chọn — giúp chúng tôi chuẩn bị demo đúng trọng tâm."
        rows={4}
        {...register("requirements")}
      />

      {/* Privacy consent */}
      <PrivacyField
        checked={privacyValue ?? false}
        error={errors.privacyConsent?.message}
        onChange={() => {}}
      />

      {/* Submit error */}
      {submitError && (
        <div
          className="p-4 rounded-q-md bg-q-danger/10 border border-q-danger/30"
          role="alert"
          aria-live="polite"
        >
          <p className="text-small text-q-danger flex items-start gap-2">
            <ErrorIcon />
            {submitError}
          </p>
        </div>
      )}

      {/* Submit button */}
      <Button
        type="submit"
        variant="cta"
        size="lg"
        disabled={!canSubmit}
        aria-disabled={!canSubmit || isPending}
        className={cn(
          "w-full justify-center sm:w-auto sm:self-start",
          isPending && "opacity-70 cursor-wait"
        )}
      >
        {isPending ? (
          <>
            <SpinnerIcon />
            {DEMO_FORM.submittingLabel}
          </>
        ) : (
          DEMO_FORM.submitLabel
        )}
      </Button>
    </form>
  );
}

/* ─── Privacy field ─── */
function PrivacyField({
  checked,
  error,
  onChange,
}: {
  checked: boolean;
  error?: string;
  onChange: () => void;
}) {
  const id = "privacy-consent";
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className={cn(
          "flex items-start gap-3 cursor-pointer",
          error ? "items-start" : "items-start"
        )}
      >
        {/* Hidden native checkbox — styled via the wrapper */}
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="mt-0.5 w-5 h-5 rounded border-q-border bg-q-neutral-0 accent-q-green-800 cursor-pointer flex-shrink-0"
          aria-required="true"
          aria-invalid={!!error}
          aria-describedby={error ? "privacy-error" : undefined}
        />
        <span className="text-small text-q-text-secondary leading-relaxed -mt-0.5">
          {DEMO_FORM.privacyLabel}{" "}
          <Link
            href={DEMO_FORM.privacyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-q-link underline underline-offset-2 hover:text-q-link-hover"
          >
            (đọc chính sách)
          </Link>
        </span>
      </label>
      {error && (
        <p
          id="privacy-error"
          className="mt-1 ml-8 text-caption text-q-danger flex items-center gap-1"
          role="alert"
        >
          <ErrorIcon />
          {error}
        </p>
      )}
    </div>
  );
}

/* ─── Icons ─── */
function ErrorIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animate-spin"
      aria-hidden="true"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
