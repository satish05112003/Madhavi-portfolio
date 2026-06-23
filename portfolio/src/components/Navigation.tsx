"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useVelocity, useSpring, useTransform } from "motion/react";
import {
  House,
  User,
  GraduationCap,
  Folder,
  Briefcase,
  Cpu,
  Trophy,
  Certificate,
  FileText,
  Envelope,
} from "@phosphor-icons/react";

// Navigation items matching exact order and labels
const navItems = [
  { label: "Homepage", href: "#hero", icon: House },
  { label: "About Me", href: "#about", icon: User },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Product Showcase", href: "#projects", icon: Folder },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Skills & Technologies", href: "#skills", icon: Cpu },
  { label: "Achievements", href: "#achievements", icon: Trophy },
  { label: "Certificates", href: "#certificates", icon: Certificate },
  { label: "Resume", href: "#resume", icon: FileText },
  { label: "Get in Touch", href: "#contact", icon: Envelope },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("#hero");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const reduce = useReducedMotion();

  // Scroll spy observer to highlight active item
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -55% 0px",
      threshold: 0.05,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Hardware-accelerated inertial scroll lagging for premium watchOS/VisionOS feel
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const velocitySpring = useSpring(scrollVelocity, { stiffness: 80, damping: 20 });
  
  // Drag effect: positive velocity (scrolling down) pushes dock slightly upwards (-12px max)
  const translateY = useTransform(velocitySpring, [-2500, 2500], [12, -12]);
  const yOffset = reduce ? 0 : translateY;

  // 500ms–700ms spring physics configuration for clean organic transitions
  const springTransition = {
    type: "spring" as const,
    stiffness: 65,
    damping: 13,
    mass: 0.9,
  };

  return (
    <motion.div
      style={{ y: yOffset }}
      className="fixed right-2 md:right-3 lg:right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-[13px] items-center"
    >
      {navItems.map((item, index) => {
        const IconComponent = item.icon;
        const isActive = activeSection === item.href;
        const isHovered = hoveredIdx === index;

        // Custom styling tokens derived strictly from Mocha, Latte, Carbon Black color lock
        const glassStyle = {
          background: isActive ? "#4E342E" : "rgba(78, 52, 46, 0.06)",
          border: isActive ? "1px solid rgba(215, 204, 200, 0.2)" : "1px solid rgba(215, 204, 200, 0.08)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        };

        // Determine animated dimensions and scale metrics (Subtle secondary layout spec)
        const targetWidth = isActive ? 48 : 34;
        const targetHeight = isActive ? 48 : 34;
        
        // Active item scale 1.05. Inactive item scale 1.0 (base) and 1.03 on hover.
        const targetScale = isActive 
          ? 1.05 
          : (isHovered ? 1.03 : 1.0);

        // Very subtle Mocha glow only for active/hover states to remain unobtrusive
        const glowShadow = isActive
          ? "0 0 10px rgba(78, 52, 46, 0.35), 0 4px 12px rgba(0, 0, 0, 0.25)"
          : isHovered
          ? "0 0 8px rgba(78, 52, 46, 0.25), 0 4px 10px rgba(0, 0, 0, 0.2)"
          : "0 4px 10px rgba(0, 0, 0, 0.15)";

        // Tooltip offset calculated relative to active/inactive circle width plus padding
        const tooltipRight = isActive ? 58 : 44;

        return (
          <div
            key={item.href}
            className="relative flex items-center justify-center"
            style={{ zIndex: isActive ? 20 : 10 }}
            onMouseEnter={() => setHoveredIdx(index)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <motion.button
              onClick={() => handleNavClick(item.href)}
              style={glassStyle}
              className="rounded-full flex items-center justify-center cursor-pointer focus:outline-none select-none relative"
              animate={{
                width: targetWidth,
                height: targetHeight,
                scale: targetScale,
                boxShadow: glowShadow,
              }}
              transition={springTransition}
              aria-label={item.label}
            >
              {/* Center aligned thin line icon */}
              <div 
                className="flex items-center justify-center transition-colors duration-300"
                style={{
                  color: isActive ? "#D7CCC8" : "rgba(215, 204, 200, 0.7)",
                }}
              >
                <IconComponent
                  size={isActive ? 20 : 14}
                  weight={isActive ? "fill" : "light"}
                  className="transition-all duration-300"
                />
              </div>
            </motion.button>

            {/* Apple glassmorphism tooltip showing to the left */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, x: 8, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 8, scale: 0.95 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full border border-[#D7CCC8]/12 backdrop-blur-md shadow-lg text-[9px] font-mono font-medium tracking-wider text-[#D7CCC8] whitespace-nowrap z-50 pointer-events-none"
                  style={{
                    right: `${tooltipRight}px`,
                    background: "rgba(78, 52, 46, 0.15)",
                  }}
                >
                  {item.label}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </motion.div>
  );
}
