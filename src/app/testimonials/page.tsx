import React from "react";
import type { Metadata } from "next";
import { Quote, MapPin, Star, ShieldCheck } from "lucide-react";
import { ALL_TESTIMONIALS, SITE_CONFIG } from "@/data/siteData";
import ConsultationCta from "@/components/home/ConsultationCta";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews | Loan Settlement Expert",
  description:
    "Read genuine reviews and success stories from clients across India who resolved unmanageable debt, stopped recovery harassment, and settled loans legally with Loan Settlement Expert.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/testimonials`,
  },
};

export default function TestimonialsPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#0B1B28] to-[#142B3B] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-[#B69A6A] border border-white/15 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Borrower Feedback</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Real Client Experiences With Loan Settlement Expert
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              These are genuine stories from borrowers who successfully reduced their loan burden and regained financial peace with our expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid (All 29 Testimonials) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#F7F8FA] p-6 rounded-2xl border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-[#B69A6A]/40" />
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#263443] leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#142B3B]">{t.name}</h4>
                  <div className="flex items-center gap-1 text-xs text-[#687482] mt-0.5">
                    <MapPin className="w-3 h-3 text-[#B69A6A]" />
                    <span>{t.location}</span>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                  Resolved
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ConsultationCta />
    </div>
  );
}
