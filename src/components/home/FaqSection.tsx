"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { ALL_FAQS } from "@/data/siteData";

export default function FaqSection({ maxItems = 5 }: { maxItems?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayFaqs = maxItems ? ALL_FAQS.slice(0, maxItems) : ALL_FAQS;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-[#F7F8FA] border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142B3B]/10 text-[#142B3B] text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#B69A6A]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#142B3B] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#687482]">
            Clear answers to common concerns about loan settlement, legal rights, and recovery guidelines.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {displayFaqs.map((faq, idx) => {
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
                    {faq.question}
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

        {/* View All FAQs Link if on homepage */}
        {maxItems && ALL_FAQS.length > maxItems && (
          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#142B3B] hover:text-[#B69A6A] transition-colors"
            >
              <span>View All 25 Common Questions & Answers</span>
              <ArrowRight className="w-4 h-4 text-[#B69A6A]" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
