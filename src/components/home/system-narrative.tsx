"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Magnet, Zap, Workflow, RefreshCw, Eye } from 'lucide-react';

export function SystemNarrative() {
    return (
        <div id="how-it-works" className="relative bg-[#050505] text-white py-24 md:py-32 border-t border-white/5 overflow-hidden">

            <div className="container mx-auto px-6 md:px-12 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">System Narrative</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                        How The System Works
                    </h2>
                    <p className="text-zinc-400 font-light leading-relaxed">
                        We don't just "do marketing". We install a controlled patient flow infrastructure.
                    </p>
                </div>

                <div className="relative space-y-24">

                    {/* Vertical Connection Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>

                    <NarrativeStep
                        icon={<Magnet className="w-5 h-5" />}
                        step="01"
                        title="Controlled Patient Attraction"
                        description="We attract the right patients only when your system is ready. No wasted leads. No overflow. Targeted acquisition ensures steady, manageable growth."
                        align="left"
                    />

                    <NarrativeStep
                        icon={<Zap className="w-5 h-5" />}
                        step="02"
                        title="Instant Response & Booking"
                        description="Every enquiry gets an instant response. Speed to lead is critical. Our system engages potential patients immediately, separating serious bookings from casual queries."
                        align="right"
                    />

                    <NarrativeStep
                        icon={<Workflow className="w-5 h-5" />}
                        step="03"
                        title="Automation & Follow-Up"
                        description="Manual follow-ups are replaced by intelligent automation. Reminders, confirmations, and nurture sequences run in the background, ensuring no patient falls through the cracks."
                        align="left"
                    />

                    <NarrativeStep
                        icon={<RefreshCw className="w-5 h-5" />}
                        step="04"
                        title="Retention & Reactivation"
                        description="Old patients don't disappear. The system automatically maintains contact, prompting regular check-ups and reactivating dormant patients to keep your schedule full."
                        align="right"
                    />

                    <NarrativeStep
                        icon={<Eye className="w-5 h-5" />}
                        step="05"
                        title="Visibility & Control"
                        description="Stop guessing. A single dashboard gives you a view of truth—appointments, revenue, and sources. Data flows into decisions, not vanity metrics."
                        align="left"
                    />

                </div>

            </div>
        </div>
    );
}

function NarrativeStep({ icon, step, title, description, align }: { icon: React.ReactNode, step: string, title: string, description: string, align: 'left' | 'right' }) {
    const isRight = align === 'right';
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div ref={ref} className={`relative flex flex-col md:flex-row items-center gap-12 ${isRight ? 'md:flex-row-reverse' : ''}`}>

            {/* Center Marker */}
            <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-[#050505] border border-white/20">
                <div className={`w-2 h-2 rounded-full ${isInView ? 'bg-red-500' : 'bg-zinc-700'} transition-colors duration-500`}></div>
            </div>

            <motion.div
                initial={{ opacity: 0, x: isRight ? 30 : -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isRight ? 30 : -30 }}
                transition={{ duration: 0.6 }}
                className={`flex-1 ${isRight ? 'md:text-left' : 'md:text-right'}`}
            >
                <div className={`flex flex-col ${isRight ? 'md:items-start' : 'md:items-end'}`}>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono text-zinc-500 tracking-widest">STEP {step}</span>
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white">
                            {icon}
                        </div>
                    </div>
                    <h3 className="text-2xl font-medium text-white mb-4">{title}</h3>
                    <p className="text-zinc-400 leading-relaxed font-light max-w-md">{description}</p>
                </div>
            </motion.div>

            <div className="flex-1 md:block hidden">
                {/* Spacer for the other side */}
            </div>

        </div>
    );
}
