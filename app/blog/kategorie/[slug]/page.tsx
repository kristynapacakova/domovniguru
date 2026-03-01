"use client";
import React from "react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const CAT_CONFIG: Record<string, { title: string; emoji: string; color: string; desc: string }> = {
  malovani: { title: "Malování & barvy", emoji: "🎨", color: "#fdf8f3", desc: "Kalkulačky na materiál, návody krok za krokem a checklisty pro každou stěnu." },
  elektrika: { title: "Elektrika & osvětlení", emoji: "⚡", color: "#f3f7fd", desc: "Bezpečné postupy pro domácí opravy a vylepšení elektroinstalace." },
  zahrada: { title: "Zahrada & venkov", emoji: "🌿", color: "#f3fdf4", desc: "Vše pro váš zelený kout, od trávníku po zahradní stavby." },
  stehovani: { title: "Stěhování", emoji: "🏠", color: "#fbf3fd", desc: "Plánování bez stresu a efektivní proměna vašeho bydlení." }
};

export default function CategoryPage({ params }: PageProps) {
  const resolvedParams = React.use(params);
  const slug = resolvedParams?.slug || "malovani";
  const cfg = CAT_CONFIG[slug] || CAT_CONFIG.malovani;

  return (
    // "bg-white" a "text-slate-900" tady přebijí to černé pozadí z globals.css
    <div className="min-h-screen bg-white text-[#1c1917] font-sans pb-20 overflow-x-hidden">
      <div className="max-w-[1100px] mx-auto px-6 pt-32">
        
        {/* Drobková navigace - jemná jako na screenshotu */}
        <nav className="flex items-center gap-2 text-[11px] font-bold text-black/20 uppercase tracking-[0.2em] mb-12">
          <Link href="/" className="hover:text-black">Domů</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-black">Blog</Link>
          <span>/</span>
          <span className="text-black/60">{cfg.title}</span>
        </nav>

        {/* Hero sekce - Ta velká barevná karta ze screenshotu */}
        <header className="rounded-[48px] p-12 md:p-24 mb-16 relative overflow-hidden border border-black/[0.02]" style={{ backgroundColor: cfg.color }}>
          <div className="max-w-2xl relative z-10">
            <div className="inline-block px-4 py-1 rounded-full bg-white/60 text-[10px] font-bold uppercase tracking-widest text-black/30 mb-8">
              Kategorie
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.85] text-[#1c1917]">
              {cfg.emoji} <br className="md:hidden" /> {cfg.title}
            </h1>
            <p className="text-xl md:text-2xl text-black/40 leading-relaxed font-medium italic">
              "{cfg.desc}"
            </p>
          </div>
          {/* Obří emoji v pozadí */}
          <div className="absolute -right-20 -bottom-20 text-[320px] opacity-[0.03] pointer-events-none select-none rotate-12">
            {cfg.emoji}
          </div>
        </header>

        {/* Mřížka s články - Identické karty jako na fotkách */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {[1, 2].map((i) => (
            <div key={i} className="group bg-white border border-[#f0f0f0] rounded-[40px] p-10 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] hover:border-black/10 transition-all duration-500 cursor-pointer">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-[#f8f8f8] flex items-center justify-center text-2xl shadow-sm italic">
                  {cfg.emoji}
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/20 mb-1 leading-none">NÁVOD</span>
                  <span className="text-[11px] font-bold text-black/30">10 min čtení</span>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-[#1c1917] mb-4 leading-tight group-hover:underline decoration-2 underline-offset-8 transition-all">
                Jak připravit podklad pro {cfg.title}
              </h3>
              
              <p className="text-black/30 text-lg leading-relaxed mb-10 font-medium">
                Základem každého úspěšného projektu je příprava. Ukážeme vám, na co nezapomenout, aby výsledek vydržel roky.
              </p>
              
              <div className="flex items-center gap-2 font-black text-[11px] uppercase tracking-widest text-black">
                PŘEČÍST NÁVOD <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
