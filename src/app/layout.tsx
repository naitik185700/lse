import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/data/siteData";

export const viewport: Viewport = {
  themeColor: "#0B1B28",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Loan Settlement Expert | Debt & Loan Settlement Services in India",
    template: "%s | Loan Settlement Expert",
  },
  description:
    "Loan Settlement Expert provides professional loan and debt settlement services in India. Stop bank harassment, reduce loan burden, and settle credit card & personal loans legally. Free consultation available.",
  keywords: [
    "Loan Settlement Expert",
    "Loan Settlement",
    "Credit Card Settlement",
    "Loan Settlement Agency",
    "Loan Settlement Process",
    "Personal Loan Settlement",
    "Loan Settlement Company",
    "Debt Settlement",
    "Debt Settlement Lawyer",
    "Debt Settlement Company",
    "Credit Score",
    "Loan Settlement Lawyer",
    "Settle Loans",
    "Settle Loan",
    "Anti Harassment Support",
  ],
  authors: [{ name: "Loan Settlement Expert" }],
  creator: "Loan Settlement Expert",
  publisher: "Loan Settlement Expert",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    title: "Loan Settlement Expert | Settle Loans & Become Debt Free",
    description:
      "Struggling with loan repayment? Our experts help you settle loans legally, reduce debt, and stop recovery harassment. Trusted loan settlement experts in India.",
    siteName: "Loan Settlement Expert",
    images: [
      {
        url: "/images/lsa-logo.webp",
        width: 1200,
        height: 630,
        alt: "Loan Settlement Expert Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loan Settlement Expert | Professional Debt Relief Services",
    description:
      "Get expert help to settle personal loans and credit card debt. Legal, transparent, and effective loan settlement solutions in India.",
    images: ["/images/lsa-logo.webp"],
  },
  icons: {
    icon: "/images/lsa-logo.webp",
    apple: "/images/lsa-logo.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd type="all" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#263443] font-sans antialiased selection:bg-[#B69A6A]/20 selection:text-[#0B1B28]">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
