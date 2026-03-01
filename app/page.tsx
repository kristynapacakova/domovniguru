"use client";
import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#1c1917] font-sans pb-24">
      {/* 1. HERO SEKCE - Horní nápis */}
      <section className="max-w-[1100px] mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-black/20 mb-6 block">
              Praktický průvodce domácností
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-4">
              Méně přemýšlení,<br />
              <span className="text-black/30 italic font-medium">více hotovo.</span>
            </h1>
          </div>
          <div className="flex gap-3">
            <button className="bg-[#1c1917] text-white px-8 py-4 rounded-2xl font-bold text-sm hover:scale-105 transition-transform">
              KALKULAČKY →
            </button>
            <button className="bg-[#f8f8f8] border border-black/5 px-8 py-4 rounded-2xl font-bold text-sm hover:bg-black/5 transition-colors">
              NÁVODY
            </button>
          </div>
        </div>

        <div className="w-full h-[1px] bg-black/5 mb-20" />

        {/* 2. SEKCE KALKULAČKY - Ty čisté karty s emoji */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-black/30">Kalkulačky materiálu</h2>
          <Link href="/kalkulacky" className="text-[11px] font-bold text-black/40 hover:text-black transition-colors underline underline-offset-4">Všechny kalkulačky →</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {[
            { t: "Kolik barvy potřebuji?", e: "🪣", d: "Plocha, vrstvy, litry. Bez přemýšlení." },
            { t: "Kolik laminátu potřebuji?", e: "📐", d: "m² + rezerva + počet balení." },
            { t: "Kolik dlažby potřebuji?", e: "🧱", d: "Plocha, spáry, odpad. Přesně na balení." },
            { t: "Kolik betonu potřebuji?", e: "🏗️", d: "Objem, pytlů nebo m³ hotového betonu." },
            { t: "Kolik tapet potřebuji?", e: "🌿", d: "Obvod místnosti, výška, počet rolí." },
            { t: "Kolik tepelné izolace?", e: "💧", d: "Plocha stěny, tloušťka, počet desek." },
          ].map((item, i) => (
            <div key={i} className="group bg-white border border-[#f0f0f0] rounded-[32px] p-8 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:border-black/10 transition-all duration-500 cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-[#f8f8f8] flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform">
                {item.e}
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-black/20 mb-2 block">Kalkulačka</span>
              <h3 className="text-lg font-bold mb-2 leading-tight group-hover:text-blue-600 transition-colors">{item.t}</h3>
              <p className="text-sm text-black/40 font-medium mb-6 leading-relaxed">{item.d}</p>
              <div className="text-[10px] font-black uppercase tracking-widest flex items-center gap-1">Spustit <span className="group-hover:translate-x-1 transition-transform">→</span></div>
            </div>
          ))}
        </div>

        {/* 3. SEKCE NÁVODY */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-black/30">Návody krok za krokem</h2>
          <Link href="/blog" className="text-[11px] font-bold text-black/40 hover:text-black transition-colors underline underline-offset-4">Všechny návody →</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t: "Jak vyčistit sifon?", e: "🔧", m: "10 min", d: "Smradí odpad nebo pomalu odtéká? Vyřeš to za 10 minut." },
            { t: "Jak utěsnit vanu silikonem?", e: "🚿", m: "30 min", d: "Plíseň ve spáře nebo zatékání? Krok za krokem." },
            { t: "Jak nastavit okna na zimu?", e: "🪟", m: "15 min", d: "Přetočení kování = teplejší byt a nižší účty." },
          ].map((item, i) => (
            <div key={i} className="group bg-white border border-[#f0f0f0] rounded-[32px] p-8 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 cursor-pointer">
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-xl bg-[#f8f8f8] flex items-center justify-center text-xl italic">{item.e}</div>
                <span className="text-[10px] font-bold text-black/20 italic uppercase tracking-widest">⏱ {item.m}</span>
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest text-black/20 mb-2 block">Návod</span>
              <h3 className="text-lg font-bold mb-4 leading-tight group-hover:text-indigo-600 transition-colors">{item.t}</h3>
              <p className="text-sm text-black/40 font-medium leading-relaxed">
                {item.d}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
