"use client";
import React from "react";
import Link from "next/link";

// Oprava pro tvůj TypeScript error ze screenshotů
type Props = {
  params: Promise<{ slug: string }>;
};

const CAT_CONFIG: Record<string, { title: string; emoji: string; color: string; desc: string }> = {
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
  const resolvedParams = React.use(params);
  const slug = resolvedParams?.slug || "malovani";
  const cfg = CAT_CONFIG[slug] || CAT_CONFIG.malovani;

  return (
    <div className="min-h-screen bg-white font-sans text-[#1c1917]">
      {/* Hlavní kontejner jako na tvém screenshotu */}
      <div className="max-w-[1100px] mx-auto px-6 py-12">
        
        {/* Horní navigace v uhlazeném stylu */}
        <nav className="flex items-center gap-2 text-[13px] font-medium text-black/40 uppercase tracking-wider mb-12">
          <Link href="/" className="hover:text-black transition-colors">Domů</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-black/80">{cfg.title}</span>
        </nav>

        {/* Hero sekce s ikonou */}
        <header className={`${cfg.color} rounded-[32px] p-12 md:p-20 mb-16 border border-black/[0.03] relative overflow-hidden`}>
          <div className="max-w-2xl relative z-10">
            <div className="text-sm font-bold text-black/30 uppercase tracking-[0.2em] mb-6">Praktický průvodce</div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
              {cfg.emoji} {cfg.title}
            </h1>
            <p className="text-lg md:text-xl text-black/50 leading-relaxed font-medium">
              {cfg.desc}
            </p>
          </div>
          {/* Velké deco emoji v pozadí */}
          <div className="absolute -right-10 -bottom-10 text-[240px] opacity-[0.03] pointer-events-none select-none rotate-12">
            {cfg.emoji}
          </div>
        </header>

        {/* Sekce s články - čisté bílé karty s jemným stínem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group bg-white border border-[#ececec] rounded-2xl p-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-black/10 transition-all duration-500 cursor-pointer">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center text-lg">{cfg.emoji}</div>
                   <span className="text-[11px] font-bold uppercase tracking-widest text-black/40">Návod • 10 min</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 leading-snug group-hover:text-black">
                Jak efektivně plánovat projekt v sekci {cfg.title}
              </h3>
              <p className="text-black/40 leading-relaxed mb-8">
                Pár základních pravidel, která vám ušetří polovinu času a spoustu zbytečných nákupů materiálu.
              </p>
              <div className="flex items-center gap-2 font-bold text-sm">
                Otevřít návod <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Spodní rozcestník */}
        <footer className="mt-24 pt-12 border-t border-[#f0f0f0] flex justify-between items-center">
          <Link href="/blog" className="text-[13px] font-bold text-black/40 hover:text-black transition-colors uppercase tracking-widest">
            ← Ostatní kategorie
          </Link>
          <div className="text-[13px] font-bold text-black/20 uppercase tracking-widest">
            DomovníGuru 2026
          </div>
        </footer>

      </div>
    </div>
  );
}
