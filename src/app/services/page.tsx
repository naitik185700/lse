import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data/services";
import { SITE_CONFIG } from "@/data/siteData";
import ConsultationCta from "@/components/home/ConsultationCta";

export const metadata: Metadata = {
  title: "Debt Resolution & Loan Settlement Services in India",
  description:
    "Explore our complete range of legal loan settlement services across India, including personal loans, credit card debt, business loans, vehicle loans, and anti-harassment protection.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#0B1B28] to-[#142B3B] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-[#B69A6A] border border-white/15 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Full Portfolio of Solutions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Debt Resolution & Loan Settlement Services
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              We offer structured, legal debt settlement assistance and lender negotiation for every loan category. Protect yourself from harassment and secure written loan closure.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid (All 11 services) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const introPara = service.sections?.[0]?.paragraphs?.[0] || "";
            const bullets = service.sections?.[0]?.items?.slice(0, 3) || [];

            return (
              <div
                key={service.slug}
                className="group flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-1"
              >
                <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-semibold text-white px-2.5 py-1 rounded bg-[#142B3B]/80 backdrop-blur-xs">
                    {service.title}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-[#142B3B] group-hover:text-[#B69A6A] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#687482] line-clamp-3 leading-relaxed">
                      {introPara}
                    </p>

                    {bullets.length > 0 && (
                      <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                        {bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#263443]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B69A6A] flex-shrink-0 mt-0.5" />
                            <span className="truncate">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#142B3B] group-hover:text-[#B69A6A] transition-colors"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ConsultationCta />
    </div>
  );
}
