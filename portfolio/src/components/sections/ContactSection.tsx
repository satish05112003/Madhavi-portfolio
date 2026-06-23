"use client";

import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { GlassCard } from "@/components/GlassCard";
import { portfolioData } from "@/lib/portfolio-data";
import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  Phone,
} from "@phosphor-icons/react";

const contactCards = [
  {
    icon: <EnvelopeSimple size={24} weight="duotone" className="text-[#D7CCC8]" />,
    label: "Email",
    value: portfolioData.profile.email,
    href: `mailto:${portfolioData.profile.email}`,
    accent: "bg-[#4E342E]/35 border border-[#D7CCC8]/12",
  },
  {
    icon: <LinkedinLogo size={24} weight="duotone" className="text-[#D7CCC8]" />,
    label: "LinkedIn",
    value: "chelluri-yudayamadhavi-462b16290",
    href: portfolioData.profile.linkedinUrl,
    accent: "bg-[#4E342E]/20 border border-[#D7CCC8]/12",
  },
  {
    icon: <GithubLogo size={24} weight="duotone" className="text-[#D7CCC8]" />,
    label: "GitHub",
    value: "Yudaya3006",
    href: portfolioData.profile.githubUrl,
    accent: "bg-[#4E342E]/35 border border-[#D7CCC8]/12",
  },
  {
    icon: <Phone size={24} weight="duotone" className="text-[#D7CCC8]" />,
    label: "Phone",
    value: portfolioData.profile.phone,
    href: `tel:${portfolioData.profile.phone.replace(/[^+\d]/g, "")}`,
    accent: "bg-[#4E342E]/20 border border-[#D7CCC8]/12",
  },
];

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="relative py-16 md:py-20 bg-[#1C1C1C]">
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(78, 52, 46, 0.12), transparent 60%)",
        }}
      />

      <div className="section-container relative z-10 text-[#D7CCC8]">
        <AnimatedItem delay={0.1}>
          <h2 className="heading-section text-3xl md:text-4xl mb-4 text-[#D7CCC8]">
            Get in Touch
          </h2>
          <p className="body-text text-base mb-10 text-[#D7CCC8]/70">
            Open to opportunities in AI engineering and software development.
          </p>
        </AnimatedItem>

        {/* Contact cards — 4 column compact grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactCards.map((card, i) => (
            <AnimatedItem key={card.label} delay={0.15 + i * 0.05}>
              <a
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  card.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block"
              >
                <GlassCard className="p-5 h-full text-center border border-[#D7CCC8]/12 bg-[#1C1C1C]" hover>
                  <div
                    className={`w-12 h-12 rounded-xl ${card.accent} flex items-center justify-center mx-auto mb-3`}
                  >
                    {card.icon}
                  </div>
                  <p className="text-[10px] font-mono text-[#D7CCC8]/60 mb-1 tracking-wider uppercase">
                    {card.label}
                  </p>
                  <p className="text-xs font-semibold text-[#D7CCC8]/95 break-all leading-relaxed">
                    {card.value}
                  </p>
                </GlassCard>
              </a>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
