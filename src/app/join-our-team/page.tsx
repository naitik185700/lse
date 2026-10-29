import React from "react";
import type { Metadata } from "next";
import { Users, Briefcase, Heart, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { JOIN_TEAM_SECTIONS, SITE_CONFIG } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Careers & Join Our Team | Loan Settlement Expert",
  description:
    "Join Loan Settlement Expert. Build a meaningful career in legal debt advisory, bank negotiations, borrower advocacy, and customer care across India.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/join-our-team`,
  },
};

export default function JoinTeamPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#0B1B28] to-[#142B3B] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-[#B69A6A] border border-white/15 mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Opportunities</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Join a Mission-Driven Team Helping People Achieve Financial Freedom
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              We are expanding our legal advisory, client assistance, and debt negotiation teams. Be part of a purpose-led organisation that makes a real difference in people’s lives.
            </p>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">
        {JOIN_TEAM_SECTIONS.map((sec, idx) => (
          <section key={idx} className="border-b border-slate-100 pb-12 last:border-b-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#142B3B] mb-3">
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

        {/* Application Card */}
        <div className="bg-[#0B1B28] text-white p-8 sm:p-12 rounded-3xl text-center space-y-6">
          <Sparkles className="w-10 h-10 text-[#B69A6A] mx-auto" />
          <h3 className="text-2xl sm:text-3xl font-bold">Ready to Make an Impact?</h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Send your updated resume and a brief introduction highlighting your background in debt settlement, banking customer care, or legal research to our recruitment desk.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${SITE_CONFIG.email}?subject=Job Application - Loan Settlement Expert`}
              className="inline-flex items-center gap-2 bg-[#B69A6A] hover:bg-[#A38756] text-[#0B1B28] font-bold text-sm px-8 py-3.5 rounded-lg transition-colors"
            >
              <span>Email Your Resume to {SITE_CONFIG.email}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <p className="text-xs text-slate-400">
            Head Office: {SITE_CONFIG.location} • Positions open for In-Office & Remote roles across India.
          </p>
        </div>
      </div>
    </div>
  );
}
