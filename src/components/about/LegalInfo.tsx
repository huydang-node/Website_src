/**
 * LegalInfo — Thông tin pháp lý công ty.
 *
 * ⚠️ Mã số doanh nghiệp và địa chỉ cần xác nhận.
 *    Placeholder "[Cần xác nhận]" khi chưa có.
 */
import React from "react";
import { Section, Container } from "@/components/ui";
import { LEGAL_INFO } from "@/data/about";

export function LegalInfo() {
  return (
    <Section variant="alt" id="thong-tin-phap-ly">
      <Container>
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8">
            <h2 className="text-q-h3 text-q-text-heading">
              Thông tin pháp lý 
            </h2>
            <p className="text-small text-q-text-muted mt-1">
              Qortex Solutions Co., Ltd
            </p>
          </div>

          {/* Info grid */}
          <div className="q-card p-8">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              <InfoItem
                term="Tên công ty (VI)"
                definition={LEGAL_INFO.companyNameVi}
              />
              <InfoItem
                term="Tên công ty (EN)"
                definition={LEGAL_INFO.companyNameEn}
              />
              <InfoItem
                term="Mã số doanh nghiệp"
                definition={LEGAL_INFO.businessCode}
                needsConfirmation={LEGAL_INFO.businessCode.startsWith("[")}
              />
              <InfoItem
                term="Địa chỉ trụ sở"
                definition={LEGAL_INFO.address}
                needsConfirmation={LEGAL_INFO.address.startsWith("[")}
              />
            </dl>
          </div>

          {/* CTA footer */}
          <div className="mt-8 text-center">
            <p className="text-small text-q-text-muted mb-4">
              Bạn có câu hỏi? Liên hệ với chúng tôi.
            </p>
            <a
              href="mailto:contact@qortex.vn"
              className="q-btn q-btn-primary q-btn-sm inline-flex items-center gap-2 no-underline"
            >
              <MailIcon />
              Liên hệ
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function InfoItem({
  term,
  definition,
  needsConfirmation,
}: {
  term: string;
  definition: string;
  needsConfirmation?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1">
      <dt className="text-caption text-q-text-muted font-medium uppercase tracking-wider">
        {term}
      </dt>
      <dd
        className={`text-body ${needsConfirmation ? "text-q-warning font-medium" : "text-q-text-primary"}`}
      >
        {definition}
      </dd>
    </div>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
