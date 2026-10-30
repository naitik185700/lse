import React from "react";
import { SITE_CONFIG, ALL_FAQS } from "@/data/siteData";

export default function JsonLd({ type = "all" }: { type?: "all" | "faq" | "organization" }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/lsa-logo.webp`,
    image: `${SITE_CONFIG.url}/images/lsa-logo.webp`,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.4595",
      longitude: "77.0266",
    },
    priceRange: "$$",
    description: "Professional loan & debt settlement services in India, including personal loans, credit card debt, and anti-harassment legal advisory.",
    areaServed: "IN",
    openingHours: "Mo-Sa 09:30-18:30",
    publishingPrinciples: `${SITE_CONFIG.url}/editorial-policy`,
    knowsAbout: [
      "Loan Settlement in India",
      "Credit Card Debt Resolution",
      "Personal Loan Compromise Settlement",
      "RBI Fair Practices Code",
      "Anti-Harassment Borrower Rights",
      "CIBIL Credit Score Rebuilding"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1250",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Loan Settlement Expert | Debt & Loan Settlement Services in India",
    url: SITE_CONFIG.url,
    datePublished: "2026-01-15T09:00:00+05:30",
    dateModified: "2026-10-30T10:00:00+05:30",
    description: "Professional debt & loan settlement in India. Stop bank harassment, resolve dues legally, and become debt-free.",
    publishingPrinciples: `${SITE_CONFIG.url}/editorial-policy`,
    author: {
      "@type": "Person",
      name: "Adv. Rajesh Verma",
      jobTitle: "Senior Legal Debt Specialist",
      description: "Former Banking Legal Counsel and specialist in RBI recovery directions, compromise settlements, and borrower rights.",
    },
    reviewedBy: {
      "@type": "Person",
      name: "Adv. Rajesh Verma",
      jobTitle: "Senior Legal Debt Specialist",
      description: "Member of the Bar Council of India with 15+ years experience in loan settlement and banking law.",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_CONFIG.url}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ALL_FAQS.slice(0, 10).map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      {(type === "all" || type === "organization") && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      )}
      {type === "all" && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
          />
        </>
      )}
      {(type === "all" || type === "faq") && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
