import React from "react";
import type { Metadata } from "next";
import { Scale, CheckCircle2 } from "lucide-react";
import { TERMS_SECTIONS, SITE_CONFIG } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Terms and Conditions | Loan Settlement Expert",
  description:
    "Review the terms, conditions, legal disclaimers, and user agreements governing the advisory services provided by Loan Settlement Expert.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/terms-and-conditions`,
  },
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#0B1B28] to-[#142B3B] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-[#B69A6A] border border-white/15 mb-3">
              <Scale className="w-3.5 h-3.5" />
              <span>Legal Disclaimers & User Agreement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Terms and Conditions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Please read these terms and conditions carefully before using our website or engaging our loan settlement and financial advisory services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Terms Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-12">
        {TERMS_SECTIONS.map((sec, idx) => (
          <section key={idx} className="border-b border-slate-100 pb-10 last:border-b-0">
            <h2 className="text-xl sm:text-2xl font-bold text-[#142B3B] mb-4">
              {sec.title}
            </h2>

            {sec.paragraphs.length > 0 && (
              <div className="space-y-3.5 text-sm sm:text-base text-[#263443] leading-relaxed">
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            )}

            {sec.items && sec.items.length > 0 && (
              <ul className="mt-4 space-y-2">
                {sec.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#263443]">
                    <CheckCircle2 className="w-4 h-4 text-[#B69A6A] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#687482] leading-relaxed">
          <p className="font-semibold text-[#142B3B] mb-1">Notice to Users:</p>
          <p>{SITE_CONFIG.disclaimer}</p>
        </div>
      </div>
    </div>
  );
}
