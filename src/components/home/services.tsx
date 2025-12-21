"use client";

import React from 'react';
import { Zap, Briefcase, Megaphone, Check, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/animated-section';

export function Services() {
  return (
    <AnimatedSection className="relative bg-[#050505] text-white py-24 md:py-32 overflow-hidden border-t border-white/5">
      
      {/* --- Background Atmospherics --- */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Grid & Glows */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
         <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
         <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-red-800/5 blur-[100px] rounded-full mix-blend-screen"></div>
         
         {/* Central Beam (Animated) */}
         <motion.div 
           initial={{ height: 0, opacity: 0 }}
           whileInView={{ height: '100%', opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, ease: "easeInOut" }}
           className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-red-900/50 to-transparent hidden md:block"
         ></motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- Section Header (Animated) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">System Modules</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            Complete Digital Growth Solutions
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            From patient acquisition to retention, we provide end-to-end digital solutions designed for healthcare providers.
          </p>
        </motion.div>

        {/* --- Services Timeline --- */}
        <div className="relative space-y-24 md:space-y-32">
          
          <ServiceItem 
            icon={<Zap className="w-6 h-6 text-white" />} 
            title="AI Automation Systems" 
            description="24/7 lead capture and patient follow-up systems that work while you sleep." 
            items={['Lead Capture Systems', 'Follow-up Automation', 'CRM Integration', 'WhatsApp Automation']} 
            index={1}
            // Replace with your local image path e.g., "/images/ai-service.jpg"
            imageSrc="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1000"
          />
          
          <ServiceItem 
            icon={<Briefcase className="w-6 h-6 text-white" />} 
            title="Digital Solutions" 
            description="High-converting websites and landing pages designed for healthcare providers." 
            items={['Clinic Websites', 'Lead Generation Pages', 'CRM Integrations', 'Lead Management']} 
            align="right" 
            index={2}
            // Replace with your local image path
            imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
          />
          
          <ServiceItem 
            icon={<Megaphone className="w-6 h-6 text-white" />} 
            title="Social Media Marketing" 
            description="Strategic paid advertising and social media management for clinics." 
            items={['Paid Ads', 'Social Media Management', 'Content Strategy', 'Local SEO']} 
            index={3}
            // Replace with your local image path
            imageSrc="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000"
          />
        
        </div>
      </div>
    </AnimatedSection>
  );
}

interface ServiceItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    items: string[];
    align?: 'left' | 'right';
    index: number;
    imageSrc: string;
}

function ServiceItem({ icon, title, description, items, align = 'left', index, imageSrc }: ServiceItemProps) {
  const isRight = align === 'right';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-24 ${isRight ? 'md:flex-row-reverse' : ''}`}
    >
      
      {/* Central Node Dot (Animated Pop) */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex flex-col items-center justify-center z-30"
      >
        <div className="w-3 h-3 bg-[#050505] border border-zinc-700 rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-red-500 rounded-full"></div>
        </div>
        <div className="absolute top-6 text-[9px] font-mono text-zinc-700 tracking-widest">0{index}</div>
      </motion.div>

      {/* Text Content Side */}
      <div className={`flex-1 ${isRight ? 'md:text-right items-end' : 'md:text-left items-start'} flex flex-col relative z-20`}>
        <div className={`w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center mb-6 backdrop-blur-md ${isRight ? 'md:ml-auto' : ''}`}>
           {icon}
        </div>
        
        <h3 className="text-3xl font-medium tracking-tight mb-4 text-white">{title}</h3>
        <p className="text-zinc-400 mb-8 leading-relaxed max-w-md">{description}</p>
        
        <ul className={`space-y-4 ${isRight ? 'items-end' : 'items-start'} flex flex-col`}>
          {items.map((item, i) => (
            <motion.li 
              key={item} 
              initial={{ opacity: 0, x: isRight ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + (i * 0.1), duration: 0.5 }}
              className={`flex items-center gap-3 text-sm text-zinc-300 tracking-wide ${isRight ? 'flex-row-reverse' : ''}`}
            >
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-red-900/20 border border-red-900/30">
                <Check className="w-3 h-3 text-red-400" />
              </div>
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Visual/Image Side (Animated) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex-1 w-full relative z-10"
      >
        <div className="relative group h-64 md:h-80 w-full">
           {/* Decorative Corners */}
           <div className="absolute -top-1 -left-1 text-zinc-700 z-20"><Plus strokeWidth={1} className="w-4 h-4" /></div>
           <div className="absolute -top-1 -right-1 text-zinc-700 z-20"><Plus strokeWidth={1} className="w-4 h-4" /></div>
           <div className="absolute -bottom-1 -left-1 text-zinc-700 z-20"><Plus strokeWidth={1} className="w-4 h-4" /></div>
           <div className="absolute -bottom-1 -right-1 text-zinc-700 z-20"><Plus strokeWidth={1} className="w-4 h-4" /></div>

           {/* The Image Container */}
           <div className="h-full w-full bg-[#0A0A0A] border border-white/5 relative overflow-hidden rounded-lg transition-all duration-500 group-hover:border-white/10">
              
              {/* The Image itself */}
              <img 
                src={imageSrc} 
                alt={title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />

              {/* Overlays for atmosphere */}
              <div className="absolute inset-0 bg-black/50 mix-blend-multiply pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none"></div>
              
              {/* Red tint on hover */}
              <div className="absolute inset-0 bg-red-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay pointer-events-none"></div>
           </div>
        </div>
      </motion.div>

    </motion.div>
  );
}