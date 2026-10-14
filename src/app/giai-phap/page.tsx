/**
 * Giải pháp overview page — /giai-phap
 *
 * Hiển thị tổng quan 4 ngành với grid và link đến trang chi tiết.
 */
import type { Metadata } from "next";
import { IndustryHeroOverview, IndustryOverview } from "@/components/industry";

export const metadata: Metadata = {
  title: "Giải pháp theo ngành",
  description:
    "Giải pháp ERP Qortex theo đặc thù từng ngành: Khách sạn, Sản xuất, Bán lẻ, Dịch vụ theo hợp đồng. Mỗi ngành có bài toán riêng — Qortex hiểu và xử lý đúng trọng tâm.",
};

export default function GiaiPhapPage() {
  return (
    <main>
      {/* Hero overview */}
      <IndustryHeroOverview />

      {/* Grid 4 ngành */}
      <IndustryOverview />
    </main>
  );
}
