"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useAnimationFrame,
  MotionValue,
  animate,
} from "motion/react";
import type { PanInfo } from "motion/react";
import { ArrowDown } from "@phosphor-icons/react";
import { portfolioData } from "@/lib/portfolio-data";

interface SkillOrbData {
  name: string;
  size: "large" | "medium" | "small";
  layer: "far" | "mid" | "front";
  cluster: 1 | 2 | 3;
  priority: "high" | "medium" | "low";
  desktop: { x: number; y: number };
  tablet: { x: number; y: number };
  mobile: { x: number; y: number };
}

const SKILL_ORBS: SkillOrbData[] = [
  // Original & Preserved Skills (Minus Deleted ones)
  {
    name: "Generative AI",
    size: "large",
    layer: "front",
    cluster: 2,
    priority: "high",
    desktop: { x: 82, y: 14 },
    tablet: { x: 84, y: 10 },
    mobile: { x: 82, y: 8 },
  },
  {
    name: "Machine Learning",
    size: "large",
    layer: "mid",
    cluster: 1,
    priority: "high",
    desktop: { x: 10, y: 12 },
    tablet: { x: 12, y: 12 },
    mobile: { x: 12, y: 14 },
  },
  {
    name: "AI Agents",
    size: "large",
    layer: "front",
    cluster: 3,
    priority: "high",
    desktop: { x: 14, y: 82 },
    tablet: { x: 12, y: 82 },
    mobile: { x: 15, y: 84 },
  },
  {
    name: "LangChain",
    size: "medium",
    layer: "mid",
    cluster: 2,
    priority: "high",
    desktop: { x: 68, y: 16 },
    tablet: { x: 68, y: 14 },
    mobile: { x: 75, y: 46 },
  },
  {
    name: "LangGraph",
    size: "medium",
    layer: "mid",
    cluster: 3,
    priority: "high",
    desktop: { x: 28, y: 88 },
    tablet: { x: 28, y: 88 },
    mobile: { x: 32, y: 92 },
  },
  {
    name: "FastAPI",
    size: "medium",
    layer: "far",
    cluster: 1,
    priority: "medium",
    desktop: { x: 28, y: 10 },
    tablet: { x: 28, y: 8 },
    mobile: { x: 28, y: 8 },
  },
  {
    name: "Python",
    size: "medium",
    layer: "far",
    cluster: 2,
    priority: "medium",
    desktop: { x: 91, y: 8 },
    tablet: { x: 90, y: 6 },
    mobile: { x: 90, y: 6 },
  },
  {
    name: "RAG",
    size: "small",
    layer: "far",
    cluster: 3,
    priority: "low",
    desktop: { x: 6, y: 92 },
    tablet: { x: 6, y: 92 },
    mobile: { x: 6, y: 92 },
  },
  {
    name: "Docker",
    size: "small",
    layer: "far",
    cluster: 1,
    priority: "low",
    desktop: { x: 8, y: 6 },
    tablet: { x: 8, y: 6 },
    mobile: { x: 8, y: 6 },
  },
  // Repositioned Agentic AI (Upper-middle center gap, highly visible)
  {
    name: "Agentic AI",
    size: "large",
    layer: "front",
    cluster: 2,
    priority: "high",
    desktop: { x: 54, y: 20 },
    tablet: { x: 54, y: 20 },
    mobile: { x: 54, y: 20 },
  },
  {
    name: "Multi-Agent Systems",
    size: "large",
    layer: "mid",
    cluster: 2,
    priority: "high",
    desktop: { x: 91, y: 18 },
    tablet: { x: 91, y: 18 },
    mobile: { x: 91, y: 18 },
  },
  {
    name: "MCP Servers",
    size: "medium",
    layer: "far",
    cluster: 2,
    priority: "medium",
    desktop: { x: 72, y: 8 },
    tablet: { x: 72, y: 8 },
    mobile: { x: 72, y: 8 },
  },
  {
    name: "Tool Calling",
    size: "medium",
    layer: "far",
    cluster: 1,
    priority: "low",
    desktop: { x: 38, y: 12 },
    tablet: { x: 38, y: 12 },
    mobile: { x: 38, y: 12 },
  },
  {
    name: "Function Calling",
    size: "small",
    layer: "far",
    cluster: 3,
    priority: "low",
    desktop: { x: 10, y: 92 },
    tablet: { x: 10, y: 92 },
    mobile: { x: 10, y: 92 },
  },
  {
    name: "Transformers",
    size: "medium",
    layer: "mid",
    cluster: 1,
    priority: "medium",
    desktop: { x: 20, y: 16 },
    tablet: { x: 20, y: 16 },
    mobile: { x: 20, y: 16 },
  },
  {
    name: "Embeddings",
    size: "small",
    layer: "far",
    cluster: 3,
    priority: "low",
    desktop: { x: 45, y: 84 },
    tablet: { x: 45, y: 84 },
    mobile: { x: 45, y: 84 },
  },
  {
    name: "Prompt Chaining",
    size: "medium",
    layer: "mid",
    cluster: 2,
    priority: "medium",
    desktop: { x: 60, y: 12 },
    tablet: { x: 60, y: 12 },
    mobile: { x: 60, y: 12 },
  },
  {
    name: "LLMOps",
    size: "small",
    layer: "far",
    cluster: 2,
    priority: "low",
    desktop: { x: 80, y: 6 },
    tablet: { x: 80, y: 6 },
    mobile: { x: 80, y: 6 },
  },
  {
    name: "MCP",
    size: "small",
    layer: "mid",
    cluster: 1,
    priority: "low",
    desktop: { x: 48, y: 8 },
    tablet: { x: 48, y: 8 },
    mobile: { x: 48, y: 8 },
  },
  {
    name: "AutoGen",
    size: "medium",
    layer: "mid",
    cluster: 3,
    priority: "medium",
    desktop: { x: 38, y: 91 },
    tablet: { x: 38, y: 91 },
    mobile: { x: 38, y: 91 },
  },
  {
    name: "REST APIs",
    size: "small",
    layer: "far",
    cluster: 1,
    priority: "low",
    desktop: { x: 16, y: 6 },
    tablet: { x: 16, y: 6 },
    mobile: { x: 16, y: 6 },
  },
  {
    name: "Microservices",
    size: "small",
    layer: "far",
    cluster: 3,
    priority: "low",
    desktop: { x: 20, y: 94 },
    tablet: { x: 20, y: 94 },
    mobile: { x: 20, y: 94 },
  },
  // New Additions (Strictly clustered in empty negative space)
  {
    name: "CrewAI",
    size: "large",
    layer: "mid",
    cluster: 3,
    priority: "high",
    desktop: { x: 82, y: 82 },
    tablet: { x: 82, y: 82 },
    mobile: { x: 82, y: 82 },
  },
  {
    name: "OpenAI SDK",
    size: "medium",
    layer: "far",
    cluster: 3,
    priority: "low",
    desktop: { x: 90, y: 90 },
    tablet: { x: 90, y: 90 },
    mobile: { x: 90, y: 90 },
  },
  {
    name: "Claude API",
    size: "medium",
    layer: "far",
    cluster: 3,
    priority: "low",
    desktop: { x: 74, y: 92 },
    tablet: { x: 74, y: 92 },
    mobile: { x: 74, y: 92 },
  },
  {
    name: "Gemini API",
    size: "medium",
    layer: "far",
    cluster: 2,
    priority: "medium",
    desktop: { x: 91, y: 26 },
    tablet: { x: 91, y: 26 },
    mobile: { x: 91, y: 26 },
  },
];

