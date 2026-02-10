"use client";

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Diagnostics() {
    return (
        <div id="diagnostics" className="bg-[#0A0A0A] py-24 border-y border-white/5 relative overflow-hidden">

            {/* Decorative background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-[#0A0A0A] to-[#0A0A0A] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-4xl mx-auto rounded-3xl bg-[#050505] border border-white/10 p-8 md:p-16 text-center shadow-[0_0_50px_rgba(0,0,0,0.5)]">

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-900/30 bg-red-900/10 mb-8 mx-auto">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-red-200 font-bold">System Check</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-white mb-6">
                        Is Your Clinic Leaking Revenue?
                    </h2>
                    <p className="text-zinc-400 text-lg font-light mb-12 max-w-2xl mx-auto">
                        Answer 3 quick questions to get a preliminary diagnosis of your patient flow health.
                    </p>

                    {/* Mock Diagnostic Form / Call to Action */}
                    <div className="grid md:grid-cols-3 gap-4 mb-12 text-left">
                        <QuestionBox number="01" question="Do you miss calls after hours?" />
                        <QuestionBox number="02" question="Is walk-in data captured digitally?" />
                        <QuestionBox number="03" question="Do you have an automated recall system?" />
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <Button className="h-14 px-8 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors font-bold tracking-widest uppercase text-sm shadow-[0_0_20px_rgba(255,255,255,0.2)] asChild">
                            <Link href="/contact">
                                Get Full Diagnosis Report <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                        <p className="text-xs text-zinc-600 uppercase tracking-widest">
                            Free Assessment • No Obligation
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

function QuestionBox({ number, question }: { number: string, question: string }) {
    return (
        <div className="p-6 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-3">
            <span className="text-xs font-mono text-zinc-600">Q{number}</span>
            <p className="text-sm text-zinc-300 font-medium">{question}</p>
            <div className="mt-auto flex gap-2">
                <div className="w-full py-2 bg-black/50 rounded text-center text-[10px] text-zinc-500 uppercase cursor-not-allowed">Yes</div>
                <div className="w-full py-2 bg-black/50 rounded text-center text-[10px] text-zinc-500 uppercase cursor-not-allowed">No</div>
            </div>
        </div>
    );
}
