"use client";

import { useState } from "react";

const bg = "#f8f4f0";
const accent = "#3a3a38";
const border = "#e8e0d8";
const muted = "#8a8a80";
const labelCss: React.CSSProperties = { display:"block", fontSize:"11px", fontWeight:700, letterSpacing:"0.07em", textTransform:"uppercase", color:"#6a6a60", marginBottom:"6px" };
const inputCss: React.CSSProperties = { width:"100%", padding:"10px 14px", border:`1.5px solid ${border}`, borderRadius:"8px", fontSize:"15px", background:"#fff", color:"#2a2a28", outline:"none", boxSizing:"border-box", transition:"border-color 150ms" };

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

export default function SolarniPanelyCalculator() {
  const [spotreba, setSpotreba]     = useState("4000");
  const [vyrobnost, setVyrobnost]   = useState("420");
  const [cena_kwh, setCena_kwh]     = useState("5.5");
  const [cena_kwp, setCena_kwp]     = useState("45000");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  // 1 panel = 0.4 kWp
  const pocet = Math.ceil(n(spotreba) / n(vyrobnost));
  const vyrobnost_total = pocet * n(vyrobnost);
  const pokryti = Math.min(100, Math.round((vyrobnost_total / n(spotreba)) * 100));
  const investice = pocet * 0.4 * n(cena_kwp);
  const uspora = Math.min(n(spotreba), vyrobnost_total) * n(cena_kwh);
  const navratnost = uspora > 0 ? investice / uspora : 0;

  const copyText = `Vaše domácnost potřebuje ${pocet} solárních panelů (pokrytí ${pokryti} %, úspora ${uspora.toFixed(0)} Kč/rok, návratnost ${navratnost.toFixed(1)} let). Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>☀️</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka solárních panelů</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Zjisti kolik solárních panelů pokryje spotřebu tvé domácnosti.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))", gap:"14px", marginBottom:"18px" }}>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Roční spotřeba elektřiny (kWh/rok)</label>
          <input type="number" min="0" step="100" value={spotreba}
            onChange={(e) => setSpotreba(e.target.value)}
            style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
          <span style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>průměrná domácnost: 3 000–5 000 kWh</span>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Výroba panelu (kWh/rok/panel)</label>
          <input type="number" min="0" step="10" value={vyrobnost}
            onChange={(e) => setVyrobnost(e.target.value)}
            style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
          <span style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>jih/JV/JZ: 400–450 / západ/východ: 320–370</span>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Cena elektřiny (Kč/kWh)</label>
          <input type="number" min="0" step="0.1" value={cena_kwh}
            onChange={(e) => setCena_kwh(e.target.value)}
            style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Cena instalace (Kč/kWp)</label>
          <input type="number" min="0" step="1000" value={cena_kwp}
            onChange={(e) => setCena_kwp(e.target.value)}
            style={inputCss}
            onFocus={e=>(e.target.style.borderColor=accent)}
            onBlur={e=>(e.target.style.borderColor=border)} />
          <span style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>průměr v ČR 2026: 40 000–55 000 Kč/kWp</span>
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Počet panelů</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{pocet} ks</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Pokrytí spotřeby</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{pokryti} %</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Roční úspora</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{uspora.toFixed(0)} Kč</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Návratnost</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{navratnost.toFixed(1)} let</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Potřebujete přibližně</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{pocet} solárních panelů</div>
          <div style={{ fontSize:"12px", color:"#b0b0a0", marginTop:"4px" }}>investice ~{Math.round(investice/1000)}k Kč · návratnost {navratnost.toFixed(1)} let</div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Výpočet zahrnuje vlastní spotřebu. Přebytkovou elektřinu prodáte do sítě za 2–3 Kč/kWh nebo uložíte do baterie. S baterií vzroste pokrytí na 70–90 %.</span>
      </div>
    </div>
  );
}
