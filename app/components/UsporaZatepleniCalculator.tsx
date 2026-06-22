"use client";

import { useState } from "react";

const bg = "#f8f4f0";
const accent = "#3a3a38";
const border = "#e8e0d8";
const muted = "#8a8a80";
const labelCss: React.CSSProperties = { display:"block", fontSize:"11px", fontWeight:700, letterSpacing:"0.07em", textTransform:"uppercase", color:"#6a6a60", marginBottom:"6px" };
const inputCss: React.CSSProperties = { width:"100%", padding:"10px 14px", border:`1.5px solid ${border}`, borderRadius:"8px", fontSize:"15px", background:"#fff", color:"#2a2a28", outline:"none", boxSizing:"border-box", transition:"border-color 150ms" };

const ROZSAHY = [
  { value: "fasada",               label: "Zateplení fasády (EPS/minerální vata)", uspora: 20 },
  { value: "fasada_strecha",       label: "Fasáda + střecha/půda",                uspora: 33 },
  { value: "fasada_strecha_okna",  label: "Fasáda + střecha + okna",              uspora: 42 },
  { value: "komplexni",            label: "Komplex (fasáda + střecha + okna + podlaha)", uspora: 50 },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); } catch { /* fallback */ }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy} title="Zkopírovat výsledek" style={{ background:"none", border:"none", cursor:"pointer", fontSize:"16px", padding:"2px 6px", borderRadius:"6px", color: copied ? "#3a9a6f" : muted, transition:"color 200ms" }}>
      {copied ? "✓ Zkopírováno!" : "📋"}
    </button>
  );
}

export default function UsporaZatepleniCalculator() {
  const [naklady, setNaklady] = useState("40000");
  const [rozsah, setRozsah] = useState("fasada");
  const [cenaZatepleni, setCenaZatepleni] = useState("300000");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const vybranýRozsah = ROZSAHY.find(r => r.value === rozsah) ?? ROZSAHY[0];
  const usporaProcent = vybranýRozsah.uspora;

  const rocni_uspora = n(naklady) * (usporaProcent / 100);
  const nove_naklady = n(naklady) - rocni_uspora;
  const navratnost = rocni_uspora > 0 ? n(cenaZatepleni) / rocni_uspora : Infinity;

  const copyText = `Po zateplení (${vybranýRozsah.label}) ušetříte přibližně ${rocni_uspora.toFixed(0)} Kč ročně. Investice se vrátí za ${navratnost.toFixed(1)} let. Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>🏠</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka úspory zateplení</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Spočítej roční úsporu po zateplení a zjisti dobu návratnosti investice.</p>
      </div>

      <div style={{ display:"flex", flexDirection:"column", gap:"16px", marginBottom:"18px" }}>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Aktuální roční náklady na vytápění (Kč)</label>
          <input
            type="number" min="0" step="1000" value={naklady}
            onChange={e => setNaklady(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
        </div>

        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Rozsah zateplení</label>
          <select
            value={rozsah}
            onChange={e => setRozsah(e.target.value)}
            style={{ ...inputCss, cursor:"pointer" }}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          >
            {ROZSAHY.map(r => (
              <option key={r.value} value={r.value}>{r.label} (–{r.uspora} %)</option>
            ))}
          </select>
        </div>

        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Odhadovaná cena zateplení (Kč)</label>
          <input
            type="number" min="0" step="10000" value={cenaZatepleni}
            onChange={e => setCenaZatepleni(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
          <span style={{ fontSize:"12px", color:muted, marginTop:"5px" }}>Orientačně: fasáda rodinného domu 200–500 Kč/m²</span>
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Roční úspora</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{rocni_uspora.toFixed(0)} Kč</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Nové roční náklady</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{nove_naklady.toFixed(0)} Kč</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Výsledek</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>Ušetříte {rocni_uspora.toFixed(0)} Kč ročně</div>
          <div style={{ fontSize:"12px", color:"#b0b0a0", marginTop:"4px" }}>
            {isFinite(navratnost)
              ? `Investice se vrátí za ${navratnost.toFixed(1)} let`
              : "Zadejte náklady na vytápění pro výpočet návratnosti"}
          </div>
        </div>
        <CopyButton text={copyText} />
      </div>

      {isFinite(navratnost) && navratnost > 30 && (
        <div style={{ marginTop:"10px", background:"#fff8e6", border:"1px solid #f0d080", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a5a10", display:"flex", gap:"8px" }}>
          <span>⚠️</span><span>Při současných nákladech je návratnost dlouhá – zvažte, zda se zateplení vyplatí.</span>
        </div>
      )}

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Skutečná úspora závisí na stavu stávající izolace, druhu vytápění a kvalitě provedení. Dotace NZÚ mohou výrazně zkrátit dobu návratnosti.</span>
      </div>
    </div>
  );
}
