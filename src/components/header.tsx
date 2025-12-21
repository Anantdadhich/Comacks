"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    setIsMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#050505]/90 backdrop-blur-md py-4 border-white/5"
          : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
       
        <div className="flex items-center gap-8">
          
         
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center gap-1">
              <div className="h-6 w-px mx-2 hidden sm:block"></div>
            </div>
          
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-white block">
              <span className="text-red-500">C</span>oma<span className="text-red-500">c</span>ks
            </span>
          </Link>

        
          <nav className="hidden md:flex items-center gap-3 text-[11px] font-bold tracking-widest uppercase text-zinc-500">
            <NavLink href="/" label="Home" />
            
            <span className="text-zinc-800">,</span>
            
           
            <div className="relative group">
              <button
                className="flex items-center gap-1 hover:text-white transition-colors font-bold"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                SERVICES
                <ChevronDown className="w-3 h-3" />
              </button>
              
              <div className="absolute top-full left-0 mt-6 w-48 bg-[#0A0A0A] border border-white/10 rounded-sm p-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="flex flex-col">
                  <DropdownLink href="/ai-automation" label="AI Automation" />
                  <DropdownLink href="/digital-solutions" label="Digital Solutions" />
                  <DropdownLink href="/smm" label="Social Media" />
                </div>
              </div>
            </div>

            <span className="text-zinc-800">,</span>
            <NavLink href="/case-studies" label="Case Studies" />

            <span className="text-zinc-800">,</span>
            <NavLink href="/about" label="About" />
          </nav>
        </div>

       
        <div className="flex items-center gap-6">
          <Link href="/contact" className="hidden md:block px-6 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white text-white hover:text-black transition-all duration-300 text-[10px] font-bold tracking-widest uppercase backdrop-blur-sm">
            Book Consultation
          </Link>

        
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-zinc-400 hover:text-white transition-colors p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

     
      <div
        className={`fixed inset-0 top-[72px] bg-[#050505] z-40 md:hidden transition-transform duration-300 flex flex-col border-t border-white/10 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-8 pb-12">
          
         
          <div className="flex flex-col gap-6 text-sm font-bold tracking-widest uppercase text-zinc-500">
            <MobileLink href="/" label="Home" onClick={() => setIsMenuOpen(false)} />
            
            <div className="flex flex-col gap-4 pl-4 border-l border-white/10 my-2">
               <span className="text-[10px] text-red-500 font-mono"> // SERVICES</span>
               <MobileLink href="/ai-automation" label="AI Automation" onClick={() => setIsMenuOpen(false)} />
               <MobileLink href="/digital-solutions" label="Digital Solutions" onClick={() => setIsMenuOpen(false)} />
               <MobileLink href="/smm" label="Social Media" onClick={() => setIsMenuOpen(false)} />
            </div>

            <MobileLink href="/case-studies" label="Case Studies" onClick={() => setIsMenuOpen(false)} />
            <MobileLink href="/about" label="About Us" onClick={() => setIsMenuOpen(false)} />
          </div>

       
          <div className="mt-auto pt-8 border-t border-white/10">
            <Link 
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 active:scale-[0.98] transition-transform duration-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <div className="text-center mt-6 text-[10px] text-zinc-600 font-mono uppercase tracking-widest">
                System Status: Online
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}



function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition-colors duration-300 ${
        isActive ? "text-white" : "hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
}

function DropdownLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block px-4 py-3 text-[10px] uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
    >
      {label}
    </Link>
  );
}

function MobileLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`transition-colors text-md ${isActive ? "text-white" : "hover:text-white"}`}
    >
      {label}
    </Link>
  );
}