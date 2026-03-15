"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="bg-white text-black hover:bg-zinc-200 text-[10px] md:text-xs tracking-widest uppercase font-bold px-4 py-2 flex items-center gap-2 transition-colors rounded"
    >
      <Printer className="w-4 h-4" /> Export PDF
    </button>
  );
}
