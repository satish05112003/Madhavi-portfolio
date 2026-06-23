"use client";

import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { GlassCard } from "@/components/GlassCard";
import { portfolioData } from "@/lib/portfolio-data";
import { DownloadSimple, FileText } from "@phosphor-icons/react";

export function ResumeSection() {
  const { profile } = portfolioData;

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
        <div className="max-w-4xl mx-auto">
          <AnimatedItem delay={0.1}>
            <div className="text-center mb-10">
              <span className="px-3.5 py-1 text-[9px] font-mono font-medium tracking-[0.2em] text-[#D7CCC8] uppercase bg-[#4E342E]/30 border border-[#D7CCC8]/12 rounded-full mb-3 inline-block">
                PORTFOLIO ATTACHMENT
              </span>
              <h2 className="heading-section text-3xl md:text-4xl mb-3 text-[#D7CCC8]">
                Professional Resume
              </h2>
            </div>
          </AnimatedItem>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left side: Professional Summary & Download CTA (55%) */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6">
              <AnimatedItem delay={0.15} className="flex-grow flex flex-col justify-center">
                <GlassCard className="p-6 md:p-8 border border-[#D7CCC8]/12 bg-[#1C1C1C] h-full flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-[#D7CCC8] mb-4 pb-2 border-b border-[#D7CCC8]/10 font-mono tracking-wide uppercase text-[11px]">
                    Professional Summary
                  </h3>
                  <p className="text-xs md:text-sm text-[#D7CCC8]/80 leading-relaxed space-y-4">
                    Experienced in constructing Generative AI solutions, orchestration pipelines, and advanced Machine Learning models. 
                    Proven ability in designing multi-agent workflows, FastAPI integration, RAG systems, and robust time-series predictive monitors.
                  </p>
                  <p className="text-xs md:text-sm text-[#D7CCC8]/80 leading-relaxed mt-3">
                    Deeply analytical, coordinating campus placements and leading athletic clubs at NIT Agartala while maintaining active development skills in Python, Scikit-Learn, LangChain, and LangGraph.
                  </p>
                </GlassCard>
              </AnimatedItem>

              <AnimatedItem delay={0.2}>
                <div className="flex justify-center lg:justify-start">
                  <a
                    href="/resume.pdf"
                    download
                    className="btn-primary cursor-pointer flex items-center gap-2.5 px-8 py-3.5 text-xs font-bold w-full sm:w-auto justify-center"
                    style={{ boxShadow: "0 4px 14px rgba(78, 52, 46, 0.25)" }}
                  >
                    <DownloadSimple size={18} weight="bold" />
                    Download Resume (PDF)
                  </a>
                </div>
              </AnimatedItem>
            </div>

            {/* Right side: Resume Preview Mockup (45%) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <AnimatedItem delay={0.25} className="w-full max-w-[340px]">
                {/* Resume Mockup Page */}
                <GlassCard className="p-5 md:p-6 border border-[#D7CCC8]/15 bg-[#1C1C1C] relative shadow-2xl overflow-hidden aspect-[1/1.4] flex flex-col justify-between text-left select-none">
                  {/* Watermark/Accent */}
                  <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-[#4E342E]/10 blur-xl pointer-events-none" />

                  {/* Mock Content Header */}
                  <div className="border-b border-[#D7CCC8]/15 pb-3">
                    <h3 className="text-sm font-bold tracking-tight text-[#D7CCC8]">
                      CH. Yudaya Madhavi
                    </h3>
                    <p className="text-[9px] font-mono text-[#D7CCC8]/60 mt-0.5 uppercase tracking-wider">
                      Gen AI Engineer & ML Developer
                    </p>
                  </div>

                  {/* Mock Content Sections */}
                  <div className="flex-grow py-3.5 space-y-3.5">
                    {/* Education Mock */}
                    <div className="space-y-1">
                      <span className="text-[7px] font-mono text-[#D7CCC8]/40 uppercase tracking-widest block font-bold">
                        EDUCATION
                      </span>
                      <div className="text-[9px] font-semibold text-[#D7CCC8]/90">
                        B.Tech in Electronics & Comm. Eng.
                      </div>
                      <div className="text-[8px] text-[#D7CCC8]/60">
                        NIT Agartala · 7.69 CGPA (Class of 2026)
                      </div>
                    </div>

                    {/* Experience Mock */}
                    <div className="space-y-1.5">
                      <span className="text-[7px] font-mono text-[#D7CCC8]/40 uppercase tracking-widest block font-bold">
                        EXPERIENCE
                      </span>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-[9px] font-semibold text-[#D7CCC8]/90">
                          <span>Gen AI Intern · Amdocs</span>
                          <span className="text-[8px] text-[#D7CCC8]/55 font-mono">Present</span>
                        </div>
                        <div className="text-[8px] text-[#D7CCC8]/60 leading-normal">
                          · Building multi-agent systems and LangGraph workflows.
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-[9px] font-semibold text-[#D7CCC8]/90">
                          <span>ML Intern · Technohacks</span>
                          <span className="text-[8px] text-[#D7CCC8]/55 font-mono">2024</span>
                        </div>
                        <div className="text-[8px] text-[#D7CCC8]/60 leading-normal">
                          · Developed models & preprocessed data in Scikit-Learn.
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack Mock */}
                    <div className="space-y-1">
                      <span className="text-[7px] font-mono text-[#D7CCC8]/40 uppercase tracking-widest block font-bold">
                        KEY SKILLS
                      </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {["Python", "LangChain", "LangGraph", "FastAPI", "Scikit-Learn", "RAG"].map((s) => (
                          <span key={s} className="px-1.5 py-0.5 rounded bg-[#4E342E]/25 border border-[#D7CCC8]/10 text-[#D7CCC8] text-[7px] font-mono">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mock Footer */}
                  <div className="border-t border-[#D7CCC8]/15 pt-2.5 flex items-center justify-between text-[8px] font-mono text-[#D7CCC8]/50">
                    <span>PDF PREVIEW</span>
                    <span className="flex items-center gap-1">
                      <FileText size={10} />
                      Yudaya_CV.pdf
                    </span>
                  </div>
                </GlassCard>
              </AnimatedItem>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
