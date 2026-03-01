"use client";
import React from "react";
import Link from "next/link";

// 1. Typy pro TypeScript (řeší error z tvých fotek)
type Props = {
  params: Promise<{ slug: string }>;
};

// 2. Data pro kategorie (barvy a texty laděné podle tvého screenshotu)
const CAT_DATA: Record<string, { title: string; emoji: string; color: string; desc: string }> = {
  malovani: { 
    title: "Malování & barvy", 
    emoji: "🎨", 
    color: "bg-[#fdf8f3]", 
    desc: "Kalkulačky na materiál, návody krok za krokem a checklisty pro každou stěnu." 
  },
  elektrika: { 
    title: "Elektrika & osvětlení", 
    emoji: "⚡", 
    color: "bg-[#f3f7fd]", 
    desc: "Bezpečné postupy pro domácí opravy a vylepšení elektroinstalace." 
  },
  zahrada: { 
    title: "Zahrada & venkov", 
    emoji: "🌿", 
    color: "bg-[#f3fdf4]", 
    desc: "Vše pro váš zelený kout, od trávníku po zahradní stavby." 
  },
  stehovani: { 
    title: "Stěhování & rekonstrukce", 
    emoji: "🏠", 
    color: "bg-[#fbf3fd]", 
    desc: "Plánování bez stresu a efektivní proměna vašeho bydlení." 
  }
};

export default function CategoryPage({ params }: Props) {
  // Rozbalení parametrů pro Next.js 15+
  const resolvedParams = React.use(params);
  const slug = resolvedParams?.slug || "malovani";
  const cfg = CAT_DATA[slug] || CAT_DATA.malovani;

  return (
    <div className="min-h-screen bg-white">
      {/* Hlavní kontejner s max. šířkou pro uhlazený vzhled */}
      <div className="max-w-[1100px] mx-auto px-6 py-12 lg:py-20 font-sans">
        
        {/* Navigace */}
        <nav className="flex items-center gap-2 text-[12px] font-bold text-slate-300 uppercase tracking-[0.15em] mb-12">
          <Link href="/" className="hover:text-black transition-colors">Domů</Link>
          <span className="opacity-50">/</span>
          <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
          <span className="opacity-50">/</span>
          <span className="text-slate-900">{cfg.title}</span>
        </nav>

        {/* Hero sekce - Ta velká barevná karta */}
        <header className={`${cfg.color} rounded-[48px] p-10 md:p-24 mb-16 relative overflow-hidden border border-black/[0.02]`}>
          <div className="max-w-2xl relative z-10">
            <div className="inline-block px-4 py-1 rounded-full bg-white/50 text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-8">
              Kategorie
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-8 leading-[0.9]">
              {cfg.emoji} <br className="md:hidden" /> {cfg.title}
            </h1>
            <p className="text-lg md:text-2xl text-slate-500/80 leading-relaxed font-medium">
              {cfg.desc}
            </p>
          </div>
          {/* Dekorace v pozadí */}
          <div className="absolute -right-20 -bottom-20 text-[300px] opacity-[0.04] pointer-events-none select-none rotate-12">
            {cfg.emoji}
          </div>
        </header>

        {/* Mřížka s články - čisté bílé karty s jemným stínem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="group bg-white border border-slate-100 rounded-[32px] p-8 md:p-10 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:border-slate-200 transition-all duration-500 cursor-pointer">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-sm">{cfg.emoji}</div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Návod • 10 min čtení</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                Jak připravit podklad pro {cfg.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-10 font-medium">
                Základem každého úspěšného projektu je příprava. Ukážeme vám, na co nezapomenout, aby výsledek vydržel roky.
              </p>
              <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                Přečíst návod <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
