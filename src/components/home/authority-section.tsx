"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe2, Activity } from "lucide-react";


const AUTHORITY_STATS = [
  { prefix: "", number: "24", suffix: "", label: "Global Regions Mapped" },
  { prefix: "", number: "18", suffix: "k+", label: "Diagnostic Scans Run" },
  { prefix: "", number: "9.2", suffix: "M", label: "Clinical Data Points" },
  { prefix: "", number: "450", suffix: "+", label: "Active Clinic Systems" },
];

export function AuthoritySection() {
  return (
    <section className="relative py-16 md:py-24 bg-[#050505] overflow-hidden font-sans border-y border-white/5 selection:bg-red-900/30">

      {/* --- BACKGROUND SYSTEM AMBIENCE --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep Central Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-red-900/10 blur-[100px] rounded-full mix-blend-screen opacity-50"></div>
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

        {/* --- HEADER --- */}
        <div className="flex flex-col items-center justify-center mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-[#080808]/50 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <Globe2 className="w-3.5 h-3.5 text-zinc-500" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold flex items-center gap-2">
              Comacks Global Network <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
            </span>
          </motion.div>
        </div>

        {/* --- TELEMETRY BAR --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full bg-[#080808]/80 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
        >
          {/* Scanning Laser Line */}
          <div className="absolute top-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent -translate-x-full animate-[shimmer_3s_infinite] z-20"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
            {AUTHORITY_STATS.map((item, idx) => (
              <div
                key={idx}
                className="relative group p-8 md:p-10 flex flex-col items-center justify-center text-center overflow-hidden transition-colors hover:bg-white/[0.02]"
              >
                {/* Subtle Hover Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Number */}
                <div className="text-4xl md:text-5xl lg:text-6xl font-mono font-black text-white mb-2 tracking-tighter group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.05)] relative z-10 flex items-baseline justify-center">
                  {item.prefix && <span className="text-2xl md:text-3xl text-zinc-500">{item.prefix}</span>}
                  {item.number}
                  {item.suffix && <span className="text-2xl md:text-3xl text-red-500 ml-0.5">{item.suffix}</span>}
                </div>

                {/* Label */}
                <div className="text-[10px] uppercase tracking-[0.15em] font-bold text-zinc-500 group-hover:text-zinc-300 transition-colors relative z-10">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}