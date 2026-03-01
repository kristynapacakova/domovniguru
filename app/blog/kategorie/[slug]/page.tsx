"use client";
import React from "react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const CAT_CONFIG: Record<string, { title: string; emoji: string; color: string; desc: string }> = {
  malovani: { 
    title: "Malování & barvy", 
    emoji: "🎨", 
    color: "#fdf8f3", 
    desc: "Kalkulačky na materiál, návody krok za krokem a checklisty." 
  },
  elektrika: { 
    title: "Elektrika & osvětlení", 
    emoji: "⚡", 
    color: "#f3f7fd", 
    desc: "Bezpečné postupy pro domácí opravy a vylepšení instalace." 
  },
  zahrada: { 
    title: "Zahrada & venkov", 
    emoji: "🌿", 
    color: "#f3fdf4", 
    desc: "Vše pro váš zelený kout, od trávníku po zahradní stavby." 
  },
  stehovani: { 
    title: "Stěhování", 
    emoji: "🏠", 
    color: "#fbf3fd", 
    desc: "Plánování bez stresu a efektivní proměna vašeho bydlení." 
  }
};

export default function CategoryPage({ params }: PageProps) {
  const resolvedParams = React.use(params);
  const slug = resolvedParams?.slug || "malovani";
  const cfg = CAT_CONFIG[slug] || CAT_CONFIG.malovani;

  return (
    <div className="pt-12 pb-24">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Drobečková navigace */}
        <nav className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em] mb-10">
          <Link href="/" className="hover:text-black transition-colors">Domů</Link>
          <span className="opacity-30">/</span>
          <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
          <span className="opacity-30">/</span>
          <span className="text-slate-900">{cfg.title}</span>
        </nav>

        {/* Hero sekce (Claude styl) */}
        <header className="rounded-[40px] p-12 md:p-20 mb-16 relative overflow-hidden" style={{ backgroundColor: cfg.color }}>
          <div className="max-w-xl relative z-10">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-8 leading-[0.9]">
              {cfg.emoji} <br className="md:hidden" /> {cfg.title}
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed italic opacity-80">
              {cfg.desc}
            </p>
          </div>
          {/* Dekorace v pozadí */}
          <div className="absolute -right-10 -bottom-10 text-[250px] opacity-[0.03] pointer-events-none rotate-12 select-none">
            {cfg.emoji}
          </div>
        </header>

        {/* Seznam článků - čisté bílé karty */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="group bg-white border border-slate-100 rounded-[32px] p-8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:border-slate-200 transition-all duration-500 cursor-pointer">
              <div className="flex items-center gap-3 mb-8">
                <span className="bg-slate-50 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter text-slate-400">Návod</span>
                <span className="text-[11px] text-slate-200 font-bold uppercase tracking-widest italic">Připravujeme</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-blue-600 transition-colors">Jak na to: {cfg.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-sm font-medium">Právě pro vás tvoříme ty nejlepší návody. Už brzy zde najdete první článek.</p>
              <div className="font-bold text-sm flex items-center gap-2">
                Číst návod <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
