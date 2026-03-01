"use client";
import React from "react";
import Link from "next/link";

// --- OPRAVA PRO TYPESCRIPT (Vercel Build) ---
type Props = {
  params: Promise<{ slug: string }>;
};

const CATEGORIES = {
  malovani: { title: "Malování & barvy", emoji: "🎨", color: "bg-[#fdf8f3]", desc: "Kalkulačky na materiál, návody krok za krokem a checklisty pro každou stěnu." },
  elektrika: { title: "Elektrika & osvětlení", emoji: "⚡", color: "bg-[#f3f7fd]", desc: "Bezpečné postupy pro domácí opravy a vylepšení elektroinstalace." },
  zahrada: { title: "Zahrada & venkov", emoji: "🌿", color: "bg-[#f3fdf4]", desc: "Vše pro váš zelený kout, od trávníku po zahradní stavby." },
  stehovani: { title: "Stěhování & rekonstrukce", emoji: "🏠", color: "bg-[#fbf3fd]", desc: "Plánování bez stresu a efektivní proměna vašeho bydlení." }
};

export default function CategoryPage({ params }: Props) {
  // --- OPRAVA PRO NEXT.JS 15 (Vercel Build) ---
  const resolvedParams = React.use(params);
  const slug = resolvedParams?.slug || "malovani";
  const cfg = CATEGORIES[slug as keyof typeof CATEGORIES] || CATEGORIES.malovani;

  return (
    <div className="min-h-screen bg-white font-sans text-[#1c1917]">
      <div className="max-w-[1100px] mx-auto px-6 py-12 lg:py-20">
        
        {/* Navigace */}
        <nav className="flex items-center gap-2 text-[11px] font-bold text-black/20 uppercase tracking-[0.2em] mb-12">
          <Link href="/" className="hover:text-black transition-colors">Domů</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-black/60">{cfg.title}</span>
        </nav>

        {/* Hero sekce - PŘESNĚ JAKO NA SCREENSHOTU */}
        <header className={`${cfg.color} rounded-[48px] p-12 md:p-24 mb-16 relative overflow-hidden border border-black/[0.02]`}>
          <div className="max-w-2xl relative z-10">
            <div className="inline-block px-4 py-1 rounded-full bg-white/50 text-[10px] font-bold uppercase tracking-widest text-black/30 mb-8">
              Kategorie
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-[#1c1917] mb-8 leading-[0.85]">
              {cfg.emoji} <br className="md:hidden" /> {cfg.title}
            </h1>
            <p className="text-xl md:text-2xl text-black/40 leading-relaxed font-medium">
              {cfg.desc}
            </p>
          </div>
          <div className="absolute -right-20 -bottom-20 text-[320px] opacity-[0.03] pointer-events-none select-none rotate-12">
            {cfg.emoji}
          </div>
        </header>

        {/* Mřížka článků */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="group bg-white border border-[#f0f0f0] rounded-[40px] p-10 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] hover:border-black transition-all duration-500 cursor-pointer">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-[#f8f8f8] flex items-center justify-center text-xl">{cfg.emoji}</div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/20 leading-none mb-1">Příprava</span>
                  <span className="text-[11px] font-bold text-black/40 italic">10 min čtení</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-[#1c1917] mb-4 leading-tight group-hover:underline decoration-2 underline-offset-8">
                Jak připravit podklad pro {cfg.title}
              </h3>
              <p className="text-black/30 text-lg leading-relaxed mb-10 font-medium">
                Základem každého úspěšného projektu je příprava. Ukážeme vám, na co nezapomenout.
              </p>
              <div className="flex items-center gap-2 font-black text-xs uppercase tracking-widest">
                Přečíst návod <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
