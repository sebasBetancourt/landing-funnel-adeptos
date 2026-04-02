// app/audit/page.tsx

"use client";

import Link from "next/link";
import AuditForm from "@/presentation/components/organisms/AuditForm";
import TopBar from "@/presentation/components/organisms/TopBar";
import Navbar from "@/presentation/components/organisms/Navbar";

export default function AuditPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1C2120] selection:bg-primary selection:text-black font-sans text-white overflow-x-hidden">
      
      {/* 1. Official Header & Logo Consistency */}
      <div className="relative z-50 w-full flex flex-col">
        <TopBar />
        <Navbar />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center py-16 px-6 relative">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Form Context & Hero Text */}
        <div className="text-center space-y-6 mb-12 relative z-10">
           <div className="flex items-center justify-center gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} className="text-primary text-xl">★</span>
              ))}
              <span className="text-[10px] font-black uppercase tracking-[0.4em] ml-2 text-white/40">Premium AI Strategy Audit</span>
           </div>
           
           <h1 className="text-5xl md:text-7xl font-brand font-black uppercase text-white leading-[0.8] tracking-tighter">
              AUDIT <span className="text-primary italic">APPLICATION</span>
           </h1>
           
           <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl mx-auto">
              Please provide the following data to accurately identify and quantify the revenue gaps in your current sales workflow.
           </p>
        </div>

        {/* Multi-Step Form */}
        <div className="w-full relative z-10">
           <AuditForm />
        </div>

        {/* Authority & Security */}
        <div className="mt-20 text-center space-y-6 pb-12 relative z-10">
           <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center grayscale opacity-40">
                 <img src="/img/LOGO.png" alt="Adeptos" className="w-6 h-6 object-contain" />
              </div>
              <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30">
                Official Adeptos Agency Ecosystem
              </p>
           </div>
           
           <div className="flex items-center justify-center gap-10 opacity-10 grayscale group">
              <span className="text-[8px] font-black tracking-widest hover:opacity-100 transition-opacity">SSL SECURE 256-BIT</span>
              <span className="text-[8px] font-black tracking-widest hover:opacity-100 transition-opacity">DATA ENCRYPTED</span>
              <span className="text-[8px] font-black tracking-widest hover:opacity-100 transition-opacity">GDPR COMPLIANT</span>
           </div>
        </div>

      </main>

    </div>
  );
}
