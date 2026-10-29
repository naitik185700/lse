"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, PhoneCall, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export default function ConsultationForm({ embedded = false }: { embedded?: boolean }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    loanType: "Personal Loan",
    debtAmount: "",
    city: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showZoho, setShowZoho] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    // Client-side validation
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name and phone number.");
      setLoading(false);
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      setStatus("error");
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          loanType: "Personal Loan",
          debtAmount: "",
          city: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit request. Please try calling directly.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please call our helpline directly at " + SITE_CONFIG.phone);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden ${embedded ? "p-6 sm:p-8" : "p-8 sm:p-10"}`}>
      
      {/* Header and Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-3 mb-6">
        <div>
          <span className="text-xs uppercase font-semibold text-[#B69A6A] tracking-wider">Fast Confidential Response</span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#142B3B] mt-0.5">Consult Our Experts Now</h3>
        </div>

        <button
          type="button"
          onClick={() => setShowZoho(!showZoho)}
          className="inline-flex items-center gap-1.5 text-xs text-[#687482] hover:text-[#142B3B] font-medium transition-colors"
        >
          <span>{showZoho ? "Switch to Direct Form" : "Switch to Zoho Form"}</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#B69A6A]" />
        </button>
      </div>

      {showZoho ? (
        /* Zoho Form Iframe Fallback */
        <div className="w-full min-h-[560px] bg-slate-50 rounded-xl overflow-hidden border border-slate-200">
          <iframe
            src={SITE_CONFIG.zohoFormUrl}
            title="Zoho Consultation Form"
            className="w-full h-[600px] border-none"
            loading="lazy"
          />
        </div>
      ) : (
        /* Direct Interactive Next.js Form */
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === "success" && (
            <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Consultation Request Received!</p>
                <p className="text-xs mt-0.5 text-emerald-700">
                  Our senior legal settlement advisor will call you shortly on your provided mobile number. For immediate emergency anti-harassment support, call us at {SITE_CONFIG.phone}.
                </p>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Submission Error</p>
                <p className="text-xs mt-0.5 text-rose-700">{errorMessage}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-[#263443] mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Rajesh Kumar"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#142B3B] focus:ring-1 focus:ring-[#142B3B] text-sm text-[#263443] placeholder-slate-400"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-[#263443] mb-1.5">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#142B3B] focus:ring-1 focus:ring-[#142B3B] text-sm text-[#263443] placeholder-slate-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-[#263443] mb-1.5">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. rajesh@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#142B3B] focus:ring-1 focus:ring-[#142B3B] text-sm text-[#263443] placeholder-slate-400"
              />
            </div>

            {/* Loan Type */}
            <div>
              <label htmlFor="loanType" className="block text-xs font-semibold text-[#263443] mb-1.5">
                Loan Category <span className="text-red-500">*</span>
              </label>
              <select
                id="loanType"
                name="loanType"
                value={formData.loanType}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#142B3B] focus:ring-1 focus:ring-[#142B3B] text-sm text-[#263443] bg-white"
              >
                <option value="Personal Loan">Personal Loan</option>
                <option value="Credit Card Debt">Credit Card Debt</option>
                <option value="Business Loan">Business Loan</option>
                <option value="Application Based Loan">Application Based Loan</option>
                <option value="Home Loan">Home Loan</option>
                <option value="Loan Against Property">Loan Against Property</option>
                <option value="Vehicle Loan">Vehicle Loan</option>
                <option value="Education Loan">Education Loan</option>
                <option value="Multiple Loans / Debt Pool">Multiple Loans / Debt Pool</option>
                <option value="Anti-Harassment Emergency">Anti-Harassment Emergency</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Total Debt Amount */}
            <div>
              <label htmlFor="debtAmount" className="block text-xs font-semibold text-[#263443] mb-1.5">
                Approx Total Outstanding (₹)
              </label>
              <input
                id="debtAmount"
                name="debtAmount"
                type="text"
                value={formData.debtAmount}
                onChange={handleChange}
                placeholder="e.g. ₹5,00,000"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#142B3B] focus:ring-1 focus:ring-[#142B3B] text-sm text-[#263443] placeholder-slate-400"
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-xs font-semibold text-[#263443] mb-1.5">
                Your City / State
              </label>
              <input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                placeholder="e.g. Delhi NCR, Mumbai, Bangalore"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#142B3B] focus:ring-1 focus:ring-[#142B3B] text-sm text-[#263443] placeholder-slate-400"
              />
            </div>
          </div>

          {/* Message / Details */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-[#263443] mb-1.5">
              Brief Situation (Banks, default months, or harassment details)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us briefly about your lenders or any notices received..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#142B3B] focus:ring-1 focus:ring-[#142B3B] text-sm text-[#263443] placeholder-slate-400"
            />
          </div>

          {/* Privacy Note */}
          <p className="text-[11px] text-[#687482] leading-tight">
            🔒 By submitting, you agree to our <a href="/privacy-policy" className="underline hover:text-[#142B3B]">Privacy Policy</a>. Your details remain strictly confidential and will never be shared with recovery agencies.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#142B3B] hover:bg-[#0B1B28] text-white py-3.5 px-6 rounded-lg font-semibold text-sm transition-all shadow-sm hover:shadow disabled:opacity-70 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#B69A6A]" />
                <span>Submitting Your Case...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 text-[#B69A6A]" />
                <span>Submit For Free Case Evaluation</span>
              </>
            )}
          </button>
        </form>
      )}

      {/* Direct Phone Support */}
      <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-[#687482] gap-2">
        <span className="flex items-center gap-1.5 font-medium text-[#263443]">
          <PhoneCall className="w-4 h-4 text-[#B69A6A]" />
          Prefer to speak directly right now?
        </span>
        <a 
          href={`tel:${SITE_CONFIG.phoneRaw}`} 
          className="text-[#142B3B] font-bold hover:text-[#B69A6A] transition-colors"
        >
          {SITE_CONFIG.phone}
        </a>
      </div>

    </div>
  );
}
