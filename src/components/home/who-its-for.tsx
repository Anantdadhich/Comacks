"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export function WhoItsFor() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-rose-950/10 border border-rose-900/20"
          >
            <div className="w-12 h-12 rounded-full bg-rose-500/20 flex items-center justify-center mb-6">
              <X className="w-6 h-6 text-rose-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Who This Is Not For</h3>
            <p className="text-zinc-400 text-lg">
              Not for clinics wanting only "Facebook Ads" or cheap lead generation without tracking the actual ROI.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-emerald-950/10 border border-emerald-900/20"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
              <Check className="w-6 h-6 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Who This Is For</h3>
            <p className="text-zinc-400 text-lg">
              Good for growth clinics, multi-chair practices, and ambitious founders looking for systemic tracking and revenue scaling.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
