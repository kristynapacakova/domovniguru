"use client";
import React from "react";
import Link from "next/link";

// 1. Tady definujeme typy, aby TypeScript (Vercel) neházel chybu
interface CategoryProps {
  params: Promise<{ slug: string }>;
}

const CATEGORIES: Record<string, { n: string; i: string; c: string; d: string }> = {
  malovani: { n: "Malování", i: "🎨", c: "#fdf8f3", d: "Vše o barvách a technikách." },
  elektrika: { n: "Elektrika", i: "⚡", c: "#f3f7fd", d: "Bezpečné kutilství s proudem." },
  zahrada: { n: "Zahrada", i: "🌿", c: "#f3fdf4", d: "Péče o váš venkovní prostor." },
  stehovani: { n: "Stěhování", i: "🏠", c: "#fbf3fd", d: "Tipy pro hladký přesun." }
};

export default function CategoryPage({ params }: CategoryProps) {
  // 2. Použití React.use je pro Next.js 15 povinné
  const resolvedParams = React.use(params);
  const slug = resolvedParams?.slug || "malovani";
  const data = CATEGORIES[slug] || CATEGORIES.malovani;

  return (
    // mt-20 zajistí, že obsah nebude schovaný pod tvým hlavním Headerem
    <div className="min-h-screen bg-white font-sans mt-20 pb-20">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Drobečková navigace bez loga (to už máš v Headeru) */}
        <nav className="flex gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-10">
          <Link href="/" className="hover:text-black">Domů</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-black">Blog</Link>
        </nav>

        {/* Hero sekce v Claude stylu */}
        <header className="rounded-[40px] p-10 md:p-16 mb-12 relative overflow-hidden border border-slate-50" style={{ backgroundColor: data.c }}>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-none">
              {data.i} <br className="md:hidden" /> {data.n}
            </h1>
            <p className="text-xl text-slate-500 font-medium max-w-xl italic">
              {data.d}
            </p>
          </div>
          <div className="absolute -right-10 -bottom-10 text-[200px] opacity-[0.03] rotate-12 pointer-events-none select-none">
            {data.i}
          </div>
        </header>

        {/* Seznam článků */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-[32px] p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer group">
              <div className="text-[10px] font-bold text-slate-300 uppercase mb-4">Návod • Připravujeme</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600">Jak na {data.n} krok za krokem</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">Právě pro vás sepisujeme ty nejlepší tipy, které vám ušetří čas i peníze.</p>
              <div className="font-bold text-sm italic opacity-50">Článek vyjde brzy...</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
