import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  ChevronRight,
  ShieldAlert
} from "lucide-react";
import { SERVICES, ServiceDetail } from "@/data/services";
import { SITE_CONFIG } from "@/data/siteData";
import ZohoForm from "@/components/forms/ZohoForm";
import ConsultationCta from "@/components/home/ConsultationCta";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = new Set<string>();
  SERVICES.forEach((s) => {
    slugs.add(s.slug);
    slugs.add(s.slug.toLowerCase());
  });
  slugs.add("Business-loan-settlement");
  slugs.add("business-loan-settlement");
  slugs.add("loan-againest-property-settlement");
  slugs.add("loan-against-property-settlement");

  return Array.from(slugs).map((slug) => ({ slug }));
}

function findService(slug: string): ServiceDetail | undefined {
  const normalized = slug.toLowerCase();
  return SERVICES.find(
    (s) =>
      s.slug.toLowerCase() === normalized ||
      s.legacyUrl.toLowerCase().replace(".html", "") === normalized ||
      (normalized.includes("against") && s.slug.includes("againest")) ||
      (normalized.includes("againest") && s.slug.includes("against"))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.metaTitle || `${service.title} | Loan Settlement Expert`,
    description:
      service.metaDescription ||
      `Professional ${service.title} services in India. Reduce your debt burden lawfully with RBI-compliant negotiation support.`,
    alternates: {
      canonical: `${SITE_CONFIG.url}/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = findService(slug);

  if (!service) {
    notFound();
  }

  // Related services
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 5);

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="bg-slate-100 border-b border-slate-200 py-3 text-xs text-[#687482]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#142B3B]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/services" className="hover:text-[#142B3B]">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-[#142B3B] truncate">{service.title}</span>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#0B1B28] to-[#142B3B] text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-[#B69A6A] border border-white/15">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>RBI-Compliant Debt Resolution</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                {service.h1 || service.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {service.sections?.[0]?.paragraphs?.[0] ||
                  "Structured, legal loan settlement assistance designed to resolve unmanageable debt, reduce lender pressure, and achieve written bank closure."}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#case-review"
                  className="inline-flex items-center gap-2 bg-[#B69A6A] hover:bg-[#A38756] text-[#0B1B28] font-bold text-sm px-6 py-3 rounded-lg shadow-sm transition-colors"
                >
                  <span>Request Free Case Review</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 text-sm font-medium px-5 py-3 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#B69A6A]" />
                  <span>Call {SITE_CONFIG.phone}</span>
                </a>
              </div>
            </div>

            {/* Service Thumbnail Image */}
            <div className="lg:col-span-5">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-slate-800">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Content Column (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {service.sections.map((section, idx) => (
              <div 
                key={idx} 
                className="border-b border-slate-100 pb-10 last:border-b-0 space-y-4"
              >
                {section.heading && (
                  <div className="mb-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#142B3B] tracking-tight">
                      {section.heading}
                    </h2>
                    <div className="w-14 h-1 bg-[#B69A6A] rounded-full mt-2" />
                  </div>
                )}

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-sm sm:text-base text-[#263443] leading-relaxed text-justify sm:text-left">
                    {p}
                  </p>
                ))}

                {/* Steps / Process Flow items */}
                {section.steps && section.steps.length > 0 && (
                  <div className="mt-6 space-y-3.5">
                    {section.steps.map((st, stIdx) => (
                      <div
                        key={stIdx}
                        className="flex items-start gap-4 p-4 rounded-xl bg-[#F7F8FA] border border-slate-200"
                      >
                        <span className="w-7 h-7 rounded-full bg-[#142B3B] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          0{stIdx + 1}
                        </span>
                        <div>
                          <h3 className="text-sm sm:text-base font-bold text-[#142B3B]">
                            {st.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#687482] mt-0.5 leading-relaxed">
                            {st.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Bullet List items */}
                {section.items && section.items.length > 0 && (
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {section.items.map((item, iIdx) => (
                      <li
                        key={iIdx}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#263443]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#B69A6A] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* In-page Zoho Consultation Form anchor */}
            <div id="case-review" className="pt-6">
              <ZohoForm
                title={`Request ${service.title} Review`}
                subtitle="Submit your details directly to our senior legal advisors for confidential case evaluation."
              />
            </div>

          </div>

          {/* Sidebar Column (4 cols) */}
          <div className="lg:col-span-4 space-y-8 sticky top-24">
            
            {/* Quick Action Card */}
            <div className="bg-[#0B1B28] text-white p-6 sm:p-7 rounded-2xl shadow-md space-y-4">
              <ShieldAlert className="w-8 h-8 text-[#B69A6A]" />
              <h3 className="text-lg font-bold">Facing Immediate Bank Harassment?</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Collection agents cannot abuse, threaten, or contact your relatives under RBI Master Circular on Recovery. We intervene legally.
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#B69A6A] hover:bg-[#A38756] text-[#0B1B28] font-bold text-xs py-3 px-4 rounded-lg transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {SITE_CONFIG.phone}</span>
                </a>
              </div>
            </div>

            {/* Other Services Navigation List */}
            <div className="bg-[#F7F8FA] p-6 rounded-2xl border border-slate-200">
              <h4 className="text-sm font-bold text-[#142B3B] uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                Other Settlement Options
              </h4>
              <ul className="space-y-2">
                {otherServices.map((other) => (
                  <li key={other.slug}>
                    <Link
                      href={`/services/${other.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-lg text-xs font-medium text-[#263443] hover:bg-white hover:text-[#142B3B] hover:shadow-xs transition-all group"
                    >
                      <span className="truncate pr-2">{other.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#B69A6A] group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-3 border-t border-slate-200 text-center">
                <Link
                  href="/services"
                  className="text-xs font-semibold text-[#142B3B] hover:text-[#B69A6A] transition-colors"
                >
                  View All 11 Services →
                </Link>
              </div>
            </div>

            {/* Compliance Note */}
            <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-900 text-xs leading-relaxed">
              <p className="font-semibold text-amber-950 mb-1">Important Note:</p>
              <p>
                Settlement negotiations require lender agreement and proper documentation. We never promise guaranteed loan write-offs or illegal tactics.
              </p>
            </div>

          </div>

        </div>
      </div>

      <ConsultationCta />
    </div>
  );
}
