"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, AlertCircle, CheckCircle2, ShieldCheck, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";


const DIAGNOSTIC_QUESTIONS = [
    {
        id: 1,
        label: "After-Hours Coverage",
        question: "Is your phone line answered by a human 24/7?",
        leakDescription: "Missed calls after 5PM = 30% revenue loss.",
    },
    {
        id: 2,
        label: "Lead Capture",
        question: "Do walk-ins automatically enter a CRM database?",
        leakDescription: "Paper records mean zero retargeting ability.",
    },
    {
        id: 3,
        label: "Recall Automation",
        question: "Does software auto-book 6-month checkups?",
        leakDescription: "Manual recall relies on memory, which fails.",
    },
];

export function Diagnostics() {
    // State: Default to 'false' (Problems exist) to encourage interaction
    const [answers, setAnswers] = useState<Record<number, boolean>>({
        1: false,
        2: false,
        3: false,
    });

    const [score, setScore] = useState(0);

    // Calculate "Health Score" (0-3)
    useEffect(() => {
        const yesCount = Object.values(answers).filter((val) => val === true).length;
        setScore(yesCount);
    }, [answers]);

    const toggleAnswer = (id: number) => {
        setAnswers((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const isCritical = score < 3;

    return (
        <section id="diagnostics" className="relative bg-[#050505] py-32 overflow-hidden">

            {/* --- AMBIENT BACKGROUND --- */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
                {/* Dynamic Glow based on score */}
                <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[120px] opacity-20 transition-colors duration-1000 ${isCritical ? "bg-red-600" : "bg-emerald-600"
                        }`}
                />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                <div className="max-w-5xl mx-auto">

                    {/* --- HEADER --- */}
                    <div className="text-center mb-16">
                        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-8 transition-colors duration-500 ${isCritical
                            ? "border-red-900/50 bg-red-900/10 text-red-200"
                            : "border-emerald-900/50 bg-emerald-900/10 text-emerald-200"
                            }`}>
                            <span className="relative flex h-2 w-2">
                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isCritical ? "bg-red-500" : "bg-emerald-500"}`}></span>
                                <span className={`relative inline-flex rounded-full h-2 w-2 ${isCritical ? "bg-red-500" : "bg-emerald-500"}`}></span>
                            </span>
                            <span className="text-[10px] uppercase tracking-widest font-bold">
                                {isCritical ? "System Vulnerability Detected" : "System Secure"}
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6">
                            Clinic Flow <span className="text-zinc-500">Assessment.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg font-light max-w-2xl mx-auto">
                            Tap the toggles below to reflect your current operations. See where revenue is leaking.
                        </p>
                    </div>

                    {/* --- INTERACTIVE GRID --- */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {DIAGNOSTIC_QUESTIONS.map((q) => (
                            <DiagnosticCard
                                key={q.id}
                                data={q}
                                isActive={answers[q.id]}
                                onToggle={() => toggleAnswer(q.id)}
                            />
                        ))}
                    </div>

                    {/* --- RESULTS DASHBOARD --- */}
                    <div className="rounded-3xl border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">

                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-3">
                                {isCritical ? (
                                    <ShieldAlert className="w-8 h-8 text-red-500" />
                                ) : (
                                    <ShieldCheck className="w-8 h-8 text-emerald-500" />
                                )}
                                <h3 className="text-2xl font-medium text-white">
                                    {isCritical ? "Revenue Leakage Detected" : "Systems Optimized"}
                                </h3>
                            </div>

                            <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(score / 3) * 100}%` }}
                                    className={`h-full transition-all duration-700 ${isCritical ? "bg-red-500" : "bg-emerald-500"}`}
                                />
                            </div>

                            <p className="text-zinc-400 font-light text-sm">
                                {score === 0 && "Your clinic is operating blindly. High risk of revenue loss."}
                                {score === 1 && "Critical gaps exist in your patient capture system."}
                                {score === 2 && "You are doing well, but missing one key automation layer."}
                                {score === 3 && "Your systems are tight. You are ready for scaling."}
                            </p>
                        </div>

                        <div className="flex-shrink-0">
                            <Button
                                className={`h-14 px-8 rounded-full text-black font-bold tracking-widest uppercase text-xs transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-105 ${isCritical
                                    ? "bg-white hover:bg-zinc-200"
                                    : "bg-emerald-400 hover:bg-emerald-300"
                                    }`}
                                asChild
                            >
                                <Link href="/contact">
                                    Get Diagnosis Report
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

// --- SUB-COMPONENT: The Interactive Card ---
function DiagnosticCard({ data, isActive, onToggle }: { data: any, isActive: boolean, onToggle: () => void }) {
    return (
        <div
            onClick={onToggle}
            className={`cursor-pointer group relative p-8 rounded-2xl border transition-all duration-500 overflow-hidden ${isActive
                ? "bg-emerald-950/10 border-emerald-500/30"
                : "bg-red-950/10 border-red-500/30 hover:border-red-500/50"
                }`}
        >
            {/* Background Gradient */}
            <div className={`absolute inset-0 opacity-20 transition-opacity duration-500 bg-gradient-to-br ${isActive
                ? "from-emerald-500/20 to-transparent"
                : "from-red-500/20 to-transparent"
                }`} />

            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                        0{data.id} // {data.label}
                    </span>
                    {/* Toggle Switch UI */}
                    <div className={`w-10 h-5 rounded-full relative transition-colors duration-300 ${isActive ? "bg-emerald-500" : "bg-zinc-700"}`}>
                        <div className={`absolute top-1 w-3 h-3 rounded-full bg-white transition-transform duration-300 ${isActive ? "left-6" : "left-1"}`} />
                    </div>
                </div>

                {/* Question */}
                <h4 className={`text-lg font-medium mb-4 transition-colors duration-300 ${isActive ? "text-emerald-100" : "text-white"}`}>
                    {data.question}
                </h4>

                {/* Status Indicator */}
                <div className="mt-auto pt-6 border-t border-white/5">
                    <AnimatePresence mode="wait">
                        {isActive ? (
                            <motion.div
                                key="safe"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-2 text-emerald-400"
                            >
                                <CheckCircle2 className="w-4 h-4" />
                                <span className="text-xs font-bold uppercase tracking-wider">System Active</span>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="danger"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="space-y-2"
                            >
                                <div className="flex items-center gap-2 text-red-400">
                                    <AlertCircle className="w-4 h-4" />
                                    <span className="text-xs font-bold uppercase tracking-wider">Leak Detected</span>
                                </div>
                                <p className="text-xs text-red-400/70 leading-relaxed">
                                    {data.leakDescription}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}