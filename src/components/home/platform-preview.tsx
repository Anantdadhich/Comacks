"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, LineChart, HeartHandshake, ShieldCheck, ArrowRight } from "lucide-react";

export function PlatformPreview() {
  return (
    <section className="relative py-24 md:py-32 bg-[#050505] overflow-hidden font-sans border-y border-white/5 selection:bg-red-900/30">

      {/* --- BACKGROUND SYSTEM AMBIENCE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-900/10 blur-[150px] rounded-full mix-blend-screen opacity-40"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full mix-blend-screen opacity-50"></div>
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10 text-center">

        {/* --- HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(239,68,68,0.1)]"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-red-400 font-bold">
            Practice Control Center
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-medium text-white tracking-tighter mb-6 text-balance"
        >
          The <span className="font-bold"><span className="text-red-500">C</span>oma<span className="text-red-500">c</span>ks</span> Platform
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 mb-16 md:mb-24 max-w-2xl mx-auto font-light leading-relaxed text-balance"
        >
          A clinical performance dashboard. See exactly how your practice is growing, where patients are getting lost, and how we are bringing them back.
        </motion.p>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

          {/* Card 1: Patient Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative bg-[#080808]/90 backdrop-blur-xl p-8 rounded-3xl border border-white/5 hover:border-white/10 hover:bg-[#0A0A0A] transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center mb-6 group-hover:border-red-500/30 group-hover:bg-red-500/5 transition-all duration-500 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
                <Activity className="w-5 h-5 text-zinc-400 group-hover:text-red-500 transition-colors" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-3 tracking-tight group-hover:text-zinc-200 transition-colors">Patient Journey Tracking</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-light">See exactly where patients are in their care journey, from their very first call to their final appointment.</p>
            </div>

            {/* UI Mockup: Progress Line */}
            <div className="relative z-10 mt-auto bg-[#050505] border border-white/10 rounded-xl p-5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
              <div className="flex justify-between items-center relative">
                <div className="absolute inset-x-0 h-px bg-white/10 z-0"></div>
                <div className="absolute inset-x-0 h-px bg-red-500 z-0 w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>

                {[1, 2, 3].map((node, i) => (
                  <div key={i} className={`w-3 h-3 rounded-full border-2 z-10 transition-colors duration-500 delay-${i * 100} ${i === 0 ? 'bg-red-500 border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'bg-[#050505] border-zinc-700 group-hover:border-red-500 group-hover:bg-red-500'}`}></div>
                ))}
              </div>
              <div className="flex justify-between mt-3 text-[9px] font-bold uppercase tracking-widest text-zinc-500">
                <span>Inquiry</span>
                <span>Consult</span>
                <span>Treated</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Practice Benchmarking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative bg-[#080808]/90 backdrop-blur-xl p-8 rounded-3xl border border-white/5 hover:border-white/10 hover:bg-[#0A0A0A] transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center mb-6 group-hover:border-red-500/30 group-hover:bg-red-500/5 transition-all duration-500 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
                <LineChart className="w-5 h-5 text-zinc-400 group-hover:text-red-500 transition-colors" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-3 tracking-tight group-hover:text-zinc-200 transition-colors">Practice Benchmarks</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-light">See how your clinic's case acceptance and patient retention rates compare to top-performing practices in your region.</p>
            </div>

            {/* UI Mockup: Bar Chart */}
            <div className="relative z-10 mt-auto bg-[#050505] border border-white/10 rounded-xl p-5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] flex flex-col gap-4">
              <div className="w-full">
                <div className="flex justify-between text-[9px] uppercase tracking-widest font-bold mb-1.5">
                  <span className="text-zinc-400">Your Clinic</span>
                  <span className="text-white font-mono">55%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-400 rounded-full w-[55%] transition-all duration-700 group-hover:bg-white"></div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex justify-between text-[9px] uppercase tracking-widest font-bold mb-1.5">
                  <span className="text-red-500">Top 10% Average</span>
                  <span className="text-red-400 font-mono">82%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-red-900 rounded-full w-0 group-hover:w-[82%] transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Smart Follow-ups */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative bg-[#080808]/90 backdrop-blur-xl p-8 rounded-3xl border border-white/5 hover:border-white/10 hover:bg-[#0A0A0A] transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.08)_0,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center mb-6 group-hover:border-red-500/30 group-hover:bg-red-500/5 transition-all duration-500 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
                <HeartHandshake className="w-5 h-5 text-zinc-400 group-hover:text-red-500 transition-colors" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-3 tracking-tight group-hover:text-zinc-200 transition-colors">Smart Follow-ups</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-light">Automatically follow up with patients who haven't accepted treatment yet or missed their routine 6-month checkups.</p>
            </div>

            {/* UI Mockup: Active Sync Status */}
            <div className="relative z-10 mt-auto bg-[#050505] border border-white/10 rounded-xl p-5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] flex items-center justify-between overflow-hidden">
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-red-500/10 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Patient Outreach</span>
                <span className="text-[10px] font-mono text-white">System Active</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#110505] border border-red-500/30 rounded-lg shadow-[0_0_15px_rgba(239,68,68,0.15)] group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-shadow">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-red-500">Syncing</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}