"use client";
import React from "react";
import Link from "next/link";

// 1. TYPY - Tohle řeší tvůj error "implicitly has an any type" ze screenshotů
interface PageProps {
  params: Promise<{ slug: string }>;
}

const CAT_CONFIG: Record<string, { title: string; emoji: string; color: string; desc: string }> = {
  malovani: { 
    title: "Malování & barvy", 
    emoji: "🎨", 
    color: "bg-[#fdf8f3]", 
    desc: "Kalkulačky na materiál a návody pro každou stěnu." 
  },
  elektrika: { 
    title: "Elektrika & osvětlení", 
    emoji: "⚡", 
    color: "bg-[#f3f7fd]", 
    desc: "Bezpečné postupy pro domácí opravy a vylepšení." 
  },
  zahrada: { 
    title: "Zahrada & venkov", 
    emoji: "🌿", 
    color: "bg-[#f3fdf4]", 
    desc: "Vše pro váš zelený kout, od trávníku po stavby." 
  },
  stehovani: { 
    title: "Stěhování & rekonstrukce", 
    emoji: "🏠", 
    color: "bg-[#fbf3fd]", 
    desc: "Plánování bez stresu a efektivní proměna bydlení." 
  }
};

export default function CategoryPage({ params }: PageProps) {
  // 2. ROZBALENÍ PARAMS - Nutné pro Next.js 15+ (řeší chyby v logu)
  const resolvedParams = React.use(params);
  const slug = resolvedParams?.slug || "malovani";
  const cfg = CAT_CONFIG[slug] || CAT_CONFIG.malovani;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <div className="max-w-[1000px] mx-auto px-6 py-12 lg:py-20">
        
        {/* Navigace - jemná a čistá */}
        <nav className="flex items-center gap-2 text-[11px] font-bold text-slate-300 uppercase tracking-[0.2em] mb-12">
          <Link href="/" className="hover:text-black transition-colors">Domů</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
        </nav>

        {/* Hero sekce - Ten Claude styl s barvami */}
        <header className={`${cfg.color} rounded-[40px] p-10 md:p-20 mb-16 relative overflow-hidden border border-black/[0.02]`}>
          <div className="max-w-
