"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  ShieldCheck,
  CreditCard,
  UserCheck,
  Building2,
  Smartphone,
  Home as HomeIcon,
  Landmark,
  Car,
  GraduationCap,
  TrendingUp,
  ShieldAlert
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

const SERVICE_LINKS = [
  { href: "/services/loan-settlement-services", label: "Loan Settlement Services", icon: ShieldCheck },
  { href: "/services/personal-loan-settlement", label: "Personal Loan Settlement", icon: UserCheck },
  { href: "/services/credit-card-debt-settlement", label: "Credit Card Debt Settlement", icon: CreditCard },
  { href: "/services/business-loan-settlement", label: "Business Loan Settlement", icon: Building2 },
  { href: "/services/application-based-loan-settlement", label: "Application Based Loan Settlement", icon: Smartphone },
  { href: "/services/home-loan-settlement", label: "Home Loan Settlement", icon: HomeIcon },
  { href: "/services/loan-against-property-settlement", label: "Loan Against Property Settlement", icon: Landmark },
  { href: "/services/vehicle-loan-settlement", label: "Vehicle Loan Settlement", icon: Car },
  { href: "/services/education-loan-settlement", label: "Education Loan Settlement", icon: GraduationCap },
  { href: "/services/credit-rebuilding", label: "Credit Rebuilding", icon: TrendingUp },
  { href: "/services/anti-harassment-support", label: "Anti Harassment Support", icon: ShieldAlert },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  return (
    <header className="w-full sticky top-0 z-50 bg-white transition-all duration-200">
      {/* Top Notification / Info Bar */}
      <div className="bg-[#0B1B28] text-white text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-y-2">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <a 
              href={`tel:${SITE_CONFIG.phoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-[#B69A6A] transition-colors"
              aria-label="Call Loan Settlement Expert"
            >
              <Phone className="w-3.5 h-3.5 text-[#B69A6A]" />
              <span>{SITE_CONFIG.phone}</span>
            </a>
            <a 
              href={`mailto:${SITE_CONFIG.email}`} 
              className="hidden sm:flex items-center gap-1.5 hover:text-[#B69A6A] transition-colors"
              aria-label="Email Loan Settlement Expert"
            >
              <Mail className="w-3.5 h-3.5 text-[#B69A6A]" />
              <span>{SITE_CONFIG.email}</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#B69A6A]" />
              <span>{SITE_CONFIG.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden lg:inline text-slate-400">Legal Debt Resolution Advisory & Anti-Harassment Support</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-[#B69A6A]/20 text-[#B69A6A] border border-[#B69A6A]/30">
              PAN-India Support
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-200 ${scrolled ? "shadow-md bg-white/95 backdrop-blur-md py-2.5" : "py-3.5"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group focus:outline-none" aria-label="Loan Settlement Expert Home">
            <div className="relative w-44 sm:w-56 h-12 sm:h-14">
              <Image
                src="/images/lsa-logo.webp"
                alt="Loan Settlement Expert"
                fill
                priority
                sizes="(max-width: 640px) 176px, 224px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/" ? "text-[#142B3B] font-semibold bg-slate-100" : "text-[#263443] hover:text-[#142B3B] hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/about" ? "text-[#142B3B] font-semibold bg-slate-100" : "text-[#263443] hover:text-[#142B3B] hover:bg-slate-50"
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`px-3 py-2 text-sm font-medium rounded-md inline-flex items-center gap-1 transition-colors ${
                  pathname.startsWith("/services") ? "text-[#142B3B] font-semibold bg-slate-100" : "text-[#263443] hover:text-[#142B3B] hover:bg-slate-50"
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Mega Dropdown Menu */}
              {servicesOpen && (
                <div className="absolute left-0 top-full w-80 sm:w-96 bg-white rounded-lg shadow-xl border border-slate-100 py-2 mt-1 z-50 animate-in fade-in-50 zoom-in-95 duration-150">
                  <div className="px-4 py-2 border-b border-slate-100 bg-slate-50">
                    <p className="text-xs font-semibold text-[#142B3B] uppercase tracking-wider">Our Debt Resolution Services</p>
                    <p className="text-[11px] text-[#687482]">Lawful, structured settlement for unmanageable debt</p>
                  </div>
                  <div className="py-1 max-h-[420px] overflow-y-auto">
                    {SERVICE_LINKS.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`flex items-center gap-3 px-4 py-2.5 text-xs sm:text-sm transition-colors ${
                            isActive ? "bg-amber-50 text-[#142B3B] font-medium" : "text-[#263443] hover:bg-slate-50 hover:text-[#142B3B]"
                          }`}
                        >
                          <Icon className="w-4 h-4 text-[#B69A6A] flex-shrink-0" />
                          <span className="truncate">{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/testimonials"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/testimonials" ? "text-[#142B3B] font-semibold bg-slate-100" : "text-[#263443] hover:text-[#142B3B] hover:bg-slate-50"
              }`}
            >
              Client Testimonials
            </Link>

            <Link
              href="/faq"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/faq" ? "text-[#142B3B] font-semibold bg-slate-100" : "text-[#263443] hover:text-[#142B3B] hover:bg-slate-50"
              }`}
            >
              FAQs
            </Link>

            <Link
              href="/blog"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname.startsWith("/blog") ? "text-[#142B3B] font-semibold bg-slate-100" : "text-[#263443] hover:text-[#142B3B] hover:bg-slate-50"
              }`}
            >
              Blog
            </Link>

            <Link
              href="/join-our-team"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/join-our-team" ? "text-[#142B3B] font-semibold bg-slate-100" : "text-[#263443] hover:text-[#142B3B] hover:bg-slate-50"
              }`}
            >
              Join Our Team
            </Link>
          </nav>

          {/* Desktop Consultation CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#142B3B] hover:bg-[#0B1B28] text-white px-5 py-2.5 rounded-md text-sm font-medium transition-all shadow-sm hover:shadow group border border-[#142B3B]"
            >
              <span>Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#B69A6A] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              href="/contact"
              className="bg-[#142B3B] text-white px-3 py-1.5 rounded text-xs font-medium"
            >
              Consult
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-black hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[92px] z-40 bg-white border-t border-slate-200 overflow-y-auto animate-in slide-in-from-top duration-200 pb-12">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/"
              className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                pathname === "/" ? "bg-slate-100 text-[#142B3B] font-semibold" : "text-[#263443]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                pathname === "/about" ? "bg-slate-100 text-[#142B3B] font-semibold" : "text-[#263443]"
              }`}
            >
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium text-[#263443] hover:bg-slate-50"
              >
                <span>Debt Resolution Services</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 pr-2 py-2 space-y-1 bg-slate-50 rounded-lg mt-1">
                  {SERVICE_LINKS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-3 py-2 text-sm rounded ${
                        pathname === item.href ? "text-[#142B3B] font-semibold bg-white" : "text-[#263443]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/testimonials"
              className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                pathname === "/testimonials" ? "bg-slate-100 text-[#142B3B] font-semibold" : "text-[#263443]"
              }`}
            >
              Client Testimonials
            </Link>

            <Link
              href="/faq"
              className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                pathname === "/faq" ? "bg-slate-100 text-[#142B3B] font-semibold" : "text-[#263443]"
              }`}
            >
              FAQs
            </Link>

            <Link
              href="/blog"
              className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                pathname.startsWith("/blog") ? "bg-slate-100 text-[#142B3B] font-semibold" : "text-[#263443]"
              }`}
            >
              Blog
            </Link>

            <Link
              href="/join-our-team"
              className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                pathname === "/join-our-team" ? "bg-slate-100 text-[#142B3B] font-semibold" : "text-[#263443]"
              }`}
            >
              Join Our Team
            </Link>

            <div className="pt-4 border-t border-slate-200 mt-4 space-y-3">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 bg-[#142B3B] text-white py-3 rounded-md text-sm font-semibold"
              >
                <span>Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#B69A6A]" />
              </Link>

              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 bg-slate-100 text-[#142B3B] py-2.5 rounded-md text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-[#B69A6A]" />
                <span>Call {SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
