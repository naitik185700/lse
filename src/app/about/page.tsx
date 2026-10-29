import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Scale, Award, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { ABOUT_PAGE_SECTIONS, SITE_CONFIG } from "@/data/siteData";
import ConsultationCta from "@/components/home/ConsultationCta";

export const metadata: Metadata = {
  title: "About Us | Loan Settlement Expert India",
  description:
    "Learn about Loan Settlement Expert, our story, mission, and legal advisory commitment to helping borrowers resolve unmanageable debt lawfully and stop recovery harassment.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-r from-[#0B1B28] to-[#142B3B] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-[#B69A6A] border border-white/15 mb-3">
              <Scale className="w-3.5 h-3.5" />
              <span>Legal Advisory & Debt Resolution</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              About Loan Settlement Expert
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Dedicated to restoring financial dignity, protecting borrower rights under RBI norms, and delivering lawful debt settlement solutions across India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">
        {ABOUT_PAGE_SECTIONS.map((sec, idx) => (
          <section key={idx} className="border-b border-slate-100 pb-12 last:border-b-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#142B3B] mb-4">
              {sec.title}
            </h2>
            <div className="w-16 h-1 bg-[#B69A6A] rounded-full mb-6" />

            {sec.paragraphs.length > 0 && (
              <div className="space-y-4 text-sm sm:text-base text-[#263443] leading-relaxed">
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            )}

            {sec.items && sec.items.length > 0 && (
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sec.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F7F8FA] border border-slate-200 text-xs sm:text-sm text-[#263443]">
                    <CheckCircle2 className="w-4 h-4 text-[#B69A6A] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* Core Principles */}
        <div className="bg-[#F7F8FA] p-8 sm:p-10 rounded-2xl border border-slate-200">
          <h3 className="text-xl font-bold text-[#142B3B] mb-6 text-center">
            Our Guiding Pillars of Service
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
              <ShieldCheck className="w-8 h-8 text-[#B69A6A] mx-auto mb-3" />
              <h4 className="text-base font-semibold text-[#142B3B]">Strict Compliance</h4>
              <p className="text-xs text-[#687482] mt-2">
                Every settlement proposal strictly aligns with RBI fair recovery codes and lawful procedures.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
              <Users className="w-8 h-8 text-[#B69A6A] mx-auto mb-3" />
              <h4 className="text-base font-semibold text-[#142B3B]">Client Dignity First</h4>
              <p className="text-xs text-[#687482] mt-2">
                We handle every borrower with empathy, absolute confidentiality, and complete non-judgment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
              <Award className="w-8 h-8 text-[#B69A6A] mx-auto mb-3" />
              <h4 className="text-base font-semibold text-[#142B3B]">Documented Closure</h4>
              <p className="text-xs text-[#687482] mt-2">
                No false promises. We ensure genuine settlement letters and bank NOCs are delivered.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ConsultationCta />
    </div>
  );
}
