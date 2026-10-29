import React from "react";
import Link from "next/link";
import { Quote, MapPin, ArrowRight, Star } from "lucide-react";
import { HOMEPAGE_TESTIMONIALS } from "@/data/siteData";

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold text-[#B69A6A] uppercase tracking-wider">Verified Stories</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#142B3B] mt-1 tracking-tight">
              What Our Clients Say
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#687482]">
              Real experiences from borrowers who overcame debt stress and achieved legal relief with us.
            </p>
          </div>

          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#142B3B] hover:text-[#B69A6A] transition-colors self-start md:self-auto group"
          >
            <span>View All Client Reviews</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#B69A6A]" />
          </Link>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOMEPAGE_TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#F7F8FA] p-6 rounded-2xl border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-7 h-7 text-[#B69A6A]/40" />
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-[#263443] leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#142B3B]">{t.name}</h4>
                  <div className="flex items-center gap-1 text-[11px] text-[#687482] mt-0.5">
                    <MapPin className="w-3 h-3 text-[#B69A6A]" />
                    <span>{t.location}</span>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Settled
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
