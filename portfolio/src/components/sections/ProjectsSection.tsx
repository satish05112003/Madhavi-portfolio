"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection, AnimatedItem } from "@/components/AnimatedSection";
import { portfolioData } from "@/lib/portfolio-data";
import { ArrowUpRight, GithubLogo, Books, X, Check, Target, Cpu, HardDrives } from "@phosphor-icons/react";
import { PulseMonitorVisual, ChurnPredictionVisual, FitnessAppVisual } from "./ProjectVisuals";

// Mapping from project name to its respective custom SVG visual
function ProjectVisual({ name }: { name: string }) {
  switch (name) {
    case "Pulse Monitor":
      return <PulseMonitorVisual />;
    case "Customer Churn Prediction":
      return <ChurnPredictionVisual />;
    case "Health Fitness App":
      return <FitnessAppVisual />;
    default:
      return (
        <div className="w-full h-full flex items-center justify-center bg-[#1C1C1C] text-[#D7CCC8]/40">
          No Visual Available
        </div>
      );
  }
}

// Case study details content for the popup modal
const caseStudyDetails: Record<
  string,
  {
    challenge: string;
    architecture: string;
    decisions: string[];
    outcomes: string[];
  }
> = {
  "Pulse Monitor": {
    challenge:
      "Monitoring service uptime, latency, and status codes reliably requires a system that execute concurrent checks at scale without locking database connections or dropping packets. Traditional synchronous implementations lead to high queue delays and inaccurate latency reports during high network volume.",
    architecture:
      "A distributed, asynchronous worker architecture. The core application runs an async event loop (using Python's asyncio and FastAPI background tasks) that dispatches lightweight ping probes at scheduled intervals. All latency telemetry is streamed to a PostgreSQL database utilizing composite timestamp and service IDs indexes. A frontend constructed with React queries latency time-series data dynamically, displaying real-time system performance grids.",
    decisions: [
      "Swapped synchronous HTTP requests for asyncio ClientSessions, scaling concurrency by 10x with minimal thread overhead.",
      "Implemented PostgreSQL composite indexes on time-series queries, dropping index lookup latency by 68%.",
      "Adopted Server-Sent Events (SSE) to broadcast status check events to the monitoring web client in real time, avoiding polling overhead.",
      "Configured multi-layered Nginx caching to serve static status panels instantly under heavy traffic spikes."
    ],
    outcomes: [
      "Achieved sub-15ms check-to-alert dispatch times, ensuring near-instantaneous notification of system outages.",
      "Maintained 99.98% check reliability under simulated network congestion of 10,000+ concurrent requests.",
      "Designed a localized microservice configuration using Docker Compose that runs on low-cost single-core CPU instances, eliminating commercial subscription costs."
    ]
  },
  "Customer Churn Prediction": {
    challenge:
      "Identifying customer churn triggers requires cleaning and digesting massive amounts of customer transaction history. Subscription businesses lose high volumes of recurring revenue simply because raw retention metrics do not highlight specific drop-off triggers in user behavior profiles.",
    architecture:
      "A structured machine learning pipeline built on a dataset of 2,000+ user records. The preprocessing step executes standard scaling, label encoding, and handles skewness adjustments. The modeling layer evaluates multiple ensemble models, optimizing a Random Forest Classifier using hyperparameter grid tuning. A Streamlit interactive app hosts the saved model pickle, serving prediction outcomes alongside SHAP dependency charts that explain feature weights.",
    decisions: [
      "Engineered behavioral features linking customer support visits to contract type, boosting churn prediction sensitivity by 14%.",
      "Optimized model hyperparameters using grid search cross-validation, targeting high recall to minimize missed churn cases.",
      "Integrated SHAP (Shapley Additive exPlanations) values to output transparent feature weights for individual user predictions.",
      "Constructed a slider-based interface in Streamlit, letting business managers adjust probability classification thresholds in real time."
    ],
    outcomes: [
      "Developed a predictive model scoring 94.2% test accuracy and a high ROC-AUC score of 0.96.",
      "Decreased prediction latency to under 8ms, enabling real-time risk scores during active customer calls.",
      "Identified contract tenure and billing cycles as the top 2 churn factors, helping mock customer groups save up to 20% in potential drop-off losses."
    ]
  },
  "Health Fitness App": {
    challenge:
      "Traditional fitness software applies rigid workout templates that fail to account for sleep deficits, active calorie burn variations, or muscular recovery metrics, which frequently leads to overtraining, fatigue, or injury.",
    architecture:
      "A multi-model recommendation engine driven by supervised ML regressors. The engine processes sleep metrics, daily macronutrients, activity logs, and target benchmarks. The model forecasts user recovery capacity and dynamically scales training intensity. The FastAPI backend references vector indexes inside ChromaDB to dynamically fetch tailored exercises based on prediction scores.",
    decisions: [
      "Implemented a Random Forest Regressor to forecast a 7-day trend of energy and stamina recovery indexes.",
      "Designed a dynamic macronutrient balancer that computes daily protein, carbohydrate, and fat targets relative to active metabolic output.",
      "Utilized ChromaDB vector database to index and search exercises by equipment type, muscle target, and recovery rating.",
      "Structured a normalized database schema separating core biometric telemetry, progress milestones, and workout records."
    ],
    outcomes: [
      "Achieved an 89.5% recommendation accuracy rate verified against historical test user satisfaction reviews.",
      "Sustained 92.1% accuracy in predicting user milestone timeframes over 7-day projection horizons.",
      "Maintained a lightning-fast response latency of less than 12ms for fetching personalized daily recommendation schemas."
    ]
  }
};

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

  const openCaseStudy = (projectName: string) => {
    setActiveCaseStudy(projectName);
    document.body.style.overflow = "hidden";
  };

  const closeCaseStudy = () => {
    setActiveCaseStudy(null);
    document.body.style.overflow = "";
  };

  return (
    <section id="projects" className="relative py-16 md:py-20 bg-[#1C1C1C] text-[#D7CCC8] overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 10% 20%, rgba(78, 52, 46, 0.08), transparent 50%), radial-gradient(circle at 90% 80%, rgba(215, 204, 200, 0.04), transparent 50%)",
        }}
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(78,52,46,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(78,52,46,0.015)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none" />

      <div className="section-container relative z-10">
        <AnimatedItem delay={0.1}>
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            <span className="px-3.5 py-1 text-[9px] font-mono font-medium tracking-[0.2em] text-[#D7CCC8] uppercase bg-[#4E342E]/30 border border-[#D7CCC8]/12 rounded-full mb-3">
              PRODUCT SHOWCASE
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#D7CCC8] mb-4">
              Featured Case Studies
            </h2>
            <p className="text-[#D7CCC8]/70 text-sm md:text-base max-w-xl leading-relaxed">
              Explore deep architectural write-ups and live models showcasing production uptime checkers, 
              predictive churn classifiers, and intelligent wellness engines.
            </p>
          </div>
        </AnimatedItem>

        {/* Compact Showcase Cards */}
        <div className="space-y-12 md:space-y-16">
          {projects.map((project, idx) => {
            const study = caseStudyDetails[project.name];

            return (
              <AnimatedSection key={project.name} delay={0.15}>
                {/* Full Width Redesigned Card: strictly limited to 420px-520px range on desktop */}
                <div className="group relative w-full rounded-[1.5rem] bg-[#1C1C1C] border border-[#D7CCC8]/12 p-5 md:p-6 lg:px-7 lg:py-5 min-h-[420px] lg:h-[480px] lg:max-h-[520px] flex flex-col justify-between transition-all duration-700 hover:border-[#D7CCC8]/35 hover:shadow-[0_16px_36px_rgba(28,28,28,0.5)]">
                  {/* Subtle inner accent highlight */}
                  <div className="absolute -inset-px rounded-[1.5rem] bg-gradient-to-br from-[#4E342E]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Grid layout: Left Content (55%), Right Visual (45%) */}
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 w-full h-full">
                    {/* Left Column (55%) */}
                    <div className="w-full lg:w-[55%] flex flex-col h-full justify-between gap-3">
                      {/* Top Row / Header */}
                      <div>
                        <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#D7CCC8]/60 font-semibold">
                          {project.label || `AI WORKFLOW // 0${idx + 1}`}
                        </span>

                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#D7CCC8] mt-0.5 mb-1 group-hover:text-[#D7CCC8]/80 transition-colors duration-300">
                          {project.name}
                        </h3>

                        {project.tagLine && (
                          <p className="text-[11px] md:text-xs font-medium text-[#D7CCC8]/85 mb-2 leading-relaxed">
                            {project.tagLine}
                          </p>
                        )}

                        {/* Problem Statement Area */}
                        <div className="mb-2.5 border-l-2 border-[#4E342E] pl-2.5 py-0.5">
                          <span className="block text-[7px] font-mono text-[#D7CCC8]/40 uppercase tracking-widest mb-0.5">
                            PROBLEM STATEMENT
                          </span>
                          <p className="text-[#D7CCC8]/75 text-xs md:text-sm font-medium italic leading-relaxed max-w-xl">
                            {project.problemStatement}
                          </p>
                        </div>

                        {/* Overview */}
                        <div className="mb-2">
                          <span className="block text-[7px] font-mono text-[#D7CCC8]/40 uppercase tracking-widest mb-0.5">
                            OVERVIEW
                          </span>
                          <p className="text-[#D7CCC8]/60 text-xs md:text-sm leading-normal max-w-xl">
                            {project.overview || project.description}
                          </p>
                        </div>
                      </div>

                      {/* Middle Row: 2-Column Specs */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-b border-[#D7CCC8]/10 py-2.5 my-1">
                        {/* Col 1: Key Features */}
                        <div>
                          <span className="block text-[7px] font-mono text-[#D7CCC8]/40 uppercase tracking-widest mb-1.5 font-bold">
                            KEY FEATURES
                          </span>
                          {project.features && project.features.length > 0 && (
                            <ul className="space-y-1">
                              {project.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-1.5 text-[9px] md:text-[10px] text-[#D7CCC8]/80 leading-tight">
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        {/* Col 2: Tech Stack */}
                        <div>
                          <span className="block text-[7px] font-mono text-[#D7CCC8]/40 uppercase tracking-widest mb-1.5 font-bold">
                            TECH STACK
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="inline-flex items-center justify-center h-[28px] px-3 text-[9px] font-mono rounded bg-[#4E342E]/10 border border-[#D7CCC8]/10 text-[#D7CCC8]/85"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Bottom Row: Buttons in a single row with consistent width */}
                      <div className="flex flex-row flex-wrap gap-3 items-center mt-auto">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 h-8 w-[140px] md:w-[150px] rounded-full bg-[#1C1C1C] border border-[#D7CCC8]/25 hover:bg-[#4E342E]/20 hover:border-[#D7CCC8]/45 text-[10px] font-semibold text-[#D7CCC8] tracking-wide transition-all duration-300 cursor-pointer shadow-[0_4px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0_12px_rgba(78,52,46,0.3)] hover:-translate-y-0.5 text-center"
                          >
                            <GithubLogo size={12} weight="fill" />
                            GitHub Repository
                          </a>
                        )}

                        {project.projectUrl && project.projectUrl !== project.githubUrl && (
                          <a
                            href={project.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 h-8 w-[140px] md:w-[150px] rounded-full bg-[#4E342E] hover:bg-[#4E342E]/80 text-[10px] font-semibold text-[#D7CCC8] tracking-wide transition-all duration-300 cursor-pointer border border-[#D7CCC8]/10 shadow-[0_4px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_0_12px_rgba(78,52,46,0.3)] hover:-translate-y-0.5 text-center"
                          >
                            Live Demo
                            <ArrowUpRight size={10} />
                          </a>
                        )}

                        {study && (
                          <button
                            onClick={() => openCaseStudy(project.name)}
                            className="inline-flex items-center justify-center gap-1.5 h-8 w-[140px] md:w-[150px] rounded-full bg-[#1C1C1C]/40 border border-[#D7CCC8]/12 hover:border-[#D7CCC8]/30 text-[10px] font-semibold text-[#D7CCC8]/80 hover:text-[#D7CCC8] transition-all duration-300 cursor-pointer hover:shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 text-center"
                          >
                            <Books size={12} />
                            Case Study
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Right Column: Premium Visual Panel (45%) - Integrated visual */}
                    <div className="w-full lg:w-[45%] flex justify-center lg:justify-end items-center h-full relative">
                      {/* Depth shine / accent glow */}
                      <div className="absolute inset-0 bg-[#4E342E]/5 opacity-0 group-hover:opacity-100 rounded-[1.25rem] blur-lg transition-opacity duration-700 pointer-events-none" />
                      
                      {/* Double Bezel Enclosure - Integrated size of 440px x 330px (4:3 aspect ratio) */}
                      <div className="w-full max-w-[440px] h-[330px] rounded-[1.25rem] p-1.5 bg-[#1C1C1C] border border-[#D7CCC8]/20 shadow-[inset_0_1px_1px_rgba(215,204,200,0.05)] transform group-hover:scale-[1.015] hover:shadow-[0_0_20px_rgba(78,52,46,0.25)] transition-all duration-700 flex items-center justify-center">
                        {/* Content Core */}
                        <div className="w-full h-full rounded-[calc(1.25rem-0.375rem)] overflow-hidden relative border border-[#D7CCC8]/10 bg-[#1C1C1C]">
                          <ProjectVisual name={project.name} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>

      {/* Case Study Detailed Modal Overlay */}
      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-[#1C1C1C]/90 backdrop-blur-xl"
            onClick={closeCaseStudy}
          >
            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="w-full max-w-[850px] max-h-[85vh] overflow-y-auto bg-[#1C1C1C] border border-[#D7CCC8]/20 rounded-[2rem] p-6 md:p-10 relative text-[#D7CCC8] shadow-2xl custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeCaseStudy}
                className="absolute top-5 right-5 p-1.5 rounded-full bg-[#1C1C1C] border border-[#D7CCC8]/30 hover:border-[#D7CCC8]/50 hover:bg-[#4E342E]/20 text-[#D7CCC8] transition-all duration-300 cursor-pointer"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>

              {/* Header */}
              <div className="mb-6 border-b border-[#D7CCC8]/20 pb-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D7CCC8]/60 font-semibold">
                  DEEP ARCHITECTURAL REPORT
                </span>
                <h4 className="text-2xl md:text-3xl font-bold tracking-tight text-[#D7CCC8] mt-1">
                  {activeCaseStudy}
                </h4>
              </div>

              {/* Content Grid */}
              <div className="space-y-6">
                {/* Section: Challenge */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#D7CCC8] font-semibold text-base">
                    <Target className="text-[#D7CCC8]" size={18} />
                    <h5>The Challenge</h5>
                  </div>
                  <p className="text-[#D7CCC8]/70 text-xs md:text-sm leading-relaxed">
                    {caseStudyDetails[activeCaseStudy]?.challenge}
                  </p>
                </div>

                {/* Section: System Architecture */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#D7CCC8] font-semibold text-base">
                    <Cpu className="text-[#D7CCC8]" size={18} />
                    <h5>Architecture & Implementation</h5>
                  </div>
                  <p className="text-[#D7CCC8]/70 text-xs md:text-sm leading-relaxed">
                    {caseStudyDetails[activeCaseStudy]?.architecture}
                  </p>
                </div>

                {/* Section: Engineering Decisions */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[#D7CCC8] font-semibold text-base">
                    <HardDrives className="text-[#D7CCC8]" size={18} />
                    <h5>Key Engineering Decisions</h5>
                  </div>
                  <ul className="space-y-2">
                    {caseStudyDetails[activeCaseStudy]?.decisions.map((decision, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs text-[#D7CCC8]/70 leading-relaxed">
                        <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#4E342E]" />
                        <span>{decision}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section: Outcomes */}
                <div className="space-y-3 pt-3 border-t border-[#D7CCC8]/20">
                  <div className="flex items-center gap-2 text-[#D7CCC8] font-semibold text-base">
                    <Check className="text-[#D7CCC8]" size={16} weight="bold" />
                    <h5>Project Outcomes</h5>
                  </div>
                  <ul className="space-y-2">
                    {caseStudyDetails[activeCaseStudy]?.outcomes.map((outcome, oIdx) => (
                      <li key={oIdx} className="flex items-start gap-2.5 text-xs text-[#D7CCC8]/70 leading-relaxed">
                        <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#4E342E]" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
