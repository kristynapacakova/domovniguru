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

export default function SpotrebaPlynuCalculator() {
  const [plocha, setPlocha] = useState("100");
  const [spotreba_m2, setSpotreba_m2] = useState("150");
  const [cena_m3, setCena_m3] = useState("28");

  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const kwh_rok = n(plocha) * n(spotreba_m2);
  const m3_rok = kwh_rok / 10;
  const kc_rok = m3_rok * n(cena_m3);

  const copyText = `Vaše domácnost spotřebuje přibližně ${m3_rok.toFixed(0)} m³ plynu/rok (${kc_rok.toFixed(0)} Kč). Spočíteno na DomovniGuru.cz`;

  return (
    <div style={{ background: bg, borderRadius:"16px", padding:"28px 24px", border:`1px solid ${border}`, fontFamily:"inherit" }}>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"4px" }}>
          <span style={{ fontSize:"22px" }}>🔥</span>
          <h3 style={{ margin:0, fontSize:"18px", fontWeight:700, color:"#2a2a28" }}>Kalkulačka spotřeby plynu</h3>
        </div>
        <p style={{ margin:0, fontSize:"13px", color:muted }}>Odhadni roční spotřebu plynu na vytápění a náklady v Kč.</p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))", gap:"14px", marginBottom:"18px" }}>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Vytápěná plocha (m²)</label>
          <input
            type="number" min="0" step="5" value={plocha}
            onChange={e => setPlocha(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Spotřeba tepla (kWh/m²/rok)</label>
          <input
            type="number" min="0" step="10" value={spotreba_m2}
            onChange={e => setSpotreba_m2(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
          <span style={{ fontSize:"11px", color:"#9a9a90", marginTop:"4px" }}>stará budova: 200 / průměrná: 150 / zateplená: 100 / pasiv: 50</span>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
          <label style={labelCss}>Cena plynu (Kč/m³)</label>
          <input
            type="number" min="0" step="0.5" value={cena_m3}
            onChange={e => setCena_m3(e.target.value)}
            style={inputCss}
            onFocus={e => (e.target.style.borderColor = accent)}
            onBlur={e => (e.target.style.borderColor = border)}
          />
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"14px" }}>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Spotřeba tepla</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{kwh_rok.toFixed(0)} kWh/rok</div>
        </div>
        <div style={{ background:"#fff", border:`1px solid ${border}`, borderRadius:"10px", padding:"12px 14px" }}>
          <div style={{ fontSize:"10px", color:muted, fontWeight:700, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"4px" }}>Spotřeba plynu</div>
          <div style={{ fontSize:"20px", fontWeight:700, color:"#2a2a28" }}>{m3_rok.toFixed(0)} m³/rok</div>
        </div>
      </div>

      <div style={{ background:accent, borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"12px" }}>
        <div>
          <div style={{ fontSize:"11px", color:"#a0a090", fontWeight:600, letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"4px" }}>Roční náklady přibližně</div>
          <div style={{ fontSize:"32px", fontWeight:800, color:"#fff", lineHeight:1.1 }}>{kc_rok.toFixed(0)} Kč/rok</div>
          <div style={{ fontSize:"12px", color:"#b0b0a0", marginTop:"4px" }}>{m3_rok.toFixed(0)} m³ × {n(cena_m3)} Kč/m³</div>
        </div>
        <CopyButton text={copyText} />
      </div>

      <div style={{ marginTop:"12px", background:"#fffbf0", border:"1px solid #e8d890", borderRadius:"8px", padding:"10px 14px", fontSize:"12px", color:"#7a6a20", display:"flex", gap:"8px" }}>
        <span>💡</span><span>Zateplení střechy snižuje spotřebu tepla o 20–30 %, zateplení fasády o 30–40 %. Výměna kotlové soustavy za tepelné čerpadlo sníží náklady o 50–70 %.</span>
      </div>
    </div>
  );
}
