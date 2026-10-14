"use client";

import { useState } from "react";
import { Section, Container, Eyebrow, Button, Input, Select, Textarea } from "@/components/ui";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  message: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  industry?: string;
}

export function PageCTASection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Vui lòng nhập họ tên.";
    }
    if (!formData.company.trim()) {
      newErrors.company = "Vui lòng nhập tên công ty.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email chưa đúng định dạng.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại.";
    }
    if (!formData.industry) {
      newErrors.industry = "Vui lòng chọn ngành.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <Section id="cta-section" variant="inverse">
        <Container>
          <div className="max-w-2xl mx-auto text-center py-12">
            <div className="w-16 h-16 rounded-full bg-q-green-600 flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-q-neutral-0" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h2 className="text-q-h2 text-q-text-on-inverse mb-4">
              Cảm ơn bạn đã liên hệ!
            </h2>
            <p className="q-lead text-q-text-on-inverse-muted max-w-xl mx-auto mb-8">
              Chúng tôi đã nhận được thông tin và sẽ liên hệ lại trong vòng 24
              giờ làm việc để xác nhận lịch demo.
            </p>
            <div className="p-6 bg-q-green-800/30 rounded-q-lg max-w-lg mx-auto">
              <p className="text-body text-q-text-on-inverse">
                <span className="font-semibold">Bước tiếp theo:</span> Bạn sẽ
                nhận email xác nhận kèm lịch hẹn. Chúng tôi sẽ chuẩn bị demo
                theo ngành{" "}
                <span className="font-semibold text-q-cta-on-inverse-bg">
                  {formData.industry || "của bạn"}
                </span>{" "}
                và gửi đường link trước 30 phút.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="cta-section" variant="inverse">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <Eyebrow onInverse className="mb-3">
              Demo 60 phút
            </Eyebrow>
            <h2 className="text-q-h2 text-q-text-on-inverse">
              Cho chúng tôi 60 phút, chúng tôi sẽ chạy quy trình thật của
              doanh nghiệp bạn trên Qortex.
            </h2>
            <p className="q-lead mt-5 text-q-text-on-inverse-muted">
              Không phải demo generic. Chúng tôi sẽ hỏi về nghiệp vụ của bạn
              và chuẩn bị trước.
            </p>

            {/* Benefits list */}
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-body text-q-text-on-inverse-muted">
                  Demo theo đúng ngành và quy mô của bạn
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-body text-q-text-on-inverse-muted">
                  Không cam kết, không phí — gặp để hiểu nhau
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-body text-q-text-on-inverse-muted">
                  Kết thúc demo, bạn biết Qortex có phù hợp không
                </span>
              </li>
            </ul>
          </div>

          {/* Right: Form */}
          <div className="bg-q-neutral-0 rounded-q-xl p-8">
            <h3 className="text-h4 font-semibold text-q-text-primary mb-6">
              Đặt lịch demo
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <Input
                  label="Họ tên"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nguyễn Văn A"
                  required
                  error={errors.name}
                />
                <Input
                  label="Tên công ty"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Công ty ABC"
                  required
                  error={errors.company}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@congty.vn"
                  required
                  error={errors.email}
                />
                <Input
                  label="Số điện thoại"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0901 234 567"
                  required
                  error={errors.phone}
                />
              </div>

              <Select
                label="Ngành"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                placeholder="Chọn ngành của bạn"
                required
                error={errors.industry}
                options={[
                  { value: "khach-san", label: "Khách sạn" },
                  { value: "san-xuat", label: "Sản xuất" },
                  { value: "ban-le", label: "Bán lẻ" },
                  { value: "dich-vu", label: "Dịch vụ theo HĐ" },
                  { value: "khac", label: "Khác" },
                ]}
              />

              <Textarea
                label="Nhu cầu chính"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mô tả ngắn về bài toán bạn muốn Qortex giải quyết..."
                rows={3}
                helper="Không bắt buộc. Giúp chúng tôi chuẩn bị demo tốt hơn."
              />

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <LoadingSpinner />
                    Đang gửi...
                  </span>
                ) : (
                  "Đặt lịch demo"
                )}
              </Button>

              <p className="text-caption text-q-text-muted">
                Bằng cách gửi, bạn đồng ý với{" "}
                <a href="/chinh-sach-bao-mat" className="text-q-link hover:text-q-brass-700">
                  Chính sách bảo mật
                </a>{" "}
                của Qortex.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0 text-q-cta-on-inverse-bg mt-0.5"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function LoadingSpinner() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animate-spin"
      aria-hidden="true"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
