import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Phone, HelpCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-[#142B3B]">
          <span className="text-3xl font-extrabold">404</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-[#142B3B]">Page Not Found</h1>
          <p className="text-sm text-[#687482] leading-relaxed">
            The page you are looking for may have been moved or updated during our website migration. You can easily find what you need through the links below:
          </p>
        </div>

        <div className="flex flex-col gap-2.5 pt-2">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#142B3B] hover:bg-[#0B1B28] text-white py-3 px-4 rounded-lg text-sm font-semibold transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-[#142B3B] py-3 px-4 rounded-lg text-sm font-medium transition-colors"
          >
            <span>Browse Loan Settlement Services</span>
          </Link>

          <Link
            href="/contact"
            className="w-full inline-flex items-center justify-center gap-2 bg-white border border-slate-300 hover:bg-slate-50 text-[#142B3B] py-3 px-4 rounded-lg text-sm font-medium transition-colors"
          >
            <Phone className="w-4 h-4 text-[#B69A6A]" />
            <span>Speak with an Advisor</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
