"use client";

import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { GlassCard } from "@/components/GlassCard";
import { portfolioData } from "@/lib/portfolio-data";
import {
  Trophy,
  Medal,
  Users,
  Certificate,
} from "@phosphor-icons/react";

const achievementIcons = [
  <Trophy key="trophy" size={24} weight="duotone" className="text-[#D7CCC8]" />,
  <Certificate key="cert" size={24} weight="duotone" className="text-[#D7CCC8]" />,
  <Users key="users" size={24} weight="duotone" className="text-[#D7CCC8]" />,
  <Medal key="medal" size={24} weight="duotone" className="text-[#D7CCC8]" />,
];

export function AchievementsSection() {
  const { achievements } = portfolioData;

  return (
    <AnimatedSection id="achievements" className="relative py-16 md:py-20 bg-[#1C1C1C]">
      <div className="section-container text-[#D7CCC8]">
        <AnimatedItem delay={0.1}>
          <h2 className="heading-section text-3xl md:text-4xl mb-10 text-[#D7CCC8]">
            Achievements
          </h2>
        </AnimatedItem>

        {/* 2x2 grid on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, i) => (
            <AnimatedItem key={achievement.title} delay={0.15 + i * 0.05}>
              <GlassCard className="p-5 h-full border border-[#D7CCC8]/12 bg-[#1C1C1C]" hover>
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#4E342E]/50 border border-[#D7CCC8]/12"
                  >
                    {achievementIcons[i % achievementIcons.length]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-[#D7CCC8] mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-xs text-[#D7CCC8]/75 leading-relaxed">
                      {achievement.description}
                    </p>
                    {achievement.date && (
                      <p className="text-[10px] text-[#D7CCC8]/55 mt-2 font-mono uppercase tracking-wider">
                        {new Date(achievement.date).getFullYear()}
                      </p>
                    )}
                  </div>
                </div>
              </GlassCard>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
