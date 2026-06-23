export function FloatingGradients() {
  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Primary mocha orb — top right */}
      <div
        className="gradient-orb gradient-orb-mocha animate-float"
        style={{
          width: "600px",
          height: "600px",
          top: "-10%",
          right: "-5%",
          opacity: 0.15,
        }}
      />

      {/* Latte orb — bottom left */}
      <div
        className="gradient-orb gradient-orb-latte animate-float-slow"
        style={{
          width: "500px",
          height: "500px",
          bottom: "10%",
          left: "-8%",
          opacity: 0.1,
        }}
      />

      {/* Mixed orb — center */}
      <div
        className="gradient-orb gradient-orb-mixed animate-float-reverse"
        style={{
          width: "400px",
          height: "400px",
          top: "40%",
          right: "20%",
          opacity: 0.12,
        }}
      />

      {/* Small mocha accent — bottom right */}
      <div
        className="gradient-orb gradient-orb-mocha animate-pulse-glow"
        style={{
          width: "300px",
          height: "300px",
          bottom: "-5%",
          right: "15%",
          opacity: 0.12,
        }}
      />

      {/* Small latte accent — top left */}
      <div
        className="gradient-orb gradient-orb-latte animate-float"
        style={{
          width: "350px",
          height: "350px",
          top: "20%",
          left: "10%",
          opacity: 0.08,
          animationDelay: "-3s",
        }}
      />
    </div>
  );
}