const LAYER_CONFIGS = {
  far: { blurClass: "blur-[4px]", baseOpacity: 0.20, speed: 0.3 },
  mid: { blurClass: "blur-[2px]", baseOpacity: 0.30, speed: 0.5 },
  front: { blurClass: "blur-none", baseOpacity: 0.40, speed: 0.8 },
};

const SIZE_CONFIGS = {
  large: "px-5 py-2.5 text-xs md:text-sm",
  medium: "px-4 py-2 text-[11px] md:text-xs",
  small: "px-3 py-1.5 text-[10px] md:text-[11px]",
};

// Deterministic pseudo-random drift values based on skill name (prevents Next SSR hydration mismatch)
function getDeterministicValues(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hashAbs = Math.abs(hash);
  const xDrift = (hashAbs % 6) - 3; // -3px to 3px
  const yDrift = ((hashAbs >> 3) % 8) - 4; // -4px to 4px
  const rotateDrift = ((hashAbs >> 6) % 2) ? 1 : -1; // ±1 degree maximum
  const duration = 8 + (hashAbs % 6); // 8s to 14s float cycle
  const delay = (hashAbs % 8) * 0.1; // 0s to 0.8s stagger delay
  return { xDrift, yDrift, rotateDrift, duration, delay };
}

interface FloatingOrbProps {
  name: string;
  size: "large" | "medium" | "small";
  layer: "far" | "mid" | "front";
  x: number;
  y: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  mouseActive: MotionValue<number>;
  dimensions: { width: number; height: number };
}

