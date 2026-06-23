"use client";

import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { GlassCard } from "@/components/GlassCard";
import { portfolioData } from "@/lib/portfolio-data";

export function AboutSection() {
  const { profile } = portfolioData;
  const bioParagraphs = profile.bio.split("\n\n").filter(Boolean);

  return (
    <AnimatedSection
      id="about"
      className="relative py-16 md:py-20 bg-[#1C1C1C]"
    >
      <div className="section-container text-[#D7CCC8]">
        <AnimatedItem delay={0.1}>
          <h2 className="heading-section text-3xl md:text-4xl mb-8 text-[#D7CCC8]">
            About Me
          </h2>
        </AnimatedItem>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Main bio card — spans 3 cols */}
          <AnimatedItem className="lg:col-span-3" delay={0.15}>
            <GlassCard className="p-6 md:p-8 h-full border border-[#D7CCC8]/12" variant="strong">
              <div className="space-y-4">
                {bioParagraphs.map((para, i) => (
                  <p key={i} className="text-[#D7CCC8]/75 text-sm md:text-base leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </GlassCard>
          </AnimatedItem>

          {/* Side info cards — spans 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <AnimatedItem delay={0.25}>
              <GlassCard className="p-5 border border-[#D7CCC8]/12" hover>
                <p className="text-[9px] font-mono text-[#D7CCC8]/55 mb-2.5 tracking-widest uppercase">
                  Currently
                </p>
                <p className="text-base font-semibold text-[#D7CCC8] mb-0.5">
                  {profile.currentRole}
                </p>
                <p className="text-xs text-[#D7CCC8]/75">
                  @ {profile.currentCompany}
                </p>
              </GlassCard>
            </AnimatedItem>

            <AnimatedItem delay={0.35}>
              <GlassCard className="p-5 border border-[#D7CCC8]/12" hover>
                <p className="text-[9px] font-mono text-[#D7CCC8]/55 mb-2.5 tracking-widest uppercase">
                  Location
                </p>
                <p className="text-base font-semibold text-[#D7CCC8] mb-0.5">
                  {profile.city}, {profile.state}
                </p>
                <p className="text-xs text-[#D7CCC8]/75">
                  {profile.country}
                </p>
              </GlassCard>
            </AnimatedItem>

            <AnimatedItem delay={0.45}>
              <GlassCard className="p-5 border border-[#D7CCC8]/12" hover>
                <p className="text-[9px] font-mono text-[#D7CCC8]/55 mb-2.5 tracking-widest uppercase">
                  Interests
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["Generative AI", "Agentic AI", "ML", "Software Dev"].map(
                    (interest) => (
                      <span
                        key={interest}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#4E342E]/25 border border-[#D7CCC8]/10 text-[#D7CCC8]"
                      >
                        {interest}
                      </span>
                    )
                  )}
                </div>
              </GlassCard>
            </AnimatedItem>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
