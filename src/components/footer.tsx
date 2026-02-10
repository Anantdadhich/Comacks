import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Plus, Radio } from 'lucide-react';


export function Footer() {
  return (
    <footer className="relative bg-[#050505] text-white border-t border-white/5 overflow-hidden">

      {/* --- Background Texture --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
      </div>

      <div className="container mx-auto px-8 py-20 relative z-10">

        {/* --- Main Content Row --- */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-12 mb-20 max-w-7xl mx-auto px-4">

          {/* Brand Column */}
          <div className="max-w-md">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <span className="text-sm font-bold tracking-[0.2em] uppercase">
                <span className="text-red-500">C</span>oma<span className="text-red-500">c</span>ks
              </span>
            </Link>

            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              AI-Powered Automation & Digital Solutions designed specifically for the growth of Healthcare Clinics.
            </p>

            <div className="flex items-center gap-4">
              {/* Social Links */}
              <SocialLink href="https://www.linkedin.com/company/Comacks/" label="LinkedIn" />
              <SocialLink href="https://www.instagram.com/comacks.growth/" label="Instagram" />
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-wrap gap-12 md:gap-24">



            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">System</h4>
              <ul className="space-y-4 text-sm text-zinc-500 font-medium">
                <li><Link href="/" className="hover:text-red-400 transition-colors">Home</Link></li>
                <li><Link href="/#how-it-works" className="hover:text-red-400 transition-colors">How It Works</Link></li>
                <li><Link href="/#components" className="hover:text-red-400 transition-colors">Components</Link></li>
                <li><Link href="/contact" className="hover:text-red-400 transition-colors">Request Diagnosis</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-zinc-500 font-medium">
                <li><Link href="/about" className="hover:text-red-400 transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-red-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-zinc-500 font-medium">
                <li><Link href="/privacy" className="hover:text-red-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-services" className="hover:text-red-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* --- Bottom Status Bar --- */}
        <div className="border-t border-white/5 pt-8 pl-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] uppercase tracking-widest text-zinc-600 font-mono">

          <div className="flex items-center gap-2">
            <p>&copy; {new Date().getFullYear()} Comacks.</p>
            <span className="hidden md:inline text-zinc-800">|</span>
            <p className="hidden md:inline">All rights reserved.</p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 text-[10px]  tracking-widest text-zinc-600 font-mono">
            <div className="flex items-center gap-2">
              <a href="mailto:arpit@comacks.com" className="hover:text-white transition-colors lowercase whitespace-nowrap">
                arpit@comacks.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a href="tel:+917303908344" className="hover:text-white transition-colors whitespace-nowrap">
                +91 7303908344
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Radio className="w-3 h-3 shrink-0" />
              <span className="whitespace-nowrap">New Delhi, India</span>
            </div>
          </div>

        </div>

        {/* Decorative Corner Markers */}
        <div className="absolute bottom-8 left-0 text-zinc-800 hidden md:block"><Plus strokeWidth={1} className="w-4 h-4" /></div>
        <div className="absolute bottom-8 right-0 text-zinc-800 hidden md:block"><Plus strokeWidth={1} className="w-4 h-4" /></div>

      </div>
    </footer>
  );
}

function SocialLink({ href, label }: { href: string, label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-zinc-500 uppercase tracking-wider hover:text-white flex items-center gap-1 transition-colors group">
      {label}
      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
    </a>
  )
}