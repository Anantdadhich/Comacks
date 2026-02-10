"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, MessageCircle, GitBranch, HeartHandshake, LayoutDashboard } from 'lucide-react';

export function OperatingSystem() {
    return (
        <div id="components" className="bg-[#050505] text-white py-24 border-t border-white/5">
            <div className="container mx-auto px-6 md:px-12">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 mb-6">
                        <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">Infrastructure</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                        Operating System Components
                    </h2>
                    <p className="text-zinc-400 font-light leading-relaxed">
                        We don't sell random services. We deploy a unified infrastructure stack.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <ComponentCard
                        icon={<Target className="w-6 h-6" />}
                        title="Patient Attraction System"
                        description="Controlled campaigns via SEO, Ads, and Local Search. Audience targeting refined to your clinic's specialty."
                        tags={['Paid Ads', 'SEO', 'Local Dominance']}
                    />

                    <ComponentCard
                        icon={<MessageCircle className="w-6 h-6" />}
                        title="Conversion Engine"
                        description="AI-driven response and booking flows. We turn interest into booked appointments instantly."
                        tags={['AI Booking', 'Instant Response', 'Lead Nurture']}
                    />

                    <ComponentCard
                        icon={<GitBranch className="w-6 h-6" />}
                        title="Automation Core"
                        description="The backbone of efficiency. Automated reminders, follow-ups, and CRM workflows."
                        tags={['Reminders', 'No-show Prevention', 'Workflow Logic']}
                    />

                    <ComponentCard
                        icon={<HeartHandshake className="w-6 h-6" />}
                        title="Retention & Reactivation"
                        description="Keep your patients loyal. Review generation and reactivation sequences for dormant records."
                        tags={['Review Management', 'Recall Systems', 'Loyalty']}
                    />

                    <ComponentCard
                        icon={<LayoutDashboard className="w-6 h-6" />}
                        title="Visibility Dashboard"
                        description="One dashboard for all metrics. Know your revenue, sources, and appointment volume in real-time."
                        tags={['Real-time Data', 'Revenue Tracking', 'Source Attribution']}
                    />

                </div>

            </div>
        </div>
    );
}

function ComponentCard({ icon, title, description, tags }: { icon: React.ReactNode, title: string, description: string, tags: string[] }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group p-8 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col"
        >
            <div className="w-12 h-12 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-zinc-800 transition-colors mb-6">
                {icon}
            </div>

            <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-light mb-8 flex-grow">{description}</p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-white/5 text-zinc-500 border border-white/5">
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
