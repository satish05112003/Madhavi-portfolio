"use client";

import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { GlassCard } from "@/components/GlassCard";
import { portfolioData } from "@/lib/portfolio-data";
import { Briefcase, MapPin } from "@phosphor-icons/react";

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <AnimatedSection id="experience" className="relative py-16 md:py-20 bg-[#1C1C1C]">
      <div className="section-container text-[#D7CCC8]">
        <AnimatedItem delay={0.1}>
          <h2 className="heading-section text-3xl md:text-4xl mb-10 text-[#D7CCC8]">
            Experience
          </h2>
        </AnimatedItem>

        {/* Vertical timeline */}
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
            {experience.map((exp, i) => (
              <AnimatedItem key={i} delay={0.15 + i * 0.1}>
                <div className="flex gap-4 md:gap-6">
                  {/* Timeline dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full glass border border-[#D7CCC8]/12 flex items-center justify-center bg-[#1C1C1C]">
                      <Briefcase
                        size={20}
                        weight="duotone"
                        className="text-[#D7CCC8]"
                      />
                    </div>
                  </div>

                  {/* Content card - Compacted vertical sizing */}
                  <GlassCard
                    className="flex-1 p-5 md:p-6 border border-[#D7CCC8]/12 bg-[#1C1C1C]"
                    variant="strong"
                    hover
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3 pb-3 border-b border-[#D7CCC8]/10">
                      <div>
                        <h3 className="text-base md:text-lg font-semibold text-[#D7CCC8] leading-tight">
                          {exp.role}
                        </h3>
                        <p className="text-xs md:text-sm text-[#D7CCC8]/70 font-medium mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 text-[9px] font-mono rounded bg-[#4E342E]/25 border border-[#D7CCC8]/10 text-[#D7CCC8]">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-[#D7CCC8]/60 mb-4">
                      <MapPin size={14} weight="fill" />
                      <span>{exp.location} · {exp.duration}</span>
                    </div>

                    {/* Description as bullet points - compact spacing */}
                    <div className="space-y-2">
                      {exp.description
                        .split("\n\n")
                        .filter(Boolean)
                        .map((point, j) => (
                          <div key={j} className="flex gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#4E342E] mt-1.5 flex-shrink-0" />
                            <p className="text-xs text-[#D7CCC8]/85 leading-relaxed">
                              {point.trim()}
                            </p>
                          </div>
                        ))}
                    </div>

                    {/* Skills used */}
                    {exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-[#D7CCC8]/10">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 text-[9px] font-mono rounded bg-[#4E342E]/20 border border-[#D7CCC8]/10 text-[#D7CCC8]/80"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
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
