"use client";
import React from "react";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

const CAT_DATA: Record<string, { n: string; i: string; c: string; d: string }> = {
  malovani: { n: "Malování & barvy", i: "🎨", c: "bg-orange-50", d: "Jak vybrat barvu, vymalovat strop a ušetřit za profíky." },
  elektrika: { n: "Elektrika & světlo", i: "⚡", c: "bg-blue-50", d: "Bezpečné návody pro výměnu zásuvek i instalaci LED pásků." },
  zahrada: { n: "Zahrada & terasa", i: "🌿", c: "bg-green-50", d: "Vše od péče o trávník až po stavbu pergoly." },
  stehovani: { n: "Stěhování", i: "🏠", c: "bg-purple-50", d: "Checklisty a tipy, jak se nezbláznit při změně bydlení." },
  "sezonni-udrzba": { n: "Sezónní údržba", i: "❄️", c: "bg-stone-100", d: "Příprava domu na zimu, čištění okapů a revize jističů." }
};

export default function CategoryPage({ params }: Props) {
  const resolvedParams = React.use(params);
  const slug = resolvedParams?.slug || "malovani";
  const d = CAT_DATA[slug] || CAT_DATA.malovani;

  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#1c1917] font-sans">
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Moderní Hero sekce */}
        <header className={`${d.c} border border-black/5 rounded-[40px] p-8 md:p-16 mb-12 flex flex-col md:flex-row items-center justify-between overflow-hidden relative`}>
          <div className="relative z-10 text-center md:text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-4 block">Kategorie</span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">{d.i} {d.n}</h1>
            <p className="text-lg text-black/60 max-w-md leading-relaxed">{d.d}</p>
          </div>
          <div className="text-[160px] opacity-10 absolute -right-10 -bottom-10 rotate-12 hidden md:block">
            {d.i}
          </div>
        </header>

        {/* Mřížka s články (zatím ukázka) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="group bg-white border border-black/5 rounded-[32px] p-8 hover:border-black transition-all duration-300 cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Návod</span>
                <span className="text-sm text-black/40 font-medium">5 min čtení</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:underline decoration-2">Připravujeme první článek pro {d.n}</h3>
              <p className="text-black/50 mb-8 leading-relaxed">Tento článek už brzy zaplní tuhle sekci praktickými radami, které vám ušetří čas i peníze.</p>
              <div className="font-bold flex items-center gap-2">
                Přečíst návod <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Patička kategorie */}
        <footer className="mt-20 pt-10 border-t border-black/5 text-center">
          <Link href="/blog" className="text-sm font-bold opacity-30 hover:opacity-100 transition-opacity uppercase tracking-widest">
            ← Zpět na všechny kategorie
          </Link>
        </footer>

      </div>
    </div>
  );
}
