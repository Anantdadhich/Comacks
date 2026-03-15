"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Calculator, TrendingUp, X } from "lucide-react";

const EQUATION_VARIABLES = [
  { id: "inq", label: "Inquiries" },
  { id: "con", label: "Consult Rate" },
  { id: "trt", label: "Treatment Rate" },
  { id: "cmp", label: "Completion Rate" },
];

export function RevenueEquation() {
  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden font-sans selection:bg-red-900/30 border-y border-white/5">

      {/* --- BACKGROUND SYSTEM LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-5xl mx-auto bg-[#080808]/90 border border-white/10 p-1 rounded-2xl md:rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden"
        >
          {/* Subtle inner grid for the terminal feel */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay pointer-events-none"></div>

          <div className="p-8 md:p-14">
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-6">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-800 border border-white/10"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-800 border border-white/10"></div>
                </div>
                <div className="flex items-center gap-2 text-zinc-500">
                  <Calculator className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold tracking-widest uppercase">System Algorithm</span>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2 text-red-500 bg-red-500/10 px-3 py-1 rounded-sm border border-red-500/20">
                <TrendingUp className="w-3 h-3" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Compounding Logic</span>
              </div>
            </div>

            {/* The Equation */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-4 mb-16">

              {/* Output (Revenue) */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center px-6 py-4 bg-white text-black rounded-lg shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                <span className="text-2xl md:text-3xl font-bold tracking-tight">Total Revenue</span>
              </motion.div>

              <span className="text-3xl text-zinc-600 font-light mx-2">=</span>

              {/* Multipliers */}
              <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
                {EQUATION_VARIABLES.map((v, i) => (
                  <React.Fragment key={v.id}>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                      className="px-4 py-3 bg-[#111] border border-white/5 rounded-md flex items-center gap-2"
                    >
                      <span className="text-zinc-300 text-sm md:text-base font-medium whitespace-nowrap">{v.label}</span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 + (i * 0.1) }}
                    >
                      <X className="w-4 h-4 text-zinc-700" />
                    </motion.div>
                  </React.Fragment>
                ))}

                {/* Final Multiplier (Case Value - Highlighted in Red) */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="px-5 py-3 bg-red-500/5 border border-red-500/30 rounded-md relative group cursor-default"
                >
                  <div className="absolute inset-0 bg-red-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="text-red-400 text-sm md:text-base font-bold whitespace-nowrap relative z-10">Case Value</span>
                </motion.div>
              </div>

            </div>

            {/* Bottom Insight */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="bg-zinc-900/50 border-l-2 border-red-500 p-5 rounded-r-lg"
            >
              <div className="flex items-start gap-3">
                <Terminal className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                  <span className="text-white font-medium">System Insight:</span> You don't need double the lead volume to double your revenue. A minor <span className="text-red-400 font-bold">15% increase</span> across each compounding metric drastically multiplies your total system output.
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}