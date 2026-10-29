import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export default function ConsultationCta() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-[#142B3B] via-[#0B1B28] to-[#142B3B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs text-[#B69A6A] border border-white/15 mb-4">
          <ShieldCheck className="w-4 h-4" />
          <span>Stop Harassment Calls & Settle Your Loans Legally</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight max-w-3xl mx-auto">
          Take the First Step Toward Permanent Debt Relief Today
        </h2>

        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          You don’t have to fight aggressive recovery agents alone. Speak with our legal debt advisors today for an honest, confidential review of your case.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#B69A6A] hover:bg-[#A38756] text-[#0B1B28] font-bold text-sm px-8 py-3.5 rounded-lg shadow-md transition-all hover:scale-105"
          >
            <span>Get Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-medium text-sm px-7 py-3.5 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4 text-[#B69A6A]" />
            <span>Call {SITE_CONFIG.phone}</span>
          </a>
        </div>

        <p className="mt-5 text-xs text-slate-400">
          No advance fees for consultation • 100% confidential • Non-judgmental guidance
        </p>

      </div>
    </section>
  );
}
