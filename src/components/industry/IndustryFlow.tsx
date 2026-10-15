/**
 * IndustryFlow — Section hiển thị quy trình Qortex xử lý bài toán ngành.
 * Dùng trong trang chi tiết ngành.
 */
import React from "react";
import { Section, Container } from "@/components/ui";

interface IndustryFlowProps {
  solution: {
    title: string;
    description: string;
    flow: string[];
  };
}

/**
 * IndustryFlow section — quy trình Qortex xử lý bài toán.
 * Hiển thị 4 bước theo chiều ngang, có mũi tên nối.
 */
export function IndustryFlow({ solution }: IndustryFlowProps) {
  return (
    <Section variant="default" id="quy-trinh">
      <Container>
        {/* Section header */}
        <div className="max-w-2xl mb-10">
          <h2 className="text-q-h2 text-q-text-heading">{solution.title}</h2>
          <p className="q-lead text-q-text-secondary mt-4">
            {solution.description}
          </p>
        </div>

        {/* Flow steps */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {solution.flow.map((step, index) => (
              <FlowStep key={index} step={step} index={index} />
            ))}
          </div>

          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-10 left-[calc(25%-2px)] right-[calc(25%-2px)] h-px bg-q-border z-0"
            aria-hidden="true"
          />
        </div>
      </Container>
    </Section>
  );
}

function FlowStep({ step, index }: { step: string; index: number }) {
  return (
    <div className="relative z-10 flex flex-col gap-3">
      {/* Step number */}
      <div
        className="w-10 h-10 rounded-full bg-q-green-800 text-q-neutral-0 flex items-center justify-center text-small font-semibold flex-shrink-0"
        aria-label={`Bước ${index + 1}`}
      >
        {index + 1}
      </div>

      {/* Step content */}
      <div className="q-card p-4 flex-1">
        <p className="text-small text-q-text-secondary leading-snug">
          {step}
        </p>
      </div>
    </div>
  );
}
