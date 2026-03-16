"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Activity, AlertCircle, Zap } from "lucide-react";

// --- DATA ---
const BENCHMARK_DATA = [
  { id: "consult", label: "Consultation Rate", baseline: 41, industry: 35, optimized: 60 },
  { id: "treatment", label: "Treatment Acceptance", baseline: 55, industry: 50, optimized: 75 },
  { id: "completion", label: "Plan Completion", baseline: 85, industry: 90, optimized: 98 },
  { id: "recall", label: "Patient Reactivation", baseline: 25, industry: 30, optimized: 45 },
];

export function BenchmarkComparison() {
  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden font-sans selection:bg-red-900/30">

      {/* --- BACKGROUND SYSTEM LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-900/10 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">

        {/* --- HEADER --- */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <Activity className="w-3.5 h-3.5 text-red-500" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">
              Performance Telemetry
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-6 text-white"
          >
            Where Do You <span className="text-zinc-600">Stand?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Compare your clinic's current output against industry averages and the standard set by clinics running the <span className="font-bold text-white"><span className="text-red-500">C</span>oma<span className="text-red-500">c</span>ks</span> Operating System.
          </motion.p>
        </div>

        {/* --- DASHBOARD UI --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-[#080808]/95 border border-white/10 p-6 md:p-12 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl relative"
        >
          {/* Dashboard Header / Legend */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6 border-b border-white/5 pb-8">
            <div className="flex items-center gap-3 text-white font-medium">
              <BarChart3 className="w-5 h-5 text-zinc-500" />
              <span>System Output Metrics</span>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-4 md:gap-8 text-xs font-bold tracking-wider uppercase">
              <div className="flex items-center gap-2 text-zinc-600">
                <div className="w-3 h-1 bg-zinc-800 rounded-full"></div>
                Industry Avg
              </div>
              <div className="flex items-center gap-2 text-white">
                <div className="w-3 h-1 bg-white/80 rounded-full"></div>
                Your Baseline
              </div>
              <div className="flex items-center gap-2 text-red-500 whitespace-nowrap">
                <div className="w-3 h-1 bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                <span className="text-[10px] font-black uppercase text-white whitespace-nowrap">
                  <span className="text-red-500">C</span>oma<span className="text-red-500">c</span>ks Standard
                </span>
              </div>
            </div>
          </div>

          {/* Chart Area */}
          <div className="space-y-12 relative">

            {/* Background Grid Lines (10%, 25%, 50%, 75%, 100%) */}
            <div className="absolute inset-y-0 left-[30%] right-[10%] hidden md:flex justify-between pointer-events-none z-0">
              {[0, 25, 50, 75, 100].map((tick) => (
                <div key={tick} className="h-full border-l border-white/5 relative">
                  <span className="absolute -top-6 -translate-x-1/2 text-[10px] font-mono text-zinc-700">{tick}%</span>
                </div>
              ))}
            </div>

            {/* Data Rows */}
            {BENCHMARK_DATA.map((metric, idx) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 group"
              >
                {/* Metric Label */}
                <div className="md:w-[25%] shrink-0">
                  <h4 className="text-sm md:text-base font-medium text-zinc-300 group-hover:text-white transition-colors">
                    {metric.label}
                  </h4>
                </div>

                {/* Bars Container */}
                <div className="flex-1 flex flex-col gap-2.5 md:pr-[10%]">

                  {/* Industry Average */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metric.industry}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-zinc-800 rounded-full"
                      />
                    </div>
                    <div className="w-10 text-[10px] font-mono text-zinc-600 text-right">{metric.industry}%</div>
                  </div>

                  {/* Your Baseline */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metric.baseline}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-zinc-300 rounded-full"
                      />
                    </div>
                    <div className="w-10 text-[11px] font-mono font-bold text-white text-right">{metric.baseline}%</div>
                  </div>

                  {/* Comacks Standard */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden bg-[#111]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metric.optimized}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                        className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 w-full animate-pulse opacity-50"></div>
                      </motion.div>
                    </div>
                    <div className="w-10 text-[12px] font-mono font-bold text-red-500 text-right">{metric.optimized}%</div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Diagnostic Conclusion Footer */}
          <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-3 text-sm">
              <AlertCircle className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" />
              <p className="text-zinc-500 max-w-lg leading-relaxed">
                <span className="text-zinc-300 font-medium">Diagnostic Note:</span> Being "above average" still leaves significant revenue on the table. The gap between your baseline and the Comacks Standard represents your immediate growth potential.
              </p>
            </div>

            <button className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs uppercase tracking-widest font-bold text-white transition-all duration-300">
              <Zap className="w-3.5 h-3.5 text-red-500" />
              Close The Gap
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}