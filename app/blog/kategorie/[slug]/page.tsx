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
  stehovani: { title: "Stěhování & rekonstrukce", emoji: "🏠", color: "#fbf3fd", desc: "Plánování bez stresu a efektivní proměna." }
};

export default function CategoryPage({ params }: PageProps) {
  const resolvedParams = React.use(params);
  const slug = resolvedParams?.slug || "malovani";
  const cfg = CAT_DATA[slug] || CAT_DATA.malovani;

  return (
    // mt-16 vytvoří mezeru pod tvým hlavním Headerem, aby se to nelepilo
    <div className="min-h-screen bg-white font-sans text-slate-900 mt-16 pb-20">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Drobečková navigace - jemná, aby nerušila hlavní Header */}
        <nav className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-black transition-colors">Domů</Link>
          <span className="opacity-30">/</span>
          <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
          <span className="opacity-30">/</span>
          <span className="text-slate-400">{cfg.title}</span>
        </nav>

        {/* Hlavní pastelová karta (Claude Style) */}
        <header className="rounded-[40px] p-10 md:p-16 mb-12 relative overflow-hidden border border-slate-50" style={{ backgroundColor: cfg.color }}>
          <div className="max-w-xl relative z-10">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 leading-tight">
              {cfg.emoji} {cfg.title}
            </h1>
            <p className="text-lg text-slate-500 font-medium leading-relaxed opacity-90">
              {cfg.desc}
            </p>
          </div>
          <div className="absolute -right-10 -bottom-10 text-[180px] opacity-[0.04] pointer-events-none rotate-12 select-none">
            {cfg.emoji}
          </div>
        </header>

        {/* Mřížka s články */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="group bg-white border border-slate-100 rounded-[32px] p-8 hover:shadow-xl hover:border-transparent transition-all duration-500 cursor-pointer">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-slate-50 text-[10px] font-bold px-3 py-1 rounded-full uppercase text-slate-400">Návod</span>
                <span className="text-[10px] text-slate-200 font-bold uppercase tracking-widest italic">Nová sekce</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 transition-colors leading-tight">Průvodce sekcí {cfg.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-sm">Právě pro vás sepisujeme ty nejlepší tipy a triky. Už brzy zde najdete první článek.</p>
              <div className="font-bold text-sm flex items-center gap-2">
                Otevřít <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
