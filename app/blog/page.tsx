"use client";
import { useState } from "react";

// app/blog/page.tsx

const ARTICLES = [
  { id:1, cat:"malovani", catLabel:"Malování & barvy", icon:"🎨", title:"Jak malovat zeď – kompletní průvodce pro začátečníky", desc:"Krok za krokem: příprava podkladu, nátěr, výběr barvy. Bez chyb, bez přemalování.", slug:"jak-malovat-zed", read:"5 min" },
  { id:2, cat:"malovani", catLabel:"Malování & barvy", icon:"🎨", title:"Kolik barvy potřebuji? Kalkulačka + vzorec", desc:"Spočítej přesné množství barvy na místnost. Vzorec, tipy na rezervu a výběr správné barvy.", slug:"kolik-barvy-potrebuji", read:"3 min" },
  { id:3, cat:"malovani", catLabel:"Malování & barvy", icon:"🎨", title:"Latexová vs. akrylátová barva – jaký je rozdíl?", desc:"Srovnání dvou nejpopulárnějších barev na zeď. Co kdy použít, kde šetřit a kde ne.", slug:"latexova-vs-akrylatova-barva", read:"4 min" },
  { id:4, cat:"malovani", catLabel:"Malování & barvy", icon:"🎨", title:"Jak odstranit starou barvu ze zdi", desc:"Škrabka, teplovzdušná pistole nebo chemie? Porovnání metod a postup krok za krokem.", slug:"jak-odstranit-barvu", read:"7 min" },
  { id:5, cat:"elektrika", catLabel:"Elektrika & osvětlení", icon:"⚡", title:"Výměna zásuvky svépomocí: Na co si dát pozor", desc:"Bezpečnost na prvním místě. Jak bezpečně vyměnit starou zásuvku za novou.", slug:"vymena-zasuvky", read:"6 min" },
  { id:6, cat:"elektrika", catLabel:"Elektrika & osvětlení", icon:"⚡", title:"Jak vybrat správnou LED žárovku (Kelviny a Lumeny)", desc:"Teplá nebo studená bílá? Kolik wattů je dost? Průvodce moderním osvětlením.", slug:"jak-vybrat-led-zarovku", read:"4 min" },
];

const CATS = [
  { key: "vse", label: "Vše", count: 6 },
  { key: "malovani", label: "🎨 Malování", count: 4 },
  { key: "elektrika", label: "⚡ Elektrika", count: 2 },
  { key: "zahrada", label: "🌿 Zahrada", count: 0 },
  { key: "stehovani", label: "🏠 Stěhování", count: 0 },
];

export default function BlogPage() {
  const [activeCat, setActiveCat] = useState("vse");
  const [search, setSearch] = useState("");

  const filtered = ARTICLES.filter(a => {
    const matchesCat = activeCat === "vse" || a.cat === activeCat;
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase()) || 
                         a.desc.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fafaf9] font-sans text-[#1c1917] p-6 md:p-12">
      <style jsx>{`
        .blog-container { max-width: 1000px; margin: 0 auto; }
        .blog-header { margin-bottom: 60px; }
        .blog-title { font-size: 48px; font-weight: 800; letter-spacing: -0.02em; margin-bottom: 16px; }
        .blog-desc { color: #78716c; font-size: 18px; max-width: 600px; }
        .filters { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 40px; align-items: center; justify-content: space-between; }
        .cat-tabs { display: flex; gap: 8px; flex-wrap: wrap; }
        .cat-tab { padding: 8px 16px; border-radius: 99px; background: white; border: 1px solid #e7e5e4; font-size: 14px; font-weight: 600; cursor: pointer; }
        .cat-tab.active { background: #1c1917; color: white; border-color: #1c1917; }
        .search-input { padding: 10px 20px; border-radius: 99px; border: 1px solid #e7e5e4; outline: none; width: 250px; font-size: 14px; }
        .articles-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 32px; }
        .article-card { background: white; border: 1px solid #e7e5e4; border-radius: 24px; padding: 32px; text-decoration: none; color: inherit; transition: all 0.3s; display: flex; flex-direction: column; }
        .article-card:hover { transform: translateY(-4px); border-color: #a8a29e; }
        .cat-pill { background: #f5f5f4; padding: 4px 10px; font-size: 10px; font-bold uppercase; border-radius: 6px; color: #78716c; }
      `}</style>

      <div className="blog-container">
        <header className="blog-header">
          <h1 className="blog-title">Rady a návody</h1>
          <p className="blog-desc">Vše, co potřebuješ vědět o údržbě domova na jednom místě.</p>
        </header>

        <div className="filters">
          <div className="cat-tabs">
            {CATS.map(c => (
              <button key={c.key} className={`cat-tab${activeCat === c.key ? " active" : ""}`} onClick={() => setActiveCat(c.key)}>
                {c.label}
              </button>
            ))}
          </div>
          <input className="search-input" placeholder="Hledat článek…" value={search} onChange={e => setSearch(e.target.value)} />
        </div>

        <div className="articles-grid">
          {filtered.map(a => (
            <a key={a.id} className="article-card" href={`/blog/${a.slug}`}>
              <div className="flex justify-between mb-4">
                <span className="cat-pill">{a.catLabel}</span>
                <span className="text-xs text-gray-400">⏱ {a.read}</span>
              </div>
              <div className="text-xl font-bold mb-2">{a.title}</div>
              <div className="text-sm text-gray-600 mb-6 flex-grow">{a.desc}</div>
              <div className="font-bold border-t pt-4">Číst →</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}