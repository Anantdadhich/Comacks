"use client";

import React from 'react';
import { Scale, FileText, Gavel, AlertCircle, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';


export function TermsAndConditions() {
  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-red-900/30 overflow-x-hidden pt-24">
      
      {/* --- Header Section --- */}
      <section className="relative py-20 px-6 border-b border-white/5">
        
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-red-900/10 blur-[120px] rounded-full mix-blend-screen"></div>
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-start gap-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <Scale className="w-3.5 h-3.5 text-red-500" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">
                Legal Protocol
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-4">
              Terms & Conditions
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-zinc-500 font-mono">
               <span className="flex items-center gap-2">
                 <FileText className="w-4 h-4" />
                 Last Updated: August 1, 2023
               </span>
               <span className="h-4 w-px bg-white/10"></span>
               <span className="text-red-500">Document ID: LGL-TNC-01</span>
            </div>

          </div>
        </div>
      </section>

      {/* --- Main Content Layout --- */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="flex flex-col lg:flex-row gap-16">
              
              {/* --- Sidebar (Table of Contents) --- */}
              <aside className="hidden lg:block w-64 shrink-0">
                 <div className="sticky top-32 space-y-8">
                    <div>
                       <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Contents</h3>
                       <nav className="space-y-1 border-l border-white/10">
                          <TOCLink href="#agreement" label="1. Agreement" />
                          <TOCLink href="#services" label="2. Services" />
                          <TOCLink href="#ip" label="3. Intellectual Property" />
                          <TOCLink href="#user" label="4. User Reps" />
                          <TOCLink href="#payments" label="5. Payments & Fees" />
                          <TOCLink href="#refund" label="6. Refund Policy" active />
                          <TOCLink href="#liability" label="7. Liability" />
                          <TOCLink href="#termination" label="8. Termination" />
                          <TOCLink href="#contact" label="11. Contact Us" />
                       </nav>
                    </div>
                    
                    <div className="p-6 rounded-xl border border-white/5 bg-white/5">
                       <Gavel className="w-6 h-6 text-zinc-400 mb-4" />
                       <p className="text-xs text-zinc-500 leading-relaxed">
                          By accessing our services, you agree to these binding legal terms.
                       </p>
                    </div>
                 </div>
              </aside>

              {/* --- Document Text --- */}
              <div className="flex-1 max-w-3xl prose prose-invert prose-p:text-zinc-400 prose-headings:text-white prose-li:text-zinc-400">
                 
                 {/* 1. Agreement */}
                 <section id="agreement" className="mb-16">
                    <h2 className="text-2xl font-medium mb-6 flex items-center gap-3">
                       <span className="text-red-500 text-sm font-mono font-bold">01</span>
                       Agreement to Terms
                    </h2>
                    <p>
                       These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Comacks ("we," "us" or "our"), concerning your access to and use of our website and services.
                    </p>
                    <p>
                       By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these Terms, then you may not access our services.
                    </p>
                 </section>

                 {/* 2. Services */}
                 <section id="services" className="mb-16">
                    <h2 className="text-2xl font-medium mb-6 flex items-center gap-3">
                       <span className="text-red-500 text-sm font-mono font-bold">02</span>
                       Services
                    </h2>
                    <p>
                       Comacks provides AI-powered automation systems, digital solutions, and social media marketing services specifically for healthcare clinics in Australia. Our services include, but are not limited to:
                    </p>
                    <ul className="bg-[#0A0A0A] border border-white/10 rounded-lg p-6 space-y-2 list-none m-0 mt-4">
                       <ListItem>AI automation systems for patient acquisition and retention</ListItem>
                       <ListItem>Website and landing page development</ListItem>
                       <ListItem>CRM integration and management</ListItem>
                       <ListItem>Social media marketing and paid advertising campaigns</ListItem>
                       <ListItem>Content creation and strategy</ListItem>
                    </ul>
                 </section>

                 {/* 3. Intellectual Property */}
                 <section id="ip" className="mb-16">
                    <h2 className="text-2xl font-medium mb-6 flex items-center gap-3">
                       <span className="text-red-500 text-sm font-mono font-bold">03</span>
                       Intellectual Property
                    </h2>
                    <p>
                       Unless otherwise indicated, the website and all content, features, and functionality are owned by Comacks, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                    </p>
                    <p>
                       You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our materials without our express written consent.
                    </p>
                 </section>

                 {/* 4. User Representations */}
                 <section id="user" className="mb-16">
                    <h2 className="text-2xl font-medium mb-6 flex items-center gap-3">
                       <span className="text-red-500 text-sm font-mono font-bold">04</span>
                       User Representations
                    </h2>
                    <p>By using our services, you represent and warrant that:</p>
                    <ul className="grid md:grid-cols-1 gap-2 my-6 list-none pl-0">
                       <ListItem>You have the legal capacity to enter into these Terms</ListItem>
                       <ListItem>You are at least 18 years of age</ListItem>
                       <ListItem>You will not use our services for any illegal or unauthorized purpose</ListItem>
                       <ListItem>Your use of our services will not violate any applicable law or regulation</ListItem>
                       <ListItem>All information you provide is true, accurate, current, and complete</ListItem>
                    </ul>
                 </section>

                 {/* 5. Payments */}
                 <section id="payments" className="mb-16">
                    <h2 className="text-2xl font-medium mb-6 flex items-center gap-3">
                       <span className="text-red-500 text-sm font-mono font-bold">05</span>
                       Payments and Fees
                    </h2>
                    <p>
                       We offer various service packages with different pricing structures. All fees are quoted in Australian Dollars (AUD) and are subject to change with notice. Payment terms will be specified in your service agreement.
                    </p>
                    <p>
                       If you fail to make any payment when due, we reserve the right to suspend or terminate your services.
                    </p>
                 </section>

                 {/* 6. Refund Policy (Highlighted) */}
                 <section id="refund" className="mb-16">
                    <div className="bg-red-950/10 border border-red-500/20 rounded-xl p-8 relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-4 opacity-10">
                          <CheckCircle2 className="w-24 h-24 text-red-500" />
                       </div>
                       <h2 className="text-2xl font-medium mb-6 flex items-center gap-3 relative z-10 text-white">
                          <span className="text-red-500 text-sm font-mono font-bold">06</span>
                          Refund Policy
                       </h2>
                       <p className="text-zinc-300 relative z-10 leading-relaxed">
                          Our <strong>"No Results, No Pay"</strong> guarantee means that if we fail to deliver the agreed-upon results specified in your service agreement, you may be eligible for a refund or service credits as detailed in your specific agreement. 
                       </p>
                       <p className="text-zinc-400 text-sm mt-4 relative z-10">
                          *All refund requests will be evaluated on a case-by-case basis according to the terms set forth in your individual contract.
                       </p>
                    </div>
                 </section>

                 {/* 7. Liability */}
                 <section id="liability" className="mb-16">
                    <h2 className="text-2xl font-medium mb-6 flex items-center gap-3">
                       <span className="text-red-500 text-sm font-mono font-bold">07</span>
                       Limitation of Liability
                    </h2>
                    <p>
                       To the maximum extent permitted by law, Comacks and its affiliates, officers, employees, agents, partners, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation:
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6 mb-6">
                        <AlertBox text="Loss of profits" />
                        <AlertBox text="Loss of data or use" />
                        <AlertBox text="Loss of goodwill" />
                        <AlertBox text="Intangible losses" />
                    </div>
                    <p className="text-sm text-zinc-500">
                       This applies to damages resulting from your access to or use of the services, any third-party conduct, or unauthorized access to your transmissions.
                    </p>
                 </section>

                 {/* 8, 9, 10 Combined */}
                 <section id="termination" className="mb-16 space-y-12">
                    <div>
                        <h2 className="text-2xl font-medium mb-4 flex items-center gap-3">
                            <span className="text-red-500 text-sm font-mono font-bold">08</span>
                            Term and Termination
                        </h2>
                        <p>
                            We may terminate or suspend your access immediately, without prior notice, for any reason, including breach of Terms. Upon termination, your right to use our services will immediately cease.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-medium mb-4 flex items-center gap-3">
                            <span className="text-red-500 text-sm font-mono font-bold">09</span>
                            Governing Law
                        </h2>
                        <p>
                            These Terms shall be governed by and construed in accordance with the laws of Australia, without regard to its conflict of law principles.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-medium mb-4 flex items-center gap-3">
                            <span className="text-red-500 text-sm font-mono font-bold">10</span>
                            Changes to Terms
                        </h2>
                        <p>
                            We reserve the right to modify these Terms at any time. Material changes will be notified via email or website notice. Continued use implies acceptance.
                        </p>
                    </div>
                 </section>

                 {/* 11. Contact */}
                 <section id="contact" className="border-t border-white/10 pt-16">
                    <h2 className="text-2xl font-medium mb-8">11. Contact Us</h2>
                    <p className="mb-8">If you have any questions about these Terms, please contact us:</p>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                       <ContactBox icon={<Mail />} label="Email" value="arpit@comacks.com" href="mailto:arpit@comacks.com" />
                       <ContactBox icon={<Phone />} label="Phone" value="+91 7303908344" href="tel:+917303908344" />
                       <ContactBox icon={<MapPin />} label="Address" value="New Delhi" />
                    </div>
                 </section>

              </div>
           </div>
        </div>
      </section>

    </div>
  );
}

// --- Sub Components ---

function TOCLink({ href, label, active = false }: { href: string, label: string, active?: boolean }) {
    return (
       <a 
          href={href} 
          className={`block pl-4 py-2 border-l-2 text-sm transition-all ${
             active 
             ? "border-red-500 text-white font-medium" 
             : "border-transparent text-zinc-500 hover:text-zinc-300 hover:border-zinc-700"
          }`}
       >
          {label}
       </a>
    )
}

function ListItem({ children }: { children: React.ReactNode }) {
    return (
       <li className="flex items-start gap-3 text-zinc-400">
          <div className="mt-1.5 w-1.5 h-1.5 bg-red-500/50 rounded-full shrink-0"></div>
          <span>{children}</span>
       </li>
    )
}

function AlertBox({ text }: { text: string }) {
    return (
       <div className="bg-white/5 border border-white/5 p-3 rounded flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-500" />
          <span className="text-xs text-zinc-300">{text}</span>
       </div>
    )
}

function ContactBox({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) {
   const Content = () => (
      <>
         <div className="text-red-500 mb-3">{icon}</div>
         <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-1">{label}</div>
         <div className="text-white font-medium break-all">{value}</div>
      </>
   );

   if (href) {
      return (
         <a href={href} className="block bg-[#0A0A0A] border border-white/10 p-6 rounded-xl hover:border-red-500/30 transition-colors">
            <Content />
         </a>
      )
   }

   return (
      <div className="bg-[#0A0A0A] border border-white/10 p-6 rounded-xl">
         <Content />
      </div>
   )
}