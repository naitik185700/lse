import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Calendar, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogs";
import { SITE_CONFIG } from "@/data/siteData";
import ConsultationCta from "@/components/home/ConsultationCta";

export const metadata: Metadata = {
  title: "Debt Relief & Loan Settlement Blog | Legal Guides & Insights",
  description:
    "Comprehensive articles, legal guides, RBI guidelines analysis, and debt settlement strategies from the experts at Loan Settlement Expert India.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/blog`,
  },
};

export default function BlogListingPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#0B1B28] to-[#142B3B] text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-[#B69A6A] border border-white/15 mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Expert Knowledge & Legal Guides</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Debt Relief & Loan Settlement Insights
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              In-depth articles explaining Indian banking regulations, recovery harassment laws, RBI fair practice codes, and how to legally settle unmanageable debt.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Meta date & read time */}
                  <div className="flex items-center gap-4 text-xs text-[#687482] mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#B69A6A]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#B69A6A]" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg sm:text-xl font-bold text-[#142B3B] group-hover:text-[#B69A6A] transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="mt-3 text-xs sm:text-sm text-[#687482] leading-relaxed line-clamp-4">
                    {post.excerpt}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#142B3B] group-hover:text-[#B69A6A] transition-colors"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <span className="text-[10px] uppercase font-semibold text-[#B69A6A] bg-[#B69A6A]/10 px-2 py-0.5 rounded">
                    Legal Guide
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ConsultationCta />
    </div>
  );
}
