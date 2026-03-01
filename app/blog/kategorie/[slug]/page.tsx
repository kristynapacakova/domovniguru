"use client";
import React from "react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const CAT_DATA: Record<string, { title: string; emoji: string; color: string; desc: string }> = {
  malovani: { title: "Malování & barvy", emoji: "🎨", color: "#fdf8f3", desc: "Kalkulačky na materiál a návody pro každou stěnu." },
  elektrika: { title: "Elektrika & osvětlení", emoji: "⚡", color: "#f3f7fd", desc: "Bezpečné postupy pro domácí opravy a vylepšení." },
  zahrada: { title: "Zahrada & venkov", emoji: "🌿", color: "#f3fdf4", desc: "Vše pro váš zelený kout, od trávníku po stavby." },
  stehovani: { title: "Stěhování & rekonstrukce", emoji: "🏠", color: "#fbf3fd", desc: "Plánování bez stresu a efektivní proměna bydlení." }
};

export default function CategoryPage({ params }: PageProps) {
  const resolvedParams = React.use(params);
  const slug = resolvedParams?.slug || "malovani";
  const cfg = CAT_DATA[slug] || CAT_DATA.malovani;

  return (
    // Padding-top (pt-24) zajistí, že obsah nebude "pod" tím horním menu, co tam máš
    <div className="min-h-screen bg-white font-sans text-slate-900 pt-24 pb-20">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Decentní drobková navigace */}
        <nav className="flex items-center gap-2 text-[11px] font-bold text-slate-300 uppercase tracking-widest mb-10">
          <Link href="/" className="hover:text-black transition-colors">Domů</Link>
          <span className="opacity-30">/</span>
          <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
        </nav>

        {/* Hero Karta - Čistý Claude styl */}
        <header className="rounded-[40px] p-10 md:p-20 mb-16 relative overflow-hidden border border-slate-100" style={{ backgroundColor: cfg.color }}>
          <div className="max-w-xl relative z-10">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[0.85]">
              {cfg.emoji} <br className="md:hidden" /> {cfg.title}
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed italic opacity-80">
              "{cfg.desc}"
            </p>
          </div>
          <div className="absolute -right-10 -bottom-10 text-[220px] opacity-[0.03] pointer-events-none rotate-12 select-none">
            {cfg.emoji}
          </div>
        </header>

        {/* Seznam článků v čisté mřížce */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="group bg-white border border-slate-100 rounded-[32px] p-8 hover:shadow-2xl hover:border-transparent transition-all duration-500 cursor-pointer">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-slate-50 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter text-slate-400">Návod</span>
                <span className="text-[11px] text-slate-200 font-bold uppercase tracking-widest">10 min čtení</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-600 transition-colors leading-tight">Jak připravit podklad pro {cfg.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-sm font-medium">Než začnete, musíte mít správný základ. Tady je náš osvědčený postup.</p>
              <div className="font-bold text-sm flex items-center gap-2">
                Přečíst návod <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
