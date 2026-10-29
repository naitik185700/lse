"use client";

import React, { useState } from "react";
import { Loader2, ShieldCheck, Lock } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

interface ZohoFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
  minHeight?: string;
}

export default function ZohoForm({
  title = "Consult Our Experts Now",
  subtitle = "Fill out the form below and our legal debt advisors will contact you shortly to review your case.",
  className = "",
  minHeight = "640px",
}: ZohoFormProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className={`bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col ${className}`}>
      
      {/* Header */}
      <div className="p-6 sm:p-7 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B69A6A] mb-1">
          <ShieldCheck className="w-4 h-4" />
          <span>Official Secure Consultation</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-[#142B3B]">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-1.5 text-xs sm:text-sm text-[#687482] leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Zoho Form Iframe Container */}
      <div className="relative w-full flex-1 bg-white" style={{ minHeight }}>
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50/80 z-10 p-6 text-center">
            <Loader2 className="w-8 h-8 animate-spin text-[#B69A6A] mb-3" />
            <p className="text-sm font-semibold text-[#142B3B]">Loading Official Zoho Form...</p>
            <p className="text-xs text-[#687482] mt-1">Connecting to secure encrypted portal</p>
          </div>
        )}

        <iframe
          src={SITE_CONFIG.zohoFormUrl}
          title="Consult Our Experts Now - Loan Settlement Expert"
          className="w-full h-full border-0"
          style={{ minHeight, width: "100%" }}
          onLoad={() => setLoading(false)}
          allow="camera; microphone; autoplay; encrypted-media"
        />
      </div>

      {/* Footer Security Badge */}
      <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#687482]">
        <span className="flex items-center gap-1.5 font-medium text-[#263443]">
          <Lock className="w-3.5 h-3.5 text-emerald-600" />
          100% Confidential • Direct Zoho Portal
        </span>
        <span className="text-slate-400">SSL Encrypted</span>
      </div>

    </div>
  );
}
