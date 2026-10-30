import React from "react";
import Link from "next/link";
import { ShieldCheck, Clock, UserX, FileText, Scale, ArrowRight } from "lucide-react";

export default function BorrowerRightsSection() {
  const rights = [
    {
      icon: Clock,
      title: "Regulated Contact Hours",
      desc: "Recovery agents may only call between 8:00 AM and 7:00 PM. Calls late at night or early morning violate RBI guidelines."
    },
    {
      icon: UserX,
      title: "No Third-Party Harassment",
      desc: "Lenders cannot contact your friends, family, or workplace colleagues regarding your dues. Your financial privacy is legally protected."
    },
    {
      icon: ShieldCheck,
      title: "Zero Tolerance for Abuse",
      desc: "Verbal threats, abusive tone, or unannounced workplace visits are strictly illegal. Borrowers retain civil rights regardless of default status."
    },
    {
      icon: FileText,
      title: "Written Proof & Official NOC",
      desc: "Never pay based on verbal promises. Every valid compromise settlement requires an official bank letter followed by a No Dues Certificate."
    },
    {
      icon: Scale,
      title: "Right to Legal Defense",
      desc: "If lenders issue legal summons, arbitration notices, or demand letters, you have the statutory right to reply through an advocate."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142B3B]/10 text-[#142B3B] text-xs font-semibold mb-3">
            <Scale className="w-3.5 h-3.5 text-[#B69A6A]" />
            <span>RBI Fair Practices Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#142B3B] tracking-tight">
            Know Your Rights as a Borrower in India
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#687482] leading-relaxed">
            Financial hardship is not a crime. The Reserve Bank of India mandates strict ethical guidelines for banks, NBFCs, and collection agents.
          </p>
        </div>

        {/* 5 Rights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#142B3B]/5 text-[#142B3B] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#B69A6A]" />
                  </div>
                  <h3 className="text-base font-bold text-[#142B3B] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687482] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Quick Help Card */}
          <div className="bg-[#0B1B28] text-white p-6 rounded-2xl border border-slate-800 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-[#B69A6A] uppercase tracking-wider block mb-2">
                Immediate Protection
              </span>
              <h3 className="text-lg font-bold mb-2">
                Facing Illegal Recovery Harassment?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Our legal team sends official cease-and-desist notices to stop abusive recovery calls and protect your peace of mind.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-[#B69A6A] hover:bg-[#A38756] text-[#0B1B28] font-bold text-xs transition-colors"
            >
              <span>Get Anti-Harassment Support</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
