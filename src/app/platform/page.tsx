"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, LayoutDashboard, Settings, Bot, LineChart, Terminal, Cpu, ArrowRight, AlertTriangle, ShieldCheck } from "lucide-react";

export default function PlatformPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] pt-32 pb-24 text-white font-sans overflow-hidden selection:bg-red-900/30">

      {/* --- BACKGROUND SYSTEM LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none fixed">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-red-900/10 blur-[150px] rounded-full mix-blend-screen opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

        {/* --- HEADER --- */}
        <div className="text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(239,68,68,0.1)]"
          >
            <Cpu className="w-3.5 h-3.5 text-red-500" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-red-400 uppercase">
              <span className="text-red-500">C</span>oma<span className="text-red-500">c</span>ks Operating System
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter mb-6 text-balance leading-[1.05]"
          >
            Not a Marketing Agency.<br />
            <span className="text-zinc-600">A Tracking Platform.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed text-balance"
          >
            The <span className="font-bold text-white"><span className="text-red-500">C</span>oma<span className="text-red-500">c</span>ks</span> platform provides real-time performance insights into your entire patient pipeline, mapping exactly where revenue leaks occur so we can patch them intelligently.
          </motion.p>
        </div>

        {/* --- BENTO BOX ARCHITECTURE --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {/* FEATURE 1: Live Pipeline Tracking (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 bg-[#080808]/90 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-white/10 transition-all duration-500 flex flex-col justify-between"
          >
            {/* Animated BG Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[80px] rounded-full group-hover:bg-red-500/10 transition-colors duration-700 pointer-events-none" />

            <div className="relative z-10 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-red-500 group-hover:border-red-500/30 group-hover:bg-red-500/10 transition-all duration-500">
                  <LayoutDashboard className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/5 rounded">MOD-01</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-medium mb-3 text-white tracking-tight">Live Pipeline Analytics</h2>
              <p className="text-zinc-400 leading-relaxed font-light text-sm md:text-base max-w-md">Connect your existing clinic data into our unified dashboard. Watch inquiries turn into completed treatments and spot bottleneck stages instantly.</p>
            </div>

            {/* UI Mockup: Glowing Pipeline Conduit */}
            <div className="relative z-10 w-full bg-[#050505] border border-white/10 rounded-xl p-6 flex flex-col justify-end overflow-hidden shadow-[inset_0_2px_15px_rgba(0,0,0,0.5)] h-32 mt-auto">
              <div className="relative flex items-center justify-between w-full z-10">
                <div className="absolute inset-x-0 h-px bg-white/10 top-1/2 -translate-y-1/2 z-0"></div>
                {/* Flowing energy line on hover */}
                <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent top-1/2 -translate-y-1/2 z-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {[
                  { l: "Inquiry", v: "142" },
                  { l: "Consult", v: "58" },
                  { l: "Treat", v: "41" },
                  { l: "Done", v: "39" }
                ].map((node, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center gap-2 group/node">
                    <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest group-hover/node:text-zinc-400 transition-colors">{node.l}</span>
                    <div className={`w-3 h-3 rounded-full border-2 bg-[#050505] transition-all duration-300 ${i === 3 ? 'border-red-500 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]' : 'border-zinc-700 group-hover:border-zinc-400'}`}></div>
                    <span className="text-xs font-bold text-white">{node.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* FEATURE 2: Anomaly Alerts (Spans 1 column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 bg-[#080808]/90 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-red-500/30 transition-all duration-500 flex flex-col justify-between"
          >
            <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-red-500 group-hover:bg-red-500/10 transition-all duration-500">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/5 rounded">MOD-02</span>
              </div>
              <h2 className="text-xl md:text-2xl font-medium mb-3 text-white tracking-tight">Anomaly Alerts</h2>
              <p className="text-zinc-400 leading-relaxed font-light text-sm">Receive automated warnings if consultation rates drop below targets, stopping leaks before they grow.</p>
            </div>

            {/* Alert UI Mockup (Radar Ping) */}
            <div className="relative z-10 w-full bg-[#110505] border border-red-500/20 rounded-xl p-4 flex flex-col items-center justify-center h-32 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-lg overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.2),transparent_70%)] opacity-0 group-hover:opacity-100 animate-pulse" />

              <div className="flex items-center gap-3 relative z-10 bg-[#0A0A0A] border border-red-500/30 px-4 py-2 rounded-lg shadow-2xl">
                <AlertTriangle className="w-4 h-4 text-red-500 animate-pulse shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-red-500">System Alert</span>
                  <span className="text-[10px] font-mono text-zinc-400">Conv. Drop Detected</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FEATURE 3: Dynamic Benchmarking (Spans 1 column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 bg-[#080808]/90 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-white/10 transition-all duration-500 flex flex-col justify-between"
          >
            <div className="relative z-10 mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-all duration-500">
                  <LineChart className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/5 rounded">MOD-03</span>
              </div>
              <h2 className="text-xl md:text-2xl font-medium mb-3 text-white tracking-tight">Global Benchmarks</h2>
              <p className="text-zinc-400 leading-relaxed font-light text-sm">Compare your conversion rates against aggregated benchmarks from top-performing clinics.</p>
            </div>

            {/* Minimal Comparative Bar Mockup */}
            <div className="relative z-10 w-full bg-[#050505] border border-white/10 rounded-xl p-5 flex flex-col gap-4 h-32 shadow-[inset_0_2px_15px_rgba(0,0,0,0.5)]">
              <div className="space-y-1.5">
                <div className="flex justify-between text-[9px] uppercase tracking-widest font-bold">
                  <span className="text-white">Your Rate</span>
                  <span className="text-zinc-500 font-mono">41.2%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full w-[41.2%] transition-all duration-1000 group-hover:bg-red-500"></div>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-[9px] uppercase tracking-widest font-bold">
                  <span className="text-zinc-500">Top 10% target</span>
                  <span className="text-zinc-600 font-mono">65.0%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-700 rounded-full w-[65%]"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FEATURE 4: System Monitoring (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 bg-[#080808]/90 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-white/10 transition-all duration-500 flex flex-col md:flex-row items-center gap-8 lg:gap-12"
          >
            <div className="relative z-10 md:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white transition-all duration-500">
                  <Settings className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/5 rounded">MOD-04</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-medium mb-3 text-white tracking-tight">Active Recovery Monitoring</h2>
              <p className="text-zinc-400 leading-relaxed font-light text-sm md:text-base">Once recovery systems are installed, the platform monitors their performance, showing you exactly how much lost capital is being recovered in real-time.</p>
            </div>

            {/* Data Flow/Ticker Mockup */}
            <div className="relative z-10 md:w-1/2 w-full h-32 md:h-full min-h-[140px] bg-[#050505] border border-white/10 rounded-xl p-6 flex flex-col justify-center overflow-hidden shadow-[inset_0_2px_15px_rgba(0,0,0,0.5)]">
              <div className="absolute top-0 right-0 p-4 opacity-5"><ShieldCheck className="w-16 h-16" /></div>

              <div className="flex items-center justify-between w-full mb-4 relative z-10">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Capital Recovered</span>
                <span className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> Live
                </span>
              </div>

              <div className="flex items-center gap-4 relative z-10">
                <span className="text-3xl lg:text-4xl font-mono font-black text-white group-hover:scale-105 transition-transform duration-500 origin-left">$14,250</span>
                <div className="flex-1 h-px bg-white/10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_2s_infinite] transition-opacity"></div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}