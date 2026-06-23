import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "strong" | "subtle";
  hover?: boolean;
}

export function GlassCard({
  children,
  className = "",
  variant = "default",
  hover = false,
}: GlassCardProps) {
  const variantClass =
    variant === "strong"
      ? "glass-strong"
      : variant === "subtle"
        ? "glass-subtle"
        : "glass";

  const hoverClass = hover ? "interactive-lift" : "";

  return (
    <div
      className={`${variantClass} ${hoverClass} overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
