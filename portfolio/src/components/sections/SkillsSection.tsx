"use client";

import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { GlassCard } from "@/components/GlassCard";
import { portfolioData, skillCategoryOrder } from "@/lib/portfolio-data";
import {
  Brain,
  Code,
  Stack,
  Database,
  GearSix,
  TreeStructure,
} from "@phosphor-icons/react";

const categoryIcons: Record<string, React.ReactNode> = {
  "AI & ML": <Brain size={20} weight="duotone" />,
  "Programming Languages": <Code size={20} weight="duotone" />,
  Frameworks: <Stack size={20} weight="duotone" />,
  Databases: <Database size={20} weight="duotone" />,
  "DevOps & Tools": <GearSix size={20} weight="duotone" />,
  "Core CS": <TreeStructure size={20} weight="duotone" />,
};

export function SkillsSection() {
  const { skillsByCategory } = portfolioData;

  return (
    <AnimatedSection id="skills" className="relative py-16 md:py-20 bg-[#1C1C1C]">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(78, 52, 46, 0.1), transparent 50%)",
        }}
      />

      <div className="section-container relative z-10 text-[#D7CCC8]">
        <AnimatedItem delay={0.1}>
          <h2 className="heading-section text-3xl md:text-4xl mb-4 text-[#D7CCC8]">
            Skills & Technologies
          </h2>
          <p className="body-text text-base mb-10 text-[#D7CCC8]/70">
            Technologies and tools I work with across AI, development, and engineering.
          </p>
        </AnimatedItem>

        {/* Bento grid — uniform cells for visual rhythm and card consistency */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategoryOrder.map((category, i) => {
            const skills = skillsByCategory[category];
            if (!skills) return null;

            return (
              <AnimatedItem
                key={category}
                delay={0.1 + i * 0.05}
              >
                <GlassCard
                  className="p-5 h-full border border-[#D7CCC8]/12 bg-[#1C1C1C]"
                  variant="strong"
                  hover
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#4E342E]/35 text-[#D7CCC8]"
                    >
                      {categoryIcons[category]}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#D7CCC8]">
                        {category}
                      </h3>
                      <p className="text-[10px] text-[#D7CCC8]/60 font-mono">
                        {skills.length} MODULES
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#4E342E]/25 border border-[#D7CCC8]/10 text-[#D7CCC8] hover:border-[#D7CCC8]/30 transition-colors"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </AnimatedItem>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
