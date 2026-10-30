"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Phone, 
  ShieldCheck, 
  Scale, 
  HeartHandshake, 
  FileCheck,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { HERO_SLIDES, SITE_CONFIG } from "@/data/siteData";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section 
      className="relative min-h-[640px] lg:min-h-[700px] text-white overflow-hidden py-16 sm:py-24 lg:py-28 flex items-center bg-[#0B1B28]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero Section"
    >
      {/* Dynamic Background Image Layers with Smooth Transitions */}
      {HERO_SLIDES.map((slide, idx) => {
        if (!mounted && idx !== 0) return null;
        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? "opacity-100 z-0" : "opacity-0 -z-10"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              width={1920}
              height={1080}
              priority={idx === 0}
              fetchPriority={idx === 0 ? "high" : "auto"}
              sizes="100vw"
              className="w-full h-full object-cover object-center lg:object-right scale-105 transition-transform duration-7000 ease-out"
            />
          </div>
        );
      })}

      {/* Layered Gradient Overlays for High Legibility & Professional Feel */}
      {/* 1. Deep Navy to Translucent Gradient (Text readability on left) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B28] via-[#0B1B28]/90 to-[#0B1B28]/40 z-1" />

      {/* 2. Top and Bottom subtle fades */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B28] via-transparent to-[#0B1B28]/60 z-1" />

      {/* 3. Subtle Ambient Warm Accent Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#B69A6A]/15 rounded-full blur-3xl pointer-events-none z-1" />

      {/* Foreground Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-slate-100 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#B69A6A]" />
              <span className="font-semibold tracking-wide">Professional Loan Settlement & Legal Advisory</span>
            </div>

            {/* Dynamic Slider Content */}
            <div className="min-h-[170px] sm:min-h-[200px] flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-sm">
                {HERO_SLIDES[currentSlide].title}
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-[#B69A6A] font-semibold tracking-wide">
                {HERO_SLIDES[currentSlide].subtitle}
              </p>
            </div>

            {/* Subtext description */}
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl drop-shadow-xs">
              Facing unmanageable EMIs, aggressive recovery agents, or accumulating credit card dues? We provide lawful debt resolution solutions, structured negotiations with banks & NBFCs, and dedicated protection from recovery harassment under RBI guidelines.
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[#B69A6A] hover:bg-[#A38756] text-[#0B1B28] px-7 py-3.5 rounded-md font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
              >
                <span>Request Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 bg-black/40 hover:bg-black/60 text-white border border-white/30 px-6 py-3.5 rounded-md font-medium text-sm transition-all backdrop-blur-md"
              >
                <Phone className="w-4 h-4 text-[#B69A6A]" />
                <span>Call {SITE_CONFIG.phone}</span>
              </a>
            </div>

            {/* Slider Controls */}
            <div className="pt-4 flex items-center gap-4">
              <button
                type="button"
                onClick={prevSlide}
                className="p-2 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 text-slate-200 transition-colors backdrop-blur-xs cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div className="flex items-center gap-2">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === idx ? "w-8 bg-[#B69A6A]" : "w-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={nextSlide}
                className="p-2 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 text-slate-200 transition-colors backdrop-blur-xs cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Key Guarantees Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-[#0B1B28]/85 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl space-y-5">
              <div className="border-b border-white/15 pb-4">
                <span className="text-xs uppercase tracking-wider text-[#B69A6A] font-semibold">Legal & Transparent</span>
                <h2 className="text-xl font-bold text-white mt-1">Why Borrowers Trust Our Advisory</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#B69A6A]/20 text-[#B69A6A] flex-shrink-0 mt-0.5">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">RBI Fair Practice Compliance</h3>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      All communications and settlement negotiations strictly follow Reserve Bank of India guidelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#B69A6A]/20 text-[#B69A6A] flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Harassment Protection Support</h3>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Immediate legal guidance to protect you and your family from aggressive collection agents.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#B69A6A]/20 text-[#B69A6A] flex-shrink-0 mt-0.5">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Direct Lender Negotiation</h3>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Strategic talks with credit card companies, private banks, and NBFCs for maximum legal waiver.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#B69A6A]/20 text-[#B69A6A] flex-shrink-0 mt-0.5">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Official Written NOC & Closure</h3>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                      Full transparency with official settlement letters, no dues certificates, and credit rebuilding roadmap.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                <span>⚡ Free Case Assessment</span>
                <span>🔒 100% Confidential</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
