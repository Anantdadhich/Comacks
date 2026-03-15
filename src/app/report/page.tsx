export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import { COUNTRY_CONFIGS, GLOBAL_TARGETS } from "@/lib/diagnosisEngine";
import { Activity, Printer, Terminal, ShieldCheck, AlertTriangle, Cpu, ScanLine, Zap } from "lucide-react";
import { PrintButton } from "./print-button";
import Link from "next/link";

export default async function ReportPage(props: { searchParams: Promise<{ id?: string }> }) {
  const searchParams = await props.searchParams;
  const id = searchParams?.id;

  let result: any = null;
  let user: any = null;
  let input: any = null;

  if (id) {
    result = await prisma.diagnosisResult.findUnique({
      where: { id },
      include: { input: { include: { user: true } } }
    });
    if (result) {
      input = result.input;
      user = input.user;
    }
  }

  // --- FALLBACK SAMPLE DATA ---
  if (!result) {
    input = {
      country: "India",
      monthly_inquiries: 120,
      monthly_consultations: 45,
      treatments_started: 30,
      treatments_completed: 28,
      average_case_value: 8000,
      patients_last_year: 800,
      patients_returned: 250,
    };
    user = {
      clinic_name: "Sample Dental Group",
      city: "Mumbai",
      country: "India"
    };
    result = {
      score: 58,
      consult_rate: 0.375,
      treatment_rate: 0.666,
      completion_rate: 0.933,
      recall_rate: 0.312,
      lead_leak: 15,
      conversion_leak: 2,
      completion_leak: 1,
      recall_leak: 70,
      lost_patients: 88,
      monthly_loss: 88 * 8000,
      annual_loss: 88 * 8000 * 12,
      current_revenue: 28 * 8000,
      potential_revenue: (120 * 0.5 * 0.7 * 0.95) * 8000,
      recovery: ((120 * 0.5 * 0.7 * 0.95) * 8000) - (28 * 8000),
      created_at: new Date()
    };
  }

  const currency = COUNTRY_CONFIGS[input!.country.toLowerCase()]?.currency || "$";

  // System recommendations
  const systems = [];
  if (result.consult_rate < GLOBAL_TARGETS.consultTarget) systems.push({ name: "Inquiry System", desc: "Missed inquiries detected. Call tracking, AI follow-up, and website conversion fixes required." });
  if (result.treatment_rate < GLOBAL_TARGETS.treatmentTarget) systems.push({ name: "Conversion System", desc: "Consultations are dropping. CRM tracking and automated patient education recommended." });
  if (result.completion_rate < GLOBAL_TARGETS.completionTarget) systems.push({ name: "Completion System", desc: "Treatment abandonment detected. Reminder systems and financial integrations needed." });
  if (result.recall_rate < GLOBAL_TARGETS.recallTarget) systems.push({ name: "Recall System", desc: "Low returning patients. Automated recall via SMS/Email required." });
  systems.push({ name: "Analytics Dashboard", desc: "Real-time foundational dashboard to track pipeline health." });

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-200 font-sans pb-20 selection:bg-red-900/30">

      {/* --- WEB VIEWER TOP BANNER (Hidden on Print) --- */}
      <div className="container mx-auto max-w-[210mm] mt-28 sticky top-20 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 text-white py-4 px-6 flex justify-between items-center print:hidden shadow-2xl rounded-t-2xl mb-0">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5 hidden sm:flex">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-800 border border-white/10"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-800 border border-white/10"></div>
          </div>
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-zinc-500 hidden sm:block" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-300"><span className="text-red-500">C</span>oma<span className="text-red-500">c</span>ks OS // Secure Document Viewer</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {!id && <span className="hidden md:inline-block bg-red-500/10 border border-red-500/20 text-red-400 px-3 py-1 rounded text-[10px] uppercase tracking-widest font-bold animate-pulse">Demo Mode</span>}
          <PrintButton />
        </div>
      </div>

      {/* --- DOCUMENT CONTAINER --- */}
      <div className="container mx-auto max-w-[210mm] bg-[#080808] border border-white/10 border-t-0 shadow-[0_0_80px_rgba(0,0,0,0.8)] p-0 print:m-0 print:border-none print:shadow-none print:w-full relative rounded-b-2xl">

        {/* PAGE 1: OVERVIEW */}
        <div className="min-h-[297mm] p-16 flex flex-col relative page-break-after overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>

          <Header title="System Diagnostic Overview" clinic={user} />

          <div className="flex-1 flex flex-col justify-center items-center text-center relative z-10 mt-12">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-white/10 bg-white/5">
              <Activity className="w-3.5 h-3.5 text-zinc-400" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">Overall System Health</span>
            </div>

            <div className={`w-64 h-64 rounded-full border-2 flex flex-col items-center justify-center mb-16 ${result.score > 80 ? 'border-white/20' : 'border-red-500/30 bg-red-500/5 shadow-[0_0_50px_rgba(239,68,68,0.1)]'}`}>
              <div className="text-8xl font-black text-white tracking-tighter">{Math.round(result.score)}</div>
              <div className="text-xl font-mono text-zinc-500 mt-2">/ 100</div>
            </div>

            <div className="w-full bg-[#110505] p-10 rounded-2xl border border-red-500/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.1)_0,transparent_60%)]" />
              <h3 className="text-red-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 relative z-10 flex items-center justify-center gap-2">
                <AlertTriangle className="w-4 h-4" /> Critical Revenue Loss Detected
              </h3>
              <div className="text-6xl font-mono font-black text-red-500 mb-4 relative z-10">{currency} {result.monthly_loss.toLocaleString()} <span className="text-2xl text-red-500/50">/mo</span></div>
              <div className="text-red-400/80 font-mono text-sm relative z-10 bg-red-500/10 inline-block px-4 py-2 rounded-md border border-red-500/20">Projected Annual Deficit: {currency} {result.annual_loss.toLocaleString()}</div>
            </div>
          </div>

          <Footer page={1} />
        </div>

        {/* PAGE 2: PIPELINE */}
        <div className="min-h-[297mm] p-16 flex flex-col relative page-break-after border-t border-white/10">
          <Header title="Patient Flow Architecture" clinic={user} />

          <div className="flex-1 flex flex-col justify-center mt-12">
            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-12 text-center">Current Funnel Mapping</h2>
            <div className="space-y-4 max-w-md mx-auto w-full relative">
              <div className="absolute inset-y-0 left-1/2 w-px bg-white/10 -translate-x-1/2 z-0"></div>
              {[
                { label: "Inquiries Captured", val: input.monthly_inquiries },
                { label: "Consultations Booked", val: input.monthly_consultations },
                { label: "Treatments Initiated", val: input.treatments_started },
                { label: "Treatments Completed", val: input.treatments_completed },
              ].map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center">
                  <div className="w-full bg-[#111] border border-white/10 p-6 rounded-xl flex justify-between items-center shadow-xl">
                    <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">{step.label}</span>
                    <span className="font-mono font-bold text-3xl text-white">{step.val}</span>
                  </div>
                  {idx < 3 && <div className="h-8 w-px bg-red-500/50 my-2" />}
                </div>
              ))}
            </div>
          </div>

          <Footer page={2} />
        </div>

        {/* PAGE 3: LEAK ANALYSIS */}
        <div className="min-h-[297mm] p-16 flex flex-col relative page-break-after border-t border-white/10">
          <Header title="Vulnerability Map" clinic={user} />

          <div className="flex-1 flex flex-col justify-center gap-6 mt-12">
            {[
              { label: "Lead Leakage", val: result.lead_leak, desc: "Inquiries completely lost before booking consultations." },
              { label: "Conversion Drop", val: result.conversion_leak, desc: "Consults rejecting or delaying treatment plans." },
              { label: "Treatment Abandonment", val: result.completion_leak, desc: "Patients failing to complete active regimens." },
              { label: "Recall Failure", val: result.recall_leak, desc: "Past database patients not returning this year." },
            ].map((leak, idx) => {
              const isLeak = leak.val > 0;
              return (
                <div key={idx} className={`p-6 rounded-xl border ${isLeak ? 'bg-[#110505] border-red-500/20' : 'bg-[#111] border-white/5'} flex items-center justify-between`}>
                  <div className="flex items-start gap-4">
                    <div className={`mt-1 w-8 h-8 rounded flex items-center justify-center border ${isLeak ? 'bg-red-500/10 border-red-500/20 text-red-500' : 'bg-white/5 border-white/10 text-zinc-600'}`}>
                      {isLeak ? <AlertTriangle className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />}
                    </div>
                    <div>
                      <h3 className={`text-sm font-bold uppercase tracking-widest mb-1 ${isLeak ? 'text-red-400' : 'text-zinc-400'}`}>{leak.label}</h3>
                      <p className={`text-xs ${isLeak ? 'text-red-500/70' : 'text-zinc-600'}`}>{leak.desc}</p>
                    </div>
                  </div>
                  <div className={`text-4xl font-mono font-black ${isLeak ? 'text-red-500' : 'text-zinc-700'}`}>
                    {isLeak ? `-${leak.val}` : '0'}
                  </div>
                </div>
              )
            })}

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center">
              <h3 className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] mb-4">Total Patient Deficit (Monthly)</h3>
              <div className="text-7xl font-mono font-black text-white">{result.lost_patients}</div>
            </div>
          </div>

          <Footer page={3} />
        </div>

        {/* PAGE 4: BENCHMARK */}
        <div className="min-h-[297mm] p-16 flex flex-col relative page-break-after border-t border-white/10">
          <Header title="Performance Telemetry" clinic={user} />

          <div className="flex-1 flex flex-col justify-center mt-12">
            <div className="w-full bg-[#111] border border-white/5 rounded-2xl overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/[0.02] border-b border-white/10">
                    <th className="p-6 text-zinc-500 uppercase tracking-widest text-[10px] font-bold">System Metric</th>
                    <th className="p-6 text-zinc-500 uppercase tracking-widest text-[10px] font-bold">Actual</th>
                    <th className="p-6 text-zinc-500 uppercase tracking-widest text-[10px] font-bold">Target</th>
                    <th className="p-6 text-zinc-500 uppercase tracking-widest text-[10px] font-bold text-right">Variance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { l: "Consultation Acceptance", y: result.consult_rate, t: GLOBAL_TARGETS.consultTarget },
                    { l: "Treatment Acceptance", y: result.treatment_rate, t: GLOBAL_TARGETS.treatmentTarget },
                    { l: "Plan Completion", y: result.completion_rate, t: GLOBAL_TARGETS.completionTarget },
                    { l: "Patient Reactivation", y: result.recall_rate, t: GLOBAL_TARGETS.recallTarget },
                  ].map((b, i) => {
                    const yours = Math.round(b.y * 100);
                    const tgt = Math.round(b.t * 100);
                    const gap = yours - tgt;
                    const isLeak = gap < 0;
                    return (
                      <tr key={i} className="bg-[#0a0a0a]">
                        <td className="p-6 text-xs font-bold uppercase tracking-wider text-zinc-300">{b.l}</td>
                        <td className="p-6 text-lg font-mono text-white">{yours}%</td>
                        <td className="p-6 text-lg font-mono text-zinc-600">{tgt}%</td>
                        <td className="p-6 text-right">
                          <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded text-[10px] font-mono font-bold border ${!isLeak ? 'bg-white/10 border-white/20 text-white' : 'bg-[#1a0505] border-red-500/30 text-red-400'}`}>
                            {gap > 0 ? '+' : ''}{gap}%
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <Footer page={4} />
        </div>

        {/* PAGE 5: REVENUE RECOVERY */}
        <div className="min-h-[297mm] p-16 flex flex-col relative page-break-after border-t border-white/10">
          <Header title="Capital Recovery Projections" clinic={user} />

          <div className="flex-1 flex flex-col items-center justify-center text-center mt-12">
            <Zap className="w-8 h-8 text-zinc-600 mb-6" />
            <p className="text-sm text-zinc-400 mb-16 max-w-md mx-auto leading-relaxed font-light">
              Mathematical projection of gross revenue if the Comacks Operating System bridges the negative variance gaps.
            </p>

            <div className="flex flex-col w-full gap-4 mb-16">
              <div className="bg-[#111] border border-white/5 p-8 rounded-2xl flex justify-between items-center">
                <div className="text-left">
                  <h4 className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-1">Current Output</h4>
                  <div className="text-xs text-zinc-600 font-mono">Status Quo</div>
                </div>
                <div className="text-3xl font-mono font-bold text-zinc-400">{currency} {result.current_revenue.toLocaleString()}</div>
              </div>

              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex justify-between items-center shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                <div className="text-left">
                  <h4 className="text-[10px] text-white uppercase tracking-widest font-bold mb-1">Optimized Output</h4>
                  <div className="text-xs text-zinc-400 font-mono">Comacks Target</div>
                </div>
                <div className="text-4xl font-mono font-black text-white">{currency} {result.potential_revenue.toLocaleString()}</div>
              </div>
            </div>

            <div className="w-full pt-10 border-t border-white/10 flex flex-col items-center">
              <h3 className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] mb-4">Total Recovery Potential</h3>
              <div className="text-5xl font-mono font-black text-white mb-2">+{currency} {result.recovery.toLocaleString()} <span className="text-xl text-zinc-600">/mo</span></div>
              <div className="text-sm font-mono text-zinc-500 bg-[#111] px-4 py-2 rounded-md border border-white/5 mt-4">Yearly Projection: +{currency} {(result.recovery * 12).toLocaleString()}</div>
            </div>
          </div>
          <Footer page={5} />
        </div>

        {/* PAGE 6: SYSTEMS NEEDED */}
        <div className="min-h-[297mm] p-16 flex flex-col relative page-break-after border-t border-white/10">
          <Header title="Required Architecture" clinic={user} />

          <div className="flex-1 flex flex-col justify-center mt-12">
            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-8">Recommended System Installs</h2>
            <div className="space-y-4">
              {systems.map((sys, idx) => (
                <div key={idx} className="bg-[#111] p-6 rounded-xl border border-white/5 flex items-start gap-6">
                  <div className="w-10 h-10 bg-white/5 border border-white/10 rounded flex items-center justify-center font-mono text-xs text-zinc-400 shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">{sys.name}</h3>
                    <p className="text-xs text-zinc-500 leading-relaxed font-light">
                      {sys.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer page={6} />
        </div>

        {/* PAGE 7: NEXT STEP */}
        <div className="min-h-[297mm] p-16 flex flex-col relative border-t border-white/10">
          <Header title="Strategic Deployment" clinic={user} />

          <div className="flex-1 flex flex-col justify-center items-center text-center mt-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl mb-8">
              <ScanLine className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-4xl font-medium tracking-tighter text-white mb-6">Initialize Deployment.</h2>
            <p className="text-sm text-zinc-400 max-w-md mx-auto mb-12 leading-relaxed font-light">
              The vulnerabilities have been mapped. The next step is a deep-dive technical strategy call with our architects to plan the installation of the Comacks OS into your clinic.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12 relative z-10">
              <Link href="https://calendly.com/" target="_blank" className="w-full max-w-xs">
                <button className="w-full py-4 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  Secure Your Slot
                </button>
              </Link>
              <Link href="/contact" className="w-full max-w-xs">
                <button className="w-full py-4 rounded-xl bg-red-600 border border-red-500 text-white font-bold text-xs uppercase tracking-widest shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                  Contact Architect
                </button>
              </Link>
            </div>

            <div className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">
              Support: <a href="mailto:arpit@comacks.com" className="text-white hover:text-red-500 transition-colors">arpit@comacks.com</a>
            </div>
          </div>

          <Footer page={7} />
        </div>

      </div>

      {/* --- PRINT STYLES (Enforces high-quality PDF generation) --- */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @media print {
          @page { margin: 0; size: A4 portrait; }
          body { 
            background: #050505 !important; 
            -webkit-print-color-adjust: exact; 
            print-color-adjust: exact; 
          }
          .page-break-after { break-after: page; }
          /* Ensure backgrounds and glows print exactly as they look on screen */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}} />
    </div>
  );
}

function Header({ title, clinic }: { title: string; clinic: any }) {
  return (
    <div className={`flex justify-between items-start border-b border-white/10 pb-6 print:pb-4 absolute top-16 left-16 right-16 z-20`}>
      <div>
        <h1 className="text-lg font-black text-white flex items-center gap-2 tracking-tight">
          <Activity className="w-5 h-5 text-red-500" />
          <span className="text-red-500">C</span>oma<span className="text-red-500">c</span>ks_OS
        </h1>
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mt-2">System Diagnostic Output</div>
      </div>
      <div className="text-right">
        <div className={`font-mono text-xs font-bold text-white`}>{clinic?.clinic_name || "Diagnostic Report"}</div>
        <div className={`text-[10px] font-mono text-zinc-500 mt-2`}>{new Date().toLocaleDateString()}</div>
      </div>
      <div className={`absolute -bottom-6 left-0 font-bold uppercase tracking-[0.2em] text-[10px] text-zinc-400 bg-[#080808] pr-4`}>
        {title}
      </div>
    </div>
  );
}

function Footer({ page }: { page: number }) {
  return (
    <div className={`flex justify-between items-center text-[10px] text-zinc-600 uppercase font-mono font-bold tracking-widest absolute bottom-16 left-16 right-16 z-20 border-t border-white/5 pt-6`}>
      <span className="flex items-center gap-2">
        <Cpu className="w-3 h-3" />
        <span className="text-red-500">C</span>oma<span className="text-red-500">c</span>ks Intelligence Group
      </span>
      <span>Page 0{page} / 07</span>
    </div>
  );
}