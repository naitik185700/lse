import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { HOMEPAGE_SERVICES } from "@/data/homepageServices";

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142B3B]/10 text-[#142B3B] text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B69A6A]" />
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#142B3B] tracking-tight">
            Our Debt Resolution Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#687482]">
            Lawful loan settlement, strategic lender negotiations, and borrower rights protection tailored to your specific financial situation.
          </p>
        </div>

        {/* Services Grid (3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOMEPAGE_SERVICES.map((service) => (
            <div
              key={service.slug}
              className="group flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              {/* Thumbnail Image Container */}
              <div className="relative h-48 sm:h-52 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-semibold text-[#B69A6A] px-2.5 py-1 rounded bg-[#0B1B28]/90 backdrop-blur-xs border border-white/10">
                  Debt Relief Solution
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#142B3B] group-hover:text-[#B69A6A] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#687482] line-clamp-3 leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#142B3B] group-hover:text-[#B69A6A] transition-colors"
                  >
                    <span>View Details</span>
                    <span className="group-hover:translate-x-1 transition-transform inline-block text-sm leading-none font-sans">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#142B3B] to-[#0B1B28] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold">Unsure which settlement solution fits your loan?</h3>
            <p className="text-sm text-slate-300">
              Speak with our senior financial advisors for a free, confidential case evaluation.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#B69A6A] hover:bg-[#A38756] text-[#0B1B28] font-semibold text-sm px-6 py-3 rounded-lg transition-colors flex-shrink-0"
          >
            <span>Talk to an Expert</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
