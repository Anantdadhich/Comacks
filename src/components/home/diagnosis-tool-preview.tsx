"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Activity, ScanLine, ShieldCheck, BarChart2 } from "lucide-react";
import Link from 'next/link';

export function DiagnosisToolPreview() {
  return (
    <section className="relative py-24 md:py-32 bg-[#050505] overflow-hidden font-sans border-t border-white/5 selection:bg-red-900/30">

      {/* --- BACKGROUND SYSTEM LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-900/10 blur-[150px] rounded-full mix-blend-screen -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-white/[0.02] blur-[120px] rounded-full mix-blend-screen -translate-y-1/2"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* --- LEFT: COMMAND CONTENT --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full lg:max-w-xl"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/10 backdrop-blur-md">
              <ScanLine className="w-3.5 h-3.5 text-red-500" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-red-400 font-bold">
                Automated Audit Engine
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-white mb-6 leading-[1.1]">
              Run a Full System <span className="text-zinc-600">Diagnosis.</span>
            </h2>

            <p className="text-lg text-zinc-400 font-light leading-relaxed mb-10">
              Input your monthly clinic metrics and our engine will automatically trace, locate, and calculate your patient leaks—generating a precise revenue recovery roadmap in seconds.
            </p>

            {/* Diagnostic Capabilities */}
            <div className="space-y-4 mb-12">
              {[
                { icon: <Activity className="w-4 h-4" />, text: "Pinpoint exact pipeline bottlenecks" },
                { icon: <BarChart2 className="w-4 h-4" />, text: "Calculate true revenue recovery potential" },
                { icon: <ShieldCheck className="w-4 h-4" />, text: "Generate a custom operational fix" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-medium text-zinc-300">
                  <div className="w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-red-500">
                    {item.icon}
                  </div>
                  {item.text}
                </div>
              ))}
            </div>

            <Link href="/contact" className="inline-block">
              <button className="group relative h-14 px-8 rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-300 flex items-center gap-3 text-sm tracking-widest uppercase font-bold shadow-[0_0_30px_rgba(255,255,255,0.2)] overflow-hidden">
                <Terminal className="w-4 h-4 text-zinc-900 z-10 relative" />
                <span className="z-10 relative">Initialize Scanner</span>
                <ArrowRight className="w-4 h-4 z-10 relative group-hover:translate-x-1 transition-transform" />

                {/* Hover Scanner Effect inside button */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12 z-0"></div>
              </button>
            </Link>
          </motion.div>

          {/* --- RIGHT: DASHBOARD UI SKELETON --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full relative"
          >
            {/* Massive Underglow for the Dashboard */}
            <div className="absolute inset-0 bg-red-600/20 blur-[100px] rounded-full pointer-events-none"></div>

            {/* The Glassmorphic Application Window */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-[#0A0A0A]/90 backdrop-blur-2xl aspect-[4/3] flex flex-col group">

              {/* Fake Mac/App Window Header */}
              <div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 justify-between shrink-0">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-800 border border-white/10"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-800 border border-white/10"></div>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono font-bold">
                  <span className="text-red-500">C</span>oma<span className="text-red-500">c</span>ks_OS_Diagnostic_View
                </div>
                <div className="w-10"></div> {/* Spacer for balance */}
              </div>

              {/* Fake UI Layout */}
              <div className="flex-1 flex p-4 gap-4 h-full relative overflow-hidden">

                {/* Sidebar Wireframe */}
                <div className="w-16 rounded-xl border border-white/5 bg-white/[0.01] flex flex-col items-center py-4 gap-4 shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 mb-4 animate-pulse"></div>
                  <div className="w-6 h-6 rounded-md bg-white/5"></div>
                  <div className="w-6 h-6 rounded-md bg-white/5"></div>
                  <div className="w-6 h-6 rounded-md bg-white/5"></div>
                </div>

                {/* Main Content Wireframe */}
                <div className="flex-1 flex flex-col gap-4">
                  {/* Top Widgets */}
                  <div className="flex gap-4 h-24 shrink-0">
                    <div className="flex-1 rounded-xl border border-white/5 bg-white/[0.01] p-3 flex flex-col justify-between group-hover:border-red-500/20 transition-colors duration-700">
                      <div className="w-1/2 h-2 rounded-full bg-zinc-800"></div>
                      <div className="text-xl font-mono text-white">41.2%</div>
                    </div>
                    <div className="flex-1 rounded-xl border border-red-500/20 bg-red-500/5 p-3 flex flex-col justify-between relative overflow-hidden shadow-[inset_0_0_20px_rgba(239,68,68,0.05)]">
                      <div className="w-1/2 h-2 rounded-full bg-red-500/40"></div>
                      <div className="text-xl font-mono text-red-500">₹1,24,500</div>
                      <div className="absolute right-0 bottom-0 w-16 h-16 bg-red-500/20 blur-xl rounded-full"></div>
                    </div>
                  </div>

                  {/* Graph Wireframe */}
                  <div className="flex-1 rounded-xl border border-white/5 bg-white/[0.01] p-4 flex flex-col relative">
                    <div className="w-1/4 h-2 rounded-full bg-zinc-800 mb-6"></div>

                    {/* Fake Bar Chart */}
                    <div className="flex-1 flex items-end justify-between gap-2 px-2 mt-auto">
                      {[40, 60, 45, 80, 50, 90, 100].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: "0%" }}
                          whileInView={{ height: `${height}%` }}
                          transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                          className={`w-full rounded-t-sm ${i === 6 ? 'bg-gradient-to-t from-red-600 to-red-400' : 'bg-zinc-800'}`}
                        ></motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating "Scan Complete" Overlay Tag */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 }}
                  className="absolute bottom-6 right-6 px-4 py-2 rounded-lg bg-[#111] border border-white/10 shadow-2xl flex items-center gap-2 backdrop-blur-md"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-300">
                    System Ready
                  </span>
                </motion.div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}