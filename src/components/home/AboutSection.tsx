import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Scale, Award } from "lucide-react";
import { ABOUT_HOMEPAGE_PARAGRAPHS } from "@/data/siteData";
import ZohoForm from "@/components/forms/ZohoForm";

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142B3B]/10 text-[#142B3B] text-xs font-semibold mb-3">
            <Scale className="w-3.5 h-3.5 text-[#B69A6A]" />
            <span>Trusted Debt Resolution Company</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#142B3B] tracking-tight">
            About Loan Settlement Expert
          </h2>
          <div className="w-20 h-1 bg-[#B69A6A] mt-3 rounded-full" />
        </div>

        {/* 2-Column Layout: Original Copy (7 cols) + Official Zoho Form (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Original 6 Paragraphs verbatim */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-[#263443] leading-relaxed">
            {ABOUT_HOMEPAGE_PARAGRAPHS.map((paragraph, idx) => (
              <p key={idx} className="text-justify sm:text-left">
                {paragraph}
              </p>
            ))}

            {/* Core Values / Features row */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-200">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <ShieldCheck className="w-6 h-6 text-[#B69A6A] mb-2" />
                <h4 className="text-sm font-semibold text-[#142B3B]">Confidential & Ethical</h4>
                <p className="text-xs text-[#687482] mt-1">
                  Individual attention and strict non-disclosure for every case.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <Scale className="w-6 h-6 text-[#B69A6A] mb-2" />
                <h4 className="text-sm font-semibold text-[#142B3B]">Legal-First Approach</h4>
                <p className="text-xs text-[#687482] mt-1">
                  Clear understanding of borrower rights under RBI recovery framework.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <Award className="w-6 h-6 text-[#B69A6A] mb-2" />
                <h4 className="text-sm font-semibold text-[#142B3B]">Documented Closure</h4>
                <p className="text-xs text-[#687482] mt-1">
                  Full assistance until settlement letter and NOC are delivered.
                </p>
              </div>
            </div>

            {/* Link to full About page */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#142B3B] hover:text-[#B69A6A] transition-colors group"
              >
                <span>Read our complete story, mission & vision</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#B69A6A]" />
              </Link>
            </div>
          </div>

          {/* Right: Exact Official Zoho Form from Existing Web */}
          <div className="lg:col-span-5 w-full">
            <ZohoForm 
              title="Consult Our Experts Now"
              subtitle="Facing issues with loan repayments or recovery calls? Submit your details directly to our senior advisors."
            />
          </div>

        </div>

      </div>
    </section>
  );
}
