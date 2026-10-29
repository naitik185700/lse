import React from "react";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ShieldCheck, HeartHandshake } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";
import ZohoForm from "@/components/forms/ZohoForm";

export const metadata: Metadata = {
  title: "Contact Us & Free Consultation | Loan Settlement Expert",
  description:
    "Speak with our senior debt settlement advisors and legal consultants. Free, 100% confidential loan evaluation across India. Stop recovery harassment now.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#0B1B28] to-[#142B3B] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-[#B69A6A] border border-white/15 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Confidential & Non-Judgmental Guidance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Speak With a Loan Settlement Expert
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Facing issues with loan repayments, credit card dues, or recovery calls? Our experts are here to guide you and help you understand your available options.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid: Zoho Form on Left, Contact Details on Right (matching existing web) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Zoho Form (7 cols) */}
          <div className="lg:col-span-7">
            <ZohoForm
              title="Request a Confidential Callback"
              subtitle="Fill out the form below and our team will contact you shortly to discuss your situation."
              minHeight="640px"
            />
          </div>

          {/* Right Column: Contact Cards & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F7F8FA] p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
              <h2 className="text-xl font-bold text-[#142B3B] border-b border-slate-200 pb-3">
                Contact Information
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#142B3B] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#B69A6A]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#687482] uppercase tracking-wider">Office Address</p>
                    <p className="text-sm font-medium text-[#142B3B] mt-0.5 leading-snug">
                      Plot No. 38p, Saraswati Kunj, 1, Golf Course Rd, Sector 54, Gurugram, Haryana 122001
                    </p>
                    <p className="text-xs text-[#687482] mt-1">Providing legal debt resolution across all states of India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#142B3B] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#B69A6A]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#687482] uppercase tracking-wider">Phone Helpline</p>
                    <a
                      href={`tel:${SITE_CONFIG.phoneRaw}`}
                      className="text-base sm:text-lg font-bold text-[#142B3B] hover:text-[#B69A6A] transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                    <p className="text-xs text-[#687482] mt-0.5">Direct consultation during working hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#142B3B] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-[#B69A6A]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#687482] uppercase tracking-wider">Email Inquiry</p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-base font-medium text-[#142B3B] hover:text-[#B69A6A] transition-colors break-all"
                    >
                      {SITE_CONFIG.email}
                    </a>
                    <p className="text-xs text-[#687482] mt-0.5">Guaranteed response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#142B3B] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-[#B69A6A]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#687482] uppercase tracking-wider">Operating Hours</p>
                    <p className="text-sm font-medium text-[#142B3B]">Monday – Saturday: 9:30 AM – 6:30 PM</p>
                    <p className="text-xs text-[#687482] mt-0.5">Emergency anti-harassment escalations accepted 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Assurance Card */}
            <div className="bg-[#0B1B28] text-white p-6 sm:p-8 rounded-2xl space-y-4 shadow-sm">
              <HeartHandshake className="w-8 h-8 text-[#B69A6A]" />
              <h3 className="text-lg font-bold">Confidentiality Guarantee</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Your submitted case information and loan history remain 100% confidential. Information is only utilized to evaluate settlement eligibility with your lenders.
              </p>
              <div className="pt-2 text-xs text-[#B69A6A] font-medium flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span>Protected Under Client-Advisor Privilege</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
