"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";

export function FooterSection() {
  const { profile } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-12 md:py-16 border-t border-[#D7CCC8]/15 bg-[#1C1C1C] text-[#D7CCC8]">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Name and copyright */}
          <div className="text-center md:text-left">
            <p className="text-base font-semibold text-[#D7CCC8] mb-1">
              {profile.fullName}
            </p>
            <p className="text-xs text-[#D7CCC8]/60">
              &copy; {year}. All rights reserved.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D7CCC8]/60 hover:text-[#D7CCC8] transition-colors"
              aria-label="GitHub"
            >
              <GithubLogo size={22} weight="fill" />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D7CCC8]/60 hover:text-[#D7CCC8] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={22} weight="fill" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-[#D7CCC8]/60 hover:text-[#D7CCC8] transition-colors"
              aria-label="Email"
            >
              <EnvelopeSimple size={22} weight="fill" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
