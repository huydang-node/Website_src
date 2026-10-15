/**
 * Server Action: submit-demo
 *
 * Xử lý submit form demo request.
 *
 * ⚠️ Hiện tại:
 *   - Ghi log + redirect thành công
 *   - Chưa có email integration (cần SMTP/callback URL thật)
 *   - Chưa có lead storage / CRM (placeholder)
 *
 * TODO trước khi production:
 *   - Tích hợp email (Resend, SendGrid, AWS SES, v.v.)
 *   - Tích hợp lead storage (DB, Supabase, HubSpot, v.v.)
 *   - Captcha integration (nếu spam tăng)
 */

"use server";

import { HONEYPOT_NAME, type DemoFormData, type SubmitDemoResult } from "./demo-form";

/* ─── Validation ─── */
function validateForm(data: FormData): DemoFormData | { error: string } {
  const honeypot = data.get(HONEYPOT_NAME);
  if (honeypot && typeof honeypot === "string" && honeypot.length > 0) {
    return { error: "Invalid submission." };
  }

  const fullName = (data.get("fullName") as string | null)?.trim() ?? "";
  const jobTitle = (data.get("jobTitle") as string | null)?.trim() ?? "";
  const companyName = (data.get("companyName") as string | null)?.trim() ?? "";
  const industry = (data.get("industry") as string | null)?.trim() ?? "";
  const teamSize = (data.get("teamSize") as string | null)?.trim() ?? "";
  const email = (data.get("email") as string | null)?.trim() ?? "";
  const phone = (data.get("phone") as string | null)?.trim() ?? "";
  const currentSystem = (data.get("currentSystem") as string | null)?.trim() ?? "";
  const requirements = (data.get("requirements") as string | null)?.trim() ?? "";
  const privacyConsent = data.get("privacyConsent") === "on";

  if (!fullName) return { error: "Vui lòng nhập họ tên." };
  if (!jobTitle) return { error: "Vui lòng nhập chức vụ." };
  if (!companyName) return { error: "Vui lòng nhập tên công ty." };
  if (!industry) return { error: "Vui lòng chọn ngành." };
  if (!teamSize) return { error: "Vui lòng chọn quy mô nhân sự." };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return { error: "Vui lòng nhập email." };
  if (!emailRegex.test(email)) return { error: "Email không hợp lệ." };

  if (!phone) return { error: "Vui lòng nhập số điện thoại." };
  if (!privacyConsent) return { error: "Bạn cần đồng ý với chính sách bảo vệ dữ liệu." };

  return { fullName, jobTitle, companyName, industry, teamSize, email, phone, currentSystem, requirements, privacyConsent };
}

/* ─── Server action ─── */
export async function submitDemo(
  _prevState: unknown,
  formData: FormData,
): Promise<SubmitDemoResult> {
  /* 1. Validate */
  const result = validateForm(formData);
  if ("error" in result) {
    return { ok: false, message: result.error };
  }

  /* 2. TODO: Send email notification */
  /* 3. TODO: Store lead */

  /* 4. Log (dev) */
  if (process.env.NODE_ENV === "development") {
    console.log("[submit-demo] Lead received:", {
      email: result.email,
      company: result.companyName,
      industry: result.industry,
      teamSize: result.teamSize,
    });
  }

  return { ok: true };
}
