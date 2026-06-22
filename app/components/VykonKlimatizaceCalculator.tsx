"use client";

import { useState } from "react";

const bg = "#f8f4f0";
const accent = "#3a3a38";
const border = "#e8e0d8";
const muted = "#8a8a80";
const labelCss: React.CSSProperties = { display:"block", fontSize:"11px", fontWeight:700, letterSpacing:"0.07em", textTransform:"uppercase", color:"#6a6a60", marginBottom:"6px" };
const inputCss: React.CSSProperties = { width:"100%", padding:"10px 14px", border:`1.5px solid ${border}`, borderRadius:"8px", fontSize:"15px", background:"#fff", color:"#2a2a28", outline:"none", boxSizing:"border-box", transition:"border-color 150ms" };

const STANDARD_SIZES = [2.0, 2.5, 3.2, 3.5, 4.5, 5.5, 7.0];

function roundToStandardSize(kw: number): number {
  for (const size of STANDARD_SIZES) {
    if (size >= kw) return size;
  }
  return STANDARD_SIZES[STANDARD_SIZES.length - 1];
}

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

export default function VykonKlimatizaceCalculator() {
  const [plocha, setPlocha] = useState("20");
  const [vyska, setVyska] = useState("2.7");
  const [orientace, setOrientace] = useState<"sever" | "jih/západ" | "východ">("sever");
  const [osluneni, setOsluneni] = useState<"normální" | "silně osluněná" | "stinná">("normální");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const ploca_n = n(plocha);
  const vyska_n = n(vyska);

  const orientaceFactor: Record<string, number> = { "sever": 0.9, "východ": 1.0, "jih/západ": 1.15 };
  const oslunEniFactor: Record<string, number> = { "stinná": 0.85, "normální": 1.0, "silně osluněná": 1.2 };

  const baseLoad = ploca_n * vyska_n * 30;
  const watts = baseLoad * orientaceFactor[orientace] * oslunEniFactor[osluneni];
  const kw = watts / 1000;
  const btu = watts * 3.412;
  const standardKw = roundToStandardSize(kw);

  const copyText = `Pro místnost ${ploca_n} m² doporučujeme klimatizaci ${standardKw.toFixed(1)} kW (${Math.round(btu)} BTU). Spočítáno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>❄️</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka výkonu klimatizace</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Zjistěte, jaký výkon klimatizace potřebujete pro vaši místnost.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"14px", marginBottom:"14px" }}>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Plocha místnosti (m²)</label>
          <input
            type="number" min="5" step="1" value={plocha}
            onChange={e => setPlocha(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Výška stropu (m)</label>
          <input
            type="number" min="2" step="0.1" value={vyska}
            onChange={e => setVyska(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"14px", marginBottom:"20px" }}>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Orientace</label>
          <select
            value={orientace}
            onChange={e => setOrientace(e.target.value as "sever" | "jih/západ" | "východ")}
            style={{ ...inputCss, cursor:"pointer" }}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          >
            <option value="sever">Sever</option>
            <option value="jih/západ">Jih / západ</option>
            <option value="východ">Východ</option>
          </select>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Míra oslunění</label>
          <select
            value={osluneni}
            onChange={e => setOsluneni(e.target.value as "normální" | "silně osluněná" | "stinná")}
            style={{ ...inputCss, cursor:"pointer" }}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          >
            <option value="normální">Normální</option>
            <option value="silně osluněná">Silně osluněná</option>
            <option value="stinná">Stinná</option>
          </select>
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Potřebný výkon</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{kw.toFixed(1)} kW</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Doporučená velikost</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{standardKw.toFixed(1)} kW</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>BTU</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{Math.round(btu)}</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Doporučujeme</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>Doporučujeme {standardKw.toFixed(1)} kW jednotku</div>
          <div style={{ fontSize:"12px", color:"#b0b0a0", marginTop:"4px" }}>{ploca_n} m² · {vyska_n} m strop · {Math.round(btu)} BTU</div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Výsledek je orientační. Pro přesný výpočet zohledněte také tepelné mosty, počet oken a přítomnost spotřebičů.</span>
      </div>
    </div>
  );
}
