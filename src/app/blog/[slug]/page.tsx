import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  User, 
  ChevronRight, 
  ArrowLeft, 
  ShieldCheck, 
  Phone,
  Share2,
  BookOpen
} from "lucide-react";
import { BLOG_POSTS, BlogPost } from "@/data/blogs";
import { SITE_CONFIG } from "@/data/siteData";
import ConsultationForm from "@/components/forms/ConsultationForm";
import ConsultationCta from "@/components/home/ConsultationCta";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | Loan Settlement Expert`,
    description: post.description || post.excerpt,
    alternates: {
      canonical: `${SITE_CONFIG.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description || post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Loan Settlement Expert"],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 4);

  // JSON-LD Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description || post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/images/lsa-logo.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_CONFIG.url}/blog/${post.slug}`,
    },
  };

  return (
    <article className="bg-white">
      {/* Inject Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="bg-slate-100 border-b border-slate-200 py-3 text-xs text-[#687482]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#142B3B]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/blog" className="hover:text-[#142B3B]">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-[#142B3B] truncate max-w-xs sm:max-w-md">{post.title}</span>
        </div>
      </div>

      {/* Article Header */}
      <header className="bg-gradient-to-r from-[#0B1B28] to-[#142B3B] text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#B69A6A] hover:underline mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#B69A6A]" />
              <span>By Loan Settlement Expert Legal Team</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#B69A6A]" />
              <span>{post.date}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#B69A6A]" />
              <span>{post.readTime}</span>
            </span>
          </div>
        </div>
      </header>

      {/* Article Body & Sidebar Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Article Body (8 cols) */}
          <div className="lg:col-span-8">
            <div 
              className="prose prose-slate max-w-none text-[#263443] text-sm sm:text-base leading-relaxed space-y-4 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-[#142B3B] [&>h2]:mt-8 [&>h2]:mb-3 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-[#142B3B] [&>h3]:mt-6 [&>h3]:mb-2 [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1.5 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-1.5 [&>blockquote]:border-l-4 [&>blockquote]:border-[#B69A6A] [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-slate-600 [&>table]:w-full [&>table]:border-collapse [&>table]:border [&>table]:border-slate-200 [&>table_th]:bg-slate-100 [&>table_th]:p-2.5 [&>table_td]:p-2.5 [&>table_td]:border [&>table_td]:border-slate-200"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {/* In-article Consultation Trigger */}
            <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#F7F8FA] border border-slate-200">
              <h2 className="text-xl font-bold text-[#142B3B] mb-2">Need Immediate Guidance On This Topic?</h2>
              <p className="text-sm text-[#687482] mb-6">
                Our senior legal advisors offer free, confidential evaluations for borrowers struggling with defaults or recovery pressure.
              </p>
              <ConsultationForm embedded />
            </div>
          </div>

          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-8 sticky top-24">
            
            {/* Quick Call Box */}
            <div className="bg-[#0B1B28] text-white p-6 sm:p-7 rounded-2xl shadow-md space-y-4">
              <ShieldCheck className="w-8 h-8 text-[#B69A6A]" />
              <h2 className="text-lg font-bold">Speak with a Legal Settlement Advisor</h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Have questions regarding the legalities mentioned in this article? Call our direct helpline now.
              </p>
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#B69A6A] hover:bg-[#A38756] text-[#0B1B28] font-bold text-xs py-3 px-4 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {SITE_CONFIG.phone}</span>
              </a>
            </div>

            {/* Related Articles */}
            <div className="bg-[#F7F8FA] p-6 rounded-2xl border border-slate-200">
              <h3 className="text-sm font-bold text-[#142B3B] uppercase tracking-wider mb-4 border-b border-slate-200 pb-2">
                Recommended Reading
              </h3>
              <ul className="space-y-4">
                {otherPosts.map((other) => (
                  <li key={other.slug} className="border-b border-slate-100 pb-3 last:border-b-0">
                    <span className="text-[10px] text-[#687482] block mb-1">{other.date}</span>
                    <Link
                      href={`/blog/${other.slug}`}
                      className="text-xs sm:text-sm font-bold text-[#142B3B] hover:text-[#B69A6A] transition-colors leading-snug line-clamp-2"
                    >
                      {other.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-3 border-t border-slate-200 text-center">
                <Link
                  href="/blog"
                  className="text-xs font-semibold text-[#142B3B] hover:text-[#B69A6A] transition-colors"
                >
                  View All Blog Guides →
                </Link>
              </div>
            </div>

          </div>

        </div>
      </div>

      <ConsultationCta />
    </article>
  );
}
