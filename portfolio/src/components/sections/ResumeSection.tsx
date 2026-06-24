"use client";

import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { GlassCard } from "@/components/GlassCard";
import { DownloadSimple, ArrowSquareOut } from "@phosphor-icons/react";

export function ResumeSection() {
  return (
    <AnimatedSection id="resume" className="relative py-16 md:py-20 bg-[#1C1C1C]">
      {/* Background glow orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(78, 52, 46, 0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-container text-[#D7CCC8] relative z-10">
        <div className="max-w-2xl mx-auto">
          <AnimatedItem delay={0.1}>
            <div className="text-center mb-8">
              <span className="px-3.5 py-1 text-[9px] font-mono font-medium tracking-[0.2em] text-[#D7CCC8] uppercase bg-[#4E342E]/30 border border-[#D7CCC8]/12 rounded-full mb-3 inline-block">
                PORTFOLIO ATTACHMENT
              </span>
              <h2 className="heading-section text-3xl md:text-4xl text-[#D7CCC8]">
                Professional Resume
              </h2>
            </div>
          </AnimatedItem>

          <AnimatedItem delay={0.15}>
            <GlassCard className="p-8 md:p-10 border border-[#D7CCC8]/12 bg-[#1C1C1C] text-center shadow-2xl flex flex-col items-center">
              <p className="text-sm md:text-base text-[#D7CCC8]/80 leading-relaxed mb-8 max-w-lg">
                View or download Yudaya Madhavi&apos;s professional resume detailing academic credentials in Electronics and Communication Engineering at NIT Agartala, technical expertise in Generative AI and Machine Learning, and internship contributions at Amdocs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                <a
                  href="/Yudaya_Madhavi_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary cursor-pointer flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold w-full sm:w-[180px] h-11 border border-[#D7CCC8]/15 bg-[#1C1C1C] hover:bg-[#4E342E]/10"
                >
                  View Resume
                  <ArrowSquareOut size={14} weight="bold" />
                </a>
                <a
                  href="/Yudaya_Madhavi_Resume.pdf"
                  download="Yudaya_Madhavi_Resume.pdf"
                  className="btn-primary cursor-pointer flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold w-full sm:w-[180px] h-11 bg-[#4E342E] hover:bg-[#4E342E]/80 text-[#D7CCC8] border border-[#D7CCC8]/10"
                  style={{ boxShadow: "0 4px 14px rgba(78, 52, 46, 0.25)" }}
                >
                  <DownloadSimple size={16} weight="bold" />
                  Download Resume
                </a>
              </div>
            </GlassCard>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
