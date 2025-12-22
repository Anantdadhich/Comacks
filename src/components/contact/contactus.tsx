"use client";

import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, ArrowRight, Calendar, ArrowUpRight, Signal, Terminal, Clock, Check, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button'; 
import { InlineWidget } from 'react-calendly';
import { motion } from 'framer-motion';

export function Contact() {
 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
     
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-red-900/30 overflow-x-hidden pt-20">
      
      {/* --- Section 1: Compact, Production-Grade Hero --- */}
      <section className="relative py-16 px-6 border-b border-white/5 bg-[#050505]">
        
        {/* Subtle Background Tech */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:linear-gradient(to_bottom,black,transparent)] opacity-10"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                
                {/* Left: Title & Context */}
                <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-6">
                         <div className="flex items-center gap-2 px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                            System Online
                         </div>
                         <span className="text-zinc-600 text-sm">/</span>
                         <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Contact Protocol</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-xl">
                        Our specialists are ready to help you scale. Establish a secure connection below.
                    </p>
                </div>

                {/* Right: Operational Metrics (Decorative/Informative) */}
                <div className="hidden md:flex gap-8 border-l border-white/10 pl-8">
                    <div>
                        <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Response Time</div>
                        <div className="flex items-center gap-2 text-white font-mono text-sm">
                            <Clock className="w-4 h-4 text-red-500" />
                            &lt; 24 Hours
                        </div>
                    </div>
                    <div>
                        <div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Status</div>
                        <div className="flex items-center gap-2 text-white font-mono text-sm">
                            <Signal className="w-4 h-4 text-green-500" />
                            Operational
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* --- Section 2: Command Grid & Form --- */}
      <section className="relative py-12 px-6">
         <div className="container mx-auto max-w-6xl">
            
            {/* 1. Quick Access Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <ContactBox 
                    icon={<Mail className="w-5 h-5" />}
                    title="Email"
                    value="arpit@comacks.com"
                    action="Send Mail"
                    href="mailto:arpit@comacks.com"
                />
                <ContactBox 
                    icon={<Phone className="w-5 h-5" />}
                    title="Phone"
                    value="+91 7303908344"
                    action="Call Now"
                    href="tel:+917303908344"
                />
                <ContactBox 
                    icon={<MessageSquare className="w-5 h-5" />}
                    title="WhatsApp"
                    value="Instant Chat"
                    action="Connect"
                    href="https://wa.me/7303908344"
                    highlight
                />
            </div>

            {/* 2. Main Layout: Info + Form */}
            <div className="grid lg:grid-cols-12 gap-8">
                
                {/* Left: Location & Details (4 cols) */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-8 flex-1">
                        <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-md flex items-center justify-center mb-6">
                            <MapPin className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-base font-bold text-white mb-2">Base of Operations</h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                            New Delhi, India.<br />
                            Serving Healthcare Providers Globally.
                        </p>
                        
                        <div className="h-px w-full bg-white/5 mb-6"></div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between text-xs">
                                <span className="text-zinc-500">Timezone</span>
                                <span className="text-white font-mono">IST (GMT+5:30)</span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                                <span className="text-zinc-500">Office Hours</span>
                                <span className="text-white font-mono">24/7</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Secure Form (8 cols) */}
                <div className="lg:col-span-8">
                    <div className="bg-[#0A0A0A] border border-white/10 rounded-lg p-8 md:p-10 relative overflow-hidden">
                        
                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="text-xl font-medium text-white mb-1">Send a Transmission</h3>
                                    <p className="text-zinc-500 text-sm">Secure, direct line to our team.</p>
                                </div>
                                <Terminal className="w-5 h-5 text-zinc-700" />
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">First Name</label>
                                        <input 
                                            type="text" 
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#050505] border border-white/10 rounded-md p-3 text-white text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/20 transition-all placeholder:text-zinc-700" 
                                            placeholder="Enter name" 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Last Name</label>
                                        <input 
                                            type="text" 
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-[#050505] border border-white/10 rounded-md p-3 text-white text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/20 transition-all placeholder:text-zinc-700" 
                                            placeholder="Enter last name" 
                                        />
                                    </div>
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Email Address</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#050505] border border-white/10 rounded-md p-3 text-white text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/20 transition-all placeholder:text-zinc-700" 
                                        placeholder="name@clinic.com" 
                                    />
                                </div>
                                
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Message</label>
                                    <textarea 
                                        rows={4} 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[#050505] border border-white/10 rounded-md p-3 text-white text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/20 transition-all placeholder:text-zinc-700 resize-none" 
                                        placeholder="How can we help you grow?"
                                    ></textarea>
                                </div>

                                <div className="pt-2 flex justify-end">
                                    <Button 
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="h-12 px-8 bg-white text-black hover:bg-zinc-200 font-bold uppercase tracking-widest text-xs rounded-md shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all min-w-[160px]"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Sending...
                                            </span>
                                        ) : isSuccess ? (
                                            <span className="flex items-center gap-2 text-green-700">
                                                <Check className="w-4 h-4" />
                                                Sent
                                            </span>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
         </div>
      </section>

      {/* --- Section 3: Calendly (Compact Width) --- */}
      <section className="relative py-20 px-6 border-t border-white/5 bg-[#080808]">
         <div className="container mx-auto max-w-4xl">
            <div className="flex items-center justify-between mb-8">
                <div>
                   <h2 className="text-2xl font-medium tracking-tight text-white">Schedule Consultation</h2>
                   <p className="text-zinc-500 text-sm">Book a time directly on our calendar.</p>
                </div>
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-red-500" />
                </div>
            </div>

            <div className="bg-[#050505] border border-white/10 rounded-lg overflow-hidden h-[600px]">
               <InlineWidget
                  url="https://calendly.com/03arpit04"
                  styles={{ height: '100%', width: '100%' }}
                  pageSettings={{
                    backgroundColor: '050505',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: 'ef4444',
                    textColor: 'ffffff'
                  }}
               />
            </div>
         </div>
      </section>

    </div>
  );
}

// --- Helper Component ---

function ContactBox({ icon, title, value, action, href, highlight = false }: { icon: React.ReactNode, title: string, value: string, action: string, href: string, highlight?: boolean }) {
    return (
        <a href={href} target={href.startsWith('http') ? "_blank" : "_self"} className={`group relative border p-6 rounded-lg transition-all duration-300 flex items-center justify-between hover:translate-y-[-2px] ${highlight ? 'bg-red-950/10 border-red-500/20 hover:border-red-500/40' : 'bg-[#0A0A0A] border-white/10 hover:border-white/20'}`}>
            <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-md ${highlight ? 'bg-red-500/20 text-red-400' : 'bg-white/5 text-zinc-400 group-hover:text-white'}`}>
                    {icon}
                </div>
                <div>
                    <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-0.5">{title}</div>
                    <div className="text-sm font-medium text-white">{value}</div>
                </div>
            </div>
            <ArrowUpRight className={`w-4 h-4 transition-transform ${highlight ? 'text-red-500' : 'text-zinc-600 group-hover:text-white'}`} />
        </a>
    )
}