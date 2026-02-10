"use client";

import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function SystemPhilosophy() {
    return (
        <div className="bg-[#050505] text-white py-24 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 mb-6">
                            <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Philosophy</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-8 leading-tight">
                            Why Clinics Choose <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                                A System Over Services.
                            </span>
                        </h2>
                        <p className="text-lg text-zinc-400 font-light leading-relaxed mb-8">
                            Clinics lose revenue because no system ties everything together. Tools alone don't fix flow.
                        </p>

                        <div className="space-y-6">
                            <PhilosophyPoint
                                title="Services are Tactical"
                                description="Agencies sell pieces—SEO, ads, or a website. But without a system, these pieces don't talk to each other."
                            />
                            <PhilosophyPoint
                                title="Systems are Strategic"
                                description="A system connects patient acquisition directly to retention. It's a holistic engine that protects revenue."
                            />
                            <PhilosophyPoint
                                title="Predictability vs Hope"
                                description="Marketing implies testing and hoping. A system implies engineering and predictability."
                            />
                        </div>
                    </div>

                    {/* Comparison Table/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/5 rounded-2xl p-8 md:p-12 relative overflow-hidden"
                    >
                        {/* Background glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/10 blur-[80px] rounded-full pointer-events-none"></div>

                        <div className="grid grid-cols-2 gap-8 mb-8 border-b border-white/10 pb-8">
                            <div className="text-center">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2">Typical Agency</h4>
                                <X className="w-8 h-8 text-red-900/50 mx-auto" />
                            </div>
                            <div className="text-center">
                                <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-2">Comacks System</h4>
                                <Check className="w-8 h-8 text-green-500 mx-auto" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <ComparisonRow agency="Chasing Leads" system="Controlling Flow" />
                            <ComparisonRow agency="Manual Follow-ups" system="Automated Nurture" />
                            <ComparisonRow agency="Vanity Metrics" system="Revenue & Appointments" />
                            <ComparisonRow agency="Disjointed Tools" system="Unified Infrastructure" />
                        </div>

                    </motion.div>

                </div>
            </div>
        </div>
    );
}

function PhilosophyPoint({ title, description }: { title: string, description: string }) {
    return (
        <div className="flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 flex-shrink-0"></div>
            <div>
                <h3 className="text-white font-medium mb-1">{title}</h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

function ComparisonRow({ agency, system }: { agency: string, system: string }) {
    return (
        <div className="grid grid-cols-2 gap-8 text-sm">
            <div className="text-center text-zinc-500">{agency}</div>
            <div className="text-center text-white font-medium">{system}</div>
        </div>
    );
}
