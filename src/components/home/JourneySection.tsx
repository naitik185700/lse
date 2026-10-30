import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldAlert, Scale, FileCheck, SearchCheck, MessageSquareQuote } from "lucide-react";
import { SETTLEMENT_JOURNEY_STEPS } from "@/data/siteData";

const STEP_ICONS = [
  SearchCheck,
  Scale,
  ShieldAlert,
  MessageSquareQuote,
  FileCheck
];

export default function JourneySection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F7F8FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142B3B]/10 text-[#142B3B] text-xs font-semibold mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#B69A6A]" />
            <span>Structured Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#142B3B] tracking-tight">
            Your Debt Resolution Journey
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#687482]">
            A step-by-step roadmap to reduce financial stress, stop collection pressure, and achieve written bank closure.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {SETTLEMENT_JOURNEY_STEPS.map((item, idx) => {
            const Icon = STEP_ICONS[idx % STEP_ICONS.length];
            return (
              <div 
                key={item.step}
                className="relative bg-white p-6 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between group hover:border-[#B69A6A] hover:shadow-md transition-all duration-200"
              >
                <div>
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-lg bg-[#142B3B] text-white flex items-center justify-center font-bold text-sm">
                      0{item.step}
                    </span>
                    <Icon className="w-5 h-5 text-[#B69A6A]" />
                  </div>

                  <h3 className="text-base font-bold text-[#142B3B] mb-2 group-hover:text-[#B69A6A] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#687482] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center text-[11px] font-semibold text-[#142B3B]">
                  <span>Phase 0{item.step}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA underneath */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#142B3B] hover:bg-[#0B1B28] text-white text-sm font-semibold px-7 py-3.5 rounded-lg transition-colors shadow-sm"
          >
            <span>Begin Your Case Assessment</span>
            <ArrowRight className="w-4 h-4 text-[#B69A6A]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
