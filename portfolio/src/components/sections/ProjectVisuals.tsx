"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

/* ------------------------------------------------------------------ */
/*  1. PULSE MONITOR VISUAL                                           */
/* ------------------------------------------------------------------ */
export function PulseMonitorVisual() {
  const [latencyData, setLatencyData] = useState<number[]>([15, 18, 12, 28, 14, 16, 22, 19, 15, 17, 13, 20]);
  const [activePing, setActivePing] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatencyData((prev) => {
        const next = [...prev.slice(1)];
        const val = Math.floor(Math.random() * 25) + 10;
        next.push(val);
        return next;
      });
      setActivePing((prev) => (prev + 1) % 16);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Compute SVG chart path within coordinates x:[25, 275] and y:[145, 205] (height=60)
  const chartWidth = 250;
  const chartHeight = 50;
  const chartXOffset = 25;
  const chartYOffset = 150;
  const maxVal = 40;

  const points = latencyData
    .map((val, index) => {
      const x = (index / (latencyData.length - 1)) * chartWidth + chartXOffset;
      const y = chartYOffset + chartHeight - (val / maxVal) * chartHeight;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  const fillPoints = points 
    ? `${chartXOffset},${chartYOffset + chartHeight} ${points} ${chartXOffset + chartWidth},${chartYOffset + chartHeight}`
    : "";

  return (
    <svg
      viewBox="0 0 300 225"
      className="w-full h-full bg-[#1C1C1C] select-none text-[#D7CCC8]"
      style={{ fontFamily: "monospace" }}
    >
      {/* Background glow orbs */}
      <defs>
        <radialGradient id="pulseGlow1" cx="90%" cy="10%" r="50%">
          <stop offset="0%" stopColor="#4E342E" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#1C1C1C" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pulseGlow2" cx="10%" cy="90%" r="50%">
          <stop offset="0%" stopColor="#4E342E" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#1C1C1C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="latencyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4E342E" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#4E342E" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Glow rects */}
      <rect width="300" height="225" fill="url(#pulseGlow2)" />
      <rect width="300" height="225" fill="url(#pulseGlow1)" />

      {/* Header bar */}
      <circle cx="20" cy="20" r="3" fill="#D7CCC8" className="animate-pulse" />
      <text x="30" y="23" fill="#D7CCC8" fillOpacity="0.65" fontSize="8" fontWeight="bold" letterSpacing="1">
        PULSE DAEMON v2.4
      </text>
      <text x="280" y="23" textAnchor="end" fill="#D7CCC8" fontSize="8" fontWeight="bold">
        RTT: {latencyData[latencyData.length - 1]}ms
      </text>
      <line x1="15" y1="32" x2="285" y2="32" stroke="#D7CCC8" strokeOpacity="0.15" strokeWidth="1" />

      {/* Left Box: Monitored Clusters */}
      <rect x="15" y="42" width="130" height="74" rx="8" fill="#1C1C1C" fillOpacity="0.4" stroke="#D7CCC8" strokeOpacity="0.1" strokeWidth="1" />
      <text x="23" y="54" fill="#D7CCC8" fillOpacity="0.4" fontSize="6" fontWeight="bold" letterSpacing="0.5">
        MONITORED CLUSTERS
      </text>

      {/* 4x4 Grid of Server nodes */}
      {Array.from({ length: 16 }).map((_, i) => {
        const col = i % 4;
        const row = Math.floor(i / 4);
        const x = 27 + col * 26;
        const y = 62 + row * 11;
        const isWarning = i === 5 || i === 12;
        const isActive = i === activePing;

        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width="18"
              height="8"
              rx="1.5"
              fill={isWarning ? "#4E342E" : "#1C1C1C"}
              fillOpacity={isWarning ? 0.3 : 0.8}
              stroke={isActive ? "#D7CCC8" : isWarning ? "#4E342E" : "#D7CCC8"}
              strokeOpacity={isActive ? 0.8 : isWarning ? 0.6 : 0.15}
              strokeWidth="0.75"
            />
            <circle
              cx={x + 9}
              cy={y + 4}
              r={isActive ? 1.75 : 1.25}
              fill={isActive ? "#D7CCC8" : isWarning ? "#4E342E" : "#D7CCC8"}
              fillOpacity={isActive ? 1.0 : isWarning ? 0.9 : 0.4}
            />
          </g>
        );
      })}

      {/* Right Box: Route Gateway */}
      <rect x="155" y="42" width="130" height="74" rx="8" fill="#1C1C1C" fillOpacity="0.4" stroke="#D7CCC8" strokeOpacity="0.1" strokeWidth="1" />
      <text x="163" y="54" fill="#D7CCC8" fillOpacity="0.4" fontSize="6" fontWeight="bold" letterSpacing="0.5">
        ROUTE GATEWAY
      </text>

      {/* Nodes and Flow line */}
      <rect x="167" y="70" width="22" height="16" rx="3" fill="#1C1C1C" stroke="#4E342E" strokeOpacity="0.6" strokeWidth="1" />
      <text x="178" y="80" textAnchor="middle" fill="#D7CCC8" fontSize="6" fontWeight="bold">CLI</text>

      <line x1="189" y1="78" x2="246" y2="78" stroke="#D7CCC8" strokeOpacity="0.15" strokeWidth="1.5" strokeDasharray="3,3" />
      
      {/* Animated Packet */}
      <circle r="2" fill="#D7CCC8">
        <animate attributeName="cx" from="191" to="244" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle r="1.5" fill="#4E342E">
        <animate attributeName="cx" from="191" to="244" dur="2s" begin="0.8s" repeatCount="indefinite" />
      </circle>

      <rect x="246" y="70" width="22" height="16" rx="3" fill="#1C1C1C" stroke="#D7CCC8" strokeOpacity="0.3" strokeWidth="1" />
      <text x="257" y="80" textAnchor="middle" fill="#D7CCC8" fontSize="6" fontWeight="bold">SRV</text>

      {/* Bottom Box: Latency time-series */}
      <rect x="15" y="126" width="270" height="84" rx="8" fill="#1C1C1C" fillOpacity="0.4" stroke="#D7CCC8" strokeOpacity="0.1" strokeWidth="1" />
      <text x="23" y="138" fill="#D7CCC8" fillOpacity="0.4" fontSize="6" fontWeight="bold" letterSpacing="0.5">
        LATENCY TIME-SERIES
      </text>

      {/* Horizontal Chart Grid Lines */}
      <line x1="25" y1="162" x2="275" y2="162" stroke="#D7CCC8" strokeOpacity="0.04" strokeWidth="0.75" />
      <line x1="25" y1="175" x2="275" y2="175" stroke="#D7CCC8" strokeOpacity="0.04" strokeWidth="0.75" />
      <line x1="25" y1="188" x2="275" y2="188" stroke="#D7CCC8" strokeOpacity="0.04" strokeWidth="0.75" />

      {/* Waveform fills & strokes */}
      {fillPoints && (
        <path d={`M ${fillPoints} Z`} fill="url(#latencyGrad)" />
      )}
      {points && (
        <path d={`M ${points}`} fill="none" stroke="#D7CCC8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      )}

      {/* Active Dot indicator */}
      {latencyData.length > 0 && (
        <circle
          cx={chartXOffset + chartWidth}
          cy={chartYOffset + chartHeight - (latencyData[latencyData.length - 1] / maxVal) * chartHeight}
          r="2.5"
          fill="#D7CCC8"
        />
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  2. CUSTOMER CHURN PREDICTION VISUAL                                */
/* ------------------------------------------------------------------ */
export function ChurnPredictionVisual() {
  const [riskPercent, setRiskPercent] = useState(65);
  const [isClassifying, setIsClassifying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsClassifying(true);
      setTimeout(() => setIsClassifying(false), 800);
      setRiskPercent((prev) => {
        const delta = Math.floor(Math.random() * 40) - 20;
        let next = prev + delta;
        if (next < 15) next = 25;
        if (next > 90) next = 80;
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      viewBox="0 0 300 225"
      className="w-full h-full bg-[#1C1C1C] select-none text-[#D7CCC8]"
      style={{ fontFamily: "monospace" }}
    >
      <defs>
        <radialGradient id="churnGlow1" cx="10%" cy="10%" r="50%">
          <stop offset="0%" stopColor="#4E342E" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#1C1C1C" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="churnGlow2" cx="90%" cy="90%" r="50%">
          <stop offset="0%" stopColor="#4E342E" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#1C1C1C" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="300" height="225" fill="url(#churnGlow1)" />
      <rect width="300" height="225" fill="url(#churnGlow2)" />

      {/* Header bar */}
      <circle cx="20" cy="20" r="3" fill="#D7CCC8" className="animate-pulse" />
      <text x="30" y="23" fill="#D7CCC8" fillOpacity="0.65" fontSize="8" fontWeight="bold" letterSpacing="1">
        CHURN CLASSIFIER v1.0
      </text>
      <text x="280" y="23" textAnchor="end" fill="#D7CCC8" fontSize="8" fontWeight="bold">
        STATUS: {isClassifying ? "INFERRING" : "READY"}
      </text>
      <line x1="15" y1="32" x2="285" y2="32" stroke="#D7CCC8" strokeOpacity="0.15" strokeWidth="1" />

      {/* Left Box: Arc Dial Gauge */}
      <rect x="15" y="42" width="130" height="80" rx="8" fill="#1C1C1C" fillOpacity="0.4" stroke="#D7CCC8" strokeOpacity="0.1" strokeWidth="1" />
      
      {/* Dial background and active arc */}
      <circle cx="80" cy="82" r="26" fill="none" stroke="#1C1C1C" strokeWidth="4.5" strokeDasharray="163.3" strokeDashoffset="40.8" strokeLinecap="round" />
      <circle
        cx="80"
        cy="82"
        r="26"
        fill="none"
        stroke="#D7CCC8"
        strokeWidth="4.5"
        strokeDasharray="163.3"
        strokeDashoffset={163.3 - (riskPercent / 100) * 122.5}
        strokeLinecap="round"
        transform="rotate(-90 80 82)"
        style={{ transition: "stroke-dashoffset 1s ease" }}
      />
      <text x="80" y="83" textAnchor="middle" fill="#D7CCC8" fontSize="11" fontWeight="bold">{riskPercent}%</text>
      <text x="80" y="93" textAnchor="middle" fill="#D7CCC8" fillOpacity="0.4" fontSize="5" fontWeight="bold">RISK SCORE</text>

      {/* Right Box: Classifications readouts */}
      <rect x="155" y="42" width="130" height="80" rx="8" fill="#1C1C1C" fillOpacity="0.4" stroke="#D7CCC8" strokeOpacity="0.1" strokeWidth="1" />
      
      <rect x="162" y="49" width="116" height="16" rx="4" fill="#1C1C1C" stroke="#D7CCC8" strokeOpacity="0.08" />
      <text x="168" y="59" fill="#D7CCC8" fillOpacity="0.4" fontSize="6">ROC-AUC</text>
      <text x="272" y="59" textAnchor="end" fill="#D7CCC8" fontSize="6.5" fontWeight="bold">0.962</text>

      <rect x="162" y="70" width="116" height="16" rx="4" fill="#1C1C1C" stroke="#D7CCC8" strokeOpacity="0.08" />
      <text x="168" y="80" fill="#D7CCC8" fillOpacity="0.4" fontSize="6">FALSE POS</text>
      <text x="272" y="80" textAnchor="end" fill="#D7CCC8" fontSize="6.5" fontWeight="bold">4.2%</text>

      <rect x="162" y="91" width="116" height="16" rx="4" fill="#1C1C1C" stroke="#D7CCC8" strokeOpacity="0.08" />
      <text x="168" y="101" fill="#D7CCC8" fillOpacity="0.4" fontSize="6">INFERENCE</text>
      <text x="272" y="101" textAnchor="end" fill="#D7CCC8" fontSize="6.5" fontWeight="bold">&lt; 8ms</text>

      {/* Bottom Box: SHAP weights */}
      <rect x="15" y="132" width="270" height="78" rx="8" fill="#1C1C1C" fillOpacity="0.4" stroke="#D7CCC8" strokeOpacity="0.1" strokeWidth="1" />
      <text x="23" y="144" fill="#D7CCC8" fillOpacity="0.4" fontSize="6" fontWeight="bold" letterSpacing="0.5">
        SHAP FEATURE WEIGHTS
      </text>

      {/* Feature 1 */}
      <text x="23" y="161" fill="#D7CCC8" fillOpacity="0.7" fontSize="6">Contract Tenure</text>
      <line x1="90" y1="158" x2="230" y2="158" stroke="#1C1C1C" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="90" y1="158" x2="190" y2="158" stroke="#D7CCC8" strokeWidth="3.5" strokeLinecap="round" />
      <text x="277" y="161" textAnchor="end" fill="#D7CCC8" fontSize="6" fontWeight="bold">0.428</text>

      {/* Feature 2 */}
      <text x="23" y="178" fill="#D7CCC8" fillOpacity="0.7" fontSize="6">Monthly Charges</text>
      <line x1="90" y1="175" x2="230" y2="175" stroke="#1C1C1C" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="90" y1="175" x2="160" y2="175" stroke="#4E342E" strokeWidth="3.5" strokeLinecap="round" />
      <text x="277" y="178" textAnchor="end" fill="#D7CCC8" fillOpacity="0.6" fontSize="6" fontWeight="bold">0.294</text>

      {/* Feature 3 */}
      <text x="23" y="195" fill="#D7CCC8" fillOpacity="0.7" fontSize="6">Support Tickets</text>
      <line x1="90" y1="192" x2="230" y2="192" stroke="#1C1C1C" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="90" y1="192" x2="135" y2="192" stroke="#4E342E" strokeOpacity="0.5" strokeWidth="3.5" strokeLinecap="round" />
      <text x="277" y="195" textAnchor="end" fill="#D7CCC8" fillOpacity="0.6" fontSize="6" fontWeight="bold">0.185</text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  3. HEALTH FITNESS APP VISUAL                                       */
/* ------------------------------------------------------------------ */
export function FitnessAppVisual() {
  const [pulseLine, setPulseLine] = useState<number[]>([10, 10, 10, 10, 10, 25, -15, 45, -20, 10, 10, 10, 10, 10]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseLine((prev) => {
        const next = [...prev.slice(1)];
        const roll = Math.random();
        if (roll > 0.8) {
          next.push(10, 10, 30, -18, 55, -25, 10, 10);
        } else {
          next.push(10);
        }
        return next.slice(0, 14);
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  // Compute ECG paths at bottom y:[190, 215]
  const ecgWidth = 270;
  const ecgHeight = 18;
  const ecgXOffset = 15;
  const ecgYOffset = 196;

  const pulsePoints = pulseLine
    .map((val, index) => {
      const x = (index / (pulseLine.length - 1)) * ecgWidth + ecgXOffset;
      const y = ecgYOffset + ecgHeight / 2 - (val - 10) * 0.3;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg
      viewBox="0 0 300 225"
      className="w-full h-full bg-[#1C1C1C] select-none text-[#D7CCC8]"
      style={{ fontFamily: "monospace" }}
    >
      <defs>
        <radialGradient id="fitGlow1" cx="90%" cy="90%" r="50%">
          <stop offset="0%" stopColor="#4E342E" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#1C1C1C" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="fitGlow2" cx="10%" cy="10%" r="50%">
          <stop offset="0%" stopColor="#4E342E" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#1C1C1C" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="300" height="225" fill="url(#fitGlow1)" />
      <rect width="300" height="225" fill="url(#fitGlow2)" />

      {/* Header bar */}
      <circle cx="20" cy="20" r="3" fill="#D7CCC8" className="animate-pulse" />
      <text x="30" y="23" fill="#D7CCC8" fillOpacity="0.65" fontSize="8" fontWeight="bold" letterSpacing="1">
        FIT-PREDICT ENGINE v2
      </text>
      <text x="280" y="23" textAnchor="end" fill="#D7CCC8" fontSize="8" fontWeight="bold">
        RECOVERY: 92%
      </text>
      <line x1="15" y1="32" x2="285" y2="32" stroke="#D7CCC8" strokeOpacity="0.15" strokeWidth="1" />

      {/* Left Box: Concentric Rings */}
      <rect x="15" y="42" width="130" height="80" rx="8" fill="#1C1C1C" fillOpacity="0.4" stroke="#D7CCC8" strokeOpacity="0.1" strokeWidth="1" />
      
      {/* Ring 1 - Latte (Outer) */}
      <circle cx="80" cy="82" r="24" fill="none" stroke="#1C1C1C" strokeWidth="3" />
      <circle cx="80" cy="82" r="24" fill="none" stroke="#D7CCC8" strokeWidth="3.5" strokeDasharray="150.7" strokeDashoffset="42" strokeLinecap="round" />

      {/* Ring 2 - Mocha (Middle) */}
      <circle cx="80" cy="82" r="17" fill="none" stroke="#1C1C1C" strokeWidth="3" />
      <circle cx="80" cy="82" r="17" fill="none" stroke="#4E342E" strokeWidth="3.5" strokeDasharray="106.8" strokeDashoffset="31" strokeLinecap="round" />

      {/* Ring 3 - Mocha Light (Inner) */}
      <circle cx="80" cy="82" r="10" fill="none" stroke="#1C1C1C" strokeWidth="3" />
      <circle cx="80" cy="82" r="10" fill="none" stroke="#4E342E" strokeOpacity="0.5" strokeWidth="3.5" strokeDasharray="62.8" strokeDashoffset="18" strokeLinecap="round" />

      {/* Right Box: Forecast Metrics */}
      <rect x="155" y="42" width="130" height="80" rx="8" fill="#1C1C1C" fillOpacity="0.4" stroke="#D7CCC8" strokeOpacity="0.1" strokeWidth="1" />
      <text x="163" y="53" fill="#D7CCC8" fillOpacity="0.4" fontSize="6" fontWeight="bold">FORECAST METRICS</text>

      <line x1="163" y1="71" x2="277" y2="71" stroke="#D7CCC8" strokeOpacity="0.08" />
      <text x="163" y="67" fill="#D7CCC8" fillOpacity="0.6" fontSize="6.5">CARBS/FAT REC</text>
      <text x="277" y="67" textAnchor="end" fill="#D7CCC8" fontSize="6.5" fontWeight="bold">ACTIVE</text>

      <line x1="163" y1="90" x2="277" y2="90" stroke="#D7CCC8" strokeOpacity="0.08" />
      <text x="163" y="86" fill="#D7CCC8" fillOpacity="0.6" fontSize="6.5">7D ENERGY</text>
      <text x="277" y="86" textAnchor="end" fill="#D7CCC8" fontSize="6.5" fontWeight="bold">+18.5%</text>

      <text x="163" y="105" fill="#D7CCC8" fillOpacity="0.6" fontSize="6.5">MILESTONE HIT</text>
      <text x="277" y="105" textAnchor="end" fill="#D7CCC8" fontSize="6.5" fontWeight="bold">92% CONF</text>

      {/* Bottom Box: 7D Adaptive Progress */}
      <rect x="15" y="132" width="270" height="80" rx="8" fill="#1C1C1C" fillOpacity="0.4" stroke="#D7CCC8" strokeOpacity="0.1" strokeWidth="1" />
      <text x="23" y="143" fill="#D7CCC8" fillOpacity="0.4" fontSize="6" fontWeight="bold" letterSpacing="0.5">
        7D ADAPTIVE PROGRESS
      </text>

      {/* Vertical bars */}
      {[36, 56, 48, 70, 78, 86, 92].map((val, i) => {
        const x = 32 + i * 36;
        const height = val * 0.32;
        const y = 180 - height;
        const isLast = i === 6;

        return (
          <g key={i}>
            <rect
              x={x}
              y={y}
              width="14"
              height={height}
              rx="1.5"
              fill={isLast ? "#D7CCC8" : "#4E342E"}
              fillOpacity={isLast ? 0.95 : 0.65}
            />
            <text x={x + 7} y="190" textAnchor="middle" fill="#D7CCC8" fillOpacity="0.3" fontSize="5">D0{i + 1}</text>
          </g>
        );
      })}

      {/* Scrolling ECG Line overlay */}
      {pulsePoints && (
        <path d={`M ${pulsePoints}`} fill="none" stroke="#4E342E" strokeWidth="0.75" strokeOpacity="0.45" />
      )}
    </svg>
  );
}
