import React from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { ALL_FAQS } from "@/data/siteData";

export default function FaqSection({ maxItems = 6 }: { maxItems?: number }) {
  const displayFaqs = maxItems ? ALL_FAQS.slice(0, maxItems) : ALL_FAQS;

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
            Clear, reliable answers to common concerns about debt resolution, legal rights, and RBI recovery guidelines.
          </p>
        </div>

        {/* Semantic FAQ Accordion List - 100% Crawlable for SEO & Users */}
        <div className="space-y-3.5">
          {displayFaqs.map((faq, idx) => (
            <details
              key={idx}
              open={idx === 0}
              className="group bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden transition-colors"
            >
              <summary className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer list-none select-none focus:outline-none">
                <span className="text-sm sm:text-base font-semibold text-[#142B3B] pr-4">
                  {idx + 1}. {faq.question}
                </span>
                <ChevronDown className="w-5 h-5 text-[#B69A6A] flex-shrink-0 transition-transform duration-200 group-open:rotate-180" />
              </summary>

              <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#263443] leading-relaxed border-t border-slate-100 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* Bottom CTA to all 25 FAQs */}
        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#142B3B] hover:text-[#B69A6A] transition-colors group"
          >
            <span>View All 25 Common Questions & Answers</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#B69A6A]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
