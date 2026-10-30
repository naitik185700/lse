import React from "react";
import Link from "next/link";
import { BookOpen, HelpCircle, Shield, ArrowRight, Scale, CheckCircle2, Calendar } from "lucide-react";

export default function SettlementGuideSection() {
  const comparisonItems = [
    {
      title: "Loan Default",
      status: "Unresolved",
      desc: "Penalties grow daily. Recovery agents call constantly, and lenders initiate legal action. Credit scores fall sharply with no relief in sight.",
      color: "border-rose-200 bg-rose-50/50"
    },
    {
      title: "Loan Restructuring",
      status: "Extended Debt",
      desc: "Tenure increases and total interest rises. Monthly payments continue for years. This option rarely helps if your income has permanently dropped.",
      color: "border-amber-200 bg-amber-50/50"
    },
    {
      title: "Legal Compromise Settlement",
      status: "Permanent Relief",
      desc: "A negotiated one-time payment closes the debt. Significant waivers on interest and penalties are granted, followed by an official No Dues Certificate.",
      color: "border-emerald-200 bg-emerald-50/50"
    }
  ];

  const essentialDocuments = [
    {
      step: "01",
      name: "Written Settlement Sanction Letter",
      detail: "Must be issued on official bank letterhead with an authorized officer signature. It must state the agreed payment amount and deadline."
    },
    {
      step: "02",
      name: "Waiver Confirmation Clause",
      detail: "The letter must clearly declare that upon payment of the agreed sum, the lender waives all remaining principal, interest, and late fees."
    },
    {
      step: "03",
      name: "Official Bank Payment Receipt",
      detail: "Always pay directly to the bank account via RTGS, NEFT, or net banking. Never hand cash or cheques to collection agents."
    },
    {
      step: "04",
      name: "No Dues Certificate (NOC)",
      detail: "Within 30 to 45 days after payment, the lender issues a formal NOC confirming the account is closed with zero pending dues."
    }
  ];

  const legalInsights = [
    {
      title: "Civil Default vs. Criminal Offense",
      summary: "Inability to pay due to financial distress is purely a civil dispute, not a crime.",
      detail: "Under Indian jurisprudence and rulings of the Hon'ble Supreme Court, loan default arising from genuine economic distress is a civil matter. Recovery agents often use intimidation, falsely threatening arrest or police intervention. In reality, police cannot arrest an individual for non-payment of an unsecured personal loan or credit card bill. Our advocates immediately intervene to stop illegal threats."
    },
    {
      title: "RBI Fair Practices Code Protections",
      summary: "Strict guidelines govern how banks and recovery agencies may interact with borrowers.",
      detail: "The Reserve Bank of India mandates that recovery agents must not visit unannounced outside 8:00 AM to 7:00 PM. They are strictly prohibited from contacting your relatives, neighbours, or employers. Any verbal abuse, harassment, or public humiliation violates RBI master directions and can be reported to the Banking Ombudsman."
    },
    {
      title: "How One-Time Settlement (OTS) Works",
      summary: "Lenders agree to close non-performing accounts for a realistic, discounted lump sum.",
      detail: "When an account remains overdue for over 90 days, it is classified as a Non-Performing Asset (NPA). Banks establish internal compromise settlement policies allowing credit committees to waive accumulated interest, penal charges, and a portion of principal. We negotiate this waiver based on documented proof of your genuine financial crisis."
    },
    {
      title: "Rebuilding Credit After Settlement",
      summary: "Settling stops ongoing credit deterioration and opens the path to financial recovery.",
      detail: "While a settled account reflects as 'Settled' on CIBIL reports, it permanently stops compounding penalties, legal proceedings, and default escalation. After receiving your No Dues Certificate, you can rebuild your credit score systematically by obtaining a secured credit card backed by a fixed deposit and maintaining pristine repayment habits."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142B3B]/10 text-[#142B3B] text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#B69A6A]" />
            <span>Comprehensive Borrower Guide<span className="sr-only">.</span></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#142B3B] tracking-tight">
            How Debt Settlement Works in India<span className="sr-only">.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#687482] leading-relaxed">
            Understand the legal process of one-time settlements, your statutory safeguards under RBI directions, and the crucial steps to permanent debt freedom.
          </p>
        </div>

        {/* E-E-A-T Author Byline, Credentials, Content Dates & Editorial Policy */}
        <div 
          className="author-byline bg-[#F7F8FA] border border-slate-200 rounded-2xl p-6 sm:p-7 mb-14 shadow-xs" 
          itemScope 
          itemType="https://schema.org/Person" 
          itemProp="author"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-5 border-b border-slate-200">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-[#142B3B] text-[#B69A6A] font-bold text-lg flex items-center justify-center flex-shrink-0 shadow-xs">
                RV
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                  <span className="text-xs font-semibold text-[#687482] uppercase tracking-wider">Author Byline & Legal Review</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified Legal Expert
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#142B3B]" itemProp="name">
                  Adv. Rajesh Verma, Senior Financial & Legal Debt Specialist
                </h3>
                <p className="text-xs text-[#687482]" itemProp="jobTitle">
                  LL.B., Former Banking Legal Advisor • Bar Council Registered • 15+ Years Domain Experience
                </p>
              </div>
            </div>

            {/* Content Publication & Modification Dates */}
            <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-1 text-xs text-[#687482] flex-shrink-0">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#B69A6A]" />
                <span>Last Modified: <time dateTime="2026-10-30" itemProp="dateModified" className="font-semibold text-[#142B3B]">October 30, 2026</time></span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px]">
                <span>Published: <time dateTime="2026-01-15" itemProp="datePublished">January 15, 2026</time></span>
              </div>
            </div>
          </div>

          {/* Author Expertise Signals & Editorial Policy */}
          <div className="pt-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-xs text-[#263443] leading-relaxed">
            <p itemProp="description" className="max-w-3xl">
              <strong className="text-[#142B3B]">Author Expertise & Bio:</strong> Specializes in consumer financial protection, RBI Fair Practice Code compliance, and structured compromise settlements with banks and NBFCs across India. Has successfully guided 5,000+ borrowers through lawful loan resolutions and debt relief.
            </p>
            <Link 
              href="/editorial-policy" 
              className="inline-flex items-center gap-1 text-xs font-bold text-[#142B3B] hover:text-[#B69A6A] underline underline-offset-4 flex-shrink-0 transition-colors"
            >
              <span>Our Editorial Policy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3-Way Comparison Grid */}
        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-[#142B3B] mb-6 text-center">
            Comparing Your Options: Default vs. Restructuring vs. Settlement<span className="sr-only">.</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comparisonItems.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border ${item.color} flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-lg font-bold text-[#142B3B]">{item.title}<span className="sr-only">.</span></p>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-[#142B3B]">
                      {item.status}<span className="sr-only">.</span>
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#263443] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Essential Settlement Documents */}
        <div className="bg-[#F7F8FA] p-8 sm:p-10 rounded-2xl border border-slate-200 mb-16">
          <div className="max-w-3xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#142B3B]">
              4 Mandatory Documents for a Lawful Settlement<span className="sr-only">.</span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#687482] leading-relaxed">
              Never accept verbal promises from collection callers. A settlement is only legally binding when backed by official banking paperwork.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {essentialDocuments.map((doc, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#B69A6A] tracking-wider block mb-2">
                    DOCUMENT {doc.step}<span className="sr-only">.</span>
                  </span>
                  <p className="text-sm font-bold text-[#142B3B] mb-2 leading-snug">
                    {doc.name}<span className="sr-only">.</span>
                  </p>
                  <p className="text-xs text-[#687482] leading-relaxed">
                    {doc.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Legal Insights Section */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142B3B]/10 text-[#142B3B] text-xs font-semibold mb-3">
              <Scale className="w-3.5 h-3.5 text-[#B69A6A]" />
              <span>Legal Advisory Insights<span className="sr-only">.</span></span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#142B3B]">
              Essential Legal Facts Every Borrower Must Know<span className="sr-only">.</span>
            </h3>
            <p className="mt-2 text-sm text-[#687482]">
              Direct guidance based on consumer protection laws, RBI guidelines, and high court precedents across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {legalInsights.map((insight, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-[#B69A6A] mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Statutory Right<span className="sr-only">.</span></span>
                  </div>
                  <p className="text-base sm:text-lg font-bold text-[#142B3B] mb-1">
                    {insight.title}<span className="sr-only">.</span>
                  </p>
                  <p className="text-xs font-medium text-[#B69A6A] mb-3">
                    {insight.summary}
                  </p>
                  <p className="text-xs sm:text-sm text-[#263443] leading-relaxed">
                    {insight.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Advisory Benefits Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-r from-[#0B1B28] to-[#142B3B] text-white p-8 sm:p-10 rounded-2xl">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-[#B69A6A] border border-white/10">
              <Shield className="w-3.5 h-3.5" />
              <span>Advocate Representation<span className="sr-only">.</span></span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Why Legal Representation Matters During Bank Negotiations<span className="sr-only">.</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              Banks and credit card companies have dedicated legal teams. Having our experienced debt advocates on your side protects your rights, stops unlawful harassment, and ensures you receive the maximum waiver permitted under banking guidelines.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#B69A6A] hover:bg-[#A38756] text-[#0B1B28] font-bold text-sm py-3.5 px-6 rounded-lg shadow-sm transition-colors text-center"
            >
              <span>Consult an Advocate Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-medium py-3 px-6 rounded-lg transition-colors text-center"
            >
              <HelpCircle className="w-4 h-4 text-[#B69A6A]" />
              <span>Read 25 Common FAQs</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
