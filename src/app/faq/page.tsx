"use client";

import React, { useState } from "react";
import { ChevronDown, Search, HelpCircle, PhoneCall, ArrowRight } from "lucide-react";
import { ALL_FAQS, SITE_CONFIG } from "@/data/siteData";
import ConsultationCta from "@/components/home/ConsultationCta";

export default function FaqPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = ALL_FAQS.filter(
    (f) =>
      f.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#0B1B28] to-[#142B3B] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-[#B69A6A] border border-white/15 mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Comprehensive Knowledge Base</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Frequently Asked Questions (FAQs)
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Clear answers to common questions about loan settlement, legality, eligibility, recovery practices, and borrower rights across India.
            </p>

            {/* Quick Search */}
            <div className="mt-8 relative max-w-xl">
              <input
                type="text"
                placeholder="Search by topic (e.g., legality, credit score, harassment, timeline)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white text-[#263443] placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#B69A6A]"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-4" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs List (25 FAQs) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200 p-8">
            <p className="text-base text-[#687482]">No matching questions found for &ldquo;{searchTerm}&rdquo;.</p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-3 text-sm font-semibold text-[#142B3B] hover:underline"
            >
              Clear search and view all questions
            </button>
          </div>
        ) : (
          <div className="space-y-3.5">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-semibold text-[#142B3B] pr-4">
                      {idx + 1}. {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#B69A6A] flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#263443] leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Still Have Questions Box */}
        <div className="mt-16 p-8 rounded-2xl bg-[#F7F8FA] border border-slate-200 text-center flex flex-col items-center">
          <PhoneCall className="w-10 h-10 text-[#B69A6A] mb-3" />
          <h3 className="text-xl font-bold text-[#142B3B]">Have a Specific Case Not Covered Here?</h3>
          <p className="mt-2 text-sm text-[#687482] max-w-md">
            Every loan contract and bank notice is unique. Contact our legal debt resolution team directly for free personal advice.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#142B3B] hover:bg-[#0B1B28] text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-sm"
            >
              <span>Ask Our Experts</span>
              <ArrowRight className="w-4 h-4 text-[#B69A6A]" />
            </a>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-white text-[#142B3B] border border-slate-300 hover:bg-slate-50 text-sm font-semibold px-6 py-3 rounded-lg"
            >
              <span>Call {SITE_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>

      <ConsultationCta />
    </div>
  );
}
