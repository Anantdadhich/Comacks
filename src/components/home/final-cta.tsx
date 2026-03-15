"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";
import Link from 'next/link';

export function FinalCallToAction() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent opacity-50 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white mb-8 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
             <Activity className="w-8 h-8" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Ready to Find Your Leaks?
          </h2>
          <p className="text-xl text-zinc-400 mb-10">
            Takes less than 2 minutes. Get instant clarity on your clinic's performance.
          </p>

          <Link href="/diagnosis">
            <button className="group relative px-10 py-5 rounded-2xl bg-white text-zinc-950 font-bold text-lg hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-3">
              Run Clinic Diagnosis
               <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
