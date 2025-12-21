"use client";

import React from 'react';
import { Shield, Lock, FileText, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';


export function PrivacyPolicy() {
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
              <Shield className="w-3.5 h-3.5 text-red-500" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 font-bold">
                Legal Protocol
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-4">
              Privacy Policy
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-zinc-500 font-mono">
               <span className="flex items-center gap-2">
                 <FileText className="w-4 h-4" />
                 Last Updated: August 1, 2023
               </span>
               <span className="h-4 w-px bg-white/10"></span>
               <span className="text-red-500">Document ID: LGL-PVY-01</span>
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
                          <TOCLink href="#intro" label="1. Introduction" />
                          <TOCLink href="#collect" label="2. Information Collection" />
                          <TOCLink href="#hipaa" label="3. Healthcare & HIPAA" active />
                          <TOCLink href="#use" label="4. How We Use Info" />
                          <TOCLink href="#disclosure" label="5. Disclosure" />
                          <TOCLink href="#rights" label="6. Your Rights" />
                          <TOCLink href="#security" label="7. Data Security" />
                          <TOCLink href="#contact" label="9. Contact Us" />
                       </nav>
                    </div>
                    
                    <div className="p-6 rounded-xl border border-white/5 bg-white/5">
                       <Lock className="w-6 h-6 text-zinc-400 mb-4" />
                       <p className="text-xs text-zinc-500 leading-relaxed">
                          This document outlines the security protocols and data handling procedures for the Comacks system.
                       </p>
                    </div>
                 </div>
              </aside>

              {/* --- Document Text --- */}
              <div className="flex-1 max-w-3xl prose prose-invert prose-p:text-zinc-400 prose-headings:text-white prose-li:text-zinc-400">
                 
                 {/* 1. Introduction */}
                 <section id="intro" className="mb-16">
                    <h2 className="text-2xl font-medium mb-6 flex items-center gap-3">
                       <span className="text-red-500 text-sm font-mono font-bold">01</span>
                       Introduction
                    </h2>
                    <p>
                       Welcome to Comacks. We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                    </p>
                    <p>
                       Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
                    </p>
                 </section>

                 {/* 2. Information We Collect */}
                 <section id="collect" className="mb-16">
                    <h2 className="text-2xl font-medium mb-6 flex items-center gap-3">
                       <span className="text-red-500 text-sm font-mono font-bold">02</span>
                       Information We Collect
                    </h2>
                    <p>We may collect personal information that you voluntarily provide to us when you:</p>
                    <ul className="grid md:grid-cols-2 gap-2 my-6 list-none pl-0">
                       <ListItem>Fill out forms on our website</ListItem>
                       <ListItem>Register for an account</ListItem>
                       <ListItem>Subscribe to our newsletter</ListItem>
                       <ListItem>Request marketing materials</ListItem>
                       <ListItem>Participate in surveys/contests</ListItem>
                       <ListItem>Contact us with inquiries</ListItem>
                    </ul>
                    <p>The personal information we collect may include:</p>
                    <ul className="bg-[#0A0A0A] border border-white/10 rounded-lg p-6 space-y-2 list-none m-0">
                       <ListItem>Name, email address, phone number, and business name</ListItem>
                       <ListItem>Billing information and transaction data</ListItem>
                       <ListItem>Login credentials</ListItem>
                       <ListItem>User preferences and profile information</ListItem>
                       <ListItem>Information you provide when contacting support</ListItem>
                    </ul>
                 </section>

                 {/* 3. HIPAA Compliance (Highlighted) */}
                 <section id="hipaa" className="mb-16">
                    <div className="bg-red-950/10 border border-red-500/20 rounded-xl p-8 relative overflow-hidden">
                       <div className="absolute top-0 right-0 p-4 opacity-10">
                          <Shield className="w-24 h-24 text-red-500" />
                       </div>
                       <h2 className="text-2xl font-medium mb-6 flex items-center gap-3 relative z-10 text-white">
                          <span className="text-red-500 text-sm font-mono font-bold">03</span>
                          Healthcare Data and HIPAA Compliance
                       </h2>
                       <p className="text-zinc-300 relative z-10">
                          As a service provider to healthcare clinics, we take the privacy and security of healthcare data very seriously. We comply with all applicable healthcare privacy laws, including <strong>HIPAA</strong> when applicable. 
                       </p>
                       <p className="text-zinc-300 relative z-10 mt-4">
                          We do not access, store, or process protected health information (PHI) unless explicit consent is provided and proper safeguards are in place.
                       </p>
                    </div>
                 </section>

                 {/* 4. How We Use Your Information */}
                 <section id="use" className="mb-16">
                    <h2 className="text-2xl font-medium mb-6 flex items-center gap-3">
                       <span className="text-red-500 text-sm font-mono font-bold">04</span>
                       How We Use Your Information
                    </h2>
                    <p>We may use the information we collect from you for various purposes, including:</p>
                    <ul className="space-y-3 list-none pl-0">
                       <ListItem>Providing, operating, and maintaining our services</ListItem>
                       <ListItem>Improving, personalizing, and expanding our services</ListItem>
                       <ListItem>Understanding how you use our services</ListItem>
                       <ListItem>Developing new products, services, features, and functionality</ListItem>
                       <ListItem>Communicating with you about our services and updates</ListItem>
                       <ListItem>Preventing fraudulent activities and ensuring security</ListItem>
                    </ul>
                 </section>

                 {/* 5. Disclosure */}
                 <section id="disclosure" className="mb-16">
                    <h2 className="text-2xl font-medium mb-6 flex items-center gap-3">
                       <span className="text-red-500 text-sm font-mono font-bold">05</span>
                       Disclosure of Your Information
                    </h2>
                    <p>We may share your information with third parties in certain situations, including:</p>
                    <ul className="list-disc pl-6 space-y-2 text-zinc-400 marker:text-red-500">
                       <li>With service providers who perform services on our behalf</li>
                       <li>To comply with legal obligations</li>
                       <li>To protect and defend our rights and property</li>
                       <li>With your consent or at your direction</li>
                       <li>In connection with a business transfer (merger or acquisition)</li>
                    </ul>
                 </section>

                 {/* 6. Your Rights */}
                 <section id="rights" className="mb-16">
                    <h2 className="text-2xl font-medium mb-6 flex items-center gap-3">
                       <span className="text-red-500 text-sm font-mono font-bold">06</span>
                       Your Rights and Choices
                    </h2>
                    <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                        <RightCard title="Access" desc="Request a copy of your personal data." />
                        <RightCard title="Rectify" desc="Correct inaccurate information." />
                        <RightCard title="Delete" desc="Request removal of your data." />
                        <RightCard title="Restrict" desc="Limit processing of your data." />
                    </div>
                  
                 </section>

                 {/* 7 & 8 Security & Changes */}
                 <section id="security" className="mb-16">
                    <div className="space-y-12">
                       <div>
                          <h2 className="text-2xl font-medium mb-4 flex items-center gap-3">
                             <span className="text-red-500 text-sm font-mono font-bold">07</span>
                             Data Security
                          </h2>
                          <p>
                             We have implemented appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                          </p>
                       </div>
                       
                       <div>
                          <h2 className="text-2xl font-medium mb-4 flex items-center gap-3">
                             <span className="text-red-500 text-sm font-mono font-bold">08</span>
                             Changes to This Policy
                          </h2>
                          <p>
                             We may update this Privacy Policy from time to time. The updated version will be effective as soon as it is accessible. We encourage you to review this Privacy Policy frequently.
                          </p>
                       </div>
                    </div>
                 </section>

                 {/* 9. Contact */}
                 <section id="contact" className="border-t border-white/10 pt-16">
                    <h2 className="text-2xl font-medium mb-8">Contact Us</h2>
                    <p className="mb-8">If you have any questions about this Privacy Policy, please contact us:</p>
                    
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

function RightCard({ title, desc }: { title: string, desc: string }) {
    return (
       <div className="bg-white/5 border border-white/5 p-4 rounded-lg">
          <h4 className="text-white font-medium mb-1">{title}</h4>
          <p className="text-xs text-zinc-500">{desc}</p>
       </div>
    )
}

function ContactBox({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) {
   const Content = () => (
      <>
         <div className="text-red-500 mb-3">{icon}</div>
         <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-1">{label}</div>
         <div className="text-white font-medium">{value}</div>
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