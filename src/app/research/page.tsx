"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Database, Lock, Search, Terminal, Activity, FileText } from "lucide-react";


const RESEARCH_ARCHIVE = [
   {
      id: "RPT-089",
      title: "The 2026 Global Dental Clinic Benchmarks",
      tag: "Telemetry",
      status: "Compiling Data",
      progress: 78
   },
   {
      id: "RPT-092",
      title: "Why High-Intent SEO Converts 300% Better than Meta Ads",
      tag: "Conversion",
      status: "Peer Review",
      progress: 92
   },
   {
      id: "RPT-104",
      title: "The Economics of the Hidden Recall Leak",
      tag: "Economics",
      status: "Data Aggregation",
      progress: 45
   },
   {
      id: "RPT-112",
      title: "Mapping the Perfect Patient Pipeline Model",
      tag: "Architecture",
      status: "Formatting PDF",
      progress: 88
   },
   {
      id: "RPT-115",
      title: "Stop Paying Agencies. Build Immutable Systems.",
      tag: "Systems",
      status: "Awaiting Clearance",
      progress: 99
   }
];

export default function ResearchPage() {
   return (
      <div className="relative min-h-screen bg-[#050505] pt-32 pb-24 text-white font-sans overflow-hidden selection:bg-red-900/30">

         {/* --- BACKGROUND SYSTEM LAYER --- */}
         <div className="absolute inset-0 z-0 pointer-events-none fixed">
            <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-red-900/10 blur-[150px] rounded-full mix-blend-screen opacity-40"></div>
            <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full mix-blend-screen opacity-50"></div>

            {/* Tracking Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
         </div>

         <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10">

            {/* --- HEADER --- */}
            <div className="text-center mb-16 md:mb-24">
               <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(239,68,68,0.1)] relative overflow-hidden"
               >
                  <Database className="w-3.5 h-3.5 text-red-500 relative z-10" />
                  <span className="text-[10px] font-bold tracking-[0.2em] text-red-400 uppercase relative z-10">
                     Comacks Intelligence Archive
                  </span>
               </motion.div>

               <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter mb-6 text-balance leading-[1.05]"
               >
                  Research & <span className="text-zinc-600">Intelligence.</span>
               </motion.h1>

               <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed text-balance"
               >
                  Deep-dive reports, whitepapers, and operational economics for the modern data-driven clinic. Currently processing 2026 aggregated telemetry.
               </motion.p>
            </div>

            {/* --- FAKE SEARCH / FILTER BAR --- */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="max-w-3xl mx-auto mb-16 relative"
            >
               <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-zinc-600" />
               </div>
               <input
                  type="text"
                  disabled
                  placeholder="Querying secure database..."
                  className="w-full bg-[#080808]/90 backdrop-blur-md border border-white/10 rounded-2xl py-5 pl-12 pr-6 text-white font-mono text-sm shadow-[0_10px_30px_rgba(0,0,0,0.5)] outline-none opacity-80 cursor-not-allowed"
               />
               <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
                     <Activity className="w-3 h-3 text-red-500 animate-pulse" /> Syncing
                  </div>
               </div>
            </motion.div>

            {/* --- RESEARCH DATABASE GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {RESEARCH_ARCHIVE.map((art, idx) => (
                  <motion.div
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: 0.1 * idx }}
                     className="bg-[#080808]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/5 flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.3)] relative overflow-hidden group"
                  >
                     {/* Top Terminal Bar */}
                     <div className="flex justify-between items-center mb-8 relative z-10 border-b border-white/5 pb-4">
                        <span className="text-[10px] font-mono text-zinc-500 bg-white/5 px-2 py-1 rounded border border-white/10 uppercase tracking-widest">
                           {art.id}
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-red-500/80">
                           {art.tag}
                        </span>
                     </div>

                     {/* Title */}
                     <h2 className="text-xl md:text-2xl font-medium text-white leading-tight mb-8 flex-1 relative z-10">
                        {art.title}
                     </h2>

                     {/* Simulated Locking / Compiling Mechanism */}
                     <div className="relative z-10 w-full bg-[#030303] border border-white/5 rounded-2xl p-5 mt-auto shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]">
                        <div className="flex items-center justify-between mb-3">
                           <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-mono font-bold text-zinc-400">
                              <Terminal className="w-3 h-3 text-zinc-600" />
                              {art.status}
                           </div>
                           <span className="text-[10px] font-mono text-zinc-600">{art.progress}%</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
                           <div className="absolute top-0 left-0 h-full bg-red-500/50 rounded-full" style={{ width: `${art.progress}%` }}></div>
                           <div className="absolute top-0 left-0 h-full bg-white opacity-20 animate-[shimmer_2s_infinite]" style={{ width: `${art.progress}%` }}></div>
                        </div>
                     </div>

                     {/* Overlay to indicate it's not clickable yet */}
                     <div className="absolute inset-0 bg-[#050505]/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center z-20">
                        <div className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full text-xs font-bold font-mono text-red-400 uppercase tracking-widest shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                           <Lock className="w-3.5 h-3.5" /> Encrypted Payload
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>

            {/* --- BOTTOM CTA (Since they can't read them yet) --- */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mt-24 max-w-2xl mx-auto text-center bg-gradient-to-b from-[#111] to-[#080808] border border-white/10 p-10 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[80px] rounded-full pointer-events-none" />

               <FileText className="w-8 h-8 text-zinc-500 mx-auto mb-6" />
               <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">Request Early Access Clearance.</h3>
               <p className="text-sm text-zinc-400 font-light leading-relaxed mb-8 text-balance">
                  These intelligence reports are currently being compiled using live pipeline telemetry from top-performing clinics. Request clearance below to be notified the moment the encryption lifts.
               </p>

               <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-3 text-xs tracking-[0.1em] uppercase font-bold shadow-[0_0_30px_rgba(255,255,255,0.1)] mx-auto">
                  Request Notification <Activity className="w-4 h-4" />
               </button>
            </motion.div>

         </div>
      </div>
   );
}