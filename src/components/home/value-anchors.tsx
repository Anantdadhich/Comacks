"use client";

import React from 'react';
import { AlertTriangle, Clock, MessageSquare, UserX, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

export function ValueAnchors() {
    return (
        <div className="relative bg-[#050505] text-white py-24 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12 relative z-10">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">System Diagnosis</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                        Invisible Clinic Problems We Diagnose
                    </h2>
                    <p className="text-zinc-400 font-light leading-relaxed">
                        Revenue leakage often happens where you can't see it. Our system identifies and fixes these operational gaps.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <ProblemCard
                        icon={<Clock className="w-5 h-5" />}
                        title="Enquiries Slipping After Hours"
                        description="50% of patient interest happens when your reception is closed. Without a system, these leads are lost forever."
                    />
                    <ProblemCard
                        icon={<MessageSquare className="w-5 h-5" />}
                        title="WhatsApp Chaos"
                        description="Patient messages scattered across personal phones and unmonitored chats lead to missed bookings and zero accountability."
                    />
                    <ProblemCard
                        icon={<UserX className="w-5 h-5" />}
                        title="No-Shows Without Follow-up"
                        description="Manual follow-ups are inconsistent. Patients forget appointments, and revenue disappears without a trace."
                    />
                    <ProblemCard
                        icon={<Activity className="w-5 h-5" />}
                        title="Lost Walk-in Patients"
                        description="Walk-ins that don't book immediately often leave without their data being captured for future nurturing."
                    />
                    <ProblemCard
                        icon={<AlertTriangle className="w-5 h-5" />}
                        title="Old Patients Not Returning"
                        description="Thousands of past patient records sit dormant because there is no automated reactivation system in place."
                    />
                </div>

            </div>
        </div>
    );
}

function ProblemCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="p-8 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
        >
            <div className="w-10 h-10 rounded-full bg-red-900/10 border border-red-900/20 flex items-center justify-center text-red-500 mb-6">
                {icon}
            </div>
            <h3 className="text-lg font-medium text-white mb-3">{title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-light">{description}</p>
        </motion.div>
    );
}
