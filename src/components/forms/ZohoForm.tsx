"use client";

import React, { useState, useEffect } from "react";
import { Loader2, ShieldCheck, Lock } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

interface ZohoFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
  showHeader?: boolean;
}

export default function ZohoForm({
  title = "Consult Our Experts Now",
  subtitle = "Fill out the form below and our legal debt advisors will contact you shortly to review your case.",
  className = "",
  showHeader = true,
}: ZohoFormProps) {
  const [loading, setLoading] = useState(true);
  const [iframeHeight, setIframeHeight] = useState<number>(1500);

  // Responsive height calculation and Zoho auto-resize listener
  useEffect(() => {
    const updateDimensions = () => {
      const width = typeof window !== "undefined" ? window.innerWidth : 1200;
      if (width < 640) {
        // Mobile screens: each of the 16 fields stacks vertically with full margins
        setIframeHeight(1720);
      } else if (width < 1024) {
        // Tablet screens
        setIframeHeight(1580);
      } else {
        // Desktop screens
        setIframeHeight(1500);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    // Listen for Zoho Forms iframe auto-resize postMessage
    const handleMessage = (event: MessageEvent) => {
      try {
        const evntData = event.data;
        if (evntData && typeof evntData === "string" && evntData.includes("|")) {
          const parts = evntData.split("|");
          if (parts.length >= 2) {
            const height = parseInt(parts[1], 10);
            if (!isNaN(height) && height > 500) {
              setIframeHeight(height + 25);
            }
          }
        }
      } catch {
        // Silently ignore cross-origin or non-string events
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  // Ensure zf_rszfm=1 is appended to enable Zoho's native responsive height messages
  const zohoUrl = SITE_CONFIG.zohoFormUrl.includes("?")
    ? `${SITE_CONFIG.zohoFormUrl}&zf_rszfm=1`
    : `${SITE_CONFIG.zohoFormUrl}?zf_rszfm=1`;

  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col w-full ${className}`}
    >
      {/* Optional Top Header */}
      {showHeader && (
        <div className="p-5 sm:p-6 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B69A6A] mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Legal Consultation</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#142B3B]">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-1 text-xs sm:text-sm text-[#687482] leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Zoho Form Iframe Container - Completely Stable Without Inner Scrollbars */}
      <div className="relative w-full bg-white flex-1 overflow-hidden">
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 z-10 p-6 text-center min-h-[400px]">
            <Loader2 className="w-8 h-8 animate-spin text-[#B69A6A] mb-3" />
            <p className="text-sm font-semibold text-[#142B3B]">
              Loading Official Zoho Consultation Portal...
            </p>
            <p className="text-xs text-[#687482] mt-1">
              Encrypted end-to-end direct connection
            </p>
          </div>
        )}

        <iframe
          src={zohoUrl}
          title="Consult Our Experts Now - Loan Settlement Expert"
          scrolling="no"
          className="w-full border-0 block transition-all duration-300"
          style={{
            height: `${iframeHeight}px`,
            width: "100%",
            border: "none",
            overflow: "hidden",
            display: "block",
          }}
          onLoad={() => setLoading(false)}
          allow="camera; microphone; autoplay; encrypted-media"
        />
      </div>

      {/* Footer Security Badge */}
      <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#687482]">
        <span className="flex items-center gap-1.5 font-medium text-[#263443]">
          <Lock className="w-3.5 h-3.5 text-emerald-600" />
          100% Confidential • Direct Zoho Portal
        </span>
        <span className="text-slate-400 font-medium">SSL Encrypted</span>
      </div>
    </div>
  );
}
