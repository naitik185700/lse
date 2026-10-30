import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, FileCheck, CheckCircle2, Scale, Users, Award, ChevronRight, Lock } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";
import ConsultationCta from "@/components/home/ConsultationCta";

export const metadata: Metadata = {
  title: "Editorial Policy & Content Integrity Standards | Loan Settlement Expert",
  description:
    "Learn about our editorial process, legal fact-checking standards, author credentials, and commitment to accurate, RBI-compliant debt resolution guidance.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/editorial-policy`,
  },
};

export default function EditorialPolicyPage() {
  const lastUpdated = "October 30, 2026";
  const publishedDate = "January 15, 2026";

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="bg-slate-100 border-b border-slate-200 py-3 text-xs text-[#687482]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#142B3B]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-[#142B3B]">Editorial Policy</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#0B1B28] to-[#142B3B] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-[#B69A6A] border border-white/15 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Editorial Integrity & Fact-Checking</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Editorial Policy & Review Standards
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Our commitment to accuracy, transparency, and borrower protection. Every guide, advisory article, and legal resource is rigorously fact-checked by experienced legal and financial professionals.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                Last Updated: <time dateTime="2026-10-30" className="font-semibold text-white">{lastUpdated}</time>
              </span>
              <span>•</span>
              <span>Originally Published: <time dateTime="2026-01-15">{publishedDate}</time></span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Policy Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-12">
        
        {/* 1. Core Mission */}
        <section className="space-y-4 border-b border-slate-100 pb-10">
          <div className="flex items-center gap-2 text-[#B69A6A]">
            <Scale className="w-5 h-5" />
            <h2 className="text-2xl font-bold text-[#142B3B]">1. Our Editorial Mission</h2>
          </div>
          <p className="text-sm sm:text-base text-[#263443] leading-relaxed">
            At Loan Settlement Expert, our primary mission is to empower distressed Indian borrowers with truthful, actionable, and legally compliant financial information. Because financial distress directly impacts family stability, mental health, and personal dignity, we treat all debt-related content under the highest standards of journalistic integrity and Your Money or Your Life (YMYL) principles.
          </p>
          <p className="text-sm sm:text-base text-[#263443] leading-relaxed">
            We never make false promises of magical loan waivers, credit-score guarantees, or unlawful bypasses. All recommendations strictly reflect the Reserve Bank of India (RBI) Fair Practices Code, the Banking Ombudsman Scheme, and statutory judicial rulings.
          </p>
        </section>

        {/* 2. Legal Review Board & Author Qualifications */}
        <section className="space-y-4 border-b border-slate-100 pb-10">
          <div className="flex items-center gap-2 text-[#B69A6A]">
            <Users className="w-5 h-5" />
            <h2 className="text-2xl font-bold text-[#142B3B]">2. Author Qualifications & Legal Review Board</h2>
          </div>
          <p className="text-sm sm:text-base text-[#263443] leading-relaxed">
            All content published on loansettlementexpert.in is either authored or rigorously vetted by certified legal and financial specialists with extensive domain expertise in Indian banking laws:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-base font-bold text-[#142B3B]">Legal Advisory Panel</h3>
              <p className="text-xs sm:text-sm text-[#687482] mt-1.5 leading-relaxed">
                Advocates registered with the Bar Council of India with 10+ years of litigation experience in consumer protection, Sarfaesi matters, arbitration replies, and civil debt disputes.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="text-base font-bold text-[#142B3B]">Senior Banking Consultants</h3>
              <p className="text-xs sm:text-sm text-[#687482] mt-1.5 leading-relaxed">
                Former senior banking recovery officers and financial analysts with practical knowledge of NPA recovery cycles, credit committees, and compromise settlement norms.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Fact-Checking & Primary Sources */}
        <section className="space-y-4 border-b border-slate-100 pb-10">
          <div className="flex items-center gap-2 text-[#B69A6A]">
            <FileCheck className="w-5 h-5" />
            <h2 className="text-2xl font-bold text-[#142B3B]">3. Fact-Checking & Verification Standards</h2>
          </div>
          <p className="text-sm sm:text-base text-[#263443] leading-relaxed">
            Before any article, guide, or calculator output is published, it undergoes a two-tier verification workflow:
          </p>
          <ul className="space-y-2.5 text-xs sm:text-sm text-[#263443]">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#B69A6A] flex-shrink-0 mt-0.5" />
              <span><strong>Official RBI Circular Verification:</strong> Every recovery guideline or limitation cited is verified against active Master Directions and Notifications published on rbi.org.in.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#B69A6A] flex-shrink-0 mt-0.5" />
              <span><strong>Judicial Citation Accuracy:</strong> Legal precedents cited regarding civil default, harassment protection, or Section 138 NI Act notices are cross-referenced with published High Court and Supreme Court judgments.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#B69A6A] flex-shrink-0 mt-0.5" />
              <span><strong>Mathematical Rigor:</strong> Calculator tools and settlement estimates use transparent, standard financial formulas and reflect realistic lender compromise settlement ranges (typically 30% to 50% discount based on hardship profile).</span>
            </li>
          </ul>
        </section>

        {/* 4. Corrections and Updates Policy */}
        <section className="space-y-4 border-b border-slate-100 pb-10">
          <div className="flex items-center gap-2 text-[#B69A6A]">
            <Award className="w-5 h-5" />
            <h2 className="text-2xl font-bold text-[#142B3B]">4. Corrections, Revisions & Annual Review</h2>
          </div>
          <p className="text-sm sm:text-base text-[#263443] leading-relaxed">
            Banking regulations, interest regimes, and CIBIL reporting guidelines evolve continuously. We maintain a quarterly audit schedule for all educational content. When regulatory updates occur (such as revisions to RBI recovery agent timing rules), our legal editorial board immediately reviews and updates relevant pages.
          </p>
          <p className="text-sm sm:text-base text-[#263443] leading-relaxed">
            If you identify any discrepancy or outdated guidance, please email our editorial desk at <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#142B3B] font-semibold underline">{SITE_CONFIG.email}</a>. Valid corrections are implemented within 48 business hours.
          </p>
        </section>

        {/* 5. Conflict of Interest & Commercial Disclosures */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-[#B69A6A]">
            <Lock className="w-5 h-5" />
            <h2 className="text-2xl font-bold text-[#142B3B]">5. Commercial Transparency & Disclaimers</h2>
          </div>
          <p className="text-sm sm:text-base text-[#263443] leading-relaxed">
            Loan Settlement Expert is an independent private consultancy and advisory firm. We are not a bank, NBFC, or government lending agency. We do not receive commissions from banks to push borrowers into disadvantageous terms. Our fiduciary duty is strictly to our clients—helping them negotiate lawful compromise settlements with dignified closure.
          </p>
        </section>

      </div>

      <ConsultationCta />
    </div>
  );
}
