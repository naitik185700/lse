"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* WhatsApp Floating Chat Button */}
      <a
        href={`${SITE_CONFIG.whatsappUrl}?text=${encodeURIComponent("Hello Loan Settlement Expert, I need legal guidance and consultation regarding my loan settlement.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 group relative"
        aria-label="Chat on WhatsApp with Loan Settlement Expert"
      >
        <span className="sr-only">WhatsApp Chat</span>
        {/* WhatsApp Official SVG */}
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.782-.879-2.057-.98-.276-.1-.476-.15-.676.15-.2.301-.776.98-.952 1.18-.175.2-.35.226-.651.076-.301-.15-1.272-.469-2.424-1.496-.895-.798-1.5-1.784-1.675-2.084-.176-.301-.019-.464.132-.614.136-.135.301-.35.451-.526.15-.175.2-.3.301-.501.1-.2.05-.375-.025-.526-.075-.15-.676-1.628-.927-2.23-.244-.585-.492-.505-.676-.515-.175-.01-.375-.01-.576-.01-.2 0-.526.075-.802.375-.275.3-1.052 1.028-1.052 2.506 0 1.479 1.077 2.906 1.228 3.107.15.2 2.118 3.235 5.132 4.538.717.31 1.278.495 1.714.634.721.23 1.377.198 1.896.12.578-.087 1.782-.728 2.033-1.431.25-.704.25-1.306.175-1.431-.075-.125-.276-.2-.576-.35zM12.04 2C6.51 2 2.015 6.495 2.015 12.025c0 1.954.563 3.778 1.542 5.32L2 22l4.82-1.523c1.478.895 3.21 1.414 5.06 1.414 5.53 0 10.025-4.495 10.025-10.025C21.905 6.495 17.57 2 12.04 2zm0 18.275c-1.63 0-3.15-.469-4.444-1.278l-.32-.2-2.86.903.92-2.788-.208-.332c-.886-1.412-1.353-3.05-1.353-4.755 0-4.57 3.72-8.29 8.29-8.29 4.57 0 8.29 3.72 8.29 8.29 0 4.57-3.72 8.29-8.29 8.29z"/>
        </svg>

        {/* Pulse ring animation */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500"></span>
        </span>
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="w-10 h-10 bg-[#142B3B] hover:bg-[#0B1B28] text-white rounded-full flex items-center justify-center shadow-md transition-all duration-200 border border-slate-700 hover:scale-105"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-5 h-5 text-[#B69A6A]" />
        </button>
      )}
    </div>
  );
}
