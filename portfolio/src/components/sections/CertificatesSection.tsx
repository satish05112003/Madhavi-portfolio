"use client";

import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { GlassCard } from "@/components/GlassCard";
import { FileText, ArrowUpRight } from "@phosphor-icons/react";

const certificates = [
  {
    title: "SQL Certificate",
    issuer: "HackerRank",
    description: "Verified SQL Basic skills, demonstrating solid knowledge in querying, subqueries, joining, and aggregation operations in relational databases.",
    link: "https://drive.google.com/file/d/1EeARD8qL_vugNSH3XkC7BaXaQIAt8_9E/view?pli=1"
  },
  {
    title: "SAWIT.AI Learnathon",
    issuer: "HCLTech · Google Women Techmakers · NASSCOM",
    description: "Completed Generative AI course-work covering large language models, prompting techniques, vector databases, and foundational RAG setups.",
    link: "https://drive.google.com/file/d/1hz0CNQgsYJxJZ5p0MzpXcMN8qgrIVOJ-/view"
  }
];

export function CertificatesSection() {
  return (
    <AnimatedSection id="certificates" className="relative py-16 md:py-20 bg-[#1C1C1C]">
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute bottom-0 right-0 w-[40%] h-[40%] animate-float-slow"
          style={{
            background:
              "radial-gradient(ellipse at 70% 70%, rgba(78, 52, 46, 0.06), transparent 60%)",
          }}
        />
      </div>

      <div className="section-container relative z-10 text-[#D7CCC8]">
        <AnimatedItem delay={0.1}>
          <div className="flex flex-col items-center text-center mb-12">
            <span className="px-3.5 py-1 text-[9px] font-mono font-medium tracking-[0.2em] text-[#D7CCC8] uppercase bg-[#4E342E]/30 border border-[#D7CCC8]/12 rounded-full mb-3">
              CREDENTIALS
            </span>
            <h2 className="heading-section text-3xl md:text-4xl text-[#D7CCC8]">
              Certificates
            </h2>
          </div>
        </AnimatedItem>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificates.map((cert, i) => (
            <AnimatedItem key={cert.title} delay={0.15 + i * 0.1}>
              <GlassCard
                className="p-6 md:p-8 border border-[#D7CCC8]/12 bg-[#1C1C1C] flex flex-col justify-between h-full"
                hover
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#4E342E]/30 border border-[#D7CCC8]/12 text-[#D7CCC8]">
                      <FileText size={24} weight="duotone" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#D7CCC8] leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-[#D7CCC8]/60 mt-1 font-mono uppercase tracking-wider">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-[#D7CCC8]/75 leading-relaxed mb-8">
                    {cert.description}
                  </p>
                </div>

                <div className="flex justify-start">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-full bg-[#4E342E] hover:bg-[#4E342E]/80 text-xs font-semibold text-[#D7CCC8] tracking-wide transition-all duration-300 cursor-pointer border border-[#D7CCC8]/10"
                    style={{ boxShadow: "0 4px 14px rgba(78, 52, 46, 0.25)" }}
                  >
                    View Certificate
                    <ArrowUpRight size={12} weight="bold" />
                  </a>
                </div>
              </GlassCard>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
