"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, ShieldCheck, AlertCircle, RefreshCw } from "lucide-react";

// Indian currency formatter
function formatINR(val: number): string {
  if (isNaN(val) || val < 0) return "₹0";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(val);
}

export default function LoanCalculator() {
  const [ccDebt, setCcDebt] = useState<number>(150000);
  const [plDebt, setPlDebt] = useState<number>(250000);
  const [tenure, setTenure] = useState<number>(6);
  const [missedEmi, setMissedEmi] = useState<"yes" | "no">("yes");
  const [hasCalculated, setHasCalculated] = useState<boolean>(true);

  // Core verified formula from original site:
  // settlement = total * 0.5 (50% waiver/settlement baseline)
  // savings = total - settlement
  // emi = settlement / months
  const totalDebt = Math.max(0, (Number(ccDebt) || 0) + (Number(plDebt) || 0));
  const settlementAmount = Math.round(totalDebt * 0.5);
  const totalSavings = totalDebt - settlementAmount;
  const monthlyEmi = tenure > 0 ? Math.round(settlementAmount / tenure) : 0;

  // Percentage for svg circular graph
  const settlementPercent = totalDebt > 0 ? Math.round((settlementAmount / totalDebt) * 100) : 50;
  const savingsPercent = totalDebt > 0 ? Math.round((totalSavings / totalDebt) * 100) : 50;

  const handleReset = () => {
    setCcDebt(150000);
    setPlDebt(250000);
    setTenure(6);
    setMissedEmi("yes");
    setHasCalculated(true);
  };

  return (
    <section id="loan-calculator" className="py-16 sm:py-20 bg-[#F7F8FA] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142B3B]/10 text-[#142B3B] text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#B69A6A]" />
            <span>Debt Settlement Estimator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#142B3B] tracking-tight">
            Expert Loan Settlement Solutions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#687482]">
            Calculate your estimated loan waiver, manageable monthly settlement EMI, and debt-free timeline based on typical settlement patterns.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Inputs (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-200">
              <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
                <h3 className="text-lg font-semibold text-[#142B3B]">Enter Your Debt Details</h3>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-[#687482] hover:text-[#142B3B] font-medium"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset Values</span>
                </button>
              </div>

              <div className="space-y-6">
                
                {/* 1. Credit Card Debt */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="ccDebt" className="text-sm font-medium text-[#263443]">
                      Your Credit Card Debt
                    </label>
                    <span className="text-sm font-bold text-[#142B3B] bg-slate-100 px-3 py-1 rounded-md">
                      {formatINR(ccDebt)}
                    </span>
                  </div>
                  <input
                    id="ccDebt"
                    type="range"
                    min="0"
                    max="1000000"
                    step="5000"
                    value={ccDebt}
                    onChange={(e) => setCcDebt(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#142B3B]"
                  />
                  <div className="flex justify-between text-[11px] text-[#687482] mt-1">
                    <span>₹0</span>
                    <span>₹5,00,000</span>
                    <span>₹10,00,000+</span>
                  </div>
                </div>

                {/* 2. Personal Loan Debt */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="plDebt" className="text-sm font-medium text-[#263443]">
                      Your Personal Loan Debt
                    </label>
                    <span className="text-sm font-bold text-[#142B3B] bg-slate-100 px-3 py-1 rounded-md">
                      {formatINR(plDebt)}
                    </span>
                  </div>
                  <input
                    id="plDebt"
                    type="range"
                    min="0"
                    max="1500000"
                    step="5000"
                    value={plDebt}
                    onChange={(e) => setPlDebt(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#142B3B]"
                  />
                  <div className="flex justify-between text-[11px] text-[#687482] mt-1">
                    <span>₹0</span>
                    <span>₹7,50,000</span>
                    <span>₹15,00,000+</span>
                  </div>
                </div>

                {/* 3. Tenure */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="tenure" className="text-sm font-medium text-[#263443]">
                      Preferred Settlement Tenure
                    </label>
                    <span className="text-sm font-bold text-[#142B3B] bg-slate-100 px-3 py-1 rounded-md">
                      {tenure} Months
                    </span>
                  </div>
                  <input
                    id="tenure"
                    type="range"
                    min="6"
                    max="36"
                    step="1"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#B69A6A]"
                  />
                  <div className="flex justify-between text-[11px] text-[#687482] mt-1">
                    <span>6 Months (Default)</span>
                    <span>18 Months</span>
                    <span>36 Months</span>
                  </div>
                </div>

                {/* 4. Missed EMI */}
                <div>
                  <label className="block text-sm font-medium text-[#263443] mb-2">
                    Missed any EMI in the last 3 months?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label 
                      className={`flex items-center justify-center p-3 rounded-lg border text-sm font-medium cursor-pointer transition-all ${
                        missedEmi === "yes" 
                          ? "border-[#142B3B] bg-[#142B3B] text-white shadow-sm" 
                          : "border-slate-200 bg-slate-50 text-[#263443] hover:bg-slate-100"
                      }`}
                    >
                      <input
                        type="radio"
                        name="missedEmi"
                        value="yes"
                        checked={missedEmi === "yes"}
                        onChange={() => setMissedEmi("yes")}
                        className="sr-only"
                      />
                      <span>Yes, Facing Default</span>
                    </label>

                    <label 
                      className={`flex items-center justify-center p-3 rounded-lg border text-sm font-medium cursor-pointer transition-all ${
                        missedEmi === "no" 
                          ? "border-[#142B3B] bg-[#142B3B] text-white shadow-sm" 
                          : "border-slate-200 bg-slate-50 text-[#263443] hover:bg-slate-100"
                      }`}
                    >
                      <input
                        type="radio"
                        name="missedEmi"
                        value="no"
                        checked={missedEmi === "no"}
                        onChange={() => setMissedEmi("no")}
                        className="sr-only"
                      />
                      <span>No, But Stressed</span>
                    </label>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => setHasCalculated(true)}
                    className="w-full sm:w-auto flex-1 bg-[#142B3B] hover:bg-[#0B1B28] text-white py-3.5 px-6 rounded-md font-semibold text-sm transition-colors shadow-sm text-center"
                  >
                    Show My Calculation
                  </button>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#B69A6A] hover:bg-[#A38756] text-[#0B1B28] py-3.5 px-6 rounded-md font-semibold text-sm transition-colors shadow-sm"
                  >
                    <span>Contact Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </div>

            {/* Right Overview & Chart (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-50 to-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="pb-4 border-b border-slate-200">
                  <span className="text-xs uppercase font-semibold text-[#B69A6A] tracking-wider">Estimated Analysis</span>
                  <h3 className="text-xl font-bold text-[#142B3B] mt-0.5">Settlement Overview</h3>
                </div>

                {/* Donut Chart Visualization (SVG) */}
                <div className="py-6 flex flex-col items-center">
                  <div className="relative w-44 h-44 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#E2E7EC"
                        strokeWidth="12"
                        fill="transparent"
                      />
                      {/* Savings slice (Muted Gold) */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#B69A6A"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray={`${(savingsPercent * 251.2) / 100} 251.2`}
                        strokeDashoffset="0"
                        strokeLinecap="round"
                        className="transition-all duration-500"
                      />
                      {/* Settlement slice (Primary Navy) */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#142B3B"
                        strokeWidth="12"
                        fill="transparent"
                        strokeDasharray={`${(settlementPercent * 251.2) / 100} 251.2`}
                        strokeDashoffset={`-${(savingsPercent * 251.2) / 100}`}
                        strokeLinecap="round"
                        className="transition-all duration-500"
                      />
                    </svg>

                    {/* Center Info */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
                      <span className="text-[11px] text-[#687482] uppercase tracking-wider font-medium">Monthly EMI</span>
                      <span className="text-base sm:text-lg font-bold text-[#142B3B]">
                        {formatINR(monthlyEmi)}
                      </span>
                      <span className="text-[10px] text-emerald-600 font-semibold">50% Avg Savings</span>
                    </div>
                  </div>

                  {/* Chart Legend */}
                  <div className="flex items-center gap-4 mt-4 text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#142B3B]"></span>
                      <span className="text-[#263443]">Settlement ({settlementPercent}%)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#B69A6A]"></span>
                      <span className="text-[#263443]">Waiver / Savings ({savingsPercent}%)</span>
                    </div>
                  </div>
                </div>

                {/* Stat Cards */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white p-3.5 rounded-lg border border-slate-200 text-center shadow-xs">
                    <p className="text-[11px] font-medium text-[#687482]">Total Savings</p>
                    <p className="text-base sm:text-lg font-bold text-emerald-700 mt-0.5">
                      {formatINR(totalSavings)}
                    </p>
                  </div>
                  <div className="bg-white p-3.5 rounded-lg border border-slate-200 text-center shadow-xs">
                    <p className="text-[11px] font-medium text-[#687482]">Debt Free In</p>
                    <p className="text-base sm:text-lg font-bold text-[#142B3B] mt-0.5">
                      {tenure} Months
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    *Estimates based on past settlement trends. Actual settlement may vary depending on lender policy, loan age, and financial assessment.
                  </p>
                </div>
              </div>

              {/* Consultation trigger */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 bg-[#142B3B] hover:bg-[#0B1B28] text-white py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Apply for Verified Settlement</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B69A6A]" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
