import type { NextConfig } from "next";

const legacyRedirects = [
  { source: "/about.html", destination: "/about", permanent: true },
  { source: "/testimonials.html", destination: "/testimonials", permanent: true },
  { source: "/faq.html", destination: "/faq", permanent: true },
  { source: "/join-our-team.html", destination: "/join-our-team", permanent: true },
  { source: "/contact.html", destination: "/contact", permanent: true },
  { source: "/terms-and-conditions.html", destination: "/terms-and-conditions", permanent: true },
  { source: "/privacy-policy.html", destination: "/privacy-policy", permanent: true },
  { source: "/loan-settlement-services.html", destination: "/services/loan-settlement-services", permanent: true },
  { source: "/personal-loan-settlement.html", destination: "/services/personal-loan-settlement", permanent: true },
  { source: "/credit-card-debt-settlement.html", destination: "/services/credit-card-debt-settlement", permanent: true },
  { source: "/Business-loan-settlement.html", destination: "/services/business-loan-settlement", permanent: true },
  { source: "/business-loan-settlement.html", destination: "/services/business-loan-settlement", permanent: true },
  { source: "/application-based-loan-settlement.html", destination: "/services/application-based-loan-settlement", permanent: true },
  { source: "/home-loan-settlement.html", destination: "/services/home-loan-settlement", permanent: true },
  { source: "/loan-againest-property-settlement.html", destination: "/services/loan-against-property-settlement", permanent: true },
  { source: "/loan-against-property-settlement.html", destination: "/services/loan-against-property-settlement", permanent: true },
  { source: "/vehicle-loan-settlement.html", destination: "/services/vehicle-loan-settlement", permanent: true },
  { source: "/education-loan-settlement.html", destination: "/services/education-loan-settlement", permanent: true },
  { source: "/credit-rebuilding.html", destination: "/services/credit-rebuilding", permanent: true },
  { source: "/anti-harassment-support.html", destination: "/services/anti-harassment-support", permanent: true },
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects;
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loansettlementexpert.in",
      },
    ],
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
      ],
    },
  ],
};

export default nextConfig;