function FloatingOrb({
  name,
  size,
  layer,
  x,
  y,
  mouseX,
  mouseY,
  mouseActive,
  dimensions,
}: FloatingOrbProps) {
  const reduce = useReducedMotion();
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Proximity attraction coordinates
  const proximityX = useMotionValue(0);
  const proximityY = useMotionValue(0);

  // Smooth springs for cursor proximity attraction
  const springProximityX = useSpring(proximityX, { damping: 25, stiffness: 120 });
  const springProximityY = useSpring(proximityY, { damping: 25, stiffness: 120 });

  // Drag coordinates
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  const { xDrift, yDrift, rotateDrift, duration, delay } = getDeterministicValues(name);

  // Layer specific configurations
  const config = LAYER_CONFIGS[layer];

  // Vertical scroll parallax management
  const { scrollY } = useScroll();
  
  // Positional clamping logic: limits vertical scroll displacement range strictly to [-35px, 35px]
  const rawParallax = useTransform(scrollY, [0, 600], [0, 600 * config.speed]);
  const baseParallaxY = useTransform(rawParallax, [-35, 35], [-35, 35]);
  const currentParallaxY = useMotionValue(0);

  // Sync scroll parallax, but freeze it while dragging
  useEffect(() => {
    const unsubscribe = baseParallaxY.on("change", (latest) => {
      if (!isDragging) {
        currentParallaxY.set(latest);
      }
    });
    return () => unsubscribe();
  }, [baseParallaxY, isDragging, currentParallaxY]);

  useAnimationFrame(() => {
    if (reduce || isDragging || mouseActive.get() === 0 || dimensions.width === 0) {
      proximityX.set(0);
      proximityY.set(0);
      return;
    }

    const basePixelX = (x / 100) * dimensions.width;
    const basePixelY = (y / 100) * dimensions.height;

    const mx = mouseX.get();
    const my = mouseY.get();

    const dx = mx - basePixelX;
    const dy = my - basePixelY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    let targetX = 0;
    let targetY = 0;

    const activeRadius = 220; // proximity check radius
    if (distance < activeRadius && distance > 0) {
      const force = (activeRadius - distance) / activeRadius; // 1 at center, 0 at boundary
      const maxPull = 10; // Apple-level restraint (8px–12px max attraction)
      const pull = force * maxPull;

      targetX = (dx / distance) * pull;
      targetY = (dy / distance) * pull;
    }

    proximityX.set(targetX);
    proximityY.set(targetY);
  });

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);

    const vx = info.velocity.x;
    const vy = info.velocity.y;

    // Continue with velocity momentum, then spring-animate back to anchor
    animate(dragX, 0, {
      type: "spring",
      velocity: vx,
      stiffness: 60,
      damping: 20,
      mass: 0.8,
    });
    animate(dragY, 0, {
      type: "spring",
      velocity: vy,
      stiffness: 60,
      damping: 20,
      mass: 0.8,
    });

    // Smoothly catch up parallax scroll offset back to current position
    animate(currentParallaxY, baseParallaxY.get(), {
      type: "spring",
      stiffness: 60,
      damping: 20,
    });
  };

  const entranceVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0.1 + delay,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const isNear = isHovered || isDragging;

  return (
    <motion.div
      variants={entranceVariants}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        zIndex: 1, // Render in background layer below hero content
      }}
      className="absolute pointer-events-none"
    >
      {/* Centering wrapper */}
      <div className="-translate-x-1/2 -translate-y-1/2">
        {/* Parallax wrapper */}
        <motion.div style={{ y: reduce ? 0 : currentParallaxY }}>
          {/* Looping slow drift animation */}
          <motion.div
            animate={
              isDragging || reduce
                ? { x: 0, y: 0, rotate: 0 }
                : {
                    x: [0, xDrift, -xDrift, 0],
                    y: [0, yDrift, -yDrift, 0],
                    rotate: [0, rotateDrift, -rotateDrift, 0],
                  }
            }
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Proximity wrapper */}
            <motion.div
              style={{
                x: reduce ? 0 : springProximityX,
                y: reduce ? 0 : springProximityY,
              }}
            >
              {/* Draggable container */}
              <motion.div
                drag
                dragMomentum={false}
                dragElastic={1.0}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={handleDragEnd}
                style={{ x: dragX, y: dragY }}
                whileDrag={{ scale: 1.08 }}
                whileHover={{ scale: isDragging ? 1.08 : 1.02 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="pointer-events-auto group relative cursor-grab active:cursor-grabbing select-none"
              >
                {/* Glass Pill */}
                <div
                  style={{
                    background: "rgba(78, 52, 46, 0.18)",
                    border: "1px solid rgba(215, 204, 200, 0.15)",
                    color: "#D7CCC8",
                    opacity: isNear ? 1.0 : config.baseOpacity,
                  }}
                  className={`relative rounded-full backdrop-blur-[24px] font-mono font-medium tracking-wide whitespace-nowrap select-none transition-all duration-300 border-[#D7CCC8]/15 text-[#D7CCC8]/80 group-hover:border-[#D7CCC8]/35 group-hover:bg-[#4E342E]/28 group-hover:text-[#F5EBE6] ${
                    isNear ? "blur-none" : config.blurClass
                  } ${SIZE_CONFIGS[size]}`}
                >
                  {name}
                </div>

                {/* Glow layer */}
                <div
                  style={{
                    boxShadow: isNear
                      ? "0 0 25px rgba(78, 52, 46, 0.45)"
                      : "0 0 15px rgba(78, 52, 46, 0.15)",
                  }}
                  className="absolute inset-0 -z-10 rounded-full bg-[#4E342E] opacity-0 group-hover:opacity-35 blur-[10px] transition-all duration-300 pointer-events-none"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const reduce = useReducedMotion();
  const { profile } = portfolioData;

  const sectionRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = useState(false);

  // Global mouse coordinates for proximity detection (compositor thread friendly)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseActive = useMotionValue(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    resizeObserver.observe(sectionRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    mouseActive.set(1);
  };

  const handleMouseLeave = () => {
    mouseActive.set(0);
  };

  const getLayoutType = (width: number) => {
    if (width === 0) return "desktop";
    if (width < 768) return "mobile";
    if (width < 1024) return "tablet";
    return "desktop";
  };

  const layout = getLayoutType(windowWidth);

  // Filter skills by priority to fit max bounds
  const activeOrbs = SKILL_ORBS.filter((orb) => {
    if (layout === "mobile") return orb.priority === "high";
    if (layout === "tablet") return orb.priority === "high" || orb.priority === "medium";
    return true;
  });

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => mouseActive.set(1)}
      className="relative min-h-[90dvh] flex items-center overflow-hidden bg-[#1C1C1C] py-16 md:py-24"
      style={{ paddingTop: "72px" }}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 right-0 w-[60%] h-[60%] animate-float-slow"
          style={{
            background:
              "radial-gradient(ellipse at 70% 30%, rgba(78, 52, 46, 0.15), transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[40%] h-[40%] animate-float-reverse"
          style={{
            background:
              "radial-gradient(ellipse at 30% 70%, rgba(215, 204, 200, 0.08), transparent 60%)",
          }}
        />
      </div>

      {/* Background skills orb overlay (z-index: 1) */}
      {isMounted && (
        <motion.div
          initial="hidden"
          animate="visible"
          className="absolute inset-0 pointer-events-none overflow-hidden z-[1]"
        >
          {activeOrbs.map((orb) => (
            <FloatingOrb
              key={orb.name}
              name={orb.name}
              size={orb.size}
              layer={orb.layer}
              x={layout === "mobile" ? orb.mobile.x : layout === "tablet" ? orb.tablet.x : orb.desktop.x}
              y={layout === "mobile" ? orb.mobile.y : layout === "tablet" ? orb.tablet.y : orb.desktop.y}
              mouseX={mouseX}
              mouseY={mouseY}
              mouseActive={mouseActive}
              dimensions={dimensions}
            />
          ))}
        </motion.div>
      )}

      {/* Hero content columns (z-index: 10) */}
      <div className="section-container relative z-10 w-full text-[#D7CCC8]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side: Content (60%) */}
          <div className="lg:col-span-7 max-w-xl relative z-10">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="px-3 py-1 text-[10px] font-mono font-semibold tracking-[0.2em] text-[#D7CCC8] uppercase bg-[#4E342E]/30 border border-[#D7CCC8]/15 rounded-full mb-6 inline-block">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#D7CCC8] mb-6 leading-tight"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Hi, I&apos;m{" "}
              <span className="text-[#D7CCC8] border-b-2 border-[#4E342E] whitespace-nowrap">Yudaya Madhavi</span>
              <span className="text-[#D7CCC8]/70 text-2xl md:text-3xl lg:text-4xl font-medium block mt-3">
                {profile.headline}
              </span>
            </motion.h1>

            <motion.p
              className="text-[#D7CCC8]/75 text-sm md:text-base mb-8 max-w-lg leading-relaxed"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Building AI-powered solutions, conversational multi-agent frameworks, and scalable machine learning workflows.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 relative z-20"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                onClick={() => handleScroll("#projects")}
                className="btn-primary cursor-pointer flex items-center gap-2"
              >
                View Projects
                <ArrowDown size={16} weight="bold" />
              </button>
              <a href="/resume.pdf" download className="btn-secondary cursor-pointer">
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right Side: Consolidated specs summary card (40%) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative z-10">
            <motion.div
              className="glass p-6 w-full max-w-[380px] border border-[#D7CCC8]/12 relative overflow-hidden"
              initial={reduce ? false : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="border-b border-[#D7CCC8]/15 pb-4 mb-4">
                <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#D7CCC8]/55">
                  SYSTEM PARAMETERS
                </span>
                <h3 className="text-base font-semibold text-[#D7CCC8] mt-1">CH. Yudaya Madhavi</h3>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="block text-[8px] font-mono text-[#D7CCC8]/55 uppercase tracking-widest mb-1">
                    Academic profile
                  </span>
                  <p className="font-semibold text-[#D7CCC8]/90">NIT Agartala · B.Tech ECE</p>
                  <p className="text-[10px] text-[#D7CCC8]/75 mt-0.5">CGPA: 7.69 (Class of 2026)</p>
                </div>

                <div>
                  <span className="block text-[8px] font-mono text-[#D7CCC8]/55 uppercase tracking-widest mb-1">
                    Generative AI Focus
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {["LangChain", "LangGraph", "RAG", "AI Agents", "FastAPI"].map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[9px] font-mono rounded bg-[#4E342E]/25 border border-[#D7CCC8]/10 text-[#D7CCC8]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="block text-[8px] font-mono text-[#D7CCC8]/55 uppercase tracking-widest mb-1">
                    Active Deployment Status
                  </span>
                  <div className="flex items-center gap-2 mt-1 py-1 px-2.5 rounded bg-[#4E342E]/20 border border-[#D7CCC8]/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D7CCC8] animate-pulse" />
                    <span className="font-mono text-[9px] text-[#D7CCC8]">AVAILABLE FOR OPPORTUNITIES </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
