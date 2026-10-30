import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-[#0B1B28] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Brand & About (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block focus:outline-none">
              <div className="bg-white/5 p-1 rounded inline-block">
                <Image
                  src="/images/lsa-logo.webp"
                  alt="Loan Settlement Expert"
                  width={224}
                  height={56}
                  className="h-10 sm:h-12 w-auto object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed pr-2">
              Loan Settlement Expert is a trusted financial advisory firm specializing in loan settlement solutions, debt relief services, and bank dispute resolution. We help individuals and businesses reduce their outstanding liabilities through strategic negotiations with banks and NBFCs, ensuring legal compliance and financial stability.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#B69A6A]">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>RBI Guidelines Compliant Debt Resolution Advisory</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-base font-semibold text-white tracking-wide border-b border-slate-800 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/about" className="hover:text-[#B69A6A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#B69A6A] text-xs">›</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#B69A6A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#B69A6A] text-xs">›</span> Client Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#B69A6A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#B69A6A] text-xs">›</span> FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#B69A6A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#B69A6A] text-xs">›</span> Debt Relief Blog
                </Link>
              </li>
              <li>
                <Link href="/join-our-team" className="hover:text-[#B69A6A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#B69A6A] text-xs">›</span> Join Our Team
                </Link>
              </li>
              <li>
                <Link href="/services/credit-rebuilding" className="hover:text-[#B69A6A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#B69A6A] text-xs">›</span> Credit Rebuilding
                </Link>
              </li>
              <li>
                <Link href="/services/anti-harassment-support" className="hover:text-[#B69A6A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#B69A6A] text-xs">›</span> Anti Harassment Support
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-[#B69A6A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#B69A6A] text-xs">›</span> Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#B69A6A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#B69A6A] text-xs">›</span> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-base font-semibold text-white tracking-wide border-b border-slate-800 pb-2">
              Settlement Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/services/loan-settlement-services" className="hover:text-[#B69A6A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#B69A6A] text-xs">›</span> Loan Settlement Services
                </Link>
              </li>
              <li>
                <Link href="/services/personal-loan-settlement" className="hover:text-[#B69A6A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#B69A6A] text-xs">›</span> Personal Loan Settlement
                </Link>
              </li>
              <li>
                <Link href="/services/credit-card-debt-settlement" className="hover:text-[#B69A6A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#B69A6A] text-xs">›</span> Credit Card Debt Settlement
                </Link>
              </li>
              <li>
                <Link href="/services/business-loan-settlement" className="hover:text-[#B69A6A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#B69A6A] text-xs">›</span> Business Loan Settlement
                </Link>
              </li>
              <li>
                <Link href="/services/application-based-loan-settlement" className="hover:text-[#B69A6A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#B69A6A] text-xs">›</span> Application Based Loan Settlement
                </Link>
              </li>
              <li>
                <Link href="/services/home-loan-settlement" className="hover:text-[#B69A6A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#B69A6A] text-xs">›</span> Home Loan Settlement
                </Link>
              </li>
              <li>
                <Link href="/services/loan-against-property-settlement" className="hover:text-[#B69A6A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#B69A6A] text-xs">›</span> Loan Against Property Settlement
                </Link>
              </li>
              <li>
                <Link href="/services/vehicle-loan-settlement" className="hover:text-[#B69A6A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#B69A6A] text-xs">›</span> Vehicle Loan Settlement
                </Link>
              </li>
              <li>
                <Link href="/services/education-loan-settlement" className="hover:text-[#B69A6A] transition-colors inline-flex items-center gap-1.5">
                  <span className="text-[#B69A6A] text-xs">›</span> Education Loan Settlement
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-base font-semibold text-white tracking-wide border-b border-slate-800 pb-2">
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#B69A6A] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">Helpline</p>
                  <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="hover:text-[#B69A6A] font-medium text-white">
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#B69A6A] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">Email Inquiry</p>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-[#B69A6A] break-all">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B69A6A] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">Office Location</p>
                  <p className="text-white">{SITE_CONFIG.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#B69A6A] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-slate-400">Consultation Hours</p>
                  <p className="text-white">Mon – Sat: 9:30 AM – 6:30 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#B69A6A] hover:bg-[#A38756] text-[#0B1B28] text-xs font-semibold py-2 px-3 rounded transition-colors"
              >
                <span>Request Callback</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer Banner */}
        <div className="p-4 sm:p-5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 text-xs leading-relaxed mb-8">
          <p className="font-semibold text-slate-300 mb-1">Legal Disclaimer:</p>
          <p>{SITE_CONFIG.disclaimer}</p>
        </div>

        {/* Copyright and Credits */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-y-3">
          <p>
            © {SITE_CONFIG.copyrightYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Design By</span>
            <a
              href={SITE_CONFIG.designerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B69A6A] hover:underline"
            >
              {SITE_CONFIG.designerCredit}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
