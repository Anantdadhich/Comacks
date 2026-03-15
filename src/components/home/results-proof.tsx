"use client";

import React from "react";
import { motion } from "framer-motion";
import { HeartHandshake, CheckCircle2, Users, TrendingUp, Activity } from "lucide-react";

// --- CLINIC-FOCUSED DATA ---
const CLINIC_RESULTS = [
  {
    metric: "+32%",
    label: "More 'Yes' to Care",
    desc: "Patients accepting proposed treatment plans instead of walking out to 'think about it.'",
    icon: HeartHandshake
  },
  {
    metric: "+18%",
    label: "Finished Treatments",
    desc: "Patients showing up for all their sessions until the treatment is fully completed.",
    icon: CheckCircle2
  },
  {
    metric: "+40%",
    label: "Returning Patients",
    desc: "Old patients coming back into the chair for checkups and new procedures.",
    icon: Users
  },
  {
    metric: "+₹2.4L",
    label: "Added Monthly Production",
    desc: "Average baseline growth in monthly clinic revenue across our partnered practices.",
    icon: TrendingUp
  },
];

export function ResultsProof() {
  return (
    <section className="relative py-24 bg-[#050505] border-y border-white/5 overflow-hidden font-sans selection:bg-red-900/30">

      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-red-900/10 blur-[120px] rounded-full mix-blend-screen opacity-50"></div>
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

        {/* Header - Speaking directly to the Doctor */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <Activity className="w-3.5 h-3.5 text-red-500" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-300 font-bold">
              Real Practice Impact
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-medium tracking-tighter mb-6 text-white text-balance"
          >
            What systemized growth actually looks like in your <span className="text-zinc-600">waiting room.</span>
          </motion.h2>
        </div>

        {/* The Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLINIC_RESULTS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group bg-[#080808]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col items-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Subtle Red Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center mb-6 group-hover:border-red-500/30 group-hover:bg-red-500/5 transition-colors duration-500 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
                <stat.icon className="w-5 h-5 text-zinc-400 group-hover:text-red-500 transition-colors" />
              </div>

              {/* The Metric */}
              <div className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tighter group-hover:scale-105 transition-transform duration-500 font-mono">
                {stat.metric}
              </div>

              {/* Clinic-Friendly Label */}
              <div className="text-sm font-bold text-zinc-200 mb-3 tracking-wide">
                {stat.label}
              </div>

              {/* Human Explanation */}
              <p className="text-xs text-zinc-500 leading-relaxed font-light mt-auto border-t border-white/5 pt-4 group-hover:text-zinc-400 transition-colors">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}