"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Terminal, ShieldCheck, Activity, Database, CheckCircle2 } from "lucide-react";
import { Testimonials } from "@/components/home/testimonials";

// --- VERIFIED DEPLOYMENT DATA ---
const CASE_STUDIES = [
  {
    id: "LOG-01",
    name: "Smile Dental Group",
    focus: "Conversion Leak Recovery",
    revenue: "+₹3.6L",
    oldConv: 35,
    newConv: 68,
    desc: "Implemented automated CRM follow-ups, patching a critical conversion leak from abandoned web inquiries.",
  },
  {
    id: "LOG-02",
    name: "Elite Orthodontics",
    focus: "Inquiry + Conversion Sync",
    revenue: "+$12.5K",
    oldConv: 40,
    newConv: 75,
    desc: "Resolved a top-of-funnel traffic bottleneck via targeted network routing and a high-converting landing architecture.",
  },
  {
    id: "LOG-03",
    name: "Family Care Clinic",
    focus: "Database Reactivation",
    revenue: "+₹1.8L",
    oldConv: 20,
    newConv: 45,
    desc: "Tapped into a latent database of 3,000 lost patients using an automated WhatsApp recall protocol.",
  },
  {
    id: "LOG-04",
    name: "Dental Implants Hub",
    focus: "Completion Bottleneck",
    revenue: "+£8.2K",
    oldConv: 60,
    newConv: 92,
    desc: "Engineered a follow-up system to rescue patients who had started but abandoned multi-stage implant procedures.",
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] pt-32 pb-24 text-white font-sans overflow-hidden selection:bg-red-900/30">

      {/* --- BACKGROUND SYSTEM LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none fixed">
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-red-900/10 blur-[150px] rounded-full mix-blend-screen opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full mix-blend-screen opacity-50"></div>

        {/* Tracking Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10">

        {/* --- HEADER --- */}
        <div className="text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(239,68,68,0.1)] relative overflow-hidden"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-red-500 relative z-10" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-red-400 uppercase relative z-10">
              Verified System Deployments
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter mb-6 text-balance leading-[1.05]"
          >
            Results by the <span className="text-zinc-600">Numbers.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed text-balance"
          >
            Real clinics, patched pipeline leaks, and verified capital recovery. Zero fluff. Pure growth output.
          </motion.p>
        </div>

        {/* --- DEPLOYMENT LOGS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {CASE_STUDIES.map((log, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#080808]/90 backdrop-blur-xl p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.5)] h-full group relative overflow-hidden"
            >
              {/* Hover System Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[80px] rounded-full group-hover:bg-red-500/10 transition-colors duration-700 pointer-events-none" />

              {/* Top Terminal Bar */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                  <span className="text-[9px] font-mono text-emerald-500 uppercase tracking-widest font-bold">Patch Verified</span>
                </div>
                <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/5 rounded">
                  {log.id}
                </span>
              </div>

              {/* Core Info */}
              <div className="relative z-10 mb-8 flex-1">
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-red-500 mb-2 flex items-center gap-1.5">
                  <Terminal className="w-3 h-3" /> {log.focus}
                </div>
                <h2 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight group-hover:text-zinc-200 transition-colors">{log.name}</h2>
                <p className="text-zinc-400 leading-relaxed font-light text-sm md:text-base">{log.desc}</p>
              </div>

              {/* --- TELEMETRY / RECOVERY DASHBOARD --- */}
              <div className="relative z-10 w-full bg-[#030303] border border-white/10 rounded-2xl p-5 md:p-6 mt-auto overflow-hidden shadow-[inset_0_5px_20px_rgba(0,0,0,0.5)] group-hover:border-red-500/20 transition-colors duration-500">

                {/* Rate Visualization Graph */}
                <div className="mb-6">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold">Conversion Output</span>
                    <span className="text-xs font-mono font-bold text-white flex items-center gap-1">
                      <span className="text-zinc-600 line-through mr-1">{log.oldConv}%</span>
                      <ArrowUpRight className="w-3 h-3 text-emerald-500" /> {log.newConv}%
                    </span>
                  </div>

                  {/* Overlapping Bar Chart to show growth */}
                  <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden relative flex">
                    {/* Baseline Leak Rate */}
                    <div className="h-full bg-zinc-700 absolute top-0 left-0 z-10 rounded-full" style={{ width: `${log.oldConv}%` }}></div>
                    {/* Recovered Rate (Grows on hover) */}
                    <div className="h-full bg-gradient-to-r from-red-600 to-red-400 absolute top-0 left-0 z-0 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out" style={{ maxWidth: `${log.newConv}%` }}></div>
                  </div>
                </div>

                {/* Capital Recovered Readout */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Capital Recovered</span>
                    <span className="text-[9px] font-mono text-zinc-600">Monthly Yield</span>
                  </div>
                  <div className="text-3xl font-mono font-black text-red-500 tracking-tighter group-hover:scale-105 transition-transform origin-right">
                    {log.revenue} <span className="text-lg text-red-500/50">/mo</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
      <Testimonials></Testimonials>
    </div>
  );
}