"use client";

import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { GlassCard } from "@/components/GlassCard";
import { portfolioData } from "@/lib/portfolio-data";
import { GraduationCap } from "@phosphor-icons/react";

export function EducationSection() {
  const { education } = portfolioData;

  return (
    <AnimatedSection id="education" className="relative py-16 md:py-20 bg-[#1C1C1C]">
      {/* Subtle background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 20% 80%, rgba(78, 52, 46, 0.08), transparent 50%)",
        }}
      />

      <div className="section-container relative z-10 text-[#D7CCC8]">
        <AnimatedItem delay={0.1}>
          <h2 className="heading-section text-3xl md:text-4xl mb-10 text-[#D7CCC8]">
            Education
          </h2>
        </AnimatedItem>

        {/* Vertical timeline matching Experience section */}
        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-5 md:left-7 top-0 bottom-0 w-[2px]"
            style={{
              background:
                "linear-gradient(to bottom, var(--mocha), rgba(215, 204, 200, 0.1), transparent)",
            }}
            aria-hidden="true"
          />

          <div className="space-y-6">
            {education.map((edu, i) => (
              <AnimatedItem key={edu.institution} delay={0.15 + i * 0.1}>
                <div className="flex gap-4 md:gap-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full glass border border-[#D7CCC8]/12 flex items-center justify-center bg-[#1C1C1C]">
                      <GraduationCap
                        size={20}
                        weight="duotone"
                        className="text-[#D7CCC8]"
                      />
                    </div>
                  </div>

                  {/* Content card matching Experience */}
                  <GlassCard
                    className="flex-1 p-5 md:p-6 border border-[#D7CCC8]/12 bg-[#1C1C1C]"
                    variant="strong"
                    hover
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3 pb-3 border-b border-[#D7CCC8]/10">
                      <div>
                        <h3 className="text-base md:text-lg font-semibold text-[#D7CCC8] leading-tight">
                          {edu.degree}
                        </h3>
                        <p className="text-xs md:text-sm text-[#D7CCC8]/70 font-medium mt-0.5">
                          {edu.field}
                        </p>
                      </div>
                      <span className="px-2 py-0.5 text-[9px] font-mono rounded bg-[#4E342E]/25 border border-[#D7CCC8]/10 text-[#D7CCC8]">
                        {edu.startYear} - {edu.endYear}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-[#D7CCC8]/85 mb-4">
                      {edu.institution}
                    </p>

                    {/* Score badges */}
                    <div className="flex items-center gap-3 pt-3 border-t border-[#D7CCC8]/10">
                      {edu.cgpa && (
                        <div className="bg-[#4E342E]/15 border border-[#D7CCC8]/10 px-3 py-1.5 rounded-lg flex items-center gap-3">
                          <span className="text-[9px] font-mono text-[#D7CCC8]/55 uppercase">CGPA</span>
                          <span className="text-sm font-bold text-[#D7CCC8]">{edu.cgpa}</span>
                        </div>
                      )}
                      {edu.percentage && (
                        <div className="bg-[#4E342E]/15 border border-[#D7CCC8]/10 px-3 py-1.5 rounded-lg flex items-center gap-3">
                          <span className="text-[9px] font-mono text-[#D7CCC8]/55 uppercase">PERCENTAGE</span>
                          <span className="text-sm font-bold text-[#D7CCC8]">{edu.percentage}%</span>
                        </div>
                      )}
                    </div>
                  </GlassCard>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
