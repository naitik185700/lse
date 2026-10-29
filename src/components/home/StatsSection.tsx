import React from "react";
import { MessageSquare, Users, CreditCard, ThumbsUp } from "lucide-react";
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

      </div>
    </section>
  );
}
