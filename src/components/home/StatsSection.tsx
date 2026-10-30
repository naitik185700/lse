import React from "react";
import { MessageSquare, Users, CreditCard, ThumbsUp, Star, ShieldCheck, Lock, Award } from "lucide-react";
import { BUSINESS_STATS } from "@/data/siteData";

const STAT_ICONS = [
  MessageSquare,
  Users,
  CreditCard,
  ThumbsUp
];

export default function StatsSection() {
  return (
    <section className="py-14 sm:py-20 bg-[#0B1B28] text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {BUSINESS_STATS.map((stat, idx) => {
            const Icon = STAT_ICONS[idx % STAT_ICONS.length];
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#B69A6A]/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-[#B69A6A]/20 flex items-center justify-center text-[#B69A6A] mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  {stat.display}
                </div>
                <div className="mt-2 text-xs sm:text-sm font-medium text-slate-300">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Verified Trust Signals: Badges, Reviews & Certifications */}
        <div className="trust-signals mt-12 pt-10 border-t border-slate-800">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold text-[#B69A6A] uppercase tracking-wider">
              Accredited Trust & Compliance Signals
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 1. Verified Customer Reviews */}
            <div className="trust-badge flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10" itemScope itemType="https://schema.org/AggregateRating">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div>
                <div className="flex items-center gap-1 font-bold text-white text-sm">
                  <span itemProp="ratingValue">4.9</span> / <span itemProp="bestRating">5</span>
                  <span className="text-xs text-amber-400 font-normal">★★★★★</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  <span itemProp="reviewCount">1,250</span>+ Verified Reviews
                </p>
              </div>
            </div>

            {/* 2. RBI Fair Practice Compliance Certification */}
            <div className="trust-badge flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">RBI Compliant</p>
                <p className="text-[11px] text-slate-300">Fair Practice Directions</p>
              </div>
            </div>

            {/* 3. ISO 27001 Data Security & SSL Certification */}
            <div className="trust-badge flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">ISO 27001 Data Security</p>
                <p className="text-[11px] text-slate-300">256-Bit SSL Encrypted</p>
              </div>
            </div>

            {/* 4. Bar Council Affiliated Legal Panel */}
            <div className="trust-badge flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-[#B69A6A]/20 text-[#B69A6A] flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white text-sm">Certified Legal Panel</p>
                <p className="text-[11px] text-slate-300">Bar Council Affiliated</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
