/**
 * Shared types và constants cho demo form — không chứa "use server".
 * Import từ đây thay vì từ submit-demo.ts.
 */

/** Honeypot field name — hidden from real users, bots fill it */
export const HONEYPOT_NAME = "q_honeypot";

export interface DemoFormData {
  fullName: string;
  jobTitle: string;
  companyName: string;
  industry: string;
  teamSize: string;
  email: string;
  phone: string;
  currentSystem?: string;
  requirements?: string;
  privacyConsent: boolean;
}

export type SubmitDemoResult =
  | { ok: true }
  | { ok: false; message: string };
