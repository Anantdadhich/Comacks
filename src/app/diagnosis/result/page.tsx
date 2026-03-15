"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { calculateDiagnosis, COUNTRY_CONFIGS, DiagnosisInput, GLOBAL_TARGETS } from "@/lib/diagnosisEngine";
import { Lock, FileText, ArrowRight, Share2, Calendar, PhoneMissed, Handshake, Stethoscope, Rewind, Terminal, Activity, AlertTriangle, ShieldCheck, Cpu, Zap, MoveDown, MoveUp, ScanLine } from "lucide-react";
import Link from "next/link";

export default function ResultDashboard() {
  const router = useRouter();
  const [inputData, setInputData] = useState<DiagnosisInput | null>(null);
  const [result, setResult] = useState<any>(null);
  const [reportId, setReportId] = useState<string>(`SYS-${Math.floor(Math.random() * 1000000)}`);

  // Lead form state
  const [form, setForm] = useState({ name: '', phone: '', clinic_name: '', city: '', email: '' });
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem('comacks_diagnosis_data');
    if (!raw) {
      router.push('/diagnosis');
      return;
    }
    try {
      const data: DiagnosisInput = JSON.parse(raw);
      setInputData(data);
      setResult(calculateDiagnosis(data));
    } catch (e) {
      router.push('/diagnosis');
    }
  }, [router]);

  if (!inputData || !result) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white font-mono gap-4 selection:bg-red-900/30">
        <Activity className="w-8 h-8 text-red-500 animate-pulse" />
        <span className="text-sm tracking-widest uppercase text-zinc-500">Compiling Diagnostic Output...</span>
      </div>
    );
  }

  const { currency } = result.config;

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/diagnosis/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: inputData, user: form })
      });
      const data = await res.json();
      if (data.success) {
        setIsUnlocked(true);
        setReportId(data.savedId || reportId);
      }
    } catch (error) {
      console.error(error);
      // Fallback for UI demonstration if API fails
      setTimeout(() => setIsUnlocked(true), 1000);
    }
    setIsSubmitting(false);
  };

  const scoreColor = result.score > 80 ? 'text-white' : result.score > 50 ? 'text-zinc-300' : 'text-red-500';
  const scoreRing = result.score > 80 ? 'border-white/20' : result.score > 50 ? 'border-zinc-700' : 'border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.2)]';

  return (
    <div className="relative min-h-screen bg-[#050505] pt-24 pb-24 text-white font-sans overflow-hidden selection:bg-red-900/30">


      <div className="absolute inset-0 z-0 pointer-events-none fixed">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/10 blur-[150px] rounded-full mix-blend-screen opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.02] blur-[120px] rounded-full mix-blend-screen opacity-50"></div>
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl space-y-8 relative z-10">


        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/10 backdrop-blur-md">
              <Terminal className="w-3.5 h-3.5 text-red-500" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-red-400 font-bold">
                Diagnostic Output Generated
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-medium tracking-tighter">
              System <span className="text-zinc-600">Analysis.</span>
            </h1>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Report ID</div>
            <div className="font-mono text-zinc-300 bg-white/5 px-3 py-1 rounded-md border border-white/10">{reportId}</div>
          </div>
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">


          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="md:col-span-4 bg-[#080808]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6 w-full text-left flex items-center gap-2">
              <Activity className="w-4 h-4" /> System Health
            </h2>
            <div className={`w-40 h-40 rounded-full border-4 ${scoreRing} flex flex-col items-center justify-center relative mb-4`}>
              <div className={`text-6xl font-medium tracking-tighter ${scoreColor}`}>{result.score}</div>
              <div className="text-sm font-mono text-zinc-600">/ 100</div>
            </div>
            <div className={`text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border ${result.score > 80 ? 'bg-white/10 border-white/20 text-white' : 'bg-red-500/10 border-red-500/20 text-red-500'}`}>
              {result.score > 80 ? 'Optimal Performance' : 'Critical Action Required'}
            </div>
          </motion.div>

          {/* Revenue Leakage Alert */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="md:col-span-8 bg-[#110505] border border-red-500/30 rounded-2xl p-8 shadow-2xl relative overflow-hidden flex flex-col justify-center group">
            <motion.div animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.2)_0,transparent_60%)] pointer-events-none" />

            <h2 className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-2 flex items-center gap-2 relative z-10">
              <AlertTriangle className="w-4 h-4" /> Critical Vulnerability Detected
            </h2>
            <div className="text-zinc-400 text-sm mb-6 font-medium relative z-10">Estimated Capital Leaking Every 30 Days</div>

            <div className="text-5xl md:text-7xl font-medium tracking-tighter text-red-500 mb-4 relative z-10 drop-shadow-[0_0_20px_rgba(239,68,68,0.3)] font-mono">
              <span className="text-3xl md:text-5xl text-red-500/50 mr-2">{currency}</span>
              {result.revenue.monthlyLoss.toLocaleString()}
            </div>

            <div className="flex items-center gap-3 relative z-10">
              <div className="h-px bg-red-500/30 flex-1"></div>
              <div className="text-xs font-mono text-red-400/80 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                Projected Annual Loss: {currency} {result.revenue.annualLoss.toLocaleString()}
              </div>
            </div>
          </motion.div>
        </div>


        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="space-y-4">
          <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2 mb-4">
            <ScanLine className="w-4 h-4" /> Pipeline Vulnerability Map
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Lead Leakage", val: result.leaks.leadLeak, icon: PhoneMissed, reason: "Inquiries failing to convert to consults." },
              { title: "Conversion Drop", val: result.leaks.conversionLeak, icon: Handshake, reason: "Consults rejecting treatment plans." },
              { title: "Treatment Abandonment", val: result.leaks.completionLeak, icon: Stethoscope, reason: "Patients leaving active treatments." },
              { title: "Recall Failure", val: result.leaks.recallLeak, icon: Rewind, reason: "Past patients not returning." },
            ].map((l, idx) => {
              const isLeak = l.val > 0;
              return (
                <div key={idx} className={`p-6 rounded-2xl bg-[#080808]/80 backdrop-blur-sm border-y border-r transition-all duration-300 relative overflow-hidden group
                  ${isLeak ? 'border-y-white/5 border-r-white/5 border-l-2 border-l-red-500 hover:bg-[#110505]' : 'border-y-white/5 border-r-white/5 border-l-2 border-l-zinc-700 opacity-70'}
                `}>
                  {isLeak && <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><l.icon className="w-16 h-16 text-red-500" /></div>}

                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300">{l.title}</h3>
                    {isLeak ? <AlertTriangle className="w-4 h-4 text-red-500" /> : <ShieldCheck className="w-4 h-4 text-zinc-600" />}
                  </div>

                  {isLeak ? (
                    <div className="relative z-10">
                      <div className="text-3xl font-mono font-medium text-white mb-2">{l.val} <span className="text-sm text-zinc-500 tracking-normal">patients</span></div>
                      <div className="text-[10px] text-red-400/80 leading-relaxed uppercase tracking-widest">{l.reason}</div>
                    </div>
                  ) : (
                    <div className="relative z-10 pt-2">
                      <div className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 bg-white/5 inline-block px-3 py-1.5 rounded-md border border-white/10">System Secure</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* --- PERFORMANCE TELEMETRY (Expected vs Actual) --- */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-[#080808]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8">
          <h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-8 flex items-center gap-2">
            <Cpu className="w-4 h-4" /> Performance Telemetry
          </h2>
          <div className="space-y-4">
            {[
              { label: "Consultation Acceptance", y: result.rates.consultRate, t: GLOBAL_TARGETS.consultTarget },
              { label: "Treatment Plan Acceptance", y: result.rates.treatmentRate, t: GLOBAL_TARGETS.treatmentTarget },
              { label: "Plan Completion Output", y: result.rates.completionRate, t: GLOBAL_TARGETS.completionTarget },
              { label: "Patient Reactivation", y: result.rates.recallRate, t: GLOBAL_TARGETS.recallTarget },
            ].map((b, i) => {
              const actual = Math.round(b.y * 100);
              const target = Math.round(b.t * 100);
              const gap = actual - target;
              const isLeak = gap < 0;

              return (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                  <div className="md:w-1/3">
                    <span className="text-sm font-medium text-zinc-300 block">{b.label}</span>
                  </div>

                  <div className="flex-1 flex items-center justify-between relative">
                    {/* Actual */}
                    <div className="flex flex-col items-center">
                      <span className="text-[9px] text-zinc-500 uppercase tracking-widest mb-1.5 font-bold">Actual</span>
                      <div className="px-3 py-1 rounded bg-[#111] border border-white/10 font-mono text-sm text-white">{actual}%</div>
                    </div>

                    {/* Gap Line & Pill */}
                    <div className="flex-1 mx-4 relative flex items-center justify-center">
                      <div className={`absolute inset-x-0 h-px border-t border-dashed ${isLeak ? 'border-red-500/30' : 'border-white/20'}`}></div>
                      <div className={`relative z-10 flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border
                        ${isLeak ? 'bg-[#1a0505] text-red-400 border-red-500/30' : 'bg-[#111] text-zinc-400 border-white/10'}`}
                      >
                        {gap > 0 ? '+' : ''}{gap}%
                        {isLeak ? <MoveDown className="w-3 h-3" /> : <MoveUp className="w-3 h-3 text-zinc-500" />}
                      </div>
                    </div>

                    {/* Target */}
                    <div className="flex flex-col items-center">
                      <span className="text-[9px] text-zinc-500 uppercase tracking-widest mb-1.5 font-bold">Target</span>
                      <div className="px-3 py-1 rounded bg-transparent font-mono text-sm text-zinc-500">{target}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* --- REVENUE OPTIMIZATION (Capital Recovery) --- */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="bg-gradient-to-br from-[#111] to-[#080808] border border-white/10 rounded-3xl p-8 lg:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none" />

          <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-2 relative z-10 flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-zinc-400" /> Capital Recovery Potential
          </h2>
          <p className="text-zinc-400 mb-12 max-w-lg mx-auto text-sm font-light relative z-10">
            Projected revenue output if the Comacks Operating System is installed to bridge the negative variance gaps.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative z-10">
            <div className="bg-[#050505] border border-white/5 p-6 rounded-2xl w-full md:w-auto min-w-[250px]">
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-3">Current System Output</div>
              <div className="text-3xl font-mono text-zinc-400">{currency} {result.revenue.currentRevenue.toLocaleString()}</div>
            </div>

            <ArrowRight className="w-8 h-8 text-zinc-600 hidden md:block" />

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl w-full md:w-auto min-w-[250px] shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              <div className="text-[10px] text-white uppercase tracking-widest font-bold mb-3">Optimized System Output</div>
              <div className="text-4xl font-mono text-white">{currency} {result.revenue.potentialRevenue.toLocaleString()}</div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
            <span className="px-6 py-3 rounded-full bg-white text-black font-bold text-sm uppercase tracking-widest inline-flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              + {currency} {result.revenue.recovery.toLocaleString()} / mo Recovery
            </span>
          </div>
        </motion.div>

        {/* --- DECRYPTION PORTAL (Unlock Form) --- */}
        {!isUnlocked ? (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="bg-[#080808]/90 border border-red-500/20 p-8 md:p-12 rounded-3xl relative overflow-hidden backdrop-blur-xl mt-12">
            <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-[0.02] pointer-events-none"><Lock className="w-96 h-96" /></div>

            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/10 backdrop-blur-md">
                <Lock className="w-3.5 h-3.5 text-red-500" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-red-400 font-bold">Encrypted Payload</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tighter">Decrypt Full Architecture Report.</h2>
              <p className="text-zinc-400 mb-10 text-sm leading-relaxed font-light">
                The Comacks engine has generated a comprehensive operational fix for your specific leaks. Enter your authorized credentials below to decrypt the PDF and receive a copy via secure channel (email).
              </p>

              <form onSubmit={handleUnlock} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Authorized Name</label>
                    <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-[#111] border border-white/5 hover:border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500/50 transition-all font-mono text-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Contact Link (Phone)</label>
                    <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-[#111] border border-white/5 hover:border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500/50 transition-all font-mono text-sm" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Entity / Clinic Name</label>
                    <input required type="text" value={form.clinic_name} onChange={(e) => setForm({ ...form, clinic_name: e.target.value })} className="w-full bg-[#111] border border-white/5 hover:border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500/50 transition-all font-mono text-sm" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Location Node (City)</label>
                    <input required type="text" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="w-full bg-[#111] border border-white/5 hover:border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500/50 transition-all font-mono text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">Secure Channel (Email)</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-[#111] border border-white/5 hover:border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500/50 transition-all font-mono text-sm" />
                </div>

                <button disabled={isSubmitting} type="submit" className="w-full mt-8 group relative h-14 rounded-lg bg-white text-black hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-3 text-xs tracking-[0.2em] uppercase font-bold disabled:opacity-50 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                  <span className="z-10 relative">{isSubmitting ? "Decrypting Payload..." : "Decrypt & Download Report"}</span>
                  {!isSubmitting && <ArrowRight className="w-4 h-4 z-10 relative group-hover:translate-x-1 transition-transform" />}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] skew-x-12 z-0"></div>
                </button>
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col md:flex-row gap-4 items-center justify-center p-8 md:p-12 border border-white/10 rounded-3xl bg-[#080808]/90 backdrop-blur-xl mt-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0,transparent_50%)]" />

            <Link href="/contact" className="w-full md:w-auto relative z-10">
              <button className="w-full px-8 py-4 rounded-xl bg-red-600 border border-red-500 text-white text-xs tracking-[0.1em] uppercase font-bold flex items-center justify-center gap-3 hover:bg-red-700 transition-colors shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                <PhoneMissed className="w-4 h-4" /> Contact Architect
              </button>
            </Link>
            <button onClick={() => window.open('https://calendly.com/', '_blank')} className="w-full md:w-auto px-8 py-4 rounded-xl bg-[#111] border border-white/10 text-white text-xs tracking-[0.1em] uppercase font-bold flex items-center justify-center gap-3 hover:bg-white/5 transition-colors relative z-10">
              <Calendar className="w-4 h-4" /> Initialize Strategy Call
            </button>
            <button onClick={() => {
              navigator.clipboard.writeText(`I ran a system diagnostic on my clinic using Comacks OS. Score: ${result.score}/100. Check yours at ${window.location.origin}`);
              alert('Copied link to clipboard!');
            }} className="w-full md:w-auto px-8 py-4 rounded-xl bg-transparent border border-white/10 text-zinc-400 hover:text-white text-xs tracking-[0.1em] uppercase font-bold flex items-center justify-center gap-3 hover:bg-white/5 transition-colors relative z-10">
              <Share2 className="w-4 h-4" /> Share Telemetry
            </button>
          </motion.div>
        )}

        <div className="mt-8 text-center text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-bold">
          Support: <a href="mailto:arpit@comacks.com" className="text-zinc-400 hover:text-red-500 transition-colors">arpit@comacks.com</a>
        </div>

      </div>
    </div>
  );
}